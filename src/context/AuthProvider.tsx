import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { IUser } from "../type/user";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AuthProvider(props: any) {
  const { children } = props;
  const [isAuthenticate, setIsAuthenticate] = useState<boolean>(false);
  const [isCheckingAuthState, setIsCheckingAuthState] =
    useState<boolean>(false);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthenticate(true);
      setUser(user);
    }
    setIsCheckingAuthState(true);
  }, []);

  const login = (user: IUser) => {
    setUser(user);
    setIsAuthenticate(true);
    // set user in local storage, Because can not manage
    // taken without backend
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticate(false);
    // set user in local storage, Because can not manage
    // taken without backend
    localStorage.removeItem("user");
  };

  const value = { isAuthenticate, user, login, isCheckingAuthState, logout };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
