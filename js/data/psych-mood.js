/* Mood episode checker: DSM-5-TR major depressive, manic and hypomanic episode criteria in Tagalog, with
   the PHQ-9 and the Mood Disorder Questionnaire (MDQ) as add-on screens. Criteria are paraphrased from the
   manual; the scales are paraphrased into Tagalog for training and are not validated translations.
   Lines with r: 'sectionId:index' reuse phrases from PSYCH_SECTIONS. Nothing here stores patient information. */
(function () {
  const ref = (r) => { const [sid, i] = r.split(':'); const s = (window.PSYCH_SECTIONS || []).find((x) => x.id === sid); return s ? s.phrases[+i] : null; };
  const R = (r, extra) => { const p = ref(r); return Object.assign({ tl: p ? p.f : '', en: p ? p.en.replace(/^[A-Z] · /, '') : '', n: p ? p.n : '' }, extra || {}); };

  /* Major depressive episode: A1–A2 are the gate (at least one), A1–A9 need five, two weeks, nearly every day. */
  const MDE = [
    { n: 1, gate: true, b: 'Mood', en: 'Depressed mood most of the day, nearly every day', q: R('depression:1') },
    { n: 2, gate: true, b: 'Interest', en: 'Markedly diminished interest or pleasure in almost all activities', q: R('depression:2') },
    { n: 3, b: 'A', en: 'Significant weight or appetite change', q: R('depression:11') },
    { n: 4, b: 'S', en: 'Insomnia or hypersomnia nearly every day', q: R('depression:5') },
    { n: 5, b: 'P', en: 'Psychomotor agitation or retardation, observable by others', q: R('depression:12') },
    { n: 6, b: 'E', en: 'Fatigue or loss of energy', q: R('depression:9') },
    { n: 7, b: 'G', en: 'Worthlessness or excessive or inappropriate guilt', q: R('depression:8') },
    { n: 8, b: 'C', en: 'Diminished ability to think or concentrate, or indecisiveness', q: R('depression:10') },
    { n: 9, b: 'S', en: 'Recurrent thoughts of death, suicidal ideation, plan, or attempt', q: R('depression:13'), risk: true }
  ];
  /* Manic or hypomanic episode: A is the gate (elevated/expansive or irritable mood with increased energy); B1–B7 need three (four if only irritable). */
  const MANIC = [
    { n: 1, b: 'D', en: 'Distractibility', q: R('mania:3') },
    { n: 2, b: 'I', en: 'Excessive involvement in activities with painful consequences', q: R('mania:4') },
    { n: 3, b: 'G', en: 'Inflated self-esteem or grandiosity', q: R('mania:5') },
    { n: 4, b: 'F', en: 'Flight of ideas or racing thoughts', q: R('mania:6') },
    { n: 5, b: 'A', en: 'Increase in goal-directed activity or psychomotor agitation', q: R('mania:7') },
    { n: 6, b: 'S', en: 'Decreased need for sleep', q: R('mania:8') },
    { n: 7, b: 'T', en: 'More talkative than usual or pressure to keep talking', q: R('mania:9') }
  ];
  const MANIC_GATE = [
    { id: 'elevated', en: 'Elevated or expansive mood', q: R('mania:0') },
    { id: 'irritable', en: 'Irritable mood only', q: R('mania:1') }
  ];
  const EXTRA = {
    mde: [R('depression:16'), R('depression:17'), R('depression:18'), R('depression:19'), R('depression:20'), R('depression:21'), R('depression:22')],
    manic: [R('mania:2'), R('mania:10'), R('mania:11'), R('mania:12'), R('mania:13'), R('mania:14')]
  };

  /* PHQ-9, paraphrased into Tagalog. Stem: over the last two weeks, how often have you been bothered by… 0 not at all, 1 several days, 2 more than half the days, 3 nearly every day. */
  const PHQ9 = {
    title: 'PHQ-9 (depression severity)',
    stem: { tl: 'Sa nakaraang dalawang linggo, gaano po kadalas kayong naabala ng mga sumusunod?', en: 'Over the last two weeks, how often have you been bothered by the following?' },
    opts: [['Hindi kailanman', 0], ['Ilang araw', 1], ['Higit sa kalahati ng mga araw', 2], ['Halos araw-araw', 3]],
    items: [
      { tl: 'Kaunting interes o kasiyahan sa paggawa ng mga bagay-bagay', en: 'Little interest or pleasure in doing things' },
      { tl: 'Pakiramdam na malungkot, nalulumbay, o walang pag-asa', en: 'Feeling down, depressed, or hopeless' },
      { tl: 'Hirap makatulog o manatiling tulog, o sobrang tulog', en: 'Trouble falling or staying asleep, or sleeping too much' },
      { tl: 'Pakiramdam na pagod o walang lakas', en: 'Feeling tired or having little energy' },
      { tl: 'Kaunting gana sa pagkain o sobrang kain', en: 'Poor appetite or overeating' },
      { tl: 'Pakiramdam na masama kayong tao, o bigo kayo at binigo ninyo ang sarili o pamilya ninyo', en: 'Feeling bad about yourself, or that you are a failure or have let yourself or your family down' },
      { tl: 'Hirap mag-concentrate sa mga bagay, tulad ng pagbabasa o panonood ng TV', en: 'Trouble concentrating on things, such as reading or watching television' },
      { tl: 'Napakabagal kumilos o magsalita na napansin ng iba, o kabaligtaran: sobrang balisa o hindi mapakali', en: 'Moving or speaking so slowly that others noticed, or the opposite: being so restless that you move around much more than usual' },
      { tl: 'Mga pag-iisip na mas mabuti pang patay na kayo, o saktan ang inyong sarili', en: 'Thoughts that you would be better off dead, or of hurting yourself', risk: true }
    ],
    impairment: { tl: 'Kung may naranasan po kayo sa mga ito, gaano kahirap ang mga ito sa trabaho, gawaing-bahay, o pakikisama sa iba?', en: 'If you checked any problems, how difficult have they made it to do your work, take care of things at home, or get along with people?', opts: ['Hindi mahirap', 'Medyo mahirap', 'Napakahirap', 'Sobrang hirap'] },
    bands: (n) => (n >= 20 ? 'severe (20–27)' : n >= 15 ? 'moderately severe (15–19)' : n >= 10 ? 'moderate (10–14)' : n >= 5 ? 'mild (5–9)' : 'minimal (0–4)'),
    note: 'Total 0–27: minimal 0–4, mild 5–9, moderate 10–14, moderately severe 15–19, severe 20–27. A score of 10 or more is the usual cut-off for probable major depression; item 9 positive always needs a suicide risk assessment. Severity scale, not a diagnosis.'
  };

  /* MDQ, paraphrased. 13 yes/no items; positive = 7 or more yes AND several at the same time AND moderate or serious problem. */
  const MDQ = {
    title: 'MDQ (bipolar screen)',
    stem: { tl: 'Nagkaroon na po ba ng panahon na hindi kayo katulad ng dati, at…', en: 'Has there ever been a period of time when you were not your usual self and…' },
    items: [
      { tl: '…sobrang saya o sobrang sigla ninyo na sinabi ng iba na hindi kayo katulad ng dati, o na nagkaproblema kayo dahil dito?', en: '…you felt so good or so hyper that other people thought you were not your normal self, or you got into trouble?' },
      { tl: '…sobrang init ng ulo ninyo na sinisigawan ninyo ang mga tao o nakikipag-away?', en: '…you were so irritable that you shouted at people or started fights or arguments?' },
      { tl: '…mas kumpiyansa kayo sa sarili kaysa karaniwan?', en: '…you felt much more self-confident than usual?' },
      { tl: '…mas kaunti ang tulog ninyo pero hindi ninyo ito nakita bilang problema?', en: '…you got much less sleep than usual and found you did not really miss it?' },
      { tl: '…mas madaldal kayo o mas mabilis magsalita kaysa karaniwan?', en: '…you were much more talkative or spoke faster than usual?' },
      { tl: '…nag-uunahan ang mga iniisip ninyo o hindi ninyo mapabagal ang isip ninyo?', en: '…thoughts raced through your head or you could not slow your mind down?' },
      { tl: '…madali kayong nalilihis ng pansin na nahirapan kayong mag-concentrate?', en: '…you were so easily distracted by things around you that you had trouble concentrating?' },
      { tl: '…mas marami kayong lakas kaysa karaniwan?', en: '…you had much more energy than usual?' },
      { tl: '…mas aktibo kayo at mas marami ang nagawa kaysa karaniwan?', en: '…you were much more active or did many more things than usual?' },
      { tl: '…mas palakaibigan o palabas kayo kaysa karaniwan, halimbawa tinatawagan ninyo ang mga kaibigan sa hatinggabi?', en: '…you were much more social or outgoing than usual, for example telephoning friends in the middle of the night?' },
      { tl: '…mas interesado kayo sa sex kaysa karaniwan?', en: '…you were much more interested in sex than usual?' },
      { tl: '…may ginawa kayong hindi karaniwan sa inyo, o na sa tingin ng iba ay sobra, hangal, o delikado?', en: '…you did things that were unusual for you or that other people might have thought were excessive, foolish, or risky?' },
      { tl: '…ang paggastos ninyo ay nagdala ng problema sa inyo o sa pamilya ninyo?', en: '…spending money got you or your family into trouble?' }
    ],
    same: { tl: 'Kung oo sa higit sa isa: nangyari po ba ang ilan sa mga ito nang sabay-sabay, sa iisang panahon?', en: 'If you answered yes to more than one: have several of these ever happened during the same period of time?' },
    problem: { tl: 'Gaano po kalaki ang problemang idinulot ng mga ito sa inyo, halimbawa sa trabaho, pamilya, pera, o batas?', en: 'How much of a problem did any of these cause you, like being unable to work, family, money, or legal troubles?', opts: ['Walang problema', 'Maliit na problema', 'Katamtamang problema', 'Malaking problema'] },
    note: 'Positive screen: 7 or more yes, several in the same period, and a moderate or serious problem. A positive MDQ is not a diagnosis of bipolar disorder; it means take a careful history of past episodes before starting an antidepressant.'
  };

  window.PSYCH_MOOD = { mde: MDE, manic: MANIC, manicGate: MANIC_GATE, extra: EXTRA, phq9: PHQ9, mdq: MDQ };

  /* Publish the scales as a phrase section, so they get search, flashcards, the handout and audio. */
  const sec = { id: 'mood-screens', group: 'Interview', title: 'PHQ-9 and MDQ in Tagalog',
    intro: 'The nine PHQ-9 items with the four frequency choices, and the thirteen MDQ items. Paraphrased for training, not validated translations. The checker in Psychiatry → Mood episode scores them.',
    phrases: [{ en: PHQ9.stem.en, f: PHQ9.stem.tl, n: PHQ9.opts.map((o) => o[0]).join(' / ') }]
      .concat(PHQ9.items.map((it, i) => ({ en: 'PHQ-9 ' + (i + 1) + '. ' + it.en, f: it.tl })))
      .concat([{ en: PHQ9.impairment.en, f: PHQ9.impairment.tl, n: PHQ9.impairment.opts.join(' / ') }])
      .concat([{ en: MDQ.stem.en, f: MDQ.stem.tl }])
      .concat(MDQ.items.map((it, i) => ({ en: 'MDQ ' + (i + 1) + '. ' + it.en, f: it.tl })))
      .concat([{ en: MDQ.same.en, f: MDQ.same.tl }, { en: MDQ.problem.en, f: MDQ.problem.tl, n: MDQ.problem.opts.join(' / ') }]) };
  if (window.PSYCH_SECTIONS) PSYCH_SECTIONS.push(sec);
})();
