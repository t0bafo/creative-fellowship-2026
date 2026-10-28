import React from "react";
import { Link } from "../router";
import { AUTHOR_BIO, SELECTED_WORK_INDEX } from "../data/masterContent";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function LandingView() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F1E8]">
      {/* 01: Hero / Identification */}
      <section className="relative min-h-[85vh] flex flex-col justify-between p-6 sm:p-12 lg:p-16 border-b border-[#262626]">
        {/* Top Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#A39A8B] tracking-wider uppercase">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 bg-[#8B4513]"></span>
            <span>PORTFOLIO & RESEARCH ARCHIVE</span>
          </div>
          <div>LOCATION: {AUTHOR_BIO.location}</div>
        </div>

        {/* Center Main Typographic Statement */}
        <div className="max-w-5xl py-12">
          <span className="font-mono text-xs text-[#8B4513] uppercase tracking-widest block mb-4">
            [ IDENTITY / PERSPECTIVE ]
          </span>
          <h1 className="font-['Space_Grotesk'] text-5xl sm:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-[0.9] text-[#F5F1E8] mb-8">
            TOBI AFOLAYAN
          </h1>
          <p className="font-mono text-lg sm:text-xl lg:text-2xl text-[#D4CFC5] max-w-3xl leading-relaxed mb-6">
            Listener, software engineer, event producer, and graduate student studying music business and technology.
          </p>
          <div className="border-l-2 border-[#8B4513] pl-6 py-2 max-w-2xl font-mono text-sm sm:text-base text-[#A39A8B] leading-relaxed">
            {AUTHOR_BIO.bio}
          </div>
        </div>

        {/* Bottom Actions & Selected Work Direct Next Step */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-[#1F1F1F] font-mono text-xs">
          <div className="text-[#A39A8B]">
            CURRENT FOCUS: AUDIO SYSTEMS, CATALOG EQUITY & CULTURAL ARCHITECTURE
          </div>
          <Link
            href="/work"
            className="inline-flex items-center space-x-3 bg-[#F5F1E8] text-[#0A0A0A] hover:bg-[#8B4513] hover:text-[#F5F1E8] px-6 py-4 uppercase font-bold tracking-wider transition-colors"
          >
            <span>ENTER SELECTED WORK INDEX</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 02: Introduction & Research Manifesto */}
      <section className="bg-[#F5F1E8] text-[#0A0A0A] p-6 sm:p-12 lg:p-16 border-b border-[#262626]">
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-xs text-[#8B4513] uppercase tracking-widest block mb-4">
            [ 001 // APPROACH ]
          </span>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold uppercase tracking-tight leading-tight mb-8">
            How Sound Travels, How Audiences Congregate, How Independent Systems Sustain
          </h2>
          <div className="font-mono text-sm sm:text-base text-[#262626] space-y-6 leading-relaxed">
            <p>
              This site is a collection of my work across music, technology, research, and cultural experiences. Rather than cataloging corporate affiliations or generic project summaries, it is organized around the fundamental questions I am exploring:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 pb-4">
              <div className="border-t-2 border-[#0A0A0A] pt-4">
                <span className="font-mono text-xs text-[#8B4513] block mb-2">01 / IMMERSION</span>
                <p className="text-xs sm:text-sm font-sans font-medium text-[#0A0A0A]">
                  What happens to collective physical presence when performances are spatialized into headphones and virtual environments?
                </p>
              </div>
              <div className="border-t-2 border-[#0A0A0A] pt-4">
                <span className="font-mono text-xs text-[#8B4513] block mb-2">02 / INFRASTRUCTURE</span>
                <p className="text-xs sm:text-sm font-sans font-medium text-[#0A0A0A]">
                  How does the invisible supply chain of metadata, algorithmic gatekeeping, and streaming payouts shape what gets heard?
                </p>
              </div>
              <div className="border-t-2 border-[#0A0A0A] pt-4">
                <span className="font-mono text-xs text-[#8B4513] block mb-2">03 / SOVEREIGNTY</span>
                <p className="text-xs sm:text-sm font-sans font-medium text-[#0A0A0A]">
                  How can emerging independent artists build durable enterprises that preserve catalog equity and direct community patronage?
                </p>
              </div>
            </div>
            <p>
              I approach these questions through multidisciplinary practice: building software, analyzing platform mechanics, documenting qualitative listening frictions, and staging live cultural spaces.
            </p>
          </div>
        </div>
      </section>

      {/* 03: Selected Work Overview (Editorial Index preview) */}
      <section className="bg-[#0A0A0A] text-[#F5F1E8] p-6 sm:p-12 lg:p-16 border-b border-[#262626]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-[#262626] gap-4">
            <div>
              <span className="font-mono text-xs text-[#8B4513] uppercase tracking-widest block mb-2">
                [ 002 // SELECTED WORK ]
              </span>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold uppercase tracking-tight">
                Editorial Index & Research Artifacts
              </h2>
            </div>
            <Link
              href="/work"
              className="font-mono text-xs text-[#8B4513] hover:text-[#F5F1E8] uppercase flex items-center space-x-2"
            >
              <span>VIEW FULL INDEX</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="divide-y divide-[#1F1F1F]">
            {SELECTED_WORK_INDEX.map((item) => (
              <div
                key={item.slug}
                className="py-8 group flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-[#121212] px-4 transition-colors"
              >
                <div className="max-w-2xl">
                  <div className="flex items-center space-x-4 font-mono text-xs mb-2">
                    <span className="text-[#8B4513] font-bold">{item.number}</span>
                    <span className="text-[#A39A8B] uppercase px-2 py-0.5 border border-[#262626]">
                      {item.format}
                    </span>
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase tracking-tight group-hover:text-[#8B4513] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-[#A39A8B] leading-relaxed">
                    {item.focus}
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <Link
                    href={item.route}
                    className="inline-flex items-center space-x-2 font-mono text-xs uppercase px-4 py-2 border border-[#F5F1E8] group-hover:border-[#8B4513] group-hover:bg-[#8B4513] group-hover:text-[#F5F1E8] transition-colors"
                  >
                    <span>OPEN PIECE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04: Footer */}
      <footer className="bg-[#050505] text-[#A39A8B] p-8 sm:p-12 lg:p-16 border-t border-[#262626] font-mono text-xs">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="text-[#F5F1E8] font-bold text-sm uppercase mb-1">TOBI AFOLAYAN</div>
            <p>Independent research, software engineering, and cultural architecture.</p>
            <p className="text-[10px] text-[#666666] mt-2">
              All published work is independent and does not imply corporate affiliation or commissioned endorsement.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/work" className="hover:text-[#F5F1E8] uppercase">
              SELECTED WORK
            </Link>
            <Link href="/work/architecting-culture" className="hover:text-[#F5F1E8] uppercase">
              FELLOWSHIP ARCHIVE
            </Link>
            <a
              href={AUTHOR_BIO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-[#8B4513] hover:text-[#F5F1E8]"
            >
              <span>GITHUB REPO</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
