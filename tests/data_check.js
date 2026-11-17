#!/usr/bin/env node
/* Data integrity checks for Usap Tayo. Run from anywhere:
     node tests/data_check.js /path/to/tagalog-repo
   Exit code 0 = all checks pass. */
const fs = require('fs'), path = require('path'), vm = require('vm');
const repo = path.resolve(process.argv[2] || '.');
const ctx = { console, TextEncoder, Buffer, localStorage: { getItem: () => null, setItem() {} }, navigator: {}, document: { querySelector: () => null }, fetch: () => Promise.reject(new Error('no fetch')) };
ctx.window = ctx; vm.createContext(ctx);
const html = fs.readFileSync(path.join(repo, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/src="((?:js|data)\/[^"]+)"/g)].map((m) => m[1]).filter((f) => f.startsWith('data/') || f.includes('/data/') || /conjugate|audio-key|pronounce|lang|core|discharge-practice|mse-practice/.test(f));
for (const f of scripts) vm.runInContext(fs.readFileSync(path.join(repo, f), 'utf8'), ctx, { filename: f });
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
const counts = { version: C.APP_META.version, answers: C.PSYCH_ANSWERS ? C.PSYCH_ANSWERS.common.reduce((a, g) => a + g.items.length, 0) + Object.values(C.PSYCH_ANSWERS.sections).reduce((a, l) => a + l.length, 0) : 0, dict: C.App.DICT.length, sections: C.PSYCH_SECTIONS.length, phrases: C.PSYCH_SECTIONS.reduce((a, s) => a + s.phrases.length, 0), cases: C.PSYCH_CASES.length, lessons: C.LESSONS.length, reading: C.READING.length, listening: (C.LISTENING || []).length, dialogues: C.DIALOGUES.length, verbs: C.VERBS.length, dcases: (C.PSYCH_DISCHARGE_CASES || []).length, mcases: (C.PSYCH_MSE_CASES || []).length, affixes: (C.AFFIX_ITEMS || []).length, drillGaps: (C.DRILL_CLOZE || []).length, drillBuild: (C.DRILL_BUILD || []).length, dictation: (C.DRILL_DICTATION || []).length, translate: (C.DRILL_TRANSLATE || []).length, families: (C.WORD_FAMILIES || []).length, ladders: (C.WORD_LADDERS || []).length, synonyms: (C.WORD_SYNONYMS || []).length, focus: (C.DRILL_FOCUS || []).length, errors: (C.DRILL_ERRORS || []).length, stress: (C.WORD_STRESS || []).length, falseFriends: (C.WORD_FALSE_FRIENDS || []).length, lookalikes: (C.WORD_COGNATES || []).length, placement: C.PLACEMENT.length };
console.log(JSON.stringify(counts));
console.log(fails ? fails + ' FAILURES' : 'DATA OK');
process.exit(fails ? 1 : 0);
