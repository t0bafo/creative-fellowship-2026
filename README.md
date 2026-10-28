# Tobi Afolayan — Portfolio & Research Archive

Editorial site for work across music, technology, research, and live culture. The Google Creative Fellowship artifact is one piece in the archive, preserved at `/work/architecting-culture`.

**Live site:** [creative.tobiafo.com](https://creative.tobiafo.com)  
**Repository:** [t0bafo/creative-fellowship-2026](https://github.com/t0bafo/creative-fellowship-2026)

---

## What the site is

The index introduces the practice. Selected Work is the catalog. Each piece is a route with its own format: product writing, published essays, a slide study, or the fellowship audiovisual artifact.

The through-line is how sound moves through systems: listening interfaces, live presence, streaming infrastructure, and independent artist enterprises.

| # | Piece | Route | What it is |
|:---:|:---|:---|:---|
| 001 | Listening and Fan Experience | `/work/listening-and-fan-experience` | Independent listener notes and product ideas for Amazon Music. A one-pager and an observations log. Not commissioned or endorsed by Amazon. |
| 002 | Presence Beyond the Room | `/work/presence-beyond-the-room` | Essay on spatial sound, virtual venues, and what it means to be at a concert. |
| 003 | The Systems Behind the Music | `/work/the-systems-behind-the-music` | Essay on metadata, algorithmic curation, streaming economics, and platform governance. |
| 004 | Llona: Artist Enterprise Study | `/work/llona-artist-enterprise` | 21-slide educational strategy study on catalog equity, community monetization, and touring. Independent research, not an artist endorsement. |
| 005 | Architecting Culture | `/work/architecting-culture` | Preserved Creative Fellowship submission: pitch film, sound piece, 15-slide deck, and links to Apollo Wrldx, Music DNA, and the wider portfolio. |

Navigation is Index, Selected Work, and Archive (Fellowship). Old fellowship anchors such as `#sec-001` on `/` redirect into `/work/architecting-culture`.

---

## How the content review shows up

Long-form reading on the public pages comes from a reviewed source, not from copy left inside the view components.

`src/data/verifiedContent.json` holds the text that readers see, as heading and paragraph blocks:

- `onePager` and `observations` — Listening and Fan Experience
- `concert` — Presence Beyond the Room
- `streaming` — The Systems Behind the Music

`src/components/VerifiedReading.tsx` renders those blocks and turns bare URLs into links. `EssayView` chooses `concert` or `streaming` from the essay slug. The listening page switches between the one-pager and the observations log.

`src/data/masterContent.ts` still owns the catalog around that reading: the author bio, the selected-work index, essay routing metadata, Llona slide metadata, and the fellowship embeds (YouTube, SoundCloud, slide deck, raw assets).

The Llona study is still an image deck. The page states that a verified text transcript is not available yet, so that piece was not folded into `verifiedContent.json`.

To change published prose, edit `verifiedContent.json`. To change titles, routes, tags, or fellowship media, edit `masterContent.ts`.

---

## Design

Brutalist archive: bone white on near-black, oxidized copper (`#8B4513`), Space Grotesk for titles, IBM Plex Mono for metadata. Numbered sections, hard edges, and a visible grid. The fellowship page keeps the original full-bleed video, audio, and slide treatment.

---

## Stack

- Vite, React 19, TypeScript
- Tailwind CSS 4
- Client-side router in `src/router.tsx` (no React Router)
- Vercel, with a rewrite so every path serves the SPA
- Domain: creative.tobiafo.com

```bash
npm install
npm run dev    # http://localhost:3000
npm run build
npm run lint   # tsc --noEmit
```

---

## File structure

```
src/
├── App.tsx                         # Route switch
├── router.tsx                      # History API, legacy #sec-* redirects, Link
├── index.css
├── components/
│   ├── Navigation.tsx
│   └── VerifiedReading.tsx         # Renders verified heading/paragraph blocks
├── data/
│   ├── masterContent.ts            # Index, bios, metadata, fellowship embeds
│   └── verifiedContent.json        # Reviewed long-form reading
└── views/
    ├── LandingView.tsx
    ├── SelectedWorkView.tsx
    ├── ListeningExperienceView.tsx
    ├── EssayView.tsx
    ├── LlonaStudyView.tsx
    ├── ArchitectingCultureView.tsx
    └── NotFoundView.tsx
```

Fellowship media lives outside the repo: a public YouTube film, a public SoundCloud piece, and a public Google Drive deck. Links are in `ARCHITECTING_CULTURE_METADATA`.

---

## Related work

The archive points outward to the rest of the practice:

- [tobiafo.com](https://tobiafo.com)
- [Apollo Wrldx](https://apollowrldx.com)
- [Music DNA](https://musicdna.lovable.app/)
- [GitHub](https://github.com/t0bafo)
- [Fellowship raw assets](https://drive.google.com/drive/folders/1Foex_2JxPonPb2GrhRKwx3JW4TPSczD7?usp=drive_link)

---

**Tobi Afolayan** — Brooklyn, NY
