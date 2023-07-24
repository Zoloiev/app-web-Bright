const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      backgroundImage: () => ({
        drawerPremuim: "url('/src/svgs/premuim2.svg')",
      }),

      colors: {
        bu: {
          main: "#C400C4",
          main2: "FEAB75",
          secondary: "#3D3D3D",
          orange: "#FF4800",
          red: "#FF6364",
          border: "#DDDDDD",
          darkgrey: "#959595",
          darkGrey2: "#263238",
          lightGrey: "#B8B5C6",
          lightGrey2: "#979797",
          borderColor: "#ECE9EC",
          inputColor: "#B5B5B5",
          pink: "#F56EB3",
          purple: "#C400C4",
          darkbackground: "#121212",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("mo", "@media screen and (max-width: theme('screens.sm'))");
    }),
    require("@headlessui/tailwindcss"),
  ],
};
