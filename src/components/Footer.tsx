import React from "react";
import { ArrowUpRight } from "lucide-react";

interface SocialLink {
  label: string;
  href: string;
}

const PRIMARY_LINKS: SocialLink[] = [
  {
    label: "tobiafo.com",
    href: "https://tobiafo.com",
  },
  {
    label: "assist@tobiafo.com",
    href: "mailto:assist@tobiafo.com",
  },
];

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tobiafo/",
  },
  {
    label: "Substack",
    href: "https://tobiafolayan.substack.com/",
  },
  {
    label: "GitHub",
    href: "https://github.com/t0bafo",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/t0biafo",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Site Footer"
      className="bg-[var(--color-section-alt)] text-[var(--color-text-primary)] border-t border-[var(--color-border-subtle)] font-mono text-xs relative z-20 transition-colors duration-150"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
        {/* Main Footer Grid: Identity on Left, Contact & Social on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Identity & Purpose */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="w-2.5 h-2.5 bg-[var(--color-accent)] shrink-0" aria-hidden="true" />
              <span className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold uppercase tracking-tight text-[var(--color-text-primary)]">
                Tobi Afolayan
              </span>
            </div>

            <p className="font-mono text-sm sm:text-base text-[var(--color-text-secondary)] leading-[1.6] max-w-md">
              Music, technology, and the people behind both.
            </p>

            <p className="font-mono text-[11px] text-[var(--color-text-muted)] leading-[1.6] max-w-md pt-2">
              Independent creative research and engineering portfolio. All published work is independent and does not imply corporate affiliation or commissioned endorsement.
            </p>
          </div>

          {/* Right Column: Primary Contact & Social Navigation */}
          <div className="lg:col-span-7 space-y-8 lg:pl-8 lg:border-l lg:border-[var(--color-border-subtle)]">
            {/* Primary Links: High Prominence */}
            <div className="space-y-3">
              <div className="text-[11px] font-bold text-[var(--color-accent)] uppercase tracking-wider">
                Primary Contact & Main Site
              </div>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                {PRIMARY_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="inline-flex items-center space-x-2 text-sm sm:text-base font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-accent)] underline underline-offset-4 decoration-[var(--color-accent)] transition-colors py-2 px-1 -ml-1 min-h-[44px] rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)]"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-[var(--color-accent)] shrink-0" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links: In exact specified order, readable text links */}
            <div className="space-y-3 pt-4 border-t border-[var(--color-border-subtle)]">
              <div className="text-[11px] font-bold text-[var(--color-accent)] uppercase tracking-wider">
                Writing, Code & Social
              </div>
              <nav aria-label="Social and external links" className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] underline underline-offset-4 decoration-[var(--color-border-control)] hover:decoration-[var(--color-accent)] transition-colors py-2 px-1 -ml-1 min-h-[44px] rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)]"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0" aria-hidden="true" />
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location metadata */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[var(--color-border-subtle)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[11px] text-[var(--color-text-muted)]">
          <div>
            &copy; {currentYear} Tobi Afolayan &bull; Brooklyn, NY
          </div>
          <div className="font-mono text-[var(--color-text-muted)]">
            creative.tobiafo.com &bull; Research & Practice Archive
          </div>
        </div>
      </div>
    </footer>
  );
}
