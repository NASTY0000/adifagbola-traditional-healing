module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          900: "#1a3c28",
        },
        gold: {
          500: "#f4d068",
        },
        cream: {
          50: "#faf8f5",
        },
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "'Segoe UI'", "Roboto", "'Helvetica Neue'", "Arial"],
      },
    },
  },
  plugins: [],
};
