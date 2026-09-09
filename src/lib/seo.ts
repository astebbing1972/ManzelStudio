import type { Metadata } from "next";

export const SITE_URL = "https://www.manzelstudio.com.au";
export const SITE_NAME = "Manzel Studio";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero/hero-1.png`;
export const ORG_PHONE = "+61478162166";
export const ORG_EMAIL = "info@manzelstudio.com";
export const ORG_ADDRESS = {
  streetAddress: "84 Hotham St",
  addressLocality: "Preston",
  addressRegion: "VIC",
  postalCode: "3072",
  addressCountry: "AU",
};
export const ORG_SAME_AS = [
  "https://www.instagram.com/manzel_studio/",
  "https://www.linkedin.com/company/manzel-studio/",
  "https://x.com/manzel_studio",
  "https://www.pinterest.com/manzel_studio/",
];

export function absoluteUrl(path: string) {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Strips the `[label](href)` markdown-link syntax used in FAQ copy down to plain text. */
export function toPlainText(text: string) {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

export function buildMetadata({
  title,
  description,
  path,
  image,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(image ?? DEFAULT_OG_IMAGE);
  return {
    title,
    description,
    ...(keywords && keywords.length ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage }],
      locale: "en_AU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/manzel-logo-black.svg"),
    image: DEFAULT_OG_IMAGE,
    telephone: ORG_PHONE,
    email: ORG_EMAIL,
    address: { "@type": "PostalAddress", ...ORG_ADDRESS },
    areaServed: "Victoria, Australia",
    sameAs: ORG_SAME_AS,
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Victoria, Australia",
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function aggregateRatingJsonLd({
  ratingValue,
  reviewCount,
  reviews = [],
}: {
  ratingValue: number;
  reviewCount: number;
  reviews?: { name: string; quote: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    address: { "@type": "PostalAddress", ...ORG_ADDRESS },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
      bestRating: 5,
    },
    ...(reviews.length
      ? {
          review: reviews.map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.name },
            reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
            reviewBody: r.quote,
          })),
        }
      : {}),
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: toPlainText(item.a) },
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  image,
  datePublished,
  author = SITE_NAME,
  section,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  author?: string;
  section?: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: absoluteUrl(image),
    datePublished,
    dateModified: datePublished,
    inLanguage: "en-AU",
    author: { "@type": "Organization", name: author, url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: absoluteUrl(path),
    ...(section ? { articleSection: section } : {}),
    ...(keywords && keywords.length ? { keywords: keywords.join(", ") } : {}),
  };
}
