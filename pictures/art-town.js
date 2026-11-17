/* Line art for the 'town' picture sets (0.24.0). NOT in js/data: no Japanese here (labels come from js/data/picture-sets-town.js),
   so changing art does not start the recording job.
   Shape (PLAN-0.24 A2): window.PICTURE_ART['<art id>'] = { vb: [width 300-420, height 240-440], svg: '<g>…</g>' }; inner SVG only:
   no <svg>, <text>, <style>, <script>, <image>, ids or external references; paints only stroke="currentColor", fill="none",
   fill="currentColor" with fill-opacity 0.06-0.2, fill="var(--surface)"; stroke width 1.5-3, round caps and joins; under 9 KB each.
   Art ids are permanent once a set uses them. */
window.PICTURE_ART = window.PICTURE_ART || {};

/* street: a crossroads seen from above, illustrated-map style (buildings drawn as small fronts) */
window.PICTURE_ART['street'] = { vb: [400, 400], svg: '<g stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none">' +
  '<rect x="172" y="0" width="60" height="400" fill="currentColor" fill-opacity="0.08" stroke="none"/>' +
  '<rect x="0" y="172" width="400" height="60" fill="currentColor" fill-opacity="0.08" stroke="none"/>' +
  '<path d="M0 172 L164 172 Q172 172 172 164 L172 0"/><path d="M400 172 L240 172 Q232 172 232 164 L232 0"/>' +
  '<path d="M0 232 L164 232 Q172 232 172 240 L172 400"/><path d="M400 232 L240 232 Q232 232 232 240 L232 400"/>' +
  '<g stroke-width="1.5"><path d="M0 158 L150 158 Q158 158 158 150 L158 0"/><path d="M400 158 L254 158 Q246 158 246 150 L246 0"/>' +
  '<path d="M0 246 L150 246 Q158 246 158 254 L158 400"/><path d="M400 246 L254 246 Q246 246 246 254 L246 400"/>' +
  '<path d="M202 0 L202 136 M202 268 L202 400 M0 202 L136 202 M268 202 L400 202" stroke-dasharray="8 8"/></g>' +
  /* crosswalks */
  '<g stroke-width="1.5" fill="var(--surface)">' +
  '<rect x="176" y="142" width="5" height="24"/><rect x="186" y="142" width="5" height="24"/><rect x="196" y="142" width="5" height="24"/><rect x="206" y="142" width="5" height="24"/><rect x="216" y="142" width="5" height="24"/><rect x="226" y="142" width="4" height="24"/>' +
  '<rect x="176" y="238" width="5" height="24"/><rect x="186" y="238" width="5" height="24"/><rect x="196" y="238" width="5" height="24"/><rect x="206" y="238" width="5" height="24"/><rect x="216" y="238" width="5" height="24"/><rect x="226" y="238" width="4" height="24"/>' +
  '<rect x="142" y="176" width="24" height="5"/><rect x="142" y="186" width="24" height="5"/><rect x="142" y="196" width="24" height="5"/><rect x="142" y="206" width="24" height="5"/><rect x="142" y="216" width="24" height="5"/><rect x="142" y="226" width="24" height="4"/>' +
  '<rect x="238" y="176" width="24" height="5"/><rect x="238" y="186" width="24" height="5"/><rect x="238" y="196" width="24" height="5"/><rect x="238" y="206" width="24" height="5"/><rect x="238" y="216" width="24" height="5"/><rect x="238" y="226" width="24" height="4"/></g>' +
  /* traffic light at the corner */
  '<line x1="161" y1="124" x2="164" y2="166"/><rect x="150" y="70" width="22" height="54" rx="6" fill="var(--surface)"/>' +
  '<circle cx="161" cy="83" r="5" fill="currentColor" fill-opacity="0.2"/><circle cx="161" cy="97" r="5"/><circle cx="161" cy="111" r="5"/>' +
  /* car going down the road */
  '<rect x="207" y="32" width="22" height="46" rx="7" fill="var(--surface)"/><rect x="210" y="62" width="16" height="9" rx="2" fill="currentColor" fill-opacity="0.15"/>' +
  '<rect x="210" y="38" width="16" height="6" rx="2" fill="currentColor" fill-opacity="0.15"/>' +
  '<path d="M205 40 L205 48 M231 40 L231 48 M205 62 L205 70 M231 62 L231 70"/>' +
  /* hospital */
  '<rect x="22" y="30" width="116" height="114" rx="3" fill="var(--surface)"/>' +
  '<path d="M76 42 h8 v8 h8 v8 h-8 v8 h-8 v-8 h-8 v-8 h8 z" fill="currentColor" fill-opacity="0.2"/>' +
  '<g stroke-width="2"><rect x="32" y="80" width="14" height="12" rx="1"/><rect x="54" y="80" width="14" height="12" rx="1"/><rect x="92" y="80" width="14" height="12" rx="1"/><rect x="114" y="80" width="14" height="12" rx="1"/>' +
  '<rect x="32" y="104" width="14" height="12" rx="1"/><rect x="114" y="104" width="14" height="12" rx="1"/></g>' +
  '<rect x="68" y="114" width="24" height="30" rx="1" fill="currentColor" fill-opacity="0.1"/><line x1="80" y1="114" x2="80" y2="144"/>' +
  /* post office with an envelope sign */
  '<rect x="256" y="62" width="64" height="88" rx="3" fill="var(--surface)"/>' +
  '<rect x="270" y="72" width="36" height="24" rx="2" fill="currentColor" fill-opacity="0.12"/><path d="M270 73 L288 87 L306 73"/>' +
  '<rect x="280" y="122" width="16" height="28" rx="1"/><rect x="261" y="104" width="12" height="10" rx="1" stroke-width="2"/><rect x="303" y="104" width="12" height="10" rx="1" stroke-width="2"/>' +
  /* a postbox in front of the post office */
  '<path d="M302 154 L302 132 Q302 124 310 124 Q318 124 318 132 L318 154 Z" fill="var(--surface)"/><path d="M302 132 L318 132 M302 132 Q302 124 310 124 Q318 124 318 132 Z" fill="currentColor" fill-opacity="0.2"/><path d="M306 139 L314 139" stroke-width="2"/>' +
  /* school with a clock tower */
  '<rect x="330" y="62" width="62" height="88" rx="2" fill="var(--surface)"/><path d="M348 62 L348 36 L361 26 L374 36 L374 62" fill="var(--surface)"/>' +
  '<circle cx="361" cy="46" r="7"/><path d="M361 46 L361 41 M361 46 L365 48" stroke-width="1.5"/>' +
  '<g stroke-width="2"><rect x="336" y="72" width="11" height="10" rx="1"/><rect x="355" y="72" width="11" height="10" rx="1"/><rect x="375" y="72" width="11" height="10" rx="1"/>' +
  '<rect x="336" y="96" width="11" height="10" rx="1"/><rect x="375" y="96" width="11" height="10" rx="1"/></g>' +
  '<rect x="351" y="122" width="20" height="28" rx="1" fill="currentColor" fill-opacity="0.1"/><line x1="361" y1="122" x2="361" y2="150"/>' +
  /* bank with columns */
  '<path d="M252 292 L291 266 L330 292 Z" fill="currentColor" fill-opacity="0.12"/><rect x="256" y="292" width="70" height="8"/>' +
  '<path d="M266 300 L266 362 M281 300 L281 362 M301 300 L301 362 M316 300 L316 362"/><rect x="252" y="362" width="78" height="10" fill="currentColor" fill-opacity="0.12"/>' +
  /* shop with a striped awning */
  '<rect x="340" y="300" width="54" height="72" fill="var(--surface)"/>' +
  '<path d="M336 300 L398 300 L398 314 Q390 322 382 314 Q374 322 367 314 Q359 322 351 314 Q343 322 336 314 Z" fill="currentColor" fill-opacity="0.15"/>' +
  '<path d="M351 300 L351 314 M367 300 L367 314 M382 300 L382 314" stroke-width="1.5"/>' +
  '<rect x="345" y="328" width="24" height="22" rx="1" stroke-width="2"/><rect x="375" y="330" width="14" height="42" rx="1"/>' +
  /* park: trees, bench, path */
  '<rect x="12" y="260" width="134" height="128" rx="14" stroke-width="1.5" stroke-dasharray="4 6"/>' +
  '<path d="M12 352 C50 340 70 300 146 296" stroke-width="1.5"/>' +
  '<circle cx="46" cy="286" r="18" fill="currentColor" fill-opacity="0.15"/><line x1="46" y1="304" x2="46" y2="318"/>' +
  '<circle cx="118" cy="330" r="16" fill="currentColor" fill-opacity="0.15"/><line x1="118" y1="346" x2="118" y2="358"/>' +
  '<circle cx="48" cy="362" r="13" fill="currentColor" fill-opacity="0.15"/><line x1="48" y1="375" x2="48" y2="384"/>' +
  '<path d="M74 366 L104 366 M78 366 L78 374 M100 366 L100 374 M74 360 L104 360" stroke-width="2"/>' +
  '</g>' };

