"use client";

import { useState } from "react";
import { testimonials } from "@/lib/content";
import Reveal from "./Reveal";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const go = (dir: 1 | -1) => setIndex((v) => (v + dir + total) % total);

  return (
    <section className="bg-[#fbfbfb] px-6 pt-16 md:pt-[120px]">
      <Reveal>
        <div className="mx-auto mb-16 max-w-[780px] text-center">
          <div className="eyebrow mb-[14px]">— Client Testimonials</div>
          <h2 className="text-[34px] font-medium leading-[1.15] tracking-[-0.044em] text-black sm:text-[50px] md:text-[70px] md:leading-[78px]">
            Words from the people who worked with us.
          </h2>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="mx-auto max-w-[1400px] pb-24">
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

          <div className="mt-10 flex justify-center gap-[30px]">
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
