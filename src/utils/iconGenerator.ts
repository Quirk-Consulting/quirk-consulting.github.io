// src/utils/iconGenerator.ts
import { toPng } from "html-to-image";

export const loadSvgContent = async (path: string): Promise<string> => {
  try {
    const response = await fetch(path);
    const svgContent = await response.text();
    return svgContent;
  } catch (error) {
    console.error("Error loading SVG:", error);
    return "";
  }
};

export const extractPathsFromSvg = (svgContent: string): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgContent, "image/svg+xml");
  const paths = Array.from(doc.querySelectorAll("path, polyline, circle, rect, polygon, line, ellipse, text"));
  return paths.map((path) => path.outerHTML).join("");
};

export const generateSVGString = (
  pathContent: string,
  fgColor: string,
  bgColor: string,
  size: number = 24,
  padding: number = 4
): string => {
  const iconSize = size - padding * 2;
  const transform = `translate(${padding}, ${padding})`;
  const radius = size * 0.25; // 25% of size for border radius

  // If using currentColor, we don't need to explicitly set fill/stroke colors
  const colorAttributes =
    fgColor === "currentColor"
      ? 'class="stroke-current"'
      : `stroke="${fgColor}"`;

  return `<svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="${size}" 
    height="${size}" 
    viewBox="0 0 ${size} ${size}"
    class="text-foreground"
  >
    ${
      bgColor !== "none"
        ? `<rect 
            width="${size}" 
            height="${size}" 
            fill="${bgColor}"
            rx="${radius}"
            ry="${radius}"
          />`
        : ""
    }
    <g 
      fill="none" 
      ${colorAttributes}
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
      transform="${transform}"
    >
      <g transform="scale(${iconSize / 24})">
        ${pathContent}
      </g>
    </g>
  </svg>`.trim();
};

export const generatePNG = async (
  svgString: string,
  size: number = 24
): Promise<Blob> => {
  const container = document.createElement("div");
  container.innerHTML = svgString;

  // Get the computed theme color before generating PNG
  const computedStyle = getComputedStyle(document.documentElement);
  const themeColor = computedStyle.getPropertyValue("--foreground").trim();

  // Replace currentColor with the actual theme color
  if (themeColor) {
    const svgElement = container.querySelector("svg");
    if (svgElement) {
      svgElement.style.color = themeColor;
    }
  }

  document.body.appendChild(container);

  try {
    const dataUrl = await toPng(container, {
      width: size,
      height: size,
      pixelRatio: 2,
    });

    const response = await fetch(dataUrl);
    return await response.blob();
  } finally {
    document.body.removeChild(container);
  }
};
