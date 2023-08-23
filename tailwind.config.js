/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*", "./public/*"],
  theme: {
    extend: {
      backgroundColor: {
        custom: "rgba(255 ,255 ,255 , 0.15)",
      },
      blur: {
        sm: "blur(4px)",
      },
    },
  },
  plugins: [],
};
