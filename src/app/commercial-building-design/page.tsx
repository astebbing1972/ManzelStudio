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
  commercialHero,
  trustBar,
  commercialIntro,
  commercialWhatWeDesign,
  commercialSpecialist,
  commercialWhatsIncluded,
  commercialProcess,
  commercialWhyManzel,
  commercialProjects,
  commercialSuburbs,
  commercialFaqs,
  commercialCta,
} from "@/lib/content";

const title = "Commercial Building Designer Melbourne | Manzel Studio";
const description =
  "Manzel Studio offers commercial building design and drafting services in Melbourne - offices, retail, industrial and mixed-use developments across Victoria.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/commercial-building-design",
});

export default function CommercialBuildingDesign() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Commercial Building Design",
          description,
          path: "/commercial-building-design",
        })}
      />
      <JsonLd data={faqJsonLd(commercialFaqs)} />
      <Header />
      <Breadcrumbs items={[{ name: "Commercial Building Design", path: "/commercial-building-design" }]} />
      <main className="flex-1">
        <ServiceHero {...commercialHero} />
        <TrustBar items={trustBar} />
        <ServiceIntro {...commercialIntro} />
        <WhatWeDesign {...commercialWhatWeDesign} />
        <MultiResidential {...commercialSpecialist} />
        <WhatsIncluded {...commercialWhatsIncluded} />
        <ServiceProcess {...commercialProcess} />
        <WhyManzel {...commercialWhyManzel} />
        <ServiceFeaturedProjects
          eyebrow="— Recent Commercial Work"
          titlePre="Featured Commercial Projects"
          titleEm=""
          lead="Explore completed commercial spaces shaped around brand, function, and long-term value."
          projects={commercialProjects}
          cta={{ label: "View Commercial Projects", href: "/our-projects" }}
        />
        <Suburbs {...commercialSuburbs} />
        <Testimonials />
        <Faq items={commercialFaqs} />
        <ServiceCta {...commercialCta} />
      </main>
      <Footer />
    </>
  );
}
