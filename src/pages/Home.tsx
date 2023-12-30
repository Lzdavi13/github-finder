import { Main } from "../components/Main";
import { Search } from "../components/Search";

export function Home() {
  return (
    <>
      <div className="w-full h-screen bg-zinc-900 flex flex-col gap-16 items-center">
        <Search />
        <Main />
      </div>
    </>
  );
}
