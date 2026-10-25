#!/usr/bin/env node
/* Collects every Tagalog string the app can speak and writes tools/texts.json:
   [{ key, text }]. key = audio file name (see js/audio-key.js; the same function is used here). */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.join(__dirname, '..');
const ctx = { window: {}, console, TextEncoder, Buffer };
ctx.window = ctx;
vm.createContext(ctx);
const load = (f) => vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
['js/data/dict-core.js', 'js/data/dict-everyday.js', 'js/data/dict-clinical.js', 'js/data/dict-more.js', 'js/data/verbs.js', 'js/data/lessons.js',
 'js/data/reading.js', 'js/data/dialogues.js', 'js/data/psych-phrases.js', 'js/data/psych-cases.js', 'js/data/psych-flow.js', 'js/data/psych-deesc.js',
 'js/data/meta.js', 'js/conjugate.js', 'js/audio-key.js'].forEach(load);

const out = new Map();
const add = (t) => {
  if (!t || typeof t !== 'string') return;
  t = t.trim();
  if (!t || !/[a-zA-ZñÑ]/.test(t)) return;
  const key = ctx.AudioKey(t);
  if (!out.has(key)) out.set(key, t);
};

(ctx.DICT_RAW || []).join('\n').split('\n').forEach((line) => { line = line.trim(); if (line && !line.startsWith('#')) add(line.split('|')[0]); });
(ctx.PSYCH_SECTIONS || []).forEach((s) => s.phrases.forEach((p) => { add(p.f); add(p.c); (p.answers || []).forEach((a) => add(a[0])); }));
(ctx.DIALOGUES || []).forEach((d) => d.lines.forEach((l) => { add(l[1]); add(l[3]); }));
(ctx.READING || []).forEach((r) => r.tl.forEach(add));
(ctx.PSYCH_CASES || []).forEach((c) => c.steps.forEach((s) => { add(s.line[0]); s.choices.forEach((x) => add(x.tl)); }));
(ctx.PSYCH_INTERP || []).forEach((x) => add(x[0]));
(ctx.LESSONS || []).forEach((l) => { const re = /<div class="ex"><b>([^<]+)<\/b>/g; let m; while ((m = re.exec(l.body))) add(m[1].replace(/&#39;/g, "'").replace(/&amp;/g, '&')); });
(ctx.VERBS || []).forEach((v) => {
  const forms = {};
  v.a.forEach((af) => (forms[af] = ctx.Conj.conjugate(v.r, af)));
  Object.entries(v.o || {}).forEach(([af, a]) => (forms[af] = { inf: a[0], com: a[1], inc: a[2], con: a[3] }));
  Object.values(forms).forEach((f) => ['inf', 'com', 'inc', 'con'].forEach((k) => add(f[k])));
  if (v.ex) add(v.ex.split('|')[0]);
  add(v.r);
});
add('Magandang umaga po. Kumusta po kayo?'); // settings voice test

const list = [...out.entries()].map(([key, text]) => ({ key, text })).sort((a, b) => a.key.localeCompare(b.key));
fs.writeFileSync(path.join(__dirname, 'texts.json'), JSON.stringify(list, null, 0));
console.log('Collected', list.length, 'texts');
