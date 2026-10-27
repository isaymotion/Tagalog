/* MSE interviewer sheet view: the two-page Tagalog MSE question sheet (OPD and wards), on screen and printable. */
(function () {
  const { esc, icons } = App;
  const V = App.views;
  const S = () => App.state;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const D = () => window.PSYCH_MSE_SHEET;

  function ref(r) {
    const [sid, i] = r.split(':');
    const s = PSYCH_SECTIONS.find((x) => x.id === sid);
    return s && s.phrases[+i];
  }
  function item(it) {
    if (it.r) { const p = ref(it.r); return p ? { tl: p.f, en: p.en, ut: true, b: it.b, arrow: it.arrow } : null; }
    return it;
  }
  const UT = '<span class="ms-ut" title="Phrase from Usap Tayo">UT</span>';

  /* Page 3: substance use screening and brief intervention, built from PSYCH_SUD so the wording stays in one place. */
  function sudSections() {
    const d = window.PSYCH_SUD; if (!d) return [];
    const sub = (id) => d.substances.find((x) => x.id === id);
    const betel = sub('betel'), alc = sub('alcohol'), tob = sub('tobacco'), gam = sub('gambling'), shabu = sub('shabu'), oth = sub('other');
    const fill = (p, sb) => ({ tl: d.fill(p.tl, sb), en: String(p.en).replace(/\{s\}/g, sb.en).replace(/\{u\}/g, sb.unit), ut: true });
    const scr = (items) => items.map((it) => ({ tl: it.tl, en: it.en, ut: true, sub: it.opts.map((o) => o[1] + ' ' + o[0]).join(' · ') }));
    const mi = (stepId, idx) => idx.map((i) => fill(d.mi.find((x) => x.id === stepId).lines[i], betel));
    return [
      { id: 'sud-open', title: 'Alak, droga, sugal: pagsisimula', en: 'Substance use screen', ut: true, blocks: [
        { items: d.open.slice(0, 3).map((p) => fill(p, betel)) },
        { h: 'Iba pang droga', items: [fill(shabu.ask[0], shabu), fill(oth.ask[0], oth)] } ],
        note: 'Isulat: substance, severity, specifier, code. Betel nut = other (or unknown) substance use disorder (F19.1x / F19.2x). Ang screener sa app (Psychiatry → Substance use) ang nagbibilang.' },
      { id: 'sud-crit', title: 'Ang 11 criteria (DSM-5-TR)', en: 'Past 12 months · 2+ = disorder', ut: true, blocks: [
        { items: d.criteria.map((c) => Object.assign(fill(c, betel), { b: String(c.n) })) } ],
        note: d.rule(betel) + '. Palitan ang "nganga" ng alak, sigarilyo, shabu, o pangalan ng droga. Hindi binibilang ang tolerance at withdrawal sa gamot na iniinom ayon sa reseta. Remission: walang criteria maliban sa craving nang ≥3 buwan (early) o ≥12 buwan (sustained).' },
      { id: 'sud-betel', title: 'Nganga / bunga / mama / buyo / hitso', en: 'Betel nut', ut: true, blocks: [
        { items: betel.ask.map((p) => fill(p, betel)) } ],
        note: 'Tingnan ang bibig: puti o pulang bahagi, sugat na hindi gumagaling, hirap ibuka ang bibig (trismus) → i-refer. May tabako sa nganga = dagdag na tobacco use disorder.' },
      { id: 'sud-alcohol', title: 'Alak', en: 'Alcohol · AUDIT-C', ut: true, blocks: [
        { items: alc.ask.map((p) => fill(p, alc)) },
        { h: 'AUDIT-C (0–12; positive ≥4 lalaki, ≥3 babae)', items: scr(d.screens.alcohol.items) } ],
        note: 'Araw-araw at marami ang inom, huling inom 6–48 oras → bantayan ang withdrawal (panginginig, pawis, mabilis na pulso, lituhin, kombulsyon).' },
      { id: 'sud-tobacco', title: 'Sigarilyo', en: 'Tobacco · Fagerström', ut: true, blocks: [
        { items: [fill(tob.ask[0], tob), fill(tob.ask[1], tob)] },
        { h: 'Fagerström (0–10: 0–2 low, 3–4 low–mod, 5–7 mod, 8–10 high)', items: scr(d.screens.tobacco.items) } ] },
      { id: 'sud-gambling', title: 'Sugal', en: 'Gambling disorder · 9 criteria, 4+', ut: true, blocks: [
        { items: [fill(gam.ask[0], gam), fill(gam.ask[2], gam)] },
        { items: d.gambling.map((c) => Object.assign(fill(c, gam), { b: String(c.n) })) } ],
        note: 'Mild 4–5, moderate 6–7, severe 8–9; episodic o persistent; F63.0. Malaking utang → itanong ang suicide.' },
      { id: 'sud-mi', title: 'Motivational interviewing', en: 'Brief intervention · OARS', ut: true, blocks: [['permission', [0, 1, 3]], ['reflect', [0, 1, 3]], ['rulers', [0, 1, 3, 4]], ['feedback', [0, 1, 3]], ['plan', [0, 1, 2, 3, 5]], ['notready', [0, 2, 3]], ['close', [0, 1, 2]]].map(([id, idx]) => ({ h: d.mi.find((x) => x.id === id).title, items: mi(id, idx) })),
        note: 'Huwag sabihing "adik". Kayo ang nakikinig; ang pasyente ang nagbibigay ng dahilan. Rulers: itanong "bakit hindi mas mababa", hindi "bakit hindi mas mataas".' },
      { id: 'sud-psy1', title: 'Psychoeducation: nganga, alak', en: 'Elicit–provide–elicit', ut: true, blocks: [
        { h: 'Nganga', items: betel.psychoed.map((p) => fill(p, betel)) },
        { h: 'Alak', items: alc.psychoed.map((p) => fill(p, alc)) },
        { h: 'Marijuana', items: sub('cannabis').psychoed.map((p) => fill(p, sub('cannabis'))) } ],
        note: 'Magbigay ng isa o dalawa lang, na akma sa pasyente, pagkatapos humingi ng permiso.' },
      { id: 'sud-psy2', title: 'Psychoeducation: sigarilyo, shabu, sugal', en: '', ut: true, blocks: [
        { h: 'Sigarilyo', items: tob.psychoed.map((p) => fill(p, tob)) },
        { h: 'Shabu', items: shabu.psychoed.map((p) => fill(p, shabu)) },
        { h: 'Sugal', items: gam.psychoed.map((p) => fill(p, gam)) } ] },
      { id: 'sud-nurse', title: 'Nurse: screen at brief advice', en: 'Nurse script', ut: true, blocks: d.nurse.steps.map((st) => ({ h: st.title, items: st.lines.map((p) => fill(p, betel)) })),
        note: 'Escalate: ' + d.nurse.escalate + ' (Pending Nursing Service review.)' }
    ];
  }

  function renderSection(sec, showEn) {
    const head = '<h2><span>' + esc(sec.title) + '</span><span class="ms-en">' + esc(sec.en || '') + (sec.ut ? ' ' + UT : '') + '</span></h2>';
    if (sec.obs) {
      return '<section class="ms-sec" id="ms-' + sec.id + '">' + head + '<div class="ms-obs">' + sec.obs.map(([k, v]) => '<span><b>' + esc(k) + ':</b> ' + esc(v) + '</span>').join('') + '</div></section>';
    }
    const body = sec.blocks.map((bl) => (bl.h ? '<h3>' + esc(bl.h) + '</h3>' : '') + '<ul>' + bl.items.map(item).filter(Boolean).map((it) =>
      '<li class="' + (it.b ? 'k' : '') + '">' + (it.b ? '<span class="ms-b">' + esc(it.b) + '</span>' : '') + '<span class="ms-tl">' + esc(it.tl) + '</span>' +
      (it.arrow ? ' <span class="ms-arrow">' + esc(it.arrow) + '</span>' : '') + (it.ut && !sec.ut ? ' ' + UT : '') +
      ' ' + App.sayBtn(it.tl) + (it.sub ? '<div class="ms-sub-opts">' + esc(it.sub) + '</div>' : '') + (showEn && it.en ? '<div class="ms-gloss">' + esc(it.en) + '</div>' : '') + '</li>').join('') + '</ul>').join('');
    return '<section class="ms-sec' + (sec.risk ? ' risk' : '') + (sec.ut ? ' ut' : '') + '" id="ms-' + sec.id + '">' + head + body + (sec.note ? '<div class="ms-note">' + esc(sec.note) + '</div>' : '') + '</section>';
  }

  V.mseSheet = (el) => {
    const d = D();
    const inst = (window.APP_META && APP_META.institution) || {};
    const showEn = !!S().settings.mseSheetEn;
    const byId = {}; d.sections.concat(sudSections()).forEach((s) => (byId[s.id] = s));
    const allPages = window.PSYCH_SUD ? d.pages.concat([[['sud-open', 'sud-crit'], ['sud-betel', 'sud-alcohol'], ['sud-tobacco', 'sud-gambling']], [['sud-mi'], ['sud-psy1'], ['sud-psy2', 'sud-nurse']]]) : d.pages;
    const subs = [d.subtitle, d.reminder, 'Substance use screening: DSM-5-TR criteria, AUDIT-C, Fagerström, sugal · Resident at Nurse', 'Brief intervention: motivational interviewing, psychoeducation, nurse script · Resident at Nurse'];
    const pages = allPages.map((cols, pi) =>
      '<div class="ms-page">' +
      '<div class="ms-head"><div><div class="ms-title">' + esc(d.title) + '</div><div class="ms-sub">' + esc(subs[pi] || '') + '</div></div>' +
      '<div class="ms-right"><b>' + esc(inst.name || '') + '</b><br>Psychiatry and Public Mental Health Residency Training Program</div></div>' +
      '<div class="ms-cols">' + cols.map((c) => '<div class="ms-col">' + c.map((id) => renderSection(byId[id], showEn)).join('') + '</div>').join('') + '</div>' +
      '<div class="ms-foot"><span>' + esc(d.disclaimer) + '</span><span>Pahina ' + (pi + 1) + ' / ' + allPages.length + '</span></div></div>').join('');

    el.innerHTML = crumb([['Psychiatry', '#/psych'], ['MSE interviewer sheet']]) +
      '<span class="eyebrow">Print · OPD and wards</span><h1>MSE interviewer sheet</h1>' +
      '<p class="muted">Every screening question for the Tagalog MSE on four pages: mood, depression, suicide, mania, hallucinations, delusions, violence, cognition, insight and judgment, then substance use (DSM-5-TR criteria, AUDIT-C, Fagerström, gambling) and the brief intervention with psychoeducation and the nurse script. Phrases marked <span class="ms-ut">UT</span> are the same ones you drill elsewhere in the app; the rest are ward questions written for this sheet. Tap a line to hear it.</p>' +
      '<div class="ho-controls row" style="margin-bottom:14px">' +
      '<button class="btn sm primary" id="msPrint">Print</button>' +
      '<a class="btn sm" href="handouts/Tagalog_MSE_Interviewer_Guide.pdf" download>Download PDF</a>' +
      '<label class="ho-chk"><input type="checkbox" id="msEn"' + (showEn ? ' checked' : '') + '> Show English</label>' +
      '<a class="btn sm ghost" href="#/psych/handout">Other handouts</a></div>' +
      '<style>@media print { @page { margin: 9mm; } }</style><div class="ms-sheet' + (showEn ? ' ms-en-on' : '') + '">' + pages + '</div>';
    el.querySelector('#msPrint').onclick = () => window.print();
    el.querySelector('#msEn').onchange = (e) => { S().settings.mseSheetEn = e.target.checked; App.save(); V.mseSheet(el); };
  };
})();
