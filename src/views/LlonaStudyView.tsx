import React, { useState, useEffect, useRef } from "react";
import { Link } from "../router";
import { LLONA_STUDY_METADATA } from "../data/masterContent";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  AlertCircle,
  FileText,
  Grid,
  Download,
  Info
} from "lucide-react";

export function LlonaStudyView() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = LLONA_STUDY_METADATA.totalSlides;
  const currentSlideData = LLONA_STUDY_METADATA.slides[currentSlide - 1];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  };

  // Keyboard navigation (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen]);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (containerRef.current?.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F1E8]">
      {/* Header */}
      <header className="p-6 sm:p-12 border-b border-[#262626]">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/work"
            className="inline-flex items-center space-x-2 font-mono text-xs text-[#8B4513] hover:text-[#F5F1E8] uppercase tracking-wider mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO SELECTED WORK</span>
          </Link>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#A39A8B]">
              <span className="text-[#8B4513] font-bold uppercase">004 // STRATEGY STUDY</span>
              <span className="text-[#333333]">&bull;</span>
              <span>21-SLIDE EDUCATIONAL DECK</span>
              <span className="text-[#333333]">&bull;</span>
              <span>CASE SUBJECT: LLONA</span>
            </div>

            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#F5F1E8]">
              {LLONA_STUDY_METADATA.title}
            </h1>
            <p className="font-mono text-base sm:text-lg text-[#D4CFC5] max-w-3xl leading-relaxed">
              An independent educational strategy study mapping enterprise architecture, catalog equity, community monetization, and global touring for independent African music creators.
            </p>
          </div>

          {/* Academic / Non-Endorsement Disclaimer */}
          <div className="mt-8 p-4 bg-[#141414] border-l-2 border-[#8B4513] font-mono text-xs text-[#A39A8B] leading-relaxed flex items-start space-x-3">
            <AlertCircle className="w-4 h-4 text-[#8B4513] shrink-0 mt-0.5" />
            <div>
              <span className="text-[#F5F1E8] font-bold uppercase">Educational Research Disclaimer: </span>
              {LLONA_STUDY_METADATA.disclaimer}
            </div>
          </div>
        </div>
      </header>

      {/* Slide Deck Interactive Viewer */}
      <main className="p-4 sm:p-8 lg:p-12">
        <div className="max-w-6xl mx-auto space-y-6">
          <div
            ref={containerRef}
            className={`border border-[#262626] bg-[#000000] flex flex-col justify-between ${
              isFullscreen ? "p-4 sm:p-8 fixed inset-0 z-50 bg-[#000000] overflow-y-auto" : "p-4 sm:p-6"
            }`}
          >
            {/* Viewer Controls Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#A39A8B] pb-4 mb-4 border-b border-[#222222]">
              <div className="flex items-center space-x-3">
                <span className="text-[#8B4513] font-bold text-sm">
                  SLIDE {String(currentSlide).padStart(2, "0")} / {totalSlides}
                </span>
                <span className="hidden sm:inline-block text-[#555555]">|</span>
                <span className="hidden sm:inline-block text-[#888888]">
                  Use &larr; &rarr; Arrow Keys to Navigate
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowThumbnails(!showThumbnails)}
                  className={`p-2 border transition-colors flex items-center space-x-1 ${
                    showThumbnails
                      ? "border-[#8B4513] text-[#8B4513] bg-[#141414]"
                      : "border-[#333333] text-[#A39A8B] hover:text-[#F5F1E8]"
                  }`}
                  aria-label="Toggle Slide Grid"
                >
                  <Grid className="w-4 h-4" />
                  <span className="hidden md:inline">GRID</span>
                </button>

                <button
                  onClick={toggleFullscreen}
                  className="p-2 border border-[#333333] text-[#A39A8B] hover:text-[#F5F1E8] transition-colors flex items-center space-x-1"
                  aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                >
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                  <span className="hidden md:inline">{isFullscreen ? "EXIT" : "EXPAND"}</span>
                </button>
              </div>
            </div>

            {/* Slide Image Canvas */}
            <div className="relative flex items-center justify-center min-h-[400px] sm:min-h-[550px] lg:min-h-[650px] bg-[#050505] p-2 sm:p-4">
              <img
                src={currentSlideData.imageSrc}
                alt={`Llona Strategy Study - Slide ${currentSlide} of ${totalSlides}`}
                className="max-h-[75vh] w-auto object-contain border border-[#1A1A1A] shadow-2xl"
              />

              {/* Prev / Next Floating Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 bg-[#0A0A0A]/90 hover:bg-[#8B4513] text-[#F5F1E8] border border-[#333333] transition-colors"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 bg-[#0A0A0A]/90 hover:bg-[#8B4513] text-[#F5F1E8] border border-[#333333] transition-colors"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Stepper Bar */}
            <div className="pt-4 mt-4 border-t border-[#222222] flex items-center justify-between font-mono text-xs text-[#888888]">
              <button
                onClick={prevSlide}
                className="hover:text-[#F5F1E8] flex items-center space-x-1 uppercase"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>PREVIOUS SLIDE</span>
              </button>

              <div className="hidden sm:flex items-center space-x-1.5 overflow-x-auto max-w-lg px-2">
                {LLONA_STUDY_METADATA.slides.map((s) => (
                  <button
                    key={s.number}
                    onClick={() => setCurrentSlide(s.number)}
                    className={`w-6 h-6 text-[10px] border flex items-center justify-center transition-colors ${
                      currentSlide === s.number
                        ? "border-[#8B4513] bg-[#8B4513] text-[#F5F1E8] font-bold"
                        : "border-[#222222] text-[#888888] hover:border-[#555555] hover:text-[#D4CFC5]"
                    }`}
                  >
                    {s.number}
                  </button>
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="hover:text-[#F5F1E8] flex items-center space-x-1 uppercase"
              >
                <span>NEXT SLIDE</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Grid View Drawer (if toggled) */}
          {showThumbnails && (
            <div className="border border-[#262626] bg-[#0E0E0E] p-6 space-y-4">
              <div className="flex justify-between items-center font-mono text-xs text-[#A39A8B] pb-2 border-b border-[#222222]">
                <span className="text-[#8B4513] font-bold">ALL 21 SLIDES OVERVIEW</span>
                <span>CLICK ANY SLIDE TO JUMP</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                {LLONA_STUDY_METADATA.slides.map((s) => (
                  <button
                    key={s.number}
                    onClick={() => {
                      setCurrentSlide(s.number);
                      setShowThumbnails(false);
                    }}
                    className={`relative border text-left p-1 transition-all group ${
                      currentSlide === s.number
                        ? "border-[#8B4513] ring-1 ring-[#8B4513]"
                        : "border-[#262626] hover:border-[#666666]"
                    }`}
                  >
                    <img
                      src={s.imageSrc}
                      alt={`Thumbnail Slide ${s.number}`}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="mt-1 font-mono text-[10px] text-[#A39A8B] flex justify-between">
                      <span>#{String(s.number).padStart(2, "0")}</span>
                      {currentSlide === s.number && <span className="text-[#8B4513]">CURRENT</span>}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <p className="text-sm leading-relaxed text-[#D4CFC5]">Slides are presented as images. A verified text transcript is not yet available.</p>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="bg-[#050505] text-[#A39A8B] p-8 sm:p-12 border-t border-[#262626] font-mono text-xs">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/work" className="hover:text-[#F5F1E8] flex items-center space-x-2 text-[#8B4513]">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO SELECTED WORK</span>
          </Link>
          <div>TOBI AFOLAYAN &bull; BROOKLYN, NY</div>
        </div>
      </footer>
    </div>
  );
}
