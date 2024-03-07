/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        boxShadow: {
          xs: "0px 0px  30px 0px #d175b633",
          sm: "0px 0px  30px 0px #d175b666",
          md: "0px 0px  20px 0px #d175b666",
        },
        textShadow: { ts: "0px 0px  40px #ffffff4c", ts1: "0px 0px  30px #d175b633" },
      },
    },
    plugins: [],
  }