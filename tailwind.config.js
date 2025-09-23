module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        chatgpt: {
          green: '#0d8f6b',
          'green-dark': '#0a7a5a',
          'green-darker': '#075a42',
          'green-darkest': '#05402f',
          'green-light': '#10a37f',
          'green-lighter': '#12b886',
        },
        custom: {
          'dark-bg': '#0a0a0a', // Very dark greyish black
          'navy-text': '#e2e8f0', // Light grey-blue for better visibility
          'navy-light': '#1a2a3a', // Lighter navy for accents
          'navy-lighter': '#2a3a4a', // Even lighter navy
          'text-secondary': '#94a3b8', // Secondary text color
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
