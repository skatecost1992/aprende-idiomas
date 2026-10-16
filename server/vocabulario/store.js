// Persistencia del vocabulario personalizado en un archivo JSON.
//
// El archivo (data/vocabulario.json) guarda un objeto indexado por idioma:
//   { "en": [ {id, es, w, p, level, category, createdAt, updatedAt}, ... ], ... }
//
// Se carga en memoria al arrancar y se reescribe completo en cada cambio. Las
// escrituras se encadenan en una promesa para que dos peticiones simultáneas no
// se pisen, y se escribe primero en un .tmp para no dejar el JSON a medias si el
// proceso muere. Suficiente para una app de estudio; para volumen real, cambiar
// esta capa por PostgreSQL sin tocar el resto del servicio.

const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

const FILE = process.env.VOCAB_FILE
  ? path.resolve(process.env.VOCAB_FILE)
  : path.join(__dirname, 'data', 'vocabulario.json')

let db = {}
let cola = Promise.resolve()

function cargar() {
  try {
    db = JSON.parse(fs.readFileSync(FILE, 'utf8'))
  } catch (e) {
    if (e.code !== 'ENOENT') throw new Error(`No se pudo leer ${FILE}: ${e.message}`)
    db = {}
  }
}

function guardar() {
  cola = cola.then(async () => {
    const tmp = FILE + '.tmp'
    await fs.promises.mkdir(path.dirname(FILE), { recursive: true })
    await fs.promises.writeFile(tmp, JSON.stringify(db, null, 2), 'utf8')
    await fs.promises.rename(tmp, FILE)
  })
  return cola
}

function listar(lang, { level, category, q } = {}) {
  let items = db[lang] || []
  if (level) items = items.filter((i) => i.level === level)
  if (category) {
    const c = category.toLowerCase()
    items = items.filter((i) => (i.category || '').toLowerCase() === c)
  }
  if (q) {
    const t = q.toLowerCase()
    items = items.filter((i) => i.es.toLowerCase().includes(t) || i.w.toLowerCase().includes(t))
  }
  return items
}

function obtener(lang, id) {
  return (db[lang] || []).find((i) => i.id === id) || null
}

// Dos palabras son la misma si comparten el término en español (sin distinguir
// mayúsculas/acentos de teclado); evita duplicados al importar por lotes.
function duplicado(lang, es, exceptoId) {
  const clave = es.trim().toLowerCase()
  return (db[lang] || []).find((i) => i.es.trim().toLowerCase() === clave && i.id !== exceptoId) || null
}

async function crear(lang, datos) {
  const ahora = new Date().toISOString()
  const item = { id: 'vc_' + crypto.randomUUID(), ...datos, createdAt: ahora, updatedAt: ahora }
  if (!db[lang]) db[lang] = []
  db[lang].push(item)
  await guardar()
  return item
}

async function actualizar(lang, id, datos) {
  const item = obtener(lang, id)
  if (!item) return null
  Object.assign(item, datos, { updatedAt: new Date().toISOString() })
  await guardar()
  return item
}

async function borrar(lang, id) {
  const items = db[lang] || []
  const i = items.findIndex((x) => x.id === id)
  if (i === -1) return false
  items.splice(i, 1)
  await guardar()
  return true
}

function conteos() {
  return Object.fromEntries(Object.entries(db).map(([k, v]) => [k, v.length]))
}

module.exports = { FILE, cargar, listar, obtener, duplicado, crear, actualizar, borrar, conteos }
