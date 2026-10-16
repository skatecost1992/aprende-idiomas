// Listas de verbos de las lenguas eslavas: ruso, ucraniano y polaco.
//
// En estas lenguas el equivalente a los phrasal verbs son los verbos con
// prefijo: una misma raíz cambia de significado según el prefijo que lleve
// delante (идти ir → прийти llegar → уйти irse → войти entrar). Es el mismo
// mecanismo mental que go → go in → go out, así que esa es la tercera sección.
//
// Las tablas de ruso y ucraniano llevan columna de pronunciación, porque el
// alfabeto cirílico no se lee de forma evidente para un hispanohablante.

const colsCir = (base, past, part) => [
  { k: 'base', l: base },
  { k: 'past', l: past },
  { k: 'part', l: part },
  { k: 'tr', l: 'Pronunciación' },
  { k: 'es', l: 'Español' },
]

const cols = (base, past, part) => [
  { k: 'base', l: base },
  { k: 'past', l: past },
  { k: 'part', l: part },
  { k: 'es', l: 'Español' },
]

// ------------------------------------------------------------------ RUSO ----

const ruIrregular = [
  { base: 'быть', past: 'я буду (fut.)', part: 'был', tr: 'byt / budu / byl', es: 'ser, estar' },
  { base: 'идти', past: 'я иду', part: 'шёл', tr: 'idtí / idú / shol', es: 'ir (a pie)' },
  { base: 'ехать', past: 'я еду', part: 'ехал', tr: 'yéjat / yédu / yéjal', es: 'ir (en vehículo)' },
  { base: 'есть', past: 'я ем', part: 'ел', tr: 'yest / yem / yel', es: 'comer' },
  { base: 'пить', past: 'я пью', part: 'пил', tr: 'pit / pyu / pil', es: 'beber' },
  { base: 'хотеть', past: 'я хочу', part: 'хотел', tr: 'jatét / jachú / jatél', es: 'querer' },
  { base: 'мочь', past: 'я могу', part: 'мог', tr: 'moch / magú / mok', es: 'poder' },
  { base: 'дать', past: 'я дам', part: 'дал', tr: 'dat / dam / dal', es: 'dar' },
  { base: 'жить', past: 'я живу', part: 'жил', tr: 'zhit / zhivú / zhil', es: 'vivir' },
  { base: 'писать', past: 'я пишу', part: 'писал', tr: 'pisát / pishú / pisál', es: 'escribir' },
  { base: 'сказать', past: 'я скажу', part: 'сказал', tr: 'skazát / skazhú / skazál', es: 'decir' },
  { base: 'взять', past: 'я возьму', part: 'взял', tr: 'vziat / vazmú / vzial', es: 'tomar, coger' },
  { base: 'спать', past: 'я сплю', part: 'спал', tr: 'spat / splyu / spal', es: 'dormir' },
  { base: 'видеть', past: 'я вижу', part: 'видел', tr: 'vídet / vízhu / vídel', es: 'ver' },
  { base: 'любить', past: 'я люблю', part: 'любил', tr: 'liubít / liubliú / liubíl', es: 'amar, gustar' },
  { base: 'брать', past: 'я беру', part: 'брал', tr: 'brat / berú / bral', es: 'tomar' },
  { base: 'начать', past: 'я начну', part: 'начал', tr: 'nachát / nachnú / náchal', es: 'empezar' },
  { base: 'петь', past: 'я пою', part: 'пел', tr: 'pet / payú / pel', es: 'cantar' },
  { base: 'стать', past: 'я стану', part: 'стал', tr: 'stat / stánu / stal', es: 'llegar a ser' },
]

