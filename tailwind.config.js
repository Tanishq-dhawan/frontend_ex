/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#121927',
        light: '#fefcf3',
        pink: {
          500: '#f24b7a',
          600: '#d83d65'
        },
        yellow: {
          400: '#ffb838'
        },
        blue: {
          500: '#236af4'
        }
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
