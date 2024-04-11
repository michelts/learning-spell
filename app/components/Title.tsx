import { Link } from "@remix-run/react";
import type { ReactNode } from "react";

export function Title({ children }: { children: ReactNode }): JSX.Element {
	return (
		<h1 className="mb-5 font-bold font-mono text-4xl text-rose-100">
			<Link to="/">{children}</Link>
		</h1>
	);
}
