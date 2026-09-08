import { phases } from "@/lib/content";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section className="bg-ink px-6 py-14 text-white md:py-[120px]">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mx-auto mb-[70px] max-w-[780px] text-center">
            <div className="mb-[18px] text-[11px] font-medium uppercase tracking-[0.28em] text-white/70">
              — Our Work Process
            </div>
            <h2 className="mb-[30px] text-[36px] font-medium leading-[1.1] tracking-[-0.044em] text-white sm:text-[50px] md:text-[70px] md:leading-[78px]">
              A clear four-phase process for faster, smarter approvals.
            </h2>
            <p className="text-[16px] text-[#cfc8d4]">
              Our streamlined process keeps your project clear, organised, and moving with confidence from concept to
              completion.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-1 border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {phases.map((ph, i) => (
              <div
                key={ph.num}
                className={`relative border-white/15 p-[26px] pb-9 pt-[42px] ${
                  i !== phases.length - 1 ? "border-b sm:border-r lg:border-b-0" : ""
                } ${i % 2 === 0 ? "sm:border-r" : ""}`}
              >
                <div className="text-[52px] font-light italic leading-none text-white/85 md:text-[64px]">
                  {ph.num}
                </div>
                <div className="mt-5 text-[10px] uppercase tracking-[0.28em] text-[#9b9099]">{ph.tag}</div>
                <h3 className="mt-2 text-[22px] font-medium text-white md:text-[24px]">{ph.title}</h3>
                <p className="mt-4 text-[14.5px] leading-[1.65] text-[#cfc8d4]">{ph.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="mt-[60px] text-center">
          <a
            href="/contact-us"
            className="inline-flex h-11 min-w-[220px] items-center justify-center bg-white px-6 text-[17px] font-medium text-ink transition-colors duration-500 hover:bg-[#e7e4df]"
          >
            Start Your Project With Us
          </a>
        </Reveal>
      </div>
    </section>
  );
}
