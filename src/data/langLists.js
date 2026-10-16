// Listas de estudio de verbos de los 22 idiomas.
//
// Cada idioma trae las mismas cuatro familias de secciones, pero adaptadas a su
// propia gramática, no calcadas del inglés:
//
//   irregulares  la tabla de verbos que no siguen el patrón (o, en chino, el
//                aspecto; en turco, el cambio de raíz)
//   regulares    el patrón regular, con sus grupos de conjugación
//   el bloque    el equivalente a los phrasal verbs: separables en alemán y
//                neerlandés, con partícula en las nórdicas, pronominales y
//                perífrasis en las románicas, con prefijo en las eslavas,
//                compuestos en turco, japonés, coreano e hindi, complementos
//                resultativos en chino y con preposición regida en árabe y
//                hebreo
//   modales      los verbos (o sufijos) que expresan poder, deber y querer
//
// El inglés vive en englishLists.js; el resto, en verbs/ agrupado por familia.
import { phrasalVerbs, regularVerbs, irregularVerbs, techTerms, modalVerbs, readingWords } from './englishLists.js'
import { germanicSections } from './verbs/germanic.js'
import { romanceSections } from './verbs/romance.js'
import { slavicSections } from './verbs/slavic.js'
import { otherSections } from './verbs/others.js'

const VERB_COLS_EN = [
  { k: 'base', l: 'Base' }, { k: 'past', l: 'Pasado' }, { k: 'part', l: 'Participio' }, { k: 'es', l: 'Español' },
]

const langSections = {
  en: [
    { id: 'irregulares', label: 'Verbos irregulares', icon: '🔀', type: 'verbs', cols: VERB_COLS_EN, rows: irregularVerbs },
    { id: 'regulares', label: 'Verbos regulares', icon: '➕', type: 'verbs', cols: VERB_COLS_EN, rows: regularVerbs, note: 'El pasado y el participio se forman añadiendo -ed.' },
    { id: 'phrasal', label: 'Phrasal verbs', icon: '🔗', type: 'phrases', rows: phrasalVerbs },
    { id: 'modales', label: 'Verbos modales', icon: '🔑', type: 'modals', rows: modalVerbs, note: 'No llevan -s en tercera persona, van seguidos de infinitivo sin «to», niegan con «not» y preguntan invirtiendo el orden: You can go → Can you go?' },
    // quiz: true hace que estas palabras entren también en el quiz. El
    // vocabulario técnico no lo lleva porque sus glosas son definiciones, no
    // traducciones, y no funcionan como respuesta de opción múltiple.
    { id: 'lectura', label: 'Vocabulario de lectura', icon: '📘', type: 'terms', rows: readingWords, quiz: true, note: 'Palabras que aparecen constantemente al leer en inglés. Cuando una palabra tiene varias traducciones según el contexto, están todas separadas por comas.' },
    { id: 'tecnico', label: 'Vocabulario técnico', icon: '🔧', type: 'terms', rows: techTerms },
  ],

  ...germanicSections, // de, nl, sv, no, da
  ...romanceSections,  // fr, it, pt, ca, ro
  ...slavicSections,   // ru, uk, pl
  ...otherSections,    // el, tr, ja, zh, ko, hi, ar, he
}

export function listsFor(code) {
  return langSections[code] || null
}
