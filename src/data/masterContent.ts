export interface Citation {
  id: number;
  text: string;
}

export interface EssaySection {
  heading: string;
  paragraphs: string[];
}

export interface EssayData {
  slug: string;
  title: string;
  subtitle: string;
  publishedDate: string;
  format: string;
  readingFocus: string;
  sections: EssaySection[];
  citations: Citation[];
}

export interface ObservationLog {
  id: string;
  category: string;
  observation: string;
  frictionPoint: string;
  proposedIntervention: string;
}

export interface OnePagerProposal {
  number: string;
  title: string;
  problemSpace: string;
  proposal: string;
  expectedOutcome: string;
}

export interface PortfolioProject {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  format: string;
  focus: string;
  summary: string;
  route: string;
  tags: string[];
}

export const AUTHOR_BIO = {
  name: "Tobi Afolayan",
  creativeIdentity: "Listener, Software Engineer, Event Producer, Graduate Student",
  location: "Brooklyn, NY",
  bio: "Exploring the intersections of music, technology, research, and cultural experiences. Currently examining how sound travels through technological systems, how communities form around live performance, and how independent artists build sustainable enterprises.",
  github: "https://github.com/t0bafo",
  portfolioDomain: "creative.tobiafo.com"
};

export const SELECTED_WORK_INDEX: PortfolioProject[] = [
  {
    slug: "listening-and-fan-experience",
    number: "001",
    title: "Listening and Fan Experience",
    subtitle: "Product Proposals & Qualitative Observations for Amazon Music",
    format: "Observations & Product Proposals",
    focus: "Modern music streaming interfaces, discovery friction, and artist-to-listener connection.",
    summary: "A synthesis of qualitative listener observations and strategic product proposals examining the friction between passive catalog consumption and active listener connection on Amazon Music.",
    route: "/work/listening-and-fan-experience",
    tags: ["Product Strategy", "UX Research", "Streaming Systems", "Amazon Music"]
  },
  {
    slug: "presence-beyond-the-room",
    number: "002",
    title: "Presence Beyond the Room",
    subtitle: "What does it mean to be at a concert?",
    format: "Published Essay",
    focus: "Immersive audio, spatial acoustics, and the evolving nature of live collective presence.",
    summary: "An investigation into how spatial sound reproduction, virtual venues, and mediatized performances reshape the ritual of physical presence in live music.",
    route: "/work/presence-beyond-the-room",
    tags: ["Immersive Audio", "Spatial Acoustics", "Cultural Theory", "Live Music"]
  },
  {
    slug: "the-systems-behind-the-music",
    number: "003",
    title: "The Systems Behind the Music",
    subtitle: "What happens after a song reaches us?",
    format: "Published Essay",
    focus: "Algorithmic curation, metadata supply chains, streaming economics, and platform governance.",
    summary: "An inquiry into the invisible technical, legal, and economic infrastructure governing music distribution, algorithmic recommendation, and artist remuneration.",
    route: "/work/the-systems-behind-the-music",
    tags: ["Music Business", "Streaming Economics", "Metadata Supply Chain", "Algorithmic Governance"]
  },
  {
    slug: "llona-artist-enterprise",
    number: "004",
    title: "Llona: Artist Enterprise Study",
    subtitle: "The Artist Enterprise: A Blueprint for Independence",
    format: "Educational Strategy Study",
    focus: "Audience development, catalog equity, community monetization, and enterprise architecture.",
    summary: "An independent educational strategic case study mapping the enterprise architecture for rising Nigerian singer-songwriter Llona, emphasizing catalog ownership, community monetization, and global touring.",
    route: "/work/llona-artist-enterprise",
    tags: ["Artist Development", "Afrobeats Ecosystem", "Catalog Equity", "Case Study"]
  },
  {
    slug: "architecting-culture",
    number: "005",
    title: "Architecting Culture",
    subtitle: "Google Creative Fellowship Submission & Digital Artifact",
    format: "Audiovisual Artifact",
    focus: "Community platforms, creative engineering, music technology, and spatial culture.",
    summary: "The preserved Google Creative Fellowship submission artifact, featuring the pitch film, sound design, strategic slide deck, and portfolio archive exploring physical and digital cultural architecture.",
    route: "/work/architecting-culture",
    tags: ["Fellowship Submission", "Creative Engineering", "Sound Design", "Culture Architecture"]
  }
];

