/**
 * Servidor de REFERENCIA (Express) para la plataforma.
 *
 * Es un esqueleto NO ejecutable tal cual: muestra la estructura de endpoints,
 * la autenticación con JWT y el flujo de pago PSE con webhook. Para usarlo:
 *
 *   1) cd server && npm init -y
 *   2) npm install express jsonwebtoken bcryptjs cors dotenv
 *      (+ un cliente de BD: pg / prisma, y el SDK de la pasarela: wompi/epayco/payu)
 *   3) renombrar a index.js, implementar el acceso a base de datos real
 *   4) node index.js
 *
 * El pago PSE real SIEMPRE se confirma en el servidor mediante el webhook de la
 * pasarela; nunca se debe activar la suscripción solo desde el front-end.
 */
import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import cors from 'cors'
import 'dotenv/config'

const app = express()
app.use(cors())
app.use(express.json())

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret'

// Reemplazar por una base de datos real (PostgreSQL, etc.).
const db = {
  users: new Map(),       // email -> { id, name, email, passwordHash, subscriptionUntil }
  payments: new Map(),    // paymentId -> { userId, status }
}

function auth(req, res, next) {
  const token = (req.headers.authorization || '').replace('Bearer ', '')
  try {
    req.user = jwt.verify(token, JWT_SECRET)
    next()
  } catch {
    res.status(401).json({ message: 'No autorizado' })
  }
}

// --- Auth ---
app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body
  if (db.users.has(email)) return res.status(409).json({ message: 'El usuario ya existe' })
  const passwordHash = await bcrypt.hash(password, 10)
  const user = { id: Date.now().toString(), name, email, passwordHash, subscriptionUntil: 0 }
  db.users.set(email, user)
  const token = jwt.sign({ id: user.id, email }, JWT_SECRET, { expiresIn: '7d' })
  res.json({ token, user: { id: user.id, name, email } })
})

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body
  const user = db.users.get(email)
  if (!user || !(await bcrypt.compare(password, user.passwordHash)))
    return res.status(401).json({ message: 'Credenciales inválidas' })
  const token = jwt.sign({ id: user.id, email }, JWT_SECRET, { expiresIn: '7d' })
  res.json({ token, user: { id: user.id, name: user.name, email } })
})

app.get('/api/subscription', auth, (req, res) => {
  const user = db.users.get(req.user.email)
  res.json({ active: (user?.subscriptionUntil || 0) > Date.now(), until: user?.subscriptionUntil || 0 })
})

// --- Pago PSE ---
// 1) El front pide iniciar el pago; el backend llama a la pasarela y devuelve la
//    URL del banco a la que se redirige al usuario.
app.post('/api/payments/pse', auth, async (req, res) => {
  const { bank, personType, docType, doc } = req.body
  // const result = await gateway.createPSETransaction({ amount: 2990000, bank, ... })
  const paymentId = 'pse_' + Date.now()
  db.payments.set(paymentId, { userId: req.user.id, status: 'PENDING' })
  res.json({ paymentId, redirectUrl: `https://gateway.example/pse/${paymentId}` /* result.url */ })
})

// 2) La pasarela confirma el resultado real mediante un webhook firmado.
app.post('/api/payments/webhook', (req, res) => {
  // verificar la firma con process.env.PAYMENT_EVENTS_SECRET antes de confiar
  const { paymentId, status } = req.body
  const payment = db.payments.get(paymentId)
  if (payment && status === 'APPROVED') {
    payment.status = 'APPROVED'
    for (const user of db.users.values()) {
      if (user.id === payment.userId) {
        const base = Math.max(Date.now(), user.subscriptionUntil || 0)
        user.subscriptionUntil = base + 30 * 24 * 60 * 60 * 1000
      }
    }
  }
  res.sendStatus(200)
})

// --- Progreso ---
app.get('/api/progress', auth, (req, res) => res.json({ /* leer de BD */ }))
app.put('/api/progress', auth, (req, res) => { /* guardar en BD */ res.sendStatus(204) })

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`API escuchando en http://localhost:${PORT}`))
