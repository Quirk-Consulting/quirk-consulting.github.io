// src/App.tsx
import { ThemeProvider } from "./components/theme-provider";
import { Helmet } from "react-helmet";
import { SITE } from "./lib/routes";
import { useState, useEffect } from "react";
import { Layout } from "./components/layout";
import IconPreview from "./components/IconPreview";
import { iconTypes, categoryNames } from "./lib/iconTypes";
import { parsePath, navigate, TAB_PATHS, categoryPath, slugify } from "./lib/routes";
import InstallationGuide from "./components/InstallationGuide";
import License from "./components/license";
import About from "./components/about";
import ProjectIcons from "./components/project-icons";
import UserAvatars from "./components/user-avatars";

export type CategoryResults = {
  category: string;
  icons: typeof iconTypes;
};

// Titles for the tabs that have no Helmet of their own (kept in step with scripts/prerender.mjs)
export const STATIC_PAGES: Record<string, { title: string; description: string }> = {
  installation: {
    title: "How to Add Custom Icons in Jira: Work Types, Spaces, Avatars | Quirk",
    description: "Step-by-step guide to uploading custom work type icons, space icons and user avatars in Jira Cloud, with tips on colour, size and consistency.",
  },
  license: {
    title: "Icon Library Licence: Free for Commercial Use (MIT) | Quirk",
    description: "The Quirk Jira icon library is MIT licensed and free for personal and commercial use. See the licence and the open source sets it builds on.",
  },
  about: {
    title: "About Quirk: Atlassian and monday.com Partner, Australia | Quirk",
    description: "Quirk builds this free Jira icon library. We are an Australian Atlassian partner helping teams set up Jira, Confluence and Jira Service Management.",
  },
};

function App() {
  const initialRoute = parsePath(window.location.pathname);
  const categoryFromSlug = (slug?: string) =>
    slug ? categoryNames.find((c) => slugify(c) === slug) ?? null : null;

  const [activeTab, setActiveTab] = useState(initialRoute.tab);
  // Icon slug from the address bar (/icon/<slug>/), handed to the work type view
  const [routeIcon, setRouteIcon] = useState<string | null>(initialRoute.icon ?? null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    categoryFromSlug(initialRoute.category)
  );

  // Back and forward buttons
  useEffect(() => {
    const onPop = () => {
      const route = parsePath(window.location.pathname);
      setActiveTab(route.tab);
      setRouteIcon(route.icon ?? null);
      setSelectedCategory(categoryFromSlug(route.category));
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setRouteIcon(null);
    navigate(TAB_PATHS[tab] ?? "/");
    window.scrollTo(0, 0);
  };
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
    navigate(categoryPath(category));

    // Optionally clear search query when selecting a category
    if (searchQuery) {
      setSearchQuery("");
    }
  };

  return (
    <ThemeProvider defaultTheme="system" storageKey="jira-icons-theme">
      <Layout
        activeTab={activeTab}
        onTabChange={handleTabChange}
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
            routeIcon={routeIcon}
            onRouteIconHandled={() => setRouteIcon(null)}
          />
        )}
        {activeTab === "project-icons" && <ProjectIcons />}
        {activeTab === "user-avatars" && <UserAvatars />}
        {STATIC_PAGES[activeTab] && (
          <Helmet>
            <title>{STATIC_PAGES[activeTab].title}</title>
            <meta name="description" content={STATIC_PAGES[activeTab].description} />
            <link rel="canonical" href={SITE + TAB_PATHS[activeTab]} />
            <meta property="og:url" content={SITE + TAB_PATHS[activeTab]} />
            <meta property="og:title" content={STATIC_PAGES[activeTab].title} />
            <meta property="og:description" content={STATIC_PAGES[activeTab].description} />
          </Helmet>
        )}
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
