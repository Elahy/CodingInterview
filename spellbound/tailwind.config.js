module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      "9xl": ["9rem", "10rem"],
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
