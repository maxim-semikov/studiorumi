import type { Config } from "tailwindcss";
import  { fontFamily }  from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      backgroundImage: {
        'circles': "url('/assets/images/bg-circles.jpg')",
        'light-circles': "url('/assets/images/light-circles.svg')",
        'sales-card': "url('/assets/images/bg-sales-card.svg')",
      },
      colors: {
        rumi: {
          light: '#76AC00',
          DEFAULT: '#3A5700'
        },
        bgColor: '#FDFDFD',
      },
      fontFamily: {
        sans: ['var(----font-rubik)', 'var(----font-elMessiri)', ...fontFamily.sans],
      },
      container: {
        center: true,
        padding: '0.5rem'
      },
    },
  },
  plugins: [],
};
export default config;
