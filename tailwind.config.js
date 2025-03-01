/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{js,jsx}",
	  "./components/**/*.{js,jsx}",
	  "./app/**/*.{js,jsx}",
	  "./src/**/*.{js,jsx}",
	],
	prefix: "",
	theme: {
	  container: {
		center: true,
		padding: "2rem",
		screens: {
		  "2xl": "1400px",
		},
	  },
	  extend: {
		colors: {
		  border: "hsl(var(--border))",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  primary: {
			DEFAULT: "hsl(var(--primary))",
			foreground: "hsl(var(--primary-foreground))",
		  },
		  secondary: {
			DEFAULT: "hsl(var(--secondary))",
			foreground: "hsl(var(--secondary-foreground))",
		  },
		  destructive: {
			DEFAULT: "hsl(var(--destructive))",
			foreground: "hsl(var(--destructive-foreground))",
		  },
		  muted: {
			DEFAULT: "hsl(var(--muted))",
			foreground: "hsl(var(--muted-foreground))",
		  },
		  accent: {
			DEFAULT: "hsl(var(--accent))",
			foreground: "hsl(var(--accent-foreground))",
		  },
		  popover: {
			DEFAULT: "hsl(var(--popover))",
			foreground: "hsl(var(--popover-foreground))",
		  },
		  card: {
			DEFAULT: "hsl(var(--card))",
			foreground: "hsl(var(--card-foreground))",
		  },
		  sidebar: {
			DEFAULT: "hsl(var(--sidebar-background))",
			foreground: "hsl(var(--sidebar-foreground))",
			primary: "hsl(var(--sidebar-primary))",
			"primary-foreground": "hsl(var(--sidebar-primary-foreground))",
			accent: "hsl(var(--sidebar-accent))",
			"accent-foreground": "hsl(var(--sidebar-accent-foreground))",
			border: "hsl(var(--sidebar-border))",
			ring: "hsl(var(--sidebar-ring))",
		  },
		},
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
		keyframes: {
		  "accordion-down": {
			from: { height: "0" },
			to: { height: "var(--radix-accordion-content-height)" },
		  },
		  "accordion-up": {
			from: { height: "var(--radix-accordion-content-height)" },
			to: { height: "0" },
		  },
		  "fade-in": {
			"0%": { opacity: "0", transform: "translateY(10px)" },
			"100%": { opacity: "1", transform: "translateY(0)" },
		  },
		  "fade-out": {
			"0%": { opacity: "1", transform: "translateY(0)" },
			"100%": { opacity: "0", transform: "translateY(10px)" },
		  },
		  "scale-in": {
			"0%": { transform: "scale(0.95)", opacity: "0" },
			"100%": { transform: "scale(1)", opacity: "1" },
		  },
		  "slide-up": {
			"0%": { transform: "translateY(20px)", opacity: "0" },
			"100%": { transform: "translateY(0)", opacity: "1" },
		  },
		  "slide-down": {
			"0%": { transform: "translateY(-20px)", opacity: "0" },
			"100%": { transform: "translateY(0)", opacity: "1" },
		  },
		  "slide-left": {
			"0%": { transform: "translateX(20px)", opacity: "0" },
			"100%": { transform: "translateX(0)", opacity: "1" },
		  },
		  "slide-right": {
			"0%": { transform: "translateX(-20px)", opacity: "0" },
			"100%": { transform: "translateX(0)", opacity: "1" },
		  },
		  gradient: {
			"0%": { backgroundPosition: "0% 50%" },
			"50%": { backgroundPosition: "100% 50%" },
			"100%": { backgroundPosition: "0% 50%" },
		  },
		  "bounce-slow": {
			"0%, 100%": { transform: "translateY(0)" },
			"50%": { transform: "translateY(-10px)" },
		  },
		  "pulse-glow": {
			"0%, 100%": { opacity: "1", transform: "scale(1)" },
			"50%": { opacity: "0.8", transform: "scale(1.05)" },
		  },
		},
		animation: {
		  "accordion-down": "accordion-down 0.2s ease-out",
		  "accordion-up": "accordion-up 0.2s ease-out",
		  "fade-in": "fade-in 0.6s ease-out",
		  "fade-out": "fade-out 0.6s ease-out",
		  "scale-in": "scale-in 0.6s ease-out",
		  "slide-up": "slide-up 0.6s ease-out",
		  "slide-down": "slide-down 0.6s ease-out",
		  "slide-left": "slide-left 0.6s ease-out",
		  "slide-right": "slide-right 0.6s ease-out",
		  gradient: "gradient 8s ease infinite",
		  "bounce-slow": "bounce-slow 3s ease-in-out infinite",
		  "pulse-glow": "pulse-glow 2s ease-in-out infinite",
		},
		fontFamily: {
		  sans: [
			"Inter",
			"system-ui",
			"-apple-system",
			"BlinkMacSystemFont",
			"Segoe UI",
			"Roboto",
			"Helvetica Neue",
			"Arial",
			"sans-serif",
		  ],
		  display: ["Poppins", "SF Pro Display", "Inter", "sans-serif"],
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  