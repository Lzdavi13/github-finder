import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps): JSX.Element {
  return (
    <>
      <header className="w-full py-16 flex flex-col items-center justify-center gap-12 bg-zinc-800">
        <h1 className="m-0 font-f1 font-medium text-4xl text-blue-600 ">
          GitHub <span className="text-slate-50">Finder</span>
        </h1>
        {children}
      </header>
    </>
  );
}
