// Listas de verbos del resto de idiomas: griego, turco, japonés, chino,
// coreano, hindi, árabe y hebreo.
//
// Son las lenguas donde menos sentido tiene copiar el esquema del inglés, así
// que cada una usa las categorías que de verdad existen en su gramática:
//
//   griego   presente / aoristo / forma con έχω
//   turco    no tiene verbos irregulares: lo que cambia es la raíz por armonía
//            y sonorización, y los "phrasal" son los verbos compuestos con
//            etmek, olmak y yapmak
//   japonés  solo dos verbos irregulares; el resto son godan o ichidan, y el
//            equivalente a los phrasal verbs son los auxiliares de forma て
//   chino    los verbos no se conjugan: se marca el aspecto con 了 y 过, y el
//            equivalente a los phrasal verbs son los complementos resultativos
//   coreano  clases de irregularidad por consonante final (ㄷ, ㅂ, ㅅ, 르)
//   hindi    los verbos compuestos y los conjuntos con करना
//   árabe    el verbo cambia de sentido según la preposición que rige
//   hebreo   lo mismo, con preposición regida
//
// Las lenguas con alfabeto propio llevan columna de pronunciación.

const colsTr = (base, past, part) => [
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

// Variante con una columna extra para la clase del verbo (godan, irregular ㄷ,
// hueco...). Va en columna propia y no dentro del español, para que el quiz no
// pregunte «¿cómo se dice nadar (godan)?».
const colsClase = (base, past, part, clase) => [
  { k: 'base', l: base },
  { k: 'past', l: past },
  { k: 'part', l: part },
  { k: 'tr', l: 'Pronunciación' },
  { k: 'es', l: 'Español' },
  { k: 'clase', l: clase },
]

// ---------------------------------------------------------------- GRIEGO ----

const elIrregular = [
  { base: 'είμαι', past: 'ήμουν', part: '—', tr: 'íme / ímun', es: 'ser, estar' },
  { base: 'έχω', past: 'είχα', part: '—', tr: 'ého / íha', es: 'tener' },
  { base: 'πηγαίνω', past: 'πήγα', part: 'πάει', tr: 'pigéno / píga / pái', es: 'ir' },
  { base: 'έρχομαι', past: 'ήρθα', part: 'έρθει', tr: 'érhome / írtha / érthi', es: 'venir' },
  { base: 'βλέπω', past: 'είδα', part: 'δει', tr: 'vlépo / ída / di', es: 'ver' },
  { base: 'λέω', past: 'είπα', part: 'πει', tr: 'léo / ípa / pi', es: 'decir' },
  { base: 'τρώω', past: 'έφαγα', part: 'φάει', tr: 'tróo / éfaga / fái', es: 'comer' },
  { base: 'πίνω', past: 'ήπια', part: 'πιει', tr: 'píno / ípia / pii', es: 'beber' },
  { base: 'δίνω', past: 'έδωσα', part: 'δώσει', tr: 'díno / édosa / dósi', es: 'dar' },
  { base: 'παίρνω', past: 'πήρα', part: 'πάρει', tr: 'pérno / píra / pári', es: 'tomar, coger' },
  { base: 'μπορώ', past: 'μπόρεσα', part: 'μπορέσει', tr: 'boró / bóresa / borési', es: 'poder' },
  { base: 'βρίσκω', past: 'βρήκα', part: 'βρει', tr: 'vrísko / vríka / vri', es: 'encontrar' },
  { base: 'φεύγω', past: 'έφυγα', part: 'φύγει', tr: 'févgo / éfiga / fíyi', es: 'irse' },
  { base: 'μένω', past: 'έμεινα', part: 'μείνει', tr: 'méno / émina / míni', es: 'quedarse, vivir' },
  { base: 'ξέρω', past: 'ήξερα', part: '—', tr: 'kséro / íksera', es: 'saber' },
  { base: 'κάνω', past: 'έκανα', part: 'κάνει', tr: 'káno / ékana / káni', es: 'hacer' },
]

const elRegular = [
  { base: 'γράφω', past: 'έγραψα', part: 'γράψει', tr: 'gráfo / égrapsa / grápsi', es: 'escribir' },
  { base: 'διαβάζω', past: 'διάβασα', part: 'διαβάσει', tr: 'diavázo / diávasa / diavási', es: 'leer' },
  { base: 'δουλεύω', past: 'δούλεψα', part: 'δουλέψει', tr: 'dulévo / dúlepsa / dulépsi', es: 'trabajar' },
  { base: 'παίζω', past: 'έπαιξα', part: 'παίξει', tr: 'pézo / épeksa / péksi', es: 'jugar' },
  { base: 'αγοράζω', past: 'αγόρασα', part: 'αγοράσει', tr: 'agorázo / agórasa / agorási', es: 'comprar' },
  { base: 'μιλάω', past: 'μίλησα', part: 'μιλήσει', tr: 'miláo / mílisa / milísi', es: 'hablar' },
  { base: 'ρωτάω', past: 'ρώτησα', part: 'ρωτήσει', tr: 'rotáo / rótisa / rotísi', es: 'preguntar' },
  { base: 'αγαπάω', past: 'αγάπησα', part: 'αγαπήσει', tr: 'agapáo / agápisa / agapísi', es: 'amar' },
  { base: 'περιμένω', past: 'περίμενα', part: 'περιμένει', tr: 'periméno / perímena / periméni', es: 'esperar' },
  { base: 'καταλαβαίνω', past: 'κατάλαβα', part: 'καταλάβει', tr: 'katalavéno / katálava / katalávi', es: 'entender' },
  { base: 'ακούω', past: 'άκουσα', part: 'ακούσει', tr: 'akúo / ákusa / akúsi', es: 'escuchar' },
  { base: 'ανοίγω', past: 'άνοιξα', part: 'ανοίξει', tr: 'anígo / ániksa / aníksi', es: 'abrir' },
]

const elExpresiones = [
  { v: 'σηκώνομαι', es: 'levantarse', ex: 'Σηκώνομαι νωρίς.' },
  { v: 'ντύνομαι', es: 'vestirse', ex: 'Ντύνομαι γρήγορα.' },
  { v: 'ξυπνάω', es: 'despertarse', ex: 'Ξυπνάω στις έξι.' },
  { v: 'με λένε', es: 'me llamo', ex: 'Με λένε Άννα.' },
  { v: 'θυμάμαι', es: 'acordarse', ex: 'Σε θυμάμαι.' },
  { v: 'χρειάζομαι', es: 'necesitar', ex: 'Χρειάζομαι βοήθεια.' },
  { v: 'μου αρέσει', es: 'me gusta', ex: 'Μου αρέσει ο καφές.' },
  { v: 'πάω να', es: 'ir a (hacer algo)', ex: 'Πάω να φάω.' },
  { v: 'αρχίζω να', es: 'empezar a', ex: 'Αρχίζω να καταλαβαίνω.' },
  { v: 'συνεχίζω να', es: 'seguir haciendo algo', ex: 'Συνεχίζω να δουλεύω.' },
]

const elModales = [
  { v: 'μπορώ να', fn: 'Capacidad, posibilidad y permiso.', ex: ['Μπορώ να μιλήσω ελληνικά.', 'Μπορώ να μπω;'] },
  { v: 'πρέπει να', fn: 'Obligación o necesidad; es impersonal.', ex: ['Πρέπει να φύγω.', 'Πρέπει να κοιμάσαι περισσότερο.'] },
  { v: 'θέλω να', fn: 'Voluntad y deseo.', ex: ['Θέλω έναν καφέ.', 'Τι θέλεις να κάνεις;'] },
  { v: 'ξέρω να', fn: 'Capacidad aprendida, saber hacer algo.', ex: ['Ξέρω να κολυμπάω.', 'Ξέρεις να οδηγείς;'] },
  { v: 'θα', fn: 'Partícula de futuro y de condicional.', ex: ['Θα πάω αύριο.', 'Θα ήθελα έναν καφέ.'] },
]

// ----------------------------------------------------------------- TURCO ----

const trIrregular = [
  { base: 'gitmek', past: 'gittim', part: 'gidiyorum', es: 'ir' },
  { base: 'etmek', past: 'ettim', part: 'ediyorum', es: 'hacer (auxiliar)' },
  { base: 'demek', past: 'dedim', part: 'diyorum', es: 'decir' },
  { base: 'yemek', past: 'yedim', part: 'yiyorum', es: 'comer' },
  { base: 'olmak', past: 'oldum', part: 'oluyorum', es: 'ser, llegar a ser' },
  { base: 'gelmek', past: 'geldim', part: 'geliyorum', es: 'venir' },
  { base: 'görmek', past: 'gördüm', part: 'görüyorum', es: 'ver' },
  { base: 'vermek', past: 'verdim', part: 'veriyorum', es: 'dar' },
  { base: 'almak', past: 'aldım', part: 'alıyorum', es: 'tomar, comprar' },
  { base: 'bilmek', past: 'bildim', part: 'biliyorum', es: 'saber' },
  { base: 'bulmak', past: 'buldum', part: 'buluyorum', es: 'encontrar' },
  { base: 'kalmak', past: 'kaldım', part: 'kalıyorum', es: 'quedarse' },
]

const trRegular = [
  { base: 'konuşmak', past: 'konuştum', part: 'konuşuyorum', es: 'hablar' },
  { base: 'çalışmak', past: 'çalıştım', part: 'çalışıyorum', es: 'trabajar, estudiar' },
  { base: 'okumak', past: 'okudum', part: 'okuyorum', es: 'leer' },
  { base: 'yazmak', past: 'yazdım', part: 'yazıyorum', es: 'escribir' },
  { base: 'içmek', past: 'içtim', part: 'içiyorum', es: 'beber' },
  { base: 'bakmak', past: 'baktım', part: 'bakıyorum', es: 'mirar' },
  { base: 'dinlemek', past: 'dinledim', part: 'dinliyorum', es: 'escuchar' },
  { base: 'beklemek', past: 'bekledim', part: 'bekliyorum', es: 'esperar' },
  { base: 'oynamak', past: 'oynadım', part: 'oynuyorum', es: 'jugar' },
  { base: 'sevmek', past: 'sevdim', part: 'seviyorum', es: 'amar, gustar' },
  { base: 'uyumak', past: 'uyudum', part: 'uyuyorum', es: 'dormir' },
  { base: 'anlamak', past: 'anladım', part: 'anlıyorum', es: 'entender' },
  { base: 'açmak', past: 'açtım', part: 'açıyorum', es: 'abrir' },
  { base: 'kapatmak', past: 'kapattım', part: 'kapatıyorum', es: 'cerrar' },
]

const trCompuestos = [
  { v: 'teşekkür etmek', es: 'agradecer', ex: 'Sana teşekkür ederim.' },
  { v: 'telefon etmek', es: 'llamar por teléfono', ex: 'Sana telefon edeceğim.' },
  { v: 'yardım etmek', es: 'ayudar', ex: 'Bana yardım eder misin?' },
  { v: 'devam etmek', es: 'continuar', ex: 'Çalışmaya devam ediyorum.' },
  { v: 'kabul etmek', es: 'aceptar', ex: 'Teklifi kabul ettim.' },
  { v: 'merak etmek', es: 'tener curiosidad, preocuparse', ex: 'Merak etme!' },
  { v: 'hasta olmak', es: 'ponerse enfermo', ex: 'Dün hasta oldum.' },
  { v: 'mutlu olmak', es: 'ser feliz, alegrarse', ex: 'Çok mutlu oldum.' },
  { v: 'alışveriş yapmak', es: 'hacer la compra', ex: 'Alışveriş yapıyorum.' },
  { v: 'spor yapmak', es: 'hacer deporte', ex: 'Her gün spor yaparım.' },
  { v: 'kahvaltı yapmak', es: 'desayunar', ex: 'Kahvaltı yaptın mı?' },
  { v: 'dikkat etmek', es: 'prestar atención', ex: 'Dikkat et!' },
]

const trModales = [
  { v: '-ebilmek / -abilmek', fn: 'Capacidad y permiso: es un sufijo, no un verbo aparte.', ex: ['Türkçe konuşabilirim.', 'Girebilir miyim?'] },
  { v: '-meli / -malı', fn: 'Obligación o consejo: deber.', ex: ['Bugün çalışmalıyım.', 'Daha çok uyumalısın.'] },
  { v: 'istemek', fn: 'Voluntad y deseo.', ex: ['Bir kahve istiyorum.', 'Ne yapmak istiyorsun?'] },
  { v: 'lazım / gerek', fn: 'Necesidad impersonal: hace falta.', ex: ['Gitmem lazım.', 'Dinlenmen gerek.'] },
  { v: 'bilmek', fn: 'Saber hacer algo (tras la forma -meyi).', ex: ['Yüzmeyi biliyorum.', 'Araba kullanmayı biliyor musun?'] },
]

// -------------------------------------------------------------- JAPONÉS ----

const jaIrregular = [
  { base: 'する', past: 'して', part: 'した', tr: 'suru / shite / shita', es: 'hacer' },
  { base: '来る', past: '来て', part: '来た', tr: 'kuru / kite / kita', es: 'venir' },
  { base: '行く', past: '行って', part: '行った', tr: 'iku / itte / itta', es: 'ir' },
  { base: 'ある', past: 'あって', part: 'あった', tr: 'aru / atte / atta', es: 'haber (cosas)' },
  { base: 'いる', past: 'いて', part: 'いた', tr: 'iru / ite / ita', es: 'haber, estar (seres vivos)' },
  { base: '勉強する', past: '勉強して', part: '勉強した', tr: 'benkyō suru / shite / shita', es: 'estudiar' },
  { base: '持って来る', past: '持って来て', part: '持って来た', tr: 'motte kuru / kite / kita', es: 'traer' },
]

const jaRegular = [
  { base: '食べる', past: '食べて', part: '食べた', tr: 'taberu / tabete / tabeta', es: 'comer', clase: 'ichidan' },
  { base: '見る', past: '見て', part: '見た', tr: 'miru / mite / mita', es: 'ver', clase: 'ichidan' },
  { base: '寝る', past: '寝て', part: '寝た', tr: 'neru / nete / neta', es: 'dormir', clase: 'ichidan' },
  { base: '起きる', past: '起きて', part: '起きた', tr: 'okiru / okite / okita', es: 'levantarse', clase: 'ichidan' },
  { base: '書く', past: '書いて', part: '書いた', tr: 'kaku / kaite / kaita', es: 'escribir', clase: 'godan' },
  { base: '読む', past: '読んで', part: '読んだ', tr: 'yomu / yonde / yonda', es: 'leer', clase: 'godan' },
  { base: '飲む', past: '飲んで', part: '飲んだ', tr: 'nomu / nonde / nonda', es: 'beber', clase: 'godan' },
  { base: '話す', past: '話して', part: '話した', tr: 'hanasu / hanashite / hanashita', es: 'hablar', clase: 'godan' },
  { base: '買う', past: '買って', part: '買った', tr: 'kau / katte / katta', es: 'comprar', clase: 'godan' },
  { base: '待つ', past: '待って', part: '待った', tr: 'matsu / matte / matta', es: 'esperar', clase: 'godan' },
  { base: '帰る', past: '帰って', part: '帰った', tr: 'kaeru / kaette / kaetta', es: 'volver', clase: 'godan' },
  { base: '聞く', past: '聞いて', part: '聞いた', tr: 'kiku / kiite / kiita', es: 'escuchar, preguntar', clase: 'godan' },
  { base: '働く', past: '働いて', part: '働いた', tr: 'hataraku / hataraite / hataraita', es: 'trabajar', clase: 'godan' },
  { base: '泳ぐ', past: '泳いで', part: '泳いだ', tr: 'oyogu / oyoide / oyoida', es: 'nadar', clase: 'godan' },
]

const jaAuxiliares = [
  { v: '〜ている', es: 'estar haciendo algo', ex: '本を読んでいます。 (hon o yonde imasu)' },
  { v: '〜てみる', es: 'probar a hacer algo', ex: '食べてみます。 (tabete mimasu)' },
  { v: '〜てしまう', es: 'acabar haciendo algo, sin querer', ex: '忘れてしまった。 (wasurete shimatta)' },
  { v: '〜ておく', es: 'dejar algo hecho de antemano', ex: '買っておきます。 (katte okimasu)' },
  { v: '〜ていく', es: 'ir haciendo, alejarse', ex: '歩いていきます。 (aruite ikimasu)' },
  { v: '〜てくる', es: 'venir haciendo, acercarse', ex: '買ってきます。 (katte kimasu)' },
  { v: '〜てあげる', es: 'hacer algo por otro', ex: '教えてあげます。 (oshiete agemasu)' },
  { v: '〜てもらう', es: 'recibir el favor de que alguien haga algo', ex: '教えてもらいます。 (oshiete moraimasu)' },
  { v: '〜てください', es: 'por favor, haz...', ex: '待ってください。 (matte kudasai)' },
  { v: '立ち上がる', es: 'ponerse de pie (verbo compuesto)', ex: '彼は立ち上がった。 (kare wa tachiagatta)' },
]

const jaModales = [
  { v: '〜ことができる', fn: 'Capacidad y posibilidad: poder.', ex: ['日本語を話すことができます。', '泳ぐことができますか。'] },
  { v: '〜なければならない', fn: 'Obligación: tener que.', ex: ['働かなければなりません。', '早く寝なければならない。'] },
  { v: '〜たい', fn: 'Deseo del hablante: querer hacer algo.', ex: ['コーヒーが飲みたいです。', '何がしたいですか。'] },
  { v: '〜てもいい', fn: 'Permiso: se puede.', ex: ['入ってもいいですか。', 'ここで食べてもいいです。'] },
  { v: '〜ほうがいい', fn: 'Consejo: es mejor que.', ex: ['休んだほうがいいです。', '病院に行ったほうがいい。'] },
  { v: '〜かもしれない', fn: 'Posibilidad: puede que.', ex: ['雨が降るかもしれません。', '来ないかもしれない。'] },
]

// ----------------------------------------------------------------- CHINO ----

const zhAspecto = [
  { base: '吃', past: '吃了', part: '吃过', tr: 'chī / chī le / chī guo', es: 'comer' },
  { base: '喝', past: '喝了', part: '喝过', tr: 'hē / hē le / hē guo', es: 'beber' },
  { base: '去', past: '去了', part: '去过', tr: 'qù / qù le / qù guo', es: 'ir' },
  { base: '来', past: '来了', part: '来过', tr: 'lái / lái le / lái guo', es: 'venir' },
  { base: '看', past: '看了', part: '看过', tr: 'kàn / kàn le / kàn guo', es: 'mirar, leer' },
  { base: '买', past: '买了', part: '买过', tr: 'mǎi / mǎi le / mǎi guo', es: 'comprar' },
  { base: '做', past: '做了', part: '做过', tr: 'zuò / zuò le / zuò guo', es: 'hacer' },
  { base: '写', past: '写了', part: '写过', tr: 'xiě / xiě le / xiě guo', es: 'escribir' },
  { base: '说', past: '说了', part: '说过', tr: 'shuō / shuō le / shuō guo', es: 'decir, hablar' },
  { base: '学', past: '学了', part: '学过', tr: 'xué / xué le / xué guo', es: 'aprender' },
  { base: '听', past: '听了', part: '听过', tr: 'tīng / tīng le / tīng guo', es: 'escuchar' },
  { base: '住', past: '住了', part: '住过', tr: 'zhù / zhù le / zhù guo', es: 'vivir, residir' },
  { base: '工作', past: '工作了', part: '工作过', tr: 'gōngzuò / gōngzuò le / gōngzuò guo', es: 'trabajar' },
  { base: '睡觉', past: '睡觉了', part: '睡过觉', tr: 'shuìjiào / le / guo', es: 'dormir' },
]

const zhComplementos = [
  { v: '看见', es: 'ver (y lograr verlo)', ex: '我看见他了。 (wǒ kànjiàn tā le)' },
  { v: '听见', es: 'oír (y lograr oírlo)', ex: '你听见了吗？ (nǐ tīngjiàn le ma)' },
  { v: '听懂', es: 'entender lo que se oye', ex: '我听懂了。 (wǒ tīngdǒng le)' },
  { v: '看懂', es: 'entender lo que se lee', ex: '这本书我看懂了。' },
  { v: '吃完', es: 'terminar de comer', ex: '我吃完了。 (wǒ chīwán le)' },
  { v: '做完', es: 'terminar de hacer', ex: '作业做完了。 (zuòyè zuòwán le)' },
  { v: '找到', es: 'encontrar (y dar con ello)', ex: '我找到钥匙了。' },
  { v: '买到', es: 'conseguir comprar', ex: '票买到了。 (piào mǎidào le)' },
  { v: '学会', es: 'aprender (y dominarlo)', ex: '我学会了游泳。' },
  { v: '走进', es: 'entrar andando', ex: '他走进房间。 (tā zǒujìn fángjiān)' },
  { v: '拿出来', es: 'sacar algo', ex: '把书拿出来。 (bǎ shū ná chūlái)' },
  { v: '起来', es: 'levantarse, empezar a', ex: '站起来！ (zhàn qǐlái)' },
]

const zhModales = [
  { v: '能', fn: 'Capacidad física o permiso según las circunstancias.', ex: ['我能游泳。 (wǒ néng yóuyǒng)', '我能进来吗？'] },
  { v: '会', fn: 'Capacidad aprendida, y también futuro probable.', ex: ['我会说中文。 (wǒ huì shuō zhōngwén)', '明天会下雨。'] },
  { v: '可以', fn: 'Permiso: se puede.', ex: ['可以进来吗？ (kěyǐ jìnlái ma)', '你可以走了。'] },
  { v: '应该', fn: 'Consejo o deber moral: debería.', ex: ['你应该多休息。', '我们应该走了。'] },
  { v: '要', fn: 'Querer, ir a hacer algo, y necesidad.', ex: ['我要一杯咖啡。', '我要走了。'] },
  { v: '想', fn: 'Querer, tener ganas de; más suave que 要.', ex: ['我想喝茶。 (wǒ xiǎng hē chá)', '你想做什么？'] },
  { v: '必须', fn: 'Obligación fuerte: tener que.', ex: ['你必须现在走。', '我必须工作。'] },
]

// --------------------------------------------------------------- COREANO ----

const koIrregular = [
  { base: '듣다', past: '들었어요', part: '들어요', tr: 'deutda / deureosseoyo / deureoyo', es: 'escuchar', clase: 'ㄷ' },
  { base: '걷다', past: '걸었어요', part: '걸어요', tr: 'geotda / georeosseoyo / georeoyo', es: 'caminar', clase: 'ㄷ' },
  { base: '덥다', past: '더웠어요', part: '더워요', tr: 'deopda / deowosseoyo / deowoyo', es: 'hacer calor', clase: 'ㅂ' },
  { base: '춥다', past: '추웠어요', part: '추워요', tr: 'chupda / chuwosseoyo / chuwoyo', es: 'hacer frío', clase: 'ㅂ' },
  { base: '돕다', past: '도왔어요', part: '도와요', tr: 'dopda / dowasseoyo / dowayo', es: 'ayudar', clase: 'ㅂ' },
  { base: '짓다', past: '지었어요', part: '지어요', tr: 'jitda / jieosseoyo / jieoyo', es: 'construir', clase: 'ㅅ' },
  { base: '낫다', past: '나았어요', part: '나아요', tr: 'natda / naasseoyo / naayo', es: 'curarse', clase: 'ㅅ' },
  { base: '모르다', past: '몰랐어요', part: '몰라요', tr: 'moreuda / mollasseoyo / mollayo', es: 'no saber', clase: '르' },
  { base: '다르다', past: '달랐어요', part: '달라요', tr: 'dareuda / dallasseoyo / dallayo', es: 'ser diferente', clase: '르' },
  { base: '빠르다', past: '빨랐어요', part: '빨라요', tr: 'ppareuda / ppallasseoyo / ppallayo', es: 'ser rápido', clase: '르' },
  { base: '하다', past: '했어요', part: '해요', tr: 'hada / haesseoyo / haeyo', es: 'hacer', clase: '여' },
  { base: '살다', past: '살았어요', part: '살아요', tr: 'salda / sarasseoyo / sarayo', es: 'vivir', clase: 'ㄹ' },
]

const koRegular = [
  { base: '가다', past: '갔어요', part: '가요', tr: 'gada / gasseoyo / gayo', es: 'ir' },
  { base: '오다', past: '왔어요', part: '와요', tr: 'oda / wasseoyo / wayo', es: 'venir' },
  { base: '먹다', past: '먹었어요', part: '먹어요', tr: 'meokda / meogeosseoyo / meogeoyo', es: 'comer' },
  { base: '마시다', past: '마셨어요', part: '마셔요', tr: 'masida / masyeosseoyo / masyeoyo', es: 'beber' },
  { base: '보다', past: '봤어요', part: '봐요', tr: 'boda / bwasseoyo / bwayo', es: 'ver' },
  { base: '읽다', past: '읽었어요', part: '읽어요', tr: 'ikda / ilgeosseoyo / ilgeoyo', es: 'leer' },
  { base: '쓰다', past: '썼어요', part: '써요', tr: 'sseuda / sseosseoyo / sseoyo', es: 'escribir' },
  { base: '입다', past: '입었어요', part: '입어요', tr: 'ipda / ibeosseoyo / ibeoyo', es: 'vestirse' },
  { base: '앉다', past: '앉았어요', part: '앉아요', tr: 'anda / anjasseoyo / anjayo', es: 'sentarse' },
  { base: '받다', past: '받았어요', part: '받아요', tr: 'batda / badasseoyo / badayo', es: 'recibir' },
  { base: '사다', past: '샀어요', part: '사요', tr: 'sada / sasseoyo / sayo', es: 'comprar' },
  { base: '자다', past: '잤어요', part: '자요', tr: 'jada / jasseoyo / jayo', es: 'dormir' },
  { base: '배우다', past: '배웠어요', part: '배워요', tr: 'baeuda / baewosseoyo / baewoyo', es: 'aprender' },
  { base: '기다리다', past: '기다렸어요', part: '기다려요', tr: 'gidarida / gidaryeosseoyo / gidaryeoyo', es: 'esperar' },
]

const koCompuestos = [
  { v: '들어가다', es: 'entrar', ex: '방에 들어갔어요. (bang-e deureogasseoyo)' },
  { v: '나가다', es: 'salir', ex: '밖에 나가요. (bakke nagayo)' },
  { v: '올라가다', es: 'subir', ex: '산에 올라갔어요.' },
  { v: '내려가다', es: 'bajar', ex: '아래로 내려가요.' },
  { v: '돌아오다', es: 'volver', ex: '집에 돌아왔어요.' },
  { v: '-아/어 보다', es: 'probar a hacer algo', ex: '먹어 보세요. (meogeo boseyo)' },
  { v: '-고 있다', es: 'estar haciendo algo', ex: '책을 읽고 있어요.' },
  { v: '-아/어 주다', es: 'hacer algo por alguien', ex: '도와 주세요. (dowa juseyo)' },
  { v: '-아/어 버리다', es: 'acabar haciéndolo del todo', ex: '다 먹어 버렸어요.' },
  { v: '-게 되다', es: 'llegar a (que algo acabe pasando)', ex: '알게 되었어요.' },
]

const koModales = [
  { v: '-ㄹ/을 수 있다', fn: 'Capacidad y posibilidad: poder.', ex: ['한국어를 할 수 있어요.', '갈 수 있어요?'] },
  { v: '-아/어야 하다', fn: 'Obligación: tener que.', ex: ['일해야 해요.', '더 자야 해요.'] },
  { v: '-고 싶다', fn: 'Deseo: querer hacer algo.', ex: ['커피를 마시고 싶어요.', '뭐 하고 싶어요?'] },
  { v: '-아/어도 되다', fn: 'Permiso: se puede.', ex: ['들어가도 돼요?', '여기서 먹어도 돼요.'] },
  { v: '-으면 안 되다', fn: 'Prohibición: no se puede.', ex: ['여기서 담배를 피우면 안 돼요.', '늦으면 안 돼요.'] },
  { v: '-는 게 좋다', fn: 'Consejo: es mejor que.', ex: ['병원에 가는 게 좋아요.', '쉬는 게 좋겠어요.'] },
]

// ----------------------------------------------------------------- HINDI ----

const hiIrregular = [
  { base: 'होना', past: 'मैं हूँ', part: 'हुआ', tr: 'honā / maiṁ hūṁ / huā', es: 'ser, estar' },
  { base: 'जाना', past: 'मैं जाता हूँ', part: 'गया', tr: 'jānā / jātā hūṁ / gayā', es: 'ir' },
  { base: 'करना', past: 'मैं करता हूँ', part: 'किया', tr: 'karnā / kartā hūṁ / kiyā', es: 'hacer' },
  { base: 'देना', past: 'मैं देता हूँ', part: 'दिया', tr: 'denā / detā hūṁ / diyā', es: 'dar' },
  { base: 'लेना', past: 'मैं लेता हूँ', part: 'लिया', tr: 'lenā / letā hūṁ / liyā', es: 'tomar' },
  { base: 'पीना', past: 'मैं पीता हूँ', part: 'पिया', tr: 'pīnā / pītā hūṁ / piyā', es: 'beber' },
  { base: 'आना', past: 'मैं आता हूँ', part: 'आया', tr: 'ānā / ātā hūṁ / āyā', es: 'venir' },
  { base: 'मरना', past: 'मैं मरता हूँ', part: 'मरा', tr: 'marnā / martā hūṁ / marā', es: 'morir' },
]

const hiRegular = [
  { base: 'बोलना', past: 'मैं बोलता हूँ', part: 'बोला', tr: 'bolnā / boltā hūṁ / bolā', es: 'hablar' },
  { base: 'पढ़ना', past: 'मैं पढ़ता हूँ', part: 'पढ़ा', tr: 'paṛhnā / paṛhtā hūṁ / paṛhā', es: 'leer, estudiar' },
  { base: 'लिखना', past: 'मैं लिखता हूँ', part: 'लिखा', tr: 'likhnā / likhtā hūṁ / likhā', es: 'escribir' },
  { base: 'खाना', past: 'मैं खाता हूँ', part: 'खाया', tr: 'khānā / khātā hūṁ / khāyā', es: 'comer' },
  { base: 'देखना', past: 'मैं देखता हूँ', part: 'देखा', tr: 'dekhnā / dekhtā hūṁ / dekhā', es: 'ver, mirar' },
  { base: 'सुनना', past: 'मैं सुनता हूँ', part: 'सुना', tr: 'sunnā / suntā hūṁ / sunā', es: 'escuchar' },
  { base: 'चलना', past: 'मैं चलता हूँ', part: 'चला', tr: 'chalnā / chaltā hūṁ / chalā', es: 'andar' },
  { base: 'रहना', past: 'मैं रहता हूँ', part: 'रहा', tr: 'rahnā / rahtā hūṁ / rahā', es: 'vivir, quedarse' },
  { base: 'सोना', past: 'मैं सोता हूँ', part: 'सोया', tr: 'sonā / sotā hūṁ / soyā', es: 'dormir' },
  { base: 'सीखना', past: 'मैं सीखता हूँ', part: 'सीखा', tr: 'sīkhnā / sīkhtā hūṁ / sīkhā', es: 'aprender' },
  { base: 'खरीदना', past: 'मैं खरीदता हूँ', part: 'खरीदा', tr: 'kharīdnā / kharīdtā hūṁ / kharīdā', es: 'comprar' },
  { base: 'समझना', past: 'मैं समझता हूँ', part: 'समझा', tr: 'samajhnā / samajhtā hūṁ / samajhā', es: 'entender' },
]

const hiCompuestos = [
  { v: 'काम करना', es: 'trabajar', ex: 'मैं काम करता हूँ। (maiṁ kām kartā hūṁ)' },
  { v: 'याद करना', es: 'recordar, memorizar', ex: 'मुझे याद करो। (mujhe yād karo)' },
  { v: 'इंतज़ार करना', es: 'esperar', ex: 'मैं इंतज़ार कर रहा हूँ।' },
  { v: 'शुरू करना', es: 'empezar', ex: 'काम शुरू करो। (kām shurū karo)' },
  { v: 'पसंद करना', es: 'gustar, preferir', ex: 'मुझे चाय पसंद है।' },
  { v: 'बात करना', es: 'conversar', ex: 'हम बात कर रहे हैं।' },
  { v: 'मदद करना', es: 'ayudar', ex: 'मेरी मदद करो। (merī madad karo)' },
  { v: 'कर लेना', es: 'hacer algo para uno mismo', ex: 'काम कर लिया। (kām kar liyā)' },
  { v: 'कर देना', es: 'hacer algo para otro', ex: 'यह कर दो। (yah kar do)' },
  { v: 'खा जाना', es: 'comerse algo del todo', ex: 'वह सब खा गया।' },
]

const hiModales = [
  { v: 'सकना', fn: 'Capacidad y posibilidad: poder. Va tras la raíz del verbo.', ex: ['मैं हिंदी बोल सकता हूँ।', 'क्या मैं आ सकता हूँ?'] },
  { v: 'चाहिए', fn: 'Necesidad o consejo: hace falta, debería.', ex: ['मुझे जाना चाहिए।', 'आपको आराम करना चाहिए।'] },
  { v: 'चाहना', fn: 'Voluntad y deseo: querer.', ex: ['मैं चाय चाहता हूँ।', 'तुम क्या चाहते हो?'] },
  { v: 'पड़ना', fn: 'Obligación impuesta: tener que (sin remedio).', ex: ['मुझे काम करना पड़ा।', 'तुम्हें जाना पड़ेगा।'] },
  { v: 'जानना', fn: 'Saber hacer algo aprendido.', ex: ['मैं तैरना जानता हूँ।', 'क्या तुम गाड़ी चलाना जानते हो?'] },
]

// ----------------------------------------------------------------- ÁRABE ----

const arIrregular = [
  { base: 'كانَ', past: 'يَكونُ', part: 'كَوْن', tr: 'kāna / yakūnu / kawn', es: 'ser, estar', clase: 'hueco' },
  { base: 'قالَ', past: 'يَقولُ', part: 'قَوْل', tr: 'qāla / yaqūlu / qawl', es: 'decir', clase: 'hueco' },
  { base: 'زارَ', past: 'يَزورُ', part: 'زِيارة', tr: 'zāra / yazūru / ziyāra', es: 'visitar', clase: 'hueco' },
  { base: 'باعَ', past: 'يَبيعُ', part: 'بَيْع', tr: 'bāʿa / yabīʿu / bayʿ', es: 'vender', clase: 'hueco' },
  { base: 'جاءَ', past: 'يَجيءُ', part: 'مَجيء', tr: 'jāʾa / yajīʾu / majīʾ', es: 'venir', clase: 'hueco' },
  { base: 'مَشى', past: 'يَمْشي', part: 'مَشْي', tr: 'mashā / yamshī / mashy', es: 'caminar', clase: 'defectivo' },
  { base: 'رَمى', past: 'يَرْمي', part: 'رَمْي', tr: 'ramā / yarmī / ramy', es: 'lanzar', clase: 'defectivo' },
  { base: 'أَخَذَ', past: 'يَأْخُذُ', part: 'أَخْذ', tr: 'akhadha / yaʾkhudhu / akhdh', es: 'tomar', clase: 'con hamza' },
  { base: 'أَكَلَ', past: 'يَأْكُلُ', part: 'أَكْل', tr: 'akala / yaʾkulu / akl', es: 'comer', clase: 'con hamza' },
  { base: 'رَدَّ', past: 'يَرُدُّ', part: 'رَدّ', tr: 'radda / yaruddu / radd', es: 'devolver', clase: 'doblado' },
]

const arRegular = [
  { base: 'كَتَبَ', past: 'يَكْتُبُ', part: 'كِتابة', tr: 'kataba / yaktubu / kitāba', es: 'escribir' },
  { base: 'دَرَسَ', past: 'يَدْرُسُ', part: 'دِراسة', tr: 'darasa / yadrusu / dirāsa', es: 'estudiar' },
  { base: 'فَتَحَ', past: 'يَفْتَحُ', part: 'فَتْح', tr: 'fataḥa / yaftaḥu / fatḥ', es: 'abrir' },
  { base: 'شَرِبَ', past: 'يَشْرَبُ', part: 'شُرْب', tr: 'shariba / yashrabu / shurb', es: 'beber' },
  { base: 'سَمِعَ', past: 'يَسْمَعُ', part: 'سَماع', tr: 'samiʿa / yasmaʿu / samāʿ', es: 'oír' },
  { base: 'جَلَسَ', past: 'يَجْلِسُ', part: 'جُلوس', tr: 'jalasa / yajlisu / julūs', es: 'sentarse' },
  { base: 'عَمِلَ', past: 'يَعْمَلُ', part: 'عَمَل', tr: 'ʿamila / yaʿmalu / ʿamal', es: 'trabajar' },
  { base: 'لَعِبَ', past: 'يَلْعَبُ', part: 'لَعِب', tr: 'laʿiba / yalʿabu / laʿib', es: 'jugar' },
  { base: 'ذَهَبَ', past: 'يَذْهَبُ', part: 'ذَهاب', tr: 'dhahaba / yadhhabu / dhahāb', es: 'ir' },
  { base: 'سَكَنَ', past: 'يَسْكُنُ', part: 'سَكَن', tr: 'sakana / yaskunu / sakan', es: 'vivir, residir' },
  { base: 'نَظَرَ', past: 'يَنْظُرُ', part: 'نَظَر', tr: 'naẓara / yanẓuru / naẓar', es: 'mirar' },
  { base: 'فَهِمَ', past: 'يَفْهَمُ', part: 'فَهْم', tr: 'fahima / yafhamu / fahm', es: 'entender' },
]

const arPreposiciones = [
  { v: 'بَحَثَ عن', es: 'buscar', ex: 'أبحث عن مفاتيحي.' },
  { v: 'حَصَلَ على', es: 'obtener, conseguir', ex: 'حصلت على العمل.' },
  { v: 'قامَ بـ', es: 'realizar, llevar a cabo', ex: 'قام بالعمل.' },
  { v: 'تَحَدَّثَ عن', es: 'hablar de', ex: 'تحدثنا عن المشروع.' },
  { v: 'اِعْتَمَدَ على', es: 'depender de, contar con', ex: 'أعتمد عليك.' },
  { v: 'تَخَلّى عن', es: 'renunciar a, abandonar', ex: 'تخلى عن الفكرة.' },
  { v: 'اِحْتاجَ إلى', es: 'necesitar', ex: 'أحتاج إلى مساعدة.' },
  { v: 'سَأَلَ عن', es: 'preguntar por', ex: 'سألت عنك.' },
  { v: 'دَعا إلى', es: 'invitar a, llamar a', ex: 'دعاني إلى العشاء.' },
  { v: 'اِشْتَرَكَ في', es: 'participar en', ex: 'اشتركت في المسابقة.' },
]

const arModales = [
  { v: 'يَسْتَطيعُ', fn: 'Capacidad y posibilidad: poder.', ex: ['أستطيع أن أتكلم العربية.', 'هل تستطيع مساعدتي؟'] },
  { v: 'يَجِبُ أن', fn: 'Obligación: hay que, debe. Es impersonal.', ex: ['يجب أن أعمل اليوم.', 'يجب أن تنام أكثر.'] },
  { v: 'يُريدُ', fn: 'Voluntad y deseo: querer.', ex: ['أريد قهوة.', 'ماذا تريد أن تفعل؟'] },
  { v: 'يُمْكِنُ', fn: 'Posibilidad y permiso: es posible, se puede.', ex: ['يمكنني الدخول؟', 'يمكن أن تمطر.'] },
  { v: 'يَنْبَغي', fn: 'Consejo: convendría, debería.', ex: ['ينبغي أن تذهب إلى الطبيب.', 'ينبغي أن ندرس.'] },
  { v: 'يَعْرِفُ', fn: 'Saber hacer algo.', ex: ['أعرف السباحة.', 'هل تعرف القيادة؟'] },
]

// ---------------------------------------------------------------- HEBREO ----

const heIrregular = [
  { base: 'לִהְיוֹת', past: 'אני הייתי', part: '—', tr: 'lihyot / hayiti', es: 'ser, estar (sin presente)' },
  { base: 'לָלֶכֶת', past: 'אני הלכתי', part: 'הולך', tr: 'lalekhet / halakhti / holekh', es: 'ir, caminar' },
  { base: 'לָתֵת', past: 'אני נתתי', part: 'נותן', tr: 'latet / natati / noten', es: 'dar' },
  { base: 'לָקַחַת', past: 'אני לקחתי', part: 'לוקח', tr: 'lakakhat / lakakhti / lokeakh', es: 'tomar' },
  { base: 'לָדַעַת', past: 'אני ידעתי', part: 'יודע', tr: 'ladaat / yadati / yodea', es: 'saber' },
  { base: 'לָבוֹא', past: 'אני באתי', part: 'בא', tr: 'lavo / bati / ba', es: 'venir' },
  { base: 'לִשְׁתּוֹת', past: 'אני שתיתי', part: 'שותה', tr: 'lishtot / shatiti / shote', es: 'beber' },
  { base: 'לִרְאוֹת', past: 'אני ראיתי', part: 'רואה', tr: 'lirot / raiti / roe', es: 'ver' },
  { base: 'לַעֲשׂוֹת', past: 'אני עשיתי', part: 'עושה', tr: 'laasot / asiti / ose', es: 'hacer' },
  { base: 'לָשִׁיר', past: 'אני שרתי', part: 'שר', tr: 'lashir / sharti / shar', es: 'cantar' },
]

const heRegular = [
  { base: 'לִכְתּוֹב', past: 'אני כתבתי', part: 'כותב', tr: 'likhtov / katavti / kotev', es: 'escribir' },
  { base: 'לִלְמוֹד', past: 'אני למדתי', part: 'לומד', tr: 'lilmod / lamadti / lomed', es: 'estudiar' },
  { base: 'לִסְגּוֹר', past: 'אני סגרתי', part: 'סוגר', tr: 'lisgor / sagarti / soger', es: 'cerrar' },
  { base: 'לִפְתּוֹחַ', past: 'אני פתחתי', part: 'פותח', tr: 'liftoakh / patakhti / poteakh', es: 'abrir' },
  { base: 'לֶאֱכוֹל', past: 'אני אכלתי', part: 'אוכל', tr: 'leekhol / akhalti / okhel', es: 'comer' },
  { base: 'לִשְׁמוֹעַ', past: 'אני שמעתי', part: 'שומע', tr: 'lishmoa / shamati / shomea', es: 'oír' },
  { base: 'לִגְמוֹר', past: 'אני גמרתי', part: 'גומר', tr: 'ligmor / gamarti / gomer', es: 'terminar' },
  { base: 'לְדַבֵּר', past: 'אני דיברתי', part: 'מדבר', tr: 'ledaber / dibarti / medaber', es: 'hablar' },
  { base: 'לְטַיֵּל', past: 'אני טיילתי', part: 'מטייל', tr: 'letayel / tiyalti / metayel', es: 'pasear, viajar' },
  { base: 'לְבַקֵּר', past: 'אני ביקרתי', part: 'מבקר', tr: 'levaker / bikarti / mevaker', es: 'visitar' },
  { base: 'לְשַׁלֵּם', past: 'אני שילמתי', part: 'משלם', tr: 'leshalem / shilamti / meshalem', es: 'pagar' },
  { base: 'לַעֲבוֹד', past: 'אני עבדתי', part: 'עובד', tr: 'laavod / avadti / oved', es: 'trabajar' },
]

const hePreposiciones = [
  { v: 'לְהִסְתַּכֵּל על', es: 'mirar', ex: 'אני מסתכל על התמונה.' },
  { v: 'לְחַכּוֹת ל', es: 'esperar a', ex: 'אני מחכה לך.' },
  { v: 'לַחְשׁוֹב על', es: 'pensar en', ex: 'אני חושב עליך.' },
  { v: 'לְהִתְגַּעְגֵּעַ ל', es: 'echar de menos', ex: 'אני מתגעגע לבית.' },
  { v: 'לְווַתֵּר על', es: 'renunciar a', ex: 'ויתרתי על זה.' },
  { v: 'לְהַסְכִּים עם', es: 'estar de acuerdo con', ex: 'אני מסכים איתך.' },
  { v: 'לְטַפֵּל ב', es: 'ocuparse de', ex: 'אני מטפל בילדים.' },
  { v: 'לְהִשְׁתַּמֵּשׁ ב', es: 'usar', ex: 'אני משתמש במחשב.' },
  { v: 'לְהִתְקַשֵּׁר ל', es: 'llamar por teléfono a', ex: 'אני מתקשר אליך.' },
  { v: 'לְהִתְחִיל ל', es: 'empezar a', ex: 'התחלתי ללמוד עברית.' },
]

const heModales = [
  { v: 'יָכוֹל', fn: 'Capacidad y posibilidad: poder. Concuerda en género y número.', ex: ['אני יכול לדבר עברית.', 'את יכולה לעזור לי?'] },
  { v: 'צָרִיךְ', fn: 'Necesidad u obligación: necesitar, tener que.', ex: ['אני צריך לעבוד.', 'את צריכה לישון יותר.'] },
  { v: 'רוֹצֶה', fn: 'Voluntad y deseo: querer.', ex: ['אני רוצה קפה.', 'מה את רוצה לעשות?'] },
  { v: 'מֻכְרָח', fn: 'Obligación fuerte: no tener más remedio.', ex: ['אני מוכרח ללכת.', 'הוא מוכרח לשלם.'] },
  { v: 'כְּדַאי', fn: 'Consejo impersonal: conviene, es mejor.', ex: ['כדאי לך ללכת לרופא.', 'כדאי להתחיל עכשיו.'] },
  { v: 'אָסוּר / מֻתָּר', fn: 'Prohibido y permitido.', ex: ['אסור לעשן כאן.', 'מותר להיכנס.'] },
]

// ------------------------------------------------------------- SECCIONES ----

export const otherSections = {
  el: [
    { id: 'irregulares', label: 'Verbos irregulares', icon: '🔀', type: 'verbs', cols: colsTr('Presente (εγώ)', 'Aoristo (εγώ)', 'Con έχω'), rows: elIrregular, note: 'El griego no tiene infinitivo: el verbo se nombra por su presente de primera persona. El aoristo es el pasado puntual.' },
    { id: 'regulares', label: 'Verbos regulares', icon: '➕', type: 'verbs', cols: colsTr('Presente (εγώ)', 'Aoristo (εγώ)', 'Con έχω'), rows: elRegular, note: 'Dos grupos según el acento: los llanos (γράφω) y los agudos (μιλάω).' },
    { id: 'expresiones', label: 'Expresiones verbales', icon: '🔗', type: 'phrases', rows: elExpresiones, note: 'El equivalente a los phrasal verbs: verbos medios y construcciones con να que se aprenden como bloque.' },
    { id: 'modales', label: 'Verbos modales', icon: '🔑', type: 'modals', rows: elModales, note: 'Casi todos piden να y el verbo siguiente conjugado, no en infinitivo: μπορώ να πάω.' },
  ],
  tr: [
    { id: 'irregulares', label: 'Verbos con cambio de raíz', icon: '🔀', type: 'verbs', cols: cols('Mastar', 'Geçmiş zaman (ben)', 'Şimdiki zaman (ben)'), rows: trIrregular, note: 'El turco no tiene verbos irregulares de verdad: estos solo cambian la raíz por sonorización (git → gidiyorum) o por vocal (ye → yiyorum).' },
    { id: 'regulares', label: 'Verbos regulares', icon: '➕', type: 'verbs', cols: cols('Mastar', 'Geçmiş zaman (ben)', 'Şimdiki zaman (ben)'), rows: trRegular, note: 'Todo verbo se forma añadiendo sufijos a la raíz, respetando la armonía vocálica: -dım/-dim/-dum/-düm.' },
    { id: 'compuestos', label: 'Verbos compuestos', icon: '🔗', type: 'phrases', rows: trCompuestos, note: 'El equivalente a los phrasal verbs: un nombre más etmek, olmak o yapmak forman un verbo con significado propio.' },
    { id: 'modales', label: 'Expresiones modales', icon: '🔑', type: 'modals', rows: trModales, note: 'El turco expresa la modalidad con sufijos, no con verbos sueltos: gel-ebil-irim (puedo venir).' },
  ],
  ja: [
    { id: 'irregulares', label: 'Verbos irregulares', icon: '🔀', type: 'verbs', cols: colsTr('Diccionario', 'Forma て', 'Forma た (pasado)'), rows: jaIrregular, note: 'El japonés solo tiene dos verbos irregulares, する y 来る. 行く lo es solo en la forma て (行って).' },
    { id: 'regulares', label: 'Verbos regulares', icon: '➕', type: 'verbs', cols: colsClase('Diccionario', 'Forma て', 'Forma た (pasado)', 'Grupo'), rows: jaRegular, note: 'Dos grupos: ichidan (acaban en -eru/-iru y solo pierden る) y godan (el resto, con cambios según la última sílaba).' },
    { id: 'auxiliares', label: 'Auxiliares de forma て', icon: '🔗', type: 'phrases', rows: jaAuxiliares, note: 'El equivalente a los phrasal verbs: la forma て más un verbo auxiliar cambia por completo el matiz.' },
    { id: 'modales', label: 'Expresiones modales', icon: '🔑', type: 'modals', rows: jaModales, note: 'El japonés no tiene verbos modales sueltos: usa terminaciones sobre la forma del verbo.' },
  ],
  zh: [
    { id: 'aspecto', label: 'Aspecto verbal (了 / 过)', icon: '🔀', type: 'verbs', cols: colsTr('Verbo', 'Con 了 (completado)', 'Con 过 (experiencia)'), rows: zhAspecto, note: 'Los verbos chinos no se conjugan: no hay pasado ni participio. Lo que se marca es el aspecto: 了 para una acción terminada y 过 para una experiencia vivida alguna vez.' },
    { id: 'complementos', label: 'Verbos con complemento', icon: '🔗', type: 'phrases', rows: zhComplementos, note: 'El equivalente a los phrasal verbs: un verbo más un complemento resultativo o direccional que precisa el resultado (看 mirar → 看见 llegar a ver → 看懂 entender lo leído).' },
    { id: 'modales', label: 'Verbos modales', icon: '🔑', type: 'modals', rows: zhModales, note: 'Distingue 会 (saber hacer algo aprendido) de 能 (poder en esta circunstancia) y de 可以 (tener permiso).' },
  ],
  ko: [
    { id: 'irregulares', label: 'Verbos irregulares', icon: '🔀', type: 'verbs', cols: colsClase('Diccionario', 'Pasado (-았/었어요)', 'Presente (-아/어요)', 'Clase'), rows: koIrregular, note: 'La irregularidad depende de la consonante final de la raíz: ㄷ pasa a ㄹ, ㅂ pasa a 우, ㅅ se cae y 르 duplica la ㄹ.' },
    { id: 'regulares', label: 'Verbos regulares', icon: '➕', type: 'verbs', cols: colsTr('Diccionario', 'Pasado (-았/었어요)', 'Presente (-아/어요)'), rows: koRegular, note: 'Se quita 다 y se añade la terminación. Si la última vocal es ㅏ u ㅗ se usa -아요; si no, -어요.' },
    { id: 'compuestos', label: 'Verbos compuestos y auxiliares', icon: '🔗', type: 'phrases', rows: koCompuestos, note: 'El equivalente a los phrasal verbs: verbos de movimiento combinados (들어가다 entrar) y auxiliares tras la forma -아/어.' },
    { id: 'modales', label: 'Expresiones modales', icon: '🔑', type: 'modals', rows: koModales, note: 'El coreano expresa la modalidad con terminaciones sobre el verbo, no con verbos independientes.' },
  ],
  hi: [
    { id: 'irregulares', label: 'Verbos irregulares', icon: '🔀', type: 'verbs', cols: colsTr('Infinitivo', 'Presente (मैं)', 'Participio perfecto'), rows: hiIrregular, note: 'Son pocos, pero de uso diario. El participio perfecto es la forma con la que se construye el pasado: मैं गया (yo fui).' },
    { id: 'regulares', label: 'Verbos regulares', icon: '➕', type: 'verbs', cols: colsTr('Infinitivo', 'Presente (मैं)', 'Participio perfecto'), rows: hiRegular, note: 'Se quita ना del infinitivo y se añade la terminación. El verbo concuerda en género: मैं बोलता हूँ (él) / मैं बोलती हूँ (ella).' },
    { id: 'compuestos', label: 'Verbos compuestos y conjuntos', icon: '🔗', type: 'phrases', rows: hiCompuestos, note: 'El equivalente a los phrasal verbs: nombre más करना o होना, y verbos ligeros como लेना y देना que matizan quién se beneficia de la acción.' },
    { id: 'modales', label: 'Verbos modales', icon: '🔑', type: 'modals', rows: hiModales, note: 'सकना va siempre tras la raíz del verbo principal: मैं जा सकता हूँ (puedo ir).' },
  ],
  ar: [
    { id: 'irregulares', label: 'Verbos irregulares', icon: '🔀', type: 'verbs', cols: colsClase('Pasado (هو)', 'Presente (هو)', 'Masdar', 'Tipo'), rows: arIrregular, note: 'El árabe nombra el verbo por su pasado de tercera persona, no por un infinitivo. Son irregulares los huecos (vocal larga en medio), los defectivos (acaban en vocal) y los que llevan hamza.' },
    { id: 'regulares', label: 'Verbos regulares (sanos)', icon: '➕', type: 'verbs', cols: colsTr('Pasado (هو)', 'Presente (هو)', 'Masdar'), rows: arRegular, note: 'Son los de tres consonantes fuertes. El masdar es el nombre verbal, equivalente a nuestro infinitivo sustantivado: كتابة (el escribir).' },
    { id: 'preposiciones', label: 'Verbos con preposición', icon: '🔗', type: 'phrases', rows: arPreposiciones, note: 'El equivalente a los phrasal verbs: la preposición que rige el verbo cambia su significado, y hay que aprenderla con él.' },
    { id: 'modales', label: 'Verbos modales', icon: '🔑', type: 'modals', rows: arModales, note: 'Casi todos piden أن más el verbo en subjuntivo: أستطيع أن أتكلم.' },
  ],
  he: [
    { id: 'irregulares', label: 'Verbos irregulares', icon: '🔀', type: 'verbs', cols: colsTr('Infinitivo', 'Pasado (אני)', 'Presente (m.)'), rows: heIrregular, note: 'Son raíces defectivas o con guturales, donde la forma cambia más de lo esperable.' },
    { id: 'regulares', label: 'Verbos regulares', icon: '➕', type: 'verbs', cols: colsTr('Infinitivo', 'Pasado (אני)', 'Presente (m.)'), rows: heRegular, note: 'Cada verbo pertenece a un binyán (patrón). Aquí hay verbos de paal (לכתוב) y de piel (לדבר), los dos más frecuentes.' },
    { id: 'preposiciones', label: 'Verbos con preposición', icon: '🔗', type: 'phrases', rows: hePreposiciones, note: 'El equivalente a los phrasal verbs: el verbo se aprende junto con la preposición que rige.' },
    { id: 'modales', label: 'Verbos modales', icon: '🔑', type: 'modals', rows: heModales, note: 'En hebreo los modales concuerdan en género y número con el sujeto: אני יכול / אני יכולה.' },
  ],
}
