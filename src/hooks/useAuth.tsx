import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useToastContext must be used within an ToastProvider");
  }
  return context;
}

export default useAuth;
