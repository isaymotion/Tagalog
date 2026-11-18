/* 3.11.0: the ten lessons of js/data/lessons-2.js. */
module.exports = (C, bad, counts) => {
  const IDS = ['conditionals', 'reported-speech', 'social-verbs', 'accidental', 'plurals', 'location', 'relative-clauses', 'spoken-short-forms', 'spanish-numbers', 'exclamations'];
  const all = new Set(C.LESSONS.map((l) => l.id));
  if (all.size !== C.LESSONS.length) bad('duplicate lesson id');
  IDS.forEach((id) => {
    const l = C.LESSONS.find((x) => x.id === id);
    if (!l) return bad('lesson missing ' + id);
    if (l.quiz.length !== 6 || l.quiz.some((q) => q[1].length !== 3 || !q[3])) bad('lesson ' + id + ': 6 quiz items of 3 options with a reason');
    if (new Set(l.quiz.map((q) => q[2])).size < 2) bad('lesson ' + id + ': the right answer is always in the same place');
    const ex = [...l.body.matchAll(/<div class="ex"(?: data-voice="([^"]*)")?><b>([^<]+)<\/b><span>([^<]+)<\/span><\/div>/g)];
    if (ex.length !== (l.body.match(/class="ex"/g) || []).length) bad('lesson ' + id + ': an example box is not written as <div class="ex"><b>…</b><span>…</span></div>');
    if (ex.length < 8) bad('lesson ' + id + ': fewer than 8 examples');
    ex.forEach((m) => { const say = m[1] || m[2];
      if (/[áàâéèêíìîóòôúùû]/i.test(say)) bad('lesson ' + id + ': accent sent to the voice: ' + say);
      if (/\b[A-Z]{2,}\b/.test(say)) bad('lesson ' + id + ': capitals sent to the voice: ' + say);
      if (m[1] != null && /'/.test(m[1])) bad('lesson ' + id + ': data-voice keeps an apostrophe: ' + m[1]); });
    (l.body.match(/href="#\/lessons\/([\w-]+)"/g) || []).forEach((h) => { const t = h.slice(16, -1); if (!all.has(t)) bad('lesson ' + id + ' links to missing lesson ' + t); });
    if (/—/.test(l.body + l.summary)) bad('lesson ' + id + ': em dash');
  });
};
