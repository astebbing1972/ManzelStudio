import type { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, serviceJsonLd, faqJsonLd } from "@/lib/seo";
import ServiceHeroNoCta from "@/components/ServiceHeroNoCta";
import TrustBar from "@/components/TrustBar";
import ServiceIntroCompact from "@/components/ServiceIntroCompact";
import WhatWeDesignContain from "@/components/WhatWeDesignContain";
import MultiResidentialCompact from "@/components/MultiResidentialCompact";
import WhatsIncludedCompact from "@/components/WhatsIncludedCompact";
import ServiceProcessCompact from "@/components/ServiceProcessCompact";
import WhyManzelCompact from "@/components/WhyManzelCompact";
import SuburbsCompact from "@/components/SuburbsCompact";
import TestimonialsCompact from "@/components/TestimonialsCompact";
import FaqCompact from "@/components/FaqCompact";
import ServiceCtaCompact from "@/components/ServiceCtaCompact";
import Footer from "@/components/Footer";
import {
  roomingHouseHeroV2,
  trustBar,
  roomingHouseIntro,
  roomingHouseWhatWeDesignV2,
  roomingHouseCapability,
  roomingHouseWhatsIncluded,
  roomingHouseProcessV2,
  roomingHouseWhyManzel,
  roomingHouseSuburbs,
  roomingHouseFaqs,
  roomingHouseCtaV2,
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
        <ServiceHeroNoCta {...roomingHouseHeroV2} />
        <TrustBar items={trustBar} />
        <ServiceIntroCompact {...roomingHouseIntro} />
        <WhatWeDesignContain {...roomingHouseWhatWeDesignV2} />
        <MultiResidentialCompact {...roomingHouseCapability} />
        <WhatsIncludedCompact {...roomingHouseWhatsIncluded} />
        <ServiceProcessCompact {...roomingHouseProcessV2} />
        <WhyManzelCompact {...roomingHouseWhyManzel} />
        <SuburbsCompact {...roomingHouseSuburbs} />
        <TestimonialsCompact />
        <FaqCompact items={roomingHouseFaqs} />
        <ServiceCtaCompact {...roomingHouseCtaV2} />
      </main>
      <Footer />
    </>
  );
}
