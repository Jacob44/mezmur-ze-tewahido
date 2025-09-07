// Amharic → plain Latin mapping (no special characters)
const mapping = {
    // ሀ family
    'ሀ': 'ha', 'ሁ': 'hu', 'ሂ': 'hi', 'ሃ': 'ha', 'ሄ': 'he', 'ህ': 'h', 'ሆ': 'ho',
   
    // ለ family
    'ለ': 'le', 'ሉ': 'lu', 'ሊ': 'li', 'ላ': 'la', 'ሌ': 'le', 'ል': 'l', 'ሎ': 'lo',
    'ሏ': 'lwa',
   
    // ሐ family (missing from your original)
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

// Pre-compile the sixth form set for O(1) lookups
const sixthFormChars = new Set([
    'ህ', 'ል', 'ሕ', 'ም', 'ሥ', 'ር', 'ስ', 'ሽ', 'ቅ', 'ቕ', 'ብ', 'ቭ', 'ት', 'ች', 'ኅ', 'ን', 'ኝ', 'እ',
    'ክ', 'ኽ', 'ው', 'ዕ', 'ዝ', 'ዥ', 'ይ', 'ድ', 'ጅ', 'ግ', 'ጥ', 'ጭ', 'ጵ', 'ጽ', 'ፅ', 'ፍ', 'ፕ'
]);

// Shared transliteration logic
function transliterateText(text) {
    const chars = [...text]; // Use spread for proper Unicode handling
    const result = new Array(chars.length); // Pre-allocate array
   
    for (let i = 0; i < chars.length; i++) {
        const currentChar = chars[i];
        const nextChar = chars[i + 1];
       
        let transliteratedChar = mapping[currentChar] || currentChar;
       
        // Add 'i' if current and next are both sixth-form
        if (sixthFormChars.has(currentChar) && sixthFormChars.has(nextChar)) {
            transliteratedChar += 'i';
        }
       
        result[i] = transliteratedChar;
    }
   
    return result.join('');
}

// Optimized regular transliteration
function transliterate() {
    const input = document.getElementById('amharicInput').value;
    const output = transliterateText(input);
    document.getElementById('latinOutput').value = output;
}

// Optimized alternate transliteration
function alternateTransliterate() {
    const input = document.getElementById('amharicInput').value;
   
    if (!input.trim()) {
        document.getElementById('latinOutput').value = '';
        return;
    }
   
    const lines = input.split('\n');
    const resultLines = new Array(lines.length * 2); // Pre-allocate
   
    for (let i = 0; i < lines.length; i++) {
        const amharicLine = lines[i];
        const transliteratedLine = transliterateText(amharicLine);
       
        resultLines[i * 2] = amharicLine;
        resultLines[i * 2 + 1] = transliteratedLine;
    }
   
    document.getElementById('latinOutput').value = resultLines.join('\n');
}

// Enhanced PDF download function with professional formatting inspired by VBA code
function downloadPDF() {
    const output = document.getElementById('latinOutput').value;
   
    if (!output.trim()) {
        alert('No content to download. Please transliterate some text first.');
        return;
    }
   
    // Create new jsPDF instance in landscape mode
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('landscape', 'mm', 'a4');
   
    // Page dimensions and styling constants
    const pageWidth = doc.internal.pageSize.width; // ~297mm
    const pageHeight = doc.internal.pageSize.height; // ~210mm
    const margin = 20;
    const maxWidth = pageWidth - (margin * 2);
   
    // Font sizes inspired by your VBA code (scaled for PDF)
    const amharicFontSize = 16; // Equivalent to your size 52 but scaled for PDF
    const englishFontSize = 14; // Equivalent to your size 44 but scaled for PDF
    const titleFontSize = 20;
   
    // Line heights
    const amharicLineHeight = 12;
    const englishLineHeight = 10;
    const pairSpacing = 8;
   
    // Colors (inspired by your VBA: Dark Blue and Red)
    const amharicColor = [0, 0, 139]; // Dark Blue RGB
    const englishColor = [255, 0, 0]; // Red RGB
    const titleColor = [0, 0, 0]; // Black
   
    let yPosition = margin;
    let currentPagePairs = 0;
    const maxPairsPerPage = 4; // Conservative limit for readability
   
    // Add professional header
    doc.setFontSize(titleFontSize);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...titleColor);
    doc.text('Amharic Script Transliteration', pageWidth / 2, yPosition, { align: 'center' });
   
    // Add date and page info
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(currentDate, pageWidth - margin, yPosition, { align: 'right' });
   
    yPosition += 20; // Space after header
   
    // Add decorative line
    doc.setLineWidth(0.5);
    doc.setDrawColor(100, 100, 100);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 15;
   
    // Process content
    const lines = output.split('\n');
    let pageNumber = 1;
   
    for (let i = 0; i < lines.length; i++) {
        const currentLine = lines[i].trim();
       
        // Skip empty lines
        if (!currentLine) continue;
       
        // Check if this is an Amharic-English pair
        const nextLine = i < lines.length - 1 ? lines[i + 1].trim() : '';
        const isAmharicLine = /[\u1200-\u137F]/.test(currentLine);
        const isEnglishPair = isAmharicLine && nextLine && !/[\u1200-\u137F]/.test(nextLine);
       
        if (isEnglishPair) {
            // Calculate space needed for this pair
            const amharicSplitLines = doc.splitTextToSize(currentLine, maxWidth);
            const englishSplitLines = doc.splitTextToSize(nextLine, maxWidth);
            const pairHeight = (amharicSplitLines.length * amharicLineHeight) +
                             (englishSplitLines.length * englishLineHeight) +
                             pairSpacing;
           
            // Check if we need a new page
            if (yPosition + pairHeight > pageHeight - 40 || currentPagePairs >= maxPairsPerPage) {
                // Add page number to current page
                doc.setFontSize(10);
                doc.setTextColor(100, 100, 100);
                doc.text(`Page ${pageNumber}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
               
                doc.addPage('landscape');
                pageNumber++;
                yPosition = margin + 15;
                currentPagePairs = 0;
               
                // Add page header
                doc.setFontSize(12);
                doc.setFont("helvetica", "bold");
                doc.setTextColor(...titleColor);
                doc.text('Amharic Script Transliteration (continued)', margin, yPosition);
                yPosition += 15;
               
                // Add decorative line
                doc.line(margin, yPosition, pageWidth - margin, yPosition);
                yPosition += 10;
            }
           
            // Add Amharic text (inspired by your odd-numbered line formatting)
            doc.setFontSize(amharicFontSize);
            doc.setFont("helvetica", "bold");
            doc.setTextColor(...amharicColor);
           
            amharicSplitLines.forEach((line, index) => {
                doc.text(line, margin, yPosition);
                yPosition += amharicLineHeight;
            });
           
            yPosition += 3; // Small gap between Amharic and English
           
            // Add English text (inspired by your even-numbered line formatting)
            doc.setFontSize(englishFontSize);
            doc.setFont("helvetica", "bold"); // Keep bold as in your VBA
            doc.setTextColor(...englishColor);
           
            englishSplitLines.forEach((line, index) => {
                doc.text(`    ${line}`, margin, yPosition); // Indent English
                yPosition += englishLineHeight;
            });
           
            yPosition += pairSpacing; // Space between pairs
            currentPagePairs++;
            i++; // Skip the English line in next iteration
           
        } else {
            // Handle standalone lines
            const splitLines = doc.splitTextToSize(currentLine, maxWidth);
            const lineHeight = isAmharicLine ? amharicLineHeight : englishLineHeight;
            const fontSize = isAmharicLine ? amharicFontSize : englishFontSize;
            const color = isAmharicLine ? amharicColor : englishColor;
           
            if (yPosition + (splitLines.length * lineHeight) > pageHeight - 40) {
                // Add page number
                doc.setFontSize(10);
                doc.setTextColor(100, 100, 100);
                doc.text(`Page ${pageNumber}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
               
                doc.addPage('landscape');
                pageNumber++;
                yPosition = margin + 30;
                currentPagePairs = 0;
            }
           
            doc.setFontSize(fontSize);
            doc.setFont("helvetica", "bold");
            doc.setTextColor(...color);
           
            splitLines.forEach(line => {
                doc.text(line, margin, yPosition);
                yPosition += lineHeight;
            });
           
            yPosition += pairSpacing;
        }
    }
   
    // Add final page number
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Page ${pageNumber}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
   
    // Generate filename
    const now = new Date();
    const timestamp = now.toISOString().slice(0, 10);
    const filename = `Amharic-Transliteration-${timestamp}.pdf`;
   
    // Save with professional formatting
    doc.save(filename);
}

// Enhanced alternate transliterate for better PDF formatting
function alternateTransliterateForPDF() {
    const input = document.getElementById('amharicInput').value;
   
    if (!input.trim()) {
        document.getElementById('latinOutput').value = '';
        return;
    }
   
    const lines = input.split('\n').filter(line => line.trim()); // Remove empty lines
    const resultLines = [];
   
    lines.forEach((line, index) => {
        const amharicLine = line.trim();
        if (amharicLine) {
            const transliteratedLine = transliterateText(amharicLine);
            resultLines.push(amharicLine);
            resultLines.push(transliteratedLine);
            resultLines.push(''); // Spacing line
        }
    });
   
    document.getElementById('latinOutput').value = resultLines.join('\n');
}


// Add this script tag to your HTML head for PptxGenJS library
// <script src="https://cdn.jsdelivr.net/npm/pptxgenjs@3.12.0/dist/pptxgen.bundle.js"></script>

// Creative PPT generation function
// Enhanced PPT generation with 6-8 lines per slide and pair integrity
// Main PPT function (no changes to grouping logic, just updated slide creation)
// Updated PPT function with corrected syntax
// Updated main PPT function with better slide capacity
function downloadPPT() {
    const output = document.getElementById('latinOutput').value;
   
    if (!output.trim()) {
        alert('No content to download. Please transliterate some text first.');
        return;
    }
   
    // Create new presentation with correct initialization
    let pres = new PptxGenJS();
   
    // Set presentation properties (simplified)
    pres.author = 'Amharic Transliterator';
    pres.title = 'Orthodox Mezmur - Amharic to Latin Script';
   
    // Create title slide
    createTitleSlideFixed(pres);
   
    // Process content (same logic as before)
    const lines = output.split('\n');
    const contentPairs = [];
   
    for (let i = 0; i < lines.length; i++) {
        const currentLine = lines[i].trim();
        if (!currentLine) continue;
       
        const isAmharicLine = /[\u1200-\u137F]/.test(currentLine);
        const nextLine = i < lines.length - 1 ? lines[i + 1].trim() : '';
        const isEnglishPair = isAmharicLine && nextLine && !/[\u1200-\u137F]/.test(nextLine);
       
        if (isEnglishPair) {
            contentPairs.push({
                type: 'pair',
                amharic: currentLine,
                english: nextLine,
                linesCount: 2
            });
            i++;
        } else {
            contentPairs.push({
                type: 'single',
                text: currentLine,
                isAmharic: isAmharicLine,
                linesCount: 1
            });
        }
    }
   
    // Group into slides with better capacity due to tighter spacing
    const slides = [];
    let currentSlideContent = [];
    let currentSlideLines = 0;
    const maxLinesPerSlide = 10; // Increased from 8 due to tighter spacing
   
    for (let i = 0; i < contentPairs.length; i++) {
        const item = contentPairs[i];
        const itemLines = item.linesCount;
       
        if (currentSlideLines + itemLines > maxLinesPerSlide && currentSlideContent.length > 0) {
            slides.push([...currentSlideContent]);
            currentSlideContent = [];
            currentSlideLines = 0;
        }
       
        currentSlideContent.push(item);
        currentSlideLines += itemLines;
    }
   
    if (currentSlideContent.length > 0) {
        slides.push(currentSlideContent);
    }
   
    // Create content slides
    slides.forEach((slideContent, index) => {
        createContentSlideFixed(pres, slideContent, index + 1);
    });
   
    // Save with error handling
    try {
        const timestamp = new Date().toISOString().slice(0, 10);
        const filename = `Orthodox-Mezmur-${timestamp}.pptx`;
        pres.writeFile({ fileName: filename });
    } catch (error) {
        console.error('Error creating PowerPoint:', error);
        alert('Error creating PowerPoint file. Please try again.');
    }
}

function createTitleSlideFixed(pres) {
    let slide = pres.addSlide();
   
    // Set background
    slide.background = { fill: "FDF8E1" };
   
    // Image placeholder (simplified)
    slide.addShape(pres.ShapeType.rect, {
        x: 1.5,
        y: 0.8,
        w: 7,
        h: 2.5,
        fill: { color: "FFFFFF" },
        line: { color: "D4AF37", width: 2 }
    });
   
    slide.addText("Insert Orthodox Icon or Image Here", {
        x: 1.5,
        y: 1.8,
        w: 7,
        h: 0.8,
        fontSize: 18,
        color: "8B7355",
        align: "center",
        fontFace: "Calibri"
    });
   
    // Ethiopian Orthodox cross (✠ with three horizontal bars)
    slide.addText("☩", {
        x: 4.2,
        y: 0.3,
        w: 1.6,
        h: 0.5,
        fontSize: 40,
        color: "D4AF37",
        align: "center"
    });
   
    // Title placeholder
    slide.addShape(pres.ShapeType.rect, {
        x: 1,
        y: 3.8,
        w: 8,
        h: 1.2,
        fill: { color: "F5F5DC" },
        line: { color: "D4AF37", width: 2 }
    });
   
    slide.addText("Enter your Mezmur title here", {
        x: 1,
        y: 4.1,
        w: 8,
        h: 0.6,
        fontSize: 28,
        bold: true,
        color: "8B0000",
        align: "center",
        fontFace: "Times New Roman"
    });
   
    // Removed subtitle and date as requested
}

// Simplified content slide creation
// Updated content slide with minimal uniform spacing and better contrast colors
function createContentSlideFixed(pres, slideContent, slideNumber) {
    let slide = pres.addSlide();
   
    // Set background
    slide.background = { fill: "FDF8E1" };
   
    // Add slide number
    slide.addText(slideNumber.toString(), {
        x: 9.2,
        y: 6.8,
        w: 0.5,
        h: 0.3,
        fontSize: 12,
        color: "666666",
        align: "center"
    });
   
    let yPosition = 0.5; // Start higher on the slide
    const lineSpacing = 0.6; // Reduced from 0.8 to 0.6 for minimal spacing
    const pairSpacing = 0.1; // Reduced from 0.2 to 0.1 for minimal spacing between pairs
   
    slideContent.forEach((item) => {
        if (item.type === 'pair') {
            // Amharic text - better contrast with dark blue
            slide.addText(item.amharic, {
                x: 0.8,
                y: yPosition,
                w: 8.4,
                h: 0.5, // Reduced height for tighter spacing
                fontSize: 26, // Slightly reduced from 28
                bold: true,
                color: "1B365D", // Darker blue for better contrast
                align: "left"
            });
           
            yPosition += lineSpacing;
           
            // English text - better contrast with dark red
            slide.addText(item.english, {
                x: 0.8,
                y: yPosition,
                w: 8.4,
                h: 0.4, // Reduced height for tighter spacing
                fontSize: 20, // Slightly reduced from 22
                bold: true,
                color: "8B0000", // Darker red for better contrast
                align: "left"
            });
           
            yPosition += lineSpacing + pairSpacing;
           
        } else if (item.type === 'single') {
            const fontSize = item.isAmharic ? 26 : 20; // Slightly reduced sizes
            const color = item.isAmharic ? "1B365D" : "8B0000"; // Better contrast colors
           
            slide.addText(item.text, {
                x: 0.8,
                y: yPosition,
                w: 8.4,
                h: 0.5, // Reduced height for tighter spacing
                fontSize: fontSize,
                bold: true,
                color: color,
                align: "left"
            });
           
            yPosition += lineSpacing;
        }
    });
}


// Create professional title slide
function createTitleSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = theme.background;
   
    // Main title
    slide.addText('Amharic Script Transliteration', {
        x: 0.5,
        y: 2,
        w: 9,
        h: 1.5,
        fontSize: 44,
        bold: true,
        color: theme.amharicColor,
        align: 'center',
        fontFace: 'Calibri'
    });
   
    // Subtitle
    slide.addText('From Ethiopian Script to Latin Characters', {
        x: 0.5,
        y: 3.8,
        w: 9,
        h: 0.8,
        fontSize: 24,
        color: theme.englishColor,
        align: 'center',
        fontFace: 'Calibri'
    });
   
    // Decorative line
    slide.addShape('rect', {
        x: 2,
        y: 4.8,
        w: 6,
        h: 0.1,
        fill: theme.accentColor
    });
   
    // Date and info
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });
   
    slide.addText(currentDate, {
        x: 0.5,
        y: 5.5,
        w: 9,
        h: 0.4,
        fontSize: 16,
        color: theme.textColor,
        align: 'center',
        fontFace: 'Calibri'
    });
}

