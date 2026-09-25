import Reveal from "./Reveal";

// Standalone compact variant of Suburbs with tighter vertical padding. Kept
// separate from Suburbs.tsx (used by other, already-live service pages) so
// this page's needs never risk changing their rendered output.
export default function SuburbsCompact({
  eyebrow,
  titlePre,
  titleEm,
  body,
  chips,
}: {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  body: string;
  chips: string[];
}) {
  return (
    <section className="bg-paper px-6 py-20 md:px-10 md:py-28">
      <Reveal>
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-20">
          <div>
            <div className="eyebrow mb-2.5">{eyebrow}</div>
            <h2 className="text-[24px] font-medium leading-[1.2] tracking-[-0.04em] text-black sm:text-[30px] md:text-[36px]">
              {titlePre}
              <em className="not-italic text-aubergine">{titleEm}</em>
            </h2>
          </div>
          <div>
            <p className="mb-5 text-[14px] leading-[1.6] text-ink-2">{body}</p>
            <div className="flex flex-wrap gap-2.5">
              {chips.map((c) => (
                <span
                  key={c}
                  className="border border-line bg-white px-4 py-2 text-[13px] font-medium text-ink"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
