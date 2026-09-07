import type { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import InnerBanner from "@/components/InnerBanner";
import FaqPageIntro from "@/components/FaqPageIntro";
import FaqCategorySection from "@/components/FaqCategorySection";
import FaqPageClosing from "@/components/FaqPageClosing";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { faqPageHero, faqPageIntro, faqCategories, faqPageClosing } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Building Design FAQs Melbourne | Manzel Studio",
  description:
    "Common questions about planning permits, building permits, granny flats, narrow blocks, dual occupancy, commercial projects and choosing a building designer in Melbourne.",
  path: "/faq",
  keywords: [
    "building design FAQ Melbourne",
    "planning permit Melbourne",
    "building permit Melbourne",
    "granny flat planning permit Victoria",
    "building designer vs architect",
  ],
});

export default function FaqPage() {
  const allFaqs = faqCategories.flatMap((c) => c.items);

  return (
    <>
      <Header />
      <Breadcrumbs items={[{ name: "FAQ", path: "/faq" }]} />
      <JsonLd data={faqJsonLd(allFaqs)} />
      <main className="flex-1">
        <InnerBanner {...faqPageHero} />
        <FaqPageIntro
          paragraphs={faqPageIntro}
          categories={faqCategories.map((c) => ({ id: c.id, title: c.title, count: c.items.length }))}
        />
        {faqCategories.map((c, i) => (
          <FaqCategorySection
            key={c.id}
            id={c.id}
            num={String(i + 1).padStart(2, "0")}
            title={c.title}
            lead={c.lead}
            items={c.items}
            tinted={i % 2 === 1}
          />
        ))}
        <FaqPageClosing
          title={faqPageClosing.title}
          paragraphs={faqPageClosing.paragraphs}
          cta={faqPageClosing.cta}
        />
      </main>
      <Footer />
    </>
  );
}
