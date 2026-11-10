import { useState } from "react";
import { Download, Layers, X, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { iconTypes } from "@/lib/iconTypes";
import { starterPacks } from "@/lib/packs";
import { backgroundColors, foregroundMappings, type ColorHue, type Variant } from "@/lib/colors";
import { generateSVGString, generatePNG, loadSvgContent, extractPathsFromSvg } from "@/utils/iconGenerator";
import { buildZip, type ZipEntry } from "@/lib/zip";
import { slugify, SITE } from "@/lib/routes";
import { quirkUrl, track } from "@/lib/analytics";
import { LEAD_ENDPOINT } from "@/lib/config";

const known = new Set(iconTypes.map((i) => i.name));
export const packIcons = (names: string[]) => names.filter((n) => known.has(n));

type StarterProps = { onUse: (names: string[], packId: string) => void };

/** Row of one-click starter sets shown above the library. */
export function StarterPacks({ onUse }: StarterProps) {
  return (
    <section className="my-4" aria-labelledby="starter-h">
      <div className="flex items-baseline justify-between gap-2 mb-3">
        <h2 id="starter-h" className="text-base font-semibold">Starter sets</h2>
        <p className="text-xs text-muted-foreground">One click loads a matching set. Download it as a ZIP in any colour.</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {starterPacks.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => onUse(packIcons(p.icons), p.id)}
            className="p-4 text-left transition-colors border rounded-xl hover:border-foreground bg-card"
          >
            <span className="flex items-center gap-2 text-sm font-semibold">
              <Layers className="w-4 h-4 text-primary" /> {p.name}
            </span>
            <span className="block mt-1 text-xs text-muted-foreground">{p.blurb}</span>
            <span className="block mt-2 text-xs font-medium text-primary">{packIcons(p.icons).length} icons</span>
          </button>
        ))}
      </div>
    </section>
  );
}

type BarProps = {
  pack: string[];
  packId: string;
  colour: string; // "<hue>-<variant>"
  pngSize: number;
  onClear: () => void;
  onRemove: (name: string) => void;
  hidden?: boolean;
};

const readme = (colour: string, pngSize: number, names: string[]) => `Jira work type icons from Quirk
================================

Colour: ${colour}
Icons: ${names.join(", ")}

What is in this ZIP
- svg/   Scalable files, ideal for Confluence pages and design tools.
- png/   ${pngSize} x ${pngSize} px files, ready to upload to Jira.

Add an icon to a Jira work type (company-managed spaces)
1. Sign in to Jira as an administrator.
2. Go to Settings (cog), then Work items.
3. Open Work types and choose the work type to update, or create a new one.
4. Select Edit, then in the icon section choose to upload your own.
5. Upload the PNG from the png folder and save.

Team-managed spaces: open Space settings, then Work types, select the
work type and click its icon to upload a new one.

Tips
- Keep one colour per family of work (for example all incidents red).
- Bold, medium shades read best at Jira's small icon sizes.

Licence: MIT. Free for personal and commercial use.
More icons: ${SITE}/

Want Jira set up properly, not just prettier?
Quirk is an Australian Atlassian partner. We design work types, workflows,
screens and boards around how your teams work.
${quirkUrl("/contact/", "zip-readme")}
`;

