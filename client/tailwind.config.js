/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mbMini: "290px",
        mbXSmall: "480px",
        mbMedSmall: "500px",
        mbSmall: "600px",
        mbMedium: "800px",
        laptop: "1000px",
        tbPortrait: "1200px",
        tbLandscape: "1600px",
        Desktop: "2000px",
        lgDesktop: "2400px",
      },
    },
  },

  plugins: [],
};
