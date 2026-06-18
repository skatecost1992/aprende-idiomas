// Consulta de tasas en vivo.
//
// Un navegador no puede hacer scraping de los bancos directamente (lo impide la
// política CORS y la falta de APIs públicas uniformes). Por eso la actualización
// real se delega en un servicio backend propio, configurado con VITE_RATES_API,
// que es quien consulta las fuentes en la web y devuelve JSON normalizado.
//
// Endpoints esperados del backend:
//   GET {VITE_RATES_API}/cdt        -> { lastUpdated, colombia: [...], mundo: [...] }
//   GET {VITE_RATES_API}/hipotecas  -> { lastUpdated, colombia: [...], mundo: [...] }

const BASE = import.meta.env.VITE_RATES_API

export const hasRatesApi = !!BASE

export async function fetchRates(tipo) {
  if (!BASE) {
    const err = new Error('Servicio de tasas no configurado (VITE_RATES_API).')
    err.code = 'NO_API'
    throw err
  }
  const res = await fetch(`${BASE}/${tipo}`)
  if (!res.ok) throw new Error(`El servicio respondió ${res.status}`)
  return res.json()
}
