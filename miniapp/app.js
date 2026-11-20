(function () {
  "use strict";

  const tg = window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initData !== undefined
    ? window.Telegram.WebApp : null;
  const inTelegram = !!(tg && tg.platform && tg.platform !== "unknown");

  const EXAM_SIZE = 20;          // sinovdagi savollar soni
  const EXAM_MINUTES = 30;       // sinov vaqti
  const STORE_KEY = "tarix_progress_v1";

  const $app = document.getElementById("app");
  const $title = document.getElementById("title");
  const $back = document.getElementById("backBtn");
  const $tabs = document.getElementById("tabbar");

  // ---------- Telegram sozlamalari ----------
  if (inTelegram) {
    document.documentElement.classList.add("tg");
    tg.ready();
    tg.expand();
    try { tg.setHeaderColor("secondary_bg_color"); } catch (e) {}
    try { tg.enableClosingConfirmation && tg.disableClosingConfirmation(); } catch (e) {}
  }
  const haptic = {
    tap() { inTelegram && tg.HapticFeedback && tg.HapticFeedback.selectionChanged(); },
    ok() { inTelegram && tg.HapticFeedback && tg.HapticFeedback.notificationOccurred("success"); },
    bad() { inTelegram && tg.HapticFeedback && tg.HapticFeedback.notificationOccurred("error"); }
  };

  // ---------- Saqlash (Telegram CloudStorage yoki localStorage) ----------
  let progress = { lessons: {}, history: [], known: [] };

  function loadLocal() {
    try { const raw = localStorage.getItem(STORE_KEY); if (raw) return JSON.parse(raw); } catch (e) {}
    return null;
  }
  function save() {
    progress.history = progress.history.slice(-20);
    const raw = JSON.stringify(progress);
    try { localStorage.setItem(STORE_KEY, raw); } catch (e) {}
    if (inTelegram && tg.CloudStorage && tg.isVersionAtLeast && tg.isVersionAtLeast("6.9")) {
      try { tg.CloudStorage.setItem(STORE_KEY, raw.slice(0, 4096)); } catch (e) {}
    }
  }
  function load(cb) {
    const local = loadLocal();
    if (local) progress = Object.assign(progress, local);
    if (inTelegram && tg.CloudStorage && tg.isVersionAtLeast && tg.isVersionAtLeast("6.9")) {
      try {
        tg.CloudStorage.getItem(STORE_KEY, function (err, val) {
          if (!err && val) { try { progress = Object.assign(progress, JSON.parse(val)); } catch (e) {} }
          cb();
        });
        return;
      } catch (e) {}
    }
    cb();
  }

  // ---------- Yordamchi funksiyalar ----------
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const shuffle = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const LETTERS = ["A", "B", "C", "D", "E"];
  const allQuestions = () => LESSONS.flatMap((l) => l.questions.map((q) => Object.assign({ lesson: l.title }, q)));
  const allDates = () => LESSONS.flatMap((l) => l.dates.map((d) => ({ date: d[0], event: d[1], lesson: l.title, section: l.section })));

  // Savol variantlarini aralashtirib, to'g'ri javob indeksini qayta hisoblaydi
  function prepQuestion(q) {
    const order = shuffle(q.a.map((_, i) => i));
    return Object.assign({}, q, { a: order.map((i) => q.a[i]), c: order.indexOf(q.c) });
  }

  // Milliy sertifikat darajasi (taxminiy, foiz bo'yicha)
  function grade(pct) {
    if (pct >= 70) return "A+";
    if (pct >= 65) return "A";
    if (pct >= 60) return "B+";
    if (pct >= 55) return "B";
    if (pct >= 50) return "C+";
    if (pct >= 46) return "C";
    return "Sertifikatsiz";
  }

  // ---------- Navigatsiya ----------
  const stack = [];
  let timerId = null;
  let mainBtnHandler = null;

  function setMainButton(text, handler) {
    if (!inTelegram) return;
    if (mainBtnHandler) tg.MainButton.offClick(mainBtnHandler);
    mainBtnHandler = null;
    if (!text) { tg.MainButton.hide(); return; }
    mainBtnHandler = handler;
    tg.MainButton.setText(text);
    tg.MainButton.onClick(handler);
    tg.MainButton.show();
  }

  function updateBack() {
    const show = stack.length > 1;
    $back.classList.toggle("hidden", !show);
    if (inTelegram) show ? tg.BackButton.show() : tg.BackButton.hide();
  }

  function go(view, params, replace) {
    if (timerId) { clearInterval(timerId); timerId = null; }
    setMainButton(null);
    if (replace) stack.pop();
    stack.push({ view, params });
    render();
  }
  function back() {
    if (stack.length <= 1) return;
    if (stack[stack.length - 1].view === "quiz" && quiz && !quiz.done) {
      const leave = () => { if (timerId) { clearInterval(timerId); timerId = null; } stack.pop(); setMainButton(null); render(); };
      if (inTelegram && tg.showConfirm && tg.isVersionAtLeast("6.2")) {
        tg.showConfirm("Testdan chiqmoqchimisiz? Natija saqlanmaydi.", (ok) => ok && leave());
      } else if (confirm("Testdan chiqmoqchimisiz? Natija saqlanmaydi.")) leave();
      return;
    }
    if (timerId) { clearInterval(timerId); timerId = null; }
    stack.pop();
    setMainButton(null);
    render();
  }
  $back.addEventListener("click", back);
  if (inTelegram) tg.BackButton.onClick(back);

  $tabs.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-tab]");
    if (!b) return;
    haptic.tap();
    stack.length = 0;
    go(b.dataset.tab);
  });

  function setTab(tab) {
    $tabs.querySelectorAll("button").forEach((b) => b.classList.toggle("active", b.dataset.tab === tab));
  }

  function render() {
    const { view, params } = stack[stack.length - 1];
    updateBack();
    window.scrollTo(0, 0);
    const hideTabs = view === "quiz";
    $tabs.classList.toggle("hidden", hideTabs);
    document.body.style.paddingBottom = hideTabs ? "24px" : "";
    VIEWS[view](params || {});
  }

  // ---------- Ko'rinishlar ----------
  let quiz = null;
  let cardState = { filter: "Hammasi", deck: [], i: 0, flipped: false };

  const VIEWS = {
    home() {
      setTab("home");
      $title.textContent = "Tarix — Milliy sertifikat";
      const user = inTelegram && tg.initDataUnsafe && tg.initDataUnsafe.user;
      const done = LESSONS.filter((l) => (progress.lessons[l.id] || 0) >= 80).length;
      const exams = progress.history.filter((h) => h.type === "exam");
      const best = exams.length ? Math.max(...exams.map((h) => Math.round(h.score / h.total * 100))) : null;

      const sections = [...new Set(LESSONS.map((l) => l.section))];
      let html = `
        <div class="card hero">
          <h2>Salom${user ? ", " + esc(user.first_name) : ""}! 👋</h2>
          <p>Tarix fanidan Milliy sertifikatga tayyorlaning: darslarni o'qing, testlarni yeching.</p>
          <div class="row">
            <div class="stat"><b>${done}/${LESSONS.length}</b><small>o'zlashtirilgan dars</small></div>
            <div class="stat"><b>${best === null ? "—" : best + "%"}</b><small>eng yaxshi sinov</small></div>
          </div>
        </div>`;
      sections.forEach((s) => {
        html += `<div class="section-title">${esc(s)}</div>`;
        LESSONS.filter((l) => l.section === s).forEach((l) => {
          const p = progress.lessons[l.id];
          html += `
            <div class="card lesson" data-id="${l.id}">
              <div class="ico">${l.icon}</div>
              <div class="meta">
                <b>${esc(l.title)}</b>
                <small>${l.questions.length} ta savol${p !== undefined ? " · eng yaxshi: " + p + "%" : ""}</small>
                <div class="bar"><i style="width:${p || 0}%"></i></div>
              </div>
              <div class="chev">›</div>
            </div>`;
        });
      });
      $app.innerHTML = html;
      $app.querySelectorAll(".lesson").forEach((el) =>
        el.addEventListener("click", () => { haptic.tap(); go("lesson", { id: el.dataset.id }); }));
    },

    lesson({ id }) {
      const l = LESSONS.find((x) => x.id === id);
      $title.textContent = l.title;
      $app.innerHTML = `
        <div class="card"><ul class="points">${l.summary.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>
        <div class="section-title">Muhim sanalar</div>
        <div class="card"><table class="dates">${l.dates.map((d) => `<tr><td>${esc(d[0])}</td><td>${esc(d[1])}</td></tr>`).join("")}</table></div>
        <button class="btn" id="start">Mavzu bo'yicha test (${l.questions.length} savol)</button>`;
      const start = () => { haptic.tap(); go("quiz", { mode: "lesson", id }); };
      document.getElementById("start").addEventListener("click", start);
      setMainButton("Testni boshlash", start);
    },

    exam() {
      setTab("exam");
      $title.textContent = "Sinov testi";
      const total = allQuestions().length;
      const n = Math.min(EXAM_SIZE, total);
      $app.innerHTML = `
        <div class="card">
          <h3 style="margin-top:0">📝 Milliy sertifikat uslubidagi sinov</h3>
          <p class="muted">Barcha mavzulardan tasodifiy ${n} ta savol. Vaqt: ${EXAM_MINUTES} daqiqa.
          Javoblar test oxirida ko'rsatiladi. Natija bo'yicha taxminiy daraja (A+ … C) chiqariladi.</p>
          <table class="dates">
            <tr><td>A+</td><td>70% va undan yuqori</td></tr>
            <tr><td>A</td><td>65–69%</td></tr>
            <tr><td>B+</td><td>60–64%</td></tr>
            <tr><td>B</td><td>55–59%</td></tr>
            <tr><td>C+</td><td>50–54%</td></tr>
            <tr><td>C</td><td>46–49%</td></tr>
          </table>
          <p class="muted" style="margin-bottom:0">Savollar bazasida jami ${total} ta savol bor.</p>
        </div>
        <button class="btn" id="start">Sinovni boshlash</button>`;
      const start = () => { haptic.tap(); go("quiz", { mode: "exam" }); };
      document.getElementById("start").addEventListener("click", start);
      setMainButton("Sinovni boshlash", start);
    },

    quiz(params) {
      if (!quiz || quiz.params !== params) {
        let qs, title;
        if (params.mode === "exam") {
          qs = shuffle(allQuestions()).slice(0, EXAM_SIZE);
          title = "Sinov testi";
        } else {
          const l = LESSONS.find((x) => x.id === params.id);
          qs = shuffle(l.questions);
          title = l.title;
        }
        quiz = {
          params, title, exam: params.mode === "exam",
          qs: qs.map(prepQuestion), i: 0, answers: [], done: false,
          deadline: params.mode === "exam" ? Date.now() + EXAM_MINUTES * 60000 : null
        };
      }
      $title.textContent = quiz.title;
      if (quiz.exam) {
        timerId = setInterval(() => {
          const el = document.getElementById("timer");
          const left = quiz.deadline - Date.now();
          if (left <= 0) { clearInterval(timerId); timerId = null; finishQuiz(); return; }
          if (el) { el.textContent = fmtTime(left); el.classList.toggle("low", left < 60000); }
        }, 500);
      }
      drawQuestion();
    },

    result() {
      $title.textContent = "Natija";
      const q = quiz;
      const correct = q.qs.filter((x, i) => q.answers[i] === x.c).length;
      const pct = Math.round(correct / q.qs.length * 100);
      let html = `
        <div class="card score">
          <div class="muted">${esc(q.title)}</div>
          <div class="big">${correct}/${q.qs.length}</div>
          <div>${pct}%</div>
          ${q.exam ? `<p><span class="grade">Taxminiy daraja: ${grade(pct)}</span></p>` : ""}
          <p class="muted">${pct >= 80 ? "Ajoyib natija! 🎉" : pct >= 50 ? "Yaxshi, yana biroz mashq qiling 💪" : "Mavzuni qayta o'qib chiqing 📖"}</p>
        </div>
        <div class="section-title">Javoblar tahlili</div>`;
      q.qs.forEach((x, i) => {
        const a = q.answers[i];
        const ok = a === x.c;
        html += `<div class="card review-item">
          <div class="q">${i + 1}. ${esc(x.q)}</div>
          <div class="${ok ? "ok" : "bad"}">${ok ? "✓" : "✗"} Sizning javob: ${a === undefined ? "javob berilmagan" : esc(x.a[a])}</div>
          ${ok ? "" : `<div class="ok">✓ To'g'ri javob: ${esc(x.a[x.c])}</div>`}
          <div class="muted" style="margin-top:4px">${esc(x.e)}</div>
        </div>`;
      });
      html += `<button class="btn" id="again">Qayta yechish</button>
               <button class="btn secondary" id="home">Bosh sahifa</button>`;
      $app.innerHTML = html;
      const again = () => { quiz = null; go("quiz", Object.assign({}, q.params), true); };
      document.getElementById("again").addEventListener("click", again);
      document.getElementById("home").addEventListener("click", () => { stack.length = 0; go("home"); });
      setMainButton("Qayta yechish", again);
    },

    cards() {
      setTab("cards");
      $title.textContent = "Sanalar kartochkasi";
      const all = allDates();
      const filters = ["Hammasi", ...new Set(all.map((d) => d.section)), "Bilmaganlarim"];
      const buildDeck = () => {
        let d = all;
        if (cardState.filter === "Bilmaganlarim") d = all.filter((x) => !progress.known.includes(x.date + "|" + x.event));
        else if (cardState.filter !== "Hammasi") d = all.filter((x) => x.section === cardState.filter);
        cardState.deck = shuffle(d); cardState.i = 0; cardState.flipped = false;
      };
      if (!cardState.deck.length) buildDeck();

      const draw = () => {
        const d = cardState.deck[cardState.i];
        const knownCount = progress.known.length;
        $app.innerHTML = `
          <div class="chips">${filters.map((f) => `<button class="chip ${f === cardState.filter ? "active" : ""}" data-f="${esc(f)}">${esc(f)}</button>`).join("")}</div>
          ${d ? `
            <div class="qhead"><span>${cardState.i + 1} / ${cardState.deck.length}</span><span>Bilaman: ${knownCount}/${all.length}</span></div>
            <div class="card flash ${cardState.flipped ? "back" : ""}" id="flash">
              <div>${cardState.flipped ? esc(d.event) : esc(d.date)}
                <small>${cardState.flipped ? esc(d.lesson) : "Bu sanada nima bo'lgan? Ko'rish uchun bosing"}</small></div>
            </div>
            <div class="row2">
              <button class="btn secondary" id="dont">🔁 Takrorlash</button>
              <button class="btn" id="know">✓ Bilaman</button>
            </div>` : `<div class="card muted">Bu bo'limda kartochka qolmadi 🎉</div>`}`;
        $app.querySelectorAll(".chip").forEach((c) => c.addEventListener("click", () => {
          haptic.tap(); cardState.filter = c.dataset.f; buildDeck(); draw();
        }));
        if (!d) return;
        document.getElementById("flash").addEventListener("click", () => { haptic.tap(); cardState.flipped = !cardState.flipped; draw(); });
        const next = (known) => {
          const key = d.date + "|" + d.event;
          if (known && !progress.known.includes(key)) progress.known.push(key);
          if (!known) progress.known = progress.known.filter((k) => k !== key);
          save();
          known ? haptic.ok() : haptic.tap();
          cardState.flipped = false;
          cardState.i = (cardState.i + 1) % cardState.deck.length;
          if (cardState.i === 0) buildDeck();
          draw();
        };
        document.getElementById("know").addEventListener("click", () => next(true));
        document.getElementById("dont").addEventListener("click", () => next(false));
      };
      draw();
    },

    stats() {
      setTab("stats");
      $title.textContent = "Natijalar";
      const hist = progress.history.slice().reverse();
      let html = `<div class="section-title">Mavzular bo'yicha</div><div class="card">`;
      LESSONS.forEach((l) => {
        const p = progress.lessons[l.id];
        html += `<div class="hist"><span>${l.icon} ${esc(l.title)}</span><b>${p === undefined ? "—" : p + "%"}</b></div>`;
      });
      html += `</div><div class="section-title">Oxirgi urinishlar</div><div class="card">`;
      html += hist.length ? hist.map((h) => {
        const pct = Math.round(h.score / h.total * 100);
        return `<div class="hist"><span>${esc(h.title)}<br><small class="muted">${new Date(h.date).toLocaleString("uz-UZ")}</small></span>
          <b>${h.score}/${h.total}${h.type === "exam" ? " · " + grade(pct) : ""}</b></div>`;
      }).join("") : `<div class="muted">Hali test yechilmagan.</div>`;
      html += `</div><button class="btn secondary" id="reset">Natijalarni tozalash</button>`;
      $app.innerHTML = html;
      document.getElementById("reset").addEventListener("click", () => {
        const doReset = () => { progress = { lessons: {}, history: [], known: [] }; save(); render(); };
        if (inTelegram && tg.showConfirm && tg.isVersionAtLeast("6.2")) tg.showConfirm("Barcha natijalar o'chirilsinmi?", (ok) => ok && doReset());
        else if (confirm("Barcha natijalar o'chirilsinmi?")) doReset();
      });
    }
  };

  // ---------- Test mantiqi ----------
  function fmtTime(ms) {
    const s = Math.ceil(ms / 1000);
    return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
  }

  function drawQuestion() {
    const q = quiz.qs[quiz.i];
    const chosen = quiz.answers[quiz.i];
    const reveal = !quiz.exam && chosen !== undefined; // mavzu testida darhol ko'rsatiladi
    const last = quiz.i === quiz.qs.length - 1;

    $app.innerHTML = `
      <div class="qhead">
        <span>Savol ${quiz.i + 1} / ${quiz.qs.length}</span>
        ${quiz.exam ? `<span class="timer" id="timer">${fmtTime(quiz.deadline - Date.now())}</span>` : ""}
      </div>
      <div class="progress"><i style="width:${(quiz.i / quiz.qs.length) * 100}%"></i></div>
      <p class="question">${esc(q.q)}</p>
      ${q.a.map((opt, i) => {
        let cls = "";
        if (reveal) { if (i === q.c) cls = "ok"; else if (i === chosen) cls = "bad"; }
        else if (i === chosen) cls = "sel";
        return `<button class="opt ${cls}" data-i="${i}" ${reveal ? "disabled" : ""}><span class="l">${LETTERS[i]}</span><span>${esc(opt)}</span></button>`;
      }).join("")}
      ${reveal ? `<div class="explain"><b>Izoh:</b> ${esc(q.e)}</div>` : ""}
      <div class="row2" style="margin-top:12px">
        ${quiz.exam && quiz.i > 0 ? `<button class="btn secondary" id="prev">‹ Oldingi</button>` : ""}
        <button class="btn" id="next" ${chosen === undefined && !quiz.exam ? "disabled" : ""}>${last ? "Yakunlash" : "Keyingi ›"}</button>
      </div>`;

    $app.querySelectorAll(".opt").forEach((b) => b.addEventListener("click", () => {
      const i = Number(b.dataset.i);
      quiz.answers[quiz.i] = i;
      if (!quiz.exam) (i === q.c ? haptic.ok() : haptic.bad()); else haptic.tap();
      drawQuestion();
    }));
    const next = () => {
      if (!quiz.exam && quiz.answers[quiz.i] === undefined) return;
      haptic.tap();
      if (last) {
        if (quiz.exam) {
          const unanswered = quiz.qs.length - quiz.answers.filter((a) => a !== undefined).length;
          if (unanswered > 0) {
            const msg = `${unanswered} ta savolga javob berilmagan. Yakunlaysizmi?`;
            if (inTelegram && tg.showConfirm && tg.isVersionAtLeast("6.2")) { tg.showConfirm(msg, (ok) => ok && finishQuiz()); return; }
            if (!confirm(msg)) return;
          }
        }
        finishQuiz();
      } else { quiz.i++; drawQuestion(); window.scrollTo(0, 0); }
    };
    document.getElementById("next").addEventListener("click", next);
    const prev = document.getElementById("prev");
    if (prev) prev.addEventListener("click", () => { haptic.tap(); quiz.i--; drawQuestion(); });

    const canNext = quiz.exam || chosen !== undefined;
    setMainButton(canNext ? (last ? "Yakunlash" : "Keyingi") : null, next);
  }

  function finishQuiz() {
    if (quiz.done) return;
    quiz.done = true;
    const correct = quiz.qs.filter((x, i) => quiz.answers[i] === x.c).length;
    const pct = Math.round(correct / quiz.qs.length * 100);
    if (quiz.params.mode === "lesson") {
      const id = quiz.params.id;
      progress.lessons[id] = Math.max(progress.lessons[id] || 0, pct);
    }
    progress.history.push({ type: quiz.params.mode, title: quiz.title, score: correct, total: quiz.qs.length, date: Date.now() });
    save();
    pct >= 50 ? haptic.ok() : haptic.bad();
    go("result", {}, true);
  }

  // ---------- Ishga tushirish ----------
  load(() => go("home"));
})();
