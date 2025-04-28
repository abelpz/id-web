/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#E6EEF7',
					100: '#CCDDEF',
					200: '#99BBDF',
					300: '#6699CF',
					400: '#3377BF',
					500: '#00509D',
					600: '#003F88',
					700: '#003366',
					800: '#002244',
					900: '#00296B',
				},
				accent: {
					50: '#FFFBEB',
					100: '#FFF7D6',
					200: '#FFEFAD',
					300: '#FFE785',
					400: '#FFDF5C',
					500: '#FFD500',
					600: '#FDC500',
					700: '#CC9E00',
					800: '#997700',
					900: '#664F00',
				},
				earth: {
					50: '#FAFAF9',
					100: '#F5F5F4',
					200: '#E7E5E4',
					300: '#D6D3D1',
					400: '#A8A29E',
					500: '#78716C',
					600: '#57534E',
					700: '#44403C',
					800: '#292524',
					900: '#1C1917',
				}
			},
			fontFamily: {
				serif: ['Crimson Pro', 'Georgia', 'serif'],
				sans: ['Source Sans Pro', 'system-ui', 'sans-serif'],
			},
			spacing: {
				'128': '32rem',
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-up': 'slideUp 0.5s ease-in-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
		},
	},
	plugins: [],
}