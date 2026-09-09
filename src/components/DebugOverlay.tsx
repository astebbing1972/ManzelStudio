"use client";

import { useEffect, useState } from "react";

export default function DebugOverlay() {
  const [info, setInfo] = useState<string | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("debug") !== "1") return;
    setShow(true);

    const measure = (label: string) => {
      const section = document.querySelector("main section") as HTMLElement | null;
      const h1 = document.querySelector("main h1") as HTMLElement | null;
      const header = document.querySelector("header") as HTMLElement | null;
      const img = document.querySelector("main section img") as HTMLImageElement | null;
      const sectionRect = section?.getBoundingClientRect();
      const h1Rect = h1?.getBoundingClientRect();
      const headerRect = header?.getBoundingClientRect();
      const h1Style = h1 ? getComputedStyle(h1) : null;
      const sectionStyle = section ? getComputedStyle(section) : null;
      const headerStyle = header ? getComputedStyle(header) : null;
      const bodyStyle = getComputedStyle(document.body);

      return {
        label,
        time: Math.round(performance.now()),
        viewport: { w: window.innerWidth, h: window.innerHeight, dpr: window.devicePixelRatio },
        scrollY: window.scrollY,
        fontsStatus: document.fonts.status,
        section: sectionRect
          ? {
              top: Math.round(sectionRect.top),
              height: Math.round(sectionRect.height),
              width: Math.round(sectionRect.width),
              cssAspectRatio: sectionStyle?.aspectRatio,
              cssMinHeight: sectionStyle?.minHeight,
              cssPosition: sectionStyle?.position,
              cssDisplay: sectionStyle?.display,
            }
          : "section not found",
        img: img
          ? { complete: img.complete, naturalW: img.naturalWidth, naturalH: img.naturalHeight, src: img.currentSrc?.slice(-40) }
          : "img not found",
        header: headerRect
          ? { top: Math.round(headerRect.top), height: Math.round(headerRect.height), cssPosition: headerStyle?.position }
          : null,
        bodyDisplay: bodyStyle.display,
        h1: h1Rect
          ? {
              top: Math.round(h1Rect.top),
              height: Math.round(h1Rect.height),
              fontSize: h1Style?.fontSize,
              lineHeight: h1Style?.lineHeight,
              text: h1?.textContent,
            }
          : "h1 not found",
      };
    };

    const history_: unknown[] = [];
    const report = (label: string) => {
      history_.push(measure(label));
      setInfo(JSON.stringify(history_, null, 2));
    };

    report("immediate");
    setTimeout(() => report("settled(t+1500ms)"), 1500);
    const onResize = () => report("event:resize");
    const onScroll = () => report("event:scroll");
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!show) return null;

  return (
    <pre
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        maxHeight: "60vh",
        overflow: "auto",
        background: "rgba(0,0,0,0.92)",
        color: "#0f0",
        fontSize: "11px",
        lineHeight: 1.4,
        padding: "10px",
        zIndex: 999999,
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        margin: 0,
      }}
    >
      {info ?? "loading..."}
    </pre>
  );
}
