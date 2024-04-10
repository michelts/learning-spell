import type { ReactNode } from "react";

export function Button({ children, ...rest }: { children: ReactNode }): JSX.Element {
	return (
		<button className="font-bold font-mono text-2xl text-rose-100" {...rest}>{children}</button>
	);
}
