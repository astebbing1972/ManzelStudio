import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import InnerBanner from "@/components/InnerBanner";
import ContactSection from "@/components/ContactSection";
import ContactMap from "@/components/ContactMap";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";
import { contactHero, contactInfo, contactMapEmbed } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | Manzel Studio Building Designers Melbourne",
  description:
    "Get in touch with Manzel Studio. Book a free consultation with our Melbourne building design team, call, email, or visit our Preston office.",
  path: "/contact-us",
});

export default function ContactUs() {
  return (
    <>
      <Header />
      <Breadcrumbs items={[{ name: "Contact Us", path: "/contact-us" }]} />
      <main className="flex-1">
        <InnerBanner {...contactHero} />
        <Suspense fallback={null}>
          <ContactSection {...contactInfo} />
        </Suspense>
        <ContactMap embedUrl={contactMapEmbed} />
      </main>
      <Footer />
    </>
  );
}
