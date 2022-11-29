module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    fontFamily: {
      matahari: "Matahari,serif",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
