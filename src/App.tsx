// src/App.tsx
import { ThemeProvider } from "./components/theme-provider";
import { Layout } from "./components/layout";
import IconPreview from "./components/IconPreview";
import { ProjectIcons } from "./components/project-icons";
import { InstallationGuide } from "./components/InstallationGuide";
import { License } from "./components/license";
import { About } from "./components/about";
import { useState, useEffect } from "react";
import { iconTypes } from "./lib/iconTypes";

function App() {
  const [activeTab, setActiveTab] = useState("jira-icons");
  const [categoryCounts, setCategoryCounts] = useState<Record<string, number>>(
    {}
  );

  useEffect(() => {
    // Calculate category counts
    const counts: Record<string, number> = {};
    iconTypes.forEach((icon) => {
      icon.categories.forEach((category) => {
        counts[category] = (counts[category] || 0) + 1;
      });
    });
    setCategoryCounts(counts);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "jira-icons":
        return <IconPreview />;
      case "project-icons":
        return <ProjectIcons />;
      case "installation":
        return <InstallationGuide />;
      case "license":
        return <License />;
      case "about":
        return <About />;
      default:
        return <IconPreview />;
    }
  };

  return (
    <ThemeProvider defaultTheme="system" storageKey="jira-icons-theme">
      <Layout
        activeTab={activeTab}
        onTabChange={setActiveTab}
        categoryCounts={categoryCounts}
      >
        {renderContent()}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
