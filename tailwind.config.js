/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // This ensures 100vw includes scrollbar width
      width: {
        screen: '100vw',
      },
      // This removes default max-width from containers
      container: {
        center: true,
        padding: '0rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '100%',
          '2xl': '100%',
        },
      },
    },
  },
  corePlugins: {
    // Disable container plugin if you're not using it
    container: false,
  },
  plugins: [],
}