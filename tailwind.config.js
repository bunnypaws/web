/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-inter)"],
				mono: ["var(--font-ibm-plex-mono)"],
			},
		},
	},
	plugins: [],
};
