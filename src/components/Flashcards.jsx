import { useMemo, useState } from 'react'
import { speak } from '../utils/speak.js'

// Tarjetas de memoria: muestra la palabra en español y, al voltear,
// la traducción al idioma elegido. Recorre todo el vocabulario.
function buildDeck(categories, code) {
  return categories
    .flatMap((c) => c.items.map((it) => ({ es: it.es, ...it.t[code], cat: c.name })))
    .filter((x) => x.w)
}

export default function Flashcards({ language, categories, onStudied }) {
  const code = language.code
  const deck = useMemo(() => buildDeck(categories, code), [categories, code])
  const [order, setOrder] = useState(() => deck.map((_, i) => i))
  const [pos, setPos] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const card = deck[order[pos]]

  function flip() {
    setFlipped((f) => {
      // Al revelar la traducción por primera vez, cuenta la palabra como estudiada.
      if (!f && card && onStudied) onStudied(card.es)
      return !f
    })
  }

  function next(step) {
    setFlipped(false)
    setPos((p) => (p + step + deck.length) % deck.length)
  }

  function shuffle() {
    const a = [...order]
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
    }
    setOrder(a)
    setPos(0)
    setFlipped(false)
  }

  if (!card) return <p>No hay tarjetas.</p>

  return (
    <div className="flashcards">
      <div className="card-counter">{pos + 1} / {deck.length} · {card.cat}</div>

      <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={flip}>
        <div className="face front">
          <span className="face-label">Español</span>
          <span className="face-text">{card.es}</span>
          <span className="hint">Toca para ver la traducción</span>
        </div>
        <div className="face back">
          <span className="face-label">{language.name}</span>
          <span className="face-text" dir={language.rtl ? 'rtl' : 'ltr'}>{card.w}</span>
          {card.p && <span className="face-pron">[{card.p}]</span>}
        </div>
      </div>

      <div className="card-controls">
        <button onClick={() => next(-1)}>← Anterior</button>
        <button className="primary" onClick={() => speak(card.w, code)}>🔊 Escuchar</button>
        <button onClick={() => next(1)}>Siguiente →</button>
      </div>
      <button className="shuffle" onClick={shuffle}>🔀 Mezclar</button>
    </div>
  )
}
