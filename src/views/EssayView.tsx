import React from "react";
import { Link } from "../router";
import { EssayData, AUTHOR_BIO } from "../data/masterContent";
import { ArrowLeft, Clock, BookOpen, Share2, ArrowUpRight } from "lucide-react";

export function EssayView({ essay }: { essay: EssayData }) {
  // Calculate exact dynamic reading time based on total word count (200 words per minute)
  const totalWords = essay.sections.reduce((acc, sec) => {
    return acc + sec.paragraphs.reduce((pAcc, p) => pAcc + p.split(/\s+/).filter(Boolean).length, 0);
  }, 0);
  const readingTimeMin = Math.ceil(totalWords / 200);

  return (
    <article className="min-h-screen bg-[#0A0A0A] text-[#F5F1E8]">
      {/* Editorial Header */}
      <header className="p-6 sm:p-12 lg:p-16 border-b border-[#262626]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/work"
            className="inline-flex items-center space-x-2 font-mono text-xs text-[#8B4513] hover:text-[#F5F1E8] uppercase tracking-wider mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO SELECTED WORK</span>
          </Link>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#A39A8B]">
              <span className="text-[#8B4513] font-bold uppercase">{essay.format}</span>
              <span className="text-[#333333]">&bull;</span>
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{readingTimeMin} MIN READ ({totalWords} WORDS)</span>
              </span>
              <span className="text-[#333333]">&bull;</span>
              <span>BY {AUTHOR_BIO.name.toUpperCase()}</span>
            </div>

            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#F5F1E8] leading-[0.95]">
              {essay.title}
            </h1>
            <p className="font-mono text-lg sm:text-xl text-[#D4CFC5] leading-relaxed pt-2">
              {essay.subtitle}
            </p>
          </div>

          {/* Abstract / Scope Callout */}
          <div className="mt-8 p-6 bg-[#121212] border-l-2 border-[#8B4513] font-mono text-xs sm:text-sm text-[#D4CFC5] leading-relaxed">
            <span className="text-[#8B4513] font-bold block mb-1 uppercase text-xs">
              CENTRAL THESIS / FOCUS:
            </span>
            {essay.readingFocus}
          </div>

          {/* Quick Table of Contents Anchor Bar */}
          <div className="mt-8 pt-6 border-t border-[#1F1F1F] font-mono text-xs">
            <span className="text-[#A39A8B] uppercase block mb-3 text-[11px] font-bold">
              ESSAY SECTIONS:
            </span>
            <div className="flex flex-wrap gap-2">
              {essay.sections.map((section, idx) => {
                const sectionId = `section-${idx + 1}`;
                return (
                  <a
                    key={section.heading}
                    href={`#${sectionId}`}
                    className="px-3 py-1.5 bg-[#141414] hover:bg-[#8B4513] text-[#D4CFC5] hover:text-[#F5F1E8] border border-[#222222] transition-colors"
                  >
                    0{idx + 1}. {section.heading}
                  </a>
                );
              })}
              <a
                href="#citations"
                className="px-3 py-1.5 bg-[#141414] hover:bg-[#8B4513] text-[#8B4513] hover:text-[#F5F1E8] border border-[#222222] transition-colors font-bold"
              >
                REFERENCES ({essay.citations.length})
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Essay Body — 68ch Max Measure for Optimal Typography */}
      <main className="p-6 sm:p-12 lg:p-16">
        <div className="max-w-3xl mx-auto space-y-16">
          {essay.sections.map((section, idx) => {
            const sectionId = `section-${idx + 1}`;
            return (
              <section
                key={section.heading}
                id={sectionId}
                className="p-0 border-none space-y-6 scroll-mt-24"
              >
                <div className="flex items-center space-x-3 pb-2 border-b border-[#262626]">
                  <span className="font-mono text-xs font-bold text-[#8B4513]">
                    PART 0{idx + 1}
                  </span>
                  <span className="text-[#333333]">/</span>
                  <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#F5F1E8]">
                    {section.heading}
                  </h2>
                </div>

                <div className="space-y-6 font-mono text-base text-[#D4CFC5] leading-[1.8]">
                  {section.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="selection:bg-[#8B4513] selection:text-[#F5F1E8]">
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            );
          })}

          {/* Citations & Academic References */}
          <section id="citations" className="pt-12 mt-12 border-t-2 border-[#262626] scroll-mt-24">
            <div className="flex items-center space-x-3 mb-6">
              <BookOpen className="w-5 h-5 text-[#8B4513]" />
              <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F1E8]">
                SOURCE REFERENCES & CITATIONS ({essay.citations.length})
              </h3>
            </div>
            <ol className="list-decimal list-inside space-y-3 font-mono text-xs text-[#A39A8B] leading-relaxed">
              {essay.citations.map((c) => (
                <li key={c.id} className="p-3 bg-[#0F0F0F] border border-[#1A1A1A]">
                  <span className="text-[#D4CFC5]">{c.text}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="bg-[#050505] text-[#A39A8B] p-8 sm:p-12 border-t border-[#262626] font-mono text-xs">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            href="/work"
            className="hover:text-[#F5F1E8] flex items-center space-x-2 text-[#8B4513]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO SELECTED WORK INDEX</span>
          </Link>
          <div>TOBI AFOLAYAN &bull; BROOKLYN, NY</div>
        </div>
      </footer>
    </article>
  );
}
