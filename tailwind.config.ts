import type { Config } from "tailwindcss";

export default {
  content:  [
      './src/**/*.{html,js,jsx,ts,tsx}', // Adjust paths as per your project structure
      './public/index.html',
    ],
  
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
