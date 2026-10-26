#!/usr/bin/env node
/* Data integrity checks for Usap Tayo. Run from anywhere:
     node tests/data_check.js /path/to/tagalog-repo
   Exit code 0 = all checks pass. */
const fs = require('fs'), path = require('path'), vm = require('vm');
const repo = path.resolve(process.argv[2] || '.');
const ctx = { console, TextEncoder, Buffer, localStorage: { getItem: () => null, setItem() {} }, navigator: {}, document: { querySelector: () => null }, fetch: () => Promise.reject(new Error('no fetch')) };
ctx.window = ctx; vm.createContext(ctx);
const html = fs.readFileSync(path.join(repo, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/src="(js\/[^"]+)"/g)].map((m) => m[1]).filter((f) => f.includes('/data/') || /conjugate|audio-key|core|discharge-practice/.test(f));
for (const f of scripts) vm.runInContext(fs.readFileSync(path.join(repo, f), 'utf8'), ctx, { filename: f });
const C = ctx;
let fails = 0; const bad = (m) => { fails++; console.log('FAIL', m); };
const sec = (id) => C.PSYCH_SECTIONS.find((s) => s.id === id);
const ref = (r) => { const [s, i] = r.split(':'); return sec(s) && sec(s).phrases[+i]; };

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
C.VERBS.forEach((v) => { const f = C.App.verbForms(v); if (!Object.keys(f).length) bad('verb has no forms ' + v.r); });
['kinakain:kain', 'binubulungan:bulong', 'nalulungkot:lungkot', 'iniinom:inom'].forEach((t) => { const [w, r] = t.split(':'); if (!C.App.findRoots(w).includes(r)) bad('stemmer ' + w + ' -> ' + r); });

// Audio pack: every speakable text should have a clip (after the GitHub job has run).
const texts = path.join(repo, 'tools', 'texts.json'), man = path.join(repo, 'audio', 'manifest.json');
if (fs.existsSync(texts) && fs.existsSync(man)) {
  const want = JSON.parse(fs.readFileSync(texts)), have = new Set(JSON.parse(fs.readFileSync(man)).keys);
  want.forEach((t) => { if (C.AudioKey(t.text) !== t.key) bad('audio key mismatch ' + t.text); });
  const missing = want.filter((t) => !have.has(t.key));
  if (missing.length) console.log('WARN', missing.length, 'texts without audio yet (push to main and let the audio job run):', missing.slice(0, 5).map((t) => t.text).join(' | '));
}
const counts = { version: C.APP_META.version, dict: C.App.DICT.length, sections: C.PSYCH_SECTIONS.length, phrases: C.PSYCH_SECTIONS.reduce((a, s) => a + s.phrases.length, 0), cases: C.PSYCH_CASES.length, lessons: C.LESSONS.length, reading: C.READING.length, dialogues: C.DIALOGUES.length, verbs: C.VERBS.length, dcases: (C.PSYCH_DISCHARGE_CASES || []).length };
console.log(JSON.stringify(counts));
console.log(fails ? fails + ' FAILURES' : 'DATA OK');
process.exit(fails ? 1 : 0);