/* station: a ticket hall upstairs, stairs and a lift down to the platform, a train at the platform */
window.PICTURE_ART['station'] = { vb: [420, 420], svg: '<g stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none">' +
  '<line x1="4" y1="34" x2="416" y2="34"/>' +
  '<rect x="150" y="180" width="266" height="10" fill="currentColor" fill-opacity="0.15"/><rect x="4" y="180" width="54" height="10" fill="currentColor" fill-opacity="0.15"/>' +
  /* ticket machine with a ticket coming out */
  '<rect x="160" y="104" width="42" height="76" rx="3" fill="var(--surface)"/><rect x="166" y="112" width="30" height="20" rx="2" fill="currentColor" fill-opacity="0.15"/>' +
  '<path d="M168 142 h6 M180 142 h6 M168 150 h6 M180 150 h6" stroke-width="2"/><line x1="188" y1="160" x2="200" y2="160"/>' +
  '<rect x="196" y="152" width="28" height="15" rx="2" fill="var(--surface)"/><path d="M203 156 L217 156 M203 162 L212 162" stroke-width="1.5"/>' +
  /* ticket gates */
  '<g fill="currentColor" fill-opacity="0.12"><rect x="240" y="136" width="15" height="44" rx="3"/><rect x="274" y="136" width="15" height="44" rx="3"/><rect x="308" y="136" width="15" height="44" rx="3"/></g>' +
  '<path d="M255 150 L264 154 M274 150 L265 154 M289 150 L298 154 M308 150 L299 154" stroke-width="3"/>' +
  '<path d="M242 136 L253 136 M276 136 L287 136 M310 136 L321 136" stroke-width="3"/>' +
  /* clock hanging from the ceiling */
  '<line x1="281" y1="34" x2="281" y2="52"/><circle cx="281" cy="70" r="18" fill="var(--surface)"/><path d="M281 70 L281 59 M281 70 L289 74"/>' +
  /* station staff with a cap */
  '<path d="M336 180 L337 134 Q348 124 360 134 L361 180 Z" fill="currentColor" fill-opacity="0.12"/>' +
  '<path d="M337 140 L330 164 M360 140 L366 164" stroke-width="2"/><circle cx="348" cy="114" r="10" fill="var(--surface)"/>' +
  '<path d="M337 106 Q348 92 359 106 Z" fill="currentColor" fill-opacity="0.2"/><line x1="334" y1="106" x2="364" y2="106"/>' +
  /* exit: doorway with a person walking out and an arrow */
  '<rect x="378" y="92" width="34" height="88" rx="2" fill="currentColor" fill-opacity="0.06"/>' +
  '<rect x="376" y="50" width="38" height="24" rx="4"/><path d="M384 62 L404 62 M397 56 L404 62 L397 68"/>' +
  '<circle cx="396" cy="106" r="5"/><path d="M396 112 L393 132 L386 146 M393 132 L401 146 M395 118 L387 126 M395 118 L404 124" stroke-width="2"/>' +
  /* lift: shaft and doors on both floors */
  '<path d="M8 120 L8 330 M52 120 L52 330" stroke-width="1.5"/>' +
  '<rect x="12" y="126" width="36" height="54" rx="2"/><line x1="30" y1="126" x2="30" y2="180"/>' +
  '<rect x="12" y="262" width="36" height="68" rx="2" fill="var(--surface)"/><line x1="30" y1="262" x2="30" y2="330"/>' +
  '<path d="M18 252 L23 244 L28 252 Z M33 244 L38 252 L43 244 Z" stroke-width="1.5"/>' +
  /* stairs between the hall and the platform */
  '<path d="M150 190 L150 186 L139 186 L139 204 L128 204 L128 222 L117 222 L117 240 L106 240 L106 258 L95 258 L95 276 L84 276 L84 294 L73 294 L73 312 L62 312 L62 330 L80 330 L150 200 Z" fill="currentColor" fill-opacity="0.1"/>' +
  '<path d="M146 162 L60 300 M120 204 L120 216 M90 252 L90 264" stroke-width="2"/>' +
  /* bench under the hall */
  '<path d="M170 274 L170 300 M212 274 L212 300" stroke-width="2"/><rect x="162" y="268" width="58" height="6" rx="2"/><rect x="162" y="280" width="58" height="6" rx="2"/>' +
  '<rect x="156" y="298" width="70" height="8" rx="2" fill="currentColor" fill-opacity="0.15"/><path d="M164 306 L160 330 M218 306 L222 330"/>' +
  /* platform and tracks */
  '<rect x="4" y="330" width="412" height="16" fill="currentColor" fill-opacity="0.12"/><line x1="6" y1="337" x2="232" y2="337" stroke-width="2" stroke-dasharray="3 5"/>' +
  '<path d="M4 386 L416 386 M4 404 L416 404"/>' +
  '<path d="M14 386 L14 404 M36 386 L36 404 M58 386 L58 404 M80 386 L80 404 M102 386 L102 404 M124 386 L124 404 M146 386 L146 404 M168 386 L168 404 M190 386 L190 404 M212 386 L212 404" stroke-width="2"/>' +
  /* train */
  '<path d="M416 262 L262 262 Q238 262 236 290 L236 368 Q236 374 242 374 L416 374 Z" fill="var(--surface)"/>' +
  '<path d="M240 304 L240 290 Q242 272 262 272 L270 272 L270 304 Z" fill="currentColor" fill-opacity="0.15"/>' +
  '<rect x="284" y="276" width="32" height="26" rx="3" fill="currentColor" fill-opacity="0.12"/><rect x="376" y="276" width="32" height="26" rx="3" fill="currentColor" fill-opacity="0.12"/>' +
  '<rect x="326" y="270" width="38" height="104" rx="2"/><line x1="345" y1="270" x2="345" y2="374"/>' +
  '<rect x="331" y="280" width="9" height="22" rx="2" stroke-width="1.5"/><rect x="350" y="280" width="9" height="22" rx="2" stroke-width="1.5"/>' +
  '<path d="M236 320 L326 320 M364 320 L416 320" stroke-width="2"/>' +
  '<circle cx="262" cy="378" r="8" fill="var(--surface)"/><circle cx="300" cy="378" r="8" fill="var(--surface)"/><circle cx="392" cy="378" r="8" fill="var(--surface)"/>' +
  '</g>' };

