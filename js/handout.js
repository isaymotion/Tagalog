/* Printable handout generator for the psychiatry track.
   Builds one content model from the options, then renders it two ways:
   an on-screen preview (also used for printing) and a real PDF via pdfmake (loaded on demand, works offline). */
(function () {
  const { esc, icons } = App;
  const V = App.views;
  const S = () => App.state;

  const ALL_STEPS = () => PSYCH_FLOW.concat(PSYCH_FLOW_EXTRA);
  const PRESETS = {
    full: { label: 'Full interview + MSE', desc: 'The whole interview in order, key phrases, MSE table, and idioms.', o: { steps: PSYCH_FLOW.map((s) => s.id), depth: 'key', overview: true, mse: true, idioms: true, form: false, deescList: false, deescCard: false, deescAfter: false, dischargeGuide: false, paper: 'A4', size: 'normal' } },
    mse: { label: 'MSE only', desc: 'All MSE prompts, observation vocabulary, and a blank write-up form.', o: { steps: ['mse'], depth: 'all', overview: false, mse: true, idioms: false, form: true, deescList: false, deescCard: false, deescAfter: false, dischargeGuide: false, paper: 'A4', size: 'normal' } },
    risk: { label: 'Risk assessment', desc: 'Suicide, violence, and de-escalation phrases, plus the de-escalation checklist.', o: { steps: ['suicide', 'violence', 'deesc'], depth: 'all', overview: false, mse: false, idioms: false, form: false, deescList: true, deescCard: false, deescAfter: true, dischargeGuide: false, paper: 'A4', size: 'normal' } },
    pocket: { label: 'Pocket booklet', desc: 'A5 pages, small type, key phrases only. Fold or staple for the white coat.', o: { steps: PSYCH_FLOW.map((s) => s.id), depth: 'key', overview: true, mse: true, idioms: false, form: false, deescList: false, deescCard: false, deescAfter: false, dischargeGuide: false, paper: 'A5', size: 'small', notes: false } },
    discharge: { label: 'Discharge summary guide', desc: 'Each field of the discharge summary form with what to assess, Tagalog questions, and wording to document.', o: { steps: [], depth: 'key', overview: false, mse: false, idioms: false, form: false, deescList: false, deescAfter: false, deescCard: false, dischargeGuide: true, paper: 'A4', size: 'normal' } },
    deesccard: { label: 'De-escalation pocket card', desc: 'Two A6 sides: the 12 steps with one Tagalog line each, plus what to do if it fails. Print double-sided and laminate.', o: { steps: [], depth: 'key', overview: false, mse: false, idioms: false, form: false, deescList: false, deescAfter: false, dischargeGuide: false, deescCard: true, paper: 'A6', size: 'small' } },
    everything: { label: 'Complete reference', desc: 'Every section and every phrase, including special populations and the de-escalation checklist.', o: { steps: ALL_STEPS().map((s) => s.id), depth: 'all', overview: true, mse: true, idioms: true, form: true, deescList: true, deescCard: false, deescAfter: true, dischargeGuide: true, paper: 'A4', size: 'normal' } }
  };
  const CARD_LABELS = ['Keep two arms\' length', 'Approach calmly', 'Introduce, orient, reassure', 'Short, simple words', 'Let them talk', 'Listen and reflect', 'Agree, or agree to disagree', 'Set clear limits', 'Reassure: we\'ll help you', 'Coach to stay in control', 'Offer choices', 'Offer medication'];
  const INST = () => (window.APP_META && APP_META.institution) || {};
  const DEFAULTS = { preset: 'full', english: 'show', register: 'f', notes: true, answers: false, title: 'Psychiatric Interview in Tagalog', preparedFor: '' };

  function opts() {
    const saved = S().settings.handout || {};
    const base = Object.assign({}, DEFAULTS, PRESETS.full.o, { notes: true });
    return Object.assign(base, saved);
  }
  function saveOpts(o) { S().settings.handout = o; App.save(); }

  /* ---------- Content model ---------- */
  function ref(r) {
    const [sid, i] = r.split(':');
    const s = PSYCH_SECTIONS.find((x) => x.id === sid);
    return s && s.phrases[+i];
  }
  function phraseModel(p, o) {
    const main = o.register === 'c' ? p.c || p.f : p.f;
    const alt = o.register === 'both' && p.c && p.c !== p.f ? p.c : '';
    return { tl: main, alt, en: p.en, note: o.notes ? p.n || '' : '', answers: o.answers ? p.answers || [] : [] };
  }
  function idiomRows() {
    const l = (window.LESSONS || []).find((x) => x.id === 'idioms-distress');
    if (!l) return [];
    const doc = new DOMParser().parseFromString(l.body, 'text/html');
    return [...doc.querySelectorAll('tr')].slice(1).map((tr) => [...tr.children].map((td) => td.textContent.trim()));
  }
  function build(o) {
    const steps = ALL_STEPS().filter((s) => o.steps.includes(s.id));
    const flowOrder = PSYCH_FLOW.filter((s) => o.steps.includes(s.id));
    const key = [];
    let n = 0;
    const body = steps.map((st) => {
      n++;
      const refs = o.depth === 'key' ? st.key : st.sections.flatMap((sid) => PSYCH_SECTIONS.find((x) => x.id === sid).phrases.map((_, i) => sid + ':' + i));
      const phrases = refs.map(ref).filter(Boolean).map((p, k) => { const m = phraseModel(p, o); m.num = n + '.' + (k + 1); key.push([m.num, m.en]); return m; });
      return { n, id: st.id, title: st.title, goal: st.goal, tip: o.notes ? st.tip || '' : '', branch: st.branch || '', phrases };
    });
    const mse = o.mse ? PSYCH_MSE.map((d) => ({
      domain: d.domain, assess: d.assess, note: o.notes ? d.note || '' : '',
      ask: d.ask.map(ref).filter(Boolean).map((p) => phraseModel(p, o)),
      terms: d.terms.map(ref).filter(Boolean).map((p) => ({ en: p.en, tl: o.register === 'c' ? p.c || p.f : p.f }))
    })) : null;
    return {
      title: o.title || DEFAULTS.title, preparedFor: o.preparedFor, date: new Date().toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' }),
      overview: o.overview ? (flowOrder.length ? flowOrder : steps).map((s) => ({ n: body.find((b) => b.id === s.id).n, title: s.title, goal: s.goal, branch: s.branch || '' })) : null,
      body, mse, idioms: o.idioms ? idiomRows() : null, form: o.form, deesc: o.deescList && window.PSYCH_DEESC ? {
        behaviors: PSYCH_DEESC.behaviors, escalation: PSYCH_DEESC.escalation,
        steps: PSYCH_DEESC.steps.map((st, i) => ({ n: i + 1, en: st.en, tip: o.notes ? st.tip : '', say: st.say.map(ref).filter(Boolean).map((p) => phraseModel(p, o)) }))
      } : null,
      discharge: o.dischargeGuide && window.PSYCH_DISCHARGE ? PSYCH_DISCHARGE.fields.filter((f) => f.kind !== 'sign').map((f) => ({ label: f.label, group: f.group, assess: o.notes ? f.assess : '', ask: f.refs.map(ref).filter(Boolean).map((p) => phraseModel(p, o)), picks: f.picks })) : null,
      deescAfter: o.deescAfter && window.PSYCH_DEESC ? PSYCH_DEESC.after.map((a) => ({ title: a.title, who: a.who, points: a.points, say: a.say.map(ref).filter(Boolean).map((p) => phraseModel(p, o)) })) : null,
      card: o.deescCard && window.PSYCH_DEESC ? {
        steps: PSYCH_DEESC.steps.map((st, i) => ({ n: i + 1, label: CARD_LABELS[i], say: phraseModel(ref(st.say[0]), o) })),
        behaviors: PSYCH_DEESC.behaviors.map((b) => b.en.replace(/ \(specify\).*$/, '')), escalation: PSYCH_DEESC.escalation,
        debrief: ['deescalation:36', 'deescalation:38'].map(ref).filter(Boolean).map((p) => phraseModel(p, o))
      } : null,
      key: o.english === 'key' ? key : null, o
    };
  }

  /* ---------- Pocket card (A6, two sides) ---------- */
  function cardHTML(m) {
    const c = m.card, showEn = m.o.english === 'show';
    const line = (st) => '<div class="hc-step"><span class="hc-n">' + st.n + '</span><div><b>' + esc(st.label) + '</b><div class="hc-tl">' + esc(st.say.tl) + '</div>' + (showEn ? '<div class="hc-en">' + esc(st.say.en) + '</div>' : '') + '</div></div>';
    const top = '<div class="hc-top"><b>DE-ESCALATION</b><span>' + esc(INST().short || '') + (INST().deescForm ? ' · ' + esc(INST().deescForm) : '') + '</span></div>';
    return '<div class="hc-wrap"><div class="hc-card">' + top + '<div class="hc-sub">Watch for: ' + esc(c.behaviors.join(', ')) + '</div>' + c.steps.slice(0, 6).map(line).join('') + '</div>' +
      '<div class="hc-card">' + top + c.steps.slice(6).map(line).join('') + '<div class="hc-esc"><b>If it fails:</b> NAOD → NOD. <b>Notify POD at all times.</b></div>' +
      '<div class="hc-sub"><b>Debrief later:</b> ' + c.debrief.map((p) => esc(p.tl) + (showEn ? ' (' + esc(p.en) + ')' : '')).join(' · ') + '</div><div class="hc-foot">NCMH Crisis Hotline 1553 · Usap Tayo</div></div></div>';
  }
  function cardDoc(m, logo) {
    const c = m.card, showEn = m.o.english === 'show';
    const fs = 9;
    const top = { columns: [{ text: 'DE-ESCALATION', bold: true, color: '#ffffff', fontSize: 9 }, { text: (INST().short || '') + (INST().deescForm ? ' · ' + INST().deescForm : ''), color: '#ffffff', fontSize: 6, alignment: 'right', margin: [0, 2, 0, 0] }] };
    const banner = { table: { widths: ['*'], body: [[Object.assign({ fillColor: NAVY }, { stack: [top] })]] }, layout: { hLineWidth: () => 0, vLineWidth: () => 0, paddingTop: () => 4, paddingBottom: () => 4, paddingLeft: () => 6, paddingRight: () => 6 }, margin: [0, 0, 0, 5] };
    const step = (st) => ({ table: { widths: [12, '*'], body: [[{ text: String(st.n), bold: true, color: NAVY, fillColor: GOLD, alignment: 'center', fontSize: fs + 0.5 },
      { stack: [{ text: st.label, bold: true, fontSize: fs }, { text: st.say.tl, color: NAVY, fontSize: fs + 0.6 }].concat(showEn ? [{ text: st.say.en, color: MUTED, fontSize: fs - 1.2 }] : []) }]] },
      layout: { hLineWidth: () => 0, vLineWidth: () => 0, paddingTop: () => 2, paddingBottom: () => 2, paddingLeft: () => 4, paddingRight: () => 2 }, margin: [0, 0, 0, 3], unbreakable: true });
    const content = [JSON.parse(JSON.stringify(banner)), { text: 'Watch for: ' + c.behaviors.join(', '), fontSize: fs - 1, color: MUTED, margin: [0, 0, 0, 5] }].concat(c.steps.slice(0, 6).map(step));
    const b2 = JSON.parse(JSON.stringify(banner)); b2.pageBreak = 'before';
    content.push(b2);
    content.push.apply(content, c.steps.slice(6).map(step));
    content.push({ table: { widths: ['*'], body: [[{ text: [{ text: 'If it fails: ', bold: true }, 'NAOD » NOD for further intervention. ', { text: 'Notify POD at all times.', bold: true }], fillColor: '#fdf1dc', fontSize: fs }]] }, layout: { hLineWidth: () => 0, vLineWidth: () => 0, paddingTop: () => 3, paddingBottom: () => 3, paddingLeft: () => 5 }, margin: [0, 2, 0, 4] });
    content.push({ text: [{ text: 'Debrief later: ', bold: true }].concat(c.debrief.map((p, i) => ({ text: (i ? ' · ' : '') + p.tl + (showEn ? ' (' + p.en + ')' : '') }))), fontSize: fs - 0.6, color: '#333a52' });
    [content[0], b2].forEach((b) => { b.layout = banner.layout; });
    return {
      pageSize: 'A6', pageMargins: [14, 14, 14, 18],
      info: { title: m.title, author: APP_META.author, subject: 'De-escalation pocket card', creator: 'Usap Tayo ' + APP_META.version },
      content: fixGlyphs(content),
      footer: (cur, total) => ({ text: (cur === 1 ? 'Front' : 'Back') + ' · NCMH Crisis Hotline 1553 · ' + APP_META.attribution, fontSize: 4.6, color: MUTED, margin: [14, 4, 14, 0] }),
      defaultStyle: { font: 'Roboto', fontSize: fs, lineHeight: 1.1 }
    };
  }

  /* ---------- HTML preview ---------- */
  function renderHTML(m) {
    const o = m.o, showEn = o.english === 'show', numbered = o.english === 'key';
    const ph = (p) => '<div class="ho-ph' + (showEn ? '' : ' one') + '">' + (numbered ? '<span class="ho-num">' + p.num + '</span>' : '') +
      '<div class="ho-tl"><b>' + esc(p.tl) + '</b>' + (p.alt ? '<i>' + esc(p.alt) + '</i>' : '') + (p.note ? '<small>' + esc(p.note) + '</small>' : '') +
      (p.answers.length ? '<small class="ho-ans">Patient may say: ' + p.answers.map((a) => esc(a[0]) + (showEn ? ' (' + esc(a[1]) + ')' : '')).join(' · ') + '</small>' : '') + '</div>' +
      (showEn ? '<div class="ho-en">' + esc(p.en) + '</div>' : '') + '</div>';
    if (m.card) return cardHTML(m);
    let h = '<header class="ho-head"><img src="icons/logo-96.png" alt=""><div><h1>' + esc(m.title) + '</h1><p>' + (m.preparedFor ? 'Prepared for ' + esc(m.preparedFor) + ' · ' : '') + esc(m.date) +
      ' · Respectful form' + (o.register === 'c' ? ' replaced by everyday form' : o.register === 'both' ? ' with everyday form in italics' : '') + '</p></div></header>';
    if (m.overview) {
      h += '<section class="ho-sec"><h2>Interview flow</h2><ol class="ho-flow">' + m.overview.map((s) => '<li><span class="ho-n">' + s.n + '</span><div><b>' + esc(s.title) + '</b><small>' + esc(s.goal) + '</small>' + (s.branch ? '<em>→ ' + esc(s.branch) + '</em>' : '') + '</div></li>').join('') + '</ol></section>';
    }
    m.body.forEach((st) => {
      h += '<section class="ho-sec"><h2><span class="ho-n">' + st.n + '</span>' + esc(st.title) + '</h2><p class="ho-goal">' + esc(st.goal) + '</p>' +
        (st.tip ? '<p class="ho-tip">' + esc(st.tip) + '</p>' : '') + (st.branch ? '<p class="ho-branch">→ ' + esc(st.branch) + '</p>' : '') + st.phrases.map(ph).join('') + '</section>';
    });
    if (m.mse) {
      h += '<section class="ho-sec"><h2>Mental status exam</h2><div class="ho-tw"><table class="ho-mse"><tr><th>Domain</th><th>Assess</th><th>Ask</th><th>Describe (family\'s words)</th></tr>' +
        m.mse.map((d) => '<tr><td><b>' + esc(d.domain) + '</b></td><td>' + esc(d.assess) + (d.note ? '<small>' + esc(d.note) + '</small>' : '') + '</td><td>' +
          (d.ask.map((p) => '<div><b>' + esc(p.tl) + '</b>' + (showEn ? '<small>' + esc(p.en) + '</small>' : '') + '</div>').join('') || '<span class="ho-muted">Observe</span>') + '</td><td>' +
          d.terms.map((t) => '<div>' + (showEn ? esc(t.en) + ': ' : '') + '<i>' + esc(t.tl) + '</i></div>').join('') + '</td></tr>').join('') + '</table></div></section>';
    }
    if (m.idioms && m.idioms.length) {
      h += '<section class="ho-sec"><h2>Idioms of distress</h2><div class="ho-tw"><table><tr><th>Patient says</th>' + (showEn ? '<th>Literally</th>' : '') + '<th>May indicate</th></tr>' +
        m.idioms.map((r) => '<tr><td><b>' + esc(r[0]) + '</b></td>' + (showEn ? '<td>' + esc(r[1]) + '</td>' : '') + '<td>' + esc(r[2]) + '</td></tr>').join('') + '</table></div></section>';
    }
    if (m.deesc) {
      const d = m.deesc;
      h += '<section class="ho-sec">' + (INST().name ? '<div class="ho-inst"><b>' + esc(INST().name.toUpperCase()) + '</b><br>' + esc(INST().address) + '</div>' : '') + '<h2>De-escalation checklist</h2><p class="ho-goal">Patient: ____________________ Age: _____ Sex: _____ Ward: ________</p>' +
        '<p class="ho-goal"><b>Tick the behavior presented by the patient.</b></p><div class="ho-beh">' + d.behaviors.map((b) => '<div><span class="ho-box"></span><b>' + esc(b.en) + '</b>' + (showEn ? '' : '') + '<small>' + esc(b.tl) + '</small></div>').join('') + '</div>' +
        '<div class="ho-steps">' + d.steps.map((st) => '<div class="ho-step"><span class="ho-box"></span><div><b>' + st.n + '. ' + esc(st.en) + '</b>' + (st.tip ? '<small>' + esc(st.tip) + '</small>' : '') +
          st.say.map((p) => '<div class="ho-say"><b>' + esc(p.tl) + '</b>' + (p.alt ? ' <i>' + esc(p.alt) + '</i>' : '') + (showEn ? '<span> ' + esc(p.en) + '</span>' : '') + '</div>').join('') + '</div></div>').join('') + '</div>' +
        '<p class="ho-branch">If de-escalation fails, NAOD refers to NOD for further intervention. Notify POD at all times. (' + d.escalation.map((e) => e[0] + ' = ' + e[1]).join('; ') + ')</p>' +
        '<p class="ho-goal">Remarks: ☐ Successful ☐ Partly successful ☐ Not successful, escalated ________________________</p><p class="ho-goal">NAOD: ______________ NOD: ______________ POD notified: ☐ Date/shift/time: ______________</p>' + (INST().deescForm ? '<p class="ho-form-no">' + esc(INST().deescForm) + '</p>' : '') + '</section>';
    }
    if (m.discharge) {
      h += '<section class="ho-sec">' + (INST().name ? '<div class="ho-inst"><b>' + esc(INST().name.toUpperCase()) + '</b><br>' + esc(INST().address) + '</div>' : '') + '<h2>Discharge summary: interview guide</h2>' +
        m.discharge.map((f) => '<div class="ho-step" style="grid-template-columns:minmax(0,1fr)"><div><b>' + esc(f.label) + '</b> <span class="ho-muted">(' + esc(f.group) + ')</span>' + (f.assess ? '<small>' + esc(f.assess) + '</small>' : '') +
          f.ask.map((p) => '<div class="ho-say"><b>' + esc(p.tl) + '</b>' + (p.alt ? ' <i>' + esc(p.alt) + '</i>' : '') + (showEn ? '<span> ' + esc(p.en) + '</span>' : '') + '</div>').join('') +
          (f.picks.length ? '<small><b>Document as:</b> ' + f.picks.map(esc).join(' · ') + '</small>' : '') + '</div></div>').join('') +
        (INST().dischargeForm ? '<p class="ho-form-no">Guide for form ' + esc(INST().dischargeForm) + '</p>' : '') + '</section>';
    }
    if (m.deescAfter) {
      h += '<section class="ho-sec"><h2>If de-escalation fails</h2><p class="ho-goal">General guide. Hospital policy and physician orders decide what is done.</p>' + m.deescAfter.map((a, i) => '<div class="ho-step" style="grid-template-columns:minmax(0,1fr)"><div><b>' + (i + 1) + '. ' + esc(a.title) + '</b> <span class="ho-muted">(' + esc(a.who) + ')</span>' +
        a.points.map((t) => '<small>• ' + esc(t) + '</small>').join('') + a.say.map((p) => '<div class="ho-say"><b>' + esc(p.tl) + '</b>' + (p.alt ? ' <i>' + esc(p.alt) + '</i>' : '') + (showEn ? '<span> ' + esc(p.en) + '</span>' : '') + '</div>').join('') + '</div></div>').join('') + '</section>';
    }
    if (m.form) {
      h += '<section class="ho-sec"><h2>MSE write-up</h2><p class="ho-goal">Patient: ____________________ Date: __________ Language used: __________</p><div class="ho-tw"><table class="ho-form">' +
        PSYCH_MSE.map((d) => '<tr><td><b>' + esc(d.domain) + '</b></td><td></td></tr>').join('') + '<tr><td><b>Risk</b></td><td></td></tr></table></div></section>';
    }
    if (m.key) {
      h += '<section class="ho-sec"><h2>English key</h2><div class="ho-key">' + m.key.map(([k, e]) => '<div><span class="ho-num">' + k + '</span>' + esc(e) + '</div>').join('') + '</div></section>';
    }
    h += '<footer class="ho-foot">' + esc(APP_META.attribution) + ' · Practice phrasings for training, not validated instrument translations. · NCMH Crisis Hotline 1553</footer>';
    return h;
  }

  /* ---------- PDF (pdfmake) ---------- */
  let pdfReady = null;
  function loadPdfMake() {
    if (window.pdfMake && window.pdfMake.vfs) return Promise.resolve();
    if (pdfReady) return pdfReady;
    const add = (src) => new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = () => rej(new Error('Could not load ' + src)); document.head.appendChild(s); });
    pdfReady = add('js/vendor/pdfmake.min.js').then(() => add('js/vendor/vfs_fonts.js'));
    pdfReady.catch(() => (pdfReady = null));
    return pdfReady;
  }
  function logoDataURL() {
    return new Promise((res) => {
      const img = new Image();
      img.onload = () => { try { const c = document.createElement('canvas'); c.width = c.height = 96; c.getContext('2d').drawImage(img, 0, 0, 96, 96); res(c.toDataURL('image/png')); } catch (e) { res(null); } };
      img.onerror = () => res(null);
      img.src = 'icons/logo-96.png';
    });
  }
  // Replace characters missing from the PDF font, walking the tree in place so layout functions survive.
  function fixGlyphs(node) {
    if (Array.isArray(node)) { node.forEach((x, i) => { if (typeof x === 'string') node[i] = x.replace(/→/g, '»'); else fixGlyphs(x); }); }
    else if (node && typeof node === 'object') Object.keys(node).forEach((k) => { const v = node[k]; if (k === 'text' && typeof v === 'string') node[k] = v.replace(/→/g, '»'); else if (k !== 'image' && typeof v === 'object') fixGlyphs(v); });
    return node;
  }
  const NAVY = '#1e3265', GOLD = '#e3b53f', MUTED = '#5b6480', LINE = '#d9deea', TINT = '#eef1f8';
  function docDef(m, logo) {
    if (m.card) return cardDoc(m, logo);
    const o = m.o, showEn = o.english === 'show', numbered = o.english === 'key';
    const base = { small: 8.5, normal: 10, large: 12 }[o.size] || 10;
    const a5 = o.paper === 'A5';
    const content = [];
    // Header
    const titleStack = { stack: [{ text: m.title, style: 'h1' }, { text: (m.preparedFor ? 'Prepared for ' + m.preparedFor + ' · ' : '') + m.date, style: 'meta' }] };
    content.push(logo ? { columns: [{ image: logo, width: a5 ? 30 : 40 }, Object.assign(titleStack, { width: '*', margin: [8, a5 ? 0 : 3, 0, 0] })], margin: [0, 0, 0, 10] } : Object.assign(titleStack, { margin: [0, 0, 0, 10] }));
    const phraseRow = (p) => {
      const tl = [{ text: p.tl, bold: true }];
      if (p.alt) tl.push({ text: '\n' + p.alt, italics: true, color: MUTED });
      if (p.note) tl.push({ text: '\n' + p.note, fontSize: base - 1.5, color: MUTED });
      if (p.answers.length) tl.push({ text: '\nPatient may say: ' + p.answers.map((a) => a[0] + (showEn ? ' (' + a[1] + ')' : '')).join(' · '), fontSize: base - 1.5, color: MUTED, italics: true });
      const row = [];
      if (numbered) row.push({ text: p.num, color: MUTED, fontSize: base - 1.5 });
      row.push({ text: tl });
      if (showEn) row.push({ text: p.en, color: '#333a52' });
      return row;
    };
    const widths = () => (numbered ? ['auto'] : []).concat(showEn ? ['*', a5 ? '40%' : '42%'] : ['*']);
    const layout = { hLineWidth: (i, node) => (i === 0 || i === node.table.body.length ? 0 : 0.5), vLineWidth: () => 0, hLineColor: () => LINE, paddingTop: () => 3.5, paddingBottom: () => 3.5, paddingLeft: (i) => (i === 0 ? 0 : 6), paddingRight: () => 4 };
    const heading = (n, title) => ({ table: { widths: n != null ? [a5 ? 16 : 20, '*'] : ['*'], body: [(n != null ? [{ text: String(n), color: NAVY, bold: true, fillColor: GOLD, alignment: 'center' }] : []).concat([{ text: title, color: '#ffffff', bold: true, fillColor: NAVY }])] }, layout: { hLineWidth: () => 0, vLineWidth: () => 0, paddingTop: () => 3, paddingBottom: () => 3, paddingLeft: () => 6 }, margin: [0, 10, 0, 4], fontSize: base + 1.5 });

    if (m.overview) {
      content.push({ text: 'Interview flow', style: 'h2' });
      content.push({ table: { widths: [a5 ? 16 : 20, '*'], body: m.overview.map((s) => [
        { text: String(s.n), bold: true, color: NAVY, fillColor: GOLD, alignment: 'center' },
        { text: [{ text: s.title, bold: true }, { text: '\n' + s.goal, color: MUTED, fontSize: base - 1 }].concat(s.branch ? [{ text: '\n» ' + s.branch, color: '#9a5b00', fontSize: base - 1, italics: true }] : []), fillColor: TINT }
      ]) }, layout: { hLineWidth: () => 2, hLineColor: () => '#ffffff', vLineWidth: () => 0, paddingTop: () => 3, paddingBottom: () => 3, paddingLeft: () => 6 }, margin: [0, 0, 0, 6] });
    }
    m.body.forEach((st) => {
      const block = [heading(st.n, st.title), { text: st.goal, color: MUTED, margin: [0, 0, 0, 2] }];
      if (st.tip) block.push({ text: 'Tip: ' + st.tip, fontSize: base - 1, color: NAVY, margin: [0, 0, 0, 2] });
      if (st.branch) block.push({ text: '» ' + st.branch, fontSize: base - 1, color: '#9a5b00', italics: true, margin: [0, 0, 0, 2] });
      block.push({ table: { widths: widths(), dontBreakRows: true, body: st.phrases.map(phraseRow) }, layout });
      content.push({ stack: block });
    });
    if (m.mse) {
      content.push(Object.assign(heading(null, 'Mental status exam'), { pageBreak: a5 ? undefined : 'before' }));
      const head = ['Domain', 'Assess', 'Ask', 'Describe (family\'s words)'].map((t) => ({ text: t, bold: true, color: MUTED, fontSize: base - 1.5 }));
      content.push({ table: { headerRows: 1, dontBreakRows: true, widths: a5 ? [52, 60, '*', 70] : [62, 90, '*', 120], body: [head].concat(m.mse.map((d) => [
        { text: d.domain, bold: true },
        { text: [d.assess].concat(d.note ? [{ text: '\n' + d.note, color: MUTED, italics: true }] : []), fontSize: base - 1.5 },
        d.ask.length ? { stack: d.ask.map((p) => ({ text: [{ text: p.tl, bold: true }].concat(showEn ? [{ text: '\n' + p.en, color: MUTED, fontSize: base - 1.5 }] : []), margin: [0, 0, 0, 3] })) } : { text: 'Observe', color: MUTED, italics: true },
        { stack: d.terms.map((t) => ({ text: (showEn ? t.en + ': ' : '') + t.tl, fontSize: base - 1.5, italics: !showEn, margin: [0, 0, 0, 2] })) }
      ])) }, layout, fontSize: base - 0.5 });
    }
    if (m.idioms && m.idioms.length) {
      content.push(heading(null, 'Idioms of distress'));
      const cols = showEn ? [0, 1, 2] : [0, 2];
      const head = (showEn ? ['Patient says', 'Literally', 'May indicate'] : ['Patient says', 'May indicate']).map((t) => ({ text: t, bold: true, color: MUTED, fontSize: base - 1.5 }));
      content.push({ table: { headerRows: 1, dontBreakRows: true, widths: showEn ? ['32%', '28%', '*'] : ['40%', '*'], body: [head].concat(m.idioms.map((r) => cols.map((c, i) => ({ text: r[c], bold: i === 0 })))) }, layout, fontSize: base - 0.5 });
    }
    if (m.deesc) {
      const d = m.deesc;
      const box = () => ({ width: 10, table: { widths: [6], heights: [6], body: [[{ text: '', fontSize: 1 }]] }, layout: { hLineWidth: () => 0.7, vLineWidth: () => 0.7, hLineColor: () => '#333a52', vLineColor: () => '#333a52', paddingTop: () => 0, paddingBottom: () => 0, paddingLeft: () => 0, paddingRight: () => 0 }, margin: [0, 2, 0, 0] });
      const boxed = (stack) => ({ columns: [box(), { stack, width: '*' }], columnGap: 6, margin: [0, 0, 0, 4] });
      const inline = (t) => ({ columns: [box(), { text: t, width: 'auto' }], columnGap: 4, width: 'auto' });
      if (INST().name) content.push({ stack: [{ text: INST().name.toUpperCase(), bold: true, fontSize: base + 1 }, { text: INST().address, fontSize: base - 1, color: MUTED }], alignment: 'center', margin: [0, 0, 0, 2], pageBreak: m.body.length || m.overview ? 'before' : undefined });
      content.push(Object.assign(heading(null, 'De-escalation checklist'), { pageBreak: !INST().name && (m.body.length || m.overview) ? 'before' : undefined }));
      content.push({ text: 'Patient: ______________________   Age: ______   Sex: ______   Ward: __________', margin: [0, 2, 0, 6] });
      content.push({ text: 'Tick the behavior presented by the patient.', bold: true, margin: [0, 0, 0, 4] });
      const per = Math.ceil(d.behaviors.length / 3);
      content.push({ columns: [0, 1, 2].map((c) => ({ stack: d.behaviors.slice(c * per, (c + 1) * per).map((b) => boxed([{ text: b.en, bold: true, fontSize: base - 0.5 }, { text: b.tl, color: MUTED, fontSize: base - 1.5, italics: true }])) })), columnGap: 10, margin: [0, 0, 0, 6] });
      d.steps.forEach((st) => {
        const stack = [{ text: st.n + '. ' + st.en, bold: true }];
        if (st.tip) stack.push({ text: st.tip, color: MUTED, fontSize: base - 1.5 });
        st.say.forEach((p) => stack.push({ text: [{ text: '“' + p.tl + '”', color: NAVY }].concat(p.alt ? [{ text: '  ' + p.alt, italics: true, color: MUTED }] : []).concat(showEn ? [{ text: '  ' + p.en, color: MUTED, fontSize: base - 1.5 }] : []), margin: [8, 1, 0, 0] }));
        content.push(Object.assign(boxed(stack), { unbreakable: true }));
      });
      content.push({ table: { widths: ['*'], body: [[{ text: [{ text: 'If de-escalation fails, NAOD refers to NOD for further intervention. Notify POD at all times.', bold: true }, { text: '\n' + d.escalation.map((e) => e[0] + ' = ' + e[1]).join(';   '), color: MUTED, fontSize: base - 1.5 }], fillColor: '#fdf1dc' }]] }, layout: { hLineWidth: () => 0, vLineWidth: () => 0, paddingTop: () => 5, paddingBottom: () => 5, paddingLeft: () => 8 }, margin: [0, 6, 0, 8] });
      content.push({ columns: [{ text: 'Remarks:', bold: true, width: 'auto' }, inline('Successful'), inline('Partly successful'), inline('Not successful, escalated'), { text: '________________', width: '*' }], columnGap: 12, margin: [0, 0, 0, 14] });
      content.push({ columns: [{ text: '______________________\nNursing Attendant on Duty', alignment: 'center', fontSize: base - 1 }, { text: '______________________\nNurse on Duty', alignment: 'center', fontSize: base - 1 }, { text: '______________________\nPOD notified (date/shift/time)', alignment: 'center', fontSize: base - 1 }], unbreakable: true });
      if (INST().deescForm) content.push({ text: INST().deescForm, alignment: 'right', fontSize: base - 1, margin: [0, 12, 0, 0] });
    }
    if (m.discharge) {
      const brk = content.length > 1 ? 'before' : undefined;
      if (INST().name) content.push({ stack: [{ text: INST().name.toUpperCase(), bold: true, fontSize: base + 1 }, { text: INST().address, fontSize: base - 1, color: MUTED }], alignment: 'center', margin: [0, 0, 0, 2], pageBreak: brk });
      content.push(Object.assign(heading(null, 'Discharge summary: interview guide'), { pageBreak: !INST().name ? brk : undefined }));
      m.discharge.forEach((f) => {
        const stack = [{ text: [{ text: f.label, bold: true, color: NAVY, fontSize: base + 0.5 }, { text: '  ' + f.group, color: MUTED, fontSize: base - 1.5 }] }];
        if (f.assess) stack.push({ text: f.assess, color: MUTED, fontSize: base - 1.5, margin: [0, 1, 0, 2] });
        f.ask.forEach((p) => stack.push({ text: [{ text: '“' + p.tl + '”', color: NAVY }].concat(p.alt ? [{ text: '  ' + p.alt, italics: true, color: MUTED }] : []).concat(showEn ? [{ text: '  ' + p.en, color: MUTED, fontSize: base - 1.5 }] : []), margin: [8, 1, 0, 0] }));
        if (f.picks.length) stack.push({ text: [{ text: 'Document as: ', bold: true }, f.picks.join(' · ')], fontSize: base - 1.5, margin: [8, 3, 0, 0] });
        content.push({ stack, unbreakable: true, margin: [0, 0, 0, 7] });
      });
      if (INST().dischargeForm) content.push({ text: 'Guide for form ' + INST().dischargeForm, alignment: 'right', fontSize: base - 1, color: MUTED });
    }
    if (m.deescAfter) {
      content.push(Object.assign(heading(null, 'If de-escalation fails'), { pageBreak: 'before' }));
      content.push({ text: 'General guide. Hospital policy and physician orders decide what is done.', color: MUTED, margin: [0, 0, 0, 4] });
      m.deescAfter.forEach((a, i) => {
        const stack = [{ text: [{ text: (i + 1) + '. ' + a.title, bold: true }, { text: '  (' + a.who + ')', color: MUTED, fontSize: base - 1.5 }] }]
          .concat(a.points.map((t) => ({ text: '• ' + t, fontSize: base - 1, margin: [6, 0, 0, 0] })))
          .concat(a.say.map((p) => ({ text: [{ text: '“' + p.tl + '”', color: NAVY }].concat(p.alt ? [{ text: '  ' + p.alt, italics: true, color: MUTED }] : []).concat(showEn ? [{ text: '  ' + p.en, color: MUTED, fontSize: base - 1.5 }] : []), margin: [14, 1, 0, 0] })));
        content.push({ stack, unbreakable: true, margin: [0, 0, 0, 6] });
      });
    }
    if (m.form) {
      content.push(Object.assign(heading(null, 'MSE write-up'), { pageBreak: 'before' }));
      content.push({ text: 'Patient: ______________________   Date: ____________   Language used: ____________', margin: [0, 2, 0, 6] });
      content.push({ table: { widths: [a5 ? 60 : 90, '*'], body: PSYCH_MSE.map((d) => d.domain).concat(['Risk']).map((d) => [{ text: d, bold: true }, { text: '\n\n', fontSize: a5 ? base : base + 4 }]) }, layout: { hLineWidth: () => 0.5, vLineWidth: () => 0.5, hLineColor: () => LINE, vLineColor: () => LINE, paddingTop: () => 4, paddingBottom: () => 4 } });
    }
    if (m.key) {
      content.push(Object.assign(heading(null, 'English key'), { pageBreak: 'before' }));
      content.push({ columns: [0, 1].map((half) => { const per = Math.ceil(m.key.length / 2); return { stack: m.key.slice(half * per, (half + 1) * per).map(([k, e]) => ({ text: [{ text: k + '  ', color: MUTED }, e], fontSize: base - 1.5, margin: [0, 0, 0, 2] })) }; }), columnGap: 14 });
    }
    return {
      pageSize: o.paper === 'LETTER' ? 'LETTER' : o.paper,
      pageMargins: a5 ? [28, 28, 28, 40] : [40, 40, 40, 50],
      info: { title: m.title, author: APP_META.author, subject: 'Psychiatric interview in Tagalog', creator: 'Usap Tayo ' + APP_META.version },
      content: fixGlyphs(content), // the embedded PDF font has no arrow glyph
      footer: (cur, total) => ({ margin: a5 ? [28, 8, 28, 0] : [40, 14, 40, 0], columns: [
        { text: APP_META.attribution + '\nPractice phrasings for training, not validated instrument translations. NCMH Crisis Hotline 1553.', fontSize: a5 ? 5.5 : 6.5, color: MUTED },
        { text: cur + ' / ' + total, alignment: 'right', fontSize: a5 ? 6.5 : 7.5, color: MUTED, width: 40 }
      ] }),
      defaultStyle: { font: 'Roboto', fontSize: base, lineHeight: 1.15 },
      styles: { h1: { fontSize: a5 ? base + 5 : base + 8, bold: true, color: NAVY }, h2: { fontSize: base + 2, bold: true, color: NAVY, margin: [0, 4, 0, 4] }, meta: { color: MUTED, fontSize: base - 1 } }
    };
  }
  App.handoutPresets = PRESETS;
  App.handoutDoc = (o) => docDef(build(Object.assign({}, DEFAULTS, PRESETS.full.o, o))); // exposed for testing

  /* ---------- Page ---------- */
  V.handout = (el, p, q) => {
    let o = opts();
    if (q.discharge) o = Object.assign({}, o, PRESETS.discharge.o, { preset: 'discharge', title: 'Discharge Summary Interview Guide' });
    if (q.deesccard) o = Object.assign({}, o, PRESETS.deesccard.o, { preset: 'deesccard', title: 'De-escalation Pocket Card' });
    if (q.deesc) o = Object.assign({}, o, { preset: 'custom', steps: [], deescList: true, deescAfter: true, deescCard: false, overview: false, mse: false, idioms: false, form: false, title: 'De-escalation Checklist' });
    if (q.s) { // came from a section page: start with just that section
      const st = ALL_STEPS().find((x) => x.sections.includes(q.s));
      if (st) o = Object.assign({}, o, { preset: 'custom', steps: [st.id], depth: 'all', overview: false, mse: q.s.startsWith('mse'), idioms: false, form: false });
    }
    const chk = (k, label, hint) => '<label class="ho-chk"><input type="checkbox" data-o="' + k + '"' + (o[k] ? ' checked' : '') + '> <span>' + label + (hint ? '<small class="muted"> ' + hint + '</small>' : '') + '</span></label>';
    const seg = (k, items) => '<div class="seg" role="group">' + items.map(([v, t]) => '<button data-seg="' + k + '" data-v="' + v + '" class="' + (o[k] === v ? 'on' : '') + '">' + t + '</button>').join('') + '</div>';
    const draw = () => {
      el.innerHTML = '<div class="breadcrumb"><a href="#/psych">Psychiatry</a> / Handout</div><h1>Printable handout</h1>' +
        '<p class="muted">Build a reference sheet for the ward or clinic, then download it as a PDF or print it. Your choices are remembered on this device.</p>' +
        '<div class="card stack ho-controls">' +
        '<div><div class="eyebrow">Start from</div><div class="ho-presets">' + Object.entries(PRESETS).map(([k, pr]) => '<button class="ho-preset' + (o.preset === k ? ' on' : '') + '" data-preset="' + k + '"><b>' + pr.label + '</b><small>' + pr.desc + '</small></button>').join('') + '</div></div>' +
        '<div class="ho-grid">' +
        '<div><div class="eyebrow">English translation</div>' + seg('english', [['show', 'Show'], ['hide', 'Hide'], ['key', 'Answer key at end']]) + '<p class="small muted" style="margin:4px 0 0">Hide it to practice; use the answer key to self-test.</p></div>' +
        '<div><div class="eyebrow">Register</div>' + seg('register', [['f', 'Respectful (po)'], ['c', 'Everyday'], ['both', 'Both']]) + '</div>' +
        '<div><div class="eyebrow">Phrases</div>' + seg('depth', [['key', 'Key phrases'], ['all', 'All phrases']]) + '</div>' +
        '<div><div class="eyebrow">Paper</div>' + seg('paper', [['A4', 'A4'], ['LETTER', 'Letter'], ['A5', 'A5 booklet']]) + '</div>' +
        '<div><div class="eyebrow">Text size</div>' + seg('size', [['small', 'Small'], ['normal', 'Normal'], ['large', 'Large']]) + '</div>' +
        '</div>' +
        '<div><div class="eyebrow">Include</div><div class="ho-chks">' + chk('overview', 'Interview flow overview') + chk('mse', 'MSE table') + chk('idioms', 'Idioms of distress') + chk('form', 'Blank MSE write-up form') + chk('deescList', 'De-escalation checklist') + chk('deescAfter', 'If it fails: restraint, monitoring, debrief') + chk('dischargeGuide', 'Discharge summary guide') + chk('notes', 'Clinician tips and notes') + chk('answers', 'Likely patient answers') + '</div></div>' +
        '<details' + (o.preset === 'custom' ? ' open' : '') + '><summary><b>Sections</b> <span class="muted small">(' + o.steps.length + ' selected)</span></summary><div class="ho-chks" style="margin-top:8px">' +
        '<div class="small muted" style="grid-column:1/-1">Interview flow, in order</div>' + PSYCH_FLOW.map((s, i) => '<label class="ho-chk"><input type="checkbox" data-step="' + s.id + '"' + (o.steps.includes(s.id) ? ' checked' : '') + '> <span>' + (i + 1) + '. ' + esc(s.title) + '</span></label>').join('') +
        '<div class="small muted" style="grid-column:1/-1;margin-top:6px">Add-ons</div>' + PSYCH_FLOW_EXTRA.map((s) => '<label class="ho-chk"><input type="checkbox" data-step="' + s.id + '"' + (o.steps.includes(s.id) ? ' checked' : '') + '> <span>' + esc(s.title) + '</span></label>').join('') +
        '<div class="row" style="grid-column:1/-1"><button class="btn sm" data-all="1">Select all</button><button class="btn sm" data-all="0">Clear</button></div></div></details>' +
        '<div class="ho-grid"><label class="small">Title<input class="input" id="hoTitle" value="' + esc(o.title) + '"></label><label class="small">Prepared for (optional)<input class="input" id="hoFor" value="' + esc(o.preparedFor) + '" placeholder="e.g., PGY-1, Dept. of Psychiatry"></label></div>' +
        '<div class="row"><button class="btn primary" id="hoPdf">' + icons.book + ' Download PDF</button><button class="btn" id="hoPrint">Print</button><span class="muted small" id="hoStat"></span></div></div>' +
        (o.deescCard ? '<p class="small muted" style="margin:4px 0 0">The pocket card always prints on A6 (105 × 148 mm), front and back. Print double-sided, trim, and laminate.</p>' : '') + '<h2 style="margin-top:18px">Preview</h2><div class="ho-paper ho-' + (o.deescCard ? 'A6' : o.paper) + ' ho-size-' + o.size + '" id="hoPaper"></div>';
      bind();
      preview();
    };
    const preview = () => {
      const paper = el.querySelector('#hoPaper');
      if (!o.steps.length && !o.mse && !o.deescList && !o.deescAfter && !o.deescCard && !o.dischargeGuide) { paper.innerHTML = '<p class="muted">Choose at least one section or the MSE table.</p>'; return; }
      paper.innerHTML = renderHTML(build(o));
    };
    const update = (patch, redraw) => { o = Object.assign({}, o, patch); saveOpts(o); if (redraw) draw(); else preview(); };
    const bind = () => {
      el.querySelectorAll('[data-preset]').forEach((b) => (b.onclick = () => { const k = b.dataset.preset; const special = { deesccard: 'De-escalation Pocket Card', discharge: 'Discharge Summary Interview Guide' }; const auto = ['De-escalation Checklist', 'De-escalation Pocket Card', 'Discharge Summary Interview Guide', DEFAULTS.title].includes(o.title); update(Object.assign({ notes: true }, PRESETS[k].o, { preset: k }, auto ? { title: special[k] || DEFAULTS.title } : {}), true); }));
      el.querySelectorAll('[data-seg]').forEach((b) => (b.onclick = () => {
        el.querySelectorAll('[data-seg="' + b.dataset.seg + '"]').forEach((x) => x.classList.toggle('on', x === b));
        const patch = { [b.dataset.seg]: b.dataset.v };
        if (b.dataset.seg === 'paper' || b.dataset.seg === 'size') { el.querySelector('#hoPaper').className = 'ho-paper ho-' + (o.deescCard ? 'A6' : patch.paper || o.paper) + ' ho-size-' + (patch.size || o.size); }
        update(patch);
      }));
      el.querySelectorAll('[data-o]').forEach((c) => (c.onchange = () => update({ [c.dataset.o]: c.checked })));
      el.querySelectorAll('[data-step]').forEach((c) => (c.onchange = () => {
        const steps = ALL_STEPS().map((s) => s.id).filter((id) => (id === c.dataset.step ? c.checked : o.steps.includes(id)));
        update({ steps, preset: 'custom' });
        el.querySelector('details summary span').textContent = '(' + steps.length + ' selected)';
        el.querySelectorAll('.ho-preset').forEach((x) => x.classList.remove('on'));
      }));
      el.querySelectorAll('[data-all]').forEach((b) => (b.onclick = () => update({ steps: b.dataset.all === '1' ? ALL_STEPS().map((s) => s.id) : [], preset: 'custom' }, true)));
      el.querySelector('#hoTitle').oninput = (e) => update({ title: e.target.value });
      el.querySelector('#hoFor').oninput = (e) => update({ preparedFor: e.target.value });
      el.querySelector('#hoPrint').onclick = () => window.print();
      el.querySelector('#hoPdf').onclick = async () => {
        const stat = el.querySelector('#hoStat'), btn = el.querySelector('#hoPdf');
        if (!o.steps.length && !o.mse && !o.deescList && !o.deescAfter && !o.deescCard && !o.dischargeGuide) { App.toast('Choose at least one section first.'); return; }
        btn.disabled = true; stat.textContent = 'Making your PDF…';
        try {
          await loadPdfMake();
          const logo = await logoDataURL();
          const name = (o.title || 'handout').replace(/[^\w\- ]+/g, '').trim().replace(/\s+/g, '-').toLowerCase() + (o.english === 'hide' ? '-tagalog-only' : '') + '.pdf';
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
  App.handoutBuild = build;
})();
