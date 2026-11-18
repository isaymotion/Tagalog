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
['js/data/dict-core.js', 'js/data/dict-everyday.js', 'js/data/dict-clinical.js', 'js/data/dict-more.js', 'js/data/dict-themes.js', 'js/data/drills.js', 'js/data/drills-grammar.js', 'js/data/drills-more.js', 'js/data/word-sets.js', 'js/data/vocab-sets.js', 'js/data/verbs.js', 'js/data/verb-sentences.js', 'js/data/lessons.js', 'js/data/lessons-2.js', 'js/data/lessons-3.js',
 'js/data/reading.js', 'js/data/reading-2.js', 'js/data/listening.js', 'js/data/listen-reply.js', 'js/data/dialogues.js', 'js/data/dialogues-2.js', 'js/data/psych-phrases.js', 'js/data/psych-cases.js', 'js/data/psych-flow.js', 'js/data/psych-deesc.js', 'js/data/psych-discharge.js', 'js/data/psych-discharge-cases.js', 'js/data/psych-admit-mse.js', 'js/data/psych-mse-cases.js', 'js/data/psych-mse-sheet.js', 'js/data/psych-sud.js', 'js/data/psych-withdrawal.js', 'js/data/psych-mood.js', 'js/data/psych-shea.js', 'js/data/psych-phrases-nurse.js', 'js/data/psych-answers.js', 'js/data/psych-answers-nurse.js', 'js/data/affixes.js',
 'js/data/picture-sets-body.js', 'js/data/picture-sets-home.js', 'js/data/picture-sets-town.js', 'js/data/picture-sets-animals.js', 'js/data/picture-sets-machines.js', 'js/data/picture-sets-food.js', 'js/data/picture-sets-clothes.js', 'js/data/picture-sets-nature.js', 'js/data/picture-sets-daily.js', 'js/data/picture-sets-more-1.js', 'js/data/picture-sets-more-2.js', 'js/data/picture-sets-more-3.js', 'js/data/picture-bodymap.js', 'js/data/signs.js', 'js/data/signs-panels.js', 'js/data/lessons-pictures.js',
 'js/data/meta.js', 'js/conjugate.js', 'js/audio-key.js', 'js/pronounce.js'].forEach(load);
// 3.14.0: lesson extras (every js/data/lesson-extra-<n>.js present, in number order), the unit reviews, then the lesson
// order file, which builds the review lessons into LESSONS (so the lesson-body sweep below records their examples).
fs.readdirSync(path.join(root, 'js/data')).filter((f) => /^lesson-extra-\d+\.js$/.test(f)).sort((a, b) => parseInt(a.slice(13), 10) - parseInt(b.slice(13), 10)).forEach((f) => load('js/data/' + f));
// 3.17.0: gap sentences by lesson (every js/data/lesson-gaps-<n>.js present, in number order), before the lesson order file.
fs.readdirSync(path.join(root, 'js/data')).filter((f) => /^lesson-gaps-\d+\.js$/.test(f)).sort((a, b) => parseInt(a.slice(12), 10) - parseInt(b.slice(12), 10)).forEach((f) => load('js/data/' + f));
['js/data/lessons-review.js', 'js/data/lessons-review-2.js', 'js/data/lessons-zz-order.js'].filter((f) => fs.existsSync(path.join(root, f))).forEach(load);
// 3.15.0: example sentences of dictionary words (any of the six parts that exist).
fs.readdirSync(path.join(root, 'js/data')).filter((f) => /^examples-\d+\.js$/.test(f)).sort((a, b) => parseInt(a.slice(9), 10) - parseInt(b.slice(9), 10)).forEach((f) => load('js/data/' + f));

const out = new Map();
const caps = new Map(); // every all-caps word in spoken text → how the voice will say it (written to tools/caps.json)
const addText = (t, raw) => {
  if (!t || typeof t !== 'string') return;
  // Same rule as App.spoken in js/core.js: drop stage directions ("(tumango) ..."), then respell for the voice
  // (js/pronounce.js). raw = lines another app keys itself (MSE Trainer): stage directions only, no respelling.
  t = t.replace(/^\s*\([^)]*\)\s*/, '').replace(/(\.\.\.|…)\s*\([^)]*\)/g, '$1').replace(/\([^)]*\)\s*(?=\.\.\.|…)/g, '');
  if (!raw) { ctx.PRONOUNCE_CAPS(t).forEach(([w, say]) => caps.set(w, say)); t = ctx.PRONOUNCE(t); }
  t = t.replace(/\s+/g, ' ').trim();
  if (!t || !/[a-zA-ZñÑ]/.test(t)) return;
  const key = ctx.AudioKey(t);
  if (!out.has(key)) out.set(key, t);
};
// Two names, not an optional flag: lists call add through forEach, which passes the index as a 2nd argument.
const add = (t) => addText(t, false);
const addRaw = (t) => addText(t, true);

