import type { ReactNode } from "react";
import { Wand } from "./Wand";

export function Container({ children }: { children: ReactNode }): JSX.Element {
	return (
		<div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-fuchsia-950 to-purple-950 p-5 md:p-0">
			<div className="h-full w-full rounded-[2rem] bg-gradient-to-br from-fuchsia-700 to-purple-900 p-5 shadow-[0_0_60px_0_rgba(255,255,255,0.1)] md:h-5/6 md:w-9/12 md:max-w-2xl">
        <Wand />
        <div className="pl-48 w-full h-full flex flex-col justify-center items-start">
          {children}
        </div>
			</div>
		</div>
	);
}
