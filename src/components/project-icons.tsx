// src/components/project-icons.tsx
import React, { useState, useEffect } from "react";
import { Search, Shuffle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Helmet } from "react-helmet";
import {
  ColorHue,
  Variant,
  backgroundColors,
  foregroundMappings,
} from "../lib/colors";
import {
  generateProjectSVGString,
  generateProjectPNG,
  loadProjectSvgContent,
} from "../utils/projectIconGenerator";
import { projectIconTypes, type ProjectIconType } from "../lib/projectIconTypes";

interface ProjectIconState {
  svgContent: string | null;
  loading: boolean;
}

export type ProjectCategoryResults = {
  category: string;
  icons: typeof projectIconTypes;
};

const getRandomElement = <T,>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

// Enhanced SEO-optimised description text for project icon categories
const projectCategoryDescriptions: {
  [key: string]: string;
} = {
  "Abstract Compositions":
    "Creative abstract compositions perfect for innovative and artistic Jira projects. These dynamic project icons represent creativity, innovation, and forward-thinking initiatives in modern work management.",

  "Geometric Patterns":
    "Structured geometric patterns ideal for technical and systematic Jira projects. Professional project icons that convey organisation, precision, and methodical approaches to project management.",

  "Dynamic Shapes":
    "Energetic dynamic shapes representing movement and progress in Jira project tracking. Perfect for agile teams and fast-paced development environments requiring visual momentum indicators.",

  "Minimal Forms":
    "Clean minimal forms for streamlined Jira project organisation. Simple yet sophisticated project icons that emphasise clarity and focus in work management systems.",

  "Organic Elements":
    "Natural organic elements bringing human-centred design to Jira projects. Environmentally-inspired project icons perfect for sustainability initiatives and human-focused work streams.",

  "Symbolic Icons":
    "Meaningful symbolic representations for distinctive Jira project identification. Iconic project markers that create memorable visual associations and improve project recognition across teams.",
};

