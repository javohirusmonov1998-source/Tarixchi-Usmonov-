# SHIROQ — VATAN UCHUN JON FIDO QILGAN QAHRAMON

**AI video production paketi** · 9:16 · 65 soniya · 4K · Hollywood tarixiy epik uslubi
Kanal: **@TARIXCHI_USMONOV**

> Bu paket tayyor video emas, balki uni yaratish uchun to‘liq ishlab chiqarish hujjati:
> har bir kadr uchun AI video promptlari (Veo / Sora / Kling / Runway / Hailuo), ElevenLabs ovoz matnlari,
> subtitrlar, musiqa va ovoz effektlari rejasi hamda montaj ko‘rsatmalari.

| Fayl | Vazifasi |
|---|---|
| `README.md` | To‘liq rejissyorlik ssenariysi, kadrlar ro‘yxati, promptlar |
| `elevenlabs_voiceover.md` | ElevenLabs uchun tayyor matnlar va sozlamalar |
| `subtitles_uz.srt` | O‘zbekcha (lotin) subtitrlar, vaqt kodlari bilan |
| `prompts.json` | Barcha kadr promptlari mashina o‘qiy oladigan formatda |

---

## 0. Tarixiy asos (qisqacha)

- **Davr:** mil. avv. taxminan 519–518-yillar. Ahamoniylar shohi **Doro I** saklarga (Behistun yozuvidagi *saka tigraxauda* — “uchli qalpoqli saklar”) qarshi yurish qiladi.
- **Manba:** rimlik muallif **Polien** (“Stratagemata”, VII, 12). Unga ko‘ra, sak otboqari/cho‘poni **Shiroq** (Shirak) forslarni 7 kun davomida suvsiz cho‘lga boshlab boradi, aldov ochilgach forslar uni o‘ldiradi. Shiroqning so‘nggi so‘zlari: *“Men yengdim…”*.
- **Imtihon uchun eslab qoling:** Shiroq — saklar, Doro I, 7 kun, suvsiz cho‘l, manba — Polien.
- *Ixtiyoriy tarixiy detal:* Polienga ko‘ra Shiroq forslarni ishontirish uchun o‘z yuzini jarohatlagan. Videoda bu **ko‘rsatilmaydi** (zo‘ravonliksiz talab va yuz bir xilligini saqlash uchun); xohlasangiz, 2-sahnada diktor bitta jumla bilan aytishi mumkin.

---

## 1. Personajlar — “Character Bible” (barcha kadrlarda bir xil)

Har bir promptning boshiga tegishli personaj tavsifini **so‘zma-so‘z** qo‘shing. Kling/Runway/Veo’da “character reference” (bitta asosiy portret) funksiyasidan foydalaning — avval quyidagi portretni Midjourney/Flux/Imagen’da yarating va keyingi barcha kadrlarga reference sifatida bering.

### SHIROQ (bosh qahramon)
```
SHIROQ: a Saka shepherd man, 42 years old, Central Asian steppe features, deeply sun-darkened weathered skin,
stern intense dark brown eyes, long straight black hair falling past the shoulders, full thick black beard
with a few grey strands, high cheekbones, thin scar-free face. Wears a simple undyed brown wool kaftan-tunic
belted with a leather strap, loose dark felt trousers tucked into soft leather boots, a plain sheepskin vest,
a wooden shepherd's staff. No jewelry except a small bronze belt buckle with a stylised deer motif.
6th century BCE, Iron Age, historically accurate.
```
**Reference portret prompti:**
```
Ultra realistic cinematic portrait of SHIROQ [tavsif yuqorida], neutral expression, looking into camera,
golden hour desert light, sand-coloured background, shot on ARRI Alexa 65, 85mm lens, shallow depth of field,
film grain, 4K, vertical 9:16 --no modern objects, text, logo
```

### DORO I (fors shohi)
```
DARIUS I: Achaemenid Persian king, about 40, olive skin, long squared curled black beard in Persepolis relief style,
curled hair under a tall golden crenellated crown, long flowing purple-and-crimson Persian court robe with wide
pleated sleeves, gold armlets with lion heads, gold torque, holding a gold sceptre. Proud, calculating gaze.
```

