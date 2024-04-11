import type { ReactNode } from "react";

export function HGrid({ children }: { children: ReactNode }): JSX.Element {
	return <div className="flex flex-row gap-4 md:gap-5">{children}</div>;
}
