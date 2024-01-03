import { Header } from "./Header";
import { InputSearch } from "./Input";

type SearchProps = {
  getUser: (userName: string) => Promise<void>;
};

export function Search({ getUser }: SearchProps) {
  return (
    <>
      <Header>
        <div>
          <InputSearch getUser={getUser} />
        </div>
      </Header>
    </>
  );
}
