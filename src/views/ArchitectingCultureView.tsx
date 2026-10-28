import React from "react";
import { Link } from "../router";
import { ARCHITECTING_CULTURE_METADATA, AUTHOR_BIO } from "../data/masterContent";
import { ArrowLeft, ArrowUpRight, Play, ExternalLink, Music, Video, Presentation } from "lucide-react";

export function ArchitectingCultureView() {
  return (
    <div className="fellowship-archive min-h-screen bg-[#0A0A0A] text-[#F5F1E8]">
      {/* Grid Overlay for Brutalist Visual Identity */}


      {/* Top Banner & Context Disclosure */}
      <div className="bg-[#121212] border-b border-[#262626] px-6 py-4 font-mono text-xs text-[#A39A8B]">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <Link
            href="/work"
            className="flex items-center space-x-2 text-[#8B4513] hover:text-[#F5F1E8] uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO SELECTED WORK</span>
          </Link>
          <div className="flex items-center space-x-2 text-[#888888]">
            <span className="w-2 h-2 bg-[#8B4513]"></span>
            <span>PRESERVED DIGITAL ARTIFACT // GOOGLE CREATIVE FELLOWSHIP 2026</span>
          </div>
        </div>
      </div>

      {/* 001 HERO */}
      <section id="sec-001" className="hero min-h-[90vh] relative flex flex-col justify-between p-6 sm:p-12 lg:p-16 border-b border-[#262626]">
        {/* Top Meta */}
        <div className="w-full flex justify-between items-start font-mono text-xs text-[#A39A8B]">
          <div>
            <div className="text-[#8B4513] font-bold">PROJECT: ARCHITECTING CULTURE</div>
            <div>STATUS: PRESERVED FELLOWSHIP ARTIFACT</div>
          </div>
          <div className="text-right">
            <div>APPLICANT: {ARCHITECTING_CULTURE_METADATA.applicant}</div>
            <div>LOCATION: {ARCHITECTING_CULTURE_METADATA.location}</div>
          </div>
        </div>

        {/* Center Display */}
        <div className="my-auto py-12 text-center">
          <span className="section-num font-mono text-sm tracking-widest">[ 001 // THE ENTRY ]</span>
          <h1 className="grotesk-72 text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#F5F1E8] mb-6">
            ARCHITECTING CULTURE
          </h1>
          <p className="font-mono text-sm sm:text-lg text-[#D4CFC5] max-w-2xl mx-auto uppercase tracking-wider">
            GOOGLE CREATIVE FELLOWSHIP 2026 SUBMISSION
          </p>
        </div>

        {/* Bottom Nav Anchors */}
        <div className="w-full flex flex-wrap justify-between items-end gap-4 font-mono text-[11px] text-[#A39A8B] pt-6 border-t border-[#1C1C1C]">
          <div>MEDIA: 16:9 4K VIDEO &bull; SOUNDCLOUD AUDIO &bull; 15-SLIDE DECK</div>
          <div className="flex flex-wrap gap-4">
            <a href="#sec-002" className="hover:text-[#F5F1E8]">002 BRIEF</a>
            <a href="#sec-003" className="hover:text-[#F5F1E8]">003 VIDEO</a>
            <a href="#sec-004" className="hover:text-[#F5F1E8]">004 AUDIO</a>
            <a href="#sec-005" className="hover:text-[#F5F1E8]">005 SLIDES</a>
            <a href="#sec-006" className="hover:text-[#F5F1E8]">006 PORTFOLIO</a>
          </div>
        </div>
      </section>

      {/* 002 BRIEF */}
      <section id="sec-002" className="brief bg-[#F5F1E8] text-[#0A0A0A] p-6 sm:p-12 lg:p-16 border-b border-[#262626]">
        <div className="content-wrap max-w-4xl mx-auto">
          <span className="font-mono text-xs text-[#8B4513] uppercase tracking-widest block mb-4">
            [ 002 // THE BRIEF ]
          </span>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#0A0A0A] mb-8 leading-tight">
            Connecting Physical Venues, Algorithmic Discovery, and Cultural Equity
          </h2>
          <div className="font-mono text-sm sm:text-base text-[#222222] space-y-6 leading-relaxed">
            <p>
              Culture is not an abstraction—it is architected through physical spaces, social gatherings, and the technological systems that mediate human expression.
            </p>
            <p>
              This artifact synthesizes creative engineering, sound design, and event production into a cohesive proposal for the Google Creative Fellowship. It demonstrates how community-led music spaces can be amplified through thoughtful, ethical technological interventions.
            </p>
            <div className="p-6 bg-[#EBE5D8] border-l-4 border-[#8B4513] font-mono text-xs sm:text-sm text-[#1A1A1A]">
              "We must build tools that preserve the friction and communion of human gathering, rather than engineering systems that atomize audiences into isolated data streams."
            </div>
          </div>
        </div>
      </section>

      {/* 003 VIDEO */}
      <section id="sec-003" className="video-section bg-[#0A0A0A] text-[#F5F1E8] p-6 sm:p-12 lg:p-16 border-b border-[#262626]">
        <div className="content-wrap max-w-5xl mx-auto space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#A39A8B]">
            <span className="text-[#8B4513] font-bold">[ 003 // VISUAL ARTIFACT ]</span>
            <span>YOUTUBE EMBED &bull; 1080P HD</span>
          </div>

          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#F5F1E8]">
            Creative Fellowship Pitch Film
          </h2>

          <div className="aspect-video w-full bg-[#111111] border border-[#262626] overflow-hidden">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${ARCHITECTING_CULTURE_METADATA.youtubeId}?rel=0`}
              title="Google Creative Fellowship Submission Video"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="font-mono text-xs text-[#A39A8B] flex items-center justify-between">
            <span>DIRECT LINK: youtube.com/watch?v={ARCHITECTING_CULTURE_METADATA.youtubeId}</span>
            <a
              href={`https://www.youtube.com/watch?v=${ARCHITECTING_CULTURE_METADATA.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B4513] hover:text-[#F5F1E8] flex items-center space-x-1"
            >
              <span>WATCH ON YOUTUBE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 004 AUDIO */}
      <section id="sec-004" className="audio-section bg-[#F5F1E8] text-[#0A0A0A] p-6 sm:p-12 lg:p-16 border-b border-[#262626]">
        <div className="content-wrap max-w-5xl mx-auto space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#8B4513]">
            <span className="font-bold">[ 004 // SOUND DESIGN & DIRECTION ]</span>
            <span className="text-[#666666]">SOUNDCLOUD STREAM</span>
          </div>

          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#0A0A0A]">
            Sonic Architecture & Audio Direction
          </h2>

          <div className="bg-[#FFFFFF] border-2 border-[#0A0A0A] p-6 space-y-4">
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={ARCHITECTING_CULTURE_METADATA.soundcloudEmbedSrc}
              title="Creative Fellowship Audio Piece"
            ></iframe>
            <div className="font-mono text-xs text-[#666666] flex justify-between items-center">
              <span>AUDIO TRACK: SOUND DESIGN DIRECTION &bull; NOTEBOOKLM</span>
              <a
                href={ARCHITECTING_CULTURE_METADATA.soundcloudUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B4513] font-bold flex items-center space-x-1 hover:underline"
              >
                <span>OPEN SOUNDCLOUD</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 005 SLIDES */}
      <section id="sec-005" className="slides-section bg-[#0A0A0A] text-[#F5F1E8] p-6 sm:p-12 lg:p-16 border-b border-[#262626]">
        <div className="content-wrap max-w-4xl mx-auto text-center space-y-8">
          <span className="section-num font-mono text-xs tracking-widest">[ 005 // PRESENTATION DECK ]</span>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#F5F1E8]">
            15-Slide Creative Deck
          </h2>
          <p className="font-mono text-sm sm:text-base text-[#D4CFC5] max-w-2xl mx-auto leading-relaxed">
            Detailed breakdown of methodology, case studies, technology architecture, and cultural impact frameworks prepared for the Google Creative Fellowship committee.
          </p>

          <div className="pt-6 flex flex-wrap justify-center gap-4">
            <a
              href={ARCHITECTING_CULTURE_METADATA.slidesDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="brutalist-btn btn-filled"
            >
              VIEW SLIDES (DRIVE) &rarr;
            </a>
            <a
              href={ARCHITECTING_CULTURE_METADATA.slidesDownloadUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="brutalist-btn btn-outline"
            >
              DOWNLOAD PDF
            </a>
          </div>
        </div>
      </section>

      {/* 006 PORTFOLIO */}
      <section id="sec-006" className="portfolio bg-[#F5F1E8] text-[#0A0A0A] p-6 sm:p-12 lg:p-16 border-b border-[#262626]">
        <div className="content-wrap max-w-6xl mx-auto space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#8B4513]">
            <span className="font-bold">[ 006 // VENTURES & ARCHIVE ]</span>
            <span className="text-[#666666]">PRODUCTION PLATFORMS</span>
          </div>

          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#0A0A0A]">
            Selected Ventures & Artifacts
          </h2>

          <div className="portfolio-grid grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARCHITECTING_CULTURE_METADATA.ventures.map((v) => (
              <a
                key={v.title}
                href={v.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-card"
              >
                <div className="font-mono text-xs text-[#8B4513] uppercase mb-2">VENTURE</div>
                <h3 className="font-['Space_Grotesk'] font-bold uppercase">{v.title}</h3>
                <div className="divider"></div>
                <ul className="meta-list space-y-1">
                  {v.meta.map((m, mIdx) => (
                    <li key={mIdx}>{m}</li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-current flex items-center justify-between font-mono text-xs uppercase">
                  <span>LAUNCH SITE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 007 FOOTER */}
      <footer id="sec-007" className="footer bg-[#0A0A0A] text-[#F5F1E8] p-8 sm:p-16 border-t border-[#262626] font-mono text-xs">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <div className="text-[#8B4513] font-bold uppercase tracking-widest">
            [ 007 // RAW ASSETS & PROJECT REPOSITORY ]
          </div>
          <div className="text-sm text-[#D4CFC5]">
            TOBI AFOLAYAN &bull; BROOKLYN, NY &bull; CREATIVE FELLOWSHIP 2026
          </div>
          <div className="divider"></div>
          <div className="space-y-2">
            <div>
              <span>RAW ASSETS: </span>
              <a
                href={ARCHITECTING_CULTURE_METADATA.rawAssetsDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B4513] underline hover:text-[#F5F1E8]"
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
                className="text-[#8B4513] underline hover:text-[#F5F1E8]"
              >
                {ARCHITECTING_CULTURE_METADATA.githubProject}
              </a>
            </div>
            <p className="text-[10px] text-[#666666] pt-2">
              All material created independently for fellowship review. Preserved as an audiovisual artifact in the Selected Work index.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
