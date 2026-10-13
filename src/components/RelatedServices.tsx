import Link from "next/link";
import Reveal from "./Reveal";
import type { RelatedService } from "@/lib/relatedServices";

export default function RelatedServices({ items }: { items: RelatedService[] }) {
  return (
    <section className="bg-white px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mb-10 text-center">
            <div className="eyebrow mb-2.5">— Related Services</div>
            <h2 className="text-[24px] font-medium leading-[1.2] tracking-[-0.04em] text-black sm:text-[32px] md:text-[38px]">
              You may also need
            </h2>
          </div>
        </Reveal>
        <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 ${items.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {items.map((s, i) => (
            <Reveal key={s.href} delay={i * 80}>
              <Link
                href={s.href}
                className="group flex h-full flex-col border border-line bg-paper p-7 transition-colors duration-300 hover:border-ink"
              >
                <h3 className="mb-2 text-[19px] font-medium leading-[1.25] text-ink">{s.label}</h3>
                <p className="mb-5 text-[14px] leading-[1.6] text-ink-2">{s.blurb}</p>
                <span className="mt-auto text-[12px] font-medium uppercase tracking-[0.18em] text-ink">
                  Learn more <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
