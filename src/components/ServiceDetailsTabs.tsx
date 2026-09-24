"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

// Consolidates what would otherwise be several full-width stacked sections
// (project types, what's included, design considerations, process, why us)
// into ONE compact section with tabs. This keeps every word of the source
// content in the page - all tab panels render in the DOM regardless of which
// is visually active, so nothing is hidden from search engines - while
// presenting it as a single "small amount of information" area rather than
// five separate scrolling blocks. Standalone: built only for this page, does
// not touch any shared component used elsewhere on the site.

type TypesPanel = { kind: "types"; cards: { image: string; num: string; title: string; body: string }[] };
type ListPanel = { kind: "list"; items: { title: string; body: string }[] };
type AccordionPanel = { kind: "accordion"; items: { num: string; label: string; body: string }[] };
type ProcessPanel = { kind: "process"; phases: { num: string; tag: string; title: string; body: string }[] };
type Panel = TypesPanel | ListPanel | AccordionPanel | ProcessPanel;

export default function ServiceDetailsTabs({
  eyebrow,
  titlePre,
  titleEm,
  lead,
  tabs,
}: {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  lead: string;
  tabs: { label: string; panel: Panel }[];
}) {
  const [active, setActive] = useState(0);
  const [openAccordionItem, setOpenAccordionItem] = useState<number | null>(0);

  return (
    <section className="bg-[#faf9f9] px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mx-auto mb-8 max-w-[700px] text-center">
            <div className="eyebrow mb-2.5">{eyebrow}</div>
            <h2 className="text-[26px] font-medium leading-[1.2] tracking-[-0.04em] text-black sm:text-[32px]">
              {titlePre}
              <em className="not-italic text-aubergine">{titleEm}</em>
            </h2>
            <p className="mt-3 text-[15px] text-ink-2">{lead}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mb-8 flex flex-wrap justify-center gap-2 border-b border-line">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                type="button"
                onClick={() => setActive(i)}
                className={`border-b-2 px-4 py-3 text-[13.5px] font-medium uppercase tracking-[0.08em] transition-colors ${
                  active === i
                    ? "border-aubergine text-ink"
                    : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {tabs.map((tab, i) => {
            const panel = tab.panel;
            return (
            <div key={tab.label} hidden={active !== i}>
              {panel.kind === "types" && (
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {panel.cards.map((c) => (
                    <article key={c.title}>
                      <div className="relative mb-4 aspect-[3/2] w-full overflow-hidden">
                        {c.image.endsWith(".svg") ? (
                          // Placeholder graphics render as plain <img> since next/image
                          // blocks local SVGs without a next.config.ts change, which
                          // would affect every other page's image handling.
                          <img src={c.image} alt={c.title} className="h-full w-full object-cover" />
                        ) : (
                          <Image src={c.image} alt={c.title} fill quality={70} className="object-cover" sizes="(min-width: 640px) 33vw, 100vw" />
                        )}
                      </div>
                      <div className="mb-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-muted">{c.num}</div>
                      <h3 className="mb-2 text-[18px] font-medium leading-[1.25] text-ink">{c.title}</h3>
                      <p className="text-[14.5px] leading-[1.55] text-ink-2">{c.body}</p>
                    </article>
                  ))}
                </div>
              )}

              {panel.kind === "list" && (
                <div
                  className={`grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 ${
                    // Pick a column count the item count actually divides evenly,
                    // so the last row never leaves a blank gap-filled cell.
                    panel.items.length % 4 === 0 ? "lg:grid-cols-4" : "lg:grid-cols-3"
                  }`}
                >
                  {panel.items.map((item) => (
                    <div key={item.title} className="flex flex-col gap-2.5 bg-white p-7">
                      <h4 className="text-[17px] font-medium leading-[1.25] text-ink">{item.title}</h4>
                      <p className="text-[14.5px] leading-[1.55] text-ink-2">{item.body}</p>
                    </div>
                  ))}
                </div>
              )}

              {panel.kind === "accordion" && (
                <div className="border border-line bg-white">
                  {panel.items.map((item, idx) => {
                    const isOpen = openAccordionItem === idx;
                    return (
                      <div key={item.label} className={idx !== panel.items.length - 1 ? "border-b border-line" : ""}>
                        <button
                          type="button"
                          onClick={() => setOpenAccordionItem(isOpen ? null : idx)}
                          className="flex w-full items-center gap-5 px-7 py-5 text-left"
                          aria-expanded={isOpen}
                        >
                          <span className="text-[14px] font-medium text-muted">{item.num}</span>
                          <span className="flex-1 text-[17px] font-medium text-ink">{item.label}</span>
                          <span
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          >
                            <svg width="11" height="7" viewBox="0 0 12 7" fill="none">
                              <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </button>
                        <div
                          className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="max-w-[820px] px-7 pb-5 pl-[52px] text-[14.5px] leading-[1.6] text-ink-2">{item.body}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {panel.kind === "process" && (
                <div
                  className={`grid grid-cols-1 border border-line bg-white sm:grid-cols-2 ${
                    panel.phases.length >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"
                  }`}
                >
                  {panel.phases.map((ph, idx) => (
                    <div
                      key={ph.num}
                      className={`flex flex-col gap-3 border-line p-7 ${
                        idx !== panel.phases.length - 1 ? "border-b lg:border-b-0 lg:border-r" : ""
                      } sm:border-r`}
                    >
                      <div className="text-[28px] font-light italic leading-none text-aubergine">{ph.num}</div>
                      <h3 className="text-[18px] font-medium leading-[1.25] text-ink">{ph.title}</h3>
                      <p className="text-[15px] leading-[1.55] text-ink-2">{ph.body}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
