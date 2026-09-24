import Image from "next/image";

// Standalone variant of ServiceHero for pages with a single, dedicated
// contact CTA elsewhere on the page rather than in the hero. Kept separate
// from ServiceHero.tsx (used by other, already-live service pages) so this
// page's needs never risk changing their rendered output.
export default function ServiceHeroNoCta({
  image,
  eyebrow,
  titlePre,
  titleEm,
  lead,
  sub,
  cta,
}: {
  image: string;
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  lead: string;
  sub: string;
  /** Single service-specific contact button - not a pair, per the client's
   * "one clear contact button" instruction. */
  cta?: { label: string; href: string };
}) {
  return (
    <section className="relative flex min-h-[520px] items-center overflow-hidden md:min-h-[640px]">
      <Image src={image} alt={`${titlePre}${titleEm}`} fill priority quality={70} className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 py-28 md:px-10">
        <div className="max-w-[760px]">
          <div className="mb-[18px] text-[11px] font-medium uppercase tracking-[0.28em] text-white/80">
            {eyebrow}
          </div>
          <h1 className="mb-7 text-[38px] font-medium leading-[1.1] tracking-[-0.044em] text-white sm:text-[54px] md:text-[70px] md:leading-[1.05]">
            {titlePre}
            <em className="not-italic text-white/90">{titleEm}</em>
          </h1>
          <p className="mb-3 max-w-[560px] text-[18px] leading-[1.5] text-white/90 md:text-[20px]">{lead}</p>
          {sub && <p className="mb-9 text-[14px] font-medium uppercase tracking-[0.18em] text-white/60">{sub}</p>}
          {cta && (
            <a href={cta.href} className="btn-fill mt-3">
              {cta.label} <span className="arr" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
