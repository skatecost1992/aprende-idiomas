// Lee un texto en voz alta usando la Web Speech API del navegador.
// Si el idioma no está instalado en el sistema, usa la voz por defecto.
const VOICE_LANG = {
  en: 'en-US', fr: 'fr-FR', de: 'de-DE', it: 'it-IT', pt: 'pt-PT', nl: 'nl-NL',
  ca: 'ca-ES', ro: 'ro-RO', ru: 'ru-RU', el: 'el-GR', tr: 'tr-TR', ja: 'ja-JP',
  zh: 'zh-CN', ko: 'ko-KR', hi: 'hi-IN', ar: 'ar-SA',
}

export function speak(text, code) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text)
  u.lang = VOICE_LANG[code] || 'en-US'
  u.rate = 0.9
  window.speechSynthesis.speak(u)
}
