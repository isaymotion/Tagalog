/* Line art for the 'clothes' picture sets (0.24.0). NOT in js/data: no Japanese here (labels come from js/data/picture-sets-clothes.js),
   so changing art does not start the recording job.
   Shape (PLAN-0.24 A2): window.PICTURE_ART['<art id>'] = { vb: [width 300-420, height 240-440], svg: '<g>…</g>' }; inner SVG only:
   no <svg>, <text>, <style>, <script>, <image>, ids or external references; paints only stroke="currentColor", fill="none",
   fill="currentColor" with fill-opacity 0.06-0.2, fill="var(--surface)"; stroke width 1.5-3, round caps and joins; under 9 KB each.
   Art ids are permanent once a set uses them. */
window.PICTURE_ART = window.PICTURE_ART || {};
window.PICTURE_ART['clothes'] = { vb: [360, 400], svg: '<g stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">' +
  /* left figure: hat, glasses, shirt with pocket and buttons, belt, trousers, shoes */
  '<circle cx="95" cy="74" r="24" fill="var(--surface)"/>' +
  '<path d="M75 48 L78 24 Q95 17 112 24 L115 48 Z" fill="currentColor" fill-opacity="0.18"/>' +
  '<ellipse cx="95" cy="49" rx="33" ry="6" fill="var(--surface)"/><ellipse cx="95" cy="49" rx="33" ry="6" fill="currentColor" fill-opacity="0.18"/>' +
  '<circle cx="85" cy="76" r="7"/><circle cx="105" cy="76" r="7"/><path d="M92 76 L98 76 M78 75 L72 72 M112 75 L118 72"/>' +
  '<path d="M89 89 Q95 93 101 89"/><path d="M90 97 L90 107 M100 97 L100 107"/>' +
  '<path d="M62 110 L46 184 L57 187 L68 132 Z" fill="var(--surface)"/><path d="M128 110 L144 184 L133 187 L122 132 Z" fill="var(--surface)"/>' +
  '<circle cx="51" cy="193" r="6" fill="var(--surface)"/><circle cx="139" cy="193" r="6" fill="var(--surface)"/>' +
  '<path d="M62 108 L128 108 L126 206 L64 206 Z" fill="var(--surface)"/>' +
  '<path d="M86 106 L95 118 L104 106"/><path d="M95 118 L95 200"/>' +
  '<circle cx="95" cy="132" r="2.5"/><circle cx="95" cy="151" r="2.5"/><circle cx="95" cy="170" r="2.5"/><circle cx="95" cy="189" r="2.5"/>' +
  '<path d="M66 120 L90 120 L90 142 Q78 149 66 142 Z" fill="currentColor" fill-opacity="0.08"/>' +
  '<path d="M64 210 L126 210 L124 362 L100 362 L95 240 L90 362 L66 362 Z" fill="currentColor" fill-opacity="0.12"/>' +
  '<path d="M64 200 L126 200 L126 211 L64 211 Z" fill="currentColor" fill-opacity="0.2"/>' +
  '<path d="M89 198 L101 198 L101 213 L89 213 Z" fill="var(--surface)"/><path d="M95 202 L95 209"/>' +
  '<path d="M66 362 L90 362 L90 375 L56 375 Q54 366 66 362 Z" fill="currentColor" fill-opacity="0.2"/>' +
  '<path d="M100 362 L124 362 Q136 366 134 375 L100 375 Z" fill="currentColor" fill-opacity="0.2"/>' +
  /* right figure: coat, skirt, socks, shoes, bag */
  '<circle cx="265" cy="74" r="24" fill="var(--surface)"/>' +
  '<path d="M241 76 Q240 46 265 46 Q290 46 289 76 L289 98 Q283 92 283 80 Q265 64 247 80 Q247 92 241 98 Z" fill="currentColor" fill-opacity="0.2"/>' +
  '<circle cx="257" cy="76" r="1.5"/><circle cx="273" cy="76" r="1.5"/><path d="M259 88 Q265 92 271 88"/><path d="M260 97 L260 107 M270 97 L270 107"/>' +
  '<path d="M228 110 L213 196 L225 199 L236 134 Z" fill="var(--surface)"/><path d="M302 110 L317 196 L305 199 L294 134 Z" fill="var(--surface)"/>' +
  '<path d="M228 110 L213 196 L225 199 L236 134 Z" fill="currentColor" fill-opacity="0.1"/><path d="M302 110 L317 196 L305 199 L294 134 Z" fill="currentColor" fill-opacity="0.1"/>' +
  '<circle cx="219" cy="205" r="6" fill="var(--surface)"/>' +
  '<path d="M236 214 L294 214 L312 292 L218 292 Z" fill="var(--surface)"/>' +
  '<path d="M248 256 L244 292 M265 256 L265 292 M282 256 L286 292"/>' +
  '<path d="M228 108 L302 108 L312 254 L218 254 Z" fill="var(--surface)"/><path d="M228 108 L302 108 L312 254 L218 254 Z" fill="currentColor" fill-opacity="0.1"/>' +
  '<path d="M250 106 L265 132 L280 106"/><path d="M265 132 L268 254"/>' +
  '<path d="M250 292 L250 320 M260 292 L260 320 M270 292 L270 320 M280 292 L280 320"/>' +
  '<path d="M249 318 L261 318 L261 361 L249 361 Z M269 318 L281 318 L281 361 L269 361 Z" fill="currentColor" fill-opacity="0.15"/>' +
  '<path d="M249 324 L261 324 M269 324 L281 324"/>' +
  '<path d="M249 361 L261 361 L262 374 L238 374 Q236 365 249 361 Z" fill="currentColor" fill-opacity="0.2"/>' +
  '<path d="M269 361 L281 361 Q294 365 292 374 L268 374 Z" fill="currentColor" fill-opacity="0.2"/>' +
  '<path d="M302 218 Q311 192 320 218"/>' +
  '<path d="M294 218 L328 218 L333 254 L289 254 Z" fill="var(--surface)"/><path d="M294 218 L328 218 L333 254 L289 254 Z" fill="currentColor" fill-opacity="0.15"/>' +
  '<path d="M294 228 L328 228"/>' +
  '<circle cx="311" cy="205" r="6" fill="var(--surface)"/>' +
  '</g>' };
