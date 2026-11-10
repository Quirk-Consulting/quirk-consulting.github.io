// Lightweight GA4 helpers for the icon library.
// gtag is loaded in index.html (G-30F00Z51X0). Every call is a no-op if it is missing.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const QUIRK_SITE = "https://www.quirk.com.au";

/** Build a quirk.com.au link with UTM tags so visits show up as icon-library referrals. */
export function quirkUrl(path: string, content: string): string {
  const url = new URL(path, QUIRK_SITE);
  url.searchParams.set("utm_source", "icons.quirk.com.au");
  url.searchParams.set("utm_medium", "referral");
  url.searchParams.set("utm_campaign", "icon-library");
  url.searchParams.set("utm_content", content);
  return url.toString();
}

export function track(
  event: string,
  params: Record<string, string | number | undefined> = {}
): void {
  try {
    window.gtag?.("event", event, params);
  } catch {
    /* analytics must never break the app */
  }
}

/** Fired on every SVG or PNG download. */
export function trackDownload(
  library: "work-type" | "project" | "avatar",
  iconName: string,
  format: "svg" | "png",
  hue: string,
  variant: string
): void {
  track("icon_download", {
    library,
    icon_name: iconName,
    file_format: format,
    colour: hue === "blank" ? "blank" : `${hue}-${variant}`,
  });
}

let outboundInstalled = false;

/** One document-level listener: records clicks to quirk.com.au and other external sites. */
export function installOutboundTracking(): void {
  if (outboundInstalled || typeof document === "undefined") return;
  outboundInstalled = true;
  document.addEventListener(
    "click",
    (event) => {
      const target = event.target as Element | null;
      const link = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      let url: URL;
      try {
        url = new URL(link.href, window.location.href);
      } catch {
        return;
      }
      if (url.hostname === window.location.hostname) return;
      const isQuirk = url.hostname.endsWith("quirk.com.au");
      track(isQuirk ? "quirk_site_click" : "outbound_click", {
        link_url: url.origin + url.pathname,
        link_text: (link.textContent || "").trim().slice(0, 80),
        cta: url.searchParams.get("utm_content") || undefined,
      });
    },
    { capture: true }
  );
}
