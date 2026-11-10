// src/components/IconPreview.tsx with SEO enhancements
import React, { useState, useEffect, useRef } from "react";
import { Search, Shuffle, Copy, Check, Link2, Download, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Helmet } from "react-helmet";
import { trackDownload, quirkUrl, track } from "@/lib/analytics";
import { LibraryHero } from "@/components/LibraryHero";
import { StarterPacks, PackBar } from "@/components/PackBuilder";
import { SITE, slugify, iconPath, categoryPath, navigate, isPlainClick } from "@/lib/routes";
import { makeSearchTracker } from "@/lib/analytics";
import { QuirkCta } from "@/components/QuirkCta";
import {
  ColorHue,
  Variant,
  backgroundColors,
  foregroundMappings,
} from "../lib/colors";
import {
  generateSVGString,
  generatePNG,
  loadSvgContent,
  extractPathsFromSvg,
} from "../utils/iconGenerator";
import { iconTypes, type IconType } from "../lib/iconTypes";
import { categoryDescriptions } from "../lib/categoryDescriptions";
import type { CategoryResults } from "../App";

interface IconPathState {
  path: string | null;
  loading: boolean;
}

interface IconPreviewProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  categorizedResults: CategoryResults[];
  selectedCategory: string | null; // Add this prop
  setSelectedCategory: (category: string | null) => void; // Add this prop
  routeIcon?: string | null;
  onRouteIconHandled?: () => void;
}

const getRandomElement = <T,>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

// Enhanced SEO-optimised description text for categories

const PNG_SIZES = [64, 128, 256, 512] as const;
const PREVIEW_KEY = "quirk-icons-preview";
const PNG_KEY = "quirk-icons-png-size";
const PACK_KEY = "quirk-icons-pack";
const HUES = Object.keys(backgroundColors).filter((h) => h !== "blank") as ColorHue[];
const readPref = (key: string, fallback: string) => {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
};
const writePref = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* storage can be unavailable */
  }
};

