import { whyChoose } from "@/lib/content";
import Reveal from "./Reveal";

export default function WhyChoose() {
  return (
    <section className="bg-[#f2f2f2] px-6 py-14 md:py-[120px]">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mx-auto mb-[70px] max-w-[780px] text-center">
            <div className="eyebrow mb-[18px]">— Why Choose Manzel Studio</div>
            <h2 className="text-[34px] font-medium leading-[1.15] tracking-[-0.044em] text-black sm:text-[46px] md:text-[62px] md:leading-[1.1]">
              Why we&rsquo;re considered among the best building designers in Melbourne.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w) => (
              <div key={w.num} className="flex min-h-[240px] flex-col gap-3.5 bg-white p-8 sm:p-9">
                <div className="text-[32px] font-normal italic leading-none text-aubergine">{w.num}</div>
                <h3 className="mt-2 text-[20px] font-medium leading-[1.2] sm:text-[22px]">{w.title}</h3>
                <p className="text-[14.5px] leading-[1.6] text-ink-2">{w.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="mt-[50px] text-center">
          <a href="/contact-us" className="btn-fill">
            Book Your Free Consultation <span className="arr" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
