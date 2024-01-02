import { Header } from "./Header";
import { InputSearch } from "./Input";

type SearchProps = {
  getUser: (userName: string) => Promise<void>;
};

export function Search({ getUser }: SearchProps) {
  return (
    <>
      <Header>
        <h1 className="m-0 font-f1 font-medium text-4xl text-blue-600 ">
          GitHub <span className="text-slate-50">Finder</span>
        </h1>

        <div>
          <InputSearch getUser={getUser} />
        </div>
      </Header>
    </>
  );
}
