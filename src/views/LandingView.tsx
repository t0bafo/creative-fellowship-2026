import React from "react";
import { Link } from "../router";
import { AUTHOR_BIO, SELECTED_WORK_INDEX } from "../data/masterContent";
import { ArrowRight } from "lucide-react";

export function LandingView() {
  return (
    <div className="min-h-screen bg-[var(--color-page)] text-[var(--color-text-primary)] transition-colors duration-150">
      {/* 01: Hero / Identification */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 border-b border-[var(--color-border-subtle)]">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
          {/* Top Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[var(--color-text-muted)] tracking-wider uppercase pb-5 border-b border-[var(--color-border-subtle)]">
            <div className="flex items-center space-x-3">
              <span className="w-2.5 h-2.5 bg-[var(--color-accent)] shrink-0" aria-hidden="true"></span>
              <span>PORTFOLIO & RESEARCH ARCHIVE</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--color-text-muted)]">LOCATION:</span>
              <span className="text-[var(--color-text-primary)] font-semibold">{AUTHOR_BIO.location}</span>
            </div>
          </div>

          {/* Main Typographic Statement & Introduction */}
          <div className="max-w-4xl space-y-4 sm:space-y-5">
            <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-widest block font-bold">
              [ IDENTITY & PERSPECTIVE ]
            </span>
            <h1 className="font-['Space_Grotesk'] text-5xl sm:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-[0.92] text-[var(--color-text-primary)]">
              TOBI AFOLAYAN
            </h1>
            <p className="font-mono text-lg sm:text-xl lg:text-2xl text-[var(--color-text-secondary)] leading-relaxed pt-1">
              Listener, software engineer, event producer, and graduate student studying music business and technology.
            </p>
            <div className="border-l-2 border-[var(--color-accent)] pl-6 py-2 mt-4 font-mono text-sm sm:text-base text-[var(--color-text-muted)] leading-[1.7] max-w-3xl">
              {AUTHOR_BIO.bio}
            </div>
          </div>

          {/* Direct Primary Call to Action */}
          <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-[var(--color-border-subtle)]">
            <div className="font-mono text-xs text-[var(--color-text-muted)] tracking-wide">
              CURRENT FOCUS: AUDIO SYSTEMS, CATALOG EQUITY & CULTURAL ARCHITECTURE
            </div>
            <Link
              href="/work"
              className="inline-flex items-center justify-center space-x-3 bg-[var(--color-btn-primary-bg)] text-[var(--color-btn-primary-text)] hover:bg-[var(--color-btn-primary-hover-bg)] hover:text-[var(--color-btn-primary-hover-text)] px-8 py-4 uppercase font-bold tracking-wider transition-colors min-h-[48px] rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] shadow-sm"
            >
              <span>ENTER SELECTED WORK INDEX</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 02: Introduction & Approach — Intentional Paper Section */}
      <section className="bg-[var(--color-paper-bg)] text-[var(--color-paper-text)] py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 border-b border-[var(--color-border-subtle)] transition-colors duration-150">
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">
          <div>
            <span className="font-mono text-xs text-[var(--color-paper-accent)] uppercase tracking-widest block mb-3.5 font-bold">
              [ 001 // APPROACH ]
            </span>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold uppercase tracking-tight leading-tight text-[var(--color-paper-text)]">
              How Sound Travels, How Audiences Congregate, How Independent Systems Sustain
            </h2>
          </div>

          <div className="font-mono text-sm sm:text-base text-[var(--color-paper-text)] leading-[1.7] max-w-4xl">
            <p>
              This site is a collection of my work across music, technology, research, and cultural experiences. Rather than organizing around corporate affiliations, the portfolio is grounded in three core questions I continually explore:
            </p>
          </div>

          {/* Three Questions with Generous Spacing and Balanced Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-2">
            <div className="bg-[var(--color-paper-card)] p-6 sm:p-8 border-t-2 border-[var(--color-paper-text)] border border-[var(--color-paper-border)] flex flex-col justify-between rounded-sm shadow-sm">
              <div>
                <span className="font-mono text-xs font-bold text-[var(--color-paper-accent)] tracking-wider block mb-3">
                  01 / IMMERSION & PRESENCE
                </span>
                <p className="text-base sm:text-lg font-sans font-medium text-[var(--color-paper-text)] leading-snug">
                  What happens to collective physical presence when performances are spatialized into headphones and virtual environments?
                </p>
              </div>
              <span className="font-mono text-[11px] text-[var(--color-paper-muted)] uppercase tracking-wider mt-6 pt-4 border-t border-[var(--color-paper-border)] font-semibold">
                SPATIAL AUDIO &bull; LIVE RITUAL
              </span>
            </div>

            <div className="bg-[var(--color-paper-card)] p-6 sm:p-8 border-t-2 border-[var(--color-paper-text)] border border-[var(--color-paper-border)] flex flex-col justify-between rounded-sm shadow-sm">
              <div>
                <span className="font-mono text-xs font-bold text-[var(--color-paper-accent)] tracking-wider block mb-3">
                  02 / INFRASTRUCTURE & DISCOVERY
                </span>
                <p className="text-base sm:text-lg font-sans font-medium text-[var(--color-paper-text)] leading-snug">
                  How does the invisible supply chain of metadata, algorithmic gatekeeping, and streaming payouts shape what gets heard?
                </p>
              </div>
              <span className="font-mono text-[11px] text-[var(--color-paper-muted)] uppercase tracking-wider mt-6 pt-4 border-t border-[var(--color-paper-border)] font-semibold">
                STREAMING SUPPLY CHAINS &bull; RIGHTS
              </span>
            </div>

            <div className="bg-[var(--color-paper-card)] p-6 sm:p-8 border-t-2 border-[var(--color-paper-text)] border border-[var(--color-paper-border)] flex flex-col justify-between rounded-sm shadow-sm">
              <div>
                <span className="font-mono text-xs font-bold text-[var(--color-paper-accent)] tracking-wider block mb-3">
                  03 / ARTIST ENTERPRISE & SOVEREIGNTY
                </span>
                <p className="text-base sm:text-lg font-sans font-medium text-[var(--color-paper-text)] leading-snug">
                  How can emerging independent artists build durable enterprises that preserve catalog equity and direct community patronage?
                </p>
              </div>
              <span className="font-mono text-[11px] text-[var(--color-paper-muted)] uppercase tracking-wider mt-6 pt-4 border-t border-[var(--color-paper-border)] font-semibold">
                CATALOG EQUITY &bull; ENTERPRISE MODELS
              </span>
            </div>
          </div>

          <div className="font-mono text-sm sm:text-base text-[var(--color-paper-text)] leading-[1.7] pt-2">
            <p>
              I explore these questions through multidisciplinary practice: building software, analyzing platform mechanics, documenting qualitative listening frictions, and staging live cultural spaces.
            </p>
          </div>
        </div>
      </section>

      {/* 03: Selected Work Overview (Editorial Index preview) */}
      <section className="bg-[var(--color-page)] text-[var(--color-text-primary)] py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 border-b border-[var(--color-border-subtle)] transition-colors duration-150">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-[var(--color-border-subtle)] gap-4">
            <div>
              <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-widest block mb-3 font-bold">
                [ 002 // SELECTED WORK ]
              </span>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[var(--color-text-primary)]">
                Editorial Index & Research Artifacts
              </h2>
            </div>
            <Link
              href="/work"
              className="font-mono text-xs text-[var(--color-accent)] hover:text-[var(--color-text-primary)] uppercase flex items-center space-x-2 py-2 px-1 underline underline-offset-4 decoration-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded"
            >
              <span>VIEW FULL INDEX</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {SELECTED_WORK_INDEX.map((item) => (
              <div
                key={item.slug}
                className="p-6 sm:p-8 lg:p-10 border border-[var(--color-border-control)] bg-[var(--color-surface)] hover:border-[var(--color-accent)] transition-colors rounded-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="max-w-2xl space-y-3">
                  <div className="flex items-center space-x-4 font-mono text-xs">
                    <span className="text-[var(--color-accent)] font-bold text-sm tracking-wider">{item.number}</span>
                    <span className="text-[var(--color-border-control)]">&bull;</span>
                    <span className="text-[var(--color-text-muted)] uppercase px-2.5 py-0.5 border border-[var(--color-border-subtle)] text-[11px] font-semibold">
                      {item.format}
                    </span>
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[var(--color-text-primary)]">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-[var(--color-text-secondary)] leading-[1.6]">
                    {item.summary}
                  </p>
                </div>

                <div className="flex items-center shrink-0">
                  <Link
                    href={item.route}
                    className="inline-flex items-center space-x-2 font-mono text-xs uppercase px-5 py-3 border border-[var(--color-border-control)] bg-[var(--color-btn-primary-bg)] text-[var(--color-btn-primary-text)] hover:bg-[var(--color-btn-primary-hover-bg)] hover:text-[var(--color-btn-primary-hover-text)] hover:border-[var(--color-accent)] transition-colors min-h-[44px] rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] font-bold"
                  >
                    <span>{item.actionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
