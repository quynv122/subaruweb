export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pulseZoom: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        rotateShake: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(5deg)" },
          "50%": { transform: "rotate(-5deg)" },
          "75%": { transform: "rotate(3deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        pulseShakeCombo: {
          "0%, 100%": { transform: "scale(1) rotate(0deg)" },
          "25%": { transform: "scale(1.05) rotate(5deg)" },
          "50%": { transform: "scale(1.1) rotate(-5deg)" },
          "75%": { transform: "scale(1.05) rotate(3deg)" },
        },
      },
      animation: {
        pulseZoom: "pulseZoom 1s ease-in-out infinite",
        rotateShake: "rotateShake 1s ease-in-out infinite",
        pulseShakeCombo: "pulseShakeCombo 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
