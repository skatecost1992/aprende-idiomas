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
    ],
  },
  {
    id: 'numeros',
    level: 'A1',
    name: 'Números (1-10)',
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
