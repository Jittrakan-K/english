/* Speakeasy: แอปเรียนภาษาอังกฤษ (ไม่มี build step ไม่มี dependency)
   เก็บความคืบหน้าใน localStorage ใช้ Web Speech API สำหรับเสียงอ่านและการฟังเสียงพูด */
(function () {
  'use strict';

  var C = window.COURSE || [];
  var ABC = window.ALPHABET || [];
  var app = document.getElementById('app');
  var MORE = window.MORE || {};

  /* merge data-more.js: extra lessons, common-mistake items, dialogues */
  C.forEach(function (st) {
    ((MORE.lessons || {})[st.id] || []).forEach(function (l) { if (!st.lessons.some(function (x) { return x.id === l.id; })) st.lessons.push(l); });
    st.dialogs = (MORE.dialogs || {})[st.id] || [];
    st.lessons.forEach(function (l) { if (!l.fix && MORE.fix && MORE.fix[l.id]) l.fix = MORE.fix[l.id]; l.fix = l.fix || []; });
  });

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

  /* ---------------- icons (one hand-made set) ---------------- */
  var SV = ' viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  var I = {
    sound: '<svg' + SV + '><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
    mic: '<svg' + SV + '><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/></svg>',
    stop: '<svg' + SV + '><rect x="7" y="7" width="10" height="10" rx="2"/></svg>',
    close: '<svg' + SV + '><path d="M6 6l12 12M18 6 6 18"/></svg>',
    check: '<svg' + SV + ' stroke-width="3"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    flag: '<svg' + SV + '><path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/></svg>',
    user: '<svg' + SV + '><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg>',
    lock: '<svg' + SV + '><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>'
  };

  /* ---------------- state ---------------- */
  var KEY = 'suanpasa.v1'; /* kept from the app's first name so saved progress carries over */
  /* signed in, progress lives in that account's own slot; signed out, in the guest slot (KEY) */
  var ACC = window.Accounts || null;
  var ME = ACC ? ACC.session() : null;
  function slotKey(me) { me = me === undefined ? ME : me; return me ? 'speakeasy.u.' + me.mode + '.' + me.id : KEY; }
  function readSlot(me) { try { var raw = localStorage.getItem(slotKey(me)); return raw ? sanitize(JSON.parse(raw)) : null; } catch (e) { return null; } }
  function defaults() { return { done: {}, passed: {}, xp: 0, days: {}, srs: {}, settings: { goal: 20, rate: 0.9, voice: '', free: false, dir: 'en' }, created: Date.now(), t: 0, r: 0 }; }
  function load() {
    try {
      var raw = localStorage.getItem(slotKey());
      if (!raw) return defaults();
      var s = JSON.parse(raw), d = defaults();
      Object.keys(d).forEach(function (k) { if (s[k] === undefined) s[k] = d[k]; });
      s.settings = Object.assign(d.settings, s.settings || {});
      return s;
    } catch (e) { return defaults(); }
  }
  /* harden: coerce any stored or imported data into the shape the app expects */
  function sanitize(s) {
    var d = defaults();
    if (!s || typeof s !== 'object') return d;
    function obj(x) { return x && typeof x === 'object' && !Array.isArray(x) ? x : {}; }
    var out = { done: {}, passed: {}, xp: 0, days: {}, srs: {}, settings: d.settings, created: +s.created || d.created, t: Math.max(0, +s.t || 0), r: Math.max(0, +s.r || 0) };
    Object.keys(obj(s.done)).forEach(function (k) { var v = s.done[k]; if (v && isFinite(+v.best)) out.done[k] = { best: clamp(Math.round(+v.best), 0, 100), at: +v.at || 0 }; });
    Object.keys(obj(s.passed)).forEach(function (k) { if (s.passed[k]) out.passed[k] = true; });
    out.xp = Math.max(0, Math.round(+s.xp) || 0);
    Object.keys(obj(s.days)).forEach(function (k) { var v = +s.days[k]; if (/^\d{4}-\d{2}-\d{2}$/.test(k) && v > 0) out.days[k] = Math.round(v); });
    Object.keys(obj(s.srs)).forEach(function (k) { var v = s.srs[k]; if (v && isFinite(+v.b) && isFinite(+v.d)) out.srs[k] = { b: clamp(Math.round(+v.b), 0, 8), d: Math.round(+v.d) }; });
    var st = obj(s.settings);
    out.settings = {
      goal: [10, 20, 30, 50].indexOf(+st.goal) !== -1 ? +st.goal : 20,
      rate: isFinite(+st.rate) ? clamp(+st.rate, 0.6, 1.2) : 0.9,
      voice: typeof st.voice === 'string' ? st.voice : '',
      free: !!st.free,
      dir: st.dir === 'th' ? 'th' : 'en'
    };
    return out;
  }
  var S = sanitize(load());
  function fmt(n) { return Number(n || 0).toLocaleString('th-TH'); }
  function fmtBig(n) { n = Number(n || 0); return n >= 100000 ? new Intl.NumberFormat('th-TH', { notation: 'compact', maximumFractionDigits: 1 }).format(n) : fmt(n); }
  var storageOk = true;
  function persist() { try { localStorage.setItem(slotKey(), JSON.stringify(S)); storageOk = true; } catch (e) { storageOk = false; } }
  function save() { S.t = Date.now(); persist(); queueSync(); }
  /* two copies of one account (this device and the cloud): keep the newer settings and word
     schedule, and never lose a passed lesson, a better score or a studied day from either.
     A reset or an import (r) wipes whatever the other copy did before it. */
  function mergeState(a, b) {
    var newer = (b.t || 0) > (a.t || 0) ? b : a, older = newer === a ? b : a;
    var out = JSON.parse(JSON.stringify(newer));
    if ((newer.r || 0) >= (older.t || 0) && newer.r) return out;
    Object.keys(older.done).forEach(function (k) { var o = older.done[k], n = out.done[k]; if (!n || o.best > n.best) out.done[k] = o; });
    Object.keys(older.passed).forEach(function (k) { out.passed[k] = true; });
    Object.keys(older.days).forEach(function (k) { out.days[k] = Math.max(out.days[k] || 0, older.days[k]); });
    Object.keys(older.srs).forEach(function (k) { if (!out.srs[k]) out.srs[k] = older.srs[k]; });
    out.xp = Math.max(out.xp, older.xp);
    out.created = Math.min(a.created || Date.now(), b.created || Date.now());
    return out;
  }
  function same(a, b) { return JSON.stringify(a) === JSON.stringify(b); }

  /* ---------------- cloud sync ---------------- */
  var SYNC = { state: 'idle', err: '', dirty: false, timer: 0, chain: Promise.resolve(true), at: 0 };
  function cloudOn() { return !!(ME && ME.mode === 'cloud'); }
  function queueSync() {
    if (!cloudOn()) return;
    SYNC.dirty = true; clearTimeout(SYNC.timer);
    SYNC.timer = setTimeout(function () { pushNow(); }, 2000);
    syncShow('wait');
  }
  function pushNow(keepalive) {
    clearTimeout(SYNC.timer);
    if (!cloudOn()) return Promise.resolve(true);
    var me = ME;
    SYNC.chain = SYNC.chain.then(function () {
      if (me !== ME || !SYNC.dirty) return true;
      SYNC.dirty = false; syncShow('busy');
      return ACC.push(S, { keepalive: keepalive }).then(function () { if (me === ME) { SYNC.at = Date.now(); syncShow(SYNC.dirty ? 'wait' : 'ok'); } return true; },
        function (e) { if (me !== ME) return false; SYNC.dirty = true; syncFail(e); return false; });
    });
    return SYNC.chain;
  }
  function pullNow() {
    if (!cloudOn()) return Promise.resolve(true);
    var me = ME; syncShow('busy');
    return ACC.pull().then(function (remote) {
      if (me !== ME) return false;
      var fresh = ACC.session(); if (fresh && fresh.id === ME.id && fresh.name !== ME.name) { ME.name = fresh.name; chrome(); }
      if (!remote) { SYNC.dirty = true; return pushNow(); }
      var r = sanitize(remote), merged = mergeState(S, r), changed = !same(merged, S);
      S = merged; persist();
      if (changed) refreshView();
      if (!same(merged, r)) { SYNC.dirty = true; return pushNow(); }
      SYNC.at = Date.now(); syncShow('ok'); return true;
    }, function (e) { if (me === ME) syncFail(e); return false; });
  }
  function syncFail(e) {
    if (e.code === 'expired' || e.code === 'nosession') { leaveAccount('expired'); return; }
    SYNC.err = e.code; syncShow(e.code === 'network' ? 'off' : 'err');
  }
  function syncText() {
    if (!ME) return '';
    if (!cloudOn()) return 'บัญชีนี้เก็บอยู่ในเบราว์เซอร์เครื่องนี้';
    switch (SYNC.state) {
      case 'wait': return 'มีความคืบหน้าใหม่ กำลังจะซิงก์';
      case 'busy': return 'กำลังซิงก์กับคลาวด์';
      case 'ok': return 'ซิงก์แล้ว เวลา ' + new Date(SYNC.at).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }) + ' น.';
      case 'off': return 'ออฟไลน์อยู่ จะซิงก์ให้เองเมื่อกลับมาออนไลน์';
      case 'err': return SYNC.err === 'rules' ? 'Firebase ไม่ยอมให้บันทึก ตรวจกฎของ Firestore ตามไฟล์ firestore.rules'
        : SYNC.err === 'nodb' ? 'โปรเจกต์ Firebase ยังไม่มี Firestore Database ต้องสร้างก่อน'
        : 'ซิงก์ไม่สำเร็จ กดซิงก์ตอนนี้เพื่อลองอีกครั้ง';
    }
    return 'เชื่อมกับคลาวด์แล้ว';
  }
  function syncShow(state) {
    SYNC.state = state;
    $$('[data-sync]').forEach(function (el) { el.textContent = syncText(); if (state === 'err') el.setAttribute('data-err', ''); else el.removeAttribute('data-err'); });
  }
  /* re-draw after cloud data arrives, but never in the middle of a lesson, a review or a recording */
  function refreshView() {
    chrome();
    var v = document.body.dataset.view;
    if (!P && (v === 'home' || v === 'progress' || v === 'words' || v === 'account')) route();
  }
  function leaveAccount(why) {
    var wasCloud = cloudOn(), clean = !SYNC.dirty;
    if (wasCloud && clean) { try { localStorage.removeItem(slotKey()); } catch (e) {} }
    ACC.signOut(); ME = null; AV.kind = 'in'; SYNC.dirty = false; SYNC.state = 'idle'; clearTimeout(SYNC.timer);
    S = sanitize(load());
    AV.note = why === 'expired' ? 'บัญชีหลุดออกจากระบบ เข้าสู่ระบบใหม่อีกครั้งด้วย Username กับรหัสผ่านเดิม'
      : wasCloud && !clean ? 'ออกจากระบบแล้ว ความคืบหน้าล่าสุดยังไม่ได้ขึ้นคลาวด์ จะส่งขึ้นให้เมื่อเข้าบัญชีนี้ในเครื่องนี้ครั้งหน้า'
      : 'ออกจากระบบแล้ว ตอนนี้กำลังใช้ความคืบหน้าของเครื่องนี้';
    chrome(); if (!P) route();
  }
  window.addEventListener('online', function () { if (cloudOn()) { if (SYNC.dirty) pushNow(); else pullNow(); } });
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden' && SYNC.dirty) pushNow(true); else if (document.visibilityState === 'visible' && cloudOn() && !SYNC.dirty && Date.now() - SYNC.at > 60000) pullNow(); });

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
  /* voices built into the device answer at once; online voices (Google, Microsoft Online, Natural)
     send every sentence to a server first, which is where the long wait came from. So the default
     is always a device voice, and an online voice is used only when the learner picks it. */
  function isLocal(v) { return v.localService !== false && !/Google|Online|Natural/i.test(v.name); }
  function pickVoice() {
    if (!voices.length) loadVoices();
    var mine = voices.find(function (v) { return v.name === S.settings.voice; });
    if (mine) return mine;
    var local = voices.filter(isLocal);
    return local.find(function (v) { return /en[-_]US/i.test(v.lang) && /Samantha|Aria|Jenny|Zira|David|Alex|Ava|Allison|Susan/i.test(v.name); }) ||
      local.find(function (v) { return /en[-_]US/i.test(v.lang); }) ||
      local.find(function (v) { return /en[-_]GB/i.test(v.lang); }) ||
      local[0] || voices[0] || null;
  }
  var ttsTimer = 0, ttsWarm = false;
  function utter(text, slow) {
    var u = new SpeechSynthesisUtterance(text);
    var v = pickVoice();
    if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = 'en-US'; }
    u.rate = clamp((slow ? 0.62 : 1) * (S.settings.rate || 0.9), 0.4, 1.4);
    return u;
  }
  function say(text, slow, queue) {
    if (!TTS || !text) return;
    clearTimeout(ttsTimer);
    if (queue) { speechSynthesis.speak(utter(text, slow)); return; }
    var busy = speechSynthesis.speaking || speechSynthesis.pending;
    speechSynthesis.cancel();
    /* Chrome can swallow or stall a sentence queued in the same tick as cancel(), and can stay
       paused after a long idle: resume, and give a just-cancelled engine one frame to settle */
    var go = function () { if (speechSynthesis.paused) speechSynthesis.resume(); speechSynthesis.speak(utter(text, slow)); };
    if (busy) ttsTimer = setTimeout(go, 40); else go();
  }
  /* the first sentence also waits for the engine to start; wake it on the first touch instead */
  function warmTTS() {
    if (ttsWarm || !TTS) return; ttsWarm = true;
    loadVoices();
    try { var u = new SpeechSynthesisUtterance(' '); u.volume = 0; var v = pickVoice(); if (v) u.voice = v; speechSynthesis.speak(u); } catch (e) {}
  }
  document.addEventListener('pointerdown', warmTTS, { once: true, capture: true });
  document.addEventListener('keydown', warmTTS, { once: true, capture: true });
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
    if (code === 'aborted') return '';
    if (code === 'not-allowed' || code === 'service-not-allowed') return 'เบราว์เซอร์ยังไม่อนุญาตให้ใช้ไมค์ กดอนุญาตที่แถบที่อยู่ด้านบนแล้วลองใหม่';
    if (code === 'no-speech') return 'ยังไม่ได้ยินเสียงพูด ลองพูดใกล้ไมค์ขึ้นอีกนิด';
    if (code === 'network') return 'การฟังเสียงพูดต้องต่ออินเทอร์เน็ต ตรวจการเชื่อมต่อแล้วลองใหม่';
    if (code === 'audio-capture') return 'ไม่พบไมโครโฟนในเครื่องนี้';
    return 'ฟังเสียงพูดไม่สำเร็จ ลองกดพูดอีกครั้ง';
  }
  /* compare what was heard with the target, word by word (longest common subsequence) */
  /* speech recognition writes "I am 20 years old", "081", "9 o'clock", "10%", "$200"; the course writes
     numbers as words. Spell numbers out before comparing so 20 and twenty count as the same word. */
  var ONES = 'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(' ');
  var TENS = ' ten twenty thirty forty fifty sixty seventy eighty ninety'.split(' ');
  function numWords(n, useA) {
    if (n < 20) return ONES[n];
    if (n < 100) return TENS[Math.floor(n / 10)] + (n % 10 ? '-' + ONES[n % 10] : '');
    var steps = [[1e9, 'billion'], [1e6, 'million'], [1e3, 'thousand'], [100, 'hundred']];
    for (var i = 0; i < steps.length; i++) {
      var size = steps[i][0];
      if (n >= size) {
        var q = Math.floor(n / size), r = n % size;
        return (q === 1 && useA ? 'a' : numWords(q)) + ' ' + steps[i][1] + (r ? ' ' + numWords(r) : '');
      }
    }
    return String(n);
  }
  function ordWords(n) {
    var w = numWords(n), cut = w.split(/([ -])/), last = cut.pop();
    var irr = { one: 'first', two: 'second', three: 'third', five: 'fifth', eight: 'eighth', nine: 'ninth', twelve: 'twelfth' };
    last = irr[last] || (/y$/.test(last) ? last.replace(/y$/, 'ieth') : last + 'th');
    return cut.join('') + last;
  }
  function digitWords(d) { return d.split('').map(function (c) { return ONES[+c]; }).join(' '); }
  function spoken(text, useA) {
    return String(text || '')
      .replace(/(\d),(?=\d{3}\b)/g, '$1')
      .replace(/\b(\d{1,2}):(\d{2})\b/g, function (m, h, mm) { h = +h; return numWords(h) + (+mm === 0 ? " o'clock" : ' ' + (mm[0] === '0' ? 'oh ' + ONES[+mm[1]] : numWords(+mm))); })
      .replace(/\$\s?(\d+(?:\.\d+)?)/g, function (m, n) { return n + (n === '1' ? ' dollar' : ' dollars'); })
      .replace(/฿\s?(\d+)/g, '$1 baht')
      .replace(/(\d)\s?%/g, '$1 percent')
      .replace(/\b(\d+)(st|nd|rd|th)\b/gi, function (m, n) { return ordWords(+n); })
      .replace(/\b(\d+)\.(\d+)\b/g, function (m, a, b) { return numWords(+a, useA) + ' point ' + digitWords(b); })
      .replace(/\b\d+\b/g, function (d) { return (d.length > 1 && d[0] === '0') || d.length > 9 ? digitWords(d) : numWords(+d, useA); })
      .replace(/&/g, ' and ');
  }
  function compare(target, heardList) {
    var t = tokensOf(target).map(norm), best = null;
    var heardAll = [];
    (heardList.length ? heardList : ['']).forEach(function (h) { heardAll.push(h, spoken(h), spoken(h, true)); });
    heardAll.forEach(function (heard, hi) {
      var h = tokensOf(heard).map(norm), m = t.length, n = h.length, L = [];
      for (var i = 0; i <= m; i++) { L.push(new Array(n + 1).fill(0)); }
      for (i = 1; i <= m; i++) for (var j = 1; j <= n; j++) L[i][j] = t[i - 1] === h[j - 1] ? L[i - 1][j - 1] + 1 : Math.max(L[i - 1][j], L[i][j - 1]);
      var ok = new Array(m).fill(false); i = m; j = n;
      while (i > 0 && j > 0) { if (t[i - 1] === h[j - 1]) { ok[i - 1] = true; i--; j--; } else if (L[i - 1][j] >= L[i][j - 1]) i--; else j--; }
      var score = m ? L[m][n] / m : 0;
      if (!best || score > best.score) best = { score: score, ok: ok, heard: heardAll[hi - hi % 3] };
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
      st.innerHTML = 'ต่อเนื่อง <b class="num">' + n + '</b> วัน<span class="hide-s">&ensp; วันนี้ <b class="num">' + fmt(xpToday()) + '</b>/' + S.settings.goal + ' แต้ม</span>';
    }
    var who = $('[data-who]');
    if (who) {
      who.innerHTML = I.user + '<span>' + (ME ? esc(ME.name) : 'เข้าสู่ระบบ') + '</span>';
      who.setAttribute('aria-label', ME ? 'บัญชี ' + ME.name : 'เข้าสู่ระบบหรือสร้างบัญชี');
      if (ME) who.setAttribute('data-in', ''); else who.removeAttribute('data-in');
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
  /* one lesson on a stage track: a numbered blob, as on the deck's "Order" slide */
  function nodeHTML(l) {
    var open = lessonOpen(l), done = S.done[l.id], cur = currentLesson();
    var state = done ? 'done' : (cur === l ? 'now' : (open ? 'open' : 'locked'));
    var shape = l.n % 4;
    var aria = 'บทที่ ' + (l.li + 1) + ' ' + l.title + (done ? ' ผ่านแล้ว ได้ ' + done.best + '%' : state === 'now' ? ' บทที่ควรเรียนต่อ' : state === 'locked' ? ' ยังล็อกอยู่' : ' เปิดให้เรียนแล้ว');
    var inner = '<span class="node__blob" data-shape="' + shape + '" aria-hidden="true">' + (done ? I.check : '<span class="num">' + (l.li + 1) + '</span>') + '</span>' +
      '<span class="node__t">' + esc(l.title) + '</span>' +
      (done ? '<span class="node__s">ได้ ' + done.best + '%</span>' : state === 'now' ? '<span class="node__s">เรียนต่อ</span>' : '');
    if (state === 'locked') return '<div class="node" data-state="locked">' + inner + '<span class="visually-hidden">' + esc(aria) + '</span></div>';
    return '<a class="node" data-state="' + state + '" href="#/lesson/' + l.id + '" aria-label="' + esc(aria) + '">' + inner + '</a>';
  }
  function testNodeHTML(st) {
    var passed = stagePassed(st.si);
    var aria = 'ด่านสอบขั้น ' + (st.si + 1) + (passed ? ' ผ่านแล้ว' : ' ทำได้ทุกเมื่อ ถ้าผ่านจะเปิดขั้นถัดไป');
    return '<a class="node node--test" data-state="' + (passed ? 'done' : 'open') + '" href="#/check/' + st.id + '" aria-label="' + esc(aria) + '">' +
      '<span class="node__blob" aria-hidden="true">' + I.flag + '</span><span class="node__t">' + (passed ? 'ผ่านด่านแล้ว' : 'ด่านสอบ') + '</span></a>';
  }

  /* ---------------- views ---------------- */
  function render(html, opts) {
    opts = opts || {};
    document.body.dataset.mode = opts.mode || '';
    app.innerHTML = html;
    chrome();
    if (!opts.keepScroll) window.scrollTo(0, 0);
    if (opts.focus !== false) { var f = opts.focus ? $(opts.focus, app) : app; if (f) f.focus({ preventScroll: true }); }
  }

  /* home: a cover slide for today, then one slide per stage */
  function viewHome() {
    var cur = currentLesson(), n = totalDone(), csi = currentStageIndex();
    var goal = S.settings.goal, xp = xpToday(), due = dueCards().length;
    var h1, lead_, actions;
    var fresh = n === 0 && !Object.keys(S.passed).length;
    if (fresh) {
      h1 = 'เริ่มจากศูนย์<br>วันละบทก็พูดได้';
      lead_ = 'บทแรกใช้เวลาราวสิบนาที ฟังเสียงจริงแล้วพูดตามได้ทันที';
      actions = '<a class="btn btn--primary btn--lg" href="#/lesson/' + LESSONS[0].id + '">เริ่มบทแรก</a><a class="btn btn--line" href="#/check/s0">เคยเรียนแล้ว สอบข้ามขั้น</a>';
    } else if (cur) {
      h1 = 'วันนี้มาเรียน<br>' + esc(cur.title);
      lead_ = esc(cur.goal);
      actions = '<a class="btn btn--primary btn--lg" href="#/lesson/' + cur.id + '">เรียนบทนี้</a>' + (due ? '<a class="btn btn--line" href="#/review">ทวน ' + due + ' คำก่อน</a>' : (n ? '<a class="btn btn--line" href="#/mix">ฝึกรวมจุดที่ยังไม่แม่น</a>' : ''));
    } else if (!stagePassed(csi)) {
      h1 = 'พร้อมสอบด่าน<br>' + esc(C[csi].name);
      lead_ = 'ผ่านด่านนี้แล้วขั้นถัดไปจะเปิดทันที';
      actions = '<a class="btn btn--primary btn--lg" href="#/check/' + C[csi].id + '">เริ่มด่านสอบ</a><a class="btn btn--line" href="#/mix">อุ่นเครื่องด้วยฝึกรวม</a>';
    } else {
      h1 = 'ครบทุกบทแล้ว<br>พูดทุกวันให้คล่อง';
      lead_ = 'ฝึกพูดและทวนคำทุกวันเพื่อรักษาความคล่อง';
      actions = '<a class="btn btn--primary btn--lg" href="#/speak">ฝึกพูด</a><a class="btn btn--line" href="#/mix">ฝึกรวม</a>';
    }
    var sk = streak();
    var p = clamp(xp / goal, 0, 1);
    var lead = fresh ? { n: LESSONS.length, t: 'บท จากศูนย์ถึงพูดคล่อง' } : sk > 1 ? { n: sk, t: 'วันที่เรียนต่อเนื่อง' } : { n: n, t: 'บทที่ผ่านแล้ว จาก ' + LESSONS.length + ' บท' };
    var cover =
      '<section class="hero" aria-labelledby="today-h">' +
        '<div class="container hero__in">' +
          '<div class="hero__text"><h1 id="today-h">' + h1 + '</h1><p class="lead">' + lead_ + '</p><div class="actions">' + actions + '</div></div>' +
          '<div class="bento" aria-label="ตัวเลขของวันนี้">' +
            '<p class="tile tile--lead"><b class="num">' + fmt(lead.n) + '</b><span>' + lead.t + '</span></p>' +
            '<div class="tile tile--goal"><p class="tile__k">แต้มวันนี้</p><p class="tile__v num">' + fmt(xp) + '<small> / ' + goal + '</small></p>' +
              '<div class="meter__track" role="progressbar" aria-label="แต้มวันนี้" aria-valuemin="0" aria-valuemax="' + goal + '" aria-valuenow="' + Math.min(xp, goal) + '"><div class="meter__fill" style="--p:' + p + '"></div></div></div>' +
            (due ? '<a class="tile tile--due" href="#/review"><span class="tile__k">รอทวน</span><span class="tile__v num">' + due + '<small> คำ</small></span></a>' : '<p class="tile tile--due"><span class="tile__k">รอทวน</span><span class="tile__v num">0<small> คำ</small></span></p>') +
            '<p class="tile tile--level"><span class="tile__k">ระดับ</span><span class="tile__v">' + level() + '</span></p>' +
          '</div>' +
        '</div>' +
      '</section>';

    var stages = C.map(function (st, si) {
      var open = stageOpen(si), passed = stagePassed(si), dn = doneCount(si), total = st.lessons.length;
      var state = passed ? 'passed' : (!open ? 'locked' : (si === csi ? 'now' : 'open'));
      var curIdx = st.lessons.findIndex(function (l) { return !S.done[l.id]; });
      var fill = passed ? 1 : (curIdx < 0 ? 1 : curIdx / total);
      return '<li class="slide" id="stage-' + st.id + '" data-tone="' + (si % 7) + '" data-state="' + state + '">' +
        '<div class="slide__in">' +
          '<div class="slide__head"><h3>ขั้น ' + (si + 1) + ' ' + esc(st.name) + '</h3>' +
            '<p class="slide__can">จบขั้นนี้แล้ว คุณจะ' + esc(st.cando) + '</p>' +
            '<p class="slide__meta"><span>ระดับสากล ' + st.cefr + '</span><span>ผ่าน ' + dn + ' จาก ' + total + ' บท</span>' + (state === 'locked' ? '<span>' + I.lock + 'ยังล็อก</span>' : '') + '</p></div>' +
          '<ol class="track" style="--fill:' + fill + '" aria-label="บทเรียนในขั้น ' + (si + 1) + '">' +
            st.lessons.map(function (l) { return '<li>' + nodeHTML(l) + '</li>'; }).join('') +
            '<li>' + testNodeHTML(st) + '</li>' +
          '</ol>' +
        '</div></li>';
    }).join('');

    render(cover +
      '<section class="road" id="road" aria-labelledby="road-h">' +
        '<div class="container road__head"><h2 id="road-h">เส้นทางของคุณ</h2><p>7 ขั้นจากไม่รู้อะไรเลยจนพูดได้คล่อง ขั้นละ 8 บทกับด่านสอบหนึ่งด่าน เคยเรียนมาแล้วก็กดด่านสอบเพื่อข้ามขั้นได้</p></div>' +
        (storageOk ? '' : '<p class="container notice">เบราว์เซอร์นี้ไม่ยอมให้บันทึกความคืบหน้า (เช่นโหมดไม่ระบุตัวตน) ปิดหน้าแล้วความคืบหน้าจะหายไป</p>') +
        '<ol class="container slides">' + stages + '</ol>' +
      '</section>');
  }

  /* lesson intro: notes, words, sentences */
  function viewLesson(l) {
    var open = lessonOpen(l), done = S.done[l.id];
    var items = buildLesson(l).length;
    var start = open
      ? '<button class="btn btn--primary btn--lg" type="button" data-act="start" data-id="' + l.id + '">' + (done ? 'ฝึกบทนี้อีกครั้ง' : 'เริ่มฝึก ' + items + ' ข้อ') + '</button>'
      : (function () {
          var prev = l.li > 0 ? l.stage.lessons[l.li - 1] : null;
          var go = prev ? '<a class="btn btn--primary btn--lg" href="#/lesson/' + prev.id + '">ไปบทก่อนหน้า</a>' : '<a class="btn btn--primary btn--lg" href="#/check/' + C[l.si - 1].id + '">สอบผ่านขั้น ' + l.si + ' เพื่อเปิด</a>';
          return go + '<span class="locked">' + I.lock + 'ยังล็อกอยู่</span>';
        })();
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
        (l.fix && l.fix.length ? '<section class="block" aria-labelledby="f-h"><h2 id="f-h">ข้อผิดที่คนไทยพบบ่อย</h2><ul class="fixes">' +
          l.fix.map(function (f) { return '<li><p class="fixes__bad"><span class="visually-hidden">ผิด: </span><s lang="en">' + esc(f[0]) + '</s></p><p class="fixes__good"><span class="visually-hidden">ถูก: </span><span lang="en">' + esc(f[1]) + '</span>' + (TTS ? ' ' + sayBtn(f[1], null, 'btn--sm') : '') + '</p><p class="fixes__why">' + esc(f[2]) + '</p></li>'; }).join('') + '</ul></section>' : '') +
        pairs +
        '<div class="lesson__foot">' + start + nextLink(l) + '</div>' +
      '</article></div>');
  }
  function nextLink(l) {
    var nx = LESSONS[l.n + 1];
    if (l.li === l.stage.lessons.length - 1) return '<a class="btn" href="#/check/' + l.stage.id + '">ไปด่านสอบท้ายขั้น</a>';
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
        '<p>' + buildCheck(st).length + ' ข้อจากทุกบทในขั้นนี้ ได้ 75% ขึ้นไปถือว่าผ่าน' + (nx ? ' แล้วขั้น ' + (st.si + 2) + ' ' + esc(nx.name) + ' จะเปิดทันที' : '') + '</p>' +
      '</div>' +
      (passed ? '<p class="notice">คุณผ่านด่านนี้แล้ว สอบซ้ำได้เพื่อทบทวน</p>' :
        dn < st.lessons.length ? '<p class="notice">ยังเรียนขั้นนี้ไม่ครบ (' + dn + ' จาก ' + st.lessons.length + ' บท) ถ้าเคยเรียนมาแล้วสอบข้ามได้เลย ถ้าผ่าน ทุกบทในขั้นนี้และขั้นก่อนหน้าจะนับว่าผ่าน</p>' : '') +
      '<div class="actions" style="margin-top: var(--space-xl)"><button class="btn btn--primary btn--lg" type="button" data-act="startcheck" data-id="' + st.id + '">เริ่มด่านสอบ</button><a class="btn" href="#/">กลับไปที่เส้นทาง</a></div>' +
      '</div>');
  }

  /* ---------------- exercise builders ---------------- */
  /* two vocabulary entries "clash" when either could answer the same question: same English, or a
     Thai meaning that is the same or one starts with the other (ต้อง: must / have to, ว่าง: free /
     available). Clashing entries are never offered as wrong choices, never share a matching round,
     and a typed answer is accepted for any entry with the same Thai meaning. */
  function thSegs(t) { return String(t).replace(/\([^)]*\)/g, ' ').split('/').map(function (x) { return x.replace(/\s+/g, ' ').trim(); }).filter(Boolean); }
  function clash(a, b) {
    if (norm(a[0]) === norm(b[0])) return true;
    var A = thSegs(a[1]), B = thSegs(b[1]);
    return A.some(function (x) { return B.some(function (y) { return x === y || x.indexOf(y) === 0 || y.indexOf(x) === 0; }); });
  }
  var ALLWORDS = null;
  function allWords() { return ALLWORDS || (ALLWORDS = LESSONS.reduce(function (a, l) { return a.concat(l.words || []); }, [])); }
  function sameMeaning(w) {
    var mine = thSegs(w[1]);
    return allWords().filter(function (x) { return thSegs(x[1]).some(function (t) { return mine.indexOf(t) !== -1; }); }).map(function (x) { return x[0]; });
  }
  /* n wrong choices for entry w, taken in order from the candidate entries, side 0 = English, 1 = Thai */
  function wrongChoices(w, cands, n, side) {
    var seen = {}, out = [];
    seen[w[side].toLowerCase()] = 1;
    for (var i = 0; i < cands.length && out.length < n; i++) {
      var x = cands[i], k = x[side].toLowerCase();
      if (seen[k] || clash(w, x)) continue;
      seen[k] = 1; out.push(x[side]);
    }
    return out;
  }
  function matchSet(list, n) {
    var out = [];
    for (var i = 0; i < list.length && out.length < n; i++) { var x = list[i]; if (!out.some(function (o) { return clash(o, x); })) out.push(x); }
    return out;
  }
  function distract(answer, ordered, n) {
    var seen = {}, out = [];
    seen[answer.toLowerCase()] = 1;
    for (var i = 0; i < ordered.length && out.length < n; i++) { var x = ordered[i], k = x.toLowerCase(); if (!seen[k]) { seen[k] = 1; out.push(x); } }
    return out;
  }
  function stageWords(si) { return C[si].lessons.reduce(function (a, l) { return a.concat(l.words); }, []); }
  function mcqMeaning(w, local, pool) {
    var opts = shuffle([w[1]].concat(wrongChoices(w, shuffle(local).concat(shuffle(pool)), 3, 1)));
    return { t: 'mcq', q: 'คำนี้แปลว่าอะไร', big: w[0], say: w[0], opts: opts, ans: w[1], en: w[0], th: w[1] };
  }
  function mcqWord(w, local, pool) {
    var opts = shuffle([w[0]].concat(wrongChoices(w, shuffle(local).concat(shuffle(pool)), 3, 0)));
    return { t: 'mcq', q: 'ภาษาอังกฤษพูดว่าอย่างไร', bigTh: w[1], opts: opts, optEn: true, ans: w[0], en: w[0], th: w[1] };
  }
  function mcqListen(w, local, pool) {
    var opts = shuffle([w[0]].concat(wrongChoices(w, shuffle(local).concat(shuffle(pool)), 3, 0)));
    return { t: 'mcq', q: 'ฟังแล้วเลือกคำที่ได้ยิน', listen: w[0], opts: opts, optEn: true, ans: w[0], en: w[0], th: w[1] };
  }
  function typable(w) { return w[0].length <= 18 && !/\.\.\.|…|\//.test(w[0]); }
  function typeWord(w) { return { t: 'type', q: 'พิมพ์เป็นภาษาอังกฤษ', bigTh: w[1], hintSay: w[0], ans: w[0], alts: sameMeaning(w), en: w[0], th: w[1] }; }
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
  function reEsc(x) { return x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  /* fill the blank: hide a lesson word inside one of the lesson's sentences */
  function clozeItems(l, n, poolWords) {
    var words = l.words.filter(function (w) { return w[0].length >= 2 && !/\.\.\.|…|\//.test(w[0]); })
      .sort(function (a, b) { return b[0].length - a[0].length; });
    var out = [], used = {};
    shuffle(l.sents).forEach(function (s) {
      if (out.length >= n) return;
      for (var i = 0; i < words.length; i++) {
        var w = words[i];
        if (used[w[0]]) continue;
        var re = new RegExp('(^|[^\\p{L}\'])(' + reEsc(w[0]) + ')(?=$|[^\\p{L}\'])', 'iu');
        var m = s[0].match(re);
        if (!m) continue;
        used[w[0]] = 1;
        var blanked = s[0].replace(re, '$1_____');
        var opts = shuffle([w[0]].concat(wrongChoices(w, shuffle(l.words.filter(function (x) { return x[0].length >= 2; })).concat(shuffle(poolWords || [])), 3, 0)));
        out.push({ t: 'mcq', q: 'เลือกคำที่หายไปให้ประโยคสมบูรณ์', cloze: blanked, clozeTh: s[1], opts: opts, optEn: true, ans: w[0], en: s[0], th: s[1], k: l.id + '|' + w[0] });
        return;
      }
    });
    return out;
  }
  function fixItem(f) {
    return { t: 'mcq', q: 'ประโยคไหนถูกต้องและเป็นธรรมชาติ', fix: true, opts: shuffle([f[0], f[1]]), optEn: true, ans: f[1], en: f[1], why: f[2] };
  }
  function matchItem(ws, more) { return { t: 'match', q: 'จับคู่คำศัพท์กับความหมาย', pairs: matchSet(ws.concat(more || []), 5) }; }
  function dictItem(s) { return { t: 'type', q: 'ฟังแล้วพิมพ์ประโยคที่ได้ยิน', listen: s[0], dict: true, ans: s[0], en: s[0], th: s[1] }; }
  function shortSent(list) { return shuffle(list.filter(function (s) { var n = tokensOf(s[0]).length; return n >= 3 && n <= 8; }))[0]; }
  function withKey(it, l, w) { if (l && w) it.k = l.id + '|' + w[0]; return it; }

  function buildLesson(l) {
    var pool = stageWords(l.si), W = shuffle(l.words), vocab = [], sents = [];
    W.slice(0, 3).forEach(function (w) { vocab.push(withKey(mcqMeaning(w, l.words, pool), l, w)); });
    W.slice(3, 4).forEach(function (w) { vocab.push(withKey(mcqWord(w, l.words, pool), l, w)); });
    W.slice(4, 6).forEach(function (w) { vocab.push(withKey(TTS ? mcqListen(w, l.words, pool) : mcqMeaning(w, l.words, pool), l, w)); });
    var tw = W.slice(6).concat(W).find(typable); if (tw) vocab.push(withKey(typeWord(tw), l, tw));
    if (l.words.length >= 5) vocab.push(matchItem(shuffle(l.words), shuffle(pool)));
    if (TTS && l.pairs) shuffle(l.pairs).slice(0, 2).forEach(function (p) { vocab.push(pairItem(p)); });
    clozeItems(l, 2, pool).forEach(function (it) { sents.push(it); });
    shuffle(l.fix || []).slice(0, 2).forEach(function (f) { sents.push(fixItem(f)); });
    var Ss = shuffle(l.sents.filter(tileable));
    Ss.slice(0, 2).forEach(function (s) { sents.push(tilesItem(s, l.sents.filter(function (o) { return o !== s; }), false)); });
    if (TTS) {
      var ds = shortSent(l.sents);
      if (ds && Math.random() < 0.5) sents.push(dictItem(ds));
      else if (Ss[2]) sents.push(tilesItem(Ss[2], l.sents.filter(function (o) { return o !== Ss[2]; }), true));
    }
    var out = shuffle(vocab).concat(shuffle(sents));
    if (SRC) out.push(speakItem(Ss[3] || Ss[0] || l.sents[0]));
    return out;
  }
  function buildCheck(st) {
    var pool = stageWords(st.si), all = [], sentPool = st.lessons.reduce(function (a, l) { return a.concat(l.sents); }, []);
    var W = shuffle(pool);
    W.slice(0, 4).forEach(function (w) { all.push(mcqMeaning(w, pool, pool)); });
    W.slice(4, 6).forEach(function (w) { all.push(mcqWord(w, pool, pool)); });
    W.slice(6, 8).forEach(function (w) { all.push(TTS ? mcqListen(w, pool, pool) : mcqMeaning(w, pool, pool)); });
    var tw = W.slice(8).find(typable); if (tw) all.push(typeWord(tw));
    all.push(matchItem(W.slice(10, 15), W.slice(15)));
    shuffle(st.lessons).slice(0, 2).forEach(function (l) { clozeItems(l, 1, pool).forEach(function (it) { all.push(it); }); });
    shuffle(st.lessons.reduce(function (a, l) { return a.concat(l.fix || []); }, [])).slice(0, 3).forEach(function (f) { all.push(fixItem(f)); });
    var Ss = shuffle(sentPool.filter(tileable));
    Ss.slice(0, 3).forEach(function (s) { all.push(tilesItem(s, Ss.slice(5, 9), false)); });
    if (TTS) { var ds = shortSent(Ss.slice(3)); if (ds) all.push(dictItem(ds)); }
    return shuffle(all);
  }
  /* mixed practice: lessons already passed, weighted toward weak words and low scores */
  function mixLessons() {
    var done = LESSONS.filter(function (l) { return S.done[l.id]; });
    return done.length ? done : LESSONS.filter(lessonOpen).slice(0, 2);
  }
  function buildMix() {
    var ls = mixLessons();
    var weak = [];
    ls.forEach(function (l) { l.words.forEach(function (w) { var c = S.srs[l.id + '|' + w[0]]; weak.push({ w: w, l: l, wt: c ? (9 - c.b) + (c.d <= dayIndex() ? 4 : 0) : 6 }); }); });
    weak.sort(function (a, b) { return b.wt - a.wt + (Math.random() - 0.5) * 3; });
    var byScore = ls.slice().sort(function (a, b) { return ((S.done[a.id] || {}).best || 0) - ((S.done[b.id] || {}).best || 0) + (Math.random() - 0.5) * 30; });
    var pool = ls.reduce(function (a, l) { return a.concat(l.words); }, []);
    var vocab = [], sents = [];
    weak.slice(0, 3).forEach(function (x) { vocab.push(withKey(mcqMeaning(x.w, x.l.words, pool), x.l, x.w)); });
    weak.slice(3, 5).forEach(function (x) { vocab.push(withKey(mcqWord(x.w, x.l.words, pool), x.l, x.w)); });
    weak.slice(5, 7).forEach(function (x) { vocab.push(withKey(TTS ? mcqListen(x.w, x.l.words, pool) : mcqMeaning(x.w, x.l.words, pool), x.l, x.w)); });
    var tx = weak.slice(7).find(function (x) { return typable(x.w); }); if (tx) vocab.push(withKey(typeWord(tx.w), tx.l, tx.w));
    vocab.push(matchItem(weak.slice(8, 13).map(function (x) { return x.w; }), weak.slice(13).map(function (x) { return x.w; })));
    byScore.slice(0, 2).forEach(function (l) { clozeItems(l, 1, pool).forEach(function (it) { sents.push(it); }); });
    shuffle(byScore.slice(0, 4).reduce(function (a, l) { return a.concat(l.fix || []); }, [])).slice(0, 3).forEach(function (f) { sents.push(fixItem(f)); });
    var sp = shuffle(byScore.slice(0, 4).reduce(function (a, l) { return a.concat(l.sents); }, []).filter(tileable));
    sp.slice(0, 2).forEach(function (s) { sents.push(tilesItem(s, sp.slice(4, 8), false)); });
    if (TTS) { var ds = shortSent(sp.slice(2)); if (ds) sents.push(dictItem(ds)); }
    var out = shuffle(vocab).concat(shuffle(sents));
    if (SRC && sp[3]) out.push(speakItem(sp[3]));
    return out;
  }

  /* ---------------- practice player ---------------- */
  var P = null;
  function startPlay(kind, obj) {
    hush();
    var items = kind === 'lesson' ? buildLesson(obj) : kind === 'mix' ? buildMix() : buildCheck(obj);
    P = { kind: kind, obj: obj, queue: items.slice(), total: items.length, step: 0, planned: items.length, confirmQuit: false, finished: 0, right: 0, scored: 0, phase: 'answer', sel: null, line: [], tries: 0, missed: [] };
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
    if (it.t === 'mcq' && it.cloze) {
      h += '<div class="task__big"><h2 class="task__cloze" lang="en">' + esc(it.cloze).replace('_____', '<span class="blank" aria-label="ช่องว่าง">_____</span>') + '</h2></div><p class="task__hint">' + esc(it.clozeTh) + '</p>' + optHTML(it);
    } else if (it.t === 'mcq' && it.fix) {
      h += '<ul class="opts opts--stack">' + it.opts.map(function (o, i) { return '<li><button class="opt" type="button" data-act="opt" data-v="' + esc(o) + '"><kbd>' + (i + 1) + '</kbd><span lang="en">' + esc(o) + '</span></button></li>'; }).join('') + '</ul>';
    } else if (it.t === 'match') {
      var en = shuffle(it.pairs.map(function (w, i) { return i; })), th = shuffle(it.pairs.map(function (w, i) { return i; }));
      h += '<div class="match"><ul class="match__col" aria-label="คำภาษาอังกฤษ">' + en.map(function (i) { return '<li><button class="opt" type="button" data-act="m" data-side="en" data-i="' + i + '" lang="en">' + esc(it.pairs[i][0]) + '</button></li>'; }).join('') + '</ul>' +
        '<ul class="match__col" aria-label="ความหมาย">' + th.map(function (i) { return '<li><button class="opt" type="button" data-act="m" data-side="th" data-i="' + i + '">' + esc(it.pairs[i][1]) + '</button></li>'; }).join('') + '</ul></div>';
    } else if (it.t === 'mcq' || it.t === 'pair') {
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
      h += (it.dict ? listenHTML(it.listen) : '<div class="task__big"><h2 class="task__th">' + esc(it.bigTh) + '</h2>' + sayBtn(it.hintSay, 'ฟังเป็นตัวช่วย') + '</div>') +
        '<div class="field"><label for="answer">คำตอบภาษาอังกฤษ</label><input class="input input--big" id="answer" name="answer" type="text" lang="en" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done"></div>';
    } else if (it.t === 'speak') {
      h += '<div class="task__big"><h2 lang="en">' + esc(it.en) + '</h2>' + sayBtn(it.en) + '</div><p class="task__th">' + esc(it.th) + '</p>' +
        '<div class="speakbox"><button class="mic" type="button" data-act="mic">' + I.mic + '<span>กดแล้วพูด</span></button><p class="heard" id="heard" aria-live="polite"></p></div>';
    }
    return h + '</div>';
  }
  function barHTML(it) {
    if (P.confirmQuit) {
      return '<div class="feedback" data-mark="quit" role="alertdialog" aria-labelledby="quit-h"><div class="container feedback__in"><div class="feedback__msg"><h2 id="quit-h">ออกจากแบบฝึกนี้ไหม</h2><p class="th">ตอบไปแล้ว ' + P.step + ' ข้อ ถ้าออกตอนนี้คะแนนรอบนี้จะไม่ถูกบันทึก</p></div>' +
        '<div class="feedback__side"><button class="btn btn--line btn--lg" type="button" data-act="quityes">ออก</button><button class="btn btn--primary btn--lg" type="button" data-act="quitno" id="next">ทำต่อ</button></div></div></div>';
    }
    if (P.phase === 'feedback') {
      var good = P.lastRight;
      var head = good ? ['ถูกต้อง', 'ใช่เลย', 'เยี่ยม', 'แม่นมาก'][Math.floor(Math.random() * 4)] : 'ยังไม่ใช่';
      var body;
      if (it.t === 'match') body = good ? '<p>จับคู่ครบ ' + it.pairs.length + ' คู่' + (P.mm.miss ? ' พลาด ' + P.mm.miss + ' ครั้ง' : ' ไม่พลาดเลย') + '</p>' : '<p>พลาด ' + P.mm.miss + ' ครั้ง คู่ที่ถูกคือ</p><p class="th">' + it.pairs.map(function (w) { return '<span lang="en">' + esc(w[0]) + '</span> = ' + esc(w[1]); }).join('&emsp;') + '</p>';
      else if (it.fix) body = (good ? '<p lang="en">' + esc(it.ans) + '</p>' : '<p>ประโยคที่ถูกคือ <b lang="en">' + esc(it.ans) + '</b></p>') + '<p class="th">' + esc(it.why) + '</p>';
      else if (it.dict && !good) body = '<p>ที่ถูกคือ <b lang="en">' + esc(it.ans) + '</b></p><p class="th">' + (P.dictMark ? '<span class="heard">' + P.dictMark + '</span>' : '') + '</p><p class="th">' + esc(it.th) + '</p>';
      else body = good
        ? '<p lang="en">' + esc(it.en) + '</p>' + (it.th && it.t !== 'pair' ? '<p class="th">' + esc(it.th) + '</p>' : '')
        : (it.t === 'mcq' && !it.optEn
          ? '<p>คำตอบคือ <b>' + esc(it.ans) + '</b></p><p class="th"><span lang="en">' + esc(it.en) + '</span> แปลว่า ' + esc(it.th) + '</p>'
          : '<p>คำตอบคือ <b lang="en">' + esc(it.ans) + '</b></p>' + (it.th && it.t !== 'pair' ? '<p class="th">' + esc(it.th) + '</p>' : ''));
      return '<div class="feedback" data-mark="' + (good ? 'right' : 'wrong') + '" role="status"><div class="container feedback__in">' +
        '<div class="feedback__msg"><h2>' + head + '</h2>' + body + '</div>' +
        '<div class="feedback__side">' + (it.en ? sayBtn(it.en) : '') + '<button class="btn btn--primary btn--lg" type="button" data-act="next" id="next">ไปต่อ</button></div></div></div>';
    }
    var left = '', right = '';
    if (it.t === 'mcq' || it.t === 'pair') left = '<p class="muted small"><span class="kbd-hint">กดเลข 1 ถึง ' + it.opts.length + ' หรือ</span> แตะคำตอบ</p>';
    if (it.t === 'match') left = '<p class="muted small">แตะคำอังกฤษ แล้วแตะความหมายที่คู่กัน</p>';
    if (it.t === 'tiles' || it.t === 'type') { left = '<button class="link" type="button" data-act="giveup">ไม่รู้ ดูเฉลย</button>'; right = '<button class="btn btn--primary btn--lg" type="button" data-act="check" id="check"' + (it.t === 'tiles' ? ' disabled' : '') + '>ตรวจคำตอบ</button>'; }
    if (it.t === 'speak') left = '<button class="link" type="button" data-act="skip">พูดตอนนี้ไม่ได้ ข้ามข้อนี้</button>';
    return '<div class="feedback"><div class="container feedback__in"><div class="feedback__msg">' + left + '</div><div class="feedback__side">' + right + '</div></div></div>';
  }
  function playRender() {
    var it = P.queue[0];
    if (!it) { finishPlay(); return; }
    P.phase = 'answer'; P.sel = null; P.line = []; P.tries = 0; P.mm = { sel: null, done: 0, miss: 0 }; P.dictMark = '';
    var label = P.kind === 'lesson' ? P.obj.title : P.kind === 'mix' ? 'ฝึกรวม' : 'ด่านสอบขั้น ' + (P.obj.si + 1);
    render(
      '<div class="player">' +
        '<div class="container player__bar"><button class="btn btn--icon btn--sm" type="button" data-act="quit" aria-label="ออกจากแบบฝึก">' + I.close + '</button>' +
        '<div class="progress" role="progressbar" aria-label="ความคืบหน้า ' + esc(label) + '" aria-valuemin="0" aria-valuemax="' + P.planned + '" aria-valuenow="' + P.step + '"><i style="--p:' + (P.step / P.planned) + '"></i></div>' +
        '<span class="player__count">' + Math.min(P.step + 1, P.planned) + ' / ' + P.planned + '</span></div>' +
        '<div class="container stage-area" id="task">' + taskHTML(it) + '</div>' +
        '<div id="bar">' + barHTML(it) + '</div>' +
      '</div>', { mode: 'play', focus: false });
    var first = $('#answer') || $('.opt') || $('.tile') || $('.mic') || $('[data-act="say"]');
    if (first) first.focus({ preventScroll: true });
    if (it.listen) setTimeout(function () { say(it.listen); }, 120);
    else if (it.t === 'mcq' && it.big) setTimeout(function () { say(it.say); }, 120);
  }
  function leavePlay() { if (/^#\/mix/.test(location.hash)) location.hash = '#/'; else route(); }
  function askQuit() {
    if (!P) return;
    if (P.step === 0 && P.phase === 'answer') { leavePlay(); return; }
    P.confirmQuit = true; updateBar();
  }
  function updateBar() {
    var it = P.queue[0]; $('#bar').innerHTML = barHTML(it);
    var f = (P.phase === 'feedback' || P.confirmQuit) ? $('#next') : ($('#answer:not([disabled])') || $('.opt:not([disabled])') || $('.tile:not([disabled])') || $('.mic:not([disabled])'));
    if (f) f.focus({ preventScroll: true });
  }
  function settle(right, scored) {
    var it = P.queue[0];
    P.phase = 'feedback'; P.lastRight = right;
    if (it.first && scored !== false) { P.scored++; if (right) P.right++; }
    if (!right && it.k && S.srs[it.k]) { S.srs[it.k].b = 0; S.srs[it.k].d = dayIndex(); save(); }
    if (!right && it.first && it.en) P.missed.push(it);
    if (right && it.en && it.t !== 'mcq' && it.t !== 'pair') say(it.en);
    $$('.opt, .tile, #answer, .mic', $('#task')).forEach(function (b) { b.disabled = true; });
    updateBar();
  }
  function nextItem() {
    var it = P.queue.shift();
    P.step++;
    if (!P.lastRight && it.first && it.t !== 'speak') { P.planned++; var again = Object.assign({}, it, { first: false }); if (again.bank) again.bank = shuffle(again.bank); if (again.opts && again.t === 'mcq') again.opts = shuffle(again.opts); P.queue.push(again); }
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
        : (o.li === o.stage.lessons.length - 1 ? '<a class="btn btn--primary btn--lg" href="#/check/' + o.stage.id + '">ไปด่านสอบท้ายขั้น</a>' : (nx ? '<a class="btn btn--primary btn--lg" href="#/lesson/' + nx.id + '">บทถัดไป</a>' : '<a class="btn btn--primary btn--lg" href="#/">กลับไปที่เส้นทาง</a>'));
      html =
        '<div class="result">' +
          '<p class="result__big" data-pass="' + passed + '"' + (grew ? ' data-new' : '') + '><b class="num">' + score + '%</b><span>' + (passed ? 'ผ่านบท' + esc(o.title) : 'ต้องได้ 60% ขึ้นไป') + '</span></p>' +
          '<h1>' + (passed ? (grew ? 'ผ่านบทนี้แล้ว' : 'ฝึกซ้ำได้ดีมาก') : 'อีกนิดเดียว') + '</h1>' +
          '<p class="lead">' + (passed ? 'คำศัพท์จากบท' + esc(o.title) + 'เข้าคลังแล้ว ระบบจะชวนทวนเมื่อใกล้ลืม' : 'ข้อที่พลาดรอบนี้จะจำได้ดีขึ้นในรอบหน้า ลองอีกรอบได้เลย') + '</p>' +
          '<dl class="facts"><div><dt>คะแนน</dt><dd>' + score + '%</dd></div><div><dt>ได้รับ</dt><dd>' + xp + ' แต้ม</dd></div><div><dt>คำใหม่เข้าคลัง</dt><dd>' + added + ' คำ</dd></div></dl>' +
          '<div class="actions">' + nextBtn + (passed ? '<button class="btn" type="button" data-act="start" data-id="' + o.id + '">ฝึกบทนี้อีกครั้ง</button>' : '<a class="btn" href="#/lesson/' + o.id + '">อ่านเนื้อหาอีกรอบ</a>') + '<a class="btn" href="#/">ดูเส้นทาง</a></div>' +
        '</div>';
    } else if (P.kind === 'mix') {
      xp = 12 + Math.round(score / 10);
      save(); addXP(xp);
      var miss = P.missed.slice(0, 6);
      html =
        '<div class="result">' +
          '<h1>' + (score >= 80 ? 'แม่นขึ้นเรื่อย ๆ' : 'ฝึกรวมเสร็จแล้ว') + '</h1>' +
          '<p class="lead">' + (miss.length ? 'คำที่พลาดถูกส่งกลับไปให้ทวนอีกครั้งวันนี้ ข้อที่ควรดูซ้ำอยู่ด้านล่าง' : 'ไม่พลาดเลยสักข้อ ลองฝึกอีกชุดหรือไปเรียนบทใหม่') + '</p>' +
          '<dl class="facts"><div><dt>คะแนน</dt><dd>' + score + '%</dd></div><div><dt>ได้รับ</dt><dd>' + xp + ' แต้ม</dd></div><div><dt>ข้อที่พลาด</dt><dd>' + P.missed.length + ' ข้อ</dd></div></dl>' +
          (miss.length ? '<ul class="sents missed">' + miss.map(function (m) { return '<li><button class="sent" type="button" data-act="say" data-text="' + esc(m.en) + '"' + (TTS ? '' : ' disabled') + '>' + I.sound + '<span><span class="sent__en" lang="en">' + esc(m.en) + '</span><span class="sent__th">' + esc(m.why || m.th || '') + '</span></span></button></li>'; }).join('') + '</ul>' : '') +
          '<div class="actions"><button class="btn btn--primary btn--lg" type="button" data-act="startmix">ฝึกอีกชุด</button><a class="btn" href="#/">ดูเส้นทาง</a></div>' +
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
          '<dl class="facts"><div><dt>คะแนน</dt><dd>' + score + '%</dd></div><div><dt>ได้รับ</dt><dd>' + xp + ' แต้ม</dd></div><div><dt>ระดับ</dt><dd>' + level() + '</dd></div></dl>' +
          '<div class="actions">' + (ok && nst ? '<a class="btn btn--primary btn--lg" href="#/lesson/' + nst.lessons[0].id + '">เริ่มขั้น ' + (o.si + 2) + '</a>' : '<button class="btn btn--primary btn--lg" type="button" data-act="startcheck" data-id="' + o.id + '">สอบอีกครั้ง</button>') + '<a class="btn" href="#/">ดูเส้นทาง</a></div>' +
        '</div>';
    }
    P = null;
    render('<div class="view container stage-area">' + html + '</div>', { focus: 'h1' });
    var h = $('h1', app); if (h) { h.tabIndex = -1; h.focus({ preventScroll: true }); }
  }

  /* matching pairs */
  function matchPick(btn) {
    if (!P || P.phase !== 'answer') return;
    var it = P.queue[0], mm = P.mm, side = btn.getAttribute('data-side'), i = +btn.getAttribute('data-i');
    if (btn.getAttribute('data-mark') === 'right') return;
    if (!mm.sel || mm.sel.side === side) {
      $$('.match [aria-pressed="true"]').forEach(function (b) { b.removeAttribute('aria-pressed'); });
      btn.setAttribute('aria-pressed', 'true'); mm.sel = { side: side, i: i, el: btn };
      if (side === 'en') say(it.pairs[i][0]);
      return;
    }
    var other = mm.sel; mm.sel = null; other.el.removeAttribute('aria-pressed');
    if (other.i === i) {
      [btn, other.el].forEach(function (b) { b.setAttribute('data-mark', 'right'); b.disabled = true; });
      mm.done++;
      if (side === 'th') say(it.pairs[i][0]);
      if (mm.done === it.pairs.length) settle(mm.miss <= 1);
    } else {
      mm.miss++;
      [btn, other.el].forEach(function (b) { b.setAttribute('data-mark', 'wrong'); setTimeout(function () { if (b.getAttribute('data-mark') === 'wrong') b.removeAttribute('data-mark'); }, 650); });
    }
  }

  /* answers */
  /* "Next week I'm going to visit my parents" is as right as "I'm going to visit my parents next week":
     accept the answer's own words with a time phrase moved from the end to the front */
  var TIMEW = /^(?:today|tomorrow|yesterday|tonight|now|right now|later|every (?:day|week|morning|night)|(?:this|next|last) (?:week|weekend|month|year|morning|night|time|monday|tuesday|wednesday|thursday|friday|saturday|sunday)|at (?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|noon|night)(?: o'clock)?|on (?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)(?: morning| afternoon| evening| night)?|in the (?:morning|afternoon|evening)|\w+ (?:days?|weeks?|months?|years?) ago|(?:once|twice|three times) a (?:day|week)|this afternoon|last night)$/i;
  function movedTime(given, ans) {
    var g = given.map(function (t) { return t.toLowerCase(); }), a = ans.map(function (t) { return t.toLowerCase(); });
    if (g.length !== a.length || a.length < 3) return false;
    for (var k = 1; k < a.length; k++) {
      var tail = a.slice(k), head = a.slice(0, k);
      if (TIMEW.test(tail.join(' ')) && tail.concat(head).join(' ') === g.join(' ')) return true;
    }
    return false;
  }
  /* please may sit at the end, at the start, or straight after "Can you" / "Could I":
     "Can you please say it again?" is as right as "Can you say it again, please?" */
  function movedPlease(given, ans) {
    var g = given.map(function (t) { return t.toLowerCase(); }), a = ans.map(function (t) { return t.toLowerCase(); });
    var gi = g.indexOf('please'), ai = a.indexOf('please');
    if (gi === -1 || ai === -1 || g.lastIndexOf('please') !== gi || a.lastIndexOf('please') !== ai || g.length !== a.length) return false;
    var g2 = g.slice(0, gi).concat(g.slice(gi + 1)), a2 = a.slice(0, ai).concat(a.slice(ai + 1));
    if (g2.join(' ') !== a2.join(' ')) return false;
    var afterAsk = /^(can|could|would|will)$/.test(a2[0]) && /^(you|i|we)$/.test(a2[1]);
    return gi === 0 || gi === g.length - 1 || (afterAsk && gi === 2);
  }
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
    if (toLine) { P.line.push(k); btn.disabled = true; btn.setAttribute('data-used', ''); }
    else { P.line.splice(P.line.indexOf(k), 1); var src = $('.tiles__bank [data-k="' + k + '"]'); if (src) { src.disabled = false; src.removeAttribute('data-used'); src.focus({ preventScroll: true }); } }
    var it = P.queue[0];
    $('#line').innerHTML = P.line.map(function (i) { return '<button class="tile" type="button" data-act="untile" data-k="' + i + '" lang="en" aria-label="เอา ' + esc(it.bank[i]) + ' ออก">' + esc(it.bank[i]) + '</button>'; }).join('');
    var c = $('#check'); if (c) c.disabled = !P.line.length;
  }
  function checkAnswer() {
    if (!P || P.phase !== 'answer') return;
    var it = P.queue[0], given = '';
    if (it.t === 'tiles') given = P.line.map(function (i) { return it.bank[i]; }).join(' ');
    else if (it.t === 'type') { var inp = $('#answer'); given = inp ? inp.value : ''; if (!given.trim()) { inp.focus(); return; } }
    var bare = function (x) { return norm(spoken(x)).replace(/'/g, ''); };
    var right = norm(given) === norm(it.ans) || norm(spoken(given)) === norm(it.ans) || norm(spoken(given, true)) === norm(it.ans);
    if (!right && !it.listen && (it.t === 'tiles' || it.t === 'type')) right = movedTime(tokensOf(given), tokensOf(it.ans)) || movedPlease(tokensOf(given), tokensOf(it.ans));
    if (!right && it.alts) right = it.alts.some(function (a) { return bare(a) === bare(given); });
    if (!right && it.dict) { var r = compare(it.ans, [given]); right = r.score >= 0.85; P.dictMark = markWords(it.ans, r.ok); }
    if (!right && it.t === 'type') right = norm(given).replace(/'/g, '') === norm(it.ans).replace(/'/g, '');
    var line = $('#line'); if (line) line.setAttribute('data-mark', right ? 'right' : 'wrong');
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
      render('<div class="view container"><div class="view__head"><h1>ทวนคำศัพท์</h1></div><div class="empty sheet"><h2>วันนี้ทวนครบแล้ว</h2><p>คำในคลัง ' + all.length + ' คำ พรุ่งนี้มีคิวทวน ' + tomorrow + ' คำ ระหว่างนี้ลองฝึกพูดประโยคจากบทที่เรียนแล้ว</p><div class="actions"><a class="btn btn--primary" href="#/mix">ฝึกรวมจุดที่ยังไม่แม่น</a><a class="btn" href="#/speak">ฝึกพูด</a><button class="btn" type="button" data-act="cram">ทวนทั้งหมดอีกรอบ</button></div></div></div>');
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
      '<p class="muted small kbd-hint" style="text-align:center; margin-top: var(--space-lg)">คีย์ลัด: เว้นวรรคเพื่อเปิด และเลข 1 ถึง 4 เพื่อให้คะแนน</p></div>', { focus: R.shown ? '[data-r="2"]' : '#reveal', keepScroll: true });
    if (!R.shown && en) setTimeout(function () { say(c.w[0]); }, 120);
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
  var SP = { mode: 'shadow', si: null, i: 0, hideTh: false, hint: false, mediaUrl: null, step: -1, swap: false, hard: false, choices: null, miss: 0, note: '' };
  /* roleplay helpers */
  function roleMine(line) { return SP.swap ? line[0] !== 'you' : line[0] === 'you'; }
  function roleName(line) { return roleMine(line) ? 'คุณ' : (line[0] === 'you' ? 'นก' : line[0]); }
  function roleAdvance(d) {
    var spoke = false;
    while (SP.step < d.lines.length && !roleMine(d.lines[SP.step])) { say(d.lines[SP.step][1], false, spoke); spoke = true; SP.step++; }
    SP.choices = null;
    if (SP.step >= d.lines.length) { addXP(SP.hard ? 10 : 5); }
  }
  function roleChoices(d) {
    if (SP.choices) return SP.choices;
    var target = d.lines[SP.step][1];
    var said = d.lines.slice(0, SP.step).map(function (ln) { return ln[1]; });
    var others = C[SP.si].dialogs.reduce(function (a, x) { return a.concat(x.lines.filter(function (ln) { return roleMine(ln) && said.indexOf(ln[1]) === -1; }).map(function (ln) { return ln[1]; })); }, []);
    SP.choices = shuffle([target].concat(distract(target, shuffle(others), 2)));
    return SP.choices;
  }
  function roleCard() {
    var ds = C[SP.si].dialogs, d = ds[SP.i];
    if (!d) return '<div class="empty sheet"><h2>ขั้นนี้ยังไม่มีบทสนทนา</h2></div>';
    if (SP.step < 0) { SP.step = 0; SP.miss = 0; SP.note = ''; roleAdvance(d); }
    var shown = d.lines.slice(0, SP.step).map(function (ln) {
      return '<li class="bubble"' + (roleMine(ln) ? ' data-me' : '') + '><span class="bubble__who">' + esc(roleName(ln)) + '</span><p class="bubble__en" lang="en">' + esc(ln[1]) + '</p><p class="bubble__th">' + esc(ln[2]) + '</p>' + (TTS ? sayBtn(ln[1], null, 'btn--sm') : '') + '</li>';
    }).join('');
    var turn = '';
    if (SP.step < d.lines.length) {
      var ln = d.lines[SP.step];
      turn = '<div class="turn"><p class="turn__q">ตาคุณพูดว่า <b>“' + esc(ln[2]) + '”</b></p>' +
        (SP.hard && SRC
          ? '<div class="speak__row"><button class="mic" type="button" data-act="rolemic">' + I.mic + '<span>กดแล้วพูด</span></button><button class="link" type="button" data-act="rolereveal">ดูเฉลย</button></div><p class="heard" id="heard" aria-live="polite">' + SP.note + '</p>'
          : '<ul class="opts opts--stack">' + roleChoices(d).map(function (c, i) { return '<li><button class="opt" type="button" data-act="rolepick" data-v="' + esc(c) + '"><kbd>' + (i + 1) + '</kbd><span lang="en">' + esc(c) + '</span></button></li>'; }).join('') + '</ul>' + (SP.note ? '<p class="heard" aria-live="polite">' + SP.note + '</p>' : '')) +
        '</div>';
    } else {
      turn = '<div class="turn"><p class="turn__q"><b>จบบทสนทนา</b> ' + (SP.miss ? 'พลาด ' + SP.miss + ' ครั้ง' : 'ไม่พลาดเลย') + ' ได้ ' + (SP.hard ? 10 : 5) + ' แต้ม</p>' +
        '<div class="speak__row"><button class="btn btn--primary" type="button" data-act="roleagain">เล่นอีกครั้ง</button><button class="btn" type="button" data-act="roleswap">สลับไปเล่นอีกบท</button>' + (SRC && !SP.hard ? '<button class="btn" type="button" data-act="rolehard">ลองแบบพูดเอง</button>' : '') + '</div></div>';
    }
    return '<div class="speak__card sheet"><p class="muted small">' + esc(d.th) + (SP.swap ? ' (คุณเล่นอีกบท)' : '') + '</p><h2>' + esc(d.title) + '</h2>' +
      '<div class="seg" role="group" aria-label="ระดับความยาก"><button type="button" data-act="rolemode" data-h="0" aria-pressed="' + !SP.hard + '">เลือกประโยค</button><button type="button" data-act="rolemode" data-h="1" aria-pressed="' + SP.hard + '"' + (SRC ? '' : ' disabled title="เบราว์เซอร์นี้ตรวจเสียงพูดไม่ได้"') + '>พูดเองไม่มีตัวเลือก</button></div>' +
      '<ol class="chat" aria-live="polite">' + shown + '</ol>' + turn + '</div>';
  }
  function roleAccept(d) {
    var ln = d.lines[SP.step];
    say(ln[1]); SP.step++; SP.note = '';
    var wait = TTS ? Math.min(4000, 600 + ln[1].length * 55) : 0;
    viewSpeak();
    setTimeout(function () { if (document.body.dataset.view !== 'speak' || SP.mode !== 'role') return; roleAdvance(d); viewSpeak(); var f = $('.turn .opt, .turn .mic, .turn .btn'); if (f) f.focus({ preventScroll: true }); }, wait);
  }
  function speakSentences(si) { return C[si].lessons.reduce(function (a, l) { return a.concat(l.sents.map(function (s) { return { s: s, l: l }; })); }, []); }
  function viewSpeak() {
    if (SP.si === null || !stageOpen(SP.si)) SP.si = Math.min(currentStageIndex(), C.length - 1);
    if (!stageOpen(SP.si)) SP.si = 0;
    var list = SP.mode === 'shadow' ? speakSentences(SP.si) : SP.mode === 'role' ? C[SP.si].dialogs : C[SP.si].talk;
    SP.i = clamp(SP.i, 0, list.length - 1);
    var pills = '<div class="field field--inline"><label for="sp-level">ระดับ</label><select class="input" id="sp-level" data-act="splevel">' + C.map(function (st, si) { var o = stageOpen(si); return '<option value="' + si + '"' + (si === SP.si ? ' selected' : '') + (o ? '' : ' disabled') + '>ขั้น ' + (si + 1) + ' ' + esc(st.name) + (o ? '' : ' (ยังล็อก)') + '</option>'; }).join('') + '</select></div>';
    var support = SRC ? '' : (window.MediaRecorder && navigator.mediaDevices ? '<p class="notice">เบราว์เซอร์นี้ตรวจเสียงพูดไม่ได้ ปุ่มไมค์จะอัดเสียงแทน แล้วให้คุณฟังเทียบกับเสียงต้นฉบับ (ถ้าอยากให้ระบบตรวจ ใช้ Chrome หรือ Edge)</p>' : '<p class="notice">เบราว์เซอร์นี้ใช้ไมค์ไม่ได้ ฝึกด้วยการฟังแล้วพูดตามออกเสียงดัง ๆ ก็ได้ผลเช่นกัน</p>');
    var card;
    if (SP.mode === 'role') {
      card = roleCard();
    } else if (SP.mode === 'shadow') {
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
      '<div class="speak__controls"><div class="seg" role="group" aria-label="โหมด"><button type="button" data-act="spmode" data-m="shadow" aria-pressed="' + (SP.mode === 'shadow') + '">พูดตามประโยค</button><button type="button" data-act="spmode" data-m="talk" aria-pressed="' + (SP.mode === 'talk') + '">ตอบคำถาม</button><button type="button" data-act="spmode" data-m="role" aria-pressed="' + (SP.mode === 'role') + '">บทสนทนา</button></div>' +
      pills + '</div>' + support + card +
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
      cells.push('<i data-l="' + lv + '"' + (k === dayKey() ? ' data-today' : '') + ' title="' + k + ' ได้ ' + x + ' แต้ม"></i>');
    }
    var activeDays = Object.keys(S.days).filter(function (k) { return S.days[k] > 0; }).length;
    var stageRows = C.map(function (st, si) {
      var ds = st.lessons.filter(function (l) { return S.done[l.id]; });
      var avg = ds.length ? Math.round(ds.reduce(function (a, l) { return a + S.done[l.id].best; }, 0) / ds.length) : null;
      return '<tr><td>ขั้น ' + (si + 1) + ' ' + esc(st.name) + '</td><td class="nw">' + st.cefr + '</td><td class="num">' + ds.length + ' จาก ' + st.lessons.length + '</td><td class="num">' + (avg === null ? 'ยังไม่มี' : avg + '%') + '</td><td>' + (stagePassed(si) ? 'ผ่านแล้ว' : stageOpen(si) ? 'เปิดอยู่' : 'ยังล็อก') + '</td></tr>';
    }).join('');
    render('<div class="view container">' +
      '<div class="view__head"><h1>สถิติของคุณ</h1><p>' + (ME ? 'ทุกตัวเลขเป็นของบัญชี ' + esc(ME.name) + (cloudOn() ? ' เข้าจากเครื่องไหนก็เห็นเหมือนกัน' : ' ในเบราว์เซอร์เครื่องนี้') : 'ทุกตัวเลขนับจากการเรียนในเบราว์เซอร์เครื่องนี้') + '</p></div>' +
      '<dl class="stats"><div><dt>ต่อเนื่อง</dt><dd>' + streak() + '<small>วัน</small></dd></div><div><dt>แต้มรวม</dt><dd title="' + fmt(S.xp) + ' แต้ม">' + fmtBig(S.xp) + '</dd></div><div><dt>บทที่ผ่าน</dt><dd>' + totalDone() + '<small>/ ' + LESSONS.length + '</small></dd></div><div><dt>คำในคลัง</dt><dd>' + fmt(keys.length) + '</dd></div><div><dt>จำได้แม่น</dt><dd>' + fmt(strong) + '<small>คำ</small></dd></div></dl>' +
      '<div class="panel-grid"><div>' +
        '<h2 class="section-h">16 สัปดาห์ที่ผ่านมา</h2><div class="heat" role="img" aria-label="ปฏิทินการเรียน เรียนไปแล้ว ' + activeDays + ' วัน">' + cells.join('') + '</div>' +
        '<p class="heat-key">ไม่ได้เรียน <i></i><i></i><i></i><i></i> ครบเป้า</p>' +
        '<h2 class="section-h" style="margin-top: var(--space-2xl)">ทีละขั้น</h2><div class="table-wrap"><table class="stage-table"><thead><tr><th scope="col">ขั้น</th><th scope="col">ระดับ</th><th scope="col">บทเรียน</th><th scope="col">คะแนนเฉลี่ย</th><th scope="col">ด่านสอบ</th></tr></thead><tbody>' + stageRows + '</tbody></table></div>' +
      '</div>' +
      '<form class="settings sheet" id="settings" aria-labelledby="set-h" onsubmit="return false">' +
        '<h2 id="set-h">ตั้งค่า</h2>' +
        '<fieldset class="seg"><legend>เป้าหมายแต้มต่อวัน</legend>' + [10, 20, 30, 50].map(function (g) { return '<input type="radio" name="goal" id="g' + g + '" value="' + g + '"' + (S.settings.goal === g ? ' checked' : '') + ' data-act="setgoal"><label for="g' + g + '">' + g + (g === 10 ? ' สบาย ๆ' : g === 20 ? ' ปกติ' : g === 30 ? ' จริงจัง' : ' เข้มข้น') + '</label>'; }).join('') + '</fieldset>' +
        '<div class="field"><label for="voice">เสียงผู้อ่าน</label><select class="input" id="voice" name="voice" data-act="setvoice"' + (TTS ? '' : ' disabled') + '></select></div>' +
        '<div class="field"><label for="rate">ความเร็วเสียง <b id="rate-v" class="num">' + S.settings.rate.toFixed(2) + '</b> เท่า</label><input type="range" id="rate" name="rate" min="0.6" max="1.2" step="0.05" value="' + S.settings.rate + '" data-act="setrate"' + (TTS ? '' : ' disabled') + '></div>' +
        '<div class="actions"><button class="btn btn--sm" type="button" data-act="say" data-text="Hello! Nice to meet you. Let\'s practice English together."' + (TTS ? '' : ' disabled') + '>' + I.sound + 'ลองฟังเสียง</button></div>' +
        '<fieldset class="seg"><legend>การ์ดทวนคำ</legend><input type="radio" name="dir" id="d-en" value="en"' + (S.settings.dir !== 'th' ? ' checked' : '') + ' data-act="setdir"><label for="d-en">อังกฤษ เป็น ไทย</label><input type="radio" name="dir" id="d-th" value="th"' + (S.settings.dir === 'th' ? ' checked' : '') + ' data-act="setdir"><label for="d-th">ไทย เป็น อังกฤษ</label></fieldset>' +
        '<label class="check"><input type="checkbox" name="free" data-act="setfree"' + (S.settings.free ? ' checked' : '') + '><span>เปิดทุกบทเรียน<br><span class="small muted">เลือกเรียนบทไหนก่อนก็ได้ ไม่ต้องเรียงตามลำดับ</span></span></label>' +
        '<hr><h2>ข้อมูลของคุณ</h2>' +
        '<p class="small muted">' + (cloudOn() ? 'ความคืบหน้าซิงก์กับบัญชี ' + esc(ME.name) + ' อยู่แล้ว ไฟล์สำรองเอาไว้เก็บอีกชุดหนึ่ง' : ME ? 'บัญชีนี้อยู่ในเบราว์เซอร์นี้เท่านั้น ดาวน์โหลดไฟล์สำรองไว้เพื่อย้ายไปเครื่องอื่น' : 'ความคืบหน้าอยู่ในเบราว์เซอร์นี้เท่านั้น <a href="#/account">สร้างบัญชี</a> ไว้แยกของแต่ละคน หรือดาวน์โหลดไฟล์สำรองไว้ย้ายเครื่อง') + '</p>' +
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
    var list = voices.filter(isLocal).concat(voices.filter(function (v) { return !isLocal(v); }));
    sel.innerHTML = list.map(function (v) { return '<option value="' + esc(v.name) + '"' + (cur && cur.name === v.name ? ' selected' : '') + '>' + esc(v.name) + ' (' + esc(v.lang) + ')' + (isLocal(v) ? '' : ' ออนไลน์ อาจช้า') + '</option>'; }).join('');
  }
  function setStatus(msg, err) { var s = $('#set-status'); if (!s) return; s.textContent = msg; if (err) s.setAttribute('data-err', ''); else s.removeAttribute('data-err'); }

  /* ---------------- account ---------------- */
  var AV = { kind: 'in', name: '', note: '', busy: false };
  var AUTH_MSG = {
    noname: 'ใส่ Username ก่อน',
    longname: 'Username ยาวได้ไม่เกิน 32 ตัว',
    short: 'รหัสผ่านต้องยาวอย่างน้อย 6 ตัว',
    mismatch: 'รหัสผ่านสองช่องไม่ตรงกัน ลองพิมพ์ใหม่',
    exists: 'Username นี้มีคนใช้แล้ว ถ้าเป็นบัญชีของคุณ เลือกเข้าสู่ระบบแทน',
    wrong: 'Username หรือรหัสผ่านไม่ถูกต้อง',
    many: 'ลองผิดหลายครั้งเกินไป รอสักครู่แล้วลองใหม่',
    network: 'เชื่อมต่ออินเทอร์เน็ตไม่ได้ ตรวจเน็ตแล้วลองอีกครั้ง',
    authoff: 'Firebase ยังไม่เปิดตัวเลือก Email/Password ใน Authentication (ผู้ใช้ไม่ต้องมีอีเมล แค่ระบบต้องเปิดตัวเลือกนี้)',
    badkey: 'apiKey ใน js/cloud-config.js ไม่ถูกต้อง',
    unsupported: 'เบราว์เซอร์นี้สร้างบัญชีไม่ได้ ต้องเปิดเว็บผ่าน https',
    storage: 'บันทึกในเบราว์เซอร์ไม่ได้ พื้นที่อาจเต็มหรือเปิดโหมดส่วนตัวอยู่'
  };
  function hasProgress(x) { return x.xp > 0 || Object.keys(x.done).length > 0 || Object.keys(x.srs).length > 0; }
  function acctStatus(msg, err) { var s = $('#acct-status'); if (!s) return; s.textContent = msg; if (err) s.setAttribute('data-err', ''); else s.removeAttribute('data-err'); }
  function viewAccount() {
    var lead = ACC && ACC.cloud ? 'ตั้ง Username กับรหัสผ่าน แล้วเข้าจากเครื่องไหนก็เจอความคืบหน้าเดิม' : 'ตั้ง Username กับรหัสผ่านไว้ แยกความคืบหน้าของแต่ละคนที่ใช้เครื่องนี้';
    var note = AV.note ? '<p class="notice" role="status">' + esc(AV.note) + '</p>' : '';
    AV.note = '';
    if (!ACC) { render('<div class="view container"><div class="view__head"><h1>บัญชีของคุณ</h1><p>โหลดระบบบัญชีไม่สำเร็จ ลองรีเฟรชหน้านี้อีกครั้ง</p></div></div>'); return; }
    if (ME) {
      render('<div class="view container acct">' +
        '<div class="view__head"><h1>สวัสดี <span class="acct__name">' + esc(ME.name) + '</span></h1><p>' + (cloudOn() ? 'บัญชีนี้ซิงก์ขึ้นคลาวด์ เปิดเว็บที่เครื่องอื่นแล้วใส่ Username กับรหัสผ่านเดิม ความคืบหน้าจะตามไปด้วย' : 'บัญชีนี้เก็บอยู่ในเบราว์เซอร์เครื่องนี้ ใส่ Username กับรหัสผ่านเดิมเมื่อกลับมาเรียน') + '</p></div>' + note +
        '<div class="acct__card sheet">' +
          '<dl class="acct__facts"><div><dt>บทที่ผ่าน</dt><dd class="num">' + fmt(totalDone()) + '</dd></div><div><dt>แต้มรวม</dt><dd class="num">' + fmtBig(S.xp) + '</dd></div><div><dt>ต่อเนื่อง</dt><dd class="num">' + streak() + ' วัน</dd></div></dl>' +
          '<p class="acct__sync" data-sync aria-live="polite">' + esc(syncText()) + '</p>' +
          '<div class="actions">' + (cloudOn() ? '<button class="btn btn--ink btn--sm" type="button" data-act="syncnow">ซิงก์ตอนนี้</button>' : '') + '<button class="btn btn--sm" type="button" data-act="signout">ออกจากระบบ</button></div>' +
          '<p class="status" id="acct-status" role="status"></p>' +
        '</div></div>', { focus: false });
      if (SYNC.state === 'err') syncShow('err');
      return;
    }
    var up = AV.kind === 'up', carry = up && hasProgress(S);
    render('<div class="view container acct">' +
      '<div class="view__head"><h1>บัญชีของคุณ</h1><p>' + lead + '</p></div>' + note +
      '<form class="acct__card sheet" id="acct-form" novalidate>' +
        '<fieldset class="seg"><legend>คุณมีบัญชีแล้วหรือยัง</legend>' +
          '<input type="radio" name="kind" id="k-in" value="in"' + (up ? '' : ' checked') + ' data-act="acctkind"><label for="k-in">เข้าสู่ระบบ</label>' +
          '<input type="radio" name="kind" id="k-up" value="up"' + (up ? ' checked' : '') + ' data-act="acctkind"><label for="k-up">สร้างบัญชีใหม่</label></fieldset>' +
        '<div class="field"><label for="acct-name">ชื่อผู้ใช้ (Username)</label><input class="input" id="acct-name" name="name" value="' + esc(AV.name) + '" maxlength="' + ACC.maxName + '" autocomplete="username" autocapitalize="none" spellcheck="false" required></div>' +
        '<div class="field"><label for="acct-pin">รหัสผ่าน (Password)</label><input class="input" type="password" id="acct-pin" name="pin" minlength="' + ACC.min + '" autocomplete="' + (up ? 'new-password' : 'current-password') + '" aria-describedby="pin-hint" required>' +
          '<p class="small muted" id="pin-hint">อย่างน้อย ' + ACC.min + ' ตัว ใช้ตัวเลข ตัวอักษร หรือผสมกันก็ได้</p></div>' +
        (up ? '<div class="field"><label for="acct-pin2">ใส่รหัสผ่านอีกครั้ง</label><input class="input" type="password" id="acct-pin2" name="pin2" autocomplete="new-password" required></div>' : '') +
        '<label class="check"><input type="checkbox" data-act="pinshow"><span>แสดงรหัสผ่าน</span></label>' +
        (carry ? '<label class="check"><input type="checkbox" name="carry" checked><span>ย้ายความคืบหน้าในเครื่องนี้เข้าบัญชีใหม่<br><span class="small muted">ผ่านแล้ว ' + fmt(totalDone()) + ' บท ' + fmt(S.xp) + ' แต้ม</span></span></label>' : '') +
        '<div class="actions"><button class="btn btn--primary" type="submit">' + (up ? 'สร้างบัญชี' : 'เข้าสู่ระบบ') + '</button></div>' +
        '<p class="status" id="acct-status" role="status"></p>' +
      '</form>' +
      (ACC.cloud ? '' : '<p class="acct__aside small muted">ตอนนี้บัญชีอยู่ในเบราว์เซอร์นี้เท่านั้น เมื่อเชื่อม Firebase แล้ว บัญชีจะเข้าได้จากทุกเครื่อง และบัญชีที่สร้างไว้ตอนนี้ย้ายขึ้นคลาวด์ได้ด้วย Username กับรหัสผ่านเดิม</p>') +
      '</div>', { focus: false });
  }
  function submitAccount(form) {
    if (AV.busy) return;
    var kind = AV.kind, name = form.name.value, pin = form.pin.value;
    AV.name = name;
    if (kind === 'up' && form.pin2 && form.pin2.value !== pin) { acctStatus(AUTH_MSG.mismatch, true); form.pin2.focus(); return; }
    var carry = kind === 'up' && form.carry && form.carry.checked;
    var guest = JSON.parse(JSON.stringify(S));
    var btn = form.querySelector('[type="submit"]');
    AV.busy = true; btn.disabled = true; acctStatus(kind === 'up' ? 'กำลังสร้างบัญชี' : 'กำลังเข้าสู่ระบบ');
    (kind === 'up' ? ACC.signUp(name, pin) : ACC.signIn(name, pin)).then(function (me) {
      ME = me; SYNC.dirty = false; SYNC.state = 'idle';
      var mine = readSlot();
      if (kind === 'up') { S = carry ? sanitize(guest) : defaults(); S.t = Date.now(); if (mine) S = mergeState(S, mine); }
      else S = mine || defaults();
      /* an account first made on this browser before Firebase was connected moves up with it */
      var lift = ACC.cloud ? ACC.localMatch(name, pin).then(function (key) {
        var old = key && readSlot({ mode: 'local', id: key });
        if (old) S = mergeState(S, old);
      }) : Promise.resolve();
      return lift.then(function () {
        persist();
        if (cloudOn()) { SYNC.dirty = kind === 'up'; return kind === 'up' ? pushNow() : pullNow(); }
      });
    }).then(function () {
      AV.busy = false; AV.name = '';
      AV.note = kind === 'up' ? 'สร้างบัญชี ' + ME.name + ' แล้ว จำ Username กับรหัสผ่านไว้ใช้เข้าครั้งหน้า' : 'ยินดีต้อนรับกลับ ' + ME.name;
      chrome(); viewAccount();
    }, function (e) {
      AV.busy = false; if (btn.isConnected) btn.disabled = false;
      if (ME && !e.code) { chrome(); viewAccount(); return; }
      acctStatus(AUTH_MSG[e.code] || 'มีบางอย่างผิดพลาด ลองใหม่อีกครั้ง', true);
      var f = e.code === 'wrong' || e.code === 'short' ? form.pin : e.code === 'exists' || e.code === 'noname' || e.code === 'longname' ? form.name : null;
      if (f && f.isConnected) f.focus();
    });
  }

  /* ---------------- router ---------------- */
  function route() {
    hush(); if (rec) { try { rec.abort(); } catch (e) {} rec = null; }
    if (mediaRec && mediaRec.state === 'recording') { try { mediaRec.stop(); } catch (e) {} }
    var parts = (location.hash.replace(/^#\/?/, '') || '').split('/').filter(Boolean);
    var v = parts[0] || 'home', a = parts[1];
    if (v !== 'review') R = null;
    P = null;
    document.body.dataset.view = v;
    setNav(v === 'lesson' || v === 'check' ? 'home' : v);
    if (v === 'lesson' && byId[a]) { viewLesson(byId[a]); document.title = 'Stage ' + (byId[a].si + 1) + ', Lesson ' + (byId[a].li + 1) + ': ' + byId[a].en + ' | Speakeasy'; return; }
    if (v === 'check' && stageById[a]) { viewCheck(stageById[a]); document.title = 'Stage ' + (stageById[a].si + 1) + ' test | Speakeasy'; return; }
    if ((v === 'lesson' || v === 'check') && a) { viewHome(); app.insertAdjacentHTML('afterbegin', '<p class="container notice" role="status" style="margin-top: var(--space-lg)">ไม่พบบทเรียนนี้ ลิงก์อาจเก่าหรือพิมพ์ผิด เลือกบทจากเส้นทางด้านล่างได้เลย</p>'); return; }
    var titles = { review: 'Review', speak: 'Speaking room', words: 'Word bank', progress: 'Progress', account: 'Account' };
    document.title = titles[v] ? titles[v] + ' | Speakeasy' : 'Speakeasy: English from zero to fluent';
    if (v === 'mix') { document.title = 'Mixed practice | Speakeasy'; setNav('home'); startPlay('mix', null); return; }
    if (v === 'review') return viewReview();
    if (v === 'speak') return viewSpeak();
    if (v === 'words') return viewWords();
    if (v === 'progress') return viewProgress();
    if (v === 'account') return viewAccount();
    document.body.dataset.view = 'home';
    viewHome();
  }

  /* ---------------- events ---------------- */
  var resetArmed = 0, prevState = null;
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-act]');
    if (!el || el.disabled) return;
    var act = el.getAttribute('data-act');
    switch (act) {
      case 'say': say(el.getAttribute('data-text'), !!el.getAttribute('data-slow')); break;
      case 'sayall': { var l = byId[el.getAttribute('data-id')]; hush(); l.sents.forEach(function (s) { say(s[0], false, true); }); break; }
      case 'start': startPlay('lesson', byId[el.getAttribute('data-id')]); break;
      case 'startcheck': startPlay('check', stageById[el.getAttribute('data-id')]); break;
      case 'quit': askQuit(); break;
      case 'quitno': if (P) { P.confirmQuit = false; updateBar(); } break;
      case 'quityes': leavePlay(); break;
      case 'm': matchPick(el); break;
      case 'startmix': startPlay('mix', null); break;
      case 'opt': chooseOpt(el); break;
      case 'tile': tileMove(el, true); break;
      case 'untile': tileMove(el, false); break;
      case 'check': checkAnswer(); break;
      case 'giveup': if (P && P.phase === 'answer') settle(false); break;
      case 'skip': if (P && P.phase === 'answer') { if (rec) { try { rec.abort(); } catch (x) {} rec = null; } P.queue.shift(); P.finished++; P.step++; playRender(); } break;
      case 'next': if (P && P.phase === 'feedback') nextItem(); break;
      case 'mic': micPress(el); break;
      case 'reveal': if (R) { R.shown = true; reviewRender(); } break;
      case 'rate': if (R && R.shown) rateCard(+el.getAttribute('data-r')); break;
      case 'cram': { var all = Object.keys(S.srs).filter(function (k) { return CARD[k]; }); R = { cards: shuffle(all).slice(0, 30), i: 0, shown: false, n: 0 }; reviewRender(); break; }
      case 'spmode': SP.mode = el.getAttribute('data-m'); SP.i = 0; SP.hint = false; SP.step = -1; SP.swap = false; viewSpeak(); break;
      case 'spstage': SP.si = +el.getAttribute('data-si'); SP.i = 0; SP.hint = false; SP.step = -1; SP.swap = false; viewSpeak(); break;
      case 'spprev': SP.i--; SP.hint = false; SP.step = -1; SP.swap = false; viewSpeak(); break;
      case 'spnext': SP.i++; SP.hint = false; SP.step = -1; SP.swap = false; viewSpeak(); break;
      case 'sphint': SP.hint = !SP.hint; viewSpeak(); break;
      case 'spmic': spMic(el); break;
      case 'rolepick': {
        var rd = C[SP.si].dialogs[SP.i], tgt = rd.lines[SP.step][1];
        if (el.getAttribute('data-v') === tgt) { el.setAttribute('data-mark', 'right'); roleAccept(rd); }
        else { SP.miss++; el.setAttribute('data-mark', 'wrong'); el.disabled = true; SP.note = '<span class="miss">ยังไม่ใช่ ลองดูความหมายภาษาไทยอีกครั้ง</span>'; var nn = $('.turn .heard'); if (nn) nn.innerHTML = SP.note; else el.closest('.turn').insertAdjacentHTML('beforeend', '<p class="heard" aria-live="polite">' + SP.note + '</p>'); }
        break;
      }
      case 'rolemic': {
        if (rec) { stopListening(); break; }
        var md = C[SP.si].dialogs[SP.i], mt = md.lines[SP.step][1], out = $('#heard');
        el.setAttribute('data-on', ''); el.querySelector('span').textContent = 'กำลังฟัง แตะเพื่อหยุด';
        listen(function (t) { out.textContent = t; }, function (res) {
          el.removeAttribute('data-on'); el.querySelector('span').textContent = 'กดแล้วพูดอีกครั้ง';
          if (res.error) { out.innerHTML = '<span class="miss">' + esc(micError(res.error)) + '</span>'; return; }
          var r = compare(mt, heardCandidates(res.alts)), pct = Math.round(r.score * 100);
          if (r.score >= 0.6) { roleAccept(md); }
          else { SP.miss++; out.innerHTML = markWords(mt, r.ok) + '<br><span class="score">ตรง ' + pct + '%</span> <span class="muted small">ต้องตรง 60% ขึ้นไป ลองอีกครั้ง หรือกดดูเฉลย</span>'; }
        });
        break;
      }
      case 'rolereveal': { SP.miss++; var rv = C[SP.si].dialogs[SP.i]; roleAccept(rv); break; }
      case 'roleagain': SP.step = -1; viewSpeak(); break;
      case 'roleswap': SP.swap = !SP.swap; SP.step = -1; viewSpeak(); break;
      case 'rolehard': SP.hard = true; SP.step = -1; viewSpeak(); break;
      case 'rolemode': SP.hard = el.getAttribute('data-h') === '1'; SP.choices = null; SP.note = ''; viewSpeak(); break;
      case 'wst': WV.st = el.getAttribute('data-st'); $$('[data-act="wst"]').forEach(function (b) { b.setAttribute('aria-pressed', b === el); }); wordsList(); break;
      case 'syncnow': SYNC.dirty = true; pushNow().then(function (ok) { if (ok) pullNow(); }); break;
      case 'signout': el.disabled = true; acctStatus('กำลังออกจากระบบ'); pushNow().then(function () { leaveAccount(); }); break;
      case 'undoimport': if (prevState) { S = sanitize(JSON.parse(prevState)); S.r = Date.now(); prevState = null; save(); viewProgress(); setStatus('กลับไปใช้ข้อมูลเดิมแล้ว'); } break;
      case 'export': {
        var blob = new Blob([JSON.stringify(S, null, 2)], { type: 'application/json' });
        var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'speakeasy-backup-' + dayKey() + '.json';
        document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
        setStatus('ดาวน์โหลดไฟล์สำรองแล้ว'); break;
      }
      case 'reset':
        if (Date.now() - resetArmed < 5000) { try { localStorage.removeItem(slotKey()); } catch (x) {} S = defaults(); S.r = Date.now(); save(); resetArmed = 0; viewProgress(); setStatus('ล้างความคืบหน้าแล้ว เริ่มใหม่ได้เลย'); }
        else { resetArmed = Date.now(); el.textContent = 'กดอีกครั้งภายใน 5 วินาทีเพื่อยืนยัน'; setTimeout(function () { if (el.isConnected) el.textContent = 'ล้างความคืบหน้าทั้งหมด'; }, 5000); }
        break;
    }
  });
  document.addEventListener('change', function (e) {
    var el = e.target, act = el.getAttribute && el.getAttribute('data-act');
    if (!act) return;
    if (act === 'acctkind') { var nm = $('#acct-name'); if (nm) AV.name = nm.value; AV.kind = el.value; viewAccount(); var k = $('#k-' + el.value); if (k) k.focus(); return; }
    if (act === 'pinshow') { $$('#acct-pin, #acct-pin2').forEach(function (i) { i.type = el.checked ? 'text' : 'password'; }); return; }
    if (act === 'setgoal') { S.settings.goal = +el.value; save(); chrome(); setStatus('ตั้งเป้าวันละ ' + el.value + ' แต้มแล้ว'); }
    if (act === 'setvoice') { S.settings.voice = el.value; save(); say('This is my voice.'); }
    if (act === 'setdir') { S.settings.dir = el.value; save(); setStatus('บันทึกแล้ว'); }
    if (act === 'setfree') { S.settings.free = el.checked; save(); setStatus(el.checked ? 'เปิดทุกบทแล้ว' : 'กลับไปเรียนตามลำดับแล้ว'); }
    if (act === 'setrate') { S.settings.rate = +el.value; save(); say('Can you hear the difference?'); }
    if (act === 'sphide') { SP.hideTh = el.checked; viewSpeak(); var c = $('[data-act="sphide"]'); if (c) c.focus(); }
    if (act === 'wall') { WV.all = el.checked; wordsList(); }
    if (act === 'splevel') { SP.si = +el.value; SP.i = 0; SP.hint = false; SP.step = -1; SP.swap = false; viewSpeak(); var sl = $('#sp-level'); if (sl) sl.focus(); }
    if (act === 'import') {
      var f = el.files && el.files[0]; if (!f) return;
      if (f.size > 5 * 1024 * 1024) { setStatus('ไฟล์ใหญ่เกินไปสำหรับไฟล์สำรอง เลือกไฟล์ที่ชื่อขึ้นต้นด้วย speakeasy-backup', true); el.value = ''; return; }
      var fr = new FileReader();
      fr.onload = function () {
        try {
          var data = JSON.parse(fr.result);
          if (!data || typeof data !== 'object' || !data.done || !data.srs) throw new Error('shape');
          prevState = JSON.stringify(S);
          S = sanitize(data); S.r = Date.now(); save(); viewProgress(); setStatus('โหลดความคืบหน้าจากไฟล์แล้ว: ผ่าน ' + fmt(totalDone()) + ' บท ' + fmt(S.xp) + ' แต้ม');
          var stt = $('#set-status'); if (stt) stt.insertAdjacentHTML('beforeend', ' <button class="link" type="button" data-act="undoimport">ย้อนกลับเป็นข้อมูลเดิม</button>');
        } catch (x) { setStatus('ไฟล์นี้ไม่ใช่ไฟล์สำรองของ Speakeasy เลือกไฟล์ที่ชื่อขึ้นต้นด้วย speakeasy-backup', true); }
      };
      fr.onerror = function () { setStatus('อ่านไฟล์ไม่สำเร็จ ลองเลือกไฟล์อีกครั้ง', true); };
      fr.readAsText(f); el.value = '';
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
      if (e.key === 'Escape') { e.preventDefault(); if (P.confirmQuit) { P.confirmQuit = false; updateBar(); } else askQuit(); return; }
      if (P.confirmQuit) return;
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
  document.addEventListener('submit', function (e) { if (e.target.id === 'acct-form') { e.preventDefault(); submitAccount(e.target); } });
  window.addEventListener('hashchange', route);
  window.addEventListener('storage', function (e) {
    if (e.key === 'speakeasy.session' && ACC) { ME = ACC.session(); S = sanitize(load()); chrome(); if (!P) route(); }
    else if (e.key === slotKey()) { S = sanitize(load()); chrome(); }
  });

  route();
  if (cloudOn()) pullNow();
})();
