// Curso A1 estructurado por unidades comunicativas, diseñado según metodologías
// con evidencia en el aprendizaje de idiomas:
//
//  - Objetivos "puedo hacer" (can-do) del MCER: cada unidad se define por lo que
//    el estudiante será capaz de HACER, no por la gramática que "cubre".
//  - Enfoque léxico (chunks): se aprenden frases en bloque listas para usar,
//    no palabras sueltas.
//  - Input comprensible (i+1, Krashen): diálogos que se entienden casi por
//    completo, con solo un elemento nuevo.
//  - Recuerdo activo (retrieval practice): la práctica pide PRODUCIR la frase
//    antes de ver la respuesta.
//  - Repetición espaciada: cada unidad indica cuándo repasarla.
//
// Traducciones disponibles: en, fr, de, it, pt (igual que la gramática).

export const A1_LANGS = ['en', 'fr', 'de', 'it', 'pt']

export function hasA1Course(code) {
  return A1_LANGS.includes(code)
}

export const a1Intro =
  'Este curso aplica métodos con evidencia: objetivos "puedo hacer" (MCER), frases en bloque (enfoque léxico), diálogos comprensibles (input i+1), práctica de recuerdo activo y repaso espaciado. Dedica 10–15 minutos al día, di todo en voz alta y repasa la unidad anterior antes de empezar la siguiente.'

