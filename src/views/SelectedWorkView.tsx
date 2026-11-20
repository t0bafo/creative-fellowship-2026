import React from "react";
import { Link } from "../router";
import { SELECTED_WORK_INDEX } from "../data/masterContent";
import { ArrowRight, ArrowLeft } from "lucide-react";

export function SelectedWorkView() {
  return (
    <div className="min-h-screen bg-[var(--color-page)] text-[var(--color-text-primary)] transition-colors duration-150">
      {/* Header Banner */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 border-b border-[var(--color-border-subtle)]">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 font-mono text-xs text-[var(--color-accent)] hover:text-[var(--color-text-primary)] underline underline-offset-4 decoration-[var(--color-accent)] uppercase tracking-wider py-2 px-1 -ml-1 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] min-h-[44px]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN HOME</span>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[var(--color-border-subtle)]">
            <div>
              <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-widest block mb-3.5 font-bold">
                [ 002 // SELECTED WORK ]
              </span>
              <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[var(--color-text-primary)]">
                SELECTED WORK
              </h1>
            </div>
            <p className="font-mono text-xs sm:text-sm text-[var(--color-text-secondary)] max-w-md leading-[1.6]">
              An index of independent essays, qualitative observations, enterprise strategy studies, and creative technology artifacts.
            </p>
          </div>
        </div>
      </section>

      {/* Index List — Spacious Editorial Entries */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16">
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
          {SELECTED_WORK_INDEX.map((work) => (
            <article
              key={work.slug}
              className="border border-[var(--color-border-control)] bg-[var(--color-surface)] p-6 sm:p-10 lg:p-12 hover:border-[var(--color-accent)] transition-colors rounded-sm"
            >
              <div className="space-y-6">
                {/* Number & Format Header */}
                <div className="flex items-center space-x-4 font-mono text-xs">
                  <span className="font-bold text-[var(--color-accent)] text-sm tracking-wider">
                    {work.number}
                  </span>
                  <span className="text-[var(--color-border-control)]">&bull;</span>
                  <span className="px-2.5 py-0.5 border border-[var(--color-border-subtle)] text-[var(--color-text-muted)] uppercase text-[11px] tracking-wide font-semibold">
                    {work.format}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-2">
                  <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[var(--color-text-primary)]">
                    <Link
                      href={work.route}
                      className="hover:text-[var(--color-accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-sm"
                    >
                      {work.title}
                    </Link>
                  </h2>
                  <p className="font-mono text-xs sm:text-sm text-[var(--color-text-muted)] pt-1">
                    {work.subtitle}
                  </p>
                </div>

                {/* Single Concise Description */}
                <p className="font-mono text-sm sm:text-base text-[var(--color-text-secondary)] leading-[1.7] max-w-3xl pt-1">
                  {work.summary}
                </p>

                {/* Action Button */}
                <div className="pt-6 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
                  <Link
                    href={work.route}
                    className="inline-flex items-center space-x-3 bg-[var(--color-btn-primary-bg)] text-[var(--color-btn-primary-text)] hover:bg-[var(--color-btn-primary-hover-bg)] hover:text-[var(--color-btn-primary-hover-text)] border border-[var(--color-border-control)] hover:border-[var(--color-accent)] px-6 py-3.5 uppercase font-bold tracking-wider font-mono text-xs transition-colors min-h-[44px] rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                  >
                    <span>{work.actionLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
