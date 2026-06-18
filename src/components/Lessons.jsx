import { useState } from 'react'
import { tracksForArea } from '../data/lessons.js'

// Guías de aprendizaje paso a paso de un área (p. ej. Desarrollo de Software).
// Cada lección es un acordeón con secciones de texto y ejemplos de código, y se
// puede marcar como leída para sumar a los skills del perfil.
export default function Lessons({ area, progress, trackId }) {
  const all = tracksForArea(area.id)
  const tracks = trackId ? all.filter((t) => t.id === trackId) : all
  const [openId, setOpenId] = useState(tracks[0]?.lessons[0]?.id || null)

  if (tracks.length === 0) {
    return <p className="empty-note">Todavía no hay guías para esta área. Próximamente.</p>
  }

  return (
    <div className="lessons">
      {tracks.map((track) => (
        <section key={track.id}>
          <h3 className="track-title">{track.title}</h3>
          <p className="muted track-intro">{track.intro}</p>

          {track.lessons.map((lesson) => {
            const open = lesson.id === openId
            const itemId = 'lesson:' + lesson.id
            const read = progress.isKnown(area.id, itemId)
            return (
              <article key={lesson.id} className={`lesson-card ${read ? 'read' : ''}`}>
                <button className="lesson-head" onClick={() => setOpenId(open ? null : lesson.id)}>
                  <span>{lesson.icon} {lesson.title}</span>
                  <span className="chevron">{read ? '✓ ' : ''}{open ? '▾' : '▸'}</span>
                </button>

                {open && (
                  <div className="lesson-body">
                    {lesson.sections.map((s, i) => (
                      <div key={i} className="section">
                        <h4>{s.h}</h4>
                        {s.p && <p>{s.p}</p>}
                        {s.code && (
                          <pre className="code">
                            {s.lang && <span className="code-lang">{s.lang}</span>}
                            <code>{s.code}</code>
                          </pre>
                        )}
                      </div>
                    ))}
                    <button
                      className={`learn-btn ${read ? 'on' : ''}`}
                      onClick={() => progress.toggleKnowledge(area.id, itemId)}
                    >
                      {read ? '✓ Lección leída' : 'Marcar como leída'}
                    </button>
                  </div>
                )}
              </article>
            )
          })}
        </section>
      ))}
    </div>
  )
}
