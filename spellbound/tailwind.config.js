module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "10xl": ["10rem", "10rem"],
      bd: ["53px", "78px"],
    },
    fontFamily: {
      gilroy: ["Gilroy-Bold-Normal-6yn5P2uT"],
    },
    extend: {
      colors: {
        "bd-green": "rgb(0, 106, 78)",
        "light-green": "rgb(230, 241, 238)",
        "black-rgba": "rgba(0, 0, 0, 0.7)",
      },
      animmation: {
        dim: "dim 4s infinite",
      },
      keyframes: {
        dim: {
          "0%": {
            opacity: 1.0,
          },
          "100%": {
            opacity: 0.0,
          },
        },
      },
    },
  },
  plugins: [],
};
