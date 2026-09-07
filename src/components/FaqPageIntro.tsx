import Reveal from "./Reveal";

export default function FaqPageIntro({
  paragraphs,
  categories,
}: {
  paragraphs: string[];
  categories: { id: string; title: string; count: number }[];
}) {
  return (
    <section className="bg-white px-6 pb-10 pt-[60px] md:px-10">
      <div className="mx-auto max-w-[900px]">
        <Reveal>
          <div className="mb-10">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={`text-[17px] leading-[1.7] text-ink-2 ${i === 0 ? "text-[19px] text-black" : ""} ${
                  i < paragraphs.length - 1 ? "mb-4" : ""
                }`}
              >
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div>
            <div className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-muted">Jump to a topic</div>
            <div className="flex flex-wrap gap-2.5">
              {categories.map((c) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="group flex items-center gap-2 border border-line px-4 py-2 text-[14px] text-ink transition-colors duration-300 hover:border-black hover:bg-black hover:text-white"
                >
                  {c.title}
                  <span className="text-[12px] text-muted group-hover:text-white/70">{c.count}</span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
