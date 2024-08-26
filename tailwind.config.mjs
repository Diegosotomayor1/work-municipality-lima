/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1360px",
      "3xl": "1440px",
      "4xl": "1600px",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
