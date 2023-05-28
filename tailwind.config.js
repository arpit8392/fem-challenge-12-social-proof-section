/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				veryDarkMagenta: 'hsl(300, 43%, 22%)',
				softPink: 'hsl(333, 80%, 67%)',
				darkGrayishMagenta: 'hsl(303, 10%, 53%)',
				lightGrayishMagenta: 'hsl(300, 24%, 96%)',
			},
			fontFamily: {
				sans: ['var(--font-league-spartan)'],
			},
			backgroundImage: {
				topDesktop: 'url("/images/bg-pattern-top-desktop.svg")',
				bottomDesktop: 'url("/images/bg-pattern-bottom-desktop.svg")',
				topMobile: 'url("/images/bg-pattern-top-mobile.svg")',
				bottomMobile: 'url("/images/bg-pattern-bottom-mobile.svg")',
			},
		},
	},
	plugins: [],
}
