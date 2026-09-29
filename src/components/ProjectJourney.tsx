import Reveal from "./Reveal";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons: Record<string, React.ReactNode> = {
  discovery: (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-2 6-6 2 2-6 6-2z" />
    </svg>
  ),
  concept: (
    <svg {...iconProps}>
      <path d="M4 20l4-1 11-11-3-3L5 16l-1 4z" />
      <path d="M14 6l3 3" />
    </svg>
  ),
  docs: (
    <svg {...iconProps}>
      <path d="M6 3h9l4 4v14H6V3z" />
      <path d="M15 3v4h4" />
      <path d="M9 14l2 2 4-4" />
    </svg>
  ),
  support: (
    <svg {...iconProps}>
      <circle cx="8" cy="14" r="4" />
      <path d="M11 11l9-9" />
      <path d="M16 6l3 3" />
      <path d="M14 8l3 3" />
    </svg>
  ),
};

type Phase = { icon: string; num: string; tag: string; title: string; body: string; forNote: string };

export default function ProjectJourney({
  eyebrow,
  titlePre,
  titleEm,
  titlePost,
  lead,
  phases,
  forLabel = "For The Avenue",
}: {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  titlePost: string;
  lead: string;
  phases: Phase[];
  forLabel?: string;
}) {
  return (
    <section className="bg-paper px-6 py-[120px] md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mb-[70px] grid grid-cols-1 items-end gap-x-[60px] gap-y-6 lg:grid-cols-2">
            <div>
              <div className="eyebrow mb-[18px] block">{eyebrow}</div>
              <h2 className="text-[38px] font-medium leading-[1.05] text-ink sm:text-[48px] md:text-[56px]">
                {titlePre}
                <em className="not-italic text-aubergine">{titleEm}</em>
                {titlePost}
              </h2>
            </div>
            <p className="max-w-[480px] text-[16px] leading-[1.65] text-ink-2">{lead}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {phases.map((ph, i) => (
              <div
                key={ph.num}
                className={`flex flex-col gap-3.5 border-line px-8 pb-8 pt-12 ${
                  i !== phases.length - 1 ? "border-b sm:border-r lg:border-b-0" : ""
                } ${i % 2 === 0 ? "sm:border-r" : ""}`}
              >
                <span className="h-[30px] w-[30px] text-ink">{icons[ph.icon]}</span>
                <div className="mt-1 text-[46px] font-light italic leading-none text-aubergine opacity-85 md:text-[54px]">
                  {ph.num}
                </div>
                <div className="text-[10px] font-medium uppercase tracking-[0.28em] text-muted">{ph.tag}</div>
                <h3 className="text-[20px] font-medium leading-[1.2] text-ink md:text-[21px]">{ph.title}</h3>
                <p className="text-[14.5px] leading-[1.6] text-ink-2">{ph.body}</p>
                <div className="mt-auto pt-[18px] text-[13.5px] italic leading-[1.55] text-ink-2">
                  <span className="mb-1.5 block text-[10px] font-medium not-italic uppercase tracking-[0.28em] text-aubergine">
                    {forLabel}
                  </span>
                  {ph.forNote}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
