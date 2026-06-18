import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F8F5F0",
          deep: "#F1EBE0",
          cream: "#FBF8F3",
        },
        gold: {
          DEFAULT: "#C8A97E",
          deep: "#B08D57",
          soft: "#D8C3A2",
        },
        ink: {
          DEFAULT: "#2D2D2D",
          soft: "#5A544C",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        garamond: ["var(--font-garamond)", "serif"],
        arabic: ["var(--font-amiri)", "serif"],
        "arabic-display": ["var(--font-aref)", "var(--font-amiri)", "serif"],
        script: ["var(--font-pinyon)", "cursive"],
      },
      boxShadow: {
        card: "0 40px 80px -30px rgba(120,98,64,.4), 0 4px 18px rgba(120,98,64,.08)",
        seal: "0 6px 14px rgba(90,60,25,.45), inset 0 2px 6px rgba(255,235,200,.4)",
        gold: "0 14px 30px rgba(176,141,87,.4)",
      },
      keyframes: {
        rayspin: { to: { transform: "translateX(-50%) rotate(360deg)" } },
        floatUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "10%": { opacity: ".7" },
          "90%": { opacity: ".5" },
          "100%": { transform: "translateY(-110vh) translateX(40px)", opacity: "0" },
        },
        sway1: {
          "0%,100%": { transform: "rotate(-4deg) translateY(0)" },
          "50%": { transform: "rotate(3deg) translateY(-14px)" },
        },
        sway2: {
          "0%,100%": { transform: "rotate(5deg) translateY(0)" },
          "50%": { transform: "rotate(-3deg) translateY(16px)" },
        },
      },
      animation: {
        rayspin: "rayspin 60s linear infinite",
        floatUp: "floatUp linear infinite",
        sway1: "sway1 12s ease-in-out infinite",
        sway2: "sway2 15s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
