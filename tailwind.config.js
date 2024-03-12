module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    screens: {
      md: { max: "850px" },
    },
    fontFamily: {
      ojuju: ["Ojuju", "sans-serif"],
      dosis: ["Dosis", "sans-serif"],
    },
    colors: {
      start: "#9d5518",
      mid: "#ff7400",
      end: "#ffbd00",
      primary: "#ffffff",
      secondary: "#000000",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