const ruRegular = [
  { base: 'читать', past: 'я читаю', part: 'читал', tr: 'chitát / chitáyu / chitál', es: 'leer' },
  { base: 'работать', past: 'я работаю', part: 'работал', tr: 'rabótat / rabótayu / rabótal', es: 'trabajar' },
  { base: 'делать', past: 'я делаю', part: 'делал', tr: 'délat / délayu / délal', es: 'hacer' },
  { base: 'думать', past: 'я думаю', part: 'думал', tr: 'dúmat / dúmayu / dúmal', es: 'pensar' },
  { base: 'знать', past: 'я знаю', part: 'знал', tr: 'znat / znáyu / znal', es: 'saber, conocer' },
  { base: 'играть', past: 'я играю', part: 'играл', tr: 'igrát / igráyu / igrál', es: 'jugar' },
  { base: 'слушать', past: 'я слушаю', part: 'слушал', tr: 'slúshat / slúshayu / slúshal', es: 'escuchar' },
  { base: 'гулять', past: 'я гуляю', part: 'гулял', tr: 'guliát / guliáyu / guliál', es: 'pasear' },
  { base: 'понимать', past: 'я понимаю', part: 'понимал', tr: 'panimát / panimáyu / panimál', es: 'entender' },
  { base: 'говорить', past: 'я говорю', part: 'говорил', tr: 'gavarít / gavariú / gavaríl', es: 'hablar' },
  { base: 'смотреть', past: 'я смотрю', part: 'смотрел', tr: 'smatrét / smatriú / smatrél', es: 'mirar' },
  { base: 'строить', past: 'я строю', part: 'строил', tr: 'stróit / stróyu / stróil', es: 'construir' },
  { base: 'помнить', past: 'я помню', part: 'помнил', tr: 'pómnit / pómniu / pómnil', es: 'recordar' },
  { base: 'верить', past: 'я верю', part: 'верил', tr: 'vérit / vériu / véril', es: 'creer' },
]

const ruPrefijos = [
  { v: 'пойти', es: 'ir, ponerse en camino', ex: 'Я пойду домой.' },
  { v: 'прийти', es: 'llegar, venir', ex: 'Он пришёл вовремя.' },
  { v: 'уйти', es: 'irse, marcharse', ex: 'Она уже ушла.' },
  { v: 'войти', es: 'entrar', ex: 'Войдите, пожалуйста!' },
  { v: 'выйти', es: 'salir', ex: 'Я выйду через час.' },
  { v: 'перейти', es: 'cruzar, pasar al otro lado', ex: 'Перейти улицу.' },
  { v: 'написать', es: 'escribir (hasta terminar)', ex: 'Я написал письмо.' },
  { v: 'записать', es: 'anotar', ex: 'Запиши это!' },
  { v: 'прочитать', es: 'leer (entero)', ex: 'Я прочитал книгу.' },
  { v: 'посмотреть', es: 'echar un vistazo, ver', ex: 'Посмотри сюда!' },
  { v: 'заплатить', es: 'pagar', ex: 'Я заплатил за кофе.' },
  { v: 'сделать', es: 'hacer (hasta terminar)', ex: 'Я сделал домашнее задание.' },
]

const ruModales = [
  { v: 'мочь', fn: 'Capacidad y posibilidad física.', ex: ['Я могу говорить по-русски.', 'Ты можешь мне помочь?'] },
  { v: 'уметь', fn: 'Capacidad aprendida, saber hacer algo.', ex: ['Я умею плавать.', 'Он умеет водить машину.'] },
  { v: 'хотеть', fn: 'Voluntad y deseo.', ex: ['Я хочу кофе.', 'Что ты хочешь делать?'] },
  { v: 'должен', fn: 'Obligación personal: concuerda con el sujeto (должен, должна, должны).', ex: ['Я должен работать.', 'Она должна прийти.'] },
  { v: 'надо / нужно', fn: 'Necesidad impersonal: hay que, hace falta.', ex: ['Надо идти.', 'Мне нужно отдохнуть.'] },
  { v: 'нельзя', fn: 'Prohibición o imposibilidad: no se puede.', ex: ['Здесь нельзя курить.', 'Так нельзя говорить.'] },
]

// ------------------------------------------------------------- UCRANIANO ----

