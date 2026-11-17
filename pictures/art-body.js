/* Line art for the 'body' picture sets (0.24.0). NOT in js/data: no Japanese here (labels come from js/data/picture-sets-body.js),
   so changing art does not start the recording job.
   Shape (PLAN-0.24 A2): window.PICTURE_ART['<art id>'] = { vb: [width 300-420, height 240-440], svg: '<g>…</g>' }; inner SVG only:
   no <svg>, <text>, <style>, <script>, <image>, ids or external references; paints only stroke="currentColor", fill="none",
   fill="currentColor" with fill-opacity 0.06-0.2, fill="var(--surface)"; stroke width 1.5-3, round caps and joins; under 9 KB each.
   Art ids are permanent once a set uses them. */
window.PICTURE_ART = window.PICTURE_ART || {};
window.PICTURE_ART['body-front'] = { vb: [300, 420], svg:
    '<g fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" fill-opacity="0.08" d' +
    '="M141 70C141 78 141 82 141 85C136 92 118 92 108 96C100 99 96 106 95 116C92 136 89 156 86 174C83 192 79 210 76 228C70 240 68 256 72 266C76 274 86 272 ' +
    '88 264C90 254 90 244 88 234C92 214 96 196 100 180C104 162 107 146 111 132C113 160 115 182 114 200C113 214 108 228 107 244C106 270 109 296 112 318C115 ' +
    '340 114 362 118 386C110 392 102 398 103 404C104 409 136 409 141 404C143 398 142 392 140 386C141 362 142 340 142 320C143 296 145 276 150 264C155 276 15' +
    '7 296 158 320C158 340 159 362 160 386C158 392 157 398 159 404C164 409 196 409 197 404C198 398 190 392 182 386C186 362 185 340 188 318C191 296 194 270 ' +
    '193 244C192 228 187 214 186 200C185 182 187 160 189 132C193 146 196 162 200 180C204 196 208 214 212 234C210 244 210 254 212 264C214 272 224 274 228 26' +
    '6C232 256 230 240 224 228C221 210 217 192 214 174C211 156 208 136 205 116C204 106 200 99 192 96C182 92 164 92 159 85C159 82 159 78 159 70Z"/><ellipse ' +
    'cx="150" cy="46" rx="24" ry="28" fill="var(--surface)"/><ellipse cx="150" cy="46" rx="24" ry="28" fill="currentColor" fill-opacity="0.08"/><path d="M1' +
    '26.5 40C119 38 118 54 127 55M173.5 40C181 38 182 54 173 55"/><path fill="currentColor" fill-opacity="0.08" d="M126 44C125 24 138 17 150 17C162 17 175 ' +
    '24 174 44C168 33 158 29 150 31C142 29 132 33 126 44Z"/><g stroke-width="2"><circle cx="141" cy="47" r="2.2"/><circle cx="159" cy="47" r="2.2"/><path d' +
    '="M150 50L148 57L152 57"/><path d="M143 63Q150 68 157 63"/><path d="M128 101Q138 105 146 102M172 101Q162 105 154 102"/><circle cx="150" cy="214" r="2.' +
    '5"/><path d="M78 252L84 248M222 252L216 248"/></g><path stroke-width="2" d="M121 320Q127 325 134 320M166 320Q173 325 179 320"/></g>' };
window.PICTURE_ART['body-back'] = { vb: [300, 420], svg:
    '<g fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" fill-opacity="0.08" d' +
    '="M141 70C141 78 141 82 141 85C136 92 118 92 108 96C100 99 96 106 95 116C92 136 89 156 86 174C83 192 79 210 76 228C70 240 68 256 72 266C76 274 86 272 ' +
    '88 264C90 254 90 244 88 234C92 214 96 196 100 180C104 162 107 146 111 132C113 160 115 182 114 200C113 214 108 228 107 244C106 270 109 296 112 318C115 ' +
    '340 114 362 118 386C110 392 102 398 103 404C104 409 136 409 141 404C143 398 142 392 140 386C141 362 142 340 142 320C143 296 145 276 150 264C155 276 15' +
    '7 296 158 320C158 340 159 362 160 386C158 392 157 398 159 404C164 409 196 409 197 404C198 398 190 392 182 386C186 362 185 340 188 318C191 296 194 270 ' +
    '193 244C192 228 187 214 186 200C185 182 187 160 189 132C193 146 196 162 200 180C204 196 208 214 212 234C210 244 210 254 212 264C214 272 224 274 228 26' +
    '6C232 256 230 240 224 228C221 210 217 192 214 174C211 156 208 136 205 116C204 106 200 99 192 96C182 92 164 92 159 85C159 82 159 78 159 70Z"/><ellipse ' +
    'cx="150" cy="46" rx="24" ry="28" fill="var(--surface)"/><ellipse cx="150" cy="46" rx="24" ry="28" fill="currentColor" fill-opacity="0.08"/><path d="M1' +
    '26.5 40C119 38 118 54 127 55M173.5 40C181 38 182 54 173 55"/><path fill="currentColor" fill-opacity="0.18" d="M126 46C124 24 138 18 150 18C162 18 176 ' +
    '24 174 46C174 58 170 66 166 70C156 66 144 66 134 70C130 66 126 58 126 46Z"/><g stroke-width="2"><path d="M150 92L150 196" stroke-dasharray="3 6"/><pat' +
    'h d="M124 116Q126 138 140 146M176 116Q174 138 160 146"/><path d="M84 170Q89 174 94 172M216 170Q211 174 206 172"/><path d="M150 228L150 262M114 248Q130' +
    ' 262 148 256M186 248Q170 262 152 256"/><path d="M120 338Q127 344 136 338M164 338Q173 344 180 338"/><path d="M121 396Q129 402 138 398M179 396Q171 402 1' +
    '62 398"/></g></g>' };
window.PICTURE_ART['face'] = { vb: [320, 400], svg:
    '<g fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" fill="currentColor" fill-op' +
    'acity="0.08" d="M128 282L128 330C110 342 70 346 46 358C30 366 22 380 20 394L300 394C298 380 290 366 274 358C250 346 210 342 192 330L192 282Z"/><path d' +
    '="M128 282L128 330C110 342 70 346 46 358C30 366 22 380 20 394M300 394C298 380 290 366 274 358C250 346 210 342 192 330L192 282"/><path d="M74 150C56 13' +
    '8 48 176 58 194C63 202 70 204 78 199M66 162C61 172 63 184 70 190"/><path d="M246 150C264 138 272 176 262 194C257 202 250 204 242 199M254 162C259 172 2' +
    '57 184 250 190"/><ellipse cx="160" cy="170" rx="88" ry="118" fill="var(--surface)"/><ellipse cx="160" cy="170" rx="88" ry="118" fill="currentColor" fi' +
    'll-opacity="0.08"/><path fill="currentColor" fill-opacity="0.18" d="M73 152C64 80 108 40 160 40C212 40 256 80 247 152C238 122 222 106 200 99C176 92 14' +
    '4 92 120 99C98 106 82 122 73 152Z"/><path d="M106 138Q122 129 138 135M182 135Q198 129 214 138"/><path d="M106 160Q122 148 138 160Q122 170 106 160ZM182' +
    ' 160Q198 148 214 160Q198 170 182 160Z"/><circle cx="122" cy="159" r="4.5" fill="currentColor" fill-opacity="0.2"/><circle cx="198" cy="159" r="4.5" fi' +
    'll="currentColor" fill-opacity="0.2"/><path d="M160 170C157 182 150 194 152 200C156 205 164 205 168 200"/><circle cx="104" cy="208" r="15" stroke="non' +
    'e" fill="currentColor" fill-opacity="0.1"/><circle cx="216" cy="208" r="15" stroke="none" fill="currentColor" fill-opacity="0.1"/><path fill="var(--su' +
    'rface)" d="M128 224C140 212 180 212 192 224C188 248 172 258 160 258C148 258 132 248 128 224Z"/><path stroke-width="2" fill="currentColor" fill-opacity' +
    '="0.06" d="M134 222C146 216 174 216 186 222L184 230C170 227 150 227 136 230Z"/><path stroke-width="1.5" d="M148 218L148 228M160 217L160 227M172 218L17' +
    '2 228"/><path stroke-width="2" fill="currentColor" fill-opacity="0.15" d="M141 249C145 236 175 236 179 249C172 256 148 256 141 249Z"/><path stroke-wid' +
    'th="2" d="M148 280Q160 285 172 280M150 310Q160 314 170 310"/></g>' };
