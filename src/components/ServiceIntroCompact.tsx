import Reveal from "./Reveal";
import { renderRich } from "@/lib/richText";

// Standalone compact variant of ServiceIntro with tighter vertical padding.
// Kept separate from ServiceIntro.tsx (used by other, already-live service
// pages) so this page's needs never risk changing their rendered output.
export default function ServiceIntroCompact({
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
    <section className="bg-white px-6 py-20 md:px-10 md:py-28">
      <Reveal>
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-20">
          <div>
            <div className="eyebrow mb-2.5">{eyebrow}</div>
            <h2 className="text-[24px] font-medium leading-[1.2] tracking-[-0.04em] text-black sm:text-[30px] md:text-[36px]">
              {titlePre}
            </h2>
          </div>
          <div>
            <div className="space-y-4 text-[15px] leading-[26px] text-ink-2">
              {paragraphs.map((p) => (
                <p key={p}>{renderRich(p)}</p>
              ))}
            </div>
            <a
              href={cta.href}
              className="mt-6 inline-flex h-11 items-center justify-center border border-black px-9 text-[15px] font-medium text-black transition-colors duration-500 hover:bg-black hover:text-white"
            >
              {cta.label}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
