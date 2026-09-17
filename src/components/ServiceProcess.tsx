import Reveal from "./Reveal";

export default function ServiceProcess({
  eyebrow,
  titlePre,
  titleEm,
  titlePost,
  lead,
  phases,
  cta,
}: {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  titlePost: string;
  lead: string;
  phases: { num: string; tag: string; title: string; body: string }[];
  cta: { label: string; href: string };
}) {
  return (
    <section className="bg-[#faf9f9] px-6 py-[100px] md:px-10 md:py-[125px]">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mx-auto mb-[70px] max-w-[780px] text-center">
            <div className="eyebrow mb-[18px]">{eyebrow}</div>
            <h2 className="text-[32px] font-medium leading-[1.15] tracking-[-0.044em] text-black sm:text-[46px] md:text-[60px] md:leading-[1.1]">
              {titlePre}
              <em className="not-italic text-aubergine">{titleEm}</em>
              {titlePost}
            </h2>
            <p className="mt-5 text-[16px] text-ink-2">{lead}</p>
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
                className={`flex flex-col gap-3.5 border-line p-8 ${
                  i !== phases.length - 1 ? "border-b lg:border-b-0 lg:border-r" : ""
                } sm:border-r`}
              >
                <div className="text-[15px] font-medium uppercase tracking-[0.18em] text-muted">{ph.tag}</div>
                <div className="text-[42px] font-light italic leading-none text-aubergine">{ph.num}</div>
                <h3 className="mt-1 text-[20px] font-medium leading-[1.25] text-ink">{ph.title}</h3>
                <p className="text-[14.5px] leading-[1.6] text-ink-2">{ph.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="mt-[50px] text-center">
          <a href={cta.href} className="btn-fill">
            {cta.label} <span className="arr" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
