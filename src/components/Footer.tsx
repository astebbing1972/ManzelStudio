"use client";

import Image from "next/image";
import { footerLogo, footerNav, memberBadges, socials, teamMembers } from "@/lib/content";
import { InstagramIcon, LinkedinIcon, PinterestIcon, XIcon } from "./icons";

const socialIcons: Record<string, React.ReactNode> = {
  Instagram: <InstagramIcon />,
  LinkedIn: <LinkedinIcon />,
  X: <XIcon />,
  Pinterest: <PinterestIcon />,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black px-6 pb-10 pt-20 text-white md:px-10">
      <div className="mx-auto max-w-[1520px]">
        <div className="mx-auto flex max-w-[1260px] flex-wrap items-center justify-center gap-y-6 border-b border-white/20 pb-10 md:pb-12">
          <div className="w-full sm:w-auto sm:shrink-0 sm:pr-[75px]">
            <h3 className="text-[22px] font-medium tracking-[-0.032em] text-white">We are proud members of:</h3>
          </div>
          <div className="flex w-full flex-1 flex-wrap items-center justify-start gap-x-[60px] gap-y-5 sm:w-auto">
            {memberBadges.map((b) => (
              <div key={b.alt} className="flex h-[65px] items-center">
                <Image
                  src={b.image}
                  alt={b.alt}
                  width={200}
                  height={65}
                  className="h-[65px] w-auto max-w-[182px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-14 border-b border-white/20 py-16 md:grid-cols-4 md:gap-10">
          <div className="md:col-span-2">
            <Image src={footerLogo} alt="Manzel Studio" width={180} height={44} className="mb-6" />
            <p className="max-w-sm text-[17px] leading-[30px] text-white">
              Manzel Studio is a building design studio committed to creating thoughtful, functional and inspiring
              spaces.
            </p>

            <h3 className="mt-10 mb-5 text-[20px] font-semibold text-white">Our Office Location</h3>
            <p className="flex items-center gap-3 text-[17px] leading-[30px] text-white">
              <b className="font-normal">84 Hotham St, Preston VIC 3072</b>
              <a
                href="https://maps.app.goo.gl/qnrXkLsebNPtkh1u8"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white underline transition-colors duration-500 hover:text-white/70"
              >
                Get Direction
              </a>
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-[18px] font-bold text-white">Contact</h4>
            <a href="mailto:info@manzelstudio.com" className="block pb-5 text-[20px] tracking-[-0.014em] text-white transition-colors duration-500 hover:text-white/70">
              info@manzelstudio.com
            </a>
            {teamMembers.map((m, i) => (
              <div key={m.name} className={i < teamMembers.length - 1 ? "pb-5" : ""}>
                <div className="mb-0.5 text-[13px] tracking-[0.02em] text-white/50">{m.name}</div>
                <a
                  href={m.phoneHref}
                  className="block text-[20px] tracking-[-0.014em] text-white transition-colors duration-500 hover:text-white/70"
                >
                  {m.phone}
                </a>
              </div>
            ))}
          </div>

          <div>
            <h4 className="mb-5 text-[18px] font-bold text-white">Explore</h4>
            <nav className="flex flex-col gap-0">
              {footerNav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="border-b-0 py-0 pb-[22px] text-[20px] text-white transition-colors duration-500 hover:text-white/70"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 pt-8 md:flex-row">
          <p className="text-center text-[14px] leading-[30px] text-white/70 md:text-left">
            ©{year} <strong className="font-medium text-white/80">MANZEL STUDIO.</strong> All rights reserved. ABN 36
            678 778 437. | Powered by{" "}
            <a
              href="https://www.effektivweb.com.au/solution-effektai-content"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/80 transition-colors duration-500 hover:text-white"
            >
              EffektAI
            </a>
          </p>

          <div className="flex items-center gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors duration-300 hover:border-white hover:text-white"
              >
                {socialIcons[s.label]}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2.5 text-[15px] text-white/60 transition-colors duration-500 hover:text-white"
          >
            <span className="text-white/80 group-hover:text-white">Back to Top</span>
            <svg width="28" height="28" viewBox="0 0 34 34" fill="none">
              <circle cx="17" cy="17" r="16.5" stroke="currentColor" strokeOpacity="0.43" />
              <path d="M17 22V12M17 12L12 17M17 12L22 17" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
