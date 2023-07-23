/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      
      },
      fontFamily: {
        'delagothic': 'Dela Gothic One',
        'adamcg': 'AdamCG',
      }
    },
  },
  plugins: [],
}
