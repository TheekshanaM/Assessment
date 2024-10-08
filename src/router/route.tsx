import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Protected from "./ProtectedRoute";

const Registration = lazy(() => import("../pages/registration/Registration"));
const Login = lazy(() => import("../pages/login/Login"));
const Todo = lazy(() => import("../pages/todo/Todo"));

const router = createBrowserRouter([
  {
    path: "/todo",
    element: (
      <Protected>
        <Todo />
      </Protected>
    ),
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/",
    element: <Navigate to="/todo" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: "Not Found",
  },
]);

export default router;