/** Floating "your set" bar: builds and downloads the ZIP in the browser. */
export function PackBar({ pack, packId, colour, pngSize, onClear, onRemove, hidden }: BarProps) {
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [lead, setLead] = useState({ email: "", name: "", company: "", website: "" });
  const [leadError, setLeadError] = useState("");
  const [leadSent, setLeadSent] = useState(false);

  if (pack.length === 0 || hidden) return null;
  const [hue, variant] = colour.split("-") as [ColorHue, Variant];
  const bg = backgroundColors[hue][variant];
  const fg = foregroundMappings[hue][variant];

  const download = async () => {
    setBusy(true);
    try {
      const entries: ZipEntry[] = [];
      for (const name of pack) {
        const icon = iconTypes.find((i) => i.name === name);
        if (!icon) continue;
        const path = extractPathsFromSvg(await loadSvgContent(icon.path));
        const file = `${slugify(name)}-${colour}`;
        entries.push({ name: `svg/${file}.svg`, data: generateSVGString(path, fg, bg, 24, 4, true) });
        const png = await generatePNG(generateSVGString(path, fg, bg, pngSize, pngSize / 6, true), pngSize, 1);
        entries.push({ name: `png/${file}-${pngSize}px.png`, data: new Uint8Array(await png.arrayBuffer()) });
      }
      entries.push({ name: "README.txt", data: readme(colour, pngSize, pack) });
      const url = URL.createObjectURL(buildZip(entries));
      const a = document.createElement("a");
      a.href = url;
      a.download = `quirk-jira-icons-${packId || "custom"}-${colour}.zip`;
      a.click();
      URL.revokeObjectURL(url);
      track("pack_download", { pack_id: packId || "custom", icon_count: pack.length, colour, png_size: pngSize });
      setDone(true);
    } finally {
      setBusy(false);
    }
  };

  const sendLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!LEAD_ENDPOINT || !lead.email) return;
    setLeadError("");
    try {
      const res = await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lead, pack: packId || "custom", icons: pack, colour, source: "icons.quirk.com.au" }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setLeadSent(true);
      track("generate_lead", { lead_source: "icon_pack", pack_id: packId || "custom" });
    } catch {
      setLeadError("That did not go through. Please try again.");
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-3 md:pl-[17rem] pointer-events-none">
      <div className="max-w-5xl p-4 mx-auto border shadow-xl pointer-events-auto rounded-2xl bg-card">
        {!done ? (
          <>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">Your set</span>
                <span className="px-2 py-0.5 text-xs rounded-full bg-muted">{pack.length} icons</span>
                <button type="button" className="text-xs underline text-muted-foreground" onClick={() => setExpanded(!expanded)}>
                  {expanded ? "Hide" : "Edit"}
                </button>
              </div>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="inline-block w-4 h-4 rounded" style={{ background: bg === "none" ? "transparent" : bg, border: "1px solid hsl(var(--border))" }} />
                {hue} {variant}, {pngSize} px PNG (change with "Preview in" and PNG size)
              </span>
              <div className="flex gap-2 ml-auto">
                <Button variant="ghost" size="sm" onClick={onClear}>
                  <X /> Clear
                </Button>
                <Button size="sm" onClick={download} disabled={busy}>
                  <Download /> {busy ? "Building ZIP..." : "Download ZIP"}
                </Button>
              </div>
            </div>
            {expanded && (
              <ul className="flex flex-wrap gap-1.5 mt-3">
                {pack.map((n) => (
                  <li key={n}>
                    <button type="button" onClick={() => onRemove(n)} className="flex items-center gap-1 px-2 py-1 text-xs border rounded-full hover:border-foreground">
                      {n} <X className="w-3 h-3" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold">
                <Check className="w-4 h-4 text-primary" /> Your ZIP is downloading
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                The README inside walks through uploading the PNGs to Jira work types.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <Button asChild size="sm">
                  <a href={quirkUrl("/contact/", "pack-review")} target="_blank" rel="noopener">
                    <Sparkles /> Get help rolling these out
                  </a>
                </Button>
                <Button size="sm" variant="ghost" onClick={() => setDone(false)}>
                  Back to my set
                </Button>
              </div>
            </div>
            {LEAD_ENDPOINT && (
              leadSent ? (
                <p className="self-center text-sm">Thanks, you are on the list. We will email you when new starter sets land.</p>
              ) : (
                <form onSubmit={sendLead} className="grid gap-2">
                  <p className="text-xs font-medium">Email me when new starter sets land, plus the odd Jira tip from Quirk</p>
                  <input required type="email" placeholder="Work email" value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} className="h-9 px-3 text-sm border rounded-full bg-background" />
                  <div className="flex gap-2">
                    <input placeholder="Name" value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} className="flex-1 h-9 px-3 text-sm border rounded-full bg-background" />
                    <input placeholder="Company" value={lead.company} onChange={(e) => setLead({ ...lead, company: e.target.value })} className="flex-1 h-9 px-3 text-sm border rounded-full bg-background" />
                  </div>
                  <input
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                    value={lead.website}
                    onChange={(e) => setLead({ ...lead, website: e.target.value })}
                  />
                  <Button size="sm" type="submit" variant="outline">Keep me posted</Button>
                  {leadError && <p className="text-xs text-destructive">{leadError}</p>}
                  <p className="text-[11px] text-muted-foreground">
                    No spam, unsubscribe any time. See our{" "}
                    <a className="underline" href="https://www.quirk.com.au/trust-centre/privacy-policy/" target="_blank" rel="noopener">privacy policy</a>.
                  </p>
                </form>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
