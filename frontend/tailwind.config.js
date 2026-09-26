/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17171F",
        inksoft: "#2C2C35",
        paper: "#FBF8F3", // Warm off-white/cream
        surface: "#F3EEE1", // Slightly darker cream for alternating sections
        line: "rgba(20, 20, 28, 0.10)",
        slate: "#656573",
        navy: {
          DEFAULT: "#17171F",
          card: "#1E1E28",
        },
        orange: {
          DEFAULT: "#F2A93B",
          hover: "#D98F1F",
        },
        teal: {
          DEFAULT: "#2F6F5E",
          dim: "rgba(47, 111, 94, 0.10)",
          hover: "#24584A",
        },
        tealdim: "rgba(47, 111, 94, 0.10)",
        pink: {
          DEFAULT: "#E31C79",
          hover: "#C91468",
          dim: "rgba(227, 28, 121, 0.10)",
        },
        signal: "#F2A93B",
        signaldim: "rgba(242, 169, 59, 0.12)",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["Inter", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        card: "20px",
        pill: "40px",
      },
      keyframes: {
        "marquee-ltr": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "marquee-ltr": "marquee-ltr 22s linear infinite",
      },
    },
  },
  plugins: [],
};

