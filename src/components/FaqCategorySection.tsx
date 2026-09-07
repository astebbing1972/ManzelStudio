"use client";

import { useState } from "react";
import { renderRich } from "@/lib/richText";
import Reveal from "./Reveal";

export default function FaqCategorySection({
  id,
  num,
  title,
  lead,
  items,
  tinted = false,
}: {
  id: string;
  num: string;
  title: string;
  lead: string;
  items: { q: string; a: string }[];
  tinted?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id={id} className={`scroll-mt-28 border-t border-line py-16 ${tinted ? "bg-[#fbfbfb]" : "bg-white"}`}>
      <div className="mx-auto max-w-[900px] px-6 md:px-10">
        <Reveal>
          <div className="mb-10 flex gap-6 max-w-[760px]">
            <div className="shrink-0 text-[40px] font-light italic leading-none text-black/15 sm:text-[52px]">
              {num}
            </div>
            <div>
              <h2 className="mb-3 text-[24px] font-medium leading-[1.2] tracking-[-0.02em] text-black sm:text-[30px]">
                {title}
              </h2>
              <p className="text-[15.5px] leading-[1.6] text-ink-2">{lead}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div>
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
                    <span className="text-[16px] font-medium text-black md:text-[17.5px]">{item.q}</span>
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[14px] leading-none transition-all duration-300 ${
                        isOpen ? "rotate-45 border-aubergine bg-aubergine text-white" : "border-black/25 text-black"
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
                      <p className="max-w-[680px] pb-5 text-[15px] leading-[1.7] text-ink-2">{renderRich(item.a)}</p>
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
