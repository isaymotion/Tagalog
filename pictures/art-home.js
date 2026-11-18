/* Line art for the 'home' picture sets (0.24.0). NOT in js/data: no Japanese here (labels come from js/data/picture-sets-home.js),
   so changing art does not start the recording job.
   Shape (PLAN-0.24 A2): window.PICTURE_ART['<art id>'] = { vb: [width 300-420, height 240-440], svg: '<g>…</g>' }; inner SVG only:
   no <svg>, <text>, <style>, <script>, <image>, ids or external references; paints only stroke="currentColor", fill="none",
   fill="currentColor" with fill-opacity 0.06-0.2, fill="var(--surface)"; stroke width 1.5-3, round caps and joins; under 9 KB each.
   Art ids are permanent once a set uses them. */
window.PICTURE_ART = window.PICTURE_ART || {};
window.PICTURE_ART['house-outside'] = { vb: [420, 340], svg: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
  '<rect x="4" y="290" width="412" height="44" fill="currentColor" fill-opacity="0.08" stroke="none"/>' +
  '<line x1="4" y1="290" x2="416" y2="290"/><line x1="4" y1="334" x2="416" y2="334"/>' +
  '<path d="M18 312 H44 M74 312 H100 M130 312 H156 M186 312 H212 M242 312 H268" stroke-width="1.5"/>' +
  '<line x1="6" y1="262" x2="414" y2="262"/>' +
  '<path d="M14 282 l4 -8 l4 8 M34 278 l4 -8 l4 8 M60 284 l4 -8 l4 8 M84 279 l4 -8 l4 8 M104 284 l4 -8 l4 8 M150 280 l4 -8 l4 8 M190 284 l4 -8 l4 8 M250 282 l4 -8 l4 8" stroke-width="1.5"/>' +
  '<path d="M40 262 V200 M52 262 V200"/>' +
  '<circle cx="46" cy="166" r="36" fill="currentColor" fill-opacity="0.12"/>' +
  '<path d="M68 262 V240 M86 262 V236 M104 262 V242 M86 252 q-8 -2 -10 -9 M104 254 q-7 -1 -9 -8" stroke-width="1.5"/>' +
  '<circle cx="68" cy="232" r="7" fill="currentColor" fill-opacity="0.2"/><circle cx="86" cy="228" r="7" fill="currentColor" fill-opacity="0.2"/><circle cx="104" cy="234" r="7" fill="currentColor" fill-opacity="0.2"/>' +
  '<rect x="112" y="135" width="178" height="127" fill="currentColor" fill-opacity="0.06"/>' +
  '<polygon points="96,137 200,62 304,137" fill="currentColor" fill-opacity="0.16"/>' +
  '<path d="M120 130 L200 74 L280 130" stroke-width="1.5"/>' +
  '<rect x="128" y="150" width="50" height="40" fill="var(--surface)"/><path d="M153 150 V190 M128 170 H178"/>' +
  '<rect x="218" y="146" width="56" height="52" fill="var(--surface)"/><line x1="246" y1="146" x2="246" y2="198"/>' +
  '<rect x="206" y="182" width="80" height="24" fill="var(--surface)"/>' +
  '<path d="M216 182 V206 M226 182 V206 M236 182 V206 M256 182 V206 M266 182 V206 M276 182 V206" stroke-width="1.5"/>' +
  '<rect x="128" y="205" width="50" height="34" fill="var(--surface)"/><line x1="153" y1="205" x2="153" y2="239"/>' +
  '<path d="M212 206 L216 200 H268 L272 206 Z" fill="currentColor" fill-opacity="0.12"/>' +
  '<rect x="222" y="210" width="40" height="52" fill="var(--surface)"/><circle cx="255" cy="238" r="2.5"/>' +
  '<rect x="300" y="216" width="9" height="46"/><rect x="362" y="216" width="9" height="46"/>' +
  '<path d="M309 226 H362 M309 254 H362 M318 226 V254 M327 226 V254 M336 226 V254 M345 226 V254 M354 226 V254" stroke-width="1.5"/>' +
  '<line x1="394" y1="228" x2="394" y2="262"/><rect x="376" y="196" width="36" height="32" rx="3" fill="currentColor" fill-opacity="0.12"/><line x1="384" y1="205" x2="404" y2="205"/>' +
  '<path d="M290 318 V298 Q290 290 298 290 H312 L326 274 H366 L382 290 H396 Q404 290 404 298 V318 Z" fill="var(--surface)"/>' +
  '<path d="M290 318 V298 Q290 290 298 290 H312 L326 274 H366 L382 290 H396 Q404 290 404 298 V318 Z" fill="currentColor" fill-opacity="0.12"/>' +
  '<path d="M316 290 L329 279 H344 V290 Z M350 290 V279 H363 L374 290 Z" stroke-width="1.5"/>' +
  '<circle cx="312" cy="320" r="9" fill="var(--surface)"/><circle cx="382" cy="320" r="9" fill="var(--surface)"/>' +
  '</g>' };
