/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // minWidth: {
    //   '0': '0',
    //   '1/4': '25%',
    //   '1/2': '50%',
    //   '3/4': '75%',
    //   'full': '100%',
    // },
    // minHeight: {
    //   '0': '0',
    //   '1/4': '25%',
    //   '1/2': '50%',
    //   '3/4': '75%',
    //   'full': '100%',
    // },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}

