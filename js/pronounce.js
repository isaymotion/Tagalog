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
  // Acronyms read letter by letter. Anything else in capitals (PARA SA, PAKSA, SAN ISIDRO in headings) is a Tagalog word: lowercased.
  const ACRONYMS = new Set(['NCMH', 'PRN', 'BP', 'BHW', 'OPD', 'ER', 'CR', 'OT', 'TV', 'ATM', 'PGH', 'OFW', 'US', 'IV', 'LRT', 'MRT', 'BPO', 'ECG', 'OB', 'CT', 'DT', 'MDRRMO', 'NDRRMC', 'RHU', 'ICU', 'EEG', 'MRI', 'HIV', 'PWD', 'ID', 'OK', 'DSWD', 'DOH', 'PNP', 'NBI', 'SSS', 'TB']);
  const NUMBERS = { '1553': 'wan, payb, payb, tri', '911': 'nayn, wan, wan' };
  window.PRONOUNCE = (t) => String(t || '')
    .replace(/\bDra\.\s*/g, 'Doktora ').replace(/\bDr\.\s*/g, 'Doktor ').replace(/\bDoc\b/g, 'Dok')
    .replace(/\b(1553|911)\b/g, (m) => NUMBERS[m])
    .replace(/\by medya\b/g, 'i medya')
    // "I-summarize", "I-check" at the start of a sentence: lowercase so the voice says "ee", not the English letter I.
    .replace(/(^|[.!?…"“]\s*)I-(?=[a-z])/g, (m, pre) => pre.replace(/[.!?…]\s*$/, ', ') + 'i-')
    .replace(/\b[A-Z]{2,}\b/g, (w) => (w === 'OK' ? 'okey' : ACRONYMS.has(w) ? spell(w) : w.toLowerCase()));
})();
