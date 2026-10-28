import React, { useState, useEffect } from "react";
import { Link, useRouter } from "../router";
import verified from "../data/verifiedContent.json";
import { VerifiedReading } from "../components/VerifiedReading";

export function ListeningExperienceView() {
  const { hash } = useRouter();
  const [active, setActive] = useState(hash === "#observations" ? "observations" : "one-pager");
  useEffect(() => { if (hash === "#observations" || hash === "#one-pager") setActive(hash.slice(1)); }, [hash]);
  return <article className="min-h-screen bg-[#0A0A0A] text-[#F5F1E8]">
    <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 py-12 sm:py-20">
      <Link href="/work" className="inline-flex min-h-[44px] items-center text-[#d69a6e] hover:text-white">← Back to selected work</Link>
      <p className="mt-8 text-xs uppercase tracking-widest text-[#d69a6e]">001 · Research and product</p>
      <h1 className="mt-4 text-4xl sm:text-6xl font-bold font-['Space_Grotesk']">Listening and fan experience</h1>
      <p className="mt-5 max-w-3xl leading-relaxed text-[#D4CFC5]">Independent listener observations and ideas for Amazon Music.</p>
      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[#D4CFC5]">Independent work by Tobi Afolayan. Not commissioned, sponsored, or endorsed by Amazon.</p>
      <nav aria-label="Listening study sections" className="mt-10 flex flex-wrap gap-4 border-b border-[#333] pb-4">
        <button type="button" onClick={() => setActive('one-pager')} aria-pressed={active === 'one-pager'} className="min-h-[44px] px-4 border border-[#777] aria-pressed:border-[#d69a6e]">One-pager</button>
        <button type="button" onClick={() => setActive('observations')} aria-pressed={active === 'observations'} className="min-h-[44px] px-4 border border-[#777] aria-pressed:border-[#d69a6e]">Listening observations</button>
      </nav>
      <div className="mt-10" id={active}><VerifiedReading blocks={active === 'one-pager' ? verified.onePager : verified.observations} /></div>
    </div>
  </article>;
}
