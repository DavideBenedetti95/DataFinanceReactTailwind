/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        text: '#fcfcfc',
        background: '#171717',
        primaryButton: '#7fb941',
        secondaryButton: '#ffffff',
        accent: '#8cc251',
      }
    },
  },
  plugins: [],
}