(ctx.DICT_RAW || []).concat(ctx.DICT_RAW2 || []).join('\n').split('\n').forEach((line) => { line = line.trim(); if (line && !line.startsWith('#')) add(line.split('|')[0]); });
(ctx.PSYCH_SECTIONS || []).forEach((s) => s.phrases.forEach((p) => { add(p.f); add(p.c); (p.answers || []).forEach((a) => add(a[0])); }));
(ctx.DIALOGUES || []).forEach((d) => d.lines.forEach((l) => { add(l[1]); add(l[3]); }));
(ctx.READING || []).forEach((r) => r.tl.forEach(add));
(ctx.LISTENING || []).forEach((x) => x.lines.forEach((l) => add(l[3] || l[1]))); // l[3] = respelled for the voice
(ctx.PSYCH_CASES || []).forEach((c) => c.steps.forEach((s) => { add(s.line[0]); s.choices.forEach((x) => add(x.tl)); }));
(ctx.PSYCH_INTERP || []).forEach((x) => add(x[0]));
// Point board and listening drill replies (numbers 0-10 on the board are spoken by the device voice).
if (ctx.PSYCH_ANSWERS) { ctx.PSYCH_ANSWERS.common.forEach((g) => g.items.forEach((it) => add(it[0]))); Object.values(ctx.PSYCH_ANSWERS.sections).forEach((l) => l.forEach((it) => add(it[0]))); }
(ctx.PSYCH_DISCHARGE_CASES || []).forEach((c) => Object.values(c.fields).forEach((f) => Object.values(f.ans || {}).forEach((a) => add(a[0]))));
add('Opo, Dok.'); // default discharge practice answer
(ctx.PSYCH_MSE_SHEET ? ctx.PSYCH_MSE_SHEET.sections : []).forEach((s) => (s.blocks || []).forEach((b) => b.items.forEach((it) => add(it.tl)))); // MSE interviewer sheet lines not already in PSYCH_SECTIONS
(ctx.PSYCH_MSE_CASES || []).forEach((c) => { if (c.cc) add(c.cc.ans[0]); Object.values(c.domains).forEach((d) => Object.values(d.ans || {}).forEach((a) => add(a[0]))); });
(ctx.LESSONS || []).forEach((l) => { const re = /<div class="ex"(?: data-voice="([^"]*)")?><b>([^<]+)<\/b>/g; let m; while ((m = re.exec(l.body))) add((m[1] || m[2]).replace(/&#39;/g, "'").replace(/&amp;/g, '&')); });
// 3.14.0 lesson extras: each "more" example and the RIGHT line of each common mistake (its voice text instead when given:
// more [tl, en, voice?], mistakes [wrong, right, why, voice?]). The wrong line is never recorded. Malformed rows are skipped.
Object.values(ctx.LESSON_EXTRA && typeof ctx.LESSON_EXTRA === 'object' ? ctx.LESSON_EXTRA : {}).forEach((x) => {
  if (!x || typeof x !== 'object') return;
  (Array.isArray(x.more) ? x.more : []).forEach((r) => { if (Array.isArray(r)) add(r[2] || r[0]); });
  (Array.isArray(x.mistakes) ? x.mistakes : []).forEach((r) => { if (Array.isArray(r)) add(r[3] || r[1]); });
});
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
(ctx.AFFIX_ITEMS || []).forEach((it) => add(it.w)); // panlapi trainer words
(ctx.AFFIX_RULES || []).forEach((r) => r.ex.forEach((x) => add(x[0])));
(ctx.AFFIX_FOCUS_DRILL || []).forEach((f) => add(f.q.replace('____', f.ok)));
// Language drills (3.7.0): the filled sentence of each gap item, and every accepted order of each word-order item
// exactly as js/drills.js shows it (first letter capital, end mark).
(ctx.DRILL_CLOZE || []).forEach((it) => add(it.q.replace('____', it.a)));
(ctx.DRILL_BUILD || []).forEach((it) => [it.t].concat(it.alt || []).forEach((t) => { const s = t.join(' '); add(s.charAt(0).toUpperCase() + s.slice(1) + (it.end || '.')); }));
// 3.8.0: dictation lines, the model answer of each typed translation, word families, intensity ladders,
// and the deep and everyday words of each synonym set (Taglish words are not recorded: the voice mangles English).
(ctx.DRILL_DICTATION || []).forEach((it) => add(it.tl));
(ctx.DRILL_TRANSLATE || []).forEach((it) => add(it.tl[0]));
(ctx.WORD_FAMILIES || []).forEach((f) => { add(f.r); f.forms.forEach((x) => add(x[0])); });
(ctx.WORD_LADDERS || []).forEach((l) => l.steps.forEach((x) => add(x[0])));
(ctx.WORD_SYNONYMS || []).forEach((x) => x.deep.concat(x.daily).forEach(add));
// 3.9.0: both sentences of each focus pair (and the other accepted object-focus verbs), the corrected sentence of each
// find-the-mistake item, both example sentences of each stress pair, false friends (not the English-spelled ones) and look-alikes.
(ctx.DRILL_FOCUS || []).forEach((it) => { const e = it.end || '.'; add(it.a + ' ' + it.ar + e); [it.o].concat(it.oAlt || []).forEach((v) => add(v + ' ' + it.or + e)); });
(ctx.DRILL_ERRORS || []).forEach((it) => add(it.fix));
(ctx.WORD_STRESS || []).forEach((x) => { add(ctx.WORD_STRESS_SAY(x, false)); add(ctx.WORD_STRESS_SAY(x, true)); }); // the last-syllable sentence is respelled for the voice
(ctx.WORD_FALSE_FRIENDS || []).forEach((x) => { if (!x.mix) add(x.tl); });
(ctx.WORD_COGNATES || []).forEach((x) => add(x[0]));
// 3.12.0: each gap sentence as it is really written (full, or q with the answer put in), and each change-the-sentence
// item's starting sentence, model answer and every other accepted answer. The wrong options are never recorded.
(ctx.DRILL_GAPS || []).forEach((it) => add(it.full || it.q.replace('____', it.a)));
(ctx.DRILL_CHANGE || []).forEach((it) => { add(it.from); add(it.to); (it.alt || []).forEach((a) => add(a)); });
// 3.13.0: vocabulary practice (js/vocab.js): both words of each opposite, and each collocation as one expression. Odd one out is not recorded.
(ctx.WORD_PAIRS || []).forEach((x) => { if (x.type === 'opp') { add(x.a); add(x.b); } else if (x.type === 'col') add(x.a + ' ' + x.b); });
// 3.15.0: each dictionary word's example sentence (word page, card back, In context game: the full sentence, never the gap).
(Array.isArray(ctx.DICT_EX) ? ctx.DICT_EX : []).forEach((x) => { if (Array.isArray(x) && typeof x[1] === 'string') add(x[1]); });
// 3.17.0: Practise a lesson: each gap sentence as the voice says it (voice when given, else q with the answer put in; the
// wrong options are never recorded). Listen and reply: every line heard and every reply option (all four are real replies).
Object.values(ctx.LESSON_GAPS && typeof ctx.LESSON_GAPS === 'object' ? ctx.LESSON_GAPS : {}).forEach((list) => (Array.isArray(list) ? list : []).forEach((it) => { if (it && typeof it.q === 'string') add(it.voice || it.q.replace('____', it.a)); }));
(Array.isArray(ctx.LISTEN_REPLY) ? ctx.LISTEN_REPLY : []).forEach((x) => { if (!x) return; add(x.say); (x.opts || []).forEach((o) => o && add(o.tl)); });

// 3.10.0: picture words (each part's word and every listen-and-point sentence), signs (not the English-only ones), the Tagalog
// request of each panel task (control labels are printed English and are not recorded) and the body map lines.
// Written as arrow functions, never forEach(add) with extra arguments (see the note on add above).
(Array.isArray(ctx.PICTURE_SETS) ? ctx.PICTURE_SETS : []).forEach((s) => { (s.parts || []).forEach((p) => p && add(p.w)); (s.say || []).forEach((x) => x && add(x.tl)); });
((ctx.SIGNS || {}).signs || []).forEach((x) => { if (x && x.lang !== 'en') add(x.tl); });
(Array.isArray(ctx.SIGN_PANELS) ? ctx.SIGN_PANELS : []).forEach((p) => (p.tasks || []).forEach((t) => t && add(t.q)));
if (ctx.PICTURE_BODYMAP) { const B = ctx.PICTURE_BODYMAP; (B.ask || []).forEach((x) => x && add(x.tl)); (B.words || []).forEach((x) => x && add(x.tl)); if (B.scale) add(B.scale.tl); }

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
if (fs.existsSync(extra)) fs.readdirSync(extra).filter((f) => f.endsWith('.txt')).forEach((f) => fs.readFileSync(path.join(extra, f), 'utf8').split('\n').forEach((l) => { if (!l.startsWith('#')) (f === 'msetrainer.txt' ? addRaw : add)(l); }));

const list = [...out.entries()].map(([key, text]) => ({ key, text })).sort((a, b) => a.key.localeCompare(b.key));
fs.writeFileSync(path.join(__dirname, 'texts.json'), JSON.stringify(list, null, 0));
console.log('Collected', list.length, 'texts');
const capsList = Object.fromEntries([...caps.entries()].sort((a, b) => a[0].localeCompare(b[0])));
fs.writeFileSync(path.join(__dirname, 'caps.json'), JSON.stringify(capsList, null, 1) + '\n');
console.log('All-caps words (word → spoken):', Object.entries(capsList).map(([w, s]) => w + ' → ' + s).join(', '));