window.PICTURE_ART['living-room'] = { vb: [400, 320], svg: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
  '<path d="M4 10 H396 M4 250 H396" stroke-width="1.5"/>' +
  '<rect x="10" y="110" width="52" height="140" fill="currentColor" fill-opacity="0.06"/>' +
  '<path d="M10 145 H62 M10 180 H62 M10 215 H62"/>' +
  '<path d="M16 145 V121 H22 V145 M24 145 V124 H30 V145 M32 145 V119 H38 V145 M44 145 L48 126 L54 127 L50 145" stroke-width="1.5"/>' +
  '<path d="M16 180 V156 H23 V180 M25 180 V158 H31 V180 M40 180 V154 H46 V180 M48 180 V157 H55 V180" stroke-width="1.5"/>' +
  '<path d="M16 215 V193 H24 V215 M26 215 V190 H32 V215 M34 215 V194 H40 V215" stroke-width="1.5"/>' +
  '<line x1="70" y1="46" x2="200" y2="46"/>' +
  '<rect x="88" y="54" width="94" height="90" fill="currentColor" fill-opacity="0.06"/><path d="M135 54 V144 M82 144 H188"/>' +
  '<path d="M98 66 L110 58 M98 80 L124 62" stroke-width="1.5"/>' +
  '<path d="M72 48 Q80 100 72 160 H94 Q88 100 92 48 Z" fill="var(--surface)"/><path d="M72 48 Q80 100 72 160 H94 Q88 100 92 48 Z" fill="currentColor" fill-opacity="0.14"/>' +
  '<path d="M178 48 Q184 100 176 160 H198 Q192 100 198 48 Z" fill="var(--surface)"/><path d="M178 48 Q184 100 176 160 H198 Q192 100 198 48 Z" fill="currentColor" fill-opacity="0.14"/>' +
  '<line x1="216" y1="10" x2="216" y2="20"/><path d="M194 46 L204 20 H228 L238 46 Z" fill="currentColor" fill-opacity="0.14"/>' +
  '<path d="M202 54 L197 61 M216 55 V64 M230 54 L235 61" stroke-width="1.5"/>' +
  '<circle cx="216" cy="104" r="20" fill="var(--surface)"/><path d="M216 104 V91 M216 104 L225 109"/>' +
  '<path d="M216 87 V89 M233 104 H231 M216 121 V119 M199 104 H201" stroke-width="1.5"/>' +
  '<rect x="246" y="18" width="88" height="28" rx="6" fill="currentColor" fill-opacity="0.08"/><path d="M254 38 H326" stroke-width="1.5"/>' +
  '<rect x="250" y="66" width="62" height="50"/><path d="M255 110 L270 90 L281 102 L293 86 L307 110" stroke-width="1.5"/><circle cx="265" cy="80" r="4" stroke-width="1.5"/>' +
  '<rect x="340" y="58" width="52" height="192" fill="currentColor" fill-opacity="0.06"/><rect x="348" y="70" width="36" height="60" stroke-width="1.5"/><circle cx="384" cy="165" r="3"/>' +
  '<rect x="250" y="134" width="80" height="56" rx="3"/><rect x="256" y="140" width="68" height="44" fill="currentColor" fill-opacity="0.12"/>' +
  '<line x1="290" y1="190" x2="290" y2="198"/><rect x="244" y="198" width="92" height="52"/><path d="M290 198 V250 M282 224 H286 M294 224 H298"/>' +
  '<rect x="70" y="166" width="130" height="42" rx="10" fill="currentColor" fill-opacity="0.12"/>' +
  '<rect x="76" y="204" width="118" height="24" rx="4" fill="var(--surface)"/>' +
  '<rect x="62" y="190" width="18" height="48" rx="8" fill="var(--surface)"/><rect x="190" y="190" width="18" height="48" rx="8" fill="var(--surface)"/>' +
  '<path d="M76 238 V248 M194 238 V248"/>' +
  '<polygon points="100,268 276,268 298,290 78,290" fill="var(--surface)"/><polygon points="100,268 276,268 298,290 78,290" fill="currentColor" fill-opacity="0.1"/>' +
  '<rect x="82" y="290" width="212" height="8"/><path d="M90 298 V316 M286 298 V316"/>' +
  '<path d="M120 226 H152 L147 278 H125 Z" fill="var(--surface)"/><path d="M120 226 H152 L147 278 H125 Z" fill="currentColor" fill-opacity="0.08"/><path d="M123 246 H149" stroke-width="1.5"/>' +
  '<polygon points="184,276 238,264 264,280 210,292" fill="var(--surface)"/>' +
  '<path d="M198 278 L234 270 M206 284 L242 276 M214 289 L238 284" stroke-width="1.5"/>' +
  '<rect x="354" y="214" width="9" height="62" rx="2" fill="var(--surface)"/><path d="M354 230 H363 M354 246 H363" stroke-width="1.5"/>' +
  '<rect x="318" y="270" width="45" height="8" rx="2" fill="var(--surface)"/>' +
  '<path d="M322 278 V314 M358 278 V314"/>' +
  '</g>' };
