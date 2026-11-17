/* Line art for the 'machines' picture sets (0.24.0). NOT in js/data: no Japanese here (labels come from js/data/picture-sets-machines.js),
   so changing art does not start the recording job.
   Shape (PLAN-0.24 A2): window.PICTURE_ART['<art id>'] = { vb: [width 300-420, height 240-440], svg: '<g>…</g>' }; inner SVG only:
   no <svg>, <text>, <style>, <script>, <image>, ids or external references; paints only stroke="currentColor", fill="none",
   fill="currentColor" with fill-opacity 0.06-0.2, fill="var(--surface)"; stroke width 1.5-3, round caps and joins; under 9 KB each.
   Art ids are permanent once a set uses them. */
window.PICTURE_ART = window.PICTURE_ART || {};

window.PICTURE_ART['car'] = { vb: [400, 260], svg: '<g stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none">' +
  '<line x1="12" y1="226" x2="388" y2="226" stroke-width="1.5"/>' +
  '<path d="M36,196 L69,196 A31,31 0 0 1 131,196 L269,196 A31,31 0 0 1 331,196 L368,196 Q376,196 376,188 L376,150 Q376,134 360,131 L306,124 L268,72 Q262,64 252,64 L146,64 Q136,64 130,72 L98,124 L44,130 Q30,132 30,148 L30,190 Q30,196 36,196 Z" fill="currentColor" fill-opacity="0.06"/>' +
  '<path d="M110,120 L138,76 L194,76 L194,120 Z" fill="currentColor" fill-opacity="0.12"/>' +
  '<path d="M202,76 L256,76 L289,120 L202,120 Z" fill="currentColor" fill-opacity="0.12"/>' +
  '<path d="M204,120 L206,94 Q207,86 216,86 Q226,86 226,94 L228,120 Z" fill="var(--surface)"/><path d="M204,120 L206,94 Q207,86 216,86 Q226,86 226,94 L228,120 Z" fill="currentColor" fill-opacity="0.15"/>' +
  '<rect x="209" y="76" width="14" height="9" rx="3" fill="var(--surface)"/><line x1="213" y1="85" x2="213" y2="87" stroke-width="2"/><line x1="219" y1="85" x2="219" y2="87" stroke-width="2"/>' +
  '<line x1="258" y1="100" x2="272" y2="119" stroke-width="3"/><circle cx="256" cy="97" r="14" fill="var(--surface)"/><circle cx="256" cy="97" r="14" stroke-width="3"/><circle cx="256" cy="97" r="3"/><path d="M243,97 L253,97 M259,97 L269,97 M256,100 L256,110" stroke-width="2"/>' +
  '<path d="M198,124 L198,186 L280,186 Q290,170 292,126"/>' +
  '<path d="M106,126 L106,176 Q108,186 120,186 L198,186"/>' +
  '<rect x="222" y="138" width="20" height="5" rx="2.5" fill="currentColor" fill-opacity="0.2"/>' +
  '<rect x="134" y="138" width="20" height="5" rx="2.5" fill="currentColor" fill-opacity="0.2"/>' +
  '<path d="M286,118 L292,113" stroke-width="2.5"/><path d="M289,108 L308,97 Q319,94 318,104 L315,115 L294,118 Q286,117 289,108 Z" fill="var(--surface)"/><path d="M289,108 L308,97 Q319,94 318,104 L315,115 L294,118 Q286,117 289,108 Z" fill="currentColor" fill-opacity="0.2"/>' +
  '<path d="M306,120 L344,126" stroke-width="3"/><line x1="330" y1="124" x2="327" y2="131" stroke-width="2"/>' +
  '<path d="M44,130 L44,162 L98,162" stroke-width="1.8"/><circle cx="72" cy="150" r="2"/>' +
  '<path d="M349,143 Q350,133 362,133 L372,134 Q378,143 373,153 L360,154 Q349,153 349,143 Z" fill="currentColor" fill-opacity="0.2"/>' +
  '<rect x="30" y="140" width="7" height="14" rx="2" fill="currentColor" fill-opacity="0.2"/>' +
  '<rect x="336" y="176" width="46" height="16" rx="6" fill="var(--surface)"/>' +
  '<rect x="336" y="176" width="46" height="16" rx="6" fill="currentColor" fill-opacity="0.15"/>' +
  '<rect x="22" y="176" width="40" height="16" rx="6" fill="var(--surface)"/>' +
  '<rect x="22" y="176" width="40" height="16" rx="6" fill="currentColor" fill-opacity="0.15"/>' +
  '<circle cx="100" cy="198" r="26" fill="currentColor" fill-opacity="0.2"/><circle cx="100" cy="198" r="11" fill="var(--surface)"/><circle cx="100" cy="198" r="3"/>' +
  '<circle cx="300" cy="198" r="26" fill="currentColor" fill-opacity="0.2"/><circle cx="300" cy="198" r="11" fill="var(--surface)"/><circle cx="300" cy="198" r="3"/>' +
  '</g>' };

