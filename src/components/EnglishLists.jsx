import { useState } from 'react'
import { speak } from '../utils/speak.js'
import { listsFor } from '../data/langLists.js'

// Resalta el verbo modal dentro de la frase de ejemplo, como en las tablas de
// gramática: "I **can** speak French".
function resaltar(frase, modal) {
  const i = frase.toLowerCase().indexOf(modal.toLowerCase())
  if (i === -1) return frase
  return (
    <>
      {frase.slice(0, i)}
      <strong>{frase.slice(i, i + modal.length)}</strong>
      {frase.slice(i + modal.length)}
    </>
  )
}

// Listas de verbos por idioma (inglés, alemán, francés): irregulares, regulares,
// phrasal/separables, modales y vocabulario técnico, con botón para escuchar.
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
        <div className="tabla-wrap">
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
        </div>
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

      {active.type === 'modals' && (
        <div className="tabla-wrap">
        <table className="en-table modal-table">
          <thead>
            <tr><th>Modal</th><th>Función</th><th>Ejemplos</th><th></th></tr>
          </thead>
          <tbody>
            {active.rows.map((m) => (
              <tr key={m.v}>
                <td className="en-strong modal-v">{m.v}</td>
                <td className="en-es">{m.fn}</td>
                <td>
                  <ul className="modal-ex">
                    {m.ex.map((frase, i) => (
                      <li key={i}>{resaltar(frase, m.v)}</li>
                    ))}
                  </ul>
                </td>
                <td>{speakBtn(m.ex[0])}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
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
