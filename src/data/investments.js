// Datos de inversiones (CDT y créditos hipotecarios).
//
// ⚠️ IMPORTANTE: estos son VALORES DE REFERENCIA / EJEMPLO, no tasas en vivo.
// Las tasas reales cambian a diario y dependen del monto, el plazo y el perfil.
// Para datos actualizados, el botón "Actualizar" consulta un servicio externo
// (configurable con VITE_RATES_API); ver utils/rates.js.

export const DISCLAIMER =
  'Valores de referencia con fines educativos. No constituyen una oferta ni asesoría financiera. Verifica siempre con la entidad.'

// Fuentes públicas recomendadas para consultar/verificar tasas. El servicio de
// scraping (server/scraper) extrae los datos de las páginas configuradas allí.
export const FUENTES = {
  cdt: [
    { nombre: 'Superintendencia Financiera de Colombia', url: 'https://www.superfinanciera.gov.co' },
    { nombre: 'Banco de la República', url: 'https://www.banrep.gov.co' },
    { nombre: 'Trading Economics (mundo)', url: 'https://tradingeconomics.com' },
  ],
  hipotecas: [
    { nombre: 'Superintendencia Financiera de Colombia', url: 'https://www.superfinanciera.gov.co' },
    { nombre: 'Fondo Nacional del Ahorro', url: 'https://www.fna.gov.co' },
    { nombre: 'Trading Economics (mundo)', url: 'https://tradingeconomics.com' },
  ],
}

export const cdtSeed = {
  lastUpdated: '2026-06-18',
  // Colombia: tasa efectiva anual (% E.A.) para un CDT a 360 días (referencial).
  colombia: [
    { entidad: 'Bancamía', plazo: '360 días', tasa: 11.5 },
    { entidad: 'Banco W', plazo: '360 días', tasa: 11.3 },
    { entidad: 'Banco Popular', plazo: '360 días', tasa: 10.8 },
    { entidad: 'Banco de Bogotá', plazo: '360 días', tasa: 10.4 },
    { entidad: 'Davivienda', plazo: '360 días', tasa: 10.3 },
    { entidad: 'Bancolombia', plazo: '360 días', tasa: 10.1 },
    { entidad: 'BBVA Colombia', plazo: '360 días', tasa: 10.0 },
    { entidad: 'Banco Caja Social', plazo: '360 días', tasa: 9.9 },
    { entidad: 'Scotiabank Colpatria', plazo: '360 días', tasa: 9.7 },
  ],
  // Mundo: equivalente a un depósito a plazo de ~1 año, en su moneda local.
  mundo: [
    { pais: 'Brasil (CDB)', plazo: '1 año', tasa: 10.5, moneda: 'BRL' },
    { pais: 'México (pagaré)', plazo: '1 año', tasa: 9.5, moneda: 'MXN' },
    { pais: 'India (FD)', plazo: '1 año', tasa: 7.0, moneda: 'INR' },
    { pais: 'Estados Unidos (CD)', plazo: '1 año', tasa: 4.5, moneda: 'USD' },
    { pais: 'Reino Unido', plazo: '1 año', tasa: 4.5, moneda: 'GBP' },
    { pais: 'Zona Euro', plazo: '1 año', tasa: 3.0, moneda: 'EUR' },
  ],
}

export const hipotecasSeed = {
  lastUpdated: '2026-06-18',
  // Colombia: tasa efectiva anual (% E.A.) de crédito de vivienda (referencial).
  colombia: [
    { entidad: 'Fondo Nacional del Ahorro', plazo: 'Hasta 30 años', tasa: 10.5 },
    { entidad: 'BBVA Colombia', plazo: 'Hasta 20 años', tasa: 11.2 },
    { entidad: 'Bancolombia', plazo: 'Hasta 20 años', tasa: 11.5 },
    { entidad: 'Davivienda', plazo: 'Hasta 20 años', tasa: 11.8 },
    { entidad: 'Scotiabank Colpatria', plazo: 'Hasta 20 años', tasa: 11.9 },
    { entidad: 'Banco de Bogotá', plazo: 'Hasta 20 años', tasa: 12.0 },
  ],
  // Mundo: tasa anual típica de hipoteca (referencial), en su mercado.
  mundo: [
    { pais: 'España', plazo: '30 años', tasa: 3.5, moneda: 'EUR' },
    { pais: 'Alemania', plazo: '20 años', tasa: 3.7, moneda: 'EUR' },
    { pais: 'Reino Unido', plazo: '25 años', tasa: 5.0, moneda: 'GBP' },
    { pais: 'Estados Unidos', plazo: '30 años fijo', tasa: 6.8, moneda: 'USD' },
    { pais: 'México', plazo: '20 años', tasa: 10.5, moneda: 'MXN' },
    { pais: 'Brasil', plazo: '20 años', tasa: 11.0, moneda: 'BRL' },
  ],
}
