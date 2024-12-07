import type { Config } from "tailwindcss";

export default {
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
      fontFamily: {
        dosis: ["Dosis", "Arial", "sans-serif"],
        staatliches: ["Staatliches", "Arial", "sans-serif"],
      },
      keyframes: {
        'color-change': { 
          '0%, 100%': { color: 'black' }, 
          '50%': { color: 'white' },
        },
      },
      animation: {
        'color-change': 'color-change 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
