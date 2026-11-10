// Real, crawlable URLs for the single-page app. Every path below is also
// pre-rendered to static HTML at build time (scripts/prerender.mjs).

export const SITE = "https://icons.quirk.com.au";

export const slugify = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const TAB_PATHS: Record<string, string> = {
  "jira-icons": "/",
  "user-avatars": "/avatars/",
  "project-icons": "/project-icons/",
  installation: "/guide/",
  license: "/licence/",
  about: "/about/",
};

export const iconPath = (name: string) => `/icon/${slugify(name)}/`;
export const categoryPath = (category: string) => `/category/${slugify(category)}/`;

export type Route =
  | { tab: string; icon?: string; category?: string };

/** Work out which tab, icon or category a path points at. */
export function parsePath(pathname: string): Route {
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const icon = path.match(/^\/icon\/([a-z0-9-]+)\/$/);
  if (icon) return { tab: "jira-icons", icon: icon[1] };
  const category = path.match(/^\/category\/([a-z0-9-]+)\/$/);
  if (category) return { tab: "jira-icons", category: category[1] };
  const tab = Object.entries(TAB_PATHS).find(([, p]) => p === path);
  return { tab: tab ? tab[0] : "jira-icons" };
}

/** Change the address bar without reloading. */
export function navigate(path: string, replace = false) {
  const url = path + window.location.hash;
  if (window.location.pathname + window.location.hash === url) return;
  if (replace) window.history.replaceState(null, "", url);
  else window.history.pushState(null, "", url);
}

/** Let normal links work (new tab, middle click) while handling plain clicks in the app. */
export function isPlainClick(e: React.MouseEvent) {
  return e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
}
