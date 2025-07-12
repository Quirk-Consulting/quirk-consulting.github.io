// src/App.tsx
import { ThemeProvider } from "./components/theme-provider";
import { useState, useEffect } from "react";
import { Layout } from "./components/layout";
import IconPreview from "./components/IconPreview";
import { iconTypes } from "./lib/iconTypes";
import InstallationGuide from "./components/InstallationGuide";
import License from "./components/license";
import About from "./components/about";
import ProjectIcons from "./components/project-icons";
import UserAvatars from "./components/user-avatars";

export type CategoryResults = {
  category: string;
  icons: typeof iconTypes;
};

function App() {
  const [activeTab, setActiveTab] = useState("jira-icons");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categorizedResults, setCategorizedResults] = useState<
    CategoryResults[]
  >([]);
  const [categoryCounts, setCategoryCounts] = useState<Record<string, number>>(
    {}
  );

  // Process icon categories and search results
  useEffect(() => {
    const searchLower = searchQuery.toLowerCase();

    // Filter icons based on search query
    const filteredIcons = iconTypes.filter(
      (icon) =>
        icon.name.toLowerCase().includes(searchLower) ||
        icon.searchTerms.some((term) =>
          term.toLowerCase().includes(searchLower)
        )
    );

    // Group icons by category
    const groupedByCategory = new Map<string, typeof iconTypes>();

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

    // Create a count record for all categories
    const counts: Record<string, number> = {};
    categorized.forEach(({ category, icons }) => {
      counts[category] = icons.length;
    });

    setCategorizedResults(categorized);
    setCategoryCounts(counts);
  }, [searchQuery]);

  // Handle category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);

    // Optionally clear search query when selecting a category
    if (searchQuery) {
      setSearchQuery("");
    }
  };

  return (
    <ThemeProvider defaultTheme="system" storageKey="jira-icons-theme">
      <Layout
        activeTab={activeTab}
        onTabChange={setActiveTab}
        categoryCounts={categoryCounts}
        isSearching={searchQuery.length > 0}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      >
        {activeTab === "jira-icons" && (
          <IconPreview
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            categorizedResults={categorizedResults}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
        {activeTab === "project-icons" && <ProjectIcons />}
        {activeTab === "user-avatars" && <UserAvatars />}
        {activeTab === "installation" && (
          <div className="p-8">
            <InstallationGuide />
          </div>
        )}
        {activeTab === "license" && (
          <div className="p-8">
            <License />
          </div>
        )}
        {activeTab === "about" && (
          <div className="p-8">
            <About />
          </div>
        )}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
