"use client";

import { useEffect, useState } from "react";

export default function DebugOverlay() {
  const [info, setInfo] = useState<string | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("debug") !== "1") return;
    setShow(true);

    const report = () => {
      const h1 = document.querySelector("main h1") as HTMLElement | null;
      const header = document.querySelector("header") as HTMLElement | null;
      const h1Rect = h1?.getBoundingClientRect();
      const headerRect = header?.getBoundingClientRect();
      const h1Style = h1 ? getComputedStyle(h1) : null;

      const data = {
        userAgent: navigator.userAgent,
        viewport: { w: window.innerWidth, h: window.innerHeight, dpr: window.devicePixelRatio },
        visualViewport: window.visualViewport
          ? {
              w: Math.round(window.visualViewport.width),
              h: Math.round(window.visualViewport.height),
              scale: window.visualViewport.scale,
              offsetTop: window.visualViewport.offsetTop,
            }
          : null,
        scrollY: window.scrollY,
        scrollRestoration: history.scrollRestoration,
        fontsStatus: document.fonts.status,
        h1: h1Rect
          ? {
              top: Math.round(h1Rect.top),
              height: Math.round(h1Rect.height),
              fontSize: h1Style?.fontSize,
              lineHeight: h1Style?.lineHeight,
              fontFamily: h1Style?.fontFamily,
              text: h1?.textContent,
            }
          : "h1 not found",
        headerHeight: headerRect ? Math.round(headerRect.height) : null,
      };
      setInfo(JSON.stringify(data, null, 2));
    };

    report();
    document.fonts.ready.then(report);
    const onChange = () => report();
    window.addEventListener("resize", onChange);
    window.addEventListener("scroll", onChange);
    return () => {
      window.removeEventListener("resize", onChange);
      window.removeEventListener("scroll", onChange);
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
