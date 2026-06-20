import { useState } from 'react'
import { speak } from '../utils/speak.js'
import { verbTenses } from '../data/verbTenses.js'

// Lista de los principales tiempos verbales del idioma seleccionado, con verbo
// modelo, uso, construcción, ejemplo y, si existe, una tabla de conjugación por
// persona (afirmativa / interrogativa / negativa) desplegable.
export default function VerbTenses({ language }) {
  const data = verbTenses[language.code]
  const [open, setOpen] = useState(() => new Set())

  if (!data) {
    return <p className="empty-note">Aún no hay tiempos verbales cargados para este idioma.</p>
  }

  const toggle = (i) => setOpen((prev) => {
    const n = new Set(prev)
    n.has(i) ? n.delete(i) : n.add(i)
    return n
  })

  return (
    <div className="verbtenses">
      <p className="vt-verb">Verbo modelo: <strong>{data.verb}</strong></p>
      <ul className="study-list">
        {data.tenses.map((t, i) => (
          <li key={i} className="study-item vt-item">
            <div className="vt-top">
              <div className="study-content">
                <strong className="study-term">{t.name}</strong>
                <span className="study-def">{t.use}</span>
                {t.build && <span className="vt-build">🔧 Construcción: {t.build}</span>}
                <span className="vt-example" dir={language.rtl ? 'rtl' : 'ltr'}>
                  {t.ex}
                  {t.rom && <span className="vt-rom"> [{t.rom}]</span>}
                  <span className="vt-es"> — {t.es}</span>
                </span>
              </div>
              <button className="speak-btn" title="Escuchar" onClick={() => speak(t.ex, language.code)}>🔊</button>
            </div>

            {t.table && (
              <>
                <button className="vt-toggle" onClick={() => toggle(i)}>
                  {open.has(i) ? '▾' : '▸'} Conjugación (afirmativa · interrogativa · negativa)
                </button>
                {open.has(i) && (
                  <table className="conj-table" dir={language.rtl ? 'rtl' : 'ltr'}>
                    <thead>
                      <tr><th>Afirmativa</th><th>Interrogativa</th><th>Negativa</th></tr>
                    </thead>
                    <tbody>
                      {t.table.map((r, k) => (
                        <tr key={k}>
                          <td className="conj-af">{r.af}</td>
                          <td className="conj-int">{r.int}</td>
                          <td className="conj-neg">{r.neg}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
