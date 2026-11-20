import React from "react";
import { Link } from "../router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SELECTED_WORK_INDEX } from "../data/masterContent";

export function NotFoundView() {
  return (
    <div className="min-h-screen bg-[var(--color-page)] text-[var(--color-text-primary)] flex flex-col justify-between py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 transition-colors duration-150">
      <div className="max-w-3xl mx-auto my-auto py-12 space-y-8">
        <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-widest block font-bold">
          [ ERROR 404 // ROUTE NOT FOUND ]
        </span>
        <h1 className="font-['Space_Grotesk'] text-5xl sm:text-7xl font-bold uppercase tracking-tight text-[var(--color-text-primary)]">
          ROUTE UNRESOLVED
        </h1>
        <p className="font-mono text-base text-[var(--color-text-secondary)] leading-[1.7]">
          The requested path does not exist in the editorial archive. You may navigate directly to any of the published works below or return to the index.
        </p>

        <div className="pt-6 border-t border-[var(--color-border-subtle)] space-y-4 font-mono text-xs">
          <div className="text-[var(--color-accent)] font-bold uppercase">AVAILABLE EDITORIAL ROUTES:</div>
          <div className="space-y-2">
            <Link
              href="/"
              className="flex items-center space-x-2 text-[var(--color-text-primary)] hover:text-[var(--color-accent)] underline underline-offset-4 decoration-[var(--color-border-control)] transition-colors py-2 px-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent)]"
            >
              <ArrowRight className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              <span>/ — HOME / LANDING</span>
            </Link>
            <Link
              href="/work"
              className="flex items-center space-x-2 text-[var(--color-text-primary)] hover:text-[var(--color-accent)] underline underline-offset-4 decoration-[var(--color-border-control)] transition-colors py-2 px-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent)]"
            >
              <ArrowRight className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              <span>/work — SELECTED WORK INDEX</span>
            </Link>
            {SELECTED_WORK_INDEX.map((item) => (
              <Link
                key={item.slug}
                href={item.route}
                className="flex items-center space-x-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] underline underline-offset-4 decoration-[var(--color-border-subtle)] transition-colors py-2 px-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent)]"
              >
                <ArrowRight className="w-3.5 h-3.5 text-[var(--color-border-control)]" />
                <span>{item.route} — {item.title}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-6">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-[var(--color-btn-primary-bg)] text-[var(--color-btn-primary-text)] hover:bg-[var(--color-btn-primary-hover-bg)] hover:text-[var(--color-btn-primary-hover-text)] px-6 py-3.5 min-h-[44px] font-mono text-xs uppercase font-bold tracking-wider transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO HOME</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
