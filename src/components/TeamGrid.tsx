"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

type Member = { name: string; role: string; image: string; bio: string[] };

export default function TeamGrid({
  title,
  members,
}: {
  title: string;
  members: Member[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? members[activeIndex] : null;

  useEffect(() => {
    if (!active) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section className="bg-white px-6 py-[100px] md:px-10 md:py-[130px]">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2 className="about-heading mb-9 text-center font-medium tracking-[-0.044em] text-black">{title}</h2>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-5">
          {members.map((m, i) => (
            <Reveal
              key={m.name}
              delay={i * 60}
              className="w-[calc(50%-10px)] sm:w-[calc(33.333%-14px)] lg:w-[calc(20%-16px)]"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className="group block w-full text-center"
                aria-haspopup="dialog"
              >
                <div className="relative mb-3 h-[220px] overflow-hidden sm:h-[265px]">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    quality={70}
                    className="object-cover"
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                  />
                </div>
                <div className="mb-0.5 text-[22px] font-semibold leading-[1.2] text-black sm:text-[26px] md:text-[30px]">
                  {m.name}
                </div>
                <div className="mb-2 text-[15px] text-black/60 sm:text-[16px]">{m.role}</div>
                <span className="relative inline-flex items-center gap-2 text-[15px] font-medium text-black opacity-0 transition-opacity duration-500 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:bg-black group-hover:opacity-100 sm:text-[16px]">
                  Read Bio
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M10.39 8.45c-.2 0-.4-.08-.54-.22a.76.76 0 0 1-.22-.54L9.6 2.62 1.31 10.92a.77.77 0 0 1-1.09 0 .77.77 0 0 1 0-1.08l8.3-8.3-5.07-.01a.77.77 0 0 1-.75-.76c0-.1.02-.2.06-.29a.77.77 0 0 1 .72-.47L10.35.02c.1 0 .2.02.29.06a.78.78 0 0 1 .25.17.78.78 0 0 1 .22.53l.03 6.89a.78.78 0 0 1-.75.78z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.name} bio`}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/60 px-4 py-10 sm:items-center"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full max-w-[600px] bg-white p-7 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center text-black/70 transition-colors hover:text-black"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>

            <div className="flex flex-col gap-5 pr-10 sm:flex-row sm:gap-7">
              <div className="relative h-[120px] w-[120px] shrink-0 overflow-hidden sm:h-[140px] sm:w-[140px]">
                <Image src={active.image} alt={active.name} fill quality={70} className="object-cover" sizes="140px" />
              </div>

              <div>
                <h3 className="text-[26px] font-semibold leading-[1.2] text-black sm:text-[30px]">
                  {active.name} <span className="font-normal text-black/50">/ {active.role}</span>
                </h3>

                <div className="mt-4 space-y-4 text-[15px] leading-[1.65] text-ink-2 sm:text-[16px]">
                  {active.bio.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