const ukIrregular = [
  { base: 'бути', past: 'я є', part: 'був', tr: 'búty / ye / buv', es: 'ser, estar' },
  { base: 'іти', past: 'я йду', part: 'йшов', tr: 'ity / ydú / yshov', es: 'ir (a pie)' },
  { base: 'їхати', past: 'я їду', part: 'їхав', tr: 'yíjaty / yídu / yíjav', es: 'ir (en vehículo)' },
  { base: 'їсти', past: 'я їм', part: 'їв', tr: 'yísty / yim / yiv', es: 'comer' },
  { base: 'пити', past: "я п'ю", part: 'пив', tr: 'pýty / pyu / pyv', es: 'beber' },
  { base: 'хотіти', past: 'я хочу', part: 'хотів', tr: 'jotíty / jóchu / jotív', es: 'querer' },
  { base: 'могти', past: 'я можу', part: 'міг', tr: 'mohtý / mózhu / mih', es: 'poder' },
  { base: 'дати', past: 'я дам', part: 'дав', tr: 'dáty / dam / dav', es: 'dar' },
  { base: 'жити', past: 'я живу', part: 'жив', tr: 'zhýty / zhyvú / zhyv', es: 'vivir' },
  { base: 'писати', past: 'я пишу', part: 'писав', tr: 'pysáty / pyshú / pysáv', es: 'escribir' },
  { base: 'сказати', past: 'я скажу', part: 'сказав', tr: 'skazáty / skazhú / skazáv', es: 'decir' },
  { base: 'взяти', past: 'я візьму', part: 'взяв', tr: 'vziáty / vizmú / vziav', es: 'tomar, coger' },
  { base: 'спати', past: 'я сплю', part: 'спав', tr: 'spáty / spliu / spav', es: 'dormir' },
  { base: 'бачити', past: 'я бачу', part: 'бачив', tr: 'báchyty / báchu / báchyv', es: 'ver' },
  { base: 'любити', past: 'я люблю', part: 'любив', tr: 'liubýty / liubliú / liubýv', es: 'amar, gustar' },
  { base: 'брати', past: 'я беру', part: 'брав', tr: 'bráty / berú / brav', es: 'tomar' },
  { base: 'почати', past: 'я почну', part: 'почав', tr: 'pocháty / pochnú / pocháv', es: 'empezar' },
  { base: 'стати', past: 'я стану', part: 'став', tr: 'státy / stánu / stav', es: 'llegar a ser' },
]

const ukRegular = [
  { base: 'читати', past: 'я читаю', part: 'читав', tr: 'chytáty / chytáyu / chytáv', es: 'leer' },
  { base: 'працювати', past: 'я працюю', part: 'працював', tr: 'pratsiuváty / pratsiúyu / pratsiuváv', es: 'trabajar' },
  { base: 'думати', past: 'я думаю', part: 'думав', tr: 'dúmaty / dúmayu / dúmav', es: 'pensar' },
  { base: 'знати', past: 'я знаю', part: 'знав', tr: 'znáty / znáyu / znav', es: 'saber' },
  { base: 'грати', past: 'я граю', part: 'грав', tr: 'hráty / hráyu / hrav', es: 'jugar' },
  { base: 'слухати', past: 'я слухаю', part: 'слухав', tr: 'slújaty / slújayu / slújav', es: 'escuchar' },
  { base: 'розуміти', past: 'я розумію', part: 'розумів', tr: 'rozumíty / rozumíyu / rozumív', es: 'entender' },
  { base: 'говорити', past: 'я говорю', part: 'говорив', tr: 'hovorýty / hovoriú / hovorýv', es: 'hablar' },
  { base: 'дивитися', past: 'я дивлюся', part: 'дивився', tr: 'dyvýtysia / dyvliúsia / dyvývsia', es: 'mirar' },
  { base: 'вчити', past: 'я вчу', part: 'вчив', tr: 'vchýty / vchu / vchyv', es: 'aprender, enseñar' },
  { base: 'вірити', past: 'я вірю', part: 'вірив', tr: 'víryty / viriu / víryv', es: 'creer' },
  { base: "пам'ятати", past: "я пам'ятаю", part: "пам'ятав", tr: 'pamiatáty / pamiatáyu / pamiatáv', es: 'recordar' },
  { base: 'платити', past: 'я плачу', part: 'платив', tr: 'platýty / pláchu / platýv', es: 'pagar' },
  { base: 'жити', past: 'я мешкаю', part: 'мешкав', tr: 'méshkaty / méshkayu / méshkav', es: 'residir' },
]

