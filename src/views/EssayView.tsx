import React from "react";
import { Link } from "../router";
import { EssayData } from "../data/masterContent";
import verified from "../data/verifiedContent.json";
import { VerifiedReading } from "../components/VerifiedReading";

export function EssayView({ essay }: { essay: EssayData }) {
  const blocks = essay.slug === "presence-beyond-the-room" ? verified.concert : verified.streaming;
  return <article className="min-h-screen bg-[#0A0A0A] text-[#F5F1E8]">
    <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 py-12 sm:py-20">
      <Link href="/work" className="inline-flex min-h-[44px] items-center text-sm text-[#d69a6e] hover:text-white">← Back to selected work</Link>
      <p className="mt-8 text-xs uppercase tracking-widest text-[#d69a6e]">Published essay · Tobi Afolayan</p>
      <VerifiedReading blocks={blocks} />
      <div className="mt-16 border-t border-[#444] pt-8"><Link href="/work" className="inline-flex min-h-[44px] items-center text-[#d69a6e] hover:text-white">← Return to selected work</Link></div>
    </div>
  </article>;
}
