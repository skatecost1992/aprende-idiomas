// Cliente de API para conectar el front-end con un backend real.
//
// Hoy la app funciona con datos simulados en localStorage (ver utils/auth.js y
// utils/progress.js). Cuando exista el backend, define VITE_API_URL en .env y
// reemplaza las llamadas de esos hooks por las funciones de este módulo.
//
// El token JWT se guarda en localStorage y se envía en cada petición protegida.

const BASE = import.meta.env.VITE_API_URL || ''
const TOKEN_KEY = 'ai-token'

export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}
export function setToken(t) {
  if (t) localStorage.setItem(TOKEN_KEY, t)
  else localStorage.removeItem(TOKEN_KEY)
}

async function request(path, { method = 'GET', body, auth = true } = {}) {
  const headers = { 'Content-Type': 'application/json' }
  if (auth && getToken()) headers.Authorization = `Bearer ${getToken()}`

  const res = await fetch(`${BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })

  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.message || `Error ${res.status}`)
  return data
}

// --- Autenticación ---
export const api = {
  register: (payload) => request('/auth/register', { method: 'POST', body: payload, auth: false }),
  login: (payload) => request('/auth/login', { method: 'POST', body: payload, auth: false }),
  me: () => request('/auth/me'),

  // --- Suscripción y pago PSE ---
  getSubscription: () => request('/subscription'),
  // Inicia un pago PSE; el backend devuelve la URL del banco a la que redirigir.
  createPSEPayment: (payload) => request('/payments/pse', { method: 'POST', body: payload }),
  getPaymentStatus: (id) => request(`/payments/${id}`),

  // --- Progreso y skills ---
  getProgress: () => request('/progress'),
  saveProgress: (progress) => request('/progress', { method: 'PUT', body: progress }),

  // --- Contenido (opcional: servir áreas/idiomas desde el backend) ---
  getAreas: () => request('/content/areas', { auth: false }),
}
