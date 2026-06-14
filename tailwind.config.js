/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,html}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        ivory: '#FAFAF7',
        surface: '#FFFFFF',
        border: '#EFF4EF',
        sage: '#3E6B52',
        mint: '#8FBF9F',
        ink: '#1F2A24',
        muted: '#6B7C72',
        terminal: {
          bg: '#0D1410',
          surface: '#16201A',
          accent: '#7CFFB2',
          text: '#E8F5EC',
          muted: '#9BB5A8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(143, 191, 159, 0.4), 0 8px 32px rgba(62, 107, 82, 0.12)',
        'glow-dark': '0 0 0 1px rgba(124, 255, 178, 0.35), 0 8px 32px rgba(124, 255, 178, 0.08)',
        lift: '0 12px 40px rgba(31, 42, 36, 0.1)',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [],
};