// Create clean content slide without lines and equal indentation
function createContentSlide(pres, slideContent, theme, slideNumber) {
    const slide = pres.addSlide();
    slide.background = { fill: 'FDF8E1' }; // Same warm cream as title
   
    // Add slide number
    slide.addText(`${slideNumber}`, {
        x: 9.2,
        y: 6.8,
        w: 0.5,
        h: 0.3,
        fontSize: 14,
        color: '666666',
        align: 'center',
        fontFace: 'Calibri'
    });
   
    let yPosition = 0.8;
    const lineSpacing = 0.8; // Consistent spacing
    const pairSpacing = 0.2; // Minimal spacing between pairs
   
    slideContent.forEach((item) => {
        if (item.type === 'pair') {
            // Amharic text - same indentation as English
            slide.addText(item.amharic, {
                x: 0.8, // Same x position as English
                y: yPosition,
                w: 8.4,
                h: 0.7,
                fontSize: 28,
                bold: true,
                color: '1E3A8A', // Deep blue
                align: 'left',
                fontFace: 'Calibri'
            });
           
            yPosition += lineSpacing;
           
            // English text - same indentation as Amharic
            slide.addText(item.english, {
                x: 0.8, // Same x position as Amharic
                y: yPosition,
                w: 8.4,
                h: 0.6,
                fontSize: 22,
                bold: true,
                color: 'DC2626', // Red
                align: 'left',
                fontFace: 'Calibri'
            });
           
            yPosition += lineSpacing + pairSpacing;
           
        } else if (item.type === 'single') {
            // Single line - same indentation
            const fontSize = item.isAmharic ? 28 : 22;
            const color = item.isAmharic ? '1E3A8A' : 'DC2626';
           
            slide.addText(item.text, {
                x: 0.8, // Same x position for all text
                y: yPosition,
                w: 8.4,
                h: 0.7,
                fontSize: fontSize,
                bold: true,
                color: color,
                align: 'left',
                fontFace: 'Calibri'
            });
           
            yPosition += lineSpacing;
        }
    });
}



