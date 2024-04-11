import type { ReactNode } from "react";

export function VGrid({ children }: { children: ReactNode }): JSX.Element {
  return <div className="flex flex-col gap-4 md:gap-5">{children}</div>;
}
