import Script from "next/script";

/**
 * GA4 and Ahrefs Web Analytics snippets, following
 * webalive.atlassian.net/wiki/spaces/Effektiv/pages/2660892673. Each block is
 * a no-op until its env var is set - GSC/Ahrefs *verification* meta tags live
 * in layout.tsx's `metadata.verification` instead, since Next.js renders
 * those from the metadata object, not here.
 *
 * strategy="lazyOnload" defers these until the browser is idle after the
 * window `load` event, so they stop competing with the hero image for the
 * main thread during the LCP window (PageSpeed showed a 1.9s element
 * render delay driven mostly by gtag.js's unused bytes). Engaged visits -
 * anyone who reads, scrolls, or fills out the contact form - are tracked
 * exactly as before; only sub-1-2s bounces might load before a script does.
 *
 * Microsoft Clarity was removed (was ~25KB + main-thread time) to close
 * more of the mobile Lighthouse performance gap - traded away session
 * recordings/heatmaps for the performance points; GA4 traffic/behaviour
 * tracking is unaffected.
 */
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const ahrefsAnalyticsKey = process.env.NEXT_PUBLIC_AHREFS_ANALYTICS_KEY;

  return (
    <>
      {gaId && (
        <>
          <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
          <Script id="ga4-init" strategy="lazyOnload">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');`}
          </Script>
        </>
      )}
      {ahrefsAnalyticsKey && (
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key={ahrefsAnalyticsKey}
          strategy="lazyOnload"
        />
      )}
    </>
  );
}