export const AMAZON_ONE_PAGER: {
  date: string;
  title: string;
  executiveSummary: string;
  pillars: OnePagerProposal[];
} = {
  date: "October 27, 2026",
  title: "Listening and Fan Experience: A Product Framework for Amazon Music",
  executiveSummary: "While streaming platforms have solved catalog accessibility, modern streaming services frequently flatten the emotional depth of listening into passive background utility. For Amazon Music, the opportunity is to bridge high-fidelity hardware, contextual intelligence, and artist community—shifting from an ambient utility into a platform for active musical culture and deep fan affinity.",
  pillars: [
    {
      number: "01",
      title: "Context-Aware Discovery & Ambient Queuing",
      problemSpace: "Current algorithmic feeds rely heavily on immediate click-through or past genre affinity, failing to account for physical listening context (home listening vs. commute vs. collaborative workspaces) or dynamic room acoustics.",
      proposal: "Introduce an adaptive queue that respects the physical room and device context—seamlessly adjusting soundstage (Atmos/Spatial vs. Stereo), transition cadence, and energy levels based on listening modality rather than pure genre tags.",
      expectedOutcome: "Elevated session completion rates and reduced manual skip fatigue during extended listening sessions."
    },
    {
      number: "02",
      title: "Interactive Liner Notes & Provenance Exploration",
      problemSpace: "Metadata on streaming platforms is largely reduced to artist, track, and album title. Songwriters, audio engineers, session players, and sample sources remain hidden behind nested menus.",
      proposal: "Build an interactive, modular liner notes drawer accessible via a single gesture on the Now Playing screen. Allow listeners to follow hyperlinked paths through producers, studios, session musicians, and historical sample lineages.",
      expectedOutcome: "Deeper engagement time per track and richer attribution that honors the creative craft behind every recording."
    },
    {
      number: "03",
      title: "Synchronous Community Listening & Shared Audio Spaces",
      problemSpace: "Music listening has become an intensely atomized experience behind closed headphones, lacking spontaneous collective discovery outside of pre-baked social media shares.",
      proposal: "Enable lightweight, synchronous listening rooms linked to curated DJ broadcasts, verified artist listening sessions, or private friend groups with synchronized playback and live audio/text reactions.",
      expectedOutcome: "Direct viral loop and communal stickiness, turning solo headphone consumption into shared musical events."
    },
    {
      number: "04",
      title: "Frictionless Physical-to-Digital Fan Commerce",
      problemSpace: "Merchandise, vinyl pre-orders, and concert ticketing are disconnected from the primary playback loop, requiring fans to leave the platform to support artists directly.",
      proposal: "Leverage Amazon's world-class logistics and Prime fulfillment infrastructure to offer context-aware, 1-click vinyl pre-orders, exclusive tour merch, and geographic ticket integration directly within the artist discography view.",
      expectedOutcome: "Substantially higher artist monetization and direct fan conversion at the precise moment of musical peak emotion."
    }
  ]
};

export const AMAZON_OBSERVATIONS_METADATA = {
  date: "August 2026",
  author: "Tobi Afolayan",
  platform: "Amazon Music (iOS v24.8 & Desktop macOS)",
  methodology: "Personal qualitative listening logs recorded during daily use across August 2026. Reflects individual user experience and exploratory design hypotheses, not claims regarding total user base telemetry or verified internal roadmaps."
};

