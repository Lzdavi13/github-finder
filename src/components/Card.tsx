import { MdLocationPin } from "react-icons/md";

export function Card() {
  return (
    <>
      <div className="flex flex-col items-center w-96 h-sp1 bg-zinc-800 border-blue-600 border-2 p-8 gap-5 rounded-lg">
        <div className="rounded-full w-32 h-32 border-4 border-blue-900">
          <img
            src="https://avatars.githubusercontent.com/u/127680849?v=4"
            alt=""
          />
        </div>

        <h2 className="font-f2 font-bold text-zinc-50 text-xl">Luiz Davi</h2>
        <p className=" flex items-center justify-center gap-2 text-lg font-f2 text-zinc-300 font-semibold">
          <MdLocationPin className="fill-blue-600 w-6 h-6" />
          <span>Araioses</span>
        </p>

        <div className="flex gap-7">
          <div className="flex flex-col items-center gap-2">
            <p className="font-f2 font-medium text-base text-zinc-50">
              Seguidores:
            </p>
            <p className="font-f2 text-center font-medium text-base text-zinc-50 bg-blue-500 w-24 rounded-sm">
              837
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="font-f2 font-medium text-base text-zinc-50">
              Seguindo:
            </p>
            <p className="font-f2 text-center font-medium text-base text-zinc-50 bg-blue-500 w-24 rounded-sm">
              322
            </p>
          </div>
        </div>
        <button className="bg-blue-500 py-3 px-8 text-zinc-200 font-f2 font-medium rounded-md my-8">
          Ver Melhores Projetos
        </button>
      </div>
    </>
  );
}