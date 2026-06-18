import { computeSkills } from '../utils/progress.js'
import { languages } from '../data/languages.js'
import { areas } from '../data/knowledge.js'

// Menú de perfil (Requerimiento 2): datos del usuario y skills obtenidos a
// partir de los estudios realizados y los resultados en la plataforma.
export default function ProfileMenu({ auth, progress, onClose }) {
  const user = auth.user
  const skills = computeSkills(progress, languages, areas)
  const subDate = user?.subscriptionUntil
    ? new Date(user.subscriptionUntil).toLocaleDateString('es', { year: 'numeric', month: 'long', day: 'numeric' })
    : '—'

  return (
    <>
      <div className="overlay" onClick={onClose} />
      <aside className="profile-panel">
        <button className="profile-close" onClick={onClose}>✕</button>

        <div className="profile-head">
          <div className="avatar">{(user?.name || '?').charAt(0).toUpperCase()}</div>
          <div>
            <h3>{user?.name}</h3>
            <span className="muted">@{user?.username}</span>
          </div>
        </div>

        <ul className="profile-data">
          <li><span>Correo</span><strong>{user?.email || '—'}</strong></li>
          <li><span>Suscripción activa hasta</span><strong>{subDate}</strong></li>
          <li><span>Racha actual</span><strong>🔥 {progress.streak} días</strong></li>
          <li><span>Quizzes realizados</span><strong>{progress.quizzesTaken}</strong></li>
        </ul>

        <h4 className="profile-section">🏅 Mis skills</h4>
        {skills.length === 0 ? (
          <p className="muted small">Aún no tienes skills. Estudia idiomas o áreas del conocimiento para empezar a sumarlos.</p>
        ) : (
          <ul className="skill-list">
            {skills.map((s) => (
              <li key={s.key} className="skill">
                <span className="skill-icon">{s.icon}</span>
                <div className="skill-info">
                  <div className="skill-top">
                    <strong>{s.label}</strong>
                    <span className={`skill-level lvl-${s.level.toLowerCase()}`}>{s.level}</span>
                  </div>
                  <span className="skill-detail">{s.kind} · {s.detail}</span>
                  <div className="skill-bar"><div style={{ width: `${Math.min(100, s.points * 3)}%` }} /></div>
                </div>
              </li>
            ))}
          </ul>
        )}

        <button className="logout-btn" onClick={auth.logout}>Cerrar sesión</button>
      </aside>
    </>
  )
}
