/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "481px",
        md: "991px",
        lg: "1200",
      },
      backgroundColor: {
        bg1: "rgba(0, 0, 0, 0.463)",
      },
      fontFamily: {
        f1: "Space Grotesk",
        f2: "Inter",
      },
      spacing: {
        sp3: "76rem",
        sp1: "33rem",
        sp2: "50%",
      },
    },
  },
  plugins: [],
};
