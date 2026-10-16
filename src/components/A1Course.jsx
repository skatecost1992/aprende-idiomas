import { useState } from 'react'
import { speak } from '../utils/speak.js'
import { a1Course, a1Intro, hasA1Course } from '../data/a1Course.js'

// Curso A1 por unidades comunicativas, basado en metodologías con evidencia:
// objetivos can-do (MCER), chunks (enfoque léxico), diálogos comprensibles (i+1),
// recuerdo activo (respuesta oculta hasta que el estudiante intenta producirla)
// y consejos de repaso espaciado.
export default function A1Course({ language, progress }) {
  const code = language.code
  const [openId, setOpenId] = useState(a1Course[0]?.id || null)
  const [revealed, setRevealed] = useState(() => new Set()) // respuestas de práctica mostradas
  const [showEs, setShowEs] = useState(() => new Set())     // traducciones de diálogo visibles

  if (!hasA1Course(code)) {
    return (
      <p className="empty-note">
        El curso A1 guiado está disponible por ahora para <strong>inglés, francés, alemán,
        italiano y portugués</strong>. Para este idioma usa la <strong>🧭 Ruta</strong>,
        el <strong>📖 Explorar</strong> y las <strong>🃏 Tarjetas</strong>.
      </p>
    )
  }

  const studied = progress.progress.studied[code] || []
  const unitDone = (unit) => unit.chunks.every((c) => studied.includes(c.es))

  function toggleSet(setter, key) {
    setter((prev) => {
      const n = new Set(prev)
      n.has(key) ? n.delete(key) : n.add(key)
      return n
    })
  }

  function completeUnit(unit) {
    unit.chunks.forEach((c) => progress.recordStudied(code, c.es))
  }

  const doneCount = a1Course.filter(unitDone).length

  return (
    <div className="a1-course">
      <p className="alpha-note">🧪 <strong>Método:</strong> {a1Intro}</p>

      <div className="area-progress">
        Unidades completadas: <strong>{doneCount}</strong> / {a1Course.length}
        <div className="area-progress-bar"><div style={{ width: `${(doneCount / a1Course.length) * 100}%` }} /></div>
      </div>

      {a1Course.map((unit) => {
        const open = unit.id === openId
        const done = unitDone(unit)
        return (
          <article key={unit.id} className={`lesson-card ${done ? 'read' : ''}`}>
            <button className="lesson-head" onClick={() => setOpenId(open ? null : unit.id)}>
              <span>{unit.icon} {unit.title}</span>
              <span className="chevron">{done ? '✓ ' : ''}{open ? '▾' : '▸'}</span>
            </button>

            {open && (
              <div className="lesson-body">
                {/* Objetivo can-do (MCER) */}
                <p className="a1-cando">🎯 <strong>Al terminar:</strong> {unit.canDo}</p>

                {/* Chunks (enfoque léxico) */}
                <div className="section">
                  <h4>🧩 Frases clave (apréndelas en bloque)</h4>
                  <ul className="lesson-examples">
                    {unit.chunks.map((c, i) => (
                      <li key={i} className="example">
                        <span className="example-es">{c.es}</span>
                        <span className="example-target">
                          <span>{c.t[code]}</span>
                          <button className="speak-btn" title="Escuchar" onClick={() => speak(c.t[code], code)}>🔊</button>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Diálogo (input comprensible) */}
                <div className="section">
                  <h4>💬 Diálogo (léelo en voz alta)</h4>
                  <div className="a1-dialogue">
                    {unit.dialogue.map((line, i) => {
                      const key = unit.id + ':' + i
                      return (
                        <div key={i} className={`a1-line who-${line.who.toLowerCase()}`}>
                          <span className="a1-who">{line.who}</span>
                          <div className="a1-bubble">
                            <span className="a1-target">
                              {line.t[code]}
                              <button className="speak-btn" title="Escuchar" onClick={() => speak(line.t[code], code)}>🔊</button>
                            </span>
                            <button className="a1-es-toggle" onClick={() => toggleSet(setShowEs, key)}>
                              {showEs.has(key) ? line.es : 'ver traducción'}
                            </button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Práctica de recuerdo activo */}
                <div className="section">
                  <h4>✍️ Practica (di la frase ANTES de mirar la respuesta)</h4>
                  <ul className="a1-practice">
                    {unit.practice.map((p, i) => {
                      const key = unit.id + ':p' + i
                      const shown = revealed.has(key)
                      return (
                        <li key={i} className="a1-practice-item">
                          <span className="a1-prompt">{p.prompt} →</span>
                          {shown ? (
                            <span className="a1-answer">
                              {p.t[code]}
                              <button className="speak-btn" title="Escuchar" onClick={() => speak(p.t[code], code)}>🔊</button>
                            </span>
                          ) : (
                            <button className="a1-reveal" onClick={() => toggleSet(setRevealed, key)}>
                              Mostrar respuesta
                            </button>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </div>

                {/* Consejo metodológico */}
                <p className="a1-tip">💡 {unit.tip}</p>

                <button className={`learn-btn ${done ? 'on' : ''}`} onClick={() => completeUnit(unit)}>
                  {done ? '✓ Unidad completada' : 'Marcar unidad completada'}
                </button>
              </div>
            )}
          </article>
        )
      })}

      <p className="muted small a1-footer">
        📅 Plan sugerido: una unidad por día + repaso de la anterior. Cada frase completada
        suma a tus palabras estudiadas y a los skills de tu perfil.
      </p>
    </div>
  )
}
