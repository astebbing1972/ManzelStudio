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
  buildingPermitHeroV2,
  trustBar,
  buildingPermitIntro,
  buildingPermitWhatWeDesignV2,
  buildingPermitWhatsIncluded,
  buildingPermitProcess,
  buildingPermitConsultantsV2,
  buildingPermitWhyManzel,
  buildingPermitFaqsV2,
  buildingPermitCtaV2,
} from "@/lib/content";

const title = "Building Permit Drawings Melbourne | Manzel Studio";
const description =
  "Building permit drawings in Melbourne for residential and commercial projects. Detailed, coordinated documentation for permits, consultants and construction.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/building-permit-drawings-v2",
  noindex: true, // draft v2 redesign for client review - remove once approved and linked from the site
});

export default function BuildingPermitDrawingsV2() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Building Permit Drawings",
          description,
          path: "/building-permit-drawings-v2",
        })}
      />
      <JsonLd data={faqJsonLd(buildingPermitFaqsV2)} />
      <Header />
      <Breadcrumbs items={[{ name: "Building Permit Drawings", path: "/building-permit-drawings-v2" }]} />
      <main className="flex-1">
        <ServiceHeroNoCta {...buildingPermitHeroV2} />
        <TrustBar items={trustBar} />
        <ServiceIntro {...buildingPermitIntro} />
        <ServiceDetailsTabs
          eyebrow="— Building Permit Drawings"
          titlePre="Everything you need to "
          titleEm="know"
          lead="Project types, what's included, our process, working with consultants and why clients choose Manzel Studio."
          tabs={[
            { label: "Project Types", panel: { kind: "types", cards: buildingPermitWhatWeDesignV2.cards } },
            { label: "What's Included", panel: { kind: "list", items: buildingPermitWhatsIncluded.items } },
            { label: "How We Work", panel: { kind: "process", phases: buildingPermitProcess.phases } },
            { label: "Consultants & Permits", panel: { kind: "list", items: buildingPermitConsultantsV2.items } },
            { label: "Why Manzel", panel: { kind: "list", items: buildingPermitWhyManzel.items } },
          ]}
        />
        <Faq items={buildingPermitFaqsV2} />
        <ServiceCta {...buildingPermitCtaV2} />
      </main>
      <Footer />
    </>
  );
}
