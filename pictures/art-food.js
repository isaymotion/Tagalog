/* Line art for the 'food' picture sets (0.24.0). NOT in js/data: no Japanese here (labels come from js/data/picture-sets-food.js),
   so changing art does not start the recording job.
   Shape (PLAN-0.24 A2): window.PICTURE_ART['<art id>'] = { vb: [width 300-420, height 240-440], svg: '<g>…</g>' }; inner SVG only:
   no <svg>, <text>, <style>, <script>, <image>, ids or external references; paints only stroke="currentColor", fill="none",
   fill="currentColor" with fill-opacity 0.06-0.2, fill="var(--surface)"; stroke width 1.5-3, round caps and joins; under 9 KB each.
   Art ids are permanent once a set uses them. */
window.PICTURE_ART = window.PICTURE_ART || {};
window.PICTURE_ART['table-setting'] = { vb: [420, 320], svg: '<g stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">' +
  /* tray */
  '<path d="M30 150 L300 150 L318 294 L12 294 Z" fill="currentColor" fill-opacity="0.14"/>' +
  '<path d="M42 161 L289 161 L304 283 L27 283 Z" fill="var(--surface)"/>' +
  /* plate with fish, back right */
  '<ellipse cx="222" cy="186" rx="58" ry="17" fill="var(--surface)"/>' +
  '<ellipse cx="222" cy="185" rx="44" ry="11"/>' +
  '<path d="M190 185 Q216 172 244 185 Q216 197 190 185 Z" fill="currentColor" fill-opacity="0.16"/>' +
  '<path d="M244 185 L258 177 L257 194 Z" fill="currentColor" fill-opacity="0.16"/>' +
  '<circle cx="199" cy="184" r="1"/>' +
  /* rice bowl, front left */
  '<path d="M60 214 Q64 244 92 248 L108 248 Q136 244 140 214 Z" fill="var(--surface)"/>' +
  '<path d="M88 248 L90 254 L110 254 L112 248"/>' +
  '<path d="M61 214 Q66 189 100 187 Q134 189 139 214 Q100 224 61 214 Z" fill="currentColor" fill-opacity="0.06"/>' +
  '<path d="M80 202 q3 -2 6 0 M98 196 q3 -2 6 0 M114 204 q3 -2 6 0 M92 210 q3 -2 6 0"/>' +
  /* soup bowl, front right */
  '<path d="M178 216 Q180 248 208 252 L228 252 Q256 248 258 216 Z" fill="currentColor" fill-opacity="0.2"/>' +
  '<path d="M206 252 L208 257 L228 257 L230 252"/>' +
  '<ellipse cx="218" cy="216" rx="40" ry="10" fill="var(--surface)"/>' +
  '<ellipse cx="218" cy="216" rx="35" ry="7" fill="currentColor" fill-opacity="0.1"/>' +
  '<rect x="204" y="212" width="7" height="5" rx="1"/><rect x="224" y="215" width="7" height="5" rx="1"/>' +
  /* chopsticks on a rest */
  '<path d="M180 263 Q188 260 196 263 L196 273 Q188 270 180 273 Z" fill="currentColor" fill-opacity="0.14"/>' +
  '<line x1="40" y1="270" x2="200" y2="264" stroke-width="2.6"/>' +
  '<line x1="40" y1="276" x2="202" y2="270" stroke-width="2.6"/>' +
  /* spoon */
  '<line x1="222" y1="273" x2="274" y2="270" stroke-width="2.8"/>' +
  '<ellipse cx="287" cy="269" rx="13" ry="7" fill="currentColor" fill-opacity="0.1"/>' +
  /* glass of water */
  '<path d="M36 70 L42 134 L66 134 L72 70" fill="var(--surface)"/>' +
  '<path d="M39 88 L69 88 L66 134 L42 134 Z" fill="currentColor" fill-opacity="0.1" stroke="none"/>' +
  '<line x1="39" y1="88" x2="69" y2="88" stroke-width="1.6"/>' +
  '<ellipse cx="54" cy="70" rx="18" ry="4"/>' +
  /* soy sauce bottle */
  '<path d="M114 134 L114 104 Q114 92 130 90 Q146 92 146 104 L146 134 Z" fill="currentColor" fill-opacity="0.2"/>' +
  '<path d="M121 90 L121 78 L139 78 L139 90" fill="var(--surface)"/>' +
  '<path d="M137 82 L152 72 L154 76 L139 86"/>' +
  /* salt shaker */
  '<path d="M178 134 L180 94 L200 94 L202 134 Z" fill="currentColor" fill-opacity="0.06"/>' +
  '<path d="M180 94 Q181 80 190 80 Q199 80 200 94"/>' +
  '<circle cx="186" cy="87" r="0.6"/><circle cx="190" cy="85" r="0.6"/><circle cx="194" cy="87" r="0.6"/>' +
  /* teapot with side handle */
  '<path d="M334 76 L316 62 L311 66 L332 90" fill="var(--surface)"/>' +
  '<path d="M386 76 L410 62 L415 69 L390 86 Z" fill="currentColor" fill-opacity="0.14"/>' +
  '<path d="M332 92 Q330 60 362 58 Q394 60 392 92 Q362 104 332 92 Z" fill="currentColor" fill-opacity="0.1"/>' +
  '<ellipse cx="362" cy="61" rx="16" ry="4" fill="var(--surface)"/>' +
  '<circle cx="362" cy="54" r="4"/>' +
  /* teacup (no handle) */
  '<path d="M340 118 L343 158 L373 158 L376 118" fill="currentColor" fill-opacity="0.06"/>' +
  '<ellipse cx="358" cy="118" rx="18" ry="4" fill="var(--surface)"/>' +
  '<ellipse cx="358" cy="119" rx="14" ry="2.5" fill="currentColor" fill-opacity="0.18" stroke="none"/>' +
  /* fork */
  '<path d="M338 180 L338 216 Q346 228 354 216 L354 180"/>' +
  '<line x1="343.5" y1="180" x2="343.5" y2="212" stroke-width="1.8"/><line x1="348.5" y1="180" x2="348.5" y2="212" stroke-width="1.8"/>' +
  '<path d="M343 226 L349 226 L350 300 Q346 305 342 300 Z" fill="currentColor" fill-opacity="0.12"/>' +
  /* knife */
  '<path d="M388 252 L388 184 Q398 190 399 214 L398 252" fill="var(--surface)"/>' +
  '<path d="M386 252 L400 252 L399 302 Q393 307 387 302 Z" fill="currentColor" fill-opacity="0.14"/>' +
  '</g>' };
