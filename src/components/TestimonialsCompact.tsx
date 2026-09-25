"use client";

import { useState } from "react";
import { testimonials } from "@/lib/content";
import Reveal from "./Reveal";

// Standalone compact variant of Testimonials with tighter vertical padding.
// Kept separate from Testimonials.tsx (used by other, already-live service
// pages) so this page's needs never risk changing their rendered output.
export default function TestimonialsCompact() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const go = (dir: 1 | -1) => setIndex((v) => (v + dir + total) % total);

  return (
    <section className="bg-[#fbfbfb] px-6 pt-20 md:pt-28">
      <Reveal>
        <div className="mx-auto mb-12 max-w-[780px] text-center">
          <div className="eyebrow mb-2.5">— Client Testimonials</div>
          <h2 className="text-[26px] font-medium leading-[1.2] tracking-[-0.04em] text-black sm:text-[36px] md:text-[46px]">
            Words from the people who worked with us.
          </h2>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="mx-auto max-w-[1400px] pb-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[0, 1, 2].map((offset) => {
              const t = testimonials[(index + offset) % total];
              return (
                <div
                  key={`${t.name}-${offset}`}
                  className={`flex flex-col gap-[18px] border border-line bg-white p-[30px] ${
                    offset !== 0 ? "hidden md:flex" : ""
                  }`}
                >
                  <div className="h-5 text-[54px] italic leading-[0.5] text-aubergine">&ldquo;</div>
                  <blockquote className="text-[18px] leading-[1.45] text-ink md:text-[19px]">
                    {t.quote}
                  </blockquote>
                  <div className="mt-auto border-t border-line pt-[18px]">
                    <p className="mb-0.5 text-[15px] font-medium text-ink">{t.name}</p>
                    <span className="text-[12px] tracking-[0.05em] text-muted">{t.role}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex justify-center gap-[30px]">
            <button
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="grid h-11 w-11 place-items-center border border-black/20 text-black transition-colors duration-300 hover:border-black hover:bg-black hover:text-white"
            >
              ←
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="grid h-11 w-11 place-items-center border border-black/20 text-black transition-colors duration-300 hover:border-black hover:bg-black hover:text-white"
            >
              →
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
