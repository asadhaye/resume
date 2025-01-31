module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          space: ['var(--font-space)'],
          inter: ['var(--font-inter)'],
        },
      },
    },
    plugins: [],
  }