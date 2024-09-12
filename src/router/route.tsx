import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../pages/home/Home"));
const Registration = lazy(() => import("../pages/registration/Registration"));
const Login = lazy(() => import("../pages/login/Login"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/registration",
    element: <Registration />,
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
