/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4B70F5",
        secondary: "#3DC2EC",
        accent: "#402E7A",
        muted: "#4C3BCF",
        background: "#0b0f19",
        surface: "#111827",
      },
    },
  },
  plugins: [],
};