// Listas de verbos de las lenguas románicas: francés, italiano, portugués,
// catalán y rumano.
//
// Estas lenguas no tienen phrasal verbs. Su equivalente funcional, lo que un
// hispanohablante necesita aprender como bloque, son los verbos pronominales y
// las perífrasis (se lever, avere bisogno di, acabar de...), así que esa es la
// tercera sección de cada idioma.
//
// Las tablas muestran infinitivo, presente de primera persona y participio: es
// la combinación con la que se construyen todos los tiempos compuestos.

const cols = (base, past, part) => [
  { k: 'base', l: base },
  { k: 'past', l: past },
  { k: 'part', l: part },
  { k: 'es', l: 'Español' },
]

// --------------------------------------------------------------- FRANCÉS ----

const frIrregular = [
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

const frRegular = [
  { base: 'parler', past: 'je parle', part: 'parlé', es: 'hablar' },
  { base: 'aimer', past: "j'aime", part: 'aimé', es: 'gustar, amar' },
  { base: 'chanter', past: 'je chante', part: 'chanté', es: 'cantar' },
  { base: 'regarder', past: 'je regarde', part: 'regardé', es: 'mirar' },
  { base: 'travailler', past: 'je travaille', part: 'travaillé', es: 'trabajar' },
  { base: 'écouter', past: "j'écoute", part: 'écouté', es: 'escuchar' },
  { base: 'habiter', past: "j'habite", part: 'habité', es: 'vivir, residir' },
  { base: 'donner', past: 'je donne', part: 'donné', es: 'dar' },
  { base: 'trouver', past: 'je trouve', part: 'trouvé', es: 'encontrar' },
  { base: 'demander', past: 'je demande', part: 'demandé', es: 'preguntar, pedir' },
  { base: 'jouer', past: 'je joue', part: 'joué', es: 'jugar' },
  { base: 'chercher', past: 'je cherche', part: 'cherché', es: 'buscar' },
  { base: 'penser', past: 'je pense', part: 'pensé', es: 'pensar' },
  { base: 'finir', past: 'je finis', part: 'fini', es: 'terminar' },
  { base: 'choisir', past: 'je choisis', part: 'choisi', es: 'elegir' },
  { base: 'réussir', past: 'je réussis', part: 'réussi', es: 'lograr, aprobar' },
  { base: 'vendre', past: 'je vends', part: 'vendu', es: 'vender' },
  { base: 'attendre', past: "j'attends", part: 'attendu', es: 'esperar' },
  { base: 'répondre', past: 'je réponds', part: 'répondu', es: 'responder' },
]

const frPerifrasis = [
  { v: 'se lever', es: 'levantarse', ex: 'Je me lève tôt.' },
  { v: "s'habiller", es: 'vestirse', ex: "Elle s'habille vite." },
  { v: 'se coucher', es: 'acostarse', ex: 'Je me couche à dix heures.' },
  { v: 'se réveiller', es: 'despertarse', ex: 'Je me réveille à six heures.' },
  { v: "s'appeler", es: 'llamarse', ex: "Je m'appelle Ana." },
  { v: 'se souvenir de', es: 'acordarse de', ex: 'Je me souviens de toi.' },
  { v: 'se dépêcher', es: 'darse prisa', ex: 'Dépêche-toi !' },
  { v: 'avoir besoin de', es: 'necesitar', ex: "J'ai besoin d'aide." },
  { v: 'avoir envie de', es: 'apetecer, tener ganas de', ex: "J'ai envie d'un café." },
  { v: 'être en train de', es: 'estar haciendo algo', ex: 'Je suis en train de manger.' },
  { v: 'venir de', es: 'acabar de', ex: 'Je viens d\'arriver.' },
  { v: 'aller + infinitivo', es: 'ir a (futuro próximo)', ex: 'Je vais partir demain.' },
  { v: 'faire attention', es: 'prestar atención', ex: 'Fais attention !' },
  { v: 'il y a', es: 'hay', ex: 'Il y a un problème.' },
]

const frModales = [
  { v: 'pouvoir', fn: 'Capacidad, posibilidad y permiso.', ex: ['Je peux parler français.', 'Puis-je entrer ?'] },
  { v: 'devoir', fn: 'Obligación, y también probabilidad.', ex: ['Je dois travailler aujourd\'hui.', 'Il doit être fatigué.'] },
  { v: 'vouloir', fn: 'Voluntad y deseo; en condicional, cortesía.', ex: ['Je veux un café.', 'Je voudrais un café, s\'il vous plaît.'] },
  { v: 'savoir', fn: 'Capacidad aprendida, saber hacer algo.', ex: ['Je sais nager.', 'Elle sait conduire.'] },
  { v: 'il faut', fn: 'Necesidad impersonal: hace falta, hay que.', ex: ['Il faut partir maintenant.', 'Il faut que tu viennes.'] },
]

// -------------------------------------------------------------- ITALIANO ----

const itIrregular = [
  { base: 'essere', past: 'io sono', part: 'stato', es: 'ser, estar' },
  { base: 'avere', past: 'io ho', part: 'avuto', es: 'tener, haber' },
  { base: 'fare', past: 'io faccio', part: 'fatto', es: 'hacer' },
  { base: 'dire', past: 'io dico', part: 'detto', es: 'decir' },
  { base: 'andare', past: 'io vado', part: 'andato', es: 'ir' },
  { base: 'venire', past: 'io vengo', part: 'venuto', es: 'venir' },
  { base: 'potere', past: 'io posso', part: 'potuto', es: 'poder' },
  { base: 'volere', past: 'io voglio', part: 'voluto', es: 'querer' },
  { base: 'dovere', past: 'io devo', part: 'dovuto', es: 'deber' },
  { base: 'sapere', past: 'io so', part: 'saputo', es: 'saber' },
  { base: 'vedere', past: 'io vedo', part: 'visto', es: 'ver' },
  { base: 'dare', past: 'io do', part: 'dato', es: 'dar' },
  { base: 'stare', past: 'io sto', part: 'stato', es: 'estar' },
  { base: 'bere', past: 'io bevo', part: 'bevuto', es: 'beber' },
  { base: 'leggere', past: 'io leggo', part: 'letto', es: 'leer' },
  { base: 'scrivere', past: 'io scrivo', part: 'scritto', es: 'escribir' },
  { base: 'prendere', past: 'io prendo', part: 'preso', es: 'tomar, coger' },
  { base: 'mettere', past: 'io metto', part: 'messo', es: 'poner' },
  { base: 'aprire', past: 'io apro', part: 'aperto', es: 'abrir' },
  { base: 'chiudere', past: 'io chiudo', part: 'chiuso', es: 'cerrar' },
  { base: 'scegliere', past: 'io scelgo', part: 'scelto', es: 'elegir' },
  { base: 'rimanere', past: 'io rimango', part: 'rimasto', es: 'quedarse' },
  { base: 'uscire', past: 'io esco', part: 'uscito', es: 'salir' },
  { base: 'vivere', past: 'io vivo', part: 'vissuto', es: 'vivir' },
]

const itRegular = [
  { base: 'parlare', past: 'io parlo', part: 'parlato', es: 'hablar' },
  { base: 'amare', past: 'io amo', part: 'amato', es: 'amar' },
  { base: 'lavorare', past: 'io lavoro', part: 'lavorato', es: 'trabajar' },
  { base: 'guardare', past: 'io guardo', part: 'guardato', es: 'mirar' },
  { base: 'ascoltare', past: 'io ascolto', part: 'ascoltato', es: 'escuchar' },
  { base: 'abitare', past: 'io abito', part: 'abitato', es: 'vivir, residir' },
  { base: 'comprare', past: 'io compro', part: 'comprato', es: 'comprar' },
  { base: 'trovare', past: 'io trovo', part: 'trovato', es: 'encontrar' },
  { base: 'pensare', past: 'io penso', part: 'pensato', es: 'pensar' },
  { base: 'credere', past: 'io credo', part: 'creduto', es: 'creer' },
  { base: 'vendere', past: 'io vendo', part: 'venduto', es: 'vender' },
  { base: 'ricevere', past: 'io ricevo', part: 'ricevuto', es: 'recibir' },
  { base: 'dormire', past: 'io dormo', part: 'dormito', es: 'dormir' },
  { base: 'partire', past: 'io parto', part: 'partito', es: 'partir, irse' },
  { base: 'sentire', past: 'io sento', part: 'sentito', es: 'oír, sentir' },
  { base: 'capire', past: 'io capisco', part: 'capito', es: 'entender' },
  { base: 'finire', past: 'io finisco', part: 'finito', es: 'terminar' },
  { base: 'preferire', past: 'io preferisco', part: 'preferito', es: 'preferir' },
]

const itPerifrasis = [
  { v: 'alzarsi', es: 'levantarse', ex: 'Mi alzo presto.' },
  { v: 'vestirsi', es: 'vestirse', ex: 'Si veste in fretta.' },
  { v: 'svegliarsi', es: 'despertarse', ex: 'Mi sveglio alle sei.' },
  { v: 'chiamarsi', es: 'llamarse', ex: 'Mi chiamo Ana.' },
  { v: 'ricordarsi di', es: 'acordarse de', ex: 'Mi ricordo di te.' },
  { v: 'accorgersi di', es: 'darse cuenta de', ex: 'Mi sono accorto dell\'errore.' },
  { v: 'sbrigarsi', es: 'darse prisa', ex: 'Sbrigati!' },
  { v: 'avere bisogno di', es: 'necesitar', ex: 'Ho bisogno di aiuto.' },
  { v: 'avere voglia di', es: 'apetecer, tener ganas de', ex: 'Ho voglia di un caffè.' },
  { v: 'stare + gerundio', es: 'estar haciendo algo', ex: 'Sto mangiando.' },
  { v: 'stare per', es: 'estar a punto de', ex: 'Sto per uscire.' },
  { v: 'andare a', es: 'ir a (hacer algo)', ex: 'Vado a comprare il pane.' },
  { v: 'fare attenzione', es: 'prestar atención', ex: 'Fai attenzione!' },
  { v: 'farcela', es: 'conseguirlo, poder con ello', ex: 'Ce la faccio!' },
]

const itModales = [
  { v: 'potere', fn: 'Capacidad, posibilidad y permiso.', ex: ['Posso parlare italiano.', 'Posso entrare?'] },
  { v: 'dovere', fn: 'Obligación, y también probabilidad.', ex: ['Devo lavorare oggi.', 'Deve essere stanco.'] },
  { v: 'volere', fn: 'Voluntad y deseo; en condicional, cortesía.', ex: ['Voglio un caffè.', 'Vorrei un caffè, per favore.'] },
  { v: 'sapere', fn: 'Capacidad aprendida, saber hacer algo.', ex: ['So nuotare.', 'Sai guidare?'] },
  { v: 'bisogna', fn: 'Necesidad impersonal: hace falta, hay que.', ex: ['Bisogna partire adesso.', 'Bisogna studiare di più.'] },
]

// ------------------------------------------------------------- PORTUGUÉS ----

const ptIrregular = [
  { base: 'ser', past: 'eu sou', part: 'sido', es: 'ser' },
  { base: 'estar', past: 'eu estou', part: 'estado', es: 'estar' },
  { base: 'ter', past: 'eu tenho', part: 'tido', es: 'tener' },
  { base: 'haver', past: 'eu hei', part: 'havido', es: 'haber' },
  { base: 'ir', past: 'eu vou', part: 'ido', es: 'ir' },
  { base: 'fazer', past: 'eu faço', part: 'feito', es: 'hacer' },
  { base: 'dizer', past: 'eu digo', part: 'dito', es: 'decir' },
  { base: 'ver', past: 'eu vejo', part: 'visto', es: 'ver' },
  { base: 'vir', past: 'eu venho', part: 'vindo', es: 'venir' },
  { base: 'poder', past: 'eu posso', part: 'podido', es: 'poder' },
  { base: 'querer', past: 'eu quero', part: 'querido', es: 'querer' },
  { base: 'saber', past: 'eu sei', part: 'sabido', es: 'saber' },
  { base: 'dar', past: 'eu dou', part: 'dado', es: 'dar' },
  { base: 'pôr', past: 'eu ponho', part: 'posto', es: 'poner' },
  { base: 'trazer', past: 'eu trago', part: 'trazido', es: 'traer' },
  { base: 'ler', past: 'eu leio', part: 'lido', es: 'leer' },
  { base: 'ouvir', past: 'eu ouço', part: 'ouvido', es: 'oír' },
  { base: 'pedir', past: 'eu peço', part: 'pedido', es: 'pedir' },
  { base: 'perder', past: 'eu perco', part: 'perdido', es: 'perder' },
  { base: 'sair', past: 'eu saio', part: 'saído', es: 'salir' },
  { base: 'dormir', past: 'eu durmo', part: 'dormido', es: 'dormir' },
  { base: 'escrever', past: 'eu escrevo', part: 'escrito', es: 'escribir' },
  { base: 'abrir', past: 'eu abro', part: 'aberto', es: 'abrir' },
  { base: 'cobrir', past: 'eu cubro', part: 'coberto', es: 'cubrir' },
]

const ptRegular = [
  { base: 'falar', past: 'eu falo', part: 'falado', es: 'hablar' },
  { base: 'amar', past: 'eu amo', part: 'amado', es: 'amar' },
  { base: 'trabalhar', past: 'eu trabalho', part: 'trabalhado', es: 'trabajar' },
  { base: 'estudar', past: 'eu estudo', part: 'estudado', es: 'estudiar' },
  { base: 'comprar', past: 'eu compro', part: 'comprado', es: 'comprar' },
  { base: 'chegar', past: 'eu chego', part: 'chegado', es: 'llegar' },
  { base: 'olhar', past: 'eu olho', part: 'olhado', es: 'mirar' },
  { base: 'escutar', past: 'eu escuto', part: 'escutado', es: 'escuchar' },
  { base: 'morar', past: 'eu moro', part: 'morado', es: 'vivir, residir' },
  { base: 'comer', past: 'eu como', part: 'comido', es: 'comer' },
  { base: 'beber', past: 'eu bebo', part: 'bebido', es: 'beber' },
  { base: 'aprender', past: 'eu aprendo', part: 'aprendido', es: 'aprender' },
  { base: 'vender', past: 'eu vendo', part: 'vendido', es: 'vender' },
  { base: 'correr', past: 'eu corro', part: 'corrido', es: 'correr' },
  { base: 'partir', past: 'eu parto', part: 'partido', es: 'partir, irse' },
  { base: 'decidir', past: 'eu decido', part: 'decidido', es: 'decidir' },
  { base: 'assistir', past: 'eu assisto', part: 'assistido', es: 'ver, asistir' },
  { base: 'dividir', past: 'eu divido', part: 'dividido', es: 'dividir' },
]

const ptPerifrasis = [
  { v: 'levantar-se', es: 'levantarse', ex: 'Levanto-me cedo.' },
  { v: 'vestir-se', es: 'vestirse', ex: 'Ela veste-se depressa.' },
  { v: 'chamar-se', es: 'llamarse', ex: 'Chamo-me Ana.' },
  { v: 'lembrar-se de', es: 'acordarse de', ex: 'Lembro-me de ti.' },
  { v: 'esquecer-se de', es: 'olvidarse de', ex: 'Esqueci-me da chave.' },
  { v: 'dar-se conta de', es: 'darse cuenta de', ex: 'Dei-me conta do erro.' },
  { v: 'precisar de', es: 'necesitar', ex: 'Preciso de ajuda.' },
  { v: 'ter vontade de', es: 'apetecer, tener ganas de', ex: 'Tenho vontade de um café.' },
  { v: 'estar a + infinitivo', es: 'estar haciendo algo', ex: 'Estou a comer.' },
  { v: 'acabar de', es: 'acabar de', ex: 'Acabei de chegar.' },
  { v: 'ir + infinitivo', es: 'ir a (futuro próximo)', ex: 'Vou partir amanhã.' },
  { v: 'ter de / ter que', es: 'tener que', ex: 'Tenho de trabalhar.' },
  { v: 'deixar de', es: 'dejar de', ex: 'Deixei de fumar.' },
]

const ptModales = [
  { v: 'poder', fn: 'Capacidad, posibilidad y permiso.', ex: ['Posso falar português.', 'Posso entrar?'] },
  { v: 'dever', fn: 'Obligación moral y probabilidad.', ex: ['Deves estudar mais.', 'Ele deve estar cansado.'] },
  { v: 'querer', fn: 'Voluntad y deseo; en condicional, cortesía.', ex: ['Quero um café.', 'Queria um café, por favor.'] },
  { v: 'saber', fn: 'Capacidad aprendida, saber hacer algo.', ex: ['Sei nadar.', 'Sabes conduzir?'] },
  { v: 'ter de', fn: 'Obligación externa, más fuerte que dever.', ex: ['Tenho de ir agora.', 'Tens de pagar hoje.'] },
]

// --------------------------------------------------------------- CATALÁN ----

const caIrregular = [
  { base: 'ser', past: 'jo sóc', part: 'estat', es: 'ser' },
  { base: 'estar', past: 'jo estic', part: 'estat', es: 'estar' },
  { base: 'haver', past: 'jo he', part: 'hagut', es: 'haber' },
  { base: 'tenir', past: 'jo tinc', part: 'tingut', es: 'tener' },
  { base: 'anar', past: 'jo vaig', part: 'anat', es: 'ir' },
  { base: 'fer', past: 'jo faig', part: 'fet', es: 'hacer' },
  { base: 'dir', past: 'jo dic', part: 'dit', es: 'decir' },
  { base: 'veure', past: 'jo veig', part: 'vist', es: 'ver' },
  { base: 'venir', past: 'jo vinc', part: 'vingut', es: 'venir' },
  { base: 'poder', past: 'jo puc', part: 'pogut', es: 'poder' },
  { base: 'voler', past: 'jo vull', part: 'volgut', es: 'querer' },
  { base: 'saber', past: 'jo sé', part: 'sabut', es: 'saber' },
  { base: 'prendre', past: 'jo prenc', part: 'pres', es: 'tomar, coger' },
  { base: 'escriure', past: 'jo escric', part: 'escrit', es: 'escribir' },
  { base: 'beure', past: 'jo bec', part: 'begut', es: 'beber' },
  { base: 'viure', past: 'jo visc', part: 'viscut', es: 'vivir' },
  { base: 'conèixer', past: 'jo conec', part: 'conegut', es: 'conocer' },
  { base: 'sortir', past: 'jo surto', part: 'sortit', es: 'salir' },
  { base: 'obrir', past: 'jo obro', part: 'obert', es: 'abrir' },
  { base: 'caure', past: 'jo caic', part: 'caigut', es: 'caer' },
  { base: 'creure', past: 'jo crec', part: 'cregut', es: 'creer' },
  { base: 'dur', past: 'jo duc', part: 'dut', es: 'llevar' },
]

const caRegular = [
  { base: 'parlar', past: 'jo parlo', part: 'parlat', es: 'hablar' },
  { base: 'cantar', past: 'jo canto', part: 'cantat', es: 'cantar' },
  { base: 'treballar', past: 'jo treballo', part: 'treballat', es: 'trabajar' },
  { base: 'estudiar', past: 'jo estudio', part: 'estudiat', es: 'estudiar' },
  { base: 'comprar', past: 'jo compro', part: 'comprat', es: 'comprar' },
  { base: 'mirar', past: 'jo miro', part: 'mirat', es: 'mirar' },
  { base: 'escoltar', past: 'jo escolto', part: 'escoltat', es: 'escuchar' },
  { base: 'arribar', past: 'jo arribo', part: 'arribat', es: 'llegar' },
  { base: 'menjar', past: 'jo menjo', part: 'menjat', es: 'comer' },
  { base: 'trobar', past: 'jo trobo', part: 'trobat', es: 'encontrar' },
  { base: 'perdre', past: 'jo perdo', part: 'perdut', es: 'perder' },
  { base: 'témer', past: 'jo temo', part: 'temut', es: 'temer' },
  { base: 'dormir', past: 'jo dormo', part: 'dormit', es: 'dormir' },
  { base: 'servir', past: 'jo serveixo', part: 'servit', es: 'servir' },
  { base: 'patir', past: 'jo pateixo', part: 'patit', es: 'sufrir' },
  { base: 'decidir', past: 'jo decideixo', part: 'decidit', es: 'decidir' },
]

const caPerifrasis = [
  { v: 'llevar-se', es: 'levantarse', ex: 'Em llevo aviat.' },
  { v: 'vestir-se', es: 'vestirse', ex: 'Es vesteix de pressa.' },
  { v: 'despertar-se', es: 'despertarse', ex: 'Em desperto a les sis.' },
  { v: 'dir-se', es: 'llamarse', ex: 'Em dic Anna.' },
  { v: 'recordar-se de', es: 'acordarse de', ex: 'Me\'n recordo de tu.' },
  { v: 'adonar-se de', es: 'darse cuenta de', ex: 'Em vaig adonar de l\'error.' },
  { v: 'afanyar-se', es: 'darse prisa', ex: 'Afanya\'t!' },
  { v: 'tenir ganes de', es: 'tener ganas de', ex: 'Tinc ganes de sortir.' },
  { v: 'haver de', es: 'tener que', ex: 'He de treballar.' },
  { v: 'estar a punt de', es: 'estar a punto de', ex: 'Estic a punt de sortir.' },
  { v: 'acabar de', es: 'acabar de', ex: 'Acabo d\'arribar.' },
  { v: 'anar a', es: 'ir a (hacer algo)', ex: 'Vaig a comprar pa.' },
]

const caModales = [
  { v: 'poder', fn: 'Capacidad, posibilidad y permiso.', ex: ['Puc parlar català.', 'Puc entrar?'] },
  { v: 'haver de', fn: 'Obligación: tener que.', ex: ['He de treballar avui.', 'Has de venir.'] },
  { v: 'caldre', fn: 'Necesidad impersonal: hace falta (cal).', ex: ['Cal sortir ara.', 'No cal que vinguis.'] },
  { v: 'voler', fn: 'Voluntad y deseo.', ex: ['Vull un cafè.', 'Què vols fer?'] },
  { v: 'saber', fn: 'Capacidad aprendida, saber hacer algo.', ex: ['Sé nedar.', 'Saps conduir?'] },
]

// ---------------------------------------------------------------- RUMANO ----

const roIrregular = [
  { base: 'a fi', past: 'eu sunt', part: 'fost', es: 'ser, estar' },
  { base: 'a avea', past: 'eu am', part: 'avut', es: 'tener' },
  { base: 'a face', past: 'eu fac', part: 'făcut', es: 'hacer' },
  { base: 'a spune', past: 'eu spun', part: 'spus', es: 'decir' },
  { base: 'a merge', past: 'eu merg', part: 'mers', es: 'ir, andar' },
  { base: 'a veni', past: 'eu vin', part: 'venit', es: 'venir' },
  { base: 'a putea', past: 'eu pot', part: 'putut', es: 'poder' },
  { base: 'a vrea', past: 'eu vreau', part: 'vrut', es: 'querer' },
  { base: 'a ști', past: 'eu știu', part: 'știut', es: 'saber' },
  { base: 'a vedea', past: 'eu văd', part: 'văzut', es: 'ver' },
  { base: 'a da', past: 'eu dau', part: 'dat', es: 'dar' },
  { base: 'a lua', past: 'eu iau', part: 'luat', es: 'tomar, coger' },
  { base: 'a bea', past: 'eu beau', part: 'băut', es: 'beber' },
  { base: 'a scrie', past: 'eu scriu', part: 'scris', es: 'escribir' },
  { base: 'a pune', past: 'eu pun', part: 'pus', es: 'poner' },
  { base: 'a deschide', past: 'eu deschid', part: 'deschis', es: 'abrir' },
  { base: 'a închide', past: 'eu închid', part: 'închis', es: 'cerrar' },
  { base: 'a rămâne', past: 'eu rămân', part: 'rămas', es: 'quedarse' },
  { base: 'a ieși', past: 'eu ies', part: 'ieșit', es: 'salir' },
  { base: 'a duce', past: 'eu duc', part: 'dus', es: 'llevar' },
  { base: 'a alege', past: 'eu aleg', part: 'ales', es: 'elegir' },
  { base: 'a mânca', past: 'eu mănânc', part: 'mâncat', es: 'comer' },
]

const roRegular = [
  { base: 'a lucra', past: 'eu lucrez', part: 'lucrat', es: 'trabajar' },
  { base: 'a cânta', past: 'eu cânt', part: 'cântat', es: 'cantar' },
  { base: 'a învăța', past: 'eu învăț', part: 'învățat', es: 'aprender' },
  { base: 'a cumpăra', past: 'eu cumpăr', part: 'cumpărat', es: 'comprar' },
  { base: 'a aștepta', past: 'eu aștept', part: 'așteptat', es: 'esperar' },
  { base: 'a asculta', past: 'eu ascult', part: 'ascultat', es: 'escuchar' },
  { base: 'a termina', past: 'eu termin', part: 'terminat', es: 'terminar' },
  { base: 'a întreba', past: 'eu întreb', part: 'întrebat', es: 'preguntar' },
  { base: 'a vorbi', past: 'eu vorbesc', part: 'vorbit', es: 'hablar' },
  { base: 'a citi', past: 'eu citesc', part: 'citit', es: 'leer' },
  { base: 'a locui', past: 'eu locuiesc', part: 'locuit', es: 'vivir, residir' },
  { base: 'a plăti', past: 'eu plătesc', part: 'plătit', es: 'pagar' },
  { base: 'a călători', past: 'eu călătoresc', part: 'călătorit', es: 'viajar' },
  { base: 'a privi', past: 'eu privesc', part: 'privit', es: 'mirar' },
  { base: 'a dormi', past: 'eu dorm', part: 'dormit', es: 'dormir' },
  { base: 'a simți', past: 'eu simt', part: 'simțit', es: 'sentir' },
]

const roPerifrasis = [
  { v: 'a se trezi', es: 'despertarse', ex: 'Mă trezesc la șase.' },
  { v: 'a se scula', es: 'levantarse', ex: 'Mă scol devreme.' },
  { v: 'a se îmbrăca', es: 'vestirse', ex: 'Se îmbracă repede.' },
  { v: 'a se numi', es: 'llamarse', ex: 'Mă numesc Ana.' },
  { v: 'a-și aminti', es: 'acordarse de', ex: 'Îmi amintesc de tine.' },
  { v: 'a se grăbi', es: 'darse prisa', ex: 'Grăbește-te!' },
  { v: 'a avea nevoie de', es: 'necesitar', ex: 'Am nevoie de ajutor.' },
  { v: 'a avea chef de', es: 'tener ganas de', ex: 'Am chef de o cafea.' },
  { v: 'a trebui să', es: 'tener que, deber', ex: 'Trebuie să plec.' },
  { v: 'a fi pe cale să', es: 'estar a punto de', ex: 'Sunt pe cale să plec.' },
  { v: 'a-i plăcea', es: 'gustar', ex: 'Îmi place cafeaua.' },
  { v: 'a se duce', es: 'irse', ex: 'Mă duc acasă.' },
]

const roModales = [
  { v: 'a putea', fn: 'Capacidad, posibilidad y permiso.', ex: ['Pot vorbi românește.', 'Pot să intru?'] },
  { v: 'a trebui', fn: 'Obligación o necesidad; es impersonal (trebuie).', ex: ['Trebuie să lucrez azi.', 'Trebuie să dormi mai mult.'] },
  { v: 'a vrea', fn: 'Voluntad y deseo.', ex: ['Vreau o cafea.', 'Ce vrei să faci?'] },
  { v: 'a ști', fn: 'Capacidad aprendida, saber hacer algo.', ex: ['Știu să înot.', 'Știi să conduci?'] },
  { v: 'ar trebui', fn: 'Consejo: debería.', ex: ['Ar trebui să mergi la doctor.', 'Ar trebui să conduci atent.'] },
]

// ------------------------------------------------------------- SECCIONES ----

export const romanceSections = {
  fr: [
    { id: 'irregulares', label: 'Verbos irregulares', icon: '🔀', type: 'verbs', cols: cols('Infinitif', 'Présent (je)', 'Participe passé'), rows: frIrregular },
    { id: 'regulares', label: 'Verbos regulares', icon: '➕', type: 'verbs', cols: cols('Infinitif', 'Présent (je)', 'Participe passé'), rows: frRegular, note: 'Tres grupos: -er (parler → parlé), -ir (finir → fini) y -re (vendre → vendu).' },
    { id: 'perifrasis', label: 'Pronominales y perífrasis', icon: '🔗', type: 'phrases', rows: frPerifrasis, note: 'El equivalente a los phrasal verbs del inglés: bloques que se aprenden enteros, no palabra por palabra.' },
    { id: 'modales', label: 'Verbos modales', icon: '🔑', type: 'modals', rows: frModales, note: 'El modal se conjuga y el verbo principal va en infinitivo: je peux parler.' },
  ],
  it: [
    { id: 'irregulares', label: 'Verbos irregulares', icon: '🔀', type: 'verbs', cols: cols('Infinito', 'Presente (io)', 'Participio passato'), rows: itIrregular },
    { id: 'regulares', label: 'Verbos regulares', icon: '➕', type: 'verbs', cols: cols('Infinito', 'Presente (io)', 'Participio passato'), rows: itRegular, note: 'Tres conjugaciones: -are (parlato), -ere (creduto) y -ire (dormito). Algunos -ire intercalan -isc-: capisco.' },
    { id: 'perifrasis', label: 'Pronominales y perífrasis', icon: '🔗', type: 'phrases', rows: itPerifrasis, note: 'El equivalente a los phrasal verbs: bloques fijos que se aprenden enteros.' },
    { id: 'modales', label: 'Verbos modales', icon: '🔑', type: 'modals', rows: itModales, note: 'Los modales eligen el auxiliar del verbo principal en los tiempos compuestos: sono dovuto partire.' },
  ],
  pt: [
    { id: 'irregulares', label: 'Verbos irregulares', icon: '🔀', type: 'verbs', cols: cols('Infinitivo', 'Presente (eu)', 'Particípio'), rows: ptIrregular },
    { id: 'regulares', label: 'Verbos regulares', icon: '➕', type: 'verbs', cols: cols('Infinitivo', 'Presente (eu)', 'Particípio'), rows: ptRegular, note: 'Tres conjugaciones: -ar (falado), -er (comido) e -ir (partido).' },
    { id: 'perifrasis', label: 'Pronominales y perífrasis', icon: '🔗', type: 'phrases', rows: ptPerifrasis, note: 'El equivalente a los phrasal verbs. En Portugal se usa estar a + infinitivo; en Brasil, estar + gerúndio (estou comendo).' },
    { id: 'modales', label: 'Verbos modales', icon: '🔑', type: 'modals', rows: ptModales, note: 'El modal se conjuga y el verbo principal va en infinitivo: posso falar.' },
  ],
  ca: [
    { id: 'irregulares', label: 'Verbos irregulares', icon: '🔀', type: 'verbs', cols: cols('Infinitiu', 'Present (jo)', 'Participi'), rows: caIrregular },
    { id: 'regulares', label: 'Verbos regulares', icon: '➕', type: 'verbs', cols: cols('Infinitiu', 'Present (jo)', 'Participi'), rows: caRegular, note: 'Tres conjugaciones: -ar (parlat), -er/-re (temut, perdut) y -ir (dormit). Muchos -ir son incoativos: serveixo.' },
    { id: 'perifrasis', label: 'Pronominales y perífrasis', icon: '🔗', type: 'phrases', rows: caPerifrasis, note: 'El equivalente a los phrasal verbs. Ojo con el pronombre en: me\'n recordo.' },
    { id: 'modales', label: 'Verbos modales', icon: '🔑', type: 'modals', rows: caModales, note: 'Haver de y caldre son las dos formas de expresar obligación: he de sortir / cal sortir.' },
  ],
  ro: [
    { id: 'irregulares', label: 'Verbos irregulares', icon: '🔀', type: 'verbs', cols: cols('Infinitiv', 'Prezent (eu)', 'Participiu'), rows: roIrregular },
    { id: 'regulares', label: 'Verbos regulares', icon: '➕', type: 'verbs', cols: cols('Infinitiv', 'Prezent (eu)', 'Participiu'), rows: roRegular, note: 'El infinitivo lleva la partícula a. Muchos verbos insertan -ez- o -esc- en presente: lucrez, vorbesc.' },
    { id: 'perifrasis', label: 'Reflexivos y perífrasis', icon: '🔗', type: 'phrases', rows: roPerifrasis, note: 'El equivalente a los phrasal verbs. El rumano usa muchísimo el subjuntivo con să tras el verbo modal.' },
    { id: 'modales', label: 'Verbos modales', icon: '🔑', type: 'modals', rows: roModales, note: 'Casi siempre van seguidos de subjuntivo con să: trebuie să plec, pot să intru.' },
  ],
}
