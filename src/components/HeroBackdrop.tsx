import Image from "next/image";

// Shared hero image treatment for every service page, so the text placement,
// contrast and overlay are the same across them (text over the image on every
// screen size). On desktop the full image shows over a blurred copy of itself
// with its edges feathered into it. On phones, photos fill the banner and
// floor plans are zoomed to a useful size over the same blurred fill.
export default function HeroBackdrop({
  image,
  alt,
  imageMaxWidth,
  imageAspect,
  imageScale,
  feather = 8,
  mobileZoom = 1.25,
  mobilePosition = "center top",
  phone = "plan",
  fit = "contain",
}: {
  image: string;
  alt: string;
  /** Caps the displayed image at its native pixel width so low-res source
   * images aren't upscaled (and softened) on wide screens. */
  imageMaxWidth?: number;
  /** Native width / height. Lets the contained image's box match the image exactly so its edges can be feathered into the backdrop. */
  imageAspect?: number;
  /** Shrinks the contained image (e.g. 0.9) to leave more breathing room around it. */
  imageScale?: number;
  /** Width (as % of the image) of the soft fade on its edges. */
  feather?: number;
  /** Phones only (plan mode): how far past full-width the plan is zoomed (1 = whole plan visible). */
  mobileZoom?: number;
  /** Phones only (plan mode): which part of the plan stays centred when zoomed (CSS object-position). */
  mobilePosition?: string;
  /** Phones: "plan" zooms a floor plan over a blurred fill; "cover" fills the banner (photos). */
  phone?: "plan" | "cover";
  fit?: "contain" | "cover";
}) {
  const scrim = (phoneClass: string) =>
    `absolute inset-0 ${phoneClass} md:bg-transparent md:bg-gradient-to-r md:from-black/85 md:via-black/65 md:to-black/40`;

  if (fit === "cover") {
    return (
      <div className="absolute inset-0">
        <Image src={image} alt={alt} fill priority quality={75} className="object-cover" sizes="100vw" />
        <div className={scrim("bg-black/60")} />
      </div>
    );
  }

  // Wide images fill the width and fade top/bottom; taller ones fill the height and fade at the sides.
  const wide = (imageAspect ?? 0) > 2.3;
  const mask = `linear-gradient(to ${wide ? "bottom" : "right"}, transparent, #000 ${feather}%, #000 ${100 - feather}%, transparent)`;
  const boxClass = !imageAspect
    ? "absolute inset-0 mx-auto hidden md:block"
    : wide
      ? "absolute inset-x-0 top-1/2 hidden w-full -translate-y-1/2 md:block"
      : "absolute inset-y-0 left-1/2 hidden h-full -translate-x-1/2 md:block";

  return (
    <div className="absolute inset-0">
      {phone === "cover" ? (
        <div className="absolute inset-0 md:hidden">
          <Image src={image} alt={alt} fill priority quality={75} className="object-cover" sizes="100vw" />
        </div>
      ) : (
        <div className="absolute inset-0 overflow-hidden md:hidden">
          <Image src={image} alt="" aria-hidden fill priority quality={40} className="scale-110 object-cover blur-2xl" sizes="100vw" />
          <div
            className="absolute inset-0"
            style={{
              scale: mobileZoom,
              transformOrigin: "50% 0%",
              maskImage: "linear-gradient(to bottom, #000 88%, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, #000 88%, transparent)",
            }}
          >
            <Image src={image} alt={alt} fill priority quality={80} className="object-contain" style={{ objectPosition: mobilePosition }} sizes="100vw" />
          </div>
        </div>
      )}

      <Image src={image} alt="" aria-hidden fill quality={40} className="hidden scale-110 object-cover blur-2xl md:block" sizes="100vw" />
      <div
        className={boxClass}
        style={{
          maxWidth: imageMaxWidth ?? "100%",
          aspectRatio: imageAspect,
          scale: imageScale,
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
      >
        <Image
          src={image}
          alt={alt}
          fill
          priority
          quality={85}
          className="object-contain"
          sizes={imageMaxWidth ? `${imageMaxWidth}px` : "100vw"}
        />
      </div>
      <div className={scrim(phone === "cover" ? "bg-black/60" : "bg-black/75")} />
    </div>
  );
}
