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
    'ህ', 'ል', 'ሕ', 'ም', 'ሥ', 'ር', 'ስ', 'ሽ', 'ቅ', 'ቕ', 'ብ', 'ቭ', 'ት', 'ች', 'ኅ', 'ን', 'ኝ',
    'ክ', 'ኽ', 'ው', 'ዝ', 'ዥ', 'ይ', 'ድ', 'ጅ', 'ግ', 'ጥ', 'ጭ', 'ጵ', 'ጽ', 'ፅ', 'ፍ', 'ፕ'
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

// Use more efficient event binding
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('transliterateBtn').addEventListener('click', transliterate);
    document.getElementById('alternateTransliterateBtn').addEventListener('click', alternateTransliterate);
});