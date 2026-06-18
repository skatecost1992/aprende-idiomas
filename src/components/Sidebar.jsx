import { useState } from 'react'
import { areas, moduleTypes } from '../data/knowledge.js'
import { tracksForArea } from '../data/lessons.js'
import { languages } from '../data/languages.js'

const TECNICO = moduleTypes.find((m) => m.id === 'tecnico')

// Agrupa las guías de un área por especialidad y, dentro, por subgrupo.
function buildSpecialties(areaId) {
  const order = []
  const byName = {}
  for (const t of tracksForArea(areaId)) {
    const sp = t.specialty || 'General'
    if (!byName[sp]) { byName[sp] = { name: sp, direct: [], subgroups: {}, subOrder: [] }; order.push(sp) }
    const node = byName[sp]
    if (t.subgroup) {
      if (!node.subgroups[t.subgroup]) { node.subgroups[t.subgroup] = []; node.subOrder.push(t.subgroup) }
      node.subgroups[t.subgroup].push(t)
    } else {
      node.direct.push(t)
    }
  }
  const byOrder = (a, b) => (a.order || 99) - (b.order || 99)
  for (const sp of order) {
    byName[sp].direct.sort(byOrder)
    byName[sp].subOrder.forEach((s) => byName[sp].subgroups[s].sort(byOrder))
  }
  return order.map((n) => byName[n])
}

// Conjunto de nodos abiertos al iniciar, según la vista actual.
function initialOpen(view) {
  const s = new Set()
  if (view.type === 'area') {
    s.add('area:' + view.id)
    const tid = view.module && view.module.startsWith('guias:') ? view.module.slice(6) : null
    const t = tracksForArea(view.id).find((x) => x.id === tid)
    if (t && t.subgroup) {
      s.add('sp:' + view.id + '/' + (t.specialty || 'General'))
      s.add('sub:' + view.id + '/' + (t.specialty || 'General') + '/' + t.subgroup)
    } else {
      // Guías generales (track directo), Lenguaje técnico o Quiz -> Conceptos básicos
      s.add('cb:' + view.id)
    }
  } else if (view.type === 'lang') {
    s.add('idiomas')
  }
  return s
}