window.PICTURE_ART['bicycle'] = { vb: [400, 290], svg: '<g stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none">' +
  '<line x1="12" y1="276" x2="388" y2="276" stroke-width="1.5"/>' +
  '<circle cx="100" cy="212" r="61" stroke-width="2.5"/><circle cx="100" cy="212" r="55" stroke-width="2"/>' +
  '<circle cx="305" cy="212" r="61" stroke-width="2.5"/><circle cx="305" cy="212" r="55" stroke-width="2"/>' +
  '<path d="M100,160 L100,264 M48,212 L152,212 M63,175 L137,249 M63,249 L137,175 M305,160 L305,264 M253,212 L357,212 M268,175 L342,249 M268,249 L342,175" stroke-width="1.5"/>' +
  '<circle cx="100" cy="212" r="7" fill="currentColor" fill-opacity="0.2"/><circle cx="305" cy="212" r="4" fill="currentColor" fill-opacity="0.2"/>' +
  '<path d="M100,212 L190,214 L168,124 L100,212 M168,124 L274,122 M190,214 L276,140"/>' +
  '<path d="M270,112 L278,142 L305,212" stroke-width="3"/>' +
  '<line x1="168" y1="124" x2="164" y2="104"/>' +
  '<path d="M140,96 Q160,90 184,96 Q182,104 164,104 Q146,104 140,96 Z" fill="currentColor" fill-opacity="0.2"/>' +
  '<path d="M270,112 L266,86 M266,86 Q248,80 236,86"/>' +
  '<rect x="222" y="83" width="20" height="7" rx="3.5" fill="currentColor" fill-opacity="0.2"/>' +
  '<path d="M249,64 Q249,46 262,46 Q275,46 275,64 Z" fill="currentColor" fill-opacity="0.2"/><circle cx="262" cy="43" r="2.5"/><line x1="262" y1="64" x2="262" y2="83"/>' +
  '<path d="M288,92 L354,92 L348,132 L294,132 Z" fill="var(--surface)"/>' +
  '<path d="M288,92 L354,92 L348,132 L294,132 Z M290,105 L352,105 M292,118 L350,118 M305,92 L307,132 M321,92 L321,132 M337,92 L335,132" stroke-width="1.5"/>' +
  '<line x1="276" y1="132" x2="294" y2="128" stroke-width="2"/>' +
  '<path d="M352,114 L368,105 Q384,121 368,137 L352,128 Z" fill="currentColor" fill-opacity="0.2"/>' +
  '<path d="M288,144 L288,158 M288,144 L318,144 L318,158" stroke-width="3"/><path d="M244,91 Q242,110 202,111" stroke-width="3"/><path d="M244,92 Q270,100 284,140" stroke-width="1.5" stroke-dasharray="4 3"/>' +
  '<path d="M62,138 L152,134 M70,138 L100,212 M128,136 L166,128" stroke-width="2.2"/>' +
  '<rect x="60" y="130" width="94" height="8" rx="3" fill="currentColor" fill-opacity="0.15"/>' +
  '<rect x="126" y="150" width="28" height="22" rx="4" fill="var(--surface)"/><rect x="126" y="150" width="28" height="22" rx="4" fill="currentColor" fill-opacity="0.2"/><circle cx="136" cy="163" r="2.5"/>' +
  '<circle cx="190" cy="214" r="18" fill="currentColor" fill-opacity="0.12"/>' +
  '<path d="M100,205 L190,196 M100,219 L190,232" stroke-dasharray="3 3" stroke-width="2"/>' +
  '<line x1="190" y1="214" x2="208" y2="246" stroke-width="3"/><rect x="192" y="243" width="34" height="10" rx="3" fill="currentColor" fill-opacity="0.2"/>' +
  '<path d="M172,216 L152,268 L142,272" stroke-width="3"/>' +
  '</g>' };

