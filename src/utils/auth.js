import { useState } from 'react'
import { api, setToken } from '../api/client.js'

// Autenticación y suscripción.
// - Si está definida VITE_API_URL, usa el backend real (JWT + pasarela PSE).
// - Si no, funciona en modo demo con localStorage (sin backend).
const USE_API = !!import.meta.env.VITE_API_URL
const USERS = 'ai-users'
const SESSION = 'ai-session'
const MONTH_MS = 30 * 24 * 60 * 60 * 1000

function loadUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS)) || {}
  } catch {
    return {}
  }
}
function saveUsers(u) {
  try {
    localStorage.setItem(USERS, JSON.stringify(u))
  } catch {
    /* almacenamiento no disponible */
  }
}

export function useAuth() {
  // Estado del modo demo (localStorage)
  const [username, setUsername] = useState(() => localStorage.getItem(SESSION) || null)
  const [users, setUsers] = useState(loadUsers)
  // Estado del modo API (backend)
  const [apiUser, setApiUser] = useState(null)
  const [apiSubUntil, setApiSubUntil] = useState(0)

  let user, hasActiveSub
  if (USE_API) {
    user = apiUser
    hasActiveSub = apiSubUntil > Date.now()
  } else {
    user = username && users[username] ? { username, ...users[username] } : null
    hasActiveSub = !!(user && user.subscriptionUntil && user.subscriptionUntil > Date.now())
  }

  function persist(next) {
    setUsers(next)
    saveUsers(next)
  }

  async function refresh() {
    if (!USE_API) return
    try {
      const s = await api.getSubscription()
      setApiSubUntil(s.until || 0)
    } catch {
      /* sin conexión */
    }
  }

  async function register({ username, password, name, email }) {
    if (USE_API) {
      try {
        const res = await api.register({ name, email: email || username, password })
        setToken(res.token)
        setApiUser(res.user)
        await refresh()
        return {}
      } catch (e) {
        return { error: e.message }
      }
    }
    const u = loadUsers()
    if (!username || !password) return { error: 'Usuario y contraseña son obligatorios.' }
    if (u[username]) return { error: 'Ese usuario ya existe. Inicia sesión.' }
    u[username] = { password, name: name || username, email: email || '', subscriptionUntil: 0 }
    persist(u)
    localStorage.setItem(SESSION, username)
    setUsername(username)
    return {}
  }

  async function login({ username, password }) {
    if (USE_API) {
      try {
        const res = await api.login({ email: username, password })
        setToken(res.token)
        setApiUser(res.user)
        await refresh()
        return {}
      } catch (e) {
        return { error: e.message }
      }
    }
    const u = loadUsers()
    if (!u[username]) return { error: 'El usuario no existe.' }
    if (u[username].password !== password) return { error: 'Contraseña incorrecta.' }
    setUsers(u)
    localStorage.setItem(SESSION, username)
    setUsername(username)
    return {}
  }

  function logout() {
    if (USE_API) {
      setToken(null)
      setApiUser(null)
      setApiSubUntil(0)
      return
    }
    localStorage.removeItem(SESSION)
    setUsername(null)
  }

  // Activa (o renueva) la suscripción tras un pago correcto.
  // En modo API real la activación la confirma el webhook del servidor; aquí solo
  // refrescamos el estado. En modo demo se activa localmente.
  function activateSubscription(months = 1) {
    if (USE_API) {
      refresh()
      return
    }
    const u = loadUsers()
    if (!u[username]) return
    const base = Math.max(Date.now(), u[username].subscriptionUntil || 0)
    u[username] = { ...u[username], subscriptionUntil: base + months * MONTH_MS }
    persist(u)
  }

  return { user, hasActiveSub, register, login, logout, activateSubscription, refresh, useApi: USE_API }
}
