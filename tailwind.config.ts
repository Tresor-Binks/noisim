import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00B8C4',
          50: '#E6F9FA',
          100: '#CCF3F5',
          500: '#00B8C4',
          600: '#009AA5',
          700: '#007D87',
        },
        secondary: {
          DEFAULT: '#083A5E',
          800: '#062E4B',
          900: '#041F33',
        },
        dark: {
          DEFAULT: '#051827',
          100: '#0A2D47',
          200: '#0D3555',
        },
        accent: '#17D4E0',
        surface: '#F8FAFC',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(135deg, #051827 0%, #083A5E 50%, #00B8C4 100%)',
        'gradient-dark': 'linear-gradient(180deg, #051827 0%, #083A5E 100%)',
        'gradient-primary': 'linear-gradient(135deg, #00B8C4 0%, #17D4E0 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 40px rgba(0,184,196,0.15)',
        'hero': '0 20px 60px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
}

export default config;
