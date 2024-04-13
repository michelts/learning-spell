import type { ComponentPropsWithRef, ReactNode } from "react";

interface Props extends ComponentPropsWithRef<"button"> {
  children: ReactNode;
  isLoading?: boolean;
}

export function Button({
  children,
  isLoading = false,
  ...rest
}: Props): JSX.Element {
  return (
    <button
      className="group -z-1 relative rounded-xl bg-pink-600 px-4 py-2 font-bold font-mono text-pink-100 text-xl shadow-glow shadow-pink-600/40 disabled:cursor-not-allowed disabled:bg-stone-400 hover:bg-pink-700 disabled:text-stone-600 hover:underline hover:decoration-pink-200/40 hover:decoration-dotted hover:underline-offset-4 disabled:shadow-stone-500/40 hover:shadow-pink-700/50"
      {...rest}
    >
      {!isLoading ? (
        children
      ) : (
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-ping rounded-full bg-pink-100 opacity-75 group-disabled:bg-stone-700" />
          {children}
        </div>
      )}
    </button>
  );
}
