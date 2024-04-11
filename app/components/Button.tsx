import type { ReactNode } from "react";

export function Button({
	children,
	...rest
}: { children: ReactNode }): JSX.Element {
	return (
		<button
			className="-z-1 relative rounded-xl bg-rose-600 px-4 py-2 font-bold font-mono text-rose-100 text-xl shadow-glow shadow-rose-600/40 disabled:cursor-not-allowed disabled:bg-stone-400 hover:bg-rose-700 hover:underline hover:decoration-rose-200/40 hover:decoration-dotted hover:underline-offset-4 disabled:shadow-stone-500/40 hover:shadow-rose-700/50"
			{...rest}
		>
			{children}
		</button>
	);
}
