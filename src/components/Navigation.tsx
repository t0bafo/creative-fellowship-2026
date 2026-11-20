import React, { useState, useEffect } from "react";
import { Link, useRouter } from "../router";
import { AUTHOR_BIO } from "../data/masterContent";
import { ThemeToggle } from "../theme";
import { Menu, X, ArrowUpRight, MapPin } from "lucide-react";

export function Navigation() {
  const { path } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [path]);

  const navLinks = [
    { label: "INDEX", href: "/" },
    { label: "SELECTED WORK", href: "/work" },
    { label: "ARCHIVE (FELLOWSHIP)", href: "/work/architecting-culture" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-page)] text-[var(--color-text-primary)] border-b border-[var(--color-border-subtle)] select-none transition-colors duration-150">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-18 min-h-[72px] flex items-center justify-between font-mono text-xs">
        {/* Brand / Name & Location */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/"
            className="flex items-center gap-3 tracking-widest uppercase hover:text-[var(--color-accent)] transition-colors py-2 px-1 -ml-1 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] min-h-[44px]"
          >
            <span className="w-2.5 h-2.5 bg-[var(--color-accent)] shrink-0" aria-hidden="true"></span>
            <span className="font-bold text-sm tracking-tight text-[var(--color-text-primary)]">TOBI AFOLAYAN</span>
          </Link>
          <div className="hidden md:flex items-center gap-2 pl-4 sm:pl-6 border-l border-[var(--color-border-subtle)] text-[var(--color-text-muted)] tracking-wider text-[11px] h-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-border-control)]" aria-hidden="true"></span>
            <span>{AUTHOR_BIO.location}</span>
          </div>
        </div>

        {/* Desktop Nav - Switches to mobile menu below 1024px (lg) so split-screen / tablet views stay uncrowded */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-5 xl:gap-7">
          <div className="flex items-center gap-1.5 xl:gap-3">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? path === "/" : path.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`inline-flex items-center px-3 py-2 min-h-[44px] transition-colors border-b-2 text-xs tracking-wider rounded-t-sm ${
                    isActive
                      ? "border-[var(--color-accent)] text-[var(--color-text-primary)] font-bold"
                      : "border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-control)]"
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)]`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] ml-2 inline-block shrink-0" aria-hidden="true" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pl-4 xl:pl-6 border-l border-[var(--color-border-subtle)] flex items-center gap-3">
            <a
              href={AUTHOR_BIO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[44px] text-[var(--color-accent)] hover:text-[var(--color-text-primary)] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)]"
            >
              <span className="font-semibold tracking-wider text-xs">GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            </a>

            {/* Desktop Theme Toggle */}
            <ThemeToggle variant="desktop" />
          </div>
        </nav>

        {/* Mobile / Tablet Controls (Visible on < 1024px including split-screen preview) */}
        <div className="lg:hidden flex items-center gap-2 sm:gap-3">
          <span className="text-[10px] text-[var(--color-text-muted)] tracking-wider uppercase hidden sm:inline-block">
            {AUTHOR_BIO.location}
          </span>

          {/* Compact 44px mobile bar theme toggle - immediate 1-tap access on mobile */}
          <ThemeToggle variant="mobile-bar" />

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center text-[var(--color-text-primary)] hover:text-[var(--color-accent)] border border-[var(--color-border-control)] hover:border-[var(--color-accent)] bg-[var(--color-surface)] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)]"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          role="region"
          aria-label="Mobile Navigation"
          className="lg:hidden bg-[var(--color-page)] border-b border-[var(--color-border-subtle)] px-4 sm:px-6 py-6 font-mono text-sm shadow-2xl animate-in fade-in duration-150"
        >
          {/* Location / Meta Tag */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--color-border-subtle)] text-xs text-[var(--color-text-muted)]">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" aria-hidden="true" />
              <span>{AUTHOR_BIO.location}</span>
            </div>
            <span className="text-[10px] uppercase text-[var(--color-text-muted)] tracking-widest font-semibold">
              PORTFOLIO MENU
            </span>
          </div>

          <nav aria-label="Mobile Links" className="space-y-1">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? path === "/" : path.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`min-h-[48px] px-3.5 flex items-center justify-between border-l-2 transition-colors rounded-r-sm ${
                    isActive
                      ? "border-[var(--color-accent)] bg-[var(--color-surface)] text-[var(--color-text-primary)] font-bold"
                      : "border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)]"
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)]`}
                >
                  <span className="tracking-wider">{link.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full shrink-0" aria-hidden="true"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* GitHub link in drawer */}
          <div className="pt-3 mt-3 border-t border-[var(--color-border-subtle)]">
            <a
              href={AUTHOR_BIO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] px-3.5 flex items-center justify-between text-[var(--color-accent)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)]"
            >
              <span className="font-semibold tracking-wider text-xs">SOURCE CODE / GITHUB</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>
          </div>

          {/* Theme Switcher in mobile drawer */}
          <div className="pt-4 mt-2">
            <ThemeToggle variant="drawer" />
          </div>
        </div>
      )}
    </header>
  );
}
