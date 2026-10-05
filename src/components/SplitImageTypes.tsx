import Image from "next/image";
import Reveal from "./Reveal";

// Standalone section: one image beside a list of plain numbered items (no
// icons, unlike SplitImageList). Built for sections with only a single good
// reference image available - e.g. Rooming House's "Type of rooming houses
// we can design", where showing one real floor plan beside the 4 project
// types reads better than several placeholder-image cards. Page-specific,
// not shared with any live page.
export default function SplitImageTypes({
  eyebrow,
  titlePre,
  titleEm,
  lead,
  image,
  imageAlt,
  items,
}: {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  lead: string;
  image: string;
  imageAlt: string;
  items: { num: string; title: string; body: string }[];
}) {
  return (
    <section className="bg-white px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-x-20">
        <Reveal>
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper">
            <Image
              src={image}
              alt=""
              aria-hidden
              fill
              quality={30}
              className="scale-110 object-cover opacity-50 blur-xl"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <Image src={image} alt={imageAlt} fill quality={80} className="object-contain" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div>
            <div className="eyebrow mb-2.5">{eyebrow}</div>
            <h2 className="mb-4 text-[24px] font-medium leading-[1.2] tracking-[-0.04em] text-black sm:text-[30px] md:text-[36px]">
              {titlePre}
              <em className="not-italic text-aubergine">{titleEm}</em>
            </h2>
            <p className="mb-8 text-[15px] leading-[1.6] text-ink-2">{lead}</p>

            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.num}>
                  <div className="mb-1 text-[12px] font-medium uppercase tracking-[0.18em] text-muted">{item.num}</div>
                  <h3 className="mb-1.5 text-[16px] font-medium leading-[1.3] text-ink">{item.title}</h3>
                  <p className="text-[14px] leading-[1.6] text-ink-2">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
