import {
  Dock,
  InfoIcon,
  Copyright,
  Package,
  Menu,
  X,
  BugIcon,
  BookOpen,
  ChevronDown,
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo/Logo";
import { ScrollArea } from "@/components/ui/scroll-area";
import { categoryNames } from "../lib/iconTypes";

type Tab = {
  id: string;
  icon: React.ReactNode;
  label: string;
  href?: string;
};

const tabs: Tab[] = [
  {
    id: "jira-icons",
    icon: <Package className="w-4 h-4" />,
    label: "Issue Type Icons",
  },
  {
    id: "project-icons",
    icon: <Dock className="w-4 h-4" />,
    label: "Project Icons",
  },
  {
    id: "installation",
    icon: <BookOpen className="w-4 h-4" />,
    label: "Installation Guide",
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
  {
    id: "issues",
    icon: <BugIcon className="w-4 h-4" />,
    label: "Report Issue",
    href: "https://github.com/quirk-consulting/quirk-consulting.github.io/issues",
  },
];

type LayoutProps = {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tabId: string) => void;
  categoryCounts?: Record<string, number>;
};

export function Layout({
  children,
  activeTab,
  onTabChange,
  categoryCounts = {},
}: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategorySidebarOpen, setIsCategorySidebarOpen] = useState(true);

  const handleCategoryClick = (category: string) => {
    const element = document.getElementById(
      `category-${category.toLowerCase().replace(/[^a-z0-9]/g, "-")}`
    );
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const CategorySidebar = () => (
    <ScrollArea className="flex-1 px-2 py-4">
      <div className="space-y-1">
        {categoryNames.map((category) => {
          const count = categoryCounts[category] || 0;
          if (count === 0) return null;

          return (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className="flex items-center justify-between w-full px-3 py-2 text-sm transition-colors rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <span className="truncate">{category}</span>
              <span className="ml-auto text-xs tabular-nums text-muted-foreground">
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </ScrollArea>
  );

  const NavContent = () => (
    <nav className="p-2">
      {tabs.map((tab) => {
        const ButtonContent = () => (
          <>
            {tab.icon}
            {tab.label}
          </>
        );

        return tab.href ? (
          <a
            key={tab.id}
            href={tab.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center w-full gap-2 px-4 py-2 mb-1 text-sm transition-colors rounded-md hover:bg-accent"
          >
            <ButtonContent />
          </a>
        ) : (
          <button
            key={tab.id}
            onClick={() => {
              onTabChange(tab.id);
              setIsMobileMenuOpen(false);
            }}
            className={`w-full flex items-center gap-2 px-4 py-2 mb-1 rounded-md text-sm transition-colors
              ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent"
              }`}
          >
            <ButtonContent />
          </button>
        );
      })}
    </nav>
  );

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden w-64 border-r md:block bg-card">
        <div className="flex items-center justify-between p-4 border-b">
          <Logo />
          <ThemeToggle />
        </div>
        <NavContent />

        {/* Category Sidebar for Jira Icons */}
        {activeTab === "jira-icons" && (
          <div className="flex flex-col border-t">
            <div className="flex items-center justify-between p-2">
              <h3 className="text-sm font-medium">Categories</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsCategorySidebarOpen(!isCategorySidebarOpen)}
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isCategorySidebarOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </div>
            {isCategorySidebarOpen && <CategorySidebar />}
          </div>
        )}
      </div>

      {/* Mobile Header and Content */}
      <div className="flex flex-col w-full">
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 border-b md:hidden bg-card">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            <Logo />
          </div>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Sheet */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetContent side="left" className="w-64 p-0">
            <div className="flex items-center justify-between p-4 border-b">
              <Logo />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <NavContent />
            {activeTab === "jira-icons" && (
              <div className="flex flex-col border-t">
                <div className="flex items-center justify-between p-2">
                  <h3 className="text-sm font-medium">Categories</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      setIsCategorySidebarOpen(!isCategorySidebarOpen)
                    }
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isCategorySidebarOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                </div>
                {isCategorySidebarOpen && <CategorySidebar />}
              </div>
            )}
          </SheetContent>
        </Sheet>

        {/* Main content */}
        <div className="flex-1 mb-6 overflow-auto">{children}</div>
      </div>
    </div>
  );
}
