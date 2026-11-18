#!/usr/bin/env node
/* Data integrity checks for Usap Tayo. Run from anywhere:
     node tests/data_check.js /path/to/tagalog-repo
   Exit code 0 = all checks pass. */
const fs = require('fs'), path = require('path'), vm = require('vm');
const repo = path.resolve(process.argv[2] || '.');
const ctx = { console, TextEncoder, Buffer, localStorage: { getItem: () => null, setItem() {} }, navigator: {}, document: { querySelector: () => null }, fetch: () => Promise.reject(new Error('no fetch')) };
ctx.window = ctx; vm.createContext(ctx);
const html = fs.readFileSync(path.join(repo, 'index.html'), 'utf8');
// 3.10.0: pictures/art-*.js (the line art of the picture sets) load too. Each picture, sign and panel object is remembered with
// the file that added it, so the count rules of a file marked "seed: writers replace" are warnings, not failures.
const scripts = [...html.matchAll(/src="((?:js|data|pictures)\/[^"]+)"/g)].map((m) => m[1]).filter((f) => f.startsWith('data/') || f.includes('/data/') || f.startsWith('pictures/') || /conjugate|audio-key|pronounce|lang|core|discharge-practice|mse-practice/.test(f));
const fileOf = new Map(), seedFiles = new Set(), artFile = {};
const noteObj = (f, o) => { if (o && typeof o === 'object' && !fileOf.has(o)) fileOf.set(o, f); };
for (const f of scripts) {
  const src = fs.readFileSync(path.join(repo, f), 'utf8'), base = path.basename(f);
  if (src.includes('seed: writers replace')) seedFiles.add(base);
  vm.runInContext(src, ctx, { filename: f });
  (Array.isArray(ctx.PICTURE_SETS) ? ctx.PICTURE_SETS : []).forEach((x) => noteObj(base, x));
  (ctx.LESSONS || []).forEach((x) => noteObj(base, x));
  { const sg = ctx.SIGNS || {}; (sg.groups || []).forEach((x) => noteObj(base, x)); (sg.signs || []).forEach((x) => noteObj(base, x)); }
  (Array.isArray(ctx.SIGN_PANELS) ? ctx.SIGN_PANELS : []).forEach((x) => noteObj(base, x));
  if (ctx.PICTURE_BODYMAP) noteObj(base, ctx.PICTURE_BODYMAP);
  Object.keys(ctx.PICTURE_ART || {}).forEach((k) => { if (!artFile[k]) artFile[k] = base; });
}
const C = ctx;
let fails = 0; const bad = (m) => { fails++; console.log('FAIL', m); };
const sec = (id) => C.PSYCH_SECTIONS.find((s) => s.id === id);
const ref = (r) => { const [s, i] = r.split(':'); return sec(s) && sec(s).phrases[+i]; };

