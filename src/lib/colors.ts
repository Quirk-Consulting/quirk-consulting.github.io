// src/lib/colors.ts

export type ColorHue =
  | "red"
  | "orange"
  | "yellow"
  | "lime"
  | "green"
  | "teal"
  | "cyan"
  | "blue"
  | "purple"
  | "pink"
  | "slate"
  | "blank";
export type Variant = "dark" | "medium" | "light";

export type ColorConfig = {
  [key in ColorHue]: {
    [variant in Variant]: string;
  };
};

export const backgroundColors: ColorConfig = {
  red: {
    dark: "#450a0a", //red-950
    medium: "#dc2626", //red-600
    light: "#fca5a5", //red-300
  },
  orange: {
    dark: "#431407", //orange-950
    medium: "#ea580c", //orange-600
    light: "#fdba74", //orange-300
  },
  yellow: {
    dark: "#422006", //yellow-950
    medium: "#eab308", //yellow-500
    light: "#fde047", //yellow-300
  },
  lime: {
    dark: "#1a2e05", //lime-950
    medium: "#65a30d", //lime-600
    light: "#bef264", //lime-300
  },
  green: {
    dark: "#052e16", //green-950
    medium: "#16a34a", //green-600
    light: "#86efac", //green-300
  },
  teal: {
    dark: "#042f2e", //teal-950
    medium: "#0d9488", //teal-600
    light: "#5eead4", //teal-300
  },
  cyan: {
    dark: "#083344", //cyan-950
    medium: "#0891b2", //cyan-600
    light: "#67e8f9", //cyan-300
  },
  blue: {
    dark: "#172554", //blue-950
    medium: "#2563eb", //blue-600
    light: "#93c5fd", //blue-300
  },
  purple: {
    dark: "#3b0764", //purple-950
    medium: "#9333ea", //purple-600
    light: "#d8b4fe", //lavender-300
  },
  pink: {
    dark: "#500724", //pink-950
    medium: "#db2777", //pink-600
    light: "#f9a8d4", //pink-300
  },
  slate: {
    dark: "#020617", //slate-950
    medium: "#475569", //slate-600
    light: "#cbd5e1", //slate-300
  },
  blank: {
    dark: "none", // No background
    medium: "none", // No background
    light: "none", // No background
  },
};

export const foregroundMappings: ColorConfig = {
  red: {
    dark: "#FFFFFF",
    medium: "#FFFFFF",
    light: "#450a0a",
  },
  orange: {
    dark: "#FFFFFF",
    medium: "#FFFFFF",
    light: "#431407",
  },
  yellow: {
    dark: "#FFFFFF",
    medium: "#422006",
    light: "#422006",
  },
  lime: {
    dark: "#FFFFFF",
    medium: "#FFFFFF",
    light: "#1a2e05",
  },
  green: {
    dark: "#FFFFFF",
    medium: "#FFFFFF",
    light: "#052e16",
  },
  teal: {
    dark: "#FFFFFF",
    medium: "#FFFFFF",
    light: "#042f2e",
  },
  cyan: {
    dark: "#FFFFFF",
    medium: "#FFFFFF",
    light: "#083344",
  },
  blue: {
    dark: "#FFFFFF",
    medium: "#FFFFFF",
    light: "#172554",
  },
  purple: {
    dark: "#FFFFFF",
    medium: "#FFFFFF",
    light: "#3b0764",
  },
  pink: {
    dark: "#FFFFFF",
    medium: "#FFFFFF",
    light: "#500724",
  },
  slate: {
    dark: "#FFFFFF",
    medium: "#FFFFFF",
    light: "#020617",
  },
  blank: {
    dark: "currentColor", // Use theme color
    medium: "currentColor", // Use theme color
    light: "currentColor", // Use theme color
  },
};

export type IconVariant = {
  hue: ColorHue;
  variant: Variant;
  bgColor: string;
  fgColor: string;
};
