import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

interface IProtected {
  children: React.ReactNode;
}
function Protected({ children }: IProtected) {
  const { isAuthenticate, isCheckingAuthState } = useAuth();

  if (!isAuthenticate && isCheckingAuthState) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}

export default Protected;
