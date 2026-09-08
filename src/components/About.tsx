"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { aboutSlides } from "@/lib/content";
import Reveal from "./Reveal";

export default function About() {
  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState(() => new Set([0]));

  useEffect(() => {
    const id = setInterval(() => {
      setActive((v) => {
        const next = (v + 1) % aboutSlides.length;
        setRevealed((prev) => (prev.has(next) ? prev : new Set(prev).add(next)));
        return next;
      });
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="w-full bg-[linear-gradient(239deg,rgba(0,0,0,0)_9.95%,rgba(0,0,0,0.06)_63.49%)]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-12 md:py-28 lg:grid-cols-2 lg:items-center lg:gap-x-16 lg:px-10">
        <Reveal className="relative order-2 aspect-[4/3] w-full overflow-hidden lg:order-1 lg:aspect-auto lg:h-[497px]">
          {aboutSlides.map((src, i) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            >
              {revealed.has(i) && (
                <Image
                  src={src}
                  alt="Manzel Studio building design"
                  fill
                  quality={70}
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              )}
            </div>
          ))}
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <div>
            <div className="eyebrow mb-4">— About Us</div>
            <h2 className="about-heading mb-4 font-medium tracking-[-0.044em] text-black">
              Manzel Studio:
              <br /> Melbourne&rsquo;s Leading Building Designers.
            </h2>
            <h3 className="about-subheading mb-5 font-medium tracking-[-0.042em] text-black">
              A leading building design studio across Melbourne, creating thoughtful, functional, and inspiring spaces.
            </h3>
            <div className="space-y-5 text-[17px] leading-[30px] text-black">
              <p>
                Manzel Studio is a design-led building design studio dedicated to creating thoughtful, functional, and
                inspiring spaces. We combine creativity with precision, guiding every project from concept to
                realisation. Our work reflects a commitment to quality, innovation, and the unique needs of each client.
              </p>
              <p>
                Whether you&rsquo;re planning a new home, developing a site, or reimagining an existing space,
                we&rsquo;ll guide you through each step with clear advice and thoughtful design. Our goal is simple: to
                create spaces that look beautiful, work effortlessly, and feel like they belong.
              </p>
            </div>
            <a
              href="/about-us"
              className="mt-10 inline-flex h-11 min-w-[220px] items-center justify-center bg-black px-9 text-[17px] font-medium text-white transition-colors duration-500 hover:bg-[#242424]"
            >
              Discover More
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
