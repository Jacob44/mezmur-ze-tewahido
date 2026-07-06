// ===========================================================================
// mezmur-core — shared library (no framework, no build step).
// Transliteration + verse parsing + themed PDF/PPT export for one or more songs.
// Exposes window.MezmurCore (browser) and module.exports (Node tests).
// ===========================================================================
(function (global) {
    'use strict';

    const mapping = {
        'ሀ': 'ha', 'ሁ': 'hu', 'ሂ': 'hi', 'ሃ': 'ha', 'ሄ': 'he', 'ህ': 'h', 'ሆ': 'ho',
        'ለ': 'le', 'ሉ': 'lu', 'ሊ': 'li', 'ላ': 'la', 'ሌ': 'le', 'ል': 'l', 'ሎ': 'lo', 'ሏ': 'lwa',
        'ሐ': 'ha', 'ሑ': 'hu', 'ሒ': 'hi', 'ሓ': 'ha', 'ሔ': 'he', 'ሕ': 'h', 'ሖ': 'ho', 'ሗ': 'hwa',
        'መ': 'me', 'ሙ': 'mu', 'ሚ': 'mi', 'ማ': 'ma', 'ሜ': 'me', 'ም': 'm', 'ሞ': 'mo', 'ሟ': 'mwa',
        'ሠ': 'se', 'ሡ': 'su', 'ሢ': 'si', 'ሣ': 'sa', 'ሤ': 'se', 'ሥ': 's', 'ሦ': 'so', 'ሧ': 'swa',
        'ረ': 're', 'ሩ': 'ru', 'ሪ': 'ri', 'ራ': 'ra', 'ሬ': 're', 'ር': 'r', 'ሮ': 'ro', 'ሯ': 'rwa',
        'ሰ': 'se', 'ሱ': 'su', 'ሲ': 'si', 'ሳ': 'sa', 'ሴ': 'se', 'ስ': 's', 'ሶ': 'so', 'ሷ': 'swa',
        'ሸ': 'she', 'ሹ': 'shu', 'ሺ': 'shi', 'ሻ': 'sha', 'ሼ': 'she', 'ሽ': 'sh', 'ሾ': 'sho', 'ሿ': 'shwa',
        'ቀ': 'ke', 'ቁ': 'ku', 'ቂ': 'ki', 'ቃ': 'ka', 'ቄ': 'ke', 'ቅ': 'k', 'ቆ': 'ko',
        'ቈ': 'kwe', 'ቊ': 'kwi', 'ቋ': 'kwa', 'ቌ': 'kwe',
        'ቐ': 'qe', 'ቑ': 'qu', 'ቒ': 'qi', 'ቓ': 'qa', 'ቔ': 'qe', 'ቕ': 'q', 'ቖ': 'qo',
        'በ': 'be', 'ቡ': 'bu', 'ቢ': 'bi', 'ባ': 'ba', 'ቤ': 'be', 'ብ': 'b', 'ቦ': 'bo', 'ቧ': 'bwa',
        'ቨ': 've', 'ቩ': 'vu', 'ቪ': 'vi', 'ቫ': 'va', 'ቬ': 've', 'ቭ': 'v', 'ቮ': 'vo', 'ቯ': 'vwa',
        'ተ': 'te', 'ቱ': 'tu', 'ቲ': 'ti', 'ታ': 'ta', 'ቴ': 'te', 'ት': 't', 'ቶ': 'to', 'ቷ': 'twa',
        'ቸ': 'che', 'ቹ': 'chu', 'ቺ': 'chi', 'ቻ': 'cha', 'ቼ': 'che', 'ች': 'ch', 'ቾ': 'cho', 'ቿ': 'chwa',
        'ኀ': 'ha', 'ኁ': 'hu', 'ኂ': 'hi', 'ኃ': 'ha', 'ኄ': 'he', 'ኅ': 'h', 'ኆ': 'ho',
        'ነ': 'ne', 'ኑ': 'nu', 'ኒ': 'ni', 'ና': 'na', 'ኔ': 'ne', 'ን': 'n', 'ኖ': 'no', 'ኗ': 'nwa',
        'ኘ': 'gne', 'ኙ': 'gnu', 'ኚ': 'gni', 'ኛ': 'gna', 'ኜ': 'gne', 'ኝ': 'gn', 'ኞ': 'gno', 'ኟ': 'gnwa',
        'አ': 'a', 'ኡ': 'u', 'ኢ': 'i', 'ኣ': 'a', 'ኤ': 'e', 'እ': 'e', 'ኦ': 'o',
        'ከ': 'ke', 'ኩ': 'ku', 'ኪ': 'ki', 'ካ': 'ka', 'ኬ': 'ke', 'ክ': 'k', 'ኮ': 'ko',
        'ኰ': 'kwe', 'ኲ': 'kwi', 'ኳ': 'kwa', 'ኴ': 'kwe',
        'ኸ': 'khe', 'ኹ': 'khu', 'ኺ': 'khi', 'ኻ': 'kha', 'ኼ': 'khe', 'ኽ': 'kh', 'ኾ': 'kho',
        'ወ': 'we', 'ዉ': 'wu', 'ዊ': 'wi', 'ዋ': 'wa', 'ዌ': 'we', 'ው': 'w', 'ዎ': 'wo',
        'ዐ': 'a', 'ዑ': 'u', 'ዒ': 'i', 'ዓ': 'a', 'ዔ': 'e', 'ዕ': 'e', 'ዖ': 'o',
        'ዘ': 'ze', 'ዙ': 'zu', 'ዚ': 'zi', 'ዛ': 'za', 'ዜ': 'ze', 'ዝ': 'z', 'ዞ': 'zo', 'ዟ': 'zwa',
        'ዠ': 'zhe', 'ዡ': 'zhu', 'ዢ': 'zhi', 'ዣ': 'zha', 'ዤ': 'zhe', 'ዥ': 'zh', 'ዦ': 'zho', 'ዧ': 'zhwa',
        'የ': 'ye', 'ዩ': 'yu', 'ዪ': 'yi', 'ያ': 'ya', 'ዬ': 'ye', 'ይ': 'y', 'ዮ': 'yo',
        'ደ': 'de', 'ዱ': 'du', 'ዲ': 'di', 'ዳ': 'da', 'ዴ': 'de', 'ድ': 'd', 'ዶ': 'do', 'ዷ': 'dwa',
        'ጀ': 'je', 'ጁ': 'ju', 'ጂ': 'ji', 'ጃ': 'ja', 'ጄ': 'je', 'ጅ': 'j', 'ጆ': 'jo', 'ጇ': 'jwa',
        'ገ': 'ge', 'ጉ': 'gu', 'ጊ': 'gi', 'ጋ': 'ga', 'ጌ': 'ge', 'ግ': 'g', 'ጎ': 'go',
        'ጐ': 'gwe', 'ጒ': 'gwi', 'ጓ': 'gwa', 'ጔ': 'gwe',
        'ጠ': 'te', 'ጡ': 'tu', 'ጢ': 'ti', 'ጣ': 'ta', 'ጤ': 'te', 'ጥ': 't', 'ጦ': 'to', 'ጧ': 'twa',
        'ጨ': 'che', 'ጩ': 'chu', 'ጪ': 'chi', 'ጫ': 'cha', 'ጬ': 'che', 'ጭ': 'ch', 'ጮ': 'cho', 'ጯ': 'chwa',
        'ጰ': 'pe', 'ጱ': 'pu', 'ጲ': 'pi', 'ጳ': 'pa', 'ጴ': 'pe', 'ጵ': 'p', 'ጶ': 'po', 'ጷ': 'pwa',
        'ጸ': 'tse', 'ጹ': 'tsu', 'ጺ': 'tsi', 'ጻ': 'tsa', 'ጼ': 'tse', 'ጽ': 'ts', 'ጾ': 'tso', 'ጿ': 'tswa',
        'ፀ': 'tse', 'ፁ': 'tsu', 'ፂ': 'tsi', 'ፃ': 'tsa', 'ፄ': 'tse', 'ፅ': 'ts', 'ፆ': 'tso',
        'ፈ': 'fe', 'ፉ': 'fu', 'ፊ': 'fi', 'ፋ': 'fa', 'ፌ': 'fe', 'ፍ': 'f', 'ፎ': 'fo', 'ፏ': 'fwa',
        'ፐ': 'pe', 'ፑ': 'pu', 'ፒ': 'pi', 'ፓ': 'pa', 'ፔ': 'pe', 'ፕ': 'p', 'ፖ': 'po', 'ፗ': 'pwa',
        '።': '.', '፣': ',', '፤': ';', '፥': ':', '፦': ':-', '፧': '?', '፨': '!',
        '፩': '1', '፪': '2', '፫': '3', '፬': '4', '፭': '5', '፮': '6', '፯': '7', '፰': '8', '፱': '9', '፲': '10',
        ' ': ' '
    };
    const sixthFormChars = new Set([
        'ህ', 'ል', 'ሕ', 'ም', 'ሥ', 'ር', 'ስ', 'ሽ', 'ቅ', 'ቕ', 'ብ', 'ቭ', 'ት', 'ች', 'ኅ', 'ን', 'ኝ',
        'ክ', 'ኽ', 'ው', 'ዝ', 'ዥ', 'ይ', 'ድ', 'ጅ', 'ግ', 'ጥ', 'ጭ', 'ጵ', 'ጽ', 'ፅ', 'ፍ', 'ፕ'
    ]);
    const THEMES = {
        'Parchment & Gold': { bg: 'FBF3DD', amh: '13345F', lat: '9A1B1B', accent: 'C49A2E', muted: '8A7A55' },
        'Royal Indigo':     { bg: 'F3F1FB', amh: '2A2160', lat: '8E1F5B', accent: '6D52C9', muted: '7C7596' },
        'Forest & Cream':   { bg: 'F1F5EA', amh: '1E4D3B', lat: '9A3B1B', accent: 'B98A2E', muted: '6E7B63' },
        'Midnight (dark)':  { bg: '141C2E', amh: 'FFFFFF', lat: 'FFC66B', accent: 'D4AF37', muted: 'A5B3CF' }
    };
    const DEFAULT_THEME = 'Parchment & Gold';
    function theme(key) { return THEMES[key] || THEMES[DEFAULT_THEME]; }

    function transliterateText(text) {
        const chars = [...(text || '')];
        const out = new Array(chars.length);
        for (let i = 0; i < chars.length; i++) {
            const c = chars[i];
            let t = mapping[c] || c;
            if (sixthFormChars.has(c) && sixthFormChars.has(chars[i + 1])) t += 'i';
            out[i] = t;
        }
        return out.join('');
    }
    function hasAmharicLetters(s) { return /[ሀ-ፚᎀ-᎟꬀-꬯]/.test(s); }
    function isSeparatorLine(s) {
        const t = (s || '').trim();
        if (!t) return false;
        if (/[A-Za-z0-9]/.test(t)) return false;
        if (/[ሀ-ፚᎀ-᎟]/.test(t)) return false;
        return /[=\-_~*#·•.፠-᎙]/.test(t) && t.length >= 2;
    }
    // A line that only marks a chorus/repeat (e.g. "አዝ", "__ አዝ __", "አ.ዝ") — a
    // verse break that should not be printed.
    function isChorusMarker(s) {
        const stripped = (s || '').replace(/[\s_\-\/.()|0-9፨…።]/g, '');
        return stripped === 'አዝ' || stripped === 'ኮ' || stripped === 'ድ';
    }
    function isBreak(s) { return isSeparatorLine(s) || isChorusMarker(s); }

    // Build verses. Each verse is an array of { amharic, latin } items.
    function buildVersesFromText(text) {
        const lines = (text || '').split('\n');
        const verses = [];
        let v = [];
        const flush = () => { if (v.length) { verses.push(v); v = []; } };
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line || isBreak(line)) { flush(); continue; }
            if (hasAmharicLetters(line)) {
                const next = (i + 1 < lines.length) ? lines[i + 1].trim() : '';
                if (next && !isBreak(next) && !hasAmharicLetters(next) && /[A-Za-z]/.test(next)) {
                    v.push({ amharic: line, latin: next });
                    i++;
                } else {
                    v.push({ amharic: line, latin: transliterateText(line) });
                }
            } else {
                v.push({ amharic: '', latin: line });
            }
        }
        flush();
        return verses;
    }

    const rowsOf = verse => verse.reduce((a, it) => a + (it.amharic ? 2 : 1), 0);

    // Split one verse into chunks that each fit within maxRows rows.
    function splitVerse(verse, maxRows) {
        const chunks = [];
        let chunk = [], n = 0;
        for (const it of verse) {
            const r = it.amharic ? 2 : 1;
            if (n + r > maxRows && chunk.length) { chunks.push(chunk); chunk = []; n = 0; }
            chunk.push(it); n += r;
        }
        if (chunk.length) chunks.push(chunk);
        return chunks;
    }

    // One verse per page/slide — verses are never mixed on a slide. A verse
    // larger than maxRows rows is split across consecutive slides so nothing
    // ever overflows.
    function packVersesIntoSlides(verses, maxRows) {
        const out = [];
        for (const verse of verses) {
            if (rowsOf(verse) <= maxRows) out.push([verse]);
            else splitVerse(verse, maxRows).forEach(c => out.push([c]));
        }
        return out;
    }

    function songTitle(song) {
        const am = (song.title && song.title.am) || '';
        const la = (song.title && song.title.latin) || '';
        return am && la ? am + '  /  ' + la : (am || la || 'Mezmur');
    }
    function songSubtitle(song) {
        const parts = [];
        if (song.singer && (song.singer.latin || song.singer.am)) parts.push(song.singer.latin || song.singer.am);
        if (song.album && (song.album.latin || song.album.am)) parts.push(song.album.latin || song.album.am);
        return parts.join('  ·  ');
    }
    function safeFileName(song) {
        const base = ((song.title && (song.title.latin || song.title.am)) || 'Mezmur');
        return base.replace(/[^\w\- ]+/g, '').trim().replace(/\s+/g, '-') || 'Mezmur';
    }

    // 8 rows = up to 4 Amharic+Latin pairs; a typical whole verse fits one slide.
    const MAX_ROWS = 8;

    async function exportSongsPDF(songs, themeKey) {
        const list = (Array.isArray(songs) ? songs : [songs])
            .map(song => ({ song, verses: buildVersesFromText(song.lyrics) }))
            .filter(e => e.verses.length);
        if (!list.length) { alert('No lyrics to export.'); return; }
        try { await document.fonts.load('bold 46px "Noto Sans Ethiopic"'); await document.fonts.ready; } catch (e) {}
        const T = theme(themeKey);
        const bgC = '#' + T.bg, amhC = '#' + T.amh, latC = '#' + T.lat, accC = '#' + T.accent, mutedC = '#' + T.muted;
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('landscape', 'mm', 'a4');
        const pageW = doc.internal.pageSize.getWidth(), pageH = doc.internal.pageSize.getHeight();
        const scale = 4, cw = Math.round(pageW * scale), ch = Math.round(pageH * scale);
        const margin = 78, maxW = cw - margin * 2;
        const amSize = 58, enSize = 46, amLH = 74, enLH = 60, intraGap = 6, pairGap = 26, verseGap = 52;
        const amFont = `bold ${amSize}px "Noto Sans Ethiopic", "Noto Serif", serif`;
        const enFont = `600 ${enSize}px Georgia, "Times New Roman", serif`;
        const pages = [], labels = [];
        let canvas, ctx;
        function blank() {
            labels.push(null);
            canvas = document.createElement('canvas'); canvas.width = cw; canvas.height = ch;
            ctx = canvas.getContext('2d'); ctx.fillStyle = bgC; ctx.fillRect(0, 0, cw, ch);
            ctx.textBaseline = 'top'; ctx.textAlign = 'center'; pages.push(canvas);
        }
        function wrap(text, font) {
            ctx.font = font; const words = text.split(/\s+/); const lines = []; let c = '';
            for (const w of words) { const t = c ? c + ' ' + w : w; if (ctx.measureText(t).width > maxW && c) { lines.push(c); c = w; } else c = t; }
            if (c) lines.push(c); return lines.length ? lines : [''];
        }
        function measure(verse) {
            let h = 0;
            for (const it of verse) h += it.amharic
                ? wrap(it.amharic, amFont).length * amLH + intraGap + wrap(it.latin, enFont).length * enLH + pairGap
                : wrap(it.latin, enFont).length * enLH + pairGap;
            return h;
        }
        for (const { song, verses } of list) {
            blank();
            ctx.strokeStyle = accC; ctx.lineWidth = 5; ctx.strokeRect(46, 46, cw - 92, ch - 92);
            ctx.lineWidth = 1.5; ctx.strokeRect(64, 64, cw - 128, ch - 128);
            ctx.fillStyle = accC; ctx.textBaseline = 'alphabetic'; ctx.font = '96px Georgia, serif';
            ctx.fillText('✝︎', cw / 2, 250);
            ctx.textBaseline = 'top'; ctx.fillStyle = amhC; ctx.font = `bold 70px "Noto Sans Ethiopic", "Noto Serif", serif`;
            let ty = 300;
            wrap(songTitle(song), `bold 70px "Noto Sans Ethiopic", "Noto Serif", serif`).forEach(l => { ctx.fillText(l, cw / 2, ty); ty += 86; });
            ty += 6; ctx.strokeStyle = accC; ctx.lineWidth = 3;
            ctx.beginPath(); ctx.moveTo(cw / 2 - 170, ty); ctx.lineTo(cw / 2 + 170, ty); ctx.stroke(); ty += 26;
            const sub = songSubtitle(song);
            if (sub) { ctx.fillStyle = latC; ctx.font = 'italic 38px Georgia, serif'; wrap(sub, 'italic 38px Georgia, serif').forEach(l => { ctx.fillText(l, cw / 2, ty); ty += 48; }); }
            ctx.fillStyle = mutedC; ctx.textBaseline = 'alphabetic'; ctx.font = '22px Georgia, serif';
            ctx.fillText(song.year ? String(song.year) : '', cw / 2, ch - 96);
            const contentPages = packVersesIntoSlides(verses, MAX_ROWS);
            contentPages.forEach((pv, pi) => {
                blank();
                labels[labels.length - 1] = `${pi + 1} / ${contentPages.length}`;
                ctx.strokeStyle = accC; ctx.lineWidth = 2; ctx.strokeRect(40, 40, cw - 80, ch - 80);
                let blockH = 0; pv.forEach((v, i) => { blockH += measure(v) + (i < pv.length - 1 ? verseGap : 0); });
                let y = Math.max(margin + 20, (ch - blockH) / 2);
                pv.forEach((verse, i) => {
                    if (i > 0) { const m = y + verseGap / 2; ctx.strokeStyle = accC; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(cw / 2 - 90, m); ctx.lineTo(cw / 2 + 90, m); ctx.stroke(); y += verseGap; }
                    for (const it of verse) {
                        if (it.amharic) {
                            ctx.font = amFont; ctx.fillStyle = amhC; for (const ln of wrap(it.amharic, amFont)) { ctx.fillText(ln, cw / 2, y); y += amLH; }
                            y += intraGap; ctx.font = enFont; ctx.fillStyle = latC; for (const ln of wrap(it.latin, enFont)) { ctx.fillText(ln, cw / 2, y); y += enLH; }
                            y += pairGap;
                        } else { ctx.font = enFont; ctx.fillStyle = latC; for (const ln of wrap(it.latin, enFont)) { ctx.fillText(ln, cw / 2, y); y += enLH; } y += pairGap; }
                    }
                });
                ctx.fillStyle = mutedC; ctx.font = '22px Georgia, serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
                ctx.fillText(songTitle(song), 60, ch - 26);
                ctx.textAlign = 'center'; ctx.textBaseline = 'top';
            });
        }
        pages.forEach((cnv, idx) => {
            if (labels[idx]) { const c = cnv.getContext('2d'); c.fillStyle = mutedC; c.font = '22px Georgia, serif'; c.textAlign = 'center'; c.textBaseline = 'alphabetic'; c.fillText(labels[idx], cw / 2, ch - 26); }
            if (idx > 0) doc.addPage('a4', 'landscape');
            doc.addImage(cnv.toDataURL('image/jpeg', 0.92), 'JPEG', 0, 0, pageW, pageH);
        });
        const base = list.length === 1 ? safeFileName(list[0].song) : `Mezmur-Selection-${list.length}`;
        doc.save(`${base}-${new Date().toISOString().slice(0, 10)}.pdf`);
    }
    function exportSongPDF(song, themeKey) { return exportSongsPDF([song], themeKey); }

    function exportSongsPPT(songs, themeKey) {
        const list = (Array.isArray(songs) ? songs : [songs])
            .map(song => ({ song, verses: buildVersesFromText(song.lyrics) }))
            .filter(e => e.verses.length);
        if (!list.length) { alert('No lyrics to export.'); return; }
        const T = theme(themeKey);
        const pres = new PptxGenJS();
        pres.defineLayout({ name: 'WIDE', width: 10, height: 5.625 });
        pres.layout = 'WIDE'; pres.author = 'Mezmur Ze Tewahido';
        pres.title = list.length === 1 ? songTitle(list[0].song) : `Mezmur Selection (${list.length})`;
        for (const { song, verses } of list) {
            const ts = pres.addSlide();
            ts.background = { fill: T.bg };
            ts.addShape(pres.ShapeType.rect, { x: 0.25, y: 0.22, w: 9.5, h: 5.18, fill: { color: T.bg }, line: { color: T.accent, width: 2.5 } });
            ts.addShape(pres.ShapeType.rect, { x: 0.42, y: 0.39, w: 9.16, h: 4.84, fill: { type: 'none' }, line: { color: T.accent, width: 0.75 } });
            ts.addText('✝︎', { x: 0, y: 0.55, w: 10, h: 0.9, fontSize: 50, color: T.accent, align: 'center', fontFace: 'Georgia' });
            ts.addText(songTitle(song), { x: 0.6, y: 1.75, w: 8.8, h: 1.2, fontSize: 38, bold: true, color: T.amh, align: 'center', valign: 'middle', fontFace: 'Nyala' });
            ts.addShape(pres.ShapeType.line, { x: 3.6, y: 3.05, w: 2.8, h: 0, line: { color: T.accent, width: 1.75 } });
            const sub = songSubtitle(song);
            if (sub) ts.addText(sub, { x: 0.6, y: 3.2, w: 8.8, h: 0.7, fontSize: 22, italic: true, color: T.lat, align: 'center', valign: 'middle', fontFace: 'Georgia' });
            ts.addText('መዝሙር ዘተዋህዶ · Mezmur Ze Tewahido', { x: 0.6, y: 4.72, w: 8.8, h: 0.4, fontSize: 12, color: T.muted, align: 'center', fontFace: 'Georgia' });
            const slides = packVersesIntoSlides(verses, MAX_ROWS);
            slides.forEach((sv, idx) => {
                const slide = pres.addSlide();
                slide.background = { fill: T.bg };
                slide.addShape(pres.ShapeType.line, { x: 4.4, y: 0.22, w: 1.2, h: 0, line: { color: T.accent, width: 1 } });
                const SLIDE_H = 5.625, amSize = 30, enSize = 24, rowAm = 0.64, rowEn = 0.52, pairGap = 0.08, verseGap = 0.30;
                const itemH = it => it.amharic ? (rowAm + rowEn + pairGap) : (rowEn + pairGap);
                let blockH = 0; sv.forEach((verse, i) => { verse.forEach(it => { blockH += itemH(it); }); if (i < sv.length - 1) blockH += verseGap; }); blockH -= pairGap;
                let y = Math.max(0.35, (SLIDE_H - blockH) / 2);
                sv.forEach((verse, i) => {
                    if (i > 0) { slide.addShape(pres.ShapeType.line, { x: 4.45, y: y + verseGap / 2, w: 1.1, h: 0, line: { color: T.accent, width: 1 } }); y += verseGap; }
                    verse.forEach(it => {
                        if (it.amharic) {
                            slide.addText(it.amharic, { x: 0.4, y, w: 9.2, h: rowAm, fontSize: amSize, bold: true, color: T.amh, align: 'center', valign: 'middle', fontFace: 'Nyala', fit: 'shrink' });
                            y += rowAm;
                            slide.addText(it.latin, { x: 0.4, y, w: 9.2, h: rowEn, fontSize: enSize, bold: true, color: T.lat, align: 'center', valign: 'middle', fontFace: 'Georgia', fit: 'shrink' });
                            y += rowEn + pairGap;
                        } else {
                            slide.addText(it.latin, { x: 0.4, y, w: 9.2, h: rowEn, fontSize: enSize, bold: true, color: T.lat, align: 'center', valign: 'middle', fontFace: 'Georgia', fit: 'shrink' });
                            y += rowEn + pairGap;
                        }
                    });
                });
                slide.addText(songTitle(song), { x: 0.4, y: 5.28, w: 5.5, h: 0.3, fontSize: 10, color: T.muted, align: 'left', fontFace: 'Georgia' });
                slide.addText(`${idx + 1} / ${slides.length}`, { x: 8.7, y: 5.28, w: 1.0, h: 0.3, fontSize: 10, color: T.muted, align: 'right', fontFace: 'Georgia' });
            });
        }
        const base = list.length === 1 ? safeFileName(list[0].song) : `Mezmur-Selection-${list.length}`;
        Promise.resolve(pres.writeFile({ fileName: `${base}-${new Date().toISOString().slice(0, 10)}.pptx` }))
            .catch(e => { console.error(e); alert('Could not create the PowerPoint file.'); });
    }
    function exportSongPPT(song, themeKey) { return exportSongsPPT([song], themeKey); }

    const api = {
        THEMES, DEFAULT_THEME,
        transliterateText, hasAmharicLetters, isSeparatorLine, isChorusMarker,
        buildVersesFromText, packVersesIntoSlides,
        songTitle, songSubtitle, exportSongPDF, exportSongPPT, exportSongsPDF, exportSongsPPT
    };
    global.MezmurCore = api;
    if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