export function ProjectIcons() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedHue, setSelectedHue] = useState<ColorHue>("blue");
  const [selectedVariant, setSelectedVariant] = useState<Variant>("medium");
  const [selectedIcon, setSelectedIcon] = useState<ProjectIconType>(projectIconTypes[0]);
  const [iconStates, setIconStates] = useState<Record<string, ProjectIconState>>({});
  const [intersectionObserver, setIntersectionObserver] =
    useState<IntersectionObserver | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [categorizedResults, setCategorizedResults] = useState<ProjectCategoryResults[]>([]);

  // Process icon categories and search results
  useEffect(() => {
    const searchLower = searchQuery.toLowerCase();

    // Filter icons based on search query
    const filteredIcons = projectIconTypes.filter(
      (icon) =>
        icon.name.toLowerCase().includes(searchLower) ||
        icon.searchTerms.some((term) =>
          term.toLowerCase().includes(searchLower)
        )
    );

    // Group icons by category
    const groupedByCategory = new Map<string, typeof projectIconTypes>();

    // Group filtered icons by category
    filteredIcons.forEach((icon) => {
      icon.categories.forEach((category) => {
        if (!groupedByCategory.has(category)) {
          groupedByCategory.set(category, []);
        }
        groupedByCategory.get(category)?.push(icon);
      });
    });

    // Convert to array and sort
    const categorized = Array.from(groupedByCategory.entries())
      .map(([category, icons]) => ({
        category,
        icons: icons.sort((a, b) => a.name.localeCompare(b.name)),
      }))
      .sort((a, b) => a.category.localeCompare(b.category));

    setCategorizedResults(categorized);
  }, [searchQuery]);

  // SEO: Generate page title and description dynamically
  const getPageTitle = () => {
    if (selectedIcon && isSheetOpen) {
      return `${selectedIcon.name} Project Icon - Jira Project Icons | Quirk Consulting`;
    } else if (selectedCategory) {
      return `${selectedCategory} Project Icons - Jira Project Management Icons | Quirk Consulting`;
    }
    return "Jira Project Icons Library | Modern Project Management Tools by Quirk Consulting";
  };

  const getPageDescription = () => {
    if (selectedIcon && isSheetOpen) {
      return `Download the ${selectedIcon.name} project icon for your Jira projects. Available in SVG and PNG formats optimised for Jira project management. Part of the Quirk Consulting project icon library.`;
    } else if (selectedCategory && projectCategoryDescriptions[selectedCategory]) {
      return projectCategoryDescriptions[selectedCategory];
    }
    return "Free, high-quality Jira project icons for modern project management. Customisable SVG and PNG icons optimised for Jira project identification and visual organisation. Created by Quirk Consulting.";
  };

  const handleRandomSelection = () => {
    const randomIcon = getRandomElement(projectIconTypes);
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

  // Ensure selected icon is loaded
  useEffect(() => {
    if (selectedIcon) {
      loadIcon(selectedIcon.name, true);
    }
  }, [selectedIcon]);

  // Load function to handle project icons
  const loadIcon = async (iconName: string, priority: boolean = false) => {
    // For priority loads, don't show loading state if we already have content
    if (priority && iconStates[iconName]?.svgContent) return;

    // For non-priority loads, skip if already loaded or loading
    if (
      !priority &&
      (iconStates[iconName]?.svgContent || iconStates[iconName]?.loading)
    )
      return;

    // For priority loads, keep existing content while loading
    setIconStates((prev) => ({
      ...prev,
      [iconName]: {
        svgContent: priority ? prev[iconName]?.svgContent || null : null,
        loading: true,
      },
    }));

    const icon = projectIconTypes.find((i) => i.name === iconName);
    if (!icon) return;

    try {
      const svgContent = await loadProjectSvgContent(icon.path);

      setIconStates((prev) => ({
        ...prev,
        [iconName]: { svgContent, loading: false },
      }));
    } catch (error) {
      console.error(`Failed to load project icon: ${iconName}`, error);
      setIconStates((prev) => ({
        ...prev,
        [iconName]: {
          svgContent: priority ? prev[iconName]?.svgContent || null : null,
          loading: false,
        },
      }));
    }
  };

  const renderSvgPreview = (
    icon: ProjectIconType,
    size: number = 36,
    useThemeColor: boolean = true
  ) => {
    const iconState = iconStates[icon.name];

    // If we have no observer yet, return placeholder
    if (!intersectionObserver) {
      return (
        <div className="rounded-md w-9 h-9 bg-muted animate-pulse" />
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
          className="rounded-md w-9 h-9 bg-muted animate-pulse"
          aria-label={`Loading ${icon.name} project icon`}
        />
      );
    }

    // If we have the content, render the SVG
    if (iconState.svgContent) {
      const fgColor = useThemeColor ? "currentColor" : foregroundMappings[selectedHue][selectedVariant];
      const bgColor = useThemeColor ? "none" : backgroundColors[selectedHue][selectedVariant]; 
      
      const svgString = generateProjectSVGString(
        iconState.svgContent,
        fgColor,
        bgColor,
        size,
        2
      );

      return (
        <div
          dangerouslySetInnerHTML={{ __html: svgString }}
          aria-label={`${icon.name} project icon for Jira project management`}
        />
      );
    }

    // Fallback for failed loads
    return <div className="rounded-md w-9 h-9 bg-destructive/20" />;
  };

  const renderIcon = (hue: ColorHue, variant: Variant) => {
    const bgColor = backgroundColors[hue][variant];
    const fgColor = foregroundMappings[hue][variant];
    const iconState = iconStates[selectedIcon.name];
    const svgContent = iconState?.svgContent || "";

    // Use 32x32 size with 2px padding for project icons
    const svgString = generateProjectSVGString(svgContent, fgColor, bgColor, 32, 2);

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
        aria-label={`${selectedIcon.name} project icon in ${hue} ${hue === "blank" ? "blank" : variant} colour variant`}
      />
    );
  };

  const handleDownload = async (format: "svg" | "png") => {
    const bgColor = backgroundColors[selectedHue][selectedVariant];
    const fgColor = foregroundMappings[selectedHue][selectedVariant];
    const iconState = iconStates[selectedIcon.name];
    const svgContent = iconState?.svgContent || "";

    // Use 256x256 size for project icons
    const iconSize = 256;

    if (format === "svg") {
      const svgString = generateProjectSVGString(
        svgContent,
        fgColor,
        bgColor,
        iconSize,
        undefined,
        true
      );
      const blob = new Blob([svgString], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${selectedIcon.name.toLowerCase().replace(/\s+/g, '-')}-${selectedHue}-${selectedVariant}.svg`;
      a.click();
      URL.revokeObjectURL(url);
    } else {
      const svgString = generateProjectSVGString(
        svgContent,
        fgColor,
        bgColor,
        iconSize,
        undefined,
        true
      );
      const pngBlob = await generateProjectPNG(svgString, iconSize);
      const url = URL.createObjectURL(pngBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${selectedIcon.name.toLowerCase().replace(/\s+/g, '-')}-${selectedHue}-${selectedVariant}.png`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const handleIconSelect = (icon: ProjectIconType) => {
    // Load the icon content immediately
    loadIcon(icon.name, true).then(() => {
      setSelectedIcon(icon);
      setIsSheetOpen(true);

      // Update the selected category based on the first category of the icon
      if (icon.categories.length > 0) {
        setSelectedCategory(icon.categories[0]);
      }
    });
  };

  const totalFilteredIcons = categorizedResults.reduce(
    (total, { icons }) => total + icons.length,
    0
  );

  return (
    <div className="flex flex-col h-full p-4 md:p-8">
      {/* SEO: Add Helmet for meta tags */}
      <Helmet>
        <title>{getPageTitle()}</title>
        <meta name="description" content={getPageDescription()} />
        <meta
          name="keywords"
          content={`jira project icons, project management icons, project identification, ${selectedIcon?.searchTerms.join(
            ", "
          )}`}
        />
        <meta property="og:title" content={getPageTitle()} />
        <meta property="og:description" content={getPageDescription()} />
        <link
          rel="canonical"
          href="https://www.quirk.com.au/jira-icons/projects"
        />
      </Helmet>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-bold md:text-2xl">Jira Project Icons</h1>
        <p className="mt-2 text-muted-foreground">
          Browse and download our comprehensive collection of Jira project icons for modern project management. 
          Customisable SVG and PNG icons optimised for Jira project identification and visual organisation.
        </p>
      </div>

      <div className="flex flex-col flex-grow">
        {/* Search container */}
        <div className="sticky top-0 z-10 bg-background">
          <div className="flex gap-2">
            <div className="relative flex-grow">
              <Search
                className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
                size={20}
              />
              <Input
                type="text"
                placeholder={`Search ${totalFilteredIcons} Jira project icons...`}
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search for Jira project icons"
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              className="filtered-icon-trigger"
              onClick={handleRandomSelection}
              title="Select random project icon and colour"
              aria-label="Select random project icon and colour"
            >
              <Shuffle className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* FAQ section */}
        {!searchQuery && (
          <div className="p-4 my-4 rounded-lg bg-accent">
            <h2 className="mb-2 text-lg font-semibold">
              About Jira Project Icons
            </h2>
            <p className="mb-2">
              These project icons help teams quickly identify and distinguish between different projects in Jira, 
              making project management more visual and intuitive.
            </p>
            <details className="mb-2">
              <summary className="font-medium cursor-pointer">
                How do I use project icons in Jira?
              </summary>
              <p className="pl-4 mt-2">
                Download the icons in PNG format (256x256 pixels) and upload them as custom project avatars 
                in your Jira project settings. You may need to resize them to your preferred display size.
              </p>
            </details>
            <details>
              <summary className="font-medium cursor-pointer">
                What size are the downloaded project icons?
              </summary>
              <p className="pl-4 mt-2">
                Our project icons are provided in high resolution 256x256 pixels, giving you flexibility 
                to use them at various sizes while maintaining crisp quality.
              </p>
            </details>
          </div>
        )}

        {/* Icons grid */}
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
                <div>
                  <h2 className="text-base font-semibold md:text-lg text-muted-foreground">
                    {category} ({icons.length})
                  </h2>
                  {projectCategoryDescriptions[category] && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {projectCategoryDescriptions[category]}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-12 md:gap-4">
                  {icons.map((icon) => (
                    <Card
                      key={`${category}-${icon.name}`}
                      className={`filtered-icon-trigger cursor-pointer hover:bg-accent transition-colors ${
                        selectedIcon.name === icon.name ? "border-primary" : ""
                      }`}
                      onClick={() => handleIconSelect(icon)}
                    >
                      <CardContent className="p-2 text-center">
                        <div className="flex justify-center mb-2">
                          {renderSvgPreview(icon, 36)}
                        </div>
                        <div className="text-xs font-medium truncate md:text-sm">
                          {icon.name}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Preview Sheet */}
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
              {selectedIcon.name} -{" "}
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
            <p className="mt-1 text-sm text-muted-foreground">
              Download this {selectedIcon.name} project icon for your Jira projects in
              SVG or PNG format. Available in {selectedVariant} {selectedHue}{" "}
              colour variant.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Color Variants Section */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">
                Colour Variants
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
                Preview & Download
              </h3>
              
              {/* Desktop layout */}
              <div className="hidden gap-6 md:flex">
                <div
                  className="flex items-center justify-center w-40 h-40 p-2 rounded-lg shrink-0"
                  style={{
                    backgroundColor: backgroundColors[selectedHue][selectedVariant] === "none" 
                      ? "transparent" 
                      : backgroundColors[selectedHue][selectedVariant],
                    border: backgroundColors[selectedHue][selectedVariant] === "none" 
                      ? "1px solid var(--border)" 
                      : "none"
                  }}
                >
                  {renderSvgPreview(selectedIcon, 112, false)}
                </div>

                <div className="flex flex-col gap-2">
                  <Button
                    onClick={() => handleDownload("png")}
                    variant="default"
                    className="w-40"
                  >
                    Download PNG
                  </Button>
                  <Button
                    onClick={() => handleDownload("svg")}
                    variant="default"
                    className="w-40"
                  >
                    Download SVG
                  </Button>
                </div>
              </div>

              {/* Mobile layout */}
              <div className="flex flex-col items-center gap-4 md:hidden">
                <div
                  className="flex items-center justify-center w-24 h-24 p-2 rounded-lg shrink-0"
                  style={{
                    backgroundColor: backgroundColors[selectedHue][selectedVariant] === "none" 
                      ? "transparent" 
                      : backgroundColors[selectedHue][selectedVariant],
                    border: backgroundColors[selectedHue][selectedVariant] === "none" 
                      ? "1px solid var(--border)" 
                      : "none"
                  }}
                >
                  {renderSvgPreview(selectedIcon, 80, false)}
                </div>

                <div className="flex flex-row gap-2">
                  <Button
                    onClick={() => handleDownload("png")}
                    variant="secondary"
                    size="sm"
                    className="w-36"
                  >
                    PNG
                  </Button>
                  <Button
                    onClick={() => handleDownload("svg")}
                    variant="default"
                    size="sm"
                    className="w-32"
                  >
                    SVG
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default ProjectIcons;
