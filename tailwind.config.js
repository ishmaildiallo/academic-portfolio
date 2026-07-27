/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
    './data/**/*.ts',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        body: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        masthead: ['"Engravers Old English BT"', '"UnifrakturMaguntia"', 'cursive'],
      },
      colors: {
        brand: {
          bg: '#FAFAF8',
          card: '#F3F2EF',
          white: '#ffffff',
          dark: '#1a1a1a',
          text: '#2d2d2d',
          muted: '#6B6B6B',
          border: '#e5e3df',
          blue: '#2563EB',
        },
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.brand.text'),
            fontSize: '1rem',
            lineHeight: '1.85',
            a: {
              color: theme('colors.brand.blue'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            h1: { fontFamily: 'Georgia, serif', color: theme('colors.brand.dark') },
            h2: { fontFamily: 'Georgia, serif', color: theme('colors.brand.dark') },
            h3: { fontFamily: 'Georgia, serif', color: theme('colors.brand.dark') },
            blockquote: {
              borderLeftColor: theme('colors.gray.300'),
              fontStyle: 'italic',
              color: theme('colors.gray.600'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
