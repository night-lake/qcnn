import { cva } from "cva";

export const navPane = cva(["py-2", "bg-pane-300"]);
export const bodyPane = cva(["bg-pane-200"]);

export const contentPane = cva(["md:max-w-6xl", "mx-auto"], {
	variants: {
		flex: {
			row: ["flex", "flex-row", "justify-between", "content-center"],
			col: ["flex", "flex-col"],
		},
		padding: {
			on: ["py-2"],
		},
	},
});
