/* Tagalog verb conjugation engine.
   Generates infinitive / completed / incompleted / contemplated forms
   for the common affix classes. Irregular forms are supplied as overrides in verbs.js. */
(function () {
  const V = /[aeiou]/;
  const isV = c => V.test(c);

  // First consonant+vowel (or just the vowel) of a root, used for reduplication.
  function redupSyl(root) {
    if (isV(root[0])) return root[0];
    for (let i = 1; i < root.length; i++) if (isV(root[i])) return root[0] + root[i];
    return root.slice(0, 2);
  }
  // Insert an infix (-um- or -in-) after the first consonant. Vowel-initial words take it as a prefix.
  function infix(word, inf) {
    if (isV(word[0])) return inf + word;
    if (inf === 'in' && (word[0] === 'l' || word[0] === 'y')) return 'ni' + word; // niluto, niyakap
    return word[0] + inf + word.slice(1);
  }
  // Add -in/-an (or -hin/-han after a vowel). Final-syllable o becomes u: inom → inumin.
  function suffix(root, suf) {
    const last = root[root.length - 1];
    if (isV(last)) {
      let r = root;
      if (last === 'o') r = root.slice(0, -1) + 'u';
      return r + 'h' + suf;
    }
    const m = root.match(/^(.*)o([^aeiou]+)$/);
    const r = m ? m[1] + 'u' + m[2] : root;
    return r + suf;
  }
  const join = (pre, w) => (isV(w[0]) && /g$/.test(pre) ? pre + '-' + w : pre + w);

  function conjugate(root, affix) {
    const rd = redupSyl(root) + root; // kakain, iinom
    switch (affix) {
      case 'um': return {
        inf: infix(root, 'um'), com: infix(root, 'um'), inc: infix(rd, 'um'), con: rd };
      case 'mag': return {
        inf: join('mag', root), com: join('nag', root), inc: join('nag', rd), con: join('mag', rd) };
      case 'ma': return {
        inf: 'ma' + root, com: 'na' + root, inc: 'na' + rd, con: 'ma' + rd };
      case 'in': return {
        inf: suffix(root, 'in'), com: infix(root, 'in'), inc: infix(rd, 'in'), con: suffix(rd, 'in') };
      case 'i': return {
        inf: 'i' + root, com: 'i' + infix(root, 'in'), inc: 'i' + infix(rd, 'in'), con: 'i' + rd };
      case 'an': return {
        inf: suffix(root, 'an'), com: suffix(infix(root, 'in'), 'an'),
        inc: suffix(infix(rd, 'in'), 'an'), con: suffix(rd, 'an') };
    }
    return null;
  }

  const FOCUS = {
    um: 'Actor focus (-um-)', mag: 'Actor focus (mag-)', ma: 'Actor/stative (ma-)',
    in: 'Object focus (-in)', i: 'Conveyance/object focus (i-)', an: 'Locative/direction focus (-an)',
    custom: 'Special form'
  };
  const ASPECTS = {
    inf: 'Infinitive / command', com: 'Completed (past)', inc: 'Incompleted (ongoing / habitual)', con: 'Contemplated (future)'
  };

  window.Conj = { conjugate, redupSyl, infix, suffix, FOCUS, ASPECTS };
})();
