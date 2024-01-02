import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps): JSX.Element {
  return (
    <>
      <header className="w-full h-72 py-16 flex flex-col items-center gap-12 bg-zinc-800">
        {children}
      </header>
    </>
  );
}
