const {
  hasSelectionSupport,
} = require("@testing-library/user-event/dist/utils");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      primary: {
        "dark-cyan": "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
      },
      neutral: {
        "dark-blue": "hsl(212, 21%, 14%)",
        "dark-grayish-blue": "hsl(228, 12%, 48%)",
        white: "hsl(0, 0%, 100%)",
      },
    },

    extend: {
      screens: {
        mobile: "375px",
      },
    },
  },
  plugins: [],
};