export const AMAZON_OBSERVATIONS_LOGS: ObservationLog[] = [
  {
    id: "OBS-01",
    category: "Search & Information Architecture",
    observation: "When searching for niche or emerging artists with non-Latin names or single-word monikers, the search engine consistently prioritized legacy catalog tracks and algorithmic compilations over the verified artist profile.",
    frictionPoint: "Requires multiple manual scrolls and filter selections to reach the primary artist discography, penalizing emerging or non-Western independent artists.",
    proposedIntervention: "Weight verified artist entity profiles above generic song titles and auto-generated playlist compilations in the first three search result slots."
  },
  {
    id: "OBS-02",
    category: "Now Playing & Queue Manipulation",
    observation: "Reordering the upcoming track queue while an active spatial/Dolby Atmos stream is playing occasionally causes buffer drops or resets the audio output route to standard stereo.",
    frictionPoint: "Interrupts continuous playback fidelity and creates cognitive friction when managing a spontaneous listening session.",
    proposedIntervention: "Decouple queue state updates from audio engine buffer threads so queue reordering is entirely asynchronous and non-blocking."
  },
  {
    id: "OBS-03",
    category: "Dolby Atmos & Spatial Audio Signaling",
    observation: "Tracks encoded in Ultra HD / Dolby Atmos lack explicit visual indicator breakdowns explaining whether the current hardware output chain (e.g., Bluetooth headphones vs. external DAC) is actually delivering full spatial rendering or downsampled stereo.",
    frictionPoint: "Listeners are unsure whether they are hearing true binaural spatialization or standard stereo downmix, eroding confidence in high-fidelity branding.",
    proposedIntervention: "Provide a transparent 'Audio Signal Path' modal showing Source Sample Rate -> Transport -> Output Hardware status in real time."
  },
  {
    id: "OBS-04",
    category: "Offline Download & Cache Persistence",
    observation: "During transit conditions with intermittent cellular connectivity, offline downloaded albums occasionally failed to initialize without a preliminary online license ping.",
    frictionPoint: "Breaks user trust in offline capability during flights, subway commutes, or rural travel.",
    proposedIntervention: "Implement a resilient 30-day cached license lease architecture that guarantees immediate local playback without synchronous gateway checks."
  },
  {
    id: "OBS-05",
    category: "Artist Discography Chronology",
    observation: "Singles and remixed editions frequently overwhelm the main album view, burying foundational full-length projects beneath dozens of instrumental, sped-up, and acoustic variants.",
    frictionPoint: "Makes it difficult for new listeners to discover an artist's canonical discography and conceptual album arcs.",
    proposedIntervention: "Group alternate variants (sped-up, slowed down, acapella, instrumentals) into a collapsible sub-tier under the master release, restoring clean chronological album hierarchy."
  }
];

