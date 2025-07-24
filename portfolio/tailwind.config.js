/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        customBlue: 'rgb(40 141 193)',
        customBlue1: 'rgb(0 110 165)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        typing: {
          '0%': { width: '0ch' },
          '100%': { width: '9ch' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
        'spin-slow': 'spinSlow 5s linear infinite',
        typing: 'typing 3s steps(9) forwards',
        blink: 'blink 0.75s step-end infinite',
      },
      fontFamily: {
        fascinate: ['"Fascinate Inline"', 'cursive'],
        edu: ['"Edu AU VIC WA NT Arrows"', 'cursive'],
        leckerli: ['"Leckerli One"', 'cursive'],
        emilys: ['"Emilys Candy"', 'serif'],
        inter: ['Inter', 'sans-serif'],
        limelight: ['"Limelight"', 'cursive'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.transform-style-preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.perspective': {
          perspective: '1000px',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
      });
    },
  ],
}

