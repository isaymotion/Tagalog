/* Line art for the 'nature' picture sets (0.24.0). NOT in js/data: no Japanese here (labels come from js/data/picture-sets-nature.js),
   so changing art does not start the recording job.
   Shape (PLAN-0.24 A2): window.PICTURE_ART['<art id>'] = { vb: [width 300-420, height 240-440], svg: '<g>…</g>' }; inner SVG only:
   no <svg>, <text>, <style>, <script>, <image>, ids or external references; paints only stroke="currentColor", fill="none",
   fill="currentColor" with fill-opacity 0.06-0.2, fill="var(--surface)"; stroke width 1.5-3, round caps and joins; under 9 KB each.
   Art ids are permanent once a set uses them. */
window.PICTURE_ART = window.PICTURE_ART || {};
window.PICTURE_ART['landscape'] = { vb: [400, 300], svg: '<g stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">' +
  /* frame (sky) */
  '<rect x="4" y="4" width="392" height="292" rx="10"/>' +
  /* sun */
  '<circle cx="352" cy="46" r="17" fill="currentColor" fill-opacity="0.15"/>' +
  '<path d="M352 20v-8M352 72v8M326 46h-8M378 46h8M334 28l-6-6M370 28l6-6M334 64l-6 6M370 64l6 6"/>' +
  /* cloud */
  '<path d="M58 64Q44 64 47 52Q50 42 62 44Q66 28 84 30Q98 20 109 35Q125 33 125 49Q126 64 111 64Z" fill="currentColor" fill-opacity="0.08"/>' +
  /* mountain with snow cap */
  '<path d="M108 165L205 62L302 165" fill="currentColor" fill-opacity="0.1"/>' +
  '<path d="M183 86L205 62L227 86L217 81L210 89L200 81L192 89Z" fill="var(--surface)"/>' +
  /* far hill with forest */
  '<path d="M4 142Q50 116 128 160"/>' +
  '<path d="M14 150L24 124L34 150ZM30 146L41 117L52 146ZM48 146L60 112L72 146ZM68 148L79 120L90 148ZM86 152L96 128L106 152Z" fill="currentColor" fill-opacity="0.18"/>' +
  '<path d="M24 150v6M41 146v8M60 146v8M79 148v8M96 152v6"/>' +
  /* land line */
  '<path d="M4 165H108M302 165H396"/>' +
  /* sea */
  '<path d="M300 165Q266 212 258 258Q254 282 262 296H396V165Z" fill="currentColor" fill-opacity="0.08" stroke="none"/>' +
  '<path d="M300 165Q266 212 258 258Q254 282 262 296"/>' +
  '<path d="M290 232q6-4 12 0t12 0M322 262q6-4 12 0t12 0t12 0M286 284q6-4 12 0t12 0M356 238q6-4 12 0t12 0M350 286q6-4 12 0t12 0"/>' +
  /* island */
  '<path d="M312 212Q330 172 352 172Q376 172 392 212Z" fill="currentColor" fill-opacity="0.18"/>' +
  '<path d="M306 212H396M322 219h12M362 219h16"/>' +
  /* river */
  '<path d="M192 165C168 205 196 238 257 279Q258 258 262 240C228 222 204 196 214 165Z" fill="currentColor" fill-opacity="0.12" stroke="none"/>' +
  '<path d="M192 165C168 205 196 238 257 279M214 165C204 196 228 222 262 240"/>' +
  '<path d="M214 236q5-4 10 0M240 258q5-4 10 0M194 222q5-4 10 0"/>' +
  /* bridge */
  '<path d="M172 200Q199 184 226 200" fill="var(--surface)" stroke-width="2.6"/>' +
  '<path d="M172 189Q199 173 226 189M172 189v11M226 189v11M181 185v10M190 182v9M199 181v9M208 182v9M217 185v10"/>' +
  /* rice field */
  '<path d="M26 206H122L136 262H12Z" fill="currentColor" fill-opacity="0.08"/>' +
  '<path d="M19 234H129M74 206V262"/>' +
  '<path d="M34 218v-4M46 218v-4M58 218v-4M90 218v-4M102 218v-4M114 218v-4M30 248v-4M44 248v-4M58 248v-4M90 248v-4M104 248v-4M118 248v-4"/>' +
  /* tree */
  '<path d="M146 230V202M146 218l-8-7M146 212l7-6"/>' +
  '<circle cx="146" cy="184" r="19" fill="currentColor" fill-opacity="0.15"/>' +
  /* flower */
  '<path d="M178 293V275M178 287q-10-1-13-9M178 284q10-1 13-9"/>' +
  '<circle cx="178" cy="262" r="13" fill="var(--surface)" stroke="none"/>' +
  '<circle cx="178" cy="249" r="8"/><circle cx="190" cy="258" r="8"/><circle cx="186" cy="273" r="8"/><circle cx="170" cy="273" r="8"/><circle cx="166" cy="258" r="8"/>' +
  '<circle cx="178" cy="262" r="6" fill="currentColor" fill-opacity="0.2"/>' +
  '</g>' };
