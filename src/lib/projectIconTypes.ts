// src/lib/projectIconTypes.ts

// Utility function to get the correct path for project icons
const getProjectIconPath = (iconName: string) => {
  // For GitHub Pages, we need to include the repo name in production
  const basePath = "";
  return `${basePath}/icons/project/${iconName}`;
};

// Project Icon Category Names
export const projectCategoryNames = [
  "Abstract Shapes"
].sort();

// Project Icon Type definition
export type ProjectIconType = {
  name: string;
  path: string;
  searchTerms: string[];
  categories: string[];
};

export const projectIconTypes: ProjectIconType[] = [
  /* Abstract Shapes */
  {
    name: "Wyatt",
    path: getProjectIconPath("shapes-1752277593847.svg"),
    searchTerms: [
      "navy", "triangle", "circle", "assembly", "cream", "teal", "orange",
      "geometric", "composition", "layered", "complex", "professional", "modern"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Jameson",
    path: getProjectIconPath("shapes-1752277597390.svg"),
    searchTerms: [
      "cyan", "square", "triangle", "frame", "outline", "teal", "cream", "navy",
      "geometric", "structure", "border", "container", "module", "architectural"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Jade",
    path: getProjectIconPath("shapes-1752277609767.svg"),
    searchTerms: [
      "navy", "square", "triangle", "formation", "teal", "cyan", "orange",
      "geometric", "structure", "framework", "technical", "professional", "angular"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Sara",
    path: getProjectIconPath("shapes-1752277612362.svg"),
    searchTerms: [
      "cyan", "triangle", "line", "assembly", "teal", "navy", "orange",
      "geometric", "linear", "structure", "framework", "technical", "dynamic"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Aidan",
    path: getProjectIconPath("shapes-1752277615637.svg"),
    searchTerms: [
      "navy", "circle", "square", "line", "teal", "cyan", "orange",
      "geometric", "composition", "structure", "framework", "technical", "modern"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Vivian",
    path: getProjectIconPath("shapes-1752277618158.svg"),
    searchTerms: [
      "navy", "triangle", "circle", "formation", "cream", "orange", "cyan",
      "geometric", "layered", "composition", "balanced", "professional", "sophisticated"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Chase",
    path: getProjectIconPath("shapes-1752277620456.svg"),
    searchTerms: [
      "teal", "square", "line", "triangle", "cream", "cyan", "navy",
      "geometric", "structure", "framework", "technical", "angular", "modern"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Jude",
    path: getProjectIconPath("shapes-1752277622911.svg"),
    searchTerms: [
      "teal", "square", "line", "frame", "outline", "cream", "navy", "orange",
      "geometric", "structure", "border", "container", "module", "architectural"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Eden",
    path: getProjectIconPath("shapes-1752277625730.svg"),
    searchTerms: [
      "navy", "circle", "square", "triangle", "teal", "cream", "cyan",
      "geometric", "composition", "layered", "balanced", "professional", "complex"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Leo",
    path: getProjectIconPath("shapes-1752277628354.svg"),
    searchTerms: [
      "teal", "square", "circle", "line", "cyan", "cream", "navy",
      "geometric", "structure", "framework", "technical", "modern", "linear"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Brian",
    path: getProjectIconPath("shapes-1752277630717.svg"),
    searchTerms: [
      "cream", "triangle", "line", "ring", "outline", "navy", "orange", "teal",
      "geometric", "structure", "framework", "beige", "sophisticated", "complex"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Alexander",
    path: getProjectIconPath("shapes-1752277632853.svg"),
    searchTerms: [
      "teal", "square", "line", "formation", "orange", "cyan", "cream",
      "geometric", "structure", "framework", "modular", "building", "construction"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Ryker",
    path: getProjectIconPath("shapes-1752277636307.svg"),
    searchTerms: [
      "teal", "triangle", "line", "cascade", "cyan", "cream", "navy",
      "geometric", "flow", "sequence", "process", "workflow", "dynamic", "progression"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Avery",
    path: getProjectIconPath("shapes-1752277638977.svg"),
    searchTerms: [
      "teal", "square", "triangle", "overlay", "orange", "cream", "cyan",
      "geometric", "layers", "intersection", "modules", "components", "system"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Caleb",
    path: getProjectIconPath("shapes-1752277642086.svg"),
    searchTerms: [
      "cream", "circle", "ring", "assembly", "outline", "cyan", "teal", "orange",
      "geometric", "nested", "concentric", "sophisticated", "beige", "enterprise"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Destiny",
    path: getProjectIconPath("shapes-1752277644998.svg"),
    searchTerms: [
      "teal", "triangle", "square", "circle", "navy", "cyan", "orange",
      "geometric", "composition", "balanced", "modern", "professional", "complex"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Oliver",
    path: getProjectIconPath("shapes-1752277648751.svg"),
    searchTerms: [
      "orange", "square", "triangle", "line", "cyan", "navy", "cream",
      "geometric", "structure", "framework", "technical", "modern", "composition"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Christian",
    path: getProjectIconPath("shapes-1752277653287.svg"),
    searchTerms: [
      "cream", "triangle", "circle", "assembly", "cyan", "orange", "teal",
      "geometric", "composition", "layered", "beige", "sophisticated", "balanced"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Maria",
    path: getProjectIconPath("shapes-1752277655387.svg"),
    searchTerms: [
      "navy", "circle", "triangle", "formation", "cyan", "cream", "orange",
      "geometric", "composition", "professional", "corporate", "enterprise", "structure"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Mason",
    path: getProjectIconPath("shapes-1752277657565.svg"),
    searchTerms: [
      "teal", "circle", "triangle", "ring", "outline", "cream", "navy", "orange",
      "geometric", "nested", "complex", "sophisticated", "enterprise", "layered"
    ],
    categories: ["Abstract Shapes"],
  },
];
