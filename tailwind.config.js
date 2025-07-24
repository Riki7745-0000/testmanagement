/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#165DFF',
        secondary: '#0FC6C2',
        accent: '#722ED1',
        success: '#00B42A',
        warning: '#FF7D00',
        danger: '#F53F3F',
        info: '#666666',
        'light-gray': '#F5F7FA',
        'medium-gray': '#E5E6EB',
      },
      fontFamily: {
        song: ['SimSun', '宋体', 'serif'],
      },
    },
  },
  plugins: [],
}