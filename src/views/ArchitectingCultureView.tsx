import React from "react";
import { Link } from "../router";
import { ARCHITECTING_CULTURE_METADATA } from "../data/masterContent";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";

export function ArchitectingCultureView() {
  return (
    <div className="min-h-screen bg-[var(--color-page)] text-[var(--color-text-primary)] transition-colors duration-150">
      {/* Top Banner & Context Disclosure */}
      <div className="bg-[var(--color-section-alt)] border-b border-[var(--color-border-subtle)] px-6 py-4 font-mono text-xs text-[var(--color-text-muted)]">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <Link
            href="/work"
            className="inline-flex items-center space-x-2 text-[var(--color-accent)] hover:text-[var(--color-text-primary)] underline underline-offset-4 decoration-[var(--color-accent)] uppercase tracking-wider py-2 px-1 -ml-1 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] min-h-[44px]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO SELECTED WORK</span>
          </Link>
          <div className="flex items-center space-x-2 text-[var(--color-text-muted)]">
            <span className="w-2 h-2 bg-[var(--color-accent)]"></span>
            <span>PRESERVED DIGITAL ARTIFACT // GOOGLE CREATIVE FELLOWSHIP 2026</span>
          </div>
        </div>
      </div>

      {/* 001 HERO */}
      <section id="sec-001" className="min-h-[90vh] relative flex flex-col justify-between p-6 sm:p-12 lg:p-16 border-b border-[var(--color-border-subtle)] bg-[var(--color-page)] text-[var(--color-text-primary)]">
        {/* Top Meta */}
        <div className="w-full flex justify-between items-start font-mono text-xs text-[var(--color-text-muted)]">
          <div>
            <div className="text-[var(--color-accent)] font-bold">PROJECT: ARCHITECTING CULTURE</div>
            <div>STATUS: PRESERVED FELLOWSHIP ARTIFACT</div>
          </div>
          <div className="text-right">
            <div>APPLICANT: {ARCHITECTING_CULTURE_METADATA.applicant}</div>
            <div>LOCATION: {ARCHITECTING_CULTURE_METADATA.location}</div>
          </div>
        </div>

        {/* Center Display */}
        <div className="my-auto py-12 text-center">
          <span className="section-num font-mono text-sm tracking-widest text-[var(--color-accent)] block mb-4">[ 001 // THE ENTRY ]</span>
          <h1 className="grotesk-72 text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
            ARCHITECTING CULTURE
          </h1>
          <p className="font-mono text-sm sm:text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto uppercase tracking-wider">
            GOOGLE CREATIVE FELLOWSHIP 2026 SUBMISSION
          </p>
        </div>

        {/* Bottom Nav Anchors */}
        <div className="w-full flex flex-wrap justify-between items-end gap-4 font-mono text-[11px] text-[var(--color-text-muted)] pt-6 border-t border-[var(--color-border-subtle)]">
          <div>MEDIA: 16:9 4K VIDEO &bull; SOUNDCLOUD AUDIO &bull; 15-SLIDE DECK</div>
          <div className="flex flex-wrap gap-4 font-semibold">
            <a href="#sec-002" className="hover:text-[var(--color-text-primary)] underline underline-offset-4 decoration-[var(--color-border-control)]">002 BRIEF</a>
            <a href="#sec-003" className="hover:text-[var(--color-text-primary)] underline underline-offset-4 decoration-[var(--color-border-control)]">003 VIDEO</a>
            <a href="#sec-004" className="hover:text-[var(--color-text-primary)] underline underline-offset-4 decoration-[var(--color-border-control)]">004 AUDIO</a>
            <a href="#sec-005" className="hover:text-[var(--color-text-primary)] underline underline-offset-4 decoration-[var(--color-border-control)]">005 SLIDES</a>
            <a href="#sec-006" className="hover:text-[var(--color-text-primary)] underline underline-offset-4 decoration-[var(--color-border-control)]">006 PORTFOLIO</a>
          </div>
        </div>
      </section>

      {/* 002 BRIEF — Intentional Paper Section */}
      <section id="sec-002" className="bg-[var(--color-paper-bg)] text-[var(--color-paper-text)] p-6 sm:p-12 lg:p-16 border-b border-[var(--color-border-subtle)] transition-colors duration-150">
        <div className="content-wrap max-w-4xl mx-auto">
          <span className="font-mono text-xs text-[var(--color-paper-accent)] uppercase tracking-widest block mb-4 font-bold">
            [ 002 // THE BRIEF ]
          </span>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[var(--color-paper-text)] mb-8 leading-tight">
            Connecting Physical Venues, Algorithmic Discovery, and Cultural Equity
          </h2>
          <div className="font-mono text-sm sm:text-base text-[var(--color-paper-text)] space-y-6 leading-relaxed">
            <p>
              Culture is not an abstraction—it is architected through physical spaces, social gatherings, and the technological systems that mediate human expression.
            </p>
            <p>
              This artifact synthesizes creative engineering, sound design, and event production into a cohesive proposal for the Google Creative Fellowship. It demonstrates how community-led music spaces can be amplified through thoughtful, ethical technological interventions.
            </p>
            <div className="p-6 bg-[var(--color-paper-card)] border-l-4 border-[var(--color-paper-accent)] font-mono text-xs sm:text-sm text-[var(--color-paper-text)] border border-[var(--color-paper-border)] rounded-r-sm">
              "We must build tools that preserve the friction and communion of human gathering, rather than engineering systems that atomize audiences into isolated data streams."
            </div>
          </div>
        </div>
      </section>

      {/* 003 VIDEO */}
      <section id="sec-003" className="video-section bg-[var(--color-page)] text-[var(--color-text-primary)] p-6 sm:p-12 lg:p-16 border-b border-[var(--color-border-subtle)]">
        <div className="content-wrap max-w-5xl mx-auto space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[var(--color-text-muted)]">
            <span className="text-[var(--color-accent)] font-bold">[ 003 // VISUAL ARTIFACT ]</span>
            <span>YOUTUBE EMBED &bull; 1080P HD</span>
          </div>

          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[var(--color-text-primary)]">
            Creative Fellowship Pitch Film
          </h2>

          <div className="aspect-video w-full bg-[#111111] border border-[var(--color-border-control)] overflow-hidden rounded-sm">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${ARCHITECTING_CULTURE_METADATA.youtubeId}?rel=0`}
              title="Google Creative Fellowship Submission Video"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="font-mono text-xs text-[var(--color-text-muted)] flex items-center justify-between">
            <span>DIRECT LINK: youtube.com/watch?v={ARCHITECTING_CULTURE_METADATA.youtubeId}</span>
            <a
              href={`https://www.youtube.com/watch?v=${ARCHITECTING_CULTURE_METADATA.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:text-[var(--color-text-primary)] underline underline-offset-4 decoration-[var(--color-accent)] flex items-center space-x-1"
            >
              <span>WATCH ON YOUTUBE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 004 AUDIO — Intentional Paper Section */}
      <section id="sec-004" className="audio-section bg-[var(--color-paper-bg)] text-[var(--color-paper-text)] p-6 sm:p-12 lg:p-16 border-b border-[var(--color-border-subtle)] transition-colors duration-150">
        <div className="content-wrap max-w-5xl mx-auto space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[var(--color-paper-accent)]">
            <span className="font-bold">[ 004 // SOUND DESIGN & DIRECTION ]</span>
            <span className="text-[var(--color-paper-muted)] font-semibold">SOUNDCLOUD STREAM</span>
          </div>

          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[var(--color-paper-text)]">
            Sonic Architecture & Audio Direction
          </h2>

          <div className="bg-[var(--color-paper-card)] border-2 border-[var(--color-paper-text)] p-6 space-y-4 rounded-sm shadow-sm">
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={ARCHITECTING_CULTURE_METADATA.soundcloudEmbedSrc}
              title="Creative Fellowship Audio Piece"
            ></iframe>
            <div className="font-mono text-xs text-[var(--color-paper-muted)] flex justify-between items-center">
              <span>AUDIO TRACK: SOUND DESIGN DIRECTION &bull; NOTEBOOKLM</span>
              <a
                href={ARCHITECTING_CULTURE_METADATA.soundcloudUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-paper-accent)] font-bold flex items-center space-x-1 hover:underline"
              >
                <span>OPEN SOUNDCLOUD</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 005 SLIDES */}
      <section id="sec-005" className="slides-section bg-[var(--color-page)] text-[var(--color-text-primary)] p-6 sm:p-12 lg:p-16 border-b border-[var(--color-border-subtle)]">
        <div className="content-wrap max-w-4xl mx-auto text-center space-y-8">
          <span className="section-num font-mono text-xs tracking-widest text-[var(--color-accent)] font-bold">[ 005 // PRESENTATION DECK ]</span>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[var(--color-text-primary)]">
            15-Slide Creative Deck
          </h2>
          <p className="font-mono text-sm sm:text-base text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Detailed breakdown of methodology, case studies, technology architecture, and cultural impact frameworks prepared for the Google Creative Fellowship committee.
          </p>

          <div className="pt-6 flex flex-wrap justify-center gap-4">
            <a
              href={ARCHITECTING_CULTURE_METADATA.slidesDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="brutalist-btn btn-filled rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
            >
              VIEW SLIDES (DRIVE) &rarr;
            </a>
            <a
              href={ARCHITECTING_CULTURE_METADATA.slidesDownloadUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="brutalist-btn btn-outline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
            >
              DOWNLOAD PDF
            </a>
          </div>
        </div>
      </section>

      {/* 006 PORTFOLIO — Intentional Paper Section */}
      <section id="sec-006" className="portfolio bg-[var(--color-paper-bg)] text-[var(--color-paper-text)] p-6 sm:p-12 lg:p-16 border-b border-[var(--color-border-subtle)] transition-colors duration-150">
        <div className="content-wrap max-w-6xl mx-auto space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[var(--color-paper-accent)]">
            <span className="font-bold">[ 006 // VENTURES & ARCHIVE ]</span>
            <span className="text-[var(--color-paper-muted)] font-semibold">PRODUCTION PLATFORMS</span>
          </div>

          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[var(--color-paper-text)]">
            Selected Ventures & Artifacts
          </h2>

          <div className="portfolio-grid grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARCHITECTING_CULTURE_METADATA.ventures.map((v) => (
              <a
                key={v.title}
                href={v.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-card bg-[var(--color-paper-card)] border-2 border-[var(--color-paper-text)] text-[var(--color-paper-text)] p-6 sm:p-8 rounded-sm hover:border-[var(--color-paper-accent)] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-xs text-[var(--color-paper-accent)] uppercase mb-2 font-bold">VENTURE</div>
                  <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-[var(--color-paper-text)] mb-3">{v.title}</h3>
                  <div className="h-px bg-[var(--color-paper-border)] my-3 w-full"></div>
                  <ul className="space-y-1 font-mono text-xs text-[var(--color-paper-muted)]">
                    {v.meta.map((m, mIdx) => (
                      <li key={mIdx}>{m}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--color-paper-border)] flex items-center justify-between font-mono text-xs uppercase font-bold text-[var(--color-paper-accent)]">
                  <span>LAUNCH SITE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 007 RAW ASSETS & PROJECT REPOSITORY */}
      <section id="sec-007" className="footer bg-[var(--color-section-alt)] text-[var(--color-text-primary)] p-8 sm:p-16 border-t border-[var(--color-border-subtle)] font-mono text-xs">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <div className="text-[var(--color-accent)] font-bold uppercase tracking-widest text-sm">
            [ 007 // RAW ASSETS & PROJECT REPOSITORY ]
          </div>
          <div className="text-sm text-[var(--color-text-secondary)]">
            TOBI AFOLAYAN &bull; BROOKLYN, NY &bull; CREATIVE FELLOWSHIP 2026
          </div>
          <div className="h-px bg-[var(--color-border-subtle)] w-24 mx-auto"></div>
          <div className="space-y-3">
            <div>
              <span>RAW ASSETS: </span>
              <a
                href={ARCHITECTING_CULTURE_METADATA.rawAssetsDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent)] underline underline-offset-4 decoration-[var(--color-accent)] hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent)]"
              >
                GOOGLE DRIVE ARCHIVE
              </a>
            </div>
            <div>
              <span>SOURCE CODE REPOSITORY: </span>
              <a
                href={ARCHITECTING_CULTURE_METADATA.githubProject}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent)] underline underline-offset-4 decoration-[var(--color-accent)] hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent)]"
              >
                {ARCHITECTING_CULTURE_METADATA.githubProject}
              </a>
            </div>
            <p className="text-[11px] text-[var(--color-text-muted)] pt-2 max-w-xl mx-auto">
              All material created independently for fellowship review. Preserved as an audiovisual artifact in the Selected Work index.
            </p>
          </div>
        </div>
      </section>

      {/* Page Navigation */}
      <nav aria-label="Page Navigation" className="border-t border-[var(--color-border-subtle)] bg-[var(--color-page)] py-8 sm:py-10 px-6 sm:px-10 lg:px-16 font-mono text-xs transition-colors duration-150">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/work"
            className="hover:text-[var(--color-text-primary)] flex items-center space-x-2 text-[var(--color-accent)] underline underline-offset-4 decoration-[var(--color-accent)] py-2 px-2 -ml-2 rounded-sm min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO SELECTED WORK</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
