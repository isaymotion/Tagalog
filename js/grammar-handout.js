/* Grammar handout generator. First topic: Panlapi (affixes).
   Same pattern as the psychiatry handout: one content model from the options, rendered as an on-screen
   preview (also used for printing) and as a PDF through pdfmake (App.pdfKit, shared with handout.js).
   Data: AFFIX_TYPES, AFFIX_RULES, AFFIX_LIST, AFFIX_ITEMS, AFFIX_FOCUS_DRILL in js/data/affixes.js. */
(function () {
  const { esc } = App;
  const V = (App.views = App.views || {});
  const S = () => App.state;
  const TYPES = () => window.AFFIX_TYPES || [], RULES = () => window.AFFIX_RULES || [], LIST = () => window.AFFIX_LIST || [];
  const ITEMS = () => window.AFFIX_ITEMS || [], FOCUS = () => window.AFFIX_FOCUS_DRILL || [];
  const SUB = { uh: 'unlapi + hulapi', gh: 'gitlapi + hulapi', ug: 'unlapi + gitlapi' };
  const typeOf = (id) => TYPES().find((t) => t.id === id) || { id, tl: id, en: '' };

  const DEFAULTS = { topic: 'panlapi', type: 'all', set: 'all', cheat: true, rules: true, words: true, worksheet: true, key: true, english: 'show', paper: 'A4', size: 'normal', title: 'Panlapi: Tagalog Affixes', preparedFor: '' };
  function opts() { return Object.assign({}, DEFAULTS, S().settings.ghandout || {}); }
  function saveOpts(o) { S().settings.ghandout = o; App.save(); }

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
  function build(o) {
    const all = ITEMS().filter((it) => o.set !== 'clinical' || it.clin);
    const items = all.filter((it) => o.type === 'all' || it.t === o.type);
    const types = TYPES().filter((t) => o.type === 'all' || t.id === o.type);
    const list = LIST().filter((a) => o.type === 'all' || a.t === o.type);
    const focus = FOCUS().filter((f) => o.set !== 'clinical' || f.clin);
    const rootWs = sample(items, 24);
    const focusWs = spreadPairs(focus).map((f, i) => Object.assign({}, f, { a: options(f, i) }));
    return {
      title: o.title || DEFAULTS.title, preparedFor: o.preparedFor,
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
  const canPrint = (o) => o.cheat || o.rules || o.words || o.worksheet;

  /* ---------- HTML preview ---------- */
  const segHTML = (seg) => '<span class="gh-seg">' + pieces(seg).map((x) => '<span class="gs-' + x.k + '">' + esc(x.s) + '</span>').join('') + '</span>';
  function renderHTML(m) {
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
  function docDef(m, logo) {
    const K = App.pdfKit, { NAVY, MUTED, LINE, TINT } = K, AFFIX = '#9a5b00';
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
    return {
      pageSize: o.paper === 'LETTER' ? 'LETTER' : o.paper,
      pageMargins: a5 ? [28, 28, 28, 40] : [40, 40, 40, 50],
      info: { title: m.title, author: APP_META.author, subject: 'Tagalog grammar handout', creator: 'Usap Tayo ' + APP_META.version },
      content: K.fixGlyphs(content),
      footer: (cur, total) => ({ margin: a5 ? [28, 8, 28, 0] : [40, 14, 40, 0], columns: [
        { text: APP_META.attribution, fontSize: a5 ? 5.5 : 6.5, color: MUTED },
        { text: cur + ' / ' + total, alignment: 'right', fontSize: a5 ? 6.5 : 7.5, color: MUTED, width: 40 }
      ] }),
      defaultStyle: { font: 'Roboto', fontSize: base, lineHeight: 1.15 },
      styles: { h1: { fontSize: a5 ? base + 5 : base + 8, bold: true, color: NAVY }, meta: { color: MUTED, fontSize: base - 1 } }
    };
  }
  App.grammarHandoutDoc = (o) => docDef(build(Object.assign({}, DEFAULTS, o))); // exposed for testing
  App.grammarHandoutBuild = build;

  /* ---------- Page ---------- */
  V.ghandout = (el, p, q) => {
    let o = opts();
    if (q.t && TYPES().some((t) => t.id === q.t)) o = Object.assign({}, o, { type: q.t });
    if (q.set === 'clinical') o = Object.assign({}, o, { set: 'clinical' });
    const chk = (k, label, hint) => '<label class="ho-chk"><input type="checkbox" data-o="' + k + '"' + (o[k] ? ' checked' : '') + '> <span>' + label + (hint ? '<small class="muted"> ' + hint + '</small>' : '') + '</span></label>';
    const seg = (k, items) => '<div class="seg" role="group">' + items.map(([v, t]) => '<button data-seg="' + k + '" data-v="' + v + '" class="' + (o[k] === v ? 'on' : '') + '">' + t + '</button>').join('') + '</div>';
    const draw = () => {
      el.innerHTML = '<div class="breadcrumb"><a href="#/affixes">Panlapi</a> / Handout</div><h1>Grammar handout</h1>' +
        '<p class="muted">Print the affix cheat sheet, the sound-change rules, the word list, and a worksheet with its answer key. Your choices are remembered on this device.</p>' +
        '<div class="card stack ho-controls">' +
        '<div class="ho-grid">' +
        '<div><div class="eyebrow">Affix type</div>' + seg('type', [['all', 'All']].concat(TYPES().map((t) => [t.id, t.tl]))) + '</div>' +
        '<div><div class="eyebrow">Words</div>' + seg('set', [['all', 'All words'], ['clinical', 'Clinical only']]) + '</div>' +
        '<div><div class="eyebrow">English</div>' + seg('english', [['show', 'Show'], ['hide', 'Hide']]) + '<p class="small muted" style="margin:4px 0 0">Hide it for a Tagalog-only sheet.</p></div>' +
        '<div><div class="eyebrow">Paper</div>' + seg('paper', [['A4', 'A4'], ['LETTER', 'Letter'], ['A5', 'A5 booklet']]) + '</div>' +
        '<div><div class="eyebrow">Text size</div>' + seg('size', [['small', 'Small'], ['normal', 'Normal'], ['large', 'Large']]) + '</div>' +
        '</div>' +
        '<div><div class="eyebrow">Include</div><div class="ho-chks">' + chk('cheat', 'Cheat sheet', 'affix positions and what each affix does') + chk('rules', 'Sound changes and rules') + chk('words', 'Word list', 'with the affix marked and the root') + chk('worksheet', 'Worksheet', 'find the root, choose the affix') + chk('key', 'Answer key', 'on its own page') + '</div></div>' +
        '<div class="ho-grid"><label class="small">Title<input class="input" id="ghTitle" value="' + esc(o.title) + '"></label><label class="small">Prepared for (optional)<input class="input" id="ghFor" value="' + esc(o.preparedFor) + '" placeholder="e.g., PGY-1, Dept. of Psychiatry"></label></div>' +
        '<div class="row"><button class="btn primary" id="ghPdf">' + App.icons.book + ' Download PDF</button><button class="btn" id="ghPrint">Print</button><span class="muted small" id="ghStat"></span></div></div>' +
        '<h2 style="margin-top:18px">Preview</h2><div class="ho-paper ho-' + o.paper + ' ho-size-' + o.size + '" id="ghPaper"></div>';
      bind();
      preview();
    };
    const preview = () => {
      const paper = el.querySelector('#ghPaper');
      paper.innerHTML = canPrint(o) ? renderHTML(build(o)) : '<p class="muted">Choose at least one part to include.</p>';
    };
    const update = (patch, redraw) => { o = Object.assign({}, o, patch); saveOpts(o); if (redraw) draw(); else preview(); };
    const bind = () => {
      el.querySelectorAll('[data-seg]').forEach((b) => (b.onclick = () => {
        el.querySelectorAll('[data-seg="' + b.dataset.seg + '"]').forEach((x) => x.classList.toggle('on', x === b));
        const patch = { [b.dataset.seg]: b.dataset.v };
        if (b.dataset.seg === 'paper' || b.dataset.seg === 'size') el.querySelector('#ghPaper').className = 'ho-paper ho-' + (patch.paper || o.paper) + ' ho-size-' + (patch.size || o.size);
        update(patch);
      }));
      el.querySelectorAll('[data-o]').forEach((c) => (c.onchange = () => update({ [c.dataset.o]: c.checked })));
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
          const name = (o.title || 'grammar-handout').replace(/[^\w\- ]+/g, '').trim().replace(/\s+/g, '-').toLowerCase() + (o.english === 'hide' ? '-tagalog-only' : '') + '.pdf';
          pdfMake.createPdf(docDef(build(o), logo)).download(name, () => { stat.textContent = 'Downloaded ' + name; btn.disabled = false; });
          App.activity(5);
        } catch (e) {
          stat.textContent = ''; btn.disabled = false;
          App.toast('The PDF tool could not load. Check your connection once, or use Print → Save as PDF.');
        }
      };
    };
    draw();
  };
})();
