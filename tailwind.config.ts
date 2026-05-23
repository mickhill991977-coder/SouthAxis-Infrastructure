import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        axis: {
          black: "#070707",
          charcoal: "#101112",
          graphite: "#1a1d20",
          panel: "#141619",
          silver: "#d7d9d9",
          muted: "#8f969b",
          gold: "#c99a2e",
          goldSoft: "#f0c45d"
        }
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(201, 154, 46, 0.35), 0 24px 80px rgba(0, 0, 0, 0.45)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        steel: "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02) 48%, rgba(201,154,46,0.14))"
      }
    }
  },
  plugins: [forms]
};

export default config;
