import defaultTheme from "tailwindcss/defaultTheme";

// System design fonts
const systemFontFamily = {
	heading: ["Raleway"],
	body: ["Comfortaa"],
};

// Font using in compiled css
const fontFamily = Object.keys(systemFontFamily).reduce((acc, key) => {
	acc[key] = [...systemFontFamily[key], ...defaultTheme.fontFamily.sans];
	return acc;
}, {});

export { fontFamily };
