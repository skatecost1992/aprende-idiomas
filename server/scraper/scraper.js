// Scraper de tasas con Playwright (robusto).
// Por cada fuente: rota el user-agent, bloquea recursos pesados, espera el
// contenido (incluido el dinámico), reintenta ante fallos y respeta una pausa
// de cortesía entre peticiones. Si una fuente falla, esa entrada queda con
// tasa = null y el resto continúa.
const { chromium } = require('playwright')
const { cdtSources, hipotecaSources, exchangeRateSources, RATE_REGEX, FX_RATE_REGEX } = require('./sources')

const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:125.0) Gecko/20100101 Firefox/125.0',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36 Edg/124.0',
]
const RETRIES = 2          // reintentos por fuente
const NAV_TIMEOUT = 30000  // ms para cargar la página
const WAIT_TIMEOUT = 10000 // ms para esperar el contenido
const DELAY_MS = 1500      // pausa de cortesía entre peticiones

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const randomUA = () => USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)]

function parseRate(texto, regex) {
  if (!texto) return null
  const m = texto.match(regex || RATE_REGEX)
  return m ? parseFloat(m[1].replace(',', '.')) : null
}

// Extrae la tasa de una fuente en un contexto aislado (UA propio).
async function extractFrom(browser, s) {
  const context = await browser.newContext({ userAgent: randomUA(), locale: 'es-CO' })
  const page = await context.newPage()
  // Acelera y aligera: no descarga imágenes, fuentes ni multimedia.
  await page.route('**/*', (route) => {
    const tipo = route.request().resourceType()
    if (tipo === 'image' || tipo === 'font' || tipo === 'media') route.abort()
    else route.continue()
  })
  try {
    await page.goto(s.url, { waitUntil: 'domcontentloaded', timeout: NAV_TIMEOUT })
    let texto
    if (s.selector) {
      // Espera explícita: cubre contenido cargado por JavaScript.
      await page.waitForSelector(s.selector, { timeout: WAIT_TIMEOUT })
      texto = await page.locator(s.selector).first().innerText()
    } else {
      await page.waitForLoadState('networkidle', { timeout: WAIT_TIMEOUT }).catch(() => {})
      texto = await page.evaluate(() => document.body.innerText)
    }
    return parseRate(texto, s.regex)
  } finally {
    await context.close()
  }
}

async function withRetries(fn) {
  let lastErr
  for (let intento = 0; intento <= RETRIES; intento++) {
    try {
      return await fn()
    } catch (e) {
      lastErr = e
      await sleep(800 * (intento + 1)) // backoff incremental
    }
  }
  throw lastErr
}

async function scrapeGroup(browser, fuentes) {
  const out = []
  for (const s of fuentes) {
    const base = { entidad: s.entidad, pais: s.pais, plazo: s.plazo, moneda: s.moneda, fuente: s.url }
    try {
      const tasa = await withRetries(() => extractFrom(browser, s))
      out.push({ ...base, tasa })
    } catch (e) {
      out.push({ ...base, tasa: null, error: e.message })
    }
    await sleep(DELAY_MS) // cortesía con el sitio
  }
  return out
}

async function scrape(sources) {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] })
  try {
    const colombia = await scrapeGroup(browser, sources.colombia || [])
    const mundo = await scrapeGroup(browser, sources.mundo || [])
    return { lastUpdated: new Date().toISOString().slice(0, 10), colombia, mundo }
  } finally {
    await browser.close()
  }
}

const scrapeCdt = () => scrape(cdtSources)
const scrapeHipotecas = () => scrape(hipotecaSources)

// Extrae la tasa de cambio de una sola fuente de Google Finance.
// Intenta primero el atributo `data-last-price`; si no existe, aplica FX_RATE_REGEX
// sobre el texto visible de la página.
async function extractFxRate(browser, s) {
  const context = await browser.newContext({ userAgent: randomUA(), locale: 'es-CO' })
  const page = await context.newPage()
  await page.route('**/*', (route) => {
    const tipo = route.request().resourceType()
    if (tipo === 'image' || tipo === 'font' || tipo === 'media') route.abort()
    else route.continue()
  })
  try {
    await page.goto(s.url, { waitUntil: 'domcontentloaded', timeout: NAV_TIMEOUT })
    // Intento 1: atributo data-last-price (Google Finance lo expone en el DOM).
    const viaAtrib = await page.evaluate(() => {
      const el = document.querySelector('[data-last-price]')
      return el ? parseFloat(el.getAttribute('data-last-price')) : null
    })
    if (viaAtrib != null && !isNaN(viaAtrib)) return viaAtrib
    // Intento 2: regex sobre el texto completo de la página.
    await page.waitForLoadState('networkidle', { timeout: WAIT_TIMEOUT }).catch(() => {})
    const texto = await page.evaluate(() => document.body.innerText)
    return parseRate(texto, FX_RATE_REGEX)
  } finally {
    await context.close()
  }
}

async function scrapeExchangeRates() {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] })
  const rates = []
  try {
    for (const s of exchangeRateSources) {
      const base = { moneda: s.moneda, nombre: s.nombre, bandera: s.bandera }
      try {
        const tasa = await withRetries(() => extractFxRate(browser, s))
        rates.push({ ...base, tasa })
      } catch (e) {
        rates.push({ ...base, tasa: null, error: e.message })
      }
      await sleep(DELAY_MS)
    }
  } finally {
    await browser.close()
  }
  return { lastUpdated: new Date().toISOString().slice(0, 10), rates }
}

module.exports = { scrapeCdt, scrapeHipotecas, scrapeExchangeRates }
