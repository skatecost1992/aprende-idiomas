import { AREA_LANGS } from '../data/knowledge.js'
import { tracksForArea } from '../data/lessons.js'
import AreaQuiz from './AreaQuiz.jsx'
import Lessons from './Lessons.jsx'

// Estudio de un área (Requerimientos 3 y 4). El tema (módulo) lo selecciona el
// menú lateral y llega por la prop `moduleId`. Aquí se muestra su contenido y se
// marcan los conceptos aprendidos, que suman a los skills del perfil.
export default function AreaStudy({ area, progress, moduleId = 'vocabulario' }) {
  const isGuias = moduleId === 'guias' || moduleId.startsWith('guias:')
  const trackId = moduleId.startsWith('guias:') ? moduleId.split(':')[1] : null
  const items = (moduleId === 'quiz' || isGuias) ? [] : area.modules[moduleId] || []
  const learnedCount = (progress.progress.knowledge[area.id] || []).length
  const lessonsCount = tracksForArea(area.id).reduce((n, t) => n + t.lessons.length, 0)
  // Solo cuentan los temas aplicables a un área profesional: lenguaje técnico y guías.
  const totalItems = (area.modules.tecnico?.length || 0) + lessonsCount

  return (
    <div className="area-study">
      <div className="area-header">
        <span className="area-icon big">{area.icon}</span>
        <div>
          <h2>{area.name}</h2>
          <p className="muted">{area.description}</p>
        </div>
      </div>

      {area.intro && <p className="area-intro">{area.intro}</p>}

      <div className="specialties">
        <span className="spec-label">Especialidades:</span>
        {area.specialties.map((s) => <span key={s} className="spec-chip">{s}</span>)}
      </div>

      <div className="area-progress">
        Conceptos dominados en esta área: <strong>{learnedCount}</strong> / {totalItems}
        <div className="area-progress-bar"><div style={{ width: `${totalItems ? (learnedCount / totalItems) * 100 : 0}%` }} /></div>
      </div>

      {isGuias ? (
        <Lessons area={area} progress={progress} trackId={trackId} />
      ) : moduleId === 'quiz' ? (
        <AreaQuiz
          key={area.id}
          area={area}
          onFinish={(score, total) => progress.recordQuiz('area:' + area.id, score, total)}
        />
      ) : (
        <ul className="study-list">
          {items.map((item, i) => {
            const itemId = `${moduleId}:${i}`
            const known = progress.isKnown(area.id, itemId)
            return (
              <li key={itemId} className={`study-item ${known ? 'known' : ''}`}>
                <div className="study-content">
                  {(moduleId === 'vocabulario' || moduleId === 'tecnico') && (
                    <>
                      <strong className="study-term">{item.term}</strong>
                      <span className="study-langs">
                        {AREA_LANGS.map((l) => (
                          <span key={l.code} className="study-tr">{l.flag} {item.t[l.code]}</span>
                        ))}
                      </span>
                      <span className="study-def">{item.def}</span>
                    </>
                  )}
                  {(moduleId === 'formal' || moduleId === 'informal') && (
                    <>
                      <strong className="study-term">{item.ctx}</strong>
                      <span className="study-def">«{item.ex}»</span>
                    </>
                  )}
                  {moduleId === 'tiempos' && (
                    <>
                      <strong className="study-term">{item.name}</strong>
                      <span className="study-def">{item.use}</span>
                      <span className="study-example">Ej.: «{item.ex}»</span>
                    </>
                  )}
                </div>
                <button
                  className={`learn-btn ${known ? 'on' : ''}`}
                  onClick={() => progress.toggleKnowledge(area.id, itemId)}
                  title={known ? 'Marcar como no aprendido' : 'Marcar como aprendido'}
                >
                  {known ? '✓ Aprendido' : 'Marcar aprendido'}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
