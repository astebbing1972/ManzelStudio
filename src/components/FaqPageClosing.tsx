import Reveal from "./Reveal";

export default function FaqPageClosing({
  title,
  paragraphs,
  cta,
}: {
  title: string;
  paragraphs: string[];
  cta: { label: string; href: string };
}) {
  return (
    <section className="bg-ink px-6 py-[100px] text-center text-white md:py-[130px]">
      <Reveal>
        <div className="mx-auto max-w-[720px]">
          <h2 className="mb-6 text-[34px] font-medium leading-[1.12] tracking-[-0.044em] text-white sm:text-[50px] md:text-[58px] md:leading-[1.05]">
            {title}
          </h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="mx-auto mb-4 max-w-[600px] text-[16px] leading-[1.6] text-[#cfc8d4] last:mb-10">
              {p}
            </p>
          ))}
          <a href={cta.href} className="btn-fill">
            {cta.label} <span className="arr" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
