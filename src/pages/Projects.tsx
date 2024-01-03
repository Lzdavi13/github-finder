import { Header } from "../components/Header";
import { Repositories } from "../components/Repositories";

export function Projects() {
  return (
    <>
      <div className="w-full h-screen bg-zinc-900 flex flex-col gap-16 items-center">
        <Header />
        <Repositories />
      </div>
    </>
  );
}
