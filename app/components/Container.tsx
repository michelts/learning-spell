import type {ReactNode} from 'react';

export function Container({children}: {children: ReactNode}): JSX.Element {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Learning Spell</h1>
      {children}
    </div>
  )
}
