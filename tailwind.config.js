/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/components/**/*.{js,ts,jsx,tsx}", // Add ShadCN components
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sd: "667px",
      },
      colors: {
        primary: "#007AFF",
      },
      fontFamily: {
        primary: ["Merriweather", "serif"],
        secondary: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
