// Fuentes desde donde el scraper extrae las tasas.
//
// ⚠️ IMPORTANTE: cada página tiene su propia estructura HTML. Debes VERIFICAR y
// ajustar `url`, `selector` y/o `regex` inspeccionando cada sitio real (F12 →
// copiar selector). Aquí van fuentes públicas creíbles como punto de partida.
//
// Estrategia de extracción por fuente:
//   - selector: CSS del elemento que contiene la tasa (se lee su texto).
//   - regex   : expresión para sacar el número del texto (por defecto busca "NN,NN %").
//   - Si no pones selector, se busca el regex en todo el texto de la página.

const RATE_REGEX = /(\d{1,2}[.,]\d{1,2})\s*%/

const cdtSources = {
  // Tasas de CDT en Colombia (% E.A.). Sugerencia de fuentes oficiales/agregadoras:
  //  - Superintendencia Financiera de Colombia (tasas de captación)
  //  - Banco de la República (tasas de interés)
  //  - La página de CDT de cada banco
  colombia: [
    { entidad: 'Bancolombia',          plazo: '360 días', url: 'https://www.bancolombia.com/personas/productos-servicios/inversiones/cdt', selector: null, regex: RATE_REGEX },
    { entidad: 'Davivienda',           plazo: '360 días', url: 'https://www.davivienda.com/wps/portal/personas/nuevo/personas/cuentas_y_tarjetas/cdt', selector: null, regex: RATE_REGEX },
    { entidad: 'BBVA Colombia',        plazo: '360 días', url: 'https://www.bbva.com.co/personas/productos/inversiones/cdt.html', selector: null, regex: RATE_REGEX },
    { entidad: 'Banco de Bogotá',      plazo: '360 días', url: 'https://www.bancodebogota.com/personas/inversiones/cdt', selector: null, regex: RATE_REGEX },
    { entidad: 'Banco Popular',        plazo: '360 días', url: 'https://www.bancopopular.com.co/', selector: null, regex: RATE_REGEX },
  ],
  // Referencia internacional (depósito a ~1 año). Buenas fuentes: tradingeconomics.com,
  // bancos centrales. El scraping de estos sitios suele ser más complejo (anti-bot).
  mundo: [
    { pais: 'Estados Unidos (CD)', plazo: '1 año', moneda: 'USD', url: 'https://tradingeconomics.com/united-states/deposit-interest-rate', selector: null, regex: RATE_REGEX },
    { pais: 'Zona Euro',           plazo: '1 año', moneda: 'EUR', url: 'https://tradingeconomics.com/euro-area/deposit-interest-rate', selector: null, regex: RATE_REGEX },
  ],
}

const hipotecaSources = {
  colombia: [
    { entidad: 'Fondo Nacional del Ahorro', plazo: 'Hasta 30 años', url: 'https://www.fna.gov.co/vivienda/credito-hipotecario', selector: null, regex: RATE_REGEX },
    { entidad: 'Bancolombia',                plazo: 'Hasta 20 años', url: 'https://www.bancolombia.com/personas/credito-hipotecario', selector: null, regex: RATE_REGEX },
    { entidad: 'BBVA Colombia',              plazo: 'Hasta 20 años', url: 'https://www.bbva.com.co/personas/productos/creditos/credito-de-vivienda.html', selector: null, regex: RATE_REGEX },
    { entidad: 'Davivienda',                 plazo: 'Hasta 20 años', url: 'https://www.davivienda.com/wps/portal/personas/nuevo/personas/creditos/credito_de_vivienda', selector: null, regex: RATE_REGEX },
  ],
  mundo: [
    { pais: 'Estados Unidos', plazo: '30 años fijo', moneda: 'USD', url: 'https://tradingeconomics.com/united-states/30-year-mortgage-rate', selector: null, regex: RATE_REGEX },
    { pais: 'España',         plazo: '30 años',      moneda: 'EUR', url: 'https://tradingeconomics.com/spain/mortgage-rate', selector: null, regex: RATE_REGEX },
  ],
}

module.exports = { cdtSources, hipotecaSources, RATE_REGEX }
