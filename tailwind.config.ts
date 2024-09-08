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
        // 必要に応じて他のカラーカスタマイズも追加できます
      },
    },
  },
  darkMode: 'class', // これを追加してダークモード切り替えをサポート
  plugins: [],
};
export default config;