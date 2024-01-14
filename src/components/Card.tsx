import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import { UserProps } from "../types/user";

export function Card({
  avatar_url,
  login,
  location,
  bio,
  followers,
  following,
}: UserProps) {
  return (
    <>
      <div className="flex flex-col items-center w-96 h-sp1 bg-zinc-800 border-blue-600 border-2 p-8 gap-4 rounded-lg sm:w-80">
        <div className="rounded-full w-32 h-32 border-4 border-blue-900">
          <img
            className="rounded-full border-4 border-blue-900"
            src={avatar_url}
            alt=""
          />
        </div>

        <h2 className="font-f2 font-bold text-zinc-50 text-xl">{login}</h2>
        <span className="font-f2 text-center text-zinc-50">{bio}</span>
        {location && (
          <p className=" flex items-center justify-center gap-2 text-lg font-f2 text-zinc-300 font-semibold">
            <MdLocationPin className="fill-blue-600 w-6 h-6" />
            <span>{location}</span>
          </p>
        )}

        <div className="flex gap-7">
          <div className="flex flex-col items-center gap-2">
            <p className="font-f2 font-medium text-base text-zinc-50">
              Seguidores:
            </p>
            <p className="font-f2 text-center font-medium text-base text-zinc-50 bg-blue-500 w-24 rounded-sm">
              {followers}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="font-f2 font-medium text-base text-zinc-50">
              Seguindo:
            </p>
            <p className="font-f2 text-center font-medium text-base text-zinc-50 bg-blue-500 w-24 rounded-sm">
              {following}
            </p>
          </div>
        </div>

        <Link
          className="bg-blue-500 py-3 px-8 text-zinc-200 font-f2 font-medium rounded-md my-8"
          to={"/projects"}
        >
          Ver Melhores Projetos
        </Link>
      </div>
    </>
  );
}
