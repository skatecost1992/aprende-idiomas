// Niveles del Marco Común Europeo de Referencia (MCER / CEFR).
// Estructuran el aprendizaje desde una comprensión básica (A1) hasta una
// comprensión y expresión equivalentes a las de un hablante nativo culto (C2).
//
// Cada nivel incluye:
//   code       : A1...C2 (clave para filtrar el vocabulario)
//   title      : nombre oficial del nivel
//   stage      : etapa general (Básico / Independiente / Competente)
//   color      : color de acento en la interfaz
//   descriptor : qué es capaz de hacer el estudiante (descriptor "puede hacer")
//   grammar    : temario gramatical/estructural recomendado para el nivel
//   skills     : destrezas y tipos de actividad que conviene practicar

export const levels = [
  {
    code: 'A1',
    title: 'Acceso',
    stage: 'Usuario básico',
    color: '#22c55e',
    descriptor:
      'Comprende y usa expresiones cotidianas y frases muy básicas para satisfacer necesidades concretas. Sabe presentarse, pedir y dar datos personales (dónde vive, qué tiene). Se comunica de forma elemental si el interlocutor habla despacio y está dispuesto a ayudar.',
    grammar: [
      'Pronombres personales y verbos "ser / estar / tener" en presente',
      'Presente de indicativo de verbos regulares',
      'Género y número del sustantivo; artículos',
      'Números, la hora y la fecha',
      'Preguntas básicas (qué, quién, dónde, cuándo, cómo)',
      'Negación simple',
    ],
    skills: [
      'Saludar, presentarse y despedirse',
      'Reconocer palabras y frases muy frecuentes',
      'Rellenar formularios con datos personales',
      'Entender instrucciones cortas y sencillas',
    ],
  },
  {
    code: 'A2',
    title: 'Plataforma',
    stage: 'Usuario básico',
    color: '#84cc16',
    descriptor:
      'Comprende frases y expresiones de uso frecuente sobre temas cercanos (información personal y familiar, compras, lugares de interés, trabajo). Se comunica en tareas simples y rutinarias que requieren un intercambio directo de información.',
    grammar: [
      'Pasado simple (pretérito) y contraste con el presente',
      'Futuro próximo (ir a + infinitivo)',
      'Comparativos y superlativos',
      'Preposiciones de lugar y de tiempo',
      'Verbos reflexivos y pronominales',
      'Conectores básicos (y, pero, porque, entonces)',
    ],
    skills: [
      'Describir tu entorno, rutina y planes inmediatos',
      'Desenvolverte en compras, restaurantes y transporte',
      'Escribir notas y mensajes cortos',
      'Entender anuncios y textos breves muy sencillos',
    ],
  },
  {
    code: 'B1',
    title: 'Umbral',
    stage: 'Usuario independiente',
    color: '#eab308',
    descriptor:
      'Comprende los puntos principales de textos claros sobre temas conocidos (trabajo, estudios, ocio). Se desenvuelve en la mayoría de situaciones de viaje. Describe experiencias, deseos y opiniones, y justifica brevemente sus planes.',
    grammar: [
      'Contraste de pasados (pretérito / imperfecto / pretérito perfecto)',
      'Condicional simple',
      'Introducción al subjuntivo (deseos, recomendaciones, dudas)',
      'Estilo indirecto básico',
      'Oraciones de relativo',
      'Conectores de causa, consecuencia y finalidad',
    ],
    skills: [
      'Leer artículos y textos informativos sencillos',
      'Mantener conversaciones sobre temas familiares',
      'Narrar experiencias y argumentar opiniones brevemente',
      'Escribir cartas y correos personales',
    ],
  },
  {
    code: 'B2',
    title: 'Avanzado',
    stage: 'Usuario independiente',
    color: '#f59e0b',
    descriptor:
      'Comprende las ideas principales de textos complejos, incluidos los técnicos de su especialidad. Se relaciona con hablantes nativos con fluidez y naturalidad, sin esfuerzo por ninguna de las partes. Produce textos claros y detallados y defiende un punto de vista.',
    grammar: [
      'Subjuntivo presente y pasado en cláusulas subordinadas',
      'Voz pasiva y construcciones impersonales',
      'Estilo indirecto completo',
      'Oraciones condicionales (todos los tipos)',
      'Marcadores del discurso y conectores argumentativos',
      'Matices de registro (formal / informal)',
    ],
    skills: [
      'Comprender noticias, debates y películas sin subtítulos',
      'Argumentar y defender posturas con ejemplos',
      'Redactar ensayos, informes y reseñas',
      'Resumir información de distintas fuentes',
    ],
  },
  {
    code: 'C1',
    title: 'Dominio operativo eficaz',
    stage: 'Usuario competente',
    color: '#f97316',
    descriptor:
      'Comprende textos largos y exigentes y reconoce sentidos implícitos. Se expresa con fluidez y espontaneidad sin un esfuerzo aparente por encontrar las palabras. Utiliza la lengua de forma flexible y eficaz para fines sociales, académicos y profesionales.',
    grammar: [
      'Subjuntivo en todos sus usos y tiempos',
      'Estructuras enfáticas, concesivas y condicionales complejas',
      'Organización avanzada del discurso y cohesión',
      'Colocaciones y combinaciones léxicas frecuentes',
      'Control fino del registro, el tono y la ironía',
    ],
    skills: [
      'Comprender literatura y textos especializados',
      'Exponer ideas complejas de forma estructurada',
      'Sintetizar y reformular fuentes diversas',
      'Escribir con claridad sobre temas abstractos',
    ],
  },
  {
    code: 'C2',
    title: 'Maestría',
    stage: 'Usuario competente',
    color: '#ef4444',
    descriptor:
      'Comprende prácticamente todo lo que oye o lee. Resume información de fuentes habladas y escritas reconstruyendo argumentos. Se expresa espontáneamente, con gran fluidez y precisión, distinguiendo matices sutiles incluso en situaciones complejas. Su comprensión equivale a la de un hablante nativo culto.',
    grammar: [
      'Dominio idiomático: refranes, modismos, juegos de palabras y humor',
      'Variación dialectal y sociolingüística; jerga y lenguaje coloquial',
      'Registros literario, académico y técnico',
      'Matices pragmáticos: implicaturas, sobreentendidos y subtexto',
      'Producción precisa y estilísticamente apropiada en cualquier contexto',
    ],
    skills: [
      'Comprender cualquier texto o discurso, incluso muy abstracto',
      'Interpretar, traducir y mediar entre lenguas',
      'Escribir con calidad cuasi-nativa y estilo propio',
      'Captar matices culturales, humor e intención del hablante',
    ],
  },
]

// Consejo general sobre cómo progresa la dificultad y cómo llegar al nivel nativo.
export const roadmapIntro =
  'Esta ruta sigue el Marco Común Europeo de Referencia (MCER). El vocabulario y la gramática se vuelven más abstractos y precisos a medida que subes de nivel. A partir de B2 la clave deja de ser memorizar listas y pasa a ser la exposición constante: lee, escucha y habla con materiales reales (noticias, series, podcasts, libros). La comprensión nativa (C2) se construye con miles de horas de inmersión; aquí tienes el mapa de lo que debes dominar en cada escalón.'

export function levelByCode(code) {
  return levels.find((l) => l.code === code) || null
}
