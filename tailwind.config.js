/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require("@tailwindcss/typography"), // Assuming you have this plugin already
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7856ff",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.5rem" }],
        base: ["1rem", { lineHeight: "1.75rem" }],
        lg: ["1.125rem", { lineHeight: "2rem" }],
        xl: ["1.25rem", { lineHeight: "2rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["2rem", { lineHeight: "2.5rem" }],
        "4xl": ["2.5rem", { lineHeight: "3rem" }],
        "5xl": ["3rem", { lineHeight: "3.5rem" }],
        "6xl": ["4rem", { lineHeight: "4.5rem" }],
      },
      spacing: {
        7: "1.75rem",
        14: "3.5rem",
        18: "4.5rem",
        25: "6.25rem",
        26: "6.5rem",
        28: "7rem",
        36: "9rem",
        46: "11.5rem",
        60: "15rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
      },
      borderRadius: {
        xl: "0.75rem",
      },
      boxShadow: {
        card: "0px 18px 40px -6px rgba(16, 24, 40, 0.1)",
      },
    },
  },
  plugins: [],
};
