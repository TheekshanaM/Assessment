import { useState } from "react";
import AuthContext from "./AuthContext";
import { IUser } from "../type/user";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AuthProvider(props: any) {
  const { children } = props;
  const [isAuthenticate, setIsAuthenticate] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | null>(null);

  const login = (user: IUser) => {
    setUser(user);
    setIsAuthenticate(true);
  };
  const value = { isAuthenticate, user, login };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
