// Cuadrícula con todas las tarjetas de idiomas disponibles.
export default function LanguageGrid({ languages, onSelect }) {
  return (
    <div className="lang-grid">
      {languages.map((lang) => (
        <button key={lang.code} className="lang-card" onClick={() => onSelect(lang.code)}>
          <span className="lang-flag">{lang.flag}</span>
          <span className="lang-name">{lang.name}</span>
          <span className="lang-native">{lang.native}</span>
        </button>
      ))}
    </div>
  )
}
