/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
			animation: {
        typing: 'typing 1.5s steps(20) forwards, blink .7s infinite',
				fade: 'fadeIn .5s ease-in-out forwards',
        fadeinbounceup: 'fade-in-bounceup .75s ease-in-out 0.25s 1 forwards',
        dropin: 'drop-in 0.5s ease-in-out 0.25s 1 forwards',
        wiggle: 'wiggle 30s ease-in-out infinite',
        // Stars
        'twinkle-1': 'twinkle 10s ease-in -5s infinite alternate, layer-1 244s linear infinite',
        'twinkle-2': 'twinkle 3s ease-in -3s infinite alternate, layer-2 249s linear infinite',
        'twinkle-3': 'twinkle 3.5s ease-in infinite alternate, layer-3 249s linear infinite',
        'twinkle-4': 'twinkle 4s ease-in -2s infinite alternate, layer-4 140s linear infinite',
        'twinkle-5': 'twinkle 5.5s ease-in infinite alternate, layer-5 143s linear infinite',
        'shooting-star': 'shooting-star 500ms linear 3s infinite',
      },

			keyframes: {
				"fadeIn": {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
        "fade-in-bounceup": {
            "0%": {
                opacity: 0,
                transform: "translate3d(0%, 100%, 0)",
            },
            "43%": {
                opacity: 0.3,
                transform: "translate3d(0%, 0%, 0)",
            },
            "66%": {
                opacity: 0.5,
                transform: "translate3d(0%, 5%, 0)",
            },
            "100%": {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
            },
        },
        "drop-in": {
            "0%": {
                opacity: 0,
                transform: "scale(0)",
                animationTimingFunction: "cubic-bezier(0.34, 1.61, 0.7, 1)",
            },
            "100%": {
                opacity: 1,
                transform: "scale(1)",
            },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        },
        // Stars
        twinkle: {
          'from': { opacity: '0.3' },
          'to': { opacity: '1' },
        },
        'layer-1': {
          'from': { transform: 'translate3d(0, 0, 0)' },
          'to': { transform: 'translate3d(-689px, 0, 0)' },
        },
        'layer-2': {
          'from': { transform: 'translate3d(0, 0, 0)' },
          'to': { transform: 'translate3d(-699px, 0, 0)' },
        },
        'layer-3': {
          'from': { transform: 'translate3d(0, 0, 0)' },
          'to': { transform: 'translate3d(-699px, 0, 0)' },
        },
        'layer-4': {
          'from': { transform: 'translate3d(0, 0, 0)' },
          'to': { transform: 'translate3d(-480px, 0, 0)' },
        },
        'layer-5': {
          'from': { transform: 'translate3d(0, 0, 0)' },
          'to': { transform: 'translate3d(-486px, 0, 0)' },
        },
        'shooting-star': {
          '0%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
          '25%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translate3d(-270px, 180px, 0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(4deg) scale(1.2)' },
        }
			},
      backgroundImage: {
        'layer-1': "url('http://imgur.com/9beLKl9.png')",
        'layer-2': "url('http://imgur.com/46MRYFa.png')",
        'layer-3': "url('http://imgur.com/46MRYFa.png')",
        'layer-4': "url('http://imgur.com/BqkETyl.png')",
        'layer-5': "url('http://imgur.com/x1GB77K.png')",
        'shooting-star': "url('http://imgur.com/ilhrli3.png')",
      },
		},
  },
  plugins: [],
}
