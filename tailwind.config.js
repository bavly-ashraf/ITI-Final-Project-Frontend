/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        "project-main-color": "#E9672B",
      },
    },
  },


  plugins: [require("daisyui"), require("tw-elements/dist/plugin.cjs")],

};
