/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eefcf1',
          100: '#d7f7de',
          200: '#b2efc0',
          300: '#7ce296',
          400: '#41cb68',
          500: '#189B3F', // Primary green accent requested by prompt
          600: '#108032',
          700: '#10652a',
          800: '#115024',
          900: '#104220',
          950: '#04240f',
          neon: '#00ff66',
          glow: '#189B3F80',
        },
        dark: {
          bg: '#080a0c',
          card: '#0d1117',
          cardHover: '#131924',
          border: 'rgba(24, 155, 63, 0.2)',
          muted: '#8b949e',
          text: '#e6edf3'
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
        'matrix-scan': 'matrixScan 8s linear infinite',
        'border-beam': 'borderBeam 4s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        matrixScan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        borderBeam: {
          '100%': { offsetDistance: '100%' },
        }
      },
      boxShadow: {
        'neon': '0 0 20px rgba(24, 155, 63, 0.35), 0 0 40px rgba(24, 155, 63, 0.15)',
        'neon-strong': '0 0 25px rgba(24, 155, 63, 0.6), 0 0 50px rgba(0, 255, 102, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'radial-glow': 'radial-gradient(circle at center, rgba(24, 155, 63, 0.15) 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
}
