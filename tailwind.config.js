/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'boom-blue': '#00AEEF',
        'boom-yellow': '#FFD100',
        'boom-orange': '#F7941D',
        'boom-red': '#ED1C24',
        'boom-purple': '#92278F',
      },
      fontFamily: {
        baloo: ['"Baloo 2"', 'cursive'],
        fredoka: ['Fredoka', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'cartoon': '0 8px 0 rgba(0,0,0,0.2)',
        'cartoon-hover': '0 4px 0 rgba(0,0,0,0.2)',
        'glossy': 'inset 0 4px 6px rgba(255,255,255,0.4), 0 8px 15px rgba(0,0,0,0.1)',
      }
    },
  },
  plugins: [],
}
