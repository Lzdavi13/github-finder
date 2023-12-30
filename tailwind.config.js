/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        f1: "Space Grotesk",
        f2: "Inter",
      },
      spacing: {
        1: "76rem",
        sp1: "30rem",
      },
    },
  },
  plugins: [],
};
