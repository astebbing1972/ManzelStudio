import Reveal from "./Reveal";

// Standalone compact variant of ServiceProcess for pages with a single,
// dedicated contact CTA elsewhere on the page (so this section carries no
// CTA of its own) and tighter vertical space. Kept separate from
// ServiceProcess.tsx (used by other, already-live service pages) so this
// page's needs never risk changing their rendered output.
export default function ServiceProcessCompact({
  eyebrow,
  titlePre,
  titleEm,
  titlePost,
  lead,
  phases,
}: {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  titlePost: string;
  lead: string;
  phases: { num: string; tag: string; title: string; body: string }[];
}) {
  return (
    <section className="bg-[#faf9f9] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[620px] text-center">
            <div className="eyebrow mb-2.5">{eyebrow}</div>
            <h2 className="text-[26px] font-medium leading-[1.2] tracking-[-0.04em] text-black sm:text-[32px]">
              {titlePre}
              <em className="not-italic text-aubergine">{titleEm}</em>
              {titlePost}
            </h2>
            <p className="mt-3 text-[15px] text-ink-2">{lead}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div
            className={`grid grid-cols-1 border border-line bg-white sm:grid-cols-2 ${
              phases.length >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"
            }`}
          >
            {phases.map((ph, i) => (
              <div
                key={ph.num}
                className={`flex flex-col gap-2 border-line p-5 ${
                  i !== phases.length - 1 ? "border-b lg:border-b-0 lg:border-r" : ""
                } sm:border-r`}
              >
                <div className="text-[23px] font-light italic leading-none text-aubergine">{ph.num}</div>
                <h3 className="text-[16px] font-medium leading-[1.25] text-ink">{ph.title}</h3>
                <p className="text-[13.5px] leading-[1.5] text-ink-2">{ph.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
