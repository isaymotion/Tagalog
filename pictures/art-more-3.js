/* Line drawings for the picture sets added in 0.27.0 (part 3). No language in here: labels come from the sets. */
window.PICTURE_ART = window.PICTURE_ART || {};
/* sports-hobbies: a 4 x 4 grid of tiles, one drawn object per activity. Rows: football, bat and ball, racket and ball, swimmer
   in waves / running shoe, mountain with a flag, fishing rod with a fish, suitcase / open book, palette and brush, guitar,
   piano keys / microphone, film clapperboard, steaming pot, game controller. */
window.PICTURE_ART['sports-hobbies'] = { vb: [400, 400], svg:
  '<g stroke="currentColor" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">' +
  '<path d="M15 5H85Q95 5 95 15V85Q95 95 85 95H15Q5 95 5 85V15Q5 5 15 5Z M115 5H185Q195 5 195 15V85Q195 95 185 95H115Q105 95 105 85V15Q105 5 115 5Z M215 5H285Q295 5 295 15V85Q295 95 285 95H215Q205 95 205 85V15Q205 5 215 5Z M315 5H385Q395 5 395 15V85Q395 95 385 95H315Q305 95 305 85V15Q305 5 315 5Z" stroke-width="1.5"/>' +
  '<path d="M15 105H85Q95 105 95 115V185Q95 195 85 195H15Q5 195 5 185V115Q5 105 15 105Z M115 105H185Q195 105 195 115V185Q195 195 185 195H115Q105 195 105 185V115Q105 105 115 105Z M215 105H285Q295 105 295 115V185Q295 195 285 195H215Q205 195 205 185V115Q205 105 215 105Z M315 105H385Q395 105 395 115V185Q395 195 385 195H315Q305 195 305 185V115Q305 105 315 105Z" stroke-width="1.5"/>' +
  '<path d="M15 205H85Q95 205 95 215V285Q95 295 85 295H15Q5 295 5 285V215Q5 205 15 205Z M115 205H185Q195 205 195 215V285Q195 295 185 295H115Q105 295 105 285V215Q105 205 115 205Z M215 205H285Q295 205 295 215V285Q295 295 285 295H215Q205 295 205 285V215Q205 205 215 205Z M315 205H385Q395 205 395 215V285Q395 295 385 295H315Q305 295 305 285V215Q305 205 315 205Z" stroke-width="1.5"/>' +
  '<path d="M15 305H85Q95 305 95 315V385Q95 395 85 395H15Q5 395 5 385V315Q5 305 15 305Z M115 305H185Q195 305 195 315V385Q195 395 185 395H115Q105 395 105 385V315Q105 305 115 305Z M215 305H285Q295 305 295 315V385Q295 395 285 395H215Q205 395 205 385V315Q205 305 215 305Z M315 305H385Q395 305 395 315V385Q395 395 385 395H315Q305 395 305 385V315Q305 305 315 305Z" stroke-width="1.5"/>' +
  /* football */
  '<circle cx="50" cy="50" r="30" fill="var(--surface)"/>' +
  '<path d="M50 39L60.5 46.6L56.5 58.9L43.5 58.9L39.5 46.6Z" fill="currentColor" fill-opacity="0.2"/>' +
  '<path d="M50 39V20M60.5 46.6L78.5 40.7M56.5 58.9L67.6 74.3M43.5 58.9L32.4 74.3M39.5 46.6L21.5 40.7" stroke-width="2"/>' +
  /* baseball: bat and ball */
  '<g transform="translate(100 0)"><path d="M24 70L66 24Q72 18 78 24Q84 30 78 36L32 78Z" fill="currentColor" fill-opacity="0.12"/>' +
  '<circle cx="26" cy="77" r="5" fill="var(--surface)"/>' +
  '<circle cx="70" cy="70" r="12" fill="var(--surface)"/><path d="M62 62Q67 70 62 78M78 62Q73 70 78 78" stroke-width="2"/></g>' +
  /* tennis: racket and ball */
  '<g transform="translate(200 0)"><g transform="rotate(-35 50 50)">' +
  '<ellipse cx="50" cy="34" rx="18" ry="23" fill="var(--surface)" stroke-width="3"/>' +
  '<path d="M42 15.4V52.6M50 13V55M58 15.4V52.6M33.8 24H66.2M32 34H68M33.8 44H66.2" stroke-width="1.5"/>' +
  '<path d="M44 56L50 66L56 56"/><rect x="46" y="66" width="8" height="24" rx="3" fill="currentColor" fill-opacity="0.2"/></g>' +
  '<circle cx="24" cy="76" r="9" fill="currentColor" fill-opacity="0.12"/><path d="M16 72Q24 76 32 72" stroke-width="2"/></g>' +
  /* swimming: head and arm above waves */
  '<g transform="translate(300 0)"><circle cx="38" cy="50" r="10" fill="var(--surface)"/><path d="M28 47H48" stroke-width="2"/>' +
  '<path d="M29.3 45A10 10 0 0 1 46.7 45Z" fill="currentColor" fill-opacity="0.2" stroke-width="1.5"/>' +
  '<path d="M50 60Q58 22 82 40" stroke-width="3"/><circle cx="83" cy="42" r="3" fill="currentColor" fill-opacity="0.2"/>' +
  '<path d="M87 31L91 26M88 40H92M14 54L10 49M20 52L18 46" stroke-width="2"/>' +
  '<path d="M10 62Q20 54 30 62T50 62T70 62T90 62M10 76Q20 68 30 76T50 76T70 76T90 76"/></g>' +
  /* jogging: a running shoe with speed lines */
  '<g transform="translate(0 100)"><path d="M18 70V50Q18 42 26 42H36Q42 52 54 53L72 56Q88 59 90 70Z" fill="currentColor" fill-opacity="0.12"/>' +
  '<path d="M16 70H92V76H16Z" fill="var(--surface)"/><path d="M42 47L48 43M48 50L54 46M54 52L60 48" stroke-width="2"/>' +
  '<path d="M8 50H14M6 58H13M8 66H13" stroke-width="2"/></g>' +
  /* hiking: mountain with a trail and a flag */
  '<g transform="translate(100 100)"><path d="M10 82L42 32L58 54L66 44L90 82Z" fill="currentColor" fill-opacity="0.1"/>' +
  '<path d="M34 44L42 32L50 44L46 41L42 46L38 41Z" fill="var(--surface)"/>' +
  '<path d="M42 32V14"/><path d="M42 14L56 18L42 23Z" fill="currentColor" fill-opacity="0.2"/>' +
  '<path d="M30 82L46 70L36 60L44 50" stroke-width="2" stroke-dasharray="3 4"/></g>' +
  /* fishing: rod, line and fish above water */
  '<g transform="translate(200 100)"><path d="M14 84Q40 30 72 14" stroke-width="3"/><circle cx="22" cy="70" r="5" fill="var(--surface)"/>' +
  '<path d="M72 14V42" stroke-width="1.5"/><path d="M72 44Q80 54 72 70Q64 54 72 44Z" fill="currentColor" fill-opacity="0.15"/>' +
  '<path d="M72 70L66 78H78Z" fill="currentColor" fill-opacity="0.15"/><path d="M38 86Q46 80 54 86T70 86T86 86" stroke-width="2"/></g>' +
  /* travel: suitcase */
  '<g transform="translate(300 100)"><path d="M40 34V24H60V34" stroke-width="3"/>' +
  '<rect x="22" y="34" width="56" height="44" rx="6" fill="currentColor" fill-opacity="0.12"/><path d="M36 34V78M64 34V78"/>' +
  '<circle cx="31" cy="83" r="4" fill="var(--surface)"/><circle cx="69" cy="83" r="4" fill="var(--surface)"/>' +
  '<path d="M78 42L86 48V58L80 56" stroke-width="2"/></g>' +
  /* reading: an open book */
  '<g transform="translate(0 200)"><path d="M50 30Q34 22 14 26V72Q34 68 50 76Z M50 30Q66 22 86 26V72Q66 68 50 76Z" fill="currentColor" fill-opacity="0.1"/>' +
  '<path d="M50 30V76M22 36Q32 34 42 38M22 46Q32 44 42 48M22 56Q32 54 42 58M58 38Q68 34 78 36M58 48Q68 44 78 46" stroke-width="1.5"/></g>' +
  /* painting: palette and brush */
  '<g transform="translate(100 200)"><path d="M48 20C74 20 88 36 86 52C84 62 72 60 68 66C64 74 70 82 54 82C28 82 12 66 12 48C12 32 26 20 48 20Z" fill="var(--surface)"/>' +
  '<circle cx="62" cy="64" r="5"/><circle cx="32" cy="36" r="6" fill="currentColor" fill-opacity="0.2"/><circle cx="50" cy="31" r="6" fill="currentColor" fill-opacity="0.2"/>' +
  '<circle cx="68" cy="38" r="6" fill="currentColor" fill-opacity="0.2"/><circle cx="26" cy="54" r="6" fill="currentColor" fill-opacity="0.2"/>' +
  '<path d="M52 58L88 90" stroke-width="3"/><path d="M42 48Q42 42 48 44L54 52L50 58Z" fill="currentColor" fill-opacity="0.2"/></g>' +
  /* guitar */
  '<g transform="translate(200 200)"><g transform="rotate(30 50 50)">' +
  '<path d="M50 38C40 38 37 46 40 53C28 57 30 90 50 90C70 90 72 57 60 53C63 46 60 38 50 38Z" fill="currentColor" fill-opacity="0.12"/>' +
  '<circle cx="50" cy="64" r="6" fill="var(--surface)"/><path d="M44 80H56" stroke-width="3"/>' +
  '<rect x="46.5" y="10" width="7" height="30" rx="2" fill="var(--surface)"/><rect x="44" y="4" width="12" height="9" rx="2" fill="currentColor" fill-opacity="0.2"/></g></g>' +
  /* piano keys */
  '<g transform="translate(300 200)"><rect x="12" y="28" width="76" height="46" rx="3" fill="var(--surface)"/>' +
  '<path d="M22.9 28V74M33.7 28V74M44.6 28V74M55.4 28V74M66.3 28V74M77.1 28V74" stroke-width="1.5"/>' +
  '<path d="M19.9 28H25.9V54H19.9ZM30.7 28H36.7V54H30.7ZM52.4 28H58.4V54H52.4ZM63.3 28H69.3V54H63.3ZM74.1 28H80.1V54H74.1Z" fill="currentColor" fill-opacity="0.2" stroke-width="2"/></g>' +
  /* karaoke: microphone and a note */
  '<g transform="translate(0 300)"><g transform="rotate(-30 50 50)">' +
  '<circle cx="50" cy="28" r="14" fill="currentColor" fill-opacity="0.12"/><path d="M38 22H62M36 30H64M44 15V41M56 15V41" stroke-width="1.5"/>' +
  '<path d="M44 44H56V50H44Z" fill="var(--surface)"/><path d="M45 50H55L53 86Q50 90 47 86Z" fill="currentColor" fill-opacity="0.2"/></g>' +
  '<ellipse cx="76" cy="40" rx="5" ry="4" fill="currentColor" fill-opacity="0.2"/><path d="M81 40V20L89 24" stroke-width="2"/></g>' +
  /* film: a clapperboard */
  '<g transform="translate(100 300)"><rect x="16" y="46" width="68" height="38" rx="3" fill="currentColor" fill-opacity="0.1"/>' +
  '<path d="M16 46H84V56H16Z M28 46L22 56M42 46L36 56M56 46L50 56M70 46L64 56M84 46L78 56" stroke-width="2"/>' +
  '<path d="M16 44L80 26L83 35L19 53Z" fill="var(--surface)"/><path d="M30 40L36 47M46 36L52 43M62 31L68 38" stroke-width="2"/>' +
  '<circle cx="17" cy="45" r="2.5" fill="currentColor" fill-opacity="0.2"/></g>' +
  /* cooking: a pot with a lid and steam */
  '<g transform="translate(200 300)"><path d="M22 48H78V70Q78 82 66 82H34Q22 82 22 70Z" fill="currentColor" fill-opacity="0.12"/>' +
  '<path d="M22 54H12M78 54H88" stroke-width="3"/><path d="M18 48Q50 32 82 48Z" fill="var(--surface)"/><circle cx="50" cy="37" r="3.5" fill="var(--surface)"/>' +
  '<path d="M36 30Q32 24 36 18T36 8M64 30Q60 24 64 18T64 8" stroke-width="2"/></g>' +
  /* video games: a controller */
  '<g transform="translate(300 300)"><path d="M28 36H72Q88 36 90 56Q92 74 80 74Q74 74 68 64H32Q26 74 20 74Q8 74 10 56Q12 36 28 36Z" fill="currentColor" fill-opacity="0.12"/>' +
  '<path d="M22 50H36M29 43V57" stroke-width="3"/><circle cx="66" cy="46" r="3.5" fill="currentColor" fill-opacity="0.2"/>' +
  '<circle cx="75" cy="53" r="3.5" fill="currentColor" fill-opacity="0.2"/><circle cx="66" cy="56" r="3" fill="none"/></g>' +
  '</g>' };

