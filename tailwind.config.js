/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/pages/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        alata: "Alata",
        alatsi: "Alatsi",
        akshar: "Akshar",
        inherit: "inherit",
      },
    },
    colors: {
      white: "#fff",
      black: "#000",
      gray: {
        "100": "#fcfcfc",
        "200": "#f2f2f2",
        "300": "#e6e6e6",
        "400": "#d7e1ea",
        "500": "#d9d9d9",
        "600": "#53acfe",
        "700": "rgba(187, 175, 175, 0.24)",
        "800": "rgba(43, 42, 42, 0.74)",
      },
      red: { "100": "#ff0b0b", "200": "#dc0a0a", "300": "#cd0000" },
      indigo: "#384fc7",
    },
    fontSize: { xs: "20px", sm: "24px", base: "26px", lg: "29px", xl: "40px" },
  },
  corePlugins: { preflight: false },
};
