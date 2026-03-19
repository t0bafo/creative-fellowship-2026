# Creative Fellowship 2026 - Digital Artifact

Landing page showcasing my creative identity as a cultural infrastructure builder, created for Google Creative Fellowship application.

**Live Site:** [creative.tobiafo.com](https://creative.tobiafo.com)

---

## The Brief

For the Google Creative Fellowship application, I was asked to create a digital artifact showcasing who I am and what I love to do, creatively.

Rather than a traditional portfolio, I used **Google NotebookLM** to synthesize three personal reflections into multiple formats:
- 19-minute conversational podcast (AI-generated dialogue)
- 2-minute video overview
- 15-slide presentation ("Architecting Culture")

This landing page presents all three formats in a brutalist editorial design that reflects my approach: technical precision meets cultural authenticity.

---

## Design Philosophy

**Aesthetic Direction:** Brutalist Archive
- Inspired by A-COLD-WALL*, Helmut Lang, architectural minimalism
- Monochrome palette (black, bone white) with oxidized copper accents
- Grid-based layout with visible reference numbers
- Metadata as design elements (coordinates, timestamps, project codes)
- Asymmetric content placement
- Hard edges, no smooth transitions

**Why this aesthetic:**
- Engineering precision → Grid systems, measurements, structure
- Cultural authenticity → Raw, unpolished, real
- Infrastructure mindset → Architectural, foundational
- Nigerian → American → Brutalism exists in both contexts

---

## Technical Stack

- **Framework:** Vite + React + TypeScript
- **AI Generation:** Google AI Studio (code generation)
- **Content Source:** Google NotebookLM (audio, video, slides)
- **Hosting:** Vercel
- **Domain:** tobiafo.com
- **Typography:** Space Grotesk (grotesque), IBM Plex Mono (technical)

---

## Development Process

### Phase 1: Content Creation (NotebookLM)
1. Uploaded three source documents to NotebookLM
2. Generated 19-minute audio overview (conversational podcast format)
3. Generated video overview (2-3 minute visual summary)
4. Generated 15-slide presentation deck

### Phase 2: Design Direction
1. Researched brutalist/editorial web design (Pharrell Humanrace, A-COLD-WALL*, SSENSE)
2. Defined aesthetic as "Brutalist Archive"
3. Established color palette and typography system
4. Created design document with section-by-section specifications

### Phase 3: Code Generation (AI Studio)
1. Used Google AI Studio to generate React/TypeScript code
2. Provided detailed design prompt with brutalist specifications
3. Generated complete Vite project with all components

### Phase 4: Deployment
1. Synced AI Studio project to GitHub
2. Connected GitHub repo to Vercel
3. Configured custom domain
4. Automated deployment pipeline (GitHub → Vercel)

---

## File Structure
```
creative-fellowship-2026/
├── src/
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Entry point
│   └── index.css         # Brutalist styling
├── index.html            # HTML shell
├── vite.config.ts        # Build configuration
└── README.md             # This file
```

---

## Key Features

- **Full-bleed media:** Video and audio embeds hit screen edges
- **Section numbering:** Each section labeled (001, 002, 003...)
- **Metadata decoration:** Coordinates, timestamps, project codes in margins
- **Asymmetric layouts:** Content intentionally off-center
- **Brutalist typography:** Condensed grotesque + monospace
- **Instant hover states:** No smooth transitions (brutalism doesn't "fade")
- **Responsive design:** Mobile-first, maintains aesthetic on all screens

---

## Content Embed Sources

- **Video:** YouTube (unlisted)
- **Audio:** SoundCloud (public)
- **Slides:** Google Drive (PDF, public view)

---

## What This Demonstrates

**Creative + Technical Fusion:**
- Using AI tools (NotebookLM, AI Studio) for sophisticated content generation
- Translating design philosophy into technical specifications
- Building editorial-grade interfaces that reflect cultural identity

**Systems Thinking:**
- Multi-format content strategy (audio for depth, video for hook, slides for reference)
- Automated deployment pipeline (edit → commit → deploy)
- Design system that scales (grid, typography, spacing rules)

**Cultural Infrastructure:**
- The landing page itself is infrastructure—a platform to showcase how I build platforms
- Every design decision reinforces the "culture as infrastructure" thesis

---

## Future Iterations

If I were to expand this:
- Add interactive grid visualization showing event growth over time
- Integrate Music DNA API for live playlist generation
- Create parallax scroll sections for each Apollo event
- Add Behind-the-scenes documentation of NotebookLM prompt engineering

---

## Contact

**Tobi Afolayan**  
[tobiafo.com](https://tobiafo.com) | [Apollo Wrldx](https://apollowrldx.com) | [Music DNA](https://musicdna.lovable.app/) | [Raw Assets](https://drive.google.com/drive/folders/1Foex_2JxPonPb2GrhRKwx3JW4TPSczD7?usp=drive_link)

---

**Note:** This project was built in ~4 hours from concept to deployment, demonstrating rapid prototyping and AI-assisted development workflows.
