global.window = global; const fs = require('fs'); const repo = process.argv[2]; const W = '/home/claude/work/p10/';
['core', 'everyday', 'clinical', 'more', 'themes'].forEach((f) => require(repo + '/js/data/dict-' + f + '.js'));
const lines = [].concat(window.DICT_RAW, window.DICT_RAW2 || []).flatMap((x) => String(x).split('\n')).map((l) => l.trim()).filter((l) => l && !l.startsWith('#'));
const have = new Set(lines.map((l) => l.split('|')[0].toLowerCase()));
const q = (s) => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
const CATS = 'basics particles grammar pronouns questions numbers time colors people family body food home money work places nature clothing school tech travel adjectives modals verbs emotions mind health beliefs risk substance clinical routine civic'.split(' ');
const POS = 'n v adj adv pron part conj prep interj num phr'.split(' ');
const out = [], exs = { a: [], b: [] }; let drop = 0;
['a', 'b'].forEach((k) => { delete window.NEW_WORDS; delete window.NEW_EX; require(W + 'words-' + k + '.js');
  const ex = new Map(window.NEW_EX.map((x) => [x[0], x]));
  window.NEW_WORDS.forEach((l) => { const p = l.split('|'); const h = p[0].toLowerCase(); const key = p[0] + '|' + p[1];
    if (have.has(h) || p.length < 4 || !POS.includes(p[2]) || !CATS.includes(p[3]) || /`|\$\{/.test(l) || /\b[A-Z]{2,}\b/.test(p[0]) || !ex.has(key)) { drop++; console.log('DROP', l); return; }
    have.add(h); while (p.length < 6) p.push(''); out.push(p.join('|').replace(/\|+$/, (m) => m.length > 2 ? '||' : m)); exs[k].push(ex.get(key)); }); });
let s = fs.readFileSync(repo + '/js/data/dict-themes.js', 'utf8'); const end = s.lastIndexOf('`);');
s = s.slice(0, end) + '# ---- 3.17.0 ----\n' + out.join('\n') + '\n' + s.slice(end);
fs.writeFileSync(repo + '/js/data/dict-themes.js', s);
[['a', 7], ['b', 8]].forEach(([k, n]) => fs.writeFileSync(repo + '/js/data/examples-' + n + '.js',
  `/* Example sentences for dictionary words, part ${n} (3.17.0): the words added in 3.17.0. Draft for review. Key = 'tagalog|english' of the dictionary line, exactly. */\nwindow.DICT_EX = (window.DICT_EX || []).concat([\n` +
  exs[k].map((x) => '  [' + x.map(q).join(', ') + ']').join(',\n') + '\n]);\n'));
console.log('words', out.length, 'dropped', drop);
// drills
require(W + 'drills-more.js'); const o = (x) => '{ ' + Object.keys(x).map((k) => k + ': ' + (Array.isArray(x[k]) ? '[' + x[k].map((v) => typeof v === 'number' ? v : q(v)).join(', ') + ']' : q(x[k]))).join(', ') + ' }';
fs.writeFileSync(repo + '/js/data/drills-more.js', `/* More drill items (3.17.0), appended to DRILL_ERRORS (js/data/drills.js) and DRILL_CHANGE (js/data/drills-grammar.js); loaded after both.
   Same shapes. Draft for review. */
(window.DRILL_ERRORS = window.DRILL_ERRORS || []).push(
${MORE_ERRORS.map((x) => '  ' + o(x)).join(',\n')}
);
(window.DRILL_CHANGE = window.DRILL_CHANGE || []).push(
${MORE_CHANGE.map((x) => '  ' + o(x)).join(',\n')}
);
`);
// readings and dialogues
require(W + 'reading-more.js'); require(W + 'dialogues-more.js');
fs.writeFileSync(repo + '/js/data/reading-2.js', '/* Reading passages, second file (3.17.0): six passages, A2 to C1. Same shape as js/data/reading.js. Draft for review. */\n(window.READING = window.READING || []).push(\n' + NEW_READING.map((r) => '  ' + JSON.stringify(r)).join(',\n') + '\n);\n');
fs.writeFileSync(repo + '/js/data/dialogues-2.js', '/* Dialogues, second file (3.17.0): six dialogues, A2 to B2. Same shape as js/data/dialogues.js. Draft for review. */\n(window.DIALOGUES = window.DIALOGUES || []).push(\n' + NEW_DIALOGUES.map((r) => '  ' + JSON.stringify(r)).join(',\n') + '\n);\n');
console.log('errors', MORE_ERRORS.length, 'change', MORE_CHANGE.length, 'reading', NEW_READING.length, 'dialogues', NEW_DIALOGUES.length);
