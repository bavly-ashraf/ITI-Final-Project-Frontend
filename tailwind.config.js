/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "project-main-color": "#E9672B",
      },
    },
  },

  // eslint-disable-next-line no-undef
  plugins: [require("daisyui"), require("tw-elements/dist/plugin.cjs")],
};