### FORS QO‘SHINI
```
ACHAEMENID ARMY: Persian infantry in long patterned tunics and soft felt tiara-caps or fluted hats,
tall spears with silver pomegranate-shaped butts, rectangular wicker shields (spara), recurve bows and gorytos quivers;
Persian cavalry on horses with saddle cloths; Median soldiers in trousers and round felt caps.
Banners with a golden falcon. Camels carrying leather waterskins.
```

### SAKLAR (fon personajlari)
```
SAKA WARRIORS: Iron Age Scythian-Saka nomads with tall pointed felt caps (tigraxauda), leather/felt tunics,
trousers, akinakes short swords, composite bows, steppe horses. Felt yurts in the distance.
```

### Umumiy taqiqlar (negative prompt — har bir kadrga)
```
--no modern buildings, roads, cars, plastic, metal zippers, sunglasses, watches, wires, airplanes, contrails,
text, watermark, logo, fantasy armor, horned helmets, medieval plate armor, Roman armor, Arabic clothing,
turbans, gunpowder, blood, gore, extra fingers, deformed faces
```

### Vizual uslub (har bir promptga qo‘shiladigan “style tail”)
```
Hollywood historical epic, ultra realistic, 4K, vertical 9:16, shot on ARRI Alexa 65 with anamorphic lenses,
colour palette of sand beige, burnished gold and dark stormy sky, teal-orange grade, volumetric dust,
film grain, natural light, 24 fps
```

---

## 2. Kadrlar ro‘yxati va promptlar (Shot list)

Jami: **5 sahna · 16 kadr · 65 soniya.** Har bir AI klip 5–8 soniya generatsiya qilinadi, montajda kesiladi.

### 1-SAHNA — KIRISH (0:00–0:08) · “Hook”

| # | Vaqt | Kadr | Kamera | Ovoz |
|---|---|---|---|---|
| 1.1 | 0:00–0:02 | Cheksiz cho‘l, qum bo‘roni, uzoqda fors qo‘shini | Aerial, sekin oldinga | Shamol guvillashi, uzoq baraban |
| 1.2 | 0:02–0:04 | Shiroq qum tepaligida turibdi, shamol sochini to‘zg‘itmoqda | Past burchakdan, dolly-in | Bitta chuqur gong |
| 1.3 | 0:04–0:08 | Shiroq yuzining extreme close-up’i, kameraga qarab gapiradi | Sekin push-in, 85mm | **SHIROQ** dialogi |

**1.1 prompt:**
```
Epic aerial drone shot slowly gliding forward over an endless Central Asian desert of golden dunes,
strong wind lifting sand into the air, dark stormy sky above, far on the horizon a vast Achaemenid Persian army
with cavalry, banners and camels marching in a long column, tiny in scale. [ACHAEMENID ARMY] [style tail]
```
**1.2 prompt:**
```
Low angle shot of SHIROQ [tavsif] standing alone on top of a sand dune, leaning on his wooden staff,
wind whipping his long black hair and kaftan, dust swirling, dark clouds behind him, sun piercing through,
slow dolly-in, heroic silhouette. [style tail]
```
**1.3 prompt (lip-sync):**
```
Extreme close-up of SHIROQ [tavsif], looking directly into the camera with fierce determination,
speaking slowly and firmly, sand particles flying past his face, golden rim light, eyes glistening,
slow push-in, 85mm, shallow depth of field. [style tail]
```
> Lip-sync: ElevenLabs audiosini (`SHIROQ_01`) Kling “Lip Sync”, Runway “Act-One/Lip Sync”, HeyGen yoki Sync.so ga yuklang.

**Subtitr:** *“Men yengdim. Saklarni halokatdan qutqazmoq uchun sizlarni tashnalik va ochlik balosiga giriftor qildim!”*

---

### 2-SAHNA — REJA (0:08–0:22)

| # | Vaqt | Kadr | Kamera | Ovoz |
|---|---|---|---|---|
| 2.1 | 0:08–0:11 | Doro I ning ulkan chodir-qarorgohi, minglab askarlar | Aerial → crane down | Orkestr kiradi, karnay |
| 2.2 | 0:11–0:14 | Doro I taxtda, atrofida sarkardalar | Medium, sekin orbit | Diktor |
| 2.3 | 0:14–0:18 | Shiroq soqchilar orasida kirib keladi, tiz cho‘kadi, qum ustiga tayoq bilan yo‘l chizadi | Over-the-shoulder | Diktor |
| 2.4 | 0:18–0:22 | Doro I ning yuzi — shubha, so‘ng ishonch; boshini qimirlatadi | Close-up | Diktor + musiqa ko‘tariladi |

