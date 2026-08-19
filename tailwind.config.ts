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
        background: "var(--background)",
        foreground: "var(--foreground)",
        ink: "#07171E",
        steel: "#0F2C39",
        slate: "#3D5B66",
        mist: "#E9EDEA",
        paper: "#F6F8F5",
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