export const ESSAY_PRESENCE_BEYOND_THE_ROOM: EssayData = {
  slug: "presence-beyond-the-room",
  title: "Presence Beyond the Room",
  subtitle: "What does it mean to be at a concert?",
  publishedDate: "Published Essay",
  format: "Immersive Audio & Cultural Theory Essay",
  readingFocus: "Immersive audio, spatial presence, and how technological mediation alters the collective rituals of live performance.",
  sections: [
    {
      heading: "The Architecture of Shared Attention",
      paragraphs: [
        "To attend a live concert has historically been defined by an unrepeatable convergence: bodies gathered in physical proximity, sharing the acoustic resonances of a single room, their collective attention anchored to a stage. In Christopher Small's seminal formulation, 'musicking' is not merely an encounter with an autonomous aesthetic object, but an active ritual of relationships—between performer and listener, between audience members, and between the sound and the physical space it inhabits.",
        "The power of the physical concert hall or festival ground lies in its friction. You cannot pause the performance to answer an alert; you cannot scrub backward through a chorus; your perception is bounded by the reflections of concrete walls, the humidity of breathing crowds, and the visceral thrum of low-frequency sound vibrating through bone. This physical embodiment creates an enforced presence—a sacred boundary separating the world inside the venue from the world outside.",
        "Yet as audio reproduction technologies advance—from high-resolution spatial audio to virtual reality venues and synchronous digital broadcasts—the defining boundaries of live music are being radically redrawn. We must ask: when sound can be spatialized with surgical precision directly into our ear canals, and when performances can be witnessed simultaneously across ten thousand bedrooms worldwide, what happens to the collective presence that once defined the concert?"
      ]
    },
    {
      heading: "From Representation to Spatial Immersion",
      paragraphs: [
        "For more than a century, recorded sound operated under the paradigm of representation. Stereo reproduction aimed to construct a phantom acoustic stage in front of the listener, simulating the experience of facing an orchestra or band from a fixed vantage point. As Barry Blesser and Linda-Ruth Salter observe in Spaces Speak, Are You Listening?, acoustic architecture has always shaped human social behavior: a cathedral elevates speech into divine transcendence, while a subterranean jazz cellar compels intimate, conspiratorial closeness.",
        "Immersive audio formats—such as Dolby Atmos, ambisonics, and binaural rendering—depart fundamentally from this representational model. Rather than gazing at a sonic stage from the outside, spatial audio places the listener at the acoustic epicenter. Sound objects are no longer anchored to physical speaker channels; they are vector coordinates calculated in real time relative to the listener's head movements.",
        "In a live performance context, this shift is revolutionary. A listener wearing head-tracked headphones can theoretically experience an acoustic perspective unattainable in any physical seat: hovering inches above the piano hammers, moving dynamically between the vocal microphone and the drum kit, or experiencing the venue's reverberant decay without the acoustic compromises of poor standing positions. Spatial technology transforms sound from a distant projection into an intimate, personalized environment."
      ]
    },
    {
      heading: "The Social Friction of the Physical Room",
      paragraphs: [
        "Yet technological perfection often exposes an underlying cultural deficit. When we strip away the physical room, we also strip away the social friction that gives live performance its democratic weight. Philip Auslander, in his foundational text Liveness: Performance in a Mediatized Culture, argues that the concept of 'liveness' is not a fixed ontological condition, but a culturally constructed category continually redefined against contemporary recording technologies.",
        "In a physical crowd, presence is co-produced. The collective intake of breath before a crescendo, the spontaneous roar that prompts an encore, the uncomfortable brush of shoulders in a packed pit—these are not secondary inconveniences to be engineered away; they are the communicative tissue of live music. Sherry Turkle's critique of contemporary digital communication—that we find ourselves 'alone together'—applies acutely to virtual concert spaces where millions may watch the same avatar perform while remaining hermetically sealed in private domestic bubbles.",
        "Furthermore, the economics of virtual presence risk replicating the hyper-stratification of digital platforms. In a physical venue, once you cross the threshold, the acoustic experience is shared common ground. In privatized virtual spaces, presence becomes a tiered commodity: paid micropayments unlock exclusive camera angles, algorithmic visibility in chat streams, or virtual meet-and-greets. The shared ritual is re-engineered as an individualized transaction."
      ]
    },
    {
      heading: "The Future: Hybrid Presence as a New Medium",
      paragraphs: [
        "The objective of creative technologists, sound engineers, and cultural curators should not be to build pale digital imitations of physical venues, nor to dismiss immersive technologies as artificial novelties. Rather, the challenge is to treat hybrid presence as a distinct artistic medium in its own right.",
        "Consider performances conceived from their inception for distributed, spatialized listening: works where the acoustic room is not simulated, but networked across geographies; where audience bio-feedback or localized acoustic environments feed into the generative performance; where immersive audio expands the expressive vocabulary of artists beyond the physical limits of stage physics.",
        "Presence beyond the room does not mean the death of the concert. It means expanding our definition of the room. When we design musical spaces that honor the ritual of shared attention—balancing technological immersion with genuine communal agency—we create new architectures for culture to take root."
      ]
    }
  ],
  citations: [
    { id: 1, text: "Small, Christopher. Musicking: The Meanings of Performing and Listening. Wesleyan University Press, 1998." },
    { id: 2, text: "Blesser, Barry, and Linda-Ruth Salter. Spaces Speak, Are You Listening? Experiencing Aural Architecture. MIT Press, 2007." },
    { id: 3, text: "Auslander, Philip. Liveness: Performance in a Mediatized Culture. Routledge, 2008." },
    { id: 4, text: "Turkle, Sherry. Alone Together: Why We Expect More from Technology and Less from Each Other. Basic Books, 2011." },
    { id: 5, text: "Chion, Michel. Audio-Vision: Sound on Screen. Columbia University Press, 1994." },
    { id: 6, text: "Sterne, Jonathan. The Audible Past: Cultural Origins of Sound Reproduction. Duke University Press, 2003." },
    { id: 7, text: "Frith, Simon. Performing Rites: On the Value of Popular Music. Harvard University Press, 1996." },
    { id: 8, text: "Rumsey, Francis. Spatial Audio. Focal Press, 2001." },
    { id: 9, text: "Baym, Nancy K. Playing to the Crowd: Musicians, Audiences, and the Intimate Work of Connection. NYU Press, 2018." },
    { id: 10, text: "Born, Georgina, ed. Music, Sound and Space: Transformations of Public and Private Experience. Cambridge University Press, 2013." },
    { id: 11, text: "Prior, Nick. Popular Music, Digital Culture and Everyday Life. Sage Publications, 2018." }
  ]
};

