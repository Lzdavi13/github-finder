import { useState } from "react";
import { UserProps } from "../types/user";

export function useUserProvider() {
  const [user, setUser] = useState<UserProps | null>(null);

  return {
    user,
    setUser,
  };
}