// Point board / listening drill replies (3.1.0): every section covered, every item [tl, en, note?, say?], no duplicate Tagalog within a list.
if (C.PSYCH_ANSWERS) {
  { const missing = C.PSYCH_SECTIONS.filter((s) => !(C.PSYCH_ANSWERS.sections[s.id] || []).length && !s.phrases.some((p) => p.answers)).map((s) => s.id); if (missing.length) console.log('WARN sections with only general replies on the point board (' + missing.length + '): ' + missing.join(', ')); }
  const lists = C.PSYCH_ANSWERS.common.map((g) => [g.title, g.items]).concat(Object.entries(C.PSYCH_ANSWERS.sections));
  lists.forEach(([name, items]) => { const seen = new Set(); items.forEach((it, i) => { if (!Array.isArray(it) || !it[0] || !it[1]) bad('psych-answers ' + name + ' item ' + i); else if (seen.has(it[0])) bad('psych-answers duplicate in ' + name + ': ' + it[0]); seen.add(it[0]); if (it[2] && it[2].split(/\s+/).length > 16) bad('psych-answers note too long ' + name + ' ' + i); }); });
  Object.keys(C.PSYCH_ANSWERS.sections).forEach((id) => { if (!sec(id)) bad('psych-answers unknown section ' + id); });
} else bad('PSYCH_ANSWERS missing');
// Listening exercises (3.5.0): speakers, lines, quiz indexes, dictation lines, unique ids.
{ const L = C.LISTENING || []; if (!L.length) bad('LISTENING missing'); const ids = new Set(), rids = new Set((C.READING || []).map((r) => r.id));
  L.forEach((x) => {
    if (ids.has(x.id)) bad('listening duplicate id ' + x.id); ids.add(x.id);
    ['id', 'level', 'kind', 'title', 'titleEn', 'setting'].forEach((k) => { if (!x[k]) bad('listening ' + x.id + ' missing ' + k); });
    if (!x.lines.length || x.lines.some((l) => !(l[0] >= 0 && l[0] < x.speakers.length) || !l[1] || !l[2])) bad('listening lines ' + x.id);
    if (!x.q.length || x.q.some((q) => !(q[2] >= 0 && q[2] < q[1].length) || !q[3])) bad('listening quiz ' + x.id);
    if (!x.dictation.length || x.dictation.some((i) => !x.lines[i])) bad('listening dictation ' + x.id);
    // 3.6.0: the voice mangles acronyms and abbreviations (PRN, BP, Dr., Doc, Bed 7); such lines need a respelled 4th item.
    x.lines.forEach((l, i) => { const t = l[1].replace(/\([^)]*\)/g, ''); if (!l[3] && (/\b[A-Z]{2,}\b|\bDra?\.|\bDoc\b|\b(Bed|Gate)\s*\d/.test(t))) bad('listening ' + x.id + ' line ' + (i + 1) + ' needs a spoken version (4th item): ' + t); if (l[3] && /\b[A-Z]{2,}\b|\bDoc\b|\bDra?\./.test(l[3])) bad('listening ' + x.id + ' line ' + (i + 1) + ' spoken version still has an abbreviation'); });
  });
}
C.READING.forEach((r) => { if (r.gloss.some((g) => !g[0] || !g[1]) || r.q.some((q) => !q[3] && q[3] !== '')) bad('reading gloss/q ' + r.id); });
C.LESSONS.forEach((l) => l.quiz.forEach((q) => { if (q[2] >= q[1].length) bad('lesson quiz index ' + l.id); }));
C.READING.forEach((r) => { if (r.tl.length !== r.en.length) bad('reading paragraphs ' + r.id); r.q.forEach((q) => { if (q[2] >= q[1].length) bad('reading quiz ' + r.id); }); });
C.PSYCH_CASES.forEach((c) => c.steps.forEach((s, i) => { if (!s.choices.some((x) => x.score === 2)) bad('case without best choice ' + c.id + ' step ' + i); }));
C.PLACEMENT.forEach((q, i) => { if (q[3] >= q[2].length) bad('placement ' + i); });
C.PSYCH_SECTIONS.forEach((s) => s.phrases.forEach((p, i) => { if (!p.en || !p.f) bad('phrase missing en/f ' + s.id + ':' + i); }));
C.PSYCH_FLOW.concat(C.PSYCH_FLOW_EXTRA).forEach((st) => { st.sections.forEach((s) => { if (!sec(s)) bad('flow section ' + s); }); st.key.forEach((r) => { if (!ref(r)) bad('flow key ' + r); }); });
C.PSYCH_MSE.forEach((d) => d.ask.concat(d.terms).forEach((r) => { if (!ref(r)) bad('MSE ref ' + r); }));
C.PSYCH_DEESC.steps.concat(C.PSYCH_DEESC.after).forEach((st) => st.say.forEach((r) => { if (!ref(r)) bad('deesc ref ' + r); }));
C.PSYCH_DISCHARGE.fields.forEach((f) => f.refs.forEach((r) => { if (!ref(r)) bad('discharge ref ' + r); }));
(C.PSYCH_DISCHARGE_CASES || []).forEach((c) => {
  const df = (id) => C.PSYCH_DISCHARGE.fields.find((f) => f.id === id);
  C.PSYCH_DISCHARGE.fields.filter((f) => f.kind !== 'sign').forEach((f) => { if (!c.fields[f.id]) bad('dcase ' + c.id + ' missing field ' + f.id); });
  if (!c.decision || typeof c.decision.discharge !== 'boolean' || !c.decision.why) bad('dcase ' + c.id + ' missing decision');
  Object.entries(c.fields).forEach(([id, cf]) => {
    const f = df(id); if (!f) return bad('dcase ' + c.id + ' unknown field ' + id);
    const tag = 'dcase ' + c.id + '.' + id;
    const picks = [].concat(...(cf.need || []).map((n) => (Array.isArray(n) ? n : [n])), cf.ok || [], Object.keys(cf.wrong || {}));
    picks.forEach((p) => { if (!f.picks.includes(p)) bad(tag + ' pick not on form: ' + p); });
    if (!(cf.need || []).length) bad(tag + ' no required picks');
    Object.keys(cf.ans || {}).forEach((k) => { if (+k >= f.ask.length) bad(tag + ' answer index ' + k); });
    (cf.key || []).forEach((k) => { if (k >= f.ask.length || !(cf.ans || {})[k]) bad(tag + ' key question ' + k); });
    if (!cf.doc || !cf.why) bad(tag + ' missing doc/why');
    // the model's own picks must grade as a full match
    const model = new Set((cf.need || []).map((n) => (Array.isArray(n) ? n[0] : n)));
    if (C.App.dischargeGrade && C.App.dischargeGrade(cf, model).score !== 2) bad(tag + ' model does not grade 2');
  });
});
if (C.PSYCH_ADMIT_MSE) C.PSYCH_ADMIT_MSE.domains.forEach((d) => d.ask.forEach((r) => { if (!ref(r)) bad('admit MSE ref ' + d.id + ' ' + r); }));
(C.PSYCH_MSE_CASES || []).forEach((c) => {
  const dom = (id) => C.PSYCH_ADMIT_MSE.domains.find((d) => d.id === id);
  if (!c.cc || !ref(c.cc.ask) || c.cc.opts.filter((o) => o[1]).length !== 1) bad('mcase ' + c.id + ' chief complaint');
  if (!(C.PSYCH_DISCHARGE_CASES || []).some((x) => x.id === c.id)) bad('mcase ' + c.id + ' has no matching discharge case');
  C.PSYCH_ADMIT_MSE.domains.forEach((d) => { if (!c.domains[d.id]) bad('mcase ' + c.id + ' missing domain ' + d.id); });
  Object.entries(c.domains).forEach(([id, cd]) => {
    const d = dom(id); if (!d) return bad('mcase ' + c.id + ' unknown domain ' + id);
    const tag = 'mcase ' + c.id + '.' + id;
    [].concat(...(cd.need || []).map((n) => (Array.isArray(n) ? n : [n])), cd.ok || [], Object.keys(cd.wrong || {})).forEach((p) => { if (!d.picks.includes(p)) bad(tag + ' pick not in domain: ' + p); });
    if (!(cd.need || []).length) bad(tag + ' no required picks');
    Object.keys(cd.ans || {}).forEach((k) => { if (+k >= d.ask.length) bad(tag + ' answer index ' + k); });
    (cd.key || []).forEach((k) => { if (k >= d.ask.length || !(cd.ans || {})[k]) bad(tag + ' key question ' + k); });
    if (!cd.doc || !cd.why) bad(tag + ' missing doc/why');
    if (cd.ev && cd.ev.opts.filter((o) => o[1]).length !== 1) bad(tag + ' evidence needs exactly one correct option');
    if (d.kind !== 'observe' && !Object.keys(cd.ans || {}).length) bad(tag + ' ask domain without answers');
    const model = new Set((cd.need || []).map((n) => (Array.isArray(n) ? n[0] : n)));
    if (C.App.dischargeGrade(cd, model).score !== 2) bad(tag + ' model does not grade 2');
  });
});
C.VERBS.forEach((v) => { const f = C.App.verbForms(v); if (!Object.keys(f).length) bad('verb has no forms ' + v.r); });
['kinakain:kain', 'binubulungan:bulong', 'nalulungkot:lungkot', 'iniinom:inom'].forEach((t) => { const [w, r] = t.split(':'); if (!C.App.findRoots(w).includes(r)) bad('stemmer ' + w + ' -> ' + r); });

