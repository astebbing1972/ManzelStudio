"use client";

import { useState } from "react";
import { faqs as defaultFaqs } from "@/lib/content";
import { renderRich } from "@/lib/richText";
import Reveal from "./Reveal";

// Standalone compact variant of Faq with tighter vertical padding. Kept
// separate from Faq.tsx (used by other, already-live service pages) so this
// page's needs never risk changing their rendered output.
export default function FaqCompact({
  items = defaultFaqs,
  lead = "Got questions about permits, timelines, feasibility, or Manzel Studio? Here are common pre-project client FAQs.",
}: {
  items?: { q: string; a: string }[];
  lead?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#fbfbfb] px-6 py-16 md:py-28">
      <div className="mx-auto max-w-[854px]">
        <Reveal>
          <div className="mb-12 text-center">
            <div className="eyebrow mb-2.5">— Frequently Asked Questions</div>
            <h2 className="mb-2.5 text-[26px] font-medium leading-[1.2] tracking-[-0.04em] text-black sm:text-[36px] md:text-[46px]">
              Frequently Asked Questions.
            </h2>
            <p className="text-[14px] text-ink-2">{lead}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="border-t border-line">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[16px] font-medium text-black md:text-[17px]">{item.q}</span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-black/25 text-[15px] leading-none transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 text-[14.5px] leading-[1.65] text-ink-2 md:text-[15px]">{renderRich(item.a)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
