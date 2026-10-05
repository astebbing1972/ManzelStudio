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
  imageMaxWidth,
}: {
  image: string;
  /** Caps the displayed image at its native pixel width so low-res source
   * images aren't upscaled (and softened) on wide screens. */
  imageMaxWidth?: number;
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
    <section className="relative overflow-hidden bg-ink md:flex md:min-h-[640px] md:items-center">
      {/* Blurred cover-fill backdrop so the frame is never empty, with the
       * full, uncropped image shown over it via object-contain - floor plans
       * and renders lose essential content when cover-cropped into a wide
       * banner, per the client's "much of the floor-plan image is hidden"
       * feedback. On phones the image sits in its own block above the text
       * instead of behind it, where it would be a thin strip under the copy. */}
      <div className="relative aspect-[4/3] w-full overflow-hidden md:hidden">
        <Image src={image} alt="" aria-hidden fill quality={40} className="scale-110 object-cover blur-2xl" sizes="100vw" />
        <Image src={image} alt={`${titlePre}${titleEm}`} fill quality={85} className="object-contain" sizes="100vw" />
      </div>
      <div className="absolute inset-0 hidden md:block">
        <Image src={image} alt="" aria-hidden fill quality={40} className="scale-110 object-cover blur-2xl" sizes="100vw" />
        <div className="absolute inset-0 mx-auto" style={imageMaxWidth ? { maxWidth: imageMaxWidth } : undefined}>
          <Image
            src={image}
            alt={`${titlePre}${titleEm}`}
            fill
            priority
            quality={85}
            className="object-contain"
            sizes={imageMaxWidth ? `${imageMaxWidth}px` : "100vw"}
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 py-12 md:px-10 md:py-28">
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
