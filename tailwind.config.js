import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        swera: ["'Swera Demo', sans-serif"],
        roboto: ["'Roboto', sans-serif"],
      },
      colors: {
        primary: "#ff4715",
        secondary: "#1500c7",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    require("@designbycode/tailwindcss-text-stroke"),
  ],
};
