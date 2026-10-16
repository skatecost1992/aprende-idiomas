import { useEffect, useState } from 'react'
import { levels } from '../data/levels.js'
import { speak } from '../utils/speak.js'
import { vocabApi, usingService } from '../api/vocabulary.js'

const VACIO = { es: '', w: '', p: '', level: 'A1', category: '' }

// Pestaña "Mi vocabulario": alta, edición y borrado de palabras propias para el
// idioma abierto. Los datos salen del servicio de server/vocabulario cuando
// existe VITE_VOCAB_API; si no, se guardan en el navegador.
export default function MyVocabulary({ language }) {
  const code = language.code
  const [items, setItems] = useState([])
  const [form, setForm] = useState(VACIO)
  const [editId, setEditId] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [guardando, setGuardando] = useState(false)
  const [error, setError] = useState('')
  const [aviso, setAviso] = useState('')

  useEffect(() => {
    let vigente = true
    setCargando(true)
    setError('')
    setEditId(null)
    setForm(VACIO)
    vocabApi.list(code)
      .then((data) => { if (vigente) setItems(data) })
      .catch((e) => { if (vigente) setError(e.message) })
      .finally(() => { if (vigente) setCargando(false) })
    return () => { vigente = false }
  }, [code])

  const campo = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  async function enviar(e) {
    e.preventDefault()
    setError('')
    setAviso('')
    if (!form.es.trim() || !form.w.trim()) {
      setError('Escribe la palabra en español y su traducción.')
      return
    }
    setGuardando(true)
    try {
      if (editId) {
        const item = await vocabApi.update(code, editId, form)
        setItems((prev) => prev.map((i) => (i.id === editId ? item : i)))
        setAviso('Palabra actualizada.')
      } else {
        const item = await vocabApi.create(code, form)
        setItems((prev) => [...prev, item])
        setAviso('Palabra añadida.')
      }
      setForm(VACIO)
      setEditId(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setGuardando(false)
    }
  }

  function editar(item) {
    setEditId(item.id)
    setForm({ es: item.es, w: item.w, p: item.p || '', level: item.level || 'A1', category: item.category || '' })
    setError('')
    setAviso('')
  }

  function cancelar() {
    setEditId(null)
    setForm(VACIO)
    setError('')
  }

  async function borrar(item) {
    setError('')
    setAviso('')
    try {
      await vocabApi.remove(code, item.id)
      setItems((prev) => prev.filter((i) => i.id !== item.id))
      if (editId === item.id) cancelar()
      setAviso(`"${item.es}" eliminada.`)
    } catch (err) {
      setError(err.message)
    }
  }

  // Agrupado por nivel, respetando el orden A1 -> C2.
  const grouped = levels
    .map((lvl) => ({ lvl, words: items.filter((i) => (i.level || 'A1') === lvl.code) }))
    .filter((g) => g.words.length > 0)

  return (
    <div className="myvocab">
      <p className="mv-source">
        {usingService
          ? '🔌 Conectado al servicio de vocabulario: las palabras se guardan en el servidor.'
          : '💾 Sin servicio configurado: las palabras se guardan en este navegador. Define VITE_VOCAB_API para usar la API.'}
      </p>

      <form className="mv-form" onSubmit={enviar}>
        <div className="mv-row">
          <label>
            Español
            <input value={form.es} onChange={campo('es')} placeholder="Manzana" maxLength={120} />
          </label>
          <label>
            {language.name}
            <input
              value={form.w}
              onChange={campo('w')}
              placeholder="Apple"
              maxLength={160}
              dir={language.rtl ? 'rtl' : 'ltr'}
            />
          </label>
        </div>

        <div className="mv-row">
          <label>
            Pronunciación (opcional)
            <input value={form.p} onChange={campo('p')} placeholder="ápel" maxLength={160} />
          </label>
          <label>
            Categoría (opcional)
            <input value={form.category} onChange={campo('category')} placeholder="Comida" maxLength={60} />
          </label>
          <label className="mv-level">
            Nivel
            <select value={form.level} onChange={campo('level')}>
              {levels.map((l) => (
                <option key={l.code} value={l.code}>{l.code}</option>
              ))}
            </select>
          </label>
        </div>

        {error && <p className="mv-error">{error}</p>}
        {aviso && !error && <p className="mv-ok">{aviso}</p>}

        <div className="mv-actions">
          <button type="submit" className="mv-save" disabled={guardando}>
            {guardando ? 'Guardando…' : editId ? 'Guardar cambios' : '➕ Añadir palabra'}
          </button>
          {editId && (
            <button type="button" className="link-btn" onClick={cancelar}>Cancelar</button>
          )}
        </div>
      </form>

      {cargando && <p className="empty-note">Cargando tu vocabulario…</p>}

      {!cargando && items.length === 0 && (
        <p className="empty-note">
          Todavía no has añadido palabras en <strong>{language.name}</strong>. Usa el formulario
          de arriba: aparecerán agrupadas por nivel.
        </p>
      )}

      {grouped.map(({ lvl, words }) => (
        <section key={lvl.code} className="browse-level">
          <h3 className="browse-level-head">
            <span className="level-badge" style={{ background: lvl.color }}>{lvl.code}</span>
            {lvl.title}
          </h3>
          <ul className="word-list">
            {words.map((item) => (
              <li key={item.id} className="word-row mv-item">
                <span className="word-es">
                  {item.es}
                  {item.category && <span className="mv-cat">{item.category}</span>}
                </span>
                <span className="word-arrow">→</span>
                <span className="word-target" dir={language.rtl ? 'rtl' : 'ltr'}>
                  <span className="word-main">{item.w}</span>
                  {item.p && <span className="word-pron">[{item.p}]</span>}
                </span>
                <span className="mv-item-actions">
                  <button className="speak-btn" title="Escuchar" onClick={() => speak(item.w, code)}>🔊</button>
                  <button className="speak-btn" title="Editar" onClick={() => editar(item)}>✏️</button>
                  <button className="speak-btn" title="Eliminar" onClick={() => borrar(item)}>🗑️</button>
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
