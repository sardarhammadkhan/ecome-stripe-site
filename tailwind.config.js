/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
    images: {
        domains: ['https://i.ibb.co'],
    },
    theme: {
      extends:{

      }
    },
    theme: {
    extend: {},
  },
    plugins: [],
    variants: {
      extend: {
          display: ["group-hover"],
      },
  },
  }
  