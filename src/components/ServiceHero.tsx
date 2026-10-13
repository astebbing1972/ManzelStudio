import HeroBackdrop from "./HeroBackdrop";

export default function ServiceHero({
  image,
  eyebrow,
  titlePre,
  titleEm,
  lead,
  sub,
  primaryCta,
  secondaryCta,
}: {
  image: string;
  imageAspect?: number;
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  lead: string;
  sub: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section className="relative min-h-[520px] overflow-hidden bg-ink md:flex md:min-h-[640px] md:items-center">
      <HeroBackdrop image={image} />
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 py-28 [text-shadow:0_1px_14px_rgba(0,0,0,0.65)] md:px-10 md:[text-shadow:none]">
        <div className="max-w-[760px]">
          <div className="mb-[18px] text-[11px] font-medium uppercase tracking-[0.28em] text-white/80">
            {eyebrow}
          </div>
          <h1 className="mb-7 text-[38px] font-medium leading-[1.1] tracking-[-0.044em] text-white sm:text-[54px] md:text-[70px] md:leading-[1.05]">
            {titlePre}
            <em className="not-italic text-white/90">{titleEm}</em>
          </h1>
          <p className="mb-3 max-w-[560px] text-[18px] leading-[1.5] text-white/90 md:text-[20px]">{lead}</p>
          <p className="mb-9 text-[14px] font-medium uppercase tracking-[0.18em] text-white/60">{sub}</p>
          <div className="flex flex-wrap items-center gap-4">
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
      </div>
    </section>
  );
}
