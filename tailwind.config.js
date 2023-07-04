/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        contrail: ['var(--font-contrail)'],
        sans: ['var(--font-inter)'],
      },
      animation: {
        'slide-right': '2s ease-in',
      },
      keyframes: {
        'slide-right': {
          '0%': { transform: 'translateX(-200%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
    },
  },
  plugins: [],
}
