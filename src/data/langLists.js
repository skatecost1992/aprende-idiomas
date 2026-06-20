// Listas de estudio de verbos por idioma (inglés, alemán, francés).
// Reúne las listas del inglés (englishLists.js) y añade alemán y francés.
import { phrasalVerbs, regularVerbs, irregularVerbs, techTerms } from './englishLists.js'

// --- Alemán: verbos fuertes (irregulares): Infinitiv / Präteritum / Partizip II ---
export const deIrregular = [
  { base: 'sein', past: 'war', part: 'gewesen', es: 'ser, estar' },
  { base: 'haben', past: 'hatte', part: 'gehabt', es: 'tener, haber' },
  { base: 'werden', past: 'wurde', part: 'geworden', es: 'llegar a ser' },
  { base: 'gehen', past: 'ging', part: 'gegangen', es: 'ir' },
  { base: 'kommen', past: 'kam', part: 'gekommen', es: 'venir' },
  { base: 'sehen', past: 'sah', part: 'gesehen', es: 'ver' },
  { base: 'geben', past: 'gab', part: 'gegeben', es: 'dar' },
  { base: 'nehmen', past: 'nahm', part: 'genommen', es: 'tomar, coger' },
  { base: 'finden', past: 'fand', part: 'gefunden', es: 'encontrar' },
  { base: 'essen', past: 'aß', part: 'gegessen', es: 'comer' },
  { base: 'trinken', past: 'trank', part: 'getrunken', es: 'beber' },
  { base: 'sprechen', past: 'sprach', part: 'gesprochen', es: 'hablar' },
  { base: 'lesen', past: 'las', part: 'gelesen', es: 'leer' },
  { base: 'schreiben', past: 'schrieb', part: 'geschrieben', es: 'escribir' },
  { base: 'fahren', past: 'fuhr', part: 'gefahren', es: 'conducir, ir' },
  { base: 'laufen', past: 'lief', part: 'gelaufen', es: 'correr, andar' },
  { base: 'schlafen', past: 'schlief', part: 'geschlafen', es: 'dormir' },
  { base: 'helfen', past: 'half', part: 'geholfen', es: 'ayudar' },
  { base: 'bringen', past: 'brachte', part: 'gebracht', es: 'traer' },
  { base: 'denken', past: 'dachte', part: 'gedacht', es: 'pensar' },
  { base: 'wissen', past: 'wusste', part: 'gewusst', es: 'saber' },
  { base: 'bleiben', past: 'blieb', part: 'geblieben', es: 'quedarse' },
  { base: 'verstehen', past: 'verstand', part: 'verstanden', es: 'entender' },
  { base: 'treffen', past: 'traf', part: 'getroffen', es: 'encontrar, conocer' },
]

// --- Alemán: verbos separables (el prefijo se separa, como los phrasal verbs) ---
export const deSeparable = [
  { v: 'aufstehen', es: 'levantarse', ex: 'Ich stehe früh auf.' },
  { v: 'ankommen', es: 'llegar', ex: 'Der Zug kommt an.' },
  { v: 'anrufen', es: 'llamar (por teléfono)', ex: 'Ich rufe dich an.' },
  { v: 'einkaufen', es: 'hacer la compra', ex: 'Wir kaufen ein.' },
  { v: 'fernsehen', es: 'ver la tele', ex: 'Er sieht fern.' },
  { v: 'mitkommen', es: 'venir (con alguien)', ex: 'Kommst du mit?' },
  { v: 'aufmachen', es: 'abrir', ex: 'Mach die Tür auf!' },
  { v: 'zumachen', es: 'cerrar', ex: 'Mach das Fenster zu.' },
  { v: 'anfangen', es: 'empezar', ex: 'Der Film fängt an.' },
  { v: 'aufhören', es: 'dejar de', ex: 'Hör auf!' },
  { v: 'ausgehen', es: 'salir', ex: 'Wir gehen heute aus.' },
  { v: 'einschlafen', es: 'dormirse', ex: 'Ich schlafe schnell ein.' },
]

