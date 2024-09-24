/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#E6F4F4",
        secondary: "#097B85",
        black: {
          1: "#3D3D3D",
          2: "#21242C",
          3: "#05070F"
        },
        green: {
          1: "#014751",
          2: "#014751A3",
          3: "#001325D6",
        },
      },
    },
  },
  plugins: [],
};