**2.1 prompt:**
```
Aerial crane shot descending over a huge Achaemenid royal war camp in the desert at golden hour:
rows of large striped canvas pavilions, a central royal tent in crimson and gold with falcon banners,
thousands of soldiers, horses, camels, smoke from campfires. [ACHAEMENID ARMY] [style tail]
```
**2.2 prompt:**
```
Inside a vast crimson-and-gold royal pavilion lit by bronze oil lamps and shafts of sunlight,
DARIUS I [tavsif] seated on a carved wooden throne with lion-paw legs, generals in Persian robes standing around him,
Immortal guards with spears and wicker shields, slow orbit camera, medium shot. [style tail]
```
**2.3 prompt:**
```
Over-the-shoulder shot from behind DARIUS I: SHIROQ [tavsif] is escorted in by two Persian guards,
kneels on a carpet, then with his wooden staff draws a winding secret path in a patch of sand on the floor,
pointing toward the desert, calm and convincing face. [style tail]
```
**2.4 prompt:**
```
Close-up of DARIUS I [tavsif], eyes narrowed with suspicion, then a slow confident smile, he nods once,
lamp light flickering on his golden crown, shallow depth of field. [style tail]
```

**Diktor (o‘zbekcha):**
*“Miloddan avvalgi VI asr. Fors shohi Doro I saklar yurtiga bostirib kirdi. Shunda sak cho‘poni Shiroq forslar qarorgohiga keldi va faqat o‘zi biladigan yashirin so‘qmoq orqali ularni saklarning ortiga olib borishni va’da qildi. Doro unga ishondi.”*

---

### 3-SAHNA — XAVFLI SAFAR (0:22–0:40)

| # | Vaqt | Kadr | Kamera | Ovoz |
|---|---|---|---|---|
| 3.1 | 0:22–0:26 | Shiroq oldinda, ortidan cheksiz qo‘shin cho‘lga kirmoqda | Aerial top-down → tilt | Otlar dupuri, baraban ritmi |
| 3.2 | 0:26–0:29 | Quyosh — ko‘zni qamashtiruvchi disk, issiqlik to‘lqinlari | Timelapse, kun-tun almashinuvi | Shamol |
| 3.3 | 0:29–0:32 | Bo‘sh suv meshi qumga tashlanadi; askar quruq lablari | Slow motion close-up | Yurak urishi |
| 3.4 | 0:32–0:35 | Ot tizzasi bukilib yiqiladi (yaradorliksiz), askarlar sudralib boradi | Slow motion, yon tomondan | Otning kishnashi |
| 3.5 | 0:35–0:40 | Keng kadr: qo‘shin sarob ichida; ekranda **“7 KUN”** | Aerial, sekin uzoqlashish | Musiqa kuchayadi |

**3.1 prompt:**
```
Top-down aerial shot tilting up: SHIROQ [tavsif] walks at the front with his staff, followed by an immense
Achaemenid army column of infantry, cavalry and camels snaking deep into an endless golden desert,
long shadows, dust trail. [ACHAEMENID ARMY] [style tail]
```
**3.2 prompt:**
```
Timelapse of a merciless white-gold sun moving across a cloudless burning sky over desert dunes,
heat haze shimmering, days and nights passing quickly, stars and sunrise, then sun again. [style tail]
```
**3.3 prompt:**
```
Slow motion extreme close-up: a Persian soldier squeezes an empty leather waterskin, a single last drop falls
onto cracked lips, then the waterskin drops into the sand; sunburnt dusty face, exhausted eyes. [style tail]
```
**3.4 prompt:**
```
Slow motion side shot: exhausted Persian cavalry horses stumble and kneel in deep sand, soldiers dismount and
stagger forward leaning on spears, some collapse to their knees, heat haze, dust, no blood. [style tail]
```
**3.5 prompt:**
```
Wide aerial pull-back: the weakened Persian army is lost among endless identical dunes, a shimmering mirage of water
on the horizon, vultures circling high in the sky, SHIROQ [tavsif] still walking calmly at the front. [style tail]
```
**Ekrandagi yozuv:** `7 KUN` — oltin rangli, qadimiy serif shrift (masalan *Cinzel* yoki *Trajan*), qum zarralari bilan paydo bo‘ladi, 0:36–0:40.

