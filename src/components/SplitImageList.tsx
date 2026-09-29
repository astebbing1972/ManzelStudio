import Image from "next/image";
import Reveal from "./Reveal";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// Matched to the 4 fixed profitability points this section is built for
// (space efficiency, cost, compliance, market analysis) - order-dependent,
// same pattern as the icon arrays in WhatsIncludedCompact/WhyManzelCompact.
const icons: React.ReactNode[] = [
  <svg key="0" {...iconProps}>
    <rect x="3" y="4" width="18" height="16" rx="1" />
    <path d="M3 10h18M9 10v10" />
  </svg>,
  <svg key="1" {...iconProps}>
    <rect x="2" y="6" width="20" height="13" rx="2" />
    <path d="M2 10h20" />
    <circle cx="16" cy="14.5" r="1.6" />
  </svg>,
  <svg key="2" {...iconProps}>
    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>,
  <svg key="3" {...iconProps}>
    <path d="M4 19h16" />
    <path d="M7 19v-6M12 19V9M17 19v-9" />
    <path d="M4 9l5-4 4 3 7-5" />
  </svg>,
];

// Standalone section: one image beside a numbered list. Built for the
// Rooming House "Designed for Profit. Built for Success." section, which
// replaces a 6-card image grid with a single photo/render and Ali's
// numbered profitability points. Page-specific, not shared with any live page.
export default function SplitImageList({
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
            <Image src={image} alt={imageAlt} fill quality={80} className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
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
              {items.map((item, i) => (
                <div key={item.num} className="group flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-paper text-aubergine transition-colors duration-300 group-hover:bg-aubergine group-hover:text-white">
                    {icons[i]}
                  </div>
                  <div>
                    <div className="mb-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">{item.num}</div>
                    <h3 className="mb-1.5 text-[16px] font-medium leading-[1.3] text-ink">{item.title}</h3>
                    <p className="text-[14px] leading-[1.6] text-ink-2">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
