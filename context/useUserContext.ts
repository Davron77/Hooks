import { createContext, useContext } from "react";

interface User {
  name: string;
  isHuman: boolean;
}

export const UserContext = createContext<User | undefined>(undefined);

export const useUserContext = () => {
  const user = useContext(UserContext);

  if (user === undefined) {
    throw new Error("Error");
  }

  return user;
};
