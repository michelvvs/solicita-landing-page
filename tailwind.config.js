/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta da marca Solicita
        brand: {
          dark: '#29235C',
          primary: '#2d2e83',
          accent: '#1d71b8',
        },
        // Neutros do sistema visual (papel + tinta, com leve viés azulado)
        paper: '#F6F5F1',
        // Cores análogas ao azul-índigo da marca (violeta ← índigo → azul → ciano)
        violet: { DEFAULT: '#6D4FE0', soft: '#ECE8FC' },
        aqua: { DEFAULT: '#17AFCB', soft: '#DAF4F9' },
        ice: '#E3F1FB',
        lilac: '#F0EDFC',
        sheet: '#FFFFFF',
        ink: '#17163A',
        mute: '#5B5A76',
        rule: '#DCDAE6',
        tint: '#E9F0F8',
        // Severidade dos achados do Dossiê 360°
        sev: {
          critico: '#B42318',
          alto: '#C2570C',
          medio: '#A16207',
          baixo: '#2F7D4F',
        },
      },
      fontFamily: {
        display: ['Newsreader', 'Georgia', 'serif'],
        sans: ['"Public Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        pan: { '0%,8%': { transform: 'translateX(0)' }, '50%,58%': { transform: 'translateX(var(--pan, -40%))' }, '100%': { transform: 'translateX(0)' } },
        draw: { to: { strokeDashoffset: '0' } },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        pan: 'pan 22s ease-in-out infinite',
      },
      maxWidth: {
        page: '1200px',
      },
      borderRadius: {
        DEFAULT: '4px',
      },
    },
  },
  plugins: [],
}
