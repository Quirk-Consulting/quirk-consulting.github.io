// src/lib/projectIconTypes.ts

// Utility function to get the correct path for project icons
const getProjectIconPath = (iconName: string) => {
  // For GitHub Pages, we need to include the repo name in production
  const basePath = "";
  return `${basePath}/icons/project/${iconName}`;
};

// Project Icon Category Names
export const projectCategoryNames = [
  "Abstract Shapes",
  "Glass Icons",
  "Identicons",
  "Rings"
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
    name: "Navy Triangle Circle Assembly",
    path: getProjectIconPath("shapes-1752277593847.svg"),
    searchTerms: [
      "navy", "triangle", "circle", "assembly", "cream", "teal", "orange",
      "geometric", "composition", "layered", "complex", "professional", "modern",
      "navy triangle circle assembly"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Cyan Square Triangle Frame",
    path: getProjectIconPath("shapes-1752277597390.svg"),
    searchTerms: [
      "cyan", "square", "triangle", "frame", "outline", "teal", "cream", "navy",
      "geometric", "structure", "border", "container", "module", "architectural",
      "cyan square triangle frame"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Navy Square Triangle Formation",
    path: getProjectIconPath("shapes-1752277609767.svg"),
    searchTerms: [
      "navy", "square", "triangle", "formation", "teal", "cyan", "orange",
      "geometric", "structure", "framework", "technical", "professional", "angular",
      "navy square triangle formation"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Cyan Triangle Line Assembly",
    path: getProjectIconPath("shapes-1752277612362.svg"),
    searchTerms: [
      "cyan", "triangle", "line", "assembly", "teal", "navy", "orange",
      "geometric", "linear", "structure", "framework", "technical", "dynamic",
      "cyan triangle line assembly"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Navy Circle Square Line",
    path: getProjectIconPath("shapes-1752277615637.svg"),
    searchTerms: [
      "navy", "circle", "square", "line", "teal", "cyan", "orange",
      "geometric", "composition", "structure", "framework", "technical", "modern",
      "navy circle square line"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Navy Triangle Circle Formation",
    path: getProjectIconPath("shapes-1752277618158.svg"),
    searchTerms: [
      "navy", "triangle", "circle", "formation", "cream", "orange", "cyan",
      "geometric", "layered", "composition", "balanced", "professional", "sophisticated",
      "navy triangle circle formation"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Teal Square Line Triangle",
    path: getProjectIconPath("shapes-1752277620456.svg"),
    searchTerms: [
      "teal", "square", "line", "triangle", "cream", "cyan", "navy",
      "geometric", "structure", "framework", "technical", "angular", "modern",
      "teal square line triangle"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Teal Square Line Frame",
    path: getProjectIconPath("shapes-1752277622911.svg"),
    searchTerms: [
      "teal", "square", "line", "frame", "outline", "cream", "navy", "orange",
      "geometric", "structure", "border", "container", "module", "architectural",
      "teal square line frame"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Navy Circle Square Triangle",
    path: getProjectIconPath("shapes-1752277625730.svg"),
    searchTerms: [
      "navy", "circle", "square", "triangle", "teal", "cream", "cyan",
      "geometric", "composition", "layered", "balanced", "professional", "complex",
      "navy circle square triangle"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Teal Square Circle Line",
    path: getProjectIconPath("shapes-1752277628354.svg"),
    searchTerms: [
      "teal", "square", "circle", "line", "cyan", "cream", "navy",
      "geometric", "structure", "framework", "technical", "modern", "linear",
      "teal square circle line"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Cream Triangle Line Ring",
    path: getProjectIconPath("shapes-1752277630717.svg"),
    searchTerms: [
      "cream", "triangle", "line", "ring", "outline", "navy", "orange", "teal",
      "geometric", "structure", "framework", "beige", "sophisticated", "complex",
      "cream triangle line ring"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Teal Square Line Formation",
    path: getProjectIconPath("shapes-1752277632853.svg"),
    searchTerms: [
      "teal", "square", "line", "formation", "orange", "cyan", "cream",
      "geometric", "structure", "framework", "modular", "building", "construction",
      "teal square line formation"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Teal Triangle Line Cascade",
    path: getProjectIconPath("shapes-1752277636307.svg"),
    searchTerms: [
      "teal", "triangle", "line", "cascade", "cyan", "cream", "navy",
      "geometric", "flow", "sequence", "process", "workflow", "dynamic", "progression",
      "teal triangle line cascade"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Teal Square Triangle Overlay",
    path: getProjectIconPath("shapes-1752277638977.svg"),
    searchTerms: [
      "teal", "square", "triangle", "overlay", "orange", "cream", "cyan",
      "geometric", "layers", "intersection", "modules", "components", "system",
      "teal square triangle overlay"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Cream Circle Ring Assembly",
    path: getProjectIconPath("shapes-1752277642086.svg"),
    searchTerms: [
      "cream", "circle", "ring", "assembly", "outline", "cyan", "teal", "orange",
      "geometric", "nested", "concentric", "sophisticated", "beige", "enterprise",
      "cream circle ring assembly"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Teal Triangle Square Circle",
    path: getProjectIconPath("shapes-1752277644998.svg"),
    searchTerms: [
      "teal", "triangle", "square", "circle", "navy", "cyan", "orange",
      "geometric", "composition", "balanced", "modern", "professional", "complex",
      "teal triangle square circle"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Orange Square Triangle Line",
    path: getProjectIconPath("shapes-1752277648751.svg"),
    searchTerms: [
      "orange", "square", "triangle", "line", "cyan", "navy", "cream",
      "geometric", "structure", "framework", "technical", "modern", "composition",
      "orange square triangle line"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Cream Triangle Circle Assembly",
    path: getProjectIconPath("shapes-1752277653287.svg"),
    searchTerms: [
      "cream", "triangle", "circle", "assembly", "cyan", "orange", "teal",
      "geometric", "composition", "layered", "beige", "sophisticated", "balanced",
      "cream triangle circle assembly"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Navy Circle Triangle Formation",
    path: getProjectIconPath("shapes-1752277655387.svg"),
    searchTerms: [
      "navy", "circle", "triangle", "formation", "cyan", "cream", "orange",
      "geometric", "composition", "professional", "corporate", "enterprise", "structure",
      "navy circle triangle formation"
    ],
    categories: ["Abstract Shapes"],
  },
  {
    name: "Teal Circle Triangle Ring",
    path: getProjectIconPath("shapes-1752277657565.svg"),
    searchTerms: [
      "teal", "circle", "triangle", "ring", "outline", "cream", "navy", "orange",
      "geometric", "nested", "complex", "sophisticated", "enterprise", "layered",
      "teal circle triangle ring"
    ],
    categories: ["Abstract Shapes"],
  },
  
  /* Glass Icons */
  {
    name: "Bright Green Glass Letter",
    path: getProjectIconPath("glass-1752283144316.svg"),
    searchTerms: [
      "bright", "green", "glass", "letter", "E", "vibrant", "neon", "lime",
      "modern", "glossy", "translucent", "blur", "digital", "tech", "contemporary",
      "bright green glass letter"
    ],
    categories: ["Glass Icons"],
  },
  {
    name: "Cyan Glass Letter",
    path: getProjectIconPath("glass-1752283148721.svg"),
    searchTerms: [
      "cyan", "glass", "letter", "A", "aqua", "turquoise", "electric", "bright",
      "modern", "glossy", "translucent", "blur", "digital", "tech", "contemporary",
      "cyan glass letter"
    ],
    categories: ["Glass Icons"],
  },
  {
    name: "Teal Glass Letter",
    path: getProjectIconPath("glass-1752283150693.svg"),
    searchTerms: [
      "teal", "glass", "letter", "A", "N", "aqua", "turquoise", "mint", "seafoam",
      "modern", "glossy", "translucent", "blur", "digital", "tech", "contemporary",
      "teal glass letter"
    ],
    categories: ["Glass Icons"],
  },
  {
    name: "Pink Glass Letter",
    path: getProjectIconPath("glass-1752283152636.svg"),
    searchTerms: [
      "pink", "glass", "letter", "R", "A", "magenta", "rose", "vibrant", "bright",
      "modern", "glossy", "translucent", "blur", "digital", "tech", "contemporary",
      "pink glass letter"
    ],
    categories: ["Glass Icons"],
  },
  {
    name: "Light Green Glass Letter",
    path: getProjectIconPath("glass-1752283155720.svg"),
    searchTerms: [
      "light", "green", "glass", "letter", "R", "G", "lime", "mint", "fresh", "spring",
      "modern", "glossy", "translucent", "blur", "digital", "tech", "contemporary",
      "light green glass letter"
    ],
    categories: ["Glass Icons"],
  },
  {
    name: "Red Glass Letter",
    path: getProjectIconPath("glass-1752283159515.svg"),
    searchTerms: [
      "red", "glass", "letter", "E", "N", "crimson", "scarlet", "vibrant", "bold",
      "modern", "glossy", "translucent", "blur", "digital", "tech", "contemporary",
      "red glass letter"
    ],
    categories: ["Glass Icons"],
  },
  {
    name: "Magenta Glass Letter",
    path: getProjectIconPath("glass-1752283162135.svg"),
    searchTerms: [
      "magenta", "glass", "letter", "N", "E", "purple", "pink", "fuchsia", "vibrant",
      "modern", "glossy", "translucent", "blur", "digital", "tech", "contemporary",
      "magenta glass letter"
    ],
    categories: ["Glass Icons"],
  },
  {
    name: "Blue Glass Letter",
    path: getProjectIconPath("glass-1752283166023.svg"),
    searchTerms: [
      "blue", "glass", "letter", "E", "N", "azure", "electric", "royal", "vibrant",
      "modern", "glossy", "translucent", "blur", "digital", "tech", "contemporary",
      "blue glass letter"
    ],
    categories: ["Glass Icons"],
  },
  {
    name: "Yellow Glass Letter",
    path: getProjectIconPath("glass-1752283169986.svg"),
    searchTerms: [
      "yellow", "glass", "letter", "A", "E", "golden", "sunshine", "bright", "lemon",
      "modern", "glossy", "translucent", "blur", "digital", "tech", "contemporary",
      "yellow glass letter"
    ],
    categories: ["Glass Icons"],
  },
  {
    name: "Light Blue Glass Letter",
    path: getProjectIconPath("glass-1752283174609.svg"),
    searchTerms: [
      "light", "blue", "glass", "letter", "D", "A", "sky", "powder", "soft", "azure",
      "modern", "glossy", "translucent", "blur", "digital", "tech", "contemporary",
      "light blue glass letter"
    ],
    categories: ["Glass Icons"],
  },
  {
    name: "Purple Glass Letter",
    path: getProjectIconPath("glass-1752283179107.svg"),
    searchTerms: [
      "purple", "glass", "letter", "G", "violet", "indigo", "royal", "deep", "rich",
      "modern", "glossy", "translucent", "blur", "digital", "tech", "contemporary",
      "purple glass letter"
    ],
    categories: ["Glass Icons"],
  },
  {
    name: "Coral Glass Letter",
    path: getProjectIconPath("glass-1752283184278.svg"),
    searchTerms: [
      "coral", "glass", "letter", "N", "pink", "orange", "salmon", "warm", "vibrant",
      "modern", "glossy", "translucent", "blur", "digital", "tech", "contemporary",
      "coral glass letter"
    ],
    categories: ["Glass Icons"],
  },
  {
    name: "Lime Glass Letter",
    path: getProjectIconPath("glass-1752283187403.svg"),
    searchTerms: [
      "lime", "glass", "letter", "I", "D", "green", "chartreuse", "electric", "bright",
      "modern", "glossy", "translucent", "blur", "digital", "tech", "contemporary",
      "lime glass letter"
    ],
    categories: ["Glass Icons"],
  },
  {
    name: "Fresh Green Glass Letter",
    path: getProjectIconPath("glass-1752283190068.svg"),
    searchTerms: [
      "fresh", "green", "glass", "letter", "L", "R", "mint", "spring", "natural", "bright",
      "modern", "glossy", "translucent", "blur", "digital", "tech", "contemporary",
      "fresh green glass letter"
    ],
    categories: ["Glass Icons"],
  },
  {
    name: "Orange Glass Letter",
    path: getProjectIconPath("glass-1752283192774.svg"),
    searchTerms: [
      "orange", "glass", "letter", "D", "amber", "tangerine", "warm", "vibrant", "citrus",
      "modern", "glossy", "translucent", "blur", "digital", "tech", "contemporary",
      "orange glass letter"
    ],
    categories: ["Glass Icons"],
  },
  {
    name: "Aqua Glass Letter",
    path: getProjectIconPath("glass-1752283195575.svg"),
    searchTerms: [
      "aqua", "glass", "letter", "G", "teal", "turquoise", "water", "fresh", "cool",
      "modern", "glossy", "translucent", "blur", "digital", "tech", "contemporary",
      "aqua glass letter"
    ],
    categories: ["Glass Icons"],
  },
  {
    name: "Rose Glass Letter",
    path: getProjectIconPath("glass-1752283200862.svg"),
    searchTerms: [
      "rose", "glass", "letter", "D", "G", "pink", "coral", "warm", "elegant", "soft",
      "modern", "glossy", "translucent", "blur", "digital", "tech", "contemporary",
      "rose glass letter"
    ],
    categories: ["Glass Icons"],
  },
  {
    name: "Steel Blue Glass Letter",
    path: getProjectIconPath("glass-1752283203147.svg"),
    searchTerms: [
      "steel", "blue", "glass", "letter", "D", "A", "metallic", "industrial", "professional", "corporate",
      "modern", "glossy", "translucent", "blur", "digital", "tech", "contemporary",
      "steel blue glass letter"
    ],
    categories: ["Glass Icons"],
  },
  {
    name: "Sky Blue Glass Letter",
    path: getProjectIconPath("glass-1752283205568.svg"),
    searchTerms: [
      "sky", "blue", "glass", "letter", "I", "D", "light", "airy", "soft", "powder",
      "modern", "glossy", "translucent", "blur", "digital", "tech", "contemporary",
      "sky blue glass letter"
    ],
    categories: ["Glass Icons"],
  },
  {
    name: "Golden Yellow Glass Letter",
    path: getProjectIconPath("glass-1752283209057.svg"),
    searchTerms: [
      "golden", "yellow", "glass", "letter", "E", "N", "gold", "sunshine", "warm", "rich",
      "modern", "glossy", "translucent", "blur", "digital", "tech", "contemporary",
      "golden yellow glass letter"
    ],
    categories: ["Glass Icons"],
  },

  /* Identicons */
  {
    name: "Teal Pixel Pattern A",
    path: getProjectIconPath("identicon-1752284230009.svg"),
    searchTerms: [
      "teal", "pixel", "pattern", "identicon", "geometric", "symmetric", "blocky",
      "8bit", "retro", "gaming", "digital", "aqua", "turquoise", "mint", "modern",
      "teal pixel pattern"
    ],
    categories: ["Identicons"],
  },
  {
    name: "Blue Grey Pixel Pattern B",
    path: getProjectIconPath("identicon-1752284232258.svg"),
    searchTerms: [
      "blue", "grey", "pixel", "pattern", "identicon", "geometric", "symmetric",
      "blocky", "8bit", "retro", "gaming", "digital", "slate", "corporate", "professional",
      "blue grey pixel pattern"
    ],
    categories: ["Identicons"],
  },
  {
    name: "Yellow Pixel Pattern C",
    path: getProjectIconPath("identicon-1752284234290.svg"),
    searchTerms: [
      "yellow", "pixel", "pattern", "identicon", "geometric", "symmetric", "blocky",
      "8bit", "retro", "gaming", "digital", "golden", "bright", "vibrant", "sunshine",
      "yellow pixel pattern"
    ],
    categories: ["Identicons"],
  },
  {
    name: "Green Pixel Pattern D",
    path: getProjectIconPath("identicon-1752284237807.svg"),
    searchTerms: [
      "green", "pixel", "pattern", "identicon", "geometric", "symmetric", "blocky",
      "8bit", "retro", "gaming", "digital", "forest", "nature", "fresh", "eco",
      "green pixel pattern"
    ],
    categories: ["Identicons"],
  },
  {
    name: "Brown Pixel Pattern E",
    path: getProjectIconPath("identicon-1752284240374.svg"),
    searchTerms: [
      "brown", "pixel", "pattern", "identicon", "geometric", "symmetric", "blocky",
      "8bit", "retro", "gaming", "digital", "chocolate", "coffee", "earth", "warm",
      "brown pixel pattern"
    ],
    categories: ["Identicons"],
  },
  {
    name: "Yellow Pixel Pattern F",
    path: getProjectIconPath("identicon-1752284243208.svg"),
    searchTerms: [
      "yellow", "pixel", "pattern", "identicon", "geometric", "symmetric", "blocky",
      "8bit", "retro", "gaming", "digital", "golden", "bright", "vibrant", "horizontal",
      "yellow pixel pattern"
    ],
    categories: ["Identicons"],
  },
  {
    name: "Light Green Pixel Pattern G",
    path: getProjectIconPath("identicon-1752284245729.svg"),
    searchTerms: [
      "light", "green", "pixel", "pattern", "identicon", "geometric", "symmetric",
      "blocky", "8bit", "retro", "gaming", "digital", "lime", "spring", "fresh", "mint",
      "light green pixel pattern"
    ],
    categories: ["Identicons"],
  },
  {
    name: "Blue Pixel Pattern H",
    path: getProjectIconPath("identicon-1752284250230.svg"),
    searchTerms: [
      "blue", "pixel", "pattern", "identicon", "geometric", "symmetric", "blocky",
      "8bit", "retro", "gaming", "digital", "royal", "navy", "electric", "vibrant",
      "blue pixel pattern"
    ],
    categories: ["Identicons"],
  },
  {
    name: "Purple Pixel Pattern I",
    path: getProjectIconPath("identicon-1752284253729.svg"),
    searchTerms: [
      "purple", "pixel", "pattern", "identicon", "geometric", "symmetric", "blocky",
      "8bit", "retro", "gaming", "digital", "violet", "indigo", "royal", "deep",
      "purple pixel pattern"
    ],
    categories: ["Identicons"],
  },
  {
    name: "Lime Green Pixel Pattern J",
    path: getProjectIconPath("identicon-1752284256833.svg"),
    searchTerms: [
      "lime", "green", "pixel", "pattern", "identicon", "geometric", "symmetric",
      "blocky", "8bit", "retro", "gaming", "digital", "chartreuse", "electric", "bright",
      "lime green pixel pattern"
    ],
    categories: ["Identicons"],
  },
  {
    name: "Orange Pixel Pattern K",
    path: getProjectIconPath("identicon-1752284261958.svg"),
    searchTerms: [
      "orange", "pixel", "pattern", "identicon", "geometric", "symmetric", "blocky",
      "8bit", "retro", "gaming", "digital", "tangerine", "warm", "vibrant", "citrus",
      "orange pixel pattern"
    ],
    categories: ["Identicons"],
  },
  {
    name: "Red Pixel Pattern L",
    path: getProjectIconPath("identicon-1752284265760.svg"),
    searchTerms: [
      "red", "pixel", "pattern", "identicon", "geometric", "symmetric", "blocky",
      "8bit", "retro", "gaming", "digital", "crimson", "scarlet", "bold", "vibrant",
      "red pixel pattern"
    ],
    categories: ["Identicons"],
  },
  {
    name: "Dark Green Pixel Pattern M",
    path: getProjectIconPath("identicon-1752284268780.svg"),
    searchTerms: [
      "dark", "green", "pixel", "pattern", "identicon", "geometric", "symmetric",
      "blocky", "8bit", "retro", "gaming", "digital", "forest", "deep", "rich", "emerald",
      "dark green pixel pattern"
    ],
    categories: ["Identicons"],
  },
  {
    name: "Pink Pixel Pattern N",
    path: getProjectIconPath("identicon-1752284272182.svg"),
    searchTerms: [
      "pink", "pixel", "pattern", "identicon", "geometric", "symmetric", "blocky",
      "8bit", "retro", "gaming", "digital", "magenta", "rose", "vibrant", "bright",
      "pink pixel pattern"
    ],
    categories: ["Identicons"],
  },
  {
    name: "Orange Red Pixel Pattern O",
    path: getProjectIconPath("identicon-1752284277638.svg"),
    searchTerms: [
      "orange", "red", "pixel", "pattern", "identicon", "geometric", "symmetric",
      "blocky", "8bit", "retro", "gaming", "digital", "coral", "warm", "vibrant", "fire",
      "orange red pixel pattern"
    ],
    categories: ["Identicons"],
  },
  {
    name: "Cyan Pixel Pattern P",
    path: getProjectIconPath("identicon-1752284280526.svg"),
    searchTerms: [
      "cyan", "pixel", "pattern", "identicon", "geometric", "symmetric", "blocky",
      "8bit", "retro", "gaming", "digital", "aqua", "turquoise", "electric", "bright",
      "cyan pixel pattern"
    ],
    categories: ["Identicons"],
  },
  {
    name: "Amber Pixel Pattern Q",
    path: getProjectIconPath("identicon-1752284282974.svg"),
    searchTerms: [
      "amber", "pixel", "pattern", "identicon", "geometric", "symmetric", "blocky",
      "8bit", "retro", "gaming", "digital", "yellow", "orange", "golden", "warm",
      "amber pixel pattern"
    ],
    categories: ["Identicons"],
  },
  {
    name: "Deep Purple Pixel Pattern R",
    path: getProjectIconPath("identicon-1752284286510.svg"),
    searchTerms: [
      "deep", "purple", "pixel", "pattern", "identicon", "geometric", "symmetric",
      "blocky", "8bit", "retro", "gaming", "digital", "violet", "indigo", "royal", "rich",
      "deep purple pixel pattern"
    ],
    categories: ["Identicons"],
  },
  {
    name: "Navy Blue Pixel Pattern S",
    path: getProjectIconPath("identicon-1752284291011.svg"),
    searchTerms: [
      "navy", "blue", "pixel", "pattern", "identicon", "geometric", "symmetric",
      "blocky", "8bit", "retro", "gaming", "digital", "dark", "professional", "corporate",
      "navy blue pixel pattern"
    ],
    categories: ["Identicons"],
  },
  {
    name: "Coral Pixel Pattern T",
    path: getProjectIconPath("identicon-1752284294427.svg"),
    searchTerms: [
      "coral", "pixel", "pattern", "identicon", "geometric", "symmetric", "blocky",
      "8bit", "retro", "gaming", "digital", "pink", "orange", "salmon", "warm",
      "coral pixel pattern"
    ],
    categories: ["Identicons"],
  },
];