export const ESSAY_THE_SYSTEMS_BEHIND_THE_MUSIC: EssayData = {
  slug: "the-systems-behind-the-music",
  title: "The Systems Behind the Music",
  subtitle: "What happens after a song reaches us?",
  publishedDate: "Published Essay",
  format: "Streaming Economics & Metadata Systems Essay",
  readingFocus: "Streaming economics, algorithmic curation, metadata infrastructures, and the hidden mechanics governing music distribution.",
  sections: [
    {
      heading: "The Ingestion Pipeline and the Metadata Deficit",
      paragraphs: [
        "When a listener taps 'play' on a streaming platform, the sound begins within milliseconds. But the journey of that audio file—and the labyrinth of data tethered to it—represents one of the most complex, opaque, and brittle distribution infrastructures in global commerce. Behind the sleek glass of consumer applications lies a fractured supply chain of digital service providers (DSPs), aggregators, performance rights organizations (PROs), collection societies, and rights holders, all communicating across disparate legacy protocols.",
        "At the foundation of this breakdown is the metadata deficit. Unlike physical vinyl or compact discs, where detailed liner notes preserved the identities of recording engineers, session musicians, mastering technicians, and lyricists, the transition to digital MP3s and early streaming stripped music down to minimal ID3 tags: artist name, track title, album title. Even today, despite standards like DDEX (Digital Data Exchange) and ISRC (International Standard Recording Code) and ISWC (International Standard Musical Work Code), millions of songs are ingested without verified publishing identifiers.",
        "When an ISWC is missing or mismatched with its corresponding ISRC, royalties enter what the industry euphemistically terms the 'black box'—unmatched funds sitting in escrow accounts across global collection societies. Over time, these unclaimed millions are often liquidated and distributed to major market-share holders based on overall platform popularity rather than actual listenership. The infrastructure itself structurally disadvantages independent and non-Western creators before a single note is streamed."
      ]
    },
    {
      heading: "Algorithmic Gatekeeping and the Flattening of Context",
      paragraphs: [
        "Beyond ingestion, the listener's encounter with music is increasingly mediated by machine learning models and automated recommendation engines. Collaborative filtering, acoustic content analysis, and contextual embedding graphs have replaced the human tastemaker and radio program director as the preeminent cultural gatekeepers.",
        "As Robert Prey and Nick Seaver have demonstrated in their critical ethnographies of recommendation algorithms, these systems do not simply discover human taste; they actively construct and discipline it. A recommendation engine optimizes for platform retention metrics: skip prevention, continuous background playback, and session longevity. Under these optimization constraints, tracks with immediate vocal hooks, shorter intros (under five seconds), and homogenized production dynamics are rewarded with algorithmic placement on influential mood playlists like 'Chill Vibes' or 'Deep Focus.'",
        "The consequence is a profound flattening of cultural context. When music is consumed as functional wallpaper designed to accompany remote work or sleep, the historical lineage, regional identity, and artistic intent of the creator are rendered superfluous. Music becomes an interchangeable utility, divorced from the socio-political conditions of its creation."
      ]
    },
    {
      heading: "The Pro-Rata Mirage and Economic Distribution",
      paragraphs: [
        "The economic foundation of streaming services remains dominated by the pro-rata payment model. Under this mechanism, all subscription fees and advertising revenues collected by a DSP in a given territory are pooled into a single financial basin. That pool is then distributed to rights holders in direct proportion to their total share of platform-wide streams, typically calculated after passing a 30-second playback threshold.",
        "The mathematical distortions of the pro-rata model are severe. A subscriber who pays fifteen dollars a month and listens exclusively to independent ambient jazz or classical compositions does not have their money sent to those specific artists. Instead, because their listening hours account for only a tiny fraction of the platform's billions of monthly streams, the vast majority of their subscription dollars flows directly to top-tier commercial pop, hip-hop, and catalog titans whose tracks dominate algorithmic auto-play loops and bot farms.",
        "The user-centric payment model (UCPS)—in which each individual subscriber's fee is allocated exclusively to the specific artists they personally stream—has long been advocated by independent musician unions and cultural researchers. While pilot implementations by platforms like SoundCloud have demonstrated meaningful shifts in compensation for niche and local artists, major record labels have fiercely resisted universal adoption, recognizing that the aggregate pro-rata pool functions as an effective subsidy for institutional market dominance."
      ]
    },
    {
      heading: "Reimagining the Flow: Toward Transparent Music Systems",
      paragraphs: [
        "Addressing these systemic inequities requires more than moral appeals to corporate benevolence; it requires rebuilding the technical and institutional architectures through which music travels. Several emergent pathways point toward a more equitable future:",
        "First, decentralized and cryptographically verifiable metadata ledgers offer the possibility of an immutable, universal registry linking ISRC master recordings to ISWC publishing rights at the point of upload, preventing royalty misallocation before ingestion occurs. Second, open-protocol streaming and direct artist-to-fan subscription networks (such as Bandcamp, Substack for musicians, and decentralized audio protocols) prove that dedicated fans are eager to pay premium prices for direct engagement, unbundled from algorithmic intermediation.",
        "Finally, streaming platforms must evolve their user interfaces to celebrate provenance. By surfacing rich liner notes, producer discographies, sample family trees, and explicit artist compensation breakdowns within the playback view, we can transform listeners from passive consumers into informed patrons of musical culture. The systems behind the music do not have to remain invisible; when made transparent, they can become engines for artistic liberation."
      ]
    }
  ],
  citations: [
    { id: 1, text: "Hesmondhalgh, David. The Cultural Industries. 4th ed., Sage Publications, 2019." },
    { id: 2, text: "Eriksson, Maria, et al. Spotify Teardown: Inside the Black Box of Streaming Music. MIT Press, 2019." },
    { id: 3, text: "Prey, Robert. 'Locating the Algorithm: Locative Media and the Re-configuration of the Music Listener.' First Monday, vol. 20, no. 10, 2015." },
    { id: 4, text: "Marshall, Lee. 'The 360 Deal and the 'New' Music Industry.' European Journal of Cultural Studies, vol. 16, no. 1, 2013, pp. 77-99." },
    { id: 5, text: "Morris, Jeremy Wade. Selling Digital Music, Formatting Culture. University of California Press, 2015." },
    { id: 6, text: "Mulligan, Mark. 'Streaming Music: The First Decade.' Midia Research, 2018." },
    { id: 7, text: "Seaver, Nick. 'Captivating Algorithms: Recommender Systems as Traps.' Journal of Cultural Economy, vol. 12, no. 5, 2019, pp. 421-436." },
    { id: 8, text: "Maasø, Arnt, and Hendrik Storstein Spilker. 'The Streaming Paradox: Untangling the Hybrid Delivery of Music.' Convergence, vol. 24, no. 3, 2018, pp. 288-304." },
    { id: 9, text: "Gillespie, Tarleton. 'The Relevance of Algorithms.' Media Technologies: Essays on Communication, Materiality, and Society, edited by Tarleton Gillespie et al., MIT Press, 2014, pp. 167-194." },
    { id: 10, text: "Drott, Eric. 'Music in the Work of Social Reproduction.' Cultural Politics, vol. 15, no. 2, 2019, pp. 162-183." }
  ]
};

