import axios from "axios";
import { useState } from "react";
import { Loader } from "../components/Loader";
import { Main } from "../components/Main";
import { Search } from "../components/Search";
import { useUser } from "../hooks/useUser";
import { UserProps } from "../types/user";

export function Home() {
  const { user, setUser } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  async function getUser(userName: string): Promise<void> {
    try {
      setIsLoading(true);
      const response = await axios(`https://api.github.com/users/${userName}`);

      const { avatar_url, login, location, bio, followers, following } =
        response.data;

      const userData: UserProps = {
        avatar_url,
        login,
        location,
        bio,
        followers,
        following,
      };

      setUser(userData);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <div className="w-full h-screen bg-zinc-900 flex flex-col gap-16 items-center">
        <Search getUser={getUser} />
        <Main user={user} error={error} />
        {isLoading && <Loader />}
      </div>
    </>
  );
}
