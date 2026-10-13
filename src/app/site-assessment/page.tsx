import type { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, serviceJsonLd, faqJsonLd } from "@/lib/seo";
import AssessmentHero from "@/components/AssessmentHero";
import AssessmentTrustBar from "@/components/AssessmentTrustBar";
import AssessmentClarify from "@/components/AssessmentClarify";
import AssessmentPlans from "@/components/AssessmentPlans";
import AssessmentRisk from "@/components/AssessmentRisk";
import AssessmentDiscover from "@/components/AssessmentDiscover";
import AssessmentProcess from "@/components/AssessmentProcess";
import AssessmentBeforeOrder from "@/components/AssessmentBeforeOrder";
import Faq from "@/components/Faq";
import ServiceCta from "@/components/ServiceCta";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
import { relatedServices } from "@/lib/relatedServices";
import {
  siteAssessmentHero,
  siteAssessmentTrustBar,
  siteAssessmentClarify,
  siteAssessmentPlans,
  siteAssessmentRisk,
  siteAssessmentDiscover,
  siteAssessmentProcess,
  siteAssessmentBeforeOrder,
  siteAssessmentFaqs,
  siteAssessmentCta,
} from "@/lib/content";

const title = "Site Assessment | Property Development Review | Manzel Studio";
const description =
  "Assess your property's zoning, overlays, restrictions and development potential with Manzel Studio. Site Assessments available across Victoria from $198.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/site-assessment",
});

export default function SiteAssessment() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Site Assessment",
          description,
          path: "/site-assessment",
        })}
      />
      <JsonLd data={faqJsonLd(siteAssessmentFaqs)} />
      <Header />
      <Breadcrumbs items={[{ name: "Site Assessment", path: "/site-assessment" }]} />
      <main className="flex-1">
        <AssessmentHero {...siteAssessmentHero} />
        <AssessmentTrustBar items={siteAssessmentTrustBar} />
        <AssessmentClarify {...siteAssessmentClarify} />
        <AssessmentPlans {...siteAssessmentPlans} />
        <AssessmentRisk {...siteAssessmentRisk} />
        <AssessmentDiscover {...siteAssessmentDiscover} />
        <AssessmentProcess {...siteAssessmentProcess} />
        <AssessmentBeforeOrder {...siteAssessmentBeforeOrder} />
        <Faq
          items={siteAssessmentFaqs}
          lead="Everything you need to know before getting started — from what's included to timelines, costs, and what happens next."
        />
        <RelatedServices items={relatedServices("grannyFlat", "roomingHouse", "buildingPermit")} />
        <ServiceCta {...siteAssessmentCta} />
      </main>
      <Footer />
    </>
  );
}
