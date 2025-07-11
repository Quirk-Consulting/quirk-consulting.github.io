// src/lib/projectIconTypes.ts

// Utility function to get the correct path for project icons
const getProjectIconPath = (iconName: string) => {
  // For GitHub Pages, we need to include the repo name in production
  const basePath = "";
  return `${basePath}/icons/project/${iconName}`;
};

// Project Icon Category Names
export const projectCategoryNames = [
  "Abstract Compositions",
  "Geometric Patterns", 
  "Dynamic Shapes",
  "Minimal Forms",
  "Organic Elements",
  "Symbolic Icons"
].sort();

// Project Icon Type definition
export type ProjectIconType = {
  name: string;
  path: string;
  searchTerms: string[];
  categories: string[];
};

export const projectIconTypes: ProjectIconType[] = [
  /* Abstract Compositions */
  {
    name: "Orange Circle Composition",
    path: getProjectIconPath("shapes-1752270547569.svg"),
    searchTerms: [
      "orange", "circle", "composition", "abstract", "geometric", "modern", 
      "creative", "project", "team", "dynamic", "vibrant", "shapes"
    ],
    categories: ["Abstract Compositions"],
  },
  {
    name: "Teal Angular Formation",
    path: getProjectIconPath("shapes-1752270556180.svg"),
    searchTerms: [
      "teal", "angular", "formation", "abstract", "geometric", "sharp",
      "professional", "technical", "development", "structure", "design"
    ],
    categories: ["Abstract Compositions"],
  },
];