export const a1Course = [
  {
    id: 'u1',
    title: 'Unidad 1 · Saludar y presentarse',
    icon: '👋',
    canDo: 'Puedo saludar, decir mi nombre y preguntar el de otra persona.',
    tip: 'Memoriza cada frase completa como un bloque (chunk), no palabra por palabra: así la dirás sin pararte a pensar en la gramática.',
    chunks: [
      { es: '¡Hola! ¿Qué tal?', t: { en: 'Hi! How are you?', fr: 'Salut ! Ça va ?', de: "Hallo! Wie geht's?", it: 'Ciao! Come va?', pt: 'Olá! Tudo bem?' } },
      { es: 'Me llamo…', t: { en: 'My name is…', fr: "Je m'appelle…", de: 'Ich heiße…', it: 'Mi chiamo…', pt: 'Chamo-me…' } },
      { es: '¿Cómo te llamas?', t: { en: "What's your name?", fr: "Comment tu t'appelles ?", de: 'Wie heißt du?', it: 'Come ti chiami?', pt: 'Como te chamas?' } },
      { es: 'Mucho gusto.', t: { en: 'Nice to meet you.', fr: 'Enchanté.', de: 'Freut mich.', it: 'Piacere.', pt: 'Muito prazer.' } },
      { es: 'Hasta luego.', t: { en: 'See you later.', fr: 'À plus tard.', de: 'Bis später.', it: 'A dopo.', pt: 'Até logo.' } },
    ],
    dialogue: [
      { who: 'A', es: 'Hola, me llamo Ana. ¿Cómo te llamas?', t: { en: "Hi, my name is Ana. What's your name?", fr: "Salut, je m'appelle Ana. Comment tu t'appelles ?", de: 'Hallo, ich heiße Ana. Wie heißt du?', it: 'Ciao, mi chiamo Ana. Come ti chiami?', pt: 'Olá, chamo-me Ana. Como te chamas?' } },
      { who: 'B', es: 'Hola, Ana. Me llamo Luis. Mucho gusto.', t: { en: 'Hi, Ana. My name is Luis. Nice to meet you.', fr: "Salut, Ana. Je m'appelle Luis. Enchanté.", de: 'Hallo, Ana. Ich heiße Luis. Freut mich.', it: 'Ciao, Ana. Mi chiamo Luis. Piacere.', pt: 'Olá, Ana. Chamo-me Luis. Muito prazer.' } },
      { who: 'A', es: 'Mucho gusto, Luis. ¿Qué tal?', t: { en: 'Nice to meet you, Luis. How are you?', fr: 'Enchantée, Luis. Ça va ?', de: "Freut mich, Luis. Wie geht's?", it: 'Piacere, Luis. Come va?', pt: 'Muito prazer, Luis. Tudo bem?' } },
      { who: 'B', es: 'Bien, gracias. ¡Hasta luego!', t: { en: 'Fine, thanks. See you later!', fr: 'Bien, merci. À plus tard !', de: 'Gut, danke. Bis später!', it: 'Bene, grazie. A dopo!', pt: 'Bem, obrigado. Até logo!' } },
    ],
    practice: [
      { prompt: 'Pregunta el nombre a alguien', t: { en: "What's your name?", fr: "Comment tu t'appelles ?", de: 'Wie heißt du?', it: 'Come ti chiami?', pt: 'Como te chamas?' } },
      { prompt: 'Responde a una presentación', t: { en: 'Nice to meet you.', fr: 'Enchanté.', de: 'Freut mich.', it: 'Piacere.', pt: 'Muito prazer.' } },
      { prompt: 'Despídete', t: { en: 'See you later.', fr: 'À plus tard.', de: 'Bis später.', it: 'A dopo.', pt: 'Até logo.' } },
    ],
  },
  {
    id: 'u2',
    title: 'Unidad 2 · Origen y profesión',
    icon: '🌎',
    canDo: 'Puedo decir de dónde soy, dónde vivo y a qué me dedico.',
    tip: 'En la práctica, tapa la respuesta e intenta decir la frase ANTES de mirarla. Recordar cuesta, y ese esfuerzo (recuerdo activo) es lo que fija la memoria.',
    chunks: [
      { es: 'Soy de Colombia.', t: { en: "I'm from Colombia.", fr: 'Je viens de Colombie.', de: 'Ich komme aus Kolumbien.', it: 'Sono della Colombia.', pt: 'Sou da Colômbia.' } },
      { es: 'Vivo en Bogotá.', t: { en: 'I live in Bogotá.', fr: "J'habite à Bogota.", de: 'Ich wohne in Bogotá.', it: 'Vivo a Bogotá.', pt: 'Moro em Bogotá.' } },
      { es: 'Soy ingeniero.', t: { en: "I'm an engineer.", fr: 'Je suis ingénieur.', de: 'Ich bin Ingenieur.', it: 'Sono ingegnere.', pt: 'Sou engenheiro.' } },
      { es: '¿De dónde eres?', t: { en: 'Where are you from?', fr: "D'où viens-tu ?", de: 'Woher kommst du?', it: 'Di dove sei?', pt: 'De onde és?' } },
      { es: '¿A qué te dedicas?', t: { en: 'What do you do?', fr: "Qu'est-ce que tu fais dans la vie ?", de: 'Was machst du beruflich?', it: 'Che lavoro fai?', pt: 'O que fazes?' } },
    ],
    dialogue: [
      { who: 'A', es: '¿De dónde eres, Luis?', t: { en: 'Where are you from, Luis?', fr: "D'où viens-tu, Luis ?", de: 'Woher kommst du, Luis?', it: 'Di dove sei, Luis?', pt: 'De onde és, Luis?' } },
      { who: 'B', es: 'Soy de Colombia. Vivo en Bogotá. ¿Y tú?', t: { en: "I'm from Colombia. I live in Bogotá. And you?", fr: "Je viens de Colombie. J'habite à Bogota. Et toi ?", de: 'Ich komme aus Kolumbien. Ich wohne in Bogotá. Und du?', it: 'Sono della Colombia. Vivo a Bogotá. E tu?', pt: 'Sou da Colômbia. Moro em Bogotá. E tu?' } },
      { who: 'A', es: 'Soy de España. ¿A qué te dedicas?', t: { en: "I'm from Spain. What do you do?", fr: "Je viens d'Espagne. Qu'est-ce que tu fais dans la vie ?", de: 'Ich komme aus Spanien. Was machst du beruflich?', it: 'Sono della Spagna. Che lavoro fai?', pt: 'Sou de Espanha. O que fazes?' } },
      { who: 'B', es: 'Soy ingeniero.', t: { en: "I'm an engineer.", fr: 'Je suis ingénieur.', de: 'Ich bin Ingenieur.', it: 'Sono ingegnere.', pt: 'Sou engenheiro.' } },
    ],
    practice: [
      { prompt: 'Di de dónde eres', t: { en: "I'm from Colombia.", fr: 'Je viens de Colombie.', de: 'Ich komme aus Kolumbien.', it: 'Sono della Colombia.', pt: 'Sou da Colômbia.' } },
      { prompt: 'Di dónde vives', t: { en: 'I live in Bogotá.', fr: "J'habite à Bogota.", de: 'Ich wohne in Bogotá.', it: 'Vivo a Bogotá.', pt: 'Moro em Bogotá.' } },
      { prompt: 'Pregunta la profesión', t: { en: 'What do you do?', fr: "Qu'est-ce que tu fais dans la vie ?", de: 'Was machst du beruflich?', it: 'Che lavoro fai?', pt: 'O que fazes?' } },
    ],
  },
  {
    id: 'u3',
    title: 'Unidad 3 · Números y compras',
    icon: '🛒',
    canDo: 'Puedo preguntar precios y comprar algo sencillo.',
    tip: 'Repasa esta unidad mañana y otra vez en tres días (repetición espaciada): repasar justo antes de olvidar es lo que consolida el vocabulario a largo plazo.',
    chunks: [
      { es: '¿Cuánto cuesta?', t: { en: 'How much is it?', fr: 'Combien ça coûte ?', de: 'Wie viel kostet das?', it: 'Quanto costa?', pt: 'Quanto custa?' } },
      { es: 'Quiero esto, por favor.', t: { en: 'I want this, please.', fr: "Je veux ça, s'il vous plaît.", de: 'Ich möchte das, bitte.', it: 'Vorrei questo, per favore.', pt: 'Quero isto, por favor.' } },
      { es: 'Son diez euros.', t: { en: "It's ten euros.", fr: 'Ça fait dix euros.', de: 'Das macht zehn Euro.', it: 'Sono dieci euro.', pt: 'São dez euros.' } },
      { es: '¿Tiene agua?', t: { en: 'Do you have water?', fr: "Avez-vous de l'eau ?", de: 'Haben Sie Wasser?', it: "Ha dell'acqua?", pt: 'Tem água?' } },
      { es: 'Aquí tiene.', t: { en: 'Here you are.', fr: 'Voilà.', de: 'Bitte schön.', it: 'Ecco.', pt: 'Aqui tem.' } },
    ],
    dialogue: [
      { who: 'A', es: 'Buenos días. ¿Tiene agua?', t: { en: 'Good morning. Do you have water?', fr: "Bonjour. Avez-vous de l'eau ?", de: 'Guten Morgen. Haben Sie Wasser?', it: "Buongiorno. Ha dell'acqua?", pt: 'Bom dia. Tem água?' } },
      { who: 'B', es: 'Sí, claro. Aquí tiene.', t: { en: 'Yes, of course. Here you are.', fr: 'Oui, bien sûr. Voilà.', de: 'Ja, natürlich. Bitte schön.', it: 'Sì, certo. Ecco.', pt: 'Sim, claro. Aqui tem.' } },
      { who: 'A', es: '¿Cuánto cuesta?', t: { en: 'How much is it?', fr: 'Combien ça coûte ?', de: 'Wie viel kostet das?', it: 'Quanto costa?', pt: 'Quanto custa?' } },
      { who: 'B', es: 'Son dos euros.', t: { en: "It's two euros.", fr: 'Ça fait deux euros.', de: 'Das macht zwei Euro.', it: 'Sono due euro.', pt: 'São dois euros.' } },
      { who: 'A', es: 'Gracias. ¡Adiós!', t: { en: 'Thank you. Goodbye!', fr: 'Merci. Au revoir !', de: 'Danke. Auf Wiedersehen!', it: 'Grazie. Arrivederci!', pt: 'Obrigado. Adeus!' } },
    ],
    practice: [
      { prompt: 'Pregunta el precio', t: { en: 'How much is it?', fr: 'Combien ça coûte ?', de: 'Wie viel kostet das?', it: 'Quanto costa?', pt: 'Quanto custa?' } },
      { prompt: 'Pide algo con cortesía', t: { en: 'I want this, please.', fr: "Je veux ça, s'il vous plaît.", de: 'Ich möchte das, bitte.', it: 'Vorrei questo, per favore.', pt: 'Quero isto, por favor.' } },
      { prompt: 'Pregunta si tienen agua', t: { en: 'Do you have water?', fr: "Avez-vous de l'eau ?", de: 'Haben Sie Wasser?', it: "Ha dell'acqua?", pt: 'Tem água?' } },
    ],
  },
  {
    id: 'u4',
    title: 'Unidad 4 · Mi familia',
    icon: '👨‍👩‍👧',
    canDo: 'Puedo presentar a mi familia y decir qué tengo.',
    tip: 'Lee el diálogo entendiendo el conjunto aunque haya una palabra nueva (input i+1): tu cerebro aprende cuando comprende el mensaje, no cuando traduce palabra a palabra.',
    chunks: [
      { es: 'Tengo dos hermanos.', t: { en: 'I have two brothers.', fr: "J'ai deux frères.", de: 'Ich habe zwei Brüder.', it: 'Ho due fratelli.', pt: 'Tenho dois irmãos.' } },
      { es: 'Esta es mi madre.', t: { en: 'This is my mother.', fr: 'Voici ma mère.', de: 'Das ist meine Mutter.', it: 'Questa è mia madre.', pt: 'Esta é a minha mãe.' } },
      { es: '¿Tienes hijos?', t: { en: 'Do you have children?', fr: 'As-tu des enfants ?', de: 'Hast du Kinder?', it: 'Hai figli?', pt: 'Tens filhos?' } },
      { es: '¿Cómo se llama?', t: { en: "What's his/her name?", fr: "Comment il/elle s'appelle ?", de: 'Wie heißt er/sie?', it: 'Come si chiama?', pt: 'Como se chama?' } },
      { es: 'Se llama María.', t: { en: 'Her name is María.', fr: "Elle s'appelle María.", de: 'Sie heißt María.', it: 'Si chiama María.', pt: 'Chama-se María.' } },
    ],
    dialogue: [
      { who: 'A', es: '¿Tienes hermanos?', t: { en: 'Do you have siblings?', fr: 'As-tu des frères et sœurs ?', de: 'Hast du Geschwister?', it: 'Hai fratelli?', pt: 'Tens irmãos?' } },
      { who: 'B', es: 'Sí, tengo dos hermanos. ¿Y tú?', t: { en: 'Yes, I have two brothers. And you?', fr: "Oui, j'ai deux frères. Et toi ?", de: 'Ja, ich habe zwei Brüder. Und du?', it: 'Sì, ho due fratelli. E tu?', pt: 'Sim, tenho dois irmãos. E tu?' } },
      { who: 'A', es: 'Tengo una hermana. Mira, esta es mi madre.', t: { en: 'I have one sister. Look, this is my mother.', fr: "J'ai une sœur. Regarde, voici ma mère.", de: 'Ich habe eine Schwester. Schau, das ist meine Mutter.', it: 'Ho una sorella. Guarda, questa è mia madre.', pt: 'Tenho uma irmã. Olha, esta é a minha mãe.' } },
      { who: 'B', es: '¡Qué bien! ¿Cómo se llama?', t: { en: "How nice! What's her name?", fr: "Super ! Comment elle s'appelle ?", de: 'Wie schön! Wie heißt sie?', it: 'Che bello! Come si chiama?', pt: 'Que bom! Como se chama?' } },
      { who: 'A', es: 'Se llama María.', t: { en: 'Her name is María.', fr: "Elle s'appelle María.", de: 'Sie heißt María.', it: 'Si chiama María.', pt: 'Chama-se María.' } },
    ],
    practice: [
      { prompt: 'Di cuántos hermanos tienes', t: { en: 'I have two brothers.', fr: "J'ai deux frères.", de: 'Ich habe zwei Brüder.', it: 'Ho due fratelli.', pt: 'Tenho dois irmãos.' } },
      { prompt: 'Presenta a tu madre', t: { en: 'This is my mother.', fr: 'Voici ma mère.', de: 'Das ist meine Mutter.', it: 'Questa è mia madre.', pt: 'Esta é a minha mãe.' } },
      { prompt: 'Pregunta si tiene hijos', t: { en: 'Do you have children?', fr: 'As-tu des enfants ?', de: 'Hast du Kinder?', it: 'Hai figli?', pt: 'Tens filhos?' } },
    ],
  },
  {
    id: 'u5',
    title: 'Unidad 5 · Mi rutina diaria',
    icon: '⏰',
    canDo: 'Puedo describir mi día con frases sencillas y decir la hora.',
    tip: 'Lee el diálogo EN VOZ ALTA imitando la voz del audio (shadowing): entrenas el oído, la boca y la pronunciación a la vez.',
    chunks: [
      { es: 'Me levanto a las siete.', t: { en: 'I get up at seven.', fr: 'Je me lève à sept heures.', de: 'Ich stehe um sieben auf.', it: 'Mi alzo alle sette.', pt: 'Levanto-me às sete.' } },
      { es: 'Trabajo por la mañana.', t: { en: 'I work in the morning.', fr: 'Je travaille le matin.', de: 'Ich arbeite am Morgen.', it: 'Lavoro la mattina.', pt: 'Trabalho de manhã.' } },
      { es: 'Como a la una.', t: { en: 'I have lunch at one.', fr: 'Je déjeune à une heure.', de: 'Ich esse um eins zu Mittag.', it: "Pranzo all'una.", pt: 'Almoço à uma.' } },
      { es: 'Veo la tele por la noche.', t: { en: 'I watch TV at night.', fr: 'Je regarde la télé le soir.', de: 'Abends sehe ich fern.', it: 'Guardo la TV la sera.', pt: 'Vejo TV à noite.' } },
      { es: '¿A qué hora…?', t: { en: 'What time…?', fr: 'À quelle heure… ?', de: 'Um wie viel Uhr…?', it: 'A che ora…?', pt: 'A que horas…?' } },
    ],
    dialogue: [
      { who: 'A', es: '¿A qué hora te levantas?', t: { en: 'What time do you get up?', fr: 'À quelle heure tu te lèves ?', de: 'Um wie viel Uhr stehst du auf?', it: 'A che ora ti alzi?', pt: 'A que horas te levantas?' } },
      { who: 'B', es: 'Me levanto a las siete. Trabajo por la mañana.', t: { en: 'I get up at seven. I work in the morning.', fr: 'Je me lève à sept heures. Je travaille le matin.', de: 'Ich stehe um sieben auf. Ich arbeite am Morgen.', it: 'Mi alzo alle sette. Lavoro la mattina.', pt: 'Levanto-me às sete. Trabalho de manhã.' } },
      { who: 'A', es: '¿Y por la noche?', t: { en: 'And at night?', fr: 'Et le soir ?', de: 'Und abends?', it: 'E la sera?', pt: 'E à noite?' } },
      { who: 'B', es: 'Veo la tele y leo un poco.', t: { en: 'I watch TV and read a little.', fr: 'Je regarde la télé et je lis un peu.', de: 'Ich sehe fern und lese ein bisschen.', it: "Guardo la TV e leggo un po'.", pt: 'Vejo TV e leio um pouco.' } },
    ],
    practice: [
      { prompt: 'Di a qué hora te levantas', t: { en: 'I get up at seven.', fr: 'Je me lève à sept heures.', de: 'Ich stehe um sieben auf.', it: 'Mi alzo alle sette.', pt: 'Levanto-me às sete.' } },
      { prompt: 'Di cuándo trabajas', t: { en: 'I work in the morning.', fr: 'Je travaille le matin.', de: 'Ich arbeite am Morgen.', it: 'Lavoro la mattina.', pt: 'Trabalho de manhã.' } },
      { prompt: 'Di qué haces por la noche', t: { en: 'I watch TV at night.', fr: 'Je regarde la télé le soir.', de: 'Abends sehe ich fern.', it: 'Guardo la TV la sera.', pt: 'Vejo TV à noite.' } },
    ],
  },
  {
    id: 'u6',
    title: 'Unidad 6 · En el café',
    icon: '☕',
    canDo: 'Puedo pedir comida y bebida, y pedir la cuenta.',
    tip: 'Ensaya la escena completa como un juego de rol (enfoque comunicativo): saludar, pedir, pagar y despedirte. El idioma se fija cuando lo USAS en una situación real.',
    chunks: [
      { es: 'Un café, por favor.', t: { en: 'A coffee, please.', fr: "Un café, s'il vous plaît.", de: 'Einen Kaffee, bitte.', it: 'Un caffè, per favore.', pt: 'Um café, por favor.' } },
      { es: '¿Algo más?', t: { en: 'Anything else?', fr: 'Autre chose ?', de: 'Sonst noch etwas?', it: 'Altro?', pt: 'Mais alguma coisa?' } },
      { es: 'La cuenta, por favor.', t: { en: 'The bill, please.', fr: "L'addition, s'il vous plaît.", de: 'Die Rechnung, bitte.', it: 'Il conto, per favore.', pt: 'A conta, por favor.' } },
      { es: 'Está muy rico.', t: { en: "It's delicious.", fr: "C'est délicieux.", de: 'Das schmeckt sehr gut.', it: 'È buonissimo.', pt: 'Está delicioso.' } },
    ],
    dialogue: [
      { who: 'A', es: 'Buenas tardes. Un café, por favor.', t: { en: 'Good afternoon. A coffee, please.', fr: "Bonjour. Un café, s'il vous plaît.", de: 'Guten Tag. Einen Kaffee, bitte.', it: 'Buon pomeriggio. Un caffè, per favore.', pt: 'Boa tarde. Um café, por favor.' } },
      { who: 'B', es: 'Claro. ¿Algo más?', t: { en: 'Sure. Anything else?', fr: 'Bien sûr. Autre chose ?', de: 'Gerne. Sonst noch etwas?', it: 'Certo. Altro?', pt: 'Claro. Mais alguma coisa?' } },
      { who: 'A', es: 'Sí, pan con queso. Gracias.', t: { en: 'Yes, bread with cheese. Thank you.', fr: 'Oui, du pain avec du fromage. Merci.', de: 'Ja, Brot mit Käse. Danke.', it: 'Sì, pane con formaggio. Grazie.', pt: 'Sim, pão com queijo. Obrigado.' } },
      { who: 'A', es: '¡Está muy rico! La cuenta, por favor.', t: { en: "It's delicious! The bill, please.", fr: "C'est délicieux ! L'addition, s'il vous plaît.", de: 'Das schmeckt sehr gut! Die Rechnung, bitte.', it: 'È buonissimo! Il conto, per favore.', pt: 'Está delicioso! A conta, por favor.' } },
    ],
    practice: [
      { prompt: 'Pide un café', t: { en: 'A coffee, please.', fr: "Un café, s'il vous plaît.", de: 'Einen Kaffee, bitte.', it: 'Un caffè, per favore.', pt: 'Um café, por favor.' } },
      { prompt: 'Pide la cuenta', t: { en: 'The bill, please.', fr: "L'addition, s'il vous plaît.", de: 'Die Rechnung, bitte.', it: 'Il conto, per favore.', pt: 'A conta, por favor.' } },
      { prompt: 'Di que la comida está rica', t: { en: "It's delicious.", fr: "C'est délicieux.", de: 'Das schmeckt sehr gut.', it: 'È buonissimo.', pt: 'Está delicioso.' } },
    ],
  },
]
