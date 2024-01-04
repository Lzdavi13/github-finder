import { ReactNode, createContext } from "react";
import { useUserProvider } from "../hooks/useUserProvider";
import { UserProps } from "../types/user";

type UserContextProps = {
  children: ReactNode;
};

type CreateContextProps = {
  user: UserProps | null;
  setUser: React.Dispatch<React.SetStateAction<UserProps | null>>;
};

export const UserContext = createContext<CreateContextProps>(
  {} as CreateContextProps
);

export function UserProvider({ children }: UserContextProps) {
  const { user, setUser } = useUserProvider();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