/* clock-calendar: left, a wall clock, an alarm clock and a wristwatch; right, a month calendar (crossed-out past days, today
   circled, weekend columns shaded, a public holiday with a small flag) with three bars on its left for last / this / next
   week; under the calendar a rising sun (morning) and a moon with stars (night). */
window.PICTURE_ART['clock-calendar'] = { vb: [420, 360], svg:
  '<g stroke="currentColor" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">' +
  /* wall clock */
  '<circle cx="72" cy="82" r="56" fill="currentColor" fill-opacity="0.08" stroke-width="3"/><circle cx="72" cy="82" r="47" fill="var(--surface)" stroke-width="1.5"/>' +
  '<path d="M72 37V45M72 119V127M27 82H35M109 82H117M94.5 43L92.5 46.5M115 59.5L111.5 61.5M115 104.5L111.5 102.5M94.5 121L92.5 117.5M49.5 121L51.5 117.5M29 104.5L32.5 102.5M29 59.5L32.5 61.5M49.5 43L51.5 46.5" stroke-width="2"/>' +
  '<path d="M72 82L50 70M72 82L92 50" stroke-width="3"/><path d="M72 82L72 116" stroke-width="1.5"/><circle cx="72" cy="82" r="3.5" fill="currentColor" fill-opacity="0.2"/>' +
  /* alarm clock */
  '<path d="M42 196Q42 182 58 184Z M102 196Q102 182 86 184Z" fill="currentColor" fill-opacity="0.2"/><path d="M72 184V178M66 178H78"/>' +
  '<path d="M52 246L46 256M92 246L98 256" stroke-width="3"/>' +
  '<circle cx="72" cy="218" r="34" fill="var(--surface)" stroke-width="3"/>' +
  '<path d="M72 190V195M72 241V246M44 218H49M95 218H100" stroke-width="2"/><path d="M72 218V198M72 218L60 228" stroke-width="2.5"/>' +
  /* wristwatch */
  '<rect x="22" y="302" width="100" height="16" rx="5" fill="currentColor" fill-opacity="0.12"/><path d="M34 302V318M110 302V318" stroke-width="1.5"/>' +
  '<circle cx="72" cy="310" r="18" fill="var(--surface)" stroke-width="3"/><path d="M72 310V298M72 310L80 314" stroke-width="2"/><path d="M90 307H93V313H90" stroke-width="2"/>' +
  /* calendar page with rings and a top band */
  '<rect x="172" y="30" width="238" height="266" rx="4" fill="var(--surface)" stroke-width="3"/>' +
  '<path d="M172 34Q172 30 176 30H406Q410 30 410 34V76H172Z" fill="currentColor" fill-opacity="0.15" stroke-width="2"/>' +
  '<path d="M220 40V20M362 40V20" stroke-width="3"/><circle cx="220" cy="42" r="3" fill="var(--surface)"/><circle cx="362" cy="42" r="3" fill="var(--surface)"/>' +
  /* weekend columns shaded */
  '<rect x="172" y="76" width="34" height="220" fill="currentColor" fill-opacity="0.18" stroke="none"/><rect x="376" y="76" width="34" height="220" fill="currentColor" fill-opacity="0.18" stroke="none"/>' +
  /* grid */
  '<path d="M172 120H410M172 164H410M172 208H410M172 252H410M206 76V296M240 76V296M274 76V296M308 76V296M342 76V296M376 76V296" stroke-width="1.5"/>' +
  /* crossed-out days: rows 1 and 2, and row 3 up to yesterday */
  '<path d="M183 86l12 12m0-12l-12 12M217 86l12 12m0-12l-12 12M251 86l12 12m0-12l-12 12M285 86l12 12m0-12l-12 12M319 86l12 12m0-12l-12 12M353 86l12 12m0-12l-12 12M387 86l12 12m0-12l-12 12" stroke-width="2"/>' +
  '<path d="M183 130l12 12m0-12l-12 12M217 130l12 12m0-12l-12 12M251 130l12 12m0-12l-12 12M285 130l12 12m0-12l-12 12M319 130l12 12m0-12l-12 12M353 130l12 12m0-12l-12 12M387 130l12 12m0-12l-12 12" stroke-width="2"/>' +
  '<path d="M184 171l10 10m0-10l-10 10M218 171l10 10m0-10l-10 10M252 171l10 10m0-10l-10 10" stroke-width="2"/>' +
  /* today circled */
  '<circle cx="291" cy="177" r="11" stroke-width="3"/><path d="M314 177H334M328 171L334 177L328 183" stroke-width="2.5"/>' +
  /* public holiday: a small flag */
  '<path d="M213 232V212" stroke-width="2"/><path d="M213 212H235V226H213Z" fill="var(--surface)" stroke-width="2"/><circle cx="224" cy="219" r="3.5" fill="currentColor" fill-opacity="0.2" stroke-width="1.5"/>' +
  /* week bars */
  '<rect x="158" y="124" width="8" height="36" rx="4" fill="currentColor" fill-opacity="0.2" stroke-width="2"/>' +
  '<rect x="158" y="168" width="8" height="36" rx="4" fill="currentColor" fill-opacity="0.2" stroke-width="2"/>' +
  '<rect x="158" y="212" width="8" height="36" rx="4" fill="currentColor" fill-opacity="0.2" stroke-width="2"/>' +
  /* morning: rising sun on the horizon */
  '<path d="M192 342H272"/><path d="M210 342A20 20 0 0 1 250 342Z" fill="currentColor" fill-opacity="0.15"/>' +
  '<path d="M180 340V318M174 324L180 318L186 324" stroke-width="2"/>' +
  '<path d="M230 314V304M208 320L202 314M252 320L258 314M200 334H192M260 334H268" stroke-width="2"/>' +
  /* night: moon and stars */
  '<path d="M368 310A22 22 0 1 0 372 350A17 17 0 1 1 368 310Z" fill="currentColor" fill-opacity="0.15"/>' +
  '<path d="M392 312V322M387 317H397M400 334V342M396 338H404" stroke-width="2"/>' +
  '</g>' };
