import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../pages/home/Home"));
const Registration = lazy(() => import("../pages/registration/Registration"));

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
    path: "*",
    element: "Not Found",
  },
]);

export default router;
