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
  buildingPermitHeroV2,
  trustBar,
  buildingPermitIntroV2,
  buildingPermitWhatWeDesignV2,
  buildingPermitConsultantsAccordion,
  buildingPermitWhatsIncluded,
  buildingPermitProcessV2,
  buildingPermitCapability,
  buildingPermitWhyManzel,
  buildingPermitSuburbs,
  buildingPermitFaqsV2,
  buildingPermitCtaV2,
} from "@/lib/content";

const title = "Building Permit Drawings Melbourne | Manzel Studio";
const description =
  "Building permit drawings in Melbourne for residential and commercial projects. Detailed, coordinated documentation for permits, consultants and construction.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/building-permit-drawings",
  noindex: true, // draft page for client review - remove once approved and linked from the site
});

export default function BuildingPermitDrawings() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Building Permit Drawings",
          description,
          path: "/building-permit-drawings",
        })}
      />
      <JsonLd data={faqJsonLd(buildingPermitFaqsV2)} />
      <Header />
      <Breadcrumbs items={[{ name: "Building Permit Drawings", path: "/building-permit-drawings" }]} />
      <main className="flex-1">
        <ServiceHeroNoCta {...buildingPermitHeroV2} />
        <TrustBar items={trustBar} />
        <ServiceIntroCompact {...buildingPermitIntroV2} />
        <WhatWeDesignContain {...buildingPermitWhatWeDesignV2} />
        <MultiResidentialCompact {...buildingPermitConsultantsAccordion} />
        <WhatsIncludedCompact {...buildingPermitWhatsIncluded} />
        <ServiceProcessCompact {...buildingPermitProcessV2} />
        <MultiResidentialCompact {...buildingPermitCapability} />
        <WhyManzelCompact {...buildingPermitWhyManzel} />
        <SuburbsCompact {...buildingPermitSuburbs} />
        <TestimonialsCompact />
        <FaqCompact items={buildingPermitFaqsV2} />
        <ServiceCtaCompact {...buildingPermitCtaV2} />
      </main>
      <Footer />
    </>
  );
}
