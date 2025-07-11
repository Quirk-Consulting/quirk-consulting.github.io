// Updated Layout.tsx to support category selection
import {
  Dock,
  InfoIcon,
  Copyright,
  Package,
  Menu,
  X,
  BookOpen,
  ChevronDown,
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useEffect, useRef, useState } from "react";
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
    label: "Work Type Icons",
  },
  {
    id: "project-icons",
    icon: <Dock className="w-4 h-4" />,
    label: "Project Icons",
  },
  {
    id: "installation",
    icon: <BookOpen className="w-4 h-4" />,
    label: "How To Use Guide",
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
  categoryCounts: Record<string, number>;
  isSearching: boolean;
  selectedCategory: string | null;
  onCategorySelect: (category: string) => void;
};

export function Layout({
  children,
  activeTab,
  onTabChange,
  categoryCounts,
  isSearching,
  selectedCategory,
  onCategorySelect,
}: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategorySidebarOpen, setIsCategorySidebarOpen] = useState(true);
  const [categoryListHeight, setCategoryListHeight] = useState<number>(0);

  const sidebarRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const categoryHeaderRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (category: string) => {
    // Update the selected category
    onCategorySelect(category);

    // Scroll to the category
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
          const isSelected = selectedCategory === category;

          return (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`
                flex items-center justify-between w-full px-3 py-2 text-sm transition-colors rounded-md
                ${
                  isSelected
                    ? "bg-primary/10 text-primary font-medium"
                    : count > 0
                    ? isSearching
                      ? "font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    : "text-muted-foreground/50 hover:bg-accent/50"
                }
              `}
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

  // Update the Desktop sidebar version
  const DesktopCategorySidebar = () => (
    <div className="flex-1 overflow-hidden">
      <ScrollArea
        className="h-full"
        style={{
          height: categoryListHeight ? `${categoryListHeight}px` : undefined,
        }}
      >
        <div className="px-2 py-4 space-y-1">
          {categoryNames.map((category) => {
            const count = categoryCounts[category] || 0;
            const isSelected = selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`flex items-center justify-between w-full px-3 py-1 text-sm transition-colors rounded-md
                  ${
                    isSelected
                      ? "bg-primary/10 text-primary font-medium"
                      : count > 0
                      ? isSearching
                        ? "font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      : "text-muted-foreground/50 hover:bg-accent/50"
                  }
                `}
              >
                <span className="truncate">{category}</span>
                <span
                  className={`ml-auto text-xs tabular-nums ${
                    count > 0
                      ? "text-muted-foreground"
                      : "text-muted-foreground/50"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );

  useEffect(() => {
    const updateHeight = () => {
      if (
        sidebarRef.current &&
        headerRef.current &&
        navRef.current &&
        categoryHeaderRef.current
      ) {
        const sidebarHeight = sidebarRef.current.clientHeight;
        const headerHeight = headerRef.current.clientHeight;
        const navHeight = navRef.current.clientHeight;
        const categoryHeaderHeight = categoryHeaderRef.current.clientHeight;

        const availableHeight =
          sidebarHeight - headerHeight - navHeight - categoryHeaderHeight;
        setCategoryListHeight(availableHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, [isCategorySidebarOpen]);

  // SEO enhancement: Add appropriate ARIA roles and landmarks
  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <div
        ref={sidebarRef}
        className="hidden w-64 h-screen border-r md:flex md:flex-col bg-card"
        role="navigation"
        aria-label="Main Navigation"
      >
        {/* Fixed sections */}
        <div ref={headerRef} className="flex-none p-4 border-b">
          <div className="flex items-center justify-between">
            <Logo />
            <ThemeToggle />
          </div>
        </div>
        <div ref={navRef} className="flex-none">
          <NavContent />
        </div>

        {/* Category Sidebar for Jira Icons */}
        {activeTab === "jira-icons" && (
          <div className="flex flex-col flex-1 min-h-0 border-t">
            <div
              ref={categoryHeaderRef}
              className="flex items-center justify-between flex-none p-2"
            >
              <h3 className="text-sm font-medium">Categories</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsCategorySidebarOpen(!isCategorySidebarOpen)}
                aria-expanded={isCategorySidebarOpen}
                aria-controls="category-sidebar"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isCategorySidebarOpen ? "rotate-180" : ""
                  }`}
                />
                <span className="sr-only">
                  {isCategorySidebarOpen
                    ? "Collapse categories"
                    : "Expand categories"}
                </span>
              </Button>
            </div>
            {isCategorySidebarOpen && <DesktopCategorySidebar />}
          </div>
        )}
      </div>

      {/* Mobile Header and Content */}
      <div className="flex flex-col w-full">
        {/* Mobile Header */}
        <header className="flex items-center justify-between p-4 border-b md:hidden bg-card">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open main menu"
            >
              <Menu className="w-5 h-5" />
            </Button>
            <Logo />
          </div>
          <ThemeToggle />
        </header>

        {/* Mobile Menu Sheet */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetContent side="left" className="w-64 p-0">
            <div className="flex items-center justify-between p-4 border-b">
              <Logo />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
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
                    aria-expanded={isCategorySidebarOpen}
                    aria-controls="mobile-category-sidebar"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isCategorySidebarOpen ? "rotate-180" : ""
                      }`}
                    />
                    <span className="sr-only">
                      {isCategorySidebarOpen
                        ? "Collapse categories"
                        : "Expand categories"}
                    </span>
                  </Button>
                </div>
                {isCategorySidebarOpen && <CategorySidebar />}
              </div>
            )}
          </SheetContent>
        </Sheet>

        {/* Main content */}
        <main className="flex-1 mb-6 overflow-auto" role="main">
          {children}
        </main>
      </div>
    </div>
  );
}
