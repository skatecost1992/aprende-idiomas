import { useState } from 'react'
import { levels, roadmapIntro } from '../data/levels.js'

// Ruta de aprendizaje MCER (A1 -> C2). Muestra, para cada nivel:
// el descriptor "puede hacer", el temario de gramática y las destrezas,
// y cuántas categorías de vocabulario de la app pertenecen a ese nivel.
export default function Roadmap({ categories }) {
  const [openCode, setOpenCode] = useState('A1')

  return (
    <div className="roadmap">
      <p className="roadmap-intro">{roadmapIntro}</p>

      <div className="ladder">
        {levels.map((lvl, i) => {
          const open = lvl.code === openCode
          const cats = categories.filter((c) => c.level === lvl.code)
          return (
            <div key={lvl.code} className={`level ${open ? 'open' : ''}`}>
              <button
                className="level-head"
                style={{ borderLeftColor: lvl.color }}
                onClick={() => setOpenCode(open ? null : lvl.code)}
              >
                <span className="level-badge" style={{ background: lvl.color }}>{lvl.code}</span>
                <span className="level-titles">
                  <strong>{lvl.title}</strong>
                  <small>{lvl.stage}</small>
                </span>
                <span className="level-meta">{cats.length > 0 ? `${cats.length} temas` : 'temario'}</span>
              </button>

              {open && (
                <div className="level-body">
                  <p className="level-descriptor">{lvl.descriptor}</p>

                  <div className="level-cols">
                    <div>
                      <h4>📐 Gramática y estructuras</h4>
                      <ul>{lvl.grammar.map((g, k) => <li key={k}>{g}</li>)}</ul>
                    </div>
                    <div>
                      <h4>🎧 Destrezas a practicar</h4>
                      <ul>{lvl.skills.map((s, k) => <li key={k}>{s}</li>)}</ul>
                    </div>
                  </div>

                  {cats.length > 0 && (
                    <div className="level-cats">
                      <h4>📚 Vocabulario de este nivel en la app</h4>
                      <div className="cat-chips">
                        {cats.map((c) => (
                          <span key={c.id} className="cat-chip">{c.icon} {c.name}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {cats.length === 0 && (
                    <p className="level-note">
                      En este nivel el progreso ya no depende de listas de palabras, sino de la
                      exposición a contenido real (lectura, audio y conversación). Usa este temario
                      como guía de lo que debes dominar.
                    </p>
                  )}
                </div>
              )}

              {i < levels.length - 1 && <div className="level-connector" />}
            </div>
          )
        })}
      </div>
    </div>
  )
}
