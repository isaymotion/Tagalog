# Usap Tayo 3.10.0 plan: "Picture words, body map, signs and buttons, picture lessons"
Port of Hanashimashō 0.24.0 (repo /home/claude/japanese, read-only reference) into Usap Tayo (repo /home/claude/tagalog,
branch wip-3.10.0). Tests and Usap Tayo's own handoff: /home/claude/tl-devtools (tests/data_check.js, tests/smoke.py,
HANDOFF.md). Work folder: /home/claude/work-tl (src/ = the Japanese data files to translate FROM, art-ref/ = PNG renders
of every picture with numbered pins and the Japanese word list, new/ = where writers put their files).

Learner: an English-speaking resident or nurse learning Tagalog for the ward at Mariveles Mental Wellness and General
Hospital, Bataan. Dr. Navarro, a native speaker, reviews everything: all new Tagalog is a DRAFT (say so in each file header).

## Rules that never change
- Plain conversational Filipino as people in Bataan / Metro Manila really speak it, not deep or textbook Tagalog. Where
  everyone uses the English or Spanish-derived word, use it (ref, aircon, electric fan, cellphone, kutsara, tinidor,
  bintana, kotse). Prefer the Tagalog word when both are common (ilaw, pinto, upuan, mesa/lamesa).
- Respectful register (po, kayo) in anything said to a patient or an elder.
- No stigmatizing words (baliw, adik, sira-ulo ...). No medicine names, doses or method detail. No real brands, hospital
  names, people or phone numbers. The only numbers allowed: 911 and the NCMH Crisis Hotline 1553, and only where a line
  truly needs them (prefer "ang doktor", "ang nars").
- Nothing stores patient data. No published pain or rating scale wording, no faces scale.
- Plain UI English: active, no em-dash asides.
- Spelling for the recorded voice: write normal sentence case. NEVER write a Tagalog word in ALL CAPITALS in data (the
  voice spells all-caps words letter by letter); real acronyms stay in capitals (CR, OPD, ER, ATM, TV, ID, PWD).
  No accent marks anywhere (the voice drops accented vowels).
- Agents never run git commands. One agent = the file(s) named in its brief.

## A. Data shapes (plain Tagalog strings; field `tl` where the Japanese app has `ja`)
### A1. Picture sets: js/data/picture-sets-<group>.js (9 files: body home town animals machines food clothes nature daily)
```
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  { id: 'body-front', group: 'body', title: 'The body (front)', lv: 'A1', kind: 'diagram', art: 'body-front',
    intro: 'One English sentence on what this picture teaches.',
    parts: [ { id: 'atama', w: 'ulo', en: 'head', lv: 'A1', x: 150, y: 28, alt: ['ang ulo'] }, ... ],
    say:   [ { tl: 'Masakit po ang ulo ko.', en: 'My head hurts.', p: 'atama' }, ... ] },
  { id: 'pets-farm', group: 'animals', title: 'Pets and farm animals', lv: 'A1', kind: 'cards',
    intro: '...', parts: [ { id: 'aso', w: 'aso', en: 'dog', lv: 'A1', pic: '🐕' }, ... ], say: [ ... ] }
]);
```
- The 38 set ids, `group`, `kind` and `art` are the SAME as in src/picture-sets-<group>.js. Levels: N5 -> 'A1', N4 -> 'A2';
  a part may be 'A1', 'A2' or 'B1' (at most a quarter of a set B1).
- DIAGRAM sets: the drawings are reused unchanged, so keep every part's `id`, `x`, `y` exactly as in the source and label
  what is DRAWN there (look at art-ref/<group>-<set>-light.png; pin numbers = order of `parts`). If the drawn thing is
  Japanese (chopsticks, rice bowl, ticket gate, futon), name it the way a Filipino would ("chopsticks", "mangkok ng kanin")
  and adapt the gloss; only if no sensible label exists, leave that part out and say so in your report. Never add a part
  to a diagram and never move a pin.
- CARD sets (emoji): free to adapt to the Philippines. You may replace parts (new ids = the Tagalog word in plain ASCII)
  so the set teaches what matters here: kalabaw, kambing, manok; mangga, saging, niyog, kalamansi; kanin, ulam, sabaw,
  pandesal; dyip, traysikel (🛺 is Emoji 12.0), bangka; tag-init, tag-ulan, bagyo, baha. Each `pic` is ONE emoji from
  Emoji 12.0 (2019) or older, no flags, no skin tones, no ZWJ sequences. 10 to 16 parts.
- `w` = the word as it is said, lower case, 1 to 3 words (likod ng tuhod, electric fan). Optional `alt` = other answers
  to accept when the learner types (ref / refrigerator / pridyider; mesa / lamesa). `en` = short gloss.
