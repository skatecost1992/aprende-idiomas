import { useState } from 'react'
import { speak } from '../utils/speak.js'
import { listsFor } from '../data/langLists.js'

// Listas de verbos por idioma (inglés, alemán, francés): irregulares, regulares,
// phrasal/separables y vocabulario técnico, con botón para escuchar.
export default function EnglishLists({ language }) {
  const sections = listsFor(language.code)
  const [subId, setSubId] = useState(sections ? sections[0].id : null)

  if (!sections) return <p className="empty-note">Aún no hay listas de verbos para este idioma.</p>

  const active = sections.find((s) => s.id === subId) || sections[0]
  const speakBtn = (text) => (
    <button className="speak-btn" title="Escuchar" onClick={() => speak(text, language.code)}>🔊</button>
  )

  return (
    <div className="english-lists">
      <nav className="tabs">
        {sections.map((s) => (
          <button key={s.id} className={`tab ${active.id === s.id ? 'active' : ''}`} onClick={() => setSubId(s.id)}>
            <span>{s.icon}</span> {s.label}
          </button>
        ))}
      </nav>

      {active.note && <p className="muted small">{active.note}</p>}

      {active.type === 'verbs' && (
        <table className="en-table">
          <thead><tr>{active.cols.map((c) => <th key={c.k}>{c.l}</th>)}<th></th></tr></thead>
          <tbody>
            {active.rows.map((r, i) => (
              <tr key={i}>
                {active.cols.map((c, j) => (
                  <td key={c.k} className={j === 0 ? 'en-strong' : c.k === 'es' ? 'en-es' : ''}>{r[c.k]}</td>
                ))}
                <td>{speakBtn(r.base)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {active.type === 'phrases' && (
        <ul className="en-list">
          {active.rows.map((p, i) => (
            <li key={i} className="en-item">
              <span className="en-strong">{p.v} {speakBtn(p.v)}</span>
              <span className="en-es">{p.es}</span>
              {p.ex && <span className="en-ex">«{p.ex}»</span>}
            </li>
          ))}
        </ul>
      )}

      {active.type === 'terms' && (
        <ul className="en-list">
          {active.rows.map((t, i) => (
            <li key={i} className="en-item">
              <span className="en-strong">{t.term} {speakBtn(t.term)}</span>
              <span className="en-es">{t.es}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
