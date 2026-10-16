// API de vocabulario personalizado de Aprende.
//
// Permite añadir, editar y borrar palabras propias para cada uno de los 22
// idiomas de la app. El front lo consume desde la pestaña "Mi vocabulario"
// cuando se define VITE_VOCAB_API (ver .env.example).
//
//   GET    /api/health
//   GET    /api/vocabulario/idiomas
//   GET    /api/vocabulario/:lang            ?level=A1&categoria=Comida&q=manz
//   GET    /api/vocabulario/:lang/:id
//   POST   /api/vocabulario/:lang            { es, w, p?, level?, category? }
//   POST   /api/vocabulario/:lang/lote       { items: [ ... ] }
//   PUT    /api/vocabulario/:lang/:id        { es?, w?, p?, level?, category? }
//   DELETE /api/vocabulario/:lang/:id
//
// Colección de Postman lista para probar: postman/ en la raíz del repo.

const express = require('express')
const cors = require('cors')
const { idiomas, niveles, esIdiomaValido } = require('./idiomas')
const store = require('./store')

const app = express()
app.use(cors()) // el front corre en otro puerto (5173)
app.use(express.json({ limit: '1mb' }))

const MAX = { es: 120, w: 160, p: 160, category: 60 }

// Valida y normaliza el cuerpo de una palabra. `parcial` permite omitir campos
// (PUT), en cuyo caso solo se validan los que vengan.
function validar(body, parcial = false) {
  if (!body || typeof body !== 'object') return { error: 'El cuerpo debe ser un objeto JSON.' }
  const datos = {}

  for (const campo of ['es', 'w']) {
    const v = body[campo]
    if (v === undefined) {
      if (parcial) continue
      return { error: `El campo "${campo}" es obligatorio.` }
    }
    if (typeof v !== 'string' || !v.trim()) return { error: `El campo "${campo}" no puede estar vacío.` }
    if (v.trim().length > MAX[campo]) return { error: `El campo "${campo}" supera ${MAX[campo]} caracteres.` }
    datos[campo] = v.trim()
  }

  for (const campo of ['p', 'category']) {
    const v = body[campo]
    if (v === undefined || v === null || v === '') {
      if (!parcial) datos[campo] = ''
      continue
    }
    if (typeof v !== 'string') return { error: `El campo "${campo}" debe ser texto.` }
    if (v.trim().length > MAX[campo]) return { error: `El campo "${campo}" supera ${MAX[campo]} caracteres.` }
    datos[campo] = v.trim()
  }

  if (body.level === undefined || body.level === null || body.level === '') {
    if (!parcial) datos.level = 'A1'
  } else {
    const nivel = String(body.level).toUpperCase()
    if (!niveles.includes(nivel)) return { error: `"level" debe ser uno de: ${niveles.join(', ')}.` }
    datos.level = nivel
  }

  return { datos }
}

// Comprueba el idioma de la ruta antes de llegar al handler.
function idioma(req, res, next) {
  if (!esIdiomaValido(req.params.lang)) {
    return res.status(404).json({ message: `Idioma "${req.params.lang}" no admitido.` })
  }
  next()
}

// Índice de la API, para saber qué hay aquí al abrir la raíz en el navegador.
app.get('/', (req, res) => {
  res.json({
    servicio: 'Vocabulario personalizado de Aprende',
    endpoints: [
      'GET    /api/health',
      'GET    /api/vocabulario/idiomas',
      'GET    /api/vocabulario/:lang?level=&categoria=&q=',
      'GET    /api/vocabulario/:lang/:id',
      'POST   /api/vocabulario/:lang',
      'POST   /api/vocabulario/:lang/lote',
      'PUT    /api/vocabulario/:lang/:id',
      'DELETE /api/vocabulario/:lang/:id',
    ],
    coleccionPostman: 'postman/Aprende-Vocabulario.postman_collection.json',
  })
})

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', archivo: store.FILE, palabras: store.conteos() })
})

app.get('/api/vocabulario/idiomas', (req, res) => {
  res.json({ idiomas, niveles })
})

app.get('/api/vocabulario/:lang', idioma, (req, res) => {
  const items = store.listar(req.params.lang, {
    level: req.query.level,
    category: req.query.categoria || req.query.category,
    q: req.query.q,
  })
  res.json({ lang: req.params.lang, total: items.length, items })
})

app.get('/api/vocabulario/:lang/:id', idioma, (req, res) => {
  const item = store.obtener(req.params.lang, req.params.id)
  if (!item) return res.status(404).json({ message: 'Palabra no encontrada.' })
  res.json(item)
})

app.post('/api/vocabulario/:lang', idioma, async (req, res, next) => {
  try {
    const { error, datos } = validar(req.body)
    if (error) return res.status(400).json({ message: error })
    if (store.duplicado(req.params.lang, datos.es)) {
      return res.status(409).json({ message: `"${datos.es}" ya existe en este idioma.` })
    }
    res.status(201).json(await store.crear(req.params.lang, datos))
  } catch (e) { next(e) }
})

// Carga por lotes: crea las válidas y devuelve el detalle de las rechazadas.
app.post('/api/vocabulario/:lang/lote', idioma, async (req, res, next) => {
  try {
    const items = req.body && req.body.items
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'Envía "items" como un arreglo con al menos una palabra.' })
    }
    if (items.length > 500) return res.status(400).json({ message: 'Máximo 500 palabras por lote.' })

    const creadas = []
    const rechazadas = []
    for (const [i, raw] of items.entries()) {
      const { error, datos } = validar(raw)
      if (error) { rechazadas.push({ indice: i, motivo: error }); continue }
      if (store.duplicado(req.params.lang, datos.es)) {
        rechazadas.push({ indice: i, motivo: `"${datos.es}" ya existe.` })
        continue
      }
      creadas.push(await store.crear(req.params.lang, datos))
    }
    res.status(201).json({ creadas: creadas.length, rechazadas, items: creadas })
  } catch (e) { next(e) }
})

app.put('/api/vocabulario/:lang/:id', idioma, async (req, res, next) => {
  try {
    const { error, datos } = validar(req.body, true)
    if (error) return res.status(400).json({ message: error })
    if (datos.es && store.duplicado(req.params.lang, datos.es, req.params.id)) {
      return res.status(409).json({ message: `"${datos.es}" ya existe en este idioma.` })
    }
    const item = await store.actualizar(req.params.lang, req.params.id, datos)
    if (!item) return res.status(404).json({ message: 'Palabra no encontrada.' })
    res.json(item)
  } catch (e) { next(e) }
})

app.delete('/api/vocabulario/:lang/:id', idioma, async (req, res, next) => {
  try {
    const ok = await store.borrar(req.params.lang, req.params.id)
    if (!ok) return res.status(404).json({ message: 'Palabra no encontrada.' })
    res.status(204).end()
  } catch (e) { next(e) }
})

app.use((req, res) => res.status(404).json({ message: `Ruta no encontrada: ${req.method} ${req.path}` }))

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.error(err)
  const json = err.type === 'entity.parse.failed'
  res.status(json ? 400 : 500).json({ message: json ? 'JSON inválido.' : 'Error interno: ' + err.message })
})

store.cargar()
const PORT = process.env.PORT || 4100
app.listen(PORT, () => {
  console.log(`Vocabulario de Aprende en http://localhost:${PORT}/api/vocabulario`)
  console.log(`Datos en ${store.FILE}`)
})
