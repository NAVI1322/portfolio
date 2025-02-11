/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
    ],
    theme: {
    	container: {
    		center: true,
    		padding: '2rem',
    		screens: {
    			'2xl': '1400px'
    		}
    	},
    	extend: {
    		fontFamily: {
    			hero: [
    				'Blanka',
    				'cursive'
    			],
    			display: [
    				'Bruno Ace SC',
    				'cursive'
    			],
    			heading: [
    				'Michroma',
    				'sans-serif'
    			],
    			subheading: [
    				'Tektur',
    				'sans-serif'
    			],
    			tech: [
    				'Share Tech Mono',
    				'monospace'
    			],
    			cyber: [
    				'Chakra Petch',
    				'sans-serif'
    			],
    			retro: [
    				'Silkscreen',
    				'cursive'
    			],
    			future: [
    				'Russo One',
    				'sans-serif'
    			],
    			elegant: [
    				'Montserrat Subrayada',
    				'sans-serif'
    			],
    			base: [
    				'Rajdhani',
    				'sans-serif'
    			],
    			title: [
    				'Tourney',
    				'cursive'
    			],
    			accent: [
    				'Neonderthaw',
    				'cursive'
    			],
    			matrix: [
    				'Share Tech Mono',
    				'monospace'
    			],
    			neon: [
    				'Play',
    				'sans-serif'
    			]
    		},
    		colors: {
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			neon: {
    				blue: '#00F5FF',
    				purple: '#B537F2',
    				pink: '#FF71CE',
    				green: '#05FFA1',
    				yellow: '#FFEA00',
    				red: '#FF355E',
    				orange: '#FF9E00',
    				cyan: '#00F5FF',
    				magenta: '#FF2A6D'
    			},
    			cyber: {
    				black: '#0D0221',
    				purple: '#7B2CBF',
    				pink: '#FF2A6D',
    				blue: '#58B0F6',
    				green: '#01FB92',
    				yellow: '#FFCB00',
    				red: '#FF355E'
    			},
    			synthwave: {
    				dark: '#1A1A2E',
    				light: '#FF61D8',
    				pink: '#FF00FF',
    				purple: '#9D72FF',
    				blue: '#00F5FF',
    				yellow: '#FFE600'
    			},
    			hologram: {
    				blue: 'rgba(0, 245, 255, 0.8)',
    				purple: 'rgba(181, 55, 242, 0.8)',
    				pink: 'rgba(255, 113, 206, 0.8)'
    			},
    			matrix: {
    				dark: '#0D0208',
    				light: '#00FF41',
    				text: '#03A062',
    				glow: '#00FF41'
    			}
    		},
    		animation: {
    			gradient: 'gradient 8s linear infinite',
    			float: 'float 3s ease-in-out infinite',
    			'gradient-x': 'gradient-x 15s ease infinite',
    			orbit: 'orbit calc(var(--duration)*1s) linear infinite',
    			marquee: 'marquee var(--duration) infinite linear',
    			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			'matrix-rain': 'matrix-rain 2s linear infinite',
    			'hologram-flicker': 'hologram-flicker 2s infinite',
    			'cyber-glitch': 'cyber-glitch 0.3s ease-in-out infinite',
    			'neon-pulse': 'neon-pulse 1.5s ease-in-out infinite',
    			blob: 'blob 7s infinite'
    		},
    		keyframes: {
    			gradient: {
    				'0%, 100%': {
    					'background-position': '0% 50%'
    				},
    				'50%': {
    					'background-position': '100% 50%'
    				}
    			},
    			float: {
    				'0%, 100%': {
    					transform: 'translateY(0)'
    				},
    				'50%': {
    					transform: 'translateY(-20px)'
    				}
    			},
    			'gradient-x': {
    				'0%, 100%': {
    					'background-position': '0% 50%'
    				},
    				'50%': {
    					'background-position': '100% 50%'
    				}
    			},
    			orbit: {
    				'0%': {
    					transform: 'rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))'
    				},
    				'100%': {
    					transform: 'rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))'
    				}
    			},
    			marquee: {
    				from: {
    					transform: 'translateX(0)'
    				},
    				to: {
    					transform: 'translateX(calc(-100% - var(--gap)))'
    				}
    			},
    			'marquee-vertical': {
    				from: {
    					transform: 'translateY(0)'
    				},
    				to: {
    					transform: 'translateY(calc(-100% - var(--gap)))'
    				}
    			},
    			'accordion-down': {
    				from: {
    					height: 0
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: 0
    				}
    			},
    			'matrix-rain': {
    				'0%': {
    					transform: 'translateY(-100%)',
    					opacity: 0
    				},
    				'50%': {
    					opacity: 1
    				},
    				'100%': {
    					transform: 'translateY(100%)',
    					opacity: 0
    				}
    			},
    			'hologram-flicker': {
    				'0%, 100%': {
    					opacity: 1
    				},
    				'33%': {
    					opacity: 0.9
    				},
    				'66%': {
    					opacity: 0.8
    				}
    			},
    			'cyber-glitch': {
    				'0%, 100%': {
    					transform: 'translate(0)'
    				},
    				'33%': {
    					transform: 'translate(-5px, 2px)'
    				},
    				'66%': {
    					transform: 'translate(5px, -2px)'
    				}
    			},
    			'neon-pulse': {
    				'0%, 100%': {
    					textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px var(--color-primary), 0 0 70px var(--color-primary), 0 0 80px var(--color-primary)'
    				},
    				'50%': {
    					textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px var(--color-primary), 0 0 35px var(--color-primary), 0 0 40px var(--color-primary)'
    				}
    			},
    			blob: {
    				'0%': {
    					transform: 'translate(0px, 0px) scale(1)'
    				},
    				'33%': {
    					transform: 'translate(30px, -50px) scale(1.1)'
    				},
    				'66%': {
    					transform: 'translate(-20px, 20px) scale(0.9)'
    				},
    				'100%': {
    					transform: 'translate(0px, 0px) scale(1)'
    				}
    			}
    		},
    		backgroundImage: {
    			'cyber-grid': 'linear-gradient(90deg, var(--cyber-grid-color) 1px, transparent 1px), linear-gradient(0deg, var(--cyber-grid-color) 1px, transparent 1px)',
    			'matrix-rain': 'repeating-linear-gradient(0deg, rgba(0, 255, 65, 0.15) 0%, rgba(0, 255, 65, 0.15) 1px, transparent 1px, transparent 2px)',
    			'synthwave-sun': 'radial-gradient(circle at 50% 0%, var(--synthwave-sun-color) 0%, transparent 50%)'
    		},
    		backgroundColor: {
    			'synthwave-blue': 'var(--synthwave-blue)',
    			'synthwave-purple': 'var(--synthwave-purple)',
    			'synthwave-pink': 'var(--synthwave-pink)'
    		}
    	}
    },
    plugins: [
    	require('@tailwindcss/typography'),
    	require('tailwindcss-animate')
    ],
  };