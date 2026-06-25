export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        cyan: {
          500: '#F0850B',
          600: '#d4710a',
        },
      },
    },
  },
  plugins: [],
}
