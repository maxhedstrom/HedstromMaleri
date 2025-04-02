/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html", 
      "./src/**/*.{js,jsx,ts,tsx}", // Anpassa beroende på var du har dina filer
    ],
    theme: {
      extend: {
        colors: {
          primary: "#3498db", // Blå
          secondary: "#2ecc71", // Grön
          accent: "#e74c3c", // Röd
          background: "#f5f5f5", // Ljusgrå
          text: "#333", // Mörkgrå
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
          fancy: ["Poppins", "cursive"],
        },
        spacing: {
          "72": "18rem",
          "84": "21rem",
          "96": "24rem",
        },
      },
    },
    plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/typography"),
    ], // Om du vill ha tilläggsfunktioner
  };
  