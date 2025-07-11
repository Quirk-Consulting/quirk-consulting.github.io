// src/utils/projectIconGenerator.ts
import { toPng } from "html-to-image";

export const loadProjectSvgContent = async (path: string): Promise<string> => {
  try {
    const response = await fetch(path);
    const svgContent = await response.text();
    return svgContent;
  } catch (error) {
    console.error("Error loading project SVG:", error);
    return "";
  }
};

export const generateProjectSVGString = (
  svgContent: string,
  fgColor: string,
  bgColor: string,
  size: number = 24,
  padding: number = 2,
  isDownload: boolean = false
): string => {
  const iconSize = size - padding * 2;
  const radius = isDownload ? size * 0.1 : size * 0.25;
  const clipId = `clip-${Math.random().toString(36).substr(2, 9)}`; // Unique clip ID

  // Parse the original SVG to extract its content
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgContent, "image/svg+xml");
  const originalSvg = doc.querySelector("svg");
  
  if (!originalSvg) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"></svg>`;
  }

  // Get the inner content of the original SVG (everything except the svg tag itself)
  const innerContent = originalSvg.innerHTML;

  // Calculate scale to fit the icon properly within the available space
  const scale = iconSize / 100; // Since original viewBox is 100x100
  
  // Create a new SVG with our desired styling, clipping path, and the original content properly scaled
  return `<svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="${size}" 
    height="${size}" 
    viewBox="0 0 ${size} ${size}"
  >
    <defs>
      <clipPath id="${clipId}">
        <rect x="${padding}" y="${padding}" width="${iconSize}" height="${iconSize}" rx="${radius * 0.2}" ry="${radius * 0.2}" />
      </clipPath>
    </defs>
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
    <g clip-path="url(#${clipId})">
      <svg x="${padding}" y="${padding}" width="${iconSize}" height="${iconSize}" viewBox="0 0 100 100">
        ${innerContent}
      </svg>
    </g>
  </svg>`.trim();
};

export const generateProjectPNG = async (
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
