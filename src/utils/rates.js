// Consulta de tasas para el apartado Inversiones, con tres niveles:
//   1) Servicio en vivo (VITE_RATES_API): un backend con Playwright que extrae
//      las tasas al momento (server/scraper).
//   2) JSON estático (public/tasas/*.json): lo regenera periódicamente un
//      workflow de GitHub Actions ejecutando el scraper. No requiere backend.
//   3) Si no hay ninguno, se lanza NO_API y el front muestra valores de referencia.

const BASE = import.meta.env.VITE_RATES_API

// Hay forma de actualizar si existe el servicio en vivo o el JSON estático.
export const hasRatesApi = true

export async function fetchRates(tipo) {
  // 1) Servicio en vivo
  if (BASE) {
    const res = await fetch(`${BASE}/${tipo}`)
    if (!res.ok) throw new Error(`El servicio respondió ${res.status}`)
    return res.json()
  }

  // 2) JSON estático publicado por GitHub Actions
  const url = `${import.meta.env.BASE_URL}tasas/${tipo}.json`
  const res = await fetch(url, { cache: 'no-store' })
  if (res.ok) return res.json()

  // 3) Nada disponible
  const err = new Error('No hay tasas publicadas.')
  err.code = 'NO_API'
  throw err
}
