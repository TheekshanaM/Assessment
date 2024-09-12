import { createContext } from "react";
import { IAuthContextType } from "../type/user";

const AuthContext = createContext<IAuthContextType | undefined>(undefined);

export default AuthContext;
