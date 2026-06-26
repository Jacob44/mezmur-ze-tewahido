// Amharic → plain Latin mapping (no special characters)
const mapping = {
    // ሀ family
    'ሀ': 'ha', 'ሁ': 'hu', 'ሂ': 'hi', 'ሃ': 'ha', 'ሄ': 'he', 'ህ': 'h', 'ሆ': 'ho',

    // ለ family
    'ለ': 'le', 'ሉ': 'lu', 'ሊ': 'li', 'ላ': 'la', 'ሌ': 'le', 'ል': 'l', 'ሎ': 'lo',
    'ሏ': 'lwa',

    // ሐ family
    'ሐ': 'ha', 'ሑ': 'hu', 'ሒ': 'hi', 'ሓ': 'ha', 'ሔ': 'he', 'ሕ': 'h', 'ሖ': 'ho',
    'ሗ': 'hwa',

    // መ family
    'መ': 'me', 'ሙ': 'mu', 'ሚ': 'mi', 'ማ': 'ma', 'ሜ': 'me', 'ም': 'm', 'ሞ': 'mo',
    'ሟ': 'mwa',

    // ሠ family
    'ሠ': 'se', 'ሡ': 'su', 'ሢ': 'si', 'ሣ': 'sa', 'ሤ': 'se', 'ሥ': 's', 'ሦ': 'so',
    'ሧ': 'swa',

    // ረ family
    'ረ': 're', 'ሩ': 'ru', 'ሪ': 'ri', 'ራ': 'ra', 'ሬ': 're', 'ር': 'r', 'ሮ': 'ro',
    'ሯ': 'rwa',

    // ሰ family
    'ሰ': 'se', 'ሱ': 'su', 'ሲ': 'si', 'ሳ': 'sa', 'ሴ': 'se', 'ስ': 's', 'ሶ': 'so',
    'ሷ': 'swa',

    // ሸ family
    'ሸ': 'she', 'ሹ': 'shu', 'ሺ': 'shi', 'ሻ': 'sha', 'ሼ': 'she', 'ሽ': 'sh', 'ሾ': 'sho',
    'ሿ': 'shwa',

    // ቀ family
    'ቀ': 'ke', 'ቁ': 'ku', 'ቂ': 'ki', 'ቃ': 'ka', 'ቄ': 'ke', 'ቅ': 'k', 'ቆ': 'ko',
    'ቇ': 'kwa', 'ቈ': 'kwe', 'ቊ': 'kwi', 'ቋ': 'kwa', 'ቌ': 'kwe',

    // ቐ family (ejective k)
    'ቐ': 'qe', 'ቑ': 'qu', 'ቒ': 'qi', 'ቓ': 'qa', 'ቔ': 'qe', 'ቕ': 'q', 'ቖ': 'qo',
    'ቘ': 'qwe', 'ቚ': 'qwi', 'ቛ': 'qwa', 'ቜ': 'qwe',

    // በ family
    'በ': 'be', 'ቡ': 'bu', 'ቢ': 'bi', 'ባ': 'ba', 'ቤ': 'be', 'ብ': 'b', 'ቦ': 'bo',
    'ቧ': 'bwa',

    // ቨ family
    'ቨ': 've', 'ቩ': 'vu', 'ቪ': 'vi', 'ቫ': 'va', 'ቬ': 've', 'ቭ': 'v', 'ቮ': 'vo',
    'ቯ': 'vwa',

    // ተ family
    'ተ': 'te', 'ቱ': 'tu', 'ቲ': 'ti', 'ታ': 'ta', 'ቴ': 'te', 'ት': 't', 'ቶ': 'to',
    'ቷ': 'twa',

    // ቸ family
    'ቸ': 'che', 'ቹ': 'chu', 'ቺ': 'chi', 'ቻ': 'cha', 'ቼ': 'che', 'ች': 'ch', 'ቾ': 'cho',
    'ቿ': 'chwa',

    // ኀ family
    'ኀ': 'ha', 'ኁ': 'hu', 'ኂ': 'hi', 'ኃ': 'ha', 'ኄ': 'he', 'ኅ': 'h', 'ኆ': 'ho',
    'ኇ': 'hwa', 'ኈ': 'hwe', 'ኊ': 'hwi', 'ኋ': 'hwa', 'ኌ': 'hwe',

    // ነ family
    'ነ': 'ne', 'ኑ': 'nu', 'ኒ': 'ni', 'ና': 'na', 'ኔ': 'ne', 'ን': 'n', 'ኖ': 'no',
    'ኗ': 'nwa',

    // ኘ family
    'ኘ': 'nye', 'ኙ': 'nyu', 'ኚ': 'nyi', 'ኛ': 'nya', 'ኜ': 'nye', 'ኝ': 'ny', 'ኞ': 'nyo',
    'ኟ': 'nywa',

    // አ family (vowels)
    'አ': 'a', 'ኡ': 'u', 'ኢ': 'i', 'ኣ': 'a', 'ኤ': 'e', 'እ': 'e', 'ኦ': 'o',

    // ከ family
    'ከ': 'ke', 'ኩ': 'ku', 'ኪ': 'ki', 'ካ': 'ka', 'ኬ': 'ke', 'ክ': 'k', 'ኮ': 'ko',
    'ኯ': 'kwa', 'ኰ': 'kwe', 'ኲ': 'kwi', 'ኳ': 'kwa', 'ኴ': 'kwe',

    // ኸ family (palatalized k)
    'ኸ': 'khe', 'ኹ': 'khu', 'ኺ': 'khi', 'ኻ': 'kha', 'ኼ': 'khe', 'ኽ': 'kh', 'ኾ': 'kho',
    '኿': 'khwa',

    // ወ family
    'ወ': 'we', 'ዉ': 'wu', 'ዊ': 'wi', 'ዋ': 'wa', 'ዌ': 'we', 'ው': 'w', 'ዎ': 'wo',

    // ዐ family (pharyngeal vowels)
    'ዐ': 'a', 'ዑ': 'u', 'ዒ': 'i', 'ዓ': 'a', 'ዔ': 'e', 'ዕ': 'e', 'ዖ': 'o',

    // ዘ family
    'ዘ': 'ze', 'ዙ': 'zu', 'ዚ': 'zi', 'ዛ': 'za', 'ዜ': 'ze', 'ዝ': 'z', 'ዞ': 'zo',
    'ዟ': 'zwa',

    // ዠ family
    'ዠ': 'zhe', 'ዡ': 'zhu', 'ዢ': 'zhi', 'ዣ': 'zha', 'ዤ': 'zhe', 'ዥ': 'zh', 'ዦ': 'zho',
    'ዧ': 'zhwa',

    // የ family
    'የ': 'ye', 'ዩ': 'yu', 'ዪ': 'yi', 'ያ': 'ya', 'ዬ': 'ye', 'ይ': 'y', 'ዮ': 'yo',

    // ደ family
    'ደ': 'de', 'ዱ': 'du', 'ዲ': 'di', 'ዳ': 'da', 'ዴ': 'de', 'ድ': 'd', 'ዶ': 'do',
    'ዷ': 'dwa',

    // ጀ family
    'ጀ': 'je', 'ጁ': 'ju', 'ጂ': 'ji', 'ጃ': 'ja', 'ጄ': 'je', 'ጅ': 'j', 'ጆ': 'jo',
    'ጇ': 'jwa',

    // ገ family
    'ገ': 'ge', 'ጉ': 'gu', 'ጊ': 'gi', 'ጋ': 'ga', 'ጌ': 'ge', 'ግ': 'g', 'ጎ': 'go',
    'ጏ': 'gwa', 'ጐ': 'gwe', 'ጒ': 'gwi', 'ጓ': 'gwa', 'ጔ': 'gwe',

    // ጠ family (ejective t)
    'ጠ': 'te', 'ጡ': 'tu', 'ጢ': 'ti', 'ጣ': 'ta', 'ጤ': 'te', 'ጥ': 't', 'ጦ': 'to',
    'ጧ': 'twa',

    // ጨ family (ejective ch)
    'ጨ': 'che', 'ጩ': 'chu', 'ጪ': 'chi', 'ጫ': 'cha', 'ጬ': 'che', 'ጭ': 'ch', 'ጮ': 'cho',
    'ጯ': 'chwa',

    // ጰ family (ejective p)
    'ጰ': 'pe', 'ጱ': 'pu', 'ጲ': 'pi', 'ጳ': 'pa', 'ጴ': 'pe', 'ጵ': 'p', 'ጶ': 'po',
    'ጷ': 'pwa',

    // ጸ family (ejective s)
    'ጸ': 'tse', 'ጹ': 'tsu', 'ጺ': 'tsi', 'ጻ': 'tsa', 'ጼ': 'tse', 'ጽ': 'ts', 'ጾ': 'tso',
    'ጿ': 'tswa',

    // ፀ family (alternative ejective s)
    'ፀ': 'tse', 'ፁ': 'tsu', 'ፂ': 'tsi', 'ፃ': 'tsa', 'ፄ': 'tse', 'ፅ': 'ts', 'ፆ': 'tso',

    // ፈ family
    'ፈ': 'fe', 'ፉ': 'fu', 'ፊ': 'fi', 'ፋ': 'fa', 'ፌ': 'fe', 'ፍ': 'f', 'ፎ': 'fo',
    'ፏ': 'fwa',

    // ፐ family
    'ፐ': 'pe', 'ፑ': 'pu', 'ፒ': 'pi', 'ፓ': 'pa', 'ፔ': 'pe', 'ፕ': 'p', 'ፖ': 'po',
    'ፗ': 'pwa',

    // Punctuation and numbers
    '።': '.', '፣': ',', '፤': ';', '፥': ':', '፦': ':-', '፧': '?', '፨': '!',
    '፩': '1', '፪': '2', '፫': '3', '፬': '4', '፭': '5', '፮': '6', '፯': '7', '፰': '8', '፱': '9', '፲': '10',
    '፳': '20', '፴': '30', '፵': '40', '፶': '50', '፷': '60', '፸': '70', '፹': '80', '፺': '90', '፻': '100',

    // Space
    ' ': ' '
};

