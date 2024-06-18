/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				brand: {
					black: "#141414",
					green: "#789e71",
					yellow: "#e8c949",
					orange: "#e09442",
					blue: "#4742e0",
				},
				aura: {
					red: "#FF0000" /* Energy, passion, strength, survival, physical health */,
					orange:
						"#FFA500" /* Creativity, emotions, confidence, change, sexuality */,
					yellow:
						"#FFFF00" /* Optimism, clarity, intellect, joy, personal power */,
					green: "#00FF00" /* Balance, growth, love, healing, compassion */,
					blue: "#0000FF" /* Communication, truth, calm, intuition, expression */,
					indigo:
						"#4B0082" /* Intuition, insight, spiritual awareness, perception */,
					violet:
						"#EE82EE" /* Spirituality, imagination, enlightenment, higher consciousness */,
					white: "#FFFFFF" /* Purity, protection, higher self, truth, peace */,
					pink: "#FFC0CB" /* Love, kindness, compassion, nurturing, emotional healing */,
					brown: "#A52A2A" /* Stability, grounding, earthiness, practicality */,
					black: "#000000" /* Protection, grounding, deep change */,
				},
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("daisyui"),
		require("@tailwindcss/aspect-ratio"),
	],
};
