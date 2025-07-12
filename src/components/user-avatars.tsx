// src/components/user-avatars.tsx
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
  generateUserSVGString,
  generateUserPNG,
  loadUserSvgContent,
} from "../utils/userIconGenerator";
import { userIconTypes, type UserIconType } from "../lib/userTypes";

interface UserIconState {
  svgContent: string | null;
  loading: boolean;
}

export type UserCategoryResults = {
  category: string;
  icons: typeof userIconTypes;
};

const getRandomElement = <T,>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

// Enhanced SEO-optimised description text for user avatar categories
const userCategoryDescriptions: {
  [key: string]: string;
} = {
  "Adventurer Avatars":
    "Diverse collection of adventurer-style user avatars perfect for Jira user profiles and team member identification. These professional avatar icons bring personality and visual identity to modern work management platforms.",
  "Adventurer Neutral Avatars":
    "Gender-neutral collection of adventurer-style user avatars designed for inclusive team environments. These professional avatar options provide diverse representation while maintaining consistency across Jira user profiles.",
  "Avataaars Avatars":
    "Modern flat-design user avatars featuring clean, contemporary styling perfect for professional team environments. These Sketch App-inspired avatar icons provide friendly, approachable visual identity options for Jira user profiles.",
  "Avataaars Neutral Avatars":
    "Gender-neutral flat-design user avatars combining modern aesthetics with inclusive representation. These contemporary avatar icons offer professional styling while supporting diverse team environments and Jira user identification.",
  "Big Ears Avatars":
    "Playful collection of character-style user avatars featuring distinctive large ears and expressive facial features. These engaging avatar icons are perfect for creative teams and add personality to Jira user profiles while maintaining professional appeal.",
  "Big Ears Neutral Avatars":
    "Gender-neutral collection of character-style user avatars featuring distinctive large ears and expressive facial features. These inclusive avatar icons provide diverse representation while adding personality to Jira user profiles and supporting modern team environments.",
  "Big Smile Avatars":
    "Cheerful collection of character-style user avatars featuring prominent smiles and positive expressions. These uplifting avatar icons bring joy and warmth to Jira user profiles, perfect for creating a friendly and approachable team atmosphere.",
  "Bottts Avatars":
    "Unique collection of robot-style user avatars featuring modern, tech-inspired designs. These distinctive avatar icons are perfect for technology teams and bring a futuristic, innovative feel to Jira user profiles while maintaining professional appeal.",
  "Bottts Neutral Avatars":
    "Gender-neutral collection of robot-style user avatars featuring modern, tech-inspired designs. These inclusive avatar icons provide diverse representation for technology teams and bring a futuristic, innovative feel to modern team environments.",
  "Croodles Neutral Avatars":
    "Gender-neutral collection of doodle-style user avatars featuring hand-drawn, sketch-like designs. These inclusive artistic avatar icons provide diverse representation while bringing a personal, human touch to Jira user profiles and supporting modern team environments.",
};

