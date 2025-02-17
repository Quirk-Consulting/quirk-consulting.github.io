// src/components/IconPreview.tsx
import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
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

interface IconPathState {
  path: string | null;
  loading: boolean;
}

const IconPreview = () => {
  const [selectedHue, setSelectedHue] = useState<ColorHue>("blue");
  const [selectedVariant, setSelectedVariant] = useState<Variant>("medium");
  const [selectedIcon, setSelectedIcon] = useState<IconType>(iconTypes[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [iconPaths, setIconPaths] = useState<Record<string, IconPathState>>({});
  const [intersectionObserver, setIntersectionObserver] =
    useState<IntersectionObserver | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

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

  // Modified load function to handle single icon
  const loadIcon = async (iconName: string) => {
    // Skip if already loaded or loading
    if (iconPaths[iconName]?.path || iconPaths[iconName]?.loading) return;

    setIconPaths((prev) => ({
      ...prev,
      [iconName]: { path: null, loading: true },
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
        [iconName]: { path: null, loading: false },
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

      return (
        <div
          className={
            useThemeColor
              ? "[&>svg]:text-foreground [&>svg>g]:stroke-current"
              : ""
          }
          dangerouslySetInnerHTML={{ __html: svgString }}
        />
      );
    }

    // Fallback for failed loads
    return <div className="w-[36px] h-[36px] bg-destructive/20 rounded-md" />;
  };

  const renderIcon = (hue: ColorHue, variant: Variant) => {
    const bgColor = backgroundColors[hue][variant];
    const fgColor = foregroundMappings[hue][variant];
    const iconState = iconPaths[selectedIcon.name];
    const pathContent = iconState?.path || "";

    const svgString = generateSVGString(pathContent, fgColor, bgColor, 32);

    return (
      <div
        className="p-2 transition-shadow rounded-lg cursor-pointer hover:shadow-lg"
        style={{ backgroundColor: bgColor }}
        onClick={() => {
          setSelectedHue(hue);
          setSelectedVariant(variant);
        }}
        dangerouslySetInnerHTML={{ __html: svgString }}
      />
    );
  };

  const handleDownload = async (format: "svg" | "png") => {
    const bgColor = backgroundColors[selectedHue][selectedVariant];
    const fgColor = foregroundMappings[selectedHue][selectedVariant];
    const iconState = iconPaths[selectedIcon.name];
    const pathContent = iconState?.path || "";

    if (format === "svg") {
      const svgString = generateSVGString(pathContent, fgColor, bgColor);
      const blob = new Blob([svgString], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${selectedIcon.name.toLowerCase()}-${selectedHue}-${selectedVariant}.svg`;
      a.click();
      URL.revokeObjectURL(url);
    } else {
      const svgString = generateSVGString(pathContent, fgColor, bgColor);
      const pngBlob = await generatePNG(svgString);
      const url = URL.createObjectURL(pngBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${selectedIcon.name.toLowerCase()}-${selectedHue}-${selectedVariant}.png`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const handleIconSelect = (icon: IconType) => {
    setSelectedIcon(icon);
    console.log(isSheetOpen);
    setIsSheetOpen(true);
  };

  const totalFilteredIcons = categorizedFilteredIcons.reduce(
    (total, { icons }) => total + icons.length,
    0
  );

  return (
    <div className="flex flex-col h-full p-4 md:p-8">
      <h1 className="mb-6 text-xl font-bold md:text-2xl">
        Jira Issue Type Icons
      </h1>
      <div className="flex flex-col flex-grow">
        <div className="relative mb-4">
          <Search
            className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
            size={20}
          />
          <Input
            type="text"
            placeholder={`Search ${totalFilteredIcons} icons...`}
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex-grow overflow-y-auto">
          <div className="space-y-6 md:space-y-8">
            {categorizedFilteredIcons.map(({ category, icons }) => (
              <div
                key={category}
                className="space-y-3 md:space-y-4"
                id={`category-${category
                  .toLowerCase()
                  .replace(/[^a-z0-9]/g, "-")}`}
              >
                <h2 className="text-base font-semibold md:text-lg text-muted-foreground">
                  {category}
                </h2>
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
          <div className="top-0 pt-2 mb-4 bg-background">
            <SheetTitle className="text-base md:text-lg">
              {selectedIcon.name} -{" "}
              {selectedVariant === "medium"
                ? ""
                : selectedVariant.charAt(0).toUpperCase() +
                  selectedVariant.slice(1)}{" "}
              {selectedHue.charAt(0).toUpperCase() + selectedHue.slice(1)}
            </SheetTitle>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Color Variants Section */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">
                Color Variants
              </h3>

              {/* Mobile: 6x6 grid */}
              <div className="grid grid-cols-6 gap-2 md:hidden">
                {[0, 1].map((row) => (
                  <React.Fragment key={row}>
                    {Object.keys(backgroundColors)
                      .slice(row * 6, (row + 1) * 6)
                      .map((hue) => (
                        <div key={hue} className="space-y-2">
                          {(["dark", "medium", "light"] as const).map(
                            (variant) => (
                              <div
                                key={`${hue}-${variant}`}
                                className="flex items-center justify-center"
                              >
                                {renderIcon(hue as ColorHue, variant)}
                              </div>
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
                    {(["dark", "medium", "light"] as const).map((variant) => (
                      <div
                        key={`${hue}-${variant}`}
                        className="flex items-center justify-center"
                      >
                        {renderIcon(hue as ColorHue, variant)}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Preview Section */}
            <div className="flex flex-col md:justify-center">
              <h3 className="mb-2 text-sm font-medium text-muted-foreground">
                Color Variants
              </h3>
              {/* Desktop layout - side by side */}
              <div className="hidden gap-6 md:flex">
                {/* Hero Preview */}
                <div
                  className="flex items-center justify-center w-40 h-40 p-4 rounded-lg shrink-0"
                  style={{
                    backgroundColor:
                      backgroundColors[selectedHue][selectedVariant],
                  }}
                >
                  {renderSvgPreview(selectedIcon, 121, false)}
                </div>

                {/* Desktop: Buttons in column */}
                <div className="flex flex-col gap-2">
                  <Button
                    onClick={() => handleDownload("svg")}
                    variant="default"
                    className="w-32"
                  >
                    Download SVG
                  </Button>
                  <Button
                    onClick={() => handleDownload("png")}
                    variant="default"
                    className="w-32"
                  >
                    Download PNG
                  </Button>
                </div>
              </div>

              {/* Mobile layout - stacked */}
              <div className="flex flex-col items-center gap-4 md:hidden">
                {/* Hero Preview */}
                <div
                  className="flex items-center justify-center w-32 h-32 p-4 rounded-lg shrink-0"
                  style={{
                    backgroundColor:
                      backgroundColors[selectedHue][selectedVariant],
                  }}
                >
                  {renderSvgPreview(selectedIcon, 88, false)}
                </div>

                {/* Mobile: Buttons in row */}
                <div className="flex flex-row gap-2">
                  <Button
                    onClick={() => handleDownload("svg")}
                    variant="default"
                    size="sm"
                    className="w-32"
                  >
                    Download SVG
                  </Button>
                  <Button
                    onClick={() => handleDownload("png")}
                    variant="secondary"
                    size="sm"
                    className="w-32"
                  >
                    Download PNG
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default IconPreview;
