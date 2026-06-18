import { useMemo, useState } from 'react'
import { speak } from '../utils/speak.js'

// Quiz de opción múltiple: se muestra la palabra en español y hay que elegir
// la traducción correcta entre 4 opciones del idioma seleccionado.
function buildPool(categories, code) {
  return categories
    .flatMap((c) => c.items.map((it) => ({ es: it.es, w: it.t[code]?.w, p: it.t[code]?.p })))
    .filter((x) => x.w)
}

function shuffled(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const TOTAL = 10

function makeQuestions(pool) {
  return shuffled(pool).slice(0, TOTAL).map((q) => {
    const distractors = shuffled(pool.filter((x) => x.w !== q.w)).slice(0, 3)
    return { ...q, options: shuffled([q, ...distractors]) }
  })
}

export default function Quiz({ language, categories, onFinish }) {
  const code = language.code
  const pool = useMemo(() => buildPool(categories, code), [categories, code])
  const [questions, setQuestions] = useState(() => makeQuestions(pool))
  const [idx, setIdx] = useState(0)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const q = questions[idx]

  if (!q) {
    return (
      <p className="empty-note">
        No hay suficiente vocabulario en este nivel para un quiz. Prueba con
        <strong> Todos</strong> los niveles o consulta la <strong>🧭 Ruta</strong>.
      </p>
    )
  }

  function pick(opt) {
    if (picked) return
    setPicked(opt)
    if (opt.w === q.w) setScore((s) => s + 1)
    speak(q.w, code)
  }

  function nextQuestion() {
    if (idx + 1 >= questions.length) {
      setDone(true)
      if (onFinish) onFinish(score, questions.length)
    } else {
      setIdx((i) => i + 1)
      setPicked(null)
    }
  }

  function restart() {
    setQuestions(makeQuestions(pool))
    setIdx(0)
    setPicked(null)
    setScore(0)
    setDone(false)
  }

  if (done) {
    const pct = Math.round((score / questions.length) * 100)
    return (
      <div className="quiz-result">
        <h3>¡Quiz completado! 🎉</h3>
        <div className="big-score">{score} / {questions.length}</div>
        <p>{pct >= 80 ? '¡Excelente! 🌟' : pct >= 50 ? '¡Bien, sigue practicando! 👍' : 'No te rindas, inténtalo otra vez 💪'}</p>
        <button className="primary" onClick={restart}>Reintentar</button>
      </div>
    )
  }

  return (
    <div className="quiz">
      <div className="quiz-top">
        <span>Pregunta {idx + 1} / {questions.length}</span>
        <span>Aciertos: {score}</span>
      </div>

      <p className="quiz-prompt">¿Cómo se dice <strong>«{q.es}»</strong> en {language.name}?</p>

      <div className="options">
        {q.options.map((opt, i) => {
          let cls = 'option'
          if (picked) {
            if (opt.w === q.w) cls += ' correct'
            else if (opt.w === picked.w) cls += ' wrong'
          }
          return (
            <button key={i} className={cls} dir={language.rtl ? 'rtl' : 'ltr'} onClick={() => pick(opt)}>
              {opt.w}
            </button>
          )
        })}
      </div>

      {picked && (
        <div className="feedback">
          {picked.w === q.w ? (
            <span className="ok">✅ ¡Correcto!</span>
          ) : (
            <span className="no">❌ La respuesta era «{q.w}»</span>
          )}
          <button className="primary" onClick={nextQuestion}>
            {idx + 1 >= questions.length ? 'Ver resultado' : 'Siguiente →'}
          </button>
        </div>
      )}
    </div>
  )
}
