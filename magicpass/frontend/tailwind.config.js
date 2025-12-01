/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        accent: "#ec4899",
        background: "#ffffff",
        muted: "#f4f4f5",
        "muted-foreground": "#6b7280",
        border: "#e4e4e7",
        card: "#ffffff",
      },
    },
  },
  plugins: [],
};
