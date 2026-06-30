// API que expone las tasas extraídas con Playwright.
// El apartado Inversiones de Aprende llama a estos endpoints cuando se define
// VITE_RATES_API (por ejemplo: VITE_RATES_API=http://localhost:4000/api/tasas).
//
//   GET /api/tasas/cdt        -> { lastUpdated, colombia:[...], mundo:[...] }
//   GET /api/tasas/hipotecas  -> { lastUpdated, colombia:[...], mundo:[...] }
//
// El scraping es costoso, así que se cachea el resultado (TTL configurable).
const express = require('express')
const cors = require('cors')
const { scrapeCdt, scrapeHipotecas, scrapeExchangeRates } = require('./scraper')

const app = express()
app.use(cors()) // permite que el front (otro puerto) consuma la API

const TTL_MS = 30 * 60 * 1000 // 30 minutos
const cache = {} // { cdt: { data, ts }, hipotecas: {...} }

async function servir(tipo, fn, res) {
  try {
    const ahora = Date.now()
    if (cache[tipo] && ahora - cache[tipo].ts < TTL_MS) {
      return res.json({ ...cache[tipo].data, cached: true })
    }
    const data = await fn()
    cache[tipo] = { data, ts: ahora }
    res.json(data)
  } catch (e) {
    res.status(500).json({ message: 'Error al extraer tasas: ' + e.message })
  }
}

app.get('/api/tasas/cdt', (req, res) => servir('cdt', scrapeCdt, res))
app.get('/api/tasas/hipotecas', (req, res) => servir('hipotecas', scrapeHipotecas, res))
app.get('/api/tasas/cambio', (req, res) => servir('cambio', scrapeExchangeRates, res))

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Scraper de tasas en http://localhost:${PORT}/api/tasas`))
