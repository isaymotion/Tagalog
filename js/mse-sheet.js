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

  function renderSection(sec, showEn) {
    const head = '<h2><span>' + esc(sec.title) + '</span><span class="ms-en">' + esc(sec.en || '') + (sec.ut ? ' ' + UT : '') + '</span></h2>';
    if (sec.obs) {
      return '<section class="ms-sec" id="ms-' + sec.id + '">' + head + '<div class="ms-obs">' + sec.obs.map(([k, v]) => '<span><b>' + esc(k) + ':</b> ' + esc(v) + '</span>').join('') + '</div></section>';
    }
    const body = sec.blocks.map((bl) => (bl.h ? '<h3>' + esc(bl.h) + '</h3>' : '') + '<ul>' + bl.items.map(item).filter(Boolean).map((it) =>
      '<li class="' + (it.b ? 'k' : '') + '">' + (it.b ? '<span class="ms-b">' + esc(it.b) + '</span>' : '') + '<span class="ms-tl">' + esc(it.tl) + '</span>' +
      (it.arrow ? ' <span class="ms-arrow">' + esc(it.arrow) + '</span>' : '') + (it.ut && !sec.ut ? ' ' + UT : '') +
      ' ' + App.sayBtn(it.tl) + (showEn && it.en ? '<div class="ms-gloss">' + esc(it.en) + '</div>' : '') + '</li>').join('') + '</ul>').join('');
    return '<section class="ms-sec' + (sec.risk ? ' risk' : '') + (sec.ut ? ' ut' : '') + '" id="ms-' + sec.id + '">' + head + body + (sec.note ? '<div class="ms-note">' + esc(sec.note) + '</div>' : '') + '</section>';
  }

  V.mseSheet = (el) => {
    const d = D();
    const inst = (window.APP_META && APP_META.institution) || {};
    const showEn = !!S().settings.mseSheetEn;
    const byId = {}; d.sections.forEach((s) => (byId[s.id] = s));
    const pages = d.pages.map((cols, pi) =>
      '<div class="ms-page">' +
      '<div class="ms-head"><div><div class="ms-title">' + esc(d.title) + '</div><div class="ms-sub">' + esc(pi === 0 ? d.subtitle : d.reminder) + '</div></div>' +
      '<div class="ms-right"><b>' + esc(inst.name || '') + '</b><br>Psychiatry and Public Mental Health Residency Training Program</div></div>' +
      '<div class="ms-cols">' + cols.map((c) => '<div class="ms-col">' + c.map((id) => renderSection(byId[id], showEn)).join('') + '</div>').join('') + '</div>' +
      '<div class="ms-foot"><span>' + esc(d.disclaimer) + '</span><span>Pahina ' + (pi + 1) + ' / ' + d.pages.length + '</span></div></div>').join('');

    el.innerHTML = crumb([['Psychiatry', '#/psych'], ['MSE interviewer sheet']]) +
      '<span class="eyebrow">Print · OPD and wards</span><h1>MSE interviewer sheet</h1>' +
      '<p class="muted">Every screening question for the Tagalog MSE on two pages: mood, depression, suicide, mania, hallucinations, delusions, violence, substances, cognition, insight and judgment. Phrases marked <span class="ms-ut">UT</span> are the same ones you drill elsewhere in the app; the rest are ward questions written for this sheet. Tap a line to hear it.</p>' +
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
