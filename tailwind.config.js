/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				bg: '#0C0A09',
				primary: '#242221',
				secondary: '#3c3a3a',
				text: '#F6F7F8'
			}
		}
	},
	plugins: []
};