window.PICTURE_ART['kitchen'] = { vb: [420, 320], svg: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
  '<line x1="4" y1="270" x2="416" y2="270" stroke-width="1.5"/>' +
  '<rect x="10" y="56" width="68" height="214" rx="6" fill="currentColor" fill-opacity="0.08"/>' +
  '<path d="M10 112 H78 M68 72 V100 M68 124 V170" stroke-width="2.5"/>' +
  '<rect x="92" y="30" width="90" height="80" fill="currentColor" fill-opacity="0.06"/><path d="M137 30 V110 M92 70 H182"/>' +
  '<path d="M102 46 L114 38 M102 60 L126 42" stroke-width="1.5"/>' +
  '<rect x="82" y="158" width="334" height="30" fill="currentColor" fill-opacity="0.06"/>' +
  '<rect x="86" y="188" width="326" height="82"/>' +
  '<path d="M182 188 V270 M240 188 V270 M340 188 V270 M174 226 V240 M190 226 V240 M348 226 V240"/>' +
  '<rect x="96" y="163" width="80" height="20" rx="5" fill="currentColor" fill-opacity="0.16"/>' +
  '<path d="M137 163 V142 Q137 130 149 130 Q161 130 161 142 V150" stroke-width="3"/>' +
  '<polygon points="186,163 240,163 244,184 182,184" fill="currentColor" fill-opacity="0.1"/>' +
  '<rect x="184" y="171" width="22" height="9" rx="3" fill="currentColor" fill-opacity="0.2"/>' +
  '<path d="M206 169 H241 Q239 179 206 182 Z" fill="var(--surface)"/><path d="M206 169 H241 Q239 179 206 182 Z" fill="currentColor" fill-opacity="0.06"/>' +
  '<rect x="244" y="158" width="96" height="30" fill="var(--surface)"/><rect x="244" y="158" width="96" height="30" fill="currentColor" fill-opacity="0.16"/>' +
  '<path d="M240 158 L246 148 H338 L344 158 Z" fill="var(--surface)"/><path d="M240 158 L246 148 H338 L344 158 Z" fill="currentColor" fill-opacity="0.12"/>' +
  '<circle cx="256" cy="173" r="5"/><circle cx="272" cy="173" r="5"/><circle cx="312" cy="173" r="5"/><circle cx="328" cy="173" r="5"/>' +
  '<path d="M256 168 V172 M272 168 V172 M312 168 V172 M328 168 V172" stroke-width="1.5"/>' +
  '<ellipse cx="268" cy="153" rx="15" ry="3" stroke-width="1.5"/><ellipse cx="316" cy="153" rx="17" ry="3" stroke-width="1.5"/>' +
  '<path d="M252 153 V138 M284 153 V138 M298 153 V138 M334 153 V138 M250 138 H257 M279 138 H286 M296 138 H303 M329 138 H336" stroke-width="2.5"/>' +
  '<path d="M261 151 Q257 146 261 141 Q265 146 261 151 M268 151 Q263 145 268 138 Q273 145 268 151 M275 151 Q271 146 275 141 Q279 146 275 151" stroke-width="1.5"/>' +
  '<path d="M309 151 Q305 146 309 141 Q313 146 309 151 M316 151 Q311 145 316 138 Q321 145 316 151 M323 151 Q319 146 323 141 Q327 146 323 151" stroke-width="1.5"/>' +
  '<rect x="250" y="98" width="36" height="39" rx="3" fill="var(--surface)"/><rect x="250" y="98" width="36" height="39" rx="3" fill="currentColor" fill-opacity="0.1"/>' +
  '<path d="M248 98 H288 M262 98 Q268 88 274 98 M250 110 H244 M286 110 H292"/>' +
  '<path d="M290 124 Q292 137 316 137 Q340 137 342 124 Z" fill="var(--surface)"/><path d="M290 124 Q292 137 316 137 Q340 137 342 124 Z" fill="currentColor" fill-opacity="0.14"/>' +
  '<path d="M341 127 L352 118" stroke-width="3"/>' +
  '<rect x="248" y="194" width="88" height="70" rx="3"/><path d="M256 202 H328" stroke-width="3"/>' +
  '<rect x="258" y="212" width="68" height="42" rx="3" fill="currentColor" fill-opacity="0.12"/>' +
  '<rect x="244" y="62" width="100" height="6" fill="currentColor" fill-opacity="0.12"/><path d="M254 68 V78 L264 68 M334 68 V78 L324 68"/>' +
  '<circle cx="262" cy="46" r="15" fill="var(--surface)"/><circle cx="262" cy="46" r="7" stroke-width="1.5"/>' +
  '<circle cx="290" cy="46" r="15" fill="var(--surface)"/><circle cx="290" cy="46" r="7" stroke-width="1.5"/>' +
  '<path d="M311 30 L314 62 H334 L337 30 Z" fill="var(--surface)"/><path d="M312 40 H336" stroke-width="1.5"/><path d="M312 40 L314 62 H334 L336 40 Z" fill="currentColor" fill-opacity="0.1" stroke="none"/>' +
  '<rect x="352" y="60" width="58" height="42" rx="4" fill="currentColor" fill-opacity="0.06"/><rect x="358" y="66" width="34" height="30" rx="2" fill="currentColor" fill-opacity="0.12"/>' +
  '<circle cx="401" cy="72" r="2.5"/><circle cx="401" cy="82" r="2.5"/><path d="M396 92 H406"/>' +
  '<rect x="346" y="102" width="68" height="5"/>' +
  '<path d="M366 128 Q381 114 396 128" stroke-width="2.5"/><rect x="354" y="126" width="54" height="34" rx="12" fill="var(--surface)"/>' +
  '<rect x="354" y="126" width="54" height="34" rx="12" fill="currentColor" fill-opacity="0.1"/><path d="M356 136 H406"/><rect x="372" y="144" width="18" height="8" rx="2" stroke-width="1.5"/>' +
  '<path d="M110 302 L114 250 H146 L150 302 Z" fill="var(--surface)"/><path d="M110 302 L114 250 H146 L150 302 Z" fill="currentColor" fill-opacity="0.08"/>' +
  '<path d="M108 250 H152 M122 262 L124 292 M138 262 L136 292" stroke-width="1.5"/>' +
  '</g>' };
