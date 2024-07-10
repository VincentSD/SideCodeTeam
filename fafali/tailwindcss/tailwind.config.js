/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        primary: "#003E52",
        secondary: "#243748",
        accent: "#4b749f",
        tertiary: "#f8f8ff",
        extra: "#EE7623",
      },

      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia", "Cambria"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
        ],
        // Add your custom fonts here
        riftB: ["Rift-Bold", "sans-serif"], // Fallback to sans-serif if the font fails to load
        riftL: ["Rift-Light", "sans-serif"], // Fallback to sans-serif if the font fails to load
        riftM: ["Rift-Medium", "sans-serif"], // Fallback to sans-serif if the font fails to load
        riftR: ["Rift-Regular", "sans-serif"], // Fallback to sans-serif if the font fails to load
      },
      
    },
  },
  plugins: [],
}

