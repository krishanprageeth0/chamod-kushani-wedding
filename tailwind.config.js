/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          950: '#0e0305',
          900: '#1b060b',
          800: '#350a14',
          700: '#520e1e',
          600: '#6f1328',
          500: '#85182a', // Deep Crimson (Main)
          400: '#a8243c',
          300: '#ca3b55',
        },
        palette: {
          crimson: '#85182a',
          coral: '#e25f38',
          fuchsia: '#c71f5c',
          sunset: '#e8829c',
          rose: '#c82d56',
        },
        gold: {
          light: '#fdf3c7',
          DEFAULT: '#d4af37',
          shimmer: '#f5d77f',
          dark: '#936916',
          antique: '#b8860b',
        },
        ivory: {
          DEFAULT: '#fdfbf7',
          dark: '#e8dfd1',
          muted: '#a3988c',
        }
      },
      fontFamily: {
        mea: ['"Mea Culpa"', 'cursive'],
        cinzel: ['"Cinzel Decorative"', '"Cinzel"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      animation: {
        'sparkle': 'sparkle 3s ease-in-out infinite',
        'leaf-sway': 'leafSway 6s ease-in-out infinite alternate',
        'float-slow': 'floatSlow 4s ease-in-out infinite alternate',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0.5)' },
          '50%': { opacity: '0.9', transform: 'scale(1.2)' },
        },
        leafSway: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '100%': { transform: 'rotate(4deg) scale(1.03)' },
        },
        floatSlow: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.4))' },
          '50%': { filter: 'drop-shadow(0 0 25px rgba(212, 175, 55, 0.8))' },
        },
      }
    },
  },
  plugins: [],
}