window.PICTURE_ART['bathroom'] = { vb: [420, 320], svg: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
  '<path d="M4 280 H416 M150 12 V280 M308 12 V280" stroke-width="1.5"/>' +
  '<rect x="34" y="40" width="74" height="84" rx="4" fill="currentColor" fill-opacity="0.06"/><path d="M46 60 L60 48 M46 76 L74 52" stroke-width="1.5"/>' +
  '<rect x="12" y="172" width="104" height="14" rx="3" fill="currentColor" fill-opacity="0.1"/><ellipse cx="66" cy="179" rx="26" ry="4" fill="currentColor" fill-opacity="0.12"/>' +
  '<rect x="20" y="186" width="90" height="94"/><path d="M65 186 V280 M59 230 V240 M71 230 V240"/>' +
  '<path d="M64 172 V146 H86 V158" stroke-width="3"/>' +
  '<path d="M14 150 H34 L32 172 H16 Z" fill="currentColor" fill-opacity="0.12"/><path d="M21 150 L17 114 M28 150 L32 118"/>' +
  '<rect x="12" y="96" width="9" height="18" rx="3" fill="var(--surface)"/><rect x="12" y="96" width="9" height="18" rx="3" fill="currentColor" fill-opacity="0.2"/><path d="M12 100 H8 M12 105 H8 M12 110 H8" stroke-width="1.5"/>' +
  '<rect x="29" y="100" width="9" height="18" rx="3" fill="var(--surface)"/><path d="M38 104 H42 M38 109 H42 M38 114 H42" stroke-width="1.5"/>' +
  '<rect x="89" y="156" width="27" height="16" rx="6" fill="currentColor" fill-opacity="0.2"/><circle cx="96" cy="148" r="3" stroke-width="1.5"/><circle cx="105" cy="142" r="4" stroke-width="1.5"/><circle cx="94" cy="137" r="2.5" stroke-width="1.5"/>' +
  '<line x1="118" y1="104" x2="146" y2="104"/><rect x="121" y="104" width="22" height="60" fill="currentColor" fill-opacity="0.14"/><path d="M121 154 H143" stroke-width="1.5"/>' +
  '<rect x="24" y="288" width="76" height="20" rx="5" fill="currentColor" fill-opacity="0.1"/><rect x="48" y="292" width="28" height="9" rx="2" stroke-width="1.5"/>' +
  '<line x1="180" y1="60" x2="180" y2="178"/><path d="M180 70 L194 76"/>' +
  '<ellipse cx="206" cy="80" rx="14" ry="8" fill="currentColor" fill-opacity="0.14"/>' +
  '<path d="M198 94 L193 108 M206 95 V110 M214 94 L219 108" stroke-width="1.5"/>' +
  '<path d="M180 178 Q164 150 172 112 Q176 92 186 74" stroke-width="1.5"/>' +
  '<rect x="234" y="30" width="58" height="50" fill="currentColor" fill-opacity="0.06"/><line x1="263" y1="30" x2="263" y2="80"/>' +
  '<rect x="234" y="152" width="62" height="5"/><rect x="244" y="110" width="24" height="42" rx="6" fill="currentColor" fill-opacity="0.14"/><path d="M256 110 V100 H268"/>' +
  '<rect x="274" y="130" width="14" height="22" rx="3" stroke-width="1.5"/>' +
  '<path d="M162 196 H298 V270 Q298 280 288 280 H172 Q162 280 162 270 Z" fill="currentColor" fill-opacity="0.08"/><rect x="156" y="188" width="148" height="9" rx="3" fill="var(--surface)"/>' +
  '<path d="M206 180 q-4 -6 0 -12 q4 -6 0 -12 M236 180 q-4 -6 0 -12 q4 -6 0 -12 M266 180 q-4 -6 0 -12 q4 -6 0 -12" stroke-width="1.5"/>' +
  '<rect x="324" y="126" width="52" height="50" rx="4" fill="currentColor" fill-opacity="0.08"/><path d="M332 138 H344"/>' +
  '<path d="M320 188 Q322 232 338 240 V280 H362 V240 Q378 232 380 188" fill="var(--surface)"/>' +
  '<ellipse cx="350" cy="186" rx="32" ry="9" fill="currentColor" fill-opacity="0.12"/>' +
  '<path d="M386 190 H412 M400 190 V194" stroke-width="1.5"/>' +
  '<rect x="387" y="204" width="13" height="40" fill="currentColor" fill-opacity="0.12" stroke-width="1.5"/><circle cx="400" cy="204" r="13" fill="var(--surface)"/><circle cx="400" cy="204" r="13" fill="currentColor" fill-opacity="0.08"/><circle cx="400" cy="204" r="4" stroke-width="1.5"/>' +
  '</g>' };
