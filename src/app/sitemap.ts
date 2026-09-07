import type { MetadataRoute } from "next";
import { blogPosts, blogCategories } from "@/lib/content";
import { SITE_URL } from "@/lib/seo";

const staticRoutes = [
  "",
  "/about-us",
  "/residential-building-design",
  "/commercial-building-design",
  "/health-space-design",
  "/site-assessment",
  "/our-projects",
  "/project-coburg-the-avenue",
  "/contact-us",
  "/testimonials",
  "/faq",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${SITE_URL}${post.href}`,
    lastModified: now,
  }));

  const categoryEntries = blogCategories.map((category) => ({
    url: `${SITE_URL}/blog-category/${category.key}`,
    lastModified: now,
  }));

  return [...staticEntries, ...blogEntries, ...categoryEntries];
}
