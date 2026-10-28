# Tobi Afolayan — Editorial Creative Portfolio Evolution (Revised Plan)

Comprehensive architectural and editorial plan to evolve `creative.tobiafo.com` from a single-artifact Google fellowship submission into a unified, high-retention creative portfolio centered on Tobi Afolayan's full body of work across music, technology, research, and cultural infrastructure.

---

### User Corrections & Refined Decisions

> [!IMPORTANT]
> This revised plan incorporates all seven specific corrections and constraints provided in the user review:

1. **Amazon Music Observation Dates & Qualifications**:
   - The qualitative observations are strictly dated **August 2026** as documented in the master file (retracting the prior Nov 2024–Feb 2025 timeline).
   - Retain author's explicit qualifications verbatim: personal listening notes from August 2026 needing checking against the current app, clearly distinguishing individual observations from proposed conceptual ideas.
2. **Production Host Identification & Clean Routes**:
   - **Production Host Identified**: Vercel (verified via `README.md`: `Hosting: Vercel`, `Domain: tobiafo.com`, `creative.tobiafo.com` automated Git pipeline).
   - **Host Rewrite Configuration**: Create `vercel.json` with root rewrites (`[{"source": "/(.*)", "destination": "/"}]`) and secondary `public/_redirects` (`/* /index.html 200`) for universal static host fallback.
   - **Preview vs. Production Boundary**: Verification within the preview/dev environment will test Vite history fallback, browser `popstate` navigation, direct deep-link loading, and hash scrolling. Final production testing on `creative.tobiafo.com` will be documented for user execution post-review. No automated deployment will be run.
3. **Llona Strategy Deck & Transcription Verification**:
   - Verified master PDF layout: 32 total pages. Page 11 provides the study disclaimer; pages 12–32 contain slides 1–21 accompanied by automatic reference transcriptions.
   - Extract slides 1–21 via Ghostscript into `/public/assets/llona/slide_01.png` through `slide_21.png` at high resolution and verify visual rendering and sequential ordering.
   - **Transcription Policy**: Automatic transcriptions will **not** be published as verified accessible text. The reference transcript drawer will prominently display a notice that the transcript is uncorrected machine reference text. Provide clear documentation on where the user can place an original 21-page standalone PDF if desired (`/public/assets/llona/llona-strategy-deck.pdf`).
4. **Verbatim Essays with Dynamic Read Times**:
   - Both published essays (*Presence Beyond the Room* and *The Systems Behind the Music*) will be included 100% verbatim from the master document, preserving every section heading, inline quote, and source citation.
   - Reading times will be calculated dynamically based on actual word count ($words / 200 \text{ wpm}$), eliminating static estimations.
5. **Preservation of Fellowship Experience & Legacy Hash Anchors**:
   - The Google Creative Fellowship experience (*Architecting Culture*) will be preserved in its entirety at `/work/architecting-culture`, retaining the YouTube video embed, SoundCloud player, 15-slide Google Drive presentation link and download button, Apollo WRLDX, Music DNA, and Full Portfolio cards.
   - **Backward-Compatible Hash Mapping**: The router will intercept legacy hash URLs (`/#sec-001` through `/#sec-007` or `/work/architecting-culture#sec-00X`) and smoothly route/scroll to the matching section so previously shared fellowship links resolve seamlessly.
6. **Editorial Simplicity Over Feature Bloat**:
   - Prioritize a clean, scannable Selected Work index, comfortable reading typography, and a dependable slide viewer.
   - Keep interactive controls purposeful and distraction-free: no unnecessary filter chips, live clock tickers, or intrusive reading meters.
7. **Robust Client-Side Routing Architecture**:
   - Standard semantic link behavior (`<a href="..." />`), full browser back/forward support (`popstate`), automatic scroll-to-top on route change, focus management, and an editorial 404 Unknown-Route view with direct return navigation.

---

### 1. Site Structure & Route Map

| Route | View Component | Description & Content Assets |
| :--- | :--- | :--- |
| `/` | `LandingView` | Concise introduction, creative identity (*Cultural Infrastructure Builder*), ethos statement, and clear editorial prompt to *Selected Work*. |
| `/work` | `SelectedWorkView` | Editorial index featuring the five primary works with format labels (*Observations*, *Essay*, *Study*, *Audiovisual Artifact*), central investigative inquiries, and direct route links. |
| `/work/listening-and-fan-experience` | `ListeningExperienceView` | Amazon Music study combining the **Executive One-Pager** (Asset 1) and **Qualitative Observations** (Asset 2, August 2026), with direct view toggle and anchor jumps (`#one-pager`, `#observations`). |
| `/work/presence-beyond-the-room` | `EssayView` | Verbatim published immersive audio essay: *"What does it mean to be at a concert"* (Asset 3), with complete headings and 11 academic/industry source citations. |
| `/work/the-systems-behind-the-music` | `EssayView` | Verbatim published streaming essay: *"What happens after a song reaches us"* (Asset 4), exploring mechanical licensing, MLC matching, and streaming economics, with 10 source citations. |
| `/work/llona-artist-enterprise` | `LlonaStudyView` | Independent educational strategy study (Asset 5). 21-slide interactive viewer with next/prev, slide counter, full-screen toggle, verified slide ordering, and unverified reference transcript drawer with clear qualification notices. |
| `/work/architecting-culture` | `ArchitectingCultureView` | Complete Google Creative Fellowship digital artifact preserving sections 001–007 (YouTube video, SoundCloud audio, 15-slide deck link, Apollo WRLDX, Music DNA, portfolio cards, and raw asset links). |
| `*` (Any unknown route) | `NotFoundView` | Brutalist 404 view matching the design system, displaying error status and immediate links back to Home and Selected Work. |

