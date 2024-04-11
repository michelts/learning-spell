import type { ReactNode } from "react";

export function Sentence({ children }: { children: ReactNode }): JSX.Element {
	return (
		<div className="flex">
			<div className="relative z-1 rounded-lg border border-white/30 bg-white/10 p-3 font-bold text-rose-100 leading-relaxed">
				{children}
			</div>
		</div>
	);
}
