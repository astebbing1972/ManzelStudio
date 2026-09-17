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
  grannyFlatHero,
  trustBar,
  grannyFlatIntro,
  grannyFlatWhatWeDesign,
  grannyFlatCapability,
  grannyFlatWhatsIncluded,
  grannyFlatProcess,
  grannyFlatWhyManzel,
  grannyFlatSuburbs,
  grannyFlatFaqs,
  grannyFlatCta,
} from "@/lib/content";

const title = "Granny Flat Building Designer Melbourne | Manzel Studio";
const description =
  "Custom granny flat designs in Melbourne by Manzel Studio. Practical secondary dwelling design from site assessment and concept through to permit documentation.";

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
      <JsonLd data={faqJsonLd(grannyFlatFaqs)} />
      <Header />
      <Breadcrumbs items={[{ name: "Granny Flat Building Design", path: "/granny-flat-building-design" }]} />
      <main className="flex-1">
        <ServiceHero {...grannyFlatHero} />
        <TrustBar items={trustBar} />
        <ServiceIntro {...grannyFlatIntro} />
        <WhatWeDesign {...grannyFlatWhatWeDesign} />
        <MultiResidential {...grannyFlatCapability} />
        <WhatsIncluded {...grannyFlatWhatsIncluded} />
        <ServiceProcess {...grannyFlatProcess} />
        <WhyManzel {...grannyFlatWhyManzel} />
        {/* ServiceFeaturedProjects intentionally omitted - no granny flat
            project examples supplied yet (client brief marks these "will be
            provided"). Add a `grannyFlatProjects` array to content.ts and
            slot <ServiceFeaturedProjects /> back in here once photos land. */}
        <Suburbs {...grannyFlatSuburbs} />
        <Testimonials />
        <Faq items={grannyFlatFaqs} />
        <ServiceCta {...grannyFlatCta} />
      </main>
      <Footer />
    </>
  );
}
