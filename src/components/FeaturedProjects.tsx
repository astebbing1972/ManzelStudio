import Image from "next/image";
import { projects } from "@/lib/content";
import Reveal from "./Reveal";

export default function FeaturedProjects() {
  return (
    <section className="bg-white">
      <Reveal>
        <h2 className="px-6 pb-0 pt-14 text-center text-[34px] font-medium leading-[1.15] tracking-[-0.044em] text-black sm:text-[50px] md:pt-[100px] md:text-[70px] md:leading-[78px]">
          Featured Projects
        </h2>
      </Reveal>

      <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-x-5 gap-y-14 px-6 py-16 sm:grid-cols-2 md:px-10">
        {projects.map((p, i) => {
          const titleClass = "mb-2.5 mt-4 block text-[22px] font-medium text-black no-underline md:text-[24px]";
          return (
            <Reveal key={p.title} delay={i * 80}>
              <div className="group cursor-pointer">
                <div className="relative h-[340px] overflow-hidden sm:h-[500px] lg:h-[688px]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    quality={70}
                    className="object-cover transition-transform duration-500 ease-in group-hover:scale-110"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/85 via-black/10 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:p-[50px]">
                    <p className="text-[15px] leading-[24px] text-white md:text-[16px]">{p.body}</p>
                  </div>
                </div>
                {p.href ? (
                  <a href={p.href} className={titleClass}>
                    {p.title}
                  </a>
                ) : (
                  <div className={titleClass}>{p.title}</div>
                )}
                <div className="text-[14px] text-ink-2">{p.tag}</div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="flex justify-center pb-24">
        <a
          href="/our-projects"
          className="btn-fill"
        >
          Explore All Projects <span className="arr" />
        </a>
      </Reveal>
    </section>
  );
}
