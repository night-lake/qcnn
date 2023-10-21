import ctp, { AlphaColor, Color, Labels, Variants } from "@catppuccin/palette";
import type { Config } from "tailwindcss";
import "tailwindcss-themer";
import { ThemeConfig } from "tailwindcss-themer/lib/utils/optionsUtils";
import colors from "tailwindcss/colors";

const ctpVariants = Object.keys(ctp.variants);
const twVariants = ["light", "dark", "oled"];

const ctpAccents = [
	"rosewater",
	"flamingo",
	"pink",
	"mauve",
	"red",
	"maroon",
	"peach",
	"yellow",
	"green",
	"teal",
	"sky",
	"sapphire",
	"blue",
	"lavender",
];

const ctpThemes: ThemeConfig[] = [];

for (const variant of ctpVariants) {
	for (const accent of ctpAccents) {
		const theme =
			ctp.variants[variant as keyof Variants<Labels<Color, AlphaColor>>];

		const allOtherAccents: Record<string, string> = {};
		for (const lowerAccent of ctpAccents) {
			allOtherAccents[lowerAccent] =
				theme[lowerAccent as keyof Labels<Color, AlphaColor>].hex;
		}

		const toPush = {
			name: `${variant}-${accent}`,
			extend: {
				colors: {
					accent: theme[accent as keyof Labels<Color, AlphaColor>]
						.hex,
					pane: {
						100: theme.crust.hex,
						200: theme.mantle.hex,
						300: theme.base.hex,
						400: theme.surface0.hex,
						500: theme.surface1.hex,
						600: theme.surface2.hex,
						700: theme.overlay0.hex,
						800: theme.overlay1.hex,
						900: theme.overlay2.hex,
					},
					prose: {
						// body copy, main headline
						100: theme.text.hex,
						// subheadlines
						200: theme.subtext0.hex,
						// labels
						300: theme.subtext1.hex,
						// subtle:
						400: theme.overlay0.hex,
					},
					...allOtherAccents,
				},
			},
		};

		ctpThemes.push(toPush);
	}
}

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: undefined,
	colors: {},
	plugins: [
		require("tailwindcss-themer")({
			themes: [
				{
					name: "dark",
					extend: {
						colors: {
							accent: colors.red["400"],
							pane: {
								100: colors.stone["950"],
								200: colors.stone["900"],
								300: colors.stone["800"],
							},
							prose: {
								100: colors.white,
								200: colors.gray["400"],
								300: colors.gray["500"],
							},
						},
					},
				},
				{
					name: "oled",
					extend: {
						colors: {
							accent: colors.red["400"],
							pane: {
								100: colors.zinc["950"],
								200: colors.zinc["900"],
								300: colors.zinc["800"],
							},
							prose: {
								100: colors.slate["50"],
								200: colors.slate["300"],
								300: colors.slate["400"],
							},
						},
					},
				},
				...ctpThemes,
			],
		}),
	],
};
export default config;
