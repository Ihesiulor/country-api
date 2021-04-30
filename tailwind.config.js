module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      2: "2rem",
      4: "4rem",
      6: "6rem",
      8: "8rem",
      10: " 10rem",
      12: " 12rem",
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    fontFamily: {
      sans: ["Nunito Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        dark: {
          "blue-100": "#2b3945", // (Dark Mode Elements)
          "blue-200": "#202c37", // (Dark Mode Background)
          white: "#ffffff", // (Dark Mode Text & Light Mode Elements)
        },
        light: {
          blue: "#111517", // (Light Mode Text)
          gray: "#fafafa", // (Light Mode Background)
          "gray-100 ": "#858585", // (Light Mode Input)
        },
      },
      spacing: {
        "25vh": "25vh",
        "25vw": "25vw",
        "30vh": "30vh",
        "30vw": "30vw",
        "35vh": "35vh",
        "35vw": "35vw",
        "40vh": "40vh",
        "40vw": "40vw",
        "45vh": "45vh",
        "45vw": "45vw",
        "50vh": "50vh",
        "50vw": "50vw",
        "55vh": "55vh",
        "55vw": "55vw",
        "60vh": "60vh",
        "60vw": "60vw",
        "65vh": "65vh",
        "65vw": "65vw",
        "70vh": "70vh",
        "70vw": "70vw",
        "75vh": "75vh",
        "75vw": "75vw",
        "80vh": "80vh",
        "80vw": "80vw",
        "85vh": "85vh",
        "85vw": "85vw",
        "100vh": "100vh",
        "100vw": "100vw",
      },
    },
  },
  variants: {
    extend: {
      outline: ["hover", "active"],
      backgroundOpacity: ["hover", "active"],
    },
  },
  plugins: [],
};
