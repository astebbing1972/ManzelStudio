import Image from "next/image";

// Shared hero image treatment for every service page, so the text placement,
// contrast and overlay are identical across them. Floor plans and renders
// ("contain") show the full image over a blurred copy of itself; photos
// ("cover") fill the banner like a normal hero. Either way one left-weighted
// scrim keeps the copy readable, and on phones the image sits in its own
// block above the text instead of behind it.
export default function HeroBackdrop({
  image,
  alt,
  imageMaxWidth,
  imageAspect,
  imageScale,
  feather = 8,
  fit = "contain",
}: {
  image: string;
  alt: string;
  /** Caps the displayed image at its native pixel width so low-res source
   * images aren't upscaled (and softened) on wide screens. */
  imageMaxWidth?: number;
  /** Native width / height. Lets the contained image's box match the image exactly so its side edges can be feathered into the backdrop. */
  imageAspect?: number;
  /** Shrinks the contained image (e.g. 0.9) to leave more breathing room around it. */
  imageScale?: number;
  /** Width (as % of the image) of the soft fade on its side edges. */
  feather?: number;
  fit?: "contain" | "cover";
}) {
  const contain = fit === "contain";
  return (
    <>
      <div className="relative aspect-[4/3] w-full overflow-hidden md:hidden">
        {contain && (
          <Image src={image} alt="" aria-hidden fill quality={40} className="scale-110 object-cover blur-2xl" sizes="100vw" />
        )}
        <Image
          src={image}
          alt={alt}
          fill
          quality={85}
          className={contain ? "object-contain" : "object-cover"}
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 hidden md:block">
        {contain && (
          <Image src={image} alt="" aria-hidden fill quality={40} className="scale-110 object-cover blur-2xl" sizes="100vw" />
        )}
        <div
          className={contain && imageAspect ? "absolute inset-y-0 left-1/2 h-full -translate-x-1/2" : "absolute inset-0 mx-auto"}
          style={
            contain
              ? {
                  maxWidth: imageMaxWidth ?? "100%",
                  aspectRatio: imageAspect,
                  scale: imageScale,
                  // Feather the side edges so the image blends into the blurred backdrop instead of ending in a hard seam.
                  maskImage: `linear-gradient(to right, transparent, #000 ${feather}%, #000 ${100 - feather}%, transparent)`,
                  WebkitMaskImage: `linear-gradient(to right, transparent, #000 ${feather}%, #000 ${100 - feather}%, transparent)`,
                }
              : undefined
          }
        >
          <Image
            src={image}
            alt={alt}
            fill
            priority
            quality={contain ? 85 : 75}
            className={contain ? "object-contain" : "object-cover"}
            sizes={contain && imageMaxWidth ? `${imageMaxWidth}px` : "100vw"}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />
      </div>
    </>
  );
}
