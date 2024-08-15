/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      mobile: "375px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    fontFamily: {
      "RedHatText-400": "var(--red-hat-text-regular)",
      "RedHatText-600": "var(--red-hat-text-semibold)",
      "RedHatText-700": "var(--red-hat-text-bold)",
    },
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
      },
      colors: {
        red: "hsl(var(--red))",
        green: "hsl(var(--green))",
        rose: {
          50: "hsl(var(--rose-50))",
          100: "hsl(var(--rose-100))",
          300: "hsl(var(--rose-300))",
          400: "hsl(var(--rose-400))",
          500: "hsl(var(--rose-500))",
          900: "hsl(var(--rose-900))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
    },
  },
  plugins: [],
};
