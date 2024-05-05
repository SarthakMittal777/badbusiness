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
        lgPortrait: "1430px",
        tbLandscape: "1600px",
        Desktop: "2000px",
        smDesktop: "1862px",
        lgDesktop: "2400px",
      },
      "animation": {
        "moveLeftRight": "moveLeftRight 5s linear infinite"
      }
    },
    "variants": {
      "extend": {
        "animation": ["responsive", "hover", "focus"]
      }
    },
  },

  plugins: [],
};
