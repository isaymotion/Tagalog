/* Picture words added in Usap Tayo 3.18.0 (part 3): Sports and hobbies; Clocks and the calendar. Port of Hanashimasho 0.27.0; drawings in pictures/art-more-3.js.
   DRAFT FOR REVIEW by Dr. Navarro (native speaker). All Tagalog here is a draft.
   Shape: the header of picture-sets-home.js. Set ids and part ids are permanent: append only. */
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  { id: 'sports-hobbies', group: 'daily', title: 'Sports and hobbies', lv: 'A1', kind: 'diagram', art: 'sports-hobbies',
    intro: 'Sports and hobbies, one drawing each: the words you need when you ask a patient what they enjoy doing and whether they still enjoy it.',
    parts: [
      { id: 'sakkaa', w: 'soccer', en: 'soccer, football', lv: 'A2', x: 70, y: 72, alt: ['football', 'futbol'] },
      { id: 'yakyuu', w: 'baseball', en: 'baseball', lv: 'B1', x: 144, y: 58, alt: ['beysbol'] },
      { id: 'tenisu', w: 'tennis', en: 'tennis', lv: 'A2', x: 266, y: 73, alt: ['tenis'] },
      { id: 'suiei', w: 'paglangoy', en: 'swimming', lv: 'A2', x: 380, y: 78, alt: ['swimming', 'langoy'] },
      { id: 'jogingu', w: 'jogging', en: 'jogging, running', lv: 'A1', x: 60, y: 164, alt: ['pagtakbo', 'running'] },
      { id: 'yamanobori', w: 'hiking', en: 'hiking, mountain climbing', lv: 'A2', x: 168, y: 170, alt: ['pag-akyat ng bundok', 'akyat-bundok', 'mountain climbing'] },
      { id: 'tsuri', w: 'pangingisda', en: 'fishing', lv: 'A2', x: 230, y: 154, alt: ['fishing'] },
      { id: 'ryokou', w: 'pagbiyahe', en: 'travel, a trip', lv: 'A2', x: 350, y: 166, alt: ['paglalakbay', 'bakasyon', 'biyahe', 'travel'] },
      { id: 'dokusho', w: 'pagbabasa', en: 'reading (books)', lv: 'A1', x: 68, y: 262, alt: ['reading'] },
      { id: 'e', w: 'pagpipinta', en: 'painting', lv: 'B1', x: 126, y: 270, alt: ['painting', 'pagguhit'] },
      { id: 'gitaa', w: 'gitara', en: 'guitar', lv: 'A1', x: 260, y: 272, alt: ['guitar'] },
      { id: 'piano', w: 'piano', en: 'piano', lv: 'A1', x: 350, y: 266 },
      { id: 'karaoke', w: 'videoke', en: 'karaoke', lv: 'A1', x: 60, y: 367, alt: ['karaoke'] },
      { id: 'eiga', w: 'pelikula', en: 'film, movie', lv: 'A1', x: 160, y: 372, alt: ['sine', 'movie'] },
      { id: 'ryouri', w: 'pagluluto', en: 'cooking', lv: 'A1', x: 260, y: 370, alt: ['cooking'] },
      { id: 'geemu', w: 'video games', en: 'video games', lv: 'A2', x: 350, y: 362, alt: ['video game', 'games'] }
    ],
    say: [
      { tl: 'Mahilig pa rin po ba kayo sa pangingisda?', en: 'Do you still enjoy fishing?', p: 'tsuri' },
      { tl: 'Nagbabasa po ako ng libro para hindi ako mainip dito sa ward.', en: 'I read books so that I do not get bored here on the ward.', p: 'dokusho' },
      { tl: 'Nagjo-jogging pa rin po ba kayo tuwing umaga?', en: 'Do you still go jogging every morning?', p: 'jogingu' },
      { tl: 'Kapag hindi po ako makatulog, tumutugtog ako ng gitara.', en: 'When I cannot sleep, I play the guitar.', p: 'gitaa' },
      { tl: 'Bata pa lang po ako, tumutugtog na ako ng piano.', en: 'I have played the piano since I was a child.', p: 'piano' },
      { tl: 'Masaya po ako kapag nagvi-videoke kami ng mga kaibigan ko.', en: 'I am happy when my friends and I sing karaoke.', p: 'karaoke' },
      { tl: 'Lumalangoy po ako dalawang beses sa isang linggo para sa kalusugan ko.', en: 'I swim twice a week for my health.', p: 'suiei' },
      { tl: 'Paglabas ko po ng ospital, gusto kong bumiyahe ulit kasama ang pamilya ko.', en: 'When I leave the hospital, I want to travel with my family again.', p: 'ryokou' },
      { tl: 'Kapag maganda po ang pakiramdam ko, nagpipinta ako.', en: 'When I feel well, I paint.', p: 'e' },
      { tl: 'Mahilig po akong manood ng baseball sa TV.', en: 'I like watching baseball on TV.', p: 'yakyuu' }
    ] },
  { id: 'clock-calendar', group: 'daily', title: 'Clocks and the calendar', lv: 'A1', kind: 'diagram', art: 'clock-calendar',
    intro: 'Clocks and a month calendar: crossed-out days are past (the last one is yesterday), today is circled and the arrow points to tomorrow; the bars on the left mark last, this and next week; shaded columns are the weekend, the flag is a public holiday, and the rising sun and the moon are morning and night.',
    parts: [
      { id: 'tokei', w: 'orasan', en: 'clock', lv: 'A1', x: 32, y: 122, alt: ['wall clock'] },
      { id: 'mezamashi', w: 'alarm clock', en: 'alarm clock', lv: 'A2', x: 96, y: 240, alt: ['alarm'] },
      { id: 'udedokei', w: 'relo', en: 'wristwatch', lv: 'A1', x: 34, y: 310, alt: ['wristwatch'] },
      { id: 'karendaa', w: 'kalendaryo', en: 'calendar', lv: 'A2', x: 390, y: 50, alt: ['calendar'] },
      { id: 'kinou', w: 'kahapon', en: 'yesterday', lv: 'A1', x: 257, y: 198 },
      { id: 'kyou', w: 'ngayong araw', en: 'today', lv: 'A1', x: 291, y: 198, alt: ['ngayon'] },
      { id: 'ashita', w: 'bukas', en: 'tomorrow', lv: 'A1', x: 325, y: 198 },
      { id: 'senshuu', w: 'noong isang linggo', en: 'last week', lv: 'A2', x: 150, y: 142, alt: ['nakaraang linggo', 'last week'] },
      { id: 'konshuu', w: 'ngayong linggo', en: 'this week', lv: 'A2', x: 150, y: 186, alt: ['this week'] },
      { id: 'raishuu', w: 'susunod na linggo', en: 'next week', lv: 'A2', x: 150, y: 230, alt: ['sa susunod na linggo', 'next week'] },
      { id: 'shuumatsu', w: 'weekend', en: 'weekend', lv: 'A2', x: 393, y: 274, alt: ['Sabado at Linggo'] },
      { id: 'shukujitsu', w: 'holiday', en: 'public holiday', lv: 'A2', x: 224, y: 241, alt: ['pista opisyal', 'piyesta opisyal'] },
      { id: 'asa', w: 'umaga', en: 'morning', lv: 'A1', x: 266, y: 342 },
      { id: 'yoru', w: 'gabi', en: 'night, evening', lv: 'A1', x: 330, y: 334 }
    ],
    say: [
      { tl: 'Ngayong linggo po lalabas ang resulta ng laboratoryo ninyo.', en: 'Your lab results will come out this week.', p: 'konshuu' },
      { tl: 'Sa susunod na linggo po ang balik ninyo sa OPD.', en: 'Your next OPD visit is next week.', p: 'raishuu' },
      { tl: 'Kahapon pa po ako nilalagnat.', en: 'I have had a fever since yesterday.', p: 'kinou' },
      { tl: 'Uuwi na po kayo bukas, kaya ihanda na ninyo ang mga gamit ninyo.', en: 'You go home tomorrow, so please get your things ready.', p: 'ashita' },
      { tl: 'Tuwing umaga po may ehersisyo ang mga pasyente sa ward.', en: 'The patients on the ward have exercise every morning.', p: 'asa' },
      { tl: 'Hirap po ba kayong makatulog sa gabi?', en: 'Do you have trouble falling asleep at night?', p: 'yoru' },
      { tl: 'Hindi ko po narinig ang tunog ng alarm clock.', en: 'I did not hear the alarm clock ring.', p: 'mezamashi' },
      { tl: 'Wala na po akong ganang kumain mula pa noong isang linggo.', en: 'I have had no appetite since last week.', p: 'senshuu' },
      { tl: 'Tuwing weekend po dumadalaw ang pamilya niya.', en: 'His family visits every weekend.', p: 'shuumatsu' },
      { tl: 'Sarado po ang OPD kapag holiday.', en: 'The OPD is closed on public holidays.', p: 'shukujitsu' }
    ] }
]);
