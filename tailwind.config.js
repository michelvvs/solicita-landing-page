/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#29235C',        // Cor 1: #29235C
          primary: '#2d2e83',     // Cor 2: #2d2e83
          accent: '#1d71b8',      // Cor 3: #1d71b8
          light: '#eef6fc',
          muted: '#8b93bb',
          surface: '#1e1948',
          card: '#161338',
          highlight: '#38bdf8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 35px -5px rgba(29, 113, 184, 0.35)',
        'glow-primary': '0 0 35px -5px rgba(45, 46, 131, 0.45)',
        'glow-accent': '0 0 25px rgba(29, 113, 184, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.92', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
