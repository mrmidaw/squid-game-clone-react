module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'squid-pink': '#FF287E',
			},
		},
	},
	variants: {
		extend: {
			colors: {
				'squid-pink': '#FF287E'
			}
		},
	},
	plugins: [],
}