window.PICTURE_ART['computer-phone'] = { vb: [400, 300], svg: '<g stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none">' +
  '<rect x="24" y="22" width="232" height="148" rx="8" fill="currentColor" fill-opacity="0.06"/>' +
  '<rect x="36" y="40" width="208" height="120" rx="2" fill="currentColor" fill-opacity="0.12"/>' +
  '<circle cx="138" cy="31" r="4" fill="currentColor" fill-opacity="0.2"/>' +
  '<rect x="56" y="56" width="110" height="74" rx="3" fill="var(--surface)" stroke-width="1.8"/><line x1="56" y1="68" x2="166" y2="68" stroke-width="1.5"/>' +
  '<path d="M66,82 L150,82 M66,94 L140,94 M66,106 L146,106 M66,118 L120,118" stroke-width="1.5"/>' +
  '<path d="M186,118 L186,136 L191,131 L196,140 L199,138 L194,129 L201,129 Z" fill="var(--surface)" stroke-width="1.5"/>' +
  '<path d="M24,172 L256,172 L276,214 Q278,220 270,220 L10,220 Q2,220 4,214 Z" fill="currentColor" fill-opacity="0.06"/>' +
  '<path d="M38,178 L232,178 L236,186 L34,186 Z M34,190 L236,190 L240,198 L30,198 Z M30,202 L240,202 L244,210 L26,210 Z" stroke-width="1.5"/>' +
  '<path d="M62,178 L58,210 M86,178 L84,210 M110,178 L108,210 M134,178 L134,210 M158,178 L160,210 M182,178 L184,210 M206,178 L210,210" stroke-width="1.5"/>' +
  '<circle cx="248" cy="182" r="5.5" fill="currentColor" fill-opacity="0.2"/><path d="M248,179 L248,182" stroke-width="1.5"/>' +
  '<rect x="300" y="28" width="72" height="150" rx="10" fill="currentColor" fill-opacity="0.06"/>' +
  '<rect x="306" y="46" width="60" height="114" rx="2" fill="var(--surface)"/>' +
  '<circle cx="336" cy="37" r="2.5"/><line x1="326" y1="168" x2="346" y2="168" stroke-width="2"/>' +
  '<rect x="372" y="62" width="5" height="38" rx="2" fill="currentColor" fill-opacity="0.2"/>' +
  '<path d="M313,53 h14 v14 h-14 Z M343,53 h14 v14 h-14 Z M313,77 h14 v14 h-14 Z M343,77 h14 v14 h-14 Z M313,101 h14 v14 h-14 Z M343,101 h14 v14 h-14 Z" fill="currentColor" fill-opacity="0.2" stroke-width="1.5"/>' +
  '<path d="M336,178 L336,190 Q336,226 340,248" stroke-width="2"/>' +
  '<rect x="326" y="248" width="32" height="26" rx="4" fill="currentColor" fill-opacity="0.15"/>' +
  '<path d="M334,274 L334,286 M350,274 L350,286" stroke-width="3"/>' +
  '<path d="M240,236 Q256,236 256,256 Q256,280 240,280 Q224,280 224,256 Q224,236 240,236 Z" fill="currentColor" fill-opacity="0.08"/>' +
  '<path d="M240,236 L240,252 M226,252 L254,252" stroke-width="1.8"/>' +
  '<circle cx="48" cy="248" r="9" fill="currentColor" fill-opacity="0.2"/><circle cx="48" cy="248" r="3.5"/><circle cx="84" cy="244" r="9" fill="currentColor" fill-opacity="0.2"/><circle cx="84" cy="244" r="3.5"/>' +
  '<path d="M52,257 Q58,270 70,274 M84,254 Q82,268 70,274 L120,280 L130,280" stroke-width="1.8"/><rect x="130" y="276" width="14" height="8" rx="2"/>' +
  '</g>' };