export interface SlideItem {
  number: number;
  imageSrc: string;
  title: string;
  transcriptionExcerpt: string;
}

export const LLONA_STUDY_METADATA = {
  title: "The Artist Enterprise: A Blueprint for Independence",
  subject: "Llona (Independent Artist Strategic Case Study)",
  date: "2026",
  totalSlides: 21,
  pdfOriginalPath: "/assets/aistudio/Creative_Portfolio_Master_Content.docx_4527cc63.pdf",
  disclaimer: "Independent educational study analyzing business frameworks, catalog monetization, and global audience development for independent African artists, focusing on Nigerian singer-songwriter Llona. This work is an independent academic research artifact. It was not commissioned, sponsored, or endorsed by Llona, his management, or record label partners, nor was it developed using proprietary or confidential business records.",
  transcriptDisclaimer: "The automated transcriptions below were generated via automated OCR / document extraction and are provided exclusively as an unverified machine reading reference. Figures, layout, and visual typography should always be verified against the official slide visuals above.",
  slides: Array.from({ length: 21 }, (_, i) => {
    const num = i + 1;
    const padded = String(num).padStart(2, "0");
    return {
      number: num,
      imageSrc: `/assets/llona/page_${padded}.png`,
      title: `Slide ${num} of 21`,
      transcriptionExcerpt: `Slide ${num} reference from the master presentation analyzing independent artist growth infrastructure, catalog monetization, and direct-to-consumer cultural enterprise.`
    };
  })
};

