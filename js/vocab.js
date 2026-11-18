/* Vocabulary practice (3.13.0): #/vocab lists nine games, #/vocab/<mode> runs one. Data: js/data/vocab-sets.js
   (WORD_PAIRS opposites and collocations, WORD_ODD), the dictionary, and AFFIX_ITEMS / AFFIX_LIST (js/data/affixes.js).
   match  Match the pairs: 5 words and 5 meanings a round, 3 rounds; source = a dictionary topic or Opposites
   opp    Opposites            col  What goes with it?    odd  Odd one out
   type   Type the word: English to Tagalog, typed; near misses on long words pass as "Almost"
   hear   Hear the word: the word is played, pick the meaning (cardId = dictionary id)
   affix  Guess the meaning from the parts: root + affixes, pick the meaning
   context In context (3.15.0): a dictionary word's example sentence (App.exampleOf, js/data/examples-*.js) with the word
          blanked; pick it among four words of the same part of speech (cardId = dictionary id)
   picture Picture (3.19.0): one part of a picture set (App.pictures, js/pictures.js) shown as its picture, pick its word
          among four; own sources ('all' or a picture group, state.settings.vocabPicSrc) and the Picture words level
          (state.settings.picLv). See "Picture" below.
   Word source (match, type, hear, context): ?cat=<key> or state.settings.vocabCat; 'mine' = mistakes and due cards, 'all', a category.
   Best scores: state.done.vocab['<mode>:<source>']. "Your words by topic" under the tiles; one row on #/progress. */
