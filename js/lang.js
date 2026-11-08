/* Language pack: everything in the ENGINE (core.js, views.js, psych-views.js, app.js) that is specific to the
   target language lives here, so a sister app for another language (e.g. Hablemos, Spanish) can reuse the engine
   by replacing this file and the data files. Content files (js/data/*) are per language by nature.
   Shell UI strings (menu, footer, backup) are in data/strings.js and go through t(). */
window.LANG = {
  code: 'tl',                 // short code used in CSS classes (.tl) and quiz flags
  name: 'Tagalog',            // how the app names the language in UI text
  nameFull: 'Tagalog (Filipino)',
  voiceName: 'Filipino',      // how device voices for this language are referred to
  bcp47: 'fil-PH',            // speech synthesis / recognition fallback
  // Device voices that are THIS language: by lang tag, or by voice name.
  voiceLang: /^(fil|tl)([-_]|$)/i,
  voiceNameMatch: /filipino|tagalog/i,
  // Voices whose language reads this language's spelling closely, used when no native voice exists. Never English.
  nearVoices: [/^id([-_]|$)/i, /^ms([-_]|$)/i, /^es([-_]|$)/i, /^it([-_]|$)/i],
  // Natural neural voices offered by the audio-pack workflow (.github/workflows/audio-pack.yml), for the Settings help text.
  packVoices: 'Blessica, Angelo',
  deviceVoiceHelp: 'Android: Settings → Google Text-to-speech → install Filipino. Microsoft Edge on a computer includes natural Filipino voices (Blessica, Angelo). iPhone has no Filipino voice, so use the recorded pack.',
  testLine: 'Magandang umaga po. Kumusta po kayo?',

  // Two registers for every interview phrase: f = formal/respectful, c = casual/everyday.
  registers: {
    f: { label: 'Respectful (po)', short: 'Respectful', help: 'uses <i>po</i> and <i>kayo</i> (for elders, most adult patients, and family)' },
    c: { label: 'Everyday / Taglish', short: 'Everyday', help: 'uses <i>ka/mo</i> and some Taglish (for younger patients and peers)' }
  },
  registerIntro: 'each in a respectful (<i>po</i>) and an everyday form',

  // Short words the engine prints in quizzes and drills.
  quiz: { great: 'Magaling!', ok: 'Ayos!', keepGoing: 'Kaya mo yan!', right: 'Tama!', wrong: 'Mali.', toTarget: 'EN→TL', toEnglish: 'TL→EN' },
  yes: 'Oo', no: 'Hindi',
  // Flashcard direction labels (settings.cardDir values stay 'tl-en' / 'en-tl' for backup compatibility).
  cardDir: { 'tl-en': 'Filipino first', 'en-tl': 'English first' },
  dictDir: { tl: 'Filipino → English', en: 'English → Filipino' },

  // Point board: the strip the interviewer reads after the patient taps a tile.
  point: { title: 'Ituro', subtitle: 'Point to your answer', pass: 'Ipakita sa pasyente ang screen na ito.', passEn: 'Hand the phone or tablet to the patient.' }
};
