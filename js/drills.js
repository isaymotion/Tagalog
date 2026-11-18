/* Language drills (3.7.0): #/drills lists them, #/drills/<id> runs one.
   switch  Formal ↔ Everyday: the f and c forms of every psychiatry phrase (no data of its own)
   markers Choose the marker: DRILL_CLOZE (ang/ng/sa, si/ni/kay, ito/iyan/iyon)
   build   Put the words in order: DRILL_BUILD (word tiles, enclitic order)
   3.8.0:
   roots     Find the root: every one-word dictionary entry whose root App.findRoots can recover (no data of its own)
   families  Word families: WORD_FAMILIES (pick the form), WORD_SYNONYMS (deep word to everyday word), WORD_LADDERS (which is stronger)
   dictation Numbers, times and doses: DRILL_DICTATION, audio first, typed answer
   translate Say it in Tagalog: DRILL_TRANSLATE, typed answer compared with every accepted answer
   Typed answers are scored with App.similarity; 80% of the words or more counts as right.
   3.9.0:
   focus   Switch the focus: DRILL_FOCUS, the same event in actor focus and object focus (choose, or type)
   stress  Same spelling, different stress: WORD_STRESS (from the sentence, by ear, from the meaning)
   errors  Find the mistake: DRILL_ERRORS, tap the wrong word
   families also has the sets ff (false friends, WORD_FALSE_FRIENDS) and cog (borrowed words, WORD_COGNATES)
   #/daily  Daily mix: ten questions drawn from every multiple-choice drill; state.done.daily['YYYY-MM-DD'] = best %
   3.12.0:
   aspect   Choose the aspect: VERB_SENTENCES with the verb form blanked, options = the same verb and affix in the other aspects
   linker, particle, pronoun, qword, negation  Fill the gap: DRILL_GAPS sets lk, pt, pn, qw, neg (js/data/drills-grammar.js)
   change   Change the sentence: DRILL_CHANGE (question, negative, respectful, time), choose or type
   Every row has a group g (Grammar, Vocabulary, Listening and writing); #/drills shows one heading per group.
   #/drills/handout  printable Drills handout (js/grammar-handout.js, topic drills)
   App.dailyExtra: other files may push [tag, fn] parts for the daily mix (fn returns runQuiz questions).
   Best scores in state.done.drills['<id>:<set>']. To add a drill: a row in DRILLS, a run function in RUN. */
