import { cva } from "cva";

export const subtext = cva("text-prose-200");

export const lowSubtext = cva("text-prose-300");

export const heading = cva("text-prose-100", {
	variants: {
		size: {
			"3xl": "3xl",
			xl: "xl",
			large: "text-large",
			medium: "text-md",
		},
		weight: {
			black: "font-black",
		},
	},
});
