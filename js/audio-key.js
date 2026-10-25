/* Maps a Tagalog string to its audio file name. Shared by the app and tools/collect-texts.js.
   Normalizes (NFC, trim, collapse spaces, lowercase), then two 32-bit FNV-1a hashes over UTF-8 bytes. */
(function (g) {
  function utf8(s) {
    if (typeof TextEncoder !== 'undefined') return new TextEncoder().encode(s);
    return Buffer.from(s, 'utf8');
  }
  function fnv(bytes, seed) {
    let h = seed >>> 0;
    for (let i = 0; i < bytes.length; i++) { h ^= bytes[i]; h = Math.imul(h, 16777619) >>> 0; }
    return ('0000000' + h.toString(16)).slice(-8);
  }
  g.AudioKey = function (text) {
    const n = String(text || '').normalize('NFC').trim().replace(/\s+/g, ' ').toLowerCase();
    const b = utf8(n);
    return fnv(b, 2166136261) + fnv(b, 0x9747b28c);
  };
})(typeof window !== 'undefined' ? window : globalThis);
