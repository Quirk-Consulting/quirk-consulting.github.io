// src/components/IconPreview.tsx with SEO enhancements
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
  generateSVGString,
  generatePNG,
  loadSvgContent,
  extractPathsFromSvg,
} from "../utils/iconGenerator";
import { iconTypes, type IconType } from "../lib/iconTypes";
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
}

const getRandomElement = <T,>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

// Enhanced SEO-optimised description text for categories
const categoryDescriptions: {
  [key: string]: string; // Index signature to allow string indexing
} = {
  Accessibility:
    "Comprehensive accessible design icons for Jira work management that enhance inclusivity and improve compliance with WCAG standards. Perfect for digital accessibility initiatives and inclusive experience design.",

  "Accounts & Access":
    "Secure user management and authentication icons for Jira workflows. Visualise identity verification, permission controls, and role-based access in enterprise work management systems.",

  Animals:
    "Distinctive animal-themed icons to symbolise team personalities, project characteristics, or product lines in Jira. Create memorable visual taxonomies for complex work management ecosystems.",

  Arrows:
    "Dynamic directional indicators and process flow icons optimised for Jira boards and roadmaps. Streamline user navigation with clear visual cues for workflow direction and prioritisation.",

  Brands:
    "Integration-ready brand and corporate identity icons for Jira marketplace apps and cross-platform workflows. Enhance visibility of third-party tools within your work management ecosystem.",

  Buildings:
    "Architectural and facility management icons for Jira property projects. Ideal for workplace planning, office allocation, and infrastructure initiatives within enterprise environments.",

  Charts:
    "Data-rich visualisation icons for Jira dashboards that transform complex metrics into comprehensible visual insights. Perfect for agile metrics, performance tracking, and business intelligence.",

  "Coding & Development":
    "Specialised software engineering and development icons that represent programming languages, frameworks, and DevOps processes in Jira Software boards and backlog management.",

  Communication:
    "Collaboration-focused messaging and interaction icons for enhancing team coordination in Jira. Streamline communication channels and feedback loops in distributed work environments.",

  Connectivity:
    "Network infrastructure and system integration icons for Jira IT service management. Visualise complex technical dependencies and connection statuses across enterprise systems.",

  Cursors:
    "Interactive pointer and selection icons for Jira user interface elements. Improve user experience with clear visual indicators for action areas and interactive components.",

  Design:
    "Creative toolset and design thinking icons for Jira that support UX/UI workflows and design systems. Perfect for creative teams managing design sprints and approval processes.",

  Devices:
    "Hardware and technology asset icons for Jira IT inventory management. Track device allocation, maintenance schedules, and compatibility across organisational resources.",

  Emoji:
    "Expressive reaction icons for Jira that enrich team feedback and status updates. Add emotional context to work items and enhance communication in global, multilingual teams.",

  "Files & Folders":
    "Document organisation and information architecture icons for Jira knowledge management. Structure digital assets and establish clear document hierarchies within projects.",

  Finance:
    "Comprehensive financial and accounting icons for tracking budgets, expenses, and ROI metrics in Jira portfolios. Essential for cost management and financial reporting workflows.",

  "Food & Drink":
    "Culinary and beverage icons for Jira event planning, catering management, and hospitality projects. Perfect for visualising product categories in food service industries.",

  Gaming:
    "Interactive entertainment and gamification icons for Jira boards that increase team engagement. Ideal for representing achievement systems and competitive motivational frameworks.",

  Holidays:
    "Seasonal celebration and cultural event icons for Jira calendar management. Enhance project planning with visual markers for important dates and regional observances.",

  Home: "Residential and domestic environment icons for Jira projects in property management, smart home solutions, and household service coordination.",

  Layout:
    "Interface structure and visual organisation icons for Jira that support design system governance. Essential for maintaining consistent layouts across digital products.",

  Math: "Mathematical operation and statistical analysis icons for data-driven Jira workflows. Represent complex calculations and analytical processes in quantitative project management.",

  Medical:
    "Healthcare compliance and medical procedure icons for Jira health management systems. Support clinical workflows and patient care coordination in healthcare organisations.",

  "Nature & Sustainability":
    "Environmental initiative and conservation project icons for Jira sustainability tracking. Visualise carbon footprint reduction, renewable energy adoption, and ecological impact metrics.",

  Navigation:
    "Wayfinding and location-based service icons for Jira geographical projects. Enhance spatial orientation and route planning in logistics and field service management applications.",

  Notifications:
    "Alert system and status update icons for Jira communication workflows. Improve information visibility with distinctive visual cues for different priority levels and notification types.",

  Numbers:
    "Numerical ranking and quantitative indicator icons for Jira prioritisation frameworks. Create clear visual hierarchies for task importance and sequential processing requirements.",

  Photography:
    "Visual asset management and image editing icons for Jira creative workflows. Streamline digital content production and media library organisation for marketing teams.",

  Science:
    "Scientific research and laboratory icons for Jira data analysis workflows. Represent experimental procedures, research methodologies, and scientific discoveries.",
  Security:
    "Data protection and cybersecurity icons for Jira compliance tracking. Visualise security protocols, threat levels, and protective measures in risk management frameworks.",

  Shapes:
    "Geometric form and abstract concept icons for Jira workflow categorisation. Create intuitive visual taxonomies based on standardised shapes for quick pattern recognition.",

  Shopping:
    "E-commerce and retail management icons for Jira sales operations. Track product lifecycles, inventory levels, and purchasing workflows in commercial environments.",

  "Social & Messaging":
    "Digital communication platform and social media icons for Jira marketing campaigns. Coordinate multi-channel engagement strategies and content distribution workflows.",

  Sports:
    "Athletic activity and competitive event icons for Jira team management. Perfect for representing fitness challenges, sporting initiatives, and recreational programs.",

  Text: "Typography and content formatting icons for Jira editorial workflows. Support content creation teams with visual representations of different text elements and styles.",

  "Time & Calendar":
    "Temporal management and scheduling icons for Jira project timelines. Enhance deadline visibility and time allocation in complex project planning scenarios.",

  Tools:
    "Equipment and utility function icons for Jira maintenance workflows. Visualise technical resources and operational tools used in physical infrastructure projects.",

  Transportation:
    "Vehicle and logistics icons for Jira mobility management systems. Optimise fleet operations, delivery scheduling, and transport coordination in supply chain workflows.",

  Travel:
    "Tourism and business travel icons for Jira itinerary planning. Coordinate journey logistics, accommodation bookings, and travel expense management across global operations.",

  Weather:
    "Climate condition and environmental factor icons for Jira field operations. Account for seasonal variations and meteorological impacts in outdoor project scheduling.",
};

