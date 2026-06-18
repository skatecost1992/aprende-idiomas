import { useState } from 'react'
import { cdtSeed, hipotecasSeed, DISCLAIMER, FUENTES } from '../data/investments.js'
import { fetchRates } from '../utils/rates.js'

// Apartado de Inversiones: muestra una tabla de tasas (CDT o créditos
// hipotecarios) para Colombia y el mundo. El botón "Actualizar" consulta el
// servicio de scraping (Playwright) que extrae los datos de las páginas reales.
const CONFIG = {
  cdt: { title: 'Mejores tasas de CDT', tipo: 'cdt', seed: cdtSeed },
  hipotecas: { title: 'Créditos hipotecarios', tipo: 'hipotecas', seed: hipotecasSeed },
}

function rateVal(x) {
  return x.tasa == null ? -Infinity : x.tasa
}

function Tabla({ titulo, filas, claveLugar }) {
  const orden = [...filas].sort((a, b) => rateVal(b) - rateVal(a))
  return (
    <div className="inv-block">
      <h3>{titulo}</h3>
      <table className="inv-table">
        <thead>
          <tr>
            <th>{claveLugar === 'pais' ? 'País' : 'Entidad'}</th>
            <th>Plazo</th>
            <th>Tasa</th>
            <th>Fuente</th>
          </tr>
        </thead>
        <tbody>
          {orden.map((f, i) => (
            <tr key={i}>
              <td>{f[claveLugar]}</td>
              <td>{f.plazo}</td>
              <td className="inv-rate">
                {f.tasa == null
                  ? <span className="inv-na" title={f.error || 'No disponible'}>—</span>
                  : <>{f.tasa}% {f.moneda ? <span className="inv-cur">{f.moneda}</span> : 'E.A.'}</>}
              </td>
              <td>{f.fuente ? <a href={f.fuente} target="_blank" rel="noreferrer" className="inv-link">ver</a> : '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Investments({ kind }) {
  const cfg = CONFIG[kind]
  const [data, setData] = useState(cfg.seed)
  const [status, setStatus] = useState('idle') // idle | loading | error
  const [msg, setMsg] = useState('')

  async function actualizar() {
    setStatus('loading')
    setMsg('')
    try {
      const fresh = await fetchRates(cfg.tipo)
      setData({ ...fresh })
      setStatus('idle')
      setMsg('Tasas actualizadas con el servicio de scraping (Playwright).')
    } catch (e) {
      setStatus('error')
      setMsg(
        e.code === 'NO_API'
          ? 'No se encontró el JSON de tasas. Genéralo con el scraper (server/scraper: npm run generate) o conecta un servicio en vivo (VITE_RATES_API). Mostrando valores de referencia.'
          : 'No se pudo actualizar: ' + e.message + '. Mostrando valores de referencia.'
      )
    }
  }

  return (
    <div className="investments">
      <div className="inv-header">
        <div>
          <h2>💰 {cfg.title}</h2>
          <p className="muted">Actualizado: {data.lastUpdated}</p>
        </div>
        <button className="primary" onClick={actualizar} disabled={status === 'loading'}>
          {status === 'loading' ? 'Consultando con Playwright…' : '🔄 Actualizar'}
        </button>
      </div>

      {msg && <p className={`inv-msg ${status === 'error' ? 'err' : 'ok'}`}>{msg}</p>}

      <Tabla titulo="🇨🇴 Colombia" filas={data.colombia} claveLugar="entidad" />
      <Tabla titulo="🌍 En el mundo" filas={data.mundo} claveLugar="pais" />

      <div className="inv-fuentes">
        <strong>Fuentes:</strong>{' '}
        {FUENTES[kind].map((f, i) => (
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