// Create creative title slide
function createTitleSlide(pres, theme) {
    const slide = pres.addSlide();
   
    // Orthodox Christian inspired background
    slide.background = { fill: 'FDF8E1' }; // Warm cream background
   
    // Image placeholder with Orthodox styling
    slide.addShape('rect', {
        x: 1.5,
        y: 0.8,
        w: 7,
        h: 2.5,
        fill: 'FFFFFF',
        line: { color: 'D4AF37', width: 3 }, // Golden border
        shadow: { type: 'outer', color: '000000', opacity: 20, blur: 8, offset: 3, angle: 45 }
    });
   
    slide.addText('Insert Orthodox Icon or Image Here', {
        x: 1.5,
        y: 1.8,
        w: 7,
        h: 0.8,
        fontSize: 18,
        color: '8B7355',
        align: 'center',
        fontFace: 'Calibri',
        italic: true
    });
   
    // Orthodox cross symbol
    slide.addText('☦', {
        x: 4.2,
        y: 0.3,
        w: 1.6,
        h: 0.5,
        fontSize: 36,
        color: 'D4AF37',
        align: 'center',
        fontFace: 'Arial'
    });
   
    // Title placeholder with Orthodox styling
    slide.addShape('rect', {
        x: 1,
        y: 3.8,
        w: 8,
        h: 1.2,
        fill: 'F5F5DC',
        line: { color: 'D4AF37', width: 2 }
    });
   
    slide.addText('Enter your Mezmur title here', {
        x: 1,
        y: 4.1,
        w: 8,
        h: 0.6,
        fontSize: 28,
        bold: true,
        color: '8B0000', // Dark red
        align: 'center',
        fontFace: 'Times New Roman'
    });
   
    // Subtitle
    slide.addText('Amharic Script with Latin Transliteration', {
        x: 1,
        y: 5.3,
        w: 8,
        h: 0.6,
        fontSize: 20,
        color: '4A4A4A',
        align: 'center',
        fontFace: 'Calibri'
    });
   
    // Orthodox decorative elements
    slide.addText('✠ ✠ ✠', {
        x: 1,
        y: 6.2,
        w: 8,
        h: 0.4,
        fontSize: 24,
        color: 'D4AF37',
        align: 'center',
        fontFace: 'Arial'
    });
   
    // Date
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });
   
    slide.addText(currentDate, {
        x: 1,
        y: 6.7,
        w: 8,
        h: 0.3,
        fontSize: 14,
        color: '666666',
        align: 'center',
        fontFace: 'Calibri'
    });
}
// Create single pair slide with creative layout
function createSinglePairSlide(pres, pair, theme, slideNumber) {
    const slide = pres.addSlide();
    slide.background = theme.background;
   
    // Add slide number
    slide.addText(`${slideNumber}`, {
        x: 9,
        y: 6.5,
        w: 0.5,
        h: 0.3,
        fontSize: 12,
        color: '888888',
        align: 'center'
    });
   
    if (pair.amharic) {
        // Amharic text - large and centered
        slide.addText(pair.amharic, {
            x: 0.5,
            y: 2,
            w: 9,
            h: 1.5,
            fontSize: 48,
            bold: true,
            color: theme.amharicColor,
            align: 'center',
            fontFace: 'Calibri'
        });
    }
   
    if (pair.english) {
        // English text - smaller, below Amharic
        slide.addText(pair.english, {
            x: 0.5,
            y: 4,
            w: 9,
            h: 1,
            fontSize: 36,
            bold: true,
            color: theme.englishColor,
            align: 'center',
            fontFace: 'Calibri'
        });
    }
   
    // Add decorative accent line
    if (pair.amharic && pair.english) {
        slide.addShape('rect', {
            x: 3,
            y: 3.7,
            w: 4,
            h: 0.05,
            fill: theme.accentColor
        });
    }
}

