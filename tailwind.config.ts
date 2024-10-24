import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,md}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(-10.0deg)" },
          "20%": { transform: "rotate(12.0deg)" },
          "30%": { transform: "rotate(-10.0deg)" },
          "40%": { transform: "rotate(9.0deg)" },
          "50%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        wave: "wave 1.2s ease infinite",
      },
    },
  },
  plugins: [typography],
} satisfies Config;
