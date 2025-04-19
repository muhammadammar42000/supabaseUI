import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    function ({ addUtilities}:any) {
      addUtilities({
        '.scroll-hide': {
          'scrollbar-width': 'none', // For Firefox
          '-ms-overflow-style': 'none', // For Internet Explorer
        },
        '.scroll-hide::-webkit-scrollbar': {
          display: 'none', // For Chrome, Safari, and Edge
        },
      });
    },
  ],
};
export default config;
