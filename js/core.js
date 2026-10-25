/* Core: storage, data indexes, root-word stemmer, search, spaced repetition, speech. */
(function () {
  const App = (window.App = {});

  /* ---------- Utilities ---------- */
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const norm = (s) => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[’']/g, "'").trim();
  const flat = (s) => norm(s).replace(/[-'\s.,!?¿¡"():;…]/g, ''); // compact form for matching
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = (a, n) => shuffle(a).slice(0, n);
  const today = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
  const dayDiff = (a, b) => Math.round((new Date(b) - new Date(a)) / 864e5);
  Object.assign(App, { esc, norm, flat, shuffle, pick, today });

  /* ---------- Storage ---------- */
  const KEY = 'usaptayo.v1';
  const defaults = () => ({
    settings: { theme: 'system', register: 'f', voice: '', voiceSource: 'pack', rate: 0.85, cardDir: 'tl-en', newPerDay: 20 },
    srs: {}, mistakes: [], newToday: { date: '', n: 0 },
    done: { lessons: {}, reading: {}, cases: {}, dialogues: {}, sections: {} },
    streak: { last: '', count: 0, best: 0, days: [] },
    stats: { reviews: 0, correct: 0, answered: 0 }, xp: 0, level: '', seenVersion: ''
  });
  let state;
  try { state = Object.assign(defaults(), JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { state = defaults(); }
  state.settings = Object.assign(defaults().settings, state.settings || {});
  state.done = Object.assign(defaults().done, state.done || {});
  App.state = state;
  App.save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* storage unavailable */ } };
  App.reset = () => { state = App.state = defaults(); App.save(); };
  App.importState = (obj) => { App.state = state = Object.assign(defaults(), obj); state.settings = Object.assign(defaults().settings, obj.settings || {}); App.save(); };

  // Activity: streaks and XP
  App.activity = (xp) => {
    const t = today();
    if (state.streak.last !== t) {
      const gap = state.streak.last ? dayDiff(state.streak.last, t) : 99;
      state.streak.count = gap === 1 ? state.streak.count + 1 : 1;
      state.streak.best = Math.max(state.streak.best, state.streak.count);
      state.streak.last = t;
      state.streak.days = (state.streak.days || []).concat(t).slice(-120);
    }
    state.xp += xp || 0;
    App.save();
  };
  App.streakNow = () => {
    if (!state.streak.last) return 0;
    return dayDiff(state.streak.last, today()) <= 1 ? state.streak.count : 0;
  };
  App.recordAnswer = (correct, cardId) => {
    state.stats.answered++;
    if (correct) state.stats.correct++;
    if (!correct && cardId && !state.mistakes.includes(cardId)) state.mistakes.push(cardId);
    if (correct && cardId && state.srs[cardId] && state.srs[cardId].r >= 3) state.mistakes = state.mistakes.filter((x) => x !== cardId);
    App.activity(correct ? 5 : 1);
  };

  /* ---------- Dictionary ---------- */
  const POS = { n: 'noun', v: 'verb', adj: 'adjective', adv: 'adverb', pron: 'pronoun', part: 'particle', conj: 'conjunction', prep: 'preposition', interj: 'interjection', num: 'number', phr: 'phrase' };
  App.POS = POS;
  const seen = new Map();
  const DICT = [];
  (window.DICT_RAW || []).join('\n').split('\n').forEach((line) => {
    line = line.trim();
    if (!line || line.startsWith('#')) return;
    const [tl, en, pos, cat, root, note] = line.split('|').map((s) => (s || '').trim());
    if (!tl || !en) return;
    const k = flat(tl) + '|' + norm(en);
    if (seen.has(k)) return;
    seen.set(k, 1);
    DICT.push({ id: 'd' + DICT.length, tl, en, pos: pos || '', cat: cat || 'other', root: root || '', note: note || '', ftl: flat(tl), nen: norm(en) });
  });
  DICT.sort((a, b) => a.ftl.localeCompare(b.ftl));
  DICT.forEach((e, i) => (e.id = 'd' + i));
  App.DICT = DICT;
  App.dictById = Object.fromEntries(DICT.map((e) => [e.id, e]));

  // Root index: root → entries; headword → entries
  const byRoot = new Map(), byHead = new Map();
  DICT.forEach((e) => {
    const r = flat(e.root || ''), h = e.ftl;
    if (r) { if (!byRoot.has(r)) byRoot.set(r, []); byRoot.get(r).push(e); }
    if (!byHead.has(h)) byHead.set(h, []); byHead.get(h).push(e);
  });
  (window.VERBS || []).forEach((v) => { const r = flat(v.r); if (!byRoot.has(r)) byRoot.set(r, []); });
  App.byRoot = byRoot; App.byHead = byHead;

  App.CATS = {
    basics: 'Basics & greetings', particles: 'Particles', grammar: 'Grammar words', pronouns: 'Pronouns', questions: 'Question words',
    numbers: 'Numbers', time: 'Time & dates', colors: 'Colors', people: 'People', family: 'Family & kinship', body: 'Body',
    food: 'Food & drink', home: 'Home', money: 'Money & shopping', work: 'Work', places: 'Places', nature: 'Nature & weather',
    clothing: 'Clothing', school: 'School', tech: 'Phones & internet', travel: 'Getting around', adjectives: 'Describing words', modals: 'Want, need, can', verbs: 'Common verbs',
    emotions: 'Emotions & values', beliefs: 'Faith & folk beliefs', health: 'Health & illness', mind: 'Mind & perception',
    risk: 'Risk & safety (clinical)', substance: 'Alcohol & substances', stigma: 'Stigmatizing words (recognize, avoid)', clinical: 'Clinical terms'
  };

  /* ---------- Root-word stemmer ----------
     Strips common Tagalog prefixes, infixes, suffixes, and reduplication,
     then keeps candidates that exist as a root or headword in the dictionary. */
  const PREFIXES = ['nakikipag', 'makikipag', 'pinakama', 'pinaka', 'napaka', 'nakakapag', 'makakapag', 'nakaka', 'makaka', 'nakapag', 'makapag', 'ipinag', 'pinag', 'ipag', 'pagka', 'pagpa', 'ipina', 'ipa', 'magpa', 'nagpa', 'mapa', 'napa', 'nag', 'mag', 'pag', 'nang', 'mang', 'pang', 'nam', 'mam', 'pam', 'naka', 'maka', 'nai', 'mai', 'ika', 'ka', 'na', 'ma', 'pa', 'i'];
  const SUFFIXES = ['han', 'hin', 'nan', 'an', 'in'];
  const isV = (c) => /[aeiou]/.test(c);
  function variants(w) {
    const out = new Set();
    for (const p of PREFIXES) if (w.startsWith(p) && w.length - p.length >= 3) out.add(w.slice(p.length));
    for (const s of SUFFIXES) if (w.endsWith(s) && w.length - s.length >= 3) {
      let r = w.slice(0, -s.length);
      out.add(r);
      // inumin → inom, tulungan → tulong
      const m = r.match(/^(.*)u([^aeiou]*)$/); if (m) out.add(m[1] + 'o' + m[2]);
      if (r.endsWith('r')) out.add(r.slice(0, -1) + 'd'); // bayaran → bayad
      if (s === 'hin' || s === 'han') { const m2 = r.match(/^(.*)u$/); if (m2) out.add(m2[1] + 'o'); }
    }
    // infixes -um- / -in- after the first consonant; or as prefix before vowels
    if (w.length > 4 && !isV(w[0]) && (w.slice(1, 3) === 'um' || w.slice(1, 3) === 'in')) out.add(w[0] + w.slice(3));
    if (w.length > 4 && (w.startsWith('um') || w.startsWith('in')) && isV(w[2])) out.add(w.slice(2));
    if (w.startsWith('ni') && w.length > 4) out.add(w.slice(2)); // niluto → luto
    // partial reduplication: kakain → kain, iinom → inom, nililinis → linis
    if (w.length > 4) {
      if (isV(w[0]) && w[0] === w[1]) out.add(w.slice(1));
      if (!isV(w[0]) && isV(w[1]) && w.slice(0, 2) === w.slice(2, 4)) out.add(w.slice(2));
    }
    // full reduplication: paulit-ulit / dahandahan
    const half = w.length / 2;
    if (Number.isInteger(half) && w.slice(0, half) === w.slice(half)) out.add(w.slice(0, half));
    return out;
  }
  App.findRoots = (word) => {
    const w0 = flat(word);
    if (!w0) return [];
    const found = new Set(), seenW = new Set([w0]);
    let frontier = [w0];
    for (let depth = 0; depth < 4 && frontier.length; depth++) {
      const next = [];
      for (const w of frontier) for (const v of variants(w)) {
        if (seenW.has(v)) continue; seenW.add(v);
        if (byRoot.has(v) || (byHead.has(v) && v.length >= 4)) found.add(v);
        next.push(v);
      }
      frontier = next;
    }
    if (byRoot.has(w0)) found.add(w0);
    return [...found];
  };

  /* ---------- Search ---------- */
  function score(hay, q) {
    if (!hay) return 0;
    if (hay === q) return 100;
    if (hay.startsWith(q)) return 70;
    const re = new RegExp('(^|[^a-z])' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    if (re.test(hay)) return 50;
    if (hay.includes(q)) return 25;
    return 0;
  }
  App.searchDict = (q, dir) => {
    const nq = norm(q), fq = flat(q);
    if (!nq) return [];
    const res = new Map();
    const add = (e, s, why) => { const cur = res.get(e.id); if (!cur || cur.s < s) res.set(e.id, { e, s, why }); };
    for (const e of DICT) {
      if (dir !== 'en') { const s = Math.max(score(e.ftl, fq), score(norm(e.tl), nq)); if (s) add(e, s + 5, ''); }
      if (dir !== 'tl') { const s = score(e.nen, nq); if (s) add(e, s, ''); }
    }
    if (dir !== 'en' && fq.length >= 4) {
      for (const r of App.findRoots(q)) {
        const why = 'root: ' + r;
        (byRoot.get(r) || []).forEach((e) => add(e, e.pos === 'v' ? 63 : 60, why));
        (byHead.get(r) || []).forEach((e) => add(e, 65, why));
      }
    }
    return [...res.values()].sort((a, b) => b.s - a.s || a.e.tl.length - b.e.tl.length);
  };

  // Universal index of everything else
  const IDX = [];
  const push = (type, title, sub, text, route) => IDX.push({ type, title, sub, text: norm(title + ' ' + sub + ' ' + text), route });
  (window.LESSONS || []).forEach((l) => push('Lesson', l.title, l.summary, l.body.replace(/<[^>]+>/g, ' '), '#/lessons/' + l.id));
  (window.READING || []).forEach((r) => push('Reading', r.title, r.titleEn, r.tl.join(' ') + ' ' + r.en.join(' '), '#/reading/' + r.id));
  (window.DIALOGUES || []).forEach((d) => push('Dialogue', d.title, d.level, d.lines.map((l) => l[1] + ' ' + l[2]).join(' '), '#/speak/' + d.id));
  (window.PSYCH_SECTIONS || []).forEach((s) => {
    push('Psychiatry', s.title, s.group, s.intro, '#/psych/s/' + s.id);
    s.phrases.forEach((p, i) => push('Phrase', p.f, p.en, (p.c || '') + ' ' + (p.n || ''), '#/psych/s/' + s.id + '?p=' + i));
  });
  (window.PSYCH_CASES || []).forEach((c) => push('Case', c.title, c.setting, '', '#/psych/case/' + c.id));
  (window.VERBS || []).forEach((v) => push('Verb', v.r, v.en, (v.ex || ''), '#/verbs/' + v.r));
  [['Flashcards', '#/flash'], ['Verb trainer', '#/verbs'], ['Placement test', '#/placement'], ['Progress', '#/progress'], ['Settings', '#/settings'], ["What's New", '#/new'], ['About', '#/about'], ['Dictionary', '#/dict'], ['Interpretation drill', '#/psych/interp'], ['De-escalation checklist', '#/psych/deesc'], ['Printable handout', '#/psych/handout']]
    .forEach(([t, r]) => push('Page', t, '', '', r));
  App.searchAll = (q, limit) => {
    const nq = norm(q);
    if (nq.length < 1) return [];
    const words = nq.split(/\s+/).filter(Boolean);
    const out = [];
    App.searchDict(q).slice(0, limit ? 6 : 60).forEach((r) => out.push({ type: 'Dictionary', title: r.e.tl, sub: r.e.en + (r.why ? ' · ' + r.why : ''), route: '#/dict/' + r.e.id, s: r.s + 20 }));
    IDX.forEach((it) => {
      let s = 0;
      for (const w of words) { const ws = score(it.text, w); if (!ws) { s = 0; break; } s += ws; }
      if (norm(it.title).includes(nq)) s += 40;
      if (s) out.push(Object.assign({ s: s / words.length }, it));
    });
    out.sort((a, b) => b.s - a.s);
    return limit ? out.slice(0, limit) : out;
  };

  /* ---------- Cards and decks ---------- */
  App.cardFor = (id) => {
    if (id.startsWith('d')) { const e = App.dictById[id]; return e && { id, tl: e.tl, en: e.en, note: e.note, sub: POS[e.pos] || '' }; }
    if (id.startsWith('p:')) {
      const [, sid, i] = id.split(':');
      const s = (window.PSYCH_SECTIONS || []).find((x) => x.id === sid);
      const p = s && s.phrases[+i];
      if (!p) return null;
      return { id, tl: state.settings.register === 'c' ? p.c || p.f : p.f, en: p.en, note: p.n, sub: s.title, alt: state.settings.register === 'c' ? p.f : p.c };
    }
    if (id.startsWith('v:')) {
      const [, r, af, asp] = id.split(':');
      const v = (window.VERBS || []).find((x) => x.r === r);
      const f = v && App.verbForms(v)[af];
      if (!f) return null;
      return { id, tl: f[asp], en: v.en + ' — ' + Conj.ASPECTS[asp].toLowerCase(), sub: Conj.FOCUS[af] || '' };
    }
    return null;
  };
  App.verbForms = (v) => {
    const out = {};
    v.a.forEach((af) => { const c = Conj.conjugate(v.r, af); out[af] = c; });
    Object.entries(v.o || {}).forEach(([af, arr]) => { out[af] = { inf: arr[0], com: arr[1], inc: arr[2], con: arr[3] }; });
    return out;
  };

  App.decks = () => {
    const decks = [];
    const catGroups = {};
    DICT.forEach((e) => { (catGroups[e.cat] = catGroups[e.cat] || []).push(e.id); });
    const psychAll = [];
    (window.PSYCH_SECTIONS || []).forEach((s) => s.phrases.forEach((p, i) => psychAll.push('p:' + s.id + ':' + i)));
    decks.push({ id: 'due', name: 'All due reviews', group: 'Review', ids: Object.keys(state.srs).filter((k) => state.srs[k].due <= Date.now()) });
    decks.push({ id: 'mistakes', name: 'My mistakes', group: 'Review', ids: state.mistakes.slice() });
    decks.push({ id: 'psych', name: 'Psychiatry phrases (all)', group: 'Psychiatry', ids: psychAll });
    (window.PSYCH_SECTIONS || []).forEach((s) => decks.push({ id: 'ps-' + s.id, name: s.title, group: 'Psychiatry', ids: s.phrases.map((p, i) => 'p:' + s.id + ':' + i) }));
    const clinicalCats = ['health', 'mind', 'risk', 'substance', 'clinical', 'stigma', 'beliefs', 'emotions'];
    Object.keys(App.CATS).forEach((c) => { if (catGroups[c]) decks.push({ id: 'c-' + c, name: App.CATS[c], group: clinicalCats.includes(c) ? 'Clinical vocabulary' : 'Vocabulary', ids: catGroups[c] }); });
    const vids = [];
    (window.VERBS || []).forEach((v) => { const f = App.verbForms(v); Object.keys(f).forEach((af) => ['com', 'inc', 'con'].forEach((asp) => vids.push('v:' + v.r + ':' + af + ':' + asp))); });
    decks.push({ id: 'verbs', name: 'Verb forms', group: 'Vocabulary', ids: vids });
    return decks;
  };

  /* ---------- Spaced repetition (SM-2 variant) ---------- */
  App.srsQueue = (ids) => {
    const now = Date.now();
    const due = ids.filter((id) => state.srs[id] && state.srs[id].due <= now);
    if (state.newToday.date !== today()) state.newToday = { date: today(), n: 0 };
    const allowance = Math.max(0, state.settings.newPerDay - state.newToday.n);
    const fresh = ids.filter((id) => !state.srs[id]).slice(0, Math.min(allowance, 20));
    return shuffle(due).concat(fresh);
  };
  App.srsGrade = (id, g) => { // g: 0 again, 1 hard, 2 good, 3 easy
    const isNew = !state.srs[id];
    const c = state.srs[id] || { e: 2.5, i: 0, r: 0, due: 0 };
    if (isNew) state.newToday.n++;
    if (g === 0) { c.r = 0; c.i = 0; c.e = Math.max(1.3, c.e - 0.2); c.due = Date.now() + 60 * 1000; }
    else {
      c.r++;
      if (c.r === 1) c.i = g === 3 ? 3 : 1;
      else if (c.r === 2) c.i = g === 1 ? 3 : 6;
      else c.i = Math.round(c.i * (g === 1 ? 1.2 : g === 3 ? c.e * 1.3 : c.e));
      c.e = Math.max(1.3, c.e + (g === 1 ? -0.15 : g === 3 ? 0.15 : 0));
      c.due = Date.now() + c.i * 864e5;
    }
    state.srs[id] = c;
    state.stats.reviews++;
    App.recordAnswer(g > 0, id);
  };
  App.nextLabel = (id, g) => {
    const c = state.srs[id] || { e: 2.5, i: 0, r: 0 };
    if (g === 0) return '1 min';
    let i;
    if (c.r === 0) i = g === 3 ? 3 : 1; else if (c.r === 1) i = g === 1 ? 3 : 6; else i = Math.round(c.i * (g === 1 ? 1.2 : g === 3 ? c.e * 1.3 : c.e));
    return i < 30 ? i + 'd' : i < 365 ? Math.round(i / 30) + 'mo' : (i / 365).toFixed(1) + 'y';
  };

  /* ---------- Speech ----------
     1. Recorded audio pack (audio/manifest.json + audio/<key>.mp3), natural Filipino voice.
     2. Device Filipino voice, if installed.
     3. A device voice whose language reads Tagalog spelling closely (Indonesian, Malay, Spanish), never English. */
  const synth = window.speechSynthesis;
  App.voices = () => (synth ? synth.getVoices() : []);
  App.filipinoVoices = () => App.voices().filter((v) => /^(fil|tl)([-_]|$)/i.test(v.lang) || /filipino|tagalog/i.test(v.name));
  const NEAR = [/^id([-_]|$)/i, /^ms([-_]|$)/i, /^es([-_]|$)/i, /^it([-_]|$)/i];
  App.bestTagalogVoice = () => {
    const all = App.voices();
    const chosen = all.find((x) => x.name === state.settings.voice);
    if (chosen) return { voice: chosen, kind: 'chosen' };
    const fil = App.filipinoVoices();
    if (fil.length) return { voice: fil.find((v) => /natural|neural|online|google/i.test(v.name)) || fil[0], kind: 'filipino' };
    for (const re of NEAR) { const v = all.filter((x) => re.test(x.lang)); if (v.length) return { voice: v.find((x) => x.localService) || v[0], kind: 'near' }; }
    return { voice: null, kind: 'none' };
  };
  App.canSpeak = !!synth;
  App.pack = { keys: new Set(), info: null, ready: false };
  App.loadAudioPack = () => fetch('audio/manifest.json', { cache: 'no-cache' }).then((r) => (r.ok ? r.json() : null)).then((m) => {
    if (m && Array.isArray(m.keys) && m.keys.length) { App.pack.keys = new Set(m.keys); App.pack.info = m; }
  }).catch(() => {}).finally(() => { App.pack.ready = true; });
  App.hasClip = (text) => state.settings.voiceSource !== 'device' && App.pack.keys.has(AudioKey(text));
  let current = null; // { audio } or { utter }
  const haltCurrent = () => {
    if (current && current.audio) { try { current.audio.pause(); } catch (e) {} }
    if (current && current.done) current.done();
    current = null;
    if (synth) synth.cancel();
  };
  App.stopSpeech = () => { App._seq = (App._seq || 0) + 1; haltCurrent(); };
  // Speak Tagalog text; resolves when finished. opts.lang = 'en' speaks English with the device voice.
  App.speakAsync = (text, opts) => new Promise((resolve) => {
    opts = opts || {};
    haltCurrent();
    const rate = opts.rate || state.settings.rate || 0.85;
    let finished = false;
    const done = () => { if (!finished) { finished = true; resolve(); } };
    if (opts.lang !== 'en' && App.hasClip(text)) {
      const a = new Audio('audio/' + AudioKey(text) + '.mp3');
      a.playbackRate = Math.min(1.4, Math.max(0.6, rate / 0.85));
      a.preservesPitch = true;
      current = { audio: a, done };
      a.onended = done; a.onerror = () => { App.pack.keys.delete(AudioKey(text)); done(); };
      a.play().catch(done);
      return;
    }
    if (!synth) { if (!opts.quiet) App.toast('Audio is not available in this browser.'); return setTimeout(done, 800); }
    const u = new SpeechSynthesisUtterance(text);
    if (opts.lang === 'en') u.lang = 'en-US';
    else { const b = App.bestTagalogVoice(); if (b.voice) { u.voice = b.voice; u.lang = b.voice.lang; } else u.lang = 'fil-PH'; }
    u.rate = rate;
    u.onend = done; u.onerror = done;
    current = { utter: u, done };
    setTimeout(done, 15000 + text.length * 120);
    synth.speak(u);
  });
  App.speak = (text, opts) => { App._seq = (App._seq || 0) + 1; App.speakAsync(text, opts); };
  App.speakAll = async (texts, gapMs) => { const tok = (App._seq = (App._seq || 0) + 1); for (const t of texts) { if (App._seq !== tok) return; await App.speakAsync(t); if (gapMs) await new Promise((r) => setTimeout(r, gapMs)); } };
  // Describes what the learner will hear, for notices and settings.
  App.audioStatus = () => {
    const pack = App.pack.info && state.settings.voiceSource !== 'device';
    const b = App.bestTagalogVoice();
    return { pack: !!pack, packCount: App.pack.keys.size, voiceKind: b.kind, voiceName: b.voice ? b.voice.name + ' (' + b.voice.lang + ')' : '' };
  };
  if (synth) synth.onvoiceschanged = () => { App.voicesReady = true; };

  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  App.canListen = !!SR;
  App.listen = (onResult, onEnd) => {
    if (!SR) return null;
    const r = new SR();
    r.lang = 'fil-PH'; r.interimResults = false; r.maxAlternatives = 3;
    r.onresult = (ev) => { const alts = [...ev.results[0]].map((a) => a.transcript); onResult(alts); };
    r.onerror = (ev) => { App.toast(ev.error === 'not-allowed' ? 'Microphone permission was denied.' : 'Speech recognition stopped: ' + ev.error); };
    r.onend = () => onEnd && onEnd();
    try { r.start(); } catch (e) { return null; }
    return r;
  };
  // Word-level similarity 0–100
  App.similarity = (a, b) => {
    const A = norm(a).replace(/[^a-z0-9\s-]/g, '').split(/[\s-]+/).filter(Boolean);
    const B = norm(b).replace(/[^a-z0-9\s-]/g, '').split(/[\s-]+/).filter(Boolean);
    if (!A.length) return 0;
    const dp = Array.from({ length: A.length + 1 }, (_, i) => [i].concat(Array(B.length).fill(0)));
    for (let j = 1; j <= B.length; j++) dp[0][j] = j;
    for (let i = 1; i <= A.length; i++) for (let j = 1; j <= B.length; j++)
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + (A[i - 1] === B[j - 1] ? 0 : 1));
    return Math.max(0, Math.round(100 * (1 - dp[A.length][B.length] / Math.max(A.length, B.length))));
  };

  // Record and compare (MediaRecorder)
  App.canRecord = !!(navigator.mediaDevices && window.MediaRecorder);
  App.record = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const rec = new MediaRecorder(stream);
    const chunks = [];
    rec.ondataavailable = (e) => chunks.push(e.data);
    const done = new Promise((res) => (rec.onstop = () => { stream.getTracks().forEach((t) => t.stop()); res(URL.createObjectURL(new Blob(chunks, { type: rec.mimeType || 'audio/webm' }))); }));
    rec.start();
    return { stop: () => { rec.stop(); return done; } };
  };

  /* ---------- Toast ---------- */
  let toastTimer;
  App.toast = (msg) => {
    let t = document.querySelector('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(() => (t.hidden = true), 2600);
  };

  /* ---------- Icons ---------- */
  const I = (p) => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>';
  App.icons = {
    home: I('<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/>'),
    book: I('<path d="M4 4h10a4 4 0 014 4v12H8a4 4 0 01-4-4z"/><path d="M4 16a4 4 0 014-4h10"/>'),
    cards: I('<rect x="3" y="6" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 012 2v12"/>'),
    verb: I('<path d="M4 7h16M4 12h10M4 17h6"/><path d="M17 14l3 3-3 3"/>'),
    lesson: I('<path d="M2 8l10-5 10 5-10 5z"/><path d="M6 10v5c3 2 9 2 12 0v-5"/>'),
    read: I('<path d="M2 5h7a3 3 0 013 3v12a2 2 0 00-2-2H2z"/><path d="M22 5h-7a3 3 0 00-3 3v12a2 2 0 012-2h8z"/>'),
    speak: I('<path d="M21 12a8 8 0 01-11.6 7.1L3 21l1.9-6.4A8 8 0 1121 12z"/>'),
    brain: I('<path d="M9 4a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 002 5 3 3 0 003 3h1V4z"/><path d="M15 4a3 3 0 013 3 3 3 0 012 5 3 3 0 01-2 5 3 3 0 01-3 3h-1V4z"/>'),
    chart: I('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
    gear: I('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z"/>'),
    spark: I('<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>'),
    info: I('<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>'),
    target: I('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>'),
    sound: I('<path d="M11 5L6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 010 7M18.5 5.5a9 9 0 010 13"/>'),
    mic: I('<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/>'),
    rec: I('<circle cx="12" cy="12" r="7"/>'),
    plus: I('<path d="M12 5v14M5 12h14"/>'),
    check: I('<path d="M5 12l5 5L20 7"/>'),
    sun: I('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
    moon: I('<path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/>'),
    eye: I('<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>'),
    case: I('<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2"/><path d="M12 11v5M9.5 13.5h5"/>'),
    ear: I('<path d="M6 9a6 6 0 1112 0c0 3-2 4-3 5.5S14 18 12 19.5 8 20 8 18"/><path d="M10 9a2 2 0 114 0c0 1.5-1.5 2-1.5 3"/>'),
    search: I('<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>')
  };
  App.sayBtn = (text, label) => '<button class="say" data-say="' + esc(text) + '" title="Listen" aria-label="Listen' + (label ? ': ' + esc(label) : '') + '">' + App.icons.sound + '</button>';
})();
