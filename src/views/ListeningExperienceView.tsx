import React, { useState, useEffect } from "react";
import { Link, useRouter } from "../router";
import {
  AMAZON_ONE_PAGER,
  AMAZON_OBSERVATIONS_METADATA,
  AMAZON_OBSERVATIONS_LOGS,
  AUTHOR_BIO
} from "../data/masterContent";
import { ArrowLeft, ArrowUpRight, Compass, Layers, AlertCircle, FileText, CheckCircle2 } from "lucide-react";

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
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F1E8]">
      {/* Editorial Header */}
      <header className="p-6 sm:p-12 lg:p-16 border-b border-[#262626]">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/work"
            className="inline-flex items-center space-x-2 font-mono text-xs text-[#8B4513] hover:text-[#F5F1E8] uppercase tracking-wider mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO SELECTED WORK</span>
          </Link>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#A39A8B]">
              <span className="text-[#8B4513] font-bold">001 // RESEARCH & PRODUCT</span>
              <span className="text-[#333333]">&bull;</span>
              <span className="uppercase px-2 py-0.5 border border-[#333333]">
                Dual-Asset Study
              </span>
              <span className="text-[#333333]">&bull;</span>
              <span>OCTOBER 2026 / AUGUST 2026</span>
            </div>

            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#F5F1E8]">
              Listening and Fan Experience
            </h1>
            <p className="font-mono text-base sm:text-lg text-[#D4CFC5] max-w-3xl leading-relaxed">
              Observations and Product Proposals for Amazon Music
            </p>
          </div>

          {/* Independent Work Notice */}
          <div className="mt-8 p-4 bg-[#141414] border-l-2 border-[#8B4513] font-mono text-xs text-[#A39A8B] leading-relaxed flex items-start space-x-3">
            <AlertCircle className="w-4 h-4 text-[#8B4513] shrink-0 mt-0.5" />
            <div>
              <span className="text-[#F5F1E8] font-bold uppercase">Independent Research Disclosure: </span>
              This case study reflects independent product research, qualitative user logs, and UX hypotheses by Tobi Afolayan. It is not commissioned, sponsored, or affiliated with Amazon.com, Inc. or Amazon Music.
            </div>
          </div>

          {/* View Mode Switcher / Sub-navigation */}
          <div className="mt-10 flex border-b border-[#262626] font-mono text-xs">
            <button
              onClick={() => setActiveTab("one-pager")}
              className={`flex items-center space-x-2 py-4 px-6 border-b-2 font-bold tracking-wider uppercase transition-colors ${
                activeTab === "one-pager"
                  ? "border-[#8B4513] text-[#F5F1E8] bg-[#141414]"
                  : "border-transparent text-[#A39A8B] hover:text-[#F5F1E8]"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>01 / PRODUCT ONE-PAGER (OCT 2026)</span>
            </button>
            <button
              onClick={() => setActiveTab("observations")}
              className={`flex items-center space-x-2 py-4 px-6 border-b-2 font-bold tracking-wider uppercase transition-colors ${
                activeTab === "observations"
                  ? "border-[#8B4513] text-[#F5F1E8] bg-[#141414]"
                  : "border-transparent text-[#A39A8B] hover:text-[#F5F1E8]"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>02 / QUALITATIVE OBSERVATIONS (AUG 2026)</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="p-6 sm:p-12 lg:p-16">
        <div className="max-w-5xl mx-auto">
          {activeTab === "one-pager" ? (
            /* ASSET 1: ONE-PAGER */
            <div id="one-pager" className="space-y-12">
              <div className="border border-[#262626] bg-[#0E0E0E] p-6 sm:p-10">
                <div className="flex flex-wrap justify-between items-center gap-4 font-mono text-xs text-[#A39A8B] pb-4 mb-6 border-b border-[#1F1F1F]">
                  <span className="text-[#8B4513] font-bold">EXECUTIVE ONE-PAGER</span>
                  <span>DATE: {AMAZON_ONE_PAGER.date}</span>
                  <span>AUTHOR: {AUTHOR_BIO.name}</span>
                </div>

                <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase text-[#F5F1E8] mb-4">
                  {AMAZON_ONE_PAGER.title}
                </h2>

                <div className="p-4 bg-[#141414] border-l-2 border-[#8B4513] font-mono text-sm text-[#D4CFC5] leading-relaxed mb-8">
                  <span className="text-[#8B4513] font-bold block mb-1 uppercase text-xs">
                    EXECUTIVE SUMMARY:
                  </span>
                  {AMAZON_ONE_PAGER.executiveSummary}
                </div>

                <div className="space-y-8 mt-10">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-[#8B4513]">
                    [ CORE PROPOSAL PILLARS ]
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {AMAZON_ONE_PAGER.pillars.map((pillar) => (
                      <div
                        key={pillar.number}
                        className="border border-[#222222] bg-[#121212] p-6 flex flex-col justify-between"
                      >
                        <div>
                          <div className="font-mono text-xs text-[#8B4513] font-bold mb-2">
                            PILLAR {pillar.number}
                          </div>
                          <h4 className="font-['Space_Grotesk'] text-lg font-bold text-[#F5F1E8] mb-4">
                            {pillar.title}
                          </h4>

                          <div className="space-y-4 font-mono text-xs leading-relaxed text-[#A39A8B]">
                            <div>
                              <span className="text-[#D4CFC5] font-bold block mb-1">
                                FRICTION / OPPORTUNITY:
                              </span>
                              <p>{pillar.problemSpace}</p>
                            </div>
                            <div>
                              <span className="text-[#8B4513] font-bold block mb-1">
                                ARCHITECTURAL PROPOSAL:
                              </span>
                              <p className="text-[#E0DBD0]">{pillar.proposal}</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-[#1F1F1F] font-mono text-[11px] text-[#A39A8B] flex items-center space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8B4513] shrink-0" />
                          <span>Impact: {pillar.expectedOutcome}</span>
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
              <div className="border border-[#262626] bg-[#0E0E0E] p-6 sm:p-10">
                <div className="flex flex-wrap justify-between items-center gap-4 font-mono text-xs text-[#A39A8B] pb-4 mb-6 border-b border-[#1F1F1F]">
                  <span className="text-[#8B4513] font-bold">QUALITATIVE LOGS</span>
                  <span>RECORDED: {AMAZON_OBSERVATIONS_METADATA.date}</span>
                  <span>PLATFORM: {AMAZON_OBSERVATIONS_METADATA.platform}</span>
                </div>

                <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase text-[#F5F1E8] mb-4">
                  Qualitative Listener Observations & System Frictions
                </h2>

                {/* Verbatim Qualification Note */}
                <div className="p-4 bg-[#141414] border-l-2 border-[#8B4513] font-mono text-xs sm:text-sm text-[#D4CFC5] leading-relaxed mb-8">
                  <span className="text-[#8B4513] font-bold block mb-1 uppercase text-xs">
                    METHODOLOGY & QUALIFICATIONS (AUGUST 2026):
                  </span>
                  {AMAZON_OBSERVATIONS_METADATA.methodology}
                </div>

                <div className="space-y-6">
                  {AMAZON_OBSERVATIONS_LOGS.map((item) => (
                    <div
                      key={item.id}
                      className="border border-[#222222] bg-[#121212] p-6 transition-colors hover:border-[#333333]"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-[#1F1F1F] font-mono text-xs">
                        <span className="text-[#8B4513] font-bold">{item.id}</span>
                        <span className="text-[#A39A8B] uppercase px-2 py-0.5 border border-[#2B2B2B]">
                          {item.category}
                        </span>
                      </div>

                      <div className="space-y-4 font-mono text-xs sm:text-sm leading-relaxed">
                        <div>
                          <span className="text-[#A39A8B] uppercase block text-[11px] font-bold mb-1">
                            OBSERVED BEHAVIOR:
                          </span>
                          <p className="text-[#F5F1E8]">{item.observation}</p>
                        </div>

                        <div>
                          <span className="text-[#B7410E] uppercase block text-[11px] font-bold mb-1">
                            LISTENER FRICTION:
                          </span>
                          <p className="text-[#D4CFC5]">{item.frictionPoint}</p>
                        </div>

                        <div className="pt-2 border-t border-[#1C1C1C]">
                          <span className="text-[#8B4513] uppercase block text-[11px] font-bold mb-1">
                            PROPOSED INTERVENTION:
                          </span>
                          <p className="text-[#F5F1E8] bg-[#181818] p-3 border-l-2 border-[#8B4513]">
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

      {/* Footer Navigation */}
      <footer className="bg-[#050505] text-[#A39A8B] p-8 sm:p-12 border-t border-[#262626] font-mono text-xs">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/work" className="hover:text-[#F5F1E8] flex items-center space-x-2">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO SELECTED WORK</span>
          </Link>
          <div>TOBI AFOLAYAN &bull; BROOKLYN, NY</div>
        </div>
      </footer>
    </div>
  );
}