/* hospital-floor: a simple one-floor plan with the entrance at the bottom */
window.PICTURE_ART['hospital-floor'] = { vb: [420, 440], svg: '<g stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none">' +
  /* outer wall with the two doors at the bottom */
  '<path d="M178 360 L8 360 L8 8 L412 8 L412 360 L402 360 M358 360 L222 360" stroke-width="3"/>' +
  '<path d="M180 357 L199 357 M201 363 L220 363 M360 357 L379 357 M381 363 L400 363" stroke-width="2"/>' +
  /* inner walls */
  '<path d="M8 118 L108 118 M136 118 L162 118 M238 118 L268 118 M298 118 L324 118 M356 118 L370 118 M404 118 L412 118"/>' +
  '<path d="M150 8 L150 118 M250 8 L250 118 M318 8 L318 118 M362 8 L362 118"/>' +
  '<path d="M8 160 L90 160 M118 160 L130 160 L130 260 L8 260 M300 160 L412 160 M300 160 L300 186 M300 242 L300 260 L412 260 M130 260 L130 286 M130 330 L130 360"/>' +
  /* ward: three beds */
  '<g fill="var(--surface)"><rect x="20" y="20" width="32" height="56" rx="4"/><rect x="64" y="20" width="32" height="56" rx="4"/><rect x="108" y="20" width="32" height="56" rx="4"/></g>' +
  '<g fill="currentColor" fill-opacity="0.15" stroke-width="2"><rect x="25" y="25" width="22" height="10" rx="3"/><rect x="69" y="25" width="22" height="10" rx="3"/><rect x="113" y="25" width="22" height="10" rx="3"/></g>' +
  '<path d="M20 46 L52 46 M64 46 L96 46 M108 46 L140 46" stroke-width="2"/>' +
  /* nurses\' station: counter and a nurse cap */
  '<path d="M162 112 L162 90 L238 90 L238 112 L230 112 L230 98 L170 98 L170 112 Z" fill="currentColor" fill-opacity="0.15"/><circle cx="200" cy="106" r="6" stroke-width="2"/>' +
  '<path d="M186 42 L214 42 L210 26 Q200 18 190 26 Z" fill="currentColor" fill-opacity="0.15"/><path d="M200 26 L200 38 M194 32 L206 32" stroke-width="2"/>' +
  /* toilets: man and woman */
  '<line x1="284" y1="22" x2="284" y2="84" stroke-width="1.5"/>' +
  '<circle cx="268" cy="30" r="6"/><rect x="262" y="40" width="12" height="24" rx="3" fill="currentColor" fill-opacity="0.15"/><path d="M265 64 L265 80 M271 64 L271 80"/>' +
  '<circle cx="300" cy="30" r="6"/><path d="M291 66 L300 40 L309 66 Z" fill="currentColor" fill-opacity="0.15"/><path d="M297 66 L297 80 M303 66 L303 80"/>' +
  /* lift */
  '<path d="M327 32 L332 22 L337 32 Z M343 22 L348 32 L353 22 Z" stroke-width="1.5"/>' +
  '<rect x="326" y="42" width="28" height="56" rx="2"/><path d="M326 42 L354 98 M354 42 L326 98" stroke-width="1.5"/><path d="M326 114 L338 114 M342 114 L354 114" stroke-width="2"/>' +
  /* stairs */
  '<rect x="368" y="16" width="38" height="94" rx="2"/>' +
  '<path d="M368 28 L406 28 M368 40 L406 40 M368 52 L406 52 M368 64 L406 64 M368 76 L406 76 M368 88 L406 88 M368 100 L406 100" stroke-width="1.5"/>' +
  '<path d="M387 106 L387 22 M380 30 L387 22 L394 30" stroke-width="2"/>' +
  /* consulting room: desk, two chairs, couch */
  '<rect x="18" y="172" width="48" height="24" rx="2" fill="currentColor" fill-opacity="0.12"/><rect x="24" y="176" width="16" height="10" rx="1" stroke-width="2"/>' +
  '<circle cx="42" cy="210" r="7"/><circle cx="82" cy="188" r="7"/>' +
  '<rect x="20" y="228" width="68" height="22" rx="5" fill="var(--surface)"/><rect x="24" y="232" width="12" height="14" rx="3" fill="currentColor" fill-opacity="0.15" stroke-width="2"/>' +
  /* waiting room: rows of chairs */
  '<g fill="var(--surface)" stroke-width="2">' +
  '<rect x="148" y="176" width="16" height="13" rx="2"/><rect x="170" y="176" width="16" height="13" rx="2"/><rect x="192" y="176" width="16" height="13" rx="2"/><rect x="214" y="176" width="16" height="13" rx="2"/><rect x="236" y="176" width="16" height="13" rx="2"/><rect x="258" y="176" width="16" height="13" rx="2"/>' +
  '<rect x="148" y="204" width="16" height="13" rx="2"/><rect x="170" y="204" width="16" height="13" rx="2"/><rect x="192" y="204" width="16" height="13" rx="2"/><rect x="214" y="204" width="16" height="13" rx="2"/><rect x="236" y="204" width="16" height="13" rx="2"/><rect x="258" y="204" width="16" height="13" rx="2"/>' +
  '<rect x="148" y="232" width="16" height="13" rx="2"/><rect x="170" y="232" width="16" height="13" rx="2"/><rect x="192" y="232" width="16" height="13" rx="2"/><rect x="214" y="232" width="16" height="13" rx="2"/><rect x="236" y="232" width="16" height="13" rx="2"/><rect x="258" y="232" width="16" height="13" rx="2"/></g>' +
  '<path d="M148 175 L274 175 M148 203 L274 203 M148 231 L274 231" stroke-width="3"/>' +
  /* pharmacy: counter, shelves, a capsule */
  '<rect x="300" y="186" width="12" height="56" fill="currentColor" fill-opacity="0.15"/>' +
  '<rect x="338" y="168" width="66" height="10" fill="currentColor" fill-opacity="0.1"/><rect x="394" y="178" width="10" height="74" fill="currentColor" fill-opacity="0.1"/>' +
  '<rect x="334" y="196" width="40" height="16" rx="8" fill="var(--surface)"/><path d="M354 196 L354 212" stroke-width="2"/><path d="M342 196 L354 196 L354 212 L342 212 Q334 212 334 204 Q334 196 342 196 Z" fill="currentColor" fill-opacity="0.2" stroke="none"/>' +
  /* shop: shelves and a basket */
  '<rect x="18" y="272" width="64" height="10" fill="currentColor" fill-opacity="0.12"/><rect x="18" y="296" width="64" height="10" fill="currentColor" fill-opacity="0.12"/>' +
  '<path d="M88 324 L122 324 L116 348 L94 348 Z" fill="var(--surface)"/><path d="M95 324 Q105 306 115 324"/><path d="M100 330 L101 342 M110 330 L109 342" stroke-width="1.5"/>' +
  /* reception: counter with a desk bell */
  '<rect x="140" y="288" width="64" height="14" rx="3" fill="currentColor" fill-opacity="0.15"/>' +
  '<path d="M162 284 Q162 272 172 272 Q182 272 182 284 Z" fill="var(--surface)"/><path d="M158 285 L186 285 M172 268 L172 272" stroke-width="2"/>' +
  /* cashier: counter with coins and a note */
  '<rect x="300" y="288" width="64" height="14" rx="3" fill="currentColor" fill-opacity="0.15"/>' +
  '<circle cx="314" cy="278" r="6"/><circle cx="326" cy="278" r="6" fill="var(--surface)"/><rect x="336" y="270" width="22" height="13" rx="1" fill="currentColor" fill-opacity="0.12" stroke-width="2"/><circle cx="347" cy="276.5" r="3" stroke-width="1.5"/>' +
  /* telephone */
  '<rect x="246" y="332" width="30" height="20" rx="4" fill="currentColor" fill-opacity="0.12"/><path d="M242 332 Q261 318 280 332 L274 337 Q261 328 248 337 Z" fill="var(--surface)"/>' +
  '<path d="M255 342 h4 M263 342 h4 M255 347 h4 M263 347 h4" stroke-width="1.5"/>' +
  /* arrows: in at the entrance, out at the exit */
  '<path d="M200 404 L200 372 M191 381 L200 372 L209 381" stroke-width="3"/>' +
  '<path d="M380 370 L380 402 M371 393 L380 402 L389 393" stroke-width="3"/>' +
  /* taxi outside */
  '<path d="M60 418 L60 404 Q62 396 74 395 L88 382 L124 382 L136 395 L146 397 Q152 399 152 407 L152 418 Z" fill="var(--surface)"/>' +
  '<path d="M92 386 L104 386 L104 395 L84 395 Z M110 386 L122 386 L130 395 L110 395 Z" fill="currentColor" fill-opacity="0.15" stroke-width="2"/>' +
  '<rect x="99" y="373" width="16" height="9" rx="2" fill="currentColor" fill-opacity="0.2"/>' +
  '<circle cx="80" cy="419" r="8" fill="var(--surface)"/><circle cx="132" cy="419" r="8" fill="var(--surface)"/>' +
  /* garden outside */
  '<rect x="236" y="374" width="112" height="56" rx="14" stroke-width="1.5" stroke-dasharray="4 6"/>' +
  '<circle cx="262" cy="398" r="14" fill="currentColor" fill-opacity="0.15"/><line x1="262" y1="412" x2="262" y2="422"/>' +
  '<circle cx="322" cy="396" r="16" fill="currentColor" fill-opacity="0.15"/><line x1="322" y1="412" x2="322" y2="422"/>' +
  '<path d="M292 422 L292 410 M288 406 Q292 400 296 406 Q292 412 288 406 Z" stroke-width="1.5"/>' +
  '</g>' };