(function () {
  const { esc, shuffle, pick, norm } = App;
  const V = (App.views = App.views || {});
  const PAIRS = window.WORD_PAIRS || [], ODD = window.WORD_ODD || [], AFF = window.AFFIX_ITEMS || [], ALIST = window.AFFIX_LIST || [];
  const OPP = PAIRS.filter((x) => x.type === 'opp'), COL = PAIRS.filter((x) => x.type === 'col');
  const N = 10;
  const ALL = '<a class="btn" href="#/vocab">All vocabulary practice</a>';
  const DRAFT = '<p class="muted small" style="margin-top:12px">Drafted for study; the Tagalog is pending review by a native speaker.</p>';

  const MODES = [
    { id: 'match', title: 'Match the pairs', eyebrow: 'Tap pairs · 3 rounds', src: true, blurb: 'Five words, five meanings. Tap a word, then its partner.',
      intro: 'Each round shows five Tagalog words and their meanings in a different order. Tap a word, then its meaning. Three rounds, fifteen pairs. Choose Opposites to match each word with its opposite instead.' },
    { id: 'opp', title: 'Opposites', eyebrow: 'Vocabulary · 10 questions', blurb: 'Mainit or malamig? Find the opposite word.',
      intro: 'You see a word and its meaning. Choose the word that means the opposite.', draft: true },
    { id: 'col', title: 'What goes with it?', eyebrow: 'Vocabulary · 10 questions', blurb: 'Uminom ng gamot, magsipilyo ng ngipin: which word goes with the verb?',
      intro: 'Some verbs keep the same company: you take medicine, you brush your teeth. Choose the word that completes the everyday expression.', draft: true },
    { id: 'odd', title: 'Odd one out', eyebrow: 'Vocabulary · 10 questions', blurb: 'Three words share a group. Find the one that does not.',
      intro: 'Three of the four words belong to one group, such as animals or parts of the body. Choose the word that does not belong.', draft: true },
    { id: 'type', title: 'Type the word', eyebrow: 'Writing · 10 words', src: true, blurb: 'Read the meaning, type the Tagalog word.',
      intro: 'Read the meaning and type the Tagalog word. Capitals, accents and hyphens do not count, and a one-letter slip in a long word passes with a spelling note. Words you miss go to My mistakes.' },
    { id: 'hear', title: 'Hear the word', eyebrow: 'Listening · 10 words', src: true, blurb: 'Hear a word, pick its meaning.',
      intro: 'A word is played. Choose what it means; the word is shown after you answer. Words you miss go to My mistakes.' },
    { id: 'affix', title: 'Guess the meaning from the parts', eyebrow: 'Word parts · 10 questions', blurb: 'Root plus affixes: work out what the word means.',
      intro: 'Each word is shown with its root and its affixes. Use what the affix adds to choose the meaning. The wrong answers often share the root, so read the affix.' },
    { id: 'context', title: 'In context', eyebrow: 'Vocabulary · 10 sentences', src: true, draft: true, blurb: 'A sentence with one word missing. Pick the word that fits.',
      intro: 'Each sentence has one word missing, with its meaning in English under it. Choose the Tagalog word that fits. You hear the whole sentence after you answer. Words you miss go to My mistakes.' },
    { id: 'picture', title: 'Picture', eyebrow: 'Pictures · 10 questions', pics: true, blurb: 'See the picture, choose the Tagalog word.',
      intro: 'Each question is a picture: one part of a drawing marked with a pin, or a picture card. Choose its Tagalog word from four. The English and the sound come after you answer. Keys 1 to 4 choose, Enter goes on.' }
  ];
  const byId = (id) => MODES.find((m) => m.id === id);
  const bestOf = (id) => { const o = App.state.done.vocab || {}; const v = Object.keys(o).filter((k) => k.split(':')[0] === id).map((k) => o[k]); return v.length ? Math.max(...v) : null; };
  const saveBest = (key, right, total) => {
    const s = App.state; s.done.vocab = s.done.vocab || {};
    s.done.vocab[key] = Math.max(s.done.vocab[key] || 0, Math.round((100 * right) / total));
    App.activity(10); App.save();
  };
  const scoreCard = (pct, line) => '<div class="card stack"><h3>' + (pct >= 80 ? LANG.quiz.great : pct >= 50 ? LANG.quiz.ok : LANG.quiz.keepGoing) + ' ' + line + '</h3>' +
    '<div class="progress"><i style="width:' + pct + '%"></i></div><div class="row"><button class="btn primary" data-act="retry">Try again</button>' + ALL + '</div></div>';

  /* ---------- Word pools ---------- */
  // A usable word: up to three words long, English of 40 characters or fewer, never a stigmatizing word.
  const usable = (e) => e && e.cat !== 'stigma' && e.tl.trim().split(/\s+/).length <= 3 && e.en.length <= 40;
  const oneWord = (e) => !/\s/.test(e.tl.trim());
  const mineIds = () => {
    const s = App.state, now = Date.now();
    return [...new Set((s.mistakes || []).concat(Object.keys(s.srs || {}).filter((id) => (s.srs[id].due || 0) <= now)))].filter((id) => /^d\d+$/.test(id));
  };
  App.vocabPool = (cat) => (cat === 'mine' ? mineIds().map((id) => App.dictById[id]).filter(usable) : App.DICT.filter((e) => usable(e) && (!cat || cat === 'all' || e.cat === cat)));
  // Up to n entries, no two with the same English or the same Tagalog.
  const distinct = (list, n, skip) => {
    const out = [], en = new Set(skip ? skip.map((e) => e.nen) : []), tl = new Set();
    for (const e of shuffle(list)) { if (out.length >= n) break; if (en.has(e.nen) || tl.has(e.ftl)) continue; en.add(e.nen); tl.add(e.ftl); out.push(e); }
    return out;
  };
  const sources = (mode) => {
    const out = [];
    if (App.vocabPool('mine').length >= 5) out.push(['mine', 'My mistakes and cards due']);
    out.push(['all', 'All words']);
    if (mode === 'match' && OPP.length >= 5) out.push(['opp', 'Opposites']);
    Object.keys(App.CATS).forEach((c) => { if (c !== 'stigma') out.push([c, App.CATS[c]]); });
    return out;
  };
  // A source with too few words falls back to all words (the caller shows a note).
  const poolFor = (src, min, filter) => {
    const f = filter || (() => true);
    let pool = App.vocabPool(src).filter(f);
    if (distinct(pool, min).length < min) { src = 'all'; pool = App.vocabPool('all').filter(f); }
    return { pool, src };
  };

  /* ---------- Question generators (runQuiz shuffles the options itself; a: 0 is the right one) ---------- */
  // Wrong glosses: distinct, never the right gloss; from `first` before `rest`.
  const wrongGloss = (right, first, rest) => {
    const seen = new Set([norm(right)]), out = [];
    for (const x of first.concat(rest)) { if (out.length >= 3) break; const k = norm(x); if (!seen.has(k)) { seen.add(k); out.push(x); } }
    return out;
  };
  function oppQs(n) {
    return pick(OPP, Math.min(n, OPP.length)).map((it) => {
      const flip = Math.random() < 0.5, w = flip ? it.b : it.a, ew = flip ? it.eb : it.ea, ans = flip ? it.a : it.b, ea = flip ? it.ea : it.eb, k = flip ? 'a' : 'b';
      const seen = new Set([App.flat(ans), App.flat(w)]), wrong = [];
      shuffle(OPP.filter((x) => x !== it && norm(x['e' + k]) !== norm(ea))).forEach((x) => { const f = App.flat(x[k]); if (wrong.length < 3 && !seen.has(f)) { seen.add(f); wrong.push(x[k]); } });
      return { q: w, sub: ew + ' · What is the opposite?', tlq: true, tlo: true, say: w, sayAfter: ans, opts: [ans].concat(wrong), a: 0, vid: it.id,
        exp: it.a + ' (' + it.ea + ') ↔ ' + it.b + ' (' + it.eb + ')' };
    });
  }
  function colQs(n) {
    return pick(COL, Math.min(n, COL.length)).map((it) => {
      const seen = new Set([App.flat(it.b)]), wrong = [];
      shuffle(COL.filter((x) => x.a !== it.a && norm(x.eb) !== norm(it.eb))).forEach((x) => { const f = App.flat(x.b); if (wrong.length < 3 && !seen.has(f)) { seen.add(f); wrong.push(x.b); } });
      const full = it.a + ' ' + it.b;
      return { q: it.a + ' ____', sub: it.en || it.ea + ' ' + it.eb, tlq: true, tlo: true, sayAfter: full, opts: [it.b].concat(wrong), a: 0, vid: it.id, exp: full + ' = ' + (it.en || it.ea + ' ' + it.eb) + '.' };
    });
  }
  function oddQs(n) {
    return pick(ODD, Math.min(n, ODD.length)).map((it) => {
      const opts = shuffle(it.w), right = it.w[it.odd];
      return { q: 'Which word does not belong?', sub: 'Three of these words share a group.', tlo: true, opts, a: opts.indexOf(right), vid: it.id, exp: it.why };
    });
  }
  function hearQs(n, cat) {
    const { pool } = poolFor(cat || 'all', 4);
    const all = App.vocabPool('all');
    return distinct(pool, n).map((e) => {
      const wrong = wrongGloss(e.en, shuffle(App.vocabPool(e.cat)).map((x) => x.en), shuffle(all).slice(0, 40).map((x) => x.en));
      return { q: e.tl, sub: 'What does it mean?', tlq: true, hideQ: 'Listen, then choose what the word means.', say: e.tl, opts: [e.en].concat(wrong), a: 0, cardId: e.id,
        exp: e.tl + ' = ' + e.en + '.' };
    });
  }
  // Affix pieces as the learner reads them: prefixes, the root, infixes, suffixes ("pa- + tulog + -in").
  const affixParts = (it) => {
    // A gitlapi on a vowel-initial root (uminom) or ni- before l and y (niluto) is still the infix -um- / -in-.
    const labs = (App.affixLabel ? App.affixLabel(it) : '').split(' + ').filter(Boolean).map((l) => (it.t === 'gitlapi' && /^(um|in|ni)-$/.test(l) ? (l === 'um-' ? '-um-' : '-in-') : l));
    const pre = labs.filter((l) => !l.startsWith('-')), inf = labs.filter((l) => l.length > 1 && l.startsWith('-') && l.endsWith('-')), suf = labs.filter((l) => l.startsWith('-') && !l.endsWith('-'));
    return { labs, text: pre.concat([it.r], inf, suf).map((x) => x.replace(/-/g, '\u2011')).join(' + ') }; // non-breaking hyphens: "-hin" never splits
  };
  App.vocabAffixParts = affixParts;
  function affixQs(n) {
    return pick(AFF, Math.min(n, AFF.length)).map((it) => {
      const others = AFF.filter((x) => x !== it && App.flat(x.w) !== App.flat(it.w));
      // Same root first (the most confusable), then the same affix type, then anything.
      const wrong = wrongGloss(it.en, shuffle(others.filter((x) => x.r === it.r)).map((x) => x.en),
        shuffle(others.filter((x) => x.r !== it.r && x.t === it.t)).map((x) => x.en).concat(shuffle(others.filter((x) => x.r !== it.r && x.t !== it.t)).map((x) => x.en)));
      const p = affixParts(it), key = p.labs.map((l) => ({ 'nag-': 'mag-', 'na-': 'ma-', 'pam-': 'pang-', 'pan-': 'pang-', '-hin': '-in', '-han': '-an', '-nan': '-an' }[l] || l)).join(' '), aff = ALIST.find((a) => a.a === key); // the AFFIX_LIST spelling of each affix
      return { q: it.w, sub: 'Root: ' + it.r + ' · ' + p.text + ' · What does it mean?', tlq: true, say: it.w, opts: [it.en].concat(wrong), a: 0, cardId: 'af:' + it.w,
        exp: it.w + ' = ' + it.en + '.' + (aff ? ' ' + aff.a + ': ' + aff.en : '') };
    });
  }
  // In context: the example sentence with the first whole-word match of its form blanked. Wrong options: other headwords
  // of the same part of speech (the same topic first, when it has three), never one with the answer's English, never
  // another form of the same root; one-word answers get one-word options first.
  const head = (e) => e.tl.split(' / ')[0].trim();
  const rootKey = (e) => App.flat(e.root || head(e));
  const ctxCache = new Map();
  const ctxOf = (e) => {
    if (ctxCache.has(e.id)) return ctxCache.get(e.id);
    const ex = App.exampleOf ? App.exampleOf(e) : null, r = ex && App.exampleFind(ex.tl, ex.form);
    const c = r ? { q: ex.tl.slice(0, r[0]) + '____' + ex.tl.slice(r[1]), tl: ex.tl, en: ex.en } : null;
    ctxCache.set(e.id, c);
    return c;
  };
  const hasCtx = (e) => !!ctxOf(e);
  const sameRoot = (a, b) => { const ra = rootKey(a), rb = rootKey(b); return ra === rb || ra === App.flat(head(b)) || rb === App.flat(head(a)); };
  function contextQs(n, cat) {
    const { pool } = poolFor(cat || 'all', 8, hasCtx);
    const all = App.vocabPool('all');
    return distinct(pool, n).map((e) => {
      const c = ctxOf(e), one = oneWord({ tl: head(e) });
      const ok = (x) => x.id !== e.id && x.pos === e.pos && x.nen !== e.nen && App.flat(head(x)) !== App.flat(head(e)) && !sameRoot(x, e) && !App.exampleFind(c.tl, head(x));
      const cands = all.filter(ok), sameCat = cands.filter((x) => x.cat === e.cat);
      const first = sameCat.length >= 3 ? sameCat : cands;
      const rank = (list) => shuffle(list).sort((a, b) => (oneWord({ tl: head(b) }) === one) - (oneWord({ tl: head(a) }) === one));
      const wrong = [], seenTl = new Set([App.flat(head(e))]), seenEn = new Set([e.nen]), eKey = rootKey(e), eRoots = App.findRoots(head(e));
      for (const x of rank(first).concat(rank(cands))) {
        if (wrong.length >= 3) break;
        const f = App.flat(head(x));
        if (seenTl.has(f) || seenEn.has(x.nen)) continue;
        if (App.findRoots(head(x)).includes(eKey) || eRoots.includes(rootKey(x))) continue; // natutulog is a form of tulog
        seenTl.add(f); seenEn.add(x.nen); wrong.push(x);
      }
      const opts = [e].concat(wrong);
      return { q: c.q, sub: c.en, tlq: true, tlo: true, sayAfter: c.tl, opts: opts.map(head), ids: opts.map((x) => x.id), a: 0, cardId: e.id, exp: head(e) + ' = ' + e.en + '.' };
    }).filter((q) => q.opts.length === 4);
  }
  /* ---------- Picture (3.19.0) ---------- */
  // Pool: every usable part (App.pictures.parts) of every picture set that can be shown: a cards set (the emoji) or a
  // diagram set whose drawing exists. Source 'all' or a picture group (App.pictures.GROUPS); level = the Picture words
  // level (state.settings.picLv 'A1' | 'A2', anything else = all), by set level as on #/pictures.
  // Options: the part's word and three others that never share a word (its `w` or an `alt`) or an English gloss with the
  // answer or each other: the same set first, then the same group, then any set. No word is asked twice in a round.
  const PX = () => App.pictures;
  const drawable = new Map();
  const canShow = (s) => { if (s.kind === 'cards') return true; if (!drawable.has(s.id)) drawable.set(s.id, !!PX().svg(s, { pins: 'none' })); return drawable.get(s.id); };
  const picLv = () => (['A1', 'A2'].includes(App.state.settings.picLv) ? App.state.settings.picLv : 'All');
  const picItems = (src, lv) => {
    if (!PX() || typeof PX().sets !== 'function') return [];
    const out = [];
    PX().sets().filter(canShow).forEach((s) => { if ((src && src !== 'all' && s.group !== src) || (lv && lv !== 'All' && s.lv !== lv)) return; PX().parts(s).forEach((p) => out.push({ s, p })); });
    return out;
  };
  App.vocabPictureCount = (src, lv) => picItems(src || 'all', lv || 'All').length; // for QA
  const picSources = () => { const lv = picLv(); return [['all', 'All pictures']].concat((PX() ? PX().GROUPS : []).filter(([g]) => picItems(g, lv).length >= 4)); };
  // A source (or level) with fewer than four pictures falls back to all pictures, then to every level.
  const picPool = (src) => {
    const lv = picLv();
    let items = picItems(src, lv);
    if (items.length < 4) { src = 'all'; items = picItems('all', lv); }
    if (items.length < 4) items = picItems('all', 'All');
    return { items, src };
  };
  const picKeys = (p) => [p.w].concat(Array.isArray(p.alt) ? p.alt : []).map((x) => App.flat(x)).filter(Boolean);
  function picWrong(it) {
    const { s, p } = it, out = [], keys = new Set(picKeys(p)), ens = new Set(p.en ? [norm(p.en)] : []);
    const take = (list) => { for (const x of list) {
      if (out.length >= 3) break;
      const k = picKeys(x);
      if (k.some((y) => keys.has(y)) || (x.en && ens.has(norm(x.en)))) continue;
      k.forEach((y) => keys.add(y)); if (x.en) ens.add(norm(x.en)); out.push(x);
    } };
    take(shuffle(PX().parts(s)));
    if (out.length < 3) { const all = picItems('all', 'All').filter((x) => x.s !== s); take(shuffle(all.filter((x) => x.s.group === s.group)).map((x) => x.p)); take(shuffle(all).map((x) => x.p)); }
    return out;
  }
  // n questions { s, p, opts: [part…] (4, shuffled), a: index of p }.
  function pictureQs(n, src) {
    const { items } = picPool(src || 'all'), seen = new Set(), out = [];
    for (const it of shuffle(items)) {
      if (out.length >= n) break;
      const k = App.flat(it.p.w);
      if (seen.has(k)) continue;
      const wrong = picWrong(it);
      if (wrong.length < 3) continue;
      seen.add(k);
      const opts = shuffle([it.p].concat(wrong));
      out.push({ s: it.s, p: it.p, opts, a: opts.indexOf(it.p) });
    }
    return out;
  }
  App.vocabQs = { opp: oppQs, col: colQs, odd: oddQs, hear: hearQs, affix: affixQs, context: contextQs, picture: pictureQs };

  /* ---------- Match the pairs ---------- */
  // Rounds of five pairs { l, le, r, re, say }; within a round no two pairs share an English gloss.
  function matchGame(src) {
    const rounds = [];
    if (src === 'opp') {
      const left = shuffle(OPP);
      for (let r = 0; r < 3 && left.length; r++) {
        const R = [], en = new Set();
        for (let k = 0; k < left.length && R.length < 5; k++) {
          const x = left[k], a = norm(x.ea), b = norm(x.eb);
          if (en.has(a) || en.has(b)) continue;
          en.add(a); en.add(b); R.push({ l: x.a, le: x.ea, r: x.b, re: x.eb, say: x.a }); left.splice(k--, 1);
        }
        if (R.length < 5) break;
        rounds.push(R);
      }
      return { rounds, src, fell: false };
    }
    const { pool, src: used } = poolFor(src, 5);
    let seen = [];
    for (let r = 0; r < 3; r++) {
      let R = distinct(pool.filter((e) => !seen.includes(e)), 5);
      if (R.length < 5) R = distinct(pool, 5);
      seen = seen.concat(R);
      rounds.push(R.map((e) => ({ l: e.tl, r: e.en, say: e.tl, id: e.id })));
    }
    return { rounds, src: used, fell: used !== src };
  }
  App.vocabMatchGame = matchGame;
  function runMatch(box, src) {
    let game, ri, pairs, misses;
    const start = () => { game = matchGame(src); ri = 0; pairs = 0; misses = 0; round(); };
    const finish = () => {
      const pct = Math.round((100 * pairs) / Math.max(1, pairs + misses));
      box.innerHTML = scoreCard(pct, pct + '%').replace('</h3>', '</h3><p class="muted" style="margin:0">' + pairs + ' pairs, ' + misses + (misses === 1 ? ' miss' : ' misses') + '.</p>');
      box.querySelector('[data-act=retry]').onclick = start;
      saveBest('match:' + game.src, pairs, pairs + misses);
    };
    const round = () => {
      if (ri >= game.rounds.length) return finish();
      const R = game.rounds[ri], two = game.src === 'opp';
      let sel = null, matched = 0;
      const tile = (k, side) => { const x = R[k]; return '<button type="button" class="vtile" data-side="' + side + '" data-pair="' + k + '" aria-pressed="false">' +
        (side === 'l' ? '<span class="tl">' + esc(x.l) + '</span>' + (two ? '<small>' + esc(x.le) + '</small>' : '') : two ? '<span class="tl">' + esc(x.r) + '</span><small>' + esc(x.re) + '</small>' : '<span>' + esc(x.r) + '</span>') + '</button>'; };
      box.innerHTML = (game.fell && ri === 0 ? '<div class="notice info" style="margin-bottom:10px">Not enough words there yet, so this game uses all words.</div>' : '') +
        '<div class="card stack"><div class="spread"><span class="eyebrow">Round ' + (ri + 1) + ' of ' + game.rounds.length + '</span><span class="muted small" data-miss>Misses: ' + misses + '</span></div>' +
        '<p class="muted small" style="margin:0">Tap a word, then its ' + (two ? 'opposite' : 'meaning') + '.</p>' +
        '<div class="vmatch"><div class="vcol" role="group" aria-label="Tagalog words">' + shuffle(R.map((x, k) => k)).map((k) => tile(k, 'l')).join('') + '</div>' +
        '<div class="vcol" role="group" aria-label="' + (two ? 'Opposites' : 'Meanings') + '">' + shuffle(R.map((x, k) => k)).map((k) => tile(k, 'r')).join('') + '</div></div></div>';
      const mark = (b, on) => { b.classList.toggle('sel', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); };
      box.querySelectorAll('.vtile').forEach((b) => (b.onclick = () => {
        if (b.disabled) return;
        if (!sel || sel.dataset.side === b.dataset.side) { if (sel) mark(sel, false); sel = sel === b ? null : b; if (sel) mark(sel, true); return; }
        const a = sel; sel = null; mark(a, false);
        if (a.dataset.pair === b.dataset.pair) {
          [a, b].forEach((x) => { x.classList.remove('miss'); x.classList.add('right'); x.disabled = true; });
          pairs++; matched++; App.recordAnswer(true);
          App.speak(R[+a.dataset.pair].say);
          if (matched === R.length) setTimeout(() => { if (box.isConnected) { ri++; round(); } }, 500);
        } else {
          misses++; App.recordAnswer(false);
          box.querySelector('[data-miss]').textContent = 'Misses: ' + misses;
          [a, b].forEach((x) => x.classList.add('miss'));
          setTimeout(() => [a, b].forEach((x) => x.classList.remove('miss')), 600);
        }
      }));
    };
    start();
  }

  /* ---------- Type the word ---------- */
  // 2 = right, 1 = almost (a near miss on a word of 6+ letters, as "Label it" in js/pictures.js), 0 = wrong.
  // Accepted: the word, or any dictionary headword with the same English gloss.
  const accepted = (e) => [...new Set([e.tl].concat(App.DICT.filter((x) => x !== e && x.nen === e.nen).map((x) => x.tl)))];
  const letterSim = (a, b) => (App.letterSimilarity ? App.letterSimilarity(a, b) : App.similarity(App.flat(a).split('').join(' '), App.flat(b).split('').join(' ')));
  App.vocabTypeCheck = (e, typed) => {
    const t = App.flat(typed);
    if (!t) return 0;
    const ok = accepted(e).map(App.flat).filter(Boolean);
    if (ok.includes(t)) return 2;
    return ok.some((a) => a.length >= 6 && letterSim(t, a) >= 85) ? 1 : 0;
  };
  App.vocabTypeItems = (src) => { const { pool, src: used } = poolFor(src, 4, oneWord); return { items: distinct(pool, N), src: used }; };
  function runType(box, src) {
    let game, i, right;
    const start = () => { game = App.vocabTypeItems(src); i = 0; right = 0; draw(); };
    const draw = () => {
      const items = game.items;
      if (i >= items.length) {
        const pct = Math.round((100 * right) / items.length);
        box.innerHTML = scoreCard(pct, right + ' / ' + items.length);
        box.querySelector('[data-act=retry]').onclick = start;
        saveBest('type:' + game.src, right, items.length);
        return;
      }
      const e = items[i], pos = App.POS[e.pos];
      box.innerHTML = (game.src !== src && i === 0 ? '<div class="notice info" style="margin-bottom:10px">Not enough words there yet, so this game uses all words.</div>' : '') +
        '<div class="card stack"><div class="spread"><span class="eyebrow">Word ' + (i + 1) + ' of ' + items.length + '</span></div>' +
        '<div style="font-size:1.12rem;font-weight:600" data-prompt>' + esc(e.en) + '</div>' + (pos ? '<div class="muted small">' + esc(pos) + '</div>' : '') +
        '<div class="row"><input class="input tl" data-in autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" style="flex:1;min-width:0" placeholder="Type the Tagalog word" aria-label="Type the Tagalog word">' +
        '<button class="btn primary" data-act="check">Check</button></div><div data-fb></div></div>';
      const inp = box.querySelector('[data-in]'), chk = box.querySelector('[data-act=check]');
      inp.focus();
      const check = () => {
        if (chk.disabled || !inp.value.trim()) return;
        const g = App.vocabTypeCheck(e, inp.value), ok = g > 0;
        if (ok) right++;
        App.recordAnswer(ok, e.id);
        chk.disabled = true; inp.disabled = true;
        const others = accepted(e).filter((x) => App.flat(x) !== App.flat(e.tl)).slice(0, 3);
        box.querySelector('[data-fb]').innerHTML = '<div class="feedback ' + (g === 2 ? 'ok' : g ? 'mid' : 'no') + '"><b>' + (g === 2 ? LANG.quiz.right : g ? 'Almost: check the spelling.' : LANG.quiz.wrong) + '</b>' +
          '<div style="margin-top:6px"><span class="tl" style="font-weight:600">' + esc(e.tl) + '</span> ' + App.sayBtn(e.tl) + '</div><div class="muted small">' + esc(e.en) + '</div>' +
          (others.length ? '<div class="muted small" style="margin-top:4px">Also accepted: <span class="tl">' + others.map(esc).join(' · ') + '</span></div>' : '') + '</div>' +
          '<div class="row" style="margin-top:10px"><button class="btn primary" data-act="next">' + (i + 1 < items.length ? 'Next' : 'See score') + '</button></div>';
        const nx = box.querySelector('[data-act=next]');
        nx.onclick = () => { i++; draw(); };
        nx.focus();
      };
      chk.onclick = check;
      inp.onkeydown = (ev) => { if (ev.key === 'Enter') { ev.preventDefault(); check(); } };
    };
    start();
  }

  /* ---------- Picture round (3.19.0) ---------- */
  const EMOJI_FONT = "'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji','Segoe UI Symbol',sans-serif";
  // The question picture: a diagram with only this part's pin (the CSS hides the others), or the card's emoji, large.
  const picHtml = (s, p) => (s.kind === 'cards'
    ? '<div class="pic-cards one vp-pcard" data-vps="' + esc(s.id) + '" data-vpp="' + esc(p.id) + '"><div class="pic-card hl" role="img" aria-label="Picture"><span class="pic-emo" aria-hidden="true" style="font-family:' + EMOJI_FONT.replace(/'/g, '&#39;') + '">' + esc(p.pic) + '</span></div></div>'
    : '<div class="pic-wrap vp-pwrap" data-vps="' + esc(s.id) + '" data-vpp="' + esc(p.id) + '">' + PX().svg(s, { pins: 'dots', highlight: p.id, quiz: true, cls: 'vp-psvg' }) + '</div>');
  // Phone: scroll el up under the top bar when it starts above it or runs past the bottom (or the tab bar).
  const barTop = () => { const tb = document.querySelector('.tabbar'); return tb && getComputedStyle(tb).display !== 'none' && tb.getBoundingClientRect().top > 0 ? tb.getBoundingClientRect().top : window.innerHeight; };
  const bring = (el) => {
    const tb = document.querySelector('.topbar'), top = tb ? tb.getBoundingClientRect().bottom : 0, r = el.getBoundingClientRect();
    if (r.top < top || r.bottom > barTop()) window.scrollBy(0, r.top - top - 4);
  };
  // After an answer: the feedback and Next come into view, moving the page no more than needed.
  const reveal = (el) => { const r = el.getBoundingClientRect(), lim = barTop() - 8; if (r.bottom > lim) window.scrollBy(0, r.bottom - lim); };
  function runPicture(box, src) {
    let qs, i, right, used;
    const start = () => { const r = picPool(src); used = r.src; qs = App.vocabQs.picture(N, used); i = 0; right = 0; draw(); };
    const finish = () => {
      const n = qs.length, pct = Math.round((100 * right) / n);
      box.innerHTML = scoreCard(pct, right + ' / ' + n + ' · ' + pct + '%').replace(ALL, ALL + '<a class="btn" href="#/pictures">Picture words</a>');
      const b = box.querySelector('[data-act=retry]'); b.onclick = start; b.focus({ preventScroll: true });
      bring(box.firstElementChild);
      saveBest('picture:' + used, right, n);
    };
    const draw = () => {
      if (!box.isConnected) return;
      if (!qs.length) { box.innerHTML = '<div class="notice info">No pictures are loaded yet. Try another game.</div><div class="row" style="margin-top:10px">' + ALL + '</div>'; return; }
      if (i >= qs.length) return finish();
      const q = qs[i], { s, p } = q, svgSet = s.kind !== 'cards';
      box.innerHTML = (used !== src && i === 0 ? '<div class="notice info" style="margin-bottom:10px">Not enough pictures there yet, so this game uses all pictures.</div>' : '') +
        '<div class="card stack vp-round"><div class="spread"><span class="eyebrow">Question ' + (i + 1) + ' of ' + qs.length + '</span><span class="muted small">' + right + ' right</span></div>' +
        '<div class="progress"><i style="width:' + Math.round((100 * i) / qs.length) + '%"></i></div>' +
        picHtml(s, p) +
        '<div class="opts vp-opts" role="group" aria-label="What is this?">' + q.opts.map((x, k) => '<button type="button" class="opt" data-k="' + k + '"><span class="pic-k" aria-hidden="true">' + (k + 1) + '</span> <span class="tl">' + esc(x.w) + '</span></button>').join('') + '</div><div data-fb></div></div>';
      const card = box.querySelector('.vp-round');
      bring(card);
      let done = false;
      const answer = (k) => {
        if (done) return; done = true;
        const ok = k === q.a, ch = q.opts[k];
        if (ok) right++;
        App.recordAnswer(ok);
        box.querySelectorAll('.opt').forEach((b) => { b.disabled = true; if (+b.dataset.k === q.a) b.classList.add('right'); else if (+b.dataset.k === k) b.classList.add('wrong'); });
        box.querySelector('[data-fb]').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + ' stack"><b>' + (ok ? LANG.quiz.right : LANG.quiz.wrong) + '</b>' +
          '<div class="row" style="gap:8px;align-items:flex-start">' + (svgSet ? '' : '<span class="pic-remo" aria-hidden="true">' + esc(p.pic) + '</span>') + PX().wordCard(p) + '</div>' +
          (!ok ? '<div class="small muted">You chose <span class="tl">' + esc(ch.w) + '</span> (' + esc(ch.en || '') + ')</div>' : '') + '</div>' +
          '<div class="row" style="margin-top:10px"><button type="button" class="btn primary" data-act="next">' + (i + 1 < qs.length ? 'Next' : 'See score') + '</button></div>';
        if (ok) App.speak(p.w);
        const nx = box.querySelector('[data-act=next]'); nx.onclick = () => { i++; draw(); }; nx.focus({ preventScroll: true });
        reveal(nx);
      };
      box.querySelectorAll('.opt').forEach((b) => (b.onclick = () => answer(+b.dataset.k)));
    };
    // Keys as in Label it (js/pictures.js): 1 to 4 choose, Enter goes on.
    App.keyHandler = (ev) => {
      if (!box.isConnected || ev.altKey || ev.ctrlKey || ev.metaKey || ev.target.matches('input,textarea,select')) return;
      if (/^[1-4]$/.test(ev.key)) { const b = box.querySelector('.opt[data-k="' + (+ev.key - 1) + '"]:not(:disabled)'); if (b) { ev.preventDefault(); b.click(); } return; }
      if (ev.key === 'Enter' && !ev.target.closest('button,a,[role=button]')) { const nx = box.querySelector('[data-act=next]'); if (nx) { ev.preventDefault(); nx.click(); } }
    };
    start();
  }

  /* ---------- Pages ---------- */
  const quiz = (gen, key) => (box) => App.runQuiz(box, gen(), { onDone: (r, n) => saveBest(key, r, n), after: ALL });
  const RUN = {
    match: runMatch, type: runType, picture: runPicture,
    opp: quiz(() => oppQs(N), 'opp:all'), col: quiz(() => colQs(N), 'col:all'), odd: quiz(() => oddQs(N), 'odd:all'), affix: quiz(() => affixQs(N), 'affix:all'),
    hear: (box, src) => { const used = poolFor(src, 4).src; return quiz(() => hearQs(N, used), 'hear:' + used)(box); },
    context: (box, src) => {
      const used = poolFor(src, 8, hasCtx).src, qs = contextQs(N, used);
      if (!qs.length) { box.innerHTML = '<div class="notice info">No example sentences are loaded yet. Try another game.</div><div class="row" style="margin-top:10px">' + ALL + '</div>'; return; }
      const inner = document.createElement('div');
      box.innerHTML = used !== src ? '<div class="notice info" style="margin-bottom:10px">Not enough sentences there yet, so this game uses all words.</div>' : '';
      box.appendChild(inner);
      App.runQuiz(inner, qs, { onDone: (r, k) => saveBest('context:' + used, r, k), after: ALL });
    }
  };
  const tileHTML = (m) => { const b = bestOf(m.id); return '<a class="tile" href="#/vocab/' + m.id + '" data-mode="' + m.id + '"><span class="eyebrow">' + esc(m.eyebrow) + '</span><h3>' + esc(m.title) + '</h3><p>' + esc(m.blurb) + '</p>' +
    '<div class="meta row"><span class="pill' + (b != null ? ' good' : '') + '">' + (b != null ? 'Best ' + b + '%' : 'Not tried yet') + '</span></div></a>'; };
  App.vocabTiles = () => MODES.map(tileHTML).join(''); // the Practice page (js/app.js)
  App.VOCAB_MODES = MODES;

  // One row per dictionary category: words, cards in the deck (an srs entry), known (srs r >= 3).
  const catStats = () => {
    const srs = App.state.srs || {}, by = {};
    App.DICT.forEach((e) => (by[e.cat] = by[e.cat] || []).push(e));
    return Object.keys(App.CATS).filter((c) => by[c]).map((c) => ({ c, label: App.CATS[c], n: by[c].length, deck: by[c].filter((e) => srs[e.id]).length, known: by[c].filter((e) => srs[e.id] && srs[e.id].r >= 3).length }));
  };
  App.vocabCatStats = catStats;
  V.vocab = (el) => {
    el.innerHTML = '<h1>Vocabulary practice</h1><p class="muted">Nine short word games: matching, opposites, words that go together, odd one out, typing, listening, word parts, words in context and pictures.</p>' +
      '<div class="grid">' + App.vocabTiles() + '</div>' +
      '<h2 style="margin-top:22px">Your words by topic</h2><p class="muted small">Words in the dictionary, how many are in your flashcards, and how many you know well. Tap a topic to open its flashcards.</p>' +
      '<div class="card vcats">' + catStats().map((x) => '<div class="vcat" data-cat="' + x.c + '"><div class="spread"><a href="#/flash/c-' + x.c + '"><b>' + esc(x.label) + '</b></a>' +
        (x.c !== 'stigma' ? '<a class="btn sm" href="#/vocab/match?cat=' + x.c + '">Match</a>' : '') + '</div>' +
        '<div class="muted small">' + x.n + ' words · ' + x.deck + ' in your cards · ' + x.known + ' known</div>' +
        '<div class="progress vbar" aria-hidden="true"><i style="width:' + Math.round((100 * x.known) / Math.max(1, x.n)) + '%"></i></div></div>').join('') + '</div>' +
      '<div class="row" style="margin-top:14px"><a class="btn" href="#/flash">Flashcards</a><a class="btn" href="#/dict">Dictionary</a><a class="btn" href="#/practice">All practice</a></div>';
  };
  V.vocabMode = (el, p, q) => {
    const m = byId(p.mode);
    if (!m) { el.innerHTML = '<h1>Vocabulary practice</h1><p>That game does not exist. <a href="#/vocab">See all vocabulary practice</a>.</p>'; return; }
    const st = App.state.settings, srcs = m.pics ? picSources() : m.src ? sources(m.id) : null, key = m.pics ? 'vocabPicSrc' : 'vocabCat';
    const has = (v) => srcs && srcs.some(([k]) => k === v);
    const cur = has(q && q.cat) ? q.cat : has(st[key]) ? st[key] : 'all';
    const lv = picLv(), count = (v) => '<p class="muted small" style="margin:0" data-vpn>' + picPool(v).items.length + ' pictures' + (lv !== 'All' ? ' at level ' + lv : '') + '.</p>';
    el.innerHTML = '<h1>' + esc(m.title) + '</h1><p class="muted">' + esc(m.intro) + '</p>' +
      '<div class="card stack">' + (m.pics ? '<div class="row"><span class="small">Level</span><div class="seg" role="group" aria-label="Level">' + ['All', 'A1', 'A2'].map((k) => '<button type="button" data-vplv="' + k + '" aria-pressed="' + (lv === k) + '" class="' + (lv === k ? 'on' : '') + '">' + k + '</button>').join('') + '</div></div>' : '') +
      '<div class="row">' +
      (srcs ? '<label class="small" style="max-width:100%">' + (m.pics ? 'Pictures' : 'Words') + ' <select class="input" id="vsrc" style="width:auto;max-width:100%">' + srcs.map(([v, t]) => '<option value="' + v + '"' + (v === cur ? ' selected' : '') + '>' + esc(t) + '</option>').join('') + '</select></label>' : '') +
      '<button class="btn primary" id="vgo">Start</button></div>' + (m.pics ? count(cur) : '') + '<div id="vbox"></div></div>' + (m.draft ? DRAFT : '');
    const sel = el.querySelector('#vsrc'), box = el.querySelector('#vbox');
    if (sel) sel.onchange = () => { st[key] = sel.value; App.save(); const c = el.querySelector('[data-vpn]'); if (c) c.outerHTML = count(sel.value); };
    // The level is the one on Picture words (#/pictures): changing it here changes it there too.
    el.querySelectorAll('[data-vplv]').forEach((b) => (b.onclick = () => { st.picLv = b.dataset.vplv; App.save(); V.vocabMode(el, p, Object.assign({}, q, { cat: sel ? sel.value : 'all' })); }));
    el.querySelector('#vgo').onclick = () => {
      const src = sel ? sel.value : 'all';
      if (sel) { st[key] = src; App.save(); }
      const inner = document.createElement('div'); inner.style.marginTop = '12px'; box.innerHTML = ''; box.appendChild(inner);
      RUN[m.id](inner, src);
    };
  };

  // #/progress Completion card (V.progress in js/views.js): keep the rows js/pictures.js adds.
  const prevExtra = App.progressExtra;
  App.progressExtra = (st) => (prevExtra ? prevExtra(st) : []).concat([['Vocabulary games tried', MODES.filter((m) => Object.keys((st.done && st.done.vocab) || {}).some((k) => k.split(':')[0] === m.id)).length, MODES.length]]);

  // Daily mix (js/drills.js reads App.dailyExtra).
  App.dailyExtra = (App.dailyExtra || []).concat([['Opposites', () => App.vocabQs.opp(1)], ['What goes with it', () => App.vocabQs.col(1)], ['Odd one out', () => App.vocabQs.odd(1)], ['Word parts', () => App.vocabQs.affix(1)]].concat(App.vocabPool('all').some(hasCtx) ? [['In context', () => App.vocabQs.context(1)]] : [])); // In context only once sentences are loaded
})();