// Create double pair slide for efficiency
function createDoublePairSlide(pres, pairs, theme, slideNumber) {
    const slide = pres.addSlide();
    slide.background = theme.background;
   
    // Add slide number
    slide.addText(`${slideNumber}-${slideNumber + 1}`, {
        x: 8.5,
        y: 6.5,
        w: 1,
        h: 0.3,
        fontSize: 12,
        color: '888888',
        align: 'center'
    });
   
    // First pair - top half
    if (pairs[0].amharic) {
        slide.addText(pairs[0].amharic, {
            x: 0.5,
            y: 0.8,
            w: 9,
            h: 1,
            fontSize: 32,
            bold: true,
            color: theme.amharicColor,
            align: 'center'
        });
    }
   
    if (pairs[0].english) {
        slide.addText(pairs[0].english, {
            x: 0.5,
            y: 1.9,
            w: 9,
            h: 0.8,
            fontSize: 24,
            bold: true,
            color: theme.englishColor,
            align: 'center'
        });
    }
   
    // Separator line
    slide.addShape('rect', {
        x: 1,
        y: 3.2,
        w: 8,
        h: 0.05,
        fill: theme.accentColor
    });
   
    // Second pair - bottom half
    if (pairs[1].amharic) {
        slide.addText(pairs[1].amharic, {
            x: 0.5,
            y: 3.8,
            w: 9,
            h: 1,
            fontSize: 32,
            bold: true,
            color: theme.amharicColor,
            align: 'center'
        });
    }
   
    if (pairs[1].english) {
        slide.addText(pairs[1].english, {
            x: 0.5,
            y: 4.9,
            w: 9,
            h: 0.8,
            fontSize: 24,
            bold: true,
            color: theme.englishColor,
            align: 'center'
        });
    }
}

