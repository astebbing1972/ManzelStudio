import type { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import ProjectHero from "@/components/ProjectHero";
import ProjectSnapshot from "@/components/ProjectSnapshot";
import ProjectOverview from "@/components/ProjectOverview";
import ProjectBrief from "@/components/ProjectBrief";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectOutcome from "@/components/ProjectOutcome";
import Testimonials from "@/components/Testimonials";
import ProjectJourney from "@/components/ProjectJourney";
import ProjectRelated from "@/components/ProjectRelated";
import ServiceCta from "@/components/ServiceCta";
import Footer from "@/components/Footer";
import {
  healthspanHero,
  healthspanSnapshot,
  healthspanOverview,
  healthspanBrief,
  healthspanGallery,
  healthspanOutcome,
  healthspanJourney,
  projectRelated,
  healthspanCta,
} from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Healthspan Osteopathy Clinic Fit-Out | Manzel Studio",
  description:
    "Explore Healthspan Osteopathy, a Manzel Studio clinic fit-out in Craigieburn featuring four private consulting rooms, efficient circulation and strong natural light.",
  path: "/project-healthspan-osteopathy",
  noindex: true, // draft project page for client review - remove once approved and linked from the site
});

export default function ProjectHealthspanOsteopathy() {
  return (
    <>
      <Header />
      <Breadcrumbs
        items={[
          { name: "Our Projects", path: "/our-projects" },
          { name: "Healthspan Osteopathy", path: "/project-healthspan-osteopathy" },
        ]}
      />
      <main className="flex-1">
        <ProjectHero {...healthspanHero} />
        <ProjectSnapshot items={healthspanSnapshot} />
        <ProjectOverview {...healthspanOverview} />
        <ProjectBrief {...healthspanBrief} />
        <ProjectGallery {...healthspanGallery} />
        <ProjectOutcome blocks={healthspanOutcome} />
        <Testimonials />
        <ProjectJourney {...healthspanJourney} />
        <ProjectRelated items={projectRelated} />
        <ServiceCta {...healthspanCta} />
      </main>
      <Footer />
    </>
  );
}
