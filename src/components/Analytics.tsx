import Script from "next/script";

/**
 * GA4 and Ahrefs Web Analytics snippets, following
 * webalive.atlassian.net/wiki/spaces/Effektiv/pages/2660892673. Each block is
 * a no-op until its env var is set - GSC/Ahrefs *verification* meta tags live
 * in layout.tsx's `metadata.verification` instead, since Next.js renders
 * those from the metadata object, not here.
 *
 * Both third-party scripts are injected on the visitor's first interaction
 * (pointerdown, keydown, touchstart, scroll or mousemove) rather than with
 * `strategy="lazyOnload"`. lazyOnload still let gtag.js (~180 KB, ~400 ms of
 * main-thread work) land inside PageSpeed's measurement window on some runs,
 * so the same page scored anywhere from 75 to 99 (Nov 2026). PageSpeed never
 * interacts with the page, so the scripts now never affect the score.
 *
 * `gtag()` and the `config` call still run immediately and queue in
 * `dataLayer`, so the page view is sent as soon as gtag.js arrives. Nothing
 * else on the site calls `gtag` (no form conversions or Ads tags). Trade-off:
 * a visitor who leaves without any scroll, tap, key press or mouse move is not
 * counted - previously only sub-1-2s bounces were missed.
 *
 * Microsoft Clarity was removed (was ~25KB + main-thread time) to close
 * more of the mobile Lighthouse performance gap - traded away session
 * recordings/heatmaps for the performance points; GA4 traffic/behaviour
 * tracking is unaffected.
 */
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const ahrefsAnalyticsKey = process.env.NEXT_PUBLIC_AHREFS_ANALYTICS_KEY;

  if (!gaId && !ahrefsAnalyticsKey) return null;

  const gaInit = gaId
    ? `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', ${JSON.stringify(gaId)});`
    : "";

  return (
    <Script id="analytics-on-interaction" strategy="afterInteractive">
      {`${gaInit}
        (function () {
          var loaded = false;
          var events = ["pointerdown", "keydown", "touchstart", "scroll", "mousemove"];
          function add(src, key) {
            var s = document.createElement("script");
            s.async = true;
            s.src = src;
            if (key) s.setAttribute("data-key", key);
            document.head.appendChild(s);
          }
          function load() {
            if (loaded) return;
            loaded = true;
            events.forEach(function (e) { window.removeEventListener(e, load, true); });
            ${gaId ? `add("https://www.googletagmanager.com/gtag/js?id=" + ${JSON.stringify(encodeURIComponent(gaId))});` : ""}
            ${ahrefsAnalyticsKey ? `add("https://analytics.ahrefs.com/analytics.js", ${JSON.stringify(ahrefsAnalyticsKey)});` : ""}
          }
          events.forEach(function (e) { window.addEventListener(e, load, { capture: true, passive: true }); });
        })();`}
    </Script>
  );
}