(function () {
  const { esc, shuffle, pick } = App;
  const V = (App.views = App.views || {});
  const CLOZE = window.DRILL_CLOZE || [], SETS = window.DRILL_CLOZE_SETS || {}, BUILD = window.DRILL_BUILD || [];
  const DICTATION = window.DRILL_DICTATION || [], TRANS = window.DRILL_TRANSLATE || [];
  const FAMS = window.WORD_FAMILIES || [], LADS = window.WORD_LADDERS || [], SYNS = window.WORD_SYNONYMS || [];
  const FOCUS = window.DRILL_FOCUS || [], ERRORS = window.DRILL_ERRORS || [];
  const STRESS = window.WORD_STRESS || [], FALSE = window.WORD_FALSE_FRIENDS || [], COGS = window.WORD_COGNATES || [];
  const GAPS = window.DRILL_GAPS || [], CHANGE = window.DRILL_CHANGE || [];
  const SECTIONS = () => window.PSYCH_SECTIONS || [];
  const N = 10;

  const DRILLS = [
    { id: 'switch', g: 'Grammar', title: 'Formal or everyday?', eyebrow: 'Register · 10 questions', blurb: 'Hear a line one way, find the same line in the other register.',
      intro: 'Every interview phrase in this app has a respectful form (po, kayo) and an everyday form. Patients answer in the everyday form, and elders expect the respectful one. Here you see a line in one register and choose the same line in the other.',
      opts: [['f-c', 'Respectful → everyday'], ['c-f', 'Everyday → respectful']], lessons: ['politeness', 'register'] },
    { id: 'markers', g: 'Grammar', title: 'Choose the marker', eyebrow: 'Grammar · 10 questions', blurb: 'Ang, ng or sa? Si, ni or kay? Ito, iyan or iyon?',
      intro: 'Fill the gap with the right marker or pointing word. The English line tells you who did what.',
      opts: [['all', 'All sets'], ['m', 'Ang, ng, sa'], ['n', 'Si, ni, kay'], ['d', 'Ito, iyan, iyon']], lessons: ['markers', 'names', 'demonstratives'] },
    { id: 'build', g: 'Grammar', title: 'Build the sentence', eyebrow: 'Word order · 10 sentences', blurb: 'Tap the words into order. Where do na, po, ba and ko go?',
      intro: 'Tap the words in order to build the Tagalog sentence. The short words (ka, ko, mo, na, pa, po, ba, lang, raw) have a fixed place right after the first word of the sentence; this drill trains that order.',
      opts: [], lessons: ['enclitics', 'particles', 'pronouns', 'questions'] },
    { id: 'roots', g: 'Vocabulary', title: 'Find the root', eyebrow: 'Roots · 10 questions', blurb: 'Strip the affixes from a dictionary word and name its root.',
      intro: 'Most Tagalog words are a root plus affixes. If you can see the root, you can look the word up and guess its meaning. Each question shows a word from the dictionary; choose its root.',
      opts: [['all', 'All words'], ['v', 'Verbs'], ['clin', 'Health and mind words']], lessons: ['panlapi', 'nominalising', 'focus-an-i'] },
    { id: 'families', g: 'Vocabulary', title: 'Word families', eyebrow: 'Vocabulary · 10 questions', blurb: 'One root, many words: matulog, nakatulog, patulugin. Also deep and everyday words.',
      intro: 'Five sets. Pick the right form: choose the word from one root that fits the meaning. Deep word to everyday word: match a formal Filipino word to what most people say. Which is stronger: choose the stronger of two words for the same feeling. False friends: words from Spanish or English that changed their meaning. Borrowed words: recognise a Spanish or English word in its Filipino spelling.',
      opts: [['fam', 'Pick the right form'], ['syn', 'Deep word to everyday word'], ['lad', 'Which is stronger?'], ['ff', 'False friends'], ['cog', 'Borrowed words']], lessons: ['intensifiers', 'register', 'ability', 'causative'], more: ['#/words', 'See all word families'] },
    { id: 'dictation', g: 'Listening and writing', title: 'Numbers, times and doses', eyebrow: 'Listening · 10 lines', blurb: 'Hear an age, a clock time or a dose and type it.',
      intro: 'You hear a short line with a number, a clock time or a dose. Type what you hear in Tagalog. Capital letters, accents and punctuation do not count. For numbers and times you may type the figure instead (23, 3:30).',
      opts: [['all', 'All sets'], ['num', 'Numbers'], ['time', 'Clock times'], ['dose', 'Doses']], lessons: ['numbers', 'time-words'] },
    { id: 'translate', g: 'Listening and writing', title: 'Say it in Tagalog', eyebrow: 'Writing · 10 sentences', blurb: 'Read the English, type the Tagalog. Several answers are accepted.',
      intro: 'Type the Tagalog for each English line. Your answer is compared word by word with the accepted answers, with or without po. Tagalog has many right ways to say a thing, so read the model answer even when you are marked wrong.',
      opts: [['all', 'All sets'], ['e', 'Everyday'], ['w', 'On the ward']], lessons: ['enclitics', 'questions', 'politeness'] },
    { id: 'focus', g: 'Grammar', title: 'Switch the focus', eyebrow: 'Grammar · 10 sentences', blurb: 'Uminom ang pasyente ng gamot. Now make the medicine the topic.',
      intro: 'The same event can be told with the doer as the topic (actor focus) or with the thing acted on as the topic (object focus). When the focus changes, the verb changes its affix and ang and ng trade places. Choose the sentence that says the same thing in the other focus, or type it yourself.',
      opts: [['ao', 'Actor focus → object focus'], ['oa', 'Object focus → actor focus'], ['type', 'Type the object focus']], lessons: ['focus', 'markers', 'pronouns', 'focus-an-i'] },
    { id: 'errors', g: 'Grammar', title: 'Find the mistake', eyebrow: 'Grammar · 10 sentences', blurb: 'One word is wrong in each sentence. Tap it.',
      intro: 'Each sentence has one mistake a learner often makes: a wrong marker or pronoun, a small word out of place, a missing linker, or a verb in the wrong form. Tap the word that is wrong, then read the corrected sentence.',
      opts: [['all', 'All sets'], ['m', 'Markers and pronouns'], ['o', 'Small words and linkers'], ['v', 'Verb forms']], lessons: ['markers', 'pronouns', 'enclitics', 'linkers', 'aspect', 'negation'] },
    { id: 'stress', g: 'Listening and writing', title: 'Same spelling, different stress', eyebrow: 'Listening · 10 questions', blurb: 'Bukas is tomorrow or open. Gutom is hunger or hungry. The stress decides.',
      intro: 'Tagalog is written without accents, so one spelling can be two words. The stress tells them apart: BU-kas is tomorrow, bu-KAS is open. Capital letters here show the stressed syllable. From the sentence: read it and say where the stress falls. By ear: hear the sentence first. From the meaning: go from the English to the stress.',
      opts: [['ctx', 'From the sentence'], ['ear', 'By ear'], ['mean', 'From the meaning']], lessons: ['pronounce'], more: ['#/words?tab=str', 'See all stress pairs'] },
    // 3.12.0
    { id: 'aspect', g: 'Grammar', title: 'Choose the aspect', eyebrow: 'Verbs · 10 sentences', blurb: 'Kumain, kumakain or kakain? Done, going on, or still to come.',
      intro: 'Each sentence from the verb trainer has its verb taken out. Choose the form that fits: completed (it already happened), incompleted (going on or habitual), contemplated (not yet begun), or the infinitive (after gusto, kailangan, puwede, and in commands). The English line tells you when it happens.',
      opts: [['all', 'All sentences'], ['c', 'Clinical sentences']], lessons: ['aspect', 'focus'], more: ['#/verbs', 'Verb trainer'] },
    { id: 'linker', g: 'Grammar', title: 'Na, -ng or nothing?', eyebrow: 'Linkers · 10 gaps', blurb: 'Magandang bahay, mabait na bata, may lagnat: which linker joins the words?',
      intro: 'A linker joins a describing word to the word it describes, and a verb like gusto to the next verb. Use na after a consonant, -ng after a vowel, and -g after n. Some pairs take no linker at all (after may, after hindi, between ang and a noun). Choose what fills the gap.',
      opts: [], lessons: ['linkers'] },
    { id: 'particle', g: 'Grammar', title: 'Choose the small word', eyebrow: 'Particles · 10 gaps', blurb: 'Na, pa, lang, muna, pala, sana, daw: one small word changes the meaning.',
      intro: 'Short words like na (already), pa (still, yet), lang (only), muna (first, for now), pala (so it turns out), sana (I hope) and daw (they say) usually come right after the first word or phrase. The English line tells you which one the speaker meant.',
      opts: [], lessons: ['particles', 'enclitics'] },
    { id: 'pronoun', g: 'Grammar', title: 'Ako, ko or akin?', eyebrow: 'Pronouns · 10 gaps', blurb: 'Pagod na ako. Gusto ko. Sa akin ito. Choose the form the sentence needs.',
      intro: 'Every pronoun has three forms: the topic form (ako, ka, siya), the ng form (ko, mo, niya) for the doer of an object-focus verb and the owner, and the sa form (akin, iyo, kanya) after sa, para sa and the like. Choose the form that fits the gap.',
      opts: [], lessons: ['pronouns'] },
    { id: 'qword', g: 'Grammar', title: 'Choose the question word', eyebrow: 'Questions · 10 gaps', blurb: 'Saan or nasaan? Ilan or magkano? Sino or kanino?',
      intro: 'Choose the question word that fits the rest of the sentence and the English line: sino, ano, saan, nasaan, kailan, bakit, paano, ilan, magkano, alin, kanino, gaano.',
      opts: [], lessons: ['questions'] },
    { id: 'negation', g: 'Grammar', title: 'Hindi, wala or huwag?', eyebrow: 'Negation · 10 gaps', blurb: 'Hindi for verbs and descriptions, wala for having none, huwag for commands.',
      intro: 'Hindi says no to a verb or a description. Wala says that something is not there or that someone has none (the opposite of may). Huwag says do not, in commands and requests. Choose the one that fits.',
      opts: [], lessons: ['negation'] },
    { id: 'change', g: 'Grammar', title: 'Change the sentence', eyebrow: 'Grammar · 10 sentences', blurb: 'Make it a question, make it negative, make it respectful, or change the time.',
      intro: 'You see a sentence and an instruction. Choose the sentence that does what the instruction says, or type it yourself. Watch where ba, po and the pronouns go, which negator to use, and how the verb changes.',
      opts: [['all', 'All kinds'], ['q', 'Make it a question'], ['neg', 'Make it negative'], ['po', 'Make it respectful'], ['asp', 'Change the time'], ['type', 'Type the answer']], lessons: ['questions', 'negation', 'politeness', 'aspect'] }
  ];
  const GROUPS = ['Grammar', 'Vocabulary', 'Listening and writing'];
  // Drills with a part in the printable Drills handout (#/drills/handout).
  const HANDOUT = ['markers', 'linker', 'particle', 'pronoun', 'qword', 'negation', 'errors', 'focus', 'change', 'translate', 'dictation'];
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

  /* ---------- Find the root (3.8.0) ---------- */
  const CLIN_CATS = ['health', 'mind', 'risk', 'substance', 'clinical', 'emotions'];
  let rootPool = null;
  const rootWords = () => rootPool || (rootPool = App.DICT.filter((e) => e.root && !/[\s-]/.test(e.tl) && !/[\s-]/.test(e.root) && App.flat(e.tl) !== App.flat(e.root) && App.findRoots(e.tl).includes(App.flat(e.root))));
  function rootQs(set, n) {
    const all = rootWords();
    const src = all.filter((e) => set === 'all' || (set === 'v' ? e.pos === 'v' : CLIN_CATS.includes(e.cat)));
    const roots = [...new Set(all.map((e) => e.root.toLowerCase()))];
    return pick(src, Math.min(n, src.length)).map((e) => {
      const w = e.tl.toLowerCase(), r = e.root.toLowerCase();
      // Wrong answers: the word with too little or too much cut off, then real roots that start with the same letter.
      // Half-stripped forms first (one affix or the doubled syllable left on), since those are the real mistakes.
      const plausible = (x) => x.length >= 4 && x !== w && /^[^aeiou]?[aeiou]/.test(x) && !/h$/.test(x);
      const half = [w.replace(/^(mag|nag|pag|mang|nang|pang|ma|na|pa|ka|i)/, ''), w.replace(/^(.)(um|in)/, '$1'), w.replace(/(han|hin|an|in)$/, '')];
      const chops = [...new Set(shuffle(half.filter(plausible)).concat(shuffle([w.slice(2), w.slice(0, -2), w.slice(2, -2)].filter(plausible))))].slice(0, 2);
      const near = shuffle(roots.filter((x) => x[0] === r[0])).concat(shuffle(roots));
      const wrong = [...new Set(chops.concat(near))].filter((x) => App.flat(x) !== App.flat(r)).slice(0, 3);
      return { q: e.tl, sub: e.en + ' · What is the root word?', tlq: true, tlo: true, say: e.tl, opts: [r].concat(wrong), a: 0, cardId: e.id,
        exp: e.tl + ' (' + e.en + ') is built on the root ' + r + '.' };
    });
  }

  /* ---------- Word families, deep and everyday words, intensity ladders (3.8.0) ---------- */
  const LANGS = { es: 'Spanish', en: 'English' };
  function famQs(set, n) {
    if (set === 'ff') {
      return pick(FALSE, Math.min(n, FALSE.length)).map((x) => {
        const wrong = shuffle(FALSE.filter((y) => y !== x && y.en !== x.en && y.en !== x.srcEn).map((y) => y.en)).slice(0, 2);
        return { q: x.tl, sub: 'From ' + LANGS[x.from] + ' ' + x.src + '. What does it mean in Tagalog?', tlq: true, say: x.mix ? null : x.tl, opts: [x.en, x.srcEn].concat(wrong), a: 0,
          exp: x.tl + ' = ' + x.en + '. In ' + LANGS[x.from] + ', ' + x.src + ' is ' + x.srcEn + '.' + (x.note ? ' ' + x.note : '') };
      });
    }
    if (set === 'cog') {
      return pick(COGS, Math.min(n, COGS.length)).map((x) => {
        const same = shuffle(COGS.filter((y) => y !== x && y[4] === x[4] && y[3] !== x[3]).map((y) => y[3]));
        const wrong = [...new Set(same)].slice(0, 3);
        return { q: x[0], sub: 'A borrowed word. What is it?', tlq: true, say: x[0], opts: [x[3]].concat(wrong), a: 0, exp: x[0] + ' = ' + x[3] + ', from ' + LANGS[x[1]] + ' ' + x[2] + '.' };
      });
    }
    if (set === 'syn') {
      return pick(SYNS, Math.min(n, SYNS.length)).map((x) => {
        const wrong = shuffle(SYNS.filter((y) => y !== x && !x.daily.includes(y.daily[0])).map((y) => y.daily[0])).slice(0, 3);
        return { q: x.deep[0], sub: 'A formal or literary word. Which everyday word means the same?', tlq: true, tlo: true, say: x.deep[0], opts: [x.daily[0]].concat(wrong), a: 0,
          exp: x.deep[0] + ' = ' + x.daily.join(', ') + ' (' + x.en + ').' + (x.note ? ' ' + x.note : '') };
      });
    }
    if (set === 'lad') {
      const out = [];
      for (let k = 0; k < n; k++) {
        const l = LADS[(k + Math.floor(Math.random() * LADS.length)) % LADS.length];
        const i = Math.floor(Math.random() * (l.steps.length - 1)), j = i + 1 + Math.floor(Math.random() * (l.steps.length - 1 - i));
        out.push({ q: 'Which is stronger?', sub: l.en, tlo: true, opts: [l.steps[j][0], l.steps[i][0]], a: 0,
          exp: 'From mild to strong: ' + l.steps.map((s) => s[0]).join(' → ') + '. ' + l.steps[j][0] + ' = ' + l.steps[j][1] + '.' });
      }
      return out;
    }
    const pool = [];
    FAMS.forEach((f) => f.forms.forEach((fm) => pool.push({ f, fm })));
    return pick(pool, Math.min(n, pool.length)).map(({ f, fm }) => {
      const wrong = shuffle(f.forms.filter((x) => x !== fm).map((x) => x[0])).slice(0, 3);
      return { q: fm[1], sub: 'Root: ' + f.r + ' (' + f.en + '). Choose the word.', tlo: true, opts: [fm[0]].concat(wrong), a: 0, sayAfter: fm[0], exp: fm[0] + ' = ' + fm[1] + '.' };
    });
  }

  /* ---------- Typed drills: dictation and translation (3.8.0) ---------- */
  // Best word-by-word match of the typed line against every accepted answer, 0 to 100.
  App.drillTypedScore = (answers, typed) => Math.max(0, ...answers.map((a) => Math.max(App.similarity(a, typed), App.similarity(App.spoken(a), typed))));
  const figureOk = (n, typed) => { if (!n) return false; const t = String(typed).toLowerCase().replace(/\s+/g, ''); return t === n || t === n.replace(/:00$/, ''); };
  const dictItems = (set) => DICTATION.filter((it) => set === 'all' || it.set === set).map((it) => ({ say: it.tl, answers: [it.tl], n: it.n, en: it.en }));
  const transItems = (set) => TRANS.filter((it) => set === 'all' || it.set === set).map((it) => ({ prompt: it.en, answers: it.tl, why: it.why }));
  function runTyped(box, all, key, audio) {
    let items = pick(all, Math.min(N, all.length)), i = 0, right = 0;
    const normal = App.state.settings.rate || 0.85;
    const draw = () => {
      if (i >= items.length) {
        const pct = Math.round((100 * right) / items.length);
        box.innerHTML = '<div class="card stack"><h3>' + (pct >= 80 ? LANG.quiz.great : pct >= 50 ? LANG.quiz.ok : LANG.quiz.keepGoing) + ' ' + right + ' / ' + items.length + '</h3>' +
          '<div class="progress"><i style="width:' + pct + '%"></i></div><div class="row"><button class="btn primary" data-act="retry">Try again</button><a class="btn" href="#/drills">All drills</a></div></div>';
        box.querySelector('[data-act=retry]').onclick = () => { items = pick(all, Math.min(N, all.length)); i = 0; right = 0; draw(); };
        saveBest(key, right, items.length);
        return;
      }
      const it = items[i];
      box.innerHTML = '<div class="card stack"><div class="spread"><span class="eyebrow">' + (audio ? 'Line ' : 'Sentence ') + (i + 1) + ' of ' + items.length + '</span></div>' +
        (audio
          ? '<div class="listen-q"><button class="btn primary" data-act="play" aria-label="Play">' + App.icons.sound + ' Play</button><button class="btn" data-act="slow">Slower</button></div>'
          : '<div' + (it.tlPrompt ? ' class="tl"' : '') + ' style="font-size:1.12rem;font-weight:600">' + esc(it.prompt) + '</div>' + (it.sub ? '<div class="muted">' + esc(it.sub) + '</div>' : '')) +
        '<div class="row"><input class="input tl" data-in autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" style="flex:1;min-width:0" placeholder="' + (audio ? 'Type what you hear' : 'Type the Tagalog') + '" aria-label="' + (audio ? 'Type what you hear' : 'Type the Tagalog') + '">' +
        '<button class="btn primary" data-act="check">Check</button></div><div data-fb></div></div>';
      const inp = box.querySelector('[data-in]'), chk = box.querySelector('[data-act=check]');
      if (audio) {
        box.querySelector('[data-act=play]').onclick = () => App.speak(it.say, { rate: normal });
        box.querySelector('[data-act=slow]').onclick = () => App.speak(it.say, { rate: Math.max(0.6, normal - 0.25) });
        setTimeout(() => { if (box.contains(inp)) App.speak(it.say, { rate: normal }); }, 150);
      } else inp.focus();
      const check = () => {
        if (chk.disabled || !inp.value.trim()) return;
        // exact: every word must match one accepted answer (one wrong marker is the whole point of the focus drill)
        const s = App.drillTypedScore(it.answers, inp.value), ok = it.exact ? s === 100 : s >= 80 || figureOk(it.n, inp.value);
        if (ok) right++;
        App.recordAnswer(ok);
        chk.disabled = true; inp.disabled = true;
        const others = it.answers.slice(1, 4);
        box.querySelector('[data-fb]').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? LANG.quiz.right : LANG.quiz.wrong) + '</b> ' + (it.exact ? '' : s >= 80 || !ok ? s + '% of words match.' : '') +
          '<div style="margin-top:6px"><span class="tl">' + esc(it.answers[0]) + '</span> ' + App.sayBtn(it.answers[0]) + '</div>' +
          (it.en ? '<div class="muted small">' + esc(it.en) + (it.n ? ' (' + esc(it.n) + ')' : '') + '</div>' : '') +
          (others.length ? '<div class="muted small" style="margin-top:4px">Also accepted: <span class="tl">' + others.map(esc).join(' · ') + '</span></div>' : '') +
          (it.why ? '<div style="margin-top:4px">' + esc(it.why) + '</div>' : '') + '</div>' +
          '<div class="row" style="margin-top:10px"><button class="btn primary" data-act="next">' + (i + 1 < items.length ? 'Next' : 'See score') + '</button></div>';
        const nx = box.querySelector('[data-act=next]');
        nx.onclick = () => { i++; draw(); };
        nx.focus();
      };
      chk.onclick = check;
      inp.onkeydown = (ev) => { if (ev.key === 'Enter') { ev.preventDefault(); check(); } };
    };
    draw();
  }

  /* ---------- Switch the focus (3.9.0) ---------- */
  const fsent = (verb, rest, it) => verb + ' ' + rest + (it.end || '.');
  // Object-focus sentences accepted when typed: the model, other verbs (oAlt), and "ang X ng Y" for "ng Y ang X".
  const focusAnswers = (it) => {
    const rests = [it.or], m = /^(ng|ni) (.+?) (ang .+)$/.exec(it.or);
    if (m) rests.push(m[3] + ' ' + m[1] + ' ' + m[2]);
    const out = [];
    [it.o].concat(it.oAlt || []).forEach((v) => rests.forEach((r) => out.push(fsent(v, r, it))));
    return out;
  };
  App.drillFocusAnswers = focusAnswers;
  function focusQs(set, n) {
    return pick(FOCUS, Math.min(n, FOCUS.length)).map((it) => {
      const toO = set !== 'oa';
      const from = toO ? fsent(it.a, it.ar, it) : fsent(it.o, it.or, it);
      const right = toO ? fsent(it.o, it.or, it) : fsent(it.a, it.ar, it);
      // The classic slips: new verb with the old markers, old verb with the new markers, right pattern in the wrong aspect.
      const wrong = toO ? [fsent(it.o, it.ar, it), fsent(it.a, it.or, it), fsent(it.ox, it.or, it)] : [fsent(it.a, it.or, it), fsent(it.o, it.ar, it), fsent(it.ax, it.ar, it)];
      return { q: from, sub: (toO ? it.enA : it.enO) + ' · ' + (toO ? 'Make the thing acted on the topic.' : 'Make the doer the topic.'), tlq: true, tlo: true, say: from,
        opts: [right].concat(wrong), a: 0, sayAfter: right, exp: right + ' ' + (toO ? it.enO : it.enA) + ' ' + it.why };
    });
  }
  const focusTyped = () => FOCUS.map((it) => ({ prompt: fsent(it.a, it.ar, it), tlPrompt: true, sub: it.enA + ' · Type it in object focus: ' + it.enO, answers: focusAnswers(it), exact: true, why: it.why }));

  /* ---------- Same spelling, different stress (3.9.0) ---------- */
  const stressed = (x, last) => (last ? x.syl[0] + '-' + x.syl[1].toUpperCase() : x.syl[0].toUpperCase() + '-' + x.syl[1]);
  App.stressLabel = stressed;
  // What is played is WORD_STRESS_SAY (js/data/word-sets.js): the last-syllable sentence is respelled for the voice.
  // STRESS_EAR = false switches the By ear set off and silences last-syllable sentences (used in 3.9.1 to 3.9.3).
  const STRESS_EAR = true;
  function stressQs(set, n) {
    if (set === 'ear' && !STRESS_EAR) set = 'ctx';
    const pool = [];
    STRESS.forEach((x) => { pool.push({ x, last: false }); pool.push({ x, last: true }); });
    return pick(pool, Math.min(n, pool.length)).map(({ x, last }) => {
      const m = last ? x.b : x.a, A = stressed(x, false), B = stressed(x, true), sp = last && !STRESS_EAR ? null : WORD_STRESS_SAY(x, last);
      const tail = ' ' + A + ' = ' + x.a.en + ', ' + B + ' = ' + x.b.en + '.' + (x.note ? ' ' + x.note : '');
      if (set === 'mean') return { q: x.w + ': ' + m.en, sub: 'Where is the stress?', opts: [A, B], a: last ? 1 : 0, tlo: true, sayAfter: sp, exp: m.ex[0] + ' ' + m.ex[1] + tail };
      const opts = [A + ' · ' + x.a.en, B + ' · ' + x.b.en];
      return { q: m.ex[0], sub: 'Which ' + x.w + ' is this?', tlq: true, hideQ: set === 'ear' ? 'Listen, then choose which ' + x.w + ' you heard.' : undefined, say: set === 'ear' ? sp : null,
        opts, a: last ? 1 : 0, sayAfter: set === 'ear' ? null : sp, exp: m.ex[1] + tail };
    });
  }

  /* ---------- Find the mistake (3.9.0) ---------- */
  function runErrors(box, set, key) {
    const all = ERRORS.filter((it) => set === 'all' || it.set === set);
    let items = pick(all, Math.min(N, all.length)), i = 0, right = 0;
    const draw = () => {
      if (i >= items.length) {
        const pct = Math.round((100 * right) / items.length);
        box.innerHTML = '<div class="card stack"><h3>' + (pct >= 80 ? LANG.quiz.great : pct >= 50 ? LANG.quiz.ok : LANG.quiz.keepGoing) + ' ' + right + ' / ' + items.length + '</h3>' +
          '<div class="progress"><i style="width:' + pct + '%"></i></div><div class="row"><button class="btn primary" data-act="retry">Try again</button><a class="btn" href="#/drills">All drills</a></div></div>';
        box.querySelector('[data-act=retry]').onclick = () => { items = pick(all, Math.min(N, all.length)); i = 0; right = 0; draw(); };
        saveBest(key, right, items.length);
        return;
      }
      const it = items[i], words = it.bad.split(' ');
      box.innerHTML = '<div class="card stack"><div class="spread"><span class="eyebrow">Sentence ' + (i + 1) + ' of ' + items.length + '</span></div>' +
        '<div class="muted">' + esc(it.en) + ' · Tap the word that is wrong.</div>' +
        '<div class="wline" data-line>' + words.map((w, k) => '<button class="wtile tl" data-k="' + k + '">' + esc(w) + '</button>').join('') + '</div><div data-fb></div></div>';
      box.querySelectorAll('.wtile').forEach((b) => (b.onclick = () => {
        const k = +b.dataset.k, ok = it.i.includes(k);
        if (ok) right++;
        App.recordAnswer(ok);
        box.querySelectorAll('.wtile').forEach((x) => { x.disabled = true; if (it.i.includes(+x.dataset.k)) x.classList.add('bad'); });
        if (!ok) b.classList.add('miss');
        box.querySelector('[data-fb]').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? LANG.quiz.right : LANG.quiz.wrong) + '</b> <span class="tl">' + esc(it.fix) + '</span> ' + App.sayBtn(it.fix) + '<div style="margin-top:4px">' + esc(it.why) + '</div></div>' +
          '<div class="row" style="margin-top:10px"><button class="btn primary" data-act="next">' + (i + 1 < items.length ? 'Next' : 'See score') + '</button></div>';
        const nx = box.querySelector('[data-act=next]');
        nx.onclick = () => { i++; draw(); };
        nx.focus();
      }));
    };
    draw();
  }
  // The same items as a two-way choice, for the daily mix.
  const errorQs = (n) => pick(ERRORS, Math.min(n, ERRORS.length)).map((it) => ({ q: 'Which sentence is right?', sub: it.en, tlo: true, opts: [it.fix, it.bad], a: 0, sayAfter: it.fix, exp: it.fix + ' ' + it.why }));

  /* ---------- Choose the aspect (3.12.0): VERB_SENTENCES with the verb form taken out ---------- */
  const ASP4 = ['inf', 'com', 'inc', 'con'];
  const ASP_NOTE = { com: 'Completed: it already happened.', inc: 'Ongoing or habitual.', con: 'Not yet begun.', inf: 'Infinitive: after gusto, kailangan, puwede, or as a command.' };
  const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  // A sentence qualifies when its form occurs once as a whole word and the same verb and affix has 3 or 4 distinct forms.
  let aspPool = null;
  const aspectPool = () => aspPool || (aspPool = [].concat(...(window.VERBS || []).map((v) => {
    const f = App.verbForms(v), out = [];
    ((window.VERB_SENTENCES || {})[v.r] || []).forEach((s, i) => {
      const [tl, en, form, asp, flags] = s;
      if (!ASP4.includes(asp) || !form) return;
      const re = new RegExp('(^|[^\\p{L}-])(' + escRe(form) + ')(?![\\p{L}-])', 'giu'), hits = [...tl.matchAll(re)];
      if (hits.length !== 1) return;
      const af = Object.keys(f).find((k) => String(f[k][asp] || '').toLowerCase() === form.toLowerCase());
      if (!af) return;
      const at = hits[0].index + hits[0][1].length, first = at === 0, word = tl.slice(at, at + form.length);
      const forms = [...new Set(ASP4.map((a) => String(f[af][a] || '').toLowerCase()).filter(Boolean))];
      if (forms.length < 3) return;
      const opts = forms.map((x) => (first ? cap(x) : x)), ans = first ? cap(form.toLowerCase()) : form.toLowerCase();
      if (word !== ans) return; // odd capitals inside the sentence: the filled gap would not match the recording
      out.push({ r: v.r, i, tl, en, asp, clin: /c/.test(flags || ''), q: tl.slice(0, at) + '____' + tl.slice(at + form.length), opts: [ans].concat(opts.filter((x) => x !== ans)) });
    });
    return out;
  })));
  function aspectQs(set, n) {
    const src = aspectPool().filter((x) => set !== 'c' || x.clin);
    return pick(src, Math.min(n, src.length)).map((x) => ({ q: x.q, sub: x.en, tlq: true, tlo: true, opts: x.opts.slice(), a: 0, sayAfter: x.tl, exp: x.tl + ' ' + ASP_NOTE[x.asp] }));
  }

  /* ---------- Linkers, particles, pronouns, question words, negation (3.12.0): DRILL_GAPS ---------- */
  const gapFull = (it) => it.full || it.q.replace('____', it.a);
  const gapLabel = (o) => (o === 'nothing' ? 'no linker' : o);
  function gapQs(set, n) {
    const src = GAPS.filter((it) => it.set === set);
    return pick(src, Math.min(n, src.length)).map((it) => ({ q: it.q, sub: it.en, tlq: true, tlo: true, opts: it.opts.map(gapLabel), a: it.opts.indexOf(it.a), sayAfter: gapFull(it), exp: gapFull(it) + (it.why ? ' ' + it.why : '') }));
  }
  const GAP_SET = { linker: 'lk', particle: 'pt', pronoun: 'pn', qword: 'qw', negation: 'neg' };

  /* ---------- Change the sentence (3.12.0): DRILL_CHANGE ---------- */
  const CH_INSTR = { q: 'Make it a yes or no question.', neg: 'Make it negative.', po: 'Make it respectful, as to an older patient.' };
  const CH_TIME = { past: 'Say it as already done.', now: 'Say it as happening now.', future: 'Say it as still to come.' };
  const changeInstr = (it) => (it.type === 'asp' ? CH_TIME[it.time] : CH_INSTR[it.type]) || '';
  App.drillChangeInstr = changeInstr;
  // The wrong sentences are shown as options but never spoken (no say, and sayAfter is the model answer).
  function changeQs(set, n) {
    const src = CHANGE.filter((it) => set === 'all' || it.type === set);
    return pick(src, Math.min(n, src.length)).map((it) => ({ q: it.from, sub: changeInstr(it), tlq: true, tlo: true, say: it.from, opts: [it.to].concat((it.wrong || []).slice(0, 3)), a: 0, sayAfter: it.to, exp: it.to + ' ' + it.en + ' ' + it.why }));
  }
  const changeTyped = () => CHANGE.map((it) => ({ prompt: it.from, tlPrompt: true, sub: changeInstr(it), answers: [it.to].concat(it.alt || []), exact: true, en: it.en, why: it.why }));

  /* ---------- Daily mix (3.9.0) ---------- */
  // Dictionary words: the learner's mistakes and due cards first, then any word. Wrong answers come from the same category.
  function vocabQs(n) {
    const s = App.state, now = Date.now();
    const mine = (s.mistakes || []).concat(Object.keys(s.srs || {}).filter((id) => (s.srs[id].due || 0) <= now)).filter((id) => /^d\d+$/.test(id)).map((id) => App.dictById[id]).filter(Boolean);
    const src = [...new Set(shuffle(mine).slice(0, n).concat(pick(App.DICT.filter((e) => e.cat !== 'stigma'), n)))].slice(0, n);
    return src.map((e) => {
      const wrong = [...new Set(shuffle(App.DICT.filter((x) => x.cat === e.cat && x.en !== e.en)).map((x) => x.en))].slice(0, 3);
      return { q: e.tl, sub: 'What does it mean?', tlq: true, say: e.tl, opts: [e.en].concat(wrong), a: 0, cardId: e.id, exp: e.tl + ' = ' + e.en + '.' };
    });
  }
  const dayKey = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
  App.dailyToday = () => (App.state.done.daily || {})[dayKey()];
  // 3.12.0: two words, then one question from each of 8 different parts drawn at random from all the others,
  // including any parts other files add to App.dailyExtra ([tag, fn], read at call time).
  const DAILY_PARTS = [['Markers', () => clozeQs('all', 1)], ['Register', () => switchQs('f-c', 1)], ['Roots', () => rootQs('all', 1)], ['Word families', () => famQs('fam', 1)],
    ['False friends', () => famQs('ff', 1)], ['Focus', () => focusQs(Math.random() < 0.5 ? 'ao' : 'oa', 1)], ['Stress', () => stressQs('ctx', 1)], ['Find the mistake', () => errorQs(1)],
    ['Aspect', () => aspectQs('all', 1)], ['Linkers', () => gapQs('lk', 1)], ['Small words', () => gapQs('pt', 1)], ['Pronouns', () => gapQs('pn', 1)], ['Question words', () => gapQs('qw', 1)],
    ['Negation', () => gapQs('neg', 1)], ['Change the sentence', () => changeQs('all', 1)]];
  const DAILY_N = 8;
  const tagged = (tag) => (q) => Object.assign(q, { sub: tag + ' · ' + (q.sub || '') });
  const dailyQs = () => {
    const extra = Array.isArray(App.dailyExtra) ? App.dailyExtra.filter((p) => Array.isArray(p) && typeof p[1] === 'function') : [];
    const out = vocabQs(2).map(tagged('Vocabulary')), used = new Set(['Vocabulary']);
    for (const [tag, f] of shuffle(DAILY_PARTS.concat(extra))) {
      if (used.size > DAILY_N) break;
      if (used.has(tag)) continue;
      let got = []; try { got = f() || []; } catch (e) { got = []; }
      if (!got.length) continue;
      used.add(tag); out.push(tagged(tag)(got[0]));
    }
    return shuffle(out);
  };
  V.daily = (el) => {
    const done = App.dailyToday(), days = Object.keys(App.state.done.daily || {}).length;
    el.innerHTML = '<h1>Daily mix</h1><p class="muted">Ten mixed questions, about five minutes: two words (your mistakes and due cards first), then one question from each of eight drills, chosen at random. A new set every time you start.</p>' +
      '<div class="card stack"><div class="row"><button class="btn primary" id="dgo">' + (done != null ? 'Go again' : 'Start') + '</button><span class="pill' + (done != null ? ' good' : '') + '">' + (done != null ? 'Done today · best ' + done + '%' : 'Not done today') + '</span>' + (days ? '<span class="muted small">' + days + (days === 1 ? ' day' : ' days') + ' so far</span>' : '') + '</div><div id="dbox"></div></div>' +
      '<div class="row" style="margin-top:14px"><a class="btn" href="#/drills">All drills</a><a class="btn" href="#/flash/due">Flashcards due</a></div>';
    const box = el.querySelector('#dbox');
    el.querySelector('#dgo').onclick = () => {
      const inner = document.createElement('div'); inner.style.marginTop = '12px'; box.innerHTML = ''; box.appendChild(inner);
      App.runQuiz(inner, dailyQs(), { after: '<a class="btn" href="#/">Home</a>', onDone: (r, n) => {
        const s = App.state, d = (s.done.daily = s.done.daily || {}), k = dayKey();
        d[k] = Math.max(d[k] || 0, Math.round((100 * r) / n));
        Object.keys(d).sort().slice(0, -90).forEach((old) => delete d[old]); // keep three months
        App.activity(15); App.save();
      } });
    };
  };

  const RUN = {
    focus: (box, set) => (set === 'type' ? runTyped(box, focusTyped(), 'focus:type', false) : App.runQuiz(box, focusQs(set, N), { onDone: (r, n) => saveBest('focus:' + set, r, n), after: '<a class="btn" href="#/drills">All drills</a>' })),
    stress: (box, set) => App.runQuiz(box, stressQs(set, N), { onDone: (r, n) => saveBest('stress:' + set, r, n), after: '<a class="btn" href="#/drills">All drills</a>' }),
    errors: (box, set) => runErrors(box, set, 'errors:' + set),
    roots: (box, set) => App.runQuiz(box, rootQs(set, N), { onDone: (r, n) => saveBest('roots:' + set, r, n), after: '<a class="btn" href="#/drills">All drills</a>' }),
    families: (box, set) => App.runQuiz(box, famQs(set, N), { onDone: (r, n) => saveBest('families:' + set, r, n), after: '<a class="btn" href="#/drills">All drills</a>' }),
    dictation: (box, set) => runTyped(box, dictItems(set), 'dictation:' + set, true),
    translate: (box, set) => runTyped(box, transItems(set), 'translate:' + set, false),
    switch: (box, set) => App.runQuiz(box, switchQs(set, N), { onDone: (r, n) => saveBest('switch:' + set, r, n), after: '<a class="btn" href="#/drills">All drills</a>' }),
    markers: (box, set) => App.runQuiz(box, clozeQs(set, N), { onDone: (r, n) => saveBest('markers:' + set, r, n), after: '<a class="btn" href="#/drills">All drills</a>' }),
    build: (box) => runBuild(box, 'build:all'),
    aspect: (box, set) => App.runQuiz(box, aspectQs(set, N), { onDone: (r, n) => saveBest('aspect:' + set, r, n), after: '<a class="btn" href="#/drills">All drills</a>' }),
    change: (box, set) => (set === 'type' ? runTyped(box, changeTyped(), 'change:type', false) : App.runQuiz(box, changeQs(set, N), { onDone: (r, n) => saveBest('change:' + set, r, n), after: '<a class="btn" href="#/drills">All drills</a>' }))
  };
  Object.keys(GAP_SET).forEach((id) => (RUN[id] = (box) => App.runQuiz(box, gapQs(GAP_SET[id], N), { onDone: (r, n) => saveBest(id + ':all', r, n), after: '<a class="btn" href="#/drills">All drills</a>' })));
  App.drillQs = { switch: switchQs, markers: clozeQs, roots: rootQs, families: famQs, rootWords, focus: focusQs, stress: stressQs, errors: errorQs, vocab: vocabQs, daily: dailyQs, aspect: aspectQs, aspectPool, gaps: gapQs, change: changeQs, changeTyped }; // for tests

  const tileOf = (d) => { const b = bestOf(d.id); return '<a class="tile" href="#/drills/' + d.id + '"><span class="eyebrow">' + esc(d.eyebrow) + '</span><h3>' + esc(d.title) + '</h3><p>' + esc(d.blurb) + '</p><div class="meta row"><span class="pill' + (b != null ? ' good' : '') + '">' + (b != null ? 'Best ' + b + '%' : 'Not tried yet') + '</span></div></a>'; };
  V.drills = (el) => {
    el.innerHTML = '<h1>Drills</h1><p class="muted">Short grammar, vocabulary, listening and writing drills, ten items each. They go with the lessons; the verb trainer and Panlapi have their own pages.</p>' +
      GROUPS.map((g, i) => { const ds = DRILLS.filter((d) => (d.g || 'Grammar') === g); return ds.length ? '<h2' + (i ? ' style="margin-top:18px"' : '') + '>' + esc(g) + '</h2><div class="grid">' + ds.map(tileOf).join('') + '</div>' : ''; }).join('') +
      '<div class="row" style="margin-top:14px"><a class="btn primary" href="#/daily">Daily mix</a><a class="btn" href="#/drills/handout">' + App.icons.book + ' Print handout</a><a class="btn" href="#/verbs">Verb trainer</a><a class="btn" href="#/affixes">Panlapi</a><a class="btn" href="#/words">Word families</a><a class="btn" href="#/practice">All practice</a></div>';
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
      (d.more || HANDOUT.includes(d.id) ? '<div class="row" style="margin-top:10px">' + (d.more ? '<a class="btn" href="' + d.more[0] + '">' + esc(d.more[1]) + '</a>' : '') + (HANDOUT.includes(d.id) ? '<a class="btn" href="#/drills/handout">' + App.icons.book + ' Print handout</a>' : '') + '</div>' : '') +
      (d.id === 'switch' ? '<div class="notice info" style="margin-top:12px">Practice phrasings, not validated instrument translations.</div>' : '');
    const box = el.querySelector('#dbox');
    el.querySelector('#dgo').onclick = () => {
      const inner = document.createElement('div'); inner.style.marginTop = '12px'; box.innerHTML = ''; box.appendChild(inner);
      RUN[d.id](inner, (el.querySelector('#dset') || {}).value || 'all');
    };
  };
})();
