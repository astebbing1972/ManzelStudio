import type { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, serviceJsonLd, faqJsonLd } from "@/lib/seo";
import ServiceHeroNoCta from "@/components/ServiceHeroNoCta";
import TrustBar from "@/components/TrustBar";
import ServiceIntro from "@/components/ServiceIntro";
import ServiceDetailsTabs from "@/components/ServiceDetailsTabs";
import Faq from "@/components/Faq";
import ServiceCta from "@/components/ServiceCta";
import Footer from "@/components/Footer";
import {
  grannyFlatHeroV2,
  trustBar,
  grannyFlatIntroV2,
  grannyFlatWhatWeDesignV2,
  grannyFlatWhatsIncluded,
  grannyFlatProcess,
  grannyFlatWhyManzel,
  grannyFlatFaqsV2,
  grannyFlatCtaV2,
} from "@/lib/content";

const title = "Granny Flat Building Designer Melbourne | Manzel Studio";
const description =
  "Custom granny flat (small second dwelling) design in Melbourne by Manzel Studio, from site assessment and concept through to permit-ready documentation.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/granny-flat-building-design-v2",
  noindex: true, // draft v2 redesign for client review - remove once approved and linked from the site
});

export default function GrannyFlatBuildingDesignV2() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Granny Flat Building Design",
          description,
          path: "/granny-flat-building-design-v2",
        })}
      />
      <JsonLd data={faqJsonLd(grannyFlatFaqsV2)} />
      <Header />
      <Breadcrumbs items={[{ name: "Granny Flat Building Design", path: "/granny-flat-building-design-v2" }]} />
      <main className="flex-1">
        <ServiceHeroNoCta {...grannyFlatHeroV2} />
        <TrustBar items={trustBar} />
        <ServiceIntro {...grannyFlatIntroV2} />
        <ServiceDetailsTabs
          eyebrow="— Granny Flat Design"
          titlePre="Everything you need to "
          titleEm="know"
          lead="Project types, what's included, our process and why clients choose Manzel Studio."
          tabs={[
            { label: "Project Types", panel: { kind: "types", cards: grannyFlatWhatWeDesignV2.cards } },
            { label: "What's Included", panel: { kind: "list", items: grannyFlatWhatsIncluded.items } },
            { label: "How We Work", panel: { kind: "process", phases: grannyFlatProcess.phases } },
            { label: "Why Manzel", panel: { kind: "list", items: grannyFlatWhyManzel.items } },
          ]}
        />
        <Faq items={grannyFlatFaqsV2} />
        <ServiceCta {...grannyFlatCtaV2} />
      </main>
      <Footer />
    </>
  );
}
