/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'project-main-color':'#E9672B'
      }
    },
  },
  // plugins: [],
  plugins: [require("daisyui")],
};
