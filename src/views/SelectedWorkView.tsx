import React from "react";
import { Link } from "../router";
import { SELECTED_WORK_INDEX, AUTHOR_BIO } from "../data/masterContent";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";

export function SelectedWorkView() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F1E8]">
      {/* Header Banner */}
      <section className="p-6 sm:p-12 lg:p-16 border-b border-[#262626]">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 font-mono text-xs text-[#8B4513] hover:text-[#F5F1E8] uppercase tracking-wider mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN HOME</span>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#262626]">
            <div>
              <span className="font-mono text-xs text-[#8B4513] uppercase tracking-widest block mb-3">
                [ ARCHIVE // 002 ]
              </span>
              <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#F5F1E8]">
                SELECTED WORK
              </h1>
            </div>
            <p className="font-mono text-xs sm:text-sm text-[#A39A8B] max-w-md leading-relaxed">
              An index of independent essays, qualitative observations, enterprise strategy studies, and creative technology artifacts.
            </p>
          </div>
        </div>
      </section>

      {/* Index List */}
      <section className="p-6 sm:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {SELECTED_WORK_INDEX.map((work) => (
            <article
              key={work.slug}
              className="border border-[#262626] bg-[#0E0E0E] p-6 sm:p-10 hover:border-[#8B4513] transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#A39A8B] pb-4 mb-6 border-b border-[#1A1A1A]">
                  <div className="flex items-center space-x-3">
                    <span className="font-bold text-[#8B4513] text-sm">{work.number}</span>
                    <span className="px-2 py-0.5 border border-[#333333] text-[#F5F1E8] uppercase text-[11px]">
                      {work.format}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span key={tag} className="text-[#888888] text-[10px] uppercase">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#F5F1E8] mb-2">
                  <Link href={work.route} className="hover:text-[#8B4513] transition-colors">
                    {work.title}
                  </Link>
                </h2>
                <h3 className="font-mono text-sm sm:text-base text-[#D4CFC5] mb-6">
                  {work.subtitle}
                </h3>

                {/* Core Question & Summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#1F1F1F] font-mono text-xs sm:text-sm">
                  <div>
                    <span className="text-[#8B4513] uppercase block mb-1 text-[11px] font-bold">
                      CORE QUESTION / FOCUS:
                    </span>
                    <p className="text-[#D4CFC5] leading-relaxed italic">
                      "{work.focus}"
                    </p>
                  </div>
                  <div>
                    <span className="text-[#A39A8B] uppercase block mb-1 text-[11px] font-bold">
                      SCOPE & CONTEXT:
                    </span>
                    <p className="text-[#A39A8B] leading-relaxed">
                      {work.summary}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="mt-8 pt-6 border-t border-[#1A1A1A] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                <span className="text-[#666666] uppercase text-[11px]">
                  ROUTE: {work.route}
                </span>
                <Link
                  href={work.route}
                  className="inline-flex items-center space-x-2 bg-[#F5F1E8] text-[#0A0A0A] hover:bg-[#8B4513] hover:text-[#F5F1E8] px-5 py-3 uppercase font-bold tracking-wider transition-colors"
                >
                  <span>VIEW FULL PIECE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] text-[#A39A8B] p-8 sm:p-12 border-t border-[#262626] font-mono text-xs">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>TOBI AFOLAYAN &bull; BROOKLYN, NY</div>
          <a
            href={AUTHOR_BIO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-[#8B4513] hover:text-[#F5F1E8]"
          >
            <span>SOURCE CODE ON GITHUB</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </footer>
    </div>
  );
}
