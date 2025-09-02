/** @type {import('tailwindcss').Config} */
const { iconifyPlugin } = require('@iconify/tailwind');

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      keyframes: {
        subtleMove: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
        glowing: {
          '0%': { 'background-position': '0% 0%' },
          '50%': { 'background-position': '400% 0%' },
          '100%': { 'background-position': '0% 0%' },
        },
      },
      animation: {
        subtleMove: 'subtleMove 6s ease-in-out infinite',
        glowing: 'glowing 20s linear infinite',
      },
      boxShadow: {
        'lime-glow': '0 0 8px 3px rgba(189, 255, 0, 0.7)',
      },
      backgroundSize: {
        '600%': '600% auto',
      },
      fontFamily: {
        'sf-pro' : ['var(--font-sf-pro)', 'sans-serif'],
      },
    },
  },
  plugins: [iconifyPlugin()],
};
