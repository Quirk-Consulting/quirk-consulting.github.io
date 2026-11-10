// One-click starter sets. Names must match iconTypes; unknown names are skipped.
export type StarterPack = { id: string; name: string; blurb: string; icons: string[] };

export const starterPacks: StarterPack[] = [
  {
    id: "software-delivery",
    name: "Software delivery",
    blurb: "Bugs, releases, code reviews and tech debt.",
    icons: ["Bug", "Rocket", "Code", "Git Branch", "Git Pull Request", "Kanban", "Milestone", "Package", "Server", "Terminal", "Workflow", "Triangle Alert"],
  },
  {
    id: "it-service-management",
    name: "IT service management",
    blurb: "Requests, incidents, access and hardware.",
    icons: ["Headset", "Server Crash", "Monitor X", "Shield Alert", "Key", "Laptop", "WiFi Off", "Printer", "User Plus", "File Question", "Settings", "Phone Call"],
  },
  {
    id: "construction-projects",
    name: "Construction and projects",
    blurb: "Site works, design, safety and approvals.",
    icons: ["Construction", "Drafting Compass", "Ruler", "Warehouse", "Factory", "Brick Wall", "Triangle Alert", "File Check", "Truck", "Hard Hat", "Calendar", "Clipboard Check"],
  },
  {
    id: "marketing",
    name: "Marketing and content",
    blurb: "Campaigns, assets, social and events.",
    icons: ["Megaphone", "Mail", "Image", "Video", "Newspaper", "Presentation", "Calendar", "Trending Up", "Linkedin", "Instagram", "Pen Line", "Target"],
  },
  {
    id: "people-hr",
    name: "People and HR",
    blurb: "Onboarding, leave, training and recognition.",
    icons: ["User Plus", "User Minus", "Users", "Id Card", "Graduation Cap", "Handshake", "File User", "Award", "Heart Handshake", "Cake", "Briefcase", "Calendar"],
  },
];
