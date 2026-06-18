import { speak } from '../utils/speak.js'
import { verbTenses } from '../data/verbTenses.js'

// Lista de los principales tiempos verbales del idioma seleccionado, con verbo
// modelo, uso, ejemplo (con pronunciación y traducción) y botón para escuchar.
export default function VerbTenses({ language }) {
  const data = verbTenses[language.code]

  if (!data) {
    return <p className="empty-note">Aún no hay tiempos verbales cargados para este idioma.</p>
  }

  return (
    <div className="verbtenses">
      <p className="vt-verb">Verbo modelo: <strong>{data.verb}</strong></p>
      <ul className="study-list">
        {data.tenses.map((t, i) => (
          <li key={i} className="study-item">
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
          </li>
        ))}
      </ul>
    </div>
  )
}
