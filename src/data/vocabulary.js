// Vocabulario organizado por categorías.
// Cada elemento tiene:
//   es : la palabra/frase en español (idioma base del estudiante)
//   t  : traducciones por idioma -> { w: palabra, p: pronunciación (opcional) }
// La pronunciación se incluye para alfabetos no latinos (transcripción aproximada).

export const categories = [
  {
    id: 'saludos',
    level: 'A1',
    name: 'Saludos y cortesía',
    icon: '👋',
    items: [
      { es: 'Hola', t: {
        en: { w: 'Hello' }, fr: { w: 'Bonjour' }, de: { w: 'Hallo' }, nl: { w: 'Hallo' }, sv: { w: 'Hej' }, no: { w: 'Hei' }, da: { w: 'Hej' }, it: { w: 'Ciao' }, pt: { w: 'Olá' }, ca: { w: 'Hola' }, ro: { w: 'Bună' },
        ru: { w: 'Привет', p: 'privet' }, uk: { w: 'Привіт', p: 'pryvit' }, pl: { w: 'Cześć' }, el: { w: 'Γεια', p: 'ya' }, tr: { w: 'Merhaba' }, ja: { w: 'こんにちは', p: 'konnichiwa' }, zh: { w: '你好', p: 'nǐ hǎo' }, ko: { w: '안녕하세요', p: 'annyeonghaseyo' }, hi: { w: 'नमस्ते', p: 'namaste' }, ar: { w: 'مرحبا', p: 'marhaban' }, he: { w: 'שלום', p: 'shalom' } } },
      { es: 'Adiós', t: {
        en: { w: 'Goodbye' }, fr: { w: 'Au revoir' }, de: { w: 'Auf Wiedersehen' }, nl: { w: 'Tot ziens' }, sv: { w: 'Hej då' }, no: { w: 'Ha det' }, da: { w: 'Farvel' }, it: { w: 'Arrivederci' }, pt: { w: 'Adeus' }, ca: { w: 'Adéu' }, ro: { w: 'La revedere' },
        ru: { w: 'До свидания', p: 'do svidaniya' }, uk: { w: 'До побачення', p: 'do pobachennya' }, pl: { w: 'Do widzenia' }, el: { w: 'Αντίο', p: 'adío' }, tr: { w: 'Hoşça kal' }, ja: { w: 'さようなら', p: 'sayōnara' }, zh: { w: '再见', p: 'zàijiàn' }, ko: { w: '안녕히 가세요', p: 'annyeonghi gaseyo' }, hi: { w: 'अलविदा', p: 'alvida' }, ar: { w: 'وداعا', p: 'wadaʿan' }, he: { w: 'להתראות', p: "lehitra'ot" } } },
      { es: 'Buenos días', t: {
        en: { w: 'Good morning' }, fr: { w: 'Bonjour' }, de: { w: 'Guten Morgen' }, nl: { w: 'Goedemorgen' }, sv: { w: 'God morgon' }, no: { w: 'God morgen' }, da: { w: 'God morgen' }, it: { w: 'Buongiorno' }, pt: { w: 'Bom dia' }, ca: { w: 'Bon dia' }, ro: { w: 'Bună dimineața' },
        ru: { w: 'Доброе утро', p: 'dobroye utro' }, uk: { w: 'Доброго ранку', p: 'dobroho ranku' }, pl: { w: 'Dzień dobry' }, el: { w: 'Καλημέρα', p: 'kaliméra' }, tr: { w: 'Günaydın' }, ja: { w: 'おはよう', p: 'ohayō' }, zh: { w: '早上好', p: 'zǎoshang hǎo' }, ko: { w: '좋은 아침', p: 'joeun achim' }, hi: { w: 'सुप्रभात', p: 'suprabhat' }, ar: { w: 'صباح الخير', p: 'sabah al-khayr' }, he: { w: 'בוקר טוב', p: 'boker tov' } } },
      { es: 'Buenas noches', t: {
        en: { w: 'Good night' }, fr: { w: 'Bonne nuit' }, de: { w: 'Gute Nacht' }, nl: { w: 'Goedenacht' }, sv: { w: 'God natt' }, no: { w: 'God natt' }, da: { w: 'God nat' }, it: { w: 'Buonanotte' }, pt: { w: 'Boa noite' }, ca: { w: 'Bona nit' }, ro: { w: 'Noapte bună' },
        ru: { w: 'Спокойной ночи', p: 'spokoynoy nochi' }, uk: { w: 'Надобраніч', p: 'nadobranich' }, pl: { w: 'Dobranoc' }, el: { w: 'Καληνύχτα', p: 'kaliníkta' }, tr: { w: 'İyi geceler' }, ja: { w: 'おやすみ', p: 'oyasumi' }, zh: { w: '晚安', p: "wǎn'ān" }, ko: { w: '안녕히 주무세요', p: 'annyeonghi jumuseyo' }, hi: { w: 'शुभ रात्रि', p: 'shubh ratri' }, ar: { w: 'تصبح على خير', p: 'tusbih ʿala khayr' }, he: { w: 'לילה טוב', p: 'laila tov' } } },
      { es: 'Por favor', t: {
        en: { w: 'Please' }, fr: { w: "S'il vous plaît" }, de: { w: 'Bitte' }, nl: { w: 'Alstublieft' }, sv: { w: 'Snälla' }, no: { w: 'Vær så snill' }, da: { w: 'Vær venlig' }, it: { w: 'Per favore' }, pt: { w: 'Por favor' }, ca: { w: 'Si us plau' }, ro: { w: 'Te rog' },
        ru: { w: 'Пожалуйста', p: 'pozhaluysta' }, uk: { w: 'Будь ласка', p: "bud' laska" }, pl: { w: 'Proszę' }, el: { w: 'Παρακαλώ', p: 'parakaló' }, tr: { w: 'Lütfen' }, ja: { w: 'お願いします', p: 'onegaishimasu' }, zh: { w: '请', p: 'qǐng' }, ko: { w: '부탁합니다', p: 'butakhamnida' }, hi: { w: 'कृपया', p: 'kripya' }, ar: { w: 'من فضلك', p: 'min fadlik' }, he: { w: 'בבקשה', p: 'bevakasha' } } },
      { es: 'Gracias', t: {
        en: { w: 'Thank you' }, fr: { w: 'Merci' }, de: { w: 'Danke' }, nl: { w: 'Dank je' }, sv: { w: 'Tack' }, no: { w: 'Takk' }, da: { w: 'Tak' }, it: { w: 'Grazie' }, pt: { w: 'Obrigado' }, ca: { w: 'Gràcies' }, ro: { w: 'Mulțumesc' },
        ru: { w: 'Спасибо', p: 'spasibo' }, uk: { w: 'Дякую', p: 'dyakuyu' }, pl: { w: 'Dziękuję' }, el: { w: 'Ευχαριστώ', p: 'efcharistó' }, tr: { w: 'Teşekkürler' }, ja: { w: 'ありがとう', p: 'arigatō' }, zh: { w: '谢谢', p: 'xièxie' }, ko: { w: '감사합니다', p: 'gamsahamnida' }, hi: { w: 'धन्यवाद', p: 'dhanyavaad' }, ar: { w: 'شكرا', p: 'shukran' }, he: { w: 'תודה', p: 'toda' } } },
      { es: 'De nada', t: {
        en: { w: "You're welcome" }, fr: { w: 'De rien' }, de: { w: 'Bitte schön' }, nl: { w: 'Graag gedaan' }, sv: { w: 'Varsågod' }, no: { w: 'Vær så god' }, da: { w: 'Selv tak' }, it: { w: 'Prego' }, pt: { w: 'De nada' }, ca: { w: 'De res' }, ro: { w: 'Cu plăcere' },
        ru: { w: 'Пожалуйста', p: 'pozhaluysta' }, uk: { w: 'Будь ласка', p: "bud' laska" }, pl: { w: 'Nie ma za co' }, el: { w: 'Παρακαλώ', p: 'parakaló' }, tr: { w: 'Rica ederim' }, ja: { w: 'どういたしまして', p: 'dōitashimashite' }, zh: { w: '不客气', p: 'bú kèqi' }, ko: { w: '천만에요', p: 'cheonmaneyo' }, hi: { w: 'कोई बात नहीं', p: 'koi baat nahi' }, ar: { w: 'عفوا', p: 'ʿafwan' }, he: { w: 'בבקשה', p: 'bevakasha' } } },
      { es: 'Sí', t: {
        en: { w: 'Yes' }, fr: { w: 'Oui' }, de: { w: 'Ja' }, nl: { w: 'Ja' }, sv: { w: 'Ja' }, no: { w: 'Ja' }, da: { w: 'Ja' }, it: { w: 'Sì' }, pt: { w: 'Sim' }, ca: { w: 'Sí' }, ro: { w: 'Da' },
        ru: { w: 'Да', p: 'da' }, uk: { w: 'Так', p: 'tak' }, pl: { w: 'Tak' }, el: { w: 'Ναι', p: 'ne' }, tr: { w: 'Evet' }, ja: { w: 'はい', p: 'hai' }, zh: { w: '是', p: 'shì' }, ko: { w: '네', p: 'ne' }, hi: { w: 'हाँ', p: 'haan' }, ar: { w: 'نعم', p: 'naʿam' }, he: { w: 'כן', p: 'ken' } } },
      { es: 'No', t: {
        en: { w: 'No' }, fr: { w: 'Non' }, de: { w: 'Nein' }, nl: { w: 'Nee' }, sv: { w: 'Nej' }, no: { w: 'Nei' }, da: { w: 'Nej' }, it: { w: 'No' }, pt: { w: 'Não' }, ca: { w: 'No' }, ro: { w: 'Nu' },
        ru: { w: 'Нет', p: 'nyet' }, uk: { w: 'Ні', p: 'ni' }, pl: { w: 'Nie' }, el: { w: 'Όχι', p: 'óchi' }, tr: { w: 'Hayır' }, ja: { w: 'いいえ', p: 'iie' }, zh: { w: '不', p: 'bù' }, ko: { w: '아니요', p: 'aniyo' }, hi: { w: 'नहीं', p: 'nahi' }, ar: { w: 'لا', p: 'la' }, he: { w: 'לא', p: 'lo' } } },
      { es: 'Buenas tardes', t: {
        en: { w: 'Good afternoon' }, fr: { w: 'Bon après-midi' }, de: { w: 'Guten Tag' }, nl: { w: 'Goedemiddag' }, sv: { w: 'God eftermiddag' }, no: { w: 'God ettermiddag' }, da: { w: 'God eftermiddag' }, it: { w: 'Buon pomeriggio' }, pt: { w: 'Boa tarde' }, ca: { w: 'Bona tarda' }, ro: { w: 'Bună ziua' },
        ru: { w: 'Добрый день', p: "dobryy den'" }, uk: { w: 'Добрий день', p: 'dobryy den' }, pl: { w: 'Dzień dobry' }, el: { w: 'Καλό απόγευμα', p: 'kaló apóyevma' }, tr: { w: 'İyi günler' }, ja: { w: 'こんにちは', p: 'konnichiwa' }, zh: { w: '下午好', p: 'xiàwǔ hǎo' }, ko: { w: '안녕하세요', p: 'annyeonghaseyo' }, hi: { w: 'नमस्ते', p: 'namaste' }, ar: { w: 'مساء الخير', p: 'masaʾ al-khayr' }, he: { w: 'צהריים טובים', p: 'tsohorayim tovim' } } },
      { es: 'Perdón / Disculpe', t: {
        en: { w: 'Excuse me' }, fr: { w: 'Pardon' }, de: { w: 'Entschuldigung' }, nl: { w: 'Pardon' }, sv: { w: 'Ursäkta' }, no: { w: 'Unnskyld' }, da: { w: 'Undskyld' }, it: { w: 'Scusa' }, pt: { w: 'Desculpe' }, ca: { w: 'Perdó' }, ro: { w: 'Scuze' },
        ru: { w: 'Извините', p: 'izvinite' }, uk: { w: 'Вибачте', p: 'vybachte' }, pl: { w: 'Przepraszam' }, el: { w: 'Συγγνώμη', p: 'signómi' }, tr: { w: 'Affedersiniz' }, ja: { w: 'すみません', p: 'sumimasen' }, zh: { w: '对不起', p: 'duìbuqǐ' }, ko: { w: '실례합니다', p: 'sillyehamnida' }, hi: { w: 'माफ़ कीजिए', p: 'maaf kijiye' }, ar: { w: 'عذرا', p: 'ʿudhran' }, he: { w: 'סליחה', p: 'slicha' } } },
      { es: 'Bienvenido', t: {
        en: { w: 'Welcome' }, fr: { w: 'Bienvenue' }, de: { w: 'Willkommen' }, nl: { w: 'Welkom' }, sv: { w: 'Välkommen' }, no: { w: 'Velkommen' }, da: { w: 'Velkommen' }, it: { w: 'Benvenuto' }, pt: { w: 'Bem-vindo' }, ca: { w: 'Benvingut' }, ro: { w: 'Bun venit' },
        ru: { w: 'Добро пожаловать', p: "dobro pozhalovat'" }, uk: { w: 'Ласкаво просимо', p: 'laskavo prosymo' }, pl: { w: 'Witamy' }, el: { w: 'Καλώς ήρθατε', p: 'kalós írthate' }, tr: { w: 'Hoş geldiniz' }, ja: { w: 'ようこそ', p: 'yōkoso' }, zh: { w: '欢迎', p: 'huānyíng' }, ko: { w: '환영합니다', p: 'hwanyeonghamnida' }, hi: { w: 'स्वागत है', p: 'swagat hai' }, ar: { w: 'أهلا وسهلا', p: 'ahlan wa sahlan' }, he: { w: 'ברוך הבא', p: 'baruch haba' } } },
    ],
  },
  {
    id: 'numeros',
    level: 'A1',
    name: 'Números (1-20)',
    icon: '🔢',
    items: [
      { es: 'Uno', t: {
        en: { w: 'One' }, fr: { w: 'Un' }, de: { w: 'Eins' }, nl: { w: 'Een' }, sv: { w: 'Ett' }, no: { w: 'En' }, da: { w: 'En' }, it: { w: 'Uno' }, pt: { w: 'Um' }, ca: { w: 'U' }, ro: { w: 'Unu' },
        ru: { w: 'Один', p: 'odin' }, uk: { w: 'Один', p: 'odyn' }, pl: { w: 'Jeden' }, el: { w: 'Ένα', p: 'éna' }, tr: { w: 'Bir' }, ja: { w: '一', p: 'ichi' }, zh: { w: '一', p: 'yī' }, ko: { w: '하나', p: 'hana' }, hi: { w: 'एक', p: 'ek' }, ar: { w: 'واحد', p: 'wahid' }, he: { w: 'אחד', p: 'echad' } } },
      { es: 'Dos', t: {
        en: { w: 'Two' }, fr: { w: 'Deux' }, de: { w: 'Zwei' }, nl: { w: 'Twee' }, sv: { w: 'Två' }, no: { w: 'To' }, da: { w: 'To' }, it: { w: 'Due' }, pt: { w: 'Dois' }, ca: { w: 'Dos' }, ro: { w: 'Doi' },
        ru: { w: 'Два', p: 'dva' }, uk: { w: 'Два', p: 'dva' }, pl: { w: 'Dwa' }, el: { w: 'Δύο', p: 'dío' }, tr: { w: 'İki' }, ja: { w: '二', p: 'ni' }, zh: { w: '二', p: 'èr' }, ko: { w: '둘', p: 'dul' }, hi: { w: 'दो', p: 'do' }, ar: { w: 'اثنان', p: 'ithnan' }, he: { w: 'שתיים', p: 'shtayim' } } },
      { es: 'Tres', t: {
        en: { w: 'Three' }, fr: { w: 'Trois' }, de: { w: 'Drei' }, nl: { w: 'Drie' }, sv: { w: 'Tre' }, no: { w: 'Tre' }, da: { w: 'Tre' }, it: { w: 'Tre' }, pt: { w: 'Três' }, ca: { w: 'Tres' }, ro: { w: 'Trei' },
        ru: { w: 'Три', p: 'tri' }, uk: { w: 'Три', p: 'try' }, pl: { w: 'Trzy' }, el: { w: 'Τρία', p: 'tría' }, tr: { w: 'Üç' }, ja: { w: '三', p: 'san' }, zh: { w: '三', p: 'sān' }, ko: { w: '셋', p: 'set' }, hi: { w: 'तीन', p: 'teen' }, ar: { w: 'ثلاثة', p: 'thalatha' }, he: { w: 'שלוש', p: 'shalosh' } } },
      { es: 'Cuatro', t: {
        en: { w: 'Four' }, fr: { w: 'Quatre' }, de: { w: 'Vier' }, nl: { w: 'Vier' }, sv: { w: 'Fyra' }, no: { w: 'Fire' }, da: { w: 'Fire' }, it: { w: 'Quattro' }, pt: { w: 'Quatro' }, ca: { w: 'Quatre' }, ro: { w: 'Patru' },
        ru: { w: 'Четыре', p: 'chetyre' }, uk: { w: 'Чотири', p: 'chotyry' }, pl: { w: 'Cztery' }, el: { w: 'Τέσσερα', p: 'téssera' }, tr: { w: 'Dört' }, ja: { w: '四', p: 'yon' }, zh: { w: '四', p: 'sì' }, ko: { w: '넷', p: 'net' }, hi: { w: 'चार', p: 'chaar' }, ar: { w: 'أربعة', p: 'arbaʿa' }, he: { w: 'ארבע', p: 'arba' } } },
      { es: 'Cinco', t: {
        en: { w: 'Five' }, fr: { w: 'Cinq' }, de: { w: 'Fünf' }, nl: { w: 'Vijf' }, sv: { w: 'Fem' }, no: { w: 'Fem' }, da: { w: 'Fem' }, it: { w: 'Cinque' }, pt: { w: 'Cinco' }, ca: { w: 'Cinc' }, ro: { w: 'Cinci' },
        ru: { w: 'Пять', p: "pyat'" }, uk: { w: "П'ять", p: "pyat'" }, pl: { w: 'Pięć' }, el: { w: 'Πέντε', p: 'pénte' }, tr: { w: 'Beş' }, ja: { w: '五', p: 'go' }, zh: { w: '五', p: 'wǔ' }, ko: { w: '다섯', p: 'daseot' }, hi: { w: 'पाँच', p: 'paanch' }, ar: { w: 'خمسة', p: 'khamsa' }, he: { w: 'חמש', p: 'chamesh' } } },
      { es: 'Seis', t: {
        en: { w: 'Six' }, fr: { w: 'Six' }, de: { w: 'Sechs' }, nl: { w: 'Zes' }, sv: { w: 'Sex' }, no: { w: 'Seks' }, da: { w: 'Seks' }, it: { w: 'Sei' }, pt: { w: 'Seis' }, ca: { w: 'Sis' }, ro: { w: 'Șase' },
        ru: { w: 'Шесть', p: "shest'" }, uk: { w: 'Шість', p: "shist'" }, pl: { w: 'Sześć' }, el: { w: 'Έξι', p: 'éxi' }, tr: { w: 'Altı' }, ja: { w: '六', p: 'roku' }, zh: { w: '六', p: 'liù' }, ko: { w: '여섯', p: 'yeoseot' }, hi: { w: 'छह', p: 'chhah' }, ar: { w: 'ستة', p: 'sitta' }, he: { w: 'שש', p: 'shesh' } } },
      { es: 'Siete', t: {
        en: { w: 'Seven' }, fr: { w: 'Sept' }, de: { w: 'Sieben' }, nl: { w: 'Zeven' }, sv: { w: 'Sju' }, no: { w: 'Sju' }, da: { w: 'Syv' }, it: { w: 'Sette' }, pt: { w: 'Sete' }, ca: { w: 'Set' }, ro: { w: 'Șapte' },
        ru: { w: 'Семь', p: "sem'" }, uk: { w: 'Сім', p: 'sim' }, pl: { w: 'Siedem' }, el: { w: 'Επτά', p: 'eptá' }, tr: { w: 'Yedi' }, ja: { w: '七', p: 'nana' }, zh: { w: '七', p: 'qī' }, ko: { w: '일곱', p: 'ilgop' }, hi: { w: 'सात', p: 'saat' }, ar: { w: 'سبعة', p: 'sabʿa' }, he: { w: 'שבע', p: 'sheva' } } },
      { es: 'Ocho', t: {
        en: { w: 'Eight' }, fr: { w: 'Huit' }, de: { w: 'Acht' }, nl: { w: 'Acht' }, sv: { w: 'Åtta' }, no: { w: 'Åtte' }, da: { w: 'Otte' }, it: { w: 'Otto' }, pt: { w: 'Oito' }, ca: { w: 'Vuit' }, ro: { w: 'Opt' },
        ru: { w: 'Восемь', p: "vosem'" }, uk: { w: 'Вісім', p: 'visim' }, pl: { w: 'Osiem' }, el: { w: 'Οκτώ', p: 'októ' }, tr: { w: 'Sekiz' }, ja: { w: '八', p: 'hachi' }, zh: { w: '八', p: 'bā' }, ko: { w: '여덟', p: 'yeodeol' }, hi: { w: 'आठ', p: 'aath' }, ar: { w: 'ثمانية', p: 'thamaniya' }, he: { w: 'שמונה', p: 'shmone' } } },
      { es: 'Nueve', t: {
        en: { w: 'Nine' }, fr: { w: 'Neuf' }, de: { w: 'Neun' }, nl: { w: 'Negen' }, sv: { w: 'Nio' }, no: { w: 'Ni' }, da: { w: 'Ni' }, it: { w: 'Nove' }, pt: { w: 'Nove' }, ca: { w: 'Nou' }, ro: { w: 'Nouă' },
        ru: { w: 'Девять', p: "devyat'" }, uk: { w: "Дев'ять", p: "devyat'" }, pl: { w: 'Dziewięć' }, el: { w: 'Εννέα', p: 'ennéa' }, tr: { w: 'Dokuz' }, ja: { w: '九', p: 'kyū' }, zh: { w: '九', p: 'jiǔ' }, ko: { w: '아홉', p: 'ahop' }, hi: { w: 'नौ', p: 'nau' }, ar: { w: 'تسعة', p: 'tisʿa' }, he: { w: 'תשע', p: 'tesha' } } },
      { es: 'Diez', t: {
        en: { w: 'Ten' }, fr: { w: 'Dix' }, de: { w: 'Zehn' }, nl: { w: 'Tien' }, sv: { w: 'Tio' }, no: { w: 'Ti' }, da: { w: 'Ti' }, it: { w: 'Dieci' }, pt: { w: 'Dez' }, ca: { w: 'Deu' }, ro: { w: 'Zece' },
        ru: { w: 'Десять', p: "desyat'" }, uk: { w: 'Десять', p: "desyat'" }, pl: { w: 'Dziesięć' }, el: { w: 'Δέκα', p: 'déka' }, tr: { w: 'On' }, ja: { w: '十', p: 'jū' }, zh: { w: '十', p: 'shí' }, ko: { w: '열', p: 'yeol' }, hi: { w: 'दस', p: 'das' }, ar: { w: 'عشرة', p: 'ʿashara' }, he: { w: 'עשר', p: 'eser' } } },
      { es: 'Once', t: {
        en: { w: 'Eleven' }, fr: { w: 'Onze' }, de: { w: 'Elf' }, nl: { w: 'Elf' }, sv: { w: 'Elva' }, no: { w: 'Elleve' }, da: { w: 'Elleve' }, it: { w: 'Undici' }, pt: { w: 'Onze' }, ca: { w: 'Onze' }, ro: { w: 'Unsprezece' },
        ru: { w: 'Одиннадцать', p: "odinnadtsat'" }, uk: { w: 'Одинадцять', p: "odynadtsyat'" }, pl: { w: 'Jedenaście' }, el: { w: 'Έντεκα', p: 'énteka' }, tr: { w: 'On bir' }, ja: { w: '十一', p: 'jūichi' }, zh: { w: '十一', p: 'shíyī' }, ko: { w: '십일', p: 'sibil' }, hi: { w: 'ग्यारह', p: 'gyarah' }, ar: { w: 'أحد عشر', p: 'ahada ashar' }, he: { w: 'אחד עשר', p: 'achad asar' } } },
      { es: 'Doce', t: {
        en: { w: 'Twelve' }, fr: { w: 'Douze' }, de: { w: 'Zwölf' }, nl: { w: 'Twaalf' }, sv: { w: 'Tolv' }, no: { w: 'Tolv' }, da: { w: 'Tolv' }, it: { w: 'Dodici' }, pt: { w: 'Doze' }, ca: { w: 'Dotze' }, ro: { w: 'Doisprezece' },
        ru: { w: 'Двенадцать', p: "dvenadtsat'" }, uk: { w: 'Дванадцять', p: "dvanadtsyat'" }, pl: { w: 'Dwanaście' }, el: { w: 'Δώδεκα', p: 'dódeka' }, tr: { w: 'On iki' }, ja: { w: '十二', p: 'jūni' }, zh: { w: '十二', p: "shí'èr" }, ko: { w: '십이', p: 'sibi' }, hi: { w: 'बारह', p: 'barah' }, ar: { w: 'اثنا عشر', p: 'ithna ashar' }, he: { w: 'שנים עשר', p: 'shneim asar' } } },
      { es: 'Trece', t: {
        en: { w: 'Thirteen' }, fr: { w: 'Treize' }, de: { w: 'Dreizehn' }, nl: { w: 'Dertien' }, sv: { w: 'Tretton' }, no: { w: 'Tretten' }, da: { w: 'Tretten' }, it: { w: 'Tredici' }, pt: { w: 'Treze' }, ca: { w: 'Tretze' }, ro: { w: 'Treisprezece' },
        ru: { w: 'Тринадцать', p: "trinadtsat'" }, uk: { w: 'Тринадцять', p: "trynadtsyat'" }, pl: { w: 'Trzynaście' }, el: { w: 'Δεκατρία', p: 'dekatría' }, tr: { w: 'On üç' }, ja: { w: '十三', p: 'jūsan' }, zh: { w: '十三', p: 'shísān' }, ko: { w: '십삼', p: 'sipsam' }, hi: { w: 'तेरह', p: 'terah' }, ar: { w: 'ثلاثة عشر', p: 'thalathata ashar' }, he: { w: 'שלושה עשר', p: 'shlosha asar' } } },
      { es: 'Catorce', t: {
        en: { w: 'Fourteen' }, fr: { w: 'Quatorze' }, de: { w: 'Vierzehn' }, nl: { w: 'Veertien' }, sv: { w: 'Fjorton' }, no: { w: 'Fjorten' }, da: { w: 'Fjorten' }, it: { w: 'Quattordici' }, pt: { w: 'Catorze' }, ca: { w: 'Catorze' }, ro: { w: 'Paisprezece' },
        ru: { w: 'Четырнадцать', p: "chetyrnadtsat'" }, uk: { w: 'Чотирнадцять', p: "chotyrnadtsyat'" }, pl: { w: 'Czternaście' }, el: { w: 'Δεκατέσσερα', p: 'dekatéssera' }, tr: { w: 'On dört' }, ja: { w: '十四', p: 'jūyon' }, zh: { w: '十四', p: 'shísì' }, ko: { w: '십사', p: 'sipsa' }, hi: { w: 'चौदह', p: 'chaudah' }, ar: { w: 'أربعة عشر', p: 'arbaʿata ashar' }, he: { w: 'ארבעה עשר', p: "arba'a asar" } } },
      { es: 'Quince', t: {
        en: { w: 'Fifteen' }, fr: { w: 'Quinze' }, de: { w: 'Fünfzehn' }, nl: { w: 'Vijftien' }, sv: { w: 'Femton' }, no: { w: 'Femten' }, da: { w: 'Femten' }, it: { w: 'Quindici' }, pt: { w: 'Quinze' }, ca: { w: 'Quinze' }, ro: { w: 'Cincisprezece' },
        ru: { w: 'Пятнадцать', p: "pyatnadtsat'" }, uk: { w: "П'ятнадцять", p: "pyatnadtsyat'" }, pl: { w: 'Piętnaście' }, el: { w: 'Δεκαπέντε', p: 'dekapénte' }, tr: { w: 'On beş' }, ja: { w: '十五', p: 'jūgo' }, zh: { w: '十五', p: 'shíwǔ' }, ko: { w: '십오', p: 'sibo' }, hi: { w: 'पंद्रह', p: 'pandrah' }, ar: { w: 'خمسة عشر', p: 'khamsata ashar' }, he: { w: 'חמישה עשר', p: 'chamisha asar' } } },
      { es: 'Dieciséis', t: {
        en: { w: 'Sixteen' }, fr: { w: 'Seize' }, de: { w: 'Sechzehn' }, nl: { w: 'Zestien' }, sv: { w: 'Sexton' }, no: { w: 'Seksten' }, da: { w: 'Seksten' }, it: { w: 'Sedici' }, pt: { w: 'Dezasseis' }, ca: { w: 'Setze' }, ro: { w: 'Șaisprezece' },
        ru: { w: 'Шестнадцать', p: "shestnadtsat'" }, uk: { w: 'Шістнадцять', p: "shistnadtsyat'" }, pl: { w: 'Szesnaście' }, el: { w: 'Δεκαέξι', p: 'dekaéxi' }, tr: { w: 'On altı' }, ja: { w: '十六', p: 'jūroku' }, zh: { w: '十六', p: 'shíliù' }, ko: { w: '십육', p: 'simnyuk' }, hi: { w: 'सोलह', p: 'solah' }, ar: { w: 'ستة عشر', p: 'sittata ashar' }, he: { w: 'שישה עשר', p: 'shisha asar' } } },
      { es: 'Diecisiete', t: {
        en: { w: 'Seventeen' }, fr: { w: 'Dix-sept' }, de: { w: 'Siebzehn' }, nl: { w: 'Zeventien' }, sv: { w: 'Sjutton' }, no: { w: 'Sytten' }, da: { w: 'Sytten' }, it: { w: 'Diciassette' }, pt: { w: 'Dezassete' }, ca: { w: 'Disset' }, ro: { w: 'Șaptesprezece' },
        ru: { w: 'Семнадцать', p: "semnadtsat'" }, uk: { w: 'Сімнадцять', p: "simnadtsyat'" }, pl: { w: 'Siedemnaście' }, el: { w: 'Δεκαεπτά', p: 'dekaeptá' }, tr: { w: 'On yedi' }, ja: { w: '十七', p: 'jūnana' }, zh: { w: '十七', p: 'shíqī' }, ko: { w: '십칠', p: 'sipchil' }, hi: { w: 'सत्रह', p: 'satrah' }, ar: { w: 'سبعة عشر', p: 'sabʿata ashar' }, he: { w: 'שבעה עשר', p: "shiv'a asar" } } },
      { es: 'Dieciocho', t: {
        en: { w: 'Eighteen' }, fr: { w: 'Dix-huit' }, de: { w: 'Achtzehn' }, nl: { w: 'Achttien' }, sv: { w: 'Arton' }, no: { w: 'Atten' }, da: { w: 'Atten' }, it: { w: 'Diciotto' }, pt: { w: 'Dezoito' }, ca: { w: 'Divuit' }, ro: { w: 'Optsprezece' },
        ru: { w: 'Восемнадцать', p: "vosemnadtsat'" }, uk: { w: 'Вісімнадцять', p: "visimnadtsyat'" }, pl: { w: 'Osiemnaście' }, el: { w: 'Δεκαοκτώ', p: 'dekaoktó' }, tr: { w: 'On sekiz' }, ja: { w: '十八', p: 'jūhachi' }, zh: { w: '十八', p: 'shíbā' }, ko: { w: '십팔', p: 'sippal' }, hi: { w: 'अठारह', p: 'atharah' }, ar: { w: 'ثمانية عشر', p: 'thamaniyata ashar' }, he: { w: 'שמונה עשר', p: 'shmona asar' } } },
      { es: 'Diecinueve', t: {
        en: { w: 'Nineteen' }, fr: { w: 'Dix-neuf' }, de: { w: 'Neunzehn' }, nl: { w: 'Negentien' }, sv: { w: 'Nitton' }, no: { w: 'Nitten' }, da: { w: 'Nitten' }, it: { w: 'Diciannove' }, pt: { w: 'Dezanove' }, ca: { w: 'Dinou' }, ro: { w: 'Nouăsprezece' },
        ru: { w: 'Девятнадцать', p: "devyatnadtsat'" }, uk: { w: "Дев'ятнадцять", p: "devyatnadtsyat'" }, pl: { w: 'Dziewiętnaście' }, el: { w: 'Δεκαεννέα', p: 'dekaennéa' }, tr: { w: 'On dokuz' }, ja: { w: '十九', p: 'jūkyū' }, zh: { w: '十九', p: 'shíjiǔ' }, ko: { w: '십구', p: 'sipgu' }, hi: { w: 'उन्नीस', p: 'unnees' }, ar: { w: 'تسعة عشر', p: 'tisʿata ashar' }, he: { w: 'תשעה עשר', p: "tish'a asar" } } },
      { es: 'Veinte', t: {
        en: { w: 'Twenty' }, fr: { w: 'Vingt' }, de: { w: 'Zwanzig' }, nl: { w: 'Twintig' }, sv: { w: 'Tjugo' }, no: { w: 'Tjue' }, da: { w: 'Tyve' }, it: { w: 'Venti' }, pt: { w: 'Vinte' }, ca: { w: 'Vint' }, ro: { w: 'Douăzeci' },
        ru: { w: 'Двадцать', p: "dvadtsat'" }, uk: { w: 'Двадцять', p: "dvadtsyat'" }, pl: { w: 'Dwadzieścia' }, el: { w: 'Είκοσι', p: 'íkosi' }, tr: { w: 'Yirmi' }, ja: { w: '二十', p: 'nijū' }, zh: { w: '二十', p: 'èrshí' }, ko: { w: '이십', p: 'isip' }, hi: { w: 'बीस', p: 'bees' }, ar: { w: 'عشرون', p: 'ishrun' }, he: { w: 'עשרים', p: 'esrim' } } },
    ],
  },
  {
    id: 'colores',
    level: 'A1',
    name: 'Colores',
    icon: '🎨',
    items: [
      { es: 'Rojo', t: {
        en: { w: 'Red' }, fr: { w: 'Rouge' }, de: { w: 'Rot' }, nl: { w: 'Rood' }, sv: { w: 'Röd' }, no: { w: 'Rød' }, da: { w: 'Rød' }, it: { w: 'Rosso' }, pt: { w: 'Vermelho' }, ca: { w: 'Vermell' }, ro: { w: 'Roșu' },
        ru: { w: 'Красный', p: 'krasnyy' }, uk: { w: 'Червоний', p: 'chervonyy' }, pl: { w: 'Czerwony' }, el: { w: 'Κόκκινο', p: 'kókkino' }, tr: { w: 'Kırmızı' }, ja: { w: '赤', p: 'aka' }, zh: { w: '红色', p: 'hóngsè' }, ko: { w: '빨강', p: 'ppalgang' }, hi: { w: 'लाल', p: 'laal' }, ar: { w: 'أحمر', p: 'ahmar' }, he: { w: 'אדום', p: 'adom' } } },
      { es: 'Azul', t: {
        en: { w: 'Blue' }, fr: { w: 'Bleu' }, de: { w: 'Blau' }, nl: { w: 'Blauw' }, sv: { w: 'Blå' }, no: { w: 'Blå' }, da: { w: 'Blå' }, it: { w: 'Blu' }, pt: { w: 'Azul' }, ca: { w: 'Blau' }, ro: { w: 'Albastru' },
        ru: { w: 'Синий', p: 'siniy' }, uk: { w: 'Синій', p: 'syniy' }, pl: { w: 'Niebieski' }, el: { w: 'Μπλε', p: 'ble' }, tr: { w: 'Mavi' }, ja: { w: '青', p: 'ao' }, zh: { w: '蓝色', p: 'lánsè' }, ko: { w: '파랑', p: 'parang' }, hi: { w: 'नीला', p: 'neela' }, ar: { w: 'أزرق', p: 'azraq' }, he: { w: 'כחול', p: 'kachol' } } },
      { es: 'Verde', t: {
        en: { w: 'Green' }, fr: { w: 'Vert' }, de: { w: 'Grün' }, nl: { w: 'Groen' }, sv: { w: 'Grön' }, no: { w: 'Grønn' }, da: { w: 'Grøn' }, it: { w: 'Verde' }, pt: { w: 'Verde' }, ca: { w: 'Verd' }, ro: { w: 'Verde' },
        ru: { w: 'Зелёный', p: 'zelyonyy' }, uk: { w: 'Зелений', p: 'zelenyy' }, pl: { w: 'Zielony' }, el: { w: 'Πράσινο', p: 'prásino' }, tr: { w: 'Yeşil' }, ja: { w: '緑', p: 'midori' }, zh: { w: '绿色', p: 'lǜsè' }, ko: { w: '초록', p: 'chorok' }, hi: { w: 'हरा', p: 'hara' }, ar: { w: 'أخضر', p: 'akhdar' }, he: { w: 'ירוק', p: 'yarok' } } },
      { es: 'Amarillo', t: {
        en: { w: 'Yellow' }, fr: { w: 'Jaune' }, de: { w: 'Gelb' }, nl: { w: 'Geel' }, sv: { w: 'Gul' }, no: { w: 'Gul' }, da: { w: 'Gul' }, it: { w: 'Giallo' }, pt: { w: 'Amarelo' }, ca: { w: 'Groc' }, ro: { w: 'Galben' },
        ru: { w: 'Жёлтый', p: 'zhyoltyy' }, uk: { w: 'Жовтий', p: 'zhovtyy' }, pl: { w: 'Żółty' }, el: { w: 'Κίτρινο', p: 'kítrino' }, tr: { w: 'Sarı' }, ja: { w: '黄色', p: 'kiiro' }, zh: { w: '黄色', p: 'huángsè' }, ko: { w: '노랑', p: 'norang' }, hi: { w: 'पीला', p: 'peela' }, ar: { w: 'أصفر', p: 'asfar' }, he: { w: 'צהוב', p: 'tsahov' } } },
      { es: 'Negro', t: {
        en: { w: 'Black' }, fr: { w: 'Noir' }, de: { w: 'Schwarz' }, nl: { w: 'Zwart' }, sv: { w: 'Svart' }, no: { w: 'Svart' }, da: { w: 'Sort' }, it: { w: 'Nero' }, pt: { w: 'Preto' }, ca: { w: 'Negre' }, ro: { w: 'Negru' },
        ru: { w: 'Чёрный', p: 'chyornyy' }, uk: { w: 'Чорний', p: 'chornyy' }, pl: { w: 'Czarny' }, el: { w: 'Μαύρο', p: 'mávro' }, tr: { w: 'Siyah' }, ja: { w: '黒', p: 'kuro' }, zh: { w: '黑色', p: 'hēisè' }, ko: { w: '검정', p: 'geomjeong' }, hi: { w: 'काला', p: 'kaala' }, ar: { w: 'أسود', p: 'aswad' }, he: { w: 'שחור', p: 'shachor' } } },
      { es: 'Blanco', t: {
        en: { w: 'White' }, fr: { w: 'Blanc' }, de: { w: 'Weiß' }, nl: { w: 'Wit' }, sv: { w: 'Vit' }, no: { w: 'Hvit' }, da: { w: 'Hvid' }, it: { w: 'Bianco' }, pt: { w: 'Branco' }, ca: { w: 'Blanc' }, ro: { w: 'Alb' },
        ru: { w: 'Белый', p: 'belyy' }, uk: { w: 'Білий', p: 'bilyy' }, pl: { w: 'Biały' }, el: { w: 'Άσπρο', p: 'áspro' }, tr: { w: 'Beyaz' }, ja: { w: '白', p: 'shiro' }, zh: { w: '白色', p: 'báisè' }, ko: { w: '하양', p: 'hayang' }, hi: { w: 'सफ़ेद', p: 'safed' }, ar: { w: 'أبيض', p: 'abyad' }, he: { w: 'לבן', p: 'lavan' } } },
      { es: 'Naranja', t: {
        en: { w: 'Orange' }, fr: { w: 'Orange' }, de: { w: 'Orange' }, nl: { w: 'Oranje' }, sv: { w: 'Orange' }, no: { w: 'Oransje' }, da: { w: 'Orange' }, it: { w: 'Arancione' }, pt: { w: 'Laranja' }, ca: { w: 'Taronja' }, ro: { w: 'Portocaliu' },
        ru: { w: 'Оранжевый', p: 'oranzhevyy' }, uk: { w: 'Помаранчевий', p: 'pomaranchevyy' }, pl: { w: 'Pomarańczowy' }, el: { w: 'Πορτοκαλί', p: 'portokalí' }, tr: { w: 'Turuncu' }, ja: { w: 'オレンジ', p: 'orenji' }, zh: { w: '橙色', p: 'chéngsè' }, ko: { w: '주황', p: 'juhwang' }, hi: { w: 'नारंगी', p: 'narangi' }, ar: { w: 'برتقالي', p: 'burtuqali' }, he: { w: 'כתום', p: 'katom' } } },
      { es: 'Rosa', t: {
        en: { w: 'Pink' }, fr: { w: 'Rose' }, de: { w: 'Rosa' }, nl: { w: 'Roze' }, sv: { w: 'Rosa' }, no: { w: 'Rosa' }, da: { w: 'Lyserød' }, it: { w: 'Rosa' }, pt: { w: 'Rosa' }, ca: { w: 'Rosa' }, ro: { w: 'Roz' },
        ru: { w: 'Розовый', p: 'rozovyy' }, uk: { w: 'Рожевий', p: 'rozhevyy' }, pl: { w: 'Różowy' }, el: { w: 'Ροζ', p: 'roz' }, tr: { w: 'Pembe' }, ja: { w: 'ピンク', p: 'pinku' }, zh: { w: '粉色', p: 'fěnsè' }, ko: { w: '분홍', p: 'bunhong' }, hi: { w: 'गुलाबी', p: 'gulabi' }, ar: { w: 'وردي', p: 'wardi' }, he: { w: 'ורוד', p: 'varod' } } },
      { es: 'Gris', t: {
        en: { w: 'Gray' }, fr: { w: 'Gris' }, de: { w: 'Grau' }, nl: { w: 'Grijs' }, sv: { w: 'Grå' }, no: { w: 'Grå' }, da: { w: 'Grå' }, it: { w: 'Grigio' }, pt: { w: 'Cinza' }, ca: { w: 'Gris' }, ro: { w: 'Gri' },
        ru: { w: 'Серый', p: 'seryy' }, uk: { w: 'Сірий', p: 'siryy' }, pl: { w: 'Szary' }, el: { w: 'Γκρι', p: 'gri' }, tr: { w: 'Gri' }, ja: { w: '灰色', p: 'haiiro' }, zh: { w: '灰色', p: 'huīsè' }, ko: { w: '회색', p: 'hoesaek' }, hi: { w: 'स्लेटी', p: 'sleti' }, ar: { w: 'رمادي', p: 'ramadi' }, he: { w: 'אפור', p: 'afor' } } },
      { es: 'Marrón', t: {
        en: { w: 'Brown' }, fr: { w: 'Marron' }, de: { w: 'Braun' }, nl: { w: 'Bruin' }, sv: { w: 'Brun' }, no: { w: 'Brun' }, da: { w: 'Brun' }, it: { w: 'Marrone' }, pt: { w: 'Castanho' }, ca: { w: 'Marró' }, ro: { w: 'Maro' },
        ru: { w: 'Коричневый', p: 'korichnevyy' }, uk: { w: 'Коричневий', p: 'korychnevyy' }, pl: { w: 'Brązowy' }, el: { w: 'Καφέ', p: 'kafé' }, tr: { w: 'Kahverengi' }, ja: { w: '茶色', p: 'chairo' }, zh: { w: '棕色', p: 'zōngsè' }, ko: { w: '갈색', p: 'galsaek' }, hi: { w: 'भूरा', p: 'bhura' }, ar: { w: 'بني', p: 'bunni' }, he: { w: 'חום', p: 'chum' } } },
    ],
  },
  {
    id: 'frases',
    level: 'A1',
    name: 'Frases comunes',
    icon: '💬',
    items: [
      { es: '¿Cómo estás?', t: {
        en: { w: 'How are you?' }, fr: { w: 'Comment ça va ?' }, de: { w: "Wie geht's?" }, nl: { w: 'Hoe gaat het?' }, sv: { w: 'Hur mår du?' }, no: { w: 'Hvordan har du det?' }, da: { w: 'Hvordan har du det?' }, it: { w: 'Come stai?' }, pt: { w: 'Como estás?' }, ca: { w: 'Com estàs?' }, ro: { w: 'Ce mai faci?' },
        ru: { w: 'Как дела?', p: 'kak dela?' }, uk: { w: 'Як справи?', p: 'yak spravy?' }, pl: { w: 'Jak się masz?' }, el: { w: 'Τι κάνεις;', p: 'ti kánis?' }, tr: { w: 'Nasılsın?' }, ja: { w: 'お元気ですか', p: 'ogenki desu ka' }, zh: { w: '你好吗', p: 'nǐ hǎo ma' }, ko: { w: '어떻게 지내세요', p: 'eotteoke jinaeseyo' }, hi: { w: 'आप कैसे हैं', p: 'aap kaise hain' }, ar: { w: 'كيف حالك', p: 'kayfa haluk' }, he: { w: 'מה שלומך', p: 'ma shlomcha' } } },
      { es: 'Me llamo...', t: {
        en: { w: 'My name is...' }, fr: { w: "Je m'appelle..." }, de: { w: 'Ich heiße...' }, nl: { w: 'Ik heet...' }, sv: { w: 'Jag heter...' }, no: { w: 'Jeg heter...' }, da: { w: 'Jeg hedder...' }, it: { w: 'Mi chiamo...' }, pt: { w: 'Eu me chamo...' }, ca: { w: 'Em dic...' }, ro: { w: 'Mă numesc...' },
        ru: { w: 'Меня зовут...', p: 'menya zovut' }, uk: { w: 'Мене звати...', p: 'mene zvaty' }, pl: { w: 'Nazywam się...' }, el: { w: 'Με λένε...', p: 'me léne' }, tr: { w: 'Benim adım...' }, ja: { w: '私の名前は...', p: 'watashi no namae wa' }, zh: { w: '我叫...', p: 'wǒ jiào' }, ko: { w: '제 이름은...', p: 'je ireumeun' }, hi: { w: 'मेरा नाम है...', p: 'mera naam hai' }, ar: { w: '...اسمي', p: 'ismi' }, he: { w: '...קוראים לי', p: 'korim li' } } },
      { es: '¿Cuánto cuesta?', t: {
        en: { w: 'How much is it?' }, fr: { w: 'Combien ça coûte ?' }, de: { w: 'Wie viel kostet das?' }, nl: { w: 'Hoeveel kost het?' }, sv: { w: 'Hur mycket kostar det?' }, no: { w: 'Hvor mye koster det?' }, da: { w: 'Hvor meget koster det?' }, it: { w: 'Quanto costa?' }, pt: { w: 'Quanto custa?' }, ca: { w: 'Quant costa?' }, ro: { w: 'Cât costă?' },
        ru: { w: 'Сколько стоит?', p: "skol'ko stoit?" }, uk: { w: 'Скільки це коштує?', p: "skil'ky tse koshtuye?" }, pl: { w: 'Ile to kosztuje?' }, el: { w: 'Πόσο κάνει;', p: 'póso káni?' }, tr: { w: 'Ne kadar?' }, ja: { w: 'いくらですか', p: 'ikura desu ka' }, zh: { w: '多少钱', p: 'duōshao qián' }, ko: { w: '얼마예요', p: 'eolmayeyo' }, hi: { w: 'यह कितने का है', p: 'yah kitne ka hai' }, ar: { w: 'كم الثمن', p: 'kam al-thaman' }, he: { w: 'כמה זה עולה', p: 'kama ze ole' } } },
      { es: 'No entiendo', t: {
        en: { w: "I don't understand" }, fr: { w: 'Je ne comprends pas' }, de: { w: 'Ich verstehe nicht' }, nl: { w: 'Ik begrijp het niet' }, sv: { w: 'Jag förstår inte' }, no: { w: 'Jeg forstår ikke' }, da: { w: 'Jeg forstår ikke' }, it: { w: 'Non capisco' }, pt: { w: 'Não entendo' }, ca: { w: 'No ho entenc' }, ro: { w: 'Nu înțeleg' },
        ru: { w: 'Я не понимаю', p: 'ya ne ponimayu' }, uk: { w: 'Я не розумію', p: 'ya ne rozumiyu' }, pl: { w: 'Nie rozumiem' }, el: { w: 'Δεν καταλαβαίνω', p: 'den katalavéno' }, tr: { w: 'Anlamıyorum' }, ja: { w: 'わかりません', p: 'wakarimasen' }, zh: { w: '我不懂', p: 'wǒ bù dǒng' }, ko: { w: '이해 못해요', p: 'ihae mothaeyo' }, hi: { w: 'मुझे समझ नहीं आया', p: 'mujhe samajh nahi aaya' }, ar: { w: 'لا أفهم', p: 'la afham' }, he: { w: 'אני לא מבין', p: 'ani lo mevin' } } },
      { es: '¿Dónde está el baño?', t: {
        en: { w: 'Where is the bathroom?' }, fr: { w: 'Où sont les toilettes ?' }, de: { w: 'Wo ist die Toilette?' }, nl: { w: 'Waar is het toilet?' }, sv: { w: 'Var är toaletten?' }, no: { w: 'Hvor er toalettet?' }, da: { w: 'Hvor er toilettet?' }, it: { w: "Dov'è il bagno?" }, pt: { w: 'Onde fica o banheiro?' }, ca: { w: 'On és el bany?' }, ro: { w: 'Unde este baia?' },
        ru: { w: 'Где туалет?', p: 'gde tualet?' }, uk: { w: 'Де туалет?', p: 'de tualet?' }, pl: { w: 'Gdzie jest toaleta?' }, el: { w: 'Πού είναι η τουαλέτα;', p: 'pu íne i tualéta?' }, tr: { w: 'Tuvalet nerede?' }, ja: { w: 'トイレはどこですか', p: 'toire wa doko desu ka' }, zh: { w: '洗手间在哪里', p: 'xǐshǒujiān zài nǎlǐ' }, ko: { w: '화장실이 어디예요', p: 'hwajangsiri eodiyeyo' }, hi: { w: 'बाथरूम कहाँ है', p: 'bathroom kahaan hai' }, ar: { w: 'أين الحمام', p: 'ayna al-hammam' }, he: { w: 'איפה השירותים', p: 'eifo hasherutim' } } },
      { es: 'Te amo', t: {
        en: { w: 'I love you' }, fr: { w: "Je t'aime" }, de: { w: 'Ich liebe dich' }, nl: { w: 'Ik hou van je' }, sv: { w: 'Jag älskar dig' }, no: { w: 'Jeg elsker deg' }, da: { w: 'Jeg elsker dig' }, it: { w: 'Ti amo' }, pt: { w: 'Eu te amo' }, ca: { w: "T'estimo" }, ro: { w: 'Te iubesc' },
        ru: { w: 'Я тебя люблю', p: 'ya tebya lyublyu' }, uk: { w: 'Я тебе кохаю', p: 'ya tebe kokhayu' }, pl: { w: 'Kocham cię' }, el: { w: 'Σ’αγαπώ', p: "s'agapó" }, tr: { w: 'Seni seviyorum' }, ja: { w: '愛してる', p: 'aishiteru' }, zh: { w: '我爱你', p: 'wǒ ài nǐ' }, ko: { w: '사랑해요', p: 'saranghaeyo' }, hi: { w: 'मैं तुमसे प्यार करता हूँ', p: 'main tumse pyaar karta hoon' }, ar: { w: 'أحبك', p: 'uhibbuka' }, he: { w: 'אני אוהב אותך', p: 'ani ohev otach' } } },
      { es: 'Lo siento', t: {
        en: { w: "I'm sorry" }, fr: { w: 'Je suis désolé' }, de: { w: 'Es tut mir leid' }, nl: { w: 'Het spijt me' }, sv: { w: 'Förlåt' }, no: { w: 'Beklager' }, da: { w: 'Undskyld' }, it: { w: 'Mi dispiace' }, pt: { w: 'Sinto muito' }, ca: { w: 'Ho sento' }, ro: { w: 'Îmi pare rău' },
        ru: { w: 'Мне жаль', p: "mne zhal'" }, uk: { w: 'Мені шкода', p: 'meni shkoda' }, pl: { w: 'Przepraszam' }, el: { w: 'Λυπάμαι', p: 'lipáme' }, tr: { w: 'Üzgünüm' }, ja: { w: 'ごめんなさい', p: 'gomen nasai' }, zh: { w: '对不起', p: 'duìbuqǐ' }, ko: { w: '미안해요', p: 'mianhaeyo' }, hi: { w: 'मुझे खेद है', p: 'mujhe khed hai' }, ar: { w: 'آسف', p: 'aasif' }, he: { w: 'אני מצטער', p: 'ani mitstaer' } } },
      { es: 'No sé', t: {
        en: { w: "I don't know" }, fr: { w: 'Je ne sais pas' }, de: { w: 'Ich weiß nicht' }, nl: { w: 'Ik weet het niet' }, sv: { w: 'Jag vet inte' }, no: { w: 'Jeg vet ikke' }, da: { w: 'Jeg ved ikke' }, it: { w: 'Non lo so' }, pt: { w: 'Não sei' }, ca: { w: 'No ho sé' }, ro: { w: 'Nu știu' },
        ru: { w: 'Я не знаю', p: 'ya ne znayu' }, uk: { w: 'Я не знаю', p: 'ya ne znayu' }, pl: { w: 'Nie wiem' }, el: { w: 'Δεν ξέρω', p: 'den xéro' }, tr: { w: 'Bilmiyorum' }, ja: { w: '分かりません', p: 'wakarimasen' }, zh: { w: '我不知道', p: 'wǒ bù zhīdào' }, ko: { w: '몰라요', p: 'mollayo' }, hi: { w: 'मुझे नहीं पता', p: 'mujhe nahi pata' }, ar: { w: 'لا أعرف', p: 'la aʿrif' }, he: { w: 'אני לא יודע', p: 'ani lo yodea' } } },
      { es: '¿Hablas español?', t: {
        en: { w: 'Do you speak Spanish?' }, fr: { w: 'Parles-tu espagnol ?' }, de: { w: 'Sprichst du Spanisch?' }, nl: { w: 'Spreek je Spaans?' }, sv: { w: 'Talar du spanska?' }, no: { w: 'Snakker du spansk?' }, da: { w: 'Taler du spansk?' }, it: { w: 'Parli spagnolo?' }, pt: { w: 'Falas espanhol?' }, ca: { w: 'Parles espanyol?' }, ro: { w: 'Vorbești spaniolă?' },
        ru: { w: 'Вы говорите по-испански?', p: 'vy govorite po-ispanski?' }, uk: { w: 'Ви говорите іспанською?', p: 'vy hovoryte ispanskoyu?' }, pl: { w: 'Mówisz po hiszpańsku?' }, el: { w: 'Μιλάς ισπανικά;', p: 'milás ispaniká?' }, tr: { w: 'İspanyolca biliyor musun?' }, ja: { w: 'スペイン語を話しますか', p: 'supeingo o hanashimasu ka' }, zh: { w: '你会说西班牙语吗', p: 'nǐ huì shuō xībānyáyǔ ma' }, ko: { w: '스페인어 할 줄 아세요', p: 'seupeineo hal jul aseyo' }, hi: { w: 'क्या आप स्पेनिश बोलते हैं', p: 'kya aap spanish bolte hain' }, ar: { w: 'هل تتكلم الإسبانية', p: 'hal tatakallam al-isbaniyya' }, he: { w: 'אתה מדבר ספרדית', p: 'ata medaber sfaradit' } } },
      { es: '¿Me puede ayudar?', t: {
        en: { w: 'Can you help me?' }, fr: { w: "Pouvez-vous m'aider ?" }, de: { w: 'Können Sie mir helfen?' }, nl: { w: 'Kunt u me helpen?' }, sv: { w: 'Kan du hjälpa mig?' }, no: { w: 'Kan du hjelpe meg?' }, da: { w: 'Kan du hjælpe mig?' }, it: { w: 'Può aiutarmi?' }, pt: { w: 'Pode ajudar-me?' }, ca: { w: 'Em pot ajudar?' }, ro: { w: 'Mă puteți ajuta?' },
        ru: { w: 'Вы можете мне помочь?', p: "vy mozhete mne pomoch'?" }, uk: { w: 'Ви можете мені допомогти?', p: 'vy mozhete meni dopomohty?' }, pl: { w: 'Czy może mi pan pomóc?' }, el: { w: 'Μπορείτε να με βοηθήσετε;', p: 'boríte na me voithísete?' }, tr: { w: 'Bana yardım edebilir misiniz?' }, ja: { w: '手伝ってもらえますか', p: 'tetsudatte moraemasu ka' }, zh: { w: '你能帮我吗', p: 'nǐ néng bāng wǒ ma' }, ko: { w: '도와주실 수 있어요', p: 'dowajusil su isseoyo' }, hi: { w: 'क्या आप मेरी मदद कर सकते हैं', p: 'kya aap meri madad kar sakte hain' }, ar: { w: 'هل يمكنك مساعدتي', p: 'hal yumkinuka musaʿadati' }, he: { w: 'אפשר לעזור לי', p: 'efshar laazor li' } } },
    ],
  },
  {
    id: 'familia',
    level: 'A1',
    name: 'La familia',
    icon: '👨‍👩‍👧‍👦',
    items: [
      { es: 'Madre', t: {
        en: { w: 'Mother' }, fr: { w: 'Mère' }, de: { w: 'Mutter' }, nl: { w: 'Moeder' }, sv: { w: 'Mor' }, no: { w: 'Mor' }, da: { w: 'Mor' }, it: { w: 'Madre' }, pt: { w: 'Mãe' }, ca: { w: 'Mare' }, ro: { w: 'Mamă' },
        ru: { w: 'Мать', p: "mat'" }, uk: { w: 'Мати', p: 'maty' }, pl: { w: 'Matka' }, el: { w: 'Μητέρα', p: 'mitéra' }, tr: { w: 'Anne' }, ja: { w: '母', p: 'haha' }, zh: { w: '妈妈', p: 'māma' }, ko: { w: '어머니', p: 'eomeoni' }, hi: { w: 'माँ', p: 'maan' }, ar: { w: 'أم', p: 'umm' }, he: { w: 'אמא', p: 'ima' } } },
      { es: 'Padre', t: {
        en: { w: 'Father' }, fr: { w: 'Père' }, de: { w: 'Vater' }, nl: { w: 'Vader' }, sv: { w: 'Far' }, no: { w: 'Far' }, da: { w: 'Far' }, it: { w: 'Padre' }, pt: { w: 'Pai' }, ca: { w: 'Pare' }, ro: { w: 'Tată' },
        ru: { w: 'Отец', p: 'otets' }, uk: { w: 'Батько', p: "bat'ko" }, pl: { w: 'Ojciec' }, el: { w: 'Πατέρας', p: 'patéras' }, tr: { w: 'Baba' }, ja: { w: '父', p: 'chichi' }, zh: { w: '爸爸', p: 'bàba' }, ko: { w: '아버지', p: 'abeoji' }, hi: { w: 'पिता', p: 'pita' }, ar: { w: 'أب', p: 'ab' }, he: { w: 'אבא', p: 'aba' } } },
      { es: 'Hermano', t: {
        en: { w: 'Brother' }, fr: { w: 'Frère' }, de: { w: 'Bruder' }, nl: { w: 'Broer' }, sv: { w: 'Bror' }, no: { w: 'Bror' }, da: { w: 'Bror' }, it: { w: 'Fratello' }, pt: { w: 'Irmão' }, ca: { w: 'Germà' }, ro: { w: 'Frate' },
        ru: { w: 'Брат', p: 'brat' }, uk: { w: 'Брат', p: 'brat' }, pl: { w: 'Brat' }, el: { w: 'Αδελφός', p: 'adelfós' }, tr: { w: 'Erkek kardeş' }, ja: { w: '兄弟', p: 'kyōdai' }, zh: { w: '兄弟', p: 'xiōngdì' }, ko: { w: '형제', p: 'hyeongje' }, hi: { w: 'भाई', p: 'bhai' }, ar: { w: 'أخ', p: 'akh' }, he: { w: 'אח', p: 'ach' } } },
      { es: 'Hermana', t: {
        en: { w: 'Sister' }, fr: { w: 'Sœur' }, de: { w: 'Schwester' }, nl: { w: 'Zus' }, sv: { w: 'Syster' }, no: { w: 'Søster' }, da: { w: 'Søster' }, it: { w: 'Sorella' }, pt: { w: 'Irmã' }, ca: { w: 'Germana' }, ro: { w: 'Soră' },
        ru: { w: 'Сестра', p: 'sestra' }, uk: { w: 'Сестра', p: 'sestra' }, pl: { w: 'Siostra' }, el: { w: 'Αδελφή', p: 'adelfí' }, tr: { w: 'Kız kardeş' }, ja: { w: '姉妹', p: 'shimai' }, zh: { w: '姐妹', p: 'jiěmèi' }, ko: { w: '자매', p: 'jamae' }, hi: { w: 'बहन', p: 'bahan' }, ar: { w: 'أخت', p: 'ukht' }, he: { w: 'אחות', p: 'achot' } } },
      { es: 'Hijo', t: {
        en: { w: 'Son' }, fr: { w: 'Fils' }, de: { w: 'Sohn' }, nl: { w: 'Zoon' }, sv: { w: 'Son' }, no: { w: 'Sønn' }, da: { w: 'Søn' }, it: { w: 'Figlio' }, pt: { w: 'Filho' }, ca: { w: 'Fill' }, ro: { w: 'Fiu' },
        ru: { w: 'Сын', p: 'syn' }, uk: { w: 'Син', p: 'syn' }, pl: { w: 'Syn' }, el: { w: 'Γιος', p: 'yios' }, tr: { w: 'Oğul' }, ja: { w: '息子', p: 'musuko' }, zh: { w: '儿子', p: 'érzi' }, ko: { w: '아들', p: 'adeul' }, hi: { w: 'बेटा', p: 'beta' }, ar: { w: 'ابن', p: 'ibn' }, he: { w: 'בן', p: 'ben' } } },
      { es: 'Hija', t: {
        en: { w: 'Daughter' }, fr: { w: 'Fille' }, de: { w: 'Tochter' }, nl: { w: 'Dochter' }, sv: { w: 'Dotter' }, no: { w: 'Datter' }, da: { w: 'Datter' }, it: { w: 'Figlia' }, pt: { w: 'Filha' }, ca: { w: 'Filla' }, ro: { w: 'Fiică' },
        ru: { w: 'Дочь', p: "doch'" }, uk: { w: 'Дочка', p: 'dochka' }, pl: { w: 'Córka' }, el: { w: 'Κόρη', p: 'kóri' }, tr: { w: 'Kız' }, ja: { w: '娘', p: 'musume' }, zh: { w: '女儿', p: "nǚ'ér" }, ko: { w: '딸', p: 'ttal' }, hi: { w: 'बेटी', p: 'beti' }, ar: { w: 'ابنة', p: 'ibna' }, he: { w: 'בת', p: 'bat' } } },
      { es: 'Abuelo', t: {
        en: { w: 'Grandfather' }, fr: { w: 'Grand-père' }, de: { w: 'Großvater' }, nl: { w: 'Opa' }, sv: { w: 'Farfar' }, no: { w: 'Bestefar' }, da: { w: 'Bedstefar' }, it: { w: 'Nonno' }, pt: { w: 'Avô' }, ca: { w: 'Avi' }, ro: { w: 'Bunic' },
        ru: { w: 'Дедушка', p: 'dedushka' }, uk: { w: 'Дідусь', p: "didus'" }, pl: { w: 'Dziadek' }, el: { w: 'Παππούς', p: 'papús' }, tr: { w: 'Dede' }, ja: { w: '祖父', p: 'sofu' }, zh: { w: '爷爷', p: 'yéye' }, ko: { w: '할아버지', p: 'harabeoji' }, hi: { w: 'दादा', p: 'dada' }, ar: { w: 'جد', p: 'jadd' }, he: { w: 'סבא', p: 'saba' } } },
      { es: 'Abuela', t: {
        en: { w: 'Grandmother' }, fr: { w: 'Grand-mère' }, de: { w: 'Großmutter' }, nl: { w: 'Oma' }, sv: { w: 'Farmor' }, no: { w: 'Bestemor' }, da: { w: 'Bedstemor' }, it: { w: 'Nonna' }, pt: { w: 'Avó' }, ca: { w: 'Àvia' }, ro: { w: 'Bunică' },
        ru: { w: 'Бабушка', p: 'babushka' }, uk: { w: 'Бабуся', p: 'babusya' }, pl: { w: 'Babcia' }, el: { w: 'Γιαγιά', p: 'yiayá' }, tr: { w: 'Nine' }, ja: { w: '祖母', p: 'sobo' }, zh: { w: '奶奶', p: 'nǎinai' }, ko: { w: '할머니', p: 'halmeoni' }, hi: { w: 'दादी', p: 'dadi' }, ar: { w: 'جدة', p: 'jadda' }, he: { w: 'סבתא', p: 'savta' } } },
      { es: 'Tío', t: {
        en: { w: 'Uncle' }, fr: { w: 'Oncle' }, de: { w: 'Onkel' }, nl: { w: 'Oom' }, sv: { w: 'Farbror' }, no: { w: 'Onkel' }, da: { w: 'Onkel' }, it: { w: 'Zio' }, pt: { w: 'Tio' }, ca: { w: 'Oncle' }, ro: { w: 'Unchi' },
        ru: { w: 'Дядя', p: 'dyadya' }, uk: { w: 'Дядько', p: "dyad'ko" }, pl: { w: 'Wujek' }, el: { w: 'Θείος', p: 'thíos' }, tr: { w: 'Amca' }, ja: { w: 'おじ', p: 'oji' }, zh: { w: '叔叔', p: 'shūshu' }, ko: { w: '삼촌', p: 'samchon' }, hi: { w: 'चाचा', p: 'chacha' }, ar: { w: 'عم', p: 'ʿamm' }, he: { w: 'דוד', p: 'dod' } } },
      { es: 'Tía', t: {
        en: { w: 'Aunt' }, fr: { w: 'Tante' }, de: { w: 'Tante' }, nl: { w: 'Tante' }, sv: { w: 'Faster' }, no: { w: 'Tante' }, da: { w: 'Tante' }, it: { w: 'Zia' }, pt: { w: 'Tia' }, ca: { w: 'Tia' }, ro: { w: 'Mătușă' },
        ru: { w: 'Тётя', p: 'tyotya' }, uk: { w: 'Тітка', p: 'titka' }, pl: { w: 'Ciocia' }, el: { w: 'Θεία', p: 'thía' }, tr: { w: 'Teyze' }, ja: { w: 'おば', p: 'oba' }, zh: { w: '阿姨', p: 'āyí' }, ko: { w: '이모', p: 'imo' }, hi: { w: 'चाची', p: 'chachi' }, ar: { w: 'عمة', p: 'ʿamma' }, he: { w: 'דודה', p: 'doda' } } },
    ],
  },
  {
    id: 'comida',
    level: 'A1',
    name: 'Comida y bebida',
    icon: '🍎',
    items: [
      { es: 'Agua', t: {
        en: { w: 'Water' }, fr: { w: 'Eau' }, de: { w: 'Wasser' }, nl: { w: 'Water' }, sv: { w: 'Vatten' }, no: { w: 'Vann' }, da: { w: 'Vand' }, it: { w: 'Acqua' }, pt: { w: 'Água' }, ca: { w: 'Aigua' }, ro: { w: 'Apă' },
        ru: { w: 'Вода', p: 'voda' }, uk: { w: 'Вода', p: 'voda' }, pl: { w: 'Woda' }, el: { w: 'Νερό', p: 'neró' }, tr: { w: 'Su' }, ja: { w: '水', p: 'mizu' }, zh: { w: '水', p: 'shuǐ' }, ko: { w: '물', p: 'mul' }, hi: { w: 'पानी', p: 'paani' }, ar: { w: 'ماء', p: 'maaʾ' }, he: { w: 'מים', p: 'mayim' } } },
      { es: 'Pan', t: {
        en: { w: 'Bread' }, fr: { w: 'Pain' }, de: { w: 'Brot' }, nl: { w: 'Brood' }, sv: { w: 'Bröd' }, no: { w: 'Brød' }, da: { w: 'Brød' }, it: { w: 'Pane' }, pt: { w: 'Pão' }, ca: { w: 'Pa' }, ro: { w: 'Pâine' },
        ru: { w: 'Хлеб', p: 'khleb' }, uk: { w: 'Хліб', p: 'khlib' }, pl: { w: 'Chleb' }, el: { w: 'Ψωμί', p: 'psomí' }, tr: { w: 'Ekmek' }, ja: { w: 'パン', p: 'pan' }, zh: { w: '面包', p: 'miànbāo' }, ko: { w: '빵', p: 'ppang' }, hi: { w: 'रोटी', p: 'roti' }, ar: { w: 'خبز', p: 'khubz' }, he: { w: 'לחם', p: 'lechem' } } },
      { es: 'Café', t: {
        en: { w: 'Coffee' }, fr: { w: 'Café' }, de: { w: 'Kaffee' }, nl: { w: 'Koffie' }, sv: { w: 'Kaffe' }, no: { w: 'Kaffe' }, da: { w: 'Kaffe' }, it: { w: 'Caffè' }, pt: { w: 'Café' }, ca: { w: 'Cafè' }, ro: { w: 'Cafea' },
        ru: { w: 'Кофе', p: 'kofe' }, uk: { w: 'Кава', p: 'kava' }, pl: { w: 'Kawa' }, el: { w: 'Καφές', p: 'kafés' }, tr: { w: 'Kahve' }, ja: { w: 'コーヒー', p: 'kōhī' }, zh: { w: '咖啡', p: 'kāfēi' }, ko: { w: '커피', p: 'keopi' }, hi: { w: 'कॉफ़ी', p: 'coffee' }, ar: { w: 'قهوة', p: 'qahwa' }, he: { w: 'קפה', p: 'kafe' } } },
      { es: 'Manzana', t: {
        en: { w: 'Apple' }, fr: { w: 'Pomme' }, de: { w: 'Apfel' }, nl: { w: 'Appel' }, sv: { w: 'Äpple' }, no: { w: 'Eple' }, da: { w: 'Æble' }, it: { w: 'Mela' }, pt: { w: 'Maçã' }, ca: { w: 'Poma' }, ro: { w: 'Măr' },
        ru: { w: 'Яблоко', p: 'yabloko' }, uk: { w: 'Яблуко', p: 'yabluko' }, pl: { w: 'Jabłko' }, el: { w: 'Μήλο', p: 'mílo' }, tr: { w: 'Elma' }, ja: { w: 'りんご', p: 'ringo' }, zh: { w: '苹果', p: 'píngguǒ' }, ko: { w: '사과', p: 'sagwa' }, hi: { w: 'सेब', p: 'seb' }, ar: { w: 'تفاحة', p: 'tuffaha' }, he: { w: 'תפוח', p: 'tapuach' } } },
      { es: 'Leche', t: {
        en: { w: 'Milk' }, fr: { w: 'Lait' }, de: { w: 'Milch' }, nl: { w: 'Melk' }, sv: { w: 'Mjölk' }, no: { w: 'Melk' }, da: { w: 'Mælk' }, it: { w: 'Latte' }, pt: { w: 'Leite' }, ca: { w: 'Llet' }, ro: { w: 'Lapte' },
        ru: { w: 'Молоко', p: 'moloko' }, uk: { w: 'Молоко', p: 'moloko' }, pl: { w: 'Mleko' }, el: { w: 'Γάλα', p: 'gála' }, tr: { w: 'Süt' }, ja: { w: '牛乳', p: 'gyūnyū' }, zh: { w: '牛奶', p: 'niúnǎi' }, ko: { w: '우유', p: 'uyu' }, hi: { w: 'दूध', p: 'doodh' }, ar: { w: 'حليب', p: 'halib' }, he: { w: 'חלב', p: 'chalav' } } },
      { es: 'Arroz', t: {
        en: { w: 'Rice' }, fr: { w: 'Riz' }, de: { w: 'Reis' }, nl: { w: 'Rijst' }, sv: { w: 'Ris' }, no: { w: 'Ris' }, da: { w: 'Ris' }, it: { w: 'Riso' }, pt: { w: 'Arroz' }, ca: { w: 'Arròs' }, ro: { w: 'Orez' },
        ru: { w: 'Рис', p: 'ris' }, uk: { w: 'Рис', p: 'rys' }, pl: { w: 'Ryż' }, el: { w: 'Ρύζι', p: 'rízi' }, tr: { w: 'Pirinç' }, ja: { w: 'ご飯', p: 'gohan' }, zh: { w: '米饭', p: 'mǐfàn' }, ko: { w: '밥', p: 'bap' }, hi: { w: 'चावल', p: 'chaaval' }, ar: { w: 'أرز', p: 'aruzz' }, he: { w: 'אורז', p: 'orez' } } },
      { es: 'Té', t: {
        en: { w: 'Tea' }, fr: { w: 'Thé' }, de: { w: 'Tee' }, nl: { w: 'Thee' }, sv: { w: 'Te' }, no: { w: 'Te' }, da: { w: 'Te' }, it: { w: 'Tè' }, pt: { w: 'Chá' }, ca: { w: 'Te' }, ro: { w: 'Ceai' },
        ru: { w: 'Чай', p: 'chay' }, uk: { w: 'Чай', p: 'chay' }, pl: { w: 'Herbata' }, el: { w: 'Τσάι', p: 'tsái' }, tr: { w: 'Çay' }, ja: { w: 'お茶', p: 'ocha' }, zh: { w: '茶', p: 'chá' }, ko: { w: '차', p: 'cha' }, hi: { w: 'चाय', p: 'chai' }, ar: { w: 'شاي', p: 'shay' }, he: { w: 'תה', p: 'te' } } },
      { es: 'Carne', t: {
        en: { w: 'Meat' }, fr: { w: 'Viande' }, de: { w: 'Fleisch' }, nl: { w: 'Vlees' }, sv: { w: 'Kött' }, no: { w: 'Kjøtt' }, da: { w: 'Kød' }, it: { w: 'Carne' }, pt: { w: 'Carne' }, ca: { w: 'Carn' }, ro: { w: 'Carne' },
        ru: { w: 'Мясо', p: 'myaso' }, uk: { w: "М'ясо", p: 'myaso' }, pl: { w: 'Mięso' }, el: { w: 'Κρέας', p: 'kréas' }, tr: { w: 'Et' }, ja: { w: '肉', p: 'niku' }, zh: { w: '肉', p: 'ròu' }, ko: { w: '고기', p: 'gogi' }, hi: { w: 'मांस', p: 'maans' }, ar: { w: 'لحم', p: 'lahm' }, he: { w: 'בשר', p: 'basar' } } },
      { es: 'Pescado', t: {
        en: { w: 'Fish' }, fr: { w: 'Poisson' }, de: { w: 'Fisch' }, nl: { w: 'Vis' }, sv: { w: 'Fisk' }, no: { w: 'Fisk' }, da: { w: 'Fisk' }, it: { w: 'Pesce' }, pt: { w: 'Peixe' }, ca: { w: 'Peix' }, ro: { w: 'Pește' },
        ru: { w: 'Рыба', p: 'ryba' }, uk: { w: 'Риба', p: 'ryba' }, pl: { w: 'Ryba' }, el: { w: 'Ψάρι', p: 'psári' }, tr: { w: 'Balık' }, ja: { w: '魚', p: 'sakana' }, zh: { w: '鱼', p: 'yú' }, ko: { w: '생선', p: 'saengseon' }, hi: { w: 'मछली', p: 'machhli' }, ar: { w: 'سمك', p: 'samak' }, he: { w: 'דג', p: 'dag' } } },
      { es: 'Huevo', t: {
        en: { w: 'Egg' }, fr: { w: 'Œuf' }, de: { w: 'Ei' }, nl: { w: 'Ei' }, sv: { w: 'Ägg' }, no: { w: 'Egg' }, da: { w: 'Æg' }, it: { w: 'Uovo' }, pt: { w: 'Ovo' }, ca: { w: 'Ou' }, ro: { w: 'Ou' },
        ru: { w: 'Яйцо', p: 'yaytso' }, uk: { w: 'Яйце', p: 'yaytse' }, pl: { w: 'Jajko' }, el: { w: 'Αυγό', p: 'avgó' }, tr: { w: 'Yumurta' }, ja: { w: '卵', p: 'tamago' }, zh: { w: '蛋', p: 'dàn' }, ko: { w: '계란', p: 'gyeran' }, hi: { w: 'अंडा', p: 'anda' }, ar: { w: 'بيضة', p: 'bayda' }, he: { w: 'ביצה', p: 'beitsa' } } },
    ],
  },
  {
    id: 'dias',
    level: 'A1',
    name: 'Días de la semana',
    icon: '📅',
    items: [
      { es: 'Lunes', t: {
        en: { w: 'Monday' }, fr: { w: 'Lundi' }, de: { w: 'Montag' }, nl: { w: 'Maandag' }, sv: { w: 'Måndag' }, no: { w: 'Mandag' }, da: { w: 'Mandag' }, it: { w: 'Lunedì' }, pt: { w: 'Segunda-feira' }, ca: { w: 'Dilluns' }, ro: { w: 'Luni' },
        ru: { w: 'Понедельник', p: "ponedel'nik" }, uk: { w: 'Понеділок', p: 'ponedilok' }, pl: { w: 'Poniedziałek' }, el: { w: 'Δευτέρα', p: 'deftéra' }, tr: { w: 'Pazartesi' }, ja: { w: '月曜日', p: 'getsuyōbi' }, zh: { w: '星期一', p: 'xīngqīyī' }, ko: { w: '월요일', p: 'woryoil' }, hi: { w: 'सोमवार', p: 'somvaar' }, ar: { w: 'الإثنين', p: 'al-ithnayn' }, he: { w: 'יום שני', p: 'yom sheni' } } },
      { es: 'Martes', t: {
        en: { w: 'Tuesday' }, fr: { w: 'Mardi' }, de: { w: 'Dienstag' }, nl: { w: 'Dinsdag' }, sv: { w: 'Tisdag' }, no: { w: 'Tirsdag' }, da: { w: 'Tirsdag' }, it: { w: 'Martedì' }, pt: { w: 'Terça-feira' }, ca: { w: 'Dimarts' }, ro: { w: 'Marți' },
        ru: { w: 'Вторник', p: 'vtornik' }, uk: { w: 'Вівторок', p: 'vivtorok' }, pl: { w: 'Wtorek' }, el: { w: 'Τρίτη', p: 'tríti' }, tr: { w: 'Salı' }, ja: { w: '火曜日', p: 'kayōbi' }, zh: { w: '星期二', p: "xīngqī'èr" }, ko: { w: '화요일', p: 'hwayoil' }, hi: { w: 'मंगलवार', p: 'mangalvaar' }, ar: { w: 'الثلاثاء', p: 'al-thulatha' }, he: { w: 'יום שלישי', p: 'yom shlishi' } } },
      { es: 'Miércoles', t: {
        en: { w: 'Wednesday' }, fr: { w: 'Mercredi' }, de: { w: 'Mittwoch' }, nl: { w: 'Woensdag' }, sv: { w: 'Onsdag' }, no: { w: 'Onsdag' }, da: { w: 'Onsdag' }, it: { w: 'Mercoledì' }, pt: { w: 'Quarta-feira' }, ca: { w: 'Dimecres' }, ro: { w: 'Miercuri' },
        ru: { w: 'Среда', p: 'sreda' }, uk: { w: 'Середа', p: 'sereda' }, pl: { w: 'Środa' }, el: { w: 'Τετάρτη', p: 'tetárti' }, tr: { w: 'Çarşamba' }, ja: { w: '水曜日', p: 'suiyōbi' }, zh: { w: '星期三', p: 'xīngqīsān' }, ko: { w: '수요일', p: 'suyoil' }, hi: { w: 'बुधवार', p: 'budhvaar' }, ar: { w: 'الأربعاء', p: 'al-arbiʿa' }, he: { w: 'יום רביעי', p: "yom revi'i" } } },
      { es: 'Jueves', t: {
        en: { w: 'Thursday' }, fr: { w: 'Jeudi' }, de: { w: 'Donnerstag' }, nl: { w: 'Donderdag' }, sv: { w: 'Torsdag' }, no: { w: 'Torsdag' }, da: { w: 'Torsdag' }, it: { w: 'Giovedì' }, pt: { w: 'Quinta-feira' }, ca: { w: 'Dijous' }, ro: { w: 'Joi' },
        ru: { w: 'Четверг', p: 'chetverg' }, uk: { w: 'Четвер', p: 'chetver' }, pl: { w: 'Czwartek' }, el: { w: 'Πέμπτη', p: 'pémpti' }, tr: { w: 'Perşembe' }, ja: { w: '木曜日', p: 'mokuyōbi' }, zh: { w: '星期四', p: 'xīngqīsì' }, ko: { w: '목요일', p: 'mogyoil' }, hi: { w: 'गुरुवार', p: 'guruvaar' }, ar: { w: 'الخميس', p: 'al-khamis' }, he: { w: 'יום חמישי', p: 'yom chamishi' } } },
      { es: 'Viernes', t: {
        en: { w: 'Friday' }, fr: { w: 'Vendredi' }, de: { w: 'Freitag' }, nl: { w: 'Vrijdag' }, sv: { w: 'Fredag' }, no: { w: 'Fredag' }, da: { w: 'Fredag' }, it: { w: 'Venerdì' }, pt: { w: 'Sexta-feira' }, ca: { w: 'Divendres' }, ro: { w: 'Vineri' },
        ru: { w: 'Пятница', p: 'pyatnitsa' }, uk: { w: "П'ятниця", p: 'pyatnytsya' }, pl: { w: 'Piątek' }, el: { w: 'Παρασκευή', p: 'paraskeví' }, tr: { w: 'Cuma' }, ja: { w: '金曜日', p: 'kinyōbi' }, zh: { w: '星期五', p: 'xīngqīwǔ' }, ko: { w: '금요일', p: 'geumyoil' }, hi: { w: 'शुक्रवार', p: 'shukravaar' }, ar: { w: 'الجمعة', p: 'al-jumʿa' }, he: { w: 'יום שישי', p: 'yom shishi' } } },
      { es: 'Sábado', t: {
        en: { w: 'Saturday' }, fr: { w: 'Samedi' }, de: { w: 'Samstag' }, nl: { w: 'Zaterdag' }, sv: { w: 'Lördag' }, no: { w: 'Lørdag' }, da: { w: 'Lørdag' }, it: { w: 'Sabato' }, pt: { w: 'Sábado' }, ca: { w: 'Dissabte' }, ro: { w: 'Sâmbătă' },
        ru: { w: 'Суббота', p: 'subbota' }, uk: { w: 'Субота', p: 'subota' }, pl: { w: 'Sobota' }, el: { w: 'Σάββατο', p: 'sávvato' }, tr: { w: 'Cumartesi' }, ja: { w: '土曜日', p: 'doyōbi' }, zh: { w: '星期六', p: 'xīngqīliù' }, ko: { w: '토요일', p: 'toyoil' }, hi: { w: 'शनिवार', p: 'shanivaar' }, ar: { w: 'السبت', p: 'al-sabt' }, he: { w: 'שבת', p: 'shabat' } } },
      { es: 'Domingo', t: {
        en: { w: 'Sunday' }, fr: { w: 'Dimanche' }, de: { w: 'Sonntag' }, nl: { w: 'Zondag' }, sv: { w: 'Söndag' }, no: { w: 'Søndag' }, da: { w: 'Søndag' }, it: { w: 'Domenica' }, pt: { w: 'Domingo' }, ca: { w: 'Diumenge' }, ro: { w: 'Duminică' },
        ru: { w: 'Воскресенье', p: "voskresen'ye" }, uk: { w: 'Неділя', p: 'nedilya' }, pl: { w: 'Niedziela' }, el: { w: 'Κυριακή', p: 'kyriakí' }, tr: { w: 'Pazar' }, ja: { w: '日曜日', p: 'nichiyōbi' }, zh: { w: '星期日', p: 'xīngqīrì' }, ko: { w: '일요일', p: 'iryoil' }, hi: { w: 'रविवार', p: 'ravivaar' }, ar: { w: 'الأحد', p: 'al-ahad' }, he: { w: 'יום ראשון', p: 'yom rishon' } } },
    ],
  },
  {
    id: 'animales',
    level: 'A1',
    name: 'Animales',
    icon: '🐾',
    items: [
      { es: 'Perro', t: {
        en: { w: 'Dog' }, fr: { w: 'Chien' }, de: { w: 'Hund' }, nl: { w: 'Hond' }, sv: { w: 'Hund' }, no: { w: 'Hund' }, da: { w: 'Hund' }, it: { w: 'Cane' }, pt: { w: 'Cão' }, ca: { w: 'Gos' }, ro: { w: 'Câine' },
        ru: { w: 'Собака', p: 'sobaka' }, uk: { w: 'Собака', p: 'sobaka' }, pl: { w: 'Pies' }, el: { w: 'Σκύλος', p: 'skílos' }, tr: { w: 'Köpek' }, ja: { w: '犬', p: 'inu' }, zh: { w: '狗', p: 'gǒu' }, ko: { w: '개', p: 'gae' }, hi: { w: 'कुत्ता', p: 'kutta' }, ar: { w: 'كلب', p: 'kalb' }, he: { w: 'כלב', p: 'kelev' } } },
      { es: 'Gato', t: {
        en: { w: 'Cat' }, fr: { w: 'Chat' }, de: { w: 'Katze' }, nl: { w: 'Kat' }, sv: { w: 'Katt' }, no: { w: 'Katt' }, da: { w: 'Kat' }, it: { w: 'Gatto' }, pt: { w: 'Gato' }, ca: { w: 'Gat' }, ro: { w: 'Pisică' },
        ru: { w: 'Кошка', p: 'koshka' }, uk: { w: 'Кіт', p: 'kit' }, pl: { w: 'Kot' }, el: { w: 'Γάτα', p: 'gáta' }, tr: { w: 'Kedi' }, ja: { w: '猫', p: 'neko' }, zh: { w: '猫', p: 'māo' }, ko: { w: '고양이', p: 'goyangi' }, hi: { w: 'बिल्ली', p: 'billi' }, ar: { w: 'قطة', p: 'qitta' }, he: { w: 'חתול', p: 'chatul' } } },
      { es: 'Pájaro', t: {
        en: { w: 'Bird' }, fr: { w: 'Oiseau' }, de: { w: 'Vogel' }, nl: { w: 'Vogel' }, sv: { w: 'Fågel' }, no: { w: 'Fugl' }, da: { w: 'Fugl' }, it: { w: 'Uccello' }, pt: { w: 'Pássaro' }, ca: { w: 'Ocell' }, ro: { w: 'Pasăre' },
        ru: { w: 'Птица', p: 'ptitsa' }, uk: { w: 'Птах', p: 'ptakh' }, pl: { w: 'Ptak' }, el: { w: 'Πουλί', p: 'pulí' }, tr: { w: 'Kuş' }, ja: { w: '鳥', p: 'tori' }, zh: { w: '鸟', p: 'niǎo' }, ko: { w: '새', p: 'sae' }, hi: { w: 'पक्षी', p: 'pakshi' }, ar: { w: 'طائر', p: 'taʾir' }, he: { w: 'ציפור', p: 'tsipor' } } },
      { es: 'Pez', t: {
        en: { w: 'Fish' }, fr: { w: 'Poisson' }, de: { w: 'Fisch' }, nl: { w: 'Vis' }, sv: { w: 'Fisk' }, no: { w: 'Fisk' }, da: { w: 'Fisk' }, it: { w: 'Pesce' }, pt: { w: 'Peixe' }, ca: { w: 'Peix' }, ro: { w: 'Pește' },
        ru: { w: 'Рыба', p: 'ryba' }, uk: { w: 'Риба', p: 'ryba' }, pl: { w: 'Ryba' }, el: { w: 'Ψάρι', p: 'psári' }, tr: { w: 'Balık' }, ja: { w: '魚', p: 'sakana' }, zh: { w: '鱼', p: 'yú' }, ko: { w: '물고기', p: 'mulgogi' }, hi: { w: 'मछली', p: 'machhli' }, ar: { w: 'سمكة', p: 'samaka' }, he: { w: 'דג', p: 'dag' } } },
      { es: 'Caballo', t: {
        en: { w: 'Horse' }, fr: { w: 'Cheval' }, de: { w: 'Pferd' }, nl: { w: 'Paard' }, sv: { w: 'Häst' }, no: { w: 'Hest' }, da: { w: 'Hest' }, it: { w: 'Cavallo' }, pt: { w: 'Cavalo' }, ca: { w: 'Cavall' }, ro: { w: 'Cal' },
        ru: { w: 'Лошадь', p: "loshad'" }, uk: { w: 'Кінь', p: "kin'" }, pl: { w: 'Koń' }, el: { w: 'Άλογο', p: 'álogo' }, tr: { w: 'At' }, ja: { w: '馬', p: 'uma' }, zh: { w: '马', p: 'mǎ' }, ko: { w: '말', p: 'mal' }, hi: { w: 'घोड़ा', p: 'ghoda' }, ar: { w: 'حصان', p: 'hisan' }, he: { w: 'סוס', p: 'sus' } } },
      { es: 'Vaca', t: {
        en: { w: 'Cow' }, fr: { w: 'Vache' }, de: { w: 'Kuh' }, nl: { w: 'Koe' }, sv: { w: 'Ko' }, no: { w: 'Ku' }, da: { w: 'Ko' }, it: { w: 'Mucca' }, pt: { w: 'Vaca' }, ca: { w: 'Vaca' }, ro: { w: 'Vacă' },
        ru: { w: 'Корова', p: 'korova' }, uk: { w: 'Корова', p: 'korova' }, pl: { w: 'Krowa' }, el: { w: 'Αγελάδα', p: 'ageláda' }, tr: { w: 'İnek' }, ja: { w: '牛', p: 'ushi' }, zh: { w: '牛', p: 'niú' }, ko: { w: '소', p: 'so' }, hi: { w: 'गाय', p: 'gaay' }, ar: { w: 'بقرة', p: 'baqara' }, he: { w: 'פרה', p: 'para' } } },
      { es: 'León', t: {
        en: { w: 'Lion' }, fr: { w: 'Lion' }, de: { w: 'Löwe' }, nl: { w: 'Leeuw' }, sv: { w: 'Lejon' }, no: { w: 'Løve' }, da: { w: 'Løve' }, it: { w: 'Leone' }, pt: { w: 'Leão' }, ca: { w: 'Lleó' }, ro: { w: 'Leu' },
        ru: { w: 'Лев', p: 'lev' }, uk: { w: 'Лев', p: 'lev' }, pl: { w: 'Lew' }, el: { w: 'Λιοντάρι', p: 'liontári' }, tr: { w: 'Aslan' }, ja: { w: 'ライオン', p: 'raion' }, zh: { w: '狮子', p: 'shīzi' }, ko: { w: '사자', p: 'saja' }, hi: { w: 'शेर', p: 'sher' }, ar: { w: 'أسد', p: 'asad' }, he: { w: 'אריה', p: 'arye' } } },
      { es: 'Conejo', t: {
        en: { w: 'Rabbit' }, fr: { w: 'Lapin' }, de: { w: 'Kaninchen' }, nl: { w: 'Konijn' }, sv: { w: 'Kanin' }, no: { w: 'Kanin' }, da: { w: 'Kanin' }, it: { w: 'Coniglio' }, pt: { w: 'Coelho' }, ca: { w: 'Conill' }, ro: { w: 'Iepure' },
        ru: { w: 'Кролик', p: 'krolik' }, uk: { w: 'Кролик', p: 'krolyk' }, pl: { w: 'Królik' }, el: { w: 'Κουνέλι', p: 'kunéli' }, tr: { w: 'Tavşan' }, ja: { w: 'うさぎ', p: 'usagi' }, zh: { w: '兔子', p: 'tùzi' }, ko: { w: '토끼', p: 'tokki' }, hi: { w: 'खरगोश', p: 'khargosh' }, ar: { w: 'أرنب', p: 'arnab' }, he: { w: 'ארנב', p: 'arnav' } } },
      { es: 'Oso', t: {
        en: { w: 'Bear' }, fr: { w: 'Ours' }, de: { w: 'Bär' }, nl: { w: 'Beer' }, sv: { w: 'Björn' }, no: { w: 'Bjørn' }, da: { w: 'Bjørn' }, it: { w: 'Orso' }, pt: { w: 'Urso' }, ca: { w: 'Ós' }, ro: { w: 'Urs' },
        ru: { w: 'Медведь', p: "medved'" }, uk: { w: 'Ведмідь', p: "vedmid'" }, pl: { w: 'Niedźwiedź' }, el: { w: 'Αρκούδα', p: 'arkúda' }, tr: { w: 'Ayı' }, ja: { w: '熊', p: 'kuma' }, zh: { w: '熊', p: 'xióng' }, ko: { w: '곰', p: 'gom' }, hi: { w: 'भालू', p: 'bhalu' }, ar: { w: 'دب', p: 'dubb' }, he: { w: 'דוב', p: 'dov' } } },
      { es: 'Ratón', t: {
        en: { w: 'Mouse' }, fr: { w: 'Souris' }, de: { w: 'Maus' }, nl: { w: 'Muis' }, sv: { w: 'Mus' }, no: { w: 'Mus' }, da: { w: 'Mus' }, it: { w: 'Topo' }, pt: { w: 'Rato' }, ca: { w: 'Ratolí' }, ro: { w: 'Șoarece' },
        ru: { w: 'Мышь', p: "mysh'" }, uk: { w: 'Миша', p: 'mysha' }, pl: { w: 'Mysz' }, el: { w: 'Ποντίκι', p: 'pontíki' }, tr: { w: 'Fare' }, ja: { w: 'ねずみ', p: 'nezumi' }, zh: { w: '老鼠', p: 'lǎoshǔ' }, ko: { w: '쥐', p: 'jwi' }, hi: { w: 'चूहा', p: 'chuha' }, ar: { w: 'فأر', p: "faʾr" }, he: { w: 'עכבר', p: 'akhbar' } } },
    ],
  },
  {
    id: 'verbos',
    level: 'A1',
    name: 'Verbos comunes',
    icon: '⚡',
    items: [
      { es: 'Comer', t: {
        en: { w: 'To eat' }, fr: { w: 'Manger' }, de: { w: 'Essen' }, nl: { w: 'Eten' }, sv: { w: 'Äta' }, no: { w: 'Spise' }, da: { w: 'Spise' }, it: { w: 'Mangiare' }, pt: { w: 'Comer' }, ca: { w: 'Menjar' }, ro: { w: 'A mânca' },
        ru: { w: 'Есть', p: "yest'" }, uk: { w: 'Їсти', p: 'yisty' }, pl: { w: 'Jeść' }, el: { w: 'Τρώω', p: 'tróo' }, tr: { w: 'Yemek' }, ja: { w: '食べる', p: 'taberu' }, zh: { w: '吃', p: 'chī' }, ko: { w: '먹다', p: 'meokda' }, hi: { w: 'खाना', p: 'khaana' }, ar: { w: 'يأكل', p: 'yaʾkul' }, he: { w: 'לאכול', p: "le'echol" } } },
      { es: 'Beber', t: {
        en: { w: 'To drink' }, fr: { w: 'Boire' }, de: { w: 'Trinken' }, nl: { w: 'Drinken' }, sv: { w: 'Dricka' }, no: { w: 'Drikke' }, da: { w: 'Drikke' }, it: { w: 'Bere' }, pt: { w: 'Beber' }, ca: { w: 'Beure' }, ro: { w: 'A bea' },
        ru: { w: 'Пить', p: "pit'" }, uk: { w: 'Пити', p: 'pyty' }, pl: { w: 'Pić' }, el: { w: 'Πίνω', p: 'píno' }, tr: { w: 'İçmek' }, ja: { w: '飲む', p: 'nomu' }, zh: { w: '喝', p: 'hē' }, ko: { w: '마시다', p: 'masida' }, hi: { w: 'पीना', p: 'peena' }, ar: { w: 'يشرب', p: 'yashrab' }, he: { w: 'לשתות', p: 'lishtot' } } },
      { es: 'Dormir', t: {
        en: { w: 'To sleep' }, fr: { w: 'Dormir' }, de: { w: 'Schlafen' }, nl: { w: 'Slapen' }, sv: { w: 'Sova' }, no: { w: 'Sove' }, da: { w: 'Sove' }, it: { w: 'Dormire' }, pt: { w: 'Dormir' }, ca: { w: 'Dormir' }, ro: { w: 'A dormi' },
        ru: { w: 'Спать', p: "spat'" }, uk: { w: 'Спати', p: 'spaty' }, pl: { w: 'Spać' }, el: { w: 'Κοιμάμαι', p: 'kimáme' }, tr: { w: 'Uyumak' }, ja: { w: '寝る', p: 'neru' }, zh: { w: '睡觉', p: 'shuìjiào' }, ko: { w: '자다', p: 'jada' }, hi: { w: 'सोना', p: 'sona' }, ar: { w: 'ينام', p: 'yanam' }, he: { w: 'לישון', p: 'lishon' } } },
      { es: 'Hablar', t: {
        en: { w: 'To speak' }, fr: { w: 'Parler' }, de: { w: 'Sprechen' }, nl: { w: 'Spreken' }, sv: { w: 'Tala' }, no: { w: 'Snakke' }, da: { w: 'Tale' }, it: { w: 'Parlare' }, pt: { w: 'Falar' }, ca: { w: 'Parlar' }, ro: { w: 'A vorbi' },
        ru: { w: 'Говорить', p: "govorit'" }, uk: { w: 'Говорити', p: 'hovoryty' }, pl: { w: 'Mówić' }, el: { w: 'Μιλάω', p: 'miláo' }, tr: { w: 'Konuşmak' }, ja: { w: '話す', p: 'hanasu' }, zh: { w: '说', p: 'shuō' }, ko: { w: '말하다', p: 'malhada' }, hi: { w: 'बोलना', p: 'bolna' }, ar: { w: 'يتكلم', p: 'yatakallam' }, he: { w: 'לדבר', p: 'ledaber' } } },
      { es: 'Ir', t: {
        en: { w: 'To go' }, fr: { w: 'Aller' }, de: { w: 'Gehen' }, nl: { w: 'Gaan' }, sv: { w: 'Gå' }, no: { w: 'Gå' }, da: { w: 'Gå' }, it: { w: 'Andare' }, pt: { w: 'Ir' }, ca: { w: 'Anar' }, ro: { w: 'A merge' },
        ru: { w: 'Идти', p: 'idti' }, uk: { w: 'Йти', p: 'yty' }, pl: { w: 'Iść' }, el: { w: 'Πηγαίνω', p: 'piyéno' }, tr: { w: 'Gitmek' }, ja: { w: '行く', p: 'iku' }, zh: { w: '去', p: 'qù' }, ko: { w: '가다', p: 'gada' }, hi: { w: 'जाना', p: 'jaana' }, ar: { w: 'يذهب', p: 'yadhhab' }, he: { w: 'ללכת', p: 'lalechet' } } },
      { es: 'Tener', t: {
        en: { w: 'To have' }, fr: { w: 'Avoir' }, de: { w: 'Haben' }, nl: { w: 'Hebben' }, sv: { w: 'Ha' }, no: { w: 'Ha' }, da: { w: 'Have' }, it: { w: 'Avere' }, pt: { w: 'Ter' }, ca: { w: 'Tenir' }, ro: { w: 'A avea' },
        ru: { w: 'Иметь', p: "imet'" }, uk: { w: 'Мати', p: 'maty' }, pl: { w: 'Mieć' }, el: { w: 'Έχω', p: 'ého' }, tr: { w: 'Sahip olmak' }, ja: { w: '持つ', p: 'motsu' }, zh: { w: '有', p: 'yǒu' }, ko: { w: '가지다', p: 'gajida' }, hi: { w: 'पास होना', p: 'paas hona' }, ar: { w: 'يملك', p: 'yamlik' }, he: { w: 'יש', p: 'yesh' } } },
      { es: 'Vivir', t: {
        en: { w: 'To live' }, fr: { w: 'Vivre' }, de: { w: 'Wohnen' }, nl: { w: 'Wonen' }, sv: { w: 'Bo' }, no: { w: 'Bo' }, da: { w: 'Bo' }, it: { w: 'Vivere' }, pt: { w: 'Viver' }, ca: { w: 'Viure' }, ro: { w: 'A locui' },
        ru: { w: 'Жить', p: "zhit'" }, uk: { w: 'Жити', p: 'zhyty' }, pl: { w: 'Mieszkać' }, el: { w: 'Ζω', p: 'zo' }, tr: { w: 'Yaşamak' }, ja: { w: '住む', p: 'sumu' }, zh: { w: '住', p: 'zhù' }, ko: { w: '살다', p: 'salda' }, hi: { w: 'रहना', p: 'rahna' }, ar: { w: 'يعيش', p: 'yaʿish' }, he: { w: 'לגור', p: 'lagur' } } },
      { es: 'Trabajar', t: {
        en: { w: 'To work' }, fr: { w: 'Travailler' }, de: { w: 'Arbeiten' }, nl: { w: 'Werken' }, sv: { w: 'Arbeta' }, no: { w: 'Jobbe' }, da: { w: 'Arbejde' }, it: { w: 'Lavorare' }, pt: { w: 'Trabalhar' }, ca: { w: 'Treballar' }, ro: { w: 'A munci' },
        ru: { w: 'Работать', p: "rabotat'" }, uk: { w: 'Працювати', p: 'pratsyuvaty' }, pl: { w: 'Pracować' }, el: { w: 'Δουλεύω', p: 'dulévo' }, tr: { w: 'Çalışmak' }, ja: { w: '働く', p: 'hataraku' }, zh: { w: '工作', p: 'gōngzuò' }, ko: { w: '일하다', p: 'ilhada' }, hi: { w: 'काम करना', p: 'kaam karna' }, ar: { w: 'يعمل', p: 'yaʿmal' }, he: { w: 'לעבוד', p: 'laavod' } } },
      { es: 'Estudiar', t: {
        en: { w: 'To study' }, fr: { w: 'Étudier' }, de: { w: 'Lernen' }, nl: { w: 'Studeren' }, sv: { w: 'Studera' }, no: { w: 'Studere' }, da: { w: 'Studere' }, it: { w: 'Studiare' }, pt: { w: 'Estudar' }, ca: { w: 'Estudiar' }, ro: { w: 'A studia' },
        ru: { w: 'Учиться', p: "uchit'sya" }, uk: { w: 'Вчитися', p: 'vchytysya' }, pl: { w: 'Uczyć się' }, el: { w: 'Μελετώ', p: 'meletó' }, tr: { w: 'Ders çalışmak' }, ja: { w: '勉強する', p: 'benkyō suru' }, zh: { w: '学习', p: 'xuéxí' }, ko: { w: '공부하다', p: 'gongbuhada' }, hi: { w: 'पढ़ना', p: 'padhna' }, ar: { w: 'يدرس', p: 'yadrus' }, he: { w: 'ללמוד', p: 'lilmod' } } },
      { es: 'Comprar', t: {
        en: { w: 'To buy' }, fr: { w: 'Acheter' }, de: { w: 'Kaufen' }, nl: { w: 'Kopen' }, sv: { w: 'Köpa' }, no: { w: 'Kjøpe' }, da: { w: 'Købe' }, it: { w: 'Comprare' }, pt: { w: 'Comprar' }, ca: { w: 'Comprar' }, ro: { w: 'A cumpăra' },
        ru: { w: 'Покупать', p: "pokupat'" }, uk: { w: 'Купувати', p: 'kupuvaty' }, pl: { w: 'Kupować' }, el: { w: 'Αγοράζω', p: 'agorázo' }, tr: { w: 'Satın almak' }, ja: { w: '買う', p: 'kau' }, zh: { w: '买', p: 'mǎi' }, ko: { w: '사다', p: 'sada' }, hi: { w: 'खरीदना', p: 'kharidna' }, ar: { w: 'يشتري', p: 'yashtari' }, he: { w: 'לקנות', p: 'liknot' } } },
    ],
  },
  {
    id: 'cuerpo',
    level: 'A1',
    name: 'El cuerpo',
    icon: '🧍',
    items: [
      { es: 'Cabeza', t: {
        en: { w: 'Head' }, fr: { w: 'Tête' }, de: { w: 'Kopf' }, nl: { w: 'Hoofd' }, sv: { w: 'Huvud' }, no: { w: 'Hode' }, da: { w: 'Hoved' }, it: { w: 'Testa' }, pt: { w: 'Cabeça' }, ca: { w: 'Cap' }, ro: { w: 'Cap' },
        ru: { w: 'Голова', p: 'golova' }, uk: { w: 'Голова', p: 'holova' }, pl: { w: 'Głowa' }, el: { w: 'Κεφάλι', p: 'kefáli' }, tr: { w: 'Baş' }, ja: { w: '頭', p: 'atama' }, zh: { w: '头', p: 'tóu' }, ko: { w: '머리', p: 'meori' }, hi: { w: 'सिर', p: 'sir' }, ar: { w: 'رأس', p: 'raʾs' }, he: { w: 'ראש', p: 'rosh' } } },
      { es: 'Mano', t: {
        en: { w: 'Hand' }, fr: { w: 'Main' }, de: { w: 'Hand' }, nl: { w: 'Hand' }, sv: { w: 'Hand' }, no: { w: 'Hånd' }, da: { w: 'Hånd' }, it: { w: 'Mano' }, pt: { w: 'Mão' }, ca: { w: 'Mà' }, ro: { w: 'Mână' },
        ru: { w: 'Рука', p: 'ruka' }, uk: { w: 'Рука', p: 'ruka' }, pl: { w: 'Ręka' }, el: { w: 'Χέρι', p: 'héri' }, tr: { w: 'El' }, ja: { w: '手', p: 'te' }, zh: { w: '手', p: 'shǒu' }, ko: { w: '손', p: 'son' }, hi: { w: 'हाथ', p: 'haath' }, ar: { w: 'يد', p: 'yad' }, he: { w: 'יד', p: 'yad' } } },
      { es: 'Ojo', t: {
        en: { w: 'Eye' }, fr: { w: 'Œil' }, de: { w: 'Auge' }, nl: { w: 'Oog' }, sv: { w: 'Öga' }, no: { w: 'Øye' }, da: { w: 'Øje' }, it: { w: 'Occhio' }, pt: { w: 'Olho' }, ca: { w: 'Ull' }, ro: { w: 'Ochi' },
        ru: { w: 'Глаз', p: 'glaz' }, uk: { w: 'Око', p: 'oko' }, pl: { w: 'Oko' }, el: { w: 'Μάτι', p: 'máti' }, tr: { w: 'Göz' }, ja: { w: '目', p: 'me' }, zh: { w: '眼睛', p: 'yǎnjing' }, ko: { w: '눈', p: 'nun' }, hi: { w: 'आँख', p: 'aankh' }, ar: { w: 'عين', p: 'ʿayn' }, he: { w: 'עין', p: 'ayin' } } },
      { es: 'Boca', t: {
        en: { w: 'Mouth' }, fr: { w: 'Bouche' }, de: { w: 'Mund' }, nl: { w: 'Mond' }, sv: { w: 'Mun' }, no: { w: 'Munn' }, da: { w: 'Mund' }, it: { w: 'Bocca' }, pt: { w: 'Boca' }, ca: { w: 'Boca' }, ro: { w: 'Gură' },
        ru: { w: 'Рот', p: 'rot' }, uk: { w: 'Рот', p: 'rot' }, pl: { w: 'Usta' }, el: { w: 'Στόμα', p: 'stóma' }, tr: { w: 'Ağız' }, ja: { w: '口', p: 'kuchi' }, zh: { w: '嘴', p: 'zuǐ' }, ko: { w: '입', p: 'ip' }, hi: { w: 'मुँह', p: 'munh' }, ar: { w: 'فم', p: 'fam' }, he: { w: 'פה', p: 'pe' } } },
      { es: 'Pie', t: {
        en: { w: 'Foot' }, fr: { w: 'Pied' }, de: { w: 'Fuß' }, nl: { w: 'Voet' }, sv: { w: 'Fot' }, no: { w: 'Fot' }, da: { w: 'Fod' }, it: { w: 'Piede' }, pt: { w: 'Pé' }, ca: { w: 'Peu' }, ro: { w: 'Picior' },
        ru: { w: 'Нога', p: 'noga' }, uk: { w: 'Нога', p: 'noha' }, pl: { w: 'Stopa' }, el: { w: 'Πόδι', p: 'pódi' }, tr: { w: 'Ayak' }, ja: { w: '足', p: 'ashi' }, zh: { w: '脚', p: 'jiǎo' }, ko: { w: '발', p: 'bal' }, hi: { w: 'पैर', p: 'pair' }, ar: { w: 'قدم', p: 'qadam' }, he: { w: 'רגל', p: 'regel' } } },
      { es: 'Corazón', t: {
        en: { w: 'Heart' }, fr: { w: 'Cœur' }, de: { w: 'Herz' }, nl: { w: 'Hart' }, sv: { w: 'Hjärta' }, no: { w: 'Hjerte' }, da: { w: 'Hjerte' }, it: { w: 'Cuore' }, pt: { w: 'Coração' }, ca: { w: 'Cor' }, ro: { w: 'Inimă' },
        ru: { w: 'Сердце', p: 'serdtse' }, uk: { w: 'Серце', p: 'sertse' }, pl: { w: 'Serce' }, el: { w: 'Καρδιά', p: 'kardiá' }, tr: { w: 'Kalp' }, ja: { w: '心臓', p: 'shinzō' }, zh: { w: '心', p: 'xīn' }, ko: { w: '심장', p: 'simjang' }, hi: { w: 'दिल', p: 'dil' }, ar: { w: 'قلب', p: 'qalb' }, he: { w: 'לב', p: 'lev' } } },
      { es: 'Nariz', t: {
        en: { w: 'Nose' }, fr: { w: 'Nez' }, de: { w: 'Nase' }, nl: { w: 'Neus' }, sv: { w: 'Näsa' }, no: { w: 'Nese' }, da: { w: 'Næse' }, it: { w: 'Naso' }, pt: { w: 'Nariz' }, ca: { w: 'Nas' }, ro: { w: 'Nas' },
        ru: { w: 'Нос', p: 'nos' }, uk: { w: 'Ніс', p: 'nis' }, pl: { w: 'Nos' }, el: { w: 'Μύτη', p: 'míti' }, tr: { w: 'Burun' }, ja: { w: '鼻', p: 'hana' }, zh: { w: '鼻子', p: 'bízi' }, ko: { w: '코', p: 'ko' }, hi: { w: 'नाक', p: 'naak' }, ar: { w: 'أنف', p: 'anf' }, he: { w: 'אף', p: 'af' } } },
      { es: 'Dedo', t: {
        en: { w: 'Finger' }, fr: { w: 'Doigt' }, de: { w: 'Finger' }, nl: { w: 'Vinger' }, sv: { w: 'Finger' }, no: { w: 'Finger' }, da: { w: 'Finger' }, it: { w: 'Dito' }, pt: { w: 'Dedo' }, ca: { w: 'Dit' }, ro: { w: 'Deget' },
        ru: { w: 'Палец', p: 'palets' }, uk: { w: 'Палець', p: "palets'" }, pl: { w: 'Palec' }, el: { w: 'Δάχτυλο', p: 'dáchtilo' }, tr: { w: 'Parmak' }, ja: { w: '指', p: 'yubi' }, zh: { w: '手指', p: 'shǒuzhǐ' }, ko: { w: '손가락', p: 'songarak' }, hi: { w: 'उंगली', p: 'ungli' }, ar: { w: 'إصبع', p: 'isbaʿ' }, he: { w: 'אצבע', p: 'etsba' } } },
      { es: 'Diente', t: {
        en: { w: 'Tooth' }, fr: { w: 'Dent' }, de: { w: 'Zahn' }, nl: { w: 'Tand' }, sv: { w: 'Tand' }, no: { w: 'Tann' }, da: { w: 'Tand' }, it: { w: 'Dente' }, pt: { w: 'Dente' }, ca: { w: 'Dent' }, ro: { w: 'Dinte' },
        ru: { w: 'Зуб', p: 'zub' }, uk: { w: 'Зуб', p: 'zub' }, pl: { w: 'Ząb' }, el: { w: 'Δόντι', p: 'dónti' }, tr: { w: 'Diş' }, ja: { w: '歯', p: 'ha' }, zh: { w: '牙齿', p: 'yáchǐ' }, ko: { w: '이', p: 'i' }, hi: { w: 'दाँत', p: 'daant' }, ar: { w: 'سن', p: 'sinn' }, he: { w: 'שן', p: 'shen' } } },
      { es: 'Cabello', t: {
        en: { w: 'Hair' }, fr: { w: 'Cheveux' }, de: { w: 'Haar' }, nl: { w: 'Haar' }, sv: { w: 'Hår' }, no: { w: 'Hår' }, da: { w: 'Hår' }, it: { w: 'Capelli' }, pt: { w: 'Cabelo' }, ca: { w: 'Cabell' }, ro: { w: 'Păr' },
        ru: { w: 'Волосы', p: 'volosy' }, uk: { w: 'Волосся', p: 'volossya' }, pl: { w: 'Włosy' }, el: { w: 'Μαλλιά', p: 'malliá' }, tr: { w: 'Saç' }, ja: { w: '髪', p: 'kami' }, zh: { w: '头发', p: 'tóufa' }, ko: { w: '머리카락', p: 'meorikarak' }, hi: { w: 'बाल', p: 'baal' }, ar: { w: 'شعر', p: "shaʿr" }, he: { w: 'שיער', p: 'sear' } } },
    ],
  },
  {
    id: 'ropa',
    level: 'A2',
    name: 'La ropa',
    icon: '👕',
    items: [
      { es: 'Camisa', t: {
        en: { w: 'Shirt' }, fr: { w: 'Chemise' }, de: { w: 'Hemd' }, nl: { w: 'Overhemd' }, sv: { w: 'Skjorta' }, no: { w: 'Skjorte' }, da: { w: 'Skjorte' }, it: { w: 'Camicia' }, pt: { w: 'Camisa' }, ca: { w: 'Camisa' }, ro: { w: 'Cămașă' },
        ru: { w: 'Рубашка', p: 'rubashka' }, uk: { w: 'Сорочка', p: 'sorochka' }, pl: { w: 'Koszula' }, el: { w: 'Πουκάμισο', p: 'pukámiso' }, tr: { w: 'Gömlek' }, ja: { w: 'シャツ', p: 'shatsu' }, zh: { w: '衬衫', p: 'chènshān' }, ko: { w: '셔츠', p: 'syeocheu' }, hi: { w: 'कमीज़', p: 'kameez' }, ar: { w: 'قميص', p: 'qamis' }, he: { w: 'חולצה', p: 'chultsa' } } },
      { es: 'Pantalones', t: {
        en: { w: 'Trousers' }, fr: { w: 'Pantalon' }, de: { w: 'Hose' }, nl: { w: 'Broek' }, sv: { w: 'Byxor' }, no: { w: 'Bukse' }, da: { w: 'Bukser' }, it: { w: 'Pantaloni' }, pt: { w: 'Calças' }, ca: { w: 'Pantalons' }, ro: { w: 'Pantaloni' },
        ru: { w: 'Брюки', p: 'bryuki' }, uk: { w: 'Штани', p: 'shtany' }, pl: { w: 'Spodnie' }, el: { w: 'Παντελόνι', p: 'pantelóni' }, tr: { w: 'Pantolon' }, ja: { w: 'ズボン', p: 'zubon' }, zh: { w: '裤子', p: 'kùzi' }, ko: { w: '바지', p: 'baji' }, hi: { w: 'पतलून', p: 'patloon' }, ar: { w: 'بنطلون', p: 'bantalon' }, he: { w: 'מכנסיים', p: 'michnasayim' } } },
      { es: 'Zapatos', t: {
        en: { w: 'Shoes' }, fr: { w: 'Chaussures' }, de: { w: 'Schuhe' }, nl: { w: 'Schoenen' }, sv: { w: 'Skor' }, no: { w: 'Sko' }, da: { w: 'Sko' }, it: { w: 'Scarpe' }, pt: { w: 'Sapatos' }, ca: { w: 'Sabates' }, ro: { w: 'Pantofi' },
        ru: { w: 'Туфли', p: 'tufli' }, uk: { w: 'Взуття', p: 'vzuttya' }, pl: { w: 'Buty' }, el: { w: 'Παπούτσια', p: 'papútsia' }, tr: { w: 'Ayakkabı' }, ja: { w: '靴', p: 'kutsu' }, zh: { w: '鞋子', p: 'xiézi' }, ko: { w: '신발', p: 'sinbal' }, hi: { w: 'जूते', p: 'joote' }, ar: { w: 'حذاء', p: 'hidhaaʾ' }, he: { w: 'נעליים', p: "na'alayim" } } },
      { es: 'Vestido', t: {
        en: { w: 'Dress' }, fr: { w: 'Robe' }, de: { w: 'Kleid' }, nl: { w: 'Jurk' }, sv: { w: 'Klänning' }, no: { w: 'Kjole' }, da: { w: 'Kjole' }, it: { w: 'Vestito' }, pt: { w: 'Vestido' }, ca: { w: 'Vestit' }, ro: { w: 'Rochie' },
        ru: { w: 'Платье', p: "plat'ye" }, uk: { w: 'Сукня', p: 'suknya' }, pl: { w: 'Sukienka' }, el: { w: 'Φόρεμα', p: 'fórema' }, tr: { w: 'Elbise' }, ja: { w: 'ドレス', p: 'doresu' }, zh: { w: '连衣裙', p: 'liányīqún' }, ko: { w: '원피스', p: 'wonpiseu' }, hi: { w: 'पोशाक', p: 'poshaak' }, ar: { w: 'فستان', p: 'fustan' }, he: { w: 'שמלה', p: 'simla' } } },
      { es: 'Abrigo', t: {
        en: { w: 'Coat' }, fr: { w: 'Manteau' }, de: { w: 'Mantel' }, nl: { w: 'Jas' }, sv: { w: 'Rock' }, no: { w: 'Frakk' }, da: { w: 'Frakke' }, it: { w: 'Cappotto' }, pt: { w: 'Casaco' }, ca: { w: 'Abric' }, ro: { w: 'Palton' },
        ru: { w: 'Пальто', p: "pal'to" }, uk: { w: 'Пальто', p: "pal'to" }, pl: { w: 'Płaszcz' }, el: { w: 'Παλτό', p: 'paltó' }, tr: { w: 'Palto' }, ja: { w: 'コート', p: 'kōto' }, zh: { w: '外套', p: 'wàitào' }, ko: { w: '코트', p: 'koteu' }, hi: { w: 'कोट', p: 'coat' }, ar: { w: 'معطف', p: 'miʿtaf' }, he: { w: 'מעיל', p: "me'il" } } },
      { es: 'Sombrero', t: {
        en: { w: 'Hat' }, fr: { w: 'Chapeau' }, de: { w: 'Hut' }, nl: { w: 'Hoed' }, sv: { w: 'Hatt' }, no: { w: 'Hatt' }, da: { w: 'Hat' }, it: { w: 'Cappello' }, pt: { w: 'Chapéu' }, ca: { w: 'Barret' }, ro: { w: 'Pălărie' },
        ru: { w: 'Шляпа', p: 'shlyapa' }, uk: { w: 'Капелюх', p: 'kapelyukh' }, pl: { w: 'Kapelusz' }, el: { w: 'Καπέλο', p: 'kapélo' }, tr: { w: 'Şapka' }, ja: { w: '帽子', p: 'bōshi' }, zh: { w: '帽子', p: 'màozi' }, ko: { w: '모자', p: 'moja' }, hi: { w: 'टोपी', p: 'topi' }, ar: { w: 'قبعة', p: 'qubbaʿa' }, he: { w: 'כובע', p: 'kova' } } },
    ],
  },
  {
    id: 'clima',
    level: 'A2',
    name: 'El clima',
    icon: '🌦️',
    items: [
      { es: 'Sol', t: {
        en: { w: 'Sun' }, fr: { w: 'Soleil' }, de: { w: 'Sonne' }, nl: { w: 'Zon' }, sv: { w: 'Sol' }, no: { w: 'Sol' }, da: { w: 'Sol' }, it: { w: 'Sole' }, pt: { w: 'Sol' }, ca: { w: 'Sol' }, ro: { w: 'Soare' },
        ru: { w: 'Солнце', p: 'solntse' }, uk: { w: 'Сонце', p: 'sontse' }, pl: { w: 'Słońce' }, el: { w: 'Ήλιος', p: 'ílios' }, tr: { w: 'Güneş' }, ja: { w: '太陽', p: 'taiyō' }, zh: { w: '太阳', p: 'tàiyáng' }, ko: { w: '태양', p: 'taeyang' }, hi: { w: 'सूरज', p: 'sooraj' }, ar: { w: 'شمس', p: 'shams' }, he: { w: 'שמש', p: 'shemesh' } } },
      { es: 'Lluvia', t: {
        en: { w: 'Rain' }, fr: { w: 'Pluie' }, de: { w: 'Regen' }, nl: { w: 'Regen' }, sv: { w: 'Regn' }, no: { w: 'Regn' }, da: { w: 'Regn' }, it: { w: 'Pioggia' }, pt: { w: 'Chuva' }, ca: { w: 'Pluja' }, ro: { w: 'Ploaie' },
        ru: { w: 'Дождь', p: "dozhd'" }, uk: { w: 'Дощ', p: 'doshch' }, pl: { w: 'Deszcz' }, el: { w: 'Βροχή', p: 'vrohí' }, tr: { w: 'Yağmur' }, ja: { w: '雨', p: 'ame' }, zh: { w: '雨', p: 'yǔ' }, ko: { w: '비', p: 'bi' }, hi: { w: 'बारिश', p: 'baarish' }, ar: { w: 'مطر', p: 'matar' }, he: { w: 'גשם', p: 'geshem' } } },
      { es: 'Nieve', t: {
        en: { w: 'Snow' }, fr: { w: 'Neige' }, de: { w: 'Schnee' }, nl: { w: 'Sneeuw' }, sv: { w: 'Snö' }, no: { w: 'Snø' }, da: { w: 'Sne' }, it: { w: 'Neve' }, pt: { w: 'Neve' }, ca: { w: 'Neu' }, ro: { w: 'Zăpadă' },
        ru: { w: 'Снег', p: 'sneg' }, uk: { w: 'Сніг', p: 'snih' }, pl: { w: 'Śnieg' }, el: { w: 'Χιόνι', p: 'hióni' }, tr: { w: 'Kar' }, ja: { w: '雪', p: 'yuki' }, zh: { w: '雪', p: 'xuě' }, ko: { w: '눈', p: 'nun' }, hi: { w: 'बर्फ़', p: 'barf' }, ar: { w: 'ثلج', p: 'thalj' }, he: { w: 'שלג', p: 'sheleg' } } },
      { es: 'Viento', t: {
        en: { w: 'Wind' }, fr: { w: 'Vent' }, de: { w: 'Wind' }, nl: { w: 'Wind' }, sv: { w: 'Vind' }, no: { w: 'Vind' }, da: { w: 'Vind' }, it: { w: 'Vento' }, pt: { w: 'Vento' }, ca: { w: 'Vent' }, ro: { w: 'Vânt' },
        ru: { w: 'Ветер', p: 'veter' }, uk: { w: 'Вітер', p: 'viter' }, pl: { w: 'Wiatr' }, el: { w: 'Άνεμος', p: 'ánemos' }, tr: { w: 'Rüzgar' }, ja: { w: '風', p: 'kaze' }, zh: { w: '风', p: 'fēng' }, ko: { w: '바람', p: 'baram' }, hi: { w: 'हवा', p: 'hawa' }, ar: { w: 'رياح', p: 'riyah' }, he: { w: 'רוח', p: 'ruach' } } },
      { es: 'Nube', t: {
        en: { w: 'Cloud' }, fr: { w: 'Nuage' }, de: { w: 'Wolke' }, nl: { w: 'Wolk' }, sv: { w: 'Moln' }, no: { w: 'Sky' }, da: { w: 'Sky' }, it: { w: 'Nuvola' }, pt: { w: 'Nuvem' }, ca: { w: 'Núvol' }, ro: { w: 'Nor' },
        ru: { w: 'Облако', p: 'oblako' }, uk: { w: 'Хмара', p: 'khmara' }, pl: { w: 'Chmura' }, el: { w: 'Σύννεφο', p: 'sínnefo' }, tr: { w: 'Bulut' }, ja: { w: '雲', p: 'kumo' }, zh: { w: '云', p: 'yún' }, ko: { w: '구름', p: 'gureum' }, hi: { w: 'बादल', p: 'baadal' }, ar: { w: 'سحابة', p: 'sahaba' }, he: { w: 'ענן', p: 'anan' } } },
      { es: 'Calor', t: {
        en: { w: 'Heat' }, fr: { w: 'Chaleur' }, de: { w: 'Hitze' }, nl: { w: 'Hitte' }, sv: { w: 'Värme' }, no: { w: 'Varme' }, da: { w: 'Varme' }, it: { w: 'Caldo' }, pt: { w: 'Calor' }, ca: { w: 'Calor' }, ro: { w: 'Căldură' },
        ru: { w: 'Жара', p: 'zhara' }, uk: { w: 'Спека', p: 'speka' }, pl: { w: 'Upał' }, el: { w: 'Ζέστη', p: 'zésti' }, tr: { w: 'Sıcak' }, ja: { w: '暑さ', p: 'atsusa' }, zh: { w: '热', p: 'rè' }, ko: { w: '더위', p: 'deowi' }, hi: { w: 'गर्मी', p: 'garmi' }, ar: { w: 'حرارة', p: 'harara' }, he: { w: 'חום', p: 'chom' } } },
    ],
  },
  {
    id: 'casa',
    level: 'A2',
    name: 'La casa',
    icon: '🏠',
    items: [
      { es: 'Casa', t: {
        en: { w: 'House' }, fr: { w: 'Maison' }, de: { w: 'Haus' }, nl: { w: 'Huis' }, sv: { w: 'Hus' }, no: { w: 'Hus' }, da: { w: 'Hus' }, it: { w: 'Casa' }, pt: { w: 'Casa' }, ca: { w: 'Casa' }, ro: { w: 'Casă' },
        ru: { w: 'Дом', p: 'dom' }, uk: { w: 'Дім', p: 'dim' }, pl: { w: 'Dom' }, el: { w: 'Σπίτι', p: 'spíti' }, tr: { w: 'Ev' }, ja: { w: '家', p: 'ie' }, zh: { w: '房子', p: 'fángzi' }, ko: { w: '집', p: 'jip' }, hi: { w: 'घर', p: 'ghar' }, ar: { w: 'منزل', p: 'manzil' }, he: { w: 'בית', p: 'bayit' } } },
      { es: 'Puerta', t: {
        en: { w: 'Door' }, fr: { w: 'Porte' }, de: { w: 'Tür' }, nl: { w: 'Deur' }, sv: { w: 'Dörr' }, no: { w: 'Dør' }, da: { w: 'Dør' }, it: { w: 'Porta' }, pt: { w: 'Porta' }, ca: { w: 'Porta' }, ro: { w: 'Ușă' },
        ru: { w: 'Дверь', p: "dver'" }, uk: { w: 'Двері', p: 'dveri' }, pl: { w: 'Drzwi' }, el: { w: 'Πόρτα', p: 'pórta' }, tr: { w: 'Kapı' }, ja: { w: 'ドア', p: 'doa' }, zh: { w: '门', p: 'mén' }, ko: { w: '문', p: 'mun' }, hi: { w: 'दरवाज़ा', p: 'darwaza' }, ar: { w: 'باب', p: 'bab' }, he: { w: 'דלת', p: 'delet' } } },
      { es: 'Ventana', t: {
        en: { w: 'Window' }, fr: { w: 'Fenêtre' }, de: { w: 'Fenster' }, nl: { w: 'Raam' }, sv: { w: 'Fönster' }, no: { w: 'Vindu' }, da: { w: 'Vindue' }, it: { w: 'Finestra' }, pt: { w: 'Janela' }, ca: { w: 'Finestra' }, ro: { w: 'Fereastră' },
        ru: { w: 'Окно', p: 'okno' }, uk: { w: 'Вікно', p: 'vikno' }, pl: { w: 'Okno' }, el: { w: 'Παράθυρο', p: 'paráthiro' }, tr: { w: 'Pencere' }, ja: { w: '窓', p: 'mado' }, zh: { w: '窗户', p: 'chuānghu' }, ko: { w: '창문', p: 'changmun' }, hi: { w: 'खिड़की', p: 'khidki' }, ar: { w: 'نافذة', p: 'nafidha' }, he: { w: 'חלון', p: 'chalon' } } },
      { es: 'Mesa', t: {
        en: { w: 'Table' }, fr: { w: 'Table' }, de: { w: 'Tisch' }, nl: { w: 'Tafel' }, sv: { w: 'Bord' }, no: { w: 'Bord' }, da: { w: 'Bord' }, it: { w: 'Tavolo' }, pt: { w: 'Mesa' }, ca: { w: 'Taula' }, ro: { w: 'Masă' },
        ru: { w: 'Стол', p: 'stol' }, uk: { w: 'Стіл', p: 'stil' }, pl: { w: 'Stół' }, el: { w: 'Τραπέζι', p: 'trapézi' }, tr: { w: 'Masa' }, ja: { w: 'テーブル', p: 'tēburu' }, zh: { w: '桌子', p: 'zhuōzi' }, ko: { w: '탁자', p: 'takja' }, hi: { w: 'मेज़', p: 'mez' }, ar: { w: 'طاولة', p: 'tawila' }, he: { w: 'שולחן', p: 'shulchan' } } },
      { es: 'Silla', t: {
        en: { w: 'Chair' }, fr: { w: 'Chaise' }, de: { w: 'Stuhl' }, nl: { w: 'Stoel' }, sv: { w: 'Stol' }, no: { w: 'Stol' }, da: { w: 'Stol' }, it: { w: 'Sedia' }, pt: { w: 'Cadeira' }, ca: { w: 'Cadira' }, ro: { w: 'Scaun' },
        ru: { w: 'Стул', p: 'stul' }, uk: { w: 'Стілець', p: "stilets'" }, pl: { w: 'Krzesło' }, el: { w: 'Καρέκλα', p: 'karékla' }, tr: { w: 'Sandalye' }, ja: { w: '椅子', p: 'isu' }, zh: { w: '椅子', p: 'yǐzi' }, ko: { w: '의자', p: 'uija' }, hi: { w: 'कुर्सी', p: 'kursi' }, ar: { w: 'كرسي', p: 'kursi' }, he: { w: 'כיסא', p: 'kise' } } },
      { es: 'Cama', t: {
        en: { w: 'Bed' }, fr: { w: 'Lit' }, de: { w: 'Bett' }, nl: { w: 'Bed' }, sv: { w: 'Säng' }, no: { w: 'Seng' }, da: { w: 'Seng' }, it: { w: 'Letto' }, pt: { w: 'Cama' }, ca: { w: 'Llit' }, ro: { w: 'Pat' },
        ru: { w: 'Кровать', p: "krovat'" }, uk: { w: 'Ліжко', p: 'lizhko' }, pl: { w: 'Łóżko' }, el: { w: 'Κρεβάτι', p: 'kreváti' }, tr: { w: 'Yatak' }, ja: { w: 'ベッド', p: 'beddo' }, zh: { w: '床', p: 'chuáng' }, ko: { w: '침대', p: 'chimdae' }, hi: { w: 'बिस्तर', p: 'bistar' }, ar: { w: 'سرير', p: 'sarir' }, he: { w: 'מיטה', p: 'mita' } } },
    ],
  },
  {
    id: 'emociones',
    level: 'B1',
    name: 'Emociones',
    icon: '😊',
    items: [
      { es: 'Feliz', t: {
        en: { w: 'Happy' }, fr: { w: 'Heureux' }, de: { w: 'Glücklich' }, nl: { w: 'Blij' }, sv: { w: 'Glad' }, no: { w: 'Glad' }, da: { w: 'Glad' }, it: { w: 'Felice' }, pt: { w: 'Feliz' }, ca: { w: 'Feliç' }, ro: { w: 'Fericit' },
        ru: { w: 'Счастливый', p: 'schastlivyy' }, uk: { w: 'Щасливий', p: 'shchaslyvyy' }, pl: { w: 'Szczęśliwy' }, el: { w: 'Χαρούμενος', p: 'haroúmenos' }, tr: { w: 'Mutlu' }, ja: { w: '幸せ', p: 'shiawase' }, zh: { w: '高兴', p: 'gāoxìng' }, ko: { w: '행복한', p: 'haengbokan' }, hi: { w: 'खुश', p: 'khush' }, ar: { w: 'سعيد', p: 'saʿid' }, he: { w: 'שמח', p: 'sameach' } } },
      { es: 'Triste', t: {
        en: { w: 'Sad' }, fr: { w: 'Triste' }, de: { w: 'Traurig' }, nl: { w: 'Verdrietig' }, sv: { w: 'Ledsen' }, no: { w: 'Trist' }, da: { w: 'Trist' }, it: { w: 'Triste' }, pt: { w: 'Triste' }, ca: { w: 'Trist' }, ro: { w: 'Trist' },
        ru: { w: 'Грустный', p: 'grustnyy' }, uk: { w: 'Сумний', p: 'sumnyy' }, pl: { w: 'Smutny' }, el: { w: 'Λυπημένος', p: 'lipiménos' }, tr: { w: 'Üzgün' }, ja: { w: '悲しい', p: 'kanashii' }, zh: { w: '伤心', p: 'shāngxīn' }, ko: { w: '슬픈', p: 'seulpeun' }, hi: { w: 'उदास', p: 'udaas' }, ar: { w: 'حزين', p: 'hazin' }, he: { w: 'עצוב', p: 'atsuv' } } },
      { es: 'Enojado', t: {
        en: { w: 'Angry' }, fr: { w: 'Fâché' }, de: { w: 'Wütend' }, nl: { w: 'Boos' }, sv: { w: 'Arg' }, no: { w: 'Sint' }, da: { w: 'Vred' }, it: { w: 'Arrabbiato' }, pt: { w: 'Zangado' }, ca: { w: 'Enfadat' }, ro: { w: 'Supărat' },
        ru: { w: 'Сердитый', p: 'serdityy' }, uk: { w: 'Сердитий', p: 'serdytyy' }, pl: { w: 'Zły' }, el: { w: 'Θυμωμένος', p: 'thimoménos' }, tr: { w: 'Kızgın' }, ja: { w: '怒っている', p: 'okotteiru' }, zh: { w: '生气', p: 'shēngqì' }, ko: { w: '화난', p: 'hwanan' }, hi: { w: 'गुस्सा', p: 'gussa' }, ar: { w: 'غاضب', p: 'ghadib' }, he: { w: 'כועס', p: "ko'es" } } },
      { es: 'Cansado', t: {
        en: { w: 'Tired' }, fr: { w: 'Fatigué' }, de: { w: 'Müde' }, nl: { w: 'Moe' }, sv: { w: 'Trött' }, no: { w: 'Trøtt' }, da: { w: 'Træt' }, it: { w: 'Stanco' }, pt: { w: 'Cansado' }, ca: { w: 'Cansat' }, ro: { w: 'Obosit' },
        ru: { w: 'Усталый', p: 'ustalyy' }, uk: { w: 'Втомлений', p: 'vtomlenyy' }, pl: { w: 'Zmęczony' }, el: { w: 'Κουρασμένος', p: 'kurazménos' }, tr: { w: 'Yorgun' }, ja: { w: '疲れた', p: 'tsukareta' }, zh: { w: '累', p: 'lèi' }, ko: { w: '피곤한', p: 'pigonhan' }, hi: { w: 'थका हुआ', p: 'thaka hua' }, ar: { w: 'متعب', p: 'mutʿab' }, he: { w: 'עייף', p: 'ayef' } } },
      { es: 'Asustado', t: {
        en: { w: 'Scared' }, fr: { w: 'Effrayé' }, de: { w: 'Verängstigt' }, nl: { w: 'Bang' }, sv: { w: 'Rädd' }, no: { w: 'Redd' }, da: { w: 'Bange' }, it: { w: 'Spaventato' }, pt: { w: 'Assustado' }, ca: { w: 'Espantat' }, ro: { w: 'Speriat' },
        ru: { w: 'Испуганный', p: 'ispugannyy' }, uk: { w: 'Наляканий', p: 'nalyakanyy' }, pl: { w: 'Przestraszony' }, el: { w: 'Φοβισμένος', p: 'fovizménos' }, tr: { w: 'Korkmuş' }, ja: { w: '怖がっている', p: 'kowagatteiru' }, zh: { w: '害怕', p: 'hàipà' }, ko: { w: '무서운', p: 'museoun' }, hi: { w: 'डरा हुआ', p: 'dara hua' }, ar: { w: 'خائف', p: 'khaʾif' }, he: { w: 'מפוחד', p: 'mefuchad' } } },
      { es: 'Sorprendido', t: {
        en: { w: 'Surprised' }, fr: { w: 'Surpris' }, de: { w: 'Überrascht' }, nl: { w: 'Verrast' }, sv: { w: 'Förvånad' }, no: { w: 'Overrasket' }, da: { w: 'Overrasket' }, it: { w: 'Sorpreso' }, pt: { w: 'Surpreso' }, ca: { w: 'Sorprès' }, ro: { w: 'Surprins' },
        ru: { w: 'Удивлённый', p: 'udivlyonnyy' }, uk: { w: 'Здивований', p: 'zdyvovanyy' }, pl: { w: 'Zaskoczony' }, el: { w: 'Έκπληκτος', p: 'ékpliktos' }, tr: { w: 'Şaşırmış' }, ja: { w: '驚いた', p: 'odoroita' }, zh: { w: '惊讶', p: 'jīngyà' }, ko: { w: '놀란', p: 'nollan' }, hi: { w: 'हैरान', p: 'hairaan' }, ar: { w: 'متفاجئ', p: 'mutafajiʾ' }, he: { w: 'מופתע', p: 'mufta' } } },
    ],
  },
]
