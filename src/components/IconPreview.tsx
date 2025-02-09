// src/components/IconPreview.tsx
import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Don't close if clicked on a filtered icon or its children
      if ((event.target as Element).closest(".filtered-icon-trigger")) {
        return;
      }

      // Don't close if clicked inside the sheet
      if ((event.target as Element).closest('[role="dialog"]')) {
        return;
      }

      // Only close if we clicked outside both the icons and the sheet
      setIsSheetOpen(false);
    }

    if (isSheetOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("mouseup", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [isSheetOpen]);

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
    if (!isSheetOpen) {
      setIsSheetOpen(true);
    }
  };

  return (
    <div className="flex flex-col h-full p-8">
      <h1 className="mb-6 text-2xl font-bold">Jira Icons</h1>

      {/* Main content area with flex-grow */}
      <div className="flex flex-col flex-grow">
        {/* Search bar stays at top */}
        <div className="relative mb-4">
          <Search
            className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
            size={20}
          />
          <Input
            type="text"
            placeholder="Search icons..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Scrollable grid container */}
        <div className="flex-grow overflow-y-auto">
          <div className="space-y-8">
            {categorizedFilteredIcons.map(({ category, icons }) => (
              <div key={category} className="space-y-4">
                <h2 className="text-lg font-semibold text-muted-foreground">
                  {category}
                </h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
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
                        <div className="text-sm font-medium">{icon.name}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sheet with Color Variants and Selected Icon */}
      <Sheet open={isSheetOpen} modal={false}>
        <SheetContent
          side="bottom"
          className={`h-[400px]`}
          // Prevent click events inside sheet from bubbling up
          onClick={(e) => e.stopPropagation()}
        >
          {" "}
          {/* Reduced height */}
          <SheetHeader>
            <SheetTitle></SheetTitle>
          </SheetHeader>
          <div className="grid grid-cols-2 gap-8 p-6">
            {/* Color Variants Grid - Left Side */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Color Variants</h3>
              <div className="grid grid-cols-12 gap-2">
                {" "}
                {/* Changed to grid-cols-8 */}
                {Object.keys(backgroundColors).map((hue) => (
                  // Each hue column
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

            {/* Download Section - Right Side */}
            <div className="flex items-start">
              <div>
                <h3 className="mb-4 text-lg font-semibold">
                  {selectedIcon.name} -{" "}
                  {selectedVariant == "medium" ? "" : selectedVariant}{" "}
                  {selectedHue}
                </h3>
                {/* Selected Preview */}
                <div
                  className="inline-block p-2 rounded-lg"
                  style={{
                    backgroundColor:
                      backgroundColors[selectedHue][selectedVariant],
                  }}
                >
                  {renderSvgPreview(selectedIcon, 88, false)}{" "}
                </div>

                {/* Download Controls */}
                <div>
                  <p className="mb-4 text-sm text-muted-foreground"></p>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleDownload("svg")}
                      variant="default"
                    >
                      Download SVG
                    </Button>
                    <Button
                      onClick={() => handleDownload("png")}
                      variant="secondary"
                    >
                      Download PNG
                    </Button>
                  </div>
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
