import { useState } from 'react'
import { categories } from '../data/vocabulary.js'
import { levels } from '../data/levels.js'
import Roadmap from './Roadmap.jsx'
import Browse from './Browse.jsx'
import Grammar from './Grammar.jsx'
import Alphabet from './Alphabet.jsx'
import VerbTenses from './VerbTenses.jsx'
import EnglishLists from './EnglishLists.jsx'
import A1Course from './A1Course.jsx'
import { hasA1Course } from '../data/a1Course.js'
import { listsFor } from '../data/langLists.js'
import MyVocabulary from './MyVocabulary.jsx'
import Flashcards from './Flashcards.jsx'
import Quiz from './Quiz.jsx'
import ProgressBar from './ProgressBar.jsx'

const MODES = [
  { id: 'ruta', label: 'Ruta A1–C2', icon: '🧭' },
  { id: 'alfabeto', label: 'Alfabeto', icon: '🔤' },
  { id: 'browse', label: 'Explorar', icon: '📖' },
  { id: 'mivocab', label: 'Mi vocabulario', icon: '➕' },
  { id: 'verbos', label: 'Tiempos verbales', icon: '⏳' },
  { id: 'grammar', label: 'Gramática', icon: '📐' },
  { id: 'cards', label: 'Tarjetas', icon: '🃏' },
  { id: 'quiz', label: 'Quiz', icon: '🎯' },
]

// Pestaña extra para idiomas con listas de verbos (inglés, alemán, francés).
const LISTAS_MODE = { id: 'listas', label: 'Listas de verbos', icon: '📋' }
// Curso A1 guiado (metodología can-do + chunks + input comprensible + recuerdo activo).
const A1_MODE = { id: 'cursoa1', label: 'Curso A1', icon: '🎓' }

// Vista completa de aprendizaje de un idioma (ruta MCER, vocabulario, gramática,
// tarjetas y quiz) con filtro por nivel y panel de progreso.
export default function LanguageStudy({ language, progress }) {
  const [mode, setMode] = useState('ruta')
  const [level, setLevel] = useState('all')
  const filtered = level === 'all' ? categories : categories.filter((c) => c.level === level)
  let modes = MODES
  if (hasA1Course(language.code)) modes = [MODES[0], A1_MODE, ...MODES.slice(1)] // Curso A1 tras la Ruta
  if (listsFor(language.code)) modes = [...modes, LISTAS_MODE]

  return (
    <div>
      <div className="lang-title">
        <span className="flag">{language.flag}</span>
        <div>
          <h2>{language.name}</h2>
          <span className="native">{language.native}</span>
        </div>
      </div>

      <ProgressBar progress={progress.progress} language={language} />

      <nav className="tabs">
        {modes.map((m) => (
          <button key={m.id} className={`tab ${mode === m.id ? 'active' : ''}`} onClick={() => setMode(m.id)}>
            <span>{m.icon}</span> {m.label}
          </button>
        ))}
      </nav>

      {mode !== 'ruta' && mode !== 'verbos' && mode !== 'alfabeto' && mode !== 'listas' && mode !== 'cursoa1' && mode !== 'mivocab' && (
        <div className="level-filter">
          <button className={`chip ${level === 'all' ? 'active' : ''}`} onClick={() => setLevel('all')}>Todos</button>
          {levels.map((l) => (
            <button
              key={l.code}
              className={`chip ${level === l.code ? 'active' : ''}`}
              style={level === l.code
                ? { background: l.color, borderColor: l.color, color: '#0f172a' }
                : { borderColor: l.color, color: l.color }}
              onClick={() => setLevel(l.code)}
            >
              {l.code}
            </button>
          ))}
        </div>
      )}

      {mode === 'ruta' && <Roadmap categories={categories} />}
      {mode === 'alfabeto' && <Alphabet language={language} />}
      {mode === 'verbos' && <VerbTenses language={language} />}
      {mode === 'listas' && <EnglishLists language={language} />}
      {mode === 'cursoa1' && <A1Course language={language} progress={progress} />}
      {mode === 'browse' && <Browse key={`${language.code}-${level}`} language={language} categories={filtered} />}
      {mode === 'mivocab' && <MyVocabulary language={language} />}
      {mode === 'grammar' && <Grammar language={language} level={level} />}
      {mode === 'cards' && (
        <Flashcards
          key={`${language.code}-${level}`}
          language={language}
          categories={filtered}
          onStudied={(es) => progress.recordStudied(language.code, es)}
        />
      )}
      {mode === 'quiz' && (
        <Quiz
          key={`${language.code}-${level}`}
          language={language}
          categories={filtered}
          onFinish={(score, total) => progress.recordQuiz(language.code, score, total)}
        />
      )}
    </div>
  )
}
