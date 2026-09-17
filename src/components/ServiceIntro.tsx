import Reveal from "./Reveal";
import { renderRich } from "@/lib/richText";

export default function ServiceIntro({
  eyebrow,
  titlePre,
  paragraphs,
  cta,
}: {
  eyebrow: string;
  titlePre: string;
  paragraphs: string[];
  cta: { label: string; href: string };
}) {
  return (
    <section className="bg-white px-6 py-[100px] md:px-10 md:py-[125px]">
      <Reveal>
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-[100px]">
          <div>
            <div className="eyebrow mb-[18px]">{eyebrow}</div>
            <h2 className="text-[30px] font-medium leading-[1.15] tracking-[-0.044em] text-black sm:text-[40px] md:text-[48px] md:leading-[1.1]">
              {titlePre}
            </h2>
          </div>
          <div>
            <div className="space-y-5 text-[17px] leading-[30px] text-ink-2">
              {paragraphs.map((p) => (
                <p key={p}>{renderRich(p)}</p>
              ))}
            </div>
            <a
              href={cta.href}
              className="mt-9 inline-flex h-11 items-center justify-center border border-black px-9 text-[17px] font-medium text-black transition-colors duration-500 hover:bg-black hover:text-white"
            >
              {cta.label}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
