// Darslar, sanalar va test savollari.
// Har bir savolda: q — savol, a — variantlar, c — to'g'ri javob indeksi (0 dan), e — izoh.
// Yangi dars qo'shish uchun LESSONS massiviga shu tuzilishdagi obyekt qo'shing.

window.LESSONS = [
  {
    id: "qadimgi-sharq",
    section: "Jahon tarixi",
    title: "Qadimgi Sharq sivilizatsiyalari",
    icon: "🔺",
    summary: [
      "Mesopotamiyada (Dajla va Furot oralig'i) ilk shaharlar shumerlar tomonidan barpo etilgan. Shumerlar mixxat yozuvini yaratgan.",
      "Misr mil. av. 3000-yillar atrofida yagona davlatga birlashgan. Fir'avnlar hokimiyati ilohiy deb hisoblangan.",
      "Xeops piramidasi Giza vohasida mil. av. XXVI asrda qurilgan — qadimgi dunyoning yetti mo'jizasidan biri.",
      "Bobil podshosi Hammurapi (mil. av. XVIII asr) qonunlar to'plami tarixdagi eng mashhur qadimgi qonunlardan biri.",
      "Misr ierogliflarini 1822-yilda fransuz olimi Jan-Fransua Shampolyon Rozetta toshi yordamida o'qigan."
    ],
    dates: [
      ["mil. av. ~3000", "Misrning yagona davlatga birlashishi"],
      ["mil. av. XVIII asr", "Hammurapi qonunlari (Bobil)"],
      ["1822", "Shampolyon ierogliflarni o'qidi"]
    ],
    questions: [
      { q: "Mixxat yozuvini qaysi xalq yaratgan?", a: ["Misrliklar", "Shumerlar", "Finikiyaliklar", "Xettlar"], c: 1, e: "Mixxat yozuvi Mesopotamiyada shumerlar tomonidan yaratilgan." },
      { q: "Hammurapi qaysi davlatning podshosi bo'lgan?", a: ["Ossuriya", "Misr", "Bobil", "Fors"], c: 2, e: "Hammurapi — Bobil podshosi, mashhur qonunlar to'plami muallifi." },
      { q: "Misr ierogliflarini birinchi bo'lib kim o'qigan?", a: ["Gerodot", "Shampolyon", "Napoleon", "Shliman"], c: 1, e: "1822-yilda Jan-Fransua Shampolyon Rozetta toshi asosida o'qigan." },
      { q: "Xeops piramidasi qayerda joylashgan?", a: ["Luksor", "Memfis", "Giza", "Fiva"], c: 2, e: "Xeops (Xufu) piramidasi Giza vohasida joylashgan." },
      { q: "Finikiyaliklarning jahon madaniyatiga eng katta hissasi nima?", a: ["Piramidalar", "Alifbo", "Qog'oz", "Kompas"], c: 1, e: "Finikiyaliklar 22 harfli alifbo yaratgan, u yunon va lotin alifbolariga asos bo'lgan." }
    ]
  },
  {
    id: "yunon-rim",
    section: "Jahon tarixi",
    title: "Qadimgi Yunoniston va Rim",
    icon: "🏛",
    summary: [
      "Olimpiya o'yinlari mil. av. 776-yilda boshlangan deb hisoblanadi.",
      "Mil. av. 490-yilda Marafon jangida afinaliklar forslarni yengdi.",
      "Afina demokratiyasi Perikl davrida (mil. av. V asr) gullab-yashnagan.",
      "Aleksandr Makedonskiy (Iskandar) mil. av. 336–323-yillarda hukmronlik qilgan, mil. av. 329-yilda O'rta Osiyoga yurish qilgan.",
      "Rim respublikasi mil. av. 509-yilda o'rnatilgan. Yuliy Sezar mil. av. 44-yilda o'ldirilgan, mil. av. 27-yilda Oktavian Avgust imperator bo'lgan.",
      "G'arbiy Rim imperiyasi 476-yilda qulagan — bu qadimgi davrning tugashi hisoblanadi."
    ],
    dates: [
      ["mil. av. 776", "Birinchi Olimpiya o'yinlari"],
      ["mil. av. 490", "Marafon jangi"],
      ["mil. av. 509", "Rim respublikasining o'rnatilishi"],
      ["476", "G'arbiy Rim imperiyasining qulashi"]
    ],
    questions: [
      { q: "Marafon jangi qachon bo'lib o'tgan?", a: ["mil. av. 480-yil", "mil. av. 490-yil", "mil. av. 336-yil", "mil. av. 776-yil"], c: 1, e: "Mil. av. 490-yilda afinaliklar Marafonda forslarni yengdi." },
      { q: "Afina demokratiyasining gullagan davri kimning nomi bilan bog'liq?", a: ["Solon", "Perikl", "Drakont", "Kleysfen"], c: 1, e: "Mil. av. V asr o'rtalari — 'Perikl asri' deb ataladi." },
      { q: "G'arbiy Rim imperiyasi qaysi yili qulagan?", a: ["395", "410", "476", "1453"], c: 2, e: "476-yilda oxirgi imperator Romul Avgustul taxtdan tushirilgan. 1453 — Sharqiy Rim (Vizantiya)ning qulashi." },
      { q: "Rimning birinchi imperatori kim?", a: ["Yuliy Sezar", "Oktavian Avgust", "Neron", "Konstantin"], c: 1, e: "Mil. av. 27-yilda Oktavian 'Avgust' unvonini olib, birinchi imperator bo'ldi." },
      { q: "Aleksandr Makedonskiy O'rta Osiyoga qaysi yili yurish qilgan?", a: ["mil. av. 334", "mil. av. 329", "mil. av. 323", "mil. av. 530"], c: 1, e: "Mil. av. 329-yilda Iskandar qo'shinlari Baqtriya va So'g'dga kirdi." }
    ]
  },
  {
    id: "qadimgi-ozbekiston",
    section: "O'zbekiston tarixi",
    title: "O'zbekistonning qadimgi davri",
    icon: "🏺",
    summary: [
      "\"Avesto\" — zardushtiylik dinining muqaddas kitobi, O'rta Osiyo xalqlarining eng qadimgi yozma manbalaridan biri.",
      "Qadimgi davlatlar: Qadimgi Xorazm, Baqtriya, So'g'diyona. Mil. av. VI asrda hudud Ahamoniylar tarkibiga kiritilgan.",
      "Mil. av. 530-yilda massagetlar malikasi To'maris Ahamoniy podshosi Kir II qo'shinini tor-mor etgan.",
      "Spitamen mil. av. 329–327-yillarda Aleksandr Makedonskiyga qarshi kurashga boshchilik qilgan.",
      "Kushon podsholigi Kanishka davrida (milodiy I–II asrlar) eng qudratli bo'lgan. Qang' davlati Sirdaryo havzasida joylashgan.",
      "552-yilda Bumin xoqon boshchiligida Turk xoqonligi tashkil topgan."
    ],
    dates: [
      ["mil. av. 530", "To'maris Kir II ni yengdi"],
      ["mil. av. 329–327", "Spitamen qo'zg'oloni"],
      ["552", "Turk xoqonligining tashkil topishi"]
    ],
    questions: [
      { q: "Zardushtiylik dinining muqaddas kitobi qanday nomlanadi?", a: ["Vedalar", "Avesto", "Tavrot", "Bundahishn"], c: 1, e: "\"Avesto\" — zardushtiylikning muqaddas kitobi." },
      { q: "Kir II ni mag'lub etgan massagetlar malikasi kim?", a: ["Zarina", "To'maris", "Sparetra", "Roksana"], c: 1, e: "Mil. av. 530-yilda To'maris Kir II qo'shinini yengdi." },
      { q: "Aleksandr Makedonskiyga qarshi kurashga kim boshchilik qilgan?", a: ["Shiroq", "Spitamen", "Kanishka", "Bumin"], c: 1, e: "Spitamen mil. av. 329–327-yillarda kurashga rahbarlik qilgan." },
      { q: "Kushon podsholigining eng qudratli davri qaysi hukmdor bilan bog'liq?", a: ["Kanishka", "Kujula Kadfiz", "Istami", "Kir II"], c: 0, e: "Kanishka davrida Kushon podsholigi eng yuksak cho'qqiga chiqqan." },
      { q: "Turk xoqonligi qachon tashkil topgan?", a: ["484-yil", "552-yil", "603-yil", "751-yil"], c: 1, e: "552-yilda Bumin xoqon boshchiligida tashkil topgan." }
    ]
  },
  {
    id: "ilk-orta-asr",
    section: "O'zbekiston tarixi",
    title: "Arab xalifaligi, Somoniylar va Mo'g'ullar",
    icon: "📜",
    summary: [
      "Qutayba ibn Muslim 705–715-yillarda Movarounnahrni bosib olgan.",
      "776–783-yillarda Muqanna boshchiligida \"Oq kiyimlilar\" qo'zg'oloni bo'lgan.",
      "Somoniylar davlati poytaxti Buxoro. Ismoil Somoniy (892–907) davrida davlat kuchaygan. 999-yilda Qoraxoniylar tomonidan tugatilgan.",
      "Buyuk allomalar: Muhammad al-Xorazmiy (algebra asoschisi), Imom Buxoriy (810–870, \"Al-Jome' as-sahih\"), Abu Rayhon Beruniy (973–1048), Abu Ali ibn Sino (980–1037, \"Tib qonunlari\").",
      "1219–1221-yillarda Chingizxon bosqini. O'tror 1219-yilda qamal qilingan. Jaloliddin Manguberdi mo'g'ullarga qarshi kurashgan.",
      "1238-yilda Buxoroda Mahmud Torobiy qo'zg'oloni bo'lgan."
    ],
    dates: [
      ["776–783", "Muqanna qo'zg'oloni"],
      ["999", "Somoniylar davlatining tugatilishi"],
      ["1219", "O'tror mudofaasi"],
      ["1238", "Mahmud Torobiy qo'zg'oloni"]
    ],
    questions: [
      { q: "\"Oq kiyimlilar\" qo'zg'oloniga kim boshchilik qilgan?", a: ["Rofe ibn Lays", "Muqanna", "Mahmud Torobiy", "Abu Muslim"], c: 1, e: "776–783-yillardagi qo'zg'olonga Muqanna boshchilik qilgan." },
      { q: "Somoniylar davlatining poytaxti qaysi shahar bo'lgan?", a: ["Samarqand", "Marv", "Buxoro", "Urganch"], c: 2, e: "Ismoil Somoniy davridan poytaxt Buxoro bo'lgan." },
      { q: "\"Tib qonunlari\" asarining muallifi kim?", a: ["Beruniy", "Forobiy", "Ibn Sino", "Al-Xorazmiy"], c: 2, e: "\"Tib qonunlari\" — Abu Ali ibn Sinoning mashhur tibbiy asari." },
      { q: "Algebra fanining asoschisi deb kim tan olingan?", a: ["Al-Farg'oniy", "Al-Xorazmiy", "Ulug'bek", "Qozizoda Rumiy"], c: 1, e: "\"Al-jabr val-muqobala\" asari tufayli fan 'algebra' deb nomlangan." },
      { q: "Mahmud Torobiy qo'zg'oloni qaysi yili bo'lgan?", a: ["1219", "1221", "1238", "1370"], c: 2, e: "1238-yilda Buxoroda mo'g'ullarga qarshi ko'tarilgan." }
    ]
  },
  {
    id: "temuriylar",
    section: "O'zbekiston tarixi",
    title: "Amir Temur va Temuriylar davri",
    icon: "⚔️",
    summary: [
      "Amir Temur (1336–1405) 1370-yilda Movarounnahrda hokimiyatni qo'lga oldi, poytaxt — Samarqand.",
      "To'xtamish bilan 1391-yilda Qunduzcha va 1395-yilda Terek daryosi bo'yida jang qilgan.",
      "1402-yilda Anqara jangida Usmonli sulton Boyazid I ni yengdi.",
      "Mirzo Ulug'bek Samarqandda rasadxona qurdirgan, \"Ziji jadidi Ko'ragoniy\" asarini yaratgan.",
      "Alisher Navoiy (1441–1501) — \"Xamsa\" muallifi; Husayn Boyqaro davrida Hirotda faoliyat yuritgan.",
      "Zahiriddin Muhammad Bobur (1483–1530) 1526-yilda Panipat jangida g'alaba qilib, Hindistonda Boburiylar sulolasiga asos solgan. Asari — \"Boburnoma\"."
    ],
    dates: [
      ["1370", "Amir Temur hokimiyat tepasiga keldi"],
      ["1402", "Anqara jangi"],
      ["1526", "Panipat jangi"]
    ],
    questions: [
      { q: "Amir Temur qaysi yili Movarounnahrda hokimiyatni qo'lga olgan?", a: ["1360", "1370", "1380", "1405"], c: 1, e: "1370-yilda Balxda qurultoyda hukmdor deb e'lon qilingan." },
      { q: "Anqara jangida Amir Temur kimni mag'lub etgan?", a: ["To'xtamish", "Boyazid I", "Mehmed II", "Husayn"], c: 1, e: "1402-yilda Usmonli sulton Boyazid I yengilib asirga olingan." },
      { q: "\"Ziji jadidi Ko'ragoniy\" asarining muallifi kim?", a: ["Ulug'bek", "Navoiy", "Bobur", "Jomiy"], c: 0, e: "Mirzo Ulug'bekning astronomik jadvallari." },
      { q: "\"Xamsa\" asari muallifi kim?", a: ["Lutfiy", "Alisher Navoiy", "Bobur", "Jomiy"], c: 1, e: "Alisher Navoiy turkiy tildagi birinchi \"Xamsa\"ni yaratgan." },
      { q: "Panipat jangi qachon bo'lgan?", a: ["1504", "1512", "1526", "1530"], c: 2, e: "1526-yilda Bobur Ibrohim Lodiyni yengib, Boburiylar davlatiga asos soldi." }
    ]
  },
  {
    id: "xonliklar",
    section: "O'zbekiston tarixi",
    title: "Xonliklar davri va Rossiya bosqini",
    icon: "🕌",
    summary: [
      "XVI asr boshida Shayboniyxon Movarounnahrni egalladi — Buxoro xonligi tashkil topdi.",
      "Buxoroda sulolalar: Shayboniylar, Ashtarxoniylar (1601–1756), Mang'itlar (1756–1920, amirlik).",
      "Xiva xonligi 1512-yilda tashkil topgan. Abulg'ozixon \"Shajarayi turk\" asarini yozgan.",
      "Qo'qon xonligi 1709-yilda Shohruhbiy tomonidan asos solingan.",
      "1865-yilda Toshkent Chernyayev tomonidan bosib olindi, 1867-yilda Turkiston general-gubernatorligi tuzildi (birinchi general-gubernator — Kaufman).",
      "1868 — Samarqand bosib olindi; 1873 — Xiva bilan Gandimiyon shartnomasi; 1876 — Qo'qon xonligi tugatildi."
    ],
    dates: [
      ["1709", "Qo'qon xonligining tashkil topishi"],
      ["1865", "Toshkentning bosib olinishi"],
      ["1867", "Turkiston general-gubernatorligi"],
      ["1876", "Qo'qon xonligining tugatilishi"]
    ],
    questions: [
      { q: "Qo'qon xonligiga kim asos solgan?", a: ["Olimxon", "Shohruhbiy", "Umarxon", "Xudoyorxon"], c: 1, e: "1709-yilda Shohruhbiy tomonidan asos solingan." },
      { q: "\"Shajarayi turk\" asarining muallifi kim?", a: ["Abulg'ozixon", "Munis", "Ogahiy", "Bobur"], c: 0, e: "Xiva xoni Abulg'ozi Bahodirxon asari." },
      { q: "Toshkent Rossiya tomonidan qaysi yili bosib olingan?", a: ["1853", "1865", "1868", "1873"], c: 1, e: "1865-yilda general Chernyayev qo'shinlari Toshkentni egalladi." },
      { q: "Turkiston general-gubernatorligining birinchi rahbari kim?", a: ["Chernyayev", "Kaufman", "Skobelev", "Perovskiy"], c: 1, e: "1867-yilda K.P. fon Kaufman general-gubernator etib tayinlangan." },
      { q: "Mang'itlar sulolasi Buxoroda qachondan hukmronlik qilgan?", a: ["1601", "1709", "1756", "1785"], c: 2, e: "1756-yildan 1920-yilgacha Mang'itlar hukmronlik qilgan." },
      { q: "Qo'qon xonligi qaysi yili tugatilgan?", a: ["1868", "1873", "1876", "1920"], c: 2, e: "1876-yilda xonlik tugatilib, Farg'ona viloyati tuzildi." }
    ]
  },
  {
    id: "jadid-sovet",
    section: "O'zbekiston tarixi",
    title: "Jadidchilik va Sovet davri",
    icon: "📰",
    summary: [
      "Jadidlar — yangi usul maktablari, matbuot va teatr orqali ma'rifat tarqatgan. Yirik vakillari: Mahmudxo'ja Behbudiy, Munavvar qori, Abdulla Avloniy, Abdurauf Fitrat.",
      "Behbudiyning \"Padarkush\" dramasi — birinchi o'zbek dramasi.",
      "1917-yil noyabrida Qo'qonda Turkiston muxtoriyati e'lon qilindi; 1918-yil fevralida bolsheviklar tomonidan qonga botirildi.",
      "1920-yilda Buxoro va Xorazm Xalq Sovet Respublikalari tuzildi.",
      "1924-yilda milliy-hududiy chegaralanish natijasida O'zbekiston SSR tashkil topdi.",
      "1937–1938-yillarda ommaviy qatag'onlar bo'ldi. 1966-yil 26-aprelda Toshkent zilzilasi sodir bo'ldi."
    ],
    dates: [
      ["1917", "Turkiston muxtoriyati e'lon qilindi"],
      ["1920", "Buxoro va Xorazm XSR tuzildi"],
      ["1924", "O'zbekiston SSR tashkil topdi"],
      ["1966-yil 26-aprel", "Toshkent zilzilasi"]
    ],
    questions: [
      { q: "Birinchi o'zbek dramasi \"Padarkush\" muallifi kim?", a: ["Fitrat", "Behbudiy", "Avloniy", "Cho'lpon"], c: 1, e: "Mahmudxo'ja Behbudiy \"Padarkush\" dramasini yozgan." },
      { q: "Turkiston muxtoriyati qayerda e'lon qilingan?", a: ["Toshkent", "Samarqand", "Qo'qon", "Buxoro"], c: 2, e: "1917-yil noyabrida Qo'qonda e'lon qilingan." },
      { q: "O'zbekiston SSR qaysi yili tashkil topgan?", a: ["1920", "1924", "1929", "1936"], c: 1, e: "1924-yilda milliy-hududiy chegaralanish natijasida." },
      { q: "Buxoro Xalq Sovet Respublikasi qachon tuzilgan?", a: ["1918", "1920", "1924", "1925"], c: 1, e: "1920-yilda amirlik ag'darilgach tuzilgan." },
      { q: "Toshkent zilzilasi qaysi sanada bo'lgan?", a: ["1966-yil 26-aprel", "1948-yil 6-oktabr", "1976-yil 17-may", "1966-yil 9-may"], c: 0, e: "1966-yil 26-aprel tongida sodir bo'lgan." }
    ]
  },
  {
    id: "mustaqillik",
    section: "O'zbekiston tarixi",
    title: "Mustaqil O'zbekiston",
    icon: "🇺🇿",
    summary: [
      "1989-yil 21-oktabrda o'zbek tiliga davlat tili maqomi berildi.",
      "1990-yil 24-martda Prezident lavozimi joriy etildi; 20-iyunda Mustaqillik deklaratsiyasi qabul qilindi.",
      "1991-yil 31-avgustda davlat mustaqilligi e'lon qilindi; 1-sentabr — Mustaqillik kuni.",
      "1991-yil 18-noyabr — Davlat bayrog'i; 1992-yil 2-iyul — Davlat gerbi; 1992-yil 10-dekabr — Davlat madhiyasi qabul qilindi.",
      "1992-yil 2-martda O'zbekiston BMTga a'zo bo'ldi. 1992-yil 8-dekabrda Konstitutsiya qabul qilindi.",
      "1994-yil 1-iyuldan milliy valyuta — so'm muomalaga kiritildi.",
      "2023-yil 30-apreldagi referendum orqali yangi tahrirdagi Konstitutsiya qabul qilindi."
    ],
    dates: [
      ["1991-yil 31-avgust", "Mustaqillik e'lon qilindi"],
      ["1991-yil 18-noyabr", "Davlat bayrog'i qabul qilindi"],
      ["1992-yil 2-mart", "BMTga a'zo bo'lindi"],
      ["1992-yil 8-dekabr", "Konstitutsiya qabul qilindi"],
      ["2023-yil 30-aprel", "Konstitutsiyaviy referendum"]
    ],
    questions: [
      { q: "O'zbek tiliga davlat tili maqomi qachon berilgan?", a: ["1989-yil 21-oktabr", "1990-yil 24-mart", "1991-yil 31-avgust", "1992-yil 8-dekabr"], c: 0, e: "1989-yil 21-oktabrda \"Davlat tili haqida\"gi qonun qabul qilingan." },
      { q: "O'zbekiston Davlat bayrog'i qachon qabul qilingan?", a: ["1991-yil 31-avgust", "1991-yil 18-noyabr", "1992-yil 2-iyul", "1992-yil 10-dekabr"], c: 1, e: "1991-yil 18-noyabrda qabul qilingan. 1992-yil 2-iyul — gerb, 10-dekabr — madhiya." },
      { q: "O'zbekiston BMTga qachon a'zo bo'lgan?", a: ["1991-yil 1-sentabr", "1992-yil 2-mart", "1992-yil 8-dekabr", "1994-yil 1-iyul"], c: 1, e: "1992-yil 2-martda BMTga to'laqonli a'zo bo'lgan." },
      { q: "Mustaqillik deklaratsiyasi qachon qabul qilingan?", a: ["1990-yil 24-mart", "1990-yil 20-iyun", "1991-yil 31-avgust", "1991-yil 29-dekabr"], c: 1, e: "1990-yil 20-iyunda qabul qilingan." },
      { q: "Yangi tahrirdagi Konstitutsiya bo'yicha referendum qachon o'tkazilgan?", a: ["2021-yil 24-oktabr", "2022-yil 8-dekabr", "2023-yil 30-aprel", "2023-yil 1-may"], c: 2, e: "2023-yil 30-aprelda umumxalq referendumi o'tkazilgan." }
    ]
  },
  {
    id: "yangi-davr",
    section: "Jahon tarixi",
    title: "Yangi va eng yangi davr",
    icon: "🌍",
    summary: [
      "Buyuk geografik kashfiyotlar: Kolumb 1492-yilda Amerikaga yetib bordi; Vasko da Gama 1498-yilda Hindistonga dengiz yo'lini ochdi; Magellan ekspeditsiyasi 1519–1522-yillarda dunyo bo'ylab sayohat qildi.",
      "1517-yilda Martin Lyuter Germaniyada Reformatsiyani boshladi.",
      "1776-yil 4-iyulda AQSh Mustaqillik deklaratsiyasi qabul qilindi.",
      "1789-yil 14-iyulda Bastiliyaning qo'lga olinishi bilan Buyuk fransuz inqilobi boshlandi. Napoleon 1804-yilda imperator bo'ldi, 1815-yilda Vaterloda yengildi.",
      "Birinchi jahon urushi: 1914–1918. Ikkinchi jahon urushi: 1939-yil 1-sentabr — 1945-yil 2-sentabr.",
      "BMT 1945-yil 24-oktabrda tashkil topdi."
    ],
    dates: [
      ["1492", "Kolumb Amerikani kashf etdi"],
      ["1517", "Reformatsiyaning boshlanishi"],
      ["1789", "Buyuk fransuz inqilobi"],
      ["1914–1918", "Birinchi jahon urushi"],
      ["1945-yil 24-oktabr", "BMT tashkil topdi"]
    ],
    questions: [
      { q: "Hindistonga dengiz yo'lini kim ochgan?", a: ["Kolumb", "Vasko da Gama", "Magellan", "Bartolomeu Dias"], c: 1, e: "1498-yilda Vasko da Gama Hindistonga yetib borgan." },
      { q: "Reformatsiya qaysi yili boshlangan?", a: ["1492", "1517", "1555", "1648"], c: 1, e: "1517-yilda Martin Lyuter 95 tezisini e'lon qildi." },
      { q: "Buyuk fransuz inqilobi qaysi voqea bilan boshlangan?", a: ["Versal shartnomasi", "Bastiliyaning qo'lga olinishi", "Napoleonning toj kiyishi", "Vaterloo jangi"], c: 1, e: "1789-yil 14-iyulda Bastiliya qal'a-qamoqxonasi qo'lga olindi." },
      { q: "Napoleon qaysi jangda yakuniy mag'lubiyatga uchragan?", a: ["Austerlis", "Borodino", "Vaterloo", "Leypsig"], c: 2, e: "1815-yilda Vaterloo jangida yengilgan." },
      { q: "Ikkinchi jahon urushi qachon tugagan?", a: ["1945-yil 9-may", "1945-yil 2-sentabr", "1944-yil 6-iyun", "1946-yil 1-yanvar"], c: 1, e: "1945-yil 2-sentabrda Yaponiya taslim bo'lishi bilan tugagan. 9-may — Germaniyaning taslim bo'lishi (Yevropadagi urush tugashi)." },
      { q: "BMT qachon tashkil topgan?", a: ["1919", "1945", "1948", "1949"], c: 1, e: "1945-yil 24-oktabrda BMT Nizomi kuchga kirgan." }
    ]
  }
];
