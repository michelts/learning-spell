import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "2.5rem",
      },
      boxShadow: ({ theme }) => ({
        glow: `0 0 50px ${theme("shadow-color")}`,
        glow2: `0 0 100px ${theme("shadow-color")}`,
      }),
    },
  },
  plugins: [],
} satisfies Config;
