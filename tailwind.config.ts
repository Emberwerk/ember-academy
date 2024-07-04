import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    variants: {
      extend: {
        animation: ['hover', 'group-hover']
      }
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-14deg)' },
          '50%': { transform: 'rotate(14deg)' },
        },
        "small-wiggle": {
          '0%, 100%': { transform: 'rotate(-3deg)'},
          '50%': { transform: 'rotate(3deg)'}
        }
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out infinite',
        "small-wiggle": "small-wiggle 0.5s ease-in-out infinite"
      },
      colors: {
        'primary': '#ff8c00',
        'beginner': '#90EE90',
        'beginner-darker': '#006400',
        'intermediate': '#FFD700',
        'intermediate-darker': '#8B4513',
        'advanced': '#FFA07A',
        'advanced-darker': '#8B0000'
      },
      boxShadow: {
        "orange": '0 5px 15px rgba(255, 165, 0, 0.3)'
      }
    },
  },
  plugins: [],
} satisfies Config;
