/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#212121',
      secondary: '#f5f5f5',
      moss: '#899D78',
      moss_light: '#b3d39709',
      azure: '#3185fc'
    },
    plugins: [],
  }
}