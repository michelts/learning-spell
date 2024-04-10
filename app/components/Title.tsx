import type { ReactNode } from "react";

export function Title({ children }: { children: ReactNode }): JSX.Element {
	return (
		<h1 className="font-bold font-mono text-4xl text-rose-100">{children}</h1>
	);
}
