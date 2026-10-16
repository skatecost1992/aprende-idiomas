// Listas de verbos de las lenguas germánicas: alemán, neerlandés, sueco,
// noruego (bokmål) y danés.
//
// Cada idioma trae cuatro secciones, adaptadas a su propia gramática:
//   irregulares  verbos fuertes, con los nombres reales de sus tiempos
//   regulares    verbos débiles, que siguen el patrón regular
//   particulas   el equivalente a los phrasal verbs (verbos separables o con
//                partícula), que en estas lenguas es un fenómeno central
//   modales      los verbos modales, con su función y ejemplos
//
// Las columnas usan las claves base/past/part que espera EnglishLists.jsx, pero
// la etiqueta visible es la del idioma (Präteritum, Supinum, Datid...).

const cols = (base, past, part) => [
  { k: 'base', l: base },
  { k: 'past', l: past },
  { k: 'part', l: part },
  { k: 'es', l: 'Español' },
]

// ---------------------------------------------------------------- ALEMÁN ----

const deIrregular = [
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

const deRegular = [
  { base: 'machen', past: 'machte', part: 'gemacht', es: 'hacer' },
  { base: 'sagen', past: 'sagte', part: 'gesagt', es: 'decir' },
  { base: 'spielen', past: 'spielte', part: 'gespielt', es: 'jugar, tocar' },
  { base: 'lernen', past: 'lernte', part: 'gelernt', es: 'aprender' },
  { base: 'kaufen', past: 'kaufte', part: 'gekauft', es: 'comprar' },
  { base: 'wohnen', past: 'wohnte', part: 'gewohnt', es: 'vivir, residir' },
  { base: 'fragen', past: 'fragte', part: 'gefragt', es: 'preguntar' },
  { base: 'suchen', past: 'suchte', part: 'gesucht', es: 'buscar' },
  { base: 'hören', past: 'hörte', part: 'gehört', es: 'oír, escuchar' },
  { base: 'leben', past: 'lebte', part: 'gelebt', es: 'vivir' },
  { base: 'lieben', past: 'liebte', part: 'geliebt', es: 'amar' },
  { base: 'brauchen', past: 'brauchte', part: 'gebraucht', es: 'necesitar' },
  { base: 'zeigen', past: 'zeigte', part: 'gezeigt', es: 'mostrar' },
  { base: 'arbeiten', past: 'arbeitete', part: 'gearbeitet', es: 'trabajar' },
  { base: 'warten', past: 'wartete', part: 'gewartet', es: 'esperar' },
  { base: 'antworten', past: 'antwortete', part: 'geantwortet', es: 'responder' },
  { base: 'kochen', past: 'kochte', part: 'gekocht', es: 'cocinar' },
  { base: 'tanzen', past: 'tanzte', part: 'getanzt', es: 'bailar' },
]

const deSeparable = [
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
  { v: 'mitbringen', es: 'traer consigo', ex: 'Bring Wein mit!' },
  { v: 'zurückkommen', es: 'volver', ex: 'Sie kommt morgen zurück.' },
  { v: 'abholen', es: 'recoger (a alguien)', ex: 'Ich hole dich ab.' },
  { v: 'vorbereiten', es: 'preparar', ex: 'Wir bereiten das Essen vor.' },
]

const deModales = [
  { v: 'können', fn: 'Capacidad y posibilidad; también permiso informal.', ex: ['Ich kann Deutsch sprechen.', 'Kann ich hier sitzen?'] },
  { v: 'dürfen', fn: 'Permiso, y en negativo prohibición.', ex: ['Darf ich hereinkommen?', 'Hier darf man nicht rauchen.'] },
  { v: 'müssen', fn: 'Obligación o necesidad.', ex: ['Ich muss heute arbeiten.', 'Du musst mehr schlafen.'] },
  { v: 'sollen', fn: 'Deber por indicación de otro, y consejo.', ex: ['Du sollst deine Hausaufgaben machen.', 'Soll ich dir helfen?'] },
  { v: 'wollen', fn: 'Voluntad e intención firme.', ex: ['Ich will nach Berlin fahren.', 'Was willst du essen?'] },
  { v: 'mögen', fn: 'Gusto; en la forma möchte, deseo cortés.', ex: ['Ich mag Kaffee.', 'Ich möchte einen Tee, bitte.'] },
]

// ------------------------------------------------------------ NEERLANDÉS ----

const nlIrregular = [
  { base: 'zijn', past: 'was / waren', part: 'geweest', es: 'ser, estar' },
  { base: 'hebben', past: 'had', part: 'gehad', es: 'tener, haber' },
  { base: 'worden', past: 'werd', part: 'geworden', es: 'llegar a ser' },
  { base: 'gaan', past: 'ging', part: 'gegaan', es: 'ir' },
  { base: 'komen', past: 'kwam', part: 'gekomen', es: 'venir' },
  { base: 'zien', past: 'zag', part: 'gezien', es: 'ver' },
  { base: 'geven', past: 'gaf', part: 'gegeven', es: 'dar' },
  { base: 'nemen', past: 'nam', part: 'genomen', es: 'tomar, coger' },
  { base: 'vinden', past: 'vond', part: 'gevonden', es: 'encontrar' },
  { base: 'eten', past: 'at', part: 'gegeten', es: 'comer' },
  { base: 'drinken', past: 'dronk', part: 'gedronken', es: 'beber' },
  { base: 'spreken', past: 'sprak', part: 'gesproken', es: 'hablar' },
  { base: 'lezen', past: 'las', part: 'gelezen', es: 'leer' },
  { base: 'schrijven', past: 'schreef', part: 'geschreven', es: 'escribir' },
  { base: 'rijden', past: 'reed', part: 'gereden', es: 'conducir' },
  { base: 'lopen', past: 'liep', part: 'gelopen', es: 'andar, correr' },
  { base: 'slapen', past: 'sliep', part: 'geslapen', es: 'dormir' },
  { base: 'helpen', past: 'hielp', part: 'geholpen', es: 'ayudar' },
  { base: 'brengen', past: 'bracht', part: 'gebracht', es: 'traer' },
  { base: 'denken', past: 'dacht', part: 'gedacht', es: 'pensar' },
  { base: 'weten', past: 'wist', part: 'geweten', es: 'saber' },
  { base: 'blijven', past: 'bleef', part: 'gebleven', es: 'quedarse' },
  { base: 'doen', past: 'deed', part: 'gedaan', es: 'hacer' },
  { base: 'staan', past: 'stond', part: 'gestaan', es: 'estar de pie' },
  { base: 'kopen', past: 'kocht', part: 'gekocht', es: 'comprar' },
  { base: 'vragen', past: 'vroeg', part: 'gevraagd', es: 'preguntar' },
]

const nlRegular = [
  { base: 'werken', past: 'werkte', part: 'gewerkt', es: 'trabajar' },
  { base: 'maken', past: 'maakte', part: 'gemaakt', es: 'hacer' },
  { base: 'spelen', past: 'speelde', part: 'gespeeld', es: 'jugar' },
  { base: 'leren', past: 'leerde', part: 'geleerd', es: 'aprender' },
  { base: 'wonen', past: 'woonde', part: 'gewoond', es: 'vivir, residir' },
  { base: 'praten', past: 'praatte', part: 'gepraat', es: 'charlar' },
  { base: 'horen', past: 'hoorde', part: 'gehoord', es: 'oír' },
  { base: 'luisteren', past: 'luisterde', part: 'geluisterd', es: 'escuchar' },
  { base: 'antwoorden', past: 'antwoordde', part: 'geantwoord', es: 'responder' },
  { base: 'wachten', past: 'wachtte', part: 'gewacht', es: 'esperar' },
  { base: 'dansen', past: 'danste', part: 'gedanst', es: 'bailar' },
  { base: 'koken', past: 'kookte', part: 'gekookt', es: 'cocinar' },
  { base: 'reizen', past: 'reisde', part: 'gereisd', es: 'viajar' },
  { base: 'leven', past: 'leefde', part: 'geleefd', es: 'vivir' },
  { base: 'bouwen', past: 'bouwde', part: 'gebouwd', es: 'construir' },
  { base: 'betalen', past: 'betaalde', part: 'betaald', es: 'pagar' },
]

const nlSeparable = [
  { v: 'opstaan', es: 'levantarse', ex: 'Ik sta vroeg op.' },
  { v: 'aankomen', es: 'llegar', ex: 'De trein komt aan.' },
  { v: 'opbellen', es: 'llamar (por teléfono)', ex: 'Ik bel je op.' },
  { v: 'meegaan', es: 'acompañar', ex: 'Ga je mee?' },
  { v: 'uitgaan', es: 'salir (de fiesta)', ex: 'We gaan vanavond uit.' },
  { v: 'opendoen', es: 'abrir', ex: 'Doe de deur open.' },
  { v: 'dichtdoen', es: 'cerrar', ex: 'Doe het raam dicht.' },
  { v: 'meenemen', es: 'llevarse', ex: 'Neem je paraplu mee.' },
  { v: 'terugkomen', es: 'volver', ex: 'Hij komt morgen terug.' },
  { v: 'schoonmaken', es: 'limpiar', ex: 'Ik maak de kamer schoon.' },
  { v: 'opletten', es: 'prestar atención', ex: 'Let goed op!' },
  { v: 'uitleggen', es: 'explicar', ex: 'Hij legt het uit.' },
  { v: 'afwassen', es: 'fregar los platos', ex: 'Ik was af.' },
  { v: 'opruimen', es: 'ordenar, recoger', ex: 'Ruim je kamer op!' },
]

const nlModales = [
  { v: 'kunnen', fn: 'Capacidad y posibilidad.', ex: ['Ik kan Nederlands spreken.', 'Kun je me helpen?'] },
  { v: 'mogen', fn: 'Permiso, y en negativo prohibición.', ex: ['Mag ik binnenkomen?', 'Je mag hier niet roken.'] },
  { v: 'moeten', fn: 'Obligación o necesidad.', ex: ['Ik moet vandaag werken.', 'Je moet meer slapen.'] },
  { v: 'willen', fn: 'Voluntad y deseo.', ex: ['Ik wil naar Amsterdam gaan.', 'Wat wil je eten?'] },
  { v: 'zullen', fn: 'Futuro y propuestas.', ex: ['Ik zal het morgen doen.', 'Zullen we beginnen?'] },
]

// ----------------------------------------------------------------- SUECO ----

const svIrregular = [
  { base: 'vara', past: 'var', part: 'varit', es: 'ser, estar' },
  { base: 'ha', past: 'hade', part: 'haft', es: 'tener, haber' },
  { base: 'bli', past: 'blev', part: 'blivit', es: 'llegar a ser' },
  { base: 'gå', past: 'gick', part: 'gått', es: 'ir, andar' },
  { base: 'komma', past: 'kom', part: 'kommit', es: 'venir' },
  { base: 'se', past: 'såg', part: 'sett', es: 'ver' },
  { base: 'ge', past: 'gav', part: 'gett', es: 'dar' },
  { base: 'ta', past: 'tog', part: 'tagit', es: 'tomar, coger' },
  { base: 'få', past: 'fick', part: 'fått', es: 'recibir, poder' },
  { base: 'finna', past: 'fann', part: 'funnit', es: 'encontrar' },
  { base: 'äta', past: 'åt', part: 'ätit', es: 'comer' },
  { base: 'dricka', past: 'drack', part: 'druckit', es: 'beber' },
  { base: 'skriva', past: 'skrev', part: 'skrivit', es: 'escribir' },
  { base: 'springa', past: 'sprang', part: 'sprungit', es: 'correr' },
  { base: 'sova', past: 'sov', part: 'sovit', es: 'dormir' },
  { base: 'sitta', past: 'satt', part: 'suttit', es: 'estar sentado' },
  { base: 'ligga', past: 'låg', part: 'legat', es: 'estar tumbado' },
  { base: 'stå', past: 'stod', part: 'stått', es: 'estar de pie' },
  { base: 'veta', past: 'visste', part: 'vetat', es: 'saber' },
  { base: 'göra', past: 'gjorde', part: 'gjort', es: 'hacer' },
  { base: 'säga', past: 'sade / sa', part: 'sagt', es: 'decir' },
  { base: 'dra', past: 'drog', part: 'dragit', es: 'tirar de' },
  { base: 'bära', past: 'bar', part: 'burit', es: 'llevar' },
  { base: 'vinna', past: 'vann', part: 'vunnit', es: 'ganar' },
]

const svRegular = [
  { base: 'tala', past: 'talade', part: 'talat', es: 'hablar' },
  { base: 'arbeta', past: 'arbetade', part: 'arbetat', es: 'trabajar' },
  { base: 'spela', past: 'spelade', part: 'spelat', es: 'jugar, tocar' },
  { base: 'fråga', past: 'frågade', part: 'frågat', es: 'preguntar' },
  { base: 'titta', past: 'tittade', part: 'tittat', es: 'mirar' },
  { base: 'laga', past: 'lagade', part: 'lagat', es: 'cocinar, arreglar' },
  { base: 'ringa', past: 'ringde', part: 'ringt', es: 'llamar (por teléfono)' },
  { base: 'stänga', past: 'stängde', part: 'stängt', es: 'cerrar' },
  { base: 'lära', past: 'lärde', part: 'lärt', es: 'aprender, enseñar' },
  { base: 'höra', past: 'hörde', part: 'hört', es: 'oír' },
  { base: 'köpa', past: 'köpte', part: 'köpt', es: 'comprar' },
  { base: 'läsa', past: 'läste', part: 'läst', es: 'leer' },
  { base: 'resa', past: 'reste', part: 'rest', es: 'viajar' },
  { base: 'bo', past: 'bodde', part: 'bott', es: 'vivir, residir' },
  { base: 'tro', past: 'trodde', part: 'trott', es: 'creer' },
  { base: 'må', past: 'mådde', part: 'mått', es: 'encontrarse (de salud)' },
]

const svParticulas = [
  { v: 'stiga upp', es: 'levantarse', ex: 'Jag stiger upp tidigt.' },
  { v: 'tycka om', es: 'gustar', ex: 'Jag tycker om dig.' },
  { v: 'komma fram', es: 'llegar', ex: 'Tåget kommer fram klockan tre.' },
  { v: 'ringa upp', es: 'llamar (por teléfono)', ex: 'Jag ringer upp dig.' },
  { v: 'slå på', es: 'encender', ex: 'Slå på lampan.' },
  { v: 'stänga av', es: 'apagar', ex: 'Stäng av teven.' },
  { v: 'ta med', es: 'llevar consigo', ex: 'Ta med ditt pass.' },
  { v: 'gå ut', es: 'salir', ex: 'Vi går ut i kväll.' },
  { v: 'komma tillbaka', es: 'volver', ex: 'Hon kommer tillbaka imorgon.' },
  { v: 'känna igen', es: 'reconocer', ex: 'Jag känner igen honom.' },
  { v: 'titta på', es: 'mirar, ver', ex: 'Vi tittar på film.' },
  { v: 'ge upp', es: 'rendirse', ex: 'Ge inte upp!' },
]

const svModales = [
  { v: 'kan', fn: 'Capacidad y posibilidad (infinitivo: kunna).', ex: ['Jag kan tala svenska.', 'Kan du hjälpa mig?'] },
  { v: 'ska', fn: 'Futuro con intención o plan (infinitivo: skola).', ex: ['Jag ska resa imorgon.', 'Ska vi börja?'] },
  { v: 'vill', fn: 'Voluntad y deseo (infinitivo: vilja).', ex: ['Jag vill äta nu.', 'Vad vill du göra?'] },
  { v: 'måste', fn: 'Obligación o necesidad.', ex: ['Jag måste arbeta idag.', 'Du måste sova mer.'] },
  { v: 'får', fn: 'Permiso (infinitivo: få); en negativo, prohibición.', ex: ['Får jag komma in?', 'Du får inte röka här.'] },
  { v: 'bör', fn: 'Consejo o recomendación (infinitivo: böra).', ex: ['Du bör köra försiktigt.', 'Man bör äta frukost.'] },
]

// --------------------------------------------------------------- NORUEGO ----

const noIrregular = [
  { base: 'være', past: 'var', part: 'vært', es: 'ser, estar' },
  { base: 'ha', past: 'hadde', part: 'hatt', es: 'tener, haber' },
  { base: 'bli', past: 'ble', part: 'blitt', es: 'llegar a ser' },
  { base: 'gå', past: 'gikk', part: 'gått', es: 'ir, andar' },
  { base: 'komme', past: 'kom', part: 'kommet', es: 'venir' },
  { base: 'se', past: 'så', part: 'sett', es: 'ver' },
  { base: 'gi', past: 'ga', part: 'gitt', es: 'dar' },
  { base: 'ta', past: 'tok', part: 'tatt', es: 'tomar, coger' },
  { base: 'få', past: 'fikk', part: 'fått', es: 'recibir, poder' },
  { base: 'finne', past: 'fant', part: 'funnet', es: 'encontrar' },
  { base: 'drikke', past: 'drakk', part: 'drukket', es: 'beber' },
  { base: 'skrive', past: 'skrev', part: 'skrevet', es: 'escribir' },
  { base: 'synge', past: 'sang', part: 'sunget', es: 'cantar' },
  { base: 'sove', past: 'sov', part: 'sovet', es: 'dormir' },
  { base: 'sitte', past: 'satt', part: 'sittet', es: 'estar sentado' },
  { base: 'ligge', past: 'lå', part: 'ligget', es: 'estar tumbado' },
  { base: 'stå', past: 'sto', part: 'stått', es: 'estar de pie' },
  { base: 'vite', past: 'visste', part: 'visst', es: 'saber' },
  { base: 'gjøre', past: 'gjorde', part: 'gjort', es: 'hacer' },
  { base: 'si', past: 'sa', part: 'sagt', es: 'decir' },
  { base: 'dra', past: 'dro', part: 'dratt', es: 'irse, tirar de' },
  { base: 'hjelpe', past: 'hjalp', part: 'hjulpet', es: 'ayudar' },
  { base: 'spørre', past: 'spurte', part: 'spurt', es: 'preguntar' },
  { base: 'velge', past: 'valgte', part: 'valgt', es: 'elegir' },
]

const noRegular = [
  { base: 'snakke', past: 'snakket', part: 'snakket', es: 'hablar' },
  { base: 'jobbe', past: 'jobbet', part: 'jobbet', es: 'trabajar' },
  { base: 'vente', past: 'ventet', part: 'ventet', es: 'esperar' },
  { base: 'lage', past: 'laget', part: 'laget', es: 'hacer, preparar' },
  { base: 'spille', past: 'spilte', part: 'spilt', es: 'jugar, tocar' },
  { base: 'kjøpe', past: 'kjøpte', part: 'kjøpt', es: 'comprar' },
  { base: 'lese', past: 'leste', part: 'lest', es: 'leer' },
  { base: 'spise', past: 'spiste', part: 'spist', es: 'comer' },
  { base: 'lære', past: 'lærte', part: 'lært', es: 'aprender' },
  { base: 'høre', past: 'hørte', part: 'hørt', es: 'oír' },
  { base: 'bruke', past: 'brukte', part: 'brukt', es: 'usar' },
  { base: 'reise', past: 'reiste', part: 'reist', es: 'viajar' },
  { base: 'like', past: 'likte', part: 'likt', es: 'gustar' },
  { base: 'prøve', past: 'prøvde', part: 'prøvd', es: 'intentar' },
  { base: 'bo', past: 'bodde', part: 'bodd', es: 'vivir, residir' },
  { base: 'tro', past: 'trodde', part: 'trodd', es: 'creer' },
]

const noParticulas = [
  { v: 'stå opp', es: 'levantarse', ex: 'Jeg står opp tidlig.' },
  { v: 'slå på', es: 'encender', ex: 'Slå på lyset.' },
  { v: 'slå av', es: 'apagar', ex: 'Slå av TV-en.' },
  { v: 'gå ut', es: 'salir', ex: 'Vi går ut i kveld.' },
  { v: 'komme tilbake', es: 'volver', ex: 'Hun kommer tilbake i morgen.' },
  { v: 'ta med', es: 'llevar consigo', ex: 'Ta med passet ditt.' },
  { v: 'finne ut', es: 'averiguar', ex: 'Jeg fant det ut.' },
  { v: 'se på', es: 'mirar, ver', ex: 'Vi ser på film.' },
  { v: 'høre på', es: 'escuchar', ex: 'Hør på meg!' },
  { v: 'gi opp', es: 'rendirse', ex: 'Ikke gi opp!' },
  { v: 'legge seg', es: 'acostarse', ex: 'Jeg legger meg klokka ti.' },
  { v: 'holde på', es: 'estar haciendo algo', ex: 'Han holder på med leksene.' },
]

const noModales = [
  { v: 'kan', fn: 'Capacidad y posibilidad (infinitivo: kunne).', ex: ['Jeg kan snakke norsk.', 'Kan du hjelpe meg?'] },
  { v: 'skal', fn: 'Futuro con intención o plan (infinitivo: skulle).', ex: ['Jeg skal reise i morgen.', 'Skal vi begynne?'] },
  { v: 'vil', fn: 'Voluntad y deseo (infinitivo: ville).', ex: ['Jeg vil spise nå.', 'Hva vil du gjøre?'] },
  { v: 'må', fn: 'Obligación o necesidad (infinitivo: måtte).', ex: ['Jeg må jobbe i dag.', 'Du må sove mer.'] },
  { v: 'får', fn: 'Permiso (infinitivo: få); en negativo, prohibición.', ex: ['Får jeg komme inn?', 'Du får ikke røyke her.'] },
  { v: 'bør', fn: 'Consejo o recomendación (infinitivo: burde).', ex: ['Du bør kjøre forsiktig.', 'Man bør spise frokost.'] },
]

// ----------------------------------------------------------------- DANÉS ----

const daIrregular = [
  { base: 'være', past: 'var', part: 'været', es: 'ser, estar' },
  { base: 'have', past: 'havde', part: 'haft', es: 'tener, haber' },
  { base: 'blive', past: 'blev', part: 'blevet', es: 'llegar a ser' },
  { base: 'gå', past: 'gik', part: 'gået', es: 'ir, andar' },
  { base: 'komme', past: 'kom', part: 'kommet', es: 'venir' },
  { base: 'se', past: 'så', part: 'set', es: 'ver' },
  { base: 'give', past: 'gav', part: 'givet', es: 'dar' },
  { base: 'tage', past: 'tog', part: 'taget', es: 'tomar, coger' },
  { base: 'få', past: 'fik', part: 'fået', es: 'recibir, poder' },
  { base: 'finde', past: 'fandt', part: 'fundet', es: 'encontrar' },
  { base: 'drikke', past: 'drak', part: 'drukket', es: 'beber' },
  { base: 'skrive', past: 'skrev', part: 'skrevet', es: 'escribir' },
  { base: 'synge', past: 'sang', part: 'sunget', es: 'cantar' },
  { base: 'sove', past: 'sov', part: 'sovet', es: 'dormir' },
  { base: 'sidde', past: 'sad', part: 'siddet', es: 'estar sentado' },
  { base: 'ligge', past: 'lå', part: 'ligget', es: 'estar tumbado' },
  { base: 'stå', past: 'stod', part: 'stået', es: 'estar de pie' },
  { base: 'vide', past: 'vidste', part: 'vidst', es: 'saber' },
  { base: 'gøre', past: 'gjorde', part: 'gjort', es: 'hacer' },
  { base: 'sige', past: 'sagde', part: 'sagt', es: 'decir' },
  { base: 'løbe', past: 'løb', part: 'løbet', es: 'correr' },
  { base: 'hjælpe', past: 'hjalp', part: 'hjulpet', es: 'ayudar' },
  { base: 'spørge', past: 'spurgte', part: 'spurgt', es: 'preguntar' },
  { base: 'vælge', past: 'valgte', part: 'valgt', es: 'elegir' },
]

const daRegular = [
  { base: 'tale', past: 'talte', part: 'talt', es: 'hablar' },
  { base: 'arbejde', past: 'arbejdede', part: 'arbejdet', es: 'trabajar' },
  { base: 'spille', past: 'spillede', part: 'spillet', es: 'jugar, tocar' },
  { base: 'lave', past: 'lavede', part: 'lavet', es: 'hacer' },
  { base: 'vente', past: 'ventede', part: 'ventet', es: 'esperar' },
  { base: 'elske', past: 'elskede', part: 'elsket', es: 'amar' },
  { base: 'købe', past: 'købte', part: 'købt', es: 'comprar' },
  { base: 'læse', past: 'læste', part: 'læst', es: 'leer' },
  { base: 'spise', past: 'spiste', part: 'spist', es: 'comer' },
  { base: 'lære', past: 'lærte', part: 'lært', es: 'aprender' },
  { base: 'høre', past: 'hørte', part: 'hørt', es: 'oír' },
  { base: 'bruge', past: 'brugte', part: 'brugt', es: 'usar' },
  { base: 'rejse', past: 'rejste', part: 'rejst', es: 'viajar' },
  { base: 'betale', past: 'betalte', part: 'betalt', es: 'pagar' },
  { base: 'bo', past: 'boede', part: 'boet', es: 'vivir, residir' },
  { base: 'tro', past: 'troede', part: 'troet', es: 'creer' },
]

const daParticulas = [
  { v: 'stå op', es: 'levantarse', ex: 'Jeg står op tidligt.' },
  { v: 'tænde for', es: 'encender', ex: 'Tænd for lyset.' },
  { v: 'slukke for', es: 'apagar', ex: 'Sluk for fjernsynet.' },
  { v: 'gå ud', es: 'salir', ex: 'Vi går ud i aften.' },
  { v: 'komme tilbage', es: 'volver', ex: 'Hun kommer tilbage i morgen.' },
  { v: 'tage med', es: 'llevar consigo', ex: 'Tag dit pas med.' },
  { v: 'finde ud af', es: 'averiguar', ex: 'Jeg fandt ud af sandheden.' },
  { v: 'se på', es: 'mirar', ex: 'Vi ser på film.' },
  { v: 'høre efter', es: 'prestar atención', ex: 'Hør efter!' },
  { v: 'give op', es: 'rendirse', ex: 'Giv ikke op!' },
  { v: 'lægge sig', es: 'acostarse', ex: 'Jeg lægger mig klokken ti.' },
  { v: 'skrive ned', es: 'anotar', ex: 'Skriv det ned.' },
]

const daModales = [
  { v: 'kan', fn: 'Capacidad y posibilidad (infinitivo: kunne).', ex: ['Jeg kan tale dansk.', 'Kan du hjælpe mig?'] },
  { v: 'skal', fn: 'Futuro con intención, y obligación (infinitivo: skulle).', ex: ['Jeg skal rejse i morgen.', 'Skal vi begynde?'] },
  { v: 'vil', fn: 'Voluntad y deseo (infinitivo: ville).', ex: ['Jeg vil spise nu.', 'Hvad vil du lave?'] },
  { v: 'må', fn: 'Permiso, y también necesidad (infinitivo: måtte).', ex: ['Må jeg komme ind?', 'Du må ikke ryge her.'] },
  { v: 'bør', fn: 'Consejo o recomendación (infinitivo: burde).', ex: ['Du bør køre forsigtigt.', 'Man bør spise morgenmad.'] },
]

// ------------------------------------------------------------- SECCIONES ----

export const germanicSections = {
  de: [
    { id: 'irregulares', label: 'Verbos fuertes (irregulares)', icon: '🔀', type: 'verbs', cols: cols('Infinitiv', 'Präteritum', 'Partizip II'), rows: deIrregular },
    { id: 'regulares', label: 'Verbos débiles (regulares)', icon: '➕', type: 'verbs', cols: cols('Infinitiv', 'Präteritum', 'Partizip II'), rows: deRegular, note: 'Patrón regular: raíz + -te en Präteritum y ge- + raíz + -t en el participio (machen → machte → gemacht).' },
    { id: 'separables', label: 'Verbos separables', icon: '🔗', type: 'phrases', rows: deSeparable, note: 'El prefijo se separa y va al final de la frase, igual que la partícula de un phrasal verb: Ich stehe früh auf.' },
    { id: 'modales', label: 'Verbos modales', icon: '🔑', type: 'modals', rows: deModales, note: 'El modal se conjuga y el verbo principal va en infinitivo al final: Ich muss heute arbeiten. En singular pierden el Umlaut: ich kann, ich muss.' },
  ],
  nl: [
    { id: 'irregulares', label: 'Verbos fuertes (irregulares)', icon: '🔀', type: 'verbs', cols: cols('Infinitief', 'Verleden tijd', 'Voltooid deelwoord'), rows: nlIrregular },
    { id: 'regulares', label: 'Verbos débiles (regulares)', icon: '➕', type: 'verbs', cols: cols('Infinitief', 'Verleden tijd', 'Voltooid deelwoord'), rows: nlRegular, note: 'Regla de \'t kofschip: si la raíz acaba en t, k, f, s, ch o p, el pasado lleva -te/-ten y el participio -t; en los demás casos, -de/-den y -d.' },
    { id: 'separables', label: 'Verbos separables', icon: '🔗', type: 'phrases', rows: nlSeparable, note: 'El prefijo se separa y va al final: Ik sta vroeg op. En el participio se intercala ge-: opgestaan.' },
    { id: 'modales', label: 'Verbos modales', icon: '🔑', type: 'modals', rows: nlModales, note: 'El modal se conjuga y el verbo principal va en infinitivo al final de la frase: Ik moet vandaag werken.' },
  ],
  sv: [
    { id: 'irregulares', label: 'Verbos fuertes (irregulares)', icon: '🔀', type: 'verbs', cols: cols('Infinitiv', 'Preteritum', 'Supinum'), rows: svIrregular, note: 'El supino es la forma que acompaña a har/hade: jag har sett.' },
    { id: 'regulares', label: 'Verbos débiles (regulares)', icon: '➕', type: 'verbs', cols: cols('Infinitiv', 'Preteritum', 'Supinum'), rows: svRegular, note: 'Tres grupos regulares: -ar/-ade/-at (tala), -er/-de/-t (ringa, stänga) y -r/-dde/-tt (bo, tro).' },
    { id: 'particulas', label: 'Verbos con partícula', icon: '🔗', type: 'phrases', rows: svParticulas, note: 'La partícula va después del verbo y lleva el acento, igual que en un phrasal verb: jag tycker OM dig.' },
    { id: 'modales', label: 'Verbos modales', icon: '🔑', type: 'modals', rows: svModales, note: 'Se usan en presente y el verbo principal va en infinitivo sin att: jag kan simma.' },
  ],
  no: [
    { id: 'irregulares', label: 'Verbos fuertes (irregulares)', icon: '🔀', type: 'verbs', cols: cols('Infinitiv', 'Preteritum', 'Perfektum partisipp'), rows: noIrregular, note: 'El participio acompaña a har/hadde: jeg har sett.' },
    { id: 'regulares', label: 'Verbos débiles (regulares)', icon: '➕', type: 'verbs', cols: cols('Infinitiv', 'Preteritum', 'Perfektum partisipp'), rows: noRegular, note: 'Dos grupos principales: -et/-et (snakke) y -te/-t (kjøpe).' },
    { id: 'particulas', label: 'Verbos con partícula', icon: '🔗', type: 'phrases', rows: noParticulas, note: 'La partícula va tras el verbo y lleva el acento, como en un phrasal verb: jeg står OPP.' },
    { id: 'modales', label: 'Verbos modales', icon: '🔑', type: 'modals', rows: noModales, note: 'Se usan en presente y el verbo principal va en infinitivo sin å: jeg kan svømme.' },
  ],
  da: [
    { id: 'irregulares', label: 'Verbos fuertes (irregulares)', icon: '🔀', type: 'verbs', cols: cols('Infinitiv', 'Datid', 'Førnutid'), rows: daIrregular, note: 'La førnutid acompaña a har/havde: jeg har set.' },
    { id: 'regulares', label: 'Verbos débiles (regulares)', icon: '➕', type: 'verbs', cols: cols('Infinitiv', 'Datid', 'Førnutid'), rows: daRegular, note: 'Dos grupos: -ede/-et (arbejde) y -te/-t (købe).' },
    { id: 'particulas', label: 'Verbos con partícula', icon: '🔗', type: 'phrases', rows: daParticulas, note: 'La partícula va tras el verbo y lleva el acento, como en un phrasal verb: jeg står OP.' },
    { id: 'modales', label: 'Verbos modales', icon: '🔑', type: 'modals', rows: daModales, note: 'Se usan en presente y el verbo principal va en infinitivo sin at: jeg kan svømme.' },
  ],
}
