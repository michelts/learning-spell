import type { ReactNode } from "react";
import { Wand } from "./Wand";

export function Container({ children }: { children: ReactNode }): JSX.Element {
	return (
		<div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-fuchsia-950 to-purple-950 p-5 md:p-0">
			<div className="h-full w-full rounded-4xl bg-gradient-to-br from-fuchsia-700 to-purple-900 p-5 shadow-fuchsia-700/40 shadow-glow2 md:h-5/6 md:w-9/12 md:max-w-2xl">
				<Wand />
				<div className="flex h-full w-full flex-col items-start justify-center pl-48">
					{children}
				</div>
			</div>
		</div>
	);
}
