# Mezmur Site — Project Spec & Roadmap

A standalone Ethiopian/Eritrean mezmur (spiritual song) site with lyrics, built‑in
Amharic→Latin transliteration, and projection‑ready slide/PDF export. Inspired by
[WikiMezmur](https://wikimezmur.org), but adding the layer it lacks: transliteration
and worship‑ready output.

_Status: planning. Last updated: 2026‑06‑26._

---

## 1. Goal & audiences

Serve three audiences from one site:

- **Choirs / worship teams** — projectable slides and printable sheets for singing.
- **Diaspora / learners** — Latin transliteration so non‑Amharic readers can sing along.
- **Archivists** — a clean, browsable, preserved lyrics database.

The differentiator over WikiMezmur: every song page can **toggle transliteration**
and **download themed slides/PDF**. WikiMezmur stores Amharic‑only lyrics; we add the
reading + presentation layer on top.

## 2. What we already have (reuse, don't rebuild)

The current transliteration app contains the hard‑to‑fake core. Extract these into a
shared module (e.g. `lib/mezmur-core.js`) and use them on the site:

- `transliterateText()` — Amharic (fidel) → plain Latin, with sixth‑form cluster handling.
- `buildVersesFromText()` / `isSeparatorLine()` — verse parsing (blank line / `====` / `፨፨` dividers).
- `packVersesIntoSlides()` — group verses into pages/slides without splitting.
- PDF (canvas + jsPDF) and PPT (PptxGenJS) generators, with title page + 4 color themes.

These become library functions called by the song pages and an "export" button.

## 3. Data model

Mirror WikiMezmur's proven hierarchy: **Singer → Album → Song**. Store each song as a
structured file (one JSON per song) so it's easy to diff, review, and version in git.

```jsonc
// content/songs/binyam-wale/yaye-yinager/yasmekal.json
{
  "id": "binyam-wale/yaye-yinager/yasmekal",
  "title": { "am": "ያስመካል", "latin": "Yasmekal" },
  "singer": { "am": "ቢንያም ዋለ", "latin": "Binyam Wale" },
  "album": { "am": "ያየ ይናገር", "latin": "Yaye Yinager" },
  "year": 2017,            // Gregorian; render Geez numerals in UI if desired
  "track": 3,
  "language": "am",        // am | ti | om
  "lyrics": "ጌታን ተስፋ ያረጉ መቼም አያፍሩም\n...\n\n====\n...",  // verse-structured plain text
  "media": { "youtube": "LmtQEVjioVY" },
  "tags": ["Lyrics", "Amharic"],
  "source": {
    "from": "WikiMezmur",
    "url": "https://wikimezmur.org/am/Binyam_Wale/Yaye_Yinager/Yasmekal",
    "license": "CC BY 4.0"
  },
  "contributor": "yacob",
  "updated": "2026-06-26"
}
```

Transliteration is **derived** from `lyrics` at build/run time (not stored), but allow an
optional `lyricsLatinOverride` field for manual corrections where the auto output is off.

## 4. Architecture (recommended: static‑first)

Start static; add a backend only if/when contribution volume requires it.

| Layer | Recommendation | Why |
|---|---|---|
| Content | JSON files in a git repo | Diffable, reviewable, free version history |
| Site generator | Astro (or Next static export) | Fast, component‑based, great for content sites |
| Transliteration/export | Shared JS module (from current app) | Reuse what works; runs client‑side |
| Search | Pagefind (static) or Lunr | Index Amharic **and** Latin so users can type either |
| Fonts | Noto Sans/Serif Ethiopic | Reliable fidel rendering |
| Hosting | Netlify / Vercel / GitHub Pages | Free tier, instant deploys |
| Contributions | Form → GitHub Pull Request, or PR directly | Built‑in moderation via review |

Page types: Home, Singer, Album, Song, Search results, Submit/Edit, About/License.

Each **Song page**: Amharic lyrics, "Show transliteration" toggle, YouTube embed,
metadata (singer/album/year/track), and "Download slides / PDF" using the existing themes.

## 5. Cross‑cutting concerns

- **Search & input:** index transliteration so Latin queries find Amharic songs; offer an
  on‑screen fidel keyboard or accept Latin→Amharic input later.
- **i18n:** Amharic, Tigrinya, Afaan Oromoo as content languages; UI strings translatable.
- **Geez numerals:** optional display formatting for year/track.
- **Accessibility & mobile:** large readable type, dark theme for low‑light projection.

## 6. Legal & content policy (plan early)

- **Lyrics copyright:** song lyrics are generally owned by the artists. Operate on
  permission/goodwill with a clear **takedown process** (as WikiMezmur does).
- **Audio/video:** **embed YouTube only** — never host audio files.
- **Reusing WikiMezmur content:** their content is **CC BY 4.0** — reuse is allowed but
  **attribution is required** (keep the `source` field and show it on the page).
- Add About / License / Disclaimer / Privacy pages and a contact for takedowns.

## 7. Roadmap

**Phase 0 — Foundations**
- Finalize song JSON schema.
- Extract current transliteration + export code into a standalone `mezmur-core` module with tests.

**Phase 1 — MVP (static)**
- Astro site; 5–10 hand‑entered songs.
- Song page: Amharic + transliteration toggle + YouTube + Download slides/PDF.
- Basic search (Pagefind).

**Phase 2 — Browse & structure**
- Singer and Album pages, listings, categories, multi‑language sections.

**Phase 3 — Contributions**
- Submit/Edit form that opens a PR; moderation/review; spam protection.

**Phase 4 — Scale & content**
- Import CC BY content (with attribution); accounts/edit history if needed;
  playlists, favorites, set‑lists for choirs.

## 8. Open questions

- Site name / domain?
- Geez (Ethiopian) year display, or Gregorian, or both?
- Transliteration scheme — keep the current phonetic style, or offer a scholarly (SERA/ALA‑LC) option?
- How will contributions be moderated, and by whom?

## 9. Immediate next steps

1. Approve schema (Section 3) and tech choice (Section 4).
2. I extract the transliteration + export code into `mezmur-core` (with a couple of unit tests).
3. I scaffold the Astro site and build one complete Song page end‑to‑end as a vertical slice.

---

_This is a living document — we'll refine it as decisions are made._
