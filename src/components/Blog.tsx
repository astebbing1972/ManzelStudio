import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/content";
import Reveal from "./Reveal";

export default function Blog() {
  return (
    <section className="bg-white px-6 pt-14 pb-[30px] md:px-10 md:pt-[110px]">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mx-auto mb-16 max-w-[820px] text-center">
            <h2 className="blog-heading mb-[18px] font-medium text-black">
              From the Journal.
            </h2>
            <p className="text-[16px] text-ink-2">
              Notes on building design, permits and place — practical guidance from the studio for homeowners,
              developers, and the curious.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-x-10 gap-y-[60px]">
          {blogPosts.slice(0, 6).map((post, i) => (
            <Reveal
              key={post.href}
              delay={i * 60}
              className="w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)]"
            >
              <div className="group">
                <a href={post.href} className="block">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt ?? post.title}
                      fill
                      quality={70}
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                </a>
                <span className="mt-[25px] mb-2.5 block text-[16px] font-medium text-black">{post.date}</span>
                <h3 className="mb-3 text-[20px] font-semibold leading-[28px] text-black">
                  <a href={post.href} className="transition-colors duration-300 group-hover:text-[#888888]">
                    {post.title}
                  </a>
                </h3>
                <p className="mb-3 text-[15px] leading-[24px] text-ink-2">{post.excerpt}</p>
                <a
                  href={post.href}
                  className="text-[14px] font-medium uppercase tracking-[0.02em] text-black no-underline transition-opacity duration-300 hover:opacity-60"
                >
                  read more<span className="sr-only"> about {post.title}</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-16 pb-16 text-center">
          <Link
            href="/blog"
            className="inline-flex h-11 min-w-[220px] items-center justify-center border border-black px-9 text-[17px] font-medium text-black transition-colors duration-500 hover:bg-black hover:text-white"
          >
            Read More<span className="sr-only"> articles on the studio blog</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
