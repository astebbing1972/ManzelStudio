"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/content";

export default function Hero() {
  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState(() => new Set([0]));

  useEffect(() => {
    const id = setInterval(() => {
      setActive((v) => {
        const next = (v + 1) % heroSlides.length;
        setRevealed((prev) => (prev.has(next) ? prev : new Set(prev).add(next)));
        return next;
      });
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative aspect-[64/27] min-h-[420px] w-full overflow-hidden bg-ink">
      {heroSlides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          {revealed.has(i) && (
            <Image
              src={src}
              alt=""
              fill
              priority={i === 0}
              fetchPriority={i === 0 ? "high" : undefined}
              quality={70}
              className="object-cover"
              sizes="100vw"
            />
          )}
          <div className="absolute inset-0 bg-black/[0.56]" />
        </div>
      ))}

      <div className="relative z-10 flex h-full max-w-[1440px] items-end px-6 pb-[70px] md:pb-[90px] md:pl-10 lg:pb-[120px] lg:pl-[60px] xl:pb-[150px] xl:pl-[140px] 2xl:pb-[180px] 2xl:pl-[260px]">
        <div className="max-w-[1000px]">
          <h1 className="mb-6 text-[32px] font-medium leading-[1.15] tracking-[-0.044em] text-white sm:text-[60px] md:mb-7 md:text-[46px] md:leading-[1.15] lg:mb-8 lg:text-[60px] lg:leading-[1.1] xl:mb-9 xl:text-[76px] xl:leading-[1.05] 2xl:text-[92px] 2xl:leading-[100px]">
            Designing spaces
            <br />
            that inspire, from concept to creation.
          </h1>
          <a
            href="/contact-us"
            className="flex h-11 w-full max-w-[248px] items-center justify-center border border-white text-[17px] font-medium text-white transition-colors duration-500 hover:bg-white hover:text-black"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10 flex">
        {heroSlides.map((src, i) => (
          <button
            key={src}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActive(i)}
            className="group flex h-6 w-6 items-center justify-center"
          >
            <span
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-white" : "w-1.5 bg-white/50 group-hover:bg-white/80"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
