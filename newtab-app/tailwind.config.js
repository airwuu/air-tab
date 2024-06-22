/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
			animation: {
        typing: 'typing 2s steps(20) forwards, blink .7s infinite',
				fade: 'fadeIn .5s ease-in-out forwards',
        fadeinbounceup: 'fade-in-bounceup .75s ease-in-out 0.25s 1 forwards',
        dropin: 'drop-in 0.5s ease-in-out 0.25s 1 forwards',
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
        }
			},
		},
  },
  plugins: [],
}
