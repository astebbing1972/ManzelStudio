import Image from "next/image";
import Reveal from "./Reveal";

// Standalone copy of WhatWeDesign for pages whose thumbnails (real photos,
// floor plans and placeholder graphics of mixed aspect ratios) shouldn't be
// cropped - object-contain keeps the whole image centered instead. Kept
// separate from WhatWeDesign.tsx (used by other live pages with photos that
// crop fine) so this never risks changing their rendered output.
export default function WhatWeDesignContain({
  eyebrow,
  titlePre,
  titleEm,
  lead,
  cards,
}: {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  lead: string;
  cards: { image: string; num: string; title: string; body: string }[];
}) {
  return (
    <section className="bg-paper px-6 py-[100px] md:px-10 md:py-[125px]">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mx-auto mb-[70px] max-w-[780px] text-center">
            <div className="eyebrow mb-[18px]">{eyebrow}</div>
            <h2 className="text-[32px] font-medium leading-[1.15] tracking-[-0.044em] text-black sm:text-[46px] md:text-[60px] md:leading-[1.1]">
              {titlePre}
              <em className="not-italic text-aubergine">{titleEm}</em>
            </h2>
            <p className="mt-5 text-[16px] text-ink-2">{lead}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <article>
                <div className="relative mb-6 h-[220px] w-full overflow-hidden bg-white md:h-[260px]">
                  <Image src={c.image} alt={c.title} fill quality={70} className="object-contain" sizes="(min-width: 640px) 33vw, 100vw" />
                </div>
                <div className="mb-2 text-[12px] font-medium uppercase tracking-[0.18em] text-muted">{c.num}</div>
                <h3 className="mb-2.5 text-[22px] font-medium leading-[1.25] text-ink">{c.title}</h3>
                <p className="text-[15px] leading-[1.6] text-ink-2">{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
