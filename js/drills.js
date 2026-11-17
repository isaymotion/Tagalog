/* Language drills (3.7.0): #/drills lists them, #/drills/<id> runs one.
   switch  Formal ↔ Everyday: the f and c forms of every psychiatry phrase (no data of its own)
   markers Choose the marker: DRILL_CLOZE (ang/ng/sa, si/ni/kay, ito/iyan/iyon)
   build   Put the words in order: DRILL_BUILD (word tiles, enclitic order)
   Best scores in state.done.drills['<id>:<set>']. To add a drill: a row in DRILLS, a run function in RUN. */
(function () {
  const { esc, shuffle, pick } = App;
  const V = (App.views = App.views || {});
  const CLOZE = window.DRILL_CLOZE || [], SETS = window.DRILL_CLOZE_SETS || {}, BUILD = window.DRILL_BUILD || [];
  const SECTIONS = () => window.PSYCH_SECTIONS || [];
  const N = 10;

  const DRILLS = [
    { id: 'switch', title: 'Formal or everyday?', eyebrow: 'Register · 10 questions', blurb: 'Hear a line one way, find the same line in the other register.',
      intro: 'Every interview phrase in this app has a respectful form (po, kayo) and an everyday form. Patients answer in the everyday form, and elders expect the respectful one. Here you see a line in one register and choose the same line in the other.',
      opts: [['f-c', 'Respectful → everyday'], ['c-f', 'Everyday → respectful']], lessons: ['politeness', 'register'] },
    { id: 'markers', title: 'Choose the marker', eyebrow: 'Grammar · 10 questions', blurb: 'Ang, ng or sa? Si, ni or kay? Ito, iyan or iyon?',
      intro: 'Fill the gap with the right marker or pointing word. The English line tells you who did what.',
      opts: [['all', 'All sets'], ['m', 'Ang, ng, sa'], ['n', 'Si, ni, kay'], ['d', 'Ito, iyan, iyon']], lessons: ['markers', 'names', 'demonstratives'] },
    { id: 'build', title: 'Build the sentence', eyebrow: 'Word order · 10 sentences', blurb: 'Tap the words into order. Where do na, po, ba and ko go?',
      intro: 'Tap the words in order to build the Tagalog sentence. The short words (ka, ko, mo, na, pa, po, ba, lang, raw) have a fixed place right after the first word of the sentence; this drill trains that order.',
      opts: [], lessons: ['particles', 'pronouns', 'questions'] }
  ];
  App.DRILLS = DRILLS;
  const byId = (id) => DRILLS.find((d) => d.id === id);
  const bestOf = (id) => { const o = (App.state.done.drills || {}); const v = Object.keys(o).filter((k) => k.split(':')[0] === id).map((k) => o[k]); return v.length ? Math.max(...v) : null; };
  const saveBest = (key, right, total) => {
    const s = App.state; s.done.drills = s.done.drills || {};
    s.done.drills[key] = Math.max(s.done.drills[key] || 0, Math.round((100 * right) / total));
    App.activity(10); App.save();
  };

  /* ---------- Formal ↔ Everyday ---------- */
  function switchQs(dir, n) {
    const from = dir === 'c-f' ? 'c' : 'f', to = from === 'f' ? 'c' : 'f';
    const pool = [];
    SECTIONS().forEach((s) => s.phrases.forEach((p, i) => { if (p.f && p.c && p.f !== p.c) pool.push({ s, p, i }); }));
    return pick(pool, n).map(({ s, p, i }) => {
      const same = shuffle(s.phrases.filter((x) => x !== p && x[to] && x[to] !== p[to]).map((x) => x[to]));
      const other = shuffle(pool.filter((x) => x.s !== s).map((x) => x.p[to]));
      const wrong = [...new Set(same.concat(other))].filter((x) => x !== p[to]).slice(0, 3);
      return { q: p[from], sub: p.en + ' · ' + (to === 'c' ? 'Choose the everyday form.' : 'Choose the respectful form.'), tlq: true, tlo: true, say: p[from],
        opts: [p[to]].concat(wrong), a: 0, cardId: 'p:' + s.id + ':' + i, sayAfter: p[to], exp: p[to] };
    });
  }

  /* ---------- Choose the marker ---------- */
  const fill = (it) => it.q.replace('____', it.a);
  function clozeQs(set, n) {
    const src = CLOZE.filter((it) => set === 'all' || (set === 'd' ? /^(ito|iyan|iyon)$/.test(it.set) : it.set === set));
    return pick(src, Math.min(n, src.length)).map((it) => {
      const opts = SETS[it.set].opts;
      return { q: it.q, sub: it.en, tlq: true, tlo: true, opts, a: opts.indexOf(it.a), sayAfter: fill(it), exp: fill(it) + ' ' + it.why };
    });
  }

  /* ---------- Build the sentence ---------- */
  const sentence = (it, tiles) => { const s = (tiles || it.t).join(' '); return s.charAt(0).toUpperCase() + s.slice(1) + (it.end || '.'); };
  const accepted = (it) => [it.t].concat(it.alt || []).map((t) => t.join(' ').toLowerCase());
  App.drillBuildOk = (it, tiles) => accepted(it).includes(tiles.join(' ').toLowerCase());
  function runBuild(box, key) {
    let items = pick(BUILD, Math.min(N, BUILD.length)), i = 0, right = 0;
    const draw = () => {
      if (i >= items.length) {
        const pct = Math.round((100 * right) / items.length);
        box.innerHTML = '<div class="card stack"><h3>' + (pct >= 80 ? LANG.quiz.great : pct >= 50 ? LANG.quiz.ok : LANG.quiz.keepGoing) + ' ' + right + ' / ' + items.length + '</h3>' +
          '<div class="progress"><i style="width:' + pct + '%"></i></div><div class="row"><button class="btn primary" data-act="retry">Try again</button><a class="btn" href="#/drills">All drills</a></div></div>';
        box.querySelector('[data-act=retry]').onclick = () => { items = pick(BUILD, Math.min(N, BUILD.length)); i = 0; right = 0; draw(); };
        saveBest(key, right, items.length);
        return;
      }
      const it = items[i];
      // Bank order: shuffled, and never already the answer.
      let bank = shuffle(it.t.map((w, k) => k));
      if (bank.every((k, j) => k === j)) bank = bank.reverse();
      const chosen = [];
      let done = false;
      const tile = (k, where) => '<button class="wtile tl" data-k="' + k + '" data-w="' + where + '"' + (done ? ' disabled' : '') + '>' + esc(k === 0 ? it.t[0].charAt(0).toLowerCase() + it.t[0].slice(1) : it.t[k]) + '</button>'; // no capital: it would give the first word away
      const paint = () => {
        box.innerHTML = '<div class="card stack"><div class="spread"><span class="eyebrow">Sentence ' + (i + 1) + ' of ' + items.length + '</span></div>' +
          '<div style="font-size:1.12rem;font-weight:600">' + esc(it.en) + '</div>' +
          '<div class="wline" data-line aria-label="Your sentence">' + (chosen.length ? chosen.map((k) => tile(k, 'line')).join('') : '<span class="muted small">Tap the words below in order.</span>') + '</div>' +
          '<div class="wbank" data-bank aria-label="Words">' + bank.filter((k) => !chosen.includes(k)).map((k) => tile(k, 'bank')).join('') + '</div>' +
          '<div class="row"><button class="btn primary" data-act="check"' + (chosen.length === it.t.length && !done ? '' : ' disabled') + '>Check</button><button class="btn" data-act="clear"' + (chosen.length && !done ? '' : ' disabled') + '>Clear</button></div><div data-fb></div></div>';
        box.querySelectorAll('.wtile').forEach((b) => (b.onclick = () => {
          const k = +b.dataset.k;
          if (b.dataset.w === 'bank') chosen.push(k); else chosen.splice(chosen.indexOf(k), 1);
          paint();
        }));
        box.querySelector('[data-act=clear]').onclick = () => { chosen.length = 0; paint(); };
        box.querySelector('[data-act=check]').onclick = () => {
          const mine = chosen.map((k) => it.t[k]);
          const ok = App.drillBuildOk(it, mine);
          if (ok) right++;
          App.recordAnswer(ok);
          done = true; paint();
          const model = ok ? sentence(it, mine) : sentence(it);
          box.querySelector('[data-line]').classList.add(ok ? 'right' : 'wrong');
          box.querySelector('[data-fb]').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? LANG.quiz.right : LANG.quiz.wrong) + '</b> <span class="tl">' + esc(model) + '</span> ' + App.sayBtn(model) + '<div style="margin-top:4px">' + esc(it.why) + '</div></div>' +
            '<div class="row" style="margin-top:10px"><button class="btn primary" data-act="next">' + (i + 1 < items.length ? 'Next' : 'See score') + '</button></div>';
          const nx = box.querySelector('[data-act=next]');
          nx.onclick = () => { i++; draw(); };
          nx.focus();
        };
      };
      paint();
    };
    draw();
  }

  const RUN = {
    switch: (box, set) => App.runQuiz(box, switchQs(set, N), { onDone: (r, n) => saveBest('switch:' + set, r, n), after: '<a class="btn" href="#/drills">All drills</a>' }),
    markers: (box, set) => App.runQuiz(box, clozeQs(set, N), { onDone: (r, n) => saveBest('markers:' + set, r, n), after: '<a class="btn" href="#/drills">All drills</a>' }),
    build: (box) => runBuild(box, 'build:all')
  };
  App.drillQs = { switch: switchQs, markers: clozeQs }; // for tests

  V.drills = (el) => {
    el.innerHTML = '<h1>Drills</h1><p class="muted">Short grammar and word-order drills, ten items each. They go with the lessons; the verb trainer and Panlapi have their own pages.</p><div class="grid">' +
      DRILLS.map((d) => { const b = bestOf(d.id); return '<a class="tile" href="#/drills/' + d.id + '"><span class="eyebrow">' + esc(d.eyebrow) + '</span><h3>' + esc(d.title) + '</h3><p>' + esc(d.blurb) + '</p><div class="meta row"><span class="pill' + (b != null ? ' good' : '') + '">' + (b != null ? 'Best ' + b + '%' : 'Not tried yet') + '</span></div></a>'; }).join('') +
      '</div><div class="row" style="margin-top:14px"><a class="btn" href="#/verbs">Verb trainer</a><a class="btn" href="#/affixes">Panlapi</a><a class="btn" href="#/practice">All practice</a></div>';
  };

  V.drill = (el, p) => {
    const d = byId(p.id);
    if (!d) { el.innerHTML = '<h1>Drills</h1><p>That drill does not exist. <a href="#/drills">See all drills</a>.</p>'; return; }
    const lessons = (window.LESSONS || []).filter((l) => d.lessons.includes(l.id));
    el.innerHTML = '<h1>' + esc(d.title) + '</h1><p class="muted">' + esc(d.intro) + '</p>' +
      '<div class="card stack"><div class="row">' +
      (d.opts.length ? '<label class="small" style="max-width:100%">Set <select class="input" id="dset" style="width:auto;max-width:100%">' + d.opts.map(([v, t]) => '<option value="' + v + '">' + esc(t) + '</option>').join('') + '</select></label>' : '') +
      '<button class="btn primary" id="dgo">Start</button></div><div id="dbox"></div></div>' +
      (lessons.length ? '<p class="muted small" style="margin-top:12px">Lessons for this drill: ' + lessons.map((l) => '<a href="#/lessons/' + l.id + '">' + esc(l.title) + '</a>').join(' · ') + '</p>' : '') +
      (d.id === 'switch' ? '<div class="notice info" style="margin-top:12px">Practice phrasings, not validated instrument translations.</div>' : '');
    const box = el.querySelector('#dbox');
    el.querySelector('#dgo').onclick = () => {
      const inner = document.createElement('div'); inner.style.marginTop = '12px'; box.innerHTML = ''; box.appendChild(inner);
      RUN[d.id](inner, (el.querySelector('#dset') || {}).value || 'all');
    };
  };
})();
