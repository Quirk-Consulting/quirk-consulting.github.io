// src/components/layout.tsx
import { FileIcon, InfoIcon, Copyright, Package } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

type Tab = {
  id: string;
  icon: React.ReactNode;
  label: string;
};

const tabs: Tab[] = [
  {
    id: "jira-icons",
    icon: <Package className="w-4 h-4" />,
    label: "Jira Icons",
  },
  {
    id: "project-icons",
    icon: <FileIcon className="w-4 h-4" />,
    label: "Project Icons",
  },
  {
    id: "license",
    icon: <Copyright className="w-4 h-4" />,
    label: "License",
  },
  {
    id: "about",
    icon: <InfoIcon className="w-4 h-4" />,
    label: "About Quirk",
  },
];

type LayoutProps = {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tabId: string) => void;
};

export function Layout({ children, activeTab, onTabChange }: LayoutProps) {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r bg-card">
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-lg font-semibold">Quirk Icons</span>
          <ThemeToggle />
        </div>
        <nav className="p-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`w-full flex items-center gap-2 px-4 py-2 mb-1 rounded-md text-sm transition-colors
                ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent"
                }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}

export type { Tab };
export { tabs };
