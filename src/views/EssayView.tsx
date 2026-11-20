import React from "react";
import { Link } from "../router";
import { EssayData, AUTHOR_BIO } from "../data/masterContent";
import { ArrowLeft, Clock, BookOpen } from "lucide-react";

export function EssayView({ essay }: { essay: EssayData }) {
  // Calculate exact dynamic reading time based on total word count (200 words per minute)
  const totalWords = essay.sections.reduce((acc, sec) => {
    return acc + sec.paragraphs.reduce((pAcc, p) => pAcc + p.split(/\s+/).filter(Boolean).length, 0);
  }, 0);
  const readingTimeMin = Math.ceil(totalWords / 200);

  return (
    <article className="min-h-screen bg-[var(--color-page)] text-[var(--color-text-primary)] transition-colors duration-150">
      {/* Editorial Header */}
      <header className="py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 border-b border-[var(--color-border-subtle)]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/work"
            className="inline-flex items-center space-x-2 font-mono text-xs text-[var(--color-accent)] hover:text-[var(--color-text-primary)] underline underline-offset-4 decoration-[var(--color-accent)] uppercase tracking-wider mb-8 py-2 px-1 -ml-1 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] min-h-[44px]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO SELECTED WORK</span>
          </Link>

          <div className="space-y-4 sm:space-y-5">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[var(--color-text-muted)]">
              <span className="text-[var(--color-accent)] font-bold uppercase">{essay.format}</span>
              <span className="text-[var(--color-border-control)]">&bull;</span>
              <span className="flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                <span>{readingTimeMin} MIN READ ({totalWords} WORDS)</span>
              </span>
              <span className="text-[var(--color-border-control)]">&bull;</span>
              <span>BY {AUTHOR_BIO.name.toUpperCase()}</span>
            </div>

            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[var(--color-text-primary)] leading-[0.95]">
              {essay.title}
            </h1>
            <p className="font-mono text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed pt-1">
              {essay.subtitle}
            </p>
          </div>

          {/* Abstract / Scope Callout */}
          <div className="mt-8 p-5 bg-[var(--color-surface)] border-l-2 border-[var(--color-accent)] font-mono text-xs sm:text-sm text-[var(--color-text-secondary)] leading-[1.65] rounded-r-sm">
            <span className="text-[var(--color-accent)] font-bold block mb-1.5 uppercase text-xs">
              CENTRAL THESIS / FOCUS:
            </span>
            {essay.readingFocus}
          </div>

          {/* Quick Table of Contents Anchor Bar */}
          <div className="mt-8 pt-6 border-t border-[var(--color-border-subtle)] font-mono text-xs">
            <span className="text-[var(--color-text-muted)] uppercase block mb-3 text-[11px] font-bold">
              ESSAY SECTIONS:
            </span>
            <div className="flex flex-wrap gap-2">
              {essay.sections.map((section, idx) => {
                const sectionId = `section-${idx + 1}`;
                return (
                  <a
                    key={section.heading}
                    href={`#${sectionId}`}
                    className="px-3 py-1.5 bg-[var(--color-surface)] hover:bg-[var(--color-accent)] text-[var(--color-text-secondary)] hover:text-[var(--color-btn-primary-hover-text)] border border-[var(--color-border-control)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent)] rounded-sm"
                  >
                    0{idx + 1}. {section.heading}
                  </a>
                );
              })}
              <a
                href="#citations"
                className="px-3 py-1.5 bg-[var(--color-surface)] hover:bg-[var(--color-accent)] text-[var(--color-accent)] hover:text-[var(--color-btn-primary-hover-text)] border border-[var(--color-border-control)] transition-colors font-bold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent)] rounded-sm"
              >
                REFERENCES ({essay.citations.length})
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Essay Body — 65ch Max Measure for Optimal Reading Comfort */}
      <main className="py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto space-y-16">
          {essay.sections.map((section, idx) => {
            const sectionId = `section-${idx + 1}`;
            return (
              <section
                key={section.heading}
                id={sectionId}
                className="p-0 border-none space-y-6 scroll-mt-24"
              >
                <div className="flex items-center space-x-3 pb-3 border-b border-[var(--color-border-subtle)]">
                  <span className="font-mono text-xs font-bold text-[var(--color-accent)]">
                    PART 0{idx + 1}
                  </span>
                  <span className="text-[var(--color-border-control)]">/</span>
                  <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[var(--color-text-primary)]">
                    {section.heading}
                  </h2>
                </div>

                <div className="space-y-6 font-mono text-base text-[var(--color-text-secondary)] leading-[1.75]">
                  {section.paragraphs.map((para, pIdx) => (
                    <p key={pIdx}>
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            );
          })}

          {/* Citations & Academic References */}
          <section id="citations" className="pt-12 mt-12 border-t-2 border-[var(--color-border-subtle)] scroll-mt-24">
            <div className="flex items-center space-x-3 mb-6">
              <BookOpen className="w-5 h-5 text-[var(--color-accent)]" />
              <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold uppercase tracking-tight text-[var(--color-text-primary)]">
                SOURCE REFERENCES & CITATIONS ({essay.citations.length})
              </h3>
            </div>
            <ol className="list-decimal list-inside space-y-3 font-mono text-xs text-[var(--color-text-muted)] leading-[1.6]">
              {essay.citations.map((c) => (
                <li key={c.id} className="p-3.5 bg-[var(--color-surface)] border border-[var(--color-border-subtle)] rounded-sm">
                  <span className="text-[var(--color-text-secondary)]">{c.text}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </main>

      {/* Page Navigation */}
      <nav aria-label="Page Navigation" className="border-t border-[var(--color-border-subtle)] bg-[var(--color-page)] py-8 sm:py-10 px-6 sm:px-10 lg:px-16 font-mono text-xs transition-colors duration-150">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href="/work"
            className="hover:text-[var(--color-text-primary)] flex items-center space-x-2 text-[var(--color-accent)] underline underline-offset-4 decoration-[var(--color-accent)] py-2 px-2 -ml-2 rounded-sm min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO SELECTED WORK INDEX</span>
          </Link>
        </div>
      </nav>
    </article>
  );
}
