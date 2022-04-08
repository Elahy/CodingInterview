module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      "9xl": ["9rem", "10rem"],
      bd: ["53px", "78px"],
    },
    fontFamily: {
      gilroy: ["Gilroy-Bold"],
    },
    extend: {
      colors: {
        "bd-green": "rgb(0, 106, 78)",
        "light-green": "rgb(230, 241, 238)",
      },
    },
  },
  plugins: [],
};
