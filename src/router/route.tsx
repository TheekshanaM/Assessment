import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

const Registration = lazy(() => import("../pages/registration/Registration"));
const Login = lazy(() => import("../pages/login/Login"));
const Todo = lazy(() => import("../pages/todo/Todo"));
const AddTodo = lazy(() => import("../pages/todo/add-todo/AddTodo"));
const EditTodo = lazy(() => import("../pages/todo/edit-todo/EditTodo"));

const router = createBrowserRouter([
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/todo/add-todo",
    element: <AddTodo />,
  },
  {
    path: "/todo/edit-todo/:id",
    element: <EditTodo />,
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