export default function Sidebar({ view, onArea, onLanguage, onHome, onInv }) {
  const [open, setOpen] = useState(() => initialOpen(view))
  const [showAreas, setShowAreas] = useState(true)
  const [showInv, setShowInv] = useState(() => view.type === 'inv')
  const isOpen = (k) => open.has(k)
  const toggle = (k) => setOpen((prev) => {
    const n = new Set(prev)
    n.has(k) ? n.delete(k) : n.add(k)
    return n
  })

  function leaf(areaId, track) {
    const mid = 'guias:' + track.id
    const active = view.type === 'area' && view.id === areaId && view.module === mid
    return (
      <li key={track.id}>
        <button className={`side-tema ${active ? 'active' : ''}`} onClick={() => onArea(areaId, mid)}>
          {track.menuIcon || '📚'} {track.menuLabel}
        </button>
      </li>
    )
  }

  function moduleLeaf(areaId, id, icon, name) {
    const active = view.type === 'area' && view.id === areaId && view.module === id
    return (
      <li key={id}>
        <button className={`side-tema ${active ? 'active' : ''}`} onClick={() => onArea(areaId, id)}>
          {icon} {name}
        </button>
      </li>
    )
  }

  function areaBody(area) {
    const specialties = buildSpecialties(area.id)
    // Tracks "directos" (sin subgrupo, p. ej. Guías generales) -> Conceptos básicos.
    const directos = specialties.flatMap((sp) => sp.direct)
    const cbKey = 'cb:' + area.id
    return (
      <ul className="side-temas">
        {/* Conceptos básicos: guías generales + lenguaje técnico + quiz del área */}
        <li>
          <button className="side-sub" onClick={() => toggle(cbKey)}>
            <span>📁 Conceptos básicos</span>
            <span className="chevron">{isOpen(cbKey) ? '▾' : '▸'}</span>
          </button>
          {isOpen(cbKey) && (
            <ul className="side-temas">
              {directos.map((t) => leaf(area.id, t))}
              {TECNICO && moduleLeaf(area.id, TECNICO.id, TECNICO.icon, TECNICO.name)}
              {moduleLeaf(area.id, 'quiz', '🎯', 'Quiz del área')}
            </ul>
          )}
        </li>

        {/* Especialidades con sus subgrupos */}
        {specialties.map((sp) => {
          if (sp.subOrder.length === 0) return null // sus tracks directos ya están en Conceptos básicos
          const spKey = 'sp:' + area.id + '/' + sp.name
          return (
            <li key={sp.name}>
              <button className="side-sub" onClick={() => toggle(spKey)}>
                <span>📂 {sp.name}</span>
                <span className="chevron">{isOpen(spKey) ? '▾' : '▸'}</span>
              </button>
              {isOpen(spKey) && (
                <ul className="side-temas">
                  {sp.subOrder.map((sub) => {
                    const subKey = spKey + '/' + sub
                    return (
                      <li key={sub}>
                        <button className="side-sub" onClick={() => toggle(subKey)}>
                          <span>📁 {sub}</span>
                          <span className="chevron">{isOpen(subKey) ? '▾' : '▸'}</span>
                        </button>
                        {isOpen(subKey) && (
                          <ul className="side-temas">
                            {sp.subgroups[sub].map((t) => leaf(area.id, t))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <nav className="sidebar-nav">
      <button className="side-home" onClick={onHome}>🏠 Inicio</button>

      <button className="side-group" onClick={() => setShowAreas((s) => !s)}>
        <span>🧠 Áreas de conocimiento</span>
        <span className="chevron">{showAreas ? '▾' : '▸'}</span>
      </button>

      {showAreas && (
        <ul className="side-areas">
          {areas.map((area) => {
            const areaKey = 'area:' + area.id
            return (
              <li key={area.id}>
                <button
                  className={`side-area ${view.type === 'area' && view.id === area.id ? 'current' : ''}`}
                  onClick={() => toggle(areaKey)}
                >
                  <span>{area.icon} {area.name}</span>
                  <span className="chevron">{isOpen(areaKey) ? '▾' : '▸'}</span>
                </button>
                {isOpen(areaKey) && areaBody(area)}
              </li>
            )
          })}

          {/* Idiomas, dentro del mismo grupo de áreas */}
          <li>
            <button
              className={`side-area ${view.type === 'lang' ? 'current' : ''}`}
              onClick={() => toggle('idiomas')}
            >
              <span>🌍 Idiomas</span>
              <span className="chevron">{isOpen('idiomas') ? '▾' : '▸'}</span>
            </button>
            {isOpen('idiomas') && (
              <ul className="side-temas">
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      className={`side-tema ${view.type === 'lang' && view.code === lang.code ? 'active' : ''}`}
                      onClick={() => onLanguage(lang.code)}
                    >
                      {lang.flag} {lang.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      )}

      {/* Inversiones: apartado al mismo nivel que Áreas de conocimiento */}
      <button className="side-group" onClick={() => setShowInv((s) => !s)}>
        <span>💰 Inversiones</span>
        <span className="chevron">{showInv ? '▾' : '▸'}</span>
      </button>
      {showInv && (
        <ul className="side-areas">
          <li>
            <button className={`side-area ${view.type === 'inv' && view.kind === 'cdt' ? 'current' : ''}`} onClick={() => onInv('cdt')}>
              <span>🏦 Tasas de CDT</span>
            </button>
          </li>
          <li>
            <button className={`side-area ${view.type === 'inv' && view.kind === 'hipotecas' ? 'current' : ''}`} onClick={() => onInv('hipotecas')}>
              <span>🏠 Créditos hipotecarios</span>
            </button>
          </li>
        </ul>
      )}
    </nav>
  )
}
