// src/utils/userIconGenerator.ts
import { toPng } from "html-to-image";

export const loadUserSvgContent = async (path: string): Promise<string> => {
  try {
    const response = await fetch(path);
    const svgContent = await response.text();
    return svgContent;
  } catch (error) {
    console.error("Error loading user SVG:", error);
    return "";
  }
};

export const generateUserSVGString = (
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
  let innerContent = originalSvg.innerHTML;
  
  // Special handling for Croodles avatars - detect by metadata and SVG structure
  const isCroodlesAvatar = svgContent.includes('Croodles - Doodle your face') || 
                          svgContent.includes('vijay verma') ||
                          (svgContent.includes('viewBox="0 0 256 256"') && svgContent.includes('fill="#ffffff"'));
  
  if (isCroodlesAvatar) {
    console.log('Detected Croodles avatar, applying color transformations');
    console.log('fgColor:', fgColor);
    
    // Handle currentColor by converting it to an actual theme color
    let actualFgColor = fgColor;
    if (fgColor === 'currentColor') {
      // Get the current theme's foreground color from CSS custom properties
      const computedStyle = getComputedStyle(document.documentElement);
      const themeColor = computedStyle.getPropertyValue('--foreground').trim();
      
      if (themeColor) {
        // Convert hsl() to hex if needed
        if (themeColor.startsWith('hsl(')) {
          actualFgColor = '#333333'; // Fallback dark color for light themes
        } else if (themeColor.includes(' ')) {
          // Handle CSS custom property format like "222.2 84% 4.9%"
          actualFgColor = '#333333'; // Fallback dark color for light themes
        } else {
          actualFgColor = themeColor;
        }
      } else {
        // Fallback if we can't determine theme color
        actualFgColor = '#333333';
      }
    }
    
    console.log('Using actualFgColor:', actualFgColor);
    
    // Replace white fills with the foreground color for face areas
    innerContent = innerContent.replace(/fill="#ffffff"/g, `fill="${actualFgColor}"`);
    innerContent = innerContent.replace(/fill="#fff"/g, `fill="${actualFgColor}"`);
    innerContent = innerContent.replace(/fill="white"/g, `fill="${actualFgColor}"`);
    
    console.log('Applied transformations to Croodles avatar');
  }
  
  // Get the original viewBox or default dimensions
  const viewBox = originalSvg.getAttribute("viewBox") || `0 0 ${originalSvg.getAttribute("width") || 762} ${originalSvg.getAttribute("height") || 762}`;
  
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
      <svg x="${padding}" y="${padding}" width="${iconSize}" height="${iconSize}" viewBox="${viewBox}">
        ${innerContent}
      </svg>
    </g>
  </svg>`.trim();
};

export const generateUserPNG = async (
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
