import { speak } from '../utils/speak.js'
import { grammar, EXAMPLE_LANGS } from '../data/grammar.js'
import { levelByCode } from '../data/levels.js'

// Lecciones de gramática en contexto (B1 y B2). Muestra la función comunicativa,
// una explicación y frases modelo con su traducción al idioma elegido.
export default function Grammar({ language, level }) {
  const code = language.code
  const hasExamples = EXAMPLE_LANGS.includes(code)

  // Niveles a mostrar según el filtro activo.
  const levelCodes = level === 'all' ? ['B1', 'B2'] : [level].filter((l) => grammar[l])

  if (levelCodes.length === 0) {
    return (
      <p className="empty-note">
        Las lecciones de gramática en contexto están disponibles para los niveles
        <strong> B1 y B2</strong>. Cambia el filtro de nivel para verlas, o consulta la
        <strong> 🧭 Ruta</strong> para el temario completo de cada nivel.
      </p>
    )
  }

  return (
    <div className="grammar">
      {!hasExamples && (
        <p className="empty-note">
          ℹ️ Las frases de ejemplo traducidas aún no están disponibles para <strong>{language.name}</strong>
          (de momento: inglés, francés, alemán, italiano y portugués). Abajo verás la explicación y los
          modelos en español.
        </p>
      )}

      {levelCodes.map((lc) => {
        const lvl = levelByCode(lc)
        return (
          <section key={lc} className="grammar-level">
            <h3 className="browse-level-head">
              <span className="level-badge" style={{ background: lvl.color }}>{lc}</span>
              Gramática · {lvl.title}
            </h3>

            {grammar[lc].map((lesson) => (
              <article key={lesson.id} className="lesson">
                <h4 className="lesson-title">{lesson.title}</h4>
                <p className="lesson-focus">{lesson.focus}</p>
                <ul className="lesson-examples">
                  {lesson.examples.map((ex, i) => {
                    const target = hasExamples ? ex.t[code] : null
                    return (
                      <li key={i} className="example">
                        <span className="example-es">{ex.es}</span>
                        {target && (
                          <span className="example-target" dir={language.rtl ? 'rtl' : 'ltr'}>
                            <span>{target}</span>
                            <button className="speak-btn" title="Escuchar" onClick={() => speak(target, code)}>🔊</button>
                          </span>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </article>
            ))}
          </section>
        )
      })}
    </div>
  )
}
