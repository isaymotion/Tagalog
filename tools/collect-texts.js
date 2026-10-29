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
['js/data/dict-core.js', 'js/data/dict-everyday.js', 'js/data/dict-clinical.js', 'js/data/dict-more.js', 'js/data/verbs.js', 'js/data/verb-sentences.js', 'js/data/lessons.js',
 'js/data/reading.js', 'js/data/dialogues.js', 'js/data/psych-phrases.js', 'js/data/psych-cases.js', 'js/data/psych-flow.js', 'js/data/psych-deesc.js', 'js/data/psych-discharge.js', 'js/data/psych-discharge-cases.js', 'js/data/psych-admit-mse.js', 'js/data/psych-mse-cases.js', 'js/data/psych-mse-sheet.js', 'js/data/psych-sud.js', 'js/data/psych-withdrawal.js', 'js/data/psych-mood.js', 'js/data/psych-shea.js',
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
(ctx.PSYCH_DISCHARGE_CASES || []).forEach((c) => Object.values(c.fields).forEach((f) => Object.values(f.ans || {}).forEach((a) => add(a[0]))));
add('Opo, Dok.'); // default discharge practice answer
(ctx.PSYCH_MSE_SHEET ? ctx.PSYCH_MSE_SHEET.sections : []).forEach((s) => (s.blocks || []).forEach((b) => b.items.forEach((it) => add(it.tl)))); // MSE interviewer sheet lines not already in PSYCH_SECTIONS
(ctx.PSYCH_MSE_CASES || []).forEach((c) => { if (c.cc) add(c.cc.ans[0]); Object.values(c.domains).forEach((d) => Object.values(d.ans || {}).forEach((a) => add(a[0]))); });
(ctx.LESSONS || []).forEach((l) => { const re = /<div class="ex"><b>([^<]+)<\/b>/g; let m; while ((m = re.exec(l.body))) add(m[1].replace(/&#39;/g, "'").replace(/&amp;/g, '&')); });
(ctx.VERBS || []).forEach((v) => {
  const forms = {};
  v.a.forEach((af) => (forms[af] = ctx.Conj.conjugate(v.r, af)));
  Object.entries(v.o || {}).forEach(([af, a]) => (forms[af] = { inf: a[0], com: a[1], inc: a[2], con: a[3] }));
  Object.values(forms).forEach((f) => ['inf', 'com', 'inc', 'con'].forEach((k) => add(f[k])));
  if (v.ex) add(v.ex.split('|')[0]);
  add(v.r);
  ((ctx.VERB_SENTENCES || {})[v.r] || []).forEach((s) => add(s[0]));
});
add('Magandang umaga po. Kumusta po kayo?'); // settings voice test

// Substance use screener: lines are templates ({s} substance, {w} withdrawal symptoms, {u} unit) filled at run time
// for the chosen substance, so record every line as it is spoken for every substance, not only the nganga example.
const SUD = ctx.PSYCH_SUD;
if (SUD) SUD.substances.forEach((sub) => {
  const say = (p) => { if (p && p.tl && !p.tl.startsWith('(')) add(SUD.fill(p.tl, sub)); };
  [].concat(SUD.open, SUD.criteriaFor(sub), SUD.remission, sub.ask || [], sub.psychoed || [],
    SUD.mi.flatMap((s) => s.lines), SUD.nurse.steps.flatMap((s) => s.lines)).forEach(say);
  Object.values(SUD.screens).forEach((sc) => sc.items.forEach(say));
});

// Safety net for newer modules: sweep every psychiatry data export for Tagalog fields (tl, f, c) so a screen
// added later is recorded even if nobody adds it above. Template lines ({…}) are handled per module.
const TL_KEYS = new Set(['tl', 'f', 'c']);
const sweep = (o, seen) => {
  if (!o || typeof o !== 'object' || seen.has(o)) return;
  seen.add(o);
  if (Array.isArray(o)) { o.forEach((x) => sweep(x, seen)); return; }
  Object.entries(o).forEach(([k, v]) => {
    if (typeof v === 'string') { if (TL_KEYS.has(k) && !v.startsWith('(') && !/[{}<>]/.test(v)) add(v); }
    else sweep(v, seen);
  });
};
const seenObj = new Set();
Object.keys(ctx).filter((k) => /^(PSYCH_|SHEA_)/.test(k)).forEach((k) => sweep(ctx[k], seenObj));
// Lines other apps play from this audio pack (one per line, # for comments). See tools/import-msetrainer.js.
const extra = path.join(__dirname, 'extra-texts');
if (fs.existsSync(extra)) fs.readdirSync(extra).filter((f) => f.endsWith('.txt')).forEach((f) => fs.readFileSync(path.join(extra, f), 'utf8').split('\n').forEach((l) => { if (!l.startsWith('#')) add(l); }));

const list = [...out.entries()].map(([key, text]) => ({ key, text })).sort((a, b) => a.key.localeCompare(b.key));
fs.writeFileSync(path.join(__dirname, 'texts.json'), JSON.stringify(list, null, 0));
console.log('Collected', list.length, 'texts');