*Legacy Hash Handling*: Direct visits to `/#sec-001` through `/#sec-007` will automatically navigate to `/work/architecting-culture#sec-00X` and scroll to the section.

---

### 2. Design System & Typography

- **Grid & Identity**: Retain the 12-column grid overlay with subtle concrete lines (`#D4CFC5` at 15% opacity), brutalist coordinate metadata (`EST. KWARA STATE, NIGERIA — 1998`, `CURRENT: BROOKLYN, NY`), and grain texture.
- **Palette**:
  - Background: Obsidian Black (`#0A0A0A`) for hero/media sections; Archival Bone (`#F5F1E8`) for essay reading surfaces.
  - Text: High-contrast Dark Charcoal (`#0A0A0A`) on Bone; Bone (`#F5F1E8`) on Obsidian.
  - Accent: Burnt Copper (`#8B4513`) for numbered indicators (`001`, `002`), metadata callouts, and interactive hover lines.
- **Typography Pairing**:
  - `Space Grotesk` (700) for structural titles and section headers.
  - `IBM Plex Mono` (400) for coordinates, section codes, slide numbers, and tabular metadata.
  - Clean system serif/sans typography with generous line-height (`1.7`) and constrained measure (`68ch` max) for the long-form essays, eliminating monospace reading fatigue while maintaining dark editorial authority.

---

### 3. Technical Implementation Strategy

#### Phase 1: Slide Asset Extraction & Verification
- Execute Ghostscript command to render pages 12 through 32 of `public/assets/aistudio/Creative_Portfolio_Master_Content.docx_4527cc63.pdf` to `/public/assets/llona/slide_01.png` ... `slide_21.png` at 150 DPI.
- Programmatically verify that all 21 PNG files exist, have non-zero dimensions, and correspond to the 21 deck slides.

#### Phase 2: Master Content Store (`src/data/masterContent.ts`)
- Populate exact, verbatim text for:
  - **Site Introductions**: Homepage bio and Selected Work statement from the master document.
  - **Asset 1**: Amazon Music Listener One-Pager (*Listening and fan experience*, October 27, 2026).
  - **Asset 2**: Amazon Music Observations (dated August 2026, with all qualifications and notes).
  - **Asset 3**: *Presence Beyond the Room* full essay text, headings, and 11 citations.
  - **Asset 4**: *The Systems Behind the Music* full essay text, headings, and 10 citations.
  - **Asset 5**: Llona study metadata, slide image references, and reference transcript disclaimers.
  - Dynamic reading time helper: `Math.ceil(essay.text.split(/\s+/).length / 200)`.

#### Phase 3: Router & Navigation Framework (`src/router.tsx`)
- Implement a zero-dependency HTML5 History API router hook (`useRouter`):
  - Listens to `popstate` and synthetic navigation events.
  - Updates URL via `history.pushState`.
  - Resets scroll position to top on page transition.
  - Supports hash scrolling for deep anchors (`#one-pager`, `#observations`, `#sec-001`–`#sec-007`).
  - Provides a persistent, elegant Top Navigation bar (`[ TOBI AFOLAYAN ] ─── [ Home · Selected Work · Contact ]`) that stays unobtrusive and accessible.

#### Phase 4: View Components
- `src/components/Navigation.tsx`: Minimalist header with breadcrumbs and active state indicators.
- `src/views/LandingView.tsx`: Refined hero, intro, selected work teaser, and quick access.
- `src/views/SelectedWorkView.tsx`: Numbered editorial index (`001`–`005`) with clear format tags and problem statements.
- `src/views/ListeningExperienceView.tsx`: One-pager view + August 2026 qualitative observations with toggle view and anchor links.
- `src/views/EssayView.tsx`: Reusable long-form reading container with verbatim text, heading anchors, dynamic read time, and full reference citations.
- `src/views/LlonaStudyView.tsx`: 21-slide viewer with next/prev buttons, slide counter, full-screen toggle, keyboard arrow navigation, and reference transcript drawer.
- `src/views/ArchitectingCultureView.tsx`: 100% faithful preservation of the Google Creative Fellowship digital artifact.
- `src/views/NotFoundView.tsx`: 404 screen with return links.

#### Phase 5: Hosting Configuration & Verification
- Create `/vercel.json` with standard SPA rewrites for Vercel.
- Create `/public/_redirects` for Netlify/Cloudflare compatibility.
- Ensure Vite dev server handles all route paths cleanly.
- Run complete verification: TypeScript compile (`npm run lint`), asset check, route check, accessibility audit, and external link validation.

---

### 4. Verification Checklist (To Be Presented Before Completion)

1. **Content & Verbatim Integrity Check**:
   - Compare final essay text and citations against master PDF.
   - Confirm August 2026 dates on Amazon Music observations.
   - Verify unverified transcript labeling on Llona study.
2. **Slide Order & Visual Check**:
   - Verify 21 slide images extracted and displayed in sequential order.
3. **Route & History Navigation Check**:
   - Verify `/`, `/work`, `/work/listening-and-fan-experience`, `/work/presence-beyond-the-room`, `/work/the-systems-behind-the-music`, `/work/llona-artist-enterprise`, `/work/architecting-culture`, and `/unknown-path`.
   - Verify browser back and forward buttons update view state correctly.
   - Verify `#sec-001` through `#sec-007` hash resolution.
4. **Accessibility Check**:
   - Alt text on all slides, accessible names on icon buttons and navigation links.
   - Keyboard navigation on slide viewer (`ArrowLeft`, `ArrowRight`, `Escape`).
   - High color contrast compliant with WCAG AA standards.
5. **Media & External Link Check**:
   - YouTube embed, SoundCloud player, Google Drive slides link, Apollo WRLDX, Music DNA, and GitHub repo links.
