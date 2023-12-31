import { FormEvent, useState } from "react";
import icon_search from "../assets/icon-search.svg";
type InputSearchProps = {
  getUser: (userName: string) => Promise<void>;
};

export function InputSearch({ getUser }: InputSearchProps) {
  const [userName, setUserName] = useState("");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!userName) {
      return;
    }

    getUser(userName);
  }

  return (
    <>
      <form onSubmit={(e) => submit(e)} className="relative">
        <label htmlFor="search">
          <img
            className="absolute w-7 h-7 top-3 left-5 fill-blue-600"
            src={icon_search}
            alt=""
          />
        </label>
        <input
          onChange={(e) => setUserName(e.target.value)}
          id="search"
          className="w-1 py-3 outline-none px-14 font-f2 text-slate-100 text-lg bg-zinc-700 rounded-md placeholder:text-zinc-500"
          type="text"
          placeholder="Digite um usuário"
        />
      </form>
    </>
  );
}
