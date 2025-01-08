/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      screens: {
        xs: '320px',      // Extra small devices (small smartphones)
        sm: '576px',      // Small devices (larger smartphones)
        md: '768px',      // Medium devices (tablets)
        lg: '1024px',     // Large devices (laptops)
        xl: '1280px',     // Extra large devices (desktops)
        '2xl': '1536px',  // 2X large devices (large desktops)
        '3xl': '1920px',  // Custom large monitor breakpoint
        // header,title . lg  desc- md some-sl,xl
      },
      colors: {
        primary: '#393A5A',
        secondary: '#22222E',
        eg: '#706F8E',
        eg2s: '#ADA9BA',
        egw: '#E9E9E9',
      },
    },
  },
  plugins: [
   
  ],
};