const ukPrefijos = [
  { v: 'піти', es: 'ir, ponerse en camino', ex: 'Я піду додому.' },
  { v: 'прийти', es: 'llegar, venir', ex: 'Він прийшов вчасно.' },
  { v: 'піти геть', es: 'irse', ex: 'Вона вже пішла.' },
  { v: 'увійти', es: 'entrar', ex: 'Увійдіть, будь ласка!' },
  { v: 'вийти', es: 'salir', ex: 'Я вийду через годину.' },
  { v: 'перейти', es: 'cruzar', ex: 'Перейти вулицю.' },
  { v: 'написати', es: 'escribir (hasta terminar)', ex: 'Я написав листа.' },
  { v: 'записати', es: 'anotar', ex: 'Запиши це!' },
  { v: 'прочитати', es: 'leer (entero)', ex: 'Я прочитав книгу.' },
  { v: 'подивитися', es: 'echar un vistazo', ex: 'Подивися сюди!' },
  { v: 'заплатити', es: 'pagar', ex: 'Я заплатив за каву.' },
  { v: 'зробити', es: 'hacer (hasta terminar)', ex: 'Я зробив домашнє завдання.' },
]

const ukModales = [
  { v: 'могти', fn: 'Capacidad y posibilidad.', ex: ['Я можу говорити українською.', 'Ти можеш мені допомогти?'] },
  { v: 'вміти', fn: 'Capacidad aprendida, saber hacer algo.', ex: ['Я вмію плавати.', 'Він вміє водити машину.'] },
  { v: 'хотіти', fn: 'Voluntad y deseo.', ex: ['Я хочу кави.', 'Що ти хочеш робити?'] },
  { v: 'повинен', fn: 'Obligación personal: concuerda con el sujeto (повинен, повинна).', ex: ['Я повинен працювати.', 'Вона повинна прийти.'] },
  { v: 'мусити', fn: 'Obligación fuerte, impuesta desde fuera.', ex: ['Я мушу йти.', 'Ти мусиш заплатити.'] },
  { v: 'треба', fn: 'Necesidad impersonal: hay que, hace falta.', ex: ['Треба йти.', 'Мені треба відпочити.'] },
]

// ---------------------------------------------------------------- POLACO ----

const plIrregular = [
  { base: 'być', past: 'ja jestem', part: 'był', es: 'ser, estar' },
  { base: 'mieć', past: 'ja mam', part: 'miał', es: 'tener' },
  { base: 'iść', past: 'ja idę', part: 'szedł', es: 'ir (a pie)' },
  { base: 'jechać', past: 'ja jadę', part: 'jechał', es: 'ir (en vehículo)' },
  { base: 'jeść', past: 'ja jem', part: 'jadł', es: 'comer' },
  { base: 'pić', past: 'ja piję', part: 'pił', es: 'beber' },
  { base: 'chcieć', past: 'ja chcę', part: 'chciał', es: 'querer' },
  { base: 'móc', past: 'ja mogę', part: 'mógł', es: 'poder' },
  { base: 'dać', past: 'ja dam', part: 'dał', es: 'dar' },
  { base: 'wziąć', past: 'ja wezmę', part: 'wziął', es: 'tomar, coger' },
  { base: 'pisać', past: 'ja piszę', part: 'pisał', es: 'escribir' },
  { base: 'powiedzieć', past: 'ja powiem', part: 'powiedział', es: 'decir' },
  { base: 'spać', past: 'ja śpię', part: 'spał', es: 'dormir' },
  { base: 'widzieć', past: 'ja widzę', part: 'widział', es: 'ver' },
  { base: 'wiedzieć', past: 'ja wiem', part: 'wiedział', es: 'saber' },
  { base: 'zacząć', past: 'ja zacznę', part: 'zaczął', es: 'empezar' },
  { base: 'znaleźć', past: 'ja znajdę', part: 'znalazł', es: 'encontrar' },
  { base: 'stać się', past: 'ja stanę się', part: 'stał się', es: 'llegar a ser' },
]

