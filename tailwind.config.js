/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'clw-blue': '#30358A',
        'clw-navy': '#171B4D',
        'clw-blue-2': '#4A55B5',
        'clw-gold': '#D4A72C',
        'clw-bg': '#F5F6FC',
        'clw-dark': '#1F2937',
        'clw-muted': '#64748B',
      },
      fontFamily: {
        heading: ['"Manrope"', 'sans-serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      boxShadow: {
        card: '0 4px 24px -4px rgba(23,27,77,0.08)',
        'card-hover': '0 16px 40px -8px rgba(23,27,77,0.18)',
      },
      backgroundImage: {
        'route-dashes':
          'repeating-linear-gradient(90deg, rgba(212,167,44,0.6) 0 10px, transparent 10px 20px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'pulse-soft': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(48,53,138,0.35)' },
          '50%': { boxShadow: '0 0 0 12px rgba(48,53,138,0)' },
        },
        dash: {
          to: { strokeDashoffset: 0 },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2.4s ease-out infinite',
      },
    },
  },
  plugins: [],
}
