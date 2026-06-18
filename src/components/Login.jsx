import { useState } from 'react'

// Pantalla de acceso: iniciar sesión o crear cuenta (usuario y contraseña).
export default function Login({ auth }) {
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState({ username: '', password: '', name: '', email: '' })
  const [error, setError] = useState('')

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const [loading, setLoading] = useState(false)

  async function submit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const res = await (mode === 'login' ? auth.login(form) : auth.register(form))
    setLoading(false)
    if (res?.error) setError(res.error)
  }

  return (
    <div className="gate">
      <div className="gate-card">
        <h1 className="logo">🌍 Aprende</h1>
        <p className="gate-sub">Idiomas y áreas del conocimiento</p>

        <div className="auth-tabs">
          <button className={mode === 'login' ? 'active' : ''} onClick={() => { setMode('login'); setError('') }}>
            Iniciar sesión
          </button>
          <button className={mode === 'register' ? 'active' : ''} onClick={() => { setMode('register'); setError('') }}>
            Crear cuenta
          </button>
        </div>

        <form onSubmit={submit} className="auth-form">
          {mode === 'register' && (
            <>
              <input placeholder="Nombre completo" value={form.name} onChange={set('name')} />
              <input placeholder="Correo electrónico" type="email" value={form.email} onChange={set('email')} />
            </>
          )}
          <input placeholder="Usuario" value={form.username} onChange={set('username')} autoComplete="username" />
          <input placeholder="Contraseña" type="password" value={form.password} onChange={set('password')} autoComplete="current-password" />

          {error && <p className="auth-error">⚠️ {error}</p>}

          <button type="submit" className="primary big" disabled={loading}>
            {loading ? 'Procesando…' : mode === 'login' ? 'Entrar' : 'Registrarme'}
          </button>
        </form>

        <p className="gate-note">
          Tras crear tu cuenta necesitarás una suscripción activa para acceder al contenido.
        </p>
      </div>
    </div>
  )
}
