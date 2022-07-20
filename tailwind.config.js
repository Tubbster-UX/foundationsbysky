module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.{html,css,js}"],
  content: ["./src/**/*.{html,css,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'book-now-image': "url('../img/massage.jpg')",
      }
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ca9ef7",

          "secondary": "#d8b4fe",

          "accent": "#37CDBE",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },

  variants: {},
  plugins: [require("daisyui"), require('@tailwindcss/aspect-ratio')], 
};
