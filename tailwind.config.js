/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#6366f1', 
          light: '#818cf8',
          dark: '#4f46e5',
        },
        dark: {
          bg: '#050a14',      
          card: 'rgba(11, 19, 43, 0.65)',
          border: 'rgba(96, 165, 250, 0.1)' 
        },
        light: {
          bg: '#f0f4ff',    
          card: 'rgba(255, 255, 255, 0.7)',
          border: 'rgba(99, 102, 241, 0.1)'
        }
      },
    },
  },
  plugins: [],
}