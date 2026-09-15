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
import ServiceFeaturedProjects from "@/components/ServiceFeaturedProjects";
import Suburbs from "@/components/Suburbs";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import ServiceCta from "@/components/ServiceCta";
import Footer from "@/components/Footer";
import {
  healthHero,
  trustBar,
  healthIntro,
  healthWhatWeDesign,
  healthInclusive,
  healthWhatsIncluded,
  healthProcess,
  healthWhyManzel,
  healthProjects,
  healthSuburbs,
  healthFaqs,
  healthCta,
} from "@/lib/content";

const title = "Healthcare Building Designer Melbourne | Manzel Studio";
const description =
  "Manzel Studio is a BPC registered healthcare building designer providing registered design for medical centres, aged care and NDIS facilities across Victoria.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/health-space-design",
});

export default function HealthSpaceDesign() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Health Space Building Design",
          description,
          path: "/health-space-design",
        })}
      />
      <JsonLd data={faqJsonLd(healthFaqs)} />
      <Header />
      <Breadcrumbs items={[{ name: "Health Space Design", path: "/health-space-design" }]} />
      <main className="flex-1">
        <ServiceHero {...healthHero} />
        <TrustBar items={trustBar} />
        <ServiceIntro {...healthIntro} />
        <WhatWeDesign {...healthWhatWeDesign} />
        <MultiResidential {...healthInclusive} />
        <WhatsIncluded {...healthWhatsIncluded} />
        <ServiceProcess {...healthProcess} />
        <WhyManzel {...healthWhyManzel} />
        <ServiceFeaturedProjects
          eyebrow="— Recent Commercial Work"
          titlePre="Recent Health Space Work"
          titleEm=""
          lead="Explore completed healthcare environments shaped around patient experience, workflow, and long term care."
          projects={healthProjects}
          cta={{ label: "View All Health Space Projects", href: "/our-projects" }}
        />
        <Suburbs {...healthSuburbs} />
        <Testimonials />
        <Faq items={healthFaqs} />
        <ServiceCta {...healthCta} />
      </main>
      <Footer />
    </>
  );
}
