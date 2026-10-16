// Cliente del vocabulario personalizado.
//
// Si existe VITE_VOCAB_API (ver .env.example) se usa el servicio de
// server/vocabulario. Si no, la pestaña "Mi vocabulario" sigue funcionando
// contra localStorage, igual que el resto de la demo, para que la app no
// dependa de tener el backend levantado.

const BASE = import.meta.env.VITE_VOCAB_API || ''
const KEY = 'ai-vocab'

// true cuando las palabras viajan al servicio; false cuando se quedan en el navegador.
export const usingService = Boolean(BASE)

// ---- Modo local (localStorage) ----

function readAll() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {}
  } catch {
    return {}
  }
}

function writeAll(db) {
  localStorage.setItem(KEY, JSON.stringify(db))
}

function normalize(es) {
  return String(es || '').trim().toLowerCase()
}

const local = {
  list(lang) {
    return readAll()[lang] || []
  },
  create(lang, datos) {
    const db = readAll()
    const items = db[lang] || (db[lang] = [])
    if (items.some((i) => normalize(i.es) === normalize(datos.es))) {
      throw new Error(`"${datos.es}" ya existe en este idioma.`)
    }
    const ahora = new Date().toISOString()
    const item = { id: 'vc_' + ahora + '_' + Math.random().toString(36).slice(2, 8), ...datos, createdAt: ahora, updatedAt: ahora }
    items.push(item)
    writeAll(db)
    return item
  },
  update(lang, id, datos) {
    const db = readAll()
    const items = db[lang] || []
    const item = items.find((i) => i.id === id)
    if (!item) throw new Error('Palabra no encontrada.')
    if (datos.es && items.some((i) => i.id !== id && normalize(i.es) === normalize(datos.es))) {
      throw new Error(`"${datos.es}" ya existe en este idioma.`)
    }
    Object.assign(item, datos, { updatedAt: new Date().toISOString() })
    writeAll(db)
    return item
  },
  remove(lang, id) {
    const db = readAll()
    db[lang] = (db[lang] || []).filter((i) => i.id !== id)
    writeAll(db)
  },
}

// ---- Modo servicio (server/vocabulario) ----

async function request(path, { method = 'GET', body } = {}) {
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: body ? { 'Content-Type': 'application/json' } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  })
  if (res.status === 204) return null
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.message || `El servicio respondió ${res.status}`)
  return data
}

const remote = {
  list: (lang) => request(`/${lang}`).then((d) => d.items),
  create: (lang, datos) => request(`/${lang}`, { method: 'POST', body: datos }),
  update: (lang, id, datos) => request(`/${lang}/${id}`, { method: 'PUT', body: datos }),
  remove: (lang, id) => request(`/${lang}/${id}`, { method: 'DELETE' }),
}

const impl = usingService ? remote : local

// Todas devuelven promesas, así el componente no distingue entre local y servicio.
export const vocabApi = {
  list: async (lang) => impl.list(lang),
  create: async (lang, datos) => impl.create(lang, datos),
  update: async (lang, id, datos) => impl.update(lang, id, datos),
  remove: async (lang, id) => impl.remove(lang, id),
}
