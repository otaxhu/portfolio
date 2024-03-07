import daisyUIPlugin from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyUIPlugin],
  daisyui: {
    themes: [
      "black"
    ],
  },
};
