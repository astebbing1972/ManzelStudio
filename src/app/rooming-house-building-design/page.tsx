import type { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, serviceJsonLd, faqJsonLd } from "@/lib/seo";
import ServiceHero from "@/components/ServiceHero";
import TrustBar from "@/components/TrustBar";
import ServiceIntro from "@/components/ServiceIntro";
import WhatWeDesign from "@/components/WhatWeDesign";
import MultiResidential from "@/components/MultiResidential";
import WhatsIncluded from "@/components/WhatsIncluded";
import ServiceProcess from "@/components/ServiceProcess";
import WhyManzel from "@/components/WhyManzel";
import Suburbs from "@/components/Suburbs";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import ServiceCta from "@/components/ServiceCta";
import Footer from "@/components/Footer";
import {
  roomingHouseHero,
  trustBar,
  roomingHouseIntro,
  roomingHouseWhatWeDesign,
  roomingHouseCapability,
  roomingHouseWhatsIncluded,
  roomingHouseProcess,
  roomingHouseWhyManzel,
  roomingHouseSuburbs,
  roomingHouseFaqs,
  roomingHouseCta,
} from "@/lib/content";

const title = "Rooming House Building Designer Melbourne | Manzel Studio";
const description =
  "Manzel Studio designs purpose-built and converted rooming houses in Melbourne, from site assessment through concept design to permit-ready documentation.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/rooming-house-building-design",
  noindex: true, // draft page for client review - remove once approved and linked from the site
});

export default function RoomingHouseBuildingDesign() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Rooming House Building Design",
          description,
          path: "/rooming-house-building-design",
        })}
      />
      <JsonLd data={faqJsonLd(roomingHouseFaqs)} />
      <Header />
      <Breadcrumbs items={[{ name: "Rooming House Building Design", path: "/rooming-house-building-design" }]} />
      <main className="flex-1">
        <ServiceHero {...roomingHouseHero} />
        <TrustBar items={trustBar} />
        <ServiceIntro {...roomingHouseIntro} />
        <WhatWeDesign {...roomingHouseWhatWeDesign} />
        <MultiResidential {...roomingHouseCapability} />
        <WhatsIncluded {...roomingHouseWhatsIncluded} />
        <ServiceProcess {...roomingHouseProcess} />
        <WhyManzel {...roomingHouseWhyManzel} />
        {/* ServiceFeaturedProjects intentionally omitted - no rooming house
            project examples supplied yet (client brief marks these "will be
            provided"). Add a `roomingHouseProjects` array to content.ts and
            slot <ServiceFeaturedProjects /> back in here once photos land. */}
        <Suburbs {...roomingHouseSuburbs} />
        <Testimonials />
        <Faq items={roomingHouseFaqs} />
        <ServiceCta {...roomingHouseCta} />
      </main>
      <Footer />
    </>
  );
}
