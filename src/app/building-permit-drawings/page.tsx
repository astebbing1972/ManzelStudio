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
  buildingPermitHero,
  trustBar,
  buildingPermitIntro,
  buildingPermitWhatWeDesign,
  buildingPermitSurveyorIntro,
  buildingPermitWhatsIncluded,
  buildingPermitProcess,
  buildingPermitPlanningIntro,
  buildingPermitCapability,
  buildingPermitWhyManzel,
  buildingPermitSuburbs,
  buildingPermitFaqs,
  buildingPermitCta,
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
      <JsonLd data={faqJsonLd(buildingPermitFaqs)} />
      <Header />
      <Breadcrumbs items={[{ name: "Building Permit Drawings", path: "/building-permit-drawings" }]} />
      <main className="flex-1">
        <ServiceHero {...buildingPermitHero} />
        <TrustBar items={trustBar} />
        <ServiceIntro {...buildingPermitIntro} />
        <WhatWeDesign {...buildingPermitWhatWeDesign} />
        <ServiceIntro {...buildingPermitSurveyorIntro} />
        <WhatsIncluded {...buildingPermitWhatsIncluded} />
        <ServiceProcess {...buildingPermitProcess} />
        <ServiceIntro {...buildingPermitPlanningIntro} />
        <MultiResidential {...buildingPermitCapability} />
        <WhyManzel {...buildingPermitWhyManzel} />
        {/* ServiceFeaturedProjects intentionally omitted - no project
            examples supplied yet for this page. Add a
            `buildingPermitProjects` array to content.ts and slot
            <ServiceFeaturedProjects /> back in here once photos land. */}
        <Suburbs {...buildingPermitSuburbs} />
        <Testimonials />
        <Faq items={buildingPermitFaqs} />
        <ServiceCta {...buildingPermitCta} />
      </main>
      <Footer />
    </>
  );
}