- `say` = 6 to 10 "listen and point" sentences per set: a natural sentence whose answer is exactly ONE part (`p`) and
  no other part of the set. Vary them (where it is, what you do with it, what it is like, a patient's or nurse's line);
  at least a third clinical or health-related where the topic allows; po where a patient or elder is addressed.
- Ids are permanent after release: append only.
### A2. Art: pictures/art-<group>.js: copied unchanged from the Japanese repo (no language inside).
### A3. Signs: js/data/signs.js, panels: js/data/signs-panels.js. PHILIPPINE signs written fresh, not translated.
```
window.SIGNS = { groups: [ { id: 'hospital', title: 'In the hospital', note: '...' }, ... ],
  signs: [ { id: 'sg-001', g: 'hospital', tl: 'Bawal manigarilyo', en: 'No smoking', lv: 'A1', style: 'red',
             lang: 'tl', caps: true, note: '' }, ... ] };
window.SIGN_PANELS = [ { id: 'electric-fan', title: 'Electric fan', lv: 'A1', note: '...',
  rows: [ [ { id: 'off', label: '0', en: 'off', kind: 'btn' }, ... ], [ ... ] ],   // 2 to 4 rows, 6 to 12 controls
  tasks: [ { q: 'Pakilakasan po ang electric fan.', en: 'Please turn the fan up.', a: 'three', why: '...' }, ... ] } ];
```
- `tl` = what is really printed, in sentence case; `caps: true` = the board shows it in capitals (CSS), as most real
  signs do. `lang`: 'tl' (Tagalog), 'mix' (Taglish), 'en' (English only). English-only signs are NOT recorded and get
  no speaker button; include them only when the meaning is Philippine-specific or easy to misread (Comfort Room, No ID
  No Entry, Loading and Unloading, Senior Citizen / PWD Lane, Pay Here, Push / Pull are too easy: skip those) and keep
  them under a fifth of all signs. `style`: green (exit, safe), red (forbidden, fire, emergency), blue (information,
  must do), yellow (caution), plain. Sign ids sg-001..., permanent.
- Groups (7): hospital (OPD, ER, botika, cashier / bayaran, CR, oras ng dalaw, bawal ..., magsuot ng face mask,
  maghugas ng kamay, pila, numero), commute (jeepney, bus, tricycle, MRT / LRT, terminal: sakayan, babaan, bawal
  magsakay at magbaba, barya lang po sa umaga, bayad muna bago baba, priority seat), street (bawal tumawid, tawiran,
  bawal pumarada, bawal magtapon ng basura, bawal umihi dito, mag-ingat, ginagawa ang kalsada, mabagal), building
  (labasan, pasukan, hagdan, bawal pumasok, sarado, bukas, sira, basang sahig, itulak, hilahin, pakisara ang pinto),
  shop (tingi, sukli, walang utang, bawal tumawad, libre, bagsak-presyo, ubos na, pila dito), cr (lalaki, babae,
  buhusan pagkatapos gumamit, huwag itapon ang tissue sa inidoro, tabo, timba, walang tubig), medicine (label WORDS on
  a medicine packet or a ward instruction: bago kumain, pagkatapos kumain, bago matulog, umaga, tanghali, gabi, ... beses
  sa isang araw, inumin, ipahid, huwag ipainom sa bata, ilayo sa mga bata: NO medicine names, NO doses).
  About 110 to 120 signs.
- Panels (10): electric-fan, rice-cooker, aircon-remote, tv-remote, washing-machine (twin tub: wash timer, drain,
  spin), water-dispenser, atm (generic), elevator, queue-kiosk (OPD / cashier number machine), bed-call (hospital bed
  and nurse call). Control `label` = what is printed on real machines here (mostly English: ON, OFF, COOK, WARM, TEMP,
  FAN, SWING, TIMER, WITHDRAWAL, BALANCE INQUIRY, HOT, COLD); `kind` btn | lamp (status light, never an answer) | dial.
  The TASK is the Tagalog part: `q` = a natural spoken request or instruction in Tagalog that a patient, relative or
  co-worker would say ("Pakihinaan po ang aircon, giniginaw na si Lola."), `en` = its English, `a` = the ONE right
  control id, `why` = one English line. 5 or 6 tasks a panel. Tasks are recorded; labels are not.
### A4. Body map: js/data/picture-bodymap.js
`window.PICTURE_BODYMAP = { sets: ['body-front', 'body-back'], ask: [ { tl, en } x8 ], words: [ { tl, en } x10 ],
  scale: { tl, en } }` = questions a clinician asks with po ("Saan po masakit? Pakituro po."), pain words a patient can
