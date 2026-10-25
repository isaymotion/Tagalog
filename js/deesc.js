/* De-escalation: bedside checklist, rapid audio drill, and "if it fails" guide.
   Nothing entered here is saved: no patient details are asked for or stored. */
(function () {
  const { esc, icons, shuffle } = App;
  const V = App.views;
  const S = () => App.state;
  const ref = (r) => { const [sid, i] = r.split(':'); const s = PSYCH_SECTIONS.find((x) => x.id === sid); return s && s.phrases[+i]; };
  const main = (p) => (S().settings.register === 'c' ? p.c || p.f : p.f);
  const alt = (p) => (S().settings.register === 'c' ? p.f : p.c);
  const sayLine = (p) => '<div class="dz-line"><div><div class="tl dz-tl">' + esc(main(p)) + '</div>' + (alt(p) && alt(p) !== main(p) ? '<div class="tl small muted">' + esc(alt(p)) + '</div>' : '') + '<div class="small muted">' + esc(p.en) + '</div></div>' + App.sayBtn(main(p)) + '</div>';

  // Speak a line and resolve when finished (or after a timeout if speech is unavailable).
  function speakWait(text, lang) {
    return new Promise((res) => {
      if (!window.speechSynthesis) return setTimeout(res, 1500);
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      if (lang === 'en') u.lang = 'en-US';
      else { const v = App.voices().find((x) => x.name === S().settings.voice) || App.filipinoVoices()[0]; if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'fil-PH'; }
      u.rate = S().settings.rate || 0.85;
      let done = false; const fin = () => { if (!done) { done = true; res(); } };
      u.onend = fin; u.onerror = fin; setTimeout(fin, 12000);
      speechSynthesis.speak(u);
    });
  }
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  V.deesc = (el, p, q) => {
    const D = PSYCH_DEESC, inst = APP_META.institution || {};
    let tab = q.tab || 'check';
    const run = { behaviors: new Set(), other: '', done: new Set(), outcome: '', start: new Date() };
    let drill = null; // active rapid-drill state
    const time = (d) => d.toLocaleTimeString('en-PH', { hour: 'numeric', minute: '2-digit' });
    const summary = () => {
      const b = D.behaviors.filter((_, i) => run.behaviors.has(i)).map((x) => (x.en.startsWith('Others') ? 'Others: ' + (run.other || 'unspecified') : x.en));
      const steps = D.steps.map((s, i) => (run.done.has(i) ? '[x] ' : '[ ] ') + (i + 1) + '. ' + s.en.split('. ')[0].replace(/\.$/, ''));
      const out = (D.outcomes.find((o) => o[0] === run.outcome) || ['', 'Not recorded'])[1];
      return 'DE-ESCALATION NOTE' + (inst.deescForm ? ' (per ' + inst.deescForm + ')' : '') + '\nDate/time: ' + new Date().toLocaleDateString('en-PH', { year: 'numeric', month: 'short', day: 'numeric' }) + ', started ' + time(run.start) +
        '\nBehavior observed: ' + (b.join(', ') || 'none ticked') + '\nInterventions:\n' + steps.join('\n') + '\nRemarks: ' + out +
        (run.outcome === 'failed' ? '\nReferred to NOD for further intervention.' : '') + '\nPOD notified: ____\nStaff: ____';
    };

    const head = () => '<div class="breadcrumb"><a href="#/psych">Psychiatry</a> / <a href="#/psych/s/deescalation">De-escalation</a> / Checklist</div>' +
      '<h1>De-escalation checklist</h1>' +
      (inst.name ? '<p class="dz-inst"><b>' + esc(inst.name) + '</b><br><span class="muted small">' + esc(inst.address || '') + ' · Form ' + esc(inst.deescForm || '') + '</span></p>' : '') +
      '<div class="seg dz-tabs" role="tablist" aria-label="De-escalation views">' + [['check', 'Checklist'], ['drill', 'Rapid drill'], ['after', 'If it fails'], ['practice', 'Practice']].map(([k, t]) => '<button role="tab" data-tab="' + k + '" aria-selected="' + (tab === k) + '" class="' + (tab === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div>';

    const views = {
      check: () => {
        const doneN = run.done.size;
        return '<p class="muted">Work through the steps with an agitated patient. Each step has Tagalog phrases you can say or play aloud. Nothing here is saved, and no patient details are needed.</p>' +
          '<div class="notice" style="margin-bottom:14px"><b>Safety first.</b> Keep two arms\' length, an open exit, and other staff nearby. If de-escalation fails, the NAOD refers to the NOD. <b>Notify the POD at all times.</b></div>' +
          '<div class="card stack"><div class="spread"><h2 style="margin:0">1. Behavior observed</h2><span class="muted small">Tap all that apply</span></div><div class="dz-beh">' +
          D.behaviors.map((b, i) => '<button class="dz-chip' + (run.behaviors.has(i) ? ' on' : '') + '" data-b="' + i + '" aria-pressed="' + run.behaviors.has(i) + '"><b>' + esc(b.en) + '</b><span class="tl">' + esc(b.tl) + '</span></button>').join('') + '</div>' +
          (run.behaviors.has(D.behaviors.length - 1) ? '<input class="input" id="dzOther" placeholder="Specify (e.g., lifting the bed)" value="' + esc(run.other) + '">' : '') + '</div>' +
          '<div class="spread" style="margin:18px 0 8px"><h2 style="margin:0">2. Steps</h2><span class="pill ' + (doneN === D.steps.length ? 'good' : '') + '">' + doneN + ' / ' + D.steps.length + ' done</span></div>' +
          '<div class="progress" style="margin-bottom:10px"><i style="width:' + Math.round((100 * doneN) / D.steps.length) + '%"></i></div><div class="stack">' +
          D.steps.map((s, i) => '<div class="card dz-step' + (run.done.has(i) ? ' done' : '') + '"><div class="dz-head"><button class="dz-box" data-s="' + i + '" aria-pressed="' + run.done.has(i) + '" aria-label="Mark step ' + (i + 1) + ' done">' + (run.done.has(i) ? icons.check : '') + '</button>' +
            '<div><div class="dz-n">Step ' + (i + 1) + '</div><div class="dz-en">' + esc(s.en) + '</div>' + (s.tip ? '<div class="small muted">' + esc(s.tip) + '</div>' : '') + '</div></div>' +
            '<div class="dz-say">' + s.say.map(ref).filter(Boolean).map(sayLine).join('') + '</div></div>').join('') + '</div>' +
          '<div class="card stack" style="margin-top:18px"><h2 style="margin:0">3. Remarks</h2><div class="seg" role="group" aria-label="Outcome" style="flex-wrap:wrap;display:flex">' +
          D.outcomes.map(([k, t]) => '<button data-out="' + k + '" class="' + (run.outcome === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div>' +
          (run.outcome === 'failed' || run.outcome === 'partial' ? '<div class="dz-esc">' + D.escalation.map(([a, n, d], k) => '<div><b>' + a + '</b> · ' + n + '<div class="small muted">' + d + '</div></div>' + (k < 2 ? '<span aria-hidden="true">↓</span>' : '')).join('') + '</div><p style="margin:0"><a href="#/psych/deesc?tab=after">What happens next: restraint, monitoring, debrief →</a></p>' : '') +
          '<label class="small" for="dzNote">Note for the chart (copy, then paste where you document)</label><textarea class="input" id="dzNote" rows="9" style="font-family:ui-monospace,Menlo,monospace;font-size:.85rem">' + esc(summary()) + '</textarea>' +
          '<div class="row"><button class="btn primary" id="dzCopy">Copy note</button><button class="btn" id="dzReset">Start over</button><a class="btn" href="#/psych/handout?deesc=1">Print blank checklist</a><a class="btn" href="#/psych/handout?deesccard=1">Print pocket card</a></div></div>';
      },
      drill: () => {
        const sets = [['first4', 'Steps 1–4 (first seconds)'], ['all', 'All 12 steps'], ['after', 'If it fails']];
        const set = (drill && drill.set) || 'first4';
        return '<p class="muted">In a real incident there is no time to read. Drill the lines until they come out automatically.</p>' +
          '<div class="card stack"><h2 style="margin:0">Listen and repeat</h2><p class="small muted" style="margin:0">Plays each line in Tagalog, pauses so you can say it after, then plays it again.</p>' +
          '<div class="row"><div class="seg" role="group" aria-label="Lines">' + sets.map(([k, t]) => '<button data-set="' + k + '" class="' + (set === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div></div>' +
          '<div class="row"><button class="btn primary" id="dzLoop">' + icons.sound + ' Play loop</button><button class="btn" id="dzStop">Stop</button><span class="small muted" id="dzLoopStat"></span></div></div>' +
          '<div class="card stack" style="margin-top:14px"><h2 style="margin:0">Quick response</h2><p class="small muted" style="margin:0">You hear and see the situation in English. Say the Tagalog before the timer ends, then check. Misses go to your mistakes deck.</p>' +
          '<div class="row"><label class="small">Time <select class="input" id="dzSecs" style="width:auto"><option value="3">3 seconds</option><option value="5" selected>5 seconds</option><option value="8">8 seconds</option></select></label><button class="btn primary" id="dzQuick">Start 10 prompts</button></div><div id="dzQ"></div></div>';
      },
      after: () => '<p class="muted">When verbal de-escalation is not enough. This is a general guide with Tagalog phrases; your hospital\'s policy and the physician\'s orders decide what is done.</p>' +
        '<div class="dz-esc" style="margin-bottom:14px">' + D.escalation.map(([a, n, d], k) => '<div><b>' + a + '</b> · ' + n + '<div class="small muted">' + d + '</div></div>' + (k < 2 ? '<span aria-hidden="true">↓</span>' : '')).join('') + '</div><div class="stack">' +
        D.after.map((ph, i) => '<div class="card dz-step"><div><div class="dz-n">Phase ' + (i + 1) + ' · ' + esc(ph.who) + '</div><h2 style="margin:2px 0 6px">' + esc(ph.title) + '</h2><ul style="margin:0;padding-left:20px">' + ph.points.map((t) => '<li>' + esc(t) + '</li>').join('') + '</ul></div>' +
          '<div class="dz-say" style="padding-left:0">' + ph.say.map(ref).filter(Boolean).map(sayLine).join('') + '</div></div>').join('') + '</div>',
      practice: () => {
        const c = PSYCH_CASES.find((x) => x.id === 'agitated');
        return '<p class="muted">Rehearse the whole sequence with a simulated patient before you need it.</p><div class="grid">' +
          '<a class="tile" href="#/psych/case/agitated"><span class="eyebrow">Case simulation</span><h3>' + esc(c ? c.title : 'Agitated patient') + '</h3><p>Choose what to say at each step and get feedback tied to the checklist.</p></a>' +
          '<a class="tile" href="#/speak/case-agitated"><span class="eyebrow">Speaking</span><h3>Role-play it aloud</h3><p>The same case as a spoken dialogue with speech scoring.</p></a>' +
          '<a class="tile" href="#/psych/s/deescalation"><span class="eyebrow">Phrases</span><h3>All de-escalation phrases</h3><p>Study, recall, and quiz modes.</p></a>' +
          '<a class="tile" href="#/flash/ps-deescalation"><span class="eyebrow">Flashcards</span><h3>De-escalation deck</h3><p>Spaced repetition for every line.</p></a></div>';
      }
    };

    const draw = () => { stopAll(); el.innerHTML = head() + '<div id="dzBody" style="margin-top:14px">' + views[tab]() + '</div>'; bind(); };
    const keep = (fn) => { const y = window.scrollY; fn(); window.scrollTo(0, y); };
    const stopAll = () => { if (drill) drill.stop = true; if (window.speechSynthesis) speechSynthesis.cancel(); };
    const drillLines = (set) => {
      if (set === 'after') return D.after.flatMap((a) => a.say);
      const steps = set === 'first4' ? D.steps.slice(0, 4) : D.steps;
      return steps.flatMap((s) => s.say);
    };

    const bind = () => {
      el.querySelectorAll('[data-tab]').forEach((b) => (b.onclick = () => { tab = b.dataset.tab; draw(); }));
      const $ = (s) => el.querySelector(s);
      if (tab === 'check') {
        el.querySelectorAll('[data-b]').forEach((b) => (b.onclick = () => { const i = +b.dataset.b; run.behaviors.has(i) ? run.behaviors.delete(i) : run.behaviors.add(i); keep(draw); }));
        el.querySelectorAll('[data-s]').forEach((b) => (b.onclick = () => { const i = +b.dataset.s; run.done.has(i) ? run.done.delete(i) : run.done.add(i); keep(draw); }));
        el.querySelectorAll('[data-out]').forEach((b) => (b.onclick = () => { run.outcome = b.dataset.out; keep(draw); if (run.outcome) App.activity(5); }));
        const o = $('#dzOther'); if (o) o.oninput = () => { run.other = o.value; $('#dzNote').value = summary(); };
        $('#dzCopy').onclick = () => {
          const t = $('#dzNote');
          (navigator.clipboard ? navigator.clipboard.writeText(t.value) : Promise.reject()).then(() => App.toast('Note copied.'), () => { t.select(); App.toast('Text selected. Copy it with your device\'s copy command.'); });
        };
        $('#dzReset').onclick = () => { run.behaviors.clear(); run.done.clear(); run.outcome = ''; run.other = ''; run.start = new Date(); draw(); window.scrollTo(0, 0); };
      }
      if (tab === 'drill') {
        drill = drill || { set: 'first4' };
        el.querySelectorAll('[data-set]').forEach((b) => (b.onclick = () => { drill.set = b.dataset.set; el.querySelectorAll('[data-set]').forEach((x) => x.classList.toggle('on', x === b)); }));
        $('#dzLoop').onclick = async () => {
          stopAll(); const me = (drill = { set: drill.set, stop: false });
          const lines = drillLines(me.set).map(ref).filter(Boolean);
          for (let round = 0; round < 3 && !me.stop; round++) {
            for (let i = 0; i < lines.length && !me.stop; i++) {
              const stat = el.querySelector('#dzLoopStat'); if (!stat) return;
              stat.textContent = 'Round ' + (round + 1) + ' of 3 · line ' + (i + 1) + ' of ' + lines.length + ': ' + lines[i].en;
              await speakWait(main(lines[i])); if (me.stop) break;
              await wait(Math.max(2200, main(lines[i]).length * 70)); if (me.stop) break; // your turn to repeat
              await speakWait(main(lines[i])); await wait(700);
            }
          }
          const stat = el.querySelector('#dzLoopStat'); if (stat && !me.stop) stat.textContent = 'Done. Three rounds complete.';
          if (!me.stop) App.activity(5);
        };
        $('#dzStop').onclick = () => { stopAll(); const s = $('#dzLoopStat'); if (s) s.textContent = 'Stopped.'; };
        $('#dzQuick').onclick = async () => {
          stopAll(); const me = (drill = { set: drill.set, stop: false });
          const secs = +$('#dzSecs').value;
          const refs = shuffle(drillLines(me.set)).slice(0, 10);
          const box = $('#dzQ'); let hit = 0;
          for (let i = 0; i < refs.length && !me.stop; i++) {
            const p = ref(refs[i]); if (!p) continue;
            box.innerHTML = '<div class="dz-q"><div class="eyebrow">Prompt ' + (i + 1) + ' of ' + refs.length + '</div><div class="dz-cue">' + esc(p.en) + '</div><div class="dz-timer"><i style="animation-duration:' + secs + 's"></i></div><div class="small muted">Say it in Tagalog now.</div></div>';
            await speakWait(p.en, 'en'); if (me.stop) return;
            await wait(secs * 1000); if (me.stop) return;
            const result = await new Promise((res) => {
              box.innerHTML = '<div class="dz-q"><div class="eyebrow">Prompt ' + (i + 1) + ' of ' + refs.length + '</div><div class="dz-cue">' + esc(p.en) + '</div>' + sayLine(p) +
                '<div class="row"><button class="btn" data-r="0">Missed it</button><button class="btn primary" data-r="1">Got it</button></div></div>';
              speakWait(main(p));
              box.querySelectorAll('[data-r]').forEach((b) => (b.onclick = () => res(+b.dataset.r)));
            });
            if (result) hit++;
            App.recordAnswer(!!result, 'p:' + refs[i]);
          }
          if (!me.stop) box.innerHTML = '<div class="feedback ' + (hit >= 8 ? 'ok' : hit >= 5 ? 'mid' : 'no') + '"><b>' + hit + ' / ' + refs.length + '</b> said in time. ' + (hit < refs.length ? 'Missed lines are in <a href="#/flash/mistakes">My mistakes</a>.' : 'Handa ka na!') + '</div>';
        };
      }
    };
    App.onLeave = stopAll;
    draw();
  };
})();
