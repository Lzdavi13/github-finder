import { UserProps } from "../types/user";
import { Card } from "./Card";
type MainProps = {
  user: UserProps | null;
  isLoading: boolean;
};

export function Main({ user }: MainProps) {
  console.log(user);
  return (
    <>
      <main className=" bg-zinc-900 flex flex-col justify-center items-center">
        {user && <Card {...user} />}
      </main>
    </>
  );
}