point to (makirot, mahapdi, kumikirot, parang tinutusok, namamanhid, nangangalay, mabigat, mainit, makati, pumipintig
...), and our own caption for a plain 0 to 10 line (0 = walang sakit, 10 = pinakamatinding sakit). Nothing is stored.
### A5. Picture lessons: js/data/lessons-pictures.js, `window.LESSONS.push(...)` (same lesson shape as js/data/lessons.js:
`{ id, level, unit, title, summary, body: HTML, quiz: [[q, [opts], correctIdx, expl]] }`, examples
`<div class="ex"><b>Tagalog</b><span>English</span></div>`, notes `<div class="note">`, 5 quiz items each). A body may
show a picture: `<div class="pic-embed" data-pic="<set id>"></div>`. Unit name for all ten: `Picture lessons`.
| id | level | grammar | pictures |
|---|---|---|---|
| pic-nasaan | A1 | Nasaan? nasa; sa ibabaw / ilalim / loob / labas / harap / likod / tabi / gitna / pagitan ng; nandito, nandiyan, nandoon | positions, living-room |
| pic-masakit | A1 | body words with Masakit ang ... ko; Saan po masakit?; dito, banda rito; makati, namamaga, manhid, mahapdi (clinical) | body-front, face |
| pic-paglalarawan | A1 | describing: adjective + ang (Mahaba ang buntot ng aso); may / walang; malaki, maliit, mahaba, maikli | animal-parts |
| pic-bilang | A1 | counting things: Ilan?; isang, dalawang + noun (linker); piraso, baso, tasa, pares, kilo; mga | pets-farm, fruit-veg |
| pic-suot | A2 | what someone wears: nakasuot ng; naka- + noun (nakasalamin, nakatsinelas, naka-face mask); colours (pulang damit, kulay asul); describing a patient's appearance | clothes |
| pic-direksyon | A2 | directions: diretso, kumanan, kumaliwa, sa kanto, katapat, katabi, lampas ng; Para po!; Saan po ang ...? | street, hospital-floor |
| pic-karatula | A2 | how signs talk: bawal + verb, mag-ingat, paki-, huwag, dito / rito, lamang; Taglish signs; link `#/signs` | (none; link) |
| pic-makina | A2 | machine talk: pindutin, i-on, i-off (i- + English), buksan, patayin, isaksak, hugutin, hinaan, lakasan; una, tapos, pagkatapos; kapag pinindot mo ... ; link `#/signs?tab=panels` | computer-phone, appliances |
| pic-kalagayan | A2 | how things are: naka- states (nakabukas, nakasara, nakapatay ang ilaw, nakapatong sa mesa, nakasabit) | living-room, bedroom |
| pic-paliwanag | B1 | a clinician explaining with a diagram: Ito po ang ..., nandito po, dito banda, nakakabit sa, ganito po; ito ang trabaho ng ...; plain words, NO treatment promises | inside, body-front |
### A6. Dictionary: new words go at the END of js/data/dict-themes.js after a `# ---- 3.10.0 ----` line, format
`tagalog|english|pos|category|root|note` (existing categories only; see App.CATS in js/core.js). Append only.

## B. Pages (ported from the Japanese modules, same routes and behaviour)
- #/pictures (js/pictures.js): list by group with a level seg (All, A1, A2); set page
  #/pictures/<id>?tab=learn|identify|label|listen|print. Label it: Choose (4 words) or Type (accepts `w` and any `alt`,
  compared in lower case without punctuation or accents; a near miss by App.similarity >= 85 on words of 6+ letters counts).
- js/picture-print.js: print sheet for any set (blank or filled labelling sheet + answer key, A4 / Letter) and the body
  map #/pictures/bodymap (tap where it hurts, questions and pain words with sound, one-page handout, plain 0 to 10
  line, nothing stored). Browser print (window.print), not pdfmake.
- #/signs (js/signs.js): tabs Learn (boards by group; tap = meaning, note, speaker unless lang 'en'), Quiz (sign ->
  meaning, meaning -> sign), Panels (a Tagalog request is shown and spoken; press the right control; English after answering).
- Scores: state.done.pictures['identify|label|listen:<set id>'], state.done.signs['quiz:<g|all>:<mode>'], ['panel:<id>'].
- Menu keys `pictures` ("Picture words") and `signs` ("Signs and buttons") in NAV Learn, TITLES, BLURB, MORE_KEYS, the
  core.js search Page list; a "Pictures" group of three tiles on the Practice page (Picture words, Body map, Signs and buttons).
