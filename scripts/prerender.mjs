// Pre-renders a static HTML page for every icon, category and tab so search
// engines (and link previews) get real content and titles without running JS.
// Runs after `vite build`. React replaces the static markup when it starts.
import fs from "node:fs";
import path from "node:path";
import { createServer } from "vite";

const SITE = "https://icons.quirk.com.au";
const DIST = path.resolve("dist");
const PUBLIC = path.resolve("public");
const today = new Date().toISOString().slice(0, 10);
const QUIRK = "https://www.quirk.com.au/services/atlassian-consulting-services/?utm_source=icons.quirk.com.au&utm_medium=referral&utm_campaign=icon-library&utm_content=static-page";

const server = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "error" });
const { iconTypes, categoryNames } = await server.ssrLoadModule("/src/lib/iconTypes.ts");
const { categoryDescriptions } = await server.ssrLoadModule("/src/lib/categoryDescriptions.ts");
const { projectIconTypes } = await server.ssrLoadModule("/src/lib/projectIconTypes.ts");
const { userIconTypes } = await server.ssrLoadModule("/src/lib/userTypes.ts");
const { STATIC_PAGES } = await server.ssrLoadModule("/src/App.tsx");
await server.close();

const slugify = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const clip = (s, n = 158) => (s.length <= n ? s : s.slice(0, s.lastIndexOf(" ", n - 1)) + "...");
const lower = (s) => s.toLowerCase();

const template = fs.readFileSync(path.join(DIST, "index.html"), "utf8");
const FAQ_RE = /\s*<!-- FAQ[\s\S]*?<\/script>\n/;

