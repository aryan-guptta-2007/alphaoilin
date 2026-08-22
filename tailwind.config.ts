import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "#0F1E26",
        paper: "#FFFFFF",
        linen: "#F5F6F7",
        card: "#FFFFFF",
        rule: "#E3E6E8",
        ink: "#0F1E26",
        slate: "#56676F",
        steel: "#0F1E26",
        mist: "#F5F6F7",
        blue: "#14618E",
        moss: "#5E8C2A",
        amber: "#E5901C",
        flame: "#D9531E",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        eyebrow: ".18em",
        button: ".07em",
      },
      backgroundImage: {
        "dark-gradient": "linear-gradient(168deg, #07171E 0%, #0F2C39 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