const plRegular = [
  { base: 'czytać', past: 'ja czytam', part: 'czytał', es: 'leer' },
  { base: 'pracować', past: 'ja pracuję', part: 'pracował', es: 'trabajar' },
  { base: 'robić', past: 'ja robię', part: 'robił', es: 'hacer' },
  { base: 'myśleć', past: 'ja myślę', part: 'myślał', es: 'pensar' },
  { base: 'znać', past: 'ja znam', part: 'znał', es: 'conocer' },
  { base: 'grać', past: 'ja gram', part: 'grał', es: 'jugar, tocar' },
  { base: 'słuchać', past: 'ja słucham', part: 'słuchał', es: 'escuchar' },
  { base: 'rozumieć', past: 'ja rozumiem', part: 'rozumiał', es: 'entender' },
  { base: 'mówić', past: 'ja mówię', part: 'mówił', es: 'hablar' },
  { base: 'patrzeć', past: 'ja patrzę', part: 'patrzył', es: 'mirar' },
  { base: 'wierzyć', past: 'ja wierzę', part: 'wierzył', es: 'creer' },
  { base: 'mieszkać', past: 'ja mieszkam', part: 'mieszkał', es: 'vivir, residir' },
  { base: 'płacić', past: 'ja płacę', part: 'płacił', es: 'pagar' },
  { base: 'kupować', past: 'ja kupuję', part: 'kupował', es: 'comprar' },
]

const plPrefijos = [
  { v: 'pójść', es: 'ir, ponerse en camino', ex: 'Pójdę do domu.' },
  { v: 'przyjść', es: 'llegar, venir', ex: 'Przyszedł na czas.' },
  { v: 'wyjść', es: 'salir', ex: 'Wyjdę za godzinę.' },
  { v: 'wejść', es: 'entrar', ex: 'Proszę wejść!' },
  { v: 'przejść', es: 'cruzar, pasar', ex: 'Przejść przez ulicę.' },
  { v: 'odejść', es: 'alejarse, marcharse', ex: 'Ona już odeszła.' },
  { v: 'napisać', es: 'escribir (hasta terminar)', ex: 'Napisałem list.' },
  { v: 'zapisać', es: 'anotar, guardar', ex: 'Zapisz to!' },
  { v: 'przeczytać', es: 'leer (entero)', ex: 'Przeczytałem książkę.' },
  { v: 'zobaczyć', es: 'ver (llegar a ver)', ex: 'Zobacz to!' },
  { v: 'zapłacić', es: 'pagar', ex: 'Zapłaciłem za kawę.' },
  { v: 'zrobić', es: 'hacer (hasta terminar)', ex: 'Zrobiłem zadanie.' },
]

const plModales = [
  { v: 'móc', fn: 'Capacidad, posibilidad y permiso.', ex: ['Mogę mówić po polsku.', 'Czy mogę wejść?'] },
  { v: 'umieć', fn: 'Capacidad aprendida, saber hacer algo.', ex: ['Umiem pływać.', 'Umiesz prowadzić?'] },
  { v: 'chcieć', fn: 'Voluntad y deseo.', ex: ['Chcę kawę.', 'Co chcesz robić?'] },
  { v: 'musieć', fn: 'Obligación o necesidad.', ex: ['Muszę dziś pracować.', 'Musisz więcej spać.'] },
  { v: 'powinien', fn: 'Consejo: debería. Concuerda con el sujeto (powinien, powinna).', ex: ['Powinieneś iść do lekarza.', 'Powinnaś odpocząć.'] },
  { v: 'trzeba', fn: 'Necesidad impersonal: hay que.', ex: ['Trzeba iść.', 'Trzeba zapłacić.'] },
]

