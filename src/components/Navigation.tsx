import React, { useState, useEffect } from "react";
import { Link, useRouter } from "../router";
import { AUTHOR_BIO } from "../data/masterContent";
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
    <header className="sticky top-0 z-50 bg-[#0A0A0A] text-[#F5F1E8] border-b border-[#262626] select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-18 min-h-[72px] flex items-center justify-between font-mono text-xs">
        {/* Brand / Name & Location */}
        <div className="flex items-center gap-6 xl:gap-8">
          <Link
            href="/"
            className="flex items-center gap-3 tracking-widest uppercase hover:text-[#8B4513] transition-colors py-2 px-1 -ml-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B4513] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] min-h-[44px]"
          >
            <span className="w-2.5 h-2.5 bg-[#8B4513] shrink-0" aria-hidden="true"></span>
            <span className="font-bold text-sm tracking-tight text-[#F5F1E8]">TOBI AFOLAYAN</span>
          </Link>
          <div className="hidden xl:flex items-center gap-2 pl-8 border-l border-[#262626] text-[#A39A8B] tracking-wider text-[11px] h-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#333333]" aria-hidden="true"></span>
            <span>{AUTHOR_BIO.location}</span>
          </div>
        </div>

        {/* Desktop Nav - Switches to mobile menu below 1024px (lg) so split-screen / tablet views stay uncrowded */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-6 xl:gap-8">
          <div className="flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? path === "/" : path.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`inline-flex items-center px-3 py-2 min-h-[44px] transition-colors border-b-2 text-xs tracking-wider rounded-t-sm ${
                    isActive
                      ? "border-[#8B4513] text-[#F5F1E8] font-bold"
                      : "border-transparent text-[#A39A8B] hover:text-[#F5F1E8] hover:border-[#333333]"
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B4513] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pl-6 border-l border-[#262626] flex items-center">
            <a
              href={AUTHOR_BIO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[44px] text-[#8B4513] hover:text-[#F5F1E8] transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B4513] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
            >
              <span className="font-semibold tracking-wider text-xs">GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </nav>

        {/* Mobile / Tablet Menu Trigger (Visible on < 1024px including split-screen preview) */}
        <div className="lg:hidden flex items-center gap-3">
          <span className="text-[10px] text-[#736B5E] tracking-wider uppercase hidden sm:inline-block">
            {AUTHOR_BIO.location}
          </span>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-11 h-11 flex items-center justify-center text-[#F5F1E8] hover:text-[#8B4513] border border-[#262626] hover:border-[#8B4513] transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B4513] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
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
          className="lg:hidden bg-[#0A0A0A] border-b border-[#262626] px-4 sm:px-6 py-6 font-mono text-sm shadow-2xl animate-in fade-in duration-150"
        >
          {/* Location / Meta Tag */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1A1A1A] text-xs text-[#A39A8B]">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#8B4513]" aria-hidden="true" />
              <span>{AUTHOR_BIO.location}</span>
            </div>
            <span className="text-[10px] uppercase text-[#736B5E] tracking-widest">
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
                  className={`min-h-[48px] px-3 flex items-center justify-between border-l-2 transition-colors rounded-r ${
                    isActive
                      ? "border-[#8B4513] bg-[#141414] text-[#F5F1E8] font-bold"
                      : "border-transparent text-[#A39A8B] hover:text-[#F5F1E8] hover:bg-[#111111]"
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B4513] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]`}
                >
                  <span className="tracking-wider">{link.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 bg-[#8B4513] rounded-full" aria-hidden="true"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 mt-4 border-t border-[#1A1A1A]">
            <a
              href={AUTHOR_BIO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] px-3 flex items-center justify-between text-[#8B4513] hover:text-[#F5F1E8] hover:bg-[#111111] transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B4513] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
            >
              <span className="font-semibold tracking-wider text-xs">SOURCE CODE / GITHUB</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
