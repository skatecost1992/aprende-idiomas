// Idiomas admitidos por el servicio. Debe coincidir con src/data/languages.js
// del front; si allí se añade un idioma, hay que añadirlo también aquí.
const idiomas = [
  { code: 'en', name: 'Inglés' },
  { code: 'fr', name: 'Francés' },
  { code: 'de', name: 'Alemán' },
  { code: 'nl', name: 'Neerlandés' },
  { code: 'sv', name: 'Sueco' },
  { code: 'no', name: 'Noruego' },
  { code: 'da', name: 'Danés' },
  { code: 'it', name: 'Italiano' },
  { code: 'pt', name: 'Portugués' },
  { code: 'ca', name: 'Catalán' },
  { code: 'ro', name: 'Rumano' },
  { code: 'ru', name: 'Ruso' },
  { code: 'uk', name: 'Ucraniano' },
  { code: 'pl', name: 'Polaco' },
  { code: 'el', name: 'Griego' },
  { code: 'tr', name: 'Turco' },
  { code: 'ja', name: 'Japonés' },
  { code: 'zh', name: 'Chino' },
  { code: 'ko', name: 'Coreano' },
  { code: 'hi', name: 'Hindi' },
  { code: 'ar', name: 'Árabe' },
  { code: 'he', name: 'Hebreo' },
]

const niveles = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

const codigos = new Set(idiomas.map((i) => i.code))

module.exports = { idiomas, niveles, esIdiomaValido: (c) => codigos.has(c) }
