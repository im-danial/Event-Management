/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontSize: {
        "2xs": "10px",
        "3xs": "8px",
      },
      fontFamily: {
        Roboto: "Roboto-Regular",
        Sarabun: "Sarabun-Regular",
        Inter: "Inter",
      },
      screens: {
        ll: "1440px",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
