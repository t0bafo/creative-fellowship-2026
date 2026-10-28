import React from "react";

export type ReadingBlock = { kind: string; text: string };

function TextWithLinks({ text }: { text: string }) {
  return <>{text.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
    /^https?:\/\//.test(part) ? <a key={i} href={part.replace(/[.,;]+$/, "")} className="underline underline-offset-4 break-all hover:text-white" target="_blank" rel="noopener noreferrer">{part}</a> : part
  )}</>;
}

export function VerifiedReading({ blocks }: { blocks: ReadingBlock[] }) {
  return <div className="max-w-3xl space-y-6 text-base leading-[1.75] text-[#e3ddd3]">
    {blocks.map((block, i) => block.kind === "heading"
      ? <h2 key={i} className="pt-6 text-2xl font-bold font-['Space_Grotesk'] text-[#F5F1E8]">{block.text}</h2>
      : <p key={i} className="whitespace-pre-line"><TextWithLinks text={block.text} /></p>)}
  </div>;
}
