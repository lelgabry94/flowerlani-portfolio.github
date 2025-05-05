module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        plumblack: '#0E0B16',
        softviolet: '#A084CA',
        rosequartz: '#FFE3E3',
        dustylilac: '#BAA1C8',
        twilightpurple: '#6D6875',
        orchidpurple: '#8F5E9D',
        lavendermist: '#C3B1E1',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};