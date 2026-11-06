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