**Diktor:** *“Kunlar o‘tdi. Suv tugadi. Otlar va askarlar birin-ketin holdan toydi.”*

---

### 4-SAHNA — HAQIQAT (0:40–0:53)

| # | Vaqt | Kadr | Kamera | Ovoz |
|---|---|---|---|---|
| 4.1 | 0:40–0:43 | Fors sarkardasi atrofga qaraydi — faqat qum; anglash | Whip-pan → close-up | Musiqa birdan to‘xtaydi |
| 4.2 | 0:43–0:47 | Askarlar nayzalarini Shiroqqa qaratib qurshab oladi | 360° orbit, past burchak | Qurol ovozlari, shivir |
| 4.3 | 0:47–0:50 | Shiroq yuzi — qo‘rquv yo‘q, xotirjam tabassum, osmonga qaraydi | Extreme close-up, slow motion | Yurak urishi |
| 4.4 | 0:50–0:53 | Nayzalar ko‘tariladi → **kesim**: qumga yiqilgan tayoq va shamol | Kesim (off-screen) | Bitta baraban zarbi, sukunat |

**4.1 prompt:**
```
A Persian general in a fluted hat turns around in the desert, whip-pan across endless empty dunes in every direction,
then close-up of his face as horror and realisation dawn, sweat and dust, harsh midday light. [style tail]
```
**4.2 prompt:**
```
Low angle 360-degree orbit: SHIROQ [tavsif] stands calm in the centre while angry exhausted Persian soldiers
surround him in a tight circle, spears and akinakes pointed at him, sun blazing behind them, dust in the air. [style tail]
```
**4.3 prompt:**
```
Extreme close-up slow motion of SHIROQ [tavsif]: no fear, a calm proud faint smile, he lifts his eyes to the sky,
wind moves his hair, golden backlight, a tear of pride, deep sense of victory. [style tail]
```
**4.4 prompt (zo‘ravonliksiz):**
```
Silhouettes of Persian spears raised against the blazing sun, cut to: a wooden shepherd's staff falling in slow motion
onto the sand, a gust of wind blows sand over it. No blood, no impact shown. [style tail]
```
> **Muhim:** o‘lim kadrda ko‘rsatilmaydi — faqat ramziy kesim (tayoqning yiqilishi). Bu TikTok/YouTube qoidalariga ham mos.

**Shiroq (pichirlab, ixtiyoriy aks-sado):** *“Men yengdim…”*

---

### 5-SAHNA — YAKUNIY KADR (0:53–1:05)

| # | Vaqt | Kadr | Kamera | Ovoz |
|---|---|---|---|---|
| 5.1 | 0:53–0:57 | Quyosh botmoqda; bulutlar orasida Shiroqning ulkan, shaffof ramziy qiyofasi | Keng, sekin crane-up | Ayol vokali (vokaliz), orkestr finali |
| 5.2 | 0:57–1:00 | Qorong‘ilik → oltin matn | Statik | Gong |
| 5.3 | 1:00–1:05 | Kanal logotipi va obuna chaqirig‘i | Statik / yengil animatsiya | **DIKTOR** CTA |

**5.1 prompt:**
```
Majestic desert sunset, sky burning gold and crimson, the huge translucent ghostly face of SHIROQ [tavsif]
appears in the clouds looking over the steppe like a guardian spirit, below on the horizon Saka yurts and horses,
slow crane up, emotional, sacred atmosphere. [SAKA WARRIORS] [style tail]
```

**Ekrandagi yozuv (0:57–1:00):**
```
SHIROQ
VATAN OZODLIGI UCHUN
JON FIDO QILGAN QAHRAMON
```
— oltin, Cinzel Bold, markazda, fon qora, yengil qum zarralari.

**Diktor CTA (1:00–1:05):** *“Tarixiy ma'lumotlarni o'tkazib yubormaslik uchun @TARIXCHI_USMONOV kanaliga obuna bo‘ling! Dekabr milliy sertifikat imtihoniga oz qoldi!”*
Ekranda: `@TARIXCHI_USMONOV` + “Obuna bo‘ling” tugmasi animatsiyasi.

---

## 3. Ovoz, musiqa va SFX

