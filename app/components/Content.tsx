import type { ReactNode } from "react";

export function Content({ children }: { children: ReactNode }): JSX.Element {
	return (
		<div className="relative z-1 text-rose-200 leading-relaxed">{children}</div>
	);
}
