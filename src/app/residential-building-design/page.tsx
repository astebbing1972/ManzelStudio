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
  residentialHero,
  trustBar,
  residentialIntro,
  whatWeDesign,
  multiResidential,
  whatsIncluded,
  residentialProcess,
  whyManzel,
  residentialProjects,
  suburbs,
  residentialFaqs,
  residentialCta,
} from "@/lib/content";

const title = "Residential Building Designer Melbourne | Manzel Studio";
const description =
  "Manzel Studio is a registered Melbourne building designer & draftsperson specialising in custom homes, extensions, and multi-unit developments across Victoria.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/residential-building-design",
});

export default function ResidentialBuildingDesign() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Residential Building Design",
          description,
          path: "/residential-building-design",
        })}
      />
      <JsonLd data={faqJsonLd(residentialFaqs)} />
      <Header />
      <Breadcrumbs items={[{ name: "Residential Building Design", path: "/residential-building-design" }]} />
      <main className="flex-1">
        <ServiceHero {...residentialHero} />
        <TrustBar items={trustBar} />
        <ServiceIntro {...residentialIntro} />
        <WhatWeDesign {...whatWeDesign} />
        <MultiResidential {...multiResidential} />
        <WhatsIncluded {...whatsIncluded} />
        <ServiceProcess {...residentialProcess} />
        <WhyManzel {...whyManzel} />
        <ServiceFeaturedProjects
          eyebrow="— Recent Residential Work"
          titlePre="Featured "
          titleEm="residential projects."
          lead="Explore completed homes shaped around lifestyle, site, and long-term value."
          projects={residentialProjects}
          cta={{ label: "View All Residential Projects", href: "/our-projects" }}
        />
        <Suburbs {...suburbs} />
        <Testimonials />
        <Faq items={residentialFaqs} />
        <ServiceCta {...residentialCta} />
      </main>
      <Footer />
    </>
  );
}
