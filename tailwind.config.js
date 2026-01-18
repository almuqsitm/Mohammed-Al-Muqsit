/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: "#fafafa",
        secondary: "#f4f4f5",
        accent: "#6366f1", // Indigo
        dark: "#18181b",
      }
    },
  },
  plugins: [],
}
