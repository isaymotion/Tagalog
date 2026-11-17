/* Line art for the 'daily' picture sets (0.24.0). NOT in js/data: no Japanese here (labels come from js/data/picture-sets-daily.js),
   so changing art does not start the recording job.
   Shape (PLAN-0.24 A2): window.PICTURE_ART['<art id>'] = { vb: [width 300-420, height 240-440], svg: '<g>…</g>' }; inner SVG only:
   no <svg>, <text>, <style>, <script>, <image>, ids or external references; paints only stroke="currentColor", fill="none",
   fill="currentColor" with fill-opacity 0.06-0.2, fill="var(--surface)"; stroke width 1.5-3, round caps and joins; under 9 KB each.
   Art ids are permanent once a set uses them. */
window.PICTURE_ART = window.PICTURE_ART || {};
/* family-tree: simple figures in four rows (grandparents, parents, me with my brothers and sisters, my children). Men have short
   hair and a straight body, women long hair and a dress. "Me" (a woman: the tree has 夫) stands in a dashed box; older siblings to
   my left, younger (slightly smaller) to my right. Marriages are double lines; my husband sits just below my row, joined only to
   me, and our children hang from that marriage line. Pins sit on the bodies; hair stays visible above them. */
window.PICTURE_ART['family-tree'] = { vb: [400, 380], svg:
  '<g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
  '<path d="M144 46H186M144 52H186M165 52V91"/>' +
  '<path d="M179 128H221M179 134H221M200 134V166"/>' +
  '<path d="M40 177V166H360V180M100 166V177M160 166V172M300 166V180"/>' +
  '<path d="M157 240V272H217M163 240V266H217M187 272V304M160 304H240M160 304V315M240 304V315"/>' +
  '<rect x="134" y="172" width="52" height="70" rx="12" fill="currentColor" fill-opacity="0.08" stroke-dasharray="5 4"/>' +
  '<circle cx="130" cy="23" r="9" fill="var(--surface)"/>' +
  '<path d="M121 22 Q121 12 130 13 Q139 12 139 22 Q130 17 121 22 Z" fill="currentColor" fill-opacity="0.2"/>' +
  '<path d="M117 66 L117 42 Q117 34 125 34 L135 34 Q143 34 143 42 L143 66 Z" fill="var(--surface)"/>' +
  '<path d="M117 66 L117 42 Q117 34 125 34 L135 34 Q143 34 143 42 L143 66 Z" fill="currentColor" fill-opacity="0.12"/>' +
  '<path d="M189 32 Q188 9 200 10 Q212 9 211 32 Z" fill="currentColor" fill-opacity="0.2"/>' +
  '<circle cx="200" cy="23" r="9" fill="var(--surface)"/>' +
  '<path d="M194 34 L206 34 L216 66 L184 66 Z" fill="var(--surface)"/>' +
  '<path d="M194 34 L206 34 L216 66 L184 66 Z" fill="currentColor" fill-opacity="0.12"/>' +
  '<circle cx="165" cy="105" r="9" fill="var(--surface)"/>' +
  '<path d="M156 104 Q156 94 165 95 Q174 94 174 104 Q165 99 156 104 Z" fill="currentColor" fill-opacity="0.2"/>' +
  '<path d="M152 148 L152 124 Q152 116 160 116 L170 116 Q178 116 178 124 L178 148 Z" fill="var(--surface)"/>' +
  '<path d="M152 148 L152 124 Q152 116 160 116 L170 116 Q178 116 178 124 L178 148 Z" fill="currentColor" fill-opacity="0.12"/>' +
  '<path d="M224 114 Q223 91 235 92 Q247 91 246 114 Z" fill="currentColor" fill-opacity="0.2"/>' +
  '<circle cx="235" cy="105" r="9" fill="var(--surface)"/>' +
  '<path d="M229 116 L241 116 L251 148 L219 148 Z" fill="var(--surface)"/>' +
  '<path d="M229 116 L241 116 L251 148 L219 148 Z" fill="currentColor" fill-opacity="0.12"/>' +
  '<circle cx="40" cy="191" r="9" fill="var(--surface)"/>' +
  '<path d="M31 190 Q31 180 40 181 Q49 180 49 190 Q40 185 31 190 Z" fill="currentColor" fill-opacity="0.2"/>' +
  '<path d="M27 234 L27 210 Q27 202 35 202 L45 202 Q53 202 53 210 L53 234 Z" fill="var(--surface)"/>' +
  '<path d="M27 234 L27 210 Q27 202 35 202 L45 202 Q53 202 53 210 L53 234 Z" fill="currentColor" fill-opacity="0.12"/>' +
  '<path d="M89 200 Q88 177 100 178 Q112 177 111 200 Z" fill="currentColor" fill-opacity="0.2"/>' +
  '<circle cx="100" cy="191" r="9" fill="var(--surface)"/>' +
  '<path d="M94 202 L106 202 L116 234 L84 234 Z" fill="var(--surface)"/>' +
  '<path d="M94 202 L106 202 L116 234 L84 234 Z" fill="currentColor" fill-opacity="0.12"/>' +
  '<path d="M149 200 Q148 177 160 178 Q172 177 171 200 Z" fill="currentColor" fill-opacity="0.2"/>' +
  '<circle cx="160" cy="191" r="9" fill="var(--surface)"/>' +
  '<path d="M154 202 L166 202 L176 234 L144 234 Z" fill="var(--surface)"/>' +
  '<path d="M154 202 L166 202 L176 234 L144 234 Z" fill="currentColor" fill-opacity="0.12"/>' +
  '<circle cx="230" cy="249" r="9" fill="var(--surface)"/>' +
  '<path d="M221 248 Q221 238 230 239 Q239 238 239 248 Q230 243 221 248 Z" fill="currentColor" fill-opacity="0.2"/>' +
  '<path d="M217 292 L217 268 Q217 260 225 260 L235 260 Q243 260 243 268 L243 292 Z" fill="var(--surface)"/>' +
  '<path d="M217 292 L217 268 Q217 260 225 260 L235 260 Q243 260 243 268 L243 292 Z" fill="currentColor" fill-opacity="0.12"/>' +
  '<circle cx="300" cy="194.9" r="8.1" fill="var(--surface)"/>' +
  '<path d="M291.9 194 Q291.9 185 300 185.9 Q308.1 185 308.1 194 Q300 189.5 291.9 194 Z" fill="currentColor" fill-opacity="0.2"/>' +
  '<path d="M288.3 233.6 L288.3 212 Q288.3 204.8 295.5 204.8 L304.5 204.8 Q311.7 204.8 311.7 212 L311.7 233.6 Z" fill="var(--surface)"/>' +
  '<path d="M288.3 233.6 L288.3 212 Q288.3 204.8 295.5 204.8 L304.5 204.8 Q311.7 204.8 311.7 212 L311.7 233.6 Z" fill="currentColor" fill-opacity="0.12"/>' +
  '<path d="M349.9 203 Q348.9 182.3 360 183.2 Q371.1 182.3 370.1 203 Z" fill="currentColor" fill-opacity="0.2"/>' +
  '<circle cx="360" cy="194.9" r="8.1" fill="var(--surface)"/>' +
  '<path d="M354.6 204.8 L365.4 204.8 L374.4 233.6 L345.6 233.6 Z" fill="var(--surface)"/>' +
  '<path d="M354.6 204.8 L365.4 204.8 L374.4 233.6 L345.6 233.6 Z" fill="currentColor" fill-opacity="0.12"/>' +
  '<circle cx="160" cy="328.9" r="7.6" fill="var(--surface)"/>' +
  '<path d="M152.3 328 Q152.3 319.5 160 320.4 Q167.7 319.5 167.7 328 Q160 323.8 152.3 328 Z" fill="currentColor" fill-opacity="0.2"/>' +
  '<path d="M148.9 365.4 L148.9 345 Q148.9 338.2 155.8 338.2 L164.2 338.2 Q171.1 338.2 171.1 345 L171.1 365.4 Z" fill="var(--surface)"/>' +
  '<path d="M148.9 365.4 L148.9 345 Q148.9 338.2 155.8 338.2 L164.2 338.2 Q171.1 338.2 171.1 345 L171.1 365.4 Z" fill="currentColor" fill-opacity="0.12"/>' +
  '<path d="M230.3 336.5 Q229.3 317 240 317.8 Q250.7 317 249.7 336.5 Z" fill="currentColor" fill-opacity="0.2"/>' +
  '<circle cx="240" cy="328.9" r="7.6" fill="var(--surface)"/>' +
  '<path d="M234.9 338.2 L245.1 338.2 L253.6 365.4 L226.4 365.4 Z" fill="var(--surface)"/>' +
  '<path d="M234.9 338.2 L245.1 338.2 L253.6 365.4 L226.4 365.4 Z" fill="currentColor" fill-opacity="0.12"/>' +
  '</g>' };
