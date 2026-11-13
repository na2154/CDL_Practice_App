// CDL Study Hub — app logic. No build step, no libraries.
// Content lives in content.js. This file handles pages, read-aloud, flashcards, quizzes, and progress.
(function () {
  "use strict";

  const C = window.CDL;
  const app = document.getElementById("app");
  const DAY_NAMES = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const LETTERS = ["A", "B", "C", "D", "E"];

  // ------------------------------------------------------------------
  // Saved progress (stays in this browser on this device)
  // ------------------------------------------------------------------
  const store = {
    get(key, fallback) {
      try { const v = localStorage.getItem("cdl." + key); return v === null ? fallback : JSON.parse(v); }
      catch (e) { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem("cdl." + key, JSON.stringify(value)); } catch (e) { /* storage blocked: ignore */ }
    }
  };
  const settings = Object.assign({ rate: 0.95, voice: "", autoRead: true, thinkTime: 5 }, store.get("settings", {}));
  const saveSettings = () => store.set("settings", settings);
  let checks = store.get("checks", {});
  let scores = store.get("scores", {});

  // ------------------------------------------------------------------
  // Helpers
  // ------------------------------------------------------------------
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const unitById = (id) => C.units.find((u) => u.id === Number(id));
  const parseIds = (s) => String(s).split(",").map(Number).filter((n) => unitById(n));
  const shuffle = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const unitRange = (ids) => ids.length === 1 ? "Unit " + ids[0] : "Units " + ids[0] + " to " + ids[ids.length - 1];

  function testName(ids) {
    const key = ids.join(",");
    if (key === "8") return "Air Brakes practice test";
    if (key === "9") return "Combination Vehicles practice test";
    if (key === "1,2,3,4,5,6,7") return "General Knowledge practice test";
    if (ids.length === C.units.length) return "Full practice test (everything)";
    if (ids.length === 1) return "Unit " + ids[0] + " quiz";
    return "Review quiz: " + unitRange(ids);
  }

  // ------------------------------------------------------------------
  // Read aloud (uses the browser's built-in voices; free, works offline)
  // ------------------------------------------------------------------
  const speechOK = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
  let voices = [];
  function loadVoices() {
    if (!speechOK) return;
    voices = speechSynthesis.getVoices().filter((v) => /^en/i.test(v.lang));
    if (location.hash.startsWith("#/settings")) render();
  }
  if (speechOK) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }

  // Make text sound natural when spoken
  function forSpeech(t) {
    return String(t)
      .replace(/B:C/g, "B C")
      .replace(/P\.S\.I\./g, "P S I")
      .replace(/G\.O\.A\.L\./g, "goal")
      .replace(/(\d),(\d{3})/g, "$1$2")
      .replace(/\s+/g, " ")
      .trim();
  }
  // Split long text into sentences (some browsers cut off long speech)
  function sentences(t) {
    const parts = String(t).match(/[^.!?]+(?:[.!?]+(?=\s|$)|$)/g) || [t];
    const out = [];
    parts.forEach((p) => { p = p.trim(); if (!p) return; if (out.length && p.length < 25) out[out.length - 1] += " " + p; else out.push(p); });
    return out;
  }

  const player = document.getElementById("player");
  const playerStatus = document.getElementById("player-status");
  const playerToggle = document.getElementById("player-toggle");

  const Reader = {
    items: [], i: 0, playing: false, token: 0, timer: null, label: "", onDone: null,
    // items: [{ text, el, wait, onStart }]
    play(items, label, onDone) {
      if (!speechOK) { alert("This browser can't read aloud. Try Chrome, Safari, or Edge."); return; }
      this.stop(true);
      this.items = [];
      items.forEach((it) => {
        const chunks = it.text ? sentences(it.text) : [""];
        chunks.forEach((s, k) => this.items.push({
          text: s, el: it.el, onStart: k === 0 ? it.onStart : null, wait: k === chunks.length - 1 ? it.wait : 0
        }));
      });
      this.i = 0; this.label = label || "Reading"; this.onDone = onDone || null; this.playing = true;
      this.ui();
      this.next();
    },
    next() {
      if (!this.playing) return;
      if (this.i >= this.items.length) { const cb = this.onDone; this.stop(); if (cb) cb(); return; }
      const it = this.items[this.i];
      const my = this.token;
      if (it.onStart) it.onStart();
      this.mark(it.el);
      const advance = () => {
        if (my !== this.token) return;
        this.i++;
        if (it.wait) this.timer = setTimeout(() => this.next(), it.wait); else this.next();
      };
      if (!it.text) { advance(); return; }
      const u = new SpeechSynthesisUtterance(forSpeech(it.text));
      u.rate = settings.rate;
      const v = voices.find((x) => x.voiceURI === settings.voice);
      if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = "en-US"; }
      u.onend = advance;
      u.onerror = (e) => { if (e.error !== "interrupted" && e.error !== "canceled") advance(); };
      // tiny delay helps Chrome after a cancel()
      setTimeout(() => { if (my === this.token && this.playing) speechSynthesis.speak(u); }, 60);
    },
    pause() { this.playing = false; this.token++; clearTimeout(this.timer); speechSynthesis.cancel(); this.ui(); },
    resume() { if (!this.items.length) return; this.playing = true; this.ui(); this.next(); },
    stop(silent) {
      this.playing = false; this.token++; clearTimeout(this.timer);
      if (speechOK) speechSynthesis.cancel();
      this.items = []; this.i = 0; this.mark(null);
      if (!silent) this.ui();
    },
    mark(el) {
      document.querySelectorAll(".speaking").forEach((n) => n.classList.remove("speaking"));
      if (el && el.isConnected) { el.classList.add("speaking"); el.scrollIntoView({ block: "center", behavior: "smooth" }); }
    },
    ui() {
      const active = this.items.length > 0;
      player.classList.toggle("hidden", !active);
      playerStatus.textContent = this.playing ? this.label + "…" : "Paused";
      playerToggle.textContent = this.playing ? "Pause" : "Resume";
    }
  };
  playerToggle.onclick = () => (Reader.playing ? Reader.pause() : Reader.resume());
  document.getElementById("player-stop").onclick = () => Reader.stop();
  const say = (text, label) => Reader.play([{ text }], label || "Reading");

  // ------------------------------------------------------------------
  // The study plan: turns content.js plan into daily checkbox tasks
  // ------------------------------------------------------------------
  function dayTasks(type, arg) {
    const ids = Array.isArray(arg) ? arg : [arg];
    const u = unitById(ids[0]);
    const list = ids.join(",");
    switch (type) {
      case "learn": return {
        label: "Learn — Unit " + u.id + ": " + u.title,
        tasks: [
          ["Listen to the Unit " + u.id + " notes from start to finish", 12, "#/unit/" + u.id],
          ["Listen again. After each section, pause and say the main point out loud in your own words", 10, "#/unit/" + u.id],
          ["Play the Key Numbers and repeat each one out loud", 3, "#/unit/" + u.id + "/numbers"],
          ["Run the flashcards once in Listen mode", 5, "#/cards/" + u.id]
        ]
      };
      case "learn2": return {
        label: "Learn, part 2 — Unit " + u.id + ": " + u.title,
        tasks: [
          ["Listen to the Unit " + u.id + " notes again", 10, "#/unit/" + u.id],
          ["Replay just the seven-step air brake check three times, saying each step along with it", 12, "#/unit/" + u.id],
          ["Flashcards in Listen mode. Say each answer before you hear it", 8, "#/cards/" + u.id]
        ]
      };
      case "practice": return {
        label: "Practice — Unit " + u.id + ": " + u.title,
        tasks: [
          ["Flashcards in Listen mode. Say each answer out loud before you hear it", 10, "#/cards/" + u.id],
          ["Take the Unit " + u.id + " quiz with read-aloud on", 10, "#/quiz/" + u.id],
          ["Re-listen to the sections behind any questions you missed", 7, "#/unit/" + u.id],
          ["Retake just the questions you missed (button at the end of the quiz)", 3, "#/quiz/" + u.id]
        ]
      };
      case "review": return {
        label: "Review — " + unitRange(ids),
        tasks: [
          ["Play the Key Numbers for " + unitRange(ids) + " and repeat them out loud", 8, "#/numbers/" + list],
          ["Take the mixed review quiz", 15, "#/quiz/" + list],
          ["Re-listen to the notes for the unit you scored lowest on this week", 7, "#/"]
        ]
      };
      case "catchup": return {
        label: "Catch-up day",
        tasks: [
          ["Finish any task from this week you haven't checked off yet", 20, null],
          ["Flashcards in Listen mode for " + unitRange(ids), 10, "#/cards/" + list]
        ]
      };
      case "test": return {
        label: testName(ids),
        tasks: [
          ["Take the " + testName(ids) + ". Goal: 80 percent or better", 20, "#/quiz/" + list],
          ["Re-listen to the sections behind every missed question", 10, "#/"]
        ]
      };
      case "weak": return {
        label: "Work on weak spots",
        tasks: [
          ["Look at the quiz scores on the home page and pick the two lowest units", 2, "#/"],
          ["Listen to the notes for those two units", 18, "#/"],
          ["Retake the quizzes for those two units", 10, "#/"]
        ]
      };
      case "final": return {
        label: "Final review",
        tasks: [
          ["Take the full practice test covering everything", 20, "#/quiz/" + list],
          ["Play all Key Numbers one last time", 7, "#/numbers"],
          ["Check the Virginia DMV website for what to bring, then schedule the knowledge tests", 3, null]
        ]
      };
    }
    return { label: type, tasks: [] };
  }

  function planDays() {
    const out = [];
    C.plan.forEach((w, wi) => w.days.forEach((d, di) => {
      const info = dayTasks(d[0], d[1]);
      info.tasks = info.tasks.map((t, ti) => ({ id: "w" + (wi + 1) + "d" + (di + 1) + "t" + (ti + 1), text: t[0], mins: t[1], link: t[2] }));
      out.push({ week: wi, day: di, ...info });
    }));
    return out;
  }
  const isDone = (day) => day.tasks.every((t) => checks[t.id]);

  // ------------------------------------------------------------------
  // Pages
  // ------------------------------------------------------------------
  function taskList(day) {
    return '<ul class="tasks">' + day.tasks.map((t) =>
      '<li class="' + (checks[t.id] ? "checked" : "") + '">' +
      '<input type="checkbox" id="' + t.id + '" data-task="' + t.id + '"' + (checks[t.id] ? " checked" : "") + ">" +
      '<label for="' + t.id + '">' + esc(t.text) + ' <span class="mins">· ' + t.mins + " min</span></label>" +
      (t.link ? '<a class="go" href="' + t.link + '">Open →</a>' : "") +
      "</li>").join("") + "</ul>";
  }

  function scoreBadge(key) {
    const s = scores[key];
    if (s === undefined) return '<span class="badge none">No score yet</span>';
    return '<span class="badge ' + (s >= 80 ? "pass" : "fail") + '">Best: ' + s + "%</span>";
  }

  function pageHome() {
    const days = planDays();
    const allTasks = days.flatMap((d) => d.tasks);
    const doneCount = allTasks.filter((t) => checks[t.id]).length;
    const pct = Math.round((doneCount / allTasks.length) * 100);
    const today = days.find((d) => !isDone(d));
    const curWeek = today ? today.week : C.plan.length - 1;

    let h = '<h1>' + esc(C.title) + '</h1><p class="muted">' + esc(C.subtitle) + ". Every page can be read out loud. Look for the ▶ Listen buttons.</p>";
    if (!speechOK) h += '<div class="notice">This browser can\'t read aloud. Open the site in Chrome, Safari, or Edge.</div>';

    h += '<div class="card"><div class="row spread"><strong>Overall progress</strong><span>' + doneCount + " of " + allTasks.length + " tasks</span></div>" +
      '<div class="progress"><span style="width:' + pct + '%"></span></div></div>';

    if (today) {
      h += '<div class="card today"><h2>Today: ' + C.plan[today.week].title.split(":")[0] + ", " + DAY_NAMES[today.day] + "</h2>" +
        "<p><strong>" + esc(today.label) + "</strong> · about 30 minutes</p>" + taskList(today) + "</div>";
    } else {
      h += '<div class="card today"><h2>All done! 🎉</h2><p>Every task is checked. Keep taking practice tests until the DMV.</p></div>';
    }

    h += "<h2 style='margin-top:1.5rem'>6-week plan</h2><p class='muted small'>30 minutes a day, Monday to Saturday. Sunday is a rest day. If a day gets missed, just pick up where you left off.</p>";
    C.plan.forEach((w, wi) => {
      const wdays = days.filter((d) => d.week === wi);
      const wdone = wdays.filter(isDone).length;
      h += '<details class="week"' + (wi === curWeek ? " open" : "") + "><summary><span>" + esc(w.title) + '</span><span class="muted small">' + wdone + "/6 days</span></summary>" +
        '<div class="week-body"><p class="muted small">Goal: ' + esc(w.goal) + "</p>" +
        wdays.map((d) => '<div class="day' + (isDone(d) ? " done" : "") + '"><h3>' + DAY_NAMES[d.day] + " — " + esc(d.label) + "</h3>" + taskList(d) + "</div>").join("") +
        '<div class="rest">Sunday — Rest day</div></div></details>';
    });

    h += "<h2 style='margin-top:1.5rem'>Units</h2><div class='grid'>" + C.units.map((u) =>
      '<a class="unit-tile" href="#/unit/' + u.id + '"><span class="num">Unit ' + u.id + "</span><h3>" + esc(u.title) + '</h3><p class="small muted">' + esc(u.test) + " test</p>" + scoreBadge(String(u.id)) + "</a>").join("") + "</div>";

    h += '<p class="small muted" style="margin-top:2rem">Progress is saved on this device only. Notes are based on the Virginia Commercial Driver\'s Manual. When in doubt, the official manual from the Virginia DMV wins.</p>';
    app.innerHTML = h;

    app.querySelectorAll("input[data-task]").forEach((box) => box.addEventListener("change", () => {
      checks[box.dataset.task] = box.checked;
      if (!box.checked) delete checks[box.dataset.task];
      store.set("checks", checks);
      const y = window.scrollY; pageHome(); window.scrollTo(0, y);
    }));
  }

  function pageUnit(id, jump) {
    const u = unitById(id);
    if (!u) return notFound();
    let h = '<p class="small"><a href="#/">← Plan</a></p><span class="badge none">Unit ' + u.id + " · " + esc(u.test) + " test</span>" +
      "<h1 style='margin-top:.4rem'>" + esc(u.title) + '</h1><p class="muted">' + esc(u.summary) + "</p>" +
      '<div class="row"><button class="btn big" id="listen-all">▶ Listen to the whole unit</button>' +
      '<a class="btn ghost" href="#/cards/' + u.id + '">Flashcards</a><a class="btn ghost" href="#/quiz/' + u.id + '">Quiz</a></div>';

    h += '<div class="notes card" style="margin-top:1rem">';
    u.sections.forEach((s, si) => {
      h += '<section data-sec="' + si + '"><h2><span class="speakable">' + esc(s.h) + '</span><button class="mini-play" data-play="' + si + '">▶ Listen</button></h2>';
      if (s.text) h += '<p class="speakable">' + esc(s.text) + "</p>";
      if (s.list) h += "<ul>" + s.list.map((li) => '<li class="speakable">' + esc(li) + "</li>").join("") + "</ul>";
      h += "</section>";
    });
    h += "</div>";

    h += '<div class="card keynums" id="numbers"><div class="row spread"><h2>Key numbers to memorize</h2><button class="mini-play" id="play-nums">▶ Listen</button></div><ol>' +
      u.keyNumbers.map((k) => '<li class="speakable">' + esc(k) + "</li>").join("") + "</ol></div>";

    const prev = unitById(u.id - 1), next = unitById(u.id + 1);
    h += '<div class="row spread unit-nav">' + (prev ? '<a class="btn ghost" href="#/unit/' + prev.id + '">← Unit ' + prev.id + "</a>" : "<span></span>") +
      '<a class="btn yellow" href="#/quiz/' + u.id + '">Take the Unit ' + u.id + " quiz</a>" +
      (next ? '<a class="btn ghost" href="#/unit/' + next.id + '">Unit ' + next.id + " →</a>" : "<span></span>") + "</div>";
    app.innerHTML = h;

    const sectionItems = (secEl) => {
      const items = [];
      secEl.querySelectorAll(".speakable").forEach((el) => items.push({ text: el.textContent, el, wait: el.tagName === "SPAN" ? 300 : 250 }));
      return items;
    };
    document.getElementById("listen-all").onclick = () => {
      let items = [{ text: "Unit " + u.id + ". " + u.title + "." }];
      app.querySelectorAll(".notes section").forEach((sec) => { items = items.concat(sectionItems(sec)); items[items.length - 1].wait = 700; });
      items.push({ text: "Key numbers to memorize." });
      app.querySelectorAll("#numbers .speakable").forEach((el) => items.push({ text: el.textContent, el, wait: 900 }));
      Reader.play(items, "Unit " + u.id);
    };
    app.querySelectorAll("[data-play]").forEach((b) => b.onclick = () =>
      Reader.play(sectionItems(app.querySelector('[data-sec="' + b.dataset.play + '"]')), "Reading section"));
    document.getElementById("play-nums").onclick = () =>
      Reader.play([{ text: "Key numbers for unit " + u.id + "." }].concat([...app.querySelectorAll("#numbers .speakable")].map((el) => ({ text: el.textContent, el, wait: 1500 }))), "Key numbers");
    if (jump === "numbers") setTimeout(() => document.getElementById("numbers").scrollIntoView({ behavior: "smooth" }), 50);
  }

  function pageNumbers(idsStr) {
    const ids = idsStr ? parseIds(idsStr) : C.units.map((u) => u.id);
    let h = '<p class="small"><a href="#/">← Plan</a></p><h1>Key numbers' + (idsStr ? ": " + unitRange(ids) : "") + "</h1>" +
      '<p class="muted">Press Listen and repeat each one out loud after you hear it. Saying it is how it sticks.</p>' +
      '<button class="btn big" id="play-all">▶ Listen to all of them</button>';
    ids.forEach((id) => {
      const u = unitById(id);
      h += '<div class="card keynums" style="margin-top:1rem"><h2>Unit ' + u.id + ": " + esc(u.title) + "</h2><ol>" + u.keyNumbers.map((k) => '<li class="speakable" data-u="' + u.id + '">' + esc(k) + "</li>").join("") + "</ol></div>";
    });
    app.innerHTML = h;
    document.getElementById("play-all").onclick = () => {
      const items = [];
      let last = null;
      app.querySelectorAll(".speakable").forEach((el) => {
        if (el.dataset.u !== last) { last = el.dataset.u; items.push({ text: "Unit " + last + ". " + unitById(last).title + "." }); }
        items.push({ text: el.textContent, el, wait: 1800 });
      });
      Reader.play(items, "Key numbers");
    };
  }

  // ---------------- flashcards ----------------
  function pageCards(idsStr) {
    const ids = parseIds(idsStr);
    if (!ids.length) return notFound();
    let deck = ids.flatMap((id) => unitById(id).cards.map((c) => ({ ...c, unit: id })));
    let i = 0, flipped = false;

    app.innerHTML = '<p class="small"><a href="#/">← Plan</a>' + (ids.length === 1 ? ' · <a href="#/unit/' + ids[0] + '">Unit ' + ids[0] + " notes</a>" : "") + "</p>" +
      "<h1>Flashcards: " + (ids.length === 1 ? esc(unitById(ids[0]).title) : unitRange(ids)) + "</h1>" +
      '<p class="muted">Tap the card to flip it. <strong>Listen mode</strong> reads each question, gives you ' + settings.thinkTime + " seconds to say the answer out loud, then reads the answer.</p>" +
      '<div class="row" style="margin-bottom:1rem"><button class="btn big" id="listen-mode">▶ Listen mode</button><button class="btn ghost" id="shuffle">Shuffle</button></div>' +
      '<div class="card flash" id="flash" role="button" tabindex="0"></div>' +
      '<div class="row spread"><button class="btn ghost" id="prev">← Back</button><span id="count" class="muted"></span><button class="btn ghost" id="hear">🔊 Hear it</button><button class="btn" id="next">Next →</button></div>';

    const flash = document.getElementById("flash");
    function draw() {
      const c = deck[i];
      flash.className = "card flash" + (flipped ? " back" : "");
      flash.innerHTML = '<span class="side">' + (flipped ? "Answer" : "Question") + " · Unit " + c.unit + "</span>" +
        '<div class="speakable">' + esc(flipped ? c.a : c.q) + '</div><div class="hint">' + (flipped ? "Tap to see the question" : "Tap to see the answer") + "</div>";
      document.getElementById("count").textContent = (i + 1) + " of " + deck.length;
    }
    const go = (n) => { i = (n + deck.length) % deck.length; flipped = false; draw(); };
    const flip = () => { flipped = !flipped; draw(); };
    flash.onclick = () => { Reader.stop(); flip(); };
    flash.onkeydown = (e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); flip(); } };
    document.getElementById("prev").onclick = () => { Reader.stop(); go(i - 1); };
    document.getElementById("next").onclick = () => { Reader.stop(); go(i + 1); };
    document.getElementById("hear").onclick = () => say(flipped ? deck[i].a : deck[i].q, "Reading card");
    document.getElementById("shuffle").onclick = () => { Reader.stop(); deck = shuffle(deck); go(0); };
    document.getElementById("listen-mode").onclick = () => {
      const items = [];
      for (let k = i; k < deck.length; k++) {
        const n = k;
        items.push({ text: "Card " + (n + 1) + ". " + deck[n].q, onStart: () => { i = n; flipped = false; draw(); }, wait: settings.thinkTime * 1000 });
        items.push({ text: deck[n].a, onStart: () => { flipped = true; draw(); }, wait: 1500 });
      }
      items.push({ text: "That's the whole deck. Nice work." });
      Reader.play(items, "Listen mode");
    };
    draw();
  }

  // ---------------- quiz ----------------
  function pageQuiz(idsStr, onlyQs) {
    const ids = parseIds(idsStr);
    if (!ids.length) return notFound();
    const key = ids.join(",");
    const name = testName(ids);
    let pool = onlyQs || ids.flatMap((id) => unitById(id).quiz.map((q) => ({ ...q, unit: id })));
    // Shuffle question order AND answer order, so the right answer isn't always the same letter
    pool = shuffle(pool).map((q) => {
      const order = shuffle(q.choices.map((_, k) => k));
      return { ...q, choices: order.map((k) => q.choices[k]), answer: order.indexOf(q.answer), _orig: q._orig || q };
    });
    if (!onlyQs && ids.length > 1) pool = pool.slice(0, 30);
    let i = 0, right = 0, missed = [], answered = false;

    function questionText(q, n) {
      return "Question " + (n + 1) + ". " + q.q + " " + q.choices.map((c, k) => LETTERS[k] + ". " + c + ".").join(" ");
    }

    function drawQ() {
      answered = false;
      const q = pool[i];
      app.innerHTML = '<p class="small"><a href="#/">← Plan</a></p><h1>' + esc(onlyQs ? "Retry missed questions" : name) + "</h1>" +
        '<div class="row spread"><span class="muted">Question ' + (i + 1) + " of " + pool.length + "</span>" +
        '<label class="switch small"><input type="checkbox" id="auto"' + (settings.autoRead ? " checked" : "") + "> Read aloud automatically</label></div>" +
        '<div class="progress"><span style="width:' + Math.round((i / pool.length) * 100) + '%"></span></div>' +
        '<div class="card"><div class="row spread" style="align-items:flex-start"><h2 class="speakable" id="qtext" style="flex:1">' + esc(q.q) + '</h2><button class="mini-play" id="hearq">🔊 Hear it</button></div>' +
        '<div class="choices">' + q.choices.map((c, k) => '<button class="choice" data-k="' + k + '"><span class="letter">' + LETTERS[k] + '</span><span class="speakable">' + esc(c) + "</span></button>").join("") + "</div>" +
        '<div id="fb"></div></div>';

      const readQ = () => {
        const items = [{ text: "Question " + (i + 1) + ". " + q.q, el: document.getElementById("qtext"), wait: 400 }];
        app.querySelectorAll(".choice .speakable").forEach((el, k) => items.push({ text: LETTERS[k] + ". " + q.choices[k], el, wait: 350 }));
        Reader.play(items, "Reading question");
      };
      document.getElementById("hearq").onclick = readQ;
      document.getElementById("auto").onchange = (e) => { settings.autoRead = e.target.checked; saveSettings(); };
      app.querySelectorAll(".choice").forEach((b) => b.onclick = () => answer(Number(b.dataset.k)));
      if (settings.autoRead) readQ();
    }

    function answer(k) {
      if (answered) return;
      answered = true;
      const q = pool[i];
      const ok = k === q.answer;
      if (ok) right++; else missed.push(q);
      app.querySelectorAll(".choice").forEach((b, n) => {
        b.disabled = true;
        if (n === q.answer) b.classList.add("right");
        else if (n === k) b.classList.add("wrong");
      });
      const fb = document.getElementById("fb");
      const head = ok ? "Correct!" : "Not quite. The answer is " + LETTERS[q.answer] + ": " + q.choices[q.answer] + ".";
      fb.innerHTML = '<div class="feedback ' + (ok ? "good" : "bad") + '"><strong>' + esc(head) + "</strong><br>" + esc(q.why) + '</div><button class="btn big" id="nextq">' + (i + 1 < pool.length ? "Next question →" : "See my score") + "</button>";
      document.getElementById("nextq").onclick = () => { Reader.stop(); i++; if (i < pool.length) { drawQ(); window.scrollTo(0, 0); } else finish(); };
      if (settings.autoRead) say(head + " " + q.why, ok ? "Correct" : "Explaining");
      else Reader.stop();
    }

    function finish() {
      const pct = Math.round((right / pool.length) * 100);
      if (!onlyQs) { scores[key] = Math.max(scores[key] || 0, pct); store.set("scores", scores); }
      const pass = pct >= 80;
      let h = '<p class="small"><a href="#/">← Plan</a></p><h1>' + esc(onlyQs ? "Retry results" : name) + '</h1><div class="card" style="text-align:center">' +
        '<div class="score-big" style="color:' + (pass ? "var(--good)" : "var(--bad)") + '">' + pct + "%</div><p>" + right + " of " + pool.length + " correct. " +
        (pass ? "That's a passing score. The DMV needs 80 percent." : "The DMV needs 80 percent. Review the missed ones below and try again.") + "</p>" +
        '<div class="row" style="justify-content:center">' + (missed.length ? '<button class="btn" id="retry-missed">Retry the ' + missed.length + " missed</button>" : "") +
        '<a class="btn ghost" href="#/quiz/' + key + '" id="again">Take it again</a><a class="btn ghost" href="#/">Back to plan</a></div></div>';
      if (missed.length) {
        h += '<div class="card"><div class="row spread"><h2>Questions to review</h2><button class="mini-play" id="hear-missed">▶ Listen</button></div><ol class="missed">' +
          missed.map((q) => '<li class="speakable">' + esc(q.q) + "<br><strong>Answer: " + esc(q.choices[q.answer]) + ".</strong> " + esc(q.why) +
            ' <a href="#/unit/' + q.unit + '">Unit ' + q.unit + " notes</a></li>").join("") + "</ol></div>";
      }
      app.innerHTML = h;
      window.scrollTo(0, 0);
      const summary = "You got " + right + " out of " + pool.length + ", " + pct + " percent. " + (pass ? "That's passing. Great job." : "Keep going. You need 80 percent.");
      if (settings.autoRead) say(summary, "Score");
      const rm = document.getElementById("retry-missed");
      if (rm) rm.onclick = () => { Reader.stop(); pageQuiz(idsStr, missed.map((q) => q._orig)); };
      const again = document.getElementById("again");
      again.onclick = (e) => { e.preventDefault(); Reader.stop(); pageQuiz(idsStr); };
      const hm = document.getElementById("hear-missed");
      if (hm) hm.onclick = () => Reader.play(missed.map((q, n) => ({
        text: "Number " + (n + 1) + ". " + q.q + " The answer is: " + q.choices[q.answer] + ". " + q.why,
        el: app.querySelectorAll(".missed .speakable")[n], wait: 900 })), "Reviewing missed");
    }

    drawQ();
  }

  function pageTests() {
    const tests = [
      { ids: [1, 2, 3, 4, 5, 6, 7], note: "Units 1 to 7. Up to 30 random questions. Everyone takes this test." },
      { ids: [8], note: "Unit 8. Needed to drive a truck with air brakes." },
      { ids: [9], note: "Unit 9. Needed for a Class A license." },
      { ids: C.units.map((u) => u.id), note: "All units mixed. 30 random questions." }
    ];
    app.innerHTML = '<p class="small"><a href="#/">← Plan</a></p><h1>Practice tests</h1><p class="muted">The real Virginia tests are multiple choice and you need 80 percent to pass. Aim to pass each practice test at least twice before test day.</p>' +
      tests.map((t) => '<div class="card"><div class="row spread"><h2>' + esc(testName(t.ids)) + "</h2>" + scoreBadge(t.ids.join(",")) + '</div><p class="muted">' + esc(t.note) + '</p><a class="btn" href="#/quiz/' + t.ids.join(",") + '">Start</a></div>').join("") +
      '<h2 style="margin-top:1.5rem">Quiz one unit</h2><div class="grid">' + C.units.map((u) =>
        '<a class="unit-tile" href="#/quiz/' + u.id + '"><span class="num">Unit ' + u.id + "</span><h3>" + esc(u.title) + "</h3>" + scoreBadge(String(u.id)) + "</a>").join("") + "</div>";
  }

  function pageSettings() {
    let h = '<p class="small"><a href="#/">← Plan</a></p><h1>Voice settings</h1>';
    if (!speechOK) {
      h += '<div class="notice">This browser does not support read-aloud. Try Chrome, Safari, or Edge.</div>';
    } else {
      h += '<div class="card"><label class="field">Voice<select id="voice"><option value="">Default voice</option>' +
        voices.map((v) => '<option value="' + esc(v.voiceURI) + '"' + (v.voiceURI === settings.voice ? " selected" : "") + ">" + esc(v.name) + " (" + esc(v.lang) + ")</option>").join("") +
        "</select></label>" +
        '<label class="field">Speed: <span id="rate-val">' + settings.rate.toFixed(2) + 'x</span><input type="range" id="rate" min="0.6" max="1.4" step="0.05" value="' + settings.rate + '"></label>' +
        '<label class="field">Flashcard thinking time: <span id="think-val">' + settings.thinkTime + ' seconds</span><input type="range" id="think" min="2" max="12" step="1" value="' + settings.thinkTime + '"></label>' +
        '<label class="switch"><input type="checkbox" id="auto"' + (settings.autoRead ? " checked" : "") + "> Read quiz questions aloud automatically</label>" +
        '<button class="btn big" id="test-voice">▶ Test the voice</button></div>' +
        '<p class="muted small">Voices come from the phone or computer itself, so they differ between devices. Voices with names like "Natural", "Enhanced", or "Premium" usually sound best. On iPhone, more voices can be downloaded in Settings → Accessibility → Spoken Content → Voices. If there is no sound, check the volume and the ring/silent switch.</p>';
    }
    h += '<div class="card"><h2>Progress</h2><p class="muted">Checkmarks and quiz scores are saved on this device.</p><button class="btn ghost" id="reset">Reset all progress</button></div>';
    app.innerHTML = h;
    if (speechOK) {
      document.getElementById("voice").onchange = (e) => { settings.voice = e.target.value; saveSettings(); };
      document.getElementById("rate").oninput = (e) => { settings.rate = Number(e.target.value); document.getElementById("rate-val").textContent = settings.rate.toFixed(2) + "x"; saveSettings(); };
      document.getElementById("think").oninput = (e) => { settings.thinkTime = Number(e.target.value); document.getElementById("think-val").textContent = settings.thinkTime + " seconds"; saveSettings(); };
      document.getElementById("auto").onchange = (e) => { settings.autoRead = e.target.checked; saveSettings(); };
      document.getElementById("test-voice").onclick = () => say("Hi! This is how I'll read your CDL notes. Following distance is one second for every ten feet of vehicle length.", "Testing voice");
    }
    document.getElementById("reset").onclick = () => {
      if (confirm("Clear all checkmarks and quiz scores on this device?")) { checks = {}; scores = {}; store.set("checks", checks); store.set("scores", scores); location.hash = "#/"; }
    };
  }

  function notFound() { app.innerHTML = '<h1>Page not found</h1><p><a href="#/">Go to the plan</a></p>'; }

  // ------------------------------------------------------------------
  // Router
  // ------------------------------------------------------------------
  function render() {
    const parts = (location.hash.replace(/^#\/?/, "") || "").split("/");
    const [page, a, b] = parts;
    Reader.stop();
    document.querySelectorAll(".topbar nav a").forEach((n) => n.classList.toggle("active", n.getAttribute("href") === "#/" + (page || "")));
    if (!page) pageHome();
    else if (page === "unit") pageUnit(a, b);
    else if (page === "cards") pageCards(a);
    else if (page === "quiz") pageQuiz(a);
    else if (page === "numbers") pageNumbers(a);
    else if (page === "tests") pageTests();
    else if (page === "settings") pageSettings();
    else notFound();
    if (!(page === "unit" && b === "numbers")) window.scrollTo(0, 0);
  }

  document.getElementById("site-title").textContent = "Study Hub";
  document.title = C.title;
  window.addEventListener("hashchange", render);
  render();
})();
