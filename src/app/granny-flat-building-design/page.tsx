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
        <ServiceIntro {...grannyFlatIntroV2} />
        <WhatWeDesignContain {...grannyFlatWhatWeDesignV2} />
        <MultiResidential {...grannyFlatCapabilityV2} />
        <WhatsIncluded {...grannyFlatWhatsIncluded} />
        <ServiceProcess {...grannyFlatProcessV2} />
        <WhyManzel {...grannyFlatWhyManzel} />
        <Suburbs {...grannyFlatSuburbs} />
        <Testimonials />
        <Faq items={grannyFlatFaqsV2} />
        <ServiceCta {...grannyFlatCtaV2} />
      </main>
      <Footer />
    </>
  );
}
