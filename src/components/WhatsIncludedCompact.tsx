import Reveal from "./Reveal";

const icons = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 21V6l8-3 8 3v15" />
    <path d="M9 21v-7h6v7" />
    <path d="M4 12h16" />
  </svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <path d="M8 8h8M8 12h8M8 16h5" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7l9-5 9 5-9 5z" />
    <path d="M3 7v10l9 5 9-5V7" />
    <path d="M12 12v10" />
  </svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 4h11l3 3v13H5z" />
    <path d="M9 13l2 2 4-4" />
  </svg>,
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="1" />
    <path d="M3 10h18M9 4v16" />
  </svg>,
  <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l8 9-3 0v8H7v-8H4z" />
    <path d="M10 14h4v6h-4z" />
  </svg>,
  <svg key="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9c2.4 0 4.6.9 6.2 2.5" />
    <path d="M21 4v5h-5" />
  </svg>,
  <svg key="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21l3-9 5 5L21 6" />
    <path d="M14 6h7v7" />
  </svg>,
];

// Standalone compact variant of WhatsIncluded with tighter vertical padding.
// Kept separate from WhatsIncluded.tsx (used by other, already-live service
// pages) so this page's needs never risk changing their rendered output.
export default function WhatsIncludedCompact({
  eyebrow,
  titlePre,
  titleEm,
  titlePost,
  lead,
  items,
}: {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  titlePost: string;
  lead: string;
  items: { title: string; body: string }[];
}) {
  return (
    <section className="bg-white px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <div className="eyebrow mb-2.5">{eyebrow}</div>
              <h2 className="text-[24px] font-medium leading-[1.2] tracking-[-0.04em] text-black sm:text-[30px] md:text-[38px]">
                {titlePre}
                <em className="not-italic text-aubergine">{titleEm}</em>
                {titlePost}
              </h2>
            </div>
            <p className="text-[14px] leading-[1.6] text-ink-2 lg:max-w-[440px]">{lead}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, i) => (
              <div key={item.title} className="flex flex-col gap-2.5 bg-white p-6">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-paper text-ink">{icons[i]}</div>
                <h4 className="mt-1 text-[15.5px] font-medium leading-[1.3] text-ink">{item.title}</h4>
                <p className="text-[13px] leading-[1.5] text-ink-2">{item.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