const IconPreview = ({
  searchQuery,
  onSearchChange,
  categorizedResults,
  selectedCategory,
  setSelectedCategory,
}: IconPreviewProps) => {
  const [selectedHue, setSelectedHue] = useState<ColorHue>("blue");
  const [selectedVariant, setSelectedVariant] = useState<Variant>("medium");
  const [selectedIcon, setSelectedIcon] = useState<IconType>(iconTypes[0]);
  const [iconPaths, setIconPaths] = useState<Record<string, IconPathState>>({});
  const [intersectionObserver, setIntersectionObserver] =
    useState<IntersectionObserver | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // SEO: Generate page title and description dynamically
  const getPageTitle = () => {
    if (selectedIcon && isSheetOpen) {
      return `${selectedIcon.name} Icon - Jira Work Type Icons | Quirk Consulting`;
    } else if (selectedCategory) {
      return `${selectedCategory} Icons - Jira Work Management Icons | Quirk Consulting`;
    }
    return "Jira Work Type Icons Library | Modern Work Management Tools by Quirk Consulting";
  };

  const getPageDescription = () => {
    if (selectedIcon && isSheetOpen) {
      return `Download the ${selectedIcon.name} icon for your Jira projects. Available in SVG and PNG formats with multiple colour variants. Part of the Quirk Consulting icon library.`;
    } else if (selectedCategory && categoryDescriptions[selectedCategory]) {
      return categoryDescriptions[selectedCategory];
    }
    return "Free, high-quality Jira work type icons for modern work management. Customisable SVG and PNG icons for your Jira projects and workflows. Created by Quirk Consulting.";
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
      a.download = `${selectedIcon.name.toLowerCase()}-${selectedHue}-${selectedVariant}.svg`;
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

  const totalFilteredIcons = categorizedFilteredIcons.reduce(
    (total, { icons }) => total + icons.length,
    0
  );

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
        <meta property="og:url" content="https://www.quirk.com.au/jira-icons" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={getPageTitle()} />
        <meta name="twitter:description" content={getPageDescription()} />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href={`https://www.quirk.com.au/jira-icons${
            selectedCategory
              ? "/" + selectedCategory.toLowerCase().replace(/[^a-z0-9]/g, "-")
              : ""
          }`}
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(generateStructuredData())}
        </script>
      </Helmet>

      {/* SEO: More semantic heading structure */}
      <div className="mb-6">
        <h1 className="text-xl font-bold md:text-2xl">Jira Work Type Icons</h1>
        {/* SEO: Add introductory paragraph with keywords */}
        <p className="mt-2 text-muted-foreground">
          Browse and download our comprehensive collection of Jira work type
          icons for modern work management. Customisable SVG and PNG icons to
          enhance your Jira projects and workflows.
        </p>
      </div>

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
                placeholder={`Search ${totalFilteredIcons} Jira work type icons...`}
                className="pl-10"
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
        </div>

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

                {/* Desktop: Buttons in column */}
                <div className="flex flex-col gap-2">
                  <Button
                    onClick={() => handleDownload("png")}
                    variant="default"
                    className="w-32"
                  >
                    Download PNG
                  </Button>
                  <Button
                    onClick={() => handleDownload("svg")}
                    variant="default"
                    className="w-32"
                  >
                    Download SVG
                  </Button>
                </div>
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

                {/* Mobile: Buttons in row */}
                <div className="flex flex-row gap-2">
                  <Button
                    onClick={() => handleDownload("png")}
                    variant="secondary"
                    size="sm"
                    className="w-32"
                  >
                    Download PNG
                  </Button>
                  <Button
                    onClick={() => handleDownload("svg")}
                    variant="default"
                    size="sm"
                    className="w-32"
                  >
                    Download SVG
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
