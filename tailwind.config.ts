import type { Config } from 'tailwindcss';

// This Tailwind config centralizes design tokens so colors, fonts, spacing, and animation stay consistent across the site.
// WHY: Treating the design system as configuration keeps components lean and avoids magic values scattered through JSX.
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#090909',
        ink: '#F2EFE8',
        muted: '#A19A90',
        line: '#242424',
        panel: '#111111',
        paper: '#171717',
        card: '#141414',
        accent: '#E5D0A8',
        accentSoft: '#7F7258'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-lora)', 'serif']
      },
      letterSpacing: {
        button: '0.02em',
        meta: '0.08em',
        section: '0.22em',
        eyebrow: '0.28em',
        role: '0.26em'
      },
      borderRadius: {
        panel: '1.5rem',
        hero: '2rem',
        frame: '1.75rem',
        organic: '2.5rem'
      },
      boxShadow: {
        editorial: '0 24px 80px rgba(0, 0, 0, 0.34)'
      },
      backgroundImage: {
        haze:
          'radial-gradient(circle at top left, rgba(229, 208, 168, 0.12), transparent 28%), radial-gradient(circle at bottom right, rgba(229, 208, 168, 0.08), transparent 24%)'
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': {
            transform: 'scale(0.95)',
            opacity: '0.65'
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '1'
          }
        }
      },
      animation: {
        'pulse-dot': 'pulseDot 1.8s ease-in-out infinite'
      },
      maxWidth: {
        content: '86rem'
      }
    }
  },
  plugins: []
};

export default config;
