/* 3.17.0: Practise a lesson (LESSON_GAPS) and Listen and reply (LISTEN_REPLY). */
module.exports = (C, bad, counts, repo) => {
  const fs = require('fs'), path = require('path');
  const ACC = /[áàâäéèêëíìîïóòôöúùûü]/i, DIG = /\d/, CAPS = /\b[A-ZÑ]{2,}\b/;
  const voiceBad = (s) => (ACC.test(s) ? 'accent' : DIG.test(s) ? 'digit' : CAPS.test(s) ? 'capitals' : '');
  // ---- LESSON_GAPS ----
  const G = C.LESSON_GAPS;
  if (!G || typeof G !== 'object') { bad('LESSON_GAPS missing'); return; }
  const byId = new Map(C.LESSONS.map((l) => [l.id, l]));
  const qs = new Set();
  let n = 0;
  Object.keys(G).forEach((id) => {
    const l = byId.get(id);
    if (!l) return bad('LESSON_GAPS: unknown lesson ' + id);
    if (l.review) bad('LESSON_GAPS: review lesson ' + id);
    const list = G[id];
    if (!Array.isArray(list) || list.length !== 10) return bad('LESSON_GAPS ' + id + ': ' + (Array.isArray(list) ? list.length : 'no') + ' items, want 10');
    list.forEach((it, k) => {
      const w = 'LESSON_GAPS ' + id + '[' + k + ']';
      n++;
      if (!it || typeof it.q !== 'string') return bad(w + ': no q');
      if (it.q.split('____').length !== 2) bad(w + ': q needs exactly one ____: ' + it.q);
      if (typeof it.en !== 'string' || !it.en.trim()) bad(w + ': no en');
      if (typeof it.why !== 'string' || !it.why.trim()) bad(w + ': no why');
      if (!Array.isArray(it.opts) || it.opts.length < 3 || it.opts.length > 4) bad(w + ': 3 or 4 options');
      else { if (new Set(it.opts).size !== it.opts.length) bad(w + ': repeated option'); if (!it.opts.includes(it.a)) bad(w + ': answer not in options'); }
      const key = it.q.toLowerCase().replace(/\s+/g, ' ').trim();
      if (qs.has(key)) bad(w + ': duplicate q ' + it.q); qs.add(key);
      const full = it.q.replace('____', it.a), vb = voiceBad(full);
      if (vb) bad(w + ': ' + vb + ' in the filled sentence: ' + full);
      if (it.voice != null) {
        if (typeof it.voice !== 'string' || !it.voice.trim()) bad(w + ': empty voice');
        else { const v = voiceBad(it.voice); if (v) bad(w + ': ' + v + ' in voice: ' + it.voice); if (/['’]/.test(it.voice)) bad(w + ': voice keeps an apostrophe: ' + it.voice); }
      }
    });
  });
  const without = C.LESSONS.filter((l) => !l.review && !Object.prototype.hasOwnProperty.call(G, l.id)).map((l) => l.id);
  if (without.length) console.log('WARN lessons without practice gaps (' + without.length + '): ' + without.join(', '));
  // ---- LISTEN_REPLY ----
  const R = C.LISTEN_REPLY;
  if (!Array.isArray(R)) { bad('LISTEN_REPLY missing'); return; }
  const ids = new Set(), LV = ['A1', 'A2', 'B1', 'B2'], STIG = /\b(baliw|adik|sira-ulo|loko-loko)\b/i;
  R.forEach((x, k) => {
    const w = 'LISTEN_REPLY[' + k + '] ' + (x && x.id);
    if (!x || typeof x.id !== 'string' || !/^lr-\d{3}$/.test(x.id)) return bad(w + ': id must be lr-NNN');
    if (ids.has(x.id)) bad(w + ': duplicate id'); ids.add(x.id);
    if (!LV.includes(x.lv)) bad(w + ': level ' + x.lv);
    if (typeof x.clin !== 'boolean') bad(w + ': clin must be true or false');
    ['who', 'say', 'en', 'why'].forEach((f) => { if (typeof x[f] !== 'string' || !x[f].trim()) bad(w + ': no ' + f); });
    if (!Array.isArray(x.opts) || x.opts.length !== 4) return bad(w + ': 4 options');
    x.opts.forEach((o, j) => { if (!o || typeof o.tl !== 'string' || !o.tl.trim() || typeof o.en !== 'string' || !o.en.trim()) bad(w + ': option ' + j + ' needs tl and en'); });
    if (new Set(x.opts.map((o) => o && o.tl)).size !== 4) bad(w + ': repeated option');
    if (!Number.isInteger(x.a) || x.a < 0 || x.a > 3) bad(w + ': a must be 0 to 3');
    [x.say].concat(x.opts.map((o) => (o && o.tl) || '')).forEach((s) => { const v = voiceBad(s || ''); if (v) bad(w + ': ' + v + ' in spoken text: ' + s); if (STIG.test(s || '')) bad(w + ': stigmatizing word: ' + s); });
  });
  const ev = R.filter((x) => x && !x.clin), cl = R.filter((x) => x && x.clin);
  if (ev.length < 30) bad('LISTEN_REPLY: ' + ev.length + ' everyday items, want 30 or more');
  if (cl.length < 30) bad('LISTEN_REPLY: ' + cl.length + ' clinical items, want 30 or more');
  LV.forEach((v) => { if (!ev.some((x) => x.lv === v)) bad('LISTEN_REPLY: no everyday ' + v); if (!cl.some((x) => x.lv === v)) bad('LISTEN_REPLY: no clinical ' + v); });
  // ---- Wiring: loaded by index.html, cached by sw.js, recorded by tools/collect-texts.js ----
  const html = fs.readFileSync(path.join(repo, 'index.html'), 'utf8'), sw = fs.readFileSync(path.join(repo, 'sw.js'), 'utf8'), ct = fs.readFileSync(path.join(repo, 'tools/collect-texts.js'), 'utf8');
  ['js/data/lesson-gaps-1.js', 'js/data/lesson-gaps-2.js', 'js/data/lesson-gaps-3.js', 'js/data/lesson-gaps-4.js', 'js/data/listen-reply.js', 'js/reply.js'].forEach((f) => {
    if (!html.includes('src="' + f + '"')) bad('index.html does not load ' + f);
    if (!sw.includes("'" + f + "'")) bad('sw.js does not cache ' + f);
  });
  if (html.indexOf('lesson-gaps-4.js') > html.indexOf('lessons-zz-order.js') || html.indexOf('lesson-gaps-1.js') < html.indexOf('lesson-extra-7.js')) bad('index.html: lesson-gaps files must load after the lesson extras and before lessons-zz-order.js');
  if (!/LESSON_GAPS/.test(ct) || !/lesson-gaps/.test(ct) || !/LISTEN_REPLY/.test(ct) || !/listen-reply\.js/.test(ct)) bad('tools/collect-texts.js does not load or record LESSON_GAPS / LISTEN_REPLY');
  Object.assign(counts, { lessonGapLessons: Object.keys(G).length, lessonGaps: n, listenReply: R.length, listenReplyClinical: cl.length });
};
