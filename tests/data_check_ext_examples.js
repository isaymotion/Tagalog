/* 3.15.0 Example sentences for dictionary words (js/data/examples-*.js → window.DICT_EX; index App.exampleOf in js/core.js).
   Rows: [ 'tagalog|english' (the dictionary line's first two fields), sentence, English, form? ]. Partial data passes:
   words without an example only warn. */
module.exports = (C, bad, counts) => {
  const X = C.DICT_EX, A = C.App;
  if (X === undefined) { console.log('WARN examples: window.DICT_EX is not loaded (no js/data/examples-*.js in index.html)'); counts.examples = 0; return; }
  if (!Array.isArray(X)) { bad('examples: DICT_EX is not an array'); return; }
  if (!A || !Array.isArray(A.DICT)) { bad('examples: App.DICT missing'); return; }
  const byKey = new Map();
  A.DICT.forEach((e) => { const k = e.tl + '|' + e.en; byKey.set(k, (byKey.get(k) || []).concat(e)); });
  const seen = new Set(), sentences = new Map(), noWhole = [], lengthWarn = [];
  const STIG = /baliw|(^|[^a-z])adik([^a-z]|$)|sira-?ulo|loko-?loko/i;
  let ok = 0;
  X.forEach((x, i) => {
    if (!Array.isArray(x) || x.length < 3 || x.length > 4 || x.some((v) => typeof v !== 'string')) { bad('examples row ' + i + ' malformed: ' + JSON.stringify(x)); return; }
    const [key, tl, en, form0] = x;
    const where = 'examples "' + key + '"';
    if (seen.has(key)) bad(where + ' duplicate key'); seen.add(key);
    const hits = byKey.get(key) || [];
    if (hits.length !== 1) { bad(where + (hits.length ? ' matches ' + hits.length + ' dictionary entries' : ' matches no dictionary entry (tl|en must be copied exactly)')); return; }
    const e = hits[0];
    if (!tl.trim() || !en.trim()) { bad(where + ' empty sentence or English'); return; }
    if (e.cat === 'stigma') bad(where + ' is a stigmatizing word: no example sentence');
    if (form0 !== undefined && !form0.trim()) bad(where + ' empty form (leave the 4th item out instead)');
    const form = (form0 && form0.trim()) || e.tl.split(' / ')[0].trim();
    if (!tl.toLowerCase().includes(form.toLowerCase())) bad(where + ' sentence lacks the form "' + form + '": ' + tl);
    else if (A.exampleFind && !A.exampleFind(tl, form)) noWhole.push(key + ' :: ' + tl);
    if (/[\u0300-\u036f]/.test(tl.normalize('NFD').replace(/([nN])\u0303/g, '$1'))) bad(where + ' accented letter: ' + tl);
    if (/\d/.test(tl)) bad(where + ' digit (write numbers as words): ' + tl);
    const headCaps = e.tl.split(/[\s\/-]+/).filter((w) => /^[A-Z]{2,}$/.test(w));
    (tl.match(/\b[A-Z]{2,}\b/g) || []).forEach((w) => { if (!headCaps.includes(w)) bad(where + ' all-caps word ' + w + ' (only an all-caps headword may be): ' + tl); });
    if (STIG.test(tl)) bad(where + ' stigmatizing word in: ' + tl);
    const n = tl.trim().split(/\s+/).length;
    if (n < 3 || n > 16) lengthWarn.push(n + ' words: ' + key);
    const s = tl.trim().toLowerCase();
    sentences.set(s, (sentences.get(s) || []).concat(key));
    ok++;
  });
  const missing = A.DICT.filter((e) => e.cat !== 'stigma' && !seen.has(e.tl + '|' + e.en));
  counts.examples = ok; counts.examplesMissing = missing.length;
  if (missing.length) console.log('WARN examples: ' + missing.length + ' dictionary words have no example sentence yet, e.g. ' + missing.slice(0, 20).map((e) => e.tl + '|' + e.en).join('; '));
  if (lengthWarn.length) console.log('WARN examples: ' + lengthWarn.length + ' sentences outside 3 to 16 words: ' + lengthWarn.slice(0, 20).join('; '));
  if (noWhole.length) console.log('WARN examples: ' + noWhole.length + ' sentences contain the form only inside a longer word (no highlight, left out of In context): ' + noWhole.slice(0, 20).join(' | '));
  const dup = [...sentences.entries()].filter(([, ks]) => ks.length > 1);
  if (dup.length) console.log('WARN examples: ' + dup.length + ' sentences used twice: ' + dup.slice(0, 30).map(([s, ks]) => '"' + s + '" (' + ks.join(', ') + ')').join('; '));
  // The index in js/core.js agrees with the data: first row wins, stigma words never get one.
  if (A.exampleOf) {
    const first = new Map(); X.forEach((x) => { if (Array.isArray(x) && typeof x[0] === 'string' && !first.has(x[0])) first.set(x[0], x); });
    let wrong = 0;
    A.DICT.forEach((e) => { const ex = A.exampleOf(e), x = first.get(e.tl + '|' + e.en); const want = x && e.cat !== 'stigma' && x[1].trim() && x[2].trim() ? x[1].trim() : null; if ((ex ? ex.tl : null) !== want) wrong++; });
    if (wrong) bad('examples: App.exampleOf disagrees with DICT_EX for ' + wrong + ' words');
    if (A.exampleCount && A.exampleCount() !== A.DICT.filter((e) => A.exampleOf(e)).length) bad('examples: App.exampleCount is wrong');
  } else bad('examples: App.exampleOf missing (js/core.js)');
};
