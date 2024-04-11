import type { ReactNode } from "react";

export function VGrid({ children }: { children: ReactNode }): JSX.Element {
	return <div className="flex flex-col gap-4">{children}</div>;
}
