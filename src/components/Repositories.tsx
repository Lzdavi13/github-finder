import axios from "axios";
import { useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";
import { CardRepositorie } from "./CardRepositorie";
import { Loader } from "./Loader";

export function Repositories() {
  const { user } = useUser();
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getRepositories() {
    try {
      setIsLoading(true);
      const response = await axios(
        `https://api.github.com/users/${user?.login}/repos`
      );

      const arrayRepositorie = response.data.slice(0, 6);

      setRepositories(arrayRepositorie);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getRepositories();
  }, []);

  return (
    <>
      <div className="flex justify-center w-3/4 items-center flex-wrap gap-10 px-6 py-4 sm:py-2 sm:gap-5">
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
