// Lecciones de gramática en contexto para los niveles intermedios (B1, B2).
// Cada lección parte de una función comunicativa y muestra frases modelo:
// el español y su traducción natural, para que se vea CÓMO expresa esa misma
// estructura cada idioma. La nota explica en qué fijarse.
//
// Las frases de ejemplo están disponibles para estos idiomas:
export const EXAMPLE_LANGS = ['en', 'fr', 'de', 'it', 'pt']

export const grammar = {
  B1: [
    {
      id: 'b1-pasado',
      title: 'Narrar en pasado',
      focus:
        'Para contar lo que pasó se combinan distintos tiempos del pasado: uno para acciones concretas y terminadas, y otro para describir contextos o hábitos. Fíjate en cómo cada idioma forma esos tiempos.',
      examples: [
        { es: 'Ayer fui al mercado y compré fruta.', t: {
          en: 'Yesterday I went to the market and bought fruit.',
          fr: "Hier, je suis allé au marché et j'ai acheté des fruits.",
          de: 'Gestern bin ich zum Markt gegangen und habe Obst gekauft.',
          it: 'Ieri sono andato al mercato e ho comprato della frutta.',
          pt: 'Ontem fui ao mercado e comprei fruta.' } },
        { es: 'Cuando era niño, vivía en el campo.', t: {
          en: 'When I was a child, I lived in the countryside.',
          fr: "Quand j'étais enfant, je vivais à la campagne.",
          de: 'Als ich ein Kind war, lebte ich auf dem Land.',
          it: 'Quando ero bambino, vivevo in campagna.',
          pt: 'Quando era criança, vivia no campo.' } },
      ],
    },
    {
      id: 'b1-condicional',
      title: 'Hipótesis y cortesía (condicional)',
      focus:
        'El condicional sirve para pedir con cortesía y para hablar de situaciones imaginarias. Observa la terminación del verbo y, en las frases con "si", la concordancia entre las dos partes.',
      examples: [
        { es: 'Me gustaría aprender otro idioma.', t: {
          en: 'I would like to learn another language.',
          fr: "J'aimerais apprendre une autre langue.",
          de: 'Ich würde gerne eine andere Sprache lernen.',
          it: "Mi piacerebbe imparare un'altra lingua.",
          pt: 'Eu gostaria de aprender outro idioma.' } },
        { es: 'Si tuviera tiempo, viajaría más.', t: {
          en: 'If I had time, I would travel more.',
          fr: "Si j'avais le temps, je voyagerais plus.",
          de: 'Wenn ich Zeit hätte, würde ich mehr reisen.',
          it: 'Se avessi tempo, viaggerei di più.',
          pt: 'Se eu tivesse tempo, viajaria mais.' } },
      ],
    },
    {
      id: 'b1-conectores',
      title: 'Opinar y conectar ideas',
      focus:
        'Para dar opiniones y enlazar frases se usan conectores de causa, concesión y consecuencia (porque, aunque, así que…). Fíjate en qué conector elige cada idioma.',
      examples: [
        { es: 'Creo que es importante, aunque es difícil.', t: {
          en: "I think it's important, although it's difficult.",
          fr: "Je pense que c'est important, bien que ce soit difficile.",
          de: 'Ich glaube, es ist wichtig, obwohl es schwierig ist.',
          it: 'Penso che sia importante, anche se è difficile.',
          pt: 'Acho que é importante, embora seja difícil.' } },
        { es: 'No vine porque estaba enfermo.', t: {
          en: "I didn't come because I was sick.",
          fr: "Je ne suis pas venu parce que j'étais malade.",
          de: 'Ich bin nicht gekommen, weil ich krank war.',
          it: 'Non sono venuto perché ero malato.',
          pt: 'Não vim porque estava doente.' } },
      ],
    },
  ],
  B2: [
    {
      id: 'b2-subjuntivo',
      title: 'El subjuntivo: deseos, dudas y emociones',
      focus:
        'Tras expresiones de deseo, duda o emoción, el español (y el italiano y el portugués) usan el subjuntivo. El inglés casi no lo marca y el alemán recurre a otras estructuras: compara cómo cambia el verbo.',
      examples: [
        { es: 'Espero que tengas un buen día.', t: {
          en: 'I hope you have a good day.',
          fr: 'J\'espère que tu passes une bonne journée.',
          de: 'Ich hoffe, dass du einen schönen Tag hast.',
          it: 'Spero che tu abbia una buona giornata.',
          pt: 'Espero que tenhas um bom dia.' } },
        { es: 'No creo que sea verdad.', t: {
          en: "I don't think it's true.",
          fr: "Je ne pense pas que ce soit vrai.",
          de: 'Ich glaube nicht, dass es wahr ist.',
          it: 'Non credo che sia vero.',
          pt: 'Não acho que seja verdade.' } },
      ],
    },
    {
      id: 'b2-pasiva',
      title: 'La voz pasiva y lo impersonal',
      focus:
        'Cuando el foco está en la acción y no en quién la hace, se usa la pasiva o construcciones impersonales (se + verbo, on, man…). Observa cómo cada idioma evita o marca al sujeto.',
      examples: [
        { es: 'El libro fue escrito por un autor famoso.', t: {
          en: 'The book was written by a famous author.',
          fr: 'Le livre a été écrit par un auteur célèbre.',
          de: 'Das Buch wurde von einem berühmten Autor geschrieben.',
          it: 'Il libro è stato scritto da un autore famoso.',
          pt: 'O livro foi escrito por um autor famoso.' } },
        { es: 'Aquí se habla español.', t: {
          en: 'Spanish is spoken here.',
          fr: 'Ici, on parle espagnol.',
          de: 'Hier spricht man Spanisch.',
          it: 'Qui si parla spagnolo.',
          pt: 'Aqui fala-se espanhol.' } },
      ],
    },
    {
      id: 'b2-argumentar',
      title: 'Argumentar con matices',
      focus:
        'En un nivel avanzado se contraponen ideas y se concede terreno con marcadores del discurso (aunque, por un lado… por otro…). Fíjate en el orden de las palabras y en el modo verbal.',
      examples: [
        { es: 'Aunque sea caro, vale la pena.', t: {
          en: "Even if it's expensive, it's worth it.",
          fr: "Même si c'est cher, ça vaut la peine.",
          de: 'Auch wenn es teuer ist, es lohnt sich.',
          it: 'Anche se è caro, ne vale la pena.',
          pt: 'Mesmo que seja caro, vale a pena.' } },
        { es: 'Por un lado es útil; por otro, es complicado.', t: {
          en: "On one hand it's useful; on the other, it's complicated.",
          fr: "D'un côté c'est utile ; de l'autre, c'est compliqué.",
          de: 'Einerseits ist es nützlich, andererseits ist es kompliziert.',
          it: "Da un lato è utile; dall'altro, è complicato.",
          pt: 'Por um lado é útil; por outro, é complicado.' } },
      ],
    },
  ],
}
