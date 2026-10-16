import { useState } from 'react'
import { speak } from '../utils/speak.js'
import { listsFor } from '../data/langLists.js'

// Quiz de opción múltiple: se muestra la palabra en español y hay que elegir
// la traducción correcta entre 4 opciones del idioma seleccionado.
//
// Las preguntas salen del vocabulario general o de las listas de verbos del
// idioma (irregulares, regulares y phrasal verbs), que se eligen con los chips
// de fuente. Los idiomas sin listas solo muestran el vocabulario, como antes.
//
// Cada pregunta lleva un `modo` que decide cómo se enuncia y, sobre todo, de
// dónde salen las opciones incorrectas: solo compiten entre sí preguntas del
// mismo modo, para que un pasado nunca aparezca junto a una traducción.
function buildPool(categories, code) {
  return categories
    .flatMap((c) => c.items.map((it) => ({ modo: 'trad', es: it.es, w: it.t[code]?.w, p: it.t[code]?.p })))
    .filter((x) => x.w)
}

// Convierte una sección de langLists.js en preguntas. De las tablas de verbos
// salen tres tipos: la traducción (español -> infinitivo), el pasado y el
// participio. Las etiquetas se toman de las columnas de la propia sección,
// porque cambian según el idioma (Pasado, Präteritum, Présent...).
function poolFromSection(section) {
  if (section.type === 'verbs') {
    const etiqueta = (k) => (section.cols.find((c) => c.k === k) || {}).l || k
    const preguntas = []

    for (const r of section.rows) {
      preguntas.push({ modo: 'trad', es: r.es, w: r.base })
      if (r.past) {
        preguntas.push({ modo: 'past', es: r.base, w: r.past, etiqueta: etiqueta('past') })
      }
      // En los regulares (y en verbos como "say") el participio coincide con el
      // pasado: preguntarlo otra vez sería la misma pregunta.
      if (r.part && r.part !== r.past) {
        preguntas.push({ modo: 'part', es: r.base, w: r.part, etiqueta: etiqueta('part') })
      }
    }

    return preguntas
  }
  if (section.type === 'phrases') {
    return section.rows.map((r) => ({ modo: 'trad', es: r.es, w: r.v, ex: r.ex }))
  }
  if (section.type === 'modals') {
    // Los modales no se traducen palabra por palabra, así que se pregunta por su
    // función: se enuncia para qué sirve y hay que elegir cuál es.
    return section.rows.map((r) => ({
      modo: 'modal',
      es: r.fn.replace(/\.$/, ''),
      w: r.v,
      ex: r.ex[0],
    }))
  }
  if (section.type === 'terms' && section.quiz) {
    return section.rows.map((r) => ({ modo: 'trad', es: r.es, w: r.term }))
  }
  return [] // el vocabulario técnico no entra en el quiz
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
    // Las opciones falsas salen de preguntas del mismo tipo; si no hay
    // suficientes, se completan con el resto del grupo.
    const mismoModo = pool.filter((x) => x.modo === q.modo && x.w !== q.w)
    const fuente = mismoModo.length >= 3 ? mismoModo : pool.filter((x) => x.w !== q.w)
    const distractors = shuffled(fuente).slice(0, 3)
    return { ...q, options: shuffled([q, ...distractors]) }
  })
}

export default function Quiz({ language, categories, onFinish }) {
  const code = language.code

  // Listas de verbos disponibles para este idioma, sin el vocabulario técnico.
  const secciones = (listsFor(code) || []).filter(
    (s) => s.type === 'verbs' || s.type === 'phrases' || s.type === 'modals' ||
      (s.type === 'terms' && s.quiz),
  )

  const fuentes = [
    { id: 'vocab', label: 'Vocabulario', icon: '📚' },
    ...secciones.map((s) => ({ id: s.id, label: s.label, icon: s.icon })),
    ...(secciones.length ? [{ id: 'todo', label: 'Todo mezclado', icon: '🎲' }] : []),
  ]

  function poolPara(fuenteId) {
    if (fuenteId === 'vocab') return buildPool(categories, code)
    if (fuenteId === 'todo') {
      return [...buildPool(categories, code), ...secciones.flatMap(poolFromSection)]
    }
    const s = secciones.find((x) => x.id === fuenteId)
    return s ? poolFromSection(s) : []
  }

  const [fuente, setFuente] = useState('vocab')
  const [questions, setQuestions] = useState(() => makeQuestions(poolPara('vocab')))
  const [idx, setIdx] = useState(0)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  function empezar(fuenteId) {
    setFuente(fuenteId)
    setQuestions(makeQuestions(poolPara(fuenteId)))
    setIdx(0)
    setPicked(null)
    setScore(0)
    setDone(false)
  }

  const selector = fuentes.length > 1 && (
    <div className="level-filter quiz-fuentes">
      {fuentes.map((f) => (
        <button
          key={f.id}
          className={`chip ${fuente === f.id ? 'active' : ''}`}
          onClick={() => empezar(f.id)}
        >
          {f.icon} {f.label}
        </button>
      ))}
    </div>
  )

  const q = questions[idx]

  if (!q) {
    return (
      <div>
        {selector}
        <p className="empty-note">
          {fuente === 'vocab' || fuente === 'todo' ? (
            <>
              No hay suficiente vocabulario en este nivel para un quiz. Prueba con
              <strong> Todos</strong> los niveles o consulta la <strong>🧭 Ruta</strong>.
            </>
          ) : (
            <>Esta lista no tiene suficientes verbos para un quiz.</>
          )}
        </p>
      </div>
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

  if (done) {
    const pct = Math.round((score / questions.length) * 100)
    return (
      <div>
        {selector}
        <div className="quiz-result">
          <h3>¡Quiz completado! 🎉</h3>
          <div className="big-score">{score} / {questions.length}</div>
          <p>{pct >= 80 ? '¡Excelente! 🌟' : pct >= 50 ? '¡Bien, sigue practicando! 👍' : 'No te rindas, inténtalo otra vez 💪'}</p>
          <button className="primary" onClick={() => empezar(fuente)}>Reintentar</button>
        </div>
      </div>
    )
  }

  return (
    <div className="quiz">
      {selector}

      <div className="quiz-top">
        <span>Pregunta {idx + 1} / {questions.length}</span>
        <span>Aciertos: {score}</span>
      </div>

      <p className="quiz-prompt">
        {q.modo === 'past' || q.modo === 'part' ? (
          // Enunciado neutro: la etiqueta cambia mucho según el idioma
          // (Pasado, Präteritum, Forma て, Con 了...) y así siempre encaja.
          <>¿Cómo es <strong>«{q.es}»</strong> en <strong>{q.etiqueta}</strong>?</>
        ) : q.modo === 'modal' ? (
          <>¿Qué verbo modal se usa para <strong>«{q.es}»</strong>?</>
        ) : (
          <>¿Cómo se dice <strong>«{q.es}»</strong> en {language.name}?</>
        )}
      </p>

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
          {q.ex && <span className="quiz-ejemplo">«{q.ex}»</span>}
          <button className="primary" onClick={nextQuestion}>
            {idx + 1 >= questions.length ? 'Ver resultado' : 'Siguiente →'}
          </button>
        </div>
      )}
    </div>
  )
}
