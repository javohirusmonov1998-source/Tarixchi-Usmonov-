# Tarixchi-Usmonov-
Online test platformasi — Tarix fanidan **Milliy sertifikat**ga tayyorlanish uchun Telegram Mini App.

## Imkoniyatlar
- 📚 **Darslar** — Jahon tarixi va O'zbekiston tarixi bo'yicha mavzular: qisqa konspekt + muhim sanalar jadvali.
- ✅ **Mavzu testlari** — har bir javobdan keyin to'g'ri/noto'g'ri va izoh ko'rsatiladi.
- 📝 **Sinov testi** — barcha mavzulardan tasodifiy 20 savol, 30 daqiqa taymer, oxirida taxminiy daraja (A+ … C) va javoblar tahlili.
- 📅 **Sanalar kartochkalari** — sanani ko'rib, voqeani eslash; "Bilaman / Takrorlash".
- 📊 **Natijalar** — mavzular bo'yicha eng yaxshi natija va oxirgi urinishlar.
- Telegram mavzusi (yorug'/qorong'i), MainButton, BackButton, tebranish (haptic) va Telegram CloudStorage'da progress saqlash.

## Fayllar
```
miniapp/
  index.html   — sahifa
  style.css    — dizayn (Telegram ranglariga moslashadi)
  app.js       — ilova mantiqi
  data.js      — darslar, sanalar va savollar (kontent shu yerda)
```

## Yangi savol yoki dars qo'shish
`miniapp/data.js` faylini oching. Savol formati:
```js
{ q: "Savol matni?", a: ["A variant", "B variant", "C variant", "D variant"], c: 1, e: "Izoh" }
```
`c` — to'g'ri javobning tartib raqami (0 dan boshlanadi). Variantlar ilovada avtomatik aralashtiriladi.

## Ishga tushirish
1. **Hosting:** GitHub'da *Settings → Pages → Source: GitHub Actions* ni tanlang. `main` branchga push qilinganda
   `miniapp/` papkasi avtomatik joylanadi: `https://<username>.github.io/<repo>/`.
2. **Bot:** [@BotFather](https://t.me/BotFather) da bot yarating, so'ng:
   - `/newapp` → botni tanlang → nom, tavsif, rasm → URL sifatida Pages manzilini kiriting (mini app havolasi `t.me/<bot>/<app>` bo'ladi), yoki
   - `/mybots` → bot → *Bot Settings → Menu Button* → shu URL'ni kiriting (chat pastidagi tugma orqali ochiladi).
3. Lokal sinab ko'rish: `cd miniapp && python3 -m http.server` → `http://localhost:8000`.
