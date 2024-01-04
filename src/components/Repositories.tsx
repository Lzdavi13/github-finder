import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";
import { CardRepositorie } from "./CardRepositorie";
import { Loader } from "./Loader";

export function Repositories() {
  const { user } = useUser();
  const [repositories, setRepositories] = useState<AxiosResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  async function getRepositories() {
    try {
      setIsLoading(true);
      const response = await axios(
        `https://api.github.com/users/${user?.login}/repos`
      );

      const arrayRepositorie = response.data.slice(0, 6);

      setRepositories(arrayRepositorie);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getRepositories();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center flex-wrap w-2/4 gap-10 px-6 py-4">
        {isLoading && <Loader />}
        {repositories.map((repositorie, indice) => {
          return (
            <div key={indice}>
              <CardRepositorie repositorieData={repositorie} />
            </div>
          );
        })}
      </div>
    </>
  );
}
