// Panel compacto de progreso: racha de días, palabras estudiadas en el idioma
// actual y mejor resultado de quiz. Se muestra bajo la cabecera del idioma.
export default function ProgressBar({ progress, language }) {
  const studied = (progress.studied[language.code] || []).length
  const best = progress.bestQuiz[language.code]

  return (
    <div className="progress-bar">
      <div className="stat">
        <span className="stat-num">🔥 {progress.streak}</span>
        <span className="stat-label">racha (días)</span>
      </div>
      <div className="stat">
        <span className="stat-num">📚 {studied}</span>
        <span className="stat-label">palabras estudiadas</span>
      </div>
      <div className="stat">
        <span className="stat-num">🎯 {best != null ? `${best}%` : '—'}</span>
        <span className="stat-label">mejor quiz</span>
      </div>
      <div className="stat">
        <span className="stat-num">🏆 {progress.longestStreak}</span>
        <span className="stat-label">racha máxima</span>
      </div>
    </div>
  )
}
