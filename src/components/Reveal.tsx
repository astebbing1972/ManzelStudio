"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  eager = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Renders already revealed, no fade-in - for content that sits in the
   * initial viewport, where the scroll-reveal animation only costs Speed
   * Index with nothing to reveal from (nothing above it to scroll past). */
  eager?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (eager) return;
    const el = ref.current;
    if (!el) return;

    const reveal = () => el.classList.add("in-view");

    if (typeof IntersectionObserver === "undefined") {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);

    // Safety net: content must never stay permanently invisible if the
    // observer misfires (ad-blocker interference, a dropped script chunk,
    // a dev-mode double-effect race, etc).
    const fallback = window.setTimeout(reveal, 2000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${eager ? "in-view" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
