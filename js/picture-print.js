/* Picture print sheets and the body map (3.10.0; ported from Hanashimasho 0.24.0).
   Data: window.PICTURE_SETS, window.PICTURE_ART, window.PICTURE_BODYMAP (js/data/picture-bodymap.js; PLAN-3.10 A4).
   API:
     App.picturePrint.sheet(el, set, q)   the Print tab of a set page (#/pictures/<id>?tab=print), called by V.pictures (js/pictures.js):
                                          preview + options (paper, blank or filled in, English, answer key), printed
                                          through App.printWith (browser print, js/core.js; html.pp-print limits printing to the sheet).
                                          Options are kept in state.settings.picPrint.
     App.picturePrint.figure(set, opts)   the picture of a diagram set as an <svg> string, or '' when its art is missing.
                                          opts.pins: 'numbers' | 'dots' | 'none'; opts.hl = part id to mark. Uses
                                          App.pictures.svg(set, { pins: 'none' }) for the drawing when the pictures module offers it,
                                          otherwise builds it from PICTURE_ART; the pins are always drawn here (numbered in part order).
     V.pictureBodymap(el, params, q)      #/pictures/bodymap: front and back figures with dot pins; the patient taps where it hurts and
                                          the word shows large in Tagalog and English with a speaker; the clinician's questions and the
                                          pain words speak when tapped. Nothing is stored apart from the paper size. Prints one A4 / Letter
                                          handout (both figures, the questions, the pain words, a plain 0 to 10 number line). */