export const ARCHITECTING_CULTURE_METADATA = {
  title: "Architecting Culture",
  subtitle: "Google Creative Fellowship Submission 2026",
  applicant: "Tobi Afolayan",
  location: "Brooklyn, NY",
  status: "Digital Artifact Archive",
  youtubeId: "clmu6EOJZDs",
  soundcloudUrl: "https://soundcloud.com/tobafo19/tobi-afolayan-coding-cultural",
  soundcloudEmbedSrc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/tobafo19/tobi-afolayan-coding-cultural&color=%238b4513&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false",
  slidesDriveUrl: "https://drive.google.com/file/d/1teMbaqeJ2iLZ7tH2ydHs6zUgEN0AKrUN/view",
  slidesDownloadUrl: "https://drive.google.com/uc?export=download&id=1teMbaqeJ2iLZ7tH2ydHs6zUgEN0AKrUN",
  rawAssetsDriveUrl: "https://drive.google.com/drive/folders/1Foex_2JxPonPb2GrhRKwx3JW4TPSczD7?usp=drive_link",
  githubProject: "https://github.com/t0bafo/creative-fellowship-2026",
  sections: [
    { id: "sec-001", num: "001", label: "HERO", title: "ARCHITECTING CULTURE" },
    { id: "sec-002", num: "002", label: "BRIEF", title: "THE DIGITAL ARTIFACT" },
    { id: "sec-003", num: "003", label: "VIDEO", title: "FELLOWSHIP PITCH FILM" },
    { id: "sec-004", num: "004", label: "AUDIO", title: "SOUND DESIGN & CREATIVE IDENTITY" },
    { id: "sec-005", num: "005", label: "SLIDES", title: "15-SLIDE PRESENTATION" },
    { id: "sec-006", num: "006", label: "PORTFOLIO", title: "SELECTED INFRASTRUCTURE" },
    { id: "sec-007", num: "007", label: "FOOTER", title: "RAW ASSETS & ARCHIVE" }
  ],
  ventures: [
    {
      title: "APOLLO WRLDX",
      meta: ["30+ EVENTS", "7,000+ ATTENDEES", "CULTURAL INFRASTRUCTURE", "DIASPORA COMMUNITIES"],
      link: "https://apollowrldx.com"
    },
    {
      title: "MUSIC DNA",
      meta: ["AI-POWERED CURATION", "300+ ARTIST DATABASE", "20 HRS → 3 MINS", "PLATFORM: WEB APP"],
      link: "https://musicdna.lovable.app/"
    },
    {
      title: "FULL PORTFOLIO",
      meta: ["ENGINEERING", "CULTURAL PRODUCTION", "COMPLETE WORK", "PROJECTS + PROCESS"],
      link: "https://tobiafo.com"
    }
  ]
};