/* positions: a shelf (cup, clock, book), a window with a bird outside, a table (cat on it, ball under it), a small box next to
   a big box (apples in it, a dog behind it, a bag in front of it) */
window.PICTURE_ART['positions'] = { vb: [420, 400], svg: '<g stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none">' +
  '<line x1="6" y1="355" x2="414" y2="355" stroke-width="2"/>' +
  /* shelf with a cup, a clock and a book */
  '<rect x="30" y="122" width="226" height="8" rx="2" fill="currentColor" fill-opacity="0.15"/><path d="M50 130 L50 144 L62 130 M236 130 L236 144 L224 130" stroke-width="2"/>' +
  '<path d="M58 90 L62 122 L88 122 L92 90 Z" fill="currentColor" fill-opacity="0.1"/><path d="M92 97 C106 97 106 115 89 115"/>' +
  '<circle cx="145" cy="96" r="24" fill="var(--surface)"/><path d="M145 96 L145 80 M145 96 L157 101"/><path d="M133 117 L130 122 M157 117 L160 122"/>' +
  '<rect x="205" y="68" width="28" height="54" rx="2" fill="currentColor" fill-opacity="0.15"/><path d="M210 68 L210 122 M215 80 L228 80 M215 110 L228 110" stroke-width="2"/>' +
  /* window with a bird on a branch outside */
  '<rect x="290" y="36" width="112" height="104" rx="2" fill="currentColor" fill-opacity="0.06"/><path d="M346 36 L346 140 M290 70 L402 70" stroke-width="2"/>' +
  '<path d="M402 126 C384 120 360 124 316 116 M344 121 C338 130 330 132 322 130" stroke-width="2"/>' +
  '<path d="M336 100 L322 92 L324 108 Z" fill="var(--surface)" stroke-width="2"/><ellipse cx="350" cy="104" rx="18" ry="12" fill="var(--surface)"/>' +
  '<path d="M342 102 Q350 96 358 104" stroke-width="2"/><circle cx="369" cy="90" r="8" fill="var(--surface)"/><circle cx="371" cy="88" r="1.5"/><path d="M376 87 L385 90 L376 93"/>' +
  '<path d="M346 116 L346 122 M354 116 L354 122" stroke-width="2"/><line x1="284" y1="140" x2="408" y2="140"/>' +
  /* table with a cat on it and a ball under it */
  '<rect x="20" y="238" width="150" height="10" rx="2" fill="currentColor" fill-opacity="0.15"/><path d="M34 248 L34 355 M156 248 L156 355"/>' +
  '<path d="M112 234 C128 232 130 214 120 208" stroke-width="2.5"/>' +
  '<path d="M78 238 C70 220 76 198 94 196 C110 196 116 220 110 238 Z" fill="var(--surface)"/>' +
  '<path d="M86 175 L84 160 L95 170 M98 170 L108 160 L107 176" fill="var(--surface)"/><circle cx="96" cy="182" r="14" fill="var(--surface)"/>' +
  '<path d="M91 180 L91 182 M101 180 L101 182 M93 188 Q96 191 99 188" stroke-width="2"/>' +
  '<circle cx="95" cy="333" r="20" fill="currentColor" fill-opacity="0.15"/><path d="M76 326 C88 338 104 338 114 324 M84 315 C92 324 100 324 108 316" stroke-width="2"/>' +
  /* a small closed box next to the big box (two boxes side by side) */
  '<path d="M200 315 L210 305 L254 305 L244 315 Z" fill="currentColor" fill-opacity="0.2"/><rect x="200" y="315" width="44" height="40" fill="var(--surface)"/>' +
  '<path d="M244 315 L254 305 L254 345 L244 355 Z" fill="currentColor" fill-opacity="0.1"/><path d="M222 315 L222 327 M217 310 L232 310" stroke-width="2"/>' +
  /* a dog behind the box: only its head shows above the box */
  '<path d="M342 250 L339 272 L373 272 L370 250" fill="var(--surface)" stroke="none"/><path d="M342 250 L339 272 M370 250 L373 272"/><circle cx="356" cy="236" r="17" fill="var(--surface)"/>' +
  '<path d="M343 225 C330 230 331 250 341 254 Z M369 225 C382 230 381 250 371 254 Z" fill="currentColor" fill-opacity="0.15"/>' +
  '<circle cx="349" cy="232" r="1.8"/><circle cx="363" cy="232" r="1.8"/><ellipse cx="356" cy="245" rx="7" ry="5"/><circle cx="356" cy="242" r="2" fill="currentColor" fill-opacity="0.2"/>' +
  /* box with apples in it */
  '<path d="M262 288 L280 272 L370 272 L352 288 Z" fill="currentColor" fill-opacity="0.2"/>' +
  '<g fill="var(--surface)"><circle cx="290" cy="284" r="12"/><circle cx="335" cy="284" r="12"/><circle cx="312" cy="280" r="13"/></g>' +
  '<path d="M290 272 L291 266 M335 272 L336 266 M312 267 L314 260 C320 256 326 258 326 258 C322 264 316 264 314 262" stroke-width="2"/>' +
  '<rect x="262" y="288" width="90" height="67" fill="var(--surface)"/><path d="M352 288 L370 272 L370 339 L352 355 Z" fill="var(--surface)"/>' +
  '<path d="M352 288 L370 272 L370 339 L352 355 Z" fill="currentColor" fill-opacity="0.1"/>' +
  /* bag in front of the box */
  '<path d="M297 346 C297 330 325 330 325 346"/><rect x="284" y="344" width="54" height="42" rx="7" fill="var(--surface)"/>' +
  '<path d="M284 358 L338 358 M311 358 L311 366" stroke-width="2"/>' +
  '</g>' };
