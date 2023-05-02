/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "off-white": "#f1f2f5",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
