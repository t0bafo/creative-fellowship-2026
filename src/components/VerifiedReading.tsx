import React from "react";

export type ReadingBlock = { kind: string; text: string };

function TextWithLinks({ text }: { text: string }) {
  return (
    <>
      {text.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
        /^https?:\/\//.test(part) ? (
          <a
            key={i}
            href={part.replace(/[.,;]+$/, "")}
            className="text-[var(--color-accent)] underline underline-offset-4 decoration-[var(--color-accent)] break-all hover:text-[var(--color-text-primary)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {part}
          </a>
        ) : (
          part
        )
      )}
    </>
  );
}

export function VerifiedReading({ blocks }: { blocks: ReadingBlock[] }) {
  return (
    <div className="max-w-3xl space-y-6 text-base leading-[1.75] text-[var(--color-text-secondary)]">
      {blocks.map((block, i) =>
        block.kind === "heading" ? (
          <h2
            key={i}
            className="pt-6 text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-[var(--color-text-primary)] uppercase tracking-tight"
          >
            {block.text}
          </h2>
        ) : (
          <p key={i} className="whitespace-pre-line">
            <TextWithLinks text={block.text} />
          </p>
        )
      )}
    </div>
  );
}