// Sixth-form (sadis) CONSONANTS only. Two adjacent ones get an epenthetic "i"
// so the cluster is pronounceable (ክርስቶስ -> kiristos). Vowel letters እ/ዕ excluded.
const sixthFormChars = new Set([
    'ህ', 'ል', 'ሕ', 'ም', 'ሥ', 'ር', 'ስ', 'ሽ', 'ቅ', 'ቕ', 'ብ', 'ቭ', 'ት', 'ች', 'ኅ', 'ን', 'ኝ',
    'ክ', 'ኽ', 'ው', 'ዝ', 'ዥ', 'ይ', 'ድ', 'ጅ', 'ግ', 'ጥ', 'ጭ', 'ጵ', 'ጽ', 'ፅ', 'ፍ', 'ፕ'
]);

// Theme colors (shared by PDF + PPT).
const THEME = {
    cream:  '#FBF3DD',
    creamHex: 'FBF3DD',
    blue:   '#13345F',   // Amharic
    blueHex: '13345F',
    red:    '#9A1B1B',   // transliteration
    redHex: '9A1B1B',
    gold:   '#C49A2E',
    goldHex: 'C49A2E',
    muted:  '#8A7A55'
};

// ---------------------------------------------------------------------------
// Core transliteration
// ---------------------------------------------------------------------------
function transliterateText(text) {
    const chars = [...text];
    const result = new Array(chars.length);
    for (let i = 0; i < chars.length; i++) {
        const cur = chars[i];
        let out = mapping[cur] || cur;
        if (sixthFormChars.has(cur) && sixthFormChars.has(chars[i + 1])) out += 'i';
        result[i] = out;
    }
    return result.join('');
}

