interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "w-auto h-8" }: LogoProps) => (
  <svg
    id="Quirk_Logo"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 660 180"
    className={className}
  >
    <defs>
      <style>
        {`
          .logo-text {
            font-size: 150px;
            font-family: ProximaNova-Semibold, "Proxima Nova", system-ui, -apple-system, sans-serif;
            font-weight: 600;
          }
          .text-theme {
            fill: currentColor;
          }
          .stroke-gradient-1 { stroke: #22c55e; }
          .stroke-gradient-2 { stroke: #84cc16; }
          .stroke-gradient-3 { stroke: #facc15; }
          .stroke-gradient-4 { stroke: #eab308; }
          .gradient-fill {
            fill: #f7ee47;
          }
          .path-common {
            stroke-miterlimit: 10;
            stroke-width: 10px;
          }
        `}
      </style>
      <linearGradient
        id="logo-gradient"
        x1="22.95"
        y1="86.43"
        x2="39.58"
        y2="86.43"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#0fd650" />
        <stop offset="1" stopColor="#f7ee47" />
      </linearGradient>
    </defs>

    <path
      className="path-common stroke-gradient-1"
      style={{ fill: "url(#logo-gradient)" }}
      d="M29.25,51.53l10.33-10.1H31.37l-5.21,5.09a12.17,12.17,0,0,0,0,16.47l4.46,4.37a4.78,4.78,0,0,1,0,6.47l-4.46,4.36a12.17,12.17,0,0,0,0,16.47L30.62,99a4.77,4.77,0,0,1,0,6.46l-4.46,4.37a12.17,12.17,0,0,0,0,16.47l5.21,5.1h8.21l-10.33-10.1a4.77,4.77,0,0,1,0-6.46l4.47-4.37a12.21,12.21,0,0,0,0-16.48l-4.47-4.36a4.77,4.77,0,0,1,0-6.46l4.47-4.37a12.21,12.21,0,0,0,0-16.48L29.25,58a4.77,4.77,0,0,1,0-6.46Z"
    />

    <path
      className="path-common stroke-gradient-2 gradient-fill"
      d="M74.34,86.43A4.51,4.51,0,0,1,75.6,83.2l4.47-4.37a12.2,12.2,0,0,0,0-16.47,4.52,4.52,0,0,1-1.26-3.23V41.43h-5v17.7A11.47,11.47,0,0,0,77,67.36a4.78,4.78,0,0,1,0,6.47l-4.46,4.36a12.17,12.17,0,0,0,0,16.47L77,99a4.77,4.77,0,0,1,0,6.46l-4.46,4.37a12.17,12.17,0,0,0,0,16.47l5.21,5.1h8.21L75.6,121.33a4.77,4.77,0,0,1,0-6.46l4.47-4.37a12.2,12.2,0,0,0,0-16.47L75.6,89.66A4.51,4.51,0,0,1,74.34,86.43Z"
    />

    <path
      className="path-common stroke-gradient-3 gradient-fill"
      d="M129.62,102.27A11.48,11.48,0,0,0,126.41,94l0,0a4.5,4.5,0,0,1-1.22-3.19V41.43h-5V90.79a11.51,11.51,0,0,0,3.2,8.23l0,.06a4.76,4.76,0,0,1,0,6.41l-4.47,4.37a12.2,12.2,0,0,0,0,16.47l5.22,5.1h8.2L122,121.33a4.77,4.77,0,0,1,0-6.46l4.46-4.37A11.48,11.48,0,0,0,129.62,102.27Z"
    />

    <rect
      className="path-common stroke-gradient-4 gradient-fill"
      x="161.99"
      y="41.43"
      width="5.04"
      height="90"
    />

    <text className="logo-text text-theme" transform="translate(187.95 136.76)">
      QUIRK
    </text>
  </svg>
);

export default Logo;
