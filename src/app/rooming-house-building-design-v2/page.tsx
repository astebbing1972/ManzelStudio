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
  roomingHouseHeroV2,
  trustBar,
  roomingHouseIntro,
  roomingHouseWhatWeDesignV2,
  roomingHouseWhatsIncluded,
  roomingHouseProcess,
  roomingHouseWhyManzel,
  roomingHouseFaqs,
  roomingHouseCtaV2,
} from "@/lib/content";

const title = "Rooming House Building Designer Melbourne | Manzel Studio";
const description =
  "Manzel Studio designs purpose-built and converted rooming houses in Melbourne, from site assessment through concept design to permit-ready documentation.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/rooming-house-building-design-v2",
  noindex: true, // draft v2 redesign for client review - remove once approved and linked from the site
});

export default function RoomingHouseBuildingDesignV2() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Rooming House Building Design",
          description,
          path: "/rooming-house-building-design-v2",
        })}
      />
      <JsonLd data={faqJsonLd(roomingHouseFaqs)} />
      <Header />
      <Breadcrumbs items={[{ name: "Rooming House Building Design", path: "/rooming-house-building-design-v2" }]} />
      <main className="flex-1">
        <ServiceHeroNoCta {...roomingHouseHeroV2} />
        <TrustBar items={trustBar} />
        <ServiceIntro {...roomingHouseIntro} />
        <ServiceDetailsTabs
          eyebrow="— Rooming House Design"
          titlePre="Everything you need to "
          titleEm="know"
          lead="Project types, what's included, our process and why clients choose Manzel Studio."
          tabs={[
            { label: "Project Types", panel: { kind: "types", cards: roomingHouseWhatWeDesignV2.cards } },
            { label: "What's Included", panel: { kind: "list", items: roomingHouseWhatsIncluded.items } },
            { label: "How We Work", panel: { kind: "process", phases: roomingHouseProcess.phases } },
            { label: "Why Manzel", panel: { kind: "list", items: roomingHouseWhyManzel.items } },
          ]}
        />
        <Faq items={roomingHouseFaqs} />
        <ServiceCta {...roomingHouseCtaV2} />
      </main>
      <Footer />
    </>
  );
}