// --- Francés: verbos irregulares: Infinitif / Présent (je) / Participe passé ---
export const frIrregular = [
  { base: 'être', past: 'je suis', part: 'été', es: 'ser, estar' },
  { base: 'avoir', past: "j'ai", part: 'eu', es: 'tener, haber' },
  { base: 'aller', past: 'je vais', part: 'allé', es: 'ir' },
  { base: 'faire', past: 'je fais', part: 'fait', es: 'hacer' },
  { base: 'dire', past: 'je dis', part: 'dit', es: 'decir' },
  { base: 'pouvoir', past: 'je peux', part: 'pu', es: 'poder' },
  { base: 'vouloir', past: 'je veux', part: 'voulu', es: 'querer' },
  { base: 'venir', past: 'je viens', part: 'venu', es: 'venir' },
  { base: 'voir', past: 'je vois', part: 'vu', es: 'ver' },
  { base: 'savoir', past: 'je sais', part: 'su', es: 'saber' },
  { base: 'prendre', past: 'je prends', part: 'pris', es: 'tomar, coger' },
  { base: 'mettre', past: 'je mets', part: 'mis', es: 'poner' },
  { base: 'devoir', past: 'je dois', part: 'dû', es: 'deber' },
  { base: 'croire', past: 'je crois', part: 'cru', es: 'creer' },
  { base: 'boire', past: 'je bois', part: 'bu', es: 'beber' },
  { base: 'lire', past: 'je lis', part: 'lu', es: 'leer' },
  { base: 'écrire', past: "j'écris", part: 'écrit', es: 'escribir' },
  { base: 'connaître', past: 'je connais', part: 'connu', es: 'conocer' },
  { base: 'partir', past: 'je pars', part: 'parti', es: 'irse, partir' },
  { base: 'sortir', past: 'je sors', part: 'sorti', es: 'salir' },
  { base: 'dormir', past: 'je dors', part: 'dormi', es: 'dormir' },
  { base: 'recevoir', past: 'je reçois', part: 'reçu', es: 'recibir' },
  { base: 'vivre', past: 'je vis', part: 'vécu', es: 'vivir' },
  { base: 'ouvrir', past: "j'ouvre", part: 'ouvert', es: 'abrir' },
]

const VERB_COLS_EN = [
  { k: 'base', l: 'Base' }, { k: 'past', l: 'Pasado' }, { k: 'part', l: 'Participio' }, { k: 'es', l: 'Español' },
]

const langSections = {
  en: [
    { id: 'irregulares', label: 'Verbos irregulares', icon: '🔀', type: 'verbs', cols: VERB_COLS_EN, rows: irregularVerbs },
    { id: 'regulares', label: 'Verbos regulares', icon: '➕', type: 'verbs', cols: VERB_COLS_EN, rows: regularVerbs, note: 'El pasado y el participio se forman añadiendo -ed.' },
    { id: 'phrasal', label: 'Phrasal verbs', icon: '🔗', type: 'phrases', rows: phrasalVerbs },
    { id: 'tecnico', label: 'Vocabulario técnico', icon: '🔧', type: 'terms', rows: techTerms },
  ],
  de: [
    { id: 'irregulares', label: 'Verbos fuertes (irregulares)', icon: '🔀', type: 'verbs', cols: [{ k: 'base', l: 'Infinitiv' }, { k: 'past', l: 'Präteritum' }, { k: 'part', l: 'Partizip II' }, { k: 'es', l: 'Español' }], rows: deIrregular },
    { id: 'separables', label: 'Verbos separables', icon: '🔗', type: 'phrases', rows: deSeparable, note: 'El prefijo se separa y va al final de la frase (como un phrasal verb).' },
  ],
  fr: [
    { id: 'irregulares', label: 'Verbos irregulares', icon: '🔀', type: 'verbs', cols: [{ k: 'base', l: 'Infinitif' }, { k: 'past', l: 'Présent (je)' }, { k: 'part', l: 'Participe passé' }, { k: 'es', l: 'Español' }], rows: frIrregular },
  ],
}

export function listsFor(code) {
  return langSections[code] || null
}
