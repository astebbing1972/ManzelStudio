import { solutions } from "@/lib/content";
import Reveal from "./Reveal";

export default function Solutions() {
  return (
    <section className="bg-paper px-6 py-14 md:py-[125px]">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mx-auto mb-[70px] max-w-[780px] text-center">
            <div className="eyebrow mb-[18px]">— Solutions We Provide</div>
            <h2 className="mb-[30px] text-[36px] font-medium leading-[1.1] tracking-[-0.044em] text-black sm:text-[50px] md:text-[70px] md:leading-[78px]">
              Everything you need, under one roof.
            </h2>
            <p className="text-[16px] text-ink-2">
              We deliver a complete suite of design and documentation services, so you have one expert team from
              feasibility to final permit.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-1 border border-line bg-white sm:grid-cols-2 lg:grid-cols-5">
            {solutions.map((s, i) => (
              <div
                key={s.title}
                className={`flex min-h-[280px] flex-col gap-3.5 border-line p-[26px] py-[38px] transition-colors duration-300 hover:bg-paper ${
                  i !== solutions.length - 1 ? "border-b lg:border-b-0 lg:border-r" : ""
                } sm:border-r`}
              >
                <div className="grid h-8 w-8 place-items-center rounded-full bg-ink text-[13px] font-semibold text-white">
                  ✓
                </div>
                <h3 className="mt-2 text-[21px] font-medium leading-[1.2] text-ink">{s.title}</h3>
                <p className="text-[14px] leading-[1.55] text-ink-2">{s.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
