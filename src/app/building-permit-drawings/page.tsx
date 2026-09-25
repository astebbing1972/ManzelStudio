import type { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, serviceJsonLd, faqJsonLd } from "@/lib/seo";
import ServiceHeroNoCta from "@/components/ServiceHeroNoCta";
import TrustBar from "@/components/TrustBar";
import ServiceIntro from "@/components/ServiceIntro";
import WhatWeDesignContain from "@/components/WhatWeDesignContain";
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
  buildingPermitHeroV2,
  trustBar,
  buildingPermitIntroV2,
  buildingPermitWhatWeDesignV2,
  buildingPermitSurveyorIntroV2,
  buildingPermitWhatsIncluded,
  buildingPermitProcessV2,
  buildingPermitPlanningIntroV2,
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
        <ServiceIntro {...buildingPermitIntroV2} />
        <WhatWeDesignContain {...buildingPermitWhatWeDesignV2} />
        <ServiceIntro {...buildingPermitSurveyorIntroV2} />
        <WhatsIncluded {...buildingPermitWhatsIncluded} />
        <ServiceProcess {...buildingPermitProcessV2} />
        <ServiceIntro {...buildingPermitPlanningIntroV2} />
        <MultiResidential {...buildingPermitCapability} />
        <WhyManzel {...buildingPermitWhyManzel} />
        <Suburbs {...buildingPermitSuburbs} />
        <Testimonials />
        <Faq items={buildingPermitFaqsV2} />
        <ServiceCta {...buildingPermitCtaV2} />
      </main>
      <Footer />
    </>
  );
}
