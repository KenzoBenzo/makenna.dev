import type { Config } from "tailwindcss";

const generateScale = (name: string) => {
	let scale = Array.from({ length: 12 }, (_, i) => {
		let id = i + 1;
		return [
			[id, `var(--${name}-${id})`],
			[`a${id}`, `var(--${name}-A${id})`],
		];
	}).flat();

	return Object.fromEntries(scale);
};

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				sage: generateScale("sage"),
				"sage-dark": generateScale("sage-dark"),
				mint: generateScale("mint"),
				"mint-dark": generateScale("mint-dark"),
			},
			fontFamily: {
				mono: ["var(--font-jet-brains-mono)"],
			},
			fontSize: {
				link: [
					"1.125rem",
					{
						lineHeight: "2rem",
						letterSpacing: "0em",
						fontWeight: "600",
					},
				],
			},
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
			},
			animation: {
				wiggle: "wiggle 400ms ease-in-out infinite",
			},
		},
	},
	plugins: [],
};
export default config;
