/* สวนภาษา: แอปเรียนภาษาอังกฤษ (ไม่มี build step ไม่มี dependency)
   เก็บความคืบหน้าใน localStorage ใช้ Web Speech API สำหรับเสียงอ่านและการฟังเสียงพูด */
(function () {
  'use strict';

  var C = window.COURSE || [];
  var ABC = window.ALPHABET || [];
  var app = document.getElementById('app');

  /* ---------------- data index ---------------- */
  var LESSONS = [];
  C.forEach(function (st, si) {
    st.si = si;
    st.lessons.forEach(function (l, li) { l.si = si; l.li = li; l.stage = st; l.n = LESSONS.length; LESSONS.push(l); });
  });
  var byId = {};
  LESSONS.forEach(function (l) { byId[l.id] = l; });
  var stageById = {};
  C.forEach(function (s) { stageById[s.id] = s; });

  /* ---------------- helpers ---------------- */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  function dayKey(d) { d = d || new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function dayIndex(d) { d = d || new Date(); return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 86400000); }
  function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }
  function norm(s) { return String(s).toLowerCase().replace(/[’‘`]/g, "'").replace(/[^\p{L}\p{N}' ]+/gu, ' ').replace(/\s+/g, ' ').trim(); }
  function tokensOf(s) { return String(s).split(/\s+/).map(function (w) { return w.replace(/^[^\p{L}\p{N}']+|[^\p{L}\p{N}']+$/gu, ''); }).filter(Boolean); }
  function plain(html) { return String(html).replace(/<[^>]+>/g, ''); }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  /* seeded random + torn paper edge */
  function rng(seed) { var t = seed >>> 0; return function () { t += 0x6D2B79F5; var r = Math.imul(t ^ (t >>> 15), 1 | t); r ^= r + Math.imul(r ^ (r >>> 7), 61 | r); return ((r ^ (r >>> 14)) >>> 0) / 4294967296; }; }
  function hash(str) { var h = 2166136261; for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function tear(seed) {
    var r = rng(seed), pts = [], steps = 64, y = 4;
    for (var i = 0; i <= steps; i++) {
      y = clamp(y + (r() - 0.5) * 4.2, 0.5, 9);
      var jag = r() < 0.18 ? (r() * 3) : 0;
      pts.push((i / steps * 100).toFixed(2) + '% ' + (y + jag).toFixed(1) + 'px');
    }
    return 'polygon(' + pts.join(', ') + ', 100% 100%, 0% 100%)';
  }
  function applyTears(root) { $$('[data-tear]', root).forEach(function (el) { el.style.setProperty('--tear', tear(hash(el.getAttribute('data-tear') || 'x'))); }); }

  /* ---------------- icons (one hand-made set) ---------------- */
  var SV = ' viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  var I = {
    sound: '<svg' + SV + '><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
    mic: '<svg' + SV + '><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/></svg>',
    stop: '<svg' + SV + '><rect x="7" y="7" width="10" height="10" rx="2"/></svg>',
    close: '<svg' + SV + '><path d="M6 6l12 12M18 6 6 18"/></svg>'
  };

  /* ---------------- state ---------------- */
  var KEY = 'suanpasa.v1';
  function defaults() { return { done: {}, passed: {}, xp: 0, days: {}, srs: {}, settings: { goal: 20, rate: 0.9, voice: '', free: false, dir: 'en' }, created: Date.now() }; }
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return defaults();
      var s = JSON.parse(raw), d = defaults();
      Object.keys(d).forEach(function (k) { if (s[k] === undefined) s[k] = d[k]; });
      s.settings = Object.assign(d.settings, s.settings || {});
      return s;
    } catch (e) { return defaults(); }
  }
  var S = load();
  var storageOk = true;
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); storageOk = true; } catch (e) { storageOk = false; } }

  function addXP(n) { if (!n) return; S.xp += n; var k = dayKey(); S.days[k] = (S.days[k] || 0) + n; save(); chrome(); }
  function xpToday() { return S.days[dayKey()] || 0; }
  function streak() {
    var d = new Date(), n = 0;
    if (!S.days[dayKey(d)]) d.setDate(d.getDate() - 1);
    while (S.days[dayKey(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }

  /* unlock rules */
  function stagePassed(si) { return !!S.passed[C[si].id]; }
  function stageOpen(si) { return S.settings.free || si === 0 || stagePassed(si - 1) || stagePassed(si); }
  function lessonOpen(l) {
    if (S.settings.free || stagePassed(l.si)) return true;
    if (!stageOpen(l.si)) return false;
    return l.li === 0 || !!S.done[l.stage.lessons[l.li - 1].id];
  }
  function doneCount(si) { return C[si].lessons.filter(function (l) { return S.done[l.id]; }).length; }
  function totalDone() { return LESSONS.filter(function (l) { return S.done[l.id]; }).length; }
  function currentLesson() { for (var i = 0; i < LESSONS.length; i++) { var l = LESSONS[i]; if (!S.done[l.id] && lessonOpen(l)) return l; } return null; }
  function currentStageIndex() {
    for (var si = 0; si < C.length; si++) { if (!stagePassed(si)) return si; }
    return C.length - 1;
  }
  function level() {
    var lv = 'เริ่มต้น';
    C.forEach(function (s, si) { if (stagePassed(si)) lv = s.cefr; });
    return lv;
  }

  /* ---------------- spaced repetition ---------------- */
  var INT = [0, 1, 2, 4, 8, 16, 32, 64, 128];
  var CARD = {};
  LESSONS.forEach(function (l) { l.words.forEach(function (w) { CARD[l.id + '|' + w[0]] = { w: w, l: l }; }); });
  function addCards(l) {
    var t = dayIndex(), added = 0;
    l.words.forEach(function (w) { var k = l.id + '|' + w[0]; if (!S.srs[k]) { S.srs[k] = { b: 0, d: t + 1 }; added++; } });
    return added;
  }
  function dueCards() { var t = dayIndex(); return Object.keys(S.srs).filter(function (k) { return CARD[k] && S.srs[k].d <= t; }); }
  function boxLabel(b) { return b <= 0 ? 'ใหม่' : b <= 2 ? 'กำลังจำ' : b <= 4 ? 'เริ่มจำได้' : 'จำได้แม่น'; }
  function boxTier(b) { return b <= 0 ? 0 : b <= 2 ? 1 : b <= 4 ? 2 : 3; }
  function exampleFor(card) {
    var w = card.w[0].toLowerCase().replace(/\.\.\./g, '').trim();
    var first = w.split(' ')[0];
    var hit = card.l.sents.find(function (s) { return s[0].toLowerCase().indexOf(w) !== -1; }) ||
      card.l.sents.find(function (s) { return first.length > 2 && s[0].toLowerCase().indexOf(first) !== -1; });
    return hit || null;
  }

  /* ---------------- speech: listening to the voice ---------------- */
  var TTS = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
  var voices = [];
  function loadVoices() { if (!TTS) return; voices = speechSynthesis.getVoices().filter(function (v) { return /^en([-_]|$)/i.test(v.lang); }); }
  if (TTS) { loadVoices(); speechSynthesis.onvoiceschanged = function () { loadVoices(); if (document.body.dataset.view === 'progress') fillVoices(); }; }
  function pickVoice() {
    return voices.find(function (v) { return v.name === S.settings.voice; }) ||
      voices.find(function (v) { return /en[-_]US/i.test(v.lang) && /Google|Samantha|Aria|Jenny|Natural/i.test(v.name); }) ||
      voices.find(function (v) { return /en[-_](US|GB)/i.test(v.lang); }) || voices[0] || null;
  }
  function say(text, slow, queue) {
    if (!TTS || !text) return;
    if (!queue) speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    var v = pickVoice();
    if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = 'en-US'; }
    u.rate = clamp((slow ? 0.62 : 1) * (S.settings.rate || 0.9), 0.4, 1.4);
    speechSynthesis.speak(u);
  }
  function hush() { if (TTS) speechSynthesis.cancel(); }

  /* ---------------- speech: hearing the learner ---------------- */
  var SRC = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  var rec = null;
  function listen(onInterim, onDone) {
    if (!SRC) { onDone({ error: 'unsupported' }); return; }
    if (rec) { try { rec.abort(); } catch (e) {} rec = null; }
    hush();
    var r = new SRC(), alts = [], finished = false;
    r.lang = 'en-US'; r.interimResults = true; r.maxAlternatives = 4; r.continuous = false;
    r.onresult = function (e) {
      var interim = '';
      for (var i = e.resultIndex; i < e.results.length; i++) {
        var res = e.results[i];
        if (res.isFinal) { var a = []; for (var j = 0; j < res.length; j++) a.push(res[j].transcript); alts.push(a); }
        else interim += res[0].transcript;
      }
      onInterim(alts.map(function (a) { return a[0]; }).join(' ') + ' ' + interim);
    };
    r.onerror = function (e) { if (finished) return; finished = true; rec = null; onDone({ error: e.error || 'unknown' }); };
    r.onend = function () { if (finished) return; finished = true; rec = null; onDone({ alts: alts }); };
    try { r.start(); rec = r; } catch (e) { finished = true; onDone({ error: 'start' }); }
  }
  function stopListening() { if (rec) { try { rec.stop(); } catch (e) {} } }
  function micError(code) {
    if (code === 'not-allowed' || code === 'service-not-allowed') return 'เบราว์เซอร์ยังไม่อนุญาตให้ใช้ไมค์ กดอนุญาตที่แถบที่อยู่ด้านบนแล้วลองใหม่';
    if (code === 'no-speech') return 'ยังไม่ได้ยินเสียงพูด ลองพูดใกล้ไมค์ขึ้นอีกนิด';
    if (code === 'network') return 'การฟังเสียงพูดต้องต่ออินเทอร์เน็ต ตรวจการเชื่อมต่อแล้วลองใหม่';
    if (code === 'audio-capture') return 'ไม่พบไมโครโฟนในเครื่องนี้';
    return 'ฟังเสียงพูดไม่สำเร็จ ลองกดพูดอีกครั้ง';
  }
  /* compare what was heard with the target, word by word (longest common subsequence) */
  function compare(target, heardList) {
    var t = tokensOf(target).map(norm), best = null;
    (heardList.length ? heardList : ['']).forEach(function (heard) {
      var h = tokensOf(heard).map(norm), m = t.length, n = h.length, L = [];
      for (var i = 0; i <= m; i++) { L.push(new Array(n + 1).fill(0)); }
      for (i = 1; i <= m; i++) for (var j = 1; j <= n; j++) L[i][j] = t[i - 1] === h[j - 1] ? L[i - 1][j - 1] + 1 : Math.max(L[i - 1][j], L[i][j - 1]);
      var ok = new Array(m).fill(false); i = m; j = n;
      while (i > 0 && j > 0) { if (t[i - 1] === h[j - 1]) { ok[i - 1] = true; i--; j--; } else if (L[i - 1][j] >= L[i][j - 1]) i--; else j--; }
      var score = m ? L[m][n] / m : 0;
      if (!best || score > best.score) best = { score: score, ok: ok, heard: heard };
    });
    return best;
  }
  function heardCandidates(alts) {
    if (!alts || !alts.length) return [];
    if (alts.length === 1) return alts[0];
    var joined = alts.map(function (a) { return a[0]; }).join(' ');
    return [joined].concat(alts[alts.length - 1]);
  }
  function markWords(target, ok) {
    return tokensOf(target).map(function (w, i) { return '<span class="' + (ok[i] ? 'ok' : 'miss') + '">' + esc(w) + '</span>'; }).join(' ');
  }

  /* ---------------- chrome: nav, status ---------------- */
  function chrome() {
    var st = $('[data-status]');
    if (st) {
      var n = streak();
      st.innerHTML = 'ต่อเนื่อง <b class="num">' + n + '</b> วัน<span class="hide-s">&ensp; วันนี้ <b class="num">' + xpToday() + '</b>/' + S.settings.goal + ' XP</span>';
    }
    var due = dueCards().length, badge = $('[data-due]');
    if (badge) { badge.hidden = !due; badge.textContent = due > 99 ? '99+' : due; badge.setAttribute('aria-label', 'รอทวน ' + due + ' คำ'); }
  }
  function setNav(v) {
    $$('[data-nav]').forEach(function (a) { if (a.getAttribute('data-nav') === v) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
  }

  /* ---------------- shared bits ---------------- */
  function sayBtn(text, label, cls) {
    return '<button class="btn btn--icon ' + (cls || '') + '" type="button" data-act="say" data-text="' + esc(text) + '" aria-label="' + esc(label || ('ฟังเสียง ' + text)) + '"' + (TTS ? '' : ' disabled') + '>' + I.sound + '</button>';
  }
  function plantHTML(l, opts) {
    opts = opts || {};
    var open = lessonOpen(l), done = S.done[l.id], cur = currentLesson();
    var state = done ? 'done' : (cur === l ? 'now' : (open ? 'open' : 'seed'));
    if (opts.force) state = opts.force;
    var hue = (l.n % 4) + 1;
    var fig = '<span class="plant__fig" aria-hidden="true"><span class="plant__head" lang="en">' + esc(l.head) + '</span><span class="plant__stem"><i>(</i><i>)</i></span></span>';
    var label = opts.nolabel ? '' : '<span class="plant__label"><span class="plant__n">บทที่ ' + (l.li + 1) + '</span><span class="plant__t">' + esc(l.title) + '</span>' + (done ? '<span class="plant__s">ได้ ' + done.best + '%</span>' : '') + '</span>';
    var aria = 'บทที่ ' + (l.li + 1) + ' ' + l.title + (done ? ' ผ่านแล้ว ได้ ' + done.best + '%' : state === 'now' ? ' บทที่ควรเรียนต่อ' : state === 'seed' ? ' ยังล็อกอยู่' : ' เปิดให้เรียนแล้ว');
    var cls = 'plant' + (opts.grow ? ' is-growing' : '');
    if (state === 'seed' || opts.static) return '<div class="' + cls + '" data-state="' + state + '" data-hue="' + hue + '">' + fig + label + '<span class="visually-hidden">' + esc(aria) + '</span></div>';
    return '<a class="' + cls + '" data-state="' + state + '" data-hue="' + hue + '" href="#/lesson/' + l.id + '" aria-label="' + esc(aria) + '">' + fig + label + '</a>';
  }
  function signHTML(st) {
    var passed = stagePassed(st.si);
    var aria = 'ด่านสอบขั้น ' + (st.si + 1) + (passed ? ' ผ่านแล้ว' : ' ทำได้ทุกเมื่อ ถ้าผ่านจะเปิดขั้นถัดไป');
    return '<a class="plant sign" data-state="' + (passed ? 'passed' : 'open') + '" href="#/check/' + st.id + '" aria-label="' + esc(aria) + '">' +
      '<span class="plant__fig" aria-hidden="true"><span class="plant__head">' + (passed ? 'ผ่านด่าน' : 'ด่านสอบ') + '</span><span class="plant__stem"></span></span>' +
      '<span class="plant__label"><span class="plant__n">ท้ายขั้น</span><span class="plant__t">' + (passed ? 'ผ่านแล้ว' : 'สอบข้ามได้') + '</span></span></a>';
  }

  /* ---------------- views ---------------- */
  function render(html, opts) {
    opts = opts || {};
    document.body.dataset.mode = opts.mode || '';
    app.innerHTML = html;
    applyTears(app);
    chrome();
    if (!opts.keepScroll) window.scrollTo(0, 0);
    if (opts.focus !== false) { var f = opts.focus ? $(opts.focus, app) : app; if (f) f.focus({ preventScroll: true }); }
  }

  /* home: today + the garden roadmap */
  function viewHome() {
    var cur = currentLesson(), n = totalDone(), csi = currentStageIndex();
    var goal = S.settings.goal, xp = xpToday(), due = dueCards().length;
    var h1, lead, actions;
    var fresh = n === 0 && !Object.keys(S.passed).length;
    if (fresh) {
      h1 = 'เริ่มจากศูนย์<br>วันละบทก็พูดได้';
      lead = 'บทแรกใช้เวลาราวสิบนาที ฟังเสียงจริงแล้วพูดตามได้ทันที';
      actions = '<a class="btn btn--primary btn--lg" href="#/lesson/' + LESSONS[0].id + '">เริ่มบทแรก</a><a class="btn" href="#/check/s0">เคยเรียนแล้ว ทดสอบข้ามขั้น</a>';
    } else if (cur) {
      h1 = 'วันนี้มาเรียน<br>' + esc(cur.title);
      lead = esc(cur.goal);
      actions = '<a class="btn btn--primary btn--lg" href="#/lesson/' + cur.id + '">เรียนบทนี้</a>' + (due ? '<a class="btn" href="#/review">ทวน ' + due + ' คำก่อน</a>' : '<a class="btn" href="#/speak">ฝึกพูด</a>');
    } else if (!stagePassed(csi)) {
      h1 = 'พร้อมสอบด่าน<br>' + esc(C[csi].name);
      lead = 'ผ่านด่านนี้แล้วขั้นถัดไปจะเปิดทันที';
      actions = '<a class="btn btn--primary btn--lg" href="#/check/' + C[csi].id + '">เริ่มด่านสอบ</a><a class="btn" href="#/review">ทวนคำก่อน</a>';
    } else {
      h1 = 'สวนเต็มแล้ว<br>พูดทุกวันให้คล่อง';
      lead = 'คุณเรียนครบทุกบท ฝึกพูดและทวนคำทุกวันเพื่อรักษาความคล่อง';
      actions = '<a class="btn btn--primary btn--lg" href="#/speak">ฝึกพูด</a><a class="btn" href="#/review">ทวนคำ</a>';
    }
    var p = clamp(xp / goal, 0, 1);
    var today =
      '<section class="today container" aria-labelledby="today-h">' +
        '<div><h1 id="today-h">' + h1 + '</h1><p class="lead">' + lead + '</p><div class="actions">' + actions + '</div></div>' +
        '<aside class="today__card sheet" aria-labelledby="goal-h">' +
          '<h2 id="goal-h">เป้าหมายวันนี้</h2>' +
          '<div class="meter"><div class="meter__top"><b class="num">' + xp + ' / ' + goal + ' XP</b><span>' + (xp >= goal ? 'ครบเป้าแล้ว' : 'อีก ' + (goal - xp) + ' XP') + '</span></div>' +
          '<div class="meter__track" role="progressbar" aria-label="XP วันนี้" aria-valuemin="0" aria-valuemax="' + goal + '" aria-valuenow="' + Math.min(xp, goal) + '"><div class="meter__fill" style="--p:' + p + '"' + (p >= 1 ? ' data-full' : '') + '></div></div></div>' +
          '<dl class="facts"><div><dt>ต่อเนื่อง</dt><dd>' + streak() + ' วัน</dd></div><div><dt>รอทวน</dt><dd>' + (due ? '<a href="#/review">' + due + ' คำ</a>' : '0 คำ') + '</dd></div><div><dt>ระดับ</dt><dd>' + level() + '</dd></div></dl>' +
        '</aside>' +
      '</section>';

    var stages = C.map(function (st, si) {
      var open = stageOpen(si), passed = stagePassed(si), dn = doneCount(si);
      var state = passed ? 'passed' : (!open ? 'locked' : (si === csi ? 'now' : 'open'));
      return '<li class="stage" id="stage-' + st.id + '" data-state="' + state + '">' +
        '<div class="stage__head"><div><h3>ขั้น ' + (si + 1) + ' ' + esc(st.name) + '</h3><p class="stage__can">จบขั้นนี้แล้ว คุณจะ' + esc(st.cando) + '</p></div>' +
        '<dl class="stage__meta"><div><dt>ระดับ</dt><dd>' + st.cefr + '</dd></div><div><dt>ผ่านแล้ว</dt><dd>' + dn + ' จาก 6</dd></div></dl></div>' +
        '<div class="bed" tabindex="-1"><ol class="bed__row" data-tear="' + st.id + '">' +
          st.lessons.map(function (l) { return '<li>' + plantHTML(l) + '</li>'; }).join('') +
          '<li>' + signHTML(st) + '</li>' +
        '</ol></div></li>';
    }).join('');

    render(today +
      '<section class="road container" id="road" aria-labelledby="road-h">' +
        '<div class="road__head"><div><h2 id="road-h">เส้นทางของคุณ</h2><p>7 ขั้นจากไม่รู้อะไรเลยจนพูดได้คล่อง ทุกบทที่ผ่านจะกลายเป็นต้นไม้หนึ่งต้นในสวนนี้</p></div>' +
        '<p class="road__overall"><b>' + n + '/' + LESSONS.length + '</b>บทที่ผ่านแล้ว</p></div>' +
        '<ol class="stages">' + stages + '</ol>' +
        (storageOk ? '' : '<p class="notice">เบราว์เซอร์นี้ไม่ยอมให้บันทึกความคืบหน้า (เช่นโหมดไม่ระบุตัวตน) ปิดหน้าแล้วความคืบหน้าจะหายไป</p>') +
      '</section>');

    /* scroll the current stage's bed so the current plant is visible on small screens */
    var nowPlant = $('.plant[data-state="now"]', app);
    if (nowPlant) { var bed = nowPlant.closest('.bed'); var li = nowPlant.parentElement; if (bed && li && li.offsetLeft > bed.clientWidth - 120) bed.scrollLeft = li.offsetLeft - 24; }
  }

  /* lesson intro: notes, words, sentences */
  function viewLesson(l) {
    var open = lessonOpen(l), done = S.done[l.id];
    var items = buildLesson(l).length;
    var start = open
      ? '<button class="btn btn--primary btn--lg" type="button" data-act="start" data-id="' + l.id + '">' + (done ? 'ฝึกบทนี้อีกครั้ง' : 'เริ่มฝึก ' + items + ' ข้อ') + '</button>'
      : '<button class="btn btn--primary btn--lg" type="button" disabled>ยังล็อกอยู่</button>';
    var lockNote = open ? '' : '<p class="notice">บทนี้จะเปิดเมื่อผ่านบทก่อนหน้า หรือผ่านด่านสอบของขั้นก่อน อ่านเนื้อหาล่วงหน้าได้เลย</p>';
    var abc = l.extra === 'alphabet'
      ? '<section class="block" aria-labelledby="abc-h"><h2 id="abc-h">ตัวอักษร A ถึง Z</h2><p class="muted">แตะเพื่อฟังชื่อตัวอักษรและคำตัวอย่าง</p><ul class="abc">' +
        ABC.map(function (a) { return '<li><button type="button" data-act="say" data-text="' + esc(a[0] + '. ' + a[1]) + '" aria-label="ฟัง ' + a[0] + ' ' + a[1] + '"' + (TTS ? '' : ' disabled') + '><b lang="en">' + a[0] + a[0].toLowerCase() + '</b><span lang="en">' + a[1] + '</span></button></li>'; }).join('') + '</ul></section>'
      : '';
    var pairs = l.pairs
      ? '<section class="block" aria-labelledby="pair-h"><h2 id="pair-h">คู่เสียงที่ต้องแยกให้ออก</h2><p class="muted">ฟังสลับกันหลาย ๆ รอบ จนหูเริ่มได้ยินความต่าง</p><ul class="words">' +
        l.pairs.map(function (p) { return '<li><button class="word" type="button" data-act="say" data-text="' + esc(p[0] + '. ' + p[1] + '. ' + p[0] + '. ' + p[1]) + '"' + (TTS ? '' : ' disabled') + '><span><span class="word__en" lang="en">' + esc(p[0]) + ' กับ ' + esc(p[1]) + '</span><span class="word__th">ฟังสลับสองรอบ</span></span>' + I.sound + '</button></li>'; }).join('') + '</ul></section>'
      : '';
    render(
      '<div class="view container"><article class="lesson">' +
        '<div class="lesson__top">' +
          '<p class="crumb"><a href="#/">เส้นทาง</a>&ensp;/&ensp;ขั้น ' + (l.si + 1) + ' ' + esc(l.stage.name) + ' (' + l.stage.cefr + ')&ensp;/&ensp;บทที่ ' + (l.li + 1) + '</p>' +
          '<h1>' + esc(l.title) + '</h1><p class="lesson__en" lang="en">' + esc(l.en) + '</p>' +
          '<p class="lesson__goal">' + esc(l.goal) + '</p>' +
          (done ? '<p class="muted small">ผ่านแล้ว คะแนนดีที่สุด ' + done.best + '%</p>' : '') +
          '<div class="actions">' + start + (TTS ? '<button class="btn" type="button" data-act="sayall" data-id="' + l.id + '">ฟังทุกประโยค</button>' : '') + '</div>' + lockNote +
          (TTS ? '' : '<p class="notice">เบราว์เซอร์นี้อ่านออกเสียงไม่ได้ แบบฝึกฟังจะถูกข้ามไป ลองเปิดด้วย Chrome, Edge หรือ Safari</p>') +
        '</div>' +
        '<aside class="notes sheet" aria-labelledby="notes-h"><h2 id="notes-h">หลักที่ต้องรู้</h2><ol>' + l.notes.map(function (n) { return '<li>' + n + '</li>'; }).join('') + '</ol></aside>' +
        abc +
        '<section class="block" aria-labelledby="w-h"><h2 id="w-h">คำศัพท์ ' + l.words.length + ' คำ</h2><ul class="words">' +
          l.words.map(function (w) { return '<li><button class="word" type="button" data-act="say" data-text="' + esc(w[0]) + '"' + (TTS ? '' : ' disabled') + ' aria-label="' + esc(w[0] + ' แปลว่า ' + w[1] + ' แตะเพื่อฟัง') + '"><span><span class="word__en" lang="en">' + esc(w[0]) + '</span><span class="word__th">' + esc(w[1]) + '</span></span>' + I.sound + '</button></li>'; }).join('') +
        '</ul></section>' +
        '<section class="block" aria-labelledby="s-h"><h2 id="s-h">ประโยคตัวอย่าง</h2><ul class="sents">' +
          l.sents.map(function (s) { return '<li><button class="sent" type="button" data-act="say" data-text="' + esc(s[0]) + '"' + (TTS ? '' : ' disabled') + '>' + I.sound + '<span><span class="sent__en" lang="en">' + esc(s[0]) + '</span><span class="sent__th">' + esc(s[1]) + '</span></span></button></li>'; }).join('') +
        '</ul></section>' +
        pairs +
        '<div class="lesson__foot">' + start + nextLink(l) + '</div>' +
      '</article></div>');
  }
  function nextLink(l) {
    var nx = LESSONS[l.n + 1];
    if (l.li === 5) return '<a class="btn" href="#/check/' + l.stage.id + '">ไปด่านสอบท้ายขั้น</a>';
    return nx ? '<a class="btn" href="#/lesson/' + nx.id + '">ดูบทถัดไป</a>' : '';
  }

  /* checkpoint intro */
  function viewCheck(st) {
    var passed = stagePassed(st.si), dn = doneCount(st.si);
    var nx = C[st.si + 1];
    render(
      '<div class="view container"><div class="view__head">' +
        '<p class="crumb"><a href="#/">เส้นทาง</a>&ensp;/&ensp;ขั้น ' + (st.si + 1) + ' ' + esc(st.name) + ' (' + st.cefr + ')</p>' +
        '<h1>ด่านสอบขั้น ' + (st.si + 1) + '</h1>' +
        '<p>15 ข้อจากทุกบทในขั้นนี้ ได้ 75% ขึ้นไปถือว่าผ่าน' + (nx ? ' แล้วขั้น ' + (st.si + 2) + ' ' + esc(nx.name) + ' จะเปิดทันที' : '') + '</p>' +
      '</div>' +
      (passed ? '<p class="notice">คุณผ่านด่านนี้แล้ว สอบซ้ำได้เพื่อทบทวน</p>' :
        dn < 6 ? '<p class="notice">ยังเรียนขั้นนี้ไม่ครบ (' + dn + ' จาก 6 บท) ถ้าเคยเรียนมาแล้วสอบข้ามได้เลย ถ้าผ่าน ทุกบทในขั้นนี้และขั้นก่อนหน้าจะนับว่าผ่าน</p>' : '') +
      '<div class="actions" style="margin-top: var(--space-xl)"><button class="btn btn--primary btn--lg" type="button" data-act="startcheck" data-id="' + st.id + '">เริ่มด่านสอบ</button><a class="btn" href="#/">กลับไปที่เส้นทาง</a></div>' +
      '</div>');
  }

  /* ---------------- exercise builders ---------------- */
  function distract(answer, ordered, n) {
    var seen = {}, out = [];
    seen[answer.toLowerCase()] = 1;
    for (var i = 0; i < ordered.length && out.length < n; i++) { var x = ordered[i], k = x.toLowerCase(); if (!seen[k]) { seen[k] = 1; out.push(x); } }
    return out;
  }
  function stageWords(si) { return C[si].lessons.reduce(function (a, l) { return a.concat(l.words); }, []); }
  function mcqMeaning(w, local, pool) {
    var opts = shuffle([w[1]].concat(distract(w[1], shuffle(local.map(function (x) { return x[1]; })).concat(shuffle(pool.map(function (x) { return x[1]; }))), 3)));
    return { t: 'mcq', q: 'คำนี้แปลว่าอะไร', big: w[0], say: w[0], opts: opts, ans: w[1], en: w[0], th: w[1] };
  }
  function mcqWord(w, local, pool) {
    var opts = shuffle([w[0]].concat(distract(w[0], shuffle(local.map(function (x) { return x[0]; })).concat(shuffle(pool.map(function (x) { return x[0]; }))), 3)));
    return { t: 'mcq', q: 'ภาษาอังกฤษพูดว่าอย่างไร', bigTh: w[1], opts: opts, optEn: true, ans: w[0], en: w[0], th: w[1] };
  }
  function mcqListen(w, local, pool) {
    var opts = shuffle([w[0]].concat(distract(w[0], shuffle(local.map(function (x) { return x[0]; })).concat(shuffle(pool.map(function (x) { return x[0]; }))), 3)));
    return { t: 'mcq', q: 'ฟังแล้วเลือกคำที่ได้ยิน', listen: w[0], opts: opts, optEn: true, ans: w[0], en: w[0], th: w[1] };
  }
  function typable(w) { return w[0].length <= 18 && !/\.\.\.|…|\//.test(w[0]); }
  function typeWord(w) { return { t: 'type', q: 'พิมพ์เป็นภาษาอังกฤษ', bigTh: w[1], hintSay: w[0], ans: w[0], en: w[0], th: w[1] }; }
  function tileable(s) { var n = tokensOf(s[0]).length; return n >= 3 && n <= 12; }
  function tilesItem(s, others, dictation) {
    var toks = tokensOf(s[0]), lower = toks.map(function (t) { return t.toLowerCase(); });
    var extra = shuffle(others.reduce(function (a, o) { return a.concat(tokensOf(o[0])); }, [])).filter(function (t) { return lower.indexOf(t.toLowerCase()) === -1; });
    var uniq = []; extra.forEach(function (t) { if (uniq.map(function (u) { return u.toLowerCase(); }).indexOf(t.toLowerCase()) === -1) uniq.push(t); });
    var bank = shuffle(toks.concat(uniq.slice(0, dictation ? 1 : 2)));
    return dictation
      ? { t: 'tiles', q: 'ฟังแล้วเรียงคำให้ตรงกับที่ได้ยิน', listen: s[0], bank: bank, ans: s[0], en: s[0], th: s[1] }
      : { t: 'tiles', q: 'เรียงคำให้เป็นประโยคภาษาอังกฤษ', bigTh: s[1], bank: bank, ans: s[0], en: s[0], th: s[1] };
  }
  function pairItem(p) { var target = p[Math.random() < 0.5 ? 0 : 1]; return { t: 'pair', q: 'ฟังให้ดี คุณได้ยินคำไหน', listen: target, opts: p.slice(), optEn: true, ans: target, en: target, th: 'คู่เสียง ' + p[0] + ' กับ ' + p[1] }; }
  function speakItem(s) { return { t: 'speak', q: 'พูดประโยคนี้ออกเสียง', en: s[0], th: s[1], ans: s[0] }; }

  function buildLesson(l) {
    var pool = stageWords(l.si), W = shuffle(l.words), words = [], sents = [];
    W.slice(0, 4).forEach(function (w) { words.push(mcqMeaning(w, l.words, pool)); });
    W.slice(4, 6).forEach(function (w) { words.push(mcqWord(w, l.words, pool)); });
    W.slice(6, 8).forEach(function (w) { words.push(TTS ? mcqListen(w, l.words, pool) : mcqMeaning(w, l.words, pool)); });
    var tw = W.slice(8).concat(W).find(typable); if (tw) words.push(typeWord(tw));
    var Ss = shuffle(l.sents.filter(tileable));
    Ss.slice(0, 2).forEach(function (s) { sents.push(tilesItem(s, l.sents.filter(function (o) { return o !== s; }), false)); });
    if (TTS && Ss[2]) sents.push(tilesItem(Ss[2], l.sents.filter(function (o) { return o !== Ss[2]; }), true));
    if (TTS && l.pairs) shuffle(l.pairs).slice(0, 3).forEach(function (p) { words.push(pairItem(p)); });
    var out = shuffle(words).concat(shuffle(sents));
    if (SRC) out.push(speakItem(Ss[3] || Ss[0] || l.sents[0]));
    return out;
  }
  function buildCheck(st) {
    var pool = stageWords(st.si), all = [], sentPool = st.lessons.reduce(function (a, l) { return a.concat(l.sents); }, []);
    var W = shuffle(pool);
    W.slice(0, 5).forEach(function (w) { all.push(mcqMeaning(w, pool, pool)); });
    W.slice(5, 8).forEach(function (w) { all.push(mcqWord(w, pool, pool)); });
    if (TTS) W.slice(8, 10).forEach(function (w) { all.push(mcqListen(w, pool, pool)); });
    else W.slice(8, 10).forEach(function (w) { all.push(mcqMeaning(w, pool, pool)); });
    var tw = W.slice(10).find(typable); if (tw) all.push(typeWord(tw));
    var Ss = shuffle(sentPool.filter(tileable));
    Ss.slice(0, 3).forEach(function (s) { all.push(tilesItem(s, Ss.slice(5, 9), false)); });
    if (Ss[3]) all.push(TTS ? tilesItem(Ss[3], Ss.slice(5, 9), true) : tilesItem(Ss[3], Ss.slice(5, 9), false));
    return shuffle(all);
  }

  /* ---------------- practice player ---------------- */
  var P = null;
  function startPlay(kind, obj) {
    hush();
    var items = kind === 'lesson' ? buildLesson(obj) : buildCheck(obj);
    P = { kind: kind, obj: obj, queue: items.slice(), total: items.length, finished: 0, right: 0, scored: 0, phase: 'answer', sel: null, line: [], tries: 0 };
    items.forEach(function (it) { it.first = true; });
    playRender();
  }
  function optHTML(it) {
    var cls = it.t === 'pair' ? 'opts opts--pair' : 'opts';
    return '<ul class="' + cls + '">' + it.opts.map(function (o, i) {
      return '<li><button class="opt" type="button" data-act="opt" data-v="' + esc(o) + '"><kbd>' + (i + 1) + '</kbd><span' + (it.optEn ? ' lang="en"' : '') + '>' + esc(o) + '</span></button></li>';
    }).join('') + '</ul>';
  }
  function listenHTML(text) {
    return '<div class="actions"><button class="btn btn--ink btn--lg" type="button" data-act="say" data-text="' + esc(text) + '">' + I.sound + 'ฟังอีกครั้ง</button><button class="btn btn--lg" type="button" data-act="say" data-slow="1" data-text="' + esc(text) + '">ฟังช้า</button></div>';
  }
  function taskHTML(it) {
    var h = '<div class="task"><p class="task__q" id="task-q">' + esc(it.q) + '</p>';
    if (it.t === 'mcq' || it.t === 'pair') {
      if (it.big) h += '<div class="task__big"><h2 lang="en">' + esc(it.big) + '</h2>' + sayBtn(it.say) + '</div>';
      if (it.bigTh) h += '<div class="task__big"><h2 class="task__th">' + esc(it.bigTh) + '</h2></div>';
      if (it.listen) h += listenHTML(it.listen);
      h += optHTML(it);
    } else if (it.t === 'tiles') {
      if (it.bigTh) h += '<div class="task__big"><h2 class="task__th">' + esc(it.bigTh) + '</h2></div>';
      if (it.listen) h += listenHTML(it.listen);
      h += '<div class="tiles"><div class="tiles__line" id="line" aria-label="ประโยคที่เรียง" aria-live="polite"></div><div class="tiles__bank" role="group" aria-label="คำให้เลือก">' +
        it.bank.map(function (t, i) { return '<button class="tile" type="button" data-act="tile" data-k="' + i + '" lang="en">' + esc(t) + '</button>'; }).join('') + '</div></div>';
    } else if (it.t === 'type') {
      h += '<div class="task__big"><h2 class="task__th">' + esc(it.bigTh) + '</h2>' + sayBtn(it.hintSay, 'ฟังเป็นตัวช่วย') + '</div>' +
        '<div class="field"><label for="answer">คำตอบภาษาอังกฤษ</label><input class="input input--big" id="answer" name="answer" type="text" lang="en" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done"></div>';
    } else if (it.t === 'speak') {
      h += '<div class="task__big"><h2 lang="en">' + esc(it.en) + '</h2>' + sayBtn(it.en) + '</div><p class="task__th">' + esc(it.th) + '</p>' +
        '<div class="speakbox"><button class="mic" type="button" data-act="mic">' + I.mic + '<span>กดแล้วพูด</span></button><p class="heard" id="heard" aria-live="polite"></p></div>';
    }
    return h + '</div>';
  }
  function barHTML(it) {
    if (P.phase === 'feedback') {
      var good = P.lastRight;
      var head = good ? ['ถูกต้อง', 'ใช่เลย', 'เยี่ยม', 'แม่นมาก'][Math.floor(Math.random() * 4)] : 'ยังไม่ใช่';
      var body = good
        ? '<p lang="en">' + esc(it.en) + '</p>' + (it.th && it.t !== 'pair' ? '<p class="th">' + esc(it.th) + '</p>' : '')
        : (it.t === 'mcq' && !it.optEn
          ? '<p>คำตอบคือ <b>' + esc(it.ans) + '</b></p><p class="th"><span lang="en">' + esc(it.en) + '</span> แปลว่า ' + esc(it.th) + '</p>'
          : '<p>คำตอบคือ <b lang="en">' + esc(it.ans) + '</b></p>' + (it.th && it.t !== 'pair' ? '<p class="th">' + esc(it.th) + '</p>' : ''));
      return '<div class="feedback" data-mark="' + (good ? 'right' : 'wrong') + '" role="status"><div class="container feedback__in">' +
        '<div class="feedback__msg"><h2>' + head + '</h2>' + body + '</div>' +
        '<div class="feedback__side">' + (it.en ? sayBtn(it.en) : '') + '<button class="btn btn--primary btn--lg" type="button" data-act="next" id="next">ไปต่อ</button></div></div></div>';
    }
    var left = '', right = '';
    if (it.t === 'mcq' || it.t === 'pair') left = '<p class="muted small">แตะคำตอบ หรือกดเลข 1 ถึง ' + it.opts.length + '</p>';
    if (it.t === 'tiles' || it.t === 'type') { left = '<button class="link" type="button" data-act="giveup">ไม่รู้ ดูเฉลย</button>'; right = '<button class="btn btn--primary btn--lg" type="button" data-act="check" id="check"' + (it.t === 'tiles' ? ' disabled' : '') + '>ตรวจคำตอบ</button>'; }
    if (it.t === 'speak') left = '<button class="link" type="button" data-act="skip">พูดตอนนี้ไม่ได้ ข้ามข้อนี้</button>';
    return '<div class="feedback"><div class="container feedback__in"><div class="feedback__msg">' + left + '</div><div class="feedback__side">' + right + '</div></div></div>';
  }
  function playRender() {
    var it = P.queue[0];
    if (!it) { finishPlay(); return; }
    P.phase = 'answer'; P.sel = null; P.line = []; P.tries = 0;
    var label = P.kind === 'lesson' ? P.obj.title : 'ด่านสอบขั้น ' + (P.obj.si + 1);
    render(
      '<div class="player">' +
        '<div class="container player__bar"><button class="btn btn--icon btn--sm" type="button" data-act="quit" aria-label="ออกจากแบบฝึก">' + I.close + '</button>' +
        '<div class="progress" role="progressbar" aria-label="ความคืบหน้า ' + esc(label) + '" aria-valuemin="0" aria-valuemax="' + P.total + '" aria-valuenow="' + P.finished + '"><i style="--p:' + (P.finished / P.total) + '"></i></div>' +
        '<span class="player__count">' + Math.min(P.finished + 1, P.total) + ' / ' + P.total + '</span></div>' +
        '<div class="container stage-area" id="task">' + taskHTML(it) + '</div>' +
        '<div id="bar">' + barHTML(it) + '</div>' +
      '</div>', { mode: 'play', focus: false });
    var first = $('#answer') || $('.opt') || $('.tile') || $('.mic') || $('[data-act="say"]');
    if (first) first.focus({ preventScroll: true });
    if (it.listen) setTimeout(function () { say(it.listen); }, 250);
    else if (it.t === 'mcq' && it.big) setTimeout(function () { say(it.say); }, 250);
  }
  function updateBar() { var it = P.queue[0]; $('#bar').innerHTML = barHTML(it); if (P.phase === 'feedback') { var n = $('#next'); if (n) n.focus({ preventScroll: true }); } }
  function settle(right, scored) {
    var it = P.queue[0];
    P.phase = 'feedback'; P.lastRight = right;
    if (it.first && scored !== false) { P.scored++; if (right) P.right++; }
    if (right && it.en && it.t !== 'mcq' && it.t !== 'pair') say(it.en);
    $$('.opt, .tile, #answer, .mic', $('#task')).forEach(function (b) { b.disabled = true; });
    updateBar();
  }
  function nextItem() {
    var it = P.queue.shift();
    if (!P.lastRight && it.first && it.t !== 'speak') { var again = Object.assign({}, it, { first: false }); if (again.bank) again.bank = shuffle(again.bank); if (again.opts && again.t === 'mcq') again.opts = shuffle(again.opts); P.queue.push(again); }
    else P.finished++;
    if (!P.lastRight && !it.first) { /* second miss: move on */ }
    playRender();
  }
  function finishPlay() {
    var score = P.scored ? Math.round(P.right / P.scored * 100) : 100;
    var o = P.obj, html, xp = 0;
    if (P.kind === 'lesson') {
      var passed = score >= 60, prev = S.done[o.id], grew = passed && !prev;
      xp = 10 + Math.round(score / 10);
      var added = 0;
      if (passed) { S.done[o.id] = { best: Math.max(score, prev ? prev.best : 0), at: Date.now() }; added = addCards(o); }
      save(); addXP(xp);
      var nx = LESSONS[o.n + 1];
      var nextBtn = !passed
        ? '<button class="btn btn--primary btn--lg" type="button" data-act="start" data-id="' + o.id + '">ลองอีกรอบ</button>'
        : (o.li === 5 ? '<a class="btn btn--primary btn--lg" href="#/check/' + o.stage.id + '">ไปด่านสอบท้ายขั้น</a>' : (nx ? '<a class="btn btn--primary btn--lg" href="#/lesson/' + nx.id + '">บทถัดไป</a>' : '<a class="btn btn--primary btn--lg" href="#/">กลับไปที่สวน</a>'));
      html =
        '<div class="result">' +
          '<div class="result__plant" data-tear="result-' + o.id + '">' + plantHTML(o, { force: passed ? 'done' : 'now', grow: grew, nolabel: true, static: true }) + '</div>' +
          '<h1>' + (passed ? (grew ? 'ต้นไม้บทนี้โตแล้ว' : 'ฝึกซ้ำได้ดีมาก') : 'อีกนิดเดียว') + '</h1>' +
          '<p class="lead">' + (passed ? 'คำศัพท์จากบท' + esc(o.title) + 'เข้าคลังแล้ว ระบบจะชวนทวนเมื่อใกล้ลืม' : 'ต้องได้ 60% ขึ้นไปต้นไม้ถึงจะโต ข้อที่พลาดรอบนี้จะจำได้ดีขึ้นในรอบหน้า') + '</p>' +
          '<dl class="facts"><div><dt>คะแนน</dt><dd>' + score + '%</dd></div><div><dt>ได้รับ</dt><dd>' + xp + ' XP</dd></div><div><dt>คำใหม่เข้าคลัง</dt><dd>' + added + ' คำ</dd></div></dl>' +
          '<div class="actions">' + nextBtn + (passed ? '<button class="btn" type="button" data-act="start" data-id="' + o.id + '">ฝึกบทนี้อีกครั้ง</button>' : '<a class="btn" href="#/lesson/' + o.id + '">อ่านเนื้อหาอีกรอบ</a>') + '<a class="btn" href="#/">ดูเส้นทาง</a></div>' +
        '</div>';
    } else {
      var ok = score >= 75;
      xp = ok ? 30 : 10;
      if (ok) { for (var i = 0; i <= o.si; i++) S.passed[C[i].id] = true; }
      save(); addXP(xp);
      var nst = C[o.si + 1];
      html =
        '<div class="result">' +
          '<h1>' + (ok ? 'ผ่านด่าน' + esc(o.name) : 'ยังไม่ผ่านด่านนี้') + '</h1>' +
          '<p class="lead">' + (ok ? (nst ? 'ขั้น ' + (o.si + 2) + ' ' + esc(nst.name) + ' เปิดแล้ว ระดับของคุณตอนนี้คือ ' + o.cefr : 'คุณผ่านทุกขั้นแล้ว ระดับ ' + o.cefr + ' ฝึกพูดทุกวันเพื่อรักษาความคล่อง') : 'ต้องได้ 75% ขึ้นไป ทวนบทที่ยังไม่แม่นแล้วกลับมาลองใหม่ได้ทุกเมื่อ') + '</p>' +
          '<dl class="facts"><div><dt>คะแนน</dt><dd>' + score + '%</dd></div><div><dt>ได้รับ</dt><dd>' + xp + ' XP</dd></div><div><dt>ระดับ</dt><dd>' + level() + '</dd></div></dl>' +
          '<div class="actions">' + (ok && nst ? '<a class="btn btn--primary btn--lg" href="#/lesson/' + nst.lessons[0].id + '">เริ่มขั้น ' + (o.si + 2) + '</a>' : '<button class="btn btn--primary btn--lg" type="button" data-act="startcheck" data-id="' + o.id + '">สอบอีกครั้ง</button>') + '<a class="btn" href="#/">ดูเส้นทาง</a></div>' +
        '</div>';
    }
    P = null;
    render('<div class="view container stage-area">' + html + '</div>', { focus: 'h1' });
    var h = $('h1', app); if (h) { h.tabIndex = -1; h.focus({ preventScroll: true }); }
  }

  /* answers */
  function chooseOpt(btn) {
    if (!P || P.phase !== 'answer') return;
    var it = P.queue[0], v = btn.getAttribute('data-v'), right = v === it.ans;
    btn.setAttribute('data-mark', right ? 'right' : 'wrong');
    if (!right) $$('.opt', $('#task')).forEach(function (b) { if (b.getAttribute('data-v') === it.ans) b.setAttribute('data-mark', 'right'); });
    if (it.t === 'mcq' && !it.listen && it.en) say(it.en);
    if (it.t === 'pair') say(it.ans);
    settle(right);
  }
  function tileMove(btn, toLine) {
    if (!P || P.phase !== 'answer') return;
    var k = +btn.getAttribute('data-k');
    if (toLine) { P.line.push(k); btn.disabled = true; }
    else { P.line.splice(P.line.indexOf(k), 1); var src = $('.tiles__bank [data-k="' + k + '"]'); if (src) { src.disabled = false; src.focus({ preventScroll: true }); } }
    var it = P.queue[0];
    $('#line').innerHTML = P.line.map(function (i) { return '<button class="tile" type="button" data-act="untile" data-k="' + i + '" lang="en" aria-label="เอา ' + esc(it.bank[i]) + ' ออก">' + esc(it.bank[i]) + '</button>'; }).join('');
    var c = $('#check'); if (c) c.disabled = !P.line.length;
  }
  function checkAnswer() {
    if (!P || P.phase !== 'answer') return;
    var it = P.queue[0], given = '';
    if (it.t === 'tiles') given = P.line.map(function (i) { return it.bank[i]; }).join(' ');
    else if (it.t === 'type') { var inp = $('#answer'); given = inp ? inp.value : ''; if (!given.trim()) { inp.focus(); return; } }
    var right = norm(given) === norm(it.ans);
    if (!right && it.t === 'type') right = norm(given).replace(/'/g, '') === norm(it.ans).replace(/'/g, '');
    settle(right);
  }
  function micPress(btn) {
    if (!P || P.phase !== 'answer') return;
    if (rec) { stopListening(); return; }
    var it = P.queue[0], out = $('#heard');
    btn.setAttribute('data-on', ''); btn.querySelector('span').textContent = 'กำลังฟัง แตะเพื่อหยุด';
    out.textContent = '';
    listen(function (t) { out.textContent = t; }, function (res) {
      btn.removeAttribute('data-on'); btn.querySelector('span').textContent = 'กดแล้วพูดอีกครั้ง';
      if (res.error) { out.innerHTML = '<span class="miss">' + esc(micError(res.error)) + '</span>'; return; }
      var r = compare(it.en, heardCandidates(res.alts)), pct = Math.round(r.score * 100);
      P.tries++;
      out.innerHTML = markWords(it.en, r.ok) + '<br><span class="score">ตรง ' + pct + '%</span> <span class="muted small">ได้ยินว่า “' + esc(r.heard || '') + '”</span>';
      if (r.score >= 0.6) settle(true);
      else if (P.tries >= 3) settle(false);
      else out.insertAdjacentHTML('beforeend', '<br><span class="muted small">ต้องตรง 60% ขึ้นไป ลองอีกครั้ง (เหลือ ' + (3 - P.tries) + ' ครั้ง)</span>');
    });
  }

  /* ---------------- review ---------------- */
  var R = null;
  function viewReview() {
    var all = Object.keys(S.srs).filter(function (k) { return CARD[k]; });
    if (!all.length) {
      render('<div class="view container"><div class="view__head"><h1>ทวนคำศัพท์</h1></div><div class="empty sheet"><h2>ยังไม่มีคำให้ทวน</h2><p>ทุกครั้งที่ผ่านบทเรียน คำศัพท์ของบทนั้นจะเข้ามาที่นี่ แล้วระบบจะชวนทวนในวันที่ใกล้ลืมพอดี</p><a class="btn btn--primary" href="#/">ไปเรียนบทแรก</a></div></div>');
      return;
    }
    var due = dueCards();
    if (!due.length && !R) {
      var t = dayIndex(), tomorrow = all.filter(function (k) { return S.srs[k].d === t + 1; }).length;
      render('<div class="view container"><div class="view__head"><h1>ทวนคำศัพท์</h1></div><div class="empty sheet"><h2>วันนี้ทวนครบแล้ว</h2><p>คำในคลัง ' + all.length + ' คำ พรุ่งนี้มีคิวทวน ' + tomorrow + ' คำ ระหว่างนี้ลองฝึกพูดประโยคจากบทที่เรียนแล้ว</p><div class="actions"><a class="btn btn--primary" href="#/speak">ฝึกพูด</a><button class="btn" type="button" data-act="cram">ทวนทั้งหมดอีกรอบ</button></div></div></div>');
      return;
    }
    if (!R) R = { cards: shuffle(due).slice(0, 30), i: 0, shown: false, n: 0 };
    reviewRender();
  }
  function reviewRender() {
    var k = R.cards[R.i];
    if (!k) {
      var n = R.n; R = null;
      render('<div class="view container"><div class="view__head"><h1>ทวนครบ ' + n + ' คำ</h1><p>คำที่จำได้จะเว้นระยะนานขึ้นเรื่อย ๆ คำที่ลืมจะกลับมาเร็วขึ้น</p></div><div class="actions"><a class="btn btn--primary" href="#/">กลับไปที่เส้นทาง</a><a class="btn" href="#/speak">ฝึกพูดต่อ</a></div></div>');
      return;
    }
    var c = CARD[k], s = S.srs[k], en = S.settings.dir !== 'th';
    var ex = exampleFor(c);
    var front = en
      ? '<div class="flash__front"><h2 lang="en">' + esc(c.w[0]) + '</h2>' + sayBtn(c.w[0]) + '</div>'
      : '<div class="flash__front"><p class="th-big">' + esc(c.w[1]) + '</p></div>';
    var back = R.shown
      ? '<div class="flash__back"><p class="answer"' + (en ? '' : ' lang="en"') + '>' + esc(en ? c.w[1] : c.w[0]) + '</p>' + (en ? '' : sayBtn(c.w[0])) +
        (ex ? '<p class="flash__ex"><span lang="en">' + esc(ex[0]) + '</span><br>' + esc(ex[1]) + '</p>' : '') +
        '<p class="flash__from">จากบท ' + esc(c.l.title) + '</p></div>'
      : '<p class="muted">นึกคำตอบในใจก่อน แล้วค่อยเปิดดู</p>';
    var t = dayIndex();
    function when(b) { var d = INT[clamp(b, 0, INT.length - 1)]; return d === 0 ? 'วันนี้' : d === 1 ? 'พรุ่งนี้' : 'อีก ' + d + ' วัน'; }
    var rate = R.shown
      ? '<div class="rate" role="group" aria-label="จำได้แค่ไหน">' +
          '<button class="btn" type="button" data-act="rate" data-r="0">ลืม<small>อีกรอบวันนี้</small></button>' +
          '<button class="btn" type="button" data-act="rate" data-r="1">ยาก<small>พรุ่งนี้</small></button>' +
          '<button class="btn btn--primary" type="button" data-act="rate" data-r="2">จำได้<small>' + when(s.b + 1) + '</small></button>' +
          '<button class="btn" type="button" data-act="rate" data-r="3">ง่ายมาก<small>' + when(s.b + 2) + '</small></button></div>'
      : '<div class="actions" style="justify-content:center; margin-top: var(--space-xl)"><button class="btn btn--primary btn--lg" type="button" data-act="reveal" id="reveal">ดูคำตอบ</button></div>';
    render('<div class="view container">' +
      '<div class="review__bar"><h1 class="section-h" style="margin:0">ทวนคำศัพท์</h1><span class="muted num">' + (R.i + 1) + ' / ' + R.cards.length + '</span></div>' +
      '<div class="flash sheet" aria-live="polite">' + front + back + '</div>' + rate +
      '<p class="muted small" style="text-align:center; margin-top: var(--space-lg)">คีย์ลัด: เว้นวรรคเพื่อเปิด และเลข 1 ถึง 4 เพื่อให้คะแนน</p></div>', { focus: R.shown ? '[data-r="2"]' : '#reveal', keepScroll: true });
    if (!R.shown && en) setTimeout(function () { say(c.w[0]); }, 200);
  }
  function rateCard(r) {
    var k = R.cards[R.i], s = S.srs[k], t = dayIndex();
    if (r === 0) { s.b = 0; s.d = t; R.cards.push(k); }
    else if (r === 1) { s.b = Math.max(1, s.b); s.d = t + 1; }
    else if (r === 2) { s.b = Math.min(s.b + 1, INT.length - 1); s.d = t + INT[s.b]; }
    else { s.b = Math.min(s.b + 2, INT.length - 1); s.d = t + INT[s.b]; }
    R.i++; R.shown = false; if (r > 0) R.n++;
    save(); addXP(1);
    reviewRender();
  }

  /* ---------------- speaking gym ---------------- */
  var SP = { mode: 'shadow', si: null, i: 0, hideTh: false, hint: false, mediaUrl: null };
  function speakSentences(si) { return C[si].lessons.reduce(function (a, l) { return a.concat(l.sents.map(function (s) { return { s: s, l: l }; })); }, []); }
  function viewSpeak() {
    if (SP.si === null || !stageOpen(SP.si)) SP.si = Math.min(currentStageIndex(), C.length - 1);
    if (!stageOpen(SP.si)) SP.si = 0;
    var list = SP.mode === 'shadow' ? speakSentences(SP.si) : C[SP.si].talk;
    SP.i = clamp(SP.i, 0, list.length - 1);
    var pills = C.map(function (st, si) { var o = stageOpen(si); return '<button type="button" data-act="spstage" data-si="' + si + '" aria-pressed="' + (si === SP.si) + '"' + (o ? '' : ' disabled title="ยังล็อกอยู่"') + '>' + st.cefr + '</button>'; }).join('');
    var support = SRC ? '' : (window.MediaRecorder && navigator.mediaDevices ? '<p class="notice">เบราว์เซอร์นี้ตรวจเสียงพูดไม่ได้ ปุ่มไมค์จะอัดเสียงแทน แล้วให้คุณฟังเทียบกับเสียงต้นฉบับ (ถ้าอยากให้ระบบตรวจ ใช้ Chrome หรือ Edge)</p>' : '<p class="notice">เบราว์เซอร์นี้ใช้ไมค์ไม่ได้ ฝึกด้วยการฟังแล้วพูดตามออกเสียงดัง ๆ ก็ได้ผลเช่นกัน</p>');
    var card;
    if (SP.mode === 'shadow') {
      var it = list[SP.i];
      card = '<div class="speak__card sheet"><p class="muted small">บท ' + esc(it.l.title) + '</p><h2 lang="en">' + esc(it.s[0]) + '</h2>' +
        (SP.hideTh ? '' : '<p class="speak__th">' + esc(it.s[1]) + '</p>') +
        '<div class="speak__row">' + (TTS ? '<button class="btn btn--ink" type="button" data-act="say" data-text="' + esc(it.s[0]) + '">' + I.sound + 'ฟัง</button><button class="btn" type="button" data-act="say" data-slow="1" data-text="' + esc(it.s[0]) + '">ฟังช้า</button>' : '') +
        '<button class="mic" type="button" data-act="spmic">' + I.mic + '<span>' + (SRC ? 'กดแล้วพูดตาม' : 'อัดเสียง') + '</span></button></div>' +
        '<p class="heard" id="heard" aria-live="polite"></p><div class="recorded" id="recorded"></div></div>';
    } else {
      var q = list[SP.i];
      card = '<div class="speak__card sheet"><p class="muted small">ตอบคำถามด้วยประโยคของคุณเอง พูดให้ได้อย่างน้อยสองประโยค</p><h2 lang="en">' + esc(q[0]) + '</h2>' +
        '<div class="speak__row">' + (TTS ? '<button class="btn btn--ink" type="button" data-act="say" data-text="' + esc(q[0]) + '">' + I.sound + 'ฟังคำถาม</button>' : '') +
        '<button class="mic" type="button" data-act="spmic">' + I.mic + '<span>' + (SRC ? 'กดแล้วตอบ' : 'อัดเสียง') + '</span></button>' +
        '<button class="btn" type="button" data-act="sphint" aria-expanded="' + SP.hint + '">' + (SP.hint ? 'ซ่อนตัวช่วย' : 'ดูตัวช่วยเริ่มประโยค') + '</button></div>' +
        (SP.hint ? '<p class="hint" lang="en">' + esc(q[1]) + '</p>' : '') +
        '<p class="heard" id="heard" aria-live="polite"></p><div class="recorded" id="recorded"></div></div>';
    }
    render('<div class="view container speak">' +
      '<div class="view__head" style="margin:0"><h1>ห้องฝึกพูด</h1><p>พูดออกเสียงจริงทุกวันคือทางลัดสู่ความคล่อง ฟัง พูดตาม แล้วดูว่าระบบได้ยินตรงแค่ไหน</p></div>' +
      '<div class="speak__controls"><div class="seg" role="group" aria-label="โหมด"><button type="button" data-act="spmode" data-m="shadow" aria-pressed="' + (SP.mode === 'shadow') + '">พูดตามประโยค</button><button type="button" data-act="spmode" data-m="talk" aria-pressed="' + (SP.mode === 'talk') + '">ตอบคำถาม</button></div>' +
      '<div class="seg" role="group" aria-label="เลือกระดับ">' + pills + '</div></div>' + support + card +
      '<div class="speak__nav"><button class="btn" type="button" data-act="spprev"' + (SP.i === 0 ? ' disabled' : '') + '>ก่อนหน้า</button>' +
      '<span class="muted num">' + (SP.i + 1) + ' / ' + list.length + '</span>' +
      (SP.mode === 'shadow' ? '<label class="check small"><input type="checkbox" data-act="sphide"' + (SP.hideTh ? ' checked' : '') + '>ซ่อนคำแปล</label>' : '') +
      '<button class="btn" type="button" data-act="spnext"' + (SP.i >= list.length - 1 ? ' disabled' : '') + '>ถัดไป</button></div>' +
      '</div>', { keepScroll: true, focus: false });
  }
  var mediaRec = null;
  function spMic(btn) {
    var out = $('#heard');
    if (SRC) {
      if (rec) { stopListening(); return; }
      var target = SP.mode === 'shadow' ? speakSentences(SP.si)[SP.i].s[0] : null;
      btn.setAttribute('data-on', ''); btn.querySelector('span').textContent = 'กำลังฟัง แตะเพื่อหยุด';
      listen(function (t) { out.textContent = t; }, function (res) {
        btn.removeAttribute('data-on'); btn.querySelector('span').textContent = 'พูดอีกครั้ง';
        if (res.error) { out.innerHTML = '<span class="miss">' + esc(micError(res.error)) + '</span>'; return; }
        var cands = heardCandidates(res.alts);
        if (target) {
          var r = compare(target, cands), pct = Math.round(r.score * 100);
          out.innerHTML = markWords(target, r.ok) + '<br><span class="score">ตรง ' + pct + '%</span> <span class="muted small">' + (pct >= 90 ? 'ชัดมาก' : pct >= 70 ? 'ดีแล้ว ลองให้ลื่นขึ้นอีกนิด' : 'ฟังช้าอีกรอบแล้วลองใหม่') + '</span>';
          if (pct >= 70) addXP(2);
        } else {
          var said = cands[0] || '', words = tokensOf(said).length;
          out.innerHTML = '<span lang="en">“' + esc(said) + '”</span><br><span class="score">' + words + ' คำ</span> <span class="muted small">' +
            (words >= 15 ? 'ยอดเยี่ยม ลองเพิ่มเหตุผลด้วย because หรือตัวอย่างด้วย for example' : words >= 6 ? 'ดีแล้ว ลองพูดให้ยาวขึ้นเป็นสองสามประโยค' : 'ลองพูดให้ยาวขึ้นอีก ใช้ตัวช่วยเริ่มประโยคได้') + '</span>';
          if (words >= 6) addXP(3);
        }
      });
      return;
    }
    if (!window.MediaRecorder || !navigator.mediaDevices) return;
    if (mediaRec && mediaRec.state === 'recording') { mediaRec.stop(); return; }
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      var chunks = []; mediaRec = new MediaRecorder(stream);
      mediaRec.ondataavailable = function (e) { chunks.push(e.data); };
      mediaRec.onstop = function () {
        stream.getTracks().forEach(function (t) { t.stop(); });
        if (SP.mediaUrl) URL.revokeObjectURL(SP.mediaUrl);
        SP.mediaUrl = URL.createObjectURL(new Blob(chunks, { type: mediaRec.mimeType || 'audio/webm' }));
        btn.removeAttribute('data-on'); btn.querySelector('span').textContent = 'อัดใหม่';
        $('#recorded').innerHTML = '<p class="small muted">เสียงของคุณ ฟังเทียบกับเสียงต้นฉบับ</p><audio controls src="' + SP.mediaUrl + '"></audio>';
        addXP(1);
      };
      mediaRec.start();
      btn.setAttribute('data-on', ''); btn.querySelector('span').textContent = 'กำลังอัด แตะเพื่อหยุด';
    }).catch(function () { out.innerHTML = '<span class="miss">' + esc(micError('not-allowed')) + '</span>'; });
  }

  /* ---------------- word bank ---------------- */
  var WV = { q: '', st: 'all', all: false };
  function viewWords() {
    render('<div class="view container">' +
      '<div class="view__head"><h1>คลังคำ</h1><p>ทุกคำจากบทที่ผ่านแล้ว พร้อมสถานะความจำ แตะปุ่มเสียงเพื่อฟัง</p></div>' +
      '<div class="filters"><div class="field"><label for="wq">ค้นหาคำ (อังกฤษหรือไทย)</label><input class="input" id="wq" name="q" type="search" autocomplete="off" value="' + esc(WV.q) + '" data-act="wsearch"></div>' +
      '<div class="seg" role="group" aria-label="กรองตามระดับ"><button type="button" data-act="wst" data-st="all" aria-pressed="' + (WV.st === 'all') + '">ทุกระดับ</button>' +
      C.map(function (s) { return '<button type="button" data-act="wst" data-st="' + s.id + '" aria-pressed="' + (WV.st === s.id) + '">' + s.cefr + '</button>'; }).join('') + '</div></div>' +
      '<label class="check small" style="margin-bottom: var(--space-lg)"><input type="checkbox" data-act="wall"' + (WV.all ? ' checked' : '') + '>แสดงคำจากบทที่ยังไม่ได้เรียนด้วย</label>' +
      '<div id="wlist"></div></div>', { focus: false });
    wordsList();
  }
  function wordsList() {
    var q = norm(WV.q), rows = [];
    LESSONS.forEach(function (l) {
      if (WV.st !== 'all' && l.stage.id !== WV.st) return;
      if (!WV.all && !S.done[l.id]) return;
      l.words.forEach(function (w) {
        if (q && norm(w[0]).indexOf(q) === -1 && w[1].indexOf(WV.q.trim()) === -1) return;
        rows.push({ w: w, l: l, s: S.srs[l.id + '|' + w[0]] });
      });
    });
    var box = $('#wlist');
    if (!box) return;
    if (!rows.length) {
      box.innerHTML = '<div class="empty sheet"><h2>' + (q ? 'ไม่พบคำที่ค้นหา' : 'คลังคำยังว่างอยู่') + '</h2><p>' + (q ? 'ลองพิมพ์คำอื่น หรือติ๊ก “แสดงคำจากบทที่ยังไม่ได้เรียนด้วย”' : 'ผ่านบทเรียนแรกแล้วคำศัพท์จะมาอยู่ที่นี่') + '</p>' + (q ? '' : '<a class="btn btn--primary" href="#/">ไปเรียนบทแรก</a>') + '</div>';
      return;
    }
    box.innerHTML = '<div class="table-wrap"><table><caption>' + rows.length + ' คำ</caption><thead><tr><th scope="col">คำ</th><th scope="col">ความหมาย</th><th scope="col">บท</th><th scope="col">สถานะ</th><th scope="col"><span class="visually-hidden">ฟัง</span></th></tr></thead><tbody>' +
      rows.map(function (r) { var b = r.s ? r.s.b : -1; return '<tr><td class="en" lang="en">' + esc(r.w[0]) + '</td><td>' + esc(r.w[1]) + '</td><td class="small">' + r.l.stage.cefr + '&ensp;' + esc(r.l.title) + '</td><td><span class="tag" data-b="' + (b < 0 ? '' : boxTier(b)) + '">' + (b < 0 ? 'ยังไม่เรียน' : boxLabel(b)) + '</span></td><td class="act">' + sayBtn(r.w[0], null, 'btn--sm') + '</td></tr>'; }).join('') +
      '</tbody></table></div>';
  }

  /* ---------------- progress + settings ---------------- */
  function viewProgress() {
    var keys = Object.keys(S.srs).filter(function (k) { return CARD[k]; });
    var strong = keys.filter(function (k) { return S.srs[k].b >= 5; }).length;
    var weeks = 16, cells = [], now = new Date(), start = new Date(now);
    start.setDate(start.getDate() - (weeks * 7 - 1) - ((now.getDay() + 6) % 7 === 6 ? 0 : 0));
    start.setDate(start.getDate() - ((start.getDay() + 6) % 7));
    var goal = S.settings.goal;
    for (var d = new Date(start); d <= now; d.setDate(d.getDate() + 1)) {
      var k = dayKey(d), x = S.days[k] || 0, lv = x === 0 ? 0 : x < goal / 2 ? 1 : x < goal ? 2 : 3;
      cells.push('<i data-l="' + lv + '"' + (k === dayKey() ? ' data-today' : '') + ' title="' + k + ' ได้ ' + x + ' XP"></i>');
    }
    var activeDays = Object.keys(S.days).filter(function (k) { return S.days[k] > 0; }).length;
    var stageRows = C.map(function (st, si) {
      var ds = st.lessons.filter(function (l) { return S.done[l.id]; });
      var avg = ds.length ? Math.round(ds.reduce(function (a, l) { return a + S.done[l.id].best; }, 0) / ds.length) : null;
      return '<tr><td>ขั้น ' + (si + 1) + ' ' + esc(st.name) + '</td><td class="nw">' + st.cefr + '</td><td class="num">' + ds.length + ' จาก 6</td><td class="num">' + (avg === null ? 'ยังไม่มี' : avg + '%') + '</td><td>' + (stagePassed(si) ? 'ผ่านแล้ว' : stageOpen(si) ? 'เปิดอยู่' : 'ยังล็อก') + '</td></tr>';
    }).join('');
    render('<div class="view container">' +
      '<div class="view__head"><h1>สถิติของคุณ</h1><p>ทุกตัวเลขนับจากการเรียนในเบราว์เซอร์เครื่องนี้</p></div>' +
      '<dl class="stats"><div><dt>ต่อเนื่อง</dt><dd>' + streak() + '<small>วัน</small></dd></div><div><dt>XP รวม</dt><dd>' + S.xp + '</dd></div><div><dt>บทที่ผ่าน</dt><dd>' + totalDone() + '<small>/ ' + LESSONS.length + '</small></dd></div><div><dt>คำในคลัง</dt><dd>' + keys.length + '</dd></div><div><dt>จำได้แม่น</dt><dd>' + strong + '<small>คำ</small></dd></div></dl>' +
      '<div class="panel-grid"><div>' +
        '<h2 class="section-h">16 สัปดาห์ที่ผ่านมา</h2><div class="heat" role="img" aria-label="ปฏิทินการเรียน เรียนไปแล้ว ' + activeDays + ' วัน">' + cells.join('') + '</div>' +
        '<p class="heat-key">ไม่ได้เรียน <i></i><i></i><i></i><i></i> ครบเป้า</p>' +
        '<h2 class="section-h" style="margin-top: var(--space-2xl)">ทีละขั้น</h2><div class="table-wrap"><table><thead><tr><th scope="col">ขั้น</th><th scope="col">ระดับ</th><th scope="col">บทเรียน</th><th scope="col">คะแนนเฉลี่ย</th><th scope="col">ด่านสอบ</th></tr></thead><tbody>' + stageRows + '</tbody></table></div>' +
      '</div>' +
      '<form class="settings sheet" id="settings" aria-labelledby="set-h" onsubmit="return false">' +
        '<h2 id="set-h">ตั้งค่า</h2>' +
        '<fieldset class="seg"><legend>เป้าหมาย XP ต่อวัน</legend>' + [10, 20, 30, 50].map(function (g) { return '<input type="radio" name="goal" id="g' + g + '" value="' + g + '"' + (S.settings.goal === g ? ' checked' : '') + ' data-act="setgoal"><label for="g' + g + '">' + g + (g === 10 ? ' สบาย ๆ' : g === 20 ? ' ปกติ' : g === 30 ? ' จริงจัง' : ' เข้มข้น') + '</label>'; }).join('') + '</fieldset>' +
        '<div class="field"><label for="voice">เสียงผู้อ่าน</label><select class="input" id="voice" name="voice" data-act="setvoice"' + (TTS ? '' : ' disabled') + '></select></div>' +
        '<div class="field"><label for="rate">ความเร็วเสียง <b id="rate-v" class="num">' + S.settings.rate.toFixed(2) + '</b> เท่า</label><input type="range" id="rate" name="rate" min="0.6" max="1.2" step="0.05" value="' + S.settings.rate + '" data-act="setrate"' + (TTS ? '' : ' disabled') + '></div>' +
        '<div class="actions"><button class="btn btn--sm" type="button" data-act="say" data-text="Hello! Nice to meet you. Let\'s practice English together."' + (TTS ? '' : ' disabled') + '>' + I.sound + 'ลองฟังเสียง</button></div>' +
        '<fieldset class="seg"><legend>การ์ดทวนคำ</legend><input type="radio" name="dir" id="d-en" value="en"' + (S.settings.dir !== 'th' ? ' checked' : '') + ' data-act="setdir"><label for="d-en">อังกฤษ เป็น ไทย</label><input type="radio" name="dir" id="d-th" value="th"' + (S.settings.dir === 'th' ? ' checked' : '') + ' data-act="setdir"><label for="d-th">ไทย เป็น อังกฤษ</label></fieldset>' +
        '<label class="check"><input type="checkbox" name="free" data-act="setfree"' + (S.settings.free ? ' checked' : '') + '><span>เปิดทุกบทเรียน<br><span class="small muted">เลือกเรียนบทไหนก่อนก็ได้ ไม่ต้องเรียงตามลำดับ</span></span></label>' +
        '<hr><h2>ข้อมูลของคุณ</h2>' +
        '<p class="small muted">ความคืบหน้าอยู่ในเบราว์เซอร์นี้เท่านั้น ดาวน์โหลดไฟล์สำรองไว้เพื่อย้ายไปเครื่องอื่น</p>' +
        '<div class="actions"><button class="btn btn--sm" type="button" data-act="export">ดาวน์โหลดไฟล์สำรอง</button><label class="btn btn--sm file-btn">โหลดไฟล์สำรอง<input type="file" accept="application/json,.json" data-act="import" aria-label="เลือกไฟล์สำรอง"></label></div>' +
        '<div class="actions"><button class="link" type="button" data-act="reset">ล้างความคืบหน้าทั้งหมด</button></div>' +
        '<p class="status" id="set-status" role="status"></p>' +
      '</form></div></div>', { focus: false });
    fillVoices();
  }
  function fillVoices() {
    var sel = $('#voice'); if (!sel) return;
    if (!voices.length) { sel.innerHTML = '<option value="">' + (TTS ? 'เสียงเริ่มต้นของเครื่อง' : 'เบราว์เซอร์นี้ไม่มีเสียงอ่าน') + '</option>'; return; }
    var cur = pickVoice();
    sel.innerHTML = voices.map(function (v) { return '<option value="' + esc(v.name) + '"' + (cur && cur.name === v.name ? ' selected' : '') + '>' + esc(v.name) + ' (' + esc(v.lang) + ')</option>'; }).join('');
  }
  function setStatus(msg, err) { var s = $('#set-status'); if (!s) return; s.textContent = msg; if (err) s.setAttribute('data-err', ''); else s.removeAttribute('data-err'); }

  /* ---------------- router ---------------- */
  function route() {
    hush(); if (rec) { try { rec.abort(); } catch (e) {} rec = null; }
    var parts = (location.hash.replace(/^#\/?/, '') || '').split('/').filter(Boolean);
    var v = parts[0] || 'home', a = parts[1];
    if (v !== 'review') R = null;
    P = null;
    document.body.dataset.view = v;
    setNav(v === 'lesson' || v === 'check' ? 'home' : v);
    if (v === 'lesson' && byId[a]) { viewLesson(byId[a]); document.title = byId[a].title + ' | สวนภาษา'; return; }
    if (v === 'check' && stageById[a]) { viewCheck(stageById[a]); document.title = 'ด่านสอบขั้น ' + (stageById[a].si + 1) + ' | สวนภาษา'; return; }
    var titles = { review: 'ทวนคำศัพท์', speak: 'ห้องฝึกพูด', words: 'คลังคำ', progress: 'สถิติ' };
    document.title = (titles[v] ? titles[v] + ' | ' : '') + 'สวนภาษา: ภาษาอังกฤษจากศูนย์ถึงพูดคล่อง';
    if (v === 'review') return viewReview();
    if (v === 'speak') return viewSpeak();
    if (v === 'words') return viewWords();
    if (v === 'progress') return viewProgress();
    document.body.dataset.view = 'home';
    viewHome();
  }

  /* ---------------- events ---------------- */
  var resetArmed = 0;
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-act]');
    if (!el || el.disabled) return;
    var act = el.getAttribute('data-act');
    switch (act) {
      case 'say': say(el.getAttribute('data-text'), !!el.getAttribute('data-slow')); break;
      case 'sayall': { var l = byId[el.getAttribute('data-id')]; hush(); l.sents.forEach(function (s) { say(s[0], false, true); }); break; }
      case 'start': startPlay('lesson', byId[el.getAttribute('data-id')]); break;
      case 'startcheck': startPlay('check', stageById[el.getAttribute('data-id')]); break;
      case 'quit': route(); break;
      case 'opt': chooseOpt(el); break;
      case 'tile': tileMove(el, true); break;
      case 'untile': tileMove(el, false); break;
      case 'check': checkAnswer(); break;
      case 'giveup': if (P && P.phase === 'answer') settle(false); break;
      case 'skip': if (P && P.phase === 'answer') { if (rec) { try { rec.abort(); } catch (x) {} rec = null; } P.queue.shift(); P.finished++; playRender(); } break;
      case 'next': if (P && P.phase === 'feedback') nextItem(); break;
      case 'mic': micPress(el); break;
      case 'reveal': if (R) { R.shown = true; reviewRender(); } break;
      case 'rate': if (R && R.shown) rateCard(+el.getAttribute('data-r')); break;
      case 'cram': { var all = Object.keys(S.srs).filter(function (k) { return CARD[k]; }); R = { cards: shuffle(all).slice(0, 30), i: 0, shown: false, n: 0 }; reviewRender(); break; }
      case 'spmode': SP.mode = el.getAttribute('data-m'); SP.i = 0; SP.hint = false; viewSpeak(); break;
      case 'spstage': SP.si = +el.getAttribute('data-si'); SP.i = 0; SP.hint = false; viewSpeak(); break;
      case 'spprev': SP.i--; SP.hint = false; viewSpeak(); break;
      case 'spnext': SP.i++; SP.hint = false; viewSpeak(); break;
      case 'sphint': SP.hint = !SP.hint; viewSpeak(); break;
      case 'spmic': spMic(el); break;
      case 'wst': WV.st = el.getAttribute('data-st'); $$('[data-act="wst"]').forEach(function (b) { b.setAttribute('aria-pressed', b === el); }); wordsList(); break;
      case 'export': {
        var blob = new Blob([JSON.stringify(S, null, 2)], { type: 'application/json' });
        var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'suanpasa-backup-' + dayKey() + '.json';
        document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
        setStatus('ดาวน์โหลดไฟล์สำรองแล้ว'); break;
      }
      case 'reset':
        if (Date.now() - resetArmed < 5000) { try { localStorage.removeItem(KEY); } catch (x) {} S = defaults(); save(); resetArmed = 0; viewProgress(); setStatus('ล้างความคืบหน้าแล้ว เริ่มใหม่ได้เลย'); }
        else { resetArmed = Date.now(); el.textContent = 'กดอีกครั้งภายใน 5 วินาทีเพื่อยืนยัน'; setTimeout(function () { if (el.isConnected) el.textContent = 'ล้างความคืบหน้าทั้งหมด'; }, 5000); }
        break;
    }
  });
  document.addEventListener('change', function (e) {
    var el = e.target, act = el.getAttribute && el.getAttribute('data-act');
    if (!act) return;
    if (act === 'setgoal') { S.settings.goal = +el.value; save(); chrome(); setStatus('ตั้งเป้าวันละ ' + el.value + ' XP แล้ว'); }
    if (act === 'setvoice') { S.settings.voice = el.value; save(); say('This is my voice.'); }
    if (act === 'setdir') { S.settings.dir = el.value; save(); setStatus('บันทึกแล้ว'); }
    if (act === 'setfree') { S.settings.free = el.checked; save(); setStatus(el.checked ? 'เปิดทุกบทแล้ว' : 'กลับไปเรียนตามลำดับแล้ว'); }
    if (act === 'setrate') { S.settings.rate = +el.value; save(); say('Can you hear the difference?'); }
    if (act === 'sphide') { SP.hideTh = el.checked; viewSpeak(); var c = $('[data-act="sphide"]'); if (c) c.focus(); }
    if (act === 'wall') { WV.all = el.checked; wordsList(); }
    if (act === 'import') {
      var f = el.files && el.files[0]; if (!f) return;
      var fr = new FileReader();
      fr.onload = function () {
        try {
          var data = JSON.parse(fr.result);
          if (!data || typeof data !== 'object' || !data.done || !data.srs) throw new Error('shape');
          var d = defaults(); Object.keys(d).forEach(function (k) { if (data[k] === undefined) data[k] = d[k]; });
          data.settings = Object.assign(d.settings, data.settings || {});
          S = data; save(); viewProgress(); setStatus('โหลดความคืบหน้าจากไฟล์แล้ว');
        } catch (x) { setStatus('ไฟล์นี้ไม่ใช่ไฟล์สำรองของสวนภาษา เลือกไฟล์ที่ชื่อขึ้นต้นด้วย suanpasa-backup', true); }
      };
      fr.readAsText(f);
    }
  });
  document.addEventListener('input', function (e) {
    var el = e.target;
    if (el.getAttribute && el.getAttribute('data-act') === 'wsearch') { WV.q = el.value; wordsList(); }
    if (el.id === 'rate') { var v = $('#rate-v'); if (v) v.textContent = (+el.value).toFixed(2); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    var tag = (e.target.tagName || '').toLowerCase();
    if (P) {
      var it = P.queue[0];
      if (e.key === 'Enter') {
        if (P.phase === 'feedback') { e.preventDefault(); nextItem(); return; }
        if (it && (it.t === 'type' || (it.t === 'tiles' && P.line.length)) && tag !== 'button') { e.preventDefault(); checkAnswer(); return; }
      }
      if (P.phase === 'answer' && it && (it.t === 'mcq' || it.t === 'pair') && /^[1-4]$/.test(e.key)) {
        var b = $$('.opt')[+e.key - 1]; if (b) { e.preventDefault(); chooseOpt(b); }
      }
      return;
    }
    if (R && document.body.dataset.view === 'review' && tag !== 'input') {
      if (!R.shown && (e.key === ' ' || e.key === 'Enter') && tag !== 'button') { e.preventDefault(); R.shown = true; reviewRender(); }
      else if (R.shown && /^[1-4]$/.test(e.key)) { e.preventDefault(); rateCard(+e.key - 1); }
      else if (!R.shown && e.key === ' ' && tag === 'button') { /* native button press */ }
    }
  });
  window.addEventListener('hashchange', route);
  window.addEventListener('storage', function (e) { if (e.key === KEY) { S = load(); chrome(); } });

  route();
})();
