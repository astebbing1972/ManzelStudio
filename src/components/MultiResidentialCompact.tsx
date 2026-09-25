"use client";

import { useState } from "react";
import Reveal from "./Reveal";

// Standalone compact variant of MultiResidential with tighter vertical
// padding. Kept separate from MultiResidential.tsx (used by other,
// already-live service pages) so this page's needs never risk changing
// their rendered output.
export default function MultiResidentialCompact({
  eyebrow,
  titlePre,
  titleEm,
  lead,
  items,
}: {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  lead: string;
  items: { num: string; label: string; body: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-ink px-6 py-20 text-white md:px-10 md:py-28">
      <Reveal>
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-20">
          <div>
            <div className="mb-2.5 text-[11px] font-medium uppercase tracking-[0.28em] text-white/70">
              {eyebrow}
            </div>
            <h2 className="mb-4 text-[24px] font-medium leading-[1.2] tracking-[-0.04em] text-white sm:text-[30px] md:text-[38px]">
              {titlePre}
              <em className="not-italic text-white/80">{titleEm}</em>
            </h2>
            <p className="text-[14px] leading-[1.6] text-[#cfc8d4]">{lead}</p>
          </div>

          <div className="border-t border-white/15">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.label} className="border-b border-white/15">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center gap-5 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[14px] font-medium text-white/50">{item.num}</span>
                    <span className="flex-1 text-[16px] font-medium text-white md:text-[18px]">{item.label}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/30 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                        <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[520px] pb-5 pl-[38px] text-[14px] leading-[1.6] text-[#cfc8d4]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
