require('dotenv').config();
const enablePurge = process.env.ENABLE_PURGE || false;
module.exports = {
  // REMOVE THIS FLAG IF YOU ARE NOT USING A PREBUILT ANGULAR THEME 
  // LIKE THE ONE THIS PROJECT IS USING - INDIGO PINK
  important: true,
  purge: {
    enabled: enablePurge,
    content: [
      './src/**/*.html',
      './src/**/*.scss'
    ]
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
