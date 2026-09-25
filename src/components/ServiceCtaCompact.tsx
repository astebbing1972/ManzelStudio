import Reveal from "./Reveal";

// Standalone compact variant of ServiceCta with tighter vertical padding.
// Kept separate from ServiceCta.tsx (used by other, already-live service
// pages) so this page's needs never risk changing their rendered output.
export default function ServiceCtaCompact({
  eyebrow,
  titlePre,
  titleEm,
  titlePost,
  body,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  titlePost: string;
  body: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section className="bg-ink px-6 py-20 text-center text-white md:py-28">
      <Reveal>
        <div className="mx-auto max-w-[820px]">
          <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.28em] text-white/70">
            {eyebrow}
          </div>
          <h2 className="mb-5 text-[26px] font-medium leading-[1.2] tracking-[-0.04em] text-white sm:text-[36px] md:text-[46px]">
            {titlePre}
            <em className="not-italic text-white/80">{titleEm}</em>
            {titlePost}
          </h2>
          <p className="mx-auto mb-8 max-w-[540px] text-[15px] leading-[1.6] text-[#cfc8d4]">{body}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={primaryCta.href} className="btn-fill">
              {primaryCta.label} <span className="arr" />
            </a>
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="flex h-[54px] items-center gap-3.5 border border-white px-8 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-white hover:text-ink"
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
