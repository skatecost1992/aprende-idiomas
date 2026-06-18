import { languages } from '../data/languages.js'
import { categories } from '../data/vocabulary.js'
import { areas } from '../data/knowledge.js'

// Pantalla principal (Requerimiento 1): temas a aprender en cualquier área del
// conocimiento o idioma.
export default function Home({ user, onPickLanguage, onPickArea }) {
  return (
    <div className="home">
      <p className="intro">
        Hola <strong>{user?.name?.split(' ')[0] || 'estudiante'}</strong> 👋, ¿qué quieres aprender hoy?
      </p>

      <section className="home-section">
        <h2>🧠 Áreas del conocimiento</h2>
        <p className="section-sub">Vocabulario, lenguaje técnico, formal, no formal y tiempos verbales por profesión.</p>
        <div className="area-grid">
          {areas.map((a) => (
            <button key={a.id} className="area-card" onClick={() => onPickArea(a.id)}>
              <span className="area-icon">{a.icon}</span>
              <span className="area-name">{a.name}</span>
              <span className="area-desc">{a.description}</span>
              <span className="area-tag">{a.specialties.length} especialidades</span>
            </button>
          ))}
        </div>
      </section>

      <section className="home-section">
        <h2>🌍 Idiomas</h2>
        <p className="section-sub">
          {languages.length} idiomas · ruta A1–C2 · {categories.reduce((n, c) => n + c.items.length, 0)} palabras y frases.
        </p>
        <div className="lang-grid">
          {languages.map((lang) => (
            <button key={lang.code} className="lang-card" onClick={() => onPickLanguage(lang.code)}>
              <span className="lang-flag">{lang.flag}</span>
              <span className="lang-name">{lang.name}</span>
              <span className="lang-native">{lang.native}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
