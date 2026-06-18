import { useState } from 'react'
import { speak } from '../utils/speak.js'
import { levels } from '../data/levels.js'

// Vista de exploración: muestra el vocabulario agrupado por nivel MCER y, dentro
// de cada nivel, por categoría. Cada palabra incluye el español, la traducción y
// (si existe) su pronunciación.
export default function Browse({ language, categories }) {
  const [openId, setOpenId] = useState(categories[0]?.id)
  const code = language.code

  if (categories.length === 0) {
    return (
      <p className="empty-note">
        Aún no hay vocabulario para este nivel en la app. Consulta la pestaña
        <strong> 🧭 Ruta</strong> para ver el temario de gramática y destrezas que debes dominar.
      </p>
    )
  }

  // Agrupar las categorías recibidas por nivel, respetando el orden A1 -> C2.
  const grouped = levels
    .map((lvl) => ({ lvl, cats: categories.filter((c) => c.level === lvl.code) }))
    .filter((g) => g.cats.length > 0)

  return (
    <div className="browse">
      {grouped.map(({ lvl, cats }) => (
        <section key={lvl.code} className="browse-level">
          <h3 className="browse-level-head">
            <span className="level-badge" style={{ background: lvl.color }}>{lvl.code}</span>
            {lvl.title}
          </h3>

          {cats.map((cat) => {
            const open = cat.id === openId
            return (
              <section key={cat.id} className="cat">
                <button className="cat-head" onClick={() => setOpenId(open ? null : cat.id)}>
                  <span>{cat.icon} {cat.name}</span>
                  <span className="chevron">{open ? '▾' : '▸'}</span>
                </button>
                {open && (
                  <ul className="word-list">
                    {cat.items.map((item, i) => {
                      const tr = item.t[code]
                      if (!tr) return null
                      return (
                        <li key={i} className="word-row">
                          <span className="word-es">{item.es}</span>
                          <span className="word-arrow">→</span>
                          <span className="word-target" dir={language.rtl ? 'rtl' : 'ltr'}>
                            <span className="word-main">{tr.w}</span>
                            {tr.p && <span className="word-pron">[{tr.p}]</span>}
                          </span>
                          <button
                            className="speak-btn"
                            title="Escuchar"
                            onClick={() => speak(tr.w, code)}
                          >
                            🔊
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </section>
            )
          })}
        </section>
      ))}
    </div>
  )
}
