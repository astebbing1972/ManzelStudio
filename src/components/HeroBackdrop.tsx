import Image from "next/image";

// Shared hero background for every service page, so the text placement,
// overlay and contrast are identical across them. Per the client's request
// only the blurred version of the banner image is shown - the sharp image on
// top is gone - under the same left-weighted scrim on every screen size.
export default function HeroBackdrop({ image }: { image: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image src={image} alt="" aria-hidden fill priority quality={40} className="scale-110 object-cover blur-2xl" sizes="100vw" />
      <div className="absolute inset-0 bg-black/65 md:bg-transparent md:bg-gradient-to-r md:from-black/85 md:via-black/65 md:to-black/40" />
    </div>
  );
}
