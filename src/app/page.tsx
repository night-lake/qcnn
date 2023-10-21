import { heading, subtext } from "@/styles/prose";

export default function Home() {
	return (
		<h1 className={subtext()}>
			<div>
				<h1 className={heading({ size: "3xl", weight: "black" })}>
					QCNN Is Now Real.
				</h1>
				<p className={"text-accent"}>
					Thanks to Amelia, Natalie, Neville and Theoballs, we have
					successfully enriched human {"<REDACTED>"}.
				</p>
			</div>
		</h1>
	);
}
