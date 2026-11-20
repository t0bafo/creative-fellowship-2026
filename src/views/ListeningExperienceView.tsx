import React, { useState, useEffect } from "react";
import { Link, useRouter } from "../router";
import {
  AMAZON_ONE_PAGER,
  AMAZON_OBSERVATIONS_METADATA,
  AMAZON_OBSERVATIONS_LOGS,
  AUTHOR_BIO
} from "../data/masterContent";
import { ArrowLeft, Layers, AlertCircle, FileText, CheckCircle2 } from "lucide-react";

export function ListeningExperienceView() {
  const { hash } = useRouter();
  const [activeTab, setActiveTab] = useState<"one-pager" | "observations">("one-pager");

  useEffect(() => {
    if (hash === "#observations") {
      setActiveTab("observations");
    } else if (hash === "#one-pager") {
      setActiveTab("one-pager");
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-[var(--color-page)] text-[var(--color-text-primary)] transition-colors duration-150">
      {/* Editorial Header */}
      <header className="py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 border-b border-[var(--color-border-subtle)]">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/work"
            className="inline-flex items-center space-x-2 font-mono text-xs text-[var(--color-accent)] hover:text-[var(--color-text-primary)] underline underline-offset-4 decoration-[var(--color-accent)] uppercase tracking-wider mb-8 py-2 px-1 -ml-1 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] min-h-[44px]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO SELECTED WORK</span>
          </Link>

          <div className="space-y-4 sm:space-y-5">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[var(--color-text-muted)]">
              <span className="text-[var(--color-accent)] font-bold">001 // RESEARCH & PRODUCT</span>
              <span className="text-[var(--color-border-control)]">&bull;</span>
              <span className="uppercase px-2.5 py-0.5 border border-[var(--color-border-subtle)] text-[11px] font-semibold">
                Dual-Asset Study
              </span>
              <span className="text-[var(--color-border-control)]">&bull;</span>
              <span>OCTOBER 2026 / AUGUST 2026</span>
            </div>

            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[var(--color-text-primary)]">
              Listening and Fan Experience
            </h1>
            <p className="font-mono text-base sm:text-lg lg:text-xl text-[var(--color-text-secondary)] max-w-3xl leading-relaxed pt-1">
              Observations and Product Proposals for Amazon Music
            </p>
          </div>

          {/* Independent Work Notice */}
          <div className="mt-8 p-5 bg-[var(--color-surface)] border-l-2 border-[var(--color-accent)] font-mono text-xs sm:text-sm text-[var(--color-text-secondary)] leading-[1.6] flex items-start space-x-3.5 rounded-r-sm">
            <AlertCircle className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
            <div>
              <span className="text-[var(--color-text-primary)] font-bold uppercase">Independent Research Disclosure: </span>
              This case study reflects independent product research, qualitative user logs, and UX hypotheses by Tobi Afolayan. It is not commissioned, sponsored, or affiliated with Amazon.com, Inc. or Amazon Music.
            </div>
          </div>

          {/* View Mode Switcher / Sub-navigation with comfortable min-height targets */}
          <div className="mt-10 flex flex-wrap border-b border-[var(--color-border-subtle)] font-mono text-xs">
            <button
              onClick={() => setActiveTab("one-pager")}
              className={`flex items-center space-x-2.5 py-3.5 px-6 min-h-[48px] border-b-2 font-bold tracking-wider uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] ${
                activeTab === "one-pager"
                  ? "border-[var(--color-accent)] text-[var(--color-text-primary)] bg-[var(--color-surface)]"
                  : "border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)]"
              }`}
            >
              <FileText className="w-4 h-4 text-[var(--color-accent)]" />
              <span>01 / PRODUCT ONE-PAGER (OCT 2026)</span>
            </button>
            <button
              onClick={() => setActiveTab("observations")}
              className={`flex items-center space-x-2.5 py-3.5 px-6 min-h-[48px] border-b-2 font-bold tracking-wider uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] ${
                activeTab === "observations"
                  ? "border-[var(--color-accent)] text-[var(--color-text-primary)] bg-[var(--color-surface)]"
                  : "border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)]"
              }`}
            >
              <Layers className="w-4 h-4 text-[var(--color-accent)]" />
              <span>02 / QUALITATIVE OBSERVATIONS (AUG 2026)</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16">
        <div className="max-w-5xl mx-auto">
          {activeTab === "one-pager" ? (
            /* ASSET 1: ONE-PAGER */
            <div id="one-pager" className="space-y-12">
              <div className="border border-[var(--color-border-control)] bg-[var(--color-surface)] p-6 sm:p-10 lg:p-12 rounded-sm shadow-sm">
                <div className="flex flex-wrap justify-between items-center gap-4 font-mono text-xs text-[var(--color-text-muted)] pb-4 mb-6 border-b border-[var(--color-border-subtle)]">
                  <span className="text-[var(--color-accent)] font-bold">EXECUTIVE ONE-PAGER</span>
                  <span>DATE: {AMAZON_ONE_PAGER.date}</span>
                  <span>AUTHOR: {AUTHOR_BIO.name}</span>
                </div>

                <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-[var(--color-text-primary)] mb-4">
                  {AMAZON_ONE_PAGER.title}
                </h2>

                <div className="p-5 bg-[var(--color-surface-raised)] border-l-2 border-[var(--color-accent)] font-mono text-sm text-[var(--color-text-secondary)] leading-[1.7] mb-10 rounded-r-sm">
                  <span className="text-[var(--color-accent)] font-bold block mb-1.5 uppercase text-xs">
                    EXECUTIVE SUMMARY:
                  </span>
                  {AMAZON_ONE_PAGER.executiveSummary}
                </div>

                <div className="space-y-8 mt-12">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-bold">
                    [ CORE PROPOSAL PILLARS ]
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {AMAZON_ONE_PAGER.pillars.map((pillar) => (
                      <div
                        key={pillar.number}
                        className="border border-[var(--color-border-subtle)] bg-[var(--color-surface-raised)] p-6 sm:p-8 flex flex-col justify-between rounded-sm"
                      >
                        <div>
                          <div className="font-mono text-xs text-[var(--color-accent)] font-bold mb-2">
                            PILLAR {pillar.number}
                          </div>
                          <h4 className="font-['Space_Grotesk'] text-lg sm:text-xl font-bold text-[var(--color-text-primary)] mb-5">
                            {pillar.title}
                          </h4>

                          <div className="space-y-5 font-mono text-xs sm:text-sm leading-[1.65] text-[var(--color-text-muted)]">
                            <div>
                              <span className="text-[var(--color-text-secondary)] font-bold block mb-1.5 uppercase text-xs">
                                FRICTION / OPPORTUNITY:
                              </span>
                              <p className="text-[var(--color-text-secondary)]">{pillar.problemSpace}</p>
                            </div>
                            <div>
                              <span className="text-[var(--color-accent)] font-bold block mb-1.5 uppercase text-xs">
                                ARCHITECTURAL PROPOSAL:
                              </span>
                              <p className="text-[var(--color-text-primary)]">{pillar.proposal}</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 pt-4 border-t border-[var(--color-border-subtle)] font-mono text-xs text-[var(--color-text-muted)] flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                          <span>Expected Impact: {pillar.expectedOutcome}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ASSET 2: QUALITATIVE OBSERVATIONS */
            <div id="observations" className="space-y-12">
              <div className="border border-[var(--color-border-control)] bg-[var(--color-surface)] p-6 sm:p-10 lg:p-12 rounded-sm shadow-sm">
                <div className="flex flex-wrap justify-between items-center gap-4 font-mono text-xs text-[var(--color-text-muted)] pb-4 mb-6 border-b border-[var(--color-border-subtle)]">
                  <span className="text-[var(--color-accent)] font-bold">QUALITATIVE LOGS</span>
                  <span>RECORDED: {AMAZON_OBSERVATIONS_METADATA.date}</span>
                  <span>PLATFORM: {AMAZON_OBSERVATIONS_METADATA.platform}</span>
                </div>

                <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-[var(--color-text-primary)] mb-4">
                  Qualitative Listener Observations & System Frictions
                </h2>

                {/* Verbatim Qualification Note */}
                <div className="p-5 bg-[var(--color-surface-raised)] border-l-2 border-[var(--color-accent)] font-mono text-xs sm:text-sm text-[var(--color-text-secondary)] leading-[1.7] mb-10 rounded-r-sm">
                  <span className="text-[var(--color-accent)] font-bold block mb-1.5 uppercase text-xs">
                    METHODOLOGY & QUALIFICATIONS (AUGUST 2026):
                  </span>
                  {AMAZON_OBSERVATIONS_METADATA.methodology}
                </div>

                <div className="space-y-6 sm:space-y-8">
                  {AMAZON_OBSERVATIONS_LOGS.map((item) => (
                    <div
                      key={item.id}
                      className="border border-[var(--color-border-subtle)] bg-[var(--color-surface-raised)] p-6 sm:p-8 transition-colors hover:border-[var(--color-accent)] rounded-sm"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-5 border-b border-[var(--color-border-subtle)] font-mono text-xs">
                        <span className="text-[var(--color-accent)] font-bold">{item.id}</span>
                        <span className="text-[var(--color-text-muted)] uppercase px-2.5 py-0.5 border border-[var(--color-border-subtle)] text-[11px] font-semibold">
                          {item.category}
                        </span>
                      </div>

                      <div className="space-y-5 font-mono text-xs sm:text-sm leading-[1.7]">
                        <div>
                          <span className="text-[var(--color-text-muted)] uppercase block text-[11px] font-bold mb-1.5">
                            OBSERVED BEHAVIOR:
                          </span>
                          <p className="text-[var(--color-text-primary)]">{item.observation}</p>
                        </div>

                        <div>
                          <span className="text-[var(--color-accent)] uppercase block text-[11px] font-bold mb-1.5">
                            LISTENER FRICTION:
                          </span>
                          <p className="text-[var(--color-text-secondary)]">{item.frictionPoint}</p>
                        </div>

                        <div className="pt-3 border-t border-[var(--color-border-subtle)]">
                          <span className="text-[var(--color-accent)] uppercase block text-[11px] font-bold mb-1.5">
                            PROPOSED INTERVENTION:
                          </span>
                          <p className="text-[var(--color-text-primary)] bg-[var(--color-surface)] p-4 border-l-2 border-[var(--color-accent)] rounded-r-sm">
                            {item.proposedIntervention}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Page Navigation */}
      <nav aria-label="Page Navigation" className="border-t border-[var(--color-border-subtle)] bg-[var(--color-page)] py-8 sm:py-10 px-6 sm:px-10 lg:px-16 font-mono text-xs transition-colors duration-150">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
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
