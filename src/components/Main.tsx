import { UserProps } from "../types/user";
import { Card } from "./Card";

export function Main({ ...user }: UserProps) {
  return (
    <>
      <main className=" bg-zinc-900 flex flex-col justify-center items-center">
        {user.avatar_url && <Card {...user} />}
      </main>
    </>
  );
}