window.PICTURE_ART['hand-arm'] = { vb: [400, 320], svg:
    '<g fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" fill-opacity="0.08" d' +
    '="M16 318C16 280 22 246 46 234C70 224 100 238 128 246C150 232 190 216 222 204C210 196 190 176 172 156C160 142 164 120 178 126C190 132 198 150 204 160L' +
    '202 130L202 50C202 30 232 30 232 50L232 128L232 34C232 14 264 14 264 34L264 128L264 44C264 24 296 24 296 44L296 130L296 78C296 60 324 60 324 78L324 15' +
    '0C324 178 316 196 304 206C270 236 210 280 172 300C160 308 140 312 126 310C100 306 76 302 60 300C56 306 54 312 54 318"/><g stroke-width="2"><path d="M2' +
    '08 52C208 42 226 42 226 52L226 60L208 60ZM239 36C239 26 257 26 257 36L257 44L239 44ZM271 46C271 36 289 36 289 46L289 54L271 54ZM302 80C302 72 318 72 3' +
    '18 80L318 87L302 87ZM166 130C166 122 176 122 180 128L182 136L170 138Z"/><path d="M209 116Q217 121 225 116M240 114Q248 119 256 114M271 116Q280 121 288 ' +
    '116M302 128Q310 133 318 128"/><path d="M226 210Q262 220 300 212M118 266Q110 280 116 292"/></g></g>' };
window.PICTURE_ART['leg-foot'] = { vb: [400, 420], svg:
    '<g fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" fill-opacity="0.08" d' +
    '="M70 16C62 40 58 62 52 90C46 120 56 140 70 150C76 190 80 230 84 262C76 290 74 320 84 350C88 370 86 384 82 396C80 406 88 412 100 412L186 412C196 412 1' +
    '98 400 188 396C170 390 140 378 118 366C112 330 116 296 120 270C126 256 128 240 122 228C128 190 140 120 142 90C144 60 148 40 146 16"/><g stroke-width="' +
    '2"><path d="M66 22Q80 30 94 26M70 150Q66 132 74 120M122 228Q114 240 120 252M86 262Q94 258 100 264M114 372Q108 380 116 384"/><path d="M180 400Q184 404 ' +
    '182 410"/></g><path fill="currentColor" fill-opacity="0.08" d="M262 404C240 404 234 380 236 350C238 310 238 270 240 236C240 208 242 182 246 166C248 15' +
    '0 276 148 278 166L281 176C282 160 302 160 302 176L304 184C304 168 323 168 323 186L325 196C326 182 342 182 342 198L344 210C346 198 360 198 360 212C362 ' +
    '232 356 262 350 290C342 330 330 360 326 380C320 400 296 408 262 404Z"/><g stroke-width="2"><path d="M252 166C252 158 270 158 270 166L270 174L252 174ZM' +
    '286 176C286 170 298 170 298 176L298 182L286 182ZM307 186C307 180 319 180 319 186L319 192L307 192ZM327 197C327 192 338 192 338 197L338 203L327 203ZM346' +
    ' 211C346 206 356 206 356 211L356 216L346 216Z"/><path d="M246 190Q262 196 278 192M282 196Q291 199 300 196M304 205Q312 208 320 205M324 216Q332 219 340 ' +
    '216"/></g></g>' };