export function UserAvatars() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedHue, setSelectedHue] = useState<ColorHue>("blue");
  const [selectedVariant, setSelectedVariant] = useState<Variant>("medium");
  const [selectedIcon, setSelectedIcon] = useState<UserIconType>(userIconTypes[0]);
  const [iconStates, setIconStates] = useState<Record<string, UserIconState>>({});
  const [intersectionObserver, setIntersectionObserver] =
    useState<IntersectionObserver | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [categorizedResults, setCategorizedResults] = useState<UserCategoryResults[]>([]);

  // Natural numeric sort function for avatar names
  const naturalSort = (a: UserIconType, b: UserIconType) => {
    // Extract the number from the avatar name (e.g., "Adventurer Avatar 10" -> 10)
    const getNumber = (name: string) => {
      const match = name.match(/(\d+)$/);
      return match ? parseInt(match[1], 10) : 0;
    };
    
    // If both icons are from the same base category, sort by number
    const aBase = a.name.replace(/ \d+$/, '');
    const bBase = b.name.replace(/ \d+$/, '');
    
    if (aBase === bBase) {
      return getNumber(a.name) - getNumber(b.name);
    }
    
    // Otherwise, sort alphabetically
    return a.name.localeCompare(b.name);
  };

  // Process icon categories and search results
  useEffect(() => {
    const searchLower = searchQuery.toLowerCase();

    // Filter icons based on search query
    const filteredIcons = userIconTypes.filter(
      (icon) =>
        icon.name.toLowerCase().includes(searchLower) ||
        icon.searchTerms.some((term) =>
          term.toLowerCase().includes(searchLower)
        )
    );

    // Group icons by category
    const groupedByCategory = new Map<string, typeof userIconTypes>();

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
        icons: icons.sort(naturalSort),
      }))
      .sort((a, b) => a.category.localeCompare(b.category));

    setCategorizedResults(categorized);
  }, [searchQuery]);

  const getPageTitle = () => {
    if (selectedIcon && isSheetOpen) {
      return `${selectedIcon.name} User Avatar - Jira User Avatars | Quirk Consulting`;
    } else if (selectedCategory) {
      return `${selectedCategory} User Avatars - Jira User Profile Icons | Quirk Consulting`;
    }
    return "Jira User Avatars Library | Modern User Profile Icons by Quirk Consulting";
  };

  const getPageDescription = () => {
    if (selectedIcon && isSheetOpen) {
      return `Download the ${selectedIcon.name} user avatar for your Jira user profiles. Available in SVG and PNG formats optimised for Jira user management. Part of the Quirk Consulting user avatar library.`;
    } else if (selectedCategory && userCategoryDescriptions[selectedCategory]) {
      return userCategoryDescriptions[selectedCategory];
    }
    return "Free, high-quality Jira user avatars for modern team management. Customisable SVG and PNG user profile icons optimised for Jira user identification and team visualisation. Created by Quirk Consulting.";
  };

  const handleRandomSelection = () => {
    const randomIcon = getRandomElement(userIconTypes);
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

  // Load function to handle user avatars
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

    const icon = userIconTypes.find((i) => i.name === iconName);
    if (!icon) return;

    try {
      const svgContent = await loadUserSvgContent(icon.path);

      setIconStates((prev) => ({
        ...prev,
        [iconName]: { svgContent, loading: false },
      }));
    } catch (error) {
      console.error(`Failed to load user avatar: ${iconName}`, error);
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
    icon: UserIconType,
    size: number = 36,
    useThemeColor: boolean = true
  ) => {
    const iconState = iconStates[icon.name];

    // If we have no observer yet, return placeholder
    if (!intersectionObserver) {
      return (
        <div className="rounded-full w-9 h-9 bg-muted animate-pulse" />
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
          className="rounded-full w-9 h-9 bg-muted animate-pulse"
          aria-label={`Loading ${icon.name} user avatar`}
        />
      );
    }

    // If we have the content, render the SVG
    if (iconState.svgContent) {
      const fgColor = useThemeColor ? "currentColor" : foregroundMappings[selectedHue][selectedVariant];
      const bgColor = useThemeColor ? "none" : backgroundColors[selectedHue][selectedVariant]; 
      
      const svgString = generateUserSVGString(
        iconState.svgContent,
        fgColor,
        bgColor,
        size,
        2
      );

      return (
        <div
          dangerouslySetInnerHTML={{ __html: svgString }}
          aria-label={`${icon.name} user avatar for Jira user profiles`}
          className="rounded-full overflow-hidden"
        />
      );
    }

    // Fallback for failed loads
    return <div className="rounded-full w-9 h-9 bg-destructive/20" />;
  };

  const renderIcon = (hue: ColorHue, variant: Variant) => {
    const bgColor = backgroundColors[hue][variant];
    const fgColor = foregroundMappings[hue][variant];
    const iconState = iconStates[selectedIcon.name];
    const svgContent = iconState?.svgContent || "";

    // Use 32x32 size with 2px padding for user avatars
    const svgString = generateUserSVGString(svgContent, fgColor, bgColor, 32, 2);

    return (
      <div
        className="p-2 transition-shadow rounded-lg cursor-pointer hover:shadow-lg"
        style={{ 
          backgroundColor: bgColor === "none" ? "transparent" : bgColor,
          border: bgColor === "none" ? "1px solid var(--border)" : "none"
        }}
        onClick={() => {
          setSelectedHue(hue);
          setSelectedVariant(hue === "blank" ? "medium" : variant);
        }}
        dangerouslySetInnerHTML={{ __html: svgString }}
        aria-label={`${selectedIcon.name} user avatar in ${hue} ${hue === "blank" ? "blank" : variant} colour variant`}
      />
    );
  };

  const handleDownload = async (format: "svg" | "png") => {
    const bgColor = backgroundColors[selectedHue][selectedVariant];
    const fgColor = foregroundMappings[selectedHue][selectedVariant];
    const iconState = iconStates[selectedIcon.name];
    const svgContent = iconState?.svgContent || "";

    // Use 256x256 size for user avatars with proportional padding
    const iconSize = 256;
    const padding = Math.round(iconSize * 0.0625); // 6.25% padding (16px for 256px)

    if (format === "svg") {
      const svgString = generateUserSVGString(
        svgContent,
        fgColor,
        bgColor,
        iconSize,
        padding,
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
      const svgString = generateUserSVGString(
        svgContent,
        fgColor,
        bgColor,
        iconSize,
        padding,
        true
      );
      const pngBlob = await generateUserPNG(svgString, iconSize);
      const url = URL.createObjectURL(pngBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${selectedIcon.name.toLowerCase().replace(/\s+/g, '-')}-${selectedHue}-${selectedVariant}.png`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const handleIconSelect = (icon: UserIconType) => {
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
      <Helmet>
        <title>{getPageTitle()}</title>
        <meta name="description" content={getPageDescription()} />
        <meta
          name="keywords"
          content={`jira user avatars, user profile icons, team member avatars, ${selectedIcon?.searchTerms.join(
            ", "
          )}`}
        />
        <meta property="og:title" content={getPageTitle()} />
        <meta property="og:description" content={getPageDescription()} />
        <link
          rel="canonical"
          href="https://www.quirk.com.au/jira-icons/user-avatars"
        />
      </Helmet>

      <div className="mb-6">
        <h1 className="text-xl font-bold md:text-2xl">Jira User Avatars</h1>
        <p className="mt-2 text-muted-foreground">
          Browse and download our comprehensive collection of Jira user avatars for modern team management. 
          Customisable SVG and PNG user profile icons optimised for Jira user identification and team visualisation.
        </p>
      </div>

      <div className="flex flex-col flex-grow">
        <div className="sticky top-0 z-10 bg-background">
          <div className="flex gap-2">
            <div className="relative flex-grow">
              <Search
                className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
                size={20}
              />
              <Input
                type="text"
                placeholder={`Search ${totalFilteredIcons} Jira user avatars...`}
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search for Jira user avatars"
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              className="filtered-icon-trigger"
              onClick={handleRandomSelection}
              title="Select random user avatar and colour"
              aria-label="Select random user avatar and colour"
            >
              <Shuffle className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {!searchQuery && (
          <div className="p-4 my-4 rounded-lg bg-accent">
            <h2 className="mb-2 text-lg font-semibold">
              About Jira User Avatars
            </h2>
            <p className="mb-2">
              These user avatars help teams personalise their Jira profiles and create a more engaging, 
              human-centred work environment while maintaining professional consistency.
            </p>
            <details className="mb-2">
              <summary className="font-medium cursor-pointer">
                How do I use user avatars in Jira?
              </summary>
              <p className="pl-4 mt-2">
                Download the avatars in PNG format (256x256 pixels) and upload them as profile pictures 
                in your Jira user settings. You may need to resize them to your preferred display size.
              </p>
            </details>
            <details>
              <summary className="font-medium cursor-pointer">
                What size are the downloaded user avatars?
              </summary>
              <p className="pl-4 mt-2">
                Our user avatars are provided in high resolution 256x256 pixels, giving you flexibility 
                to use them at various sizes while maintaining crisp quality and professional appearance.
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
                <div>
                  <h2 className="text-base font-semibold md:text-lg text-muted-foreground">
                    {category} ({icons.length})
                  </h2>
                  {userCategoryDescriptions[category] && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {userCategoryDescriptions[category]}
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
              Download this {selectedIcon.name} user avatar for your Jira user profiles in
              SVG or PNG format. Available in {selectedVariant} {selectedHue}{" "}
              colour variant.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">
                Colour Variants
              </h3>

              <div className="grid grid-cols-6 gap-2 md:hidden">
                {[0, 1].map((row) => (
                  <React.Fragment key={row}>
                    {Object.keys(backgroundColors)
                      .slice(row * 6, (row + 1) * 6)
                      .map((hue) => (
                        <div key={hue} className="space-y-2">
                          {hue === "blank" ? (
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

              <div className="hidden grid-cols-12 gap-2 md:grid">
                {Object.keys(backgroundColors).map((hue) => (
                  <div key={hue} className="space-y-2">
                    {hue === "blank" ? (
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

            <div className="flex flex-col md:justify-center">
              <h3 className="mb-2 text-sm font-medium text-muted-foreground">
                Preview & Download
              </h3>
              
              <div className="hidden gap-6 md:flex">
                <div
                  className="flex items-center justify-center w-40 h-40 p-2 rounded-full shrink-0"
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

              <div className="flex flex-col items-center gap-4 md:hidden">
                <div
                  className="flex items-center justify-center w-24 h-24 p-2 rounded-full shrink-0"
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

export default UserAvatars;
