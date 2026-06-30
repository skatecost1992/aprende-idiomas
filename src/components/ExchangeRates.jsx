import { useState } from 'react'
import { exchangeRatesSeed, DISCLAIMER, FUENTES } from '../data/exchangeRates.js'
import { fetchRates } from '../utils/rates.js'

function fmt(tasa) {
  return tasa == null
    ? '—'
    : tasa.toLocaleString('es-CO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export default function ExchangeRates() {
  const [data, setData] = useState(exchangeRatesSeed)
  const [status, setStatus] = useState('idle') // idle | loading | error
  const [msg, setMsg] = useState('')

  async function actualizar() {
    setStatus('loading')
    setMsg('')
    try {
      const fresh = await fetchRates('cambio')
      setData(fresh)
      setStatus('idle')
      setMsg('Tasas actualizadas con el servicio de scraping (Playwright).')
    } catch (e) {
      setStatus('error')
      setMsg(
        e.code === 'NO_API'
          ? 'No se encontró el JSON de tasas. Inicia el scraper (server/scraper: npm start) o configura VITE_RATES_API. Mostrando valores de referencia.'
          : 'No se pudo actualizar: ' + e.message + '. Mostrando valores de referencia.'
      )
    }
  }

  return (
    <div className="investments">
      <div className="inv-header">
        <div>
          <h2>💱 Tasas de cambio · COP</h2>
          <p className="muted">1 unidad de la moneda extranjera expresada en pesos colombianos</p>
          <p className="muted" style={{ fontSize: '.82rem', marginTop: 2 }}>
            Actualizado: {data.lastUpdated}
          </p>
        </div>
        <button className="primary" onClick={actualizar} disabled={status === 'loading'}>
          {status === 'loading' ? 'Consultando con Playwright…' : '🔄 Actualizar'}
        </button>
      </div>

      {msg && <p className={`inv-msg ${status === 'error' ? 'err' : 'ok'}`}>{msg}</p>}

      <div className="inv-block">
        <table className="inv-table fx-table">
          <thead>
            <tr>
              <th>Moneda</th>
              <th>Nombre</th>
              <th>1 unidad = COP</th>
              <th>Ver</th>
            </tr>
          </thead>
          <tbody>
            {data.rates.map((r) => (
              <tr key={r.moneda}>
                <td>
                  <span className="fx-flag">{r.bandera}</span>
                  <span className="fx-code">{r.moneda}</span>
                </td>
                <td className="fx-nombre">{r.nombre}</td>
                <td className="inv-rate">
                  {r.tasa == null
                    ? <span className="inv-na">—</span>
                    : <>$ {fmt(r.tasa)}</>}
                </td>
                <td>
                  <a
                    href={`https://www.google.com/finance/quote/${r.moneda}-COP`}
                    target="_blank"
                    rel="noreferrer"
                    className="inv-link"
                  >
                    ver
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="inv-fuentes">
        <strong>Fuentes:</strong>{' '}
        {FUENTES.map((f, i) => (
          <span key={f.url}>
            {i > 0 && ' · '}
            <a href={f.url} target="_blank" rel="noreferrer" className="inv-link">{f.nombre}</a>
          </span>
        ))}
      </div>

      <p className="inv-disclaimer">⚠️ {DISCLAIMER}</p>
    </div>
  )
}
