/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070915",
        panel: "rgba(14, 18, 38, 0.72)",
        line: "rgba(151, 164, 255, 0.16)",
        cyan: "#45d8ff",
        violet: "#9d7cff",
        pink: "#ff68d4",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "SFMono-Regular", "Consolas", "monospace"],
      },
      boxShadow: {
        glow: "0 0 50px rgba(69, 216, 255, 0.22)",
        depth: "0 24px 80px rgba(0, 0, 0, 0.38)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at top left, rgba(69, 216, 255, 0.18), transparent 34%), radial-gradient(circle at 85% 15%, rgba(157, 124, 255, 0.2), transparent 32%), radial-gradient(circle at 50% 90%, rgba(255, 104, 212, 0.12), transparent 34%)",
      },
    },
  },
  plugins: [],
};