// Create summary slide
function createSummarySlide(pres, totalPairs, theme) {
    const slide = pres.addSlide();
    slide.background = theme.background;
   
    slide.addText('Transliteration Complete', {
        x: 1,
        y: 2,
        w: 8,
        h: 1.5,
        fontSize: 36,
        bold: true,
        color: theme.amharicColor,
        align: 'center'
    });
   
    slide.addText(`Successfully transliterated ${totalPairs} text pairs`, {
        x: 1,
        y: 4,
        w: 8,
        h: 1,
        fontSize: 24,
        color: theme.englishColor,
        align: 'center'
    });
   
    // Add Ethiopian flag colors as decorative elements
    slide.addShape('rect', { x: 2, y: 5.5, w: 2, h: 0.3, fill: '228B22' }); // Green
    slide.addShape('rect', { x: 4, y: 5.5, w: 2, h: 0.3, fill: 'FFD700' }); // Yellow
    slide.addShape('rect', { x: 6, y: 5.5, w: 2, h: 0.3, fill: 'FF0000' }); // Red
}

// Randomly select layout for variety
function getRandomLayout() {
    const layouts = ['single', 'single', 'double']; // Weighted toward single for better readability
    return layouts[Math.floor(Math.random() * layouts.length)];
}

// Update event listeners
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('transliterateBtn').addEventListener('click', transliterate);
    document.getElementById('alternateTransliterateBtn').addEventListener('click', alternateTransliterateForPDF);
    document.getElementById('downloadPDFBtn').addEventListener('click', downloadPDF);
    document.getElementById('downloadPPTBtn').addEventListener('click', downloadPPT);
});
