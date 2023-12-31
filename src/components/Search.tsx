import { InputSearch } from "./Input";

type SearchProps = {
  getUser: (userName: string) => Promise<void>;
};

export function Search({ getUser }: SearchProps) {
  return (
    <>
      <header className="w-full h-72 py-16 flex flex-col items-center gap-12 bg-zinc-800">
        <h1 className="m-0 font-f1 font-medium text-4xl text-blue-600 ">
          GitHub <span className="text-slate-50">Finder</span>
        </h1>

        <div>
          <InputSearch getUser={getUser} />
        </div>
      </header>
    </>
  );
}
