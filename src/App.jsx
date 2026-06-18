import { useState } from 'react'
import { languages } from './data/languages.js'
import { areaById } from './data/knowledge.js'
import { tracksForArea } from './data/lessons.js'
import { useAuth } from './utils/auth.js'
import { useProgress } from './utils/progress.js'
import Login from './components/Login.jsx'
import Paywall from './components/Paywall.jsx'
import ProfileMenu from './components/ProfileMenu.jsx'
import Sidebar from './components/Sidebar.jsx'
import Home from './components/Home.jsx'
import LanguageStudy from './components/LanguageStudy.jsx'
import AreaStudy from './components/AreaStudy.jsx'
import Investments from './components/Investments.jsx'

// Tema (módulo) inicial al abrir un área profesional: las guías si existen, si no
// el lenguaje técnico (los módulos lingüísticos solo aplican a idiomas).
function defaultModule(areaId) {
  const tracks = tracksForArea(areaId)
  return tracks.length ? 'guias:' + tracks[0].id : 'tecnico'
}

export default function App() {
  const auth = useAuth()
  const progress = useProgress()
  const [view, setView] = useState({ type: 'home' }) // home | lang | area
  const [profileOpen, setProfileOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false) // drawer en móvil

  // Requerimiento 0: sin sesión -> login; sin suscripción activa -> muro de pago PSE.
  if (!auth.user) return <Login auth={auth} />
  if (!auth.hasActiveSub) return <Paywall auth={auth} />

  const language = view.type === 'lang' ? languages.find((l) => l.code === view.code) : null
  const area = view.type === 'area' ? areaById(view.id) : null

  function goHome() {
    setView({ type: 'home' })
    setSidebarOpen(false)
  }
  function openArea(id, module) {
    setView({ type: 'area', id, module: module || defaultModule(id) })
    setSidebarOpen(false)
  }
  function openLanguage(code) {
    setView({ type: 'lang', code })
    setSidebarOpen(false)
  }
  function openInv(kind) {
    setView({ type: 'inv', kind })
    setSidebarOpen(false)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-left">
          <button className="hamburger" onClick={() => setSidebarOpen((s) => !s)} title="Menú">☰</button>
          <h1 className="logo" onClick={goHome}>🌍 Aprende</h1>
        </div>
        <button className="profile-icon" onClick={() => setProfileOpen(true)} title="Mi perfil">
          {(auth.user.name || '?').charAt(0).toUpperCase()}
        </button>
      </header>

      <div className="shell">
        {sidebarOpen && <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} />}
        <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <Sidebar view={view} onArea={openArea} onLanguage={openLanguage} onHome={goHome} onInv={openInv} />
        </aside>

        <main className="container">
          {view.type === 'home' && (
            <Home
              user={auth.user}
              onPickLanguage={openLanguage}
              onPickArea={(id) => openArea(id)}
            />
          )}
          {view.type === 'lang' && language && (
            <LanguageStudy language={language} progress={progress} />
          )}
          {view.type === 'area' && area && (
            <AreaStudy area={area} progress={progress} moduleId={view.module} />
          )}
          {view.type === 'inv' && (
            <Investments key={view.kind} kind={view.kind} />
          )}
        </main>
      </div>

      <footer className="app-footer">
        Plataforma educativa · Idiomas (MCER A1–C2) y áreas del conocimiento · Practica un poco cada día 💪
      </footer>

      {profileOpen && (
        <ProfileMenu auth={auth} progress={progress.progress} onClose={() => setProfileOpen(false)} />
      )}
    </div>
  )
}
