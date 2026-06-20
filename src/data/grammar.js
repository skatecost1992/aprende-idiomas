// Lecciones de gramática en contexto por nivel (A1, A2, B1, B2, C1).
// Cada lección tiene:
//   focus    : función comunicativa
//   build    : cómo se construye y qué pasa con los verbos
//   forms    : oraciones afirmativa / negativa / pregunta / respuesta (es + 5 idiomas)
//   examples : frases modelo (es + 5 idiomas)
//
// Las frases están disponibles para estos idiomas:
export const EXAMPLE_LANGS = ['en', 'fr', 'de', 'it', 'pt']

export const grammar = {
  A1: [
    {
      id: 'a1-presentarse',
      title: 'Ser y presentarse',
      focus: 'Con el verbo "ser" dices quién eres (profesión, nacionalidad) y con expresiones fijas te presentas.',
      build: 'El verbo "ser" es irregular en casi todos los idiomas y se memoriza (soy/eres/es; en inglés am/is/are; en alemán bin/bist/ist). Para el nombre se usa un verbo reflexivo ("me llamo") o "mi nombre es".',
      forms: [
        { tipo: 'Afirmativa', es: 'Soy profesor.', t: { en: 'I am a teacher.', fr: 'Je suis professeur.', de: 'Ich bin Lehrer.', it: 'Sono insegnante.', pt: 'Sou professor.' } },
        { tipo: 'Negativa', es: 'No soy de aquí.', t: { en: "I'm not from here.", fr: "Je ne suis pas d'ici.", de: 'Ich bin nicht von hier.', it: 'Non sono di qui.', pt: 'Não sou daqui.' } },
        { tipo: 'Pregunta', es: '¿De dónde eres?', t: { en: 'Where are you from?', fr: "D'où es-tu ?", de: 'Woher kommst du?', it: 'Di dove sei?', pt: 'De onde és?' } },
        { tipo: 'Respuesta', es: 'Soy de Colombia.', t: { en: "I'm from Colombia.", fr: 'Je suis de Colombie.', de: 'Ich komme aus Kolumbien.', it: 'Sono della Colombia.', pt: 'Sou da Colômbia.' } },
      ],
      examples: [
        { es: 'Soy estudiante.', t: { en: 'I am a student.', fr: 'Je suis étudiant.', de: 'Ich bin Student.', it: 'Sono studente.', pt: 'Sou estudante.' } },
        { es: 'Me llamo Ana.', t: { en: 'My name is Ana.', fr: "Je m'appelle Ana.", de: 'Ich heiße Ana.', it: 'Mi chiamo Ana.', pt: 'Chamo-me Ana.' } },
      ],
    },
    {
      id: 'a1-presente',
      title: 'El presente de indicativo',
      focus: 'El presente sirve para hablar de ti, de hechos y de tus hábitos.',
      build: 'Se forma con la RAÍZ del verbo + la terminación de cada persona. En español los verbos se agrupan por su terminación (-ar, -er, -ir): habl-o, com-o, viv-o. Los verbos regulares siguen el patrón; los irregulares cambian la raíz (tener → tengo). En inglés el verbo casi no cambia (solo añade -s en he/she/it: he works); en alemán e italiano cambian las terminaciones según la persona.',
      forms: [
        { tipo: 'Afirmativa', es: 'Hablo español.', t: { en: 'I speak Spanish.', fr: 'Je parle espagnol.', de: 'Ich spreche Spanisch.', it: 'Parlo spagnolo.', pt: 'Falo espanhol.' } },
        { tipo: 'Negativa', es: 'No hablo francés.', t: { en: "I don't speak French.", fr: 'Je ne parle pas français.', de: 'Ich spreche kein Französisch.', it: 'Non parlo francese.', pt: 'Não falo francês.' } },
        { tipo: 'Pregunta', es: '¿Hablas inglés?', t: { en: 'Do you speak English?', fr: 'Parles-tu anglais ?', de: 'Sprichst du Englisch?', it: 'Parli inglese?', pt: 'Falas inglês?' } },
        { tipo: 'Respuesta', es: 'Sí, hablo un poco.', t: { en: 'Yes, I speak a little.', fr: 'Oui, je parle un peu.', de: 'Ja, ich spreche ein bisschen.', it: "Sì, parlo un po'.", pt: 'Sim, falo um pouco.' } },
      ],
      examples: [
        { es: 'Hablo un poco de inglés.', t: { en: 'I speak a little English.', fr: 'Je parle un peu anglais.', de: 'Ich spreche ein bisschen Englisch.', it: "Parlo un po' di inglese.", pt: 'Falo um pouco de inglês.' } },
        { es: 'Vivo en una ciudad grande.', t: { en: 'I live in a big city.', fr: "J'habite dans une grande ville.", de: 'Ich wohne in einer großen Stadt.', it: 'Vivo in una grande città.', pt: 'Moro numa cidade grande.' } },
      ],
    },
    {
      id: 'a1-preguntas',
      title: 'Preguntas y negación básicas',
      focus: 'Preguntar para obtener información y negar para decir lo que no es o no haces.',
      build: 'Las preguntas empiezan con una palabra interrogativa (qué, dónde, cuándo, quién, cómo); muchos idiomas además invierten el orden o usan un auxiliar (inglés: do/does; alemán: invierte verbo y sujeto). La negación antepone "no" al verbo (inglés: don\'t/doesn\'t; francés: ne… pas; alemán: nicht/kein).',
      forms: [
        { tipo: 'Afirmativa', es: 'Tengo un perro.', t: { en: 'I have a dog.', fr: "J'ai un chien.", de: 'Ich habe einen Hund.', it: 'Ho un cane.', pt: 'Tenho um cão.' } },
        { tipo: 'Negativa', es: 'No tengo tiempo.', t: { en: "I don't have time.", fr: "Je n'ai pas le temps.", de: 'Ich habe keine Zeit.', it: 'Non ho tempo.', pt: 'Não tenho tempo.' } },
        { tipo: 'Pregunta', es: '¿Dónde vives?', t: { en: 'Where do you live?', fr: 'Où habites-tu ?', de: 'Wo wohnst du?', it: 'Dove abiti?', pt: 'Onde moras?' } },
        { tipo: 'Respuesta', es: 'Vivo en Madrid.', t: { en: 'I live in Madrid.', fr: "J'habite à Madrid.", de: 'Ich wohne in Madrid.', it: 'Vivo a Madrid.', pt: 'Moro em Madrid.' } },
      ],
      examples: [
        { es: '¿Dónde vives?', t: { en: 'Where do you live?', fr: 'Où habites-tu ?', de: 'Wo wohnst du?', it: 'Dove abiti?', pt: 'Onde moras?' } },
        { es: 'No tengo coche.', t: { en: "I don't have a car.", fr: "Je n'ai pas de voiture.", de: 'Ich habe kein Auto.', it: 'Non ho la macchina.', pt: 'Não tenho carro.' } },
      ],
    },
  ],
  A2: [
    {
      id: 'a2-pasado',
      title: 'Hablar del pasado',
      focus: 'Contar acciones terminadas (ayer, la semana pasada).',
      build: 'El pasado simple expresa acciones terminadas. En español tiene terminaciones propias (-é, -aste, -ó…). En inglés los verbos regulares añaden -ed (worked) y muchos son irregulares (go → went). En francés, italiano y alemán se usa muy a menudo el auxiliar (avoir/être, haben/sein) + participio.',
      forms: [
        { tipo: 'Afirmativa', es: 'Ayer comí pizza.', t: { en: 'Yesterday I ate pizza.', fr: "Hier, j'ai mangé une pizza.", de: 'Gestern habe ich Pizza gegessen.', it: 'Ieri ho mangiato la pizza.', pt: 'Ontem comi pizza.' } },
        { tipo: 'Negativa', es: 'No vi la película.', t: { en: "I didn't see the film.", fr: "Je n'ai pas vu le film.", de: 'Ich habe den Film nicht gesehen.', it: 'Non ho visto il film.', pt: 'Não vi o filme.' } },
        { tipo: 'Pregunta', es: '¿Qué hiciste ayer?', t: { en: 'What did you do yesterday?', fr: "Qu'as-tu fait hier ?", de: 'Was hast du gestern gemacht?', it: 'Cosa hai fatto ieri?', pt: 'O que fizeste ontem?' } },
        { tipo: 'Respuesta', es: 'Trabajé todo el día.', t: { en: 'I worked all day.', fr: "J'ai travaillé toute la journée.", de: 'Ich habe den ganzen Tag gearbeitet.', it: 'Ho lavorato tutto il giorno.', pt: 'Trabalhei o dia todo.' } },
      ],
      examples: [
        { es: 'Ayer trabajé en casa.', t: { en: 'Yesterday I worked at home.', fr: "Hier, j'ai travaillé à la maison.", de: 'Gestern habe ich zu Hause gearbeitet.', it: 'Ieri ho lavorato a casa.', pt: 'Ontem trabalhei em casa.' } },
        { es: 'Fuimos al cine el sábado.', t: { en: 'We went to the cinema on Saturday.', fr: 'Nous sommes allés au cinéma samedi.', de: 'Wir sind am Samstag ins Kino gegangen.', it: 'Sabato siamo andati al cinema.', pt: 'Fomos ao cinema no sábado.' } },
      ],
    },
    {
      id: 'a2-futuro',
      title: 'Planes y futuro próximo',
      focus: 'Expresar planes e intenciones inmediatas.',
      build: 'Para los planes, el español usa "ir a + infinitivo" (voy a comer). En inglés es "be going to" (I\'m going to eat); en francés "aller + infinitif" (je vais manger). El alemán y el italiano suelen recurrir al presente o al futuro simple.',
      forms: [
        { tipo: 'Afirmativa', es: 'Voy a estudiar esta noche.', t: { en: "I'm going to study tonight.", fr: 'Je vais étudier ce soir.', de: 'Ich werde heute Abend lernen.', it: 'Stasera studierò.', pt: 'Vou estudar esta noite.' } },
        { tipo: 'Negativa', es: 'No voy a salir.', t: { en: "I'm not going to go out.", fr: 'Je ne vais pas sortir.', de: 'Ich werde nicht ausgehen.', it: 'Non uscirò.', pt: 'Não vou sair.' } },
        { tipo: 'Pregunta', es: '¿Qué vas a hacer?', t: { en: 'What are you going to do?', fr: 'Que vas-tu faire ?', de: 'Was wirst du machen?', it: 'Cosa farai?', pt: 'O que vais fazer?' } },
        { tipo: 'Respuesta', es: 'Voy a descansar.', t: { en: "I'm going to rest.", fr: 'Je vais me reposer.', de: 'Ich werde mich ausruhen.', it: 'Mi riposerò.', pt: 'Vou descansar.' } },
      ],
      examples: [
        { es: 'Voy a viajar este verano.', t: { en: 'I am going to travel this summer.', fr: 'Je vais voyager cet été.', de: 'Diesen Sommer werde ich reisen.', it: "Quest'estate viaggerò.", pt: 'Vou viajar neste verão.' } },
        { es: 'Vamos a estudiar juntos.', t: { en: 'We are going to study together.', fr: 'Nous allons étudier ensemble.', de: 'Wir werden zusammen lernen.', it: 'Studieremo insieme.', pt: 'Vamos estudar juntos.' } },
      ],
    },
    {
      id: 'a2-comparar',
      title: 'Comparar',
      focus: 'Comparar cosas y señalar lo máximo.',
      build: 'El comparativo de superioridad usa "más + adjetivo + que"; el superlativo "el más + adjetivo". En inglés los adjetivos cortos añaden -er/-est (bigger, the biggest) y los largos usan more/the most. Algunos son irregulares (good → better → best; bueno → mejor).',
      forms: [
        { tipo: 'Afirmativa', es: 'Soy más alto que mi hermano.', t: { en: 'I am taller than my brother.', fr: 'Je suis plus grand que mon frère.', de: 'Ich bin größer als mein Bruder.', it: 'Sono più alto di mio fratello.', pt: 'Sou mais alto que o meu irmão.' } },
        { tipo: 'Negativa', es: 'No es tan caro como pensaba.', t: { en: "It's not as expensive as I thought.", fr: "Ce n'est pas aussi cher que je pensais.", de: 'Es ist nicht so teuer, wie ich dachte.', it: 'Non è così caro come pensavo.', pt: 'Não é tão caro como pensava.' } },
        { tipo: 'Pregunta', es: '¿Cuál es el mejor?', t: { en: 'Which one is the best?', fr: 'Lequel est le meilleur ?', de: 'Welcher ist der beste?', it: 'Qual è il migliore?', pt: 'Qual é o melhor?' } },
        { tipo: 'Respuesta', es: 'Este es el más barato.', t: { en: 'This one is the cheapest.', fr: "C'est le moins cher.", de: 'Dieser ist der billigste.', it: 'Questo è il più economico.', pt: 'Este é o mais barato.' } },
      ],
      examples: [
        { es: 'Mi ciudad es más grande que la tuya.', t: { en: 'My city is bigger than yours.', fr: 'Ma ville est plus grande que la tienne.', de: 'Meine Stadt ist größer als deine.', it: 'La mia città è più grande della tua.', pt: 'A minha cidade é maior que a tua.' } },
        { es: 'Este es el mejor libro.', t: { en: 'This is the best book.', fr: "C'est le meilleur livre.", de: 'Das ist das beste Buch.', it: 'Questo è il libro migliore.', pt: 'Este é o melhor livro.' } },
      ],
    },
  ],
  B1: [
    {
      id: 'b1-pasado',
      title: 'Narrar en pasado',
      focus: 'Para contar lo que pasó se combinan distintos tiempos del pasado: uno para acciones concretas y terminadas, y otro para describir contextos o hábitos.',
      build: 'Se combinan el pretérito/passé composé (acción puntual terminada: fui, comí) y el imperfecto (descripción y hábito: era, vivía). Elegir uno u otro cambia el matiz: lo que pasó una vez frente a lo que solía pasar o describía una situación.',
      examples: [
        { es: 'Ayer fui al mercado y compré fruta.', t: { en: 'Yesterday I went to the market and bought fruit.', fr: "Hier, je suis allé au marché et j'ai acheté des fruits.", de: 'Gestern bin ich zum Markt gegangen und habe Obst gekauft.', it: 'Ieri sono andato al mercato e ho comprato della frutta.', pt: 'Ontem fui ao mercado e comprei fruta.' } },
        { es: 'Cuando era niño, vivía en el campo.', t: { en: 'When I was a child, I lived in the countryside.', fr: "Quand j'étais enfant, je vivais à la campagne.", de: 'Als ich ein Kind war, lebte ich auf dem Land.', it: 'Quando ero bambino, vivevo in campagna.', pt: 'Quando era criança, vivia no campo.' } },
      ],
    },
    {
      id: 'b1-condicional',
      title: 'Hipótesis y cortesía (condicional)',
      focus: 'El condicional sirve para pedir con cortesía y para hablar de situaciones imaginarias.',
      build: 'En las lenguas romances se forma con el infinitivo + terminaciones (-ía, -ías…): hablaría. En inglés es "would + verbo". Se usa para cortesía y deseos; en las oraciones con "si", la condición va en imperfecto de subjuntivo (si tuviera…) y el resultado en condicional (viajaría).',
      examples: [
        { es: 'Me gustaría aprender otro idioma.', t: { en: 'I would like to learn another language.', fr: "J'aimerais apprendre une autre langue.", de: 'Ich würde gerne eine andere Sprache lernen.', it: "Mi piacerebbe imparare un'altra lingua.", pt: 'Eu gostaria de aprender outro idioma.' } },
        { es: 'Si tuviera tiempo, viajaría más.', t: { en: 'If I had time, I would travel more.', fr: "Si j'avais le temps, je voyagerais plus.", de: 'Wenn ich Zeit hätte, würde ich mehr reisen.', it: 'Se avessi tempo, viaggerei di più.', pt: 'Se eu tivesse tempo, viajaria mais.' } },
      ],
    },
    {
      id: 'b1-conectores',
      title: 'Opinar y conectar ideas',
      focus: 'Para dar opiniones y enlazar frases se usan conectores de causa, concesión y consecuencia.',
      build: 'Los conectores enlazan ideas: causa (porque), concesión (aunque), consecuencia (así que, por eso). Algunos exigen un modo concreto: en español, "aunque" lleva subjuntivo cuando lo que sigue no se afirma como un hecho.',
      examples: [
        { es: 'Creo que es importante, aunque es difícil.', t: { en: "I think it's important, although it's difficult.", fr: "Je pense que c'est important, bien que ce soit difficile.", de: 'Ich glaube, es ist wichtig, obwohl es schwierig ist.', it: 'Penso che sia importante, anche se è difficile.', pt: 'Acho que é importante, embora seja difícil.' } },
        { es: 'No vine porque estaba enfermo.', t: { en: "I didn't come because I was sick.", fr: "Je ne suis pas venu parce que j'étais malade.", de: 'Ich bin nicht gekommen, weil ich krank war.', it: 'Non sono venuto perché ero malato.', pt: 'Não vim porque estava doente.' } },
      ],
    },
  ],
  B2: [
    {
      id: 'b2-subjuntivo',
      title: 'El subjuntivo: deseos, dudas y emociones',
      focus: 'Tras expresiones de deseo, duda o emoción, varias lenguas usan el subjuntivo.',
      build: 'El subjuntivo aparece en la oración subordinada (normalmente con "que") tras verbos de deseo, duda, emoción o influencia: espero que VENGAS. El español, el italiano y el portugués lo marcan claramente; el inglés apenas lo conserva y el alemán recurre al Konjunktiv u otras estructuras.',
      examples: [
        { es: 'Espero que tengas un buen día.', t: { en: 'I hope you have a good day.', fr: "J'espère que tu passes une bonne journée.", de: 'Ich hoffe, dass du einen schönen Tag hast.', it: 'Spero che tu abbia una buona giornata.', pt: 'Espero que tenhas um bom dia.' } },
        { es: 'No creo que sea verdad.', t: { en: "I don't think it's true.", fr: 'Je ne pense pas que ce soit vrai.', de: 'Ich glaube nicht, dass es wahr ist.', it: 'Non credo che sia vero.', pt: 'Não acho que seja verdade.' } },
      ],
    },
    {
      id: 'b2-pasiva',
      title: 'La voz pasiva y lo impersonal',
      focus: 'Cuando el foco está en la acción y no en quién la hace, se usa la pasiva o construcciones impersonales.',
      build: 'La voz pasiva se forma con "ser" + participio (+ "por" + agente): fue escrito por… En inglés: be + participio (was written). Las construcciones impersonales (se habla, on parle, man spricht) ocultan o generalizan al sujeto.',
      examples: [
        { es: 'El libro fue escrito por un autor famoso.', t: { en: 'The book was written by a famous author.', fr: 'Le livre a été écrit par un auteur célèbre.', de: 'Das Buch wurde von einem berühmten Autor geschrieben.', it: 'Il libro è stato scritto da un autore famoso.', pt: 'O livro foi escrito por um autor famoso.' } },
        { es: 'Aquí se habla español.', t: { en: 'Spanish is spoken here.', fr: 'Ici, on parle espagnol.', de: 'Hier spricht man Spanisch.', it: 'Qui si parla spagnolo.', pt: 'Aqui fala-se espanhol.' } },
      ],
    },
    {
      id: 'b2-argumentar',
      title: 'Argumentar con matices',
      focus: 'En un nivel avanzado se contraponen ideas y se concede terreno con marcadores del discurso.',
      build: 'Para argumentar se usan marcadores del discurso: contraste (sin embargo, en cambio), concesión (aunque + subjuntivo), consecuencia (por lo tanto). Cuidan la cohesión y el orden de las ideas para guiar al lector.',
      examples: [
        { es: 'Aunque sea caro, vale la pena.', t: { en: "Even if it's expensive, it's worth it.", fr: "Même si c'est cher, ça vaut la peine.", de: 'Auch wenn es teuer ist, es lohnt sich.', it: 'Anche se è caro, ne vale la pena.', pt: 'Mesmo que seja caro, vale a pena.' } },
        { es: 'Por un lado es útil; por otro, es complicado.', t: { en: "On one hand it's useful; on the other, it's complicated.", fr: "D'un côté c'est utile ; de l'autre, c'est compliqué.", de: 'Einerseits ist es nützlich, andererseits ist es kompliziert.', it: "Da un lato è utile; dall'altro, è complicato.", pt: 'Por um lado é útil; por outro, é complicado.' } },
      ],
    },
  ],
  C1: [
    {
      id: 'c1-concesion',
      title: 'Concesión y matización',
      focus: 'Conceder terreno y matizar para argumentar con sutileza.',
      build: 'Las estructuras concesivas admiten que algo es cierto pero no impide otra cosa: "por más que + subjuntivo", "aun así", "a pesar de + infinitivo". Aportan un matiz argumentativo fino propio del nivel avanzado.',
      examples: [
        { es: 'Por más que lo intento, no lo consigo.', t: { en: "No matter how hard I try, I can't do it.", fr: "J'ai beau essayer, je n'y arrive pas.", de: 'So sehr ich es auch versuche, ich schaffe es nicht.', it: 'Per quanto ci provi, non ci riesco.', pt: 'Por mais que tente, não consigo.' } },
        { es: 'Aun así, merece la pena.', t: { en: "Even so, it's worth it.", fr: 'Malgré tout, ça en vaut la peine.', de: 'Trotzdem lohnt es sich.', it: 'Anche così, ne vale la pena.', pt: 'Ainda assim, vale a pena.' } },
      ],
    },
    {
      id: 'c1-enfasis',
      title: 'Estructuras enfáticas',
      focus: 'Construcciones para destacar una idea.',
      build: 'Las construcciones enfáticas resaltan un elemento: la perífrasis de relativo ("lo que… es…") y las oraciones escindidas ("fue… cuando/quien…"). Reordenan la frase para enfocar la atención donde interesa.',
      examples: [
        { es: 'Lo que de verdad importa es la práctica.', t: { en: 'What really matters is practice.', fr: "Ce qui compte vraiment, c'est la pratique.", de: 'Was wirklich zählt, ist die Übung.', it: 'Ciò che conta davvero è la pratica.', pt: 'O que realmente importa é a prática.' } },
        { es: 'Fue entonces cuando lo entendí.', t: { en: 'It was then that I understood it.', fr: "C'est alors que j'ai compris.", de: 'Genau dann habe ich es verstanden.', it: 'Fu allora che lo capii.', pt: 'Foi então que entendi.' } },
      ],
    },
    {
      id: 'c1-colocaciones',
      title: 'Colocaciones y registro',
      focus: 'Combinaciones de palabras naturales del nivel avanzado.',
      build: 'Las colocaciones son combinaciones fijas y naturales de palabras (tomar una decisión, prestar atención, profundo respeto). Usarlas bien distingue a un hablante avanzado y no se traducen palabra por palabra entre idiomas.',
      examples: [
        { es: 'Hay que tomar una decisión difícil.', t: { en: 'A difficult decision must be made.', fr: 'Il faut prendre une décision difficile.', de: 'Man muss eine schwierige Entscheidung treffen.', it: 'Bisogna prendere una decisione difficile.', pt: 'É preciso tomar uma decisão difícil.' } },
        { es: 'Presta especial atención a los detalles.', t: { en: 'Pay special attention to the details.', fr: 'Fais particulièrement attention aux détails.', de: 'Achte besonders auf die Details.', it: 'Presta particolare attenzione ai dettagli.', pt: 'Presta especial atenção aos detalhes.' } },
      ],
    },
  ],
}
