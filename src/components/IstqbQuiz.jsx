import { useMemo, useState } from 'react'
import preguntas from '../data/istqb.json'

// Quiz ISTQB (CTFL) construido con las preguntas y respuestas de los exámenes
// de muestra A, B, C y D. Soporta preguntas de una o varias respuestas correctas.

const EXAMENES = ['Todos', 'A', 'B', 'C', 'D']
const LONGITUDES = [10, 20, 40]

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function sameSet(a, b) {
  return a.length === b.length && a.every((x) => b.includes(x))
}

export default function IstqbQuiz({ onFinish }) {
  const [examen, setExamen] = useState('Todos')
  const [largo, setLargo] = useState(10)
  const [quiz, setQuiz] = useState(null) // null = pantalla de configuración

  function empezar() {
    const pool = examen === 'Todos' ? preguntas : preguntas.filter((q) => q.examen === examen)
    const n = largo === 40 ? pool.length : Math.min(largo, pool.length)
    setQuiz(shuffle(pool).slice(0, n))
  }

  if (!quiz) {
    return (
      <div className="istqb-config">
        <h2>🎓 Quiz ISTQB · CTFL v4.0</h2>
        <p className="muted">
          {preguntas.length} preguntas de los exámenes de muestra A, B, C y D, con sus respuestas oficiales.
          Algunas preguntas tienen más de una respuesta correcta.
        </p>

        <div className="istqb-field">
          <span>Examen:</span>
          <div className="chips-row">
            {EXAMENES.map((e) => (
              <button key={e} className={`chip ${examen === e ? 'active' : ''}`} onClick={() => setExamen(e)}>
                {e === 'Todos' ? 'Todos' : 'Set ' + e}
              </button>
            ))}
          </div>
        </div>

        <div className="istqb-field">
          <span>Nº de preguntas:</span>
          <div className="chips-row">
            {LONGITUDES.map((l) => (
              <button key={l} className={`chip ${largo === l ? 'active' : ''}`} onClick={() => setLargo(l)}>
                {l === 40 ? 'Máximas' : l}
              </button>
            ))}
          </div>
        </div>

        <button className="primary big" onClick={empezar}>Comenzar quiz</button>
      </div>
    )
  }

  return <Runner quiz={quiz} onSalir={() => setQuiz(null)} onFinish={onFinish} />
}

function Runner({ quiz, onSalir, onFinish }) {
  const [idx, setIdx] = useState(0)
  const [sel, setSel] = useState([])
  const [checked, setChecked] = useState(false)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const q = quiz[idx]
  const correctas = useMemo(() => q.opciones.filter((o) => o.correcta).map((o) => o.letra), [q])
  const multi = correctas.length > 1

  function toggle(letra) {
    if (checked) return
    if (multi) setSel((s) => (s.includes(letra) ? s.filter((x) => x !== letra) : [...s, letra]))
    else setSel([letra])
  }

  function comprobar() {
    setChecked(true)
    if (sameSet(sel, correctas)) setScore((s) => s + 1)
  }

  function siguiente() {
    if (idx + 1 >= quiz.length) {
      setDone(true)
      if (onFinish) onFinish(score, quiz.length)
    } else {
      setIdx((i) => i + 1)
      setSel([])
      setChecked(false)
    }
  }

  if (done) {
    const pct = Math.round((score / quiz.length) * 100)
    const aprob = pct >= 65 // umbral típico de aprobación CTFL
    return (
      <div className="quiz-result">
        <h3>Quiz ISTQB completado 🎓</h3>
        <div className="big-score">{score} / {quiz.length}</div>
        <p>{pct}% · {aprob ? '¡Aprobado! (umbral 65%) 🌟' : 'Por debajo del 65% de aprobación. ¡Sigue practicando! 💪'}</p>
        <p className="muted small">Tu mejor resultado se guarda en los skills de tu perfil.</p>
        <button className="primary" onClick={onSalir}>Nuevo quiz</button>
      </div>
    )
  }

  const acierto = checked && sameSet(sel, correctas)

  return (
    <div className="istqb-quiz">
      <div className="quiz-top">
        <span>Pregunta {idx + 1} / {quiz.length} · Set {q.examen}</span>
        <span>Aciertos: {score}</span>
      </div>

      <p className="quiz-prompt">{q.pregunta}</p>
      {multi && <p className="istqb-multi">Selecciona {correctas.length} respuestas.</p>}

      <div className="istqb-options">
        {q.opciones.map((o) => {
          let cls = 'istqb-opt'
          if (sel.includes(o.letra)) cls += ' sel'
          if (checked) {
            if (o.correcta) cls += ' correct'
            else if (sel.includes(o.letra)) cls += ' wrong'
          }
          return (
            <button key={o.letra} className={cls} onClick={() => toggle(o.letra)} disabled={checked}>
              <span className="istqb-letra">{o.letra.toUpperCase()}</span>
              <span>{o.texto}</span>
            </button>
          )
        })}
      </div>

      {!checked ? (
        <button className="primary" disabled={sel.length === 0} onClick={comprobar}>Comprobar</button>
      ) : (
        <div className="feedback">
          <span className={acierto ? 'ok' : 'no'}>
            {acierto ? '✅ ¡Correcto!' : '❌ Incorrecto. Respuesta: ' + correctas.map((l) => l.toUpperCase()).join(', ')}
          </span>
          <button className="primary" onClick={siguiente}>
            {idx + 1 >= quiz.length ? 'Ver resultado' : 'Siguiente →'}
          </button>
        </div>
      )}

      <button className="link-btn" onClick={onSalir}>Salir</button>
    </div>
  )
}
