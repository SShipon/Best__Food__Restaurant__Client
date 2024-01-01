/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundColor: {
      customRed: '#fff0000',
      customGreen: '#00ff00',
    },
    colors: theme => ({
      red: '#ff0000',
      green: '#00ff00',
      blue: {
        light: '#0000f0',
        DEFAULT: '#0000fa',
        dark: '#0000ff',
      },
    }),
  },
  plugins: [require("daisyui")],
}

