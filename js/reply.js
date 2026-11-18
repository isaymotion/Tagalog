/* Listen and reply (#/reply, 3.17.0). Data: window.LISTEN_REPLY (js/data/listen-reply.js):
   { id: 'lr-NNN', lv: 'A1'|'A2'|'B1'|'B2', clin, who, say, en, opts: [{ tl, en }] ×4, a, why }.
   The learner HEARS `say` (played when the question opens and from "Play again"; its text is not in the page until the
   answer) and chooses the natural reply among four Tagalog buttons, each with its own small speaker beside it. After
   answering: `say` with its speaker and English, each option's English (the right one marked), and `why`.
   App.runQuiz has no per-option speakers, so this file has its own small runner with the same look (.opt buttons,
   .feedback, [data-act=next]).
   Segs: Everyday / Clinical / All (state.settings.replyKind) and level All / A1 … B2 (state.settings.replyLv; only levels
   with items in that kind). 10 items a round.
   Score: state.done.reply['<everyday|clinical|all>:<lv|all>'] = best % (numbers only). Mistakes: state.done.reply.miss =
   item ids (newest last, at most 200; a right answer takes the id off); "Practise my mistakes" shows at 3 or more.
   API: App.replyItems() = the valid items; App.replyQs(kind, lv, n) → App.runQuiz questions (hideQ: the line is played,
   its text shown after answering), used by the daily mix through App.dailyExtra. */
