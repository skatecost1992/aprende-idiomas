import { useMemo, useState } from 'react'

// Quiz del área del conocimiento: muestra la definición de un concepto y el
// estudiante elige el término correcto entre 4 opciones (vocabulario + técnico).
// El resultado se registra y suma a los skills del perfil.
function shuffled(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function buildQuestions(area) {
  const pool = [...area.modules.vocabulario, ...area.modules.tecnico].map((x) => ({ term: x.term, def: x.def }))
  const total = Math.min(8, pool.length)
  return shuffled(pool).slice(0, total).map((q) => {
    const distractors = shuffled(pool.filter((x) => x.term !== q.term)).slice(0, 3)
    return { ...q, options: shuffled([q, ...distractors]) }
  })
}

export default function AreaQuiz({ area, onFinish }) {
  const [questions] = useState(() => buildQuestions(area))
  const [idx, setIdx] = useState(0)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const q = questions[idx]
  if (!q) return <p className="empty-note">No hay suficiente contenido para un quiz en esta área.</p>

  function pick(opt) {
    if (picked) return
    setPicked(opt)
    if (opt.term === q.term) setScore((s) => s + 1)
  }

  function next() {
    if (idx + 1 >= questions.length) {
      setDone(true)
      if (onFinish) onFinish(score, questions.length)
    } else {
      setIdx((i) => i + 1)
      setPicked(null)
    }
  }

  if (done) {
    const pct = Math.round((score / questions.length) * 100)
    return (
      <div className="quiz-result">
        <h3>¡Quiz completado! 🎉</h3>
        <div className="big-score">{score} / {questions.length}</div>
        <p>{pct >= 80 ? '¡Dominas esta área! 🌟' : pct >= 50 ? '¡Bien, sigue repasando! 👍' : 'Repasa los módulos y vuelve a intentarlo 💪'}</p>
        <p className="muted small">Tu mejor resultado se guarda en los skills de tu perfil.</p>
      </div>
    )
  }

  return (
    <div className="quiz">
      <div className="quiz-top">
        <span>Pregunta {idx + 1} / {questions.length}</span>
        <span>Aciertos: {score}</span>
      </div>

      <p className="quiz-prompt">¿Qué concepto corresponde a esta definición?</p>
      <p className="area-quiz-def">«{q.def}»</p>

      <div className="options">
        {q.options.map((opt, i) => {
          let cls = 'option'
          if (picked) {
            if (opt.term === q.term) cls += ' correct'
            else if (opt.term === picked.term) cls += ' wrong'
          }
          return (
            <button key={i} className={cls} onClick={() => pick(opt)}>{opt.term}</button>
          )
        })}
      </div>

      {picked && (
        <div className="feedback">
          {picked.term === q.term
            ? <span className="ok">✅ ¡Correcto!</span>
            : <span className="no">❌ Era «{q.term}»</span>}
          <button className="primary" onClick={next}>
            {idx + 1 >= questions.length ? 'Ver resultado' : 'Siguiente →'}
          </button>
        </div>
      )}
    </div>
  )
}