const IconPreview = ({
  searchQuery,
  onSearchChange,
  categorizedResults,
  selectedCategory,
  routeIcon = null,
  onRouteIconHandled,
}: IconPreviewProps) => {
  const [selectedHue, setSelectedHue] = useState<ColorHue>("blue");
  const [selectedVariant, setSelectedVariant] = useState<Variant>("medium");
  const [selectedIcon, setSelectedIcon] = useState<IconType>(iconTypes[0]);
  const [iconPaths, setIconPaths] = useState<Record<string, IconPathState>>({});
  const [intersectionObserver, setIntersectionObserver] =
    useState<IntersectionObserver | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  // "outline" or "<hue>-<variant>": how the grid previews every icon
  const [previewColour, setPreviewColour] = useState<string>(() => readPref(PREVIEW_KEY, "outline"));
  const [pngSize, setPngSize] = useState<number>(() => Number(readPref(PNG_KEY, "128")) || 128);
  const [copied, setCopied] = useState<"svg" | "link" | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const [pack, setPackState] = useState<string[]>(() => {
    try {
      return JSON.parse(readPref(PACK_KEY, "[]"));
    } catch {
      return [];
    }
  });
  const [packId, setPackId] = useState<string>("custom");
  const setPack = (names: string[], id = "custom") => {
    setPackState(names);
    setPackId(id);
    writePref(PACK_KEY, JSON.stringify(names));
  };
  const togglePack = (name: string) => {
    const next = pack.includes(name) ? pack.filter((n) => n !== name) : [...pack, name];
    setPack(next, packId);
    track(pack.includes(name) ? "pack_remove" : "pack_add", { icon_name: name });
  };
  const packColour =
    previewColour !== "outline" ? previewColour : `${selectedHue}-${selectedVariant}`;

  const choosePreview = (value: string) => {
    setPreviewColour(value);
    writePref(PREVIEW_KEY, value);
    track("preview_colour", { colour: value });
  };

  // "/" focuses search, like most icon libraries
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Routing. /icon/<slug>/ opens an icon; the old ?icon=<slug> links still work.
  const routeReady = useRef(false);
  const openIconBySlug = (slug: string, colour?: string | null) => {
    const icon = iconTypes.find((i) => slugify(i.name) === slug);
    if (!icon) return false;
    const [hue, variant] = (colour || "").split("-");
    if (hue && hue in backgroundColors) setSelectedHue(hue as ColorHue);
    if (variant === "dark" || variant === "medium" || variant === "light") setSelectedVariant(variant);
    loadIcon(icon.name, true).then(() => {
      setSelectedIcon(icon);
      setIsSheetOpen(true);
      routeReady.current = true;
    });
    return true;
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const legacy = params.get("icon");
    const slug = routeIcon || legacy;
    if (slug && openIconBySlug(slug, params.get("colour"))) return;
    routeReady.current = true;
    if (selectedCategory) {
      window.setTimeout(() => {
        document
          .getElementById(`category-${selectedCategory.toLowerCase().replace(/[^a-z0-9]/g, "-")}`)
          ?.scrollIntoView();
      }, 300);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Back/forward between icons
  useEffect(() => {
    const onPop = () => {
      const m = window.location.pathname.match(/^\/icon\/([a-z0-9-]+)\/?$/);
      if (m) openIconBySlug(m[1], new URLSearchParams(window.location.search).get("colour"));
      else setIsSheetOpen(false);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the address bar in step with what is on screen
  useEffect(() => {
    if (!routeReady.current) return;
    const colourQuery = `?colour=${selectedHue}-${selectedVariant}`;
    const target = isSheetOpen
      ? iconPath(selectedIcon.name)
      : selectedCategory
      ? categoryPath(selectedCategory)
      : "/";
    if (window.location.pathname !== target) {
      navigate(target + (isSheetOpen ? colourQuery : ""));
      onRouteIconHandled?.();
    } else if (isSheetOpen && window.location.search !== colourQuery) {
      window.history.replaceState(null, "", target + colourQuery);
    } else if (!isSheetOpen && window.location.search) {
      window.history.replaceState(null, "", target);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSheetOpen, selectedIcon, selectedHue, selectedVariant, selectedCategory]);

  const canonicalUrl =
    SITE + (isSheetOpen ? iconPath(selectedIcon.name) : selectedCategory ? categoryPath(selectedCategory) : "/");

  // SEO: Generate page title and description dynamically
  const getPageTitle = () => {
    if (selectedIcon && isSheetOpen) {
      return `${selectedIcon.name} Icon for Jira (Free SVG and PNG) | Quirk`;
    } else if (selectedCategory) {
      return `${selectedCategory} Icons for Jira | Quirk`;
    }
    return "Free Jira Work Type Icons (SVG and PNG) | Quirk";
  };

  const getPageDescription = () => {
    if (selectedIcon && isSheetOpen) {
      return `Download the ${selectedIcon.name} icon for your Jira projects. Available in SVG and PNG formats with multiple colour variants. Free from the Quirk icon library.`;
    } else if (selectedCategory && categoryDescriptions[selectedCategory]) {
      return categoryDescriptions[selectedCategory];
    }
    return "Free Jira work type icons in SVG and PNG. 1,150+ designs in 11 colours for epics, stories, tasks and bugs. MIT licensed, made by Quirk.";
  };

  const handleRandomSelection = () => {
    const randomIcon = getRandomElement(iconTypes);
    const randomHue = getRandomElement(
      Object.keys(backgroundColors)
    ) as ColorHue;
    const randomVariant = getRandomElement([
      "dark",
      "medium",
      "light",
    ]) as Variant;

    // Load the icon content immediately
    loadIcon(randomIcon.name, true).then(() => {
      setSelectedIcon(randomIcon);
      setSelectedHue(randomHue);
      setSelectedVariant(randomVariant);
      setIsSheetOpen(true);
    });
  };

  // Set up intersection observer on mount
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const iconName = entry.target.getAttribute("data-icon-name");
            if (iconName) {
              loadIcon(iconName);
            }
          }
        });
      },
      { rootMargin: "50px" }
    );

    setIntersectionObserver(observer);

    return () => observer.disconnect();
  }, []);

  // ensure selected icon is loaded
  useEffect(() => {
    if (selectedIcon) {
      loadIcon(selectedIcon.name, true);
    }
  }, [selectedIcon]);

  // Modified load function to handle single icon
  const loadIcon = async (iconName: string, priority: boolean = false) => {
    // For priority loads, don't show loading state if we already have a path
    if (priority && iconPaths[iconName]?.path) return;

    // For non-priority loads, skip if already loaded or loading
    if (
      !priority &&
      (iconPaths[iconName]?.path || iconPaths[iconName]?.loading)
    )
      return;

    // For priority loads, keep existing path while loading
    setIconPaths((prev) => ({
      ...prev,
      [iconName]: {
        path: priority ? prev[iconName]?.path || null : null,
        loading: true,
      },
    }));

    const icon = iconTypes.find((i) => i.name === iconName);
    if (!icon) return;

    try {
      const svgContent = await loadSvgContent(icon.path);
      const path = extractPathsFromSvg(svgContent);

      setIconPaths((prev) => ({
        ...prev,
        [iconName]: { path, loading: false },
      }));
    } catch (error) {
      console.error(`Failed to load icon: ${iconName}`, error);
      setIconPaths((prev) => ({
        ...prev,
        [iconName]: {
          path: priority ? prev[iconName]?.path || null : null,
          loading: false,
        },
      }));
    }
  };

  const categorizedFilteredIcons = React.useMemo(() => {
    const searchLower = searchQuery.toLowerCase();

    // Filter icons first
    const filteredIcons = iconTypes.filter(
      (icon) =>
        icon.name.toLowerCase().includes(searchLower) ||
        icon.searchTerms.some((term) =>
          term.toLowerCase().includes(searchLower)
        )
    );

    // Create a map to store icons by category
    const groupedByCategory = new Map<string, IconType[]>();

    // Iterate through each filtered icon
    filteredIcons.forEach((icon) => {
      // Add the icon to each of its categories
      icon.categories.forEach((category) => {
        if (!groupedByCategory.has(category)) {
          groupedByCategory.set(category, []);
        }
        groupedByCategory.get(category)?.push(icon);
      });
    });

    // Convert map to sorted array of entries, only including categories with icons
    return Array.from(groupedByCategory.entries())
      .filter(([_, icons]) => icons.length > 0)
      .map(([category, icons]) => ({
        category,
        icons: icons.sort((a, b) => a.name.localeCompare(b.name)),
      }))
      .sort((a, b) => a.category.localeCompare(b.category));
  }, [searchQuery]);

  const renderSvgPreview = (
    icon: IconType,
    size: number = 24,
    useThemeColor: boolean = true
  ) => {
    const iconState = iconPaths[icon.name];

    // If we have no observer yet, return placeholder
    if (!intersectionObserver) {
      return (
        <div className="w-[36px] h-[36px] bg-muted animate-pulse rounded-md" />
      );
    }

    // If we're loading, show loading state
    if (!iconState || iconState.loading) {
      return (
        <div
          data-icon-name={icon.name}
          ref={(el) => {
            if (el) intersectionObserver.observe(el);
          }}
          className="w-[36px] h-[36px] bg-muted animate-pulse rounded-md"
          aria-label={`Loading ${icon.name} icon`} // SEO: Accessibility improvement
        />
      );
    }

    // If we have the path, render the SVG
    if (iconState.path) {
      const fgColor = useThemeColor
        ? "currentColor"
        : foregroundMappings[selectedHue][selectedVariant];
      const svgString = generateSVGString(
        iconState.path,
        fgColor,
        "none",
        size,
        4
      );

      // SEO: Add aria-label for accessibility and SEO
      return (
        <div
          className={
            useThemeColor
              ? "[&>svg]:text-foreground [&>svg>g]:stroke-current"
              : ""
          }
          dangerouslySetInnerHTML={{ __html: svgString }}
          aria-label={`${icon.name} icon for Jira work management`}
        />
      );
    }

    // Fallback for failed loads
    return <div className="w-[36px] h-[36px] bg-destructive/20 rounded-md" />;
  };

  const renderTilePreview = (icon: IconType, size: number) => {
    const path = iconPaths[icon.name]?.path;
    if (!path) return renderSvgPreview(icon, 36);
    const [hue, variant] = previewColour.split("-") as [ColorHue, Variant];
    const svgString = generateSVGString(
      path,
      foregroundMappings[hue][variant],
      backgroundColors[hue][variant],
      size,
      8
    );
    return (
      <div
        dangerouslySetInnerHTML={{ __html: svgString }}
        aria-label={`${icon.name} icon in ${hue} ${variant}`}
      />
    );
  };

  const renderIcon = (hue: ColorHue, variant: Variant) => {
    const bgColor = backgroundColors[hue][variant];
    const fgColor = foregroundMappings[hue][variant];
    const iconState = iconPaths[selectedIcon.name];
    const pathContent = iconState?.path || "";

    const svgString = generateSVGString(pathContent, fgColor, bgColor, 32);

    // SEO: Add descriptive aria-label
    return (
      <div
        className="p-2 transition-shadow rounded-lg cursor-pointer hover:shadow-lg"
        style={{ 
          backgroundColor: bgColor === "none" ? "transparent" : bgColor,
          border: bgColor === "none" ? "1px solid var(--border)" : "none"
        }}
        onClick={() => {
          setSelectedHue(hue);
          // For blank, always use medium variant; for others, use the clicked variant
          setSelectedVariant(hue === "blank" ? "medium" : variant);
        }}
        dangerouslySetInnerHTML={{ __html: svgString }}
        aria-label={`${selectedIcon.name} icon in ${hue} ${hue === "blank" ? "blank" : variant} colour variant`}
      />
    );
  };

  const handleDownload = async (format: "svg" | "png") => {
    trackDownload("work-type", selectedIcon.name, format, selectedHue, selectedVariant);
    const bgColor = backgroundColors[selectedHue][selectedVariant];
    const fgColor = foregroundMappings[selectedHue][selectedVariant];
    const iconState = iconPaths[selectedIcon.name];
    const pathContent = iconState?.path || "";

    if (format === "svg") {
      const svgString = generateSVGString(
        pathContent,
        fgColor,
        bgColor,
        undefined,
        undefined,
        true
      );
      const blob = new Blob([svgString], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${slugify(selectedIcon.name)}-${selectedHue}-${selectedVariant}.svg`;
      a.click();
      URL.revokeObjectURL(url);
    } else {
      const svgString = generateSVGString(
        pathContent,
        fgColor,
        bgColor,
        undefined,
        undefined,
        true
      );
      const pngBlob = await generatePNG(
        generateSVGString(pathContent, fgColor, bgColor, pngSize, pngSize / 6, true),
        pngSize,
        1
      );
      void svgString;
      const url = URL.createObjectURL(pngBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${slugify(selectedIcon.name)}-${selectedHue}-${selectedVariant}-${pngSize}px.png`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const flashCopied = (what: "svg" | "link") => {
    setCopied(what);
    window.setTimeout(() => setCopied(null), 1600);
  };

  const handleCopySvg = async () => {
    const svgString = generateSVGString(
      iconPaths[selectedIcon.name]?.path || "",
      foregroundMappings[selectedHue][selectedVariant],
      backgroundColors[selectedHue][selectedVariant],
      undefined,
      undefined,
      true
    );
    try {
      await navigator.clipboard.writeText(svgString);
      flashCopied("svg");
      track("icon_copy_svg", { icon_name: selectedIcon.name, colour: `${selectedHue}-${selectedVariant}` });
    } catch {
      /* clipboard blocked */
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      flashCopied("link");
      track("icon_copy_link", { icon_name: selectedIcon.name });
    } catch {
      /* clipboard blocked */
    }
  };

  const renderDownloadActions = (compact: boolean) => (
    <div className={`flex flex-col gap-3 ${compact ? "items-center" : ""}`}>
      <div className="flex items-center gap-2 text-xs text-muted-foreground" role="radiogroup" aria-label="PNG size">
        <span>PNG size</span>
        {PNG_SIZES.map((sz) => (
          <button
            key={sz}
            type="button"
            role="radio"
            aria-checked={pngSize === sz}
            onClick={() => {
              setPngSize(sz);
              writePref(PNG_KEY, String(sz));
            }}
            className={`px-2.5 py-1 rounded-full border text-xs transition-colors ${
              pngSize === sz
                ? "border-foreground bg-foreground text-background"
                : "border-border hover:border-foreground"
            }`}
          >
            {sz}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => handleDownload("png")}>
          <Download /> PNG
        </Button>
        <Button onClick={() => handleDownload("svg")} variant="outline">
          <Download /> SVG
        </Button>
        <Button onClick={handleCopySvg} variant="outline" aria-label="Copy SVG code">
          {copied === "svg" ? <Check /> : <Copy />} {copied === "svg" ? "Copied" : "Copy SVG"}
        </Button>
        <Button onClick={() => togglePack(selectedIcon.name)} variant={pack.includes(selectedIcon.name) ? "secondary" : "outline"}>
          {pack.includes(selectedIcon.name) ? <Check /> : <Plus />} {pack.includes(selectedIcon.name) ? "In your set" : "Add to set"}
        </Button>
        <Button onClick={handleCopyLink} variant="ghost" aria-label="Copy a link to this icon">
          {copied === "link" ? <Check /> : <Link2 />} {copied === "link" ? "Link copied" : "Share"}
        </Button>
      </div>
      <p className="max-w-sm text-xs text-muted-foreground">
        Tip: Jira shows work type icons small, so bold colours with high contrast read best.
        128 px PNG suits most Jira uploads.
      </p>
    </div>
  );

  const handleIconSelect = (icon: IconType) => {
    if (previewColour !== "outline") {
      const [hue, variant] = previewColour.split("-");
      setSelectedHue(hue as ColorHue);
      setSelectedVariant(variant as Variant);
    }
    // Load the icon content immediately
    loadIcon(icon.name, true).then(() => {
      setSelectedIcon(icon);
      setIsSheetOpen(true);
      routeReady.current = true;
    });
  };

  const uniqueFilteredIcons = new Set(
    categorizedFilteredIcons.flatMap(({ icons }) => icons.map((i) => i.name))
  ).size;

  const trackSearch = React.useMemo(() => makeSearchTracker("work-type"), []);
  useEffect(() => {
    trackSearch(searchQuery, uniqueFilteredIcons);
  }, [searchQuery, uniqueFilteredIcons, trackSearch]);

  // SEO: Generate structured data for the page
  const generateStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Jira Work Type Icons by Quirk Consulting",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "AUD",
      },
      publisher: {
        "@type": "Organization",
        name: "Quirk Consulting",
        url: "https://www.quirk.com.au",
      },
    };

    if (selectedIcon && isSheetOpen) {
      return {
        ...baseData,
        softwareAddOn: {
          "@type": "SoftwareApplication",
          name: `${selectedIcon.name} Icon for Jira`,
          applicationCategory: "DesignApplication",
          operatingSystem: "Web",
        },
      };
    }

    return baseData;
  };

  return (
    <div className="flex flex-col h-full p-4 md:p-8">
      {/* SEO: Add Helmet for meta tags */}
      <Helmet>
        <title>{getPageTitle()}</title>
        <meta name="description" content={getPageDescription()} />
        <meta
          name="keywords"
          content={`jira icons, work management icons, project management, ${selectedIcon?.searchTerms.join(
            ", "
          )}`}
        />

        {/* OpenGraph tags for social media */}
        <meta property="og:title" content={getPageTitle()} />
        <meta property="og:description" content={getPageDescription()} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={getPageTitle()} />
        <meta name="twitter:description" content={getPageDescription()} />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href={canonicalUrl}
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(generateStructuredData())}
        </script>
      </Helmet>

      {/* SEO: More semantic heading structure */}
      <LibraryHero
        eyebrow="Free for Jira"
        title="Jira work type icons, ready to upload"
        intro="Pick an icon, choose a colour and download it as SVG or PNG. Make epics, stories, bugs and your own custom work types easy to spot on every board."
        stats={[
          { value: "1,150+", label: "icons" },
          { value: "11", label: "colours, 3 shades" },
          { value: "SVG + PNG", label: "up to 512 px" },
          { value: "MIT", label: "licence" },
        ]}
      />

      <div className="flex flex-col flex-grow">
        {/* Sticky search container */}
        <div className="sticky top-0 z-10 bg-background">
          <div className="flex gap-2">
            <div className="relative flex-grow">
              <Search
                className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
                size={20}
              />
              <Input
                type="text"
                placeholder={`Search ${uniqueFilteredIcons.toLocaleString("en-AU")} icons, for example bug, release, risk`}
                className="pl-10 rounded-full h-11"
                ref={searchRef}
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                aria-label="Search for Jira icons" // SEO: Accessibility improvement
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              className="filtered-icon-trigger"
              onClick={handleRandomSelection}
              title="Select random icon and colour"
              aria-label="Select random icon and colour" // SEO: Accessibility improvement
            >
              <Shuffle className="w-4 h-4" />
            </Button>
          </div>
          {/* Preview colour: shows every icon as it will look in Jira */}
          <div className="flex flex-wrap items-center gap-2 py-3" role="radiogroup" aria-label="Preview colour">
            <span className="mr-1 text-xs font-medium text-muted-foreground">Preview in</span>
            <button
              type="button"
              role="radio"
              aria-checked={previewColour === "outline"}
              onClick={() => choosePreview("outline")}
              className={`h-7 px-3 text-xs rounded-full border transition-colors ${
                previewColour === "outline" ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"
              }`}
            >
              Outline
            </button>
            {HUES.map((hue) => {
              const key = `${hue}-medium`;
              return (
                <button
                  key={hue}
                  type="button"
                  role="radio"
                  aria-checked={previewColour.startsWith(`${hue}-`)}
                  aria-label={`Preview in ${hue}`}
                  title={hue}
                  onClick={() => choosePreview(previewColour.startsWith(`${hue}-`) ? previewColour : key)}
                  className={`w-7 h-7 rounded-full transition-transform hover:scale-110 ${
                    previewColour.startsWith(`${hue}-`) ? "ring-2 ring-offset-2 ring-foreground ring-offset-background" : ""
                  }`}
                  style={{ backgroundColor: backgroundColors[hue].medium }}
                />
              );
            })}
            {previewColour !== "outline" && (
              <div className="flex ml-1 overflow-hidden border rounded-full" role="radiogroup" aria-label="Shade">
                {(["light", "medium", "dark"] as const).map((v) => {
                  const hue = previewColour.split("-")[0];
                  const active = previewColour.endsWith(`-${v}`);
                  return (
                    <button
                      key={v}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => choosePreview(`${hue}-${v}`)}
                      className={`h-7 px-3 text-xs capitalize ${active ? "bg-foreground text-background" : "hover:bg-accent"}`}
                    >
                      {v}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {!searchQuery && (
          <StarterPacks
            onUse={(names, id) => {
              setPack(names, id);
              track("starter_pack", { pack_id: id });
              if (previewColour === "outline") choosePreview("blue-medium");
            }}
          />
        )}

        {/* SEO: Add FAQ section for rich snippets */}
        {!searchQuery && (
          <div className="p-4 my-4 rounded-lg bg-accent">
            <h2 className="mb-2 text-lg font-semibold">
              About Jira Work Type Icons
            </h2>
            <p className="mb-2">
              These icons help organisations visualise and categorise different
              types of work in Jira, making project management more efficient
              and visually intuitive.
            </p>
            <details className="mb-2">
              <summary className="font-medium cursor-pointer">
                How can I use these icons in my Jira instance?
              </summary>
              <p className="pl-4 mt-2">
                Download the icons in SVG or PNG format and assign them to your
                work types in your Jira instance.
              </p>
            </details>
            <details>
              <summary className="font-medium cursor-pointer">
                Are these icons free to use?
              </summary>
              <p className="pl-4 mt-2">
                Yes, all icons in this library are free to use in your Jira
                instance and other work management tools.
              </p>
            </details>
            <details>
              <summary className="font-medium cursor-pointer">
                Can someone help us set up work types in Jira?
              </summary>
              <p className="pl-4 mt-2">
                Yes. Quirk is an Australian Atlassian partner that designs Jira
                work types, workflows and boards around how your teams work.{" "}
                <a
                  href={quirkUrl("/services/atlassian-consulting-services/", "faq-services")}
                  target="_blank"
                  rel="noopener"
                  className="font-medium text-primary hover:underline"
                >
                  See our Atlassian consulting
                </a>
                .
              </p>
            </details>
          </div>
        )}

        <div className="flex-grow overflow-y-auto">
          <div className="space-y-6 md:space-y-8">
            {categorizedResults.map(({ category, icons }) => (
              <div
                key={category}
                className="space-y-3 md:space-y-4"
                id={`category-${category
                  .toLowerCase()
                  .replace(/[^a-z0-9]/g, "-")}`}
              >
                {/* SEO: Add description to each category section */}
                <div>
                  <h2 className="text-base font-semibold md:text-lg text-muted-foreground">
                    {category} ({icons.length})
                  </h2>
                  {categoryDescriptions[category] && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {categoryDescriptions[category]}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-12 md:gap-4">
                  {icons.map((icon) => (
                    <a
                      key={`${category}-${icon.name}`}
                      href={iconPath(icon.name)}
                      className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      onClick={(e) => {
                        if (!isPlainClick(e)) return;
                        e.preventDefault();
                        handleIconSelect(icon);
                      }}
                    >
                    <Card
                      className={`relative filtered-icon-trigger cursor-pointer transition-all hover:-translate-y-0.5 hover:border-foreground/40 hover:shadow-sm ${
                        selectedIcon.name === icon.name && isSheetOpen ? "border-primary ring-1 ring-primary" : ""
                      }`}
                    >
                      {pack.includes(icon.name) && (
                        <span className="absolute w-2 h-2 rounded-full top-1.5 right-1.5 bg-primary" aria-label="In your set" />
                      )}
                      <CardContent className="p-2 text-center">
                        <div className="flex justify-center mb-2">
                          {previewColour === "outline"
                            ? renderSvgPreview(icon, 36)
                            : renderTilePreview(icon, 40)}
                        </div>
                        <div className="text-xs font-medium truncate md:text-sm">
                          {icon.name}
                        </div>
                      </CardContent>
                    </Card>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New Request Section */}
        <div className="flex flex-col items-center justify-center py-8 mt-8 border-t">
          <p className="mb-4 text-muted-foreground">
            Can't find what you're looking for?
          </p>
          <Button asChild variant="default">
            <a
              href="https://github.com/quirk-consulting/quirk-consulting.github.io/issues/new?labels=enhancement&type=feature"
              target="_blank"
              rel="noopener noreferrer"
            >
              Raise a request
            </a>
          </Button>
        </div>
      </div>

      <Sheet
        open={isSheetOpen}
        onOpenChange={(open) => {
          if (
            !open &&
            (event?.target as Element)?.closest(".filtered-icon-trigger")
          ) {
            return;
          }
          setIsSheetOpen(open);
        }}
        modal={false}
      >
        <SheetContent
          side="bottom"
          className="max-h-[90dvh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="top-0 mb-4 bg-background">
            <SheetTitle className="text-base md:text-lg">
              {selectedIcon.name}:{" "}
              {selectedHue === "blank" 
                ? "Blank Background"
                : selectedVariant === "medium"
                ? ""
                : selectedVariant.charAt(0).toUpperCase() +
                  selectedVariant.slice(1)}{" "}
              {selectedHue === "blank" 
                ? ""
                : selectedHue.charAt(0).toUpperCase() + selectedHue.slice(1)
              }
            </SheetTitle>
            {/* SEO: Add more descriptive text about the selected icon */}
            <p className="mt-1 text-sm text-muted-foreground">
              Download this {selectedIcon.name} icon for your Jira projects in
              SVG or PNG format. Available in {selectedVariant} {selectedHue}{" "}
              colour variant.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Color Variants Section */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">
                Colour variants
              </h3>

              {/* Mobile: 6x6 grid */}
              <div className="grid grid-cols-6 gap-2 md:hidden">
                {[0, 1].map((row) => (
                  <React.Fragment key={row}>
                    {Object.keys(backgroundColors)
                      .slice(row * 6, (row + 1) * 6)
                      .map((hue) => (
                        <div key={hue} className="space-y-2">
                          {hue === "blank" ? (
                            // Show only one blank option
                            <div className="flex items-center justify-center">
                              {renderIcon(hue as ColorHue, "medium")}
                            </div>
                          ) : (
                            (["dark", "medium", "light"] as const).map(
                              (variant) => (
                                <div
                                  key={`${hue}-${variant}`}
                                  className="flex items-center justify-center"
                                >
                                  {renderIcon(hue as ColorHue, variant)}
                                </div>
                              )
                            )
                          )}
                        </div>
                      ))}
                  </React.Fragment>
                ))}
              </div>

              {/* Desktop: 12x3 grid */}
              <div className="hidden grid-cols-12 gap-2 md:grid">
                {Object.keys(backgroundColors).map((hue) => (
                  <div key={hue} className="space-y-2">
                    {hue === "blank" ? (
                      // Show only one blank option
                      <div className="flex items-center justify-center">
                        {renderIcon(hue as ColorHue, "medium")}
                      </div>
                    ) : (
                      (["dark", "medium", "light"] as const).map((variant) => (
                        <div
                          key={`${hue}-${variant}`}
                          className="flex items-center justify-center"
                        >
                          {renderIcon(hue as ColorHue, variant)}
                        </div>
                      ))
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Preview Section */}
            <div className="flex flex-col md:justify-center">
              <h3 className="mb-2 text-sm font-medium text-muted-foreground">
                Preview and download
              </h3>
              {/* Desktop layout - side by side */}
              <div className="hidden gap-6 md:flex">
                {/* Hero Preview */}
                <div
                  className="flex items-center justify-center w-40 h-40 p-4 rounded-lg shrink-0"
                  style={{
                    backgroundColor: backgroundColors[selectedHue][selectedVariant] === "none" 
                      ? "transparent" 
                      : backgroundColors[selectedHue][selectedVariant],
                    border: backgroundColors[selectedHue][selectedVariant] === "none" 
                      ? "1px solid var(--border)" 
                      : "none"
                  }}
                >
                  {renderSvgPreview(selectedIcon, 121, false)}
                </div>

                {renderDownloadActions(false)}
              </div>

              {/* Mobile layout - stacked */}
              <div className="flex flex-col items-center gap-4 md:hidden">
                {/* Hero Preview */}
                <div
                  className="flex items-center justify-center w-40 h-40 p-4 rounded-lg shrink-0"
                  style={{
                    backgroundColor: backgroundColors[selectedHue][selectedVariant] === "none" 
                      ? "transparent" 
                      : backgroundColors[selectedHue][selectedVariant],
                    border: backgroundColors[selectedHue][selectedVariant] === "none" 
                      ? "1px solid var(--border)" 
                      : "none"
                  }}
                >
                  {renderSvgPreview(selectedIcon, 88, false)}
                </div>

                {renderDownloadActions(true)}
              </div>
            </div>
          </div>
          <QuirkCta variant="download" placement="work-type-sheet" />
        </SheetContent>
      </Sheet>
      <PackBar
        pack={pack}
        packId={packId}
        colour={packColour}
        pngSize={pngSize}
        onClear={() => setPack([])}
        onRemove={(n) => togglePack(n)}
        hidden={isSheetOpen}
      />
      {pack.length > 0 && <div className="h-28" aria-hidden />}
    </div>
  );
};

export default IconPreview;
