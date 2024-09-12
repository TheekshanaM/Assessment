import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../pages/home/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: "Not Found",
  },
]);

export default router;
