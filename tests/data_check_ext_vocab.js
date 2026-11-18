/* 3.13.0 Vocabulary practice data (js/data/vocab-sets.js, view js/vocab.js). */
const fs = require('fs'), path = require('path');
module.exports = (C, bad, counts, repo) => {
  const P = C.WORD_PAIRS, O = C.WORD_ODD;
  if (!Array.isArray(P) || !Array.isArray(O)) { bad('vocab: WORD_PAIRS or WORD_ODD missing (js/data/vocab-sets.js loaded?)'); return; }
  const opp = P.filter((x) => x && x.type === 'opp'), col = P.filter((x) => x && x.type === 'col');
  counts.pairsOpp = opp.length; counts.pairsCol = col.length; counts.oddOne = O.length;
  // A seed file (a few items while the writer works) only warns on the count thresholds.
  const seed = P.length + O.length < 40;
  [['opposites', opp.length, 60], ['collocations', col.length, 70], ['odd one out', O.length, 40]].forEach(([n, have, want]) => {
    if (have < want) { if (seed) console.log('WARN vocab seed file: ' + have + ' ' + n + ' (the full set needs ' + want + ')'); else bad('vocab: only ' + have + ' ' + n + ', need ' + want); }
  });
  const ids = new Set();
  P.concat(O).forEach((x, i) => { if (!x || !x.id) { bad('vocab item ' + i + ' has no id'); return; } if (ids.has(x.id)) bad('vocab duplicate id ' + x.id); ids.add(x.id); });
  P.forEach((x) => { if (x && x.type !== 'opp' && x.type !== 'col') bad('vocab ' + x.id + ' type must be opp or col'); });
  opp.forEach((x) => { if (!/^wp-o-\d{3}$/.test(x.id)) bad('vocab opposite id ' + x.id); });
  col.forEach((x) => { if (!/^wp-c-\d{3}$/.test(x.id)) bad('vocab collocation id ' + x.id); });
  O.forEach((x) => { if (!/^wo-\d{3}$/.test(x.id)) bad('vocab odd-one-out id ' + x.id); });
  // Tagalog fields: lower case words (no ALL-CAPS word), no accented letters.
  const tlCheck = (id, t) => {
    if (typeof t !== 'string' || !t.trim()) { bad('vocab ' + id + ' empty Tagalog field'); return; }
    if (/[áéíóúàèìòùâêîôûäëïöü]/i.test(t)) bad('vocab ' + id + ' accented letter in "' + t + '"');
    if (/\b[A-Z]{2,}\b/.test(t)) bad('vocab ' + id + ' all-caps word in "' + t + '"');
  };
  const enWords = (s) => String(s || '').trim().split(/\s+/).filter(Boolean).length;
  // Opposites: one word a side, each word once in the whole list, ea / eb one to three English words.
  const seenOpp = new Map();
  opp.forEach((x) => {
    ['a', 'b'].forEach((k) => {
      tlCheck(x.id, x[k]);
      const w = String(x[k] || '').toLowerCase().trim();
      if (/\s/.test(w)) bad('vocab ' + x.id + ' opposite is not one word: ' + w);
      if (seenOpp.has(w)) bad('vocab opposite word twice: ' + w + ' (' + seenOpp.get(w) + ', ' + x.id + ')'); else seenOpp.set(w, x.id);
      const e = x['e' + k];
      if (!e || enWords(e) > 3) bad('vocab ' + x.id + ' English e' + k + ' must be one to three words: ' + e);
    });
    if (String(x.ea).toLowerCase() === String(x.eb).toLowerCase()) bad('vocab ' + x.id + ' both sides have the same English');
  });
  // Collocations: a = verb + marker, b = one noun used once, each verb at most twice, an English expression.
  const aCount = {}, seenB = new Map();
  col.forEach((x) => {
    tlCheck(x.id, x.a); tlCheck(x.id, x.b);
    const a = String(x.a || '').toLowerCase().trim(), b = String(x.b || '').toLowerCase().trim();
    aCount[a] = (aCount[a] || 0) + 1;
    if (seenB.has(b)) bad('vocab collocation noun twice: ' + b + ' (' + seenB.get(b) + ', ' + x.id + ')'); else seenB.set(b, x.id);
    if (!/\s(ng|sa|ang|ng mga|sa mga)$/.test(a)) console.log('WARN vocab ' + x.id + ' verb part does not end in a marker: ' + a);
    if (!x.en || !x.ea || !x.eb) bad('vocab ' + x.id + ' needs en, ea and eb');
  });
  Object.entries(aCount).forEach(([a, n]) => { if (n > 2) bad('vocab collocation verb used ' + n + ' times (max 2): ' + a); });
  // Odd one out: four distinct single words, odd in 0..3, a category and an explanation; no word in more than two items.
  const wCount = {}, pos = [0, 0, 0, 0];
  O.forEach((x) => {
    if (!Array.isArray(x.w) || x.w.length !== 4) { bad('vocab ' + x.id + ' needs four words'); return; }
    x.w.forEach((w) => { tlCheck(x.id, w); if (/\s/.test(String(w).trim())) bad('vocab ' + x.id + ' word is not one word: ' + w); const k = String(w).toLowerCase(); wCount[k] = (wCount[k] || 0) + 1; });
    if (new Set(x.w.map((w) => String(w).toLowerCase())).size !== 4) bad('vocab ' + x.id + ' words are not distinct');
    if (!Number.isInteger(x.odd) || x.odd < 0 || x.odd > 3) bad('vocab ' + x.id + ' odd must be 0 to 3'); else pos[x.odd]++;
    if (!x.why || !String(x.why).trim()) bad('vocab ' + x.id + ' has no why');
    if (!x.cat) bad('vocab ' + x.id + ' has no cat');
  });
  Object.entries(wCount).forEach(([w, n]) => { if (n > 2) bad('vocab odd-one-out word in ' + n + ' items (max 2): ' + w); });
  if (!seed && O.length && Math.max(...pos) > O.length * 0.4) console.log('WARN vocab odd-one-out positions uneven: ' + pos.join('/'));
  // Wiring: the page and its data are loaded, cached offline and recorded.
  const html = fs.readFileSync(path.join(repo, 'index.html'), 'utf8'), sw = fs.readFileSync(path.join(repo, 'sw.js'), 'utf8'), ct = fs.readFileSync(path.join(repo, 'tools', 'collect-texts.js'), 'utf8');
  ['js/data/vocab-sets.js', 'js/vocab.js'].forEach((f) => { if (!html.includes('src="' + f + '"')) bad('index.html does not load ' + f); if (!sw.includes("'" + f + "'")) bad('sw.js FILES lacks ' + f); });
  if (html.indexOf('js/data/vocab-sets.js') < html.indexOf('js/data/word-sets.js')) bad('vocab-sets.js must load after word-sets.js');
  if (html.indexOf('js/vocab.js') < html.indexOf('js/pictures.js')) bad('js/vocab.js must load after js/pictures.js (it chains App.progressExtra)');
  if (!ct.includes("'js/data/vocab-sets.js'") || !/WORD_PAIRS/.test(ct)) bad('tools/collect-texts.js does not record WORD_PAIRS');
  // Every word game has enough words in every category it offers (5 distinct glosses for a round of Match the pairs).
  const D = (C.App && C.App.DICT) || [];
  Object.keys((C.App && C.App.CATS) || {}).filter((c) => c !== 'stigma').forEach((c) => {
    const ok = D.filter((e) => e.cat === c && e.tl.trim().split(/\s+/).length <= 3 && e.en.length <= 40);
    if (new Set(ok.map((e) => e.nen)).size < 5) bad('vocab: category ' + c + ' has fewer than 5 usable words for Match the pairs');
  });
};
