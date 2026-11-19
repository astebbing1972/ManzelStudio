/**
 * GA4 custom events. `window.gtag` only exists when NEXT_PUBLIC_GA_MEASUREMENT_ID
 * is set (see Analytics.tsx), so every call here is a safe no-op otherwise -
 * locally, on deploy previews without the env var, or if GA is removed.
 *
 * Never pass personal details (name, email, phone, address, message) as event
 * parameters: GA4's terms prohibit sending PII.
 */
type GtagParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: GtagParams) => void;
  }
}

export function trackEvent(eventName: string, params?: GtagParams) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}
