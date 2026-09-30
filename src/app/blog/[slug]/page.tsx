import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPost from "@/components/BlogPost";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, articleJsonLd, faqJsonLd } from "@/lib/seo";
import { blogPosts, blogCategories } from "@/lib/content";
import { blogArticles } from "@/lib/blogArticles";

function slugFromHref(href: string) {
  return href.replace("/blog/", "");
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: slugFromHref(p.href) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => slugFromHref(p.href) === slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle ?? `${post.title} | Manzel Studio`,
    description: post.metaDescription ?? post.excerptLong.slice(0, 155).replace(/\s+\S*$/, "") + "…",
    path: post.href,
    image: post.imageLarge,
    keywords: post.keywords,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => slugFromHref(p.href) === slug);
  const article = blogArticles[slug];
  if (!post || !article) notFound();

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.metaDescription ?? post.excerptLong,
          path: post.href,
          image: post.imageLarge,
          datePublished: new Date(post.date).toISOString(),
          author: post.author,
          section: blogCategories.find((c) => c.key === post.categories[0])?.label,
          keywords: post.keywords,
        })}
      />
      {article.faqs.length > 0 && <JsonLd data={faqJsonLd(article.faqs)} />}
      <BlogPost post={post} article={article} />
    </>
  );
}