// ------------------------------------------------------------- SECCIONES ----

export const slavicSections = {
  ru: [
    { id: 'irregulares', label: 'Verbos irregulares', icon: '🔀', type: 'verbs', cols: colsCir('Infinitivo', 'Presente (я)', 'Pasado (m.)'), rows: ruIrregular, note: 'El pasado ruso concuerda en género y número, no en persona: он был, она была, они были.' },
    { id: 'regulares', label: 'Verbos regulares', icon: '➕', type: 'verbs', cols: colsCir('Infinitivo', 'Presente (я)', 'Pasado (m.)'), rows: ruRegular, note: 'Dos conjugaciones regulares: la primera en -ать (читаю) y la segunda en -ить (говорю).' },
    { id: 'prefijos', label: 'Verbos con prefijo', icon: '🔗', type: 'phrases', rows: ruPrefijos, note: 'El equivalente a los phrasal verbs: el prefijo cambia el significado y casi siempre convierte el verbo en perfectivo (acción terminada).' },
    { id: 'modales', label: 'Verbos modales', icon: '🔑', type: 'modals', rows: ruModales, note: 'Ojo con la diferencia entre мочь (poder físicamente) y уметь (saber hacer algo aprendido).' },
  ],
  uk: [
    { id: 'irregulares', label: 'Verbos irregulares', icon: '🔀', type: 'verbs', cols: colsCir('Infinitivo', 'Presente (я)', 'Pasado (m.)'), rows: ukIrregular, note: 'El pasado concuerda en género y número: він був, вона була, вони були.' },
    { id: 'regulares', label: 'Verbos regulares', icon: '➕', type: 'verbs', cols: colsCir('Infinitivo', 'Presente (я)', 'Pasado (m.)'), rows: ukRegular, note: 'Dos conjugaciones regulares, en -ати (читаю) y en -ити (говорю).' },
    { id: 'prefijos', label: 'Verbos con prefijo', icon: '🔗', type: 'phrases', rows: ukPrefijos, note: 'El equivalente a los phrasal verbs: el prefijo cambia el significado y suele dar aspecto perfectivo.' },
    { id: 'modales', label: 'Verbos modales', icon: '🔑', type: 'modals', rows: ukModales, note: 'Мусити es una obligación impuesta; повинен es un deber propio, y concuerda con el sujeto.' },
  ],
  pl: [
    { id: 'irregulares', label: 'Verbos irregulares', icon: '🔀', type: 'verbs', cols: cols('Bezokolicznik', 'Czas teraźniejszy (ja)', 'Czas przeszły (m.)'), rows: plIrregular, note: 'El pasado concuerda en género: on był, ona była, oni byli.' },
    { id: 'regulares', label: 'Verbos regulares', icon: '➕', type: 'verbs', cols: cols('Bezokolicznik', 'Czas teraźniejszy (ja)', 'Czas przeszły (m.)'), rows: plRegular, note: 'Cuatro grupos regulares según la terminación del presente: -am, -ę/-esz, -ę/-isz y -uję.' },
    { id: 'prefijos', label: 'Verbos con prefijo', icon: '🔗', type: 'phrases', rows: plPrefijos, note: 'El equivalente a los phrasal verbs: el prefijo cambia el significado y convierte el verbo en perfectivo.' },
    { id: 'modales', label: 'Verbos modales', icon: '🔑', type: 'modals', rows: plModales, note: 'Distingue móc (poder) de umieć (saber hacer). Powinien y musieć concuerdan con el sujeto.' },
  ],
}