// Audio pack: every speakable text should have a clip (after the GitHub job has run).
// 3.6.3: how the voice says every all-caps word (tools/caps.json, written by collect-texts.js). Unknown capitals are
// spelled letter by letter by default; read the list when content adds one, in case it should be said as a word.
{ const cp = path.join(repo, 'tools', 'caps.json');
  if (fs.existsSync(cp)) { const c = JSON.parse(fs.readFileSync(cp, 'utf8')); console.log('INFO all-caps words, as spoken:', Object.entries(c).map(([w, s]) => w + '→' + s).join(' ')); } }
const texts = path.join(repo, 'tools', 'texts.json'), man = path.join(repo, 'audio', 'manifest.json');
if (fs.existsSync(texts) && fs.existsSync(man)) {
  const want = JSON.parse(fs.readFileSync(texts)), have = new Set(JSON.parse(fs.readFileSync(man)).keys);
  want.forEach((t) => { if (C.AudioKey(t.text) !== t.key) bad('audio key mismatch ' + t.text); });
  const missing = want.filter((t) => !have.has(t.key));
  if (missing.length) console.log('WARN', missing.length, 'texts without audio yet (push to main and let the audio job run):', missing.slice(0, 5).map((t) => t.text).join(' | '));
}
// Panlapi trainer: every seg reassembles into its word, types exist, kabilaan has a sub, focus pairs differ.
if (C.AFFIX_ITEMS) {
  const types = new Set(C.AFFIX_TYPES.map((t) => t.id)), seen = new Set();
  C.AFFIX_ITEMS.forEach((it) => {
    if (!types.has(it.t)) bad('affix type ' + it.w);
    if (it.seg.replace(/[[\]{}<>]/g, '') !== it.w) bad('affix seg ' + it.w);
    if (it.t === 'kabilaan' && !/^(uh|gh|ug)$/.test(it.sub || '')) bad('affix sub ' + it.w);
    if (!/\[/.test(it.seg)) bad('affix seg has no affix ' + it.w);
    if (seen.has(it.w)) bad('affix dup ' + it.w); seen.add(it.w);
    if (!it.en || !it.r) bad('affix fields ' + it.w);
  });
  C.AFFIX_FOCUS_DRILL.forEach((f) => { if (!f.q.includes('____') || f.ok === f.no || !f.why) bad('affix focus ' + f.q); });
  C.AFFIX_LIST.forEach((a) => { if (!types.has(a.t)) bad('affix list type ' + a.a); });
}
// Language drills (3.7.0): gap answers are in their option set, lessons exist, word-order alternatives use the same tiles.
if (C.DRILL_CLOZE) {
  const lessonIds = new Set(C.LESSONS.map((l) => l.id)), seenQ = new Set();
  Object.entries(C.DRILL_CLOZE_SETS).forEach(([k, st]) => { if (!lessonIds.has(st.lesson)) bad('cloze set lesson ' + k); });
  C.DRILL_CLOZE.forEach((it) => {
    const st = C.DRILL_CLOZE_SETS[it.set];
    if (!st || !st.opts.includes(it.a)) bad('cloze answer not in set: ' + it.q);
    if ((it.q.match(/____/g) || []).length !== 1 || !it.en || !it.why) bad('cloze fields: ' + it.q);
    if (seenQ.has(it.q + it.a)) bad('cloze dup: ' + it.q); seenQ.add(it.q + it.a);
  });
  const key = (t) => t.map((w) => w.toLowerCase()).sort().join('|');
  C.DRILL_BUILD.forEach((it) => {
    if (!it.en || !it.why || !it.end || it.t.length < 3) bad('build fields: ' + it.en);
    if (new Set(it.t.map((w) => w.toLowerCase())).size !== it.t.length) bad('build repeated tile: ' + it.en);
    (it.alt || []).forEach((alt) => { if (key(alt) !== key(it.t)) bad('build alt uses other tiles: ' + it.en); if (alt.join(' ').toLowerCase() === it.t.join(' ').toLowerCase()) bad('build alt same as model: ' + it.en); });
  });
}
// 3.8.0: typed drills and word sets.
{
  const lessonIds = new Set(C.LESSONS.map((l) => l.id));
  ['enclitics', 'time-words', 'intensifiers', 'focus-an-i', 'nominalising', 'recent-past'].forEach((id) => { if (!lessonIds.has(id)) bad('lesson missing ' + id); });
  const seenD = new Set();
  (C.DRILL_DICTATION || []).forEach((it) => {
    if (!it.tl || !it.en || !/^(num|time|dose)$/.test(it.set)) bad('dictation fields: ' + it.tl);
    if (/\d/.test(it.tl)) bad('dictation line has digits (write numbers as words): ' + it.tl);
    if (it.n && !/^[\d:]+$/.test(it.n)) bad('dictation figure: ' + it.tl);
    if (seenD.has(it.tl)) bad('dictation dup: ' + it.tl); seenD.add(it.tl);
  });
  if ((C.DRILL_DICTATION || []).length < 30) bad('DRILL_DICTATION missing or short');
  const seenT = new Set();
  (C.DRILL_TRANSLATE || []).forEach((it) => {
    if (!it.en || !Array.isArray(it.tl) || !it.tl.length || !/^(e|w)$/.test(it.set)) bad('translate fields: ' + it.en);
    if (new Set(it.tl).size !== it.tl.length) bad('translate repeated answer: ' + it.en);
    if (seenT.has(it.en)) bad('translate dup: ' + it.en); seenT.add(it.en);
  });
  if ((C.DRILL_TRANSLATE || []).length < 30) bad('DRILL_TRANSLATE missing or short');
  const roots = new Set();
  (C.WORD_FAMILIES || []).forEach((f) => {
    if (!f.r || !f.en || !Array.isArray(f.forms) || f.forms.length < 5) bad('word family needs 5+ forms (the drill takes 3 wrong options from the family): ' + f.r);
    if (roots.has(f.r)) bad('word family dup ' + f.r); roots.add(f.r);
    const tl = f.forms.map((x) => x[0]), en = f.forms.map((x) => x[1]);
    if (new Set(tl).size !== tl.length || new Set(en).size !== en.length || f.forms.some((x) => !x[0] || !x[1])) bad('word family forms ' + f.r);
    (f.rel || []).forEach((x) => { if (!x[0] || !x[1]) bad('word family rel ' + f.r); });
  });
  (C.WORD_LADDERS || []).forEach((l) => { if (!l.id || !l.en || l.steps.length < 3 || new Set(l.steps.map((x) => x[0])).size !== l.steps.length || l.steps.some((x) => !x[0] || !x[1])) bad('ladder ' + l.id); });
  const firstDaily = new Set();
  (C.WORD_SYNONYMS || []).forEach((x) => {
    if (!x.en || !(x.deep || []).length || !(x.daily || []).length || !(x.mix || []).length) bad('synonym set ' + x.en);
    if (firstDaily.has(x.daily[0])) bad('synonym set: first everyday word repeated (the drill uses it as the answer): ' + x.daily[0]); firstDaily.add(x.daily[0]);
    if (x.deep.some((d) => x.daily.includes(d))) bad('synonym deep = daily ' + x.en);
  });
  if (!(C.WORD_FAMILIES || []).length || !(C.WORD_LADDERS || []).length || (C.WORD_SYNONYMS || []).length < 4) bad('word sets missing');
  // Stigma rule: these words stay out of the new sets.
  const text = JSON.stringify([C.WORD_FAMILIES, C.WORD_LADDERS, C.WORD_SYNONYMS, C.DRILL_TRANSLATE, C.DRILL_DICTATION]).toLowerCase();
  ['baliw', 'adik', 'sira ulo', 'loko'].forEach((w) => { if (new RegExp('\\b' + w + '\\b').test(text)) bad('stigmatizing word in word sets: ' + w); });
}
// 3.9.0: focus pairs, find-the-mistake items, stress pairs, false friends, look-alikes, C1 placement band.
{
  const seenF = new Set();
  (C.DRILL_FOCUS || []).forEach((it) => {
    if (['a', 'ar', 'o', 'or', 'ax', 'ox', 'enA', 'enO', 'why'].some((k) => !it[k])) bad('focus fields: ' + it.a);
    if (new Set([it.a, it.o, it.ax, it.ox]).size !== 4 || it.ar === it.or || it.enA === it.enO) bad('focus pieces not distinct: ' + it.a + ' ' + it.ar);
    if (!/(^| )(ang|si|ako|ka|siya|kami|tayo|kayo|sila)( |$)/.test(it.ar) || !/(^| )(ang|si) /.test(it.or)) bad('focus markers: ' + it.a + ' ' + it.ar);
    if (seenF.has(it.a + it.ar)) bad('focus dup: ' + it.a); seenF.add(it.a + it.ar);
  });
  if ((C.DRILL_FOCUS || []).length < 20) bad('DRILL_FOCUS missing or short');
  const seenE = new Set();
  (C.DRILL_ERRORS || []).forEach((it) => {
    const n = (it.bad || '').split(' ').length;
    if (!it.bad || !it.fix || !it.en || !it.why || !/^(m|o|v)$/.test(it.set) || it.bad === it.fix) bad('errors fields: ' + it.bad);
    if (!Array.isArray(it.i) || !it.i.length || it.i.length >= n || it.i.some((k) => k < 0 || k >= n)) bad('errors word positions: ' + it.bad);
    if (seenE.has(it.bad)) bad('errors dup: ' + it.bad); seenE.add(it.bad);
  });
  if ((C.DRILL_ERRORS || []).length < 30 || ['m', 'o', 'v'].some((st) => (C.DRILL_ERRORS || []).filter((x) => x.set === st).length < 10)) bad('DRILL_ERRORS missing or a set has fewer than 10');
  const flat = (w) => w.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const seenS = new Set();
  (C.WORD_STRESS || []).forEach((x) => {
    if (!x.w || !Array.isArray(x.syl) || x.syl.join('') !== x.w) bad('stress syllables: ' + x.w);
    [x.a, x.b].forEach((m) => {
      if (!m || !m.en || !m.mark || !m.ex || !m.ex[0] || !m.ex[1]) { bad('stress fields: ' + x.w); return; }
      if (flat(m.mark) !== x.w) bad('stress mark is another word: ' + x.w + ' ' + m.mark);
      if (!new RegExp('(^|[^a-z])' + x.w + '([^a-z]|$)', 'i').test(m.ex[0])) bad('stress sentence lacks the word: ' + x.w);
      if (/[áéíóúàèìòùâêîôû]/i.test(m.ex[0])) bad('stress sentence has accents (write it the everyday way): ' + m.ex[0]);
    });
    if (x.a && x.b && (x.a.en === x.b.en || x.a.mark === x.b.mark || x.a.ex[0] === x.b.ex[0])) bad('stress pair not distinct: ' + x.w);
    if (seenS.has(x.w)) bad('stress dup: ' + x.w); seenS.add(x.w);
  });
  if ((C.WORD_STRESS || []).length < 20) bad('WORD_STRESS missing or short');
  const seenFF = new Set();
  (C.WORD_FALSE_FRIENDS || []).forEach((x) => {
    if (!x.tl || !/^(es|en)$/.test(x.from) || !x.src || !x.srcEn || !x.en || x.en === x.srcEn) bad('false friend fields: ' + x.tl);
    if (seenFF.has(x.tl)) bad('false friend dup: ' + x.tl); seenFF.add(x.tl);
  });
  if ((C.WORD_FALSE_FRIENDS || []).length < 20) bad('WORD_FALSE_FRIENDS missing or short');
  const groups = new Set((C.WORD_COGNATE_GROUPS || []).map((g) => g[0])), seenC = new Set(), per = {};
  (C.WORD_COGNATES || []).forEach((c) => {
    if (c.length !== 5 || c.some((v) => !v) || !/^(es|en)$/.test(c[1]) || !groups.has(c[4]) || /[\s-]/.test(c[0])) bad('look-alike fields: ' + c[0]);
    if (seenC.has(c[0]) || seenFF.has(c[0])) bad('look-alike dup or also a false friend: ' + c[0]); seenC.add(c[0]);
    (per[c[4]] = per[c[4]] || new Set()).add(c[3]);
  });
  Object.entries(per).forEach(([g, set]) => { if (set.size < 4) bad('look-alike group needs 4+ different meanings (the drill takes 3 wrong options from the group): ' + g); });
  (C.WORD_SPELLING || []).forEach((r) => { if (r.length !== 2 || !r[0] || !r[1]) bad('spelling rule ' + r[0]); });
  const text = JSON.stringify([C.DRILL_FOCUS, C.DRILL_ERRORS, C.WORD_STRESS, C.WORD_FALSE_FRIENDS, C.WORD_COGNATES]).toLowerCase();
  ['baliw', 'adik', 'sira ulo', 'loko'].forEach((w) => { if (new RegExp('\\b' + w + '\\b').test(text)) bad('stigmatizing word in 3.9.0 sets: ' + w); });
  const lessonIds = new Set(C.LESSONS.map((l) => l.id));
  const pl = {}; C.PLACEMENT.forEach((q) => { pl[q[0]] = (pl[q[0]] || 0) + 1; if (q[3] >= q[2].length) bad('placement answer index: ' + q[1]); });
  if (['A1', 'A2', 'B1', 'B2', 'C1'].some((lv) => pl[lv] !== 5) || C.PLACEMENT.length !== 25) bad('placement needs 5 questions in each of A1 to C1');
}
// Dictionary ids are saved in users' flashcard progress: every id in the snapshot must still be the same word.
// After adding words (at the END of js/data/dict-themes.js), refresh with: node tests/data_check.js <repo> --write-dict-ids
{
  const snapFile = path.join(__dirname, 'dict-ids.json');
  const now = Object.fromEntries(C.App.DICT.map((e) => [e.id, e.tl]));
  if (process.argv.includes('--write-dict-ids')) { fs.writeFileSync(snapFile, JSON.stringify(now, Object.keys(now).sort((a, b) => +a.slice(1) - +b.slice(1)), 0) + '\n'); console.log('wrote', snapFile); }
  else if (fs.existsSync(snapFile)) {
    const snap = JSON.parse(fs.readFileSync(snapFile, 'utf8'));
    const moved = Object.keys(snap).filter((id) => now[id] !== snap[id]);
    if (moved.length) bad('dictionary ids moved (' + moved.length + '), e.g. ' + moved[0] + ' was "' + snap[moved[0]] + '" now "' + now[moved[0]] + '"');
    if (C.App.DICT_LEGACY !== 1658) bad('legacy dictionary size changed: ' + C.App.DICT_LEGACY);
  } else console.log('WARN no tests/dict-ids.json snapshot');
}

// 3.10.0: picture words, body map, signs and buttons, picture lessons (PLAN-3.10 A1 to A5).
const P310 = { pictureSets: 0, pictureParts: 0, pictureSay: 0, signs: 0, panels: 0, panelTasks: 0 };
{
  const FO = (o) => fileOf.get(o) || '?';
  // Count rules: a failure, or a warning when the object comes from a seed file.
  const cnt = (o, m) => { const f = FO(o); if (seedFiles.has(f)) console.log('WARN ' + f + ' (seed): ' + m); else bad(f + ': ' + m); };
  const isStr = (v) => typeof v === 'string' && v.trim().length > 0, isNum = (v) => typeof v === 'number' && isFinite(v);
  const ACRO = new Set(['CR', 'OPD', 'ER', 'ATM', 'TV', 'ID', 'PWD', 'MRT', 'LRT', 'OB', 'IV', 'BP', 'ECG', 'ICU', 'NCMH', 'DOH', 'SM', 'OK', 'PM', 'AM', 'USB', 'LED', 'ON', 'OFF', 'TIMER', 'SWING', 'FAN', 'COOK', 'WARM', 'TEMP', 'HOT', 'COLD', 'PIN', 'X-RAY', 'CT', 'MRI', 'RH', 'BHW']);
  const capsWord = (t) => (String(t || '').match(/[A-Za-zÑñ-]+/g) || []).filter((w) => w.replace(/-/g, '').length >= 4 && w === w.toUpperCase() && /[A-Z]/.test(w) && !ACRO.has(w));
  const ACCENT = /[áéíóúàèìòùâêîôûÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛ]|[̀-ͯ]/;
  const spokenCheck = (o, where, t) => { if (!isStr(t)) return; const fo = typeof o === 'string' ? o : FO(o); const c = capsWord(t); if (c.length) bad(fo + ': ' + where + ' has an ALL-CAPS word (the voice spells it): ' + c.join(', ')); if (ACCENT.test(t)) bad(fo + ': ' + where + ' has an accent mark (the voice drops the vowel): ' + t); };
  const ART = C.PICTURE_ART || {};
  Object.entries(ART).forEach(([k, a]) => { if (!a || !Array.isArray(a.vb) || a.vb.length !== 2 || !isNum(a.vb[0]) || !isNum(a.vb[1]) || !isStr(a.svg)) bad((artFile[k] || '?') + ': art ' + k + ' needs vb [w, h] and svg'); });
  const PLAN = { body: ['body-front', 'body-back', 'face', 'hand-arm', 'leg-foot', 'inside'], home: ['house-outside', 'living-room', 'kitchen', 'bathroom', 'bedroom', 'appliances'],
    town: ['street', 'station', 'buildings', 'hospital-floor', 'positions'], animals: ['pets-farm', 'zoo', 'birds-insects-sea', 'animal-parts'],
    machines: ['car', 'bicycle', 'computer-phone', 'vehicles', 'ward-things'], food: ['fruit-veg', 'meals-drinks', 'table-setting'], clothes: ['clothes', 'accessories-colours'],
    nature: ['landscape', 'weather', 'seasons-plants'], daily: ['feelings', 'daily-routine', 'school-office', 'family-tree'] };
  const PLANNED = [].concat(...Object.values(PLAN));
  const NEWER = [[0x1F90C, 0x1F90C], [0x1F972, 0x1F972], [0x1F977, 0x1F979], [0x1F9A3, 0x1F9A4], [0x1F9AB, 0x1F9AD], [0x1F9CB, 0x1F9CC], [0x1F6D6, 0x1F6DF], [0x1F6FB, 0x1F6FF], [0x1F7F0, 0x1F7FF], [0x1FA74, 0x1FA77], [0x1FA7B, 0x1FA7F], [0x1FA83, 0x1FA8F], [0x1FA96, 0x1FAFF]];
  const oneEmoji = (pic) => { if (!isStr(pic)) return 'missing'; const cps = [...pic].map((c) => c.codePointAt(0)).filter((c) => c !== 0xFE0F && c !== 0xFE0E);
    if (cps.includes(0x200D)) return 'ZWJ sequence'; if (cps.some((c) => (c >= 0x1F3FB && c <= 0x1F3FF) || (c >= 0x1F1E6 && c <= 0x1F1FF))) return 'skin tone or flag';
    if (cps.length !== 1 || cps[0] < 0x2000) return 'not ONE emoji'; if (NEWER.some(([a, b]) => cps[0] >= a && cps[0] <= b)) return 'newer than Emoji 12.0'; return ''; };
  const LV = ['A1', 'A2', 'B1'];
  const PS = Array.isArray(C.PICTURE_SETS) ? C.PICTURE_SETS : [];
  const setIds = new Set();
  PS.forEach((s, si) => {
    if (!s || !isStr(s.id)) return bad('picture set #' + (si + 1) + ' without an id');
    const f = FO(s), w = 'set ' + s.id;
    if (setIds.has(s.id)) bad(f + ': ' + w + ' id twice'); setIds.add(s.id);
    const fg = (f.match(/^picture-sets-(\w+)\.js$/) || [])[1];
    if (fg && s.group !== fg) bad(f + ': ' + w + ' group ' + s.group + ' (file is ' + fg + ')');
    if (!PLAN[s.group]) bad(f + ': ' + w + ' unknown group ' + s.group); else if (!PLAN[s.group].includes(s.id)) console.log('WARN ' + f + ': ' + w + ' is not a planned set id of group ' + s.group);
    if (s.lv !== 'A1' && s.lv !== 'A2') bad(f + ': ' + w + ' lv must be A1 or A2');
    if (!isStr(s.title) || !isStr(s.intro)) bad(f + ': ' + w + ' needs title and intro');
    if (s.kind !== 'diagram' && s.kind !== 'cards') bad(f + ': ' + w + ' kind must be diagram or cards');
    const art = s.kind === 'diagram' ? ART[s.art] : null;
    if (s.kind === 'diagram' && !art) bad(f + ': ' + w + ' art ' + s.art + ' is not in PICTURE_ART (pictures/art-*.js)');
    if (s.kind === 'cards' && s.art != null) bad(f + ': ' + w + ' cards have no art');
    const parts = Array.isArray(s.parts) ? s.parts : [];
    const lo = s.kind === 'cards' ? 10 : 8;
    if (parts.length < lo || parts.length > 16) cnt(s, w + ': ' + lo + ' to 16 parts, found ' + parts.length);
    const pids = new Set(), ws = new Set(); let nb1 = 0;
    parts.forEach((p, i) => {
      const pw = w + ' part ' + ((p && p.id) || '#' + (i + 1));
      if (!p || !isStr(p.id)) return bad(f + ': ' + pw + ' missing id');
      if (pids.has(p.id)) bad(f + ': ' + pw + ' part id twice'); pids.add(p.id);
      if (!isStr(p.w) || !isStr(p.en)) bad(f + ': ' + pw + ' needs w and en');
      else { if (p.w !== p.w.toLowerCase() && !capsWord(p.w).length && !/^[A-Z]{2,4}$/.test(p.w) && p.w !== 'Pasko') console.log('WARN ' + f + ': ' + pw + ' w should be lower case: ' + p.w); if (p.w.trim().split(/\s+/).length > 3) bad(f + ': ' + pw + ' w is more than 3 words'); const k = p.w.toLowerCase().replace(/[\s-]/g, ''); if (ws.has(k)) bad(f + ': ' + pw + ' w repeated in the set: ' + p.w); ws.add(k); }
      spokenCheck(f, pw + ' w', p.w); (Array.isArray(p.alt) ? p.alt : []).forEach((a) => { if (!isStr(a)) bad(f + ': ' + pw + ' empty alt'); else if (ACCENT.test(a)) bad(f + ': ' + pw + ' alt has an accent: ' + a); });
      if (p.alt != null && !Array.isArray(p.alt)) bad(f + ': ' + pw + ' alt must be an array');
      if (!LV.includes(p.lv)) bad(f + ': ' + pw + ' lv must be A1, A2 or B1'); if (p.lv === 'B1') nb1++;
      if (s.kind === 'diagram') {
        if (p.pic != null) bad(f + ': ' + pw + ' a diagram part has no pic');
        if (!isNum(p.x) || !isNum(p.y)) bad(f + ': ' + pw + ' x and y must be numbers');
        else if (art && Array.isArray(art.vb) && (p.x < 0 || p.y < 0 || p.x > art.vb[0] || p.y > art.vb[1])) bad(f + ': ' + pw + ' pin (' + p.x + ', ' + p.y + ') outside the art ' + art.vb.join('x'));
      } else if (s.kind === 'cards') {
        if (p.x != null || p.y != null) bad(f + ': ' + pw + ' cards have no x / y');
        const e = oneEmoji(p.pic); if (e) bad(f + ': ' + pw + ' pic ' + e + ': ' + JSON.stringify(p.pic));
      }
    });
    if (parts.length && nb1 * 4 > parts.length) bad(f + ': ' + w + ' more than a quarter of the words are B1');
    const say = Array.isArray(s.say) ? s.say : [];
    if (say.length < 6 || say.length > 10) cnt(s, w + ': 6 to 10 say sentences, found ' + say.length);
    const seen = new Set();
    say.forEach((x, i) => {
      const xw = w + ' say ' + (i + 1);
      if (!x || !isStr(x.tl) || !isStr(x.en)) return bad(f + ': ' + xw + ' needs tl and en');
      if (!pids.has(x.p)) bad(f + ': ' + xw + ' p ' + x.p + ' is not a part id');
      if (seen.has(x.tl)) bad(f + ': ' + xw + ' repeated'); seen.add(x.tl);
      spokenCheck(f, xw, x.tl);
    });
    P310.pictureSets++; P310.pictureParts += parts.length; P310.pictureSay += say.length;
  });
  const missing = PLANNED.filter((id) => !setIds.has(id));
  if (missing.length) console.log('WARN ' + missing.length + ' of the ' + PLANNED.length + ' planned picture sets are not there yet: ' + missing.join(', '));
  // Body map
  const BM = C.PICTURE_BODYMAP;
  if (!BM) bad('PICTURE_BODYMAP missing');
  else {
    const f = FO(BM);
    if (!Array.isArray(BM.sets) || !BM.sets.length) bad(f + ': body map sets missing'); else BM.sets.forEach((id) => { if (!setIds.has(id)) bad(f + ': body map set ' + id + ' does not exist'); });
    const ask = Array.isArray(BM.ask) ? BM.ask : [], words = Array.isArray(BM.words) ? BM.words : [];
    if (ask.length !== 8) bad(f + ': body map needs 8 ask, found ' + ask.length);
    if (words.length !== 10) bad(f + ': body map needs 10 words, found ' + words.length);
    ask.concat(words, BM.scale ? [BM.scale] : []).forEach((x, i) => { if (!x || !isStr(x.tl) || !isStr(x.en)) bad(f + ': body map line ' + (i + 1) + ' needs tl and en'); else spokenCheck(BM, 'body map line ' + (i + 1), x.tl); });
    if (!BM.scale) bad(f + ': body map scale missing');
  }
  // Signs
  const SG = C.SIGNS;
  if (!SG || !Array.isArray(SG.groups) || !Array.isArray(SG.signs)) bad('SIGNS must be { groups: [], signs: [] }');
  else {
    const gids = new Set(), ids = new Set(), STY = ['green', 'red', 'blue', 'yellow', 'plain'];
    SG.groups.forEach((g) => { if (!g || !isStr(g.id) || !isStr(g.title)) bad(FO(g) + ': sign group needs id and title'); else { if (gids.has(g.id)) bad(FO(g) + ': sign group ' + g.id + ' twice'); gids.add(g.id); } });
    ['hospital', 'commute', 'street', 'building', 'shop', 'cr', 'medicine'].forEach((g) => { if (!gids.has(g)) bad('signs.js: sign group ' + g + ' missing'); });
    let nEn = 0;
    SG.signs.forEach((x, i) => {
      if (!x || !isStr(x.id)) return bad('sign #' + (i + 1) + ' without an id');
      const f = FO(x), w = 'sign ' + x.id;
      if (!/^sg-\d{3}$/.test(x.id)) bad(f + ': ' + w + ' ids are sg-001, sg-002, ...'); if (ids.has(x.id)) bad(f + ': ' + w + ' id twice'); ids.add(x.id);
      if (!gids.has(x.g)) bad(f + ': ' + w + ' group ' + x.g + ' does not exist');
      if (!STY.includes(x.style)) bad(f + ': ' + w + ' style ' + x.style);
      if (!['tl', 'mix', 'en'].includes(x.lang)) bad(f + ': ' + w + ' lang must be tl, mix or en');
      if (typeof x.caps !== 'boolean') bad(f + ': ' + w + ' caps must be true or false');
      if (!LV.includes(x.lv)) bad(f + ': ' + w + ' lv ' + x.lv);
      if (!isStr(x.tl) || !isStr(x.en)) bad(f + ': ' + w + ' needs tl and en');
      if (x.lang === 'en') nEn++; else spokenCheck(x, w, x.tl);
      if (x.lang === 'en' && capsWord(x.tl).length) bad(f + ': ' + w + ' write the text in sentence case (caps: true sets capitals)');
    });
    gids.forEach((g) => { if (!SG.signs.some((x) => x && x.g === g)) cnt(SG.groups.find((y) => y.id === g), 'sign group ' + g + ' has no signs'); });
    if (nEn * 5 > SG.signs.length) bad('signs.js: English-only signs must stay under a fifth (' + nEn + ' of ' + SG.signs.length + ')');
    if (SG.signs.length < 110 || SG.signs.length > 120) cnt(SG.groups[0], 'about 110 to 120 signs, found ' + SG.signs.length);
    P310.signs = SG.signs.length;
  }
  // Panels
  const SP = C.SIGN_PANELS;
  if (!Array.isArray(SP)) bad('SIGN_PANELS must be an array');
  else {
    const pids = new Set();
    SP.forEach((p, i) => {
      if (!p || !isStr(p.id)) return bad('panel #' + (i + 1) + ' without an id');
      const f = FO(p), w = 'panel ' + p.id;
      if (pids.has(p.id)) bad(f + ': ' + w + ' id twice'); pids.add(p.id);
      if (!isStr(p.title) || !LV.includes(p.lv)) bad(f + ': ' + w + ' needs title and lv A1, A2 or B1');
      const rows = Array.isArray(p.rows) ? p.rows : [];
      if (rows.length < 2 || rows.length > 4) bad(f + ': ' + w + ' 2 to 4 rows, found ' + rows.length);
      const ctl = new Map();
      rows.forEach((r) => (Array.isArray(r) ? r : []).forEach((c) => {
        if (!c || !isStr(c.id)) return bad(f + ': ' + w + ' control without an id');
        if (ctl.has(c.id)) bad(f + ': ' + w + ' control id twice: ' + c.id); ctl.set(c.id, c);
        if (c.label == null || String(c.label) === '' || !isStr(c.en)) bad(f + ': ' + w + ' control ' + c.id + ' needs label and en');
        if (!['btn', 'lamp', 'dial'].includes(c.kind)) bad(f + ': ' + w + ' control ' + c.id + ' kind ' + c.kind);
      }));
      if (ctl.size < 6 || ctl.size > 12) cnt(p, w + ': 6 to 12 controls, found ' + ctl.size);
      const tasks = Array.isArray(p.tasks) ? p.tasks : [];
      if (tasks.length < 5 || tasks.length > 6) cnt(p, w + ': 5 or 6 tasks, found ' + tasks.length);
      tasks.forEach((t, ti) => {
        const tw = w + ' task ' + (ti + 1);
        if (!t || !isStr(t.q) || !isStr(t.en)) return bad(f + ': ' + tw + ' needs q and en');
        const c = ctl.get(t.a);
        if (!c) bad(f + ': ' + tw + ' a ' + t.a + ' is not a control'); else if (c.kind === 'lamp') bad(f + ': ' + tw + ' a ' + t.a + ' is a lamp');
        if (!isStr(t.why)) console.log('WARN ' + f + ': ' + tw + ' has no why');
        spokenCheck(f, tw, t.q);
      });
      P310.panels++; P310.panelTasks += tasks.length;
    });
    if (SP.length !== 10) cnt(SP[0], '10 panels planned, found ' + SP.length);
  }
  // Lessons: every picture embed names an existing set
  C.LESSONS.forEach((l) => { [...String(l.body || '').matchAll(/<div\b[^>]*class="pic-embed"[^>]*>/g)].forEach((m) => {
    const id = (m[0].match(/data-pic="([^"]*)"/) || [])[1];
    if (!id) bad('lesson ' + l.id + ': .pic-embed without data-pic');
    else if (!setIds.has(id)) { if (PLANNED.includes(id)) console.log('WARN lesson ' + l.id + ': picture ' + id + ' is not there yet'); else bad('lesson ' + l.id + ': picture ' + id + ' is not a picture set id'); }
  }); if (/pic-embed/.test(l.body || '') && !/<div class="pic-embed" data-pic="[^"]+"><\/div>/.test(l.body)) bad('lesson ' + l.id + ': write embeds exactly as <div class="pic-embed" data-pic="<set id>"></div>'); });
  C.LESSONS.filter((l) => l.unit === 'Picture lessons').forEach((l) => { if (!Array.isArray(l.quiz) || l.quiz.length !== 5) cnt(l, 'picture lesson ' + l.id + ' needs 5 quiz items'); });
  // Stigma rule
  const text = JSON.stringify([C.PICTURE_SETS, C.PICTURE_BODYMAP, C.SIGNS, C.SIGN_PANELS, C.LESSONS.filter((l) => l.unit === 'Picture lessons')]).toLowerCase();
  ['baliw', 'adik', 'sira ulo', 'sira-ulo', 'loko'].forEach((w) => { if (new RegExp('\\b' + w + '\\b').test(text)) bad('stigmatizing word in the 3.10.0 data: ' + w); });
}
const counts = { version: C.APP_META.version, answers: C.PSYCH_ANSWERS ? C.PSYCH_ANSWERS.common.reduce((a, g) => a + g.items.length, 0) + Object.values(C.PSYCH_ANSWERS.sections).reduce((a, l) => a + l.length, 0) : 0, dict: C.App.DICT.length, sections: C.PSYCH_SECTIONS.length, phrases: C.PSYCH_SECTIONS.reduce((a, s) => a + s.phrases.length, 0), cases: C.PSYCH_CASES.length, lessons: C.LESSONS.length, reading: C.READING.length, listening: (C.LISTENING || []).length, dialogues: C.DIALOGUES.length, verbs: C.VERBS.length, dcases: (C.PSYCH_DISCHARGE_CASES || []).length, mcases: (C.PSYCH_MSE_CASES || []).length, affixes: (C.AFFIX_ITEMS || []).length, drillGaps: (C.DRILL_CLOZE || []).length, drillBuild: (C.DRILL_BUILD || []).length, dictation: (C.DRILL_DICTATION || []).length, translate: (C.DRILL_TRANSLATE || []).length, families: (C.WORD_FAMILIES || []).length, ladders: (C.WORD_LADDERS || []).length, synonyms: (C.WORD_SYNONYMS || []).length, focus: (C.DRILL_FOCUS || []).length, errors: (C.DRILL_ERRORS || []).length, stress: (C.WORD_STRESS || []).length, falseFriends: (C.WORD_FALSE_FRIENDS || []).length, lookalikes: (C.WORD_COGNATES || []).length, placement: C.PLACEMENT.length };
Object.assign(counts, P310);
// Extension checks (3.11.0 on): every tests/data_check_ext_*.js exports (C, bad, counts) => {} and may add counts.
fs.readdirSync(__dirname).filter((f) => /^data_check_ext_.*\.js$/.test(f)).sort().forEach((f) => require(path.join(__dirname, f))(C, bad, counts, repo));
console.log(JSON.stringify(counts));
console.log(fails ? fails + ' FAILURES' : 'DATA OK');
process.exit(fails ? 1 : 0);
