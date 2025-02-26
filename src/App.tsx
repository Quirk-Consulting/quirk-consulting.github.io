// src/App.tsx
import { ThemeProvider } from "./components/theme-provider";
import { useState, useEffect } from "react";
import { Layout } from "./components/layout";
import IconPreview from "./components/IconPreview";
import { iconTypes } from "./lib/iconTypes";

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
        {activeTab === "project-icons" && (
          <div className="p-8">
            <h1 className="text-2xl font-bold">Project Icons</h1>
            <p className="mt-4 text-muted-foreground">Coming soon...</p>
          </div>
        )}
        {activeTab === "installation" && (
          <div className="p-8">
            <h1 className="text-2xl font-bold">Installation Guide</h1>
            <p className="mt-4 text-muted-foreground">
              Documentation on how to use these icons in your Jira instance.
            </p>
            {/* Additional installation content here */}
          </div>
        )}
        {activeTab === "license" && (
          <div className="p-8">
            <h1 className="text-2xl font-bold">License</h1>
            <p className="mt-4 text-muted-foreground">
              These icons are available under the MIT License.
            </p>
            {/* Additional license content here */}
          </div>
        )}
        {activeTab === "about" && (
          <div className="p-8">
            <h1 className="text-2xl font-bold">About Quirk Consulting</h1>
            <p className="mt-4 text-muted-foreground">
              Quirk is a modern work management and enterprise tooling
              specialist helping organisations turn chaos into clarity.
            </p>
            <p className="mt-2 text-muted-foreground">
              Our mantra is "if you can see it, you can solve it."
            </p>
            <div className="mt-6">
              <a
                href="https://www.quirk.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Visit our website
              </a>
            </div>
            {/* Additional about content here */}
          </div>
        )}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