window.PICTURE_ART['inside'] = { vb: [320, 440], svg:
    '<g fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" fill-opacity="0.08" d' +
    '="M48 438C50 380 54 340 58 300C62 240 64 190 66 166C68 148 76 134 90 128C106 122 136 122 148 116L148 92L172 92L172 116C184 122 214 122 230 128C244 134' +
    ' 252 148 254 166C256 190 258 240 262 300C266 340 270 380 272 438"/><path d="M80 438C82 360 86 280 94 190M94 190C98 270 98 350 100 438M240 438C238 360 ' +
    '234 280 226 190M226 190C222 270 222 350 220 438"/><g stroke-width="2" fill="currentColor" fill-opacity="0.12"><path d="M66 172C60 168 62 160 68 160C70' +
    ' 156 78 156 78 162C80 168 76 172 74 174L71 258C76 262 76 270 70 270C66 274 60 270 62 264C58 260 62 254 66 256Z"/><path d="M64 282L60 360M74 282L72 360' +
    'M60 278C60 272 78 272 78 280M58 362C58 368 76 368 74 362"/></g><ellipse cx="160" cy="56" rx="34" ry="40" fill="var(--surface)"/><ellipse cx="160" cy="' +
    '56" rx="34" ry="40" fill="currentColor" fill-opacity="0.08"/><path stroke-width="2" fill="currentColor" fill-opacity="0.15" d="M134 50C130 30 148 22 1' +
    '60 26C172 22 192 30 186 50C190 62 176 68 160 64C146 68 130 62 134 50Z"/><path stroke-width="2" d="M148 34Q156 42 150 52M170 32Q164 42 172 52M151 80Q16' +
    '0 86 169 80"/><path stroke-width="2" d="M155 88L155 250M165 88L165 246"/><g stroke-width="2" fill="currentColor" fill-opacity="0.15"><rect x="151" y="' +
    '380" width="18" height="9" rx="3"/><rect x="151" y="392" width="18" height="9" rx="3"/><rect x="151" y="404" width="18" height="9" rx="3"/><rect x="15' +
    '1" y="416" width="18" height="9" rx="3"/><path d="M148 428C128 430 108 416 104 396C102 386 110 382 116 388C124 400 136 406 148 406ZM172 428C192 430 21' +
    '2 416 216 396C218 386 210 382 204 388C196 400 184 406 172 406Z"/></g><path fill="var(--surface)" d="M150 140C120 136 106 160 104 200C102 236 112 254 1' +
    '28 252C142 250 150 238 150 220Z"/><path fill="var(--surface)" d="M170 140C200 136 214 160 216 200C218 236 208 254 192 252C178 250 170 238 170 220Z"/><' +
    'path fill="currentColor" fill-opacity="0.1" d="M150 140C120 136 106 160 104 200C102 236 112 254 128 252C142 250 150 238 150 220ZM170 140C200 136 214 1' +
    '60 216 200C218 236 208 254 192 252C178 250 170 238 170 220Z"/><path fill="var(--surface)" d="M162 184C152 172 134 178 138 196C142 212 158 224 172 232C' +
    '182 220 196 206 194 192C192 176 176 172 166 184Z"/><path fill="currentColor" fill-opacity="0.2" d="M162 184C152 172 134 178 138 196C142 212 158 224 17' +
    '2 232C182 220 196 206 194 192C192 176 176 172 166 184Z"/><path fill="var(--surface)" d="M104 266C118 254 158 254 172 264C168 282 150 294 130 294C112 2' +
    '96 100 284 104 266Z"/><path fill="currentColor" fill-opacity="0.12" d="M104 266C118 254 158 254 172 264C168 282 150 294 130 294C112 296 100 284 104 26' +
    '6Z"/><path fill="var(--surface)" d="M160 252C188 240 222 252 218 280C214 306 188 312 176 300C168 292 178 284 188 284C198 278 190 266 172 270Z"/><path ' +
    'fill="currentColor" fill-opacity="0.14" d="M160 252C188 240 222 252 218 280C214 306 188 312 176 300C168 292 178 284 188 284C198 278 190 266 172 270Z"/' +
    '><path fill="var(--surface)" d="M114 362L114 322C114 312 122 306 132 306L188 306C198 306 206 312 206 322L206 362C206 370 200 374 192 374L128 374C120 3' +
    '74 114 370 114 362Z"/><path fill="currentColor" fill-opacity="0.1" d="M114 362L114 322C114 312 122 306 132 306L188 306C198 306 206 312 206 322L206 362' +
    'C206 370 200 374 192 374L128 374C120 374 114 370 114 362Z"/><path stroke-width="2" d="M134 324C148 314 164 334 180 324C192 318 194 336 182 340C166 346' +
    ' 152 334 138 344C126 352 134 362 148 358C164 352 176 362 188 356"/></g>' };
