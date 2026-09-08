"use client";

import Image from "next/image";
import { useState } from "react";
import { sectors } from "@/lib/content";
import Reveal from "./Reveal";

function ArrowIcon({ flipped = false }: { flipped?: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className={flipped ? "rotate-180" : ""}
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Sectors() {
  const [index, setIndex] = useState(0);
  const total = sectors.length;
  const sector = sectors[index];

  const go = (dir: 1 | -1) => setIndex((v) => (v + dir + total) % total);

  return (
    <section className="bg-[#fbfbfb] px-6 pb-14 pt-12 md:px-10 md:pb-[150px] md:pt-[90px]">
      <Reveal>
        <h2 className="sector-heading mx-auto mb-10 max-w-[1400px] text-left font-medium tracking-[-0.044em] text-black">
          Sectors we work in.
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="mx-auto flex max-w-[1400px] flex-col gap-y-10 lg:flex-row-reverse lg:items-center lg:gap-x-[100px]">
          <div className="w-full lg:w-[58%]">
            <div className="mb-1 pt-5 text-[16px] font-medium text-black">
              <span>0{index + 1}</span>
              <span>/0{total}</span>
            </div>
            <h3 className="sector-title mb-3 font-medium tracking-[-0.044em] text-black">
              {sector.title}
            </h3>
            <div className="pb-10">
              {sector.paragraphs.map((p) => (
                <p key={p} className="mb-5 text-[17px] leading-[30px] text-black">
                  {p}
                </p>
              ))}
            </div>
            <a
              href={sector.href}
              className="inline-flex h-11 items-center justify-center border border-black px-9 text-[17px] font-medium text-black transition-colors duration-500 hover:bg-black hover:text-white"
            >
              Read More<span className="sr-only"> about {sector.title}</span>
            </a>
          </div>

          <div className="relative h-[320px] w-full overflow-hidden md:h-[420px] lg:h-[488px] lg:w-[42%]">
            {sectors.map((s, i) => (
              <div
                key={s.title}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  quality={70}
                  className="object-cover"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="relative z-10 mx-auto mt-[22px] flex max-w-[1400px] justify-center gap-2.5 lg:mt-[-70px] lg:justify-end">
        <button
          aria-label="Previous sector"
          onClick={() => go(-1)}
          className="grid h-[50px] w-[50px] place-items-center rounded-full bg-black transition-opacity duration-300 hover:opacity-80"
        >
          <ArrowIcon flipped />
        </button>
        <button
          aria-label="Next sector"
          onClick={() => go(1)}
          className="grid h-[50px] w-[50px] place-items-center rounded-full bg-black transition-opacity duration-300 hover:opacity-80"
        >
          <ArrowIcon />
        </button>
      </div>
    </section>
  );
}
