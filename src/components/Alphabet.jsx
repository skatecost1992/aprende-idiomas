import { speak } from '../utils/speak.js'
import { alphabets } from '../data/alphabets.js'

// Muestra el alfabeto del idioma en una cuadrícula. Cada celda tiene la letra/
// carácter y su pronunciación aproximada; al pulsarla, se escucha.
export default function Alphabet({ language }) {
  const data = alphabets[language.code]

  if (!data) {
    return <p className="empty-note">Aún no hay alfabeto cargado para este idioma.</p>
  }

  return (
    <div className="alphabet">
      <p className="alpha-note">{data.note}</p>
      <div className="alpha-grid">
        {data.letters.map((l, i) => (
          <button
            key={i}
            className="alpha-cell"
            onClick={() => speak(l.c, language.code)}
            title="Escuchar"
            dir={language.rtl ? 'rtl' : 'ltr'}
          >
            <span className="alpha-char">{l.c}</span>
            <span className="alpha-p">{l.p}</span>
          </button>
        ))}
      </div>
      <p className="muted small alpha-hint">🔊 Pulsa una letra para escucharla.</p>
    </div>
  )
}