function page({ title, description, urlPath, body, jsonld = [], keepFaq = false }) {
  const url = SITE + urlPath;
  let html = template;
  const set = (re, value) => {
    if (!re.test(html)) throw new Error(`prerender: pattern not found ${re}`);
    html = html.replace(re, value);
  };
  set(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
  set(/(name="description"[^>]*?content=")[^"]*(")/, `$1${esc(description)}$2`);
  set(/(rel="canonical"[^>]*?href=")[^"]*(")/, `$1${url}$2`);
  set(/(property="og:url"[^>]*?content=")[^"]*(")/, `$1${url}$2`);
  set(/(property="og:title"[^>]*?content=")[^"]*(")/, `$1${esc(title)}$2`);
  set(/(property="og:description"[^>]*?content=")[^"]*(")/, `$1${esc(description)}$2`);
  set(/(name="twitter:title"[^>]*?content=")[^"]*(")/, `$1${esc(title)}$2`);
  set(/(name="twitter:description"[^>]*?content=")[^"]*(")/, `$1${esc(description)}$2`);
  if (!keepFaq) html = html.replace(FAQ_RE, "\n");
  if (jsonld.length) {
    html = html.replace(
      "</head>",
      jsonld.map((j) => `    <script type="application/ld+json">${JSON.stringify(j)}</script>\n`).join("") + "  </head>"
    );
  }
  set(/<div id="root"><\/div>/, `<div id="root">${shell(body)}</div>`);
  const file = path.join(DIST, urlPath, "index.html");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  return urlPath;
}

const shell = (body) =>
  `<main style="max-width:880px;margin:0 auto;padding:32px 20px;font-family:Lexend,system-ui,sans-serif;color:#171717;line-height:1.6">` +
  `<p style="font-size:13px"><a href="/" style="color:#15803d">Quirk Jira icon library</a></p>${body}` +
  `<p style="margin-top:32px;font-size:14px">Setting up Jira work types properly? <a href="${QUIRK}" style="color:#15803d">Quirk is an Australian Atlassian partner</a>.</p></main>`;

const linkList = (items) =>
  `<ul style="display:flex;flex-wrap:wrap;gap:6px 14px;padding:0;list-style:none">` +
  items.map(([href, label]) => `<li><a href="${href}" style="color:#15803d">${esc(label)}</a></li>`).join("") +
  `</ul>`;

const svgFor = (icon) => {
  const file = path.join(PUBLIC, icon.path.replace(/^\//, ""));
  return fs.existsSync(file)
    ? fs.readFileSync(file, "utf8").replace(/width="24" height="24"/, 'width="96" height="96" role="img" aria-label="' + esc(icon.name) + ' icon"').trim()
    : "";
};

const org = { "@type": "Organization", name: "Quirk", url: "https://www.quirk.com.au" };
const crumbs = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, p], i) => ({ "@type": "ListItem", position: i + 1, name, item: SITE + p })),
});

const urls = [];
const byCategory = new Map(categoryNames.map((c) => [c, []]));
for (const icon of iconTypes) for (const c of icon.categories) byCategory.get(c)?.push(icon);

// Home
urls.push(
  page({
    title: "Free Jira Work Type Icons (SVG and PNG) | Quirk",
    description: template.match(/name="description"[^>]*?content="([^"]*)"/)[1],
    urlPath: "/",
    keepFaq: true,
    body:
      `<h1>Jira work type icons, ready to upload</h1><p>${iconTypes.length.toLocaleString("en-AU")} free icons for Jira work types in 11 colours and 3 shades. Download SVG or PNG up to 512 px, or grab a starter set as a ZIP.</p>` +
      `<h2>Browse by category</h2>` +
      linkList(categoryNames.map((c) => [`/category/${slugify(c)}/`, `${c} (${byCategory.get(c).length})`])) +
      `<h2>More free Jira icons</h2>` +
      linkList([["/project-icons/", "Jira project icons"], ["/avatars/", "Jira user avatars"], ["/guide/", "How to add icons in Jira"]]),
  })
);

// Categories
for (const c of categoryNames) {
  const icons = [...byCategory.get(c)].sort((a, b) => a.name.localeCompare(b.name));
  const p = `/category/${slugify(c)}/`;
  urls.push(
    page({
      title: `${c} Icons for Jira | Quirk`,
      description: clip(categoryDescriptions[c] || `Free ${lower(c)} icons for Jira work types in SVG and PNG.`),
      urlPath: p,
      jsonld: [crumbs([["Jira icons", "/"], [c, p]])],
      body:
        `<h1>${esc(c)} icons for Jira</h1><p>${esc(categoryDescriptions[c] || "")}</p>` +
        `<p>${icons.length} free icons, each in 11 colours and 3 shades, as SVG or PNG.</p>` +
        linkList(icons.map((i) => [`/icon/${slugify(i.name)}/`, `${i.name} icon`])) +
        `<h2>Other categories</h2>` +
        linkList(categoryNames.filter((x) => x !== c).map((x) => [`/category/${slugify(x)}/`, x])),
    })
  );
}

// Icons
for (const icon of iconTypes) {
  const s = slugify(icon.name);
  const p = `/icon/${s}/`;
  const primary = icon.categories[0];
  const related = [];
  for (const c of icon.categories)
    for (const i of byCategory.get(c) || []) if (i.name !== icon.name && !related.includes(i)) related.push(i);
  const uses = icon.searchTerms.filter((t) => lower(t) !== lower(icon.name)).slice(0, 4);
  const description = clip(
    `Free ${icon.name} icon for Jira work types and Confluence pages. Download SVG or PNG up to 512 px in 11 colours and 3 shades. MIT licensed.`
  );
  urls.push(
    page({
      title: `${icon.name} Icon for Jira (Free SVG and PNG) | Quirk`,
      description,
      urlPath: p,
      jsonld: [
        {
          "@context": "https://schema.org",
          "@type": "ImageObject",
          name: `${icon.name} icon for Jira`,
          contentUrl: SITE + icon.path,
          url: SITE + p,
          encodingFormat: "image/svg+xml",
          license: "https://opensource.org/licenses/MIT",
          acquireLicensePage: `${SITE}/licence/`,
          creditText: "Quirk",
          creator: org,
          copyrightNotice: "Quirk",
        },
        crumbs([["Jira icons", "/"], [primary, `/category/${slugify(primary)}/`], [icon.name, p]]),
      ],
      body:
        `<h1>${esc(icon.name)} icon for Jira</h1>` +
        `<p>${svgFor(icon)}</p>` +
        `<p>${esc(description)}</p>` +
        (uses.length ? `<p>Common uses: ${esc(icon.searchTerms.join(", "))}.</p>` : "") +
        `<h2>Categories</h2>` +
        linkList(icon.categories.map((c) => [`/category/${slugify(c)}/`, `${c} icons`])) +
        `<h2>Related icons</h2>` +
        linkList(related.slice(0, 24).map((i) => [`/icon/${slugify(i.name)}/`, i.name])),
    })
  );
}

// Tabs
const tabPages = [
  ["/project-icons/", "Free Jira Project Icons (SVG and PNG) | Quirk", "Free Jira project icons in SVG and PNG, sized for Jira project avatars. Pick a colour, download and upload in seconds. MIT licensed, made by Quirk.", `Jira project icons`, `${projectIconTypes.length} free project icon designs for Jira spaces.`],
  ["/avatars/", "Free Jira User Avatars (SVG and PNG) | Quirk", "Free user avatars for Jira and Confluence profiles in SVG and PNG. Pick a style and colour, then download. MIT licensed, made by Quirk.", `Jira and Confluence user avatars`, `${userIconTypes.length} free avatars for service accounts, bots and teammates.`],
  ["/guide/", STATIC_PAGES.installation.title, STATIC_PAGES.installation.description, "How to add custom icons in Jira", STATIC_PAGES.installation.description],
  ["/licence/", STATIC_PAGES.license.title, STATIC_PAGES.license.description, "Icon library licence", STATIC_PAGES.license.description],
  ["/about/", STATIC_PAGES.about.title, STATIC_PAGES.about.description, "About Quirk", STATIC_PAGES.about.description],
];
for (const [p, title, description, h1, intro] of tabPages) {
  urls.push(page({ title, description, urlPath: p, body: `<h1>${esc(h1)}</h1><p>${esc(intro)}</p>` }));
}

// SPA fallback for any other path, plus the sitemap
fs.copyFileSync(path.join(DIST, "index.html"), path.join(DIST, "404.html"));
fs.writeFileSync(
  path.join(DIST, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `  <url><loc>${SITE}${u}</loc><lastmod>${today}</lastmod></url>`).join("\n") +
    `\n</urlset>\n`
);
console.log(`prerender: ${urls.length} pages and sitemap.xml written`);
