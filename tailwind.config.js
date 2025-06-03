module.exports = {
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulse-slow 6s ease-in-out infinite",
        flame: "flame 0.5s infinite ease-in-out",
        "flame-slow": "flameSlow 1s infinite ease-in-out",
        "spin-slow": "spin 4s linear infinite",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "0.1" },
          "50%": { opacity: "0.4" },
        },
        flame: {
          "0%, 100%": {
            transform: "translateY(0) scaleY(1)",
            opacity: "1",
          },
          "50%": {
            transform: "translateY(10px) scaleY(1.3)",
            opacity: "0.7",
          },
        },
        flameSlow: {
          "0%, 100%": {
            transform: "translateY(0) scaleY(1)",
            opacity: "0.5",
          },
          "50%": {
            transform: "translateY(15px) scaleY(1.4)",
            opacity: "0.3",
          },
        },
      },
    },
  },
  plugins: [],
};
