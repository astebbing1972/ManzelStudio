import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import Reveal from "./Reveal";
import { blogCategories } from "@/lib/content";
import { FacebookIcon, XIcon, LinkedinIcon, EmailIcon } from "./icons";
import type { Article } from "@/lib/blogArticles";
import { renderRich } from "@/lib/richText";
import { SITE_URL } from "@/lib/seo";

type Post = {
  title: string;
  href: string;
  image: string;
  imageLarge: string;
  date: string;
  author: string;
  categories: string[];
  imageAlt?: string;
};

export default function BlogPost({ post, article }: { post: Post; article: Article }) {
  const shareUrl = `${SITE_URL}${post.href}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(post.title);
  const categoryLabels = post.categories
    .map((key) => blogCategories.find((c) => c.key === key))
    .filter((c): c is (typeof blogCategories)[number] => Boolean(c));

  const shareLinks = [
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, icon: <FacebookIcon /> },
    { label: "X", href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, icon: <XIcon /> },
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, icon: <LinkedinIcon /> },
    { label: "Email", href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`, icon: <EmailIcon /> },
  ];

  return (
    <>
      <Header />
      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }, { name: post.title, path: post.href }]} />
      <main className="flex-1">
        <section className="bg-white px-6 pb-[90px] pt-[50px] md:px-10 md:pt-[70px]">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-[1fr_320px]">
            <div>
              <Reveal>
                <Link
                  href="/blog"
                  className="mb-8 inline-flex items-center gap-2 text-[15px] font-medium text-black transition-opacity duration-300 hover:opacity-60"
                >
                  <span aria-hidden="true">&larr;</span> Go Back To Blog
                </Link>
              </Reveal>

              <Reveal delay={60}>
                <h1 className="mb-4 text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-black sm:text-[42px] md:text-[48px]">
                  {post.title}
                </h1>
              </Reveal>

              <Reveal delay={100}>
                <div className="mb-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-[14px] text-ink-2">
                  <span>
                    {categoryLabels.map((c, i) => (
                      <span key={c.key}>
                        <Link
                          href={`/blog-category/${c.key}`}
                          className="transition-colors duration-300 hover:text-black hover:underline"
                        >
                          {c.label}
                        </Link>
                        {i < categoryLabels.length - 1 && <span className="mx-2 text-line">|</span>}
                      </span>
                    ))}
                  </span>
                  <span className="text-line">•</span>
                  <span>By {post.author}</span>
                  <span className="text-line">•</span>
                  <time dateTime={new Date(post.date).toISOString()}>{post.date}</time>
                  <span className="text-line">•</span>
                  <span className="flex items-center gap-2">
                    Share:
                    {shareLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Share on ${s.label}`}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-black/15 text-black/70 transition-colors duration-300 hover:border-black hover:bg-black hover:text-white"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </span>
                </div>
              </Reveal>

              <Reveal>
                <div className="relative mb-12 aspect-video w-full overflow-hidden">
                  <Image
                    src={post.imageLarge}
                    alt={post.imageAlt ?? post.title}
                    fill
                    priority
                    quality={70}
                    className="object-cover"
                    sizes="(min-width: 1024px) 68vw, 100vw"
                  />
                </div>
              </Reveal>

              <Reveal>
                <div>
                  {article.intro.map((p, i) => (
                    <p key={i} className="mb-5 text-[16px] leading-[28px] text-black">
                      {renderRich(p)}
                    </p>
                  ))}
                </div>
              </Reveal>

              {article.sections.map((section, i) => {
                const isSub = section.level === 3;
                const Heading = isSub ? "h3" : "h2";
                const textBlock = (
                  <div>
                    <Heading
                      className={
                        isSub
                          ? "mb-3 text-[22px] font-bold leading-[1.3] tracking-[-0.02em] text-black md:text-[26px] md:leading-[38px]"
                          : "mb-3 text-[24px] font-bold leading-[1.3] tracking-[-0.02em] text-black md:text-[28px] md:leading-[40px]"
                      }
                    >
                      {section.heading}
                    </Heading>
                    {section.banner && (
                      <div
                        className="relative mb-6 w-full overflow-hidden rounded-2xl"
                        style={{
                          aspectRatio: section.banner.aspect?.replace("/", " / ") ?? "1080 / 693",
                          ...(section.banner.maxWidth ? { maxWidth: section.banner.maxWidth } : {}),
                        }}
                      >
                        <Image
                          src={section.banner.src}
                          alt={section.banner.alt}
                          fill
                          quality={section.banner.maxWidth ? 90 : 70}
                          className="object-cover"
                          sizes={section.banner.maxWidth ? "(min-width: 768px) 1080px, 100vw" : "(min-width: 768px) 900px, 100vw"}
                        />
                      </div>
                    )}
                    {section.leadIn &&
                      (Array.isArray(section.leadIn) ? (
                        section.leadIn.map((p, k) => (
                          <p key={k} className="mb-3 text-[16px] leading-[28px] text-black">
                            {renderRich(p)}
                          </p>
                        ))
                      ) : (
                        <p className="mb-3 text-[16px] leading-[28px] text-black">{renderRich(section.leadIn)}</p>
                      ))}
                    {section.table && (
                      <div className="mb-4 overflow-x-auto">
                        <table className="w-full min-w-[560px] border-collapse text-left">
                          <thead>
                            <tr className="bg-black/[0.06]">
                              {section.table.headers.map((h) => (
                                <th key={h} className="border border-black/10 px-5 py-4 text-[15px] font-bold leading-[22px] text-black">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row, ri) => (
                              <tr key={ri}>
                                {row.map((cell, ci) => (
                                  <td key={ci} className="border border-black/10 px-5 py-4 align-top text-[15px] leading-[24px] text-black">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                    {section.columns && (
                      <div
                        className={`mb-2 grid grid-cols-1 gap-x-8 gap-y-6 ${
                          section.wideImageColumn
                            ? "md:grid-cols-[5fr_7fr] md:items-start"
                            : section.columns.length >= 3
                              ? "sm:grid-cols-3"
                              : "sm:grid-cols-2"
                        }`}
                      >
                        {section.columns.map((col, ci) => (
                          <div key={ci}>
                            {col.image && (
                              <div className="relative aspect-[690/1080] w-full overflow-hidden rounded-2xl">
                                <Image
                                  src={col.image.src}
                                  alt={col.image.alt}
                                  fill
                                  quality={70}
                                  className="object-cover"
                                  sizes="(min-width: 768px) 45vw, 100vw"
                                />
                              </div>
                            )}
                            {col.heading && (
                              <h4 className="mb-2 text-[18px] font-bold leading-[1.3] tracking-[-0.01em] text-black md:text-[21px] md:leading-[38px]">
                                {col.heading}
                              </h4>
                            )}
                            {col.label && (
                              <p className="mb-2 text-[16px] font-semibold leading-[1.3] text-black">{renderRich(col.label)}</p>
                            )}
                            {col.sub && <p className="mb-2 text-[16px] leading-[28px] text-black">{renderRich(col.sub)}</p>}
                            {col.list && (
                              <ul className="mb-2 list-disc space-y-2 pl-5">
                                {col.list.map((item) => (
                                  <li key={item} className="text-[15px] leading-[27px] text-black">
                                    {renderRich(item)}
                                  </li>
                                ))}
                              </ul>
                            )}
                            {col.subsections && (
                              <div className="space-y-5">
                                {col.subsections.map((sub) => (
                                  <div key={sub.heading}>
                                    <h4 className="mb-2 text-[18px] font-bold leading-[1.3] tracking-[-0.01em] text-black md:text-[21px] md:leading-[38px]">
                                      {sub.heading}
                                    </h4>
                                    <p className="text-[16px] leading-[28px] text-black">{renderRich(sub.paragraph)}</p>
                                  </div>
                                ))}
                              </div>
                            )}
                            {col.paragraphs?.map((p, pi) => (
                              <p key={pi} className="mt-3 text-[16px] leading-[28px] text-black">
                                {renderRich(p)}
                              </p>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                    {section.subsections && (
                      <div className="space-y-6">
                        {section.subsections.map((sub) => (
                          <div key={sub.heading}>
                            <h4 className="mb-2 text-[18px] font-bold leading-[1.3] tracking-[-0.01em] text-black md:text-[21px] md:leading-[38px]">
                              {sub.heading}
                            </h4>
                            <p className="text-[16px] leading-[28px] text-black">{renderRich(sub.paragraph)}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {section.list &&
                      (section.ordered ? (
                        <ol className="mb-2 list-decimal space-y-2 pl-5">
                          {section.list.map((item) => (
                            <li key={item} className="text-[15px] leading-[27px] text-black">
                              {renderRich(item)}
                            </li>
                          ))}
                        </ol>
                      ) : (
                        <ul className="mb-2 list-disc space-y-2 pl-5">
                          {section.list.map((item) => (
                            <li key={item} className="text-[15px] leading-[27px] text-black">
                              {renderRich(item)}
                            </li>
                          ))}
                        </ul>
                      ))}
                    {section.groups &&
                      (section.compact ? (
                        <div className="mb-2 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                          {section.groups.map((group) => (
                            <div key={group.label}>
                              <p className="mb-2 text-[14px] font-semibold uppercase tracking-[0.02em] text-black">
                                {renderRich(group.label)}
                              </p>
                              <ul className="space-y-1.5 pl-5">
                                {group.items.map((item) => (
                                  <li key={item} className="list-disc text-[15px] leading-[27px] text-black">
                                    {renderRich(item)}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {section.groups.map((group) => (
                            <div key={group.label}>
                              <p className="mb-2 text-[16px] font-semibold leading-[1.3] text-black">
                                {renderRich(group.label)}
                              </p>
                              <ul className="mb-2 list-disc space-y-2 pl-5">
                                {group.items.map((item) => (
                                  <li key={item} className="text-[15px] leading-[27px] text-black">
                                    {renderRich(item)}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ))}
                  </div>
                );
                return (
                  <Reveal key={section.heading} delay={Math.min(i * 20, 120)}>
                    <div className={isSub ? "mt-8" : "mt-12"}>
                      {section.image ? (
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start md:gap-8">
                          {textBlock}
                          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl">
                            <Image
                              src={section.image.src}
                              alt={section.image.alt}
                              fill
                              quality={70}
                              className="object-cover"
                              sizes="(min-width: 768px) 45vw, 100vw"
                            />
                          </div>
                        </div>
                      ) : (
                        textBlock
                      )}
                      {section.paragraphs?.map((p, j) => (
                        <p
                          key={j}
                          className={`${
                            j === 0 &&
                            (section.leadIn || section.list || section.groups || section.columns || section.table || section.subsections)
                              ? "mt-4"
                              : ""
                          } mb-4 text-[16px] leading-[28px] text-black`}
                        >
                          {renderRich(p)}
                        </p>
                      ))}
                    </div>
                  </Reveal>
                );
              })}

              {article.faqs && article.faqs.length > 0 && (
                <Reveal delay={20}>
                  <div className="mt-12">
                    <h2 className="mb-3 text-[24px] font-bold leading-[1.3] tracking-[-0.02em] text-black md:text-[28px] md:leading-[40px]">
                      Frequently Asked Questions
                    </h2>
                    {article.faqs.map((faq, i) => (
                      <div key={i} className="mt-4">
                        <h3 className="mb-2 text-[18px] font-bold leading-[1.3] tracking-[-0.01em] text-black md:text-[21px] md:leading-[38px]">
                          {faq.q}
                        </h3>
                        <p className="mb-4 text-[16px] leading-[28px] text-black">{renderRich(faq.a)}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}

              {article.conclusion && (
                <Reveal delay={20}>
                  <div className="mt-12">
                    <h2 className="mb-3 text-[24px] font-bold leading-[1.3] tracking-[-0.02em] text-black md:text-[28px] md:leading-[40px]">
                      Conclusion
                    </h2>
                    {article.conclusion.map((p, i) => (
                      <p key={i} className="mb-4 text-[16px] leading-[28px] text-black">
                        {renderRich(p)}
                      </p>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>

            <Reveal delay={100}>
              <aside className="lg:sticky lg:top-28">
                <h3 className="mb-5 text-[20px] font-semibold text-black">Browse by Topic</h3>
                <nav className="flex flex-col gap-3">
                  {blogCategories.map((c) => (
                    <Link
                      key={c.key}
                      href={`/blog-category/${c.key}`}
                      className="bg-[#f2f2f2] px-6 py-3.5 text-[16px] text-black transition-colors duration-300 hover:bg-black hover:text-white"
                    >
                      {c.label}
                    </Link>
                  ))}
                </nav>
              </aside>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