(function () {
  const { esc } = App;
  const V = (App.views = App.views || {}), S = () => App.state;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const META = () => window.APP_META || {};
  const FOOT = () => esc(META().attribution || META().name || '') + ' Draft Tagalog: pending review by a native speaker.';

  // ---------- options ----------
  const DEF = { paper: 'A4', fill: 'blank', en: true, key: true };
  const opt = () => { const st = S().settings || {}; const o = st.picPrint; return Object.assign({}, DEF, o && typeof o === 'object' ? o : {}); };
  const keep = (o) => { const st = S(); st.settings = st.settings || {}; st.settings.picPrint = o; App.save(); };

  // ---------- data ----------
  const allSets = () => (Array.isArray(window.PICTURE_SETS) ? window.PICTURE_SETS.filter((s) => s && s.id) : []);
  const getSet = (id) => {
    const P = App.pictures;
    if (P && typeof P.get === 'function') { try { const s = P.get(id); if (s) return s; } catch (e) { /* fall through */ } }
    return allSets().find((s) => s.id === id);
  };
  const artOf = (set) => {
    const A = window.PICTURE_ART || {}, a = set && set.art && A[set.art];
    return a && Array.isArray(a.vb) && a.vb.length === 2 && typeof a.svg === 'string' && a.svg ? a : null;
  };
  const partsOf = (set) => (set && Array.isArray(set.parts) ? set.parts.filter((p) => p && p.id && p.w) : []);

  // The drawing: the pictures module's own svg when it has one, otherwise ours. Either way our pins go on top.
  const baseSvg = (set, a) => {
    const P = App.pictures;
    if (P && typeof P.svg === 'function') {
      try {
        let r = P.svg(set, { pins: 'none' });
        if (r && typeof r === 'object' && r.outerHTML) r = r.outerHTML;
        if (typeof r === 'string' && /<svg[\s>]/.test(r)) {
          const d = document.createElement('div'); d.innerHTML = r;
          const sv = d.querySelector('svg');
          if (sv && sv.getAttribute('viewBox')) {
            sv.querySelectorAll('[tabindex]').forEach((n) => n.removeAttribute('tabindex'));
            sv.querySelectorAll('[role="button"]').forEach((n) => n.removeAttribute('role'));
            ['class', 'role', 'aria-label', 'data-hit', 'width', 'height', 'style'].forEach((k) => sv.removeAttribute(k));
            return { open: sv.outerHTML.replace(/<\/svg>\s*$/, ''), vb: sv.getAttribute('viewBox').split(/[\s,]+/).map(Number) };
          }
        }
      } catch (e) { /* use our own */ }
    }
    return { open: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + a.vb[0] + ' ' + a.vb[1] + '">' + a.svg, vb: [0, 0, a.vb[0], a.vb[1]] };
  };
  const figure = (set, o) => {
    o = o || {};
    const a = artOf(set);
    if (!a) return '';
    const b = baseSvg(set, a), w = b.vb[2] || a.vb[0], h = b.vb[3] || a.vb[1];
    const r = Math.max(7, Math.round(Math.min(w, h) / 34));
    const pins = o.pins === 'none' ? '' : partsOf(set).map((p, i) => {
      const x = +p.x, y = +p.y;
      if (!isFinite(x) || !isFinite(y)) return '';
      if (o.pins === 'numbers') return '<g class="pp-pin"><circle cx="' + x + '" cy="' + y + '" r="' + r + '"/><text x="' + x + '" y="' + y + '" dy=".35em" text-anchor="middle" font-size="' + Math.round(r * 1.15) + '">' + (i + 1) + '</text></g>';
      const lab = esc(p.w + (p.en ? ', ' + p.en : ''));
      return '<g class="pp-dot' + (o.hl === p.id ? ' on' : '') + '" role="button" tabindex="0" data-pp-part="' + esc(p.id) + '" aria-label="' + lab + '">' +
        '<circle class="pp-hit" cx="' + x + '" cy="' + y + '" r="' + (o.hit || 20) + '"/><circle class="pp-ring" cx="' + x + '" cy="' + y + '" r="' + (r + 3) + '"/><circle class="pp-core" cx="' + x + '" cy="' + y + '" r="' + Math.max(5, r - 2) + '"/></g>';
    }).join('');
    return b.open.replace(/^<svg/, '<svg class="pp-svg" role="img" aria-label="' + esc(set.title || '') + '" focusable="false"') + (pins ? '<g class="pp-pins">' + pins + '</g>' : '') + '</svg>';
  };

  // ---------- printing ----------
  // Printed pages are always light, and only the paper prints.
  const printNow = (paper, margin) => {
    const root = document.documentElement, theme = root.getAttribute('data-theme');
    root.classList.add('pp-print'); root.setAttribute('data-theme', 'light');
    const done = () => { root.classList.remove('pp-print'); if (theme) root.setAttribute('data-theme', theme); else root.removeAttribute('data-theme'); window.removeEventListener('afterprint', done); };
    window.addEventListener('afterprint', done);
    App.printWith(paper, margin || '12mm');
  };
  const seg = (k, items, cur) => '<div class="seg" role="group" aria-label="' + esc(k) + '" style="display:flex;flex-wrap:wrap">' +
    items.map(([v, t]) => '<button type="button" data-pp-set="' + k + '" data-v="' + esc(String(v)) + '" class="' + (String(cur) === String(v) ? 'on' : '') + '" aria-pressed="' + (String(cur) === String(v)) + '">' + esc(t) + '</button>').join('') + '</div>';
  const onOff = (k, cur) => seg(k, [['1', 'On'], ['0', 'Off']], cur ? '1' : '0');
  const head = (title, sub, name) => '<header class="pp-head"><div><b>' + esc(META().name || '') + ': ' + esc(title) + '</b>' + (sub ? '<span>' + esc(sub) + '</span>' : '') + '</div>' +
    (name ? '<div class="pp-name">Name <i></i> Date <i></i></div>' : '') + '</header>';

  // ---------- the print sheet of one set ----------
  const paperHtml = (set, o) => {
    const parts = partsOf(set), fill = o.fill === 'filled', diag = set.kind !== 'cards';
    if (!parts.length) return '<p class="muted" style="margin:0">No pictures yet: this set has no words.</p>';
    const fig = diag ? figure(set, { pins: 'numbers' }) : '';
    const word = (p) => '<span class="pp-w">' + (fill ? esc(p.w) : '') + '</span>' + (o.en && p.en ? '<span class="pp-en">' + esc(p.en) + '</span>' : '');
    let body;
    if (!diag) {
      body = '<div class="pp-cards">' + parts.map((p, i) => '<div class="pp-card"><span class="pp-pic" aria-hidden="true">' + esc(p.pic || '') + '</span>' +
        '<div class="pp-line"><span class="pp-num">' + (i + 1) + '</span>' + word(p) + '</div></div>').join('') + '</div>';
    } else {
      body = (fig ? '<div class="pp-fig">' + fig + '</div>' : '<p class="pp-how">The picture for this set is not ready yet, so here are its words.</p>') +
        '<ol class="pp-lines' + (parts.length > 8 ? ' two' : '') + '">' + parts.map((p, i) => '<li><span class="pp-num">' + (i + 1) + '</span>' + word(p) + '</li>').join('') + '</ol>';
    }
    const how = fill ? 'Read each word aloud and point to it in the picture.' : diag && fig ? 'Write the Tagalog word for each number in the picture.' : 'Write the Tagalog word for each picture.';
    const page1 = '<section class="pp-page">' + head(set.title || '', (set.lv ? set.lv + ' · ' : '') + (fill ? 'Words filled in' : 'Blank labels'), !fill) +
      '<p class="pp-how">' + esc(how) + '</p>' + body + '<footer class="pp-foot">' + FOOT() + '</footer></section>';
    const key = o.key ? '<section class="pp-page pp-keypage">' + head(set.title || '', 'Answer key', false) +
      '<ol class="pp-key">' + parts.map((p, i) => '<li><span class="pp-num">' + (i + 1) + '</span><span class="pp-kw">' + esc(p.w) + '</span><span class="pp-ke">' + esc(p.en || '') + '</span></li>').join('') + '</ol>' +
      '<footer class="pp-foot">' + FOOT() + '</footer></section>' : '';
    return page1 + key;
  };
  const paperClass = (o) => 'pp-paper pp-' + (o.paper === 'LETTER' ? 'letter' : 'a4');

  const sheet = (el, set) => {
    if (!el) return;
    const o = opt();
    if (typeof set === 'string') set = getSet(set);
    if (!set) { el.innerHTML = '<p class="muted">No pictures yet.</p>'; return; }
    const draw = () => {
      el.innerHTML = '<div class="card stack pp-controls"><b>Print sheet</b>' +
        '<p class="small muted" style="margin:0">Print this picture with numbered blanks to fill in, or with the words written in. The answer key goes on its own page.</p>' +
        '<div class="pp-opts"><div><span class="small muted">Labels</span>' + seg('fill', [['blank', 'Blank labels'], ['filled', 'Filled in']], o.fill) + '</div>' +
        '<div><span class="small muted">Paper</span>' + seg('paper', [['A4', 'A4'], ['LETTER', 'Letter']], o.paper) + '</div>' +
        '<div><span class="small muted">English</span>' + onOff('en', o.en) + '</div>' +
        '<div><span class="small muted">Answer key page</span>' + onOff('key', o.key) + '</div></div>' +
        '<div class="row" style="flex-wrap:wrap"><button type="button" class="btn primary" id="ppPrint"' + (partsOf(set).length ? '' : ' disabled') + '>Print or save as PDF</button>' +
        '<span class="small muted">' + (o.key ? '2 pages' : '1 page') + '</span></div></div>' +
        '<div class="' + paperClass(o) + '" id="ppPaper">' + paperHtml(set, o) + '</div>';
    };
    el.onclick = (e) => {
      const b = e.target.closest('[data-pp-set]');
      if (b && el.contains(b)) {
        const k = b.dataset.ppSet, v = b.dataset.v;
        o[k] = k === 'en' || k === 'key' ? v === '1' : v;
        keep(o); draw(); return;
      }
      if (e.target.closest('#ppPrint')) printNow(o.paper, '12mm');
    };
    draw();
  };

  // ---------- body map ----------
  const BM = () => {
    const d = window.PICTURE_BODYMAP && typeof window.PICTURE_BODYMAP === 'object' ? window.PICTURE_BODYMAP : {};
    const list = (x) => (Array.isArray(x) ? x.filter((i) => i && i.tl) : []);
    const ids = Array.isArray(d.sets) && d.sets.length ? d.sets : ['body-front', 'body-back'];
    const sc = d.scale && typeof d.scale === 'object' && (d.scale.tl || d.scale.en) ? d.scale : null;
    return { ids, ask: list(d.ask), words: list(d.words), scale: sc };
  };

  V.pictureBodymap = (el) => {
    const o = opt(), d = BM();
    const sets = d.ids.map((id) => ({ id, s: getSet(id) }));
    const shown = sets.filter((x) => x.s && artOf(x.s));
    let pick = null;   // { set id, part id }: on screen only, never stored

    const say = (tl) => App.sayBtn(tl, tl);
    const figs = (interactive) => (shown.length ? '<div class="pp-bm-figs' + (shown.length > 1 ? ' two' : '') + '">' + shown.map(({ s }) =>
      '<figure class="pp-bm-fig" data-pp-set-id="' + esc(s.id) + '">' + figure(s, interactive ? { pins: 'dots', hl: pick && pick.set === s.id ? pick.part : null, hit: 22 } : { pins: 'none' }) +
      '<figcaption>' + esc(s.title || '') + '</figcaption></figure>').join('') + '</div>' : '');
    const detail = () => {
      const s = pick && getSet(pick.set), p = s && partsOf(s).find((x) => x.id === pick.part);
      if (!p) return '<p class="muted" style="margin:0">Tap the place on the body where it hurts.</p>';
      return '<div class="pp-bm-word"><span class="pp-bm-tl tl">' + esc(p.w) + '</span>' + say(p.w) + '</div>' +
        (p.en ? '<div class="pp-bm-en">' + esc(p.en) + '</div>' : '');
    };
    const handout = () => '<div class="pp-paper pp-bm-paper pp-' + (o.paper === 'LETTER' ? 'letter' : 'a4') + '" id="ppBmPaper" aria-hidden="true">' +
      '<section class="pp-page">' + head('Body map', 'Where does it hurt?', false) +
      (shown.length ? figs(false) : '') +
      (d.ask.length ? '<h3 class="pp-h">Questions</h3><ol class="pp-bm-qs">' + d.ask.map((a) => '<li><span class="pp-kw">' + esc(a.tl) + '</span><span class="pp-ke">' + esc(a.en || '') + '</span></li>').join('') + '</ol>' : '') +
      (d.words.length ? '<h3 class="pp-h">What is the pain like?</h3><ul class="pp-bm-ws">' + d.words.map((w) => '<li><i class="pp-box"></i><span class="pp-kw">' + esc(w.tl) + '</span><span class="pp-ke">' + esc(w.en || '') + '</span></li>').join('') + '</ul>' : '') +
      '<div class="pp-scale">' + (d.scale ? '<div class="pp-scale-cap">' + (d.scale.tl ? '<span class="pp-kw">' + esc(d.scale.tl) + '</span>' : '') + (d.scale.en ? '<span class="pp-ke">' + esc(d.scale.en) + '</span>' : '') + '</div>' : '') +
      '<div class="pp-scale-row">' + Array.from({ length: 11 }, (_, i) => '<span>' + i + '</span>').join('') + '</div></div>' +
      '<footer class="pp-foot">' + FOOT() + '</footer></section></div>';

    const draw = () => {
      el.innerHTML = crumb([['Picture words', '#/pictures'], ['Body map']]) + '<h1>Body map</h1>' +
        '<p class="muted">Ask where it hurts. The patient taps the place on the body and the word shows large in Tagalog and English. Nothing is saved.</p>' +
        '<div class="pp-bm">' +
        (d.ask.length ? '<section class="card stack pp-bm-ask"><h2 style="margin:0">Questions to ask</h2><ul class="pp-bm-list">' +
          d.ask.map((a) => '<li>' + say(a.tl) + '<div><div class="pp-bm-q tl">' + esc(a.tl) + '</div>' + (a.en ? '<div class="small muted">' + esc(a.en) + '</div>' : '') + '</div></li>').join('') + '</ul></section>' : '') +
        '<section class="card stack pp-bm-show" aria-live="polite" id="ppBmShow">' + detail() + '</section>' +
        (shown.length ? figs(true) : '<p class="notice">No pictures yet: the body pictures are not ready.</p>') +
        (d.words.length ? '<section class="stack"><h2 style="margin:0">What is the pain like?</h2><div class="pp-chips">' +
          d.words.map((w, i) => '<button type="button" class="pp-chip" data-pp-word="' + i + '" aria-label="' + esc(w.tl + (w.en ? ', ' + w.en : '')) + '"><span class="pp-chip-tl tl">' + esc(w.tl) + '</span>' + (w.en ? '<span class="pp-chip-en">' + esc(w.en) + '</span>' : '') + '</button>').join('') + '</div></section>' : '') +
        '<div class="card stack pp-controls"><b>Print a handout</b><p class="small muted" style="margin:0">One page: the front and back of the body, the questions, the pain words and a 0 to 10 number line.</p>' +
        '<div><span class="small muted">Paper</span>' + seg('paper', [['A4', 'A4'], ['LETTER', 'Letter']], o.paper) + '</div>' +
        '<div class="row"><button type="button" class="btn primary" id="ppBmPrint">Print or save as PDF</button></div></div>' +
        '</div>' + handout();
    };
    const choose = (g) => {
      const fig = g.closest('[data-pp-set-id]'); if (!fig) return;
      pick = { set: fig.dataset.ppSetId, part: g.dataset.ppPart };
      el.querySelectorAll('.pp-dot.on').forEach((n) => n.classList.remove('on'));
      g.classList.add('on');
      el.querySelector('#ppBmShow').innerHTML = detail();
      const s = getSet(pick.set), p = s && partsOf(s).find((x) => x.id === pick.part);
      if (p) App.speak(p.w);
    };
    // el is the app's view container, which outlives this page: the handlers retire once another page is drawn in it.
    const gone = () => { if (el.querySelector('#ppBmShow')) return false; if (el.onclick === onClick) el.onclick = null; if (el.onkeydown === onKey) el.onkeydown = null; return true; };
    const onClick = (e) => {
      if (gone()) return;
      const g = e.target.closest('[data-pp-part]');
      if (g && el.contains(g)) { choose(g); return; }
      const w = e.target.closest('[data-pp-word]');
      if (w) { const x = d.words[+w.dataset.ppWord]; if (x) App.speak(x.tl); return; }
      const b = e.target.closest('[data-pp-set]');
      if (b) { o.paper = b.dataset.v; keep(o); draw(); return; }
      if (e.target.closest('#ppBmPrint')) printNow(o.paper, '10mm');
    };
    const onKey = (e) => {
      if (gone()) return;
      const g = e.target.closest && e.target.closest('[data-pp-part]');
      if (g && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); choose(g); const f = el.querySelector('[data-pp-part="' + g.dataset.ppPart + '"]'); if (f) f.focus(); }
    };
    el.onclick = onClick; el.onkeydown = onKey;
    draw();
  };

  App.picturePrint = { sheet, figure };
})();
