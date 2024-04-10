import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }): JSX.Element {
	return (
		<div>
			<h1 className="text-xl">Learning Spell</h1>
			{children}
		</div>
	);
}
