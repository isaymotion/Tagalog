/* 3.12.0 grammar drills: DRILL_GAPS, DRILL_CHANGE (js/data/drills-grammar.js) and the aspect pool (js/drills.js). */
const fs = require('fs'), path = require('path'), vm = require('vm');
module.exports = (C, bad, counts, repo) => {
  const G = C.DRILL_GAPS, CH = C.DRILL_CHANGE;
  if (!Array.isArray(G) || !Array.isArray(CH)) { bad('DRILL_GAPS or DRILL_CHANGE missing (js/data/drills-grammar.js in index.html?)'); return; }
  const warn = (m) => console.log('WARN', m);
  const seed = G.length + CH.length < 100; // the coder's seed file; the writer's file has 198 items
  const low = (s) => String(s || '').toLowerCase();
  const strip = (s) => low(s).replace(/[^\p{L}\p{N}\s-]/gu, '').replace(/\s+/g, ' ').trim();
  const CAPS = /\b[A-Z]{2,}\b/, ACC = /[áéíóúàèìòùâêîôûäëïöüãõ]/i;
  const spoken = (where, t) => { if (typeof t !== 'string' || !t.trim()) { bad(where + ': empty Tagalog'); return; } if (CAPS.test(t)) bad(where + ': ALL-CAPS word: ' + t); if (ACC.test(t)) bad(where + ': accented letter: ' + t); };
  const LK = ['na', '-ng', '-g', 'nothing'], NEG = ['hindi', 'wala', 'huwag'];
  const PN = [['ako', 'ko', 'akin'], ['ka', 'mo', 'iyo'], ['siya', 'niya', 'kanya'], ['kami', 'namin', 'amin'], ['tayo', 'natin', 'atin'], ['kayo', 'ninyo', 'inyo'], ['sila', 'nila', 'kanila']].map((x) => x.join('|'));
  const per = {}, seenQ = new Set();
  G.forEach((it, i) => {
    const tag = 'gap ' + (it && it.set) + ' ' + i + ' (' + (it && it.q) + ')';
    if (!it || !it.q || !it.en || !it.a || !Array.isArray(it.opts) || !it.why) { bad(tag + ': missing q, en, a, opts or why'); return; }
    if (!['lk', 'pt', 'pn', 'qw', 'neg'].includes(it.set)) bad(tag + ': unknown set');
    per[it.set] = (per[it.set] || 0) + 1;
    if (it.q.split('____').length !== 2) bad(tag + ': needs exactly one ____');
    if (!it.opts.includes(it.a)) bad(tag + ': answer not among the options');
    if (new Set(it.opts.map(low)).size !== it.opts.length) bad(tag + ': duplicate options');
    if (it.opts.length < 3 || it.opts.length > 4) bad(tag + ': needs 3 or 4 options');
    if (seenQ.has(it.q)) bad(tag + ': duplicate q'); seenQ.add(it.q);
    spoken(tag + ' q', it.q.replace('____', 'x'));
    if (it.set !== 'lk') it.opts.forEach((o) => spoken(tag + ' option', o));
    if (it.full !== undefined) { spoken(tag + ' full', it.full); if (it.full.includes('____')) bad(tag + ': full still has the gap'); }
    if (it.set === 'lk') {
      if (!it.full) { bad(tag + ': lk item needs full'); return; }
      if (it.opts.join('|') !== LK.join('|')) bad(tag + ': lk options must be ' + LK.join(', '));
      const m = /(\S+)\s+____\s+(\S+)/.exec(it.q);
      if (!m) { bad(tag + ': the gap must sit between two words'); return; }
      const prev = low(m[1]).replace(/[^\p{L}-]/gu, ''), next = low(m[2]).replace(/[^\p{L}-]/gu, ''), f = ' ' + low(it.full).replace(/[^\p{L}\s-]/gu, ' ').replace(/\s+/g, ' ') + ' ';
      const need = { na: ' ' + prev + ' na ' + next + ' ', '-ng': ' ' + prev + 'ng ' + next + ' ', '-g': ' ' + prev + 'g ' + next + ' ', nothing: ' ' + prev + ' ' + next + ' ' }[it.a];
      if (it.a === 'na' && !/ na /.test(f)) bad(tag + ': full lacks " na "');
      if (!need || !f.includes(need)) bad(tag + ': full does not have the linker the answer gives (' + (need || '?').trim() + '): ' + it.full);
      const mech = { na: ' na ', '-ng': 'ng ', '-g': 'g ', nothing: ' ' }[it.a];
      if (mech && it.q.replace(/\s*____\s*/, mech) !== it.full) warn(tag + ': full is not q with the linker put in: ' + it.full);
    }
    if (it.set === 'neg' && (it.opts.length !== 3 || it.opts.map(low).sort().join('|') !== NEG.slice().sort().join('|'))) bad(tag + ': neg options must be hindi, wala, huwag');
    if (it.set === 'neg' && it.q.startsWith('____') && it.opts.some((o) => o[0] !== o[0].toUpperCase())) bad(tag + ': gap starts the sentence, so capitalise all three options');
    if (it.set === 'pn' && !PN.includes(it.opts.map(low).join('|'))) bad(tag + ': pn options must be one pronoun in the order topic, ng, sa form');
    if ((it.set === 'qw' || it.set === 'neg') && it.q.startsWith('____') !== /^[A-Z]/.test(it.a)) bad(tag + ': capital letter of the answer does not match the gap position');
  });
  ['lk', 'pt', 'pn', 'qw', 'neg'].forEach((st) => { if ((per[st] || 0) < 25) (seed ? warn : bad)('DRILL_GAPS set ' + st + ' has ' + (per[st] || 0) + ' items (25+ wanted)'); });
  const perC = {};
  CH.forEach((it, i) => {
    const tag = 'change ' + (it && it.type) + ' ' + i + ' (' + (it && it.from) + ')';
    if (!it || !it.from || !it.to || !it.en || !it.why || !Array.isArray(it.wrong)) { bad(tag + ': missing from, to, en, why or wrong'); return; }
    if (!['q', 'neg', 'po', 'asp'].includes(it.type)) bad(tag + ': unknown type');
    perC[it.type] = (perC[it.type] || 0) + 1;
    if (it.alt !== undefined && !Array.isArray(it.alt)) bad(tag + ': alt must be a list');
    const ok = [it.to].concat(it.alt || []).map(strip);
    if (it.wrong.length !== 3) bad(tag + ': needs exactly 3 wrong');
    it.wrong.forEach((w) => { if (ok.includes(strip(w))) bad(tag + ': a wrong sentence equals an accepted answer: ' + w); });
    if (new Set(it.wrong.map(strip)).size !== it.wrong.length) bad(tag + ': duplicate wrong sentences');
    if (strip(it.from) === strip(it.to)) bad(tag + ': to equals from');
    if (it.type === 'asp' && !['past', 'now', 'future'].includes(it.time)) bad(tag + ': asp needs time past, now or future');
    spoken(tag + ' from', it.from); spoken(tag + ' to', it.to); (it.alt || []).forEach((a) => spoken(tag + ' alt', a));
    it.wrong.forEach((w) => { if (ACC.test(w) || CAPS.test(w)) bad(tag + ': wrong sentence has an accent or ALL-CAPS word: ' + w); });
  });
  ['q', 'neg', 'po', 'asp'].forEach((t) => { if ((perC[t] || 0) < 10) (seed ? warn : bad)('DRILL_CHANGE type ' + t + ' has ' + (perC[t] || 0) + ' items (12 wanted)'); });
  if (seed) warn('drills-grammar.js looks like the seed file (' + G.length + ' gaps, ' + CH.length + ' changes): count rules are warnings');
  const text = JSON.stringify([G, CH]).toLowerCase();
  ['baliw', 'adik', 'sira ulo', 'sira-ulo', 'loko'].forEach((w) => { if (new RegExp('\\b' + w + '\\b').test(text)) bad('stigmatizing word in drills-grammar.js: ' + w); });

  // The drill engine itself, loaded into the same scope: the aspect pool, the new rows and their lessons.
  let pool = null;
  try { vm.runInContext(fs.readFileSync(path.join(repo, 'js/drills.js'), 'utf8'), C, { filename: 'js/drills.js' }); pool = C.App.drillQs && C.App.drillQs.aspectPool ? C.App.drillQs.aspectPool() : null; }
  catch (e) { bad('js/drills.js did not load in the data check: ' + e.message); }
  if (pool) {
    if (pool.length < 300) bad('aspect pool has only ' + pool.length + ' sentences (300+ wanted)');
    pool.forEach((x) => {
      if (x.q.split('____').length !== 2 || x.q.replace('____', x.opts[0]) !== x.tl) bad('aspect pool: filled gap is not the sentence: ' + x.tl);
      if (x.opts.length < 3 || x.opts.length > 4 || new Set(x.opts).size !== x.opts.length) bad('aspect pool: options ' + x.opts.join(', ') + ' for ' + x.tl);
    });
    counts.aspectPool = pool.length; counts.aspectPoolClinical = pool.filter((x) => x.clin).length;
  }
  const lessonIds = new Set(C.LESSONS.map((l) => l.id)), rows = (C.App.DRILLS || []);
  const NEW = ['aspect', 'linker', 'particle', 'pronoun', 'qword', 'negation', 'change'];
  NEW.forEach((id) => { const d = rows.find((r) => r.id === id); if (!d) bad('drill row missing: ' + id); else { (d.lessons || []).forEach((l) => { if (!lessonIds.has(l)) bad('drill ' + id + ': unknown lesson ' + l); }); if (d.g !== 'Grammar') bad('drill ' + id + ' should be in Grammar'); } });
  rows.forEach((d) => { if (!['Grammar', 'Vocabulary', 'Listening and writing'].includes(d.g)) bad('drill ' + d.id + ' has no group g'); });
  // Collect-texts lists every gap sentence filled and every change sentence (not the wrong ones).
  const texts = path.join(repo, 'tools/collect-texts.js');
  if (!/DRILL_GAPS/.test(fs.readFileSync(texts, 'utf8')) || !/DRILL_CHANGE/.test(fs.readFileSync(texts, 'utf8')) || !/drills-grammar\.js/.test(fs.readFileSync(texts, 'utf8'))) bad('tools/collect-texts.js does not load or list DRILL_GAPS / DRILL_CHANGE');
  Object.assign(counts, { gaps: G.length, change: CH.length });
};
