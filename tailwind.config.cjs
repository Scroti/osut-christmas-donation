module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    fontFamily: {
      matahari: "Matahari,serif",
      nunito: "Nunito",
      glance: "Glance",
      poppins: 'Poppins'
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
