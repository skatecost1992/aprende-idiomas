// Alfabeto de cada idioma con su pronunciación (aproximada, en español).
// Estructura: { note, letters: [{ c, p }] }
//   c : la letra o carácter
//   p : nombre o sonido aproximado en español

export const alphabets = {
  en: {
    note: 'Alfabeto latino de 26 letras. Se indica el nombre de cada letra.',
    letters: [
      { c: 'A', p: 'ei' }, { c: 'B', p: 'bi' }, { c: 'C', p: 'si' }, { c: 'D', p: 'di' }, { c: 'E', p: 'i' }, { c: 'F', p: 'ef' }, { c: 'G', p: 'lli' }, { c: 'H', p: 'eich' }, { c: 'I', p: 'ai' }, { c: 'J', p: 'llei' }, { c: 'K', p: 'kei' }, { c: 'L', p: 'el' }, { c: 'M', p: 'em' }, { c: 'N', p: 'en' }, { c: 'O', p: 'ou' }, { c: 'P', p: 'pi' }, { c: 'Q', p: 'kiu' }, { c: 'R', p: 'ar' }, { c: 'S', p: 'es' }, { c: 'T', p: 'ti' }, { c: 'U', p: 'iu' }, { c: 'V', p: 'vi' }, { c: 'W', p: 'dábliu' }, { c: 'X', p: 'eks' }, { c: 'Y', p: 'uai' }, { c: 'Z', p: 'zi / zed' },
    ],
  },
  fr: {
    note: 'Alfabeto latino de 26 letras + vocales con acentos (é, è, ê, à, ç…).',
    letters: [
      { c: 'A', p: 'a' }, { c: 'B', p: 'be' }, { c: 'C', p: 'se' }, { c: 'D', p: 'de' }, { c: 'E', p: 'œ' }, { c: 'F', p: 'ef' }, { c: 'G', p: 'lle' }, { c: 'H', p: 'ash (muda)' }, { c: 'I', p: 'i' }, { c: 'J', p: 'lli' }, { c: 'K', p: 'ka' }, { c: 'L', p: 'el' }, { c: 'M', p: 'em' }, { c: 'N', p: 'en' }, { c: 'O', p: 'o' }, { c: 'P', p: 'pe' }, { c: 'Q', p: 'kü' }, { c: 'R', p: 'er (gutural)' }, { c: 'S', p: 'es' }, { c: 'T', p: 'te' }, { c: 'U', p: 'ü' }, { c: 'V', p: 've' }, { c: 'W', p: 'dubl ve' }, { c: 'X', p: 'iks' }, { c: 'Y', p: 'i grec' }, { c: 'Z', p: 'zed' }, { c: 'Ç', p: 's suave' }, { c: 'É', p: 'e cerrada' }, { c: 'È', p: 'e abierta' },
    ],
  },
  de: {
    note: 'Alfabeto latino de 26 letras + Umlaut (ä, ö, ü) y ß (Eszett).',
    letters: [
      { c: 'A', p: 'a' }, { c: 'B', p: 'be' }, { c: 'C', p: 'tse' }, { c: 'D', p: 'de' }, { c: 'E', p: 'e' }, { c: 'F', p: 'ef' }, { c: 'G', p: 'gue' }, { c: 'H', p: 'ha' }, { c: 'I', p: 'i' }, { c: 'J', p: 'yot' }, { c: 'K', p: 'ka' }, { c: 'L', p: 'el' }, { c: 'M', p: 'em' }, { c: 'N', p: 'en' }, { c: 'O', p: 'o' }, { c: 'P', p: 'pe' }, { c: 'Q', p: 'ku' }, { c: 'R', p: 'er' }, { c: 'S', p: 'es' }, { c: 'T', p: 'te' }, { c: 'U', p: 'u' }, { c: 'V', p: 'fau' }, { c: 'W', p: 've' }, { c: 'X', p: 'iks' }, { c: 'Y', p: 'ípsilon' }, { c: 'Z', p: 'tset' }, { c: 'Ä', p: 'e abierta' }, { c: 'Ö', p: 'e con labios redondeados' }, { c: 'Ü', p: 'i con labios redondeados' }, { c: 'ß', p: 's sorda (doble s)' },
    ],
  },
  nl: {
    note: 'Alfabeto latino de 26 letras; el dígrafo IJ se trata casi como una letra.',
    letters: [
      { c: 'A', p: 'a' }, { c: 'B', p: 'be' }, { c: 'C', p: 'se' }, { c: 'D', p: 'de' }, { c: 'E', p: 'e' }, { c: 'F', p: 'ef' }, { c: 'G', p: 'lle (gutural)' }, { c: 'H', p: 'ha' }, { c: 'I', p: 'i' }, { c: 'J', p: 'ye' }, { c: 'K', p: 'ka' }, { c: 'L', p: 'el' }, { c: 'M', p: 'em' }, { c: 'N', p: 'en' }, { c: 'O', p: 'o' }, { c: 'P', p: 'pe' }, { c: 'Q', p: 'kü' }, { c: 'R', p: 'er' }, { c: 'S', p: 'es' }, { c: 'T', p: 'te' }, { c: 'U', p: 'ü' }, { c: 'V', p: 'fe' }, { c: 'W', p: 've' }, { c: 'X', p: 'iks' }, { c: 'Y', p: 'ei' }, { c: 'Z', p: 'zet' }, { c: 'IJ', p: 'ei' },
    ],
  },
  sv: {
    note: 'Alfabeto latino + tres vocales finales: Å, Ä, Ö (29 letras).',
    letters: [
      { c: 'A', p: 'a' }, { c: 'B', p: 'be' }, { c: 'C', p: 'se' }, { c: 'D', p: 'de' }, { c: 'E', p: 'e' }, { c: 'F', p: 'ef' }, { c: 'G', p: 'gue/ye' }, { c: 'H', p: 'ho' }, { c: 'I', p: 'i' }, { c: 'J', p: 'yi' }, { c: 'K', p: 'ko' }, { c: 'L', p: 'el' }, { c: 'M', p: 'em' }, { c: 'N', p: 'en' }, { c: 'O', p: 'u' }, { c: 'P', p: 'pe' }, { c: 'Q', p: 'ku' }, { c: 'R', p: 'er' }, { c: 'S', p: 'es' }, { c: 'T', p: 'te' }, { c: 'U', p: 'u (cerrada)' }, { c: 'V', p: 've' }, { c: 'W', p: 'doble ve' }, { c: 'X', p: 'eks' }, { c: 'Y', p: 'i con labios redondeados' }, { c: 'Z', p: 'seta' }, { c: 'Å', p: 'o larga' }, { c: 'Ä', p: 'e abierta' }, { c: 'Ö', p: 'e redondeada' },
    ],
  },
  no: {
    note: 'Alfabeto latino + tres vocales finales: Æ, Ø, Å (29 letras).',
    letters: [
      { c: 'A', p: 'a' }, { c: 'B', p: 'be' }, { c: 'C', p: 'se' }, { c: 'D', p: 'de' }, { c: 'E', p: 'e' }, { c: 'F', p: 'ef' }, { c: 'G', p: 'gue' }, { c: 'H', p: 'ho' }, { c: 'I', p: 'i' }, { c: 'J', p: 'ye' }, { c: 'K', p: 'ko' }, { c: 'L', p: 'el' }, { c: 'M', p: 'em' }, { c: 'N', p: 'en' }, { c: 'O', p: 'u' }, { c: 'P', p: 'pe' }, { c: 'Q', p: 'ku' }, { c: 'R', p: 'er' }, { c: 'S', p: 'es' }, { c: 'T', p: 'te' }, { c: 'U', p: 'u' }, { c: 'V', p: 've' }, { c: 'W', p: 'doble ve' }, { c: 'X', p: 'eks' }, { c: 'Y', p: 'i redondeada' }, { c: 'Z', p: 'set' }, { c: 'Æ', p: 'e abierta' }, { c: 'Ø', p: 'e redondeada' }, { c: 'Å', p: 'o larga' },
    ],
  },
  da: {
    note: 'Alfabeto latino + tres vocales finales: Æ, Ø, Å (29 letras).',
    letters: [
      { c: 'A', p: 'a' }, { c: 'B', p: 'be' }, { c: 'C', p: 'se' }, { c: 'D', p: 'de' }, { c: 'E', p: 'e' }, { c: 'F', p: 'ef' }, { c: 'G', p: 'gue' }, { c: 'H', p: 'ho' }, { c: 'I', p: 'i' }, { c: 'J', p: 'yod' }, { c: 'K', p: 'ko' }, { c: 'L', p: 'el' }, { c: 'M', p: 'em' }, { c: 'N', p: 'en' }, { c: 'O', p: 'o' }, { c: 'P', p: 'pe' }, { c: 'Q', p: 'ku' }, { c: 'R', p: 'er' }, { c: 'S', p: 'es' }, { c: 'T', p: 'te' }, { c: 'U', p: 'u' }, { c: 'V', p: 've' }, { c: 'W', p: 'doble ve' }, { c: 'X', p: 'eks' }, { c: 'Y', p: 'i redondeada' }, { c: 'Z', p: 'set' }, { c: 'Æ', p: 'e abierta' }, { c: 'Ø', p: 'e redondeada' }, { c: 'Å', p: 'o larga' },
    ],
  },
  it: {
    note: 'Alfabeto de 21 letras; j, k, w, x, y solo en palabras extranjeras.',
    letters: [
      { c: 'A', p: 'a' }, { c: 'B', p: 'bi' }, { c: 'C', p: 'chi' }, { c: 'D', p: 'di' }, { c: 'E', p: 'e' }, { c: 'F', p: 'effe' }, { c: 'G', p: 'lli' }, { c: 'H', p: 'acca (muda)' }, { c: 'I', p: 'i' }, { c: 'L', p: 'elle' }, { c: 'M', p: 'emme' }, { c: 'N', p: 'enne' }, { c: 'O', p: 'o' }, { c: 'P', p: 'pi' }, { c: 'Q', p: 'cu' }, { c: 'R', p: 'erre' }, { c: 'S', p: 'esse' }, { c: 'T', p: 'ti' }, { c: 'U', p: 'u' }, { c: 'V', p: 'vi/vu' }, { c: 'Z', p: 'zeta' },
    ],
  },
  pt: {
    note: 'Alfabeto latino de 26 letras + ç, ã, õ, á, é, ê…',
    letters: [
      { c: 'A', p: 'á' }, { c: 'B', p: 'bê' }, { c: 'C', p: 'cê' }, { c: 'D', p: 'dê' }, { c: 'E', p: 'é' }, { c: 'F', p: 'efe' }, { c: 'G', p: 'gê/llê' }, { c: 'H', p: 'agá (muda)' }, { c: 'I', p: 'i' }, { c: 'J', p: 'llota' }, { c: 'K', p: 'capa' }, { c: 'L', p: 'ele' }, { c: 'M', p: 'eme' }, { c: 'N', p: 'ene' }, { c: 'O', p: 'ó' }, { c: 'P', p: 'pê' }, { c: 'Q', p: 'quê' }, { c: 'R', p: 'erre' }, { c: 'S', p: 'esse' }, { c: 'T', p: 'tê' }, { c: 'U', p: 'u' }, { c: 'V', p: 'vê' }, { c: 'W', p: 'dáblio' }, { c: 'X', p: 'xis' }, { c: 'Y', p: 'ípsilon' }, { c: 'Z', p: 'zê' }, { c: 'Ç', p: 's suave' },
    ],
  },
  ca: {
    note: 'Alfabeto latino de 26 letras + ç y la ele geminada (l·l).',
    letters: [
      { c: 'A', p: 'a' }, { c: 'B', p: 'be' }, { c: 'C', p: 'se' }, { c: 'D', p: 'de' }, { c: 'E', p: 'e' }, { c: 'F', p: 'efa' }, { c: 'G', p: 'lle' }, { c: 'H', p: 'hac (muda)' }, { c: 'I', p: 'i' }, { c: 'J', p: 'llota' }, { c: 'K', p: 'ka' }, { c: 'L', p: 'ela' }, { c: 'M', p: 'ema' }, { c: 'N', p: 'ena' }, { c: 'O', p: 'o' }, { c: 'P', p: 'pe' }, { c: 'Q', p: 'cu' }, { c: 'R', p: 'erra' }, { c: 'S', p: 'essa' }, { c: 'T', p: 'te' }, { c: 'U', p: 'u' }, { c: 'V', p: 've baixa' }, { c: 'W', p: 've doble' }, { c: 'X', p: 'ics' }, { c: 'Y', p: 'i grega' }, { c: 'Z', p: 'zeta' }, { c: 'Ç', p: 's suave' },
    ],
  },
  ro: {
    note: 'Alfabeto latino de 31 letras + ă, â, î, ș, ț.',
    letters: [
      { c: 'A', p: 'a' }, { c: 'Ă', p: 'schwa (e neutra)' }, { c: 'Â', p: 'i central' }, { c: 'B', p: 'be' }, { c: 'C', p: 'che' }, { c: 'D', p: 'de' }, { c: 'E', p: 'e' }, { c: 'F', p: 'ef' }, { c: 'G', p: 'lle' }, { c: 'H', p: 'ha' }, { c: 'I', p: 'i' }, { c: 'Î', p: 'i central' }, { c: 'J', p: 'lle (zh)' }, { c: 'K', p: 'ka' }, { c: 'L', p: 'el' }, { c: 'M', p: 'em' }, { c: 'N', p: 'en' }, { c: 'O', p: 'o' }, { c: 'P', p: 'pe' }, { c: 'Q', p: 'kü' }, { c: 'R', p: 'er' }, { c: 'S', p: 'es' }, { c: 'Ș', p: 'sh' }, { c: 'T', p: 'te' }, { c: 'Ț', p: 'ts' }, { c: 'U', p: 'u' }, { c: 'V', p: 've' }, { c: 'W', p: 'doble ve' }, { c: 'X', p: 'iks' }, { c: 'Y', p: 'i grec' }, { c: 'Z', p: 'zet' },
    ],
  },
  pl: {
    note: 'Alfabeto latino de 32 letras con signos diacríticos propios.',
    letters: [
      { c: 'A', p: 'a' }, { c: 'Ą', p: 'on nasal' }, { c: 'B', p: 'be' }, { c: 'C', p: 'tse' }, { c: 'Ć', p: 'ch suave' }, { c: 'D', p: 'de' }, { c: 'E', p: 'e' }, { c: 'Ę', p: 'en nasal' }, { c: 'F', p: 'ef' }, { c: 'G', p: 'gue' }, { c: 'H', p: 'ha (gutural)' }, { c: 'I', p: 'i' }, { c: 'J', p: 'yot' }, { c: 'K', p: 'ka' }, { c: 'L', p: 'el' }, { c: 'Ł', p: 'w inglesa' }, { c: 'M', p: 'em' }, { c: 'N', p: 'en' }, { c: 'Ń', p: 'ñ' }, { c: 'O', p: 'o' }, { c: 'Ó', p: 'u' }, { c: 'P', p: 'pe' }, { c: 'R', p: 'er' }, { c: 'S', p: 'es' }, { c: 'Ś', p: 'sh suave' }, { c: 'T', p: 'te' }, { c: 'U', p: 'u' }, { c: 'W', p: 'v' }, { c: 'Y', p: 'i gutural' }, { c: 'Z', p: 'zet' }, { c: 'Ź', p: 'zh suave' }, { c: 'Ż', p: 'zh' },
    ],
  },
  tr: {
    note: 'Alfabeto latino de 29 letras; sin q, w, x. Distingue I/ı e İ/i.',
    letters: [
      { c: 'A', p: 'a' }, { c: 'B', p: 'be' }, { c: 'C', p: 'lle (dʒ)' }, { c: 'Ç', p: 'ch' }, { c: 'D', p: 'de' }, { c: 'E', p: 'e' }, { c: 'F', p: 'fe' }, { c: 'G', p: 'gue' }, { c: 'Ğ', p: 'muda (alarga la vocal)' }, { c: 'H', p: 'he' }, { c: 'I', p: 'ı (i sin punto, gutural)' }, { c: 'İ', p: 'i' }, { c: 'J', p: 'zh' }, { c: 'K', p: 'ke' }, { c: 'L', p: 'le' }, { c: 'M', p: 'me' }, { c: 'N', p: 'ne' }, { c: 'O', p: 'o' }, { c: 'Ö', p: 'e redondeada' }, { c: 'P', p: 'pe' }, { c: 'R', p: 're' }, { c: 'S', p: 'se' }, { c: 'Ş', p: 'sh' }, { c: 'T', p: 'te' }, { c: 'U', p: 'u' }, { c: 'Ü', p: 'i redondeada' }, { c: 'V', p: 've' }, { c: 'Y', p: 'ye' }, { c: 'Z', p: 'ze' },
    ],
  },
  el: {
    note: 'Alfabeto griego de 24 letras (la σ final se escribe ς).',
    letters: [
      { c: 'Α α', p: 'álfa (a)' }, { c: 'Β β', p: 'víta (v)' }, { c: 'Γ γ', p: 'gama (g/y)' }, { c: 'Δ δ', p: 'délta (d como th)' }, { c: 'Ε ε', p: 'épsilon (e)' }, { c: 'Ζ ζ', p: 'zíta (z)' }, { c: 'Η η', p: 'íta (i)' }, { c: 'Θ θ', p: 'thíta (th sorda)' }, { c: 'Ι ι', p: 'yióta (i)' }, { c: 'Κ κ', p: 'kapa (k)' }, { c: 'Λ λ', p: 'lámda (l)' }, { c: 'Μ μ', p: 'mi (m)' }, { c: 'Ν ν', p: 'ni (n)' }, { c: 'Ξ ξ', p: 'ksi (ks)' }, { c: 'Ο ο', p: 'ómicron (o)' }, { c: 'Π π', p: 'pi (p)' }, { c: 'Ρ ρ', p: 'ro (r)' }, { c: 'Σ σ/ς', p: 'sígma (s)' }, { c: 'Τ τ', p: 'taf (t)' }, { c: 'Υ υ', p: 'ípsilon (i)' }, { c: 'Φ φ', p: 'fi (f)' }, { c: 'Χ χ', p: 'ji (j)' }, { c: 'Ψ ψ', p: 'psi (ps)' }, { c: 'Ω ω', p: 'oméga (o)' },
    ],
  },
  ru: {
    note: 'Alfabeto cirílico de 33 letras (incluye dos signos sin sonido propio).',
    letters: [
      { c: 'А', p: 'a' }, { c: 'Б', p: 'b' }, { c: 'В', p: 'v' }, { c: 'Г', p: 'g' }, { c: 'Д', p: 'd' }, { c: 'Е', p: 'ye' }, { c: 'Ё', p: 'yo' }, { c: 'Ж', p: 'zh (ll)' }, { c: 'З', p: 'z' }, { c: 'И', p: 'i' }, { c: 'Й', p: 'i corta (y)' }, { c: 'К', p: 'k' }, { c: 'Л', p: 'l' }, { c: 'М', p: 'm' }, { c: 'Н', p: 'n' }, { c: 'О', p: 'o' }, { c: 'П', p: 'p' }, { c: 'Р', p: 'r' }, { c: 'С', p: 's' }, { c: 'Т', p: 't' }, { c: 'У', p: 'u' }, { c: 'Ф', p: 'f' }, { c: 'Х', p: 'j (kh)' }, { c: 'Ц', p: 'ts' }, { c: 'Ч', p: 'ch' }, { c: 'Ш', p: 'sh' }, { c: 'Щ', p: 'shch' }, { c: 'Ъ', p: 'signo duro' }, { c: 'Ы', p: 'i gutural' }, { c: 'Ь', p: 'signo blando' }, { c: 'Э', p: 'e' }, { c: 'Ю', p: 'yu' }, { c: 'Я', p: 'ya' },
    ],
  },
  uk: {
    note: 'Alfabeto cirílico ucraniano de 33 letras (con Ґ, Є, І, Ї).',
    letters: [
      { c: 'А', p: 'a' }, { c: 'Б', p: 'b' }, { c: 'В', p: 'v' }, { c: 'Г', p: 'h (suave)' }, { c: 'Ґ', p: 'g' }, { c: 'Д', p: 'd' }, { c: 'Е', p: 'e' }, { c: 'Є', p: 'ye' }, { c: 'Ж', p: 'zh' }, { c: 'З', p: 'z' }, { c: 'И', p: 'y' }, { c: 'І', p: 'i' }, { c: 'Ї', p: 'yi' }, { c: 'Й', p: 'y corta' }, { c: 'К', p: 'k' }, { c: 'Л', p: 'l' }, { c: 'М', p: 'm' }, { c: 'Н', p: 'n' }, { c: 'О', p: 'o' }, { c: 'П', p: 'p' }, { c: 'Р', p: 'r' }, { c: 'С', p: 's' }, { c: 'Т', p: 't' }, { c: 'У', p: 'u' }, { c: 'Ф', p: 'f' }, { c: 'Х', p: 'kh (j)' }, { c: 'Ц', p: 'ts' }, { c: 'Ч', p: 'ch' }, { c: 'Ш', p: 'sh' }, { c: 'Щ', p: 'shch' }, { c: 'Ь', p: 'signo blando' }, { c: 'Ю', p: 'yu' }, { c: 'Я', p: 'ya' },
    ],
  },
  he: {
    note: 'Alfabeto hebreo de 22 consonantes; se escribe de derecha a izquierda.',
    letters: [
      { c: 'א', p: 'álef (muda / a)' }, { c: 'ב', p: 'bet (b / v)' }, { c: 'ג', p: 'guímel (g)' }, { c: 'ד', p: 'dálet (d)' }, { c: 'ה', p: 'he (h)' }, { c: 'ו', p: 'vav (v / u)' }, { c: 'ז', p: 'zayin (z)' }, { c: 'ח', p: 'jet (j gutural)' }, { c: 'ט', p: 'tet (t)' }, { c: 'י', p: 'yod (y / i)' }, { c: 'כ', p: 'kaf (k / j)' }, { c: 'ל', p: 'lámed (l)' }, { c: 'מ', p: 'mem (m)' }, { c: 'נ', p: 'nun (n)' }, { c: 'ס', p: 'sámej (s)' }, { c: 'ע', p: 'ayin (gutural)' }, { c: 'פ', p: 'pe (p / f)' }, { c: 'צ', p: 'tsadi (ts)' }, { c: 'ק', p: 'kof (k)' }, { c: 'ר', p: 'resh (r)' }, { c: 'ש', p: 'shin (sh / s)' }, { c: 'ת', p: 'tav (t)' },
    ],
  },
  ar: {
    note: 'Abyad árabe de 28 letras; se escribe de derecha a izquierda.',
    letters: [
      { c: 'ا', p: 'alif (a)' }, { c: 'ب', p: 'ba (b)' }, { c: 'ت', p: 'ta (t)' }, { c: 'ث', p: 'tha (th sorda)' }, { c: 'ج', p: 'yim (ll/dʒ)' }, { c: 'ح', p: 'ha (h fuerte)' }, { c: 'خ', p: 'kha (j)' }, { c: 'د', p: 'dal (d)' }, { c: 'ذ', p: 'dhal (th sonora)' }, { c: 'ر', p: 'ra (r)' }, { c: 'ز', p: 'zay (z)' }, { c: 'س', p: 'sin (s)' }, { c: 'ش', p: 'shin (sh)' }, { c: 'ص', p: 'sad (s enfática)' }, { c: 'ض', p: 'dad (d enfática)' }, { c: 'ط', p: 'ta (t enfática)' }, { c: 'ظ', p: 'za (dh enfática)' }, { c: 'ع', p: 'ayn (gutural)' }, { c: 'غ', p: 'ghayn (g gutural)' }, { c: 'ف', p: 'fa (f)' }, { c: 'ق', p: 'qaf (q)' }, { c: 'ك', p: 'kaf (k)' }, { c: 'ل', p: 'lam (l)' }, { c: 'م', p: 'mim (m)' }, { c: 'ن', p: 'nun (n)' }, { c: 'ه', p: 'ha (h)' }, { c: 'و', p: 'waw (w/u)' }, { c: 'ي', p: 'ya (y/i)' },
    ],
  },
  hi: {
    note: 'Escritura devanagari (abugida). Primero las vocales, luego las consonantes.',
    letters: [
      { c: 'अ', p: 'a' }, { c: 'आ', p: 'aa' }, { c: 'इ', p: 'i' }, { c: 'ई', p: 'ii' }, { c: 'उ', p: 'u' }, { c: 'ऊ', p: 'uu' }, { c: 'ए', p: 'e' }, { c: 'ऐ', p: 'ai' }, { c: 'ओ', p: 'o' }, { c: 'औ', p: 'au' },
      { c: 'क', p: 'ka' }, { c: 'ख', p: 'kha' }, { c: 'ग', p: 'ga' }, { c: 'घ', p: 'gha' }, { c: 'च', p: 'cha' }, { c: 'छ', p: 'chha' }, { c: 'ज', p: 'ja' }, { c: 'झ', p: 'jha' }, { c: 'ट', p: 'ṭa' }, { c: 'ठ', p: 'ṭha' }, { c: 'ड', p: 'ḍa' }, { c: 'ढ', p: 'ḍha' }, { c: 'ण', p: 'ṇa' }, { c: 'त', p: 'ta' }, { c: 'थ', p: 'tha' }, { c: 'द', p: 'da' }, { c: 'ध', p: 'dha' }, { c: 'न', p: 'na' }, { c: 'प', p: 'pa' }, { c: 'फ', p: 'pha' }, { c: 'ब', p: 'ba' }, { c: 'भ', p: 'bha' }, { c: 'म', p: 'ma' }, { c: 'य', p: 'ya' }, { c: 'र', p: 'ra' }, { c: 'ल', p: 'la' }, { c: 'व', p: 'va' }, { c: 'श', p: 'sha' }, { c: 'ष', p: 'ṣha' }, { c: 'स', p: 'sa' }, { c: 'ह', p: 'ha' },
    ],
  },
  ko: {
    note: 'Hangul: 14 consonantes y 10 vocales básicas que se combinan en sílabas.',
    letters: [
      { c: 'ㄱ', p: 'g / k' }, { c: 'ㄴ', p: 'n' }, { c: 'ㄷ', p: 'd / t' }, { c: 'ㄹ', p: 'r / l' }, { c: 'ㅁ', p: 'm' }, { c: 'ㅂ', p: 'b / p' }, { c: 'ㅅ', p: 's' }, { c: 'ㅇ', p: 'ng / muda' }, { c: 'ㅈ', p: 'j' }, { c: 'ㅊ', p: 'ch' }, { c: 'ㅋ', p: 'k aspirada' }, { c: 'ㅌ', p: 't aspirada' }, { c: 'ㅍ', p: 'p aspirada' }, { c: 'ㅎ', p: 'h' },
      { c: 'ㅏ', p: 'a' }, { c: 'ㅑ', p: 'ya' }, { c: 'ㅓ', p: 'eo' }, { c: 'ㅕ', p: 'yeo' }, { c: 'ㅗ', p: 'o' }, { c: 'ㅛ', p: 'yo' }, { c: 'ㅜ', p: 'u' }, { c: 'ㅠ', p: 'yu' }, { c: 'ㅡ', p: 'eu' }, { c: 'ㅣ', p: 'i' },
    ],
  },
  ja: {
    note: 'Silabario hiragana (gojūon). Existe un katakana paralelo para extranjerismos.',
    letters: [
      { c: 'あ', p: 'a' }, { c: 'い', p: 'i' }, { c: 'う', p: 'u' }, { c: 'え', p: 'e' }, { c: 'お', p: 'o' },
      { c: 'か', p: 'ka' }, { c: 'き', p: 'ki' }, { c: 'く', p: 'ku' }, { c: 'け', p: 'ke' }, { c: 'こ', p: 'ko' },
      { c: 'さ', p: 'sa' }, { c: 'し', p: 'shi' }, { c: 'す', p: 'su' }, { c: 'せ', p: 'se' }, { c: 'そ', p: 'so' },
      { c: 'た', p: 'ta' }, { c: 'ち', p: 'chi' }, { c: 'つ', p: 'tsu' }, { c: 'て', p: 'te' }, { c: 'と', p: 'to' },
      { c: 'な', p: 'na' }, { c: 'に', p: 'ni' }, { c: 'ぬ', p: 'nu' }, { c: 'ね', p: 'ne' }, { c: 'の', p: 'no' },
      { c: 'は', p: 'ha' }, { c: 'ひ', p: 'hi' }, { c: 'ふ', p: 'fu' }, { c: 'へ', p: 'he' }, { c: 'ほ', p: 'ho' },
      { c: 'ま', p: 'ma' }, { c: 'み', p: 'mi' }, { c: 'む', p: 'mu' }, { c: 'め', p: 'me' }, { c: 'も', p: 'mo' },
      { c: 'や', p: 'ya' }, { c: 'ゆ', p: 'yu' }, { c: 'よ', p: 'yo' },
      { c: 'ら', p: 'ra' }, { c: 'り', p: 'ri' }, { c: 'る', p: 'ru' }, { c: 'れ', p: 're' }, { c: 'ろ', p: 'ro' },
      { c: 'わ', p: 'wa' }, { c: 'を', p: 'wo' }, { c: 'ん', p: 'n' },
    ],
  },
  zh: {
    note: 'El chino no tiene alfabeto: usa caracteres (hanzi). Para la pronunciación se usa el pinyin, con 4 tonos. Aquí van los tonos y las vocales del pinyin.',
    letters: [
      { c: 'ā', p: 'tono 1: alto y sostenido' }, { c: 'á', p: 'tono 2: ascendente' }, { c: 'ǎ', p: 'tono 3: baja y sube' }, { c: 'à', p: 'tono 4: descendente' }, { c: 'a', p: 'tono neutro: breve' },
      { c: 'a', p: 'vocal a' }, { c: 'o', p: 'vocal o' }, { c: 'e', p: 'vocal e (gutural)' }, { c: 'i', p: 'vocal i' }, { c: 'u', p: 'vocal u' }, { c: 'ü', p: 'u con labios redondeados' },
      { c: 'zh', p: 'inicial: ll retrofleja' }, { c: 'q', p: 'inicial: ch suave' }, { c: 'x', p: 'inicial: sh suave' }, { c: 'c', p: 'inicial: ts aspirada' },
    ],
  },
}
