/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cardBackground": "#272a2e",
        "background": "#1b1f24"
      }
    },
  },
  plugins: [],
}

