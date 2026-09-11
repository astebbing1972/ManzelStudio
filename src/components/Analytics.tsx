import Script from "next/script";

/**
 * GA4, Ahrefs Web Analytics, and Microsoft Clarity snippets. GA4/Ahrefs
 * follow webalive.atlassian.net/wiki/spaces/Effektiv/pages/2660892673;
 * Clarity was added on top since the client uses it too. Each block is a
 * no-op until its env var is set - GSC/Ahrefs *verification* meta tags live
 * in layout.tsx's `metadata.verification` instead, since Next.js renders
 * those from the metadata object, not here.
 *
 * strategy="lazyOnload" defers these until the browser is idle after the
 * window `load` event, so they stop competing with the hero image for the
 * main thread during the LCP window (PageSpeed showed a 1.9s element
 * render delay driven mostly by gtag.js's unused bytes). Engaged visits -
 * anyone who reads, scrolls, or fills out the contact form - are tracked
 * exactly as before; only sub-1-2s bounces might load before a script does.
 */
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const ahrefsAnalyticsKey = process.env.NEXT_PUBLIC_AHREFS_ANALYTICS_KEY;
  const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

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
      {clarityProjectId && (
        <Script id="clarity-init" strategy="lazyOnload">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${clarityProjectId}");`}
        </Script>
      )}
    </>
  );
}
