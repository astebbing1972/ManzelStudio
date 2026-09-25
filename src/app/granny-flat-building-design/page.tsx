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
  grannyFlatHeroV2,
  trustBar,
  grannyFlatIntroV2,
  grannyFlatWhatWeDesignV2,
  grannyFlatCapabilityV2,
  grannyFlatWhatsIncluded,
  grannyFlatProcessV2,
  grannyFlatWhyManzel,
  grannyFlatSuburbs,
  grannyFlatFaqsV2,
  grannyFlatCtaV2,
} from "@/lib/content";

const title = "Granny Flat Building Designer Melbourne | Manzel Studio";
const description =
  "Custom granny flat (small second dwelling) design in Melbourne by Manzel Studio, from site assessment and concept through to permit-ready documentation.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/granny-flat-building-design",
  noindex: true, // draft page for client review - remove once approved and linked from the site
});

export default function GrannyFlatBuildingDesign() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Granny Flat Building Design",
          description,
          path: "/granny-flat-building-design",
        })}
      />
      <JsonLd data={faqJsonLd(grannyFlatFaqsV2)} />
      <Header />
      <Breadcrumbs items={[{ name: "Granny Flat Building Design", path: "/granny-flat-building-design" }]} />
      <main className="flex-1">
        <ServiceHeroNoCta {...grannyFlatHeroV2} />
        <TrustBar items={trustBar} />
        <ServiceIntroCompact {...grannyFlatIntroV2} />
        <WhatWeDesignContain {...grannyFlatWhatWeDesignV2} />
        <MultiResidentialCompact {...grannyFlatCapabilityV2} />
        <WhatsIncludedCompact {...grannyFlatWhatsIncluded} />
        <ServiceProcessCompact {...grannyFlatProcessV2} />
        <WhyManzelCompact {...grannyFlatWhyManzel} />
        <SuburbsCompact {...grannyFlatSuburbs} />
        <TestimonialsCompact />
        <FaqCompact items={grannyFlatFaqsV2} />
        <ServiceCtaCompact {...grannyFlatCtaV2} />
      </main>
      <Footer />
    </>
  );
}
