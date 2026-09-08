"use client";

import { useState } from "react";
import { faqs as defaultFaqs } from "@/lib/content";
import { renderRich } from "@/lib/richText";
import Reveal from "./Reveal";

export default function Faq({
  items = defaultFaqs,
  lead = "Got questions about permits, timelines, feasibility, or Manzel Studio? Here are common pre-project client FAQs.",
}: {
  items?: { q: string; a: string }[];
  lead?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#fbfbfb] px-6 pb-14 pt-14 md:pb-[120px] md:pt-[120px]">
      <div className="mx-auto max-w-[854px]">
        <Reveal>
          <div className="mb-16 text-center">
            <div className="eyebrow mb-[18px]">— Frequently Asked Questions</div>
            <h2 className="mb-[18px] text-[32px] font-medium leading-[1.15] tracking-[-0.044em] text-black sm:text-[46px] md:text-[60px] md:leading-[1.1]">
              Frequently Asked Questions.
            </h2>
            <p className="text-[16px] text-ink-2">{lead}</p>
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
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[17px] font-medium text-black md:text-[19px]">{item.q}</span>
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
                      <p className="pb-6 text-[15.5px] leading-[1.7] text-ink-2 md:text-[16px]">{renderRich(item.a)}</p>
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
