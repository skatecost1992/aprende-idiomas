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
//   concepts   : resumen de lo que se aprende en el nivel (para estudiar)
//   grammar    : temario gramatical -> [{ t: tema, d: explicación }]
//   skills     : destrezas a practicar -> [{ t: destreza, d: cómo practicarla }]

export const levels = [
  {
    code: 'A1',
    title: 'Acceso',
    stage: 'Usuario básico',
    color: '#22c55e',
    descriptor:
      'Comprende y usa expresiones cotidianas y frases muy básicas para satisfacer necesidades concretas. Sabe presentarse, pedir y dar datos personales (dónde vive, qué tiene). Se comunica de forma elemental si el interlocutor habla despacio y está dispuesto a ayudar.',
    concepts:
      'En A1 construyes los cimientos: el alfabeto y los sonidos, el presente de los verbos más básicos y el vocabulario del día a día. Aprendes a dar y pedir información personal con frases cortas y memorizadas.',
    grammar: [
      { t: 'Pronombres personales y verbos ser/estar/tener (presente)', d: 'Yo, tú, él… junto a los tres verbos clave para identificar, describir y poseer. Son la base de casi cualquier frase.' },
      { t: 'Presente de indicativo (verbos regulares)', d: 'Conjugación de los verbos regulares para hablar de hechos y acciones habituales (yo hablo, tú comes…).' },
      { t: 'Género y número; artículos', d: 'Masculino/femenino y singular/plural del sustantivo, con los artículos que lo acompañan (el/la, un/una).' },
      { t: 'Números, la hora y la fecha', d: 'Contar, decir la hora y las fechas: imprescindible para compras, citas y horarios.' },
      { t: 'Preguntas básicas', d: 'Formular preguntas con qué, quién, dónde, cuándo y cómo para obtener información esencial.' },
      { t: 'Negación simple', d: 'Negar una frase de forma básica (no + verbo) para decir lo que no es o lo que no haces.' },
    ],
    skills: [
      { t: 'Saludar, presentarse y despedirse', d: 'Practica diálogos de saludo y despedida, y di tu nombre, tu origen y tu profesión.' },
      { t: 'Reconocer palabras y frases frecuentes', d: 'Escucha audios muy cortos y lee carteles para identificar vocabulario de alta frecuencia.' },
      { t: 'Rellenar formularios con datos personales', d: 'Completa fichas con nombre, dirección, edad y nacionalidad.' },
      { t: 'Entender instrucciones cortas', d: 'Sigue indicaciones simples (abre, escribe, escucha) dichas despacio.' },
    ],
  },
  {
    code: 'A2',
    title: 'Plataforma',
    stage: 'Usuario básico',
    color: '#84cc16',
    descriptor:
      'Comprende frases y expresiones de uso frecuente sobre temas cercanos (información personal y familiar, compras, lugares de interés, trabajo). Se comunica en tareas simples y rutinarias que requieren un intercambio directo de información.',
    concepts:
      'En A2 sales de lo inmediato: hablas del pasado y de planes, comparas cosas y enlazas ideas simples con conectores. Ya te desenvuelves en situaciones cotidianas como comprar, comer fuera o viajar.',
    grammar: [
      { t: 'Pasado simple (pretérito) y contraste con el presente', d: 'Contar acciones terminadas (ayer comí) y distinguirlas de lo que haces habitualmente.' },
      { t: 'Futuro próximo (ir a + infinitivo)', d: 'Expresar planes e intenciones inmediatas (voy a estudiar).' },
      { t: 'Comparativos y superlativos', d: 'Comparar (más… que, menos… que) y señalar lo máximo (el más grande).' },
      { t: 'Preposiciones de lugar y de tiempo', d: 'Situar cosas y acciones (en, sobre, a las, por la mañana).' },
      { t: 'Verbos reflexivos y pronominales', d: 'Acciones que recaen en uno mismo (levantarse, ducharse) para describir rutinas.' },
      { t: 'Conectores básicos', d: 'Unir frases con y, pero, porque y entonces para dar más coherencia.' },
    ],
    skills: [
      { t: 'Describir tu entorno, rutina y planes', d: 'Habla de tu casa, tu día típico y lo que vas a hacer el fin de semana.' },
      { t: 'Desenvolverte en compras y viajes', d: 'Practica diálogos de tienda, restaurante y transporte (pedir, preguntar precios).' },
      { t: 'Escribir notas y mensajes cortos', d: 'Redacta postales, recados y mensajes con información sencilla.' },
      { t: 'Entender textos breves muy sencillos', d: 'Lee anuncios, menús y horarios captando la información esencial.' },
    ],
  },
  {
    code: 'B1',
    title: 'Umbral',
    stage: 'Usuario independiente',
    color: '#eab308',
    descriptor:
      'Comprende los puntos principales de textos claros sobre temas conocidos (trabajo, estudios, ocio). Se desenvuelve en la mayoría de situaciones de viaje. Describe experiencias, deseos y opiniones, y justifica brevemente sus planes.',
    concepts:
      'En B1 ganas autonomía: narras experiencias combinando varios pasados, expresas hipótesis y deseos, y conectas ideas para argumentar de forma sencilla. Empiezas a manejar el subjuntivo.',
    grammar: [
      { t: 'Contraste de pasados', d: 'Combinar pretérito, imperfecto y pretérito perfecto para narrar con precisión (qué pasó vs. cómo era).' },
      { t: 'Condicional simple', d: 'Expresar cortesía, deseos e hipótesis (me gustaría, sería).' },
      { t: 'Introducción al subjuntivo', d: 'Usarlo tras deseos, recomendaciones y dudas (espero que vengas).' },
      { t: 'Estilo indirecto básico', d: 'Reportar lo que otra persona dijo (dijo que estaba cansado).' },
      { t: 'Oraciones de relativo', d: 'Unir información con que, quien, donde (el libro que leí).' },
      { t: 'Conectores de causa, consecuencia y finalidad', d: 'Argumentar con porque, así que, para que.' },
    ],
    skills: [
      { t: 'Leer textos informativos sencillos', d: 'Lee artículos y noticias breves identificando la idea principal y los detalles.' },
      { t: 'Conversar sobre temas familiares', d: 'Mantén charlas sobre trabajo, estudios y ocio, pidiendo aclaraciones cuando haga falta.' },
      { t: 'Narrar experiencias y opinar', d: 'Cuenta un viaje o una anécdota y justifica brevemente tu opinión.' },
      { t: 'Escribir cartas y correos personales', d: 'Redacta correos describiendo experiencias e impresiones.' },
    ],
  },
  {
    code: 'B2',
    title: 'Avanzado',
    stage: 'Usuario independiente',
    color: '#f59e0b',
    descriptor:
      'Comprende las ideas principales de textos complejos, incluidos los técnicos de su especialidad. Se relaciona con hablantes nativos con fluidez y naturalidad. Produce textos claros y detallados y defiende un punto de vista.',
    concepts:
      'En B2 alcanzas fluidez: dominas el subjuntivo, la voz pasiva y las condicionales, y organizas tus argumentos con marcadores del discurso. Distingues registros y matices.',
    grammar: [
      { t: 'Subjuntivo presente y pasado en subordinadas', d: 'Usarlo con soltura tras emociones, opiniones negadas y conjunciones (aunque, para que).' },
      { t: 'Voz pasiva e impersonal', d: 'Centrar la atención en la acción (fue construido; se dice que…).' },
      { t: 'Estilo indirecto completo', d: 'Reportar con todos los cambios de tiempo y persona.' },
      { t: 'Oraciones condicionales (todos los tipos)', d: 'Reales, hipotéticas e irreales del pasado (si hubiera sabido…).' },
      { t: 'Marcadores del discurso', d: 'Conectar ideas con sin embargo, por lo tanto, en cambio.' },
      { t: 'Matices de registro', d: 'Adaptar el lenguaje a contextos formales e informales.' },
    ],
    skills: [
      { t: 'Comprender noticias y debates', d: 'Sigue telediarios, pódcast y películas sin subtítulos captando los matices.' },
      { t: 'Argumentar y defender posturas', d: 'Participa en debates aportando ejemplos y rebatiendo con respeto.' },
      { t: 'Redactar ensayos y reseñas', d: 'Escribe textos estructurados con introducción, desarrollo y conclusión.' },
      { t: 'Resumir varias fuentes', d: 'Sintetiza información de distintos textos en un resumen coherente.' },
    ],
  },
  {
    code: 'C1',
    title: 'Dominio operativo eficaz',
    stage: 'Usuario competente',
    color: '#f97316',
    descriptor:
      'Comprende textos largos y exigentes y reconoce sentidos implícitos. Se expresa con fluidez y espontaneidad sin un esfuerzo aparente por encontrar las palabras. Utiliza la lengua de forma flexible y eficaz para fines sociales, académicos y profesionales.',
    concepts:
      'En C1 pulen la precisión y la naturalidad: dominas el subjuntivo en todos sus usos, las colocaciones léxicas y la organización del discurso, y controlas el tono y la ironía.',
    grammar: [
      { t: 'Subjuntivo en todos sus usos y tiempos', d: 'Emplearlo con naturalidad, incluido el pluscuamperfecto de subjuntivo.' },
      { t: 'Estructuras enfáticas y concesivas', d: 'Dar énfasis y conceder (lo que de verdad importa…; por más que…).' },
      { t: 'Cohesión y organización del discurso', d: 'Encadenar párrafos largos con referencias y conectores avanzados.' },
      { t: 'Colocaciones léxicas', d: 'Combinaciones naturales de palabras (tomar una decisión, prestar atención).' },
      { t: 'Registro, tono e ironía', d: 'Ajustar el matiz según la intención y el contexto, incluido el humor.' },
    ],
    skills: [
      { t: 'Comprender literatura y textos especializados', d: 'Lee novelas y artículos técnicos captando el sentido implícito.' },
      { t: 'Exponer ideas complejas', d: 'Da presentaciones estructuradas sobre temas abstractos.' },
      { t: 'Sintetizar y reformular fuentes', d: 'Combina varias fuentes y reexprésalas con tus palabras.' },
      { t: 'Escribir sobre temas abstractos', d: 'Redacta textos claros y bien organizados sobre ideas complejas.' },
    ],
  },
  {
    code: 'C2',
    title: 'Maestría',
    stage: 'Usuario competente',
    color: '#ef4444',
    descriptor:
      'Comprende prácticamente todo lo que oye o lee. Resume información de fuentes habladas y escritas reconstruyendo argumentos. Se expresa espontáneamente, con gran fluidez y precisión, distinguiendo matices sutiles incluso en situaciones complejas. Su comprensión equivale a la de un hablante nativo culto.',
    concepts:
      'En C2 alcanzas un dominio cuasi-nativo: manejas modismos, refranes y humor, te adaptas a cualquier registro y dialecto, y captas el subtexto y la intención. El foco es la sutileza y la precisión total.',
    grammar: [
      { t: 'Dominio idiomático', d: 'Refranes, modismos, juegos de palabras y humor usados con naturalidad.' },
      { t: 'Variación dialectal y sociolingüística', d: 'Reconocer jergas, acentos y lenguaje coloquial de distintas regiones.' },
      { t: 'Registros literario, académico y técnico', d: 'Producir textos en el estilo exacto que requiere cada ámbito.' },
      { t: 'Matices pragmáticos', d: 'Captar implicaturas, sobreentendidos y subtexto (lo que se dice sin decirlo).' },
      { t: 'Precisión estilística total', d: 'Elegir la palabra y el matiz exactos en cualquier contexto.' },
    ],
    skills: [
      { t: 'Comprender cualquier texto o discurso', d: 'Entiende material muy abstracto, técnico o cultural sin esfuerzo.' },
      { t: 'Interpretar, traducir y mediar', d: 'Traslada significado entre lenguas conservando matiz y tono.' },
      { t: 'Escribir con calidad cuasi-nativa', d: 'Redacta con estilo propio y total corrección.' },
      { t: 'Captar matices culturales y humor', d: 'Reconoce la intención, la ironía y las referencias culturales.' },
    ],
  },
]

// Consejo general sobre cómo progresa la dificultad y cómo llegar al nivel nativo.
export const roadmapIntro =
  'Esta ruta sigue el Marco Común Europeo de Referencia (MCER). El vocabulario y la gramática se vuelven más abstractos y precisos a medida que subes de nivel. A partir de B2 la clave deja de ser memorizar listas y pasa a ser la exposición constante: lee, escucha y habla con materiales reales (noticias, series, podcasts, libros). La comprensión nativa (C2) se construye con miles de horas de inmersión; aquí tienes el mapa de lo que debes dominar en cada escalón.'

export function levelByCode(code) {
  return levels.find((l) => l.code === code) || null
}
