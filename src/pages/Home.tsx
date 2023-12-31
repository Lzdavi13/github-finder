import axios from "axios";
import { useState } from "react";
import { Main } from "../components/Main";
import { Search } from "../components/Search";
import { UserProps } from "../types/user";

export function Home() {
  const [user, setUser] = useState<UserProps | null>(null);

  async function getUser(userName: string): Promise<void> {
    const response = await axios(`https://api.github.com/users/${userName}`);

    const { avatar_url, login, location, followers, following } = response.data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  }
  return (
    <>
      <div className="w-full h-screen bg-zinc-900 flex flex-col gap-16 items-center">
        <Search getUser={getUser} />
        <Main {...user} />
      </div>
    </>
  );
}