window.PICTURE_ART['bedroom'] = { vb: [420, 320], svg: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
  '<path d="M4 248 H416" stroke-width="1.5"/>' +
  '<line x1="30" y1="36" x2="158" y2="36"/>' +
  '<rect x="50" y="44" width="88" height="70" fill="currentColor" fill-opacity="0.06"/><path d="M94 44 V114 M46 114 H142"/>' +
  '<path d="M58 56 L70 48 M58 70 L82 52" stroke-width="1.5"/>' +
  '<path d="M32 38 Q40 80 32 128 H54 Q46 80 50 38 Z" fill="var(--surface)"/><path d="M32 38 Q40 80 32 128 H54 Q46 80 50 38 Z" fill="currentColor" fill-opacity="0.14"/>' +
  '<path d="M136 38 Q142 80 134 128 H156 Q148 80 154 38 Z" fill="var(--surface)"/><path d="M136 38 Q142 80 134 128 H156 Q148 80 154 38 Z" fill="currentColor" fill-opacity="0.14"/>' +
  '<rect x="10" y="140" width="14" height="108" rx="4" fill="currentColor" fill-opacity="0.1"/>' +
  '<rect x="24" y="200" width="146" height="22" rx="4" fill="currentColor" fill-opacity="0.06"/>' +
  '<rect x="24" y="222" width="146" height="18" fill="currentColor" fill-opacity="0.14"/><path d="M32 240 V248 M162 240 V248"/>' +
  '<ellipse cx="52" cy="190" rx="24" ry="11" fill="var(--surface)"/><path d="M40 188 Q52 184 64 188" stroke-width="1.5"/>' +
  '<path d="M80 188 Q120 178 168 190 L172 226 H76 Z" fill="var(--surface)"/><path d="M80 188 Q120 178 168 190 L172 226 H76 Z" fill="currentColor" fill-opacity="0.12"/>' +
  '<path d="M104 186 Q100 206 102 224 M144 186 Q148 206 144 224" stroke-width="1.5"/>' +
  '<rect x="176" y="200" width="52" height="48" fill="currentColor" fill-opacity="0.06"/><path d="M176 220 H228 M198 210 H206"/>' +
  '<path d="M176 200 H196 M186 200 V166"/><polygon points="170,166 202,166 194,138 178,138" fill="currentColor" fill-opacity="0.14"/>' +
  '<path d="M172 172 L167 179" stroke-width="1.5"/>' +
  '<circle cx="214" cy="184" r="14" fill="var(--surface)"/><path d="M214 184 V174 M214 184 L207 188 M205 195 L202 200 M223 195 L226 200" stroke-width="1.5"/>' +
  '<circle cx="204" cy="170" r="4" fill="currentColor" fill-opacity="0.2" stroke-width="1.5"/><circle cx="224" cy="170" r="4" fill="currentColor" fill-opacity="0.2" stroke-width="1.5"/>' +
  '<rect x="234" y="148" width="28" height="48" rx="4" fill="currentColor" fill-opacity="0.12"/><path d="M243 154 V190 M253 154 V190" stroke-width="1.5"/>' +
  '<polygon points="231,197 265,197 268,208 228,208" fill="var(--surface)"/><path d="M231 208 V248 M265 208 V248"/>' +
  '<rect x="270" y="172" width="84" height="8" fill="currentColor" fill-opacity="0.12"/><line x1="274" y1="180" x2="274" y2="248"/>' +
  '<rect x="326" y="180" width="28" height="68"/><path d="M326 203 H354 M326 226 H354 M335 192 H345 M335 215 H345 M335 238 H345" stroke-width="1.5"/>' +
  '<path d="M274 172 V152 Q285 146 296 152 Q307 146 318 152 V172 Q307 167 296 172 Q285 167 274 172 Z" fill="currentColor" fill-opacity="0.1"/><path d="M296 152 V172 M279 157 H291 M279 162 H291 M301 157 H313 M301 162 H313" stroke-width="1.5"/>' +
  '<circle cx="329" cy="162" r="8" fill="currentColor" fill-opacity="0.08"/><circle cx="349" cy="162" r="8" fill="currentColor" fill-opacity="0.08"/><path d="M337 161 Q339 157 341 161 M321 161 L318 170 M357 161 L360 170" stroke-width="1.5"/>' +
  '<rect x="366" y="48" width="48" height="200" fill="currentColor" fill-opacity="0.06"/><rect x="373" y="58" width="34" height="60" stroke-width="1.5"/><circle cx="406" cy="150" r="3"/>' +
  '<ellipse cx="150" cy="274" rx="17" ry="7" fill="currentColor" fill-opacity="0.12"/><ellipse cx="184" cy="282" rx="17" ry="7" fill="currentColor" fill-opacity="0.12"/>' +
  '<path d="M138 272 Q146 262 156 269 M172 280 Q180 270 190 277" stroke-width="1.5"/>' +
  '</g>' };
