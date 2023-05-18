const colors = require("./src/lib/global/tailwind-config/colors.config");
const { fontFamily } = require("./src/lib/global/tailwind-config/typography.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors,
		fontFamily,
		extend: {},
	},
	plugins: [],
};
