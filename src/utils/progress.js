import { useEffect, useRef, useState } from 'react'
import { api, getToken } from '../api/client.js'

// Hook de progreso.
// - Siempre cachea en localStorage.
// - Si hay backend (VITE_API_URL) y sesión, también lo sincroniza con el servidor.
const USE_API = !!import.meta.env.VITE_API_URL
const KEY = 'aprende-idiomas-progress'

const EMPTY = {
  streak: 0,
  longestStreak: 0,
  lastDate: null,      // 'YYYY-MM-DD' de la última visita
  studied: {},         // { [lang]: [es, es, ...] } palabras vistas (únicas)
  bestQuiz: {},         // { [lang]: porcentaje 0-100 }
  quizzesTaken: 0,
  knowledge: {},       // { [areaId]: [itemId, ...] } conceptos marcados como aprendidos
}

// Etiqueta de nivel a partir de los puntos acumulados.
export function skillLevel(points) {
  if (points >= 31) return 'Avanzado'
  if (points >= 11) return 'Intermedio'
  return 'Principiante'
}

// Construye la lista de skills del perfil a partir del progreso.
export function computeSkills(progress, languages, areas) {
  const skills = []
  for (const lang of languages) {
    const words = (progress.studied[lang.code] || []).length
    const best = progress.bestQuiz[lang.code]
    const points = words + (best != null ? Math.round(best / 10) : 0)
    if (points > 0) {
      skills.push({
        key: 'lang-' + lang.code,
        icon: lang.flag,
        label: lang.name,
        kind: 'Idioma',
        points,
        level: skillLevel(points),
        detail: `${words} palabras${best != null ? ` · mejor quiz ${best}%` : ''}`,
      })
    }
  }
  for (const area of areas) {
    const items = (progress.knowledge[area.id] || []).length
    const quiz = progress.bestQuiz['area:' + area.id]
    const points = items + (quiz != null ? Math.round(quiz / 10) : 0)
    if (points > 0) {
      skills.push({
        key: 'area-' + area.id,
        icon: area.icon,
        label: area.name,
        kind: 'Área',
        points,
        level: skillLevel(points),
        detail: `${items} conceptos${quiz != null ? ` · mejor quiz ${quiz}%` : ''}`,
      })
    }
  }
  return skills.sort((a, b) => b.points - a.points)
}

function today() {
  return new Date().toISOString().slice(0, 10)
}

function daysBetween(a, b) {
  const d1 = new Date(a + 'T00:00:00')
  const d2 = new Date(b + 'T00:00:00')
  return Math.round((d2 - d1) / 86400000)
}

function load() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? { ...EMPTY, ...JSON.parse(raw) } : { ...EMPTY }
  } catch {
    return { ...EMPTY }
  }
}

export function useProgress() {
  const [progress, setProgress] = useState(load)
  const started = useRef(false)

  // Actualiza la racha una vez al iniciar la sesión.
  useEffect(() => {
    if (started.current) return
    started.current = true
    setProgress((p) => {
      const t = today()
      if (p.lastDate === t) return p // ya contado hoy
      let streak = 1
      if (p.lastDate) {
        const diff = daysBetween(p.lastDate, t)
        streak = diff === 1 ? p.streak + 1 : 1
      }
      const longestStreak = Math.max(p.longestStreak, streak)
      return { ...p, streak, longestStreak, lastDate: t }
    })
  }, [])

  // Al iniciar, si hay backend y sesión, carga el progreso remoto.
  useEffect(() => {
    if (!USE_API || !getToken()) return
    api.getProgress()
      .then((remote) => {
        if (remote && Object.keys(remote).length) setProgress((p) => ({ ...p, ...remote }))
      })
      .catch(() => { /* sin conexión: se usa la caché local */ })
  }, [])

  // Persiste en cada cambio: localStorage (caché) y, si procede, el backend.
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(progress))
    } catch {
      /* almacenamiento no disponible */
    }
    if (USE_API && getToken()) {
      api.saveProgress(progress).catch(() => { /* se reintentará en el próximo cambio */ })
    }
  }, [progress])

  function recordStudied(lang, es) {
    setProgress((p) => {
      const list = p.studied[lang] || []
      if (list.includes(es)) return p
      return { ...p, studied: { ...p.studied, [lang]: [...list, es] } }
    })
  }

  function recordQuiz(lang, score, total) {
    const pct = total > 0 ? Math.round((score / total) * 100) : 0
    setProgress((p) => ({
      ...p,
      quizzesTaken: p.quizzesTaken + 1,
      bestQuiz: { ...p.bestQuiz, [lang]: Math.max(p.bestQuiz[lang] || 0, pct) },
    }))
  }

  // Marca o desmarca un concepto de un área como aprendido.
  function toggleKnowledge(areaId, itemId) {
    setProgress((p) => {
      const list = p.knowledge[areaId] || []
      const next = list.includes(itemId)
        ? list.filter((x) => x !== itemId)
        : [...list, itemId]
      return { ...p, knowledge: { ...p.knowledge, [areaId]: next } }
    })
  }

  function isKnown(areaId, itemId) {
    return (progress.knowledge[areaId] || []).includes(itemId)
  }

  function reset() {
    setProgress({ ...EMPTY, lastDate: today(), streak: 1, longestStreak: 1 })
  }

  return { progress, recordStudied, recordQuiz, toggleKnowledge, isKnown, reset }
}
