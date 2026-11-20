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
  Grid,
  Download,
  ExternalLink
} from "lucide-react";

export function LlonaStudyView() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Touch gesture tracking for mobile swipe
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const totalSlides = LLONA_STUDY_METADATA.totalSlides;
  const currentSlideData = LLONA_STUDY_METADATA.slides[currentSlide - 1];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  };

  const goToSlide = (slideNum: number) => {
    if (slideNum >= 1 && slideNum <= totalSlides) {
      setCurrentSlide(slideNum);
    }
  };

  // Keyboard navigation (ArrowLeft, ArrowRight, Home, End, Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid intercepting if focus is in an input or textarea
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "Home") {
        e.preventDefault();
        setCurrentSlide(1);
      } else if (e.key === "End") {
        e.preventDefault();
        setCurrentSlide(totalSlides);
      } else if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen, totalSlides]);

  // Touch event handlers for mobile swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current !== null && touchEndXRef.current !== null) {
      const distance = touchStartXRef.current - touchEndXRef.current;
      const minSwipeDistance = 45; // pixels
      if (distance > minSwipeDistance) {
        // Swiped left -> next slide
        nextSlide();
      } else if (distance < -minSwipeDistance) {
        // Swiped right -> prev slide
        prevSlide();
      }
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

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
    <div className="min-h-screen bg-[var(--color-page)] text-[var(--color-text-primary)] transition-colors duration-150">
      {/* Header */}
      <header className="py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 border-b border-[var(--color-border-subtle)]">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/work"
            className="inline-flex items-center space-x-2 font-mono text-xs text-[var(--color-accent)] hover:text-[var(--color-text-primary)] underline underline-offset-4 decoration-[var(--color-accent)] uppercase tracking-wider mb-8 transition-colors py-2 px-1 -ml-1 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] min-h-[44px]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO SELECTED WORK</span>
          </Link>

          <div className="space-y-4 sm:space-y-5">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[var(--color-text-muted)]">
              <span className="text-[var(--color-accent)] font-bold uppercase">004 // STRATEGY STUDY</span>
              <span className="text-[var(--color-border-control)]">&bull;</span>
              <span className="uppercase px-2.5 py-0.5 border border-[var(--color-border-subtle)] text-[11px] font-semibold">
                21-Slide Educational Deck
              </span>
              <span className="text-[var(--color-border-control)]">&bull;</span>
              <span>CASE SUBJECT: LLONA</span>
            </div>

            <h1 className="font-['Space_Grotesk'] text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[var(--color-text-primary)]">
              {LLONA_STUDY_METADATA.title}
            </h1>
            <p className="font-mono text-base sm:text-lg lg:text-xl text-[var(--color-text-secondary)] max-w-3xl leading-relaxed pt-1">
              An independent educational strategy study mapping enterprise architecture, catalog equity, community monetization, and global touring for independent African music creators.
            </p>
          </div>

          {/* Academic / Non-Endorsement Disclaimer */}
          <div className="mt-8 p-5 bg-[var(--color-surface)] border-l-2 border-[var(--color-accent)] font-mono text-xs sm:text-sm text-[var(--color-text-secondary)] leading-[1.6] flex items-start space-x-3.5 rounded-r-sm">
            <AlertCircle className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
            <div>
              <span className="text-[var(--color-text-primary)] font-bold uppercase">Educational Research Disclaimer: </span>
              {LLONA_STUDY_METADATA.disclaimer}
            </div>
          </div>
        </div>
      </header>

      {/* Slide Deck Interactive Viewer */}
      <main className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-8">
          <section
            ref={containerRef}
            aria-roledescription="slide deck"
            aria-label="Llona Strategy Slide Deck"
            className={`border border-[var(--color-border-control)] bg-[var(--color-section-alt)] flex flex-col justify-between rounded-sm ${
              isFullscreen ? "p-4 sm:p-8 fixed inset-0 z-50 bg-[#000000] overflow-y-auto" : "p-4 sm:p-6"
            }`}
          >
            {/* Viewer Controls Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[var(--color-text-muted)] pb-4 mb-4 border-b border-[var(--color-border-subtle)]">
              <div className="flex items-center space-x-3">
                <span
                  className="text-[var(--color-accent)] font-bold text-sm tracking-wide"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  SLIDE {String(currentSlide).padStart(2, "0")} / {totalSlides}
                </span>
                <span className="hidden sm:inline-block text-[var(--color-border-control)]">|</span>
                <span className="hidden sm:inline-block text-[var(--color-text-muted)]">
                  Use &larr; &rarr; Arrow Keys / Swipe
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowThumbnails(!showThumbnails)}
                  className={`px-3 py-2 min-h-[44px] border transition-colors flex items-center space-x-1.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] ${
                    showThumbnails
                      ? "border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-surface)] font-bold"
                      : "border-[var(--color-border-control)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-accent)]"
                  }`}
                  aria-label="Toggle Slide Grid Overview"
                  aria-expanded={showThumbnails}
                >
                  <Grid className="w-4 h-4 text-[var(--color-accent)]" />
                  <span className="hidden sm:inline">GRID</span>
                </button>

                <a
                  href={LLONA_STUDY_METADATA.pdfOriginalPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 min-h-[44px] border border-[var(--color-border-control)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-accent)] transition-colors flex items-center space-x-1.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                  aria-label="Open strategy deck PDF in new tab"
                >
                  <ExternalLink className="w-4 h-4 text-[var(--color-accent)]" />
                  <span className="hidden sm:inline">PDF</span>
                </a>

                <button
                  onClick={toggleFullscreen}
                  className="px-3 py-2 min-h-[44px] border border-[var(--color-border-control)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-accent)] transition-colors flex items-center space-x-1.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                  aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                >
                  {isFullscreen ? <Minimize2 className="w-4 h-4 text-[var(--color-accent)]" /> : <Maximize2 className="w-4 h-4 text-[var(--color-accent)]" />}
                  <span className="hidden sm:inline">{isFullscreen ? "EXIT" : "EXPAND"}</span>
                </button>
              </div>
            </div>

            {/* Slide Image Canvas with Touch Swipe Listeners */}
            <div
              className="relative flex items-center justify-center min-h-[360px] sm:min-h-[500px] lg:min-h-[620px] bg-[var(--color-surface)] p-2 sm:p-4 select-none rounded-sm"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={currentSlideData.imageSrc}
                alt={`Llona Independent Artist Strategy Study - Slide ${currentSlide} of ${totalSlides}`}
                className="max-h-[72vh] w-auto max-w-full object-contain border border-[var(--color-border-subtle)] shadow-2xl"
              />

              {/* Prev / Next Floating Navigation Buttons with comfortable tap target */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3.5 min-w-[48px] min-h-[48px] flex items-center justify-center bg-[var(--color-page)]/90 hover:bg-[var(--color-accent)] text-[var(--color-text-primary)] hover:text-[var(--color-btn-primary-hover-text)] border border-[var(--color-border-control)] hover:border-[var(--color-accent)] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3.5 min-w-[48px] min-h-[48px] flex items-center justify-center bg-[var(--color-page)]/90 hover:bg-[var(--color-accent)] text-[var(--color-text-primary)] hover:text-[var(--color-btn-primary-hover-text)] border border-[var(--color-border-control)] hover:border-[var(--color-accent)] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Stepper Bar */}
            <div className="pt-4 mt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between font-mono text-xs text-[var(--color-text-muted)]">
              <button
                onClick={prevSlide}
                className="hover:text-[var(--color-text-primary)] flex items-center space-x-1 uppercase focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent)] px-3 py-2 min-h-[44px]"
                aria-label="Go to previous slide"
              >
                <ChevronLeft className="w-4 h-4 text-[var(--color-accent)]" />
                <span>PREV</span>
              </button>

              {/* Slide Numbers quick jump */}
              <div
                className="flex items-center space-x-1.5 overflow-x-auto max-w-[280px] sm:max-w-md lg:max-w-lg px-2 py-1 scrollbar-thin"
                role="tablist"
                aria-label="Select slide"
              >
                {LLONA_STUDY_METADATA.slides.map((s) => (
                  <button
                    key={s.number}
                    onClick={() => goToSlide(s.number)}
                    role="tab"
                    aria-selected={currentSlide === s.number}
                    aria-label={`Jump to slide ${s.number}`}
                    className={`w-8 h-8 shrink-0 text-xs border flex items-center justify-center transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] ${
                      currentSlide === s.number
                        ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-btn-primary-hover-text)] font-bold"
                        : "border-[var(--color-border-control)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-text-primary)]"
                    }`}
                  >
                    {s.number}
                  </button>
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="hover:text-[var(--color-text-primary)] flex items-center space-x-1 uppercase focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent)] px-3 py-2 min-h-[44px]"
                aria-label="Go to next slide"
              >
                <span>NEXT</span>
                <ChevronRight className="w-4 h-4 text-[var(--color-accent)]" />
              </button>
            </div>
          </section>

          {/* Grid View Drawer (if toggled) */}
          {showThumbnails && (
            <div className="border border-[var(--color-border-control)] bg-[var(--color-surface)] p-6 space-y-4 rounded-sm shadow-sm">
              <div className="flex justify-between items-center font-mono text-xs text-[var(--color-text-muted)] pb-2 border-b border-[var(--color-border-subtle)]">
                <span className="text-[var(--color-accent)] font-bold uppercase">ALL 21 SLIDES OVERVIEW</span>
                <span>CLICK ANY SLIDE TO JUMP</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                {LLONA_STUDY_METADATA.slides.map((s) => (
                  <button
                    key={s.number}
                    onClick={() => {
                      goToSlide(s.number);
                      setShowThumbnails(false);
                    }}
                    className={`relative border text-left p-1 transition-all group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] ${
                      currentSlide === s.number
                        ? "border-[var(--color-accent)] ring-1 ring-[var(--color-accent)]"
                        : "border-[var(--color-border-subtle)] hover:border-[var(--color-accent)]"
                    }`}
                    aria-label={`Jump to slide ${s.number}`}
                  >
                    <img
                      src={s.imageSrc}
                      alt={`Thumbnail Slide ${s.number}`}
                      className="w-full aspect-[16/9] object-cover"
                      loading="lazy"
                    />
                    <div className="mt-1 font-mono text-[10px] text-[var(--color-text-muted)] flex justify-between font-semibold">
                      <span>#{String(s.number).padStart(2, "0")}</span>
                      {currentSlide === s.number && <span className="text-[var(--color-accent)] font-bold">ACTIVE</span>}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Authoritative PDF Asset & Download Section */}
          <div className="border border-[var(--color-border-control)] bg-[var(--color-surface)] p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 font-mono text-xs text-[var(--color-text-muted)] rounded-sm shadow-sm">
            <div className="space-y-2">
              <span className="text-[var(--color-text-primary)] font-bold uppercase block tracking-wider text-sm">
                AUTHORITATIVE SOURCE DOCUMENT
              </span>
              <p className="max-w-2xl leading-[1.65] text-[var(--color-text-secondary)]">
                Original 21-page presentation deck:{" "}
                <span className="text-[var(--color-accent)] font-bold">{LLONA_STUDY_METADATA.pdfFileName}</span>.
                Preserved in its complete sequence and original visual composition for educational and research reference.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={LLONA_STUDY_METADATA.pdfOriginalPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 min-h-[44px] border border-[var(--color-border-control)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors uppercase font-bold rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              >
                <ExternalLink className="w-4 h-4 text-[var(--color-accent)]" />
                <span>OPEN IN TAB</span>
              </a>
              <a
                href={LLONA_STUDY_METADATA.pdfOriginalPath}
                download="Llona_Enterprise_Strategy.pdf"
                className="inline-flex items-center space-x-2 px-5 py-3 min-h-[44px] bg-[var(--color-btn-primary-bg)] text-[var(--color-btn-primary-text)] hover:bg-[var(--color-btn-primary-hover-bg)] hover:text-[var(--color-btn-primary-hover-text)] border border-[var(--color-border-control)] hover:border-[var(--color-accent)] transition-colors uppercase font-bold rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD PDF</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Page Navigation */}
      <nav aria-label="Page Navigation" className="border-t border-[var(--color-border-subtle)] bg-[var(--color-page)] py-8 sm:py-10 px-6 sm:px-10 lg:px-16 font-mono text-xs transition-colors duration-150">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
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
