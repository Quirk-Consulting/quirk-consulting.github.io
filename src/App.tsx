// src/App.tsx
import { ThemeProvider } from "./components/theme-provider";
import { Layout } from "./components/layout";
import IconPreview from "./components/IconPreview";
import { ProjectIcons } from "./components/project-icons";
import { InstallationGuide } from "./components/InstallationGuide";
import { License } from "./components/license";
import { About } from "./components/about";
import { useState, useMemo } from "react";
import { iconTypes, type IconType } from "./lib/iconTypes";

export type CategoryResults = {
  category: string;
  icons: IconType[];
  totalCount: number;
};

export default function App() {
  const [activeTab, setActiveTab] = useState("jira-icons");
  const [searchQuery, setSearchQuery] = useState("");

  // Calculate filtered results and category counts
  const { categorizedResults, categoryCounts } = useMemo(() => {
    const searchLower = searchQuery.toLowerCase();

    // Filter icons based on search
    const filteredIcons = searchQuery
      ? iconTypes.filter(
          (icon) =>
            icon.name.toLowerCase().includes(searchLower) ||
            icon.searchTerms.some((term) =>
              term.toLowerCase().includes(searchLower)
            )
        )
      : iconTypes;

    // Group by category and calculate counts
    const groupedByCategory = new Map<string, IconType[]>();
    const totalCounts: Record<string, number> = {};

    // First calculate total counts (unfiltered)
    iconTypes.forEach((icon) => {
      icon.categories.forEach((category) => {
        totalCounts[category] = (totalCounts[category] || 0) + 1;
      });
    });

    // Then group filtered results
    filteredIcons.forEach((icon) => {
      icon.categories.forEach((category) => {
        if (!groupedByCategory.has(category)) {
          groupedByCategory.set(category, []);
        }
        groupedByCategory.get(category)?.push(icon);
      });
    });

    // Convert to sorted array with both filtered and total counts
    const results = Array.from(groupedByCategory.entries())
      .map(([category, icons]) => ({
        category,
        icons: icons.sort((a, b) => a.name.localeCompare(b.name)),
        totalCount: totalCounts[category] || 0,
      }))
      .sort((a, b) => a.category.localeCompare(b.category));

    // Create counts object including zero counts for empty categories
    const counts: Record<string, number> = {};
    Object.keys(totalCounts).forEach((category) => {
      counts[category] = groupedByCategory.get(category)?.length || 0;
    });

    return {
      categorizedResults: results,
      categoryCounts: counts,
    };
  }, [searchQuery]);

  const renderContent = () => {
    switch (activeTab) {
      case "jira-icons":
        return (
          <IconPreview
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            categorizedResults={categorizedResults}
          />
        );
      case "project-icons":
        return <ProjectIcons />;
      case "installation":
        return <InstallationGuide />;
      case "license":
        return <License />;
      case "about":
        return <About />;
      default:
        return (
          <IconPreview
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            categorizedResults={categorizedResults}
          />
        );
    }
  };

  return (
    <ThemeProvider defaultTheme="system" storageKey="jira-icons-theme">
      <Layout
        activeTab={activeTab}
        onTabChange={setActiveTab}
        categoryCounts={categoryCounts}
        isSearching={searchQuery.length > 0}
      >
        {renderContent()}
      </Layout>
    </ThemeProvider>
  );
}
