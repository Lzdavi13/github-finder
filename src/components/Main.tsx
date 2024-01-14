import { UserProps } from "../types/user";
import { Card } from "./Card";
import { Error } from "./Error";
type MainProps = {
  user: UserProps | null;
  error: boolean;
};

export function Main({ user, error }: MainProps) {
  return (
    <>
      <main className=" bg-zinc-900 flex flex-col justify-center items-center sm:w-auto sm:p-14">
        {user && <Card {...user} />}
        {error && <Error />}
      </main>
    </>
  );
}
