/* Grammar handout generator. Topics: panlapi (affixes), verbs (conjugation tables, sentences, worksheet), lesson (any lesson),
   reading (any passage), dialogue (any dialogue, including the clinical ones from the case simulations) and listening
   (any listening exercise: notes, questions, dictation, transcript and key; the audio itself is played in the app),
   and (3.12.0) drills (a worksheet from the drill data, six parts, seeded sample, key on its own page).
   Same pattern as the psychiatry handout: one content model from the options, rendered as an on-screen
   preview (also used for printing) and as a PDF through pdfmake (App.pdfKit, shared with handout.js).
   Data: AFFIX_* in js/data/affixes.js; VERBS and VERB_SENTENCES (verbs.js, verb-sentences.js); LESSONS (lessons.js);
   READING (reading.js); DIALOGUES (dialogues.js) + PSYCH_CASES through App.caseDialogue; LISTENING (listening.js). */
(function () {
  const { esc } = App;
  const V = (App.views = App.views || {});
  const S = () => App.state;
  const TYPES = () => window.AFFIX_TYPES || [], RULES = () => window.AFFIX_RULES || [], LIST = () => window.AFFIX_LIST || [];
  const ITEMS = () => window.AFFIX_ITEMS || [], FOCUS = () => window.AFFIX_FOCUS_DRILL || [];
  const SUB = { uh: 'unlapi + hulapi', gh: 'gitlapi + hulapi', ug: 'unlapi + gitlapi' };
  const typeOf = (id) => TYPES().find((t) => t.id === id) || { id, tl: id, en: '' };

  const DEFAULTS = { topic: 'panlapi', type: 'all', set: 'all', cheat: true, rules: true, words: true, worksheet: true, key: true, english: 'show', paper: 'A4', size: 'normal', title: 'Panlapi: Tagalog Affixes', preparedFor: '' };
  const DEF = {
    panlapi: DEFAULTS,
    verbs: { topic: 'verbs', set: 'all', verb: 'all', english: 'show', paper: 'A4', size: 'normal', table: true, sentences: true, cheat: true, worksheet: true, key: true, title: 'Tagalog Verbs: Focus and Aspect', preparedFor: '' },
    lesson: { topic: 'lesson', lesson: '', english: 'show', paper: 'A4', size: 'normal', body: true, mistakes: true, more: true, quiz: true, quiz2: true, key: true, title: '', preparedFor: '' },
    reading: { topic: 'reading', reading: '', english: 'show', paper: 'A4', size: 'normal', passage: true, gloss: true, quiz: true, key: true, title: '', preparedFor: '' },
    dialogue: { topic: 'dialogue', dialogue: '', english: 'show', register: 'f', paper: 'A4', size: 'normal', script: true, role: true, key: true, title: '', preparedFor: '' },
    listening: { topic: 'listening', listening: '', english: 'show', paper: 'A4', size: 'normal', notes: true, quiz: true, dictation: true, transcript: true, key: true, title: '', preparedFor: '' },
    drills: { topic: 'drills', english: 'show', paper: 'A4', size: 'normal', n: '8', seed: 1, gap: true, errors: true, focus: true, change: true, translate: true, dictation: false, key: true, title: 'Tagalog Grammar Drills', preparedFor: '' }
  };
  const SUBKEYS = ['verbs', 'lesson', 'reading', 'dialogue', 'listening', 'drills'];
  // Panlapi keeps its old flat place in settings.ghandout; the other topics live in sub-keys so they never clobber it.
  function opts(topic) {
    const g = S().settings.ghandout || {};
    if (!topic || topic === 'panlapi') { const flat = Object.assign({}, g); SUBKEYS.forEach((k) => delete flat[k]); return Object.assign({}, DEFAULTS, flat); }
    return Object.assign({}, DEF[topic], g[topic] || {});
  }
  function saveOpts(o, topic) {
    const g = S().settings.ghandout || {};
    if (!topic || topic === 'panlapi') { const n = Object.assign({}, o); SUBKEYS.forEach((k) => { if (g[k]) n[k] = g[k]; }); S().settings.ghandout = n; }
    else S().settings.ghandout = Object.assign({}, g, { [topic]: o });
    App.save();
  }

  /* ---------- Content model ---------- */
  const pieces = (seg) => App.affixPieces(seg);
  // Every 4th word of the filtered list, up to 24: a stable sample for the root worksheet.
  function sample(list, n) {
    if (list.length <= n) return list.slice();
    const step = list.length / n, out = [];
    for (let i = 0; i < n; i++) out.push(list[Math.floor(i * step)]);
    return out;
  }
  // The focus drill comes in pairs that share their two forms (Uminom / Inumin). On a class sheet the pair
  // would give the answer away, so the first of each pair is listed before any second, and each item gets a
  // third same-root form from the word list (or the item's `alt`).
  function spreadPairs(list) {
    const key = (f) => [f.ok, f.no].map((x) => x.toLowerCase()).sort().join('|');
    const first = [], second = [], seen = new Set();
    list.forEach((f) => { const k = key(f); (seen.has(k) ? second : first).push(f); seen.add(k); });
    return first.concat(second);
  }
  function options(f, i) {
    const low = (s) => s.toLowerCase(), all = ITEMS();
    const it = all.find((x) => low(x.w) === low(f.ok)) || all.find((x) => low(x.w) === low(f.no));
    const alt = f.alt || (it && (all.find((x) => x.r === it.r && low(x.w) !== low(f.ok) && low(x.w) !== low(f.no)) || {}).w) || '';
    const cased = alt && /^[A-Z]/.test(f.ok) ? alt[0].toUpperCase() + alt.slice(1) : alt;
    const a = [f.ok, f.no]; if (cased) a.splice(i % 3, 0, cased);
    if (i % 2) a.reverse();
    return a;
  }
  function panlapiBuild(o) {
    const all = ITEMS().filter((it) => o.set !== 'clinical' || it.clin);
    const items = all.filter((it) => o.type === 'all' || it.t === o.type);
    const types = TYPES().filter((t) => o.type === 'all' || t.id === o.type);
    const list = LIST().filter((a) => o.type === 'all' || a.t === o.type);
    const focus = FOCUS().filter((f) => o.set !== 'clinical' || f.clin);
    const rootWs = sample(items, 24);
    const focusWs = spreadPairs(focus).map((f, i) => Object.assign({}, f, { a: options(f, i) }));
    return {
      topic: 'panlapi', title: o.title || DEFAULTS.title, preparedFor: o.preparedFor,
      date: new Date().toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' }),
      scope: (o.type === 'all' ? 'All five affix positions' : typeOf(o.type).tl) + (o.set === 'clinical' ? ' · clinical words' : '') + ' · ' + items.length + ' words',
      cheat: o.cheat ? { types, list } : null,
      rules: o.rules ? RULES() : null,
      words: o.words ? types.map((t) => ({ type: t, items: items.filter((it) => it.t === t.id) })).filter((g) => g.items.length) : null,
      worksheet: o.worksheet ? { roots: rootWs, focus: focusWs } : null,
      key: o.key && o.worksheet ? { roots: rootWs, focus: focusWs } : null,
      o
    };
  }
  const panlapiCanPrint = (o) => o.cheat || o.rules || o.words || o.worksheet;

  /* ---------- HTML preview ---------- */
  const segHTML = (seg) => '<span class="gh-seg">' + pieces(seg).map((x) => '<span class="gs-' + x.k + '">' + esc(x.s) + '</span>').join('') + '</span>';
  function renderHTML(m) {
    if (m.topic === 'verbs') return verbsHTML(m);
    if (m.topic === 'lesson') return lessonHTML(m);
    if (m.topic === 'reading') return readingHTML(m);
    if (m.topic === 'dialogue') return dialogueHTML(m);
    if (m.topic === 'listening') return listeningHTML(m);
    if (m.topic === 'drills') return drillsHTML(m);
    const o = m.o, en = o.english === 'show';
    let h = '<header class="ho-head"><img src="icons/logo-96.png" alt=""><div><h1>' + esc(m.title) + '</h1><p>' + (m.preparedFor ? 'Prepared for ' + esc(m.preparedFor) + ' · ' : '') + esc(m.date) + ' · ' + esc(m.scope) + '</p></div></header>';
    if (m.cheat) {
      h += '<section class="ho-sec"><h2>Where the affix sits</h2><div class="ho-tw"><table class="gh-types"><tr><th>Panlapi</th>' + (en ? '<th>Meaning</th>' : '') + '<th>Examples</th></tr>' +
        m.cheat.types.map((t) => '<tr><td><b>' + esc(t.tl) + '</b>' + (en ? '<small>' + esc(t.en) + '</small>' : '') + '</td>' + (en ? '<td>' + esc(t.how) + '</td>' : '') + '<td class="tl">' + t.ex.map(esc).join(', ') + '</td></tr>').join('') + '</table></div>';
      if (m.cheat.list.length) {
        h += '<h2>Affix cheat sheet</h2><div class="ho-tw"><table class="gh-list"><tr><th>Affix</th><th>Type</th>' + (en ? '<th>What it does</th>' : '') + '<th>Examples</th></tr>' +
          m.cheat.list.map((a) => '<tr><td class="tl"><b>' + esc(a.a) + '</b></td><td>' + esc(typeOf(a.t).tl) + '</td>' + (en ? '<td>' + esc(a.en) + '</td>' : '') + '<td class="tl">' + a.ex.map(esc).join(', ') + '</td></tr>').join('') + '</table></div>';
      }
      h += '</section>';
    }
    if (m.rules) {
      h += '<section class="ho-sec"><h2>Sound changes and placement rules</h2><div class="gh-rules">' + m.rules.map((r, i) => '<div class="gh-rule"><b>' + (i + 1) + '. ' + esc(r.title) + '</b><p class="tl">' + esc(r.tl) + '</p>' + (en ? '<p>' + esc(r.en) + '</p>' : '') +
        '<small>' + r.ex.map((e) => esc(e[1]) + ' → <b>' + esc(e[0]) + '</b>').join(' · ') + '</small></div>').join('') + '</div></section>';
    }
    if (m.words) {
      m.words.forEach((g) => {
        h += '<section class="ho-sec"><h2>' + esc(g.type.tl) + (en ? ' <span class="gh-h2en">' + esc(g.type.en) + '</span>' : '') + '</h2><div class="gh-words">' +
          g.items.map((it) => '<div class="gh-w">' + segHTML(it.seg) + '<span class="gh-root">ugat: ' + esc(it.r) + (it.sub ? ' · ' + SUB[it.sub] : '') + '</span>' + (en ? '<span class="gh-en">' + esc(it.en) + '</span>' : '') + (it.note ? '<small>' + esc(it.note) + '</small>' : '') + '</div>').join('') + '</div></section>';
      });
    }
    if (m.worksheet) {
      const w = m.worksheet;
      h += '<section class="ho-sec gh-ws"><h2>Worksheet</h2><p class="ho-goal">Name: ____________________ Date: __________</p>';
      if (w.roots.length) h += '<h3>A. Hiwalayin: mark the affix, write the root and the type</h3><div class="ho-tw"><table class="gh-wsA"><tr><th>#</th><th>Word</th><th>Root (ugat)</th><th>Type</th>' + (en ? '<th>Meaning</th>' : '') + '</tr>' +
        w.roots.map((it, i) => '<tr><td>' + (i + 1) + '</td><td class="tl"><b>' + esc(it.w) + '</b></td><td></td><td></td>' + (en ? '<td></td>' : '') + '</tr>').join('') + '</table></div>';
      if (w.focus.length) h += '<h3>B. Piliin: circle the form the sentence needs</h3><ol class="gh-wsB">' + w.focus.map((f) => '<li><span class="tl">' + esc(f.q) + '</span>' + (en ? ' <span class="gh-en">' + esc(f.en) + '</span>' : '') + '<div class="gh-opts">' + f.a.map((x) => '<span>☐ ' + esc(x) + '</span>').join('') + '</div></li>').join('') + '</ol>';
      h += '</section>';
    }
    if (m.key) {
      const k = m.key;
      h += '<section class="ho-sec gh-key"><h2>Answer key</h2>';
      if (k.roots.length) h += '<h3>A. Roots and types</h3><div class="ho-key">' + k.roots.map((it, i) => '<div><span class="ho-num">' + (i + 1) + '</span>' + segHTML(it.seg) + ' · ' + esc(it.r) + ' · ' + esc(typeOf(it.t).tl) + (en ? ' · ' + esc(it.en) : '') + '</div>').join('') + '</div>';
      if (k.focus.length) h += '<h3>B. Focus</h3><ol class="gh-keyB">' + k.focus.map((f) => '<li><b class="tl">' + esc(f.ok) + '</b> <small>' + esc(f.why) + '</small></li>').join('') + '</ol>';
      h += '</section>';
    }
    h += '<footer class="ho-foot">' + esc(APP_META.attribution) + '</footer>';
    return h;
  }

  /* ---------- PDF (pdfmake) ---------- */
  // Shared PDF scaffolding: title block, navy section bars, table layouts. Every topic builds on this.
  function kit(m, logo) {
    const K = App.pdfKit, { NAVY, MUTED, LINE, TINT } = K;
    const o = m.o, en = o.english === 'show';
    const base = { small: 8.5, normal: 10, large: 12 }[o.size] || 10;
    const a5 = o.paper === 'A5';
    const content = [];
    const titleStack = { stack: [{ text: m.title, style: 'h1' }, { text: (m.preparedFor ? 'Prepared for ' + m.preparedFor + ' · ' : '') + m.date + ' · ' + m.scope, style: 'meta' }] };
    content.push(logo ? { columns: [{ image: logo, width: a5 ? 30 : 40 }, Object.assign(titleStack, { width: '*', margin: [8, a5 ? 0 : 3, 0, 0] })], margin: [0, 0, 0, 10] } : Object.assign(titleStack, { margin: [0, 0, 0, 10] }));
    const heading = (title, sub) => ({ table: { widths: ['*'], body: [[{ text: [{ text: title, bold: true }].concat(sub ? [{ text: '   ' + sub, bold: false, fontSize: base - 1 }] : []), color: '#ffffff', fillColor: NAVY }]] }, layout: { hLineWidth: () => 0, vLineWidth: () => 0, paddingTop: () => 3, paddingBottom: () => 3, paddingLeft: () => 6 }, margin: [0, 10, 0, 4], fontSize: base + 1.5 });
    const sub = (t) => ({ text: t, bold: true, color: NAVY, fontSize: base + 0.5, margin: [0, 6, 0, 3] });
    const th = (t) => ({ text: t, bold: true, color: MUTED, fontSize: base - 1.5 });
    const layout = { hLineWidth: (i, node) => (i === 0 || i === node.table.body.length ? 0 : 0.5), vLineWidth: () => 0, hLineColor: () => LINE, paddingTop: () => 3, paddingBottom: () => 3, paddingLeft: (i) => (i === 0 ? 0 : 6), paddingRight: () => 4 };
    const grid = { hLineWidth: () => 0.5, vLineWidth: () => 0.5, hLineColor: () => LINE, vLineColor: () => LINE, paddingTop: () => 4, paddingBottom: () => 4 };
    return { K, NAVY, MUTED, LINE, TINT, o, en, base, a5, content, heading, sub, th, layout, grid };
  }
  // Tiny drawn checkbox (the PDF font has no ballot-box glyph).
  const boxNode = (t, base) => ({ columns: [{ text: '', width: 9, margin: [0, 2, 0, 0], table: { widths: [6], heights: [6], body: [[{ text: '', fontSize: 1 }]] }, layout: { hLineWidth: () => 0.7, vLineWidth: () => 0.7, hLineColor: () => '#333a52', vLineColor: () => '#333a52', paddingTop: () => 0, paddingBottom: () => 0, paddingLeft: () => 0, paddingRight: () => 0 } }, { text: t, width: 'auto' }], columnGap: 4, width: 'auto' });
  function finish(m, k, subject) {
    const { K, MUTED, NAVY, o, base, a5 } = k;
    return {
      pageSize: o.paper === 'LETTER' ? 'LETTER' : o.paper,
      pageMargins: a5 ? [28, 28, 28, 40] : [40, 40, 40, 50],
      info: { title: m.title, author: APP_META.author, subject, creator: 'Usap Tayo ' + APP_META.version },
      content: K.fixGlyphs(k.content),
      footer: (cur, total) => ({ margin: a5 ? [28, 8, 28, 0] : [40, 14, 40, 0], columns: [
        { text: APP_META.attribution, fontSize: a5 ? 5.5 : 6.5, color: MUTED },
        { text: cur + ' / ' + total, alignment: 'right', fontSize: a5 ? 6.5 : 7.5, color: MUTED, width: 40 }
      ] }),
      defaultStyle: { font: 'Roboto', fontSize: base, lineHeight: 1.15 },
      styles: { h1: { fontSize: a5 ? base + 5 : base + 8, bold: true, color: NAVY }, meta: { color: MUTED, fontSize: base - 1 } }
    };
  }

  function docDef(m, logo) {
    if (m.topic === 'verbs') return verbsDoc(m, logo);
    if (m.topic === 'lesson') return lessonDoc(m, logo);
    if (m.topic === 'reading') return readingDoc(m, logo);
    if (m.topic === 'dialogue') return dialogueDoc(m, logo);
    if (m.topic === 'listening') return listeningDoc(m, logo);
    if (m.topic === 'drills') return drillsDoc(m, logo);
    const k = kit(m, logo), { K, NAVY, MUTED, LINE, TINT, o, en, base, a5, content, heading, sub, th, layout, grid } = k, AFFIX = '#9a5b00';
    // Segmented word: affix pieces in bold brown, repeated syllable in italics.
    const segText = (seg, size) => ({ text: pieces(seg).map((x) => (x.k === 'a' ? { text: x.s, bold: true, color: AFFIX } : x.k === 'd' ? { text: x.s, italics: true, color: MUTED } : { text: x.s })), fontSize: size });

    if (m.cheat) {
      content.push(heading('Where the affix sits', en ? 'kung saan nakakabit ang panlapi' : ''));
      content.push({ table: { headerRows: 1, dontBreakRows: true, widths: en ? [a5 ? 60 : 80, '*', a5 ? '34%' : '36%'] : [a5 ? 70 : 90, '*'], body: [[th('Panlapi')].concat(en ? [th('Meaning')] : []).concat([th('Examples')])].concat(
        m.cheat.types.map((t) => [{ text: [{ text: t.tl, bold: true }].concat(en ? [{ text: '\n' + t.en, color: MUTED, fontSize: base - 1.5 }] : []) }].concat(en ? [{ text: t.how, fontSize: base - 0.5 }] : []).concat([{ text: t.ex.join(', '), italics: true }]))) }, layout });
      if (m.cheat.list.length) {
        content.push(heading('Affix cheat sheet', en ? 'what each affix does' : ''));
        content.push({ table: { headerRows: 1, dontBreakRows: true, widths: en ? [a5 ? 40 : 52, a5 ? 42 : 50, '*', a5 ? '30%' : '32%'] : [a5 ? 50 : 60, a5 ? 50 : 60, '*'], body: [[th('Affix'), th('Type')].concat(en ? [th('What it does')] : []).concat([th('Examples')])].concat(
          m.cheat.list.map((a) => [{ text: a.a, bold: true, color: AFFIX }, { text: typeOf(a.t).tl, fontSize: base - 1 }].concat(en ? [{ text: a.en, fontSize: base - 0.5 }] : []).concat([{ text: a.ex.join(', '), italics: true }]))) }, layout, fontSize: base - 0.5 });
      }
    }
    if (m.rules) {
      content.push(Object.assign(heading('Sound changes and placement rules', en ? 'mga tuntunin' : ''), { pageBreak: m.cheat && !a5 ? 'before' : undefined }));
      m.rules.forEach((r, i) => {
        const stack = [{ text: (i + 1) + '. ' + r.title, bold: true, color: NAVY }, { text: r.tl, italics: true, margin: [0, 1, 0, 1] }];
        if (en) stack.push({ text: r.en, fontSize: base - 0.5 });
        stack.push({ text: r.ex.map((e, k) => [{ text: (k ? '   ' : '') + e[1] + ' » ', color: MUTED }, { text: e[0], bold: true }]).flat(), fontSize: base - 1, margin: [0, 2, 0, 0] });
        content.push({ stack, unbreakable: true, margin: [0, 0, 0, 7] });
      });
    }
    if (m.words) {
      m.words.forEach((g, gi) => {
        content.push(Object.assign(heading(g.type.tl + (en ? ' · ' + g.type.en : ''), g.items.length + ' words'), { pageBreak: gi === 0 && (m.cheat || m.rules) ? 'before' : undefined }));
        const entry = (it) => ({ stack: [segText(it.seg, base + 1), { text: [{ text: 'ugat: ' + it.r + (it.sub ? ' · ' + SUB[it.sub] : ''), color: MUTED }].concat(en ? [{ text: '   ' + it.en, color: '#333a52' }] : []), fontSize: base - 1.5 }].concat(it.note ? [{ text: it.note, fontSize: base - 2, color: MUTED, italics: true }] : []), margin: [0, 0, 0, 4], unbreakable: true });
        const half = Math.ceil(g.items.length / 2);
        content.push({ columns: [g.items.slice(0, half), g.items.slice(half)].map((part) => ({ stack: part.map(entry), width: '*' })), columnGap: 16 });
      });
    }
    if (m.worksheet) {
      const w = m.worksheet;
      content.push(Object.assign(heading('Worksheet', ''), { pageBreak: content.length > 1 ? 'before' : undefined }));
      content.push({ text: 'Name: ______________________   Date: ____________', margin: [0, 2, 0, 4] });
      if (w.roots.length) {
        content.push(sub('A. Hiwalayin: underline the affix, then write the root and the type'));
        const head = [th('#'), th('Word'), th('Root (ugat)'), th('Type')].concat(en ? [th('Meaning')] : []);
        content.push({ table: { headerRows: 1, dontBreakRows: true, widths: [16, '*', '*', a5 ? 60 : 80].concat(en ? ['*'] : []), body: [head].concat(w.roots.map((it, i) => [{ text: String(i + 1), color: MUTED }, { text: it.w, bold: true }, '', ''].concat(en ? [''] : []))) }, layout: grid, fontSize: base });
      }
      if (w.focus.length) {
        content.push(Object.assign(sub('B. Piliin: tick the form the sentence needs'), { pageBreak: w.roots.length && !a5 ? 'before' : undefined }));
        const box = (t) => ({ columns: [{ text: '', width: 9, margin: [0, 2, 0, 0], table: { widths: [6], heights: [6], body: [[{ text: '', fontSize: 1 }]] }, layout: { hLineWidth: () => 0.7, vLineWidth: () => 0.7, hLineColor: () => '#333a52', vLineColor: () => '#333a52', paddingTop: () => 0, paddingBottom: () => 0, paddingLeft: () => 0, paddingRight: () => 0 } }, { text: t, width: 'auto' }], columnGap: 4, width: 'auto' });
        w.focus.forEach((f, i) => content.push({ stack: [{ text: [{ text: (i + 1) + '. ', color: MUTED }, { text: f.q, bold: true }].concat(en ? [{ text: '   ' + f.en, color: MUTED, fontSize: base - 1 }] : []) }, { columns: f.a.map(box), columnGap: 24, margin: [14, 2, 0, 0] }], unbreakable: true, margin: [0, 0, 0, 6] }));
      }
    }
    if (m.key) {
      const k = m.key;
      content.push(Object.assign(heading('Answer key', ''), { pageBreak: 'before' }));
      if (k.roots.length) {
        content.push(sub('A. Roots and types'));
        const half = Math.ceil(k.roots.length / 2);
        const row = (it, i) => ({ text: [{ text: (i + 1) + '  ', color: MUTED }].concat(segText(it.seg).text).concat([{ text: ' · ' + it.r + ' · ' + typeOf(it.t).tl + (en ? ' · ' + it.en : ''), color: MUTED }]), fontSize: base - 1, margin: [0, 0, 0, 2] });
        content.push({ columns: [k.roots.slice(0, half), k.roots.slice(half)].map((part, c) => ({ stack: part.map((it, i) => row(it, i + c * half)), width: '*' })), columnGap: 14 });
      }
      if (k.focus.length) {
        content.push(sub('B. Focus'));
        k.focus.forEach((f, i) => content.push({ text: [{ text: (i + 1) + '  ', color: MUTED }, { text: f.ok, bold: true }, { text: '  ' + f.why, color: MUTED, fontSize: base - 1.5 }], margin: [0, 0, 0, 2] }));
      }
    }
    return finish(m, k, 'Tagalog grammar handout');
  }

  /* ===================== Topic: verbs ===================== */
  const VB = () => window.VERBS || [], SENT = (v) => (window.VERB_SENTENCES || {})[v.r] || [];
  const ASP4 = ['inf', 'com', 'inc', 'con'];
  const ASP_SHORT = { inf: 'Infinitive', com: 'Completed', inc: 'Ongoing', con: 'Future' };
  const AFF_TAG = { um: '-um-', mag: 'mag-', ma: 'ma-', in: '-in', i: 'i-', an: '-an', custom: 'special' };
  const focusOf = (af) => Conj.FOCUS[af] || af;
  const aspHead = (a, short) => (short ? ASP_SHORT[a] : Conj.ASPECTS[a]);
  const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const formRe = (form) => new RegExp('(^|[^\\p{L}-])(' + escRe(form) + ')(?![\\p{L}])', 'iu');
  // [before, form, after] for the first whole-word match of the verb form in a sentence, or null.
  function splitForm(tl, form) {
    const m = formRe(form).exec(tl); if (!m) return null;
    const a = m.index + m[1].length;
    return [tl.slice(0, a), tl.slice(a, a + form.length), tl.slice(a + form.length)];
  }
  // Pieces of a verb form that are not the root, found by matching the root from the right: kumakain → [kuma][kain].
  /* Split a conjugated form into pieces { s, k } with k = 'a' affix, 'd' repeated aspect syllable, 'r' root,
     by rebuilding it the way conjugate.js does. A form that conjugate.js does not produce (an override such as
     bilhin or kausapin) is returned unmarked rather than guessed at. */
  function affixSplit(form, root, af, asp) {
    const plain = [{ s: form, k: 'r' }];
    if (!window.Conj || !af || !asp) return plain;
    const made = Conj.conjugate(root, af);
    if (!made || !made[asp] || made[asp].toLowerCase() !== form.toLowerCase()) return plain;
    const r = root.toLowerCase(), rd = Conj.redupSyl(r), isV = (c) => /[aeiou]/.test(c);
    const dup = asp === 'inc' || asp === 'con';
    // The word the affix attaches to: root, or repeated syllable + root; its letters are 'd' then 'r'.
    const body = (withDup) => (withDup ? [{ s: rd, k: 'd' }, { s: r, k: 'r' }] : [{ s: r, k: 'r' }]);
    // Infix after the first consonant (or in front of a vowel; ni- before l/y for -in-).
    const infixed = (inf, withDup) => {
      const w = (withDup ? rd : '') + r;
      if (isV(w[0]) || (inf === 'in' && (w[0] === 'l' || w[0] === 'y'))) return [{ s: isV(w[0]) ? inf : 'ni', k: 'a' }].concat(body(withDup));
      const b = body(withDup); // first letter belongs to the first piece
      return [{ s: w[0], k: b[0].k }, { s: inf, k: 'a' }, { s: b[0].s.slice(1), k: b[0].k }].concat(b.slice(1));
    };
    const suffixed = (suf, withDup) => {
      const w = (withDup ? rd : '') + r, res = Conj.suffix(w, suf), piece = res.endsWith('h' + suf) ? 'h' + suf : suf, stem = res.slice(0, -piece.length);
      return (withDup ? [{ s: stem.slice(0, rd.length), k: 'd' }, { s: stem.slice(rd.length), k: 'r' }] : [{ s: stem, k: 'r' }]).concat([{ s: piece, k: 'a' }]);
    };
    const prefixed = (pre, withDup) => [{ s: pre + (isV(r[0]) && /g$/.test(pre) ? '-' : ''), k: 'a' }].concat(body(withDup));
    let out;
    switch (af) {
      case 'um': out = asp === 'con' ? body(true) : infixed('um', dup); break;
      case 'mag': out = prefixed(asp === 'inf' || asp === 'con' ? 'mag' : 'nag', dup); break;
      case 'ma': out = prefixed(asp === 'inf' || asp === 'con' ? 'ma' : 'na', dup); break;
      case 'in': out = asp === 'inf' || asp === 'con' ? suffixed('in', dup) : infixed('in', dup); break;
      case 'an': out = asp === 'inf' || asp === 'con' ? suffixed('an', dup) : infixed('in', dup).concat([{ s: Conj.suffix(Conj.infix((dup ? rd : '') + r, 'in'), 'an').endsWith('han') ? 'han' : 'an', k: 'a' }]); break;
      case 'i': out = [{ s: 'i', k: 'a' }].concat(asp === 'inf' || asp === 'con' ? body(dup) : infixed('in', dup)); break;
      default: return plain;
    }
    out = out.filter((x) => x.s);
    // Merge neighbours of the same kind, then restore the caller's capitalization.
    const merged = [];
    out.forEach((x) => { const l = merged[merged.length - 1]; if (l && l.k === x.k) l.s += x.s; else merged.push({ s: x.s, k: x.k }); });
    let pos = 0;
    merged.forEach((x) => { x.s = form.slice(pos, pos + x.s.length); pos += x.s.length; });
    if (pos !== form.length) return plain;
    return merged;
  }
  const formHTML = (form, root, af, asp) => affixSplit(form, root, af, asp).map((x) => (x.k === 'a' ? '<span class="gs-a">' + esc(x.s) + '</span>' : x.k === 'd' ? '<span class="gs-d">' + esc(x.s) + '</span>' : esc(x.s))).join('');
  const formPDF = (form, root, af, asp, extra) => affixSplit(form, root, af, asp).map((x) => Object.assign({ text: x.s }, x.k === 'a' ? { bold: true, color: '#9a5b00' } : x.k === 'd' ? { italics: true, color: '#5b6480' } : {}, extra || {}));
  // Up to two sentences per aspect for one verb, bedside ones first.
  function verbSents(v) {
    const c = (s) => (/c/.test(s[4] || '') ? 1 : 0);
    return ASP4.map((a) => [a, SENT(v).filter((s) => s[3] === a).sort((x, y) => c(y) - c(x)).slice(0, 2)]).filter((g) => g[1].length);
  }
  // Fill-in sentences: the verb form becomes ____ and the options are the same affix in three different aspects.
  function poolB(list) {
    const out = [];
    list.forEach((v) => {
      const f = App.verbForms(v);
      SENT(v).forEach((s) => {
        const asp = s[3]; if (!ASP4.includes(asp)) return;
        const af = Object.keys(f).find((k) => String(f[k][asp]).toLowerCase() === s[2].toLowerCase()); if (!af) return;
        const p = splitForm(s[0], s[2]); if (!p) return;
        const used = new Set([s[2].toLowerCase()]), others = [];
        ASP4.forEach((a) => { const w = f[af][a]; if (a !== asp && w && others.length < 2 && !used.has(w.toLowerCase())) { used.add(w.toLowerCase()); others.push(w); } });
        if (others.length < 2) return;
        out.push({ v, af, asp, blank: p[0] + '____' + p[2], en: s[1], form: s[2], others });
      });
    });
    return out;
  }
  function cheatModel() {
    const um = Conj.conjugate('kain', 'um'), inn = Conj.conjugate('kain', 'in'), mag = Conj.conjugate('luto', 'mag');
    const aspects = [
      ['inf', 'The base form you look up. Use it after gusto, kailangan, puwede, and for commands.', 'The affix on the bare root. No repeated syllable.'],
      ['com', 'The action is done.', 'The "started" marker goes on the root: -um- stays, mag- becomes nag-, -in- goes after the first consonant.'],
      ['inc', 'The action is going on, or happens again and again.', 'The same marker as completed, plus the first syllable of the root repeated.'],
      ['con', 'The action has not started yet.', 'The first syllable repeated with no past marker: -um- drops, mag- stays, -in comes back as a suffix.']
    ].map(([k, mean, how]) => ({ k, label: Conj.ASPECTS[k], mean, how, cells: [um[k], inn[k], mag[k]] }));
    const focus = ['um', 'mag', 'ma', 'in', 'i', 'an'].map((af) => {
      const eg = VB().filter((v) => (v.a || []).includes(af)).slice(0, 2).map((v) => App.verbForms(v)[af].inf);
      const mean = { um: 'The doer is the ang-phrase. Movement and self-directed actions.', mag: 'The doer is the ang-phrase. Often an action done to something, or repeated.', ma: 'The doer, but the action is a state or happens without intent.', in: 'The thing acted on is the ang-phrase.', i: 'The thing carried, given, said or moved is the ang-phrase.', an: 'The place, person or target is the ang-phrase.' }[af];
      return { af, label: focusOf(af), mean, eg };
    });
    const rs = (r) => Conj.redupSyl(r);
    const rules = [
      'Repeat the first consonant and vowel of the root: kain → ' + rs('kain') + '-kain, luto → ' + rs('luto') + '-luto. A root that starts with a vowel repeats just that vowel: inom → ' + rs('inom') + '-inom.',
      '-um- and -in- go after the first consonant: k-um-ain, k-in-ain. A root that starts with a vowel takes them in front: um-inom, in-inom.',
      'After a vowel, -in and -an become -hin and -han. A final-syllable o often becomes u: inom → ' + Conj.suffix('inom', 'in') + '.',
      'A few verbs are irregular (bili, iwan, limot, intindi). The tables show their real forms.'
    ];
    return { aspects, focus, rules };
  }
  function verbsBuild(o) {
    const all = VB();
    const one = o.verb && o.verb !== 'all' ? all.filter((v) => v.r === o.verb) : [];
    const list = one.length ? one : all.filter((v) => o.set !== 'clinical' || v.clinical);
    const A = (o.worksheet || o.key) ? sample(list.filter((v) => v.a.length), 16).map((v) => { const f = App.verbForms(v), af = Object.keys(f)[0]; return { v, af, f: f[af] }; }) : [];
    const B = (o.worksheet || o.key) ? sample(poolB(list), 16).map((it, i) => { const pos = i % 3, a = it.others.slice(); a.splice(pos, 0, it.form); return Object.assign({}, it, { a, ans: pos }); }) : [];
    return {
      topic: 'verbs', title: o.title || DEF.verbs.title, preparedFor: o.preparedFor, o, list,
      date: new Date().toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' }),
      scope: (one.length ? 'Verb: ' + one[0].r : o.set === 'clinical' ? 'Clinical verbs' : 'All verbs') + ' · ' + list.length + (list.length === 1 ? ' verb' : ' verbs'),
      table: o.table ? list.map((v) => ({ v, rows: Object.entries(App.verbForms(v)) })) : null,
      sentences: o.sentences ? list.map((v) => ({ v, groups: verbSents(v) })).filter((x) => x.groups.length) : null,
      cheat: o.cheat ? cheatModel() : null,
      worksheet: o.worksheet ? { A, B } : null,
      key: o.key ? { A, B } : null
    };
  }
  const verbsCanPrint = (o) => o.table || o.sentences || o.cheat || o.worksheet || o.key;
  const letter = (i) => String.fromCharCode(65 + i);

  function verbsHTML(m) {
    const o = m.o, en = o.english === 'show', sh = o.paper === 'A5';
    let h = headHTML(m);
    if (m.cheat) {
      const c = m.cheat;
      h += '<section class="ho-sec"><h2>Aspect at a glance</h2><p class="gh-p">A Tagalog verb has two layers. The <b>affix</b> (focus) says who or what the sentence is about. The <b>aspect</b> says whether the action is done, going on, or still to come. Pieces that are not the root are marked in brown.</p>' +
        '<div class="ho-tw"><table class="gh-types"><tr><th>Aspect</th><th>Meaning</th><th>How it is built</th></tr>' + c.aspects.map((a) => '<tr><td><b>' + esc(a.label) + '</b></td><td>' + esc(a.mean) + '</td><td>' + esc(a.how) + '</td></tr>').join('') + '</table></div>' +
        '<h3>Worked examples</h3><div class="ho-tw"><table class="gh-vtab"><tr><th>Aspect</th><th>kain + -um-</th><th>kain + -in</th><th>luto + mag-</th></tr>' +
        c.aspects.map((a) => '<tr><td>' + esc(aspHead(a.k, true)) + '</td>' + a.cells.map((w, i) => '<td class="tl"><b>' + formHTML(w, i < 2 ? 'kain' : 'luto', ['um', 'in', 'mag'][i], a.k) + '</b></td>').join('') + '</tr>').join('') + '</table></div>' +
        '<h3>Which affix? Focus</h3><div class="ho-tw"><table class="gh-types"><tr><th>Affix</th><th>The ang-phrase is</th><th>Examples</th></tr>' + c.focus.map((f) => '<tr><td><b>' + esc(f.label) + '</b></td><td>' + esc(f.mean) + '</td><td class="tl">' + f.eg.map(esc).join(', ') + '</td></tr>').join('') + '</table></div>' +
        '<h3>Reduplication and placement</h3><ul class="gh-rules-l">' + c.rules.map((r) => '<li>' + esc(r) + '</li>').join('') + '</ul></section>';
    }
    if (m.table) {
      h += '<section class="ho-sec"><h2>Conjugation tables</h2>' + m.table.map((t) =>
        '<div class="ho-tw gh-vt"><table class="gh-vtab"><tr class="gh-vh"><th colspan="5"><b class="tl">' + esc(t.v.r) + '</b>' + (en ? ' <span class="gh-en">' + esc(t.v.en) + '</span>' : '') + (t.v.clinical ? ' <span class="gh-tag">clinical</span>' : '') + '</th></tr>' +
        '<tr><th>Focus</th>' + ASP4.map((a) => '<th>' + esc(aspHead(a, sh)) + '</th>').join('') + '</tr>' +
        t.rows.map(([af, f]) => '<tr><td>' + esc(focusOf(af)) + '</td>' + ASP4.map((a) => '<td class="tl"><b>' + formHTML(f[a], t.v.r, af, a) + '</b></td>').join('') + '</tr>').join('') + '</table></div>').join('') + '</section>';
    }
    if (m.sentences) {
      h += '<section class="ho-sec"><h2>Example sentences</h2><div class="gh-words">' + m.sentences.map((x) =>
        '<div class="gh-w gh-vs"><b class="tl">' + esc(x.v.r) + '</b>' + (en ? ' <span class="gh-en">' + esc(x.v.en) + '</span>' : '') +
        x.groups.map(([a, ss]) => '<div class="gh-asp">' + esc(aspHead(a, true)) + '</div>' + ss.map((s) => { const p = splitForm(s[0], s[2]); return '<div class="gh-s"><span class="tl">' + (p ? esc(p[0]) + '<span class="gs-a">' + esc(p[1]) + '</span>' + esc(p[2]) : esc(s[0])) + '</span>' + (en ? '<span class="gh-en">' + esc(s[1]) + '</span>' : '') + '</div>'; }).join('')).join('') + '</div>').join('') + '</div></section>';
    }
    if (m.worksheet) {
      const w = m.worksheet;
      h += '<section class="ho-sec gh-ws"><h2>Worksheet</h2><p class="ho-goal">Name: ____________________ Date: __________</p>';
      if (w.A.length) h += '<h3>A. Isulat: write the four forms of the verb with the affix shown</h3><div class="ho-tw"><table class="gh-wsA"><tr><th>#</th><th>Verb</th><th>Affix</th>' + ASP4.map((a) => '<th>' + esc(aspHead(a, true)) + '</th>').join('') + '</tr>' +
        w.A.map((it, i) => '<tr><td>' + (i + 1) + '</td><td><b class="tl">' + esc(it.v.r) + '</b>' + (en ? '<small>' + esc(it.v.en) + '</small>' : '') + '</td><td>' + esc(AFF_TAG[it.af] || it.af) + '</td><td></td><td></td><td></td><td></td></tr>').join('') + '</table></div>';
      if (w.B.length) h += '<h3>B. Piliin: tick the form that fits the blank</h3><ol class="gh-wsB">' + w.B.map((it) => '<li><span class="tl">' + esc(it.blank) + '</span>' + (en ? ' <span class="gh-en">' + esc(it.en) + '</span>' : '') + '<div class="gh-opts">' + it.a.map((x, j) => '<span>☐ ' + letter(j) + '. ' + esc(x) + '</span>').join('') + '</div></li>').join('') + '</ol>';
      h += '</section>';
    }
    if (m.key) {
      const k = m.key;
      h += '<section class="ho-sec gh-key"><h2>Answer key</h2>';
      if (k.A.length) h += '<h3>A. The four forms</h3><div class="ho-key">' + k.A.map((it, i) => '<div><span class="ho-num">' + (i + 1) + '</span><b class="tl">' + esc(it.v.r) + '</b> (' + esc(AFF_TAG[it.af] || it.af) + '): ' + ASP4.map((a) => formHTML(it.f[a], it.v.r, it.af, a)).join(' · ') + '</div>').join('') + '</div>';
      if (k.B.length) h += '<h3>B. Fill the blank</h3><ol class="gh-keyB">' + k.B.map((it) => '<li><b>' + letter(it.ans) + '</b> <b class="tl">' + esc(it.form) + '</b> <small>' + esc(aspHead(it.asp, true)) + '</small></li>').join('') + '</ol>';
      h += '</section>';
    }
    return h + footHTML();
  }
  const headHTML = (m) => '<header class="ho-head"><img src="icons/logo-96.png" alt=""><div><h1>' + esc(m.title) + '</h1><p>' + (m.preparedFor ? 'Prepared for ' + esc(m.preparedFor) + ' · ' : '') + esc(m.date) + ' · ' + esc(m.scope) + '</p></div></header>';
  const footHTML = () => '<footer class="ho-foot">' + esc(APP_META.attribution) + '</footer>';

  function verbsDoc(m, logo) {
    const k = kit(m, logo), { NAVY, MUTED, TINT, LINE, o, en, base, a5, content, heading, sub, th, layout, grid } = k, AFFIX = '#9a5b00', sh = a5;
    const run = (t, extra) => Object.assign({ text: t }, extra || {});
    if (m.cheat) {
      const c = m.cheat;
      content.push(heading('Aspect at a glance', 'who does it, and when'));
      content.push({ text: [run('A Tagalog verb has two layers. The '), run('affix', { bold: true }), run(' (focus) says who or what the sentence is about. The '), run('aspect', { bold: true }), run(' says whether the action is done, going on, or still to come. Pieces that are not the root are in '), run('brown', { bold: true, color: AFFIX }), run('.')], margin: [0, 0, 0, 5] });
      content.push({ table: { headerRows: 1, dontBreakRows: true, widths: [a5 ? 62 : 84, '*', '*'], body: [[th('Aspect'), th('Meaning'), th('How it is built')]].concat(c.aspects.map((a) => [{ text: a.label, bold: true, fontSize: base - 1 }, { text: a.mean, fontSize: base - 0.5 }, { text: a.how, fontSize: base - 0.5 }])) }, layout });
      content.push(sub('Worked examples'));
      content.push({ table: { headerRows: 1, widths: [a5 ? 60 : 80, '*', '*', '*'], body: [[th('Aspect'), th('kain + -um-'), th('kain + -in'), th('luto + mag-')]].concat(c.aspects.map((a) => [{ text: aspHead(a.k, true), color: MUTED, fontSize: base - 1 }].concat(a.cells.map((w, i) => ({ text: formPDF(w, i < 2 ? 'kain' : 'luto', ['um', 'in', 'mag'][i], a.k), bold: true, fontSize: base + 0.5 }))))) }, layout });
      content.push(sub('Which affix? Focus'));
      content.push({ table: { headerRows: 1, dontBreakRows: true, widths: [a5 ? 78 : 110, '*', a5 ? 56 : 80], body: [[th('Affix'), th('The ang-phrase is'), th('Examples')]].concat(c.focus.map((f) => [{ text: f.label, bold: true, fontSize: base - 1 }, { text: f.mean, fontSize: base - 0.5 }, { text: f.eg.join(', '), italics: true }])) }, layout });
      content.push(sub('Reduplication and placement'));
      content.push({ ul: c.rules.map((r) => ({ text: r, fontSize: base - 0.5 })), margin: [0, 0, 0, 4] });
    }
    if (m.table) {
      content.push(Object.assign(heading('Conjugation tables', en ? 'focus and aspect, one verb at a time' : ''), { pageBreak: m.cheat ? 'before' : undefined }));
      m.table.forEach((t) => {
        const head = [{ colSpan: 5, fillColor: TINT, text: [run(t.v.r, { bold: true, color: NAVY, fontSize: base + 2 })].concat(en ? [run('   ' + t.v.en, { color: MUTED })] : []).concat(t.v.clinical ? [run('   clinical', { bold: true, color: AFFIX, fontSize: base - 2 })] : []) }, {}, {}, {}, {}];
        const body = [head, [th('Focus')].concat(ASP4.map((a) => th(aspHead(a, sh))))].concat(t.rows.map(([af, f]) => [{ text: focusOf(af), fontSize: base - 1.5, color: MUTED }].concat(ASP4.map((a) => ({ text: formPDF(f[a], t.v.r, af, a), fontSize: base + 0.5 })))));
        content.push({ stack: [{ table: { headerRows: 2, widths: [a5 ? 62 : 92, '*', '*', '*', '*'], body }, layout: { hLineWidth: (i, node) => (i === 0 || i === node.table.body.length ? 0.5 : i === 1 ? 0 : 0.5), vLineWidth: () => 0, hLineColor: () => LINE, paddingTop: () => 2.5, paddingBottom: () => 2.5, paddingLeft: (i) => (i === 0 ? 5 : 3), paddingRight: () => 3 } }], unbreakable: true, margin: [0, 0, 0, 7] });
      });
    }
    if (m.sentences) {
      content.push(Object.assign(heading('Example sentences', en ? 'the verb form is in brown' : ''), { pageBreak: m.cheat || m.table ? 'before' : undefined }));
      const entry = (x) => {
        const stack = [{ text: [run(x.v.r, { bold: true, color: NAVY, fontSize: base + 1 })].concat(en ? [run('  ' + x.v.en, { color: MUTED, fontSize: base - 1.5 })] : []), margin: [0, 0, 0, 1] }];
        x.groups.forEach(([a, ss]) => {
          stack.push({ text: aspHead(a, true).toUpperCase(), fontSize: base - 3, bold: true, color: MUTED, margin: [0, 2, 0, 0] });
          ss.forEach((s) => { const p = splitForm(s[0], s[2]); stack.push({ text: p ? [run(p[0]), run(p[1], { bold: true, color: AFFIX }), run(p[2])] : s[0], fontSize: base - 0.5 }); if (en) stack.push({ text: s[1], fontSize: base - 1.5, color: MUTED, margin: [0, 0, 0, 1] }); });
        });
        return { stack, margin: [0, 0, 0, 6], unbreakable: true };
      };
      const half = Math.ceil(m.sentences.length / 2);
      content.push({ columns: [m.sentences.slice(0, half), m.sentences.slice(half)].map((part) => ({ stack: part.map(entry), width: '*' })), columnGap: 16 });
    }
    if (m.worksheet) {
      const w = m.worksheet;
      content.push(Object.assign(heading('Worksheet', ''), { pageBreak: content.length > 1 ? 'before' : undefined }));
      content.push({ text: 'Name: ______________________   Date: ____________', margin: [0, 2, 0, 4] });
      if (w.A.length) {
        content.push(sub('A. Isulat: write the four forms of the verb with the affix shown'));
        const g = Object.assign({}, grid, { paddingTop: () => 6, paddingBottom: () => 6 });
        content.push({ table: { headerRows: 1, dontBreakRows: true, widths: [14, a5 ? 44 : 60, a5 ? 28 : 36, '*', '*', '*', '*'], body: [[th('#'), th('Verb'), th('Affix')].concat(ASP4.map((a) => th(aspHead(a, true))))].concat(w.A.map((it, i) => [{ text: String(i + 1), color: MUTED }, { text: [run(it.v.r, { bold: true })].concat(en ? [run('\n' + it.v.en, { color: MUTED, fontSize: base - 2 })] : []) }, { text: AFF_TAG[it.af] || it.af, color: AFFIX, bold: true }, '', '', '', ''])) }, layout: g, fontSize: base });
      }
      if (w.B.length) {
        content.push(Object.assign(sub('B. Piliin: tick the form that fits the blank'), { pageBreak: w.A.length && !a5 ? 'before' : undefined }));
        w.B.forEach((it, i) => content.push({ stack: [{ text: [run((i + 1) + '. ', { color: MUTED }), run(it.blank, { bold: true })].concat(en ? [run('   ' + it.en, { color: MUTED, fontSize: base - 1 })] : []) }, { columns: it.a.map((x, j) => boxNode(letter(j) + '. ' + x, base)), columnGap: 24, margin: [14, 2, 0, 0] }], unbreakable: true, margin: [0, 0, 0, 6] }));
      }
    }
    if (m.key) {
      const kk = m.key;
      content.push(Object.assign(heading('Answer key', ''), { pageBreak: content.length > 1 ? 'before' : undefined }));
      if (kk.A.length) {
        content.push(sub('A. The four forms'));
        const half = Math.ceil(kk.A.length / 2);
        const row = (it, i) => ({ text: [run((i + 1) + '  ', { color: MUTED }), run(it.v.r, { bold: true }), run(' (' + (AFF_TAG[it.af] || it.af) + ')  ', { color: AFFIX, fontSize: base - 2 })].concat([].concat(...ASP4.map((a, j) => (j ? [run(' · ', { color: MUTED })] : []).concat(formPDF(it.f[a], it.v.r, it.af, a))))), fontSize: base - 1, margin: [0, 0, 0, 2] });
        content.push({ columns: [kk.A.slice(0, half), kk.A.slice(half)].map((part, c) => ({ stack: part.map((it, i) => row(it, i + c * half)), width: '*' })), columnGap: 14 });
      }
      if (kk.B.length) {
        content.push(sub('B. Fill the blank'));
        kk.B.forEach((it, i) => content.push({ text: [run((i + 1) + '  ', { color: MUTED }), run(letter(it.ans) + '. ' + it.form, { bold: true }), run('  ' + aspHead(it.asp, true), { color: MUTED, fontSize: base - 1.5 })], margin: [0, 0, 0, 2] }));
      }
    }
    return finish(m, k, 'Tagalog verb handout');
  }

  /* ===================== Topic: lesson ===================== */
  const LV = () => window.LESSONS || [];
  function lessonBuild(o) {
    const l = LV().find((x) => x.id === o.lesson) || LV()[0] || { id: '', title: 'Lesson', unit: '', level: '', body: '', quiz: [] };
    const x = (App.lessonExtra && App.lessonExtra(l.id)) || { mistakes: [], more: [], quiz: [] };
    return {
      topic: 'lesson', l, o, title: o.title || l.title, preparedFor: o.preparedFor,
      date: new Date().toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' }),
      scope: l.unit + ' · ' + l.level + (l.review ? ' · Review' : ''),
      body: o.body ? l.body : null, quiz: o.quiz ? l.quiz : null, key: o.key ? l.quiz : null,
      // 3.14.0 lesson extras (App.lessonExtra in js/views.js: malformed rows already dropped). null = off or nothing to print.
      mistakes: o.mistakes && x.mistakes.length ? x.mistakes : null,
      more: o.more && x.more.length ? x.more : null,
      quiz2: o.quiz2 && x.quiz.length ? x.quiz : null,
      key2: o.key && o.quiz2 && x.quiz.length ? x.quiz : null
    };
  }
  const lessonCanPrint = (o) => o.body || o.quiz || o.key || o.mistakes || o.more || o.quiz2;
  // Extras as lesson-body HTML: the preview shows it, htmlToPdf turns the example boxes into PDF nodes (fresh each call).
  // The wrong line of a mistake is never an .ex: struck through, with a cross (preview) or "x" (PDF font has no ✗).
  const exHtml = (tl, en, showEn) => '<div class="ex"><b class="tl">' + esc(tl) + '</b>' + (showEn && en ? '<span>' + esc(en) + '</span>' : '') + '</div>';
  const mistakesHTML = (rows) => rows.map((r) => '<div class="lx-m"><p class="lx-bad"><span class="lx-mk" aria-hidden="true">✗</span><span class="sr-only">Wrong: </span><s class="tl">' + esc(r[0]) + '</s></p>' + exHtml(r[1], r[2], true).replace('class="ex"', 'class="ex lx-ok"') + '</div>').join('');
  const moreHTML = (rows, showEn) => rows.map((r) => exHtml(r[0], r[1], showEn)).join('');
  const lqHTML = (qs) => '<ol class="gh-quiz">' + qs.map((q) => '<li><b>' + esc(q[0]) + '</b><ol type="A" class="gh-qopts">' + q[1].map((x) => '<li>' + esc(x) + '</li>').join('') + '</ol></li>').join('') + '</ol>';
  const lkeyHTML = (qs) => '<ol class="gh-keyB gh-keyQ">' + qs.map((q) => '<li><b>' + letter(q[2]) + '. ' + esc(q[1][q[2]]) + '</b> <small>' + esc(q[3] || '') + '</small></li>').join('') + '</ol>';
  function lessonHTML(m) {
    let h = headHTML(m);
    if (m.body) h += '<section class="ho-sec"><div class="lesson-body">' + picHtml(m.body).replace(/<table>/g, '<div class="ho-tw"><table>').replace(/<\/table>/g, '</table></div>') + '</div></section>';
    if (m.mistakes) h += '<section class="ho-sec gh-mist"><h2>Common mistakes</h2><div class="lesson-body">' + mistakesHTML(m.mistakes) + '</div></section>';
    if (m.more) h += '<section class="ho-sec gh-more"><h2>More examples</h2><div class="lesson-body">' + moreHTML(m.more, m.o.english !== 'hide') + '</div></section>';
    if (m.quiz) h += '<section class="ho-sec gh-ws"><h2>Check yourself</h2>' + lqHTML(m.quiz) + '</section>';
    if (m.quiz2) h += '<section class="ho-sec gh-ws gh-q2"><h2>More practice</h2>' + lqHTML(m.quiz2) + '</section>';
    if (m.key || m.key2) h += '<section class="ho-sec gh-key"><h2>Answer key</h2>' + (m.key ? (m.key2 ? '<h3>Check yourself</h3>' : '') + lkeyHTML(m.key) : '') + (m.key2 ? '<h3>More practice</h3>' + lkeyHTML(m.key2) : '') + '</section>';
    return h + footHTML();
  }

  /* 3.10.0: a lesson picture (<div class="pic-embed" data-pic="<set id>"></div>) cannot be drawn in the handout: it prints
     as one line naming the picture, then the picture's words as a comma list. Unknown set id = nothing. */
  const picSet = (id) => { const P = App.pictures; const s = P && typeof P.get === 'function' ? P.get(id) : (window.PICTURE_SETS || []).find((x) => x && x.id === id); return s && Array.isArray(s.parts) ? s : null; };
  const picText = (id) => { const s = picSet(id); if (!s) return null; return { line: 'Picture: ' + (s.title || s.id) + ' (open the app to see it)', words: s.parts.filter((p) => p && p.w).map((p) => p.w).join(', ') }; };
  const picHtml = (body) => body.replace(/<div class="pic-embed" data-pic="([^"]*)"><\/div>/g, (m, id) => { const t = picText(id); return t ? '<p class="gh-pic"><i>' + esc(t.line) + '</i><br>' + esc(t.words) + '</p>' : ''; });

  /* Lesson body HTML to pdfmake nodes. Supports the tags lessons use (p, h3, b/strong, i/em, u, ul/ol/li, table, dl/dt/dd,
     div.ex, div.note, span, a, br); an unknown tag keeps its text. Inline formatting becomes pdfmake text runs. */
  function htmlToPdf(html, st) {
    const K = App.pdfKit, base = (st && st.base) || 10, NAVY = K.NAVY, MUTED = K.MUTED, TINT = K.TINT, GOLD = K.GOLD, LINE = K.LINE;
    const doc = new DOMParser().parseFromString('<body>' + html + '</body>', 'text/html');
    const BLOCK = new Set(['P', 'H1', 'H2', 'H3', 'H4', 'UL', 'OL', 'DL', 'TABLE', 'DIV', 'LI', 'DT', 'DD', 'TR', 'TD', 'TH', 'THEAD', 'TBODY', 'TFOOT']);
    const run = (n, style, out) => {
      if (n.nodeType === 3) { const t = n.nodeValue.replace(/\s+/g, ' '); if (t) out.push(Object.assign({ text: t }, style)); return out; }
      if (n.nodeType !== 1) return out;
      if (n.tagName === 'BR') { out.push({ text: '\n' }); return out; }
      const s = Object.assign({}, style), t = n.tagName;
      if (t === 'B' || t === 'STRONG') s.bold = true; else if (t === 'I' || t === 'EM') s.italics = true; else if (t === 'U') s.decoration = 'underline';
      n.childNodes.forEach((c) => run(c, s, out));
      return out;
    };
    const inline = (n, style) => { const out = []; n.childNodes.forEach((c) => run(c, style || {}, out)); return out; };
    const tidy = (r) => {
      while (r.length && /^\s*$/.test(r[0].text)) r.shift();
      while (r.length && /^\s*$/.test(r[r.length - 1].text)) r.pop();
      if (r.length) { r[0].text = r[0].text.replace(/^\s+/, ''); const l = r[r.length - 1]; l.text = l.text.replace(/\s+$/, ''); }
      return r;
    };
    const blocks = (parent, tight) => {
      const out = []; let buf = [];
      const flush = () => { const r = tidy(buf); buf = []; if (r.length) out.push({ text: r, margin: [0, 0, 0, tight ? 1 : 4] }); };
      parent.childNodes.forEach((n) => {
        if (n.nodeType !== 1 || !BLOCK.has(n.tagName)) { run(n, {}, buf); return; }
        flush();
        const t = n.tagName;
        if (t === 'P' || t === 'LI' || t === 'DT' || t === 'DD') { const r = tidy(inline(n)); if (r.length) out.push({ text: r, margin: [0, 0, 0, tight ? 1 : 4] }); }
        else if (/^H\d$/.test(t)) { const r = tidy(inline(n)); if (r.length) out.push({ text: r, bold: true, color: NAVY, fontSize: base + 1, margin: [0, 8, 0, 3] }); }
        else if (t === 'UL' || t === 'OL') out.push(list(n));
        else if (t === 'DL') out.push(...defs(n));
        else if (t === 'TABLE') out.push(table(n));
        else if (t === 'DIV' && n.classList.contains('ex')) out.push(ex(n));
        else if (t === 'DIV' && n.classList.contains('note')) out.push(note(n));
        else if (t === 'DIV' && n.classList.contains('pic-embed')) { const pt = picText(n.getAttribute('data-pic') || ''); if (pt) out.push({ stack: [{ text: pt.line, italics: true, color: NAVY }, { text: pt.words, fontSize: base - 0.5, margin: [0, 1, 0, 0] }], margin: [0, 2, 0, 6] }); }
        else out.push(...blocks(n, tight));
      });
      flush();
      return out;
    };
    const single = (ch) => (ch.length === 1 && ch[0].text !== undefined && !ch[0].table ? ch[0] : null);
    const list = (n) => {
      const items = [...n.children].filter((c) => c.tagName === 'LI').map((li) => { const ch = blocks(li, true), s = single(ch); return s ? { text: s.text } : ch.length ? { stack: ch } : { text: '' }; });
      return { [n.tagName === 'OL' ? 'ol' : 'ul']: items, margin: [0, 0, 0, 5] };
    };
    const defs = (n) => {
      const out = [];
      [...n.children].forEach((c) => {
        if (c.tagName === 'DT') out.push({ text: tidy(inline(c)), bold: true, margin: [0, 5, 0, 1] });
        else { const ch = blocks(c, true); if (ch.length) out.push({ stack: ch, margin: [14, 0, 0, 3] }); }
      });
      return out;
    };
    const table = (n) => {
      const rows = [...n.querySelectorAll('tr')].map((tr) => [...tr.children].filter((c) => c.tagName === 'TD' || c.tagName === 'TH'));
      const cols = Math.max(1, ...rows.map((r) => r.length));
      const head = rows.length > 1 && rows[0].length && rows[0].every((c) => c.tagName === 'TH');
      const body = rows.map((r, ri) => {
        const cells = r.map((c) => {
          const isTh = c.tagName === 'TH', ch = blocks(c, true), s = single(ch);
          const cell = s ? { text: s.text } : ch.length ? { stack: ch } : { text: '' };
          cell.fontSize = base - 0.5;
          if (isTh) { cell.bold = true; cell.color = NAVY; cell.fillColor = TINT; }
          return cell;
        });
        while (cells.length < cols) cells.push({ text: '' });
        return cells;
      });
      return { table: { headerRows: head ? 1 : 0, dontBreakRows: true, widths: Array(cols).fill('*'), body }, layout: { hLineWidth: (i, node) => (i === 0 || i === node.table.body.length ? 0.5 : 0.5), vLineWidth: () => 0, hLineColor: () => LINE, paddingTop: () => 3, paddingBottom: () => 3, paddingLeft: () => 4, paddingRight: () => 4 }, margin: [0, 2, 0, 7] };
    };
    const ex = (n) => {
      const tl = [], en = [];
      let target = tl;
      n.childNodes.forEach((c) => { if (c.nodeType === 1 && c.tagName === 'SPAN') target = en; run(c, {}, target); });
      const stack = [{ text: tidy(tl), bold: true, fontSize: base + 0.5 }];
      if (tidy(en).length) stack.push({ text: en, color: MUTED, fontSize: base - 1, margin: [0, 1, 0, 0] });
      return { table: { widths: [3, '*'], body: [[{ text: '', fillColor: GOLD }, { stack, fillColor: TINT }]] }, layout: { hLineWidth: () => 0, vLineWidth: () => 0, paddingLeft: (i) => (i === 0 ? 0 : 8), paddingRight: (i) => (i === 0 ? 0 : 6), paddingTop: () => 4, paddingBottom: () => 4 }, unbreakable: true, margin: [0, 2, 0, 4] };
    };
    const note = (n) => {
      const ch = blocks(n, true);
      return { table: { widths: ['*'], body: [[{ stack: ch.length ? ch : [{ text: '' }], fillColor: TINT, fontSize: base - 0.5 }]] }, layout: { hLineWidth: () => 0, vLineWidth: () => 0, paddingLeft: () => 8, paddingRight: () => 8, paddingTop: () => 5, paddingBottom: () => 5 }, unbreakable: true, margin: [0, 3, 0, 6] };
    };
    return blocks(doc.body);
  }
  App.htmlToPdf = htmlToPdf;

  function lessonDoc(m, logo) {
    const k = kit(m, logo), { MUTED, base, content, heading, sub } = k;
    const run = (t, extra) => Object.assign({ text: t }, extra || {});
    const quizNodes = (qs) => qs.forEach((q, i) => content.push({ stack: [{ text: [run((i + 1) + '. ', { color: MUTED }), run(q[0], { bold: true })] }].concat(q[1].map((x, j) => ({ text: [run(letter(j) + '.  ', { color: MUTED }), run(x)], margin: [16, 1, 0, 0] }))), unbreakable: true, margin: [0, 0, 0, 7] }));
    const keyNodes = (qs) => qs.forEach((q, i) => content.push({ text: [run((i + 1) + '  ', { color: MUTED }), run(letter(q[2]) + '. ' + q[1][q[2]], { bold: true }), run('  ' + (q[3] || ''), { color: MUTED, fontSize: base - 1.5 })], margin: [0, 0, 0, 4] }));
    if (m.body) htmlToPdf(m.body, { base }).forEach((x) => content.push(x));
    if (m.mistakes) {
      content.push(heading('Common mistakes', m.mistakes.length + (m.mistakes.length === 1 ? ' sentence' : ' sentences')));
      // Built fresh for every row: the wrong line struck through after a plain "x" (the PDF font has no ✗), then the right line as an example box.
      m.mistakes.forEach((r) => content.push({ stack: [{ text: [run('x  ', { bold: true, color: '#b3261e' }), run('Wrong: ', { color: MUTED, fontSize: base - 1.5 }), run(r[0], { decoration: 'lineThrough', color: MUTED })], margin: [0, 2, 0, 1] }].concat(htmlToPdf(exHtml(r[1], r[2], true), { base })), unbreakable: true, margin: [0, 0, 0, 3] }));
    }
    if (m.more) {
      content.push(heading('More examples', m.more.length + ' sentences'));
      htmlToPdf(moreHTML(m.more, m.o.english !== 'hide'), { base }).forEach((x) => content.push(x));
    }
    if (m.quiz) { content.push(heading('Check yourself', m.quiz.length + ' questions')); quizNodes(m.quiz); }
    if (m.quiz2) { content.push(heading('More practice', m.quiz2.length + ' questions')); quizNodes(m.quiz2); }
    if (m.key || m.key2) {
      content.push(Object.assign(heading('Answer key', m.l.title), { pageBreak: content.length > 1 ? 'before' : undefined }));
      if (m.key) { if (m.key2) content.push(sub('Check yourself')); keyNodes(m.key); }
      if (m.key2) { content.push(sub('More practice')); keyNodes(m.key2); }
    }
    return finish(m, k, 'Tagalog lesson handout');
  }

  /* ===================== Topic: reading ===================== */
  // English: 'show' = translation under each paragraph, 'end' = translation on its own page, 'hide' = Tagalog only.
  const RD = () => window.READING || [];
  const today = () => new Date().toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' });
  function readingBuild(o) {
    const r = RD().find((x) => x.id === o.reading) || RD()[0] || { id: '', title: 'Reading', titleEn: '', level: '', tl: [], en: [], gloss: [], q: [] };
    const paras = r.tl.map((t, i) => ({ tl: t, en: r.en[i] || '' }));
    return {
      topic: 'reading', r, o, title: o.title || r.title, preparedFor: o.preparedFor, date: today(),
      scope: (r.titleEn ? r.titleEn + ' · ' : '') + r.level + (r.psych ? ' · clinical' : ''),
      passage: o.passage ? paras : null, gloss: o.gloss && r.gloss.length ? r.gloss : null,
      quiz: o.quiz && r.q.length ? mixQ(r.q, r.id) : null, key: o.key && r.q.length ? mixQ(r.q, r.id) : null,
      translation: o.passage && o.english === 'end' ? paras : null
    };
  }
  // Printed questions: options in a fixed shuffled order per item (seeded by the item id), so the key is not always A
  // and the same sheet prints the same way every time. The app's own quiz shuffles separately.
  function mixQ(qs, seed) {
    let h = 2166136261; for (const ch of String(seed)) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
    const rnd = () => ((h = Math.imul(h ^ (h >>> 15), 2246822507) ^ Math.imul(h ^ (h >>> 13), 3266489909)) >>> 0) / 4294967296;
    return qs.map((q) => {
      const order = q[1].map((_, i) => i);
      for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
      return [q[0], order.map((i) => q[1][i]), order.indexOf(q[2]), q[3]];
    });
  }
  const readingCanPrint = (o) => o.passage || o.gloss || o.quiz || o.key;
  function quizHTML(qs) { return '<section class="ho-sec gh-ws"><h2>Questions</h2><ol class="gh-quiz">' + qs.map((q) => '<li><b>' + esc(q[0]) + '</b><ol type="A" class="gh-qopts">' + q[1].map((x) => '<li>' + esc(x) + '</li>').join('') + '</ol></li>').join('') + '</ol></section>'; }
  function keyHTML(qs, cls) { return '<section class="ho-sec' + (cls || ' gh-key') + '"><h2>Answer key</h2><ol class="gh-keyB gh-keyQ">' + qs.map((q) => '<li><b>' + letter(q[2]) + '. ' + esc(q[1][q[2]]) + '</b> <small>' + esc(q[3]) + '</small></li>').join('') + '</ol></section>'; }
  function readingHTML(m) {
    const show = m.o.english === 'show';
    let h = headHTML(m);
    if (m.passage) h += '<section class="ho-sec"><div class="gh-passage">' + m.passage.map((p) => '<p class="tl">' + esc(p.tl) + '</p>' + (show ? '<p class="gh-tr">' + esc(p.en) + '</p>' : '')).join('') + '</div></section>';
    if (m.gloss) h += '<section class="ho-sec"><h2>Glossary</h2><div class="gh-gloss">' + m.gloss.map(([t, e]) => '<div><b class="tl">' + esc(t) + '</b> ' + esc(e) + '</div>').join('') + '</div></section>';
    if (m.quiz) h += quizHTML(m.quiz);
    if (m.translation) h += '<section class="ho-sec gh-key"><h2>Translation</h2><div class="gh-passage">' + m.translation.map((p) => '<p>' + esc(p.en) + '</p>').join('') + '</div></section>';
    if (m.key) h += keyHTML(m.key, m.translation ? ' ' : ' gh-key');
    return h + footHTML();
  }
  function quizDoc(k, qs, title) {
    const { MUTED, content, heading } = k, run = (t, x) => Object.assign({ text: t }, x || {});
    content.push(heading(title, qs.length + ' questions'));
    qs.forEach((q, i) => content.push({ stack: [{ text: [run((i + 1) + '. ', { color: MUTED }), run(q[0], { bold: true })] }].concat(q[1].map((x, j) => ({ text: [run(letter(j) + '.  ', { color: MUTED }), run(x)], margin: [16, 1, 0, 0] }))), unbreakable: true, margin: [0, 0, 0, 7] }));
  }
  function keyDoc(k, qs, sub, breakBefore) {
    const { MUTED, base, content, heading } = k, run = (t, x) => Object.assign({ text: t }, x || {});
    content.push(Object.assign(heading('Answer key', sub), { pageBreak: breakBefore ? 'before' : undefined }));
    qs.forEach((q, i) => content.push({ text: [run((i + 1) + '  ', { color: MUTED }), run(letter(q[2]) + '. ' + q[1][q[2]], { bold: true }), run('  ' + q[3], { color: MUTED, fontSize: base - 1.5 })], margin: [0, 0, 0, 4] }));
  }
  function readingDoc(m, logo) {
    const k = kit(m, logo), { MUTED, base, content, heading } = k, show = m.o.english === 'show';
    if (m.passage) m.passage.forEach((p) => {
      content.push({ text: p.tl, fontSize: base + 1, lineHeight: 1.3, margin: [0, 0, 0, show ? 2 : 8] });
      if (show) content.push({ text: p.en, italics: true, color: MUTED, fontSize: base - 0.5, margin: [0, 0, 0, 9] });
    });
    if (m.gloss) {
      content.push(heading('Glossary', m.gloss.length + ' words'));
      const half = Math.ceil(m.gloss.length / 2), entry = ([t, e]) => ({ text: [{ text: t, bold: true }, { text: '  ' + e, color: '#333a52' }], margin: [0, 0, 0, 3] });
      content.push({ columns: [m.gloss.slice(0, half), m.gloss.slice(half)].map((part) => ({ stack: part.map(entry), width: '*' })), columnGap: 16 });
    }
    if (m.quiz) quizDoc(k, m.quiz, 'Questions');
    if (m.translation) {
      content.push(Object.assign(heading('Translation', m.r.titleEn), { pageBreak: content.length > 1 ? 'before' : undefined }));
      m.translation.forEach((p) => content.push({ text: p.en, margin: [0, 0, 0, 7] }));
    }
    if (m.key) keyDoc(k, m.key, m.r.title, !m.translation && content.length > 1);
    return finish(m, k, 'Tagalog reading handout');
  }

  /* ===================== Topic: dialogue ===================== */
  // Everyday dialogues plus the clinical ones made from the case simulations (same list as the Speaking page).
  const DL = () => (window.DIALOGUES || []).concat((window.PSYCH_CASES || []).map((c) => App.caseDialogue(c)));
  const pageW = (o) => ({ A4: 515, LETTER: 532, A5: 363 })[o.paper] || 515;
  // "you are Nurse"; the roles named You / You (doctor) need no label.
  const youAre = (d) => (/^you\b/i.test(d.roles[d.you] || '') ? '' : 'you are ' + d.roles[d.you]);
  function dialogueBuild(o) {
    const d = DL().find((x) => x.id === o.dialogue) || DL()[0] || { id: '', title: 'Dialogue', level: '', roles: [], you: 0, lines: [] };
    const lines = d.lines.map((l) => ({ me: l[0] === d.you, who: l[4] || d.roles[l[0]], tl: o.register === 'c' && l[3] ? l[3] : l[1], en: l[2] }));
    const mine = lines.filter((l) => l.me);
    return {
      topic: 'dialogue', d, o, title: o.title || d.title, preparedFor: o.preparedFor, date: today(),
      scope: d.level + ' · ' + d.lines.length + ' lines' + (youAre(d) ? ' · ' + youAre(d) : ''),
      setting: d.setting || '', hasTaglish: d.lines.some((l) => l[3]),
      script: o.script ? lines : null, role: o.role && mine.length ? lines : null, key: o.key && o.role && mine.length ? mine : null,
      translation: o.script && o.english === 'end' ? lines : null
    };
  }
  const dialogueCanPrint = (o) => o.script || o.role;
  function dialogueHTML(m) {
    const show = m.o.english === 'show';
    let h = headHTML(m);
    if (m.setting) h += '<p class="ho-goal">' + esc(m.setting) + '</p>';
    if (m.script) h += '<section class="ho-sec"><h2>Dialogue</h2><div class="gh-dlg">' + m.script.map((l) => '<div class="gh-dl' + (l.me ? ' me' : '') + '"><span class="gh-who">' + esc(l.who) + '</span><div><span class="tl">' + esc(l.tl) + '</span>' + (show ? '<span class="gh-en">' + esc(l.en) + '</span>' : '') + '</div></div>').join('') + '</div></section>';
    if (m.translation) h += '<section class="ho-sec gh-key"><h2>Translation</h2><div class="gh-dlg">' + m.translation.map((l) => '<div class="gh-dl"><span class="gh-who">' + esc(l.who) + '</span><div>' + esc(l.en) + '</div></div>').join('') + '</div></section>';
    if (m.role) {
      let n = 0;
      h += '<section class="ho-sec gh-ws' + (m.script ? ' gh-key' : '') + '"><h2>Role-play worksheet</h2><p class="ho-goal">Name: ____________________ Date: __________ · Write your lines in Tagalog from the English cue.</p><div class="gh-dlg">' +
        m.role.map((l) => '<div class="gh-dl' + (l.me ? ' me' : '') + '"><span class="gh-who">' + (l.me ? (++n) + '. ' : '') + esc(l.who) + '</span><div>' + (l.me ? '<span class="gh-en">' + esc(l.en) + '</span><span class="gh-blank"></span>' : '<span class="tl">' + esc(l.tl) + '</span>') + '</div></div>').join('') + '</div></section>';
    }
    if (m.key) h += '<section class="ho-sec gh-key"><h2>Answer key</h2><ol class="gh-keyB">' + m.key.map((l) => '<li><b class="tl">' + esc(l.tl) + '</b> <small>' + esc(l.en) + '</small></li>').join('') + '</ol></section>';
    return h + footHTML();
  }
  function dialogueDoc(m, logo) {
    const k = kit(m, logo), { MUTED, LINE, NAVY, base, a5, content, heading } = k, show = m.o.english === 'show';
    const whoW = a5 ? 62 : 86, lineW = pageW(m.o) - whoW - 12;
    const row = (who, stack, me) => ({ columns: [{ text: who, width: whoW, bold: true, color: me ? NAVY : MUTED, fontSize: base - 1 }, { stack, width: '*' }], columnGap: 8, margin: [0, 0, 0, 6], unbreakable: true });
    const rule = () => ({ canvas: [{ type: 'line', x1: 0, y1: 0, x2: lineW, y2: 0, lineWidth: 0.6, lineColor: LINE }], margin: [0, 14, 0, 0] }); // fresh node each time: pdfmake mutates nodes
    if (m.setting) content.push({ text: m.setting, color: MUTED, italics: true, margin: [0, 0, 0, 6] });
    if (m.script) {
      content.push(heading('Dialogue', m.d.roles.join(' · ')));
      m.script.forEach((l) => content.push(row(l.who, [{ text: l.tl, fontSize: base + 0.5 }].concat(show ? [{ text: l.en, italics: true, color: MUTED, fontSize: base - 1, margin: [0, 1, 0, 0] }] : []), l.me)));
    }
    if (m.translation) {
      content.push(Object.assign(heading('Translation', ''), { pageBreak: content.length > 1 ? 'before' : undefined }));
      m.translation.forEach((l) => content.push(row(l.who, [{ text: l.en }], l.me)));
    }
    if (m.role) {
      let n = 0;
      content.push(Object.assign(heading('Role-play worksheet', youAre(m.d)), { pageBreak: content.length > 1 ? 'before' : undefined }));
      content.push({ text: 'Name: ______________________   Date: ____________', margin: [0, 2, 0, 2] });
      content.push({ text: 'Write your lines in Tagalog from the English cue.', color: MUTED, fontSize: base - 1, margin: [0, 0, 0, 6] });
      m.role.forEach((l) => {
        if (!l.me) { content.push(row(l.who, [{ text: l.tl }], false)); return; }
        const rules = Array.from({ length: Math.max(1, Math.ceil(l.tl.length / (a5 ? 42 : 62))) }, rule);
        content.push(row((++n) + '. ' + l.who, [{ text: l.en, italics: true, color: MUTED, fontSize: base - 0.5 }].concat(rules), true));
      });
    }
    if (m.key) {
      content.push(Object.assign(heading('Answer key', m.d.title), { pageBreak: 'before' }));
      m.key.forEach((l, i) => content.push({ text: [{ text: (i + 1) + '  ', color: MUTED }, { text: l.tl, bold: true }, { text: '  ' + l.en, color: MUTED, fontSize: base - 1.5 }], margin: [0, 0, 0, 4] }));
    }
    return finish(m, k, 'Tagalog dialogue handout');
  }

  /* ===================== Topic: listening ===================== */
  // The recording is played in the app (Listening page); the sheet carries what a class needs on paper:
  // a notes box, the questions, dictation lines, then the transcript and the key on their own pages.
  const LS = () => window.LISTENING || [];
  const NOTE_LINES = 6;
  function listeningBuild(o) {
    const x = LS().find((it) => it.id === o.listening) || LS()[0] || { id: '', title: 'Listening', titleEn: '', level: '', kind: '', setting: '', speakers: [], lines: [], q: [], dictation: [] };
    const lines = x.lines.map((l, i) => ({ n: i + 1, who: x.speakers[l[0]] || '', tl: l[1], en: l[2] }));
    const dict = x.dictation.map((i) => lines[i]).filter(Boolean);
    return {
      topic: 'listening', x, o, title: o.title || x.title, preparedFor: o.preparedFor, date: today(),
      scope: (x.titleEn ? x.titleEn + ' · ' : '') + x.kind + ' · ' + x.level + (x.psych ? ' · clinical' : ''),
      setting: x.setting, play: 'Play the recording in Usap Tayo: Listening, then "' + x.title + '" (' + lines.length + ' lines' + (x.speakers.length > 1 ? '; ' + x.speakers.join(', ') : '') + ').',
      notes: !!o.notes, quiz: o.quiz && x.q.length ? mixQ(x.q, x.id) : null, dictation: o.dictation && dict.length ? dict : null,
      transcript: o.transcript ? lines : null, key: o.key && x.q.length ? mixQ(x.q, x.id) : null, dkey: o.key && o.dictation && dict.length ? dict : null
    };
  }
  const listeningCanPrint = (o) => o.notes || o.quiz || o.dictation || o.transcript || o.key;
  function listeningHTML(m) {
    const show = m.o.english === 'show', blanks = (n) => Array.from({ length: n }, () => '<span class="gh-blank"></span>').join('');
    let h = headHTML(m) + '<p class="ho-goal">' + esc(m.setting) + '</p><p class="ho-goal"><b>' + esc(m.play) + '</b></p>';
    if (m.notes) h += '<section class="ho-sec"><h2>Notes while you listen</h2><div class="gh-lines">' + blanks(NOTE_LINES) + '</div></section>';
    if (m.quiz) h += quizHTML(m.quiz);
    if (m.dictation) h += '<section class="ho-sec gh-ws"><h2>Dictation</h2><p class="ho-goal">Write each line as you hear it.</p><ol class="gh-wsB">' + m.dictation.map((l) => '<li><b>Line ' + l.n + '</b><div class="gh-lines">' + blanks(2) + '</div></li>').join('') + '</ol></section>';
    if (m.transcript) h += '<section class="ho-sec gh-key"><h2>Transcript</h2><div class="gh-dlg">' + m.transcript.map((l) => '<div class="gh-dl"><span class="gh-who">' + l.n + '. ' + esc(l.who) + '</span><div><span class="tl">' + esc(l.tl) + '</span>' + (show ? '<span class="gh-en">' + esc(l.en) + '</span>' : '') + '</div></div>').join('') + '</div></section>';
    if (m.key) h += keyHTML(m.key, m.transcript ? ' ' : ' gh-key');
    if (m.dkey) h += '<section class="ho-sec"><h2>Dictation answers</h2><ol class="gh-keyB">' + m.dkey.map((l) => '<li value="' + l.n + '"><b class="tl">' + esc(l.tl) + '</b> <small>' + esc(l.en) + '</small></li>').join('') + '</ol></section>';
    return h + footHTML();
  }
  function listeningDoc(m, logo) {
    const k = kit(m, logo), { MUTED, LINE, NAVY, base, a5, content, heading } = k, show = m.o.english === 'show';
    const w = pageW(m.o), whoW = a5 ? 62 : 86;
    const rule = (x2) => ({ canvas: [{ type: 'line', x1: 0, y1: 0, x2: x2 || w, y2: 0, lineWidth: 0.6, lineColor: LINE }], margin: [0, 16, 0, 0] }); // fresh node each time
    content.push({ text: m.setting, color: MUTED, italics: true, margin: [0, 0, 0, 3] });
    content.push({ text: m.play, bold: true, color: NAVY, fontSize: base - 0.5, margin: [0, 0, 0, 4] });
    if (m.notes) { content.push(heading('Notes while you listen', '')); for (let i = 0; i < NOTE_LINES; i++) content.push(rule()); }
    if (m.quiz) quizDoc(k, m.quiz, 'Questions');
    if (m.dictation) {
      // One unbreakable block: the heading never sits alone at the foot of a page.
      content.push({ stack: [heading('Dictation', 'write each line as you hear it')].concat(m.dictation.map((l, i) => ({ stack: [{ text: (i + 1) + '. Line ' + l.n, bold: true }, rule(), rule()], margin: [0, 2, 0, 8] }))), unbreakable: true });
    }
    if (m.transcript) {
      content.push(Object.assign(heading('Transcript', m.x.titleEn), { pageBreak: content.length > 1 ? 'before' : undefined }));
      m.transcript.forEach((l) => content.push({ columns: [{ text: l.n + '. ' + l.who, width: whoW, bold: true, color: MUTED, fontSize: base - 1 }, { stack: [{ text: l.tl, fontSize: base + 0.5 }].concat(show ? [{ text: l.en, italics: true, color: MUTED, fontSize: base - 1, margin: [0, 1, 0, 0] }] : []), width: '*' }], columnGap: 8, margin: [0, 0, 0, 6], unbreakable: true }));
    }
    if (m.key) keyDoc(k, m.key, m.x.title, !m.transcript && content.length > 1);
    if (m.dkey) {
      content.push(heading('Dictation answers', ''));
      m.dkey.forEach((l) => content.push({ text: [{ text: 'Line ' + l.n + '  ', color: MUTED }, { text: l.tl, bold: true }, { text: '  ' + l.en, color: MUTED, fontSize: base - 1.5 }], margin: [0, 0, 0, 4] }));
    }
    return finish(m, k, 'Tagalog listening handout');
  }

  /* ===================== Topic: drills (3.12.0) ===================== */
  // A worksheet made from the drill data: six parts, each switched on or off, N items each, sampled with a seeded
  // shuffle (o.seed; "New set" adds one) so the preview, Print and the PDF show the same items. Key on its own page.
  const DRILL_PARTS = [
    ['gap', 'Fill the gap', 'Write the missing word on the line. The choices are in brackets.'],
    ['errors', 'Find the mistake', 'One word in each sentence is wrong. Write the corrected sentence.'],
    ['focus', 'Switch the focus', 'Rewrite each sentence in object focus: make the thing acted on the topic.'],
    ['change', 'Change the sentence', 'Rewrite each sentence as the instruction says.'],
    ['translate', 'Say it in Tagalog', 'Write each sentence in Tagalog.'],
    ['dictation', 'Dictation', 'Write each line as you hear it. A partner reads each line twice.']
  ];
  const seededRnd = (seed) => {
    let h = 2166136261; for (const ch of String(seed)) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
    return () => ((h = Math.imul(h ^ (h >>> 15), 2246822507) ^ Math.imul(h ^ (h >>> 13), 3266489909)) >>> 0) / 4294967296;
  };
  const seededPick = (list, n, rnd) => { const a = list.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a.slice(0, Math.max(0, Math.min(n, a.length))); };
  const dSent = (verb, rest, it) => verb + ' ' + rest + (it.end || '.');
  const chInstr = (it) => (App.drillChangeInstr ? App.drillChangeInstr(it) : it.type);
  // Each part: { id, title, how, items: [{ tl, en, opts, ask }], key: [{ tl, en, a }] }. Items keep their order in the key.
  function drillPart(k, n, rnd) {
    const W = window;
    if (k === 'gap') {
      const sets = W.DRILL_CLOZE_SETS || {}, lab = (x) => (x === 'nothing' ? 'no linker' : x);
      const cl = (W.DRILL_CLOZE || []).map((it) => ({ q: it.q, en: it.en, a: it.a, opts: (sets[it.set] || { opts: [it.a] }).opts, full: it.q.replace('____', it.a) }));
      const gp = (W.DRILL_GAPS || []).map((it) => ({ q: it.q, en: it.en, a: lab(it.a), opts: it.opts.map(lab), full: it.full || it.q.replace('____', it.a) }));
      // About a third markers, the rest the 3.12.0 gap sets; topped up from either list when one runs short.
      const a = seededPick(cl, Math.ceil(n / 3), rnd), b = seededPick(gp, n - a.length, rnd);
      const more = seededPick(cl.filter((x) => !a.includes(x)), n - a.length - b.length, rnd);
      const all = seededPick(a.concat(b, more), n, rnd);
      return all.map((x) => ({ item: { tl: x.q, en: x.en, opts: x.opts }, key: { a: x.a, tl: x.full } }));
    }
    if (k === 'errors') return seededPick(W.DRILL_ERRORS || [], n, rnd).map((x) => ({ item: { tl: x.bad, en: x.en, line: 1 }, key: { tl: x.fix, en: x.why } }));
    if (k === 'focus') return seededPick(W.DRILL_FOCUS || [], n, rnd).map((x) => ({ item: { tl: dSent(x.a, x.ar, x), en: x.enA, line: 1 }, key: { tl: dSent(x.o, x.or, x), en: x.enO } }));
    if (k === 'change') return seededPick(W.DRILL_CHANGE || [], n, rnd).map((x) => ({ item: { tl: x.from, ask: chInstr(x), line: 1 }, key: { tl: x.to, en: x.en } }));
    if (k === 'translate') return seededPick(W.DRILL_TRANSLATE || [], n, rnd).map((x) => ({ item: { en: x.en, line: 1 }, key: { tl: x.tl[0], en: x.en } }));
    if (k === 'dictation') return seededPick(W.DRILL_DICTATION || [], n, rnd).map((x) => ({ item: { line: 1 }, key: { tl: x.tl, en: x.en } }));
    return [];
  }
  function drillsBuild(o) {
    const n = [8, 12, 16].includes(+o.n) ? +o.n : 8, seed = o.seed || 1;
    const parts = DRILL_PARTS.filter(([k]) => o[k]).map(([k, title, how], i) => {
      const rows = drillPart(k, n, seededRnd(seed + ':' + k));
      return { k, id: letter(i), title, how, items: rows.map((r) => r.item), key: rows.map((r) => r.key) };
    }).filter((p) => p.items.length);
    return {
      topic: 'drills', o, n, seed, title: o.title || DEF.drills.title, preparedFor: o.preparedFor, date: today(),
      scope: parts.length + (parts.length === 1 ? ' part' : ' parts') + ' · ' + n + ' items each · set ' + seed,
      parts, key: o.key && parts.length ? parts.map((p) => ({ id: p.id, k: p.k, title: p.title, answers: p.key })) : null
    };
  }
  const drillsCanPrint = (o) => DRILL_PARTS.some(([k]) => o[k]);
  const optLine = (opts) => '(' + opts.join(' · ') + ')';
  function drillsHTML(m) {
    const en = m.o.english === 'show';
    let h = headHTML(m) + '<p class="ho-goal">Name: ____________________ Date: __________</p>';
    m.parts.forEach((p) => {
      h += '<section class="ho-sec gh-ws"><h2>' + p.id + '. ' + esc(p.title) + '</h2><p class="ho-goal">' + esc(p.how) + '</p><ol class="gh-wsB">' + p.items.map((it) =>
        '<li>' + (it.tl ? '<span class="tl">' + esc(it.tl) + '</span>' : '') + (it.opts ? ' <span class="gh-dopts tl">' + esc(optLine(it.opts)) + '</span>' : '') +
        (it.ask ? '<div class="gh-dask">' + esc(it.ask) + '</div>' : '') + (it.en && (en || !it.tl) ? '<div class="gh-en gh-den">' + esc(it.en) + '</div>' : '') +
        (it.line ? '<div class="gh-lines">' + (p.k === 'dictation' ? '<span class="gh-blank"></span><span class="gh-blank"></span>' : '<span class="gh-blank"></span>') + '</div>' : '') + '</li>').join('') + '</ol></section>';
    });
    if (m.key) {
      h += '<section class="ho-sec gh-key"><h2>Answer key</h2>' + m.key.map((p) => '<h3>' + p.id + '. ' + esc(p.title) + '</h3>' + (p.k === 'dictation' ? '<p class="ho-goal">For the partner: read each line twice.</p>' : '') +
        '<ol class="gh-keyB">' + p.answers.map((a) => '<li>' + (a.a ? '<b>' + esc(a.a) + '</b> · ' : '') + '<b class="tl">' + esc(a.tl) + '</b>' + (a.en && en ? ' <small>' + esc(a.en) + '</small>' : '') + '</li>').join('') + '</ol>').join('') + '</section>';
    }
    return h + footHTML();
  }
  function drillsDoc(m, logo) {
    const k = kit(m, logo), { MUTED, LINE, NAVY, base, content, heading, sub } = k, en = m.o.english === 'show', w = pageW(m.o) - 16;
    const run = (t, x) => Object.assign({ text: t }, x || {});
    const rule = () => ({ canvas: [{ type: 'line', x1: 0, y1: 0, x2: w, y2: 0, lineWidth: 0.6, lineColor: LINE }], margin: [0, 16, 0, 0] }); // fresh node each time: pdfmake mutates nodes
    content.push({ text: 'Name: ______________________   Date: ____________', margin: [0, 2, 0, 2] });
    m.parts.forEach((p) => {
      const head = [heading(p.id + '. ' + p.title, ''), { text: p.how, color: MUTED, fontSize: base - 1, margin: [0, 0, 0, 4] }];
      p.items.forEach((it, i) => {
        const stack = [];
        const line1 = [run((i + 1) + '. ', { color: MUTED })];
        if (it.tl) line1.push(run(it.tl, { bold: true }));
        if (it.opts) line1.push(run('   ' + optLine(it.opts), { color: NAVY }));
        if (!it.tl && it.en) line1.push(run(it.en));
        if (!it.tl && !it.en) line1.push(run('Line ' + (i + 1), { color: MUTED }));
        stack.push({ text: line1 });
        if (it.ask) stack.push({ text: it.ask, italics: true, color: NAVY, fontSize: base - 1, margin: [12, 1, 0, 0] });
        if (it.tl && it.en && en) stack.push({ text: it.en, color: MUTED, fontSize: base - 1, margin: [12, 1, 0, 0] });
        if (it.line) { stack.push(Object.assign(rule(), { margin: [12, 16, 0, 0] })); if (p.k === 'dictation') stack.push(Object.assign(rule(), { margin: [12, 16, 0, 0] })); }
        // The part heading travels with its first item so it never sits alone at the foot of a page.
        content.push({ stack: i === 0 ? head.concat(stack) : stack, unbreakable: true, margin: [0, 0, 0, it.line ? 8 : 5] });
      });
    });
    if (m.key) {
      content.push(Object.assign(heading('Answer key', m.title), { pageBreak: 'before' }));
      m.key.forEach((p) => {
        content.push(sub(p.id + '. ' + p.title));
        if (p.k === 'dictation') content.push({ text: 'For the partner: read each line twice.', color: MUTED, italics: true, fontSize: base - 1, margin: [0, 0, 0, 3] });
        p.answers.forEach((a, i) => content.push({ text: [run((i + 1) + '  ', { color: MUTED })].concat(a.a ? [run(a.a + '  ·  ', { bold: true, color: NAVY })] : []).concat([run(a.tl, { bold: true })]).concat(a.en && en ? [run('  ' + a.en, { color: MUTED, fontSize: base - 1.5 })] : []), margin: [0, 0, 0, 3] }));
      });
    }
    return finish(m, k, 'Tagalog grammar drills handout');
  }

  function build(o) {
    const t = o.topic || 'panlapi';
    return t === 'verbs' ? verbsBuild(o) : t === 'lesson' ? lessonBuild(o) : t === 'reading' ? readingBuild(o) : t === 'dialogue' ? dialogueBuild(o) : t === 'listening' ? listeningBuild(o) : t === 'drills' ? drillsBuild(o) : panlapiBuild(o);
  }
  // For tests and callers: {topic, ...} gets that topic's defaults filled in.
  const withDefaults = (o) => Object.assign({}, DEF[(o && o.topic) || 'panlapi'] || DEFAULTS, o);
  App.grammarHandoutDoc = (o) => docDef(build(withDefaults(o))); // exposed for testing
  App.grammarHandoutBuild = (o) => build(withDefaults(o));


  /* ---------- Page ---------- */
  const canPrint = (o) => ({ verbs: verbsCanPrint, lesson: lessonCanPrint, reading: readingCanPrint, dialogue: dialogueCanPrint, listening: listeningCanPrint, drills: drillsCanPrint }[o.topic] || panlapiCanPrint)(o);
  const PAGE = {
    panlapi: { h1: 'Grammar handout', crumb: '<a href="#/affixes">Panlapi</a> / Handout', intro: 'Print the affix cheat sheet, the sound-change rules, the word list, and a worksheet with its answer key. Your choices are remembered on this device.', file: 'grammar-handout' },
    verbs: { h1: 'Verb handout', crumb: '<a href="#/verbs">Verbs</a> / Handout', intro: 'Print conjugation tables for the verbs you pick, example sentences for each aspect, an "aspect at a glance" page, and a worksheet with its answer key. Your choices are remembered on this device.', file: 'verb-handout' },
    lesson: { h1: 'Lesson handout', crumb: '<a href="#/lessons">Lessons</a> / Handout', intro: 'Print any lesson with its quiz and an answer key on a separate page. Your choices are remembered on this device.', file: 'lesson-handout' },
    reading: { h1: 'Reading handout', crumb: '<a href="#/reading">Reading</a> / Handout', intro: 'Print any passage with its glossary, questions and an answer key. Put the translation under each paragraph, on its own page, or leave it out. Your choices are remembered on this device.', file: 'reading-handout' },
    listening: { h1: 'Listening handout', crumb: '<a href="#/listen">Listening</a> / Handout', intro: 'Print a listening exercise for a class or for yourself: a notes box, the questions and dictation lines, then the transcript and the answer key on their own pages. Play the recording from the Listening page. Your choices are remembered on this device.', file: 'listening-handout' },
    drills: { h1: 'Drills handout', crumb: '<a href="#/drills">Drills</a> / Handout', intro: 'Print a grammar worksheet made from the drills: fill the gap, find the mistake, switch the focus, change the sentence, say it in Tagalog, and dictation, with the answer key on its own page. New set picks other sentences. Your choices are remembered on this device.', file: 'drills-handout' },
    dialogue: { h1: 'Dialogue handout', crumb: '<a href="#/speak">Speaking</a> / Handout', intro: 'Print any dialogue as a script, and a role-play worksheet where you write your own lines from the English cue, with an answer key. Your choices are remembered on this device.', file: 'dialogue-handout' }
  };
  function page(topic, el, p, q) {
    let o = opts(topic);
    if (topic === 'panlapi') {
      if (q.t && TYPES().some((t) => t.id === q.t)) o = Object.assign({}, o, { type: q.t });
      if (q.set === 'clinical') o = Object.assign({}, o, { set: 'clinical' });
    } else if (topic === 'verbs') {
      if (q.set === 'clinical') o = Object.assign({}, o, { set: 'clinical' });
      if (q.v && VB().some((v) => v.r === q.v)) o = Object.assign({}, o, { verb: q.v });
    } else if (topic === 'lesson') {
      if (q.id && LV().some((l) => l.id === q.id)) o = Object.assign({}, o, { lesson: q.id, title: '' });
      if (!LV().some((l) => l.id === o.lesson)) o.lesson = (LV()[0] || {}).id;
    } else if (topic === 'reading') {
      if (q.id && RD().some((r) => r.id === q.id)) o = Object.assign({}, o, { reading: q.id, title: '' });
      if (!RD().some((r) => r.id === o.reading)) o.reading = (RD()[0] || {}).id;
    } else if (topic === 'listening') {
      if (q.id && LS().some((x) => x.id === q.id)) o = Object.assign({}, o, { listening: q.id, title: '' });
      if (!LS().some((x) => x.id === o.listening)) o.listening = (LS()[0] || {}).id;
    } else if (topic === 'dialogue') {
      if (q.id && DL().some((d) => d.id === q.id)) o = Object.assign({}, o, { dialogue: q.id, title: '' });
      if (!DL().some((d) => d.id === o.dialogue)) o.dialogue = (DL()[0] || {}).id;
    }
    const pg = PAGE[topic];
    const chk = (k, label, hint) => '<label class="ho-chk"><input type="checkbox" data-o="' + k + '"' + (o[k] ? ' checked' : '') + '> <span>' + label + (hint ? '<small class="muted"> ' + hint + '</small>' : '') + '</span></label>';
    const seg = (k, items) => '<div class="seg" role="group">' + items.map(([v, t]) => '<button data-seg="' + k + '" data-v="' + v + '" class="' + (o[k] === v ? 'on' : '') + '">' + t + '</button>').join('') + '</div>';
    const paperSize = '<div><div class="eyebrow">Paper</div>' + seg('paper', [['A4', 'A4'], ['LETTER', 'Letter'], ['A5', 'A5 booklet']]) + '</div><div><div class="eyebrow">Text size</div>' + seg('size', [['small', 'Small'], ['normal', 'Normal'], ['large', 'Large']]) + '</div>';
    const englishSeg = '<div><div class="eyebrow">English</div>' + seg('english', [['show', 'Show'], ['hide', 'Hide']]) + '<p class="small muted" style="margin:4px 0 0">Hide it for a Tagalog-only sheet.</p></div>';
    const trSeg = '<div><div class="eyebrow">English</div>' + seg('english', [['show', 'Under each line'], ['end', 'On its own page'], ['hide', 'Leave out']]) + '<p class="small muted" style="margin:4px 0 0">Leave it out for a Tagalog-only sheet.</p></div>';
    const controls = () => {
      if (topic === 'verbs') {
        const sel = '<div><div class="eyebrow">Verbs</div><select class="input" id="ghVerb"><option value="all">' + (o.set === 'clinical' ? 'All clinical verbs' : 'All verbs') + '</option>' + VB().map((v) => '<option value="' + esc(v.r) + '"' + (o.verb === v.r ? ' selected' : '') + '>' + esc(v.r) + ' · ' + esc(v.en) + '</option>').join('') + '</select><p class="small muted" style="margin:4px 0 0">Pick one verb for a single-verb sheet.</p></div>';
        return '<div class="ho-grid"><div><div class="eyebrow">Words</div>' + seg('set', [['all', 'All verbs'], ['clinical', 'Clinical only']]) + '</div>' + sel + englishSeg + paperSize + '</div>' +
          '<div><div class="eyebrow">Include</div><div class="ho-chks">' + chk('table', 'Conjugation tables', 'focus by aspect') + chk('sentences', 'Example sentences', 'up to two per aspect') + chk('cheat', 'Aspect at a glance', 'focus, aspect and the repeated syllable') + chk('worksheet', 'Worksheet', 'write the forms, choose the form') + chk('key', 'Answer key', 'on its own page') + '</div></div>';
      }
      if (topic === 'lesson') {
        const units = [];
        LV().forEach((l) => { let u = units.find((x) => x[0] === l.unit); if (!u) units.push((u = [l.unit, []])); u[1].push(l); });
        const sel = '<div><div class="eyebrow">Lesson</div><select class="input" id="ghLesson">' + units.map(([u, ls]) => '<optgroup label="' + esc(u) + '">' + ls.map((l) => '<option value="' + esc(l.id) + '"' + (o.lesson === l.id ? ' selected' : '') + '>' + esc(l.title) + ' (' + esc(l.level) + ')</option>').join('') + '</optgroup>').join('') + '</select></div>';
        return '<div class="ho-grid">' + sel + paperSize + '</div>' +
          '<div><div class="eyebrow">Include</div><div class="ho-chks">' + chk('body', 'Lesson text', 'with examples and tables') + chk('mistakes', 'Common mistakes', 'the wrong line struck through, then the right one') + chk('more', 'More examples') + chk('quiz', 'Quiz questions', 'lettered options, no answers') + chk('quiz2', 'More practice quiz', 'its answers go in the key') + chk('key', 'Answer key', 'answers and explanations, on its own page') + '</div></div>';
      }
      if (topic === 'reading') {
        const grp = (lab, rs) => rs.length ? '<optgroup label="' + lab + '">' + rs.map((r) => '<option value="' + esc(r.id) + '"' + (o.reading === r.id ? ' selected' : '') + '>' + esc(r.title) + ' · ' + esc(r.titleEn) + ' (' + esc(r.level) + ')</option>').join('') + '</optgroup>' : '';
        const sel = '<div><div class="eyebrow">Passage</div><select class="input" id="ghReading">' + grp('Everyday', RD().filter((r) => !r.psych)) + grp('Clinical', RD().filter((r) => r.psych)) + '</select></div>';
        return '<div class="ho-grid">' + sel + trSeg + paperSize + '</div>' +
          '<div><div class="eyebrow">Include</div><div class="ho-chks">' + chk('passage', 'Passage', 'the Tagalog text') + chk('gloss', 'Glossary', 'key words with meanings') + chk('quiz', 'Questions', 'lettered options, no answers') + chk('key', 'Answer key', 'answers and explanations') + '</div></div>';
      }
      if (topic === 'listening') {
        const grp = (lab, xs) => xs.length ? '<optgroup label="' + lab + '">' + xs.map((x) => '<option value="' + esc(x.id) + '"' + (o.listening === x.id ? ' selected' : '') + '>' + esc(x.title) + ' · ' + esc(x.kind) + ' (' + esc(x.level) + ')</option>').join('') + '</optgroup>' : '';
        const sel = '<div><div class="eyebrow">Recording</div><select class="input" id="ghListening">' + grp('Everyday', LS().filter((x) => !x.psych)) + grp('Clinical', LS().filter((x) => x.psych)) + '</select></div>';
        const enSeg = '<div><div class="eyebrow">English in the transcript</div>' + seg('english', [['show', 'Show'], ['hide', 'Hide']]) + '</div>';
        return '<div class="ho-grid">' + sel + enSeg + paperSize + '</div>' +
          '<div><div class="eyebrow">Include</div><div class="ho-chks">' + chk('notes', 'Notes box', 'ruled lines for note-taking') + chk('quiz', 'Questions', 'lettered options, no answers') + chk('dictation', 'Dictation', 'lines to write from the audio') + chk('transcript', 'Transcript', 'on its own page') + chk('key', 'Answer key', 'answers, explanations and dictation lines') + '</div></div>';
      }
      if (topic === 'dialogue') {
        const grp = (lab, ds) => '<optgroup label="' + lab + '">' + ds.map((d) => '<option value="' + esc(d.id) + '"' + (o.dialogue === d.id ? ' selected' : '') + '>' + esc(d.title) + ' (' + esc(d.level) + ')</option>').join('') + '</optgroup>';
        const all = DL(), sel = '<div><div class="eyebrow">Dialogue</div><select class="input" id="ghDialogue">' + grp('Everyday', all.filter((d) => !/^case-/.test(d.id))) + grp('Clinical', all.filter((d) => /^case-/.test(d.id))) + '</select></div>';
        const cur = all.find((d) => d.id === o.dialogue) || {}, tag = (cur.lines || []).some((l) => l[3]);
        const regSeg = '<div><div class="eyebrow">Wording</div>' + seg('register', [['f', 'Respectful'], ['c', 'Everyday']]) + '<p class="small muted" style="margin:4px 0 0">' + (tag ? 'Everyday uses the Taglish version of lines that have one.' : 'This dialogue has one wording only.') + '</p></div>';
        return '<div class="ho-grid">' + sel + trSeg + regSeg + paperSize + '</div>' +
          '<div><div class="eyebrow">Include</div><div class="ho-chks">' + chk('script', 'Script', 'every line in Tagalog') + chk('role', 'Role-play worksheet', 'your lines blank, with the English cue') + chk('key', 'Answer key', 'your lines, for the worksheet') + '</div></div>';
      }
      if (topic === 'drills') {
        const nSeg = '<div><div class="eyebrow">Items per part</div>' + seg('n', [['8', '8'], ['12', '12'], ['16', '16']]) + '</div>';
        const setBox = '<div><div class="eyebrow">Sentences</div><div class="row"><button class="btn sm" id="ghNew">New set</button><span class="muted small">Set ' + esc(String(o.seed || 1)) + '</span></div><p class="small muted" style="margin:4px 0 0">The same set prints the same sentences.</p></div>';
        return '<div class="ho-grid">' + nSeg + setBox + englishSeg + paperSize + '</div>' +
          '<div><div class="eyebrow">Include</div><div class="ho-chks">' + chk('gap', 'A. Fill the gap', 'markers, linkers, small words, pronouns, question words, negation') + chk('errors', 'B. Find the mistake', 'write the corrected sentence') +
          chk('focus', 'C. Switch the focus', 'actor focus to object focus') + chk('change', 'D. Change the sentence', 'question, negative, respectful, time') + chk('translate', 'E. Say it in Tagalog', 'from the English') +
          chk('dictation', 'F. Dictation', 'a partner reads the lines from the key') + chk('key', 'Answer key', 'on its own page') + '</div></div>';
      }
      return '<div class="ho-grid">' +
        '<div><div class="eyebrow">Affix type</div>' + seg('type', [['all', 'All']].concat(TYPES().map((t) => [t.id, t.tl]))) + '</div>' +
        '<div><div class="eyebrow">Words</div>' + seg('set', [['all', 'All words'], ['clinical', 'Clinical only']]) + '</div>' + englishSeg + paperSize + '</div>' +
        '<div><div class="eyebrow">Include</div><div class="ho-chks">' + chk('cheat', 'Cheat sheet', 'affix positions and what each affix does') + chk('rules', 'Sound changes and rules') + chk('words', 'Word list', 'with the affix marked and the root') + chk('worksheet', 'Worksheet', 'find the root, choose the affix') + chk('key', 'Answer key', 'on its own page') + '</div></div>';
    };
    const defTitle = () => (topic === 'lesson' ? (LV().find((l) => l.id === o.lesson) || {}).title || '' : topic === 'reading' ? (RD().find((r) => r.id === o.reading) || {}).title || '' : topic === 'dialogue' ? (DL().find((d) => d.id === o.dialogue) || {}).title || '' : topic === 'listening' ? (LS().find((x) => x.id === o.listening) || {}).title || '' : '');
    const draw = () => {
      el.innerHTML = '<div class="breadcrumb">' + pg.crumb + '</div><h1>' + pg.h1 + '</h1><p class="muted">' + pg.intro + '</p>' +
        '<div class="card stack ho-controls">' + controls() +
        '<div class="ho-grid"><label class="small">Title<input class="input" id="ghTitle" value="' + esc(o.title) + '"' + (defTitle() ? ' placeholder="' + esc(defTitle()) + '"' : '') + '></label><label class="small">Prepared for (optional)<input class="input" id="ghFor" value="' + esc(o.preparedFor) + '" placeholder="e.g., First years, Dept. of Psychiatry"></label></div>' +
        '<div class="row"><button class="btn primary" id="ghPdf">' + App.icons.book + ' Download PDF</button><button class="btn" id="ghPrint">Print</button><span class="muted small" id="ghStat"></span></div></div>' +
        '<h2 style="margin-top:18px">Preview</h2><div class="ho-paper ho-' + o.paper + ' ho-size-' + o.size + '" id="ghPaper"></div>';
      bind();
      preview();
    };
    const preview = () => {
      const paper = el.querySelector('#ghPaper');
      paper.innerHTML = canPrint(o) ? renderHTML(build(o)) : '<p class="muted">Choose at least one part to include.</p>';
    };
    const update = (patch, redraw) => { o = Object.assign({}, o, patch); saveOpts(o, topic); if (redraw) draw(); else preview(); };
    const bind = () => {
      el.querySelectorAll('[data-seg]').forEach((b) => (b.onclick = () => {
        const k = b.dataset.seg;
        el.querySelectorAll('[data-seg="' + k + '"]').forEach((x) => x.classList.toggle('on', x === b));
        const patch = { [k]: b.dataset.v };
        if (k === 'paper' || k === 'size') el.querySelector('#ghPaper').className = 'ho-paper ho-' + (patch.paper || o.paper) + ' ho-size-' + (patch.size || o.size);
        // Choosing a word set clears a single-verb pick so the set takes effect.
        if (topic === 'verbs' && k === 'set') { patch.verb = 'all'; update(patch, true); return; }
        update(patch);
      }));
      el.querySelectorAll('[data-o]').forEach((c) => (c.onchange = () => update({ [c.dataset.o]: c.checked })));
      const vs = el.querySelector('#ghVerb'); if (vs) vs.onchange = () => update({ verb: vs.value });
      const ls = el.querySelector('#ghLesson'); if (ls) ls.onchange = () => update({ lesson: ls.value, title: '' }, true);
      const rs = el.querySelector('#ghReading'); if (rs) rs.onchange = () => update({ reading: rs.value, title: '' }, true);
      const lsel = el.querySelector('#ghListening'); if (lsel) lsel.onchange = () => update({ listening: lsel.value, title: '' }, true);
      const ds = el.querySelector('#ghDialogue'); if (ds) ds.onchange = () => update({ dialogue: ds.value, title: '' }, true);
      const nw = el.querySelector('#ghNew'); if (nw) nw.onclick = () => update({ seed: (+o.seed || 1) + 1 }, true);
      el.querySelector('#ghTitle').oninput = (e) => update({ title: e.target.value });
      el.querySelector('#ghFor').oninput = (e) => update({ preparedFor: e.target.value });
      el.querySelector('#ghPrint').onclick = () => window.print();
      el.querySelector('#ghPdf').onclick = async () => {
        const stat = el.querySelector('#ghStat'), btn = el.querySelector('#ghPdf');
        if (!canPrint(o)) { App.toast('Choose at least one part first.'); return; }
        btn.disabled = true; stat.textContent = 'Making your PDF…';
        try {
          await App.pdfKit.load();
          const logo = await App.pdfKit.logo();
          const m = build(o);
          const name = (m.title || pg.file).replace(/[^\w\- ]+/g, '').trim().replace(/\s+/g, '-').toLowerCase() + (o.english === 'hide' && topic !== 'lesson' ? '-tagalog-only' : '') + '.pdf';
          pdfMake.createPdf(docDef(m, logo)).download(name, () => { stat.textContent = 'Downloaded ' + name; btn.disabled = false; });
          App.activity(5);
        } catch (e) {
          stat.textContent = ''; btn.disabled = false;
          App.toast('The PDF tool could not load. Check your connection once, or use Print → Save as PDF.');
        }
      };
    };
    draw();
  }
  V.ghandout = (el, p, q) => page('panlapi', el, p, q);
  V.ghandoutVerbs = (el, p, q) => page('verbs', el, p, q);
  V.ghandoutLesson = (el, p, q) => page('lesson', el, p, q);
  V.ghandoutReading = (el, p, q) => page('reading', el, p, q);
  V.ghandoutDialogue = (el, p, q) => page('dialogue', el, p, q);
  V.ghandoutListening = (el, p, q) => page('listening', el, p, q);
  V.ghandoutDrills = (el, p, q) => page('drills', el, p, q);
})();