function hasAmharicLetters(s) {
    return /[ሀ-ፚᎀ-᎟꬀-꬯]/.test(s);
}

// Divider lines such as "======" or rows of section marks (፨፨፨): used as verse
// breaks, never printed.
function isSeparatorLine(s) {
    const t = s.trim();
    if (!t) return false;
    if (/[A-Za-z0-9]/.test(t)) return false;
    if (/[ሀ-ፚᎀ-᎟]/.test(t)) return false;
    return /[=\-_~*#·•.፠-᎙]/.test(t) && t.length >= 2;
}

// Build verses. Each verse is an array of { amharic, latin } items.
function buildVersesFromText(text) {
    const lines = (text || '').split('\n');
    const verses = [];
    let verse = [];
    const flush = () => { if (verse.length) { verses.push(verse); verse = []; } };
    for (const raw of lines) {
        const line = raw.trim();
        if (!line || isSeparatorLine(line)) { flush(); continue; }
        if (hasAmharicLetters(line)) verse.push({ amharic: line, latin: transliterateText(line) });
        else verse.push({ amharic: '', latin: line });
    }
    flush();
    return verses;
}

function buildVerses() {
    return buildVersesFromText(document.getElementById('amharicInput').value);
}

// Pack verses into pages/slides up to `maxRows` text rows, never splitting a
// verse. A verse larger than maxRows gets its own page.
function packVersesIntoSlides(verses, maxRows) {
    const out = [];
    let cur = [], count = 0;
    for (const verse of verses) {
        const rows = verse.reduce((n, it) => n + (it.amharic ? 2 : 1), 0);
        if (cur.length && count + rows > maxRows) { out.push(cur); cur = []; count = 0; }
        cur.push(verse);
        count += rows;
    }
    if (cur.length) out.push(cur);
    return out;
}

function getMeta() {
    const t = el => (el && el.value ? el.value.trim() : '');
    const title = t(document.getElementById('titleInput')) || 'መዝሙር  Mezmur';
    const subtitle = t(document.getElementById('subtitleInput'));
    const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    return { title, subtitle, dateStr };
}

function safeFileName(title) {
    const ascii = title.replace(/[^\w\- ]+/g, '').trim().replace(/\s+/g, '-');
    return (ascii || 'Mezmur');
}

// ---------------------------------------------------------------------------
// On-screen output
// ---------------------------------------------------------------------------
function transliterate() {
    const input = document.getElementById('amharicInput').value;
    document.getElementById('latinOutput').value = transliterateText(input);
}

function alternateTransliterateForPDF() {
    const verses = buildVerses();
    if (!verses.length) { document.getElementById('latinOutput').value = ''; return; }
    const out = [];
    verses.forEach((verse, vi) => {
        verse.forEach(item => {
            if (item.amharic) { out.push(item.amharic); out.push(item.latin); }
            else out.push(item.latin);
        });
        if (vi < verses.length - 1) out.push('');
    });
    document.getElementById('latinOutput').value = out.join('\n');
}

const MAX_ROWS = 8; // ~4 line-pairs per page/slide

// ---------------------------------------------------------------------------
// PDF export (title page + verse pages; Amharic drawn via canvas using the
// loaded Noto Sans Ethiopic web font).
// ---------------------------------------------------------------------------
async function downloadPDF() {
    const verses = buildVerses();
    if (!verses.length) {
        alert('No content to download. Please type or upload some Amharic text first.');
        return;
    }
    try {
        await document.fonts.load('bold 46px "Noto Sans Ethiopic"');
        await document.fonts.ready;
    } catch (e) { /* system-font fallback */ }

    const { title, subtitle, dateStr } = getMeta();
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('landscape', 'mm', 'a4');
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();

    const scale = 4;
    const cw = Math.round(pageW * scale);
    const ch = Math.round(pageH * scale);
    const margin = 78;
    const maxW = cw - margin * 2;

    const amSize = 46, enSize = 36;
    const amLH = 60, enLH = 50, intraGap = 4, pairGap = 20, verseGap = 44;
    const amFont = `bold ${amSize}px "Noto Sans Ethiopic", "Noto Serif", serif`;
    const enFont = `600 ${enSize}px Georgia, "Times New Roman", serif`;

    const pages = [];
    let canvas, ctx;

    function blankPage() {
        canvas = document.createElement('canvas');
        canvas.width = cw; canvas.height = ch;
        ctx = canvas.getContext('2d');
        ctx.fillStyle = THEME.cream; ctx.fillRect(0, 0, cw, ch);
        ctx.textBaseline = 'top';
        ctx.textAlign = 'center';
        pages.push(canvas);
    }
    function wrap(text, font) {
        ctx.font = font;
        const words = text.split(/\s+/);
        const lines = []; let cur = '';
        for (const w of words) {
            const test = cur ? cur + ' ' + w : w;
            if (ctx.measureText(test).width > maxW && cur) { lines.push(cur); cur = w; }
            else cur = test;
        }
        if (cur) lines.push(cur);
        return lines.length ? lines : [''];
    }
    function measureVerse(verse) {
        let h = 0;
        for (const it of verse) {
            if (it.amharic) h += wrap(it.amharic, amFont).length * amLH + intraGap + wrap(it.latin, enFont).length * enLH + pairGap;
            else h += wrap(it.latin, enFont).length * enLH + pairGap;
        }
        return h;
    }

    // ---- Title page ----
    blankPage();
    ctx.strokeStyle = THEME.gold; ctx.lineWidth = 5; ctx.strokeRect(46, 46, cw - 92, ch - 92);
    ctx.lineWidth = 1.5; ctx.strokeRect(64, 64, cw - 128, ch - 128);
    ctx.fillStyle = THEME.gold; ctx.textBaseline = 'alphabetic';
    ctx.font = '96px Georgia, serif';
    ctx.fillText('✝', cw / 2, 250);
    ctx.textBaseline = 'top';
    ctx.fillStyle = THEME.blue;
    ctx.font = `bold 66px "Noto Sans Ethiopic", "Noto Serif", serif`;
    let ty = 300;
    wrap(title, `bold 66px "Noto Sans Ethiopic", "Noto Serif", serif`).forEach(l => { ctx.fillText(l, cw / 2, ty); ty += 80; });
    ty += 6;
    ctx.strokeStyle = THEME.gold; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(cw / 2 - 170, ty); ctx.lineTo(cw / 2 + 170, ty); ctx.stroke();
    ty += 26;
    if (subtitle) {
        ctx.fillStyle = THEME.red;
        ctx.font = `italic 36px Georgia, serif`;
        wrap(subtitle, `italic 36px Georgia, serif`).forEach(l => { ctx.fillText(l, cw / 2, ty); ty += 46; });
    }
    ctx.fillStyle = THEME.muted; ctx.textBaseline = 'alphabetic';
    ctx.font = '24px Georgia, serif';
    ctx.fillText(dateStr, cw / 2, ch - 96);

    // ---- Content pages ----
    const contentPages = packVersesIntoSlides(verses, MAX_ROWS);
    contentPages.forEach((pageVerses) => {
        blankPage();
        ctx.strokeStyle = THEME.gold; ctx.lineWidth = 2;
        ctx.strokeRect(40, 40, cw - 80, ch - 80);

        let blockH = 0;
        pageVerses.forEach((v, vi) => { blockH += measureVerse(v) + (vi < pageVerses.length - 1 ? verseGap : 0); });
        let y = Math.max(margin + 20, (ch - blockH) / 2);

        pageVerses.forEach((verse, vi) => {
            if (vi > 0) {
                const midY = y + verseGap / 2;
                ctx.strokeStyle = THEME.gold; ctx.lineWidth = 1.5;
                ctx.beginPath(); ctx.moveTo(cw / 2 - 90, midY); ctx.lineTo(cw / 2 + 90, midY); ctx.stroke();
                y += verseGap;
            }
            for (const it of verse) {
                if (it.amharic) {
                    ctx.font = amFont; ctx.fillStyle = THEME.blue;
                    for (const ln of wrap(it.amharic, amFont)) { ctx.fillText(ln, cw / 2, y); y += amLH; }
                    y += intraGap;
                    ctx.font = enFont; ctx.fillStyle = THEME.red;
                    for (const ln of wrap(it.latin, enFont)) { ctx.fillText(ln, cw / 2, y); y += enLH; }
                    y += pairGap;
                } else {
                    ctx.font = enFont; ctx.fillStyle = THEME.red;
                    for (const ln of wrap(it.latin, enFont)) { ctx.fillText(ln, cw / 2, y); y += enLH; }
                    y += pairGap;
                }
            }
        });
    });

    // Footer numbers on content pages only.
    const totalContent = contentPages.length;
    pages.forEach((cnv, idx) => {
        if (idx > 0) {
            const c = cnv.getContext('2d');
            c.fillStyle = THEME.muted; c.font = '22px Georgia, serif';
            c.textAlign = 'center'; c.textBaseline = 'alphabetic';
            c.fillText(`${idx} / ${totalContent}`, cw / 2, ch - 26);
        }
        if (idx > 0) doc.addPage('a4', 'landscape');
        doc.addImage(cnv.toDataURL('image/jpeg', 0.92), 'JPEG', 0, 0, pageW, pageH);
    });

    doc.save(`${safeFileName(title)}-${new Date().toISOString().slice(0, 10)}.pdf`);
}

// ---------------------------------------------------------------------------
// PowerPoint export (title slide + verse slides, 16:9).
// ---------------------------------------------------------------------------
function downloadPPT() {
    const verses = buildVerses();
    if (!verses.length) {
        alert('No content to download. Please type or upload some Amharic text first.');
        return;
    }
    const { title, subtitle, dateStr } = getMeta();

    const pres = new PptxGenJS();
    pres.defineLayout({ name: 'WIDE', width: 10, height: 5.625 });
    pres.layout = 'WIDE';
    pres.author = 'Amharic Transliterator';
    pres.title = title;

    createTitleSlide(pres, title, subtitle, dateStr);

    const slides = packVersesIntoSlides(verses, MAX_ROWS);
    slides.forEach((sv, i) => createContentSlide(pres, sv, i + 1, slides.length));

    try {
        pres.writeFile({ fileName: `${safeFileName(title)}-${new Date().toISOString().slice(0, 10)}.pptx` });
    } catch (error) {
        console.error('Error creating PowerPoint:', error);
        alert('Error creating PowerPoint file. Please try again.');
    }
}

function createTitleSlide(pres, title, subtitle, dateStr) {
    const slide = pres.addSlide();
    slide.background = { fill: THEME.creamHex };

    slide.addShape(pres.ShapeType.rect, { x: 0.25, y: 0.22, w: 9.5, h: 5.18, fill: { color: THEME.creamHex }, line: { color: THEME.goldHex, width: 2.5 } });
    slide.addShape(pres.ShapeType.rect, { x: 0.42, y: 0.39, w: 9.16, h: 4.84, fill: { type: 'none' }, line: { color: THEME.goldHex, width: 0.75 } });

    slide.addText('✝', { x: 0, y: 0.55, w: 10, h: 0.9, fontSize: 50, color: THEME.goldHex, align: 'center', fontFace: 'Georgia' });
    slide.addText(title, { x: 0.6, y: 1.75, w: 8.8, h: 1.2, fontSize: 40, bold: true, color: THEME.blueHex, align: 'center', valign: 'middle', fontFace: 'Nyala' });
    slide.addShape(pres.ShapeType.line, { x: 3.6, y: 3.05, w: 2.8, h: 0, line: { color: THEME.goldHex, width: 1.75 } });
    if (subtitle) {
        slide.addText(subtitle, { x: 0.6, y: 3.2, w: 8.8, h: 0.7, fontSize: 22, italic: true, color: THEME.redHex, align: 'center', valign: 'middle', fontFace: 'Georgia' });
    }
    slide.addText(dateStr, { x: 0.6, y: 4.75, w: 8.8, h: 0.4, fontSize: 14, color: '8A7A55', align: 'center', fontFace: 'Georgia' });
}

function createContentSlide(pres, slideVerses, slideNumber, totalSlides) {
    const slide = pres.addSlide();
    slide.background = { fill: THEME.creamHex };

    const SLIDE_H = 5.625;
    const amSize = 24, enSize = 19;
    const rowAm = 0.46, rowEn = 0.40, intra = 0.0, pairGap = 0.07, verseGap = 0.24;

    const itemH = it => it.amharic ? (rowAm + intra + rowEn + pairGap) : (rowEn + pairGap);
    let blockH = 0;
    slideVerses.forEach((verse, vi) => {
        verse.forEach(it => { blockH += itemH(it); });
        if (vi < slideVerses.length - 1) blockH += verseGap;
    });
    blockH -= pairGap;

    let y = Math.max(0.35, (SLIDE_H - blockH) / 2);

    slideVerses.forEach((verse, vi) => {
        if (vi > 0) {
            slide.addShape(pres.ShapeType.line, { x: 4.45, y: y + verseGap / 2, w: 1.1, h: 0, line: { color: THEME.goldHex, width: 1 } });
            y += verseGap;
        }
        verse.forEach(it => {
            if (it.amharic) {
                slide.addText(it.amharic, { x: 0.5, y, w: 9, h: rowAm, fontSize: amSize, bold: true, color: THEME.blueHex, align: 'center', valign: 'middle', fontFace: 'Nyala' });
                y += rowAm + intra;
                slide.addText(it.latin, { x: 0.5, y, w: 9, h: rowEn, fontSize: enSize, bold: true, color: THEME.redHex, align: 'center', valign: 'middle', fontFace: 'Georgia' });
                y += rowEn + pairGap;
            } else {
                slide.addText(it.latin, { x: 0.5, y, w: 9, h: rowEn, fontSize: enSize, bold: true, color: THEME.redHex, align: 'center', valign: 'middle', fontFace: 'Georgia' });
                y += rowEn + pairGap;
            }
        });
    });

    slide.addText(`${slideNumber} / ${totalSlides}`, { x: 8.7, y: 5.28, w: 1.0, h: 0.3, fontSize: 10, color: '8A7A55', align: 'right', fontFace: 'Georgia' });
}

// ---------------------------------------------------------------------------
// File upload (.txt / .docx)
// ---------------------------------------------------------------------------
async function handleFileUpload(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const nameEl = document.getElementById('fileName');
    const input = document.getElementById('amharicInput');
    nameEl.textContent = `Loading ${file.name}...`;
    try {
        const lower = file.name.toLowerCase();
        let text = '';
        if (lower.endsWith('.docx')) {
            if (typeof mammoth === 'undefined') throw new Error('Word (.docx) support failed to load. Try again or use a .txt file.');
            const arrayBuffer = await file.arrayBuffer();
            text = (await mammoth.extractRawText({ arrayBuffer })).value;
        } else {
            text = await file.text();
        }
        input.value = text;
        nameEl.textContent = `Loaded: ${file.name}`;
    } catch (err) {
        console.error('File upload error:', err);
        nameEl.textContent = '';
        alert(err.message || 'Could not read that file. Please try a .txt or .docx file.');
    } finally {
        event.target.value = '';
    }
}

// ---------------------------------------------------------------------------
// Event wiring (guarded so the file can also be loaded in Node for testing)
// ---------------------------------------------------------------------------
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('transliterateBtn').addEventListener('click', transliterate);
        document.getElementById('alternateTransliterateBtn').addEventListener('click', alternateTransliterateForPDF);
        document.getElementById('downloadPDFBtn').addEventListener('click', downloadPDF);
        document.getElementById('downloadPPTBtn').addEventListener('click', downloadPPT);
        document.getElementById('fileInput').addEventListener('change', handleFileUpload);
    });
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        transliterateText, hasAmharicLetters, isSeparatorLine,
        buildVersesFromText, packVersesIntoSlides, createTitleSlide, createContentSlide, THEME
    };
}
