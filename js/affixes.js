/* Panlapi (affix) trainer: unlapi, gitlapi, hulapi, kabilaan, laguhan.
   Four drills: name the affix type, find the root, build the word from root + affix, choose the affix the
   sentence forces (focus). Data: AFFIX_TYPES, AFFIX_RULES, AFFIX_LIST, AFFIX_ITEMS, AFFIX_FOCUS_DRILL in js/data/affixes.js.
   Segmentation notation: [..] affix, {..} repeated aspect syllable, <in> an infix inside a prefix. */
(function () {
  const { esc, shuffle, pick } = App;
  const V = (App.views = App.views || {});
  const TYPES = window.AFFIX_TYPES || [], RULES = window.AFFIX_RULES || [], LIST = window.AFFIX_LIST || [];
  const ITEMS = window.AFFIX_ITEMS || [], FOCUS = window.AFFIX_FOCUS_DRILL || [];
  const typeOf = (id) => TYPES.find((t) => t.id === id) || { tl: id, en: '' };
  const SUB = { uh: 'unlapi + hulapi', gh: 'gitlapi + hulapi', ug: 'unlapi + gitlapi' };

  /* Split a seg string into pieces: { s: text, k: 'a' affix | 'r' root | 'd' reduplication }.
     "[p<in>ag]-usap[an]" → [p, in, ag-] as affix, usap root, an affix. */
  function pieces(seg) {
    const out = [];
    let i = 0, cur = '', mode = 'r';
    const flush = () => { if (cur) out.push({ s: cur, k: mode }); cur = ''; };
    while (i < seg.length) {
      const ch = seg[i];
      if (ch === '[' || ch === '{') { flush(); mode = ch === '[' ? 'a' : 'd'; }
      else if (ch === ']' || ch === '}') { flush(); mode = 'r'; }
      else if (ch === '<' || ch === '>') { /* infix inside a prefix: keep as part of the affix */ }
      else cur += ch;
      i++;
    }
    flush();
    // A written hyphen belongs to the prefix it follows (pinag-usapan), not to the root.
    for (let k = 1; k < out.length; k++) if (out[k].k === 'r' && out[k].s.startsWith('-') && out[k - 1].k === 'a') { out[k - 1].s += '-'; out[k].s = out[k].s.slice(1); }
    return out.filter((x) => x.s);
  }
  const plain = (seg) => seg.replace(/[[\]{}<>]/g, '');
  // Affix label from the seg: "mag-", "-um-", "-an", "ka- -an", "pag- with -in- -an".
  function affixLabel(it) {
    const p = pieces(it.seg);
    const labels = [];
    p.forEach((x, k) => {
      if (x.k !== 'a') return;
      const first = k === 0, last = k === p.length - 1;
      const core = x.s.replace(/-$/, '');
      const inner = it.seg.match(/\[([a-z]*)<in>([a-z]*)\]/);
      if (inner && core === inner[1] + 'in' + inner[2]) labels.push(inner[1] + inner[2] + '-', '-in-');
      else if (first) labels.push(core + '-');
      else if (last) labels.push('-' + core);
      else labels.push('-' + core + '-');
    });
    return labels.join(' + ');
  }
  // Text version of the segmentation: k·UM·ain
  const segText = (seg) => pieces(seg).map((x) => (x.k === 'a' ? x.s.toUpperCase() : x.k === 'd' ? '(' + x.s + ')' : x.s)).join('·').replace(/-·/g, '-');
  const segHTML = (seg) => '<span class="tl segw">' + pieces(seg).map((x) => '<span class="seg-' + x.k + '">' + esc(x.s) + '</span>').join('') + '</span>';
  const explain = (it) => segText(it.seg) + ': root ' + it.r + ', ' + affixLabel(it) + ' (' + typeOf(it.t).tl + (it.sub ? ', ' + SUB[it.sub] : '') + '). ' + it.en + '.' + (it.note ? ' ' + it.note : '');

  function pool(set, type) {
    return ITEMS.filter((it) => (set !== 'clinical' || it.clin) && (type === 'all' || it.t === type));
  }

  /* Wrong answers for "build the word": the same pieces in the wrong place or without the sound change. */
  function distractors(it) {
    const p = pieces(it.seg).filter((x) => x.k !== 'd');
    const aff = p.filter((x) => x.k === 'a').map((x) => x.s.replace(/-/g, ''));
    const rootParts = p.filter((x) => x.k === 'r').map((x) => x.s.replace(/-/g, ''));
    const stem = rootParts.join('');
    const cands = [];
    const r = it.r.toLowerCase();
    const inf = aff.find((a) => a === 'um' || a === 'in');
    if (it.t === 'gitlapi' && inf) {
      cands.push(inf + r);                                   // umkain
      const fv = r.search(/[aeiou]/);
      cands.push(r.slice(0, fv + 1) + inf + r.slice(fv + 1)); // kaumin
      cands.push(r + inf);                                   // kainum
      cands.push(r[0] + inf + r.slice(1));                   // for vowel-initial roots: iumnom
    } else if (it.t === 'hulapi') {
      const suf = aff[0];
      cands.push(r + suf);                                   // inomin (no o → u)
      cands.push(r + (suf === 'in' ? 'an' : 'in'));          // other suffix
      cands.push(stem + (suf.startsWith('h') ? suf.slice(1) : 'h' + suf)); // h wrong
      cands.push(suf + r);                                   // suffix in front
    } else if (it.t === 'unlapi') {
      const pre = aff.join('');
      cands.push(r + pre);                                   // root first
      cands.push(pre + '-' + r);                             // hyphen wrong way
      cands.push(it.w.replace('-', ''));                     // missing hyphen
      const alt = { mag: 'ma', ma: 'mag', naka: 'nakaka', nakaka: 'naka', maka: 'ma', pam: 'pang', pan: 'pang', i: 'in' }[pre];
      if (alt) cands.push(alt + (/^[aeiou]/.test(r) && /g$/.test(alt) ? '-' : '') + r);
      cands.push(pre + r);                                   // no sound change (pangbukas, madami, mangbili)
    } else {
      // kabilaan / laguhan: drop one affix, swap, or skip the sound change
      const first = aff[0], last = aff[aff.length - 1];
      cands.push(first + stem);                              // kalungkut
      cands.push(stem + last);                               // lungkutan
      cands.push(first + r + last);                          // kalungkotan (no o → u)
      cands.push(last + stem + first);                       // swapped
      if (first.includes('in')) cands.push(first.replace('in', '') + 'in' + stem + last); // pag-in-usap-an
    }
    const taken = new Set([it.w.toLowerCase()]);
    ITEMS.forEach((x) => taken.add(x.w.toLowerCase()));      // never offer another real word from the list as "wrong"
    const out = [];
    cands.forEach((c) => { c = c.toLowerCase(); if (c && !taken.has(c) && out.length < 3) { taken.add(c); out.push(c); } });
    while (out.length < 3) out.push(shuffle(ITEMS.filter((x) => x.t === it.t && x.w !== it.w))[0].w.toLowerCase());
    return out;
  }

  function drill(box, mode, set, type, n) {
    let qs;
    if (mode === 'focus') {
      const items = pick(FOCUS.filter((f) => set !== 'clinical' || f.clin), n);
      qs = items.map((f) => ({ q: f.q, sub: f.en, tlq: true, opts: [f.ok, f.no], a: 0, tlo: true, say: f.q.replace('____', f.ok),
        cardId: 'af:' + f.ok.toLowerCase(), exp: f.q.replace('____', f.ok) + ' — ' + f.why }));
    } else {
      const src = pool(set, type);
      const items = pick(src, n);
      qs = items.map((it) => {
        if (mode === 'type') {
          const opts = TYPES.map((t) => t.tl + ' (' + t.en.toLowerCase() + ')');
          return { q: it.w, sub: it.en, tlq: true, say: it.w, opts, a: TYPES.findIndex((t) => t.id === it.t), cardId: 'af:' + it.w, exp: explain(it) };
        }
        if (mode === 'root') {
          const wrong = shuffle(ITEMS.filter((x) => x.r !== it.r && x.r[0] === it.r[0]).map((x) => x.r)).concat(shuffle(ITEMS.filter((x) => x.r !== it.r).map((x) => x.r)));
          const opts = [it.r].concat([...new Set(wrong)].slice(0, 3));
          return { q: it.w, sub: 'Which root is inside this word?', tlq: true, say: it.w, opts, a: 0, tlo: true, cardId: 'af:' + it.w, exp: explain(it) };
        }
        // build
        return { q: it.r + '  +  ' + affixLabel(it), sub: typeOf(it.t).tl + ': ' + it.en, tlq: true, opts: [it.w].concat(distractors(it)), a: 0, tlo: true, say: it.w, cardId: 'af:' + it.w, exp: explain(it) };
      });
    }
    const d = document.createElement('div'); d.style.marginTop = '12px'; box.innerHTML = ''; box.appendChild(d);
    App.runQuiz(d, qs, { onDone: (right, total) => {
      App.activity(10);
      const s = App.state; s.done.affixes = s.done.affixes || {};
      const key = mode + ':' + set + ':' + type;
      s.done.affixes[key] = Math.max(s.done.affixes[key] || 0, Math.round((100 * right) / total)); App.save();
    } });
  }

  V.affixes = (el, p, q) => {
    const type = (q && q.t) || 'all';
    const counts = {}; ITEMS.forEach((it) => (counts[it.t] = (counts[it.t] || 0) + 1));
    el.innerHTML = '<h1>Panlapi: affix trainer</h1>' +
      '<p class="muted">Tagalog builds words by attaching affixes (<span class="tl">panlapi</span>) to a root (<span class="tl">salitang-ugat</span>). Where the affix sits gives it its name: <b>unlapi</b> before the root, <b>gitlapi</b> inside it, <b>hulapi</b> after it, <b>kabilaan</b> two at once, <b>laguhan</b> all three. Once you can take a word apart you can look it up, say it, and know who the sentence is about. ' + ITEMS.length + ' words, ' + ITEMS.filter((i) => i.clin).length + ' of them from the ward.</p>' +
      '<div class="card stack"><h2 style="margin:0">Drill</h2><div class="row">' +
      '<label class="small">Mode <select class="input" id="amode" style="width:auto">' +
      '<option value="type">Hiwalayin: name the affix type</option><option value="root">Hanapin ang ugat: find the root</option><option value="build">Buuin: build the word</option><option value="focus">Piliin: which affix does the sentence need?</option></select></label>' +
      '<label class="small">Words <select class="input" id="aset" style="width:auto"><option value="all">All words</option><option value="clinical">Clinical words</option></select></label>' +
      '<label class="small" id="atypewrap">Type <select class="input" id="atype" style="width:auto"><option value="all">All types</option>' + TYPES.map((t) => '<option value="' + t.id + '"' + (t.id === type ? ' selected' : '') + '>' + esc(t.tl) + '</option>').join('') + '</select></label>' +
      '<button class="btn primary" id="ago">Start 10 questions</button></div><div id="adrill"></div></div>' +
      '<h2 style="margin-top:18px">The five positions</h2><div class="grid">' +
      TYPES.map((t) => '<a class="tile' + (type === t.id ? ' on' : '') + '" href="#/affixes?t=' + t.id + '"><span class="eyebrow">' + esc(t.en) + ' · ' + (counts[t.id] || 0) + ' words</span><h3 class="tl">' + esc(t.tl) + '</h3><p>' + esc(t.how) + '</p><div class="meta row">' + t.ex.map((x) => '<span class="pill tl">' + esc(x) + '</span>').join('') + '</div></a>').join('') + '</div>' +
      '<h2 style="margin-top:18px">Sound changes and placement rules</h2><div class="card stack" id="arules">' +
      RULES.map((r) => '<details><summary><b>' + esc(r.title) + '</b></summary><p class="tl muted small" style="margin:6px 0 2px">' + esc(r.tl) + '</p><p style="margin:4px 0">' + esc(r.en) + '</p><div class="row">' + r.ex.map(([w, root]) => '<span class="pill"><span class="tl">' + esc(w) + '</span>&nbsp;<span class="muted">← ' + esc(root) + '</span></span>').join('') + '</div></details>').join('') + '</div>' +
      '<h2 style="margin-top:18px">What each affix does</h2><div class="card afl">' +
      LIST.map((a) => '<div class="afe"><div class="spread"><b class="tl" style="font-size:1.05rem">' + esc(a.a) + '</b><span class="row"><span class="pill">' + esc(typeOf(a.t).tl) + '</span>' + (a.clin ? '<span class="pill warn">clinical</span>' : '') + '</span></div><div>' + esc(a.en) + '</div><div class="tl muted small">' + a.ex.map(esc).join(' · ') + '</div></div>').join('') + '</div>' +
      '<h2 style="margin-top:18px">Words' + (type !== 'all' ? ': ' + esc(typeOf(type).tl) + ' <a class="small" href="#/affixes">show all</a>' : '') + '</h2>' +
      '<div class="card afl">' +
      pool('all', type).map((it) => '<div class="afe"><div class="spread"><span class="row" style="gap:8px"><b class="tl" style="font-size:1.05rem">' + esc(it.w) + '</b>' + App.sayBtn(it.w) + '</span><span class="row"><span class="pill">' + esc(typeOf(it.t).tl) + (it.sub ? ' · ' + esc(SUB[it.sub]) : '') + '</span>' + (it.clin ? '<span class="pill warn">clinical</span>' : '') + '</span></div>' +
        '<div class="row" style="gap:10px;align-items:baseline">' + segHTML(it.seg) + '<span class="muted small">root <a class="tl" href="#/search?q=' + encodeURIComponent(it.r) + '">' + esc(it.r) + '</a> + <span class="tl">' + esc(affixLabel(it)) + '</span></span></div>' +
        '<div>' + esc(it.en) + (it.note ? ' <span class="muted small">' + esc(it.note) + '</span>' : '') + '</div></div>').join('') + '</div>' +
      '<div class="notice info" style="margin-top:12px">Legend: <span class="segw"><span class="seg-a">affix</span><span class="seg-r">root</span><span class="seg-d">(repeated syllable)</span></span>. The repeated syllable marks aspect and is not counted as an affix. Read the <a href="#/lessons/panlapi">panlapi lesson</a>, then practice forms in the <a href="#/verbs">Verb trainer</a>. Kabilaan here covers any two affixes together; textbooks often reserve it for prefix + suffix only.</div>';
    const modeSel = el.querySelector('#amode');
    const toggle = () => { el.querySelector('#atypewrap').style.display = modeSel.value === 'focus' ? 'none' : ''; };
    modeSel.onchange = toggle; toggle();
    el.querySelector('#ago').onclick = () => drill(el.querySelector('#adrill'), modeSel.value, el.querySelector('#aset').value, el.querySelector('#atype').value, 10);
  };

  App.affixPieces = pieces; // for tests
})();
