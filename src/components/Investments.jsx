import { useState } from 'react'
import { cdtSeed, hipotecasSeed, DISCLAIMER } from '../data/investments.js'
import { fetchRates, hasRatesApi } from '../utils/rates.js'

// Apartado de Inversiones: muestra una tabla de tasas (CDT o créditos
// hipotecarios) para Colombia y el mundo, con un botón para actualizar los
// valores consultando un servicio en la web (si está configurado).
const CONFIG = {
  cdt: { title: 'Mejores tasas de CDT', tipo: 'cdt', seed: cdtSeed, col: 'CDT a plazo' },
  hipotecas: { title: 'Créditos hipotecarios', tipo: 'hipotecas', seed: hipotecasSeed, col: 'Crédito de vivienda' },
}

function Tabla({ titulo, filas, claveLugar }) {
  // Ordena de mayor a menor tasa.
  const orden = [...filas].sort((a, b) => b.tasa - a.tasa)
  return (
    <div className="inv-block">
      <h3>{titulo}</h3>
      <table className="inv-table">
        <thead>
          <tr><th>{claveLugar === 'pais' ? 'País' : 'Entidad'}</th><th>Plazo</th><th>Tasa</th></tr>
        </thead>
        <tbody>
          {orden.map((f, i) => (
            <tr key={i}>
              <td>{f[claveLugar]}</td>
              <td>{f.plazo}</td>
              <td className="inv-rate">{f.tasa}% {f.moneda ? <span className="inv-cur">{f.moneda}</span> : 'E.A.'}</td>
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

  // Si cambia el tipo (CDT/hipotecas), reinicia con su semilla.
  if (data !== cfg.seed && status === 'idle' && data.__kind !== kind) {
    // (no-op de seguridad; el remontaje por key en App ya garantiza el reinicio)
  }

  async function actualizar() {
    setStatus('loading')
    setMsg('')
    try {
      const fresh = await fetchRates(cfg.tipo)
      setData({ ...fresh })
      setStatus('idle')
      setMsg('Tasas actualizadas desde el servicio.')
    } catch (e) {
      setStatus('error')
      setMsg(
        e.code === 'NO_API'
          ? 'La actualización en vivo requiere conectar un servicio (VITE_RATES_API) que consulte las tasas en la web. Mostrando valores de referencia.'
          : 'No se pudo actualizar: ' + e.message + '. Mostrando valores de referencia.'
      )
    }
  }

  return (
    <div className="investments">
      <div className="inv-header">
        <div>
          <h2>💰 {cfg.title}</h2>
          <p className="muted">Actualizado: {data.lastUpdated} · {hasRatesApi ? 'servicio en vivo disponible' : 'modo referencia'}</p>
        </div>
        <button className="primary" onClick={actualizar} disabled={status === 'loading'}>
          {status === 'loading' ? 'Consultando…' : '🔄 Actualizar'}
        </button>
      </div>

      {msg && <p className={`inv-msg ${status === 'error' ? 'err' : 'ok'}`}>{msg}</p>}

      <Tabla titulo="🇨🇴 Colombia" filas={data.colombia} claveLugar="entidad" />
      <Tabla titulo="🌍 En el mundo" filas={data.mundo} claveLugar="pais" />

      <p className="inv-disclaimer">⚠️ {DISCLAIMER}</p>
    </div>
  )
}
