/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        nav: "#000500",
        page: "#000500",
        card: "#473BF0",
        "card-hover": "#4f5e74",
        "default-text": "#FFF",
        "blue-accent": "#0084d4",
        "blue-accent-hover": "#009fff",
        "input-color":"#ACADBC"
      }
    },
  },
  plugins: [],
};