(function () {
  const { esc, pick, shuffle, icons } = App;
  const V = (App.views = App.views || {});
  const S = () => App.state;
  const LVS = ['A1', 'A2', 'B1', 'B2'];
  const KINDS = [['everyday', 'Everyday'], ['clinical', 'Clinical'], ['all', 'All']];
  const ROUND = 10, MISS_MAX = 200, MISS_MIN = 3;
  const DRAFT = '<p class="muted small" style="margin-top:14px">Drafted for study; the Tagalog is pending review by a native speaker.</p>';
  const isStr = (x) => typeof x === 'string' && x.trim() !== '';
  const valid = (x) => x && isStr(x.id) && isStr(x.say) && Array.isArray(x.opts) && x.opts.length >= 2 && x.opts.every((o) => o && isStr(o.tl)) &&
    Number.isInteger(x.a) && x.a >= 0 && x.a < x.opts.length;
  const items = () => (Array.isArray(window.LISTEN_REPLY) ? window.LISTEN_REPLY : []).filter(valid);
  App.replyItems = items;
  const kindOf = (x) => (x.clin ? 'clinical' : 'everyday');
  const store = () => { const d = S().done; if (!d.reply || typeof d.reply !== 'object' || Array.isArray(d.reply)) d.reply = {}; return d.reply; };
  const missList = () => { const st = store(); if (!Array.isArray(st.miss)) st.miss = []; return st.miss; };
  const noteMiss = (id, ok) => { const m = missList(), at = m.indexOf(id); if (at >= 0) m.splice(at, 1); if (!ok) { m.push(id); if (m.length > MISS_MAX) m.splice(0, m.length - MISS_MAX); } };
  const bestOf = (k) => { const v = store()[k]; return typeof v === 'number' ? v : null; };
  const poolOf = (kind, lv) => items().filter((x) => (!kind || kind === 'all' || kindOf(x) === kind) && (!lv || lv === 'all' || x.lv === lv));

  // runQuiz questions (daily mix). The line is played on open (hideQ); the options are the Tagalog replies.
  const toQ = (x) => {
    const r = x.opts[x.a];
    return { q: x.say, sub: isStr(x.who) ? x.who : 'Someone says this to you.', hideQ: 'Listen, then choose the natural reply.', say: x.say, tlq: true, tlo: true,
      opts: x.opts.map((o) => o.tl), a: x.a, sayAfter: r.tl, id: x.id,
      exp: 'They said: ' + x.say + (isStr(x.en) ? ' (' + x.en + ')' : '') + '. Reply: ' + r.tl + (isStr(r.en) ? ' (' + r.en + ')' : '') + '. ' + (isStr(x.why) ? x.why : '') };
  };
  App.replyQs = (kind, lv, n) => pick(poolOf(kind, lv), n || ROUND).map(toQ);
  App.replyNoteMiss = noteMiss; // for tests

  // The round: own runner so each reply has its own speaker.
  function runRound(box, list, key, onEnd) {
    let i = 0, right = 0;
    const draw = () => {
      if (i >= list.length) {
        const pct = Math.round((100 * right) / list.length);
        let rec = '';
        if (key) { const old = bestOf(key); if (old == null || pct > old) { store()[key] = pct; if (old != null) rec = ' <span class="pill good">New best</span>'; } }
        App.activity(10); App.save();
        const nm = missList().length;
        box.innerHTML = '<div class="card stack"><h3>' + (pct >= 80 ? LANG.quiz.great : pct >= 50 ? LANG.quiz.ok : LANG.quiz.keepGoing) + ' ' + right + ' / ' + list.length + rec + '</h3>' +
          '<div class="progress"><i style="width:' + pct + '%"></i></div>' +
          '<p class="muted small" style="margin:0">' + (key ? 'Best for this choice: ' + (bestOf(key) || 0) + '%.' : 'A mistakes round does not change your best score.') + '</p>' +
          '<div class="row"><button type="button" class="btn primary" data-act="retry">New round</button>' + (nm >= MISS_MIN ? '<button type="button" class="btn" data-act="miss">Practise my mistakes (' + nm + ')</button>' : '') + '<a class="btn" href="#/practice">All practice</a></div></div>';
        onEnd(box);
        return;
      }
      const x = list[i], order = shuffle(x.opts.map((o, k) => k));
      const play = () => App.speak(x.say);
      box.innerHTML = '<div class="card stack rp-q"><div class="spread"><span class="eyebrow">Question ' + (i + 1) + ' of ' + list.length + '</span><span class="pill lv">' + esc(x.lv || '') + '</span></div>' +
        '<div class="listen-q"><button type="button" class="btn primary" data-act="play">' + icons.sound + ' Play again</button><span class="muted small">Listen, then choose the natural reply.</span></div>' +
        '<div class="muted rp-who">' + esc(isStr(x.who) ? x.who : 'Someone says this to you.') + '</div>' +
        '<div data-said></div>' +
        '<div class="opts rp-opts">' + order.map((k) => '<div class="rp-opt"><button type="button" class="opt" data-k="' + k + '"><span class="tl">' + esc(x.opts[k].tl) + '</span><span class="rp-en" hidden></span></button>' + App.sayBtn(x.opts[k].tl, x.opts[k].tl) + '</div>').join('') + '</div>' +
        '<div data-fb></div></div>';
      const pb = box.querySelector('[data-act=play]');
      pb.onclick = play;
      setTimeout(() => { if (box.contains(pb)) play(); }, 150);
      box.querySelectorAll('.opt').forEach((b) => (b.onclick = () => {
        const k = +b.dataset.k, ok = k === x.a;
        if (ok) right++;
        App.recordAnswer(ok);
        noteMiss(x.id, ok); App.save();
        box.querySelectorAll('.opt').forEach((o) => {
          const kk = +o.dataset.k, en = o.querySelector('.rp-en');
          o.disabled = true;
          if (kk === x.a) o.classList.add('right');
          en.innerHTML = esc(x.opts[kk].en || '') + (kk === x.a ? ' <span class="pill good">Natural reply</span>' : kk === k ? ' <span class="pill">Your choice</span>' : '');
          en.hidden = false;
        });
        if (!ok) b.classList.add('wrong');
        box.querySelector('[data-said]').innerHTML = '<div class="rp-said"><span class="eyebrow">They said</span><div class="rp-line"><span class="tl">' + esc(x.say) + '</span>' + App.sayBtn(x.say, x.say) + '</div>' +
          (isStr(x.en) ? '<div class="small">' + esc(x.en) + '</div>' : '') + '</div>';
        box.querySelector('[data-fb]').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? LANG.quiz.right : LANG.quiz.wrong) + '</b> ' + esc(isStr(x.why) ? x.why : '') + '</div>' +
          '<div class="row" style="margin-top:10px"><button type="button" class="btn primary" data-act="next">' + (i + 1 < list.length ? 'Next' : 'See score') + '</button></div>';
        const nx = box.querySelector('[data-act=next]');
        nx.onclick = () => { i++; draw(); };
        nx.focus();
      }));
    };
    draw();
  }

  V.reply = (el) => {
    const st = S().settings, all = items();
    const head = '<h1>Listen and reply</h1><p class="muted">Hear what someone says, then choose the natural reply. Everyday lines are what friends, family and people in shops say; clinical lines are what a patient, a relative or a nurse says to you on the ward. The words stay hidden until you answer.</p>';
    if (!all.length) { el.innerHTML = head + '<div class="notice info">No items yet.</div>' + DRAFT; return; }
    let kind = KINDS.some((k) => k[0] === st.replyKind) ? st.replyKind : 'all';
    let lv = LVS.includes(st.replyLv) ? st.replyLv : 'all';
    el.innerHTML = head + '<div class="card stack" id="rpset"></div><div id="rpround" style="margin-top:14px"></div>' + DRAFT;
    const set = el.querySelector('#rpset'), box = el.querySelector('#rpround');
    const lvs = () => LVS.filter((v) => poolOf(kind, v).length);
    const missItems = () => { const by = new Map(all.map((x) => [x.id, x])); return missList().map((id) => by.get(id)).filter(Boolean); };
    const keyOf = () => kind + ':' + lv;
    const seg = (label, attr, list, cur) => '<div class="seg" role="group" aria-label="' + label + '">' + list.map(([k, t]) => '<button type="button" data-' + attr + '="' + k + '" aria-pressed="' + (cur === k) + '" class="' + (cur === k ? 'on' : '') + '">' + esc(t) + '</button>').join('') + '</div>';
    const run = (list, key) => {
      if (!list.length) return;
      runRound(box, list, key, (b) => {
        drawSet();
        b.querySelector('[data-act=retry]').onclick = () => (key ? run(pick(poolOf(kind, lv), ROUND), keyOf()) : run(pick(missItems(), ROUND), null));
        const m = b.querySelector('[data-act=miss]'); if (m) m.onclick = () => run(pick(missItems(), ROUND), null);
      });
      box.scrollIntoView({ block: 'start', behavior: 'smooth' });
    };
    const drawSet = () => {
      if (lv !== 'all' && !lvs().includes(lv)) lv = 'all';
      const n = poolOf(kind, lv).length, nm = missItems().length, b = bestOf(keyOf());
      set.innerHTML = '<span class="eyebrow">Kind</span>' + seg('Kind', 'rk', KINDS, kind) +
        '<span class="eyebrow">Level</span>' + seg('Level', 'rl', [['all', 'All']].concat(lvs().map((v) => [v, v])), lv) +
        '<p class="muted small" style="margin:0">' + n + ' line' + (n === 1 ? '' : 's') + ' at this choice' + (b != null ? ' · best ' + b + '%' : '') + '. ' + ROUND + ' a round; turn the sound on.</p>' +
        '<div class="row"><button type="button" class="btn primary" id="rpgo"' + (n ? '' : ' disabled') + '>Start</button>' +
        (nm >= MISS_MIN ? '<button type="button" class="btn" id="rpmiss">Practise my mistakes (' + nm + ')</button>' : '') + '</div>';
      const reset = () => { App.stopSpeech(); box.innerHTML = ''; drawSet(); };
      set.querySelectorAll('[data-rk]').forEach((x) => (x.onclick = () => { kind = x.dataset.rk; st.replyKind = kind; App.save(); reset(); }));
      set.querySelectorAll('[data-rl]').forEach((x) => (x.onclick = () => { lv = x.dataset.rl; st.replyLv = lv; App.save(); reset(); }));
      set.querySelector('#rpgo').onclick = () => run(pick(poolOf(kind, lv), ROUND), keyOf());
      const mb = set.querySelector('#rpmiss'); if (mb) mb.onclick = () => run(pick(missItems(), ROUND), null);
    };
    drawSet();
  };

  // Daily mix part (js/drills.js reads App.dailyExtra at call time) and a Progress row (chained like js/vocab.js).
  App.dailyExtra = (App.dailyExtra || []).concat([['Listen and reply', () => App.replyQs('all', 'all', 1)]]);
  const prevExtra = App.progressExtra;
  App.progressExtra = (st) => {
    const r = (st.done && st.done.reply && typeof st.done.reply === 'object') ? st.done.reply : {};
    const sets = [].concat(...KINDS.map(([k]) => ['all'].concat(LVS.filter((v) => poolOf(k, v).length)).map((v) => k + ':' + v)));
    return (prevExtra ? prevExtra(st) : []).concat(items().length ? [['Listen and reply sets tried', sets.filter((k) => typeof r[k] === 'number').length, sets.length]] : []);
  };
})();
