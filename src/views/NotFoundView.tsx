import React from "react";
import { Link } from "../router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SELECTED_WORK_INDEX } from "../data/masterContent";

export function NotFoundView() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F1E8] flex flex-col justify-between p-6 sm:p-12 lg:p-16">
      <div className="max-w-3xl mx-auto my-auto py-12 space-y-8">
        <span className="font-mono text-xs text-[#8B4513] uppercase tracking-widest block">
          [ ERROR 404 // ROUTE NOT FOUND ]
        </span>
        <h1 className="font-['Space_Grotesk'] text-5xl sm:text-7xl font-bold uppercase tracking-tight text-[#F5F1E8]">
          ROUTE UNRESOLVED
        </h1>
        <p className="font-mono text-base text-[#D4CFC5] leading-relaxed">
          The requested path does not exist in the editorial archive. You may navigate directly to any of the published works below or return to the index.
        </p>

        <div className="pt-6 border-t border-[#262626] space-y-4 font-mono text-xs">
          <div className="text-[#8B4513] font-bold uppercase">AVAILABLE EDITORIAL ROUTES:</div>
          <div className="space-y-2">
            <Link
              href="/"
              className="flex items-center space-x-2 text-[#F5F1E8] hover:text-[#8B4513] transition-colors py-1"
            >
              <ArrowRight className="w-3.5 h-3.5 text-[#8B4513]" />
              <span>/ — HOME / LANDING</span>
            </Link>
            <Link
              href="/work"
              className="flex items-center space-x-2 text-[#F5F1E8] hover:text-[#8B4513] transition-colors py-1"
            >
              <ArrowRight className="w-3.5 h-3.5 text-[#8B4513]" />
              <span>/work — SELECTED WORK INDEX</span>
            </Link>
            {SELECTED_WORK_INDEX.map((item) => (
              <Link
                key={item.slug}
                href={item.route}
                className="flex items-center space-x-2 text-[#A39A8B] hover:text-[#F5F1E8] transition-colors py-1"
              >
                <ArrowRight className="w-3.5 h-3.5 text-[#555555]" />
                <span>{item.route} — {item.title}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-6">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-[#F5F1E8] text-[#0A0A0A] hover:bg-[#8B4513] hover:text-[#F5F1E8] px-6 py-3 font-mono text-xs uppercase font-bold tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO HOME</span>
          </Link>
        </div>
      </div>

      <div className="text-center font-mono text-xs text-[#555555] pt-8 border-t border-[#1F1F1F]">
        TOBI AFOLAYAN &bull; BROOKLYN, NY
      </div>
    </div>
  );
}