| Qatlam | Tavsif | Manba |
|---|---|---|
| Shiroq | Past, salobatli, qat’iy, hissiyotli o‘zbekcha erkak ovozi | ElevenLabs (`elevenlabs_voiceover.md`) |
| Diktor | Professional, aniq, energiyali o‘zbekcha erkak ovozi | ElevenLabs |
| Musiqa | Qadimgi Sharq epik orkestri: duduk/nay, karnay, doira va katta barabanlar (taiko), torli orkestr, ayol vokalizi | Suno / Udio prompti quyida yoki Epidemic Sound / Artlist |
| SFX | Shamol, qum shitirlashi, ot dupuri va kishnashi, qurol jaranglashi, yurak urishi, gong | ElevenLabs Sound Effects, Freesound |

**Musiqa prompti (Suno/Udio, instrumental):**
```
Epic ancient Central Asian / Persian cinematic orchestral score, 65 seconds, instrumental.
0-8s: ominous low drone, wind, solo duduk. 8-22s: majestic brass and frame drums, royal Persian feel.
22-40s: driving taiko and doira rhythm, rising strings, tension. 40-53s: sudden silence, heartbeat, single drum hit.
53-65s: emotional heroic finale with female wordless vocal and full orchestra, fading out under narration.
Style: Hans Zimmer meets Silk Road ensemble, no lyrics.
```

**Ovoz balansi (miks):** dialog −6 dB, musiqa −18 dB (dialog paytida ducking), SFX −14 dB. Yakuniy loudness: **−14 LUFS** (TikTok/Reels/Shorts).

---

## 4. Ishlab chiqarish tartibi (workflow)

1. **Reference portretlar:** Shiroq va Doro I portretlarini Midjourney v7 / Flux / Imagen’da yaratib, eng yaxshisini tanlang.
2. **Ovoz:** `elevenlabs_voiceover.md` dagi matnlarni ElevenLabs’da generatsiya qiling (Shiroq ovozi avval — lip-sync uchun kerak).
3. **Video kliplar:** `prompts.json` dagi har bir kadrni **image-to-video** rejimida, reference portret bilan generatsiya qiling (Veo 3 / Kling 2.x / Sora / Runway Gen-4). Har kadrdan 3–4 variant oling, eng izchilini tanlang.
4. **Lip-sync:** 1.3-kadrni Shiroq audiosi bilan sinxronlang.
5. **Upscale:** Topaz Video AI bilan 4K (2160×3840), 24 fps.
6. **Montaj:** CapCut / Premiere / DaVinci Resolve — vaqt kodlari jadvaliga ko‘ra; o‘tishlar: qum bo‘roni (sand transition), dip-to-black.
7. **Rang:** qum-bej, oltin, qoramtir osmon; teal-orange LUT, kontrast +10, film grain 15%.
8. **Subtitrlar:** `subtitles_uz.srt` ni import qiling; shrift — Montserrat ExtraBold, oq matn, qora soya, pastki uchdan birda (TikTok UI zonasidan yuqorida).
9. **Eksport:** H.264/H.265, 2160×3840, 24 fps, 35–50 Mbps, AAC 320 kbps.

## 5. Sifat nazorati (chek-list)

- [ ] Shiroqning yuzi, sochi, soqoli, kiyimi barcha kadrlarda bir xil
- [ ] Zamonaviy narsalar yo‘q (iz, kontrail, plastmassa, metall zamok, yozuv)
- [ ] Fors kiyimlari Ahamoniy davriga mos (Persepol releflari), saklar uchli qalpoqlarda
- [ ] Qon va zo‘ravonlik grafik ko‘rsatilmagan
- [ ] O‘zbekcha matnlar lotin alifbosida, imlo to‘g‘ri (o‘, g‘, ’ belgilar)
- [ ] Lab harakati 1.3-kadrda sinxron
- [ ] Yakuniy loudness −14 LUFS, davomiylik 60–75 soniya oralig‘ida
- [ ] “7 KUN” va yakuniy yozuv TikTok UI zonalari bilan to‘silmagan

---

## 6. Post uchun matn (caption) va heshteglar

```
Shiroq — Doro I ning ulkan qo‘shinini 7 kun suvsiz cho‘lda adashtirgan sak qahramoni 🏜️⚔️
Manba: Polien. Mil. avv. VI asr.
Milliy sertifikatga tayyorlanyapsizmi? Obuna bo‘ling 👉 @TARIXCHI_USMONOV

#Shiroq #saklar #tarix #Ozbekiston #milliysertifikat #tarixfani #DoroI #qadimgitarix #tarixchi_usmonov #shorts
```
