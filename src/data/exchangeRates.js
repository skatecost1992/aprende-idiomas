// Tasas de cambio COP (peso colombiano) frente a monedas extranjeras.
// ⚠️ VALORES DE REFERENCIA – no son tasas en vivo.
// El botón "Actualizar" consulta el scraper Playwright (server/scraper)
// que extrae las tasas reales de Google Finance.

export const DISCLAIMER =
  'Tasas de referencia con fines informativos. Las tasas reales varían según el intermediario financiero. Verifica siempre con tu banco o casa de cambio antes de operar.'

export const FUENTES = [
  { nombre: 'Google Finance', url: 'https://www.google.com/finance/' },
  { nombre: 'Banco de la República', url: 'https://www.banrep.gov.co' },
  { nombre: 'Superfinanciera – TRM', url: 'https://www.superfinanciera.gov.co' },
]

// 1 unidad de la moneda extranjera expresada en COP (valores aproximados de referencia).
export const exchangeRatesSeed = {
  lastUpdated: '2026-06-19',
  rates: [
    { moneda: 'USD', nombre: 'Dólar americano',   bandera: '🇺🇸', tasa: 4152.30 },
    { moneda: 'EUR', nombre: 'Euro',               bandera: '🇪🇺', tasa: 4618.75 },
    { moneda: 'GBP', nombre: 'Libra esterlina',    bandera: '🇬🇧', tasa: 5398.40 },
    { moneda: 'CHF', nombre: 'Franco suizo',       bandera: '🇨🇭', tasa: 5102.90 },
    { moneda: 'CAD', nombre: 'Dólar canadiense',   bandera: '🇨🇦', tasa: 3064.15 },
    { moneda: 'AUD', nombre: 'Dólar australiano',  bandera: '🇦🇺', tasa: 2735.80 },
    { moneda: 'BRL', nombre: 'Real brasileño',     bandera: '🇧🇷', tasa: 756.20  },
    { moneda: 'CNY', nombre: 'Yuan chino',         bandera: '🇨🇳', tasa: 576.45  },
    { moneda: 'MXN', nombre: 'Peso mexicano',      bandera: '🇲🇽', tasa: 224.65  },
    { moneda: 'JPY', nombre: 'Yen japonés',        bandera: '🇯🇵', tasa: 27.85   },
  ],
}
