/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', "monospace"],
        sans: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
      },
      colors: {
        brand: "#E05B26",
        "brand-dark": "#c44d1e",
      },
    },
  },
  plugins: [],
};
