/* Listening exercises (#/listen, #/listen/<id>), 3.5.0. Data: js/data/listening.js (LISTENING).
   Audio first: the transcript stays hidden until the learner asks for it. Steps: listen (play all, replay a
   line, slow down), answer the questions, check the transcript, then type two lines from the audio (dictation).
   Best quiz score in state.done.listening[id]. */
(function () {
  const { esc, icons } = App;
  const V = App.views;
  const S = () => App.state;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const lvPill = (lv) => '<span class="pill lv">' + esc(lv) + '</span>';
  const done = () => (S().done.listening = S().done.listening || {});
  const items = () => window.LISTENING || [];
  const isTl = (q) => !/^(Which|What|Why|How|When|Where|Who|Clinically)\b|^"/.test(q);

  V.listening = (el) => {
    el.innerHTML = '<h1>Listening</h1><p class="muted">Recordings to understand by ear: voicemails, announcements, the radio, a nurse handover, a family conversation. The text stays hidden until you ask for it. Listen, answer, check the transcript, then write down two lines you hear. Passages under <a href="#/reading">Reading</a> also have a Listen first mode.</p><div class="grid">' +
      items().map((x) => '<a class="tile" href="#/listen/' + x.id + '"><div class="row">' + lvPill(x.level) + '<span class="pill">' + esc(x.kind) + '</span>' + (x.psych ? '<span class="pill warn">clinical</span>' : '') + (done()[x.id] != null ? '<span class="pill good">' + done()[x.id] + '%</span>' : '') + '</div><h3 class="tl" style="margin-top:6px">' + esc(x.title) + '</h3><p>' + esc(x.titleEn) + '</p></a>').join('') + '</div>';
  };

  V.listenItem = (el, p) => {
    const x = items().find((it) => it.id === p.id);
    if (!x) { el.innerHTML = '<p>Exercise not found. <a href="#/listen">All listening exercises</a></p>'; return; }
    const normal = S().settings.rate || 0.85;
    let rate = normal, showTx = false, showEn = false, playing = -1;
    const who = (l) => x.speakers[l[0]] || '';
    const stop = () => { App.stopSpeech(); playing = -1; mark(); };
    const mark = () => el.querySelectorAll('[data-line]').forEach((b) => b.classList.toggle('on', +b.dataset.line === playing));
    const playFrom = async (start, only) => {
      const tok = (App._seq = (App._seq || 0) + 1);
      for (let i = start; i < x.lines.length; i++) {
        if (App._seq !== tok) return;
        playing = i; mark();
        await App.speakAsync(x.lines[i][1], { rate });
        if (only || App._seq !== tok) break;
        await new Promise((r) => setTimeout(r, 450));
      }
      if (App._seq === tok) { playing = -1; mark(); }
    };
    const drawTx = () => {
      const t = el.querySelector('#ltx');
      el.querySelector('#txbtn').textContent = showTx ? 'Hide transcript' : 'Show transcript';
      el.querySelector('#enbtn').hidden = !showTx;
      el.querySelector('#enbtn').textContent = showEn ? 'Hide English' : 'Show English';
      t.hidden = !showTx;
      t.innerHTML = x.lines.map((l, i) => '<div class="line' + (l[0] % 2 ? ' me' : '') + '"><div class="spread"><span class="who">' + (i + 1) + ' · ' + esc(who(l)) + '</span>' + App.sayBtn(l[1]) + '</div><div class="t">' + esc(l[1]) + '</div>' + (showEn ? '<div class="e">' + esc(l[2]) + '</div>' : '') + '</div>').join('');
    };
    const dictCard = (li, n) => '<div class="card stack ldict" data-d="' + li + '"><div class="spread"><span class="eyebrow">Line ' + (n + 1) + ' of ' + x.dictation.length + '</span><span class="row" style="gap:6px"><button class="btn sm" data-dplay="' + li + '">' + icons.sound + ' Play</button><button class="btn sm" data-dslow="' + li + '">Slower</button></span></div>' +
      '<textarea class="input tl" rows="2" placeholder="Type what you hear" aria-label="Type line ' + (n + 1) + '"></textarea><div class="row"><button class="btn primary" data-dcheck="' + li + '">Check</button></div><div data-dfb></div></div>';

    el.innerHTML = crumb([['Listening', '#/listen'], [x.title]]) +
      '<div class="row">' + lvPill(x.level) + '<span class="pill">' + esc(x.kind) + '</span>' + (x.psych ? '<span class="pill warn">clinical</span>' : '') + '</div>' +
      '<h1 class="tl" style="margin-top:6px">' + esc(x.title) + '</h1><p class="muted">' + esc(x.titleEn) + '</p>' +
      '<div class="card stack"><p style="margin:0">' + esc(x.setting) + '</p><p class="muted small" style="margin:0">' + (x.speakers.length > 1 ? 'Speakers: ' + x.speakers.map(esc).join(', ') + '. ' : '') + x.lines.length + ' lines.</p></div>' +
      '<h2 style="margin-top:16px">1. Listen</h2>' +
      '<div class="card stack lplayer"><div class="row"><button class="btn primary" id="lplay">' + icons.sound + ' Play all</button><button class="btn" id="lstop">Stop</button>' +
      '<div class="seg" role="group" aria-label="Speed"><button data-r="slow">Slower</button><button data-r="normal" class="on">Normal</button></div></div>' +
      '<div><span class="muted small">Replay one line:</span><div class="lchips">' + x.lines.map((l, i) => '<button class="lchip" data-line="' + i + '" aria-label="Play line ' + (i + 1) + (x.speakers.length > 1 ? ', ' + esc(who(l)) : '') + '">' + (i + 1) + '</button>').join('') + '</div></div></div>' +
      '<h2 style="margin-top:16px">2. Answer</h2><p class="muted small">Play the whole recording at least once before you answer. Replay any line as often as you need.</p><div id="lq"></div>' +
      '<h2 style="margin-top:16px">3. Check the transcript</h2><div class="row"><button class="btn" id="txbtn"></button><button class="btn" id="enbtn" hidden></button></div><div class="dlg" id="ltx" style="margin-top:10px" hidden></div>' +
      '<h2 style="margin-top:16px">4. Dictation</h2><p class="muted small">Write each line as you hear it. Accents and capital letters do not count.</p><div class="stack" id="ldict">' + x.dictation.map(dictCard).join('') + '</div>';

    el.querySelector('#lplay').onclick = () => playFrom(0);
    el.querySelector('#lstop').onclick = stop;
    el.querySelectorAll('[data-r]').forEach((b) => (b.onclick = () => { rate = b.dataset.r === 'slow' ? Math.max(0.6, normal - 0.2) : normal; el.querySelectorAll('[data-r]').forEach((y) => y.classList.toggle('on', y === b)); }));
    el.querySelectorAll('[data-line]').forEach((b) => (b.onclick = () => playFrom(+b.dataset.line, true)));
    el.querySelector('#txbtn').onclick = () => { showTx = !showTx; drawTx(); };
    el.querySelector('#enbtn').onclick = () => { showEn = !showEn; drawTx(); };
    el.querySelectorAll('[data-dplay]').forEach((b) => (b.onclick = () => App.speak(x.lines[+b.dataset.dplay][1], { rate: normal })));
    el.querySelectorAll('[data-dslow]').forEach((b) => (b.onclick = () => App.speak(x.lines[+b.dataset.dslow][1], { rate: Math.max(0.6, normal - 0.25) })));
    el.querySelectorAll('[data-dcheck]').forEach((b) => (b.onclick = () => {
      const card = b.closest('[data-d]'), l = x.lines[+b.dataset.dcheck];
      const typed = card.querySelector('textarea').value;
      const s = App.similarity(App.spoken(l[1]), typed);
      App.recordAnswer(s >= 80);
      card.querySelector('[data-dfb]').innerHTML = '<div class="feedback ' + (s >= 80 ? 'ok' : 'no') + '"><b>' + s + '% of words match.</b><div class="tl" style="margin-top:6px">' + esc(l[1]) + '</div><div class="muted small">' + esc(l[2]) + '</div></div>';
    }));
    drawTx();
    App.runQuiz(el.querySelector('#lq'), x.q.map(([q, opts, a, exp]) => ({ q, opts, a, exp, tlq: isTl(q) })), {
      onDone: (rt, n) => { done()[x.id] = Math.max(Math.round((100 * rt) / n), done()[x.id] || 0); App.activity(10); App.save(); }
    });
  };
})();
