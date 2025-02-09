// src/App.tsx
import { ThemeProvider } from "./components/theme-provider";
import { Layout } from "./components/layout";
import IconPreview from "./components/IconPreview";
import { ProjectIcons } from "./components/project-icons";
import { InstallationGuide } from "./components/InstallationGuide";
import { License } from "./components/license";
import { About } from "./components/about";
import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("jira-icons");

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
      <Layout activeTab={activeTab} onTabChange={setActiveTab}>
        {renderContent()}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
