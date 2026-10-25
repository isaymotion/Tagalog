/* Interactive de-escalation checklist (bedside use and practice).
   Nothing entered here is saved: no patient details are asked for or stored. */
(function () {
  const { esc, icons } = App;
  const V = App.views;
  const S = () => App.state;
  const ref = (r) => { const [sid, i] = r.split(':'); const s = PSYCH_SECTIONS.find((x) => x.id === sid); return s && s.phrases[+i]; };
  const main = (p) => (S().settings.register === 'c' ? p.c || p.f : p.f);
  const alt = (p) => (S().settings.register === 'c' ? p.f : p.c);

  V.deesc = (el) => {
    const D = PSYCH_DEESC;
    const run = { behaviors: new Set(), other: '', done: new Set(), outcome: '', start: new Date() };
    const time = (d) => d.toLocaleTimeString('en-PH', { hour: 'numeric', minute: '2-digit' });
    const summary = () => {
      const b = D.behaviors.filter((_, i) => run.behaviors.has(i)).map((x, k) => (x.en.startsWith('Others') ? 'Others: ' + (run.other || 'unspecified') : x.en));
      const steps = D.steps.map((s, i) => (run.done.has(i) ? '[x] ' : '[ ] ') + (i + 1) + '. ' + s.en.split('. ')[0].replace(/\.$/, ''));
      const out = (D.outcomes.find((o) => o[0] === run.outcome) || ['', 'Not recorded'])[1];
      return 'DE-ESCALATION NOTE\nDate/time: ' + new Date().toLocaleDateString('en-PH', { year: 'numeric', month: 'short', day: 'numeric' }) + ', started ' + time(run.start) +
        '\nBehavior observed: ' + (b.join(', ') || 'none ticked') + '\nInterventions:\n' + steps.join('\n') + '\nRemarks: ' + out +
        (run.outcome === 'failed' ? '\nReferred to NOD for further intervention.' : '') + '\nPOD notified: ____\nStaff: ____';
    };
    const draw = () => {
      const doneN = run.done.size;
      el.innerHTML = '<div class="breadcrumb"><a href="#/psych">Psychiatry</a> / <a href="#/psych/s/deescalation">De-escalation</a> / Checklist</div>' +
        '<h1>De-escalation checklist</h1><p class="muted">Work through the steps with an agitated patient. Each step has Tagalog phrases you can say or play aloud. Nothing here is saved, and no patient details are needed.</p>' +
        '<div class="notice" style="margin-bottom:14px"><b>Safety first.</b> Keep two arms\' length, an open exit, and other staff nearby. If de-escalation fails, the NAOD refers to the NOD. <b>Notify the POD at all times.</b></div>' +
        '<div class="card stack"><div class="spread"><h2 style="margin:0">1. Behavior observed</h2><span class="muted small">Tap all that apply</span></div><div class="dz-beh">' +
        D.behaviors.map((b, i) => '<button class="dz-chip' + (run.behaviors.has(i) ? ' on' : '') + '" data-b="' + i + '" aria-pressed="' + run.behaviors.has(i) + '"><b>' + esc(b.en) + '</b><span class="tl">' + esc(b.tl) + '</span></button>').join('') + '</div>' +
        (run.behaviors.has(D.behaviors.length - 1) ? '<input class="input" id="dzOther" placeholder="Specify (e.g., lifting the bed)" value="' + esc(run.other) + '">' : '') + '</div>' +
        '<div class="spread" style="margin:18px 0 8px"><h2 style="margin:0">2. Steps</h2><span class="pill ' + (doneN === D.steps.length ? 'good' : '') + '">' + doneN + ' / ' + D.steps.length + ' done</span></div>' +
        '<div class="progress" style="margin-bottom:10px"><i style="width:' + Math.round((100 * doneN) / D.steps.length) + '%"></i></div><div class="stack">' +
        D.steps.map((s, i) => '<div class="card dz-step' + (run.done.has(i) ? ' done' : '') + '"><div class="dz-head"><button class="dz-box" data-s="' + i + '" aria-pressed="' + run.done.has(i) + '" aria-label="Mark step ' + (i + 1) + ' done">' + (run.done.has(i) ? icons.check : '') + '</button>' +
          '<div><div class="dz-n">Step ' + (i + 1) + '</div><div class="dz-en">' + esc(s.en) + '</div>' + (s.tip ? '<div class="small muted">' + esc(s.tip) + '</div>' : '') + '</div></div>' +
          '<div class="dz-say">' + s.say.map(ref).filter(Boolean).map((p) => '<div class="dz-line"><div><div class="tl dz-tl">' + esc(main(p)) + '</div>' + (alt(p) && alt(p) !== main(p) ? '<div class="tl small muted">' + esc(alt(p)) + '</div>' : '') + '<div class="small muted">' + esc(p.en) + '</div></div>' + App.sayBtn(main(p)) + '</div>').join('') + '</div></div>').join('') + '</div>' +
        '<div class="card stack" style="margin-top:18px"><h2 style="margin:0">3. Remarks</h2><div class="seg" role="group" aria-label="Outcome" style="flex-wrap:wrap;display:flex">' +
        D.outcomes.map(([k, t]) => '<button data-out="' + k + '" class="' + (run.outcome === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div>' +
        (run.outcome === 'failed' || run.outcome === 'partial' ? '<div class="dz-esc">' + D.escalation.map(([a, n, d], k) => '<div><b>' + a + '</b> · ' + n + '<div class="small muted">' + d + '</div></div>' + (k < 2 ? '<span aria-hidden="true">↓</span>' : '')).join('') + '</div>' : '') +
        '<label class="small" for="dzNote">Note for the chart (copy, then paste where you document)</label><textarea class="input" id="dzNote" rows="9" style="font-family:ui-monospace,Menlo,monospace;font-size:.85rem">' + esc(summary()) + '</textarea>' +
        '<div class="row"><button class="btn primary" id="dzCopy">Copy note</button><button class="btn" id="dzReset">Start over</button><a class="btn" href="#/psych/handout?deesc=1">Print blank checklist</a></div></div>';
      bind();
    };
    const bind = () => {
      el.querySelectorAll('[data-b]').forEach((b) => (b.onclick = () => { const i = +b.dataset.b; run.behaviors.has(i) ? run.behaviors.delete(i) : run.behaviors.add(i); keep(draw); }));
      el.querySelectorAll('[data-s]').forEach((b) => (b.onclick = () => { const i = +b.dataset.s; run.done.has(i) ? run.done.delete(i) : run.done.add(i); keep(draw); }));
      el.querySelectorAll('[data-out]').forEach((b) => (b.onclick = () => { run.outcome = b.dataset.out; keep(draw); if (run.outcome) App.activity(5); }));
      const o = el.querySelector('#dzOther'); if (o) o.oninput = () => { run.other = o.value; el.querySelector('#dzNote').value = summary(); };
      el.querySelector('#dzCopy').onclick = () => {
        const t = el.querySelector('#dzNote');
        (navigator.clipboard ? navigator.clipboard.writeText(t.value) : Promise.reject()).then(() => App.toast('Note copied.'), () => { t.select(); App.toast('Select-all done. Copy with your device\'s copy command.'); });
      };
      el.querySelector('#dzReset').onclick = () => { run.behaviors.clear(); run.done.clear(); run.outcome = ''; run.other = ''; run.start = new Date(); draw(); window.scrollTo(0, 0); };
    };
    // Redraw without losing the scroll position.
    const keep = (fn) => { const y = window.scrollY; fn(); window.scrollTo(0, y); };
    draw();
  };
})();
