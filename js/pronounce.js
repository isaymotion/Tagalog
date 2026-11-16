/* Pronunciation fixes for the Filipino voice (3.6.2). The neural voice mangles acronyms and English abbreviations:
   "Doc" comes out as "docee", sentence-initial "I-inform" as "ay-inform", "PRN" as one word.
   window.PRONOUNCE(text) respells them for speech only; the screen always shows the normal spelling.
   Used by App.spoken (js/core.js) before playing or looking up a clip, and by tools/collect-texts.js when recording,
   so the clip names match. Lines other apps play from our pack (tools/extra-texts/msetrainer.txt) are recorded
   WITHOUT this rule, because MSE Trainer computes clip names from its own text.
   Changing this file changes clip names: the audio job then records the new clips and drops the old ones. */
(function () {
  // Letter names as Filipinos say them in acronyms.
  const L = { A: 'ey', B: 'bi', C: 'si', D: 'di', E: 'i', F: 'ef', G: 'dyi', H: 'eyts', I: 'ay', J: 'dyey', K: 'key', L: 'el', M: 'em', N: 'en', O: 'o', P: 'pi', Q: 'kyu', R: 'ar', S: 'es', T: 'ti', U: 'yu', V: 'bi', W: 'dabol-yu', X: 'eks', Y: 'way', Z: 'zi' };
  const spell = (w) => w.split('').map((c) => L[c] || c).join('-');
  // All-caps words. The default is to spell them out, because a new one is almost always an acronym (DSM, CIWA, ADHD),
  // so nothing needs adding here when content gains one. A capital word is read as a WORD instead when it is:
  //   - in WORDS (acronyms Filipinos say as words, and English words written in capitals);
  //   - a Tagalog dictionary word (DICT_RAW headwords written in lower case; acronym entries such as NCMH stay acronyms);
  //   - part of an all-caps heading: one or more capital words that open the text or a sentence and end in ":" or a
  //     dash (PARA SA:, PAKSA:, SAN ISIDRO —).
  // tests/data_check.js (dev-tools) prints every all-caps word in the spoken texts with the way it will be read.
  const WORDS = new Set(['OK', 'PAGASA', 'COVID', 'NAIA', 'ASEAN', 'UNICEF', 'NASA', 'CIWA', 'NEDA', 'TESDA', 'SONA', 'AIDS', 'LASIK', 'SIM', 'PIN', 'WIFI']);
  const SAY_AS = { OK: 'okey', CIWA: 'siwa', WIFI: 'wayfay', SIM: 'sim', PIN: 'pin', AIDS: 'eyds' };
  // Headwords written all in capitals (NCMH, CR) are acronym entries and are left out, so they stay acronyms.
  let dict = null; // lower-case Tagalog headwords, built on first use (DICT_RAW is loaded before this runs)
  const inDict = (w) => {
    if (!dict) { dict = new Set(); (window.DICT_RAW || []).join('\n').split('\n').forEach((l) => { const h = l.split('|')[0].trim(); if (h && !h.startsWith('#') && h !== h.toUpperCase()) dict.add(h.toLowerCase()); }); }
    return dict.has(w.toLowerCase());
  };
  const CAPS = /\b[A-Z]{2,}\b/g;
  const capsWord = (w, i, t) => {
    if (WORDS.has(w)) return SAY_AS[w] || w.toLowerCase();
    // The run of capital words this one belongs to (PARA SA, SAN ISIDRO) counts as a heading only when it opens the
    // text or a sentence and ends in ":" or a dash. "DSM, ADHD" or "ng DT: ..." mid-sentence are spelled.
    const before = t.slice(0, i).replace(/(?:\b[A-Z]{2,}[ \t]+)+$/, ''), after = t.slice(i + w.length).replace(/^(?:[ \t]+[A-Z]{2,}\b)+/, '');
    const heading = (before === '' || /[.!?]\s+$/.test(before)) && /^\s*(:|—|–|-\s)/.test(after);
    return heading || inDict(w) ? w.toLowerCase() : spell(w);
  };
  // How a capital word in t will be said (for the data check's report).
  window.PRONOUNCE_CAPS = (t) => [...String(t || '').matchAll(CAPS)].map((m) => [m[0], capsWord(m[0], m.index, m.input)]);
  const NUMBERS = { '1553': 'wan, payb, payb, tri', '911': 'nayn, wan, wan' };
  window.PRONOUNCE = (t) => String(t || '')
    .replace(/\bDra\.\s*/g, 'Doktora ').replace(/\bDr\.\s*/g, 'Doktor ').replace(/\bDoc\b/g, 'Dok')
    .replace(/\b(1553|911)\b/g, (m) => NUMBERS[m])
    .replace(/\by medya\b/g, 'i medya')
    // "I-summarize", "I-check" at the start of a sentence: lowercase so the voice says "ee", not the English letter I.
    .replace(/(^|[.!?…"“]\s*)I-(?=[a-z])/g, (m, pre) => pre.replace(/[.!?…]\s*$/, ', ') + 'i-')
    .replace(CAPS, capsWord);
})();
