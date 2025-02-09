import { FileIcon, InfoIcon, Copyright, Package, Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavContent = () => (
    <nav className="p-2">
      {tabs.map((tab) => (
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
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </nav>
  );

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden w-64 border-r md:block bg-card">
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-lg font-semibold">Quirk Icons</span>
          <ThemeToggle />
        </div>
        <NavContent />
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
            <span className="text-lg font-semibold">Quirk Icons</span>
          </div>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Sheet */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetContent side="left" className="w-64 p-0">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-lg font-semibold">Quirk Icons</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <NavContent />
          </SheetContent>
        </Sheet>

        {/* Main content */}
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
}
