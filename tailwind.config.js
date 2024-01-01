const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Rubik", "system-ui", "sans"],
      monospace: ["Chivo Mono", "monospace"],
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.yellow,
      blue: colors.blue,
      green: colors.green,
      orange: colors.orange,
      purple: colors.purple,
      pink: colors.pink,
    },
    extend: {
      colors: {
        bg: "#1c1410",
        "fun-gray-light": "#b2bbcf",
        "fun-gray": "#7b89a8",
        "fun-gray-medium": "#767c85",
        "fun-gray-darker": "#2a2a2c",
        "fun-gray-dark": "#1F1F20",
        "fun-gray-darkest": "#141414",
        "fun-pink": "#7fd1eb",
        "fun-pink-darker": "#0f1b1f",
        "fun-pink-darkest": "#080f12",
        "fun-pink-dark": "#246c82",
        "fun-pink-light": "#a4e1f5",
      },
      rotate: {
        360: "360deg",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeInAndBounce: "fadeIn 3s ease-out",
      },
      willChange: {
        projectCard: "border-color, opacity, transform",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};