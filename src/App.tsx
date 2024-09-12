import "./App.css";

import { RouterProvider } from "react-router-dom";
import router from "./router/route";
import { SnackbarProvider } from "notistack";
import { Suspense } from "react";
import Loader from "./components/loader/Loader";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <AuthProvider>
          <SnackbarProvider
            autoHideDuration={5000}
            anchorOrigin={{ horizontal: "center", vertical: "top" }}
          >
            <RouterProvider router={router} />
          </SnackbarProvider>
        </AuthProvider>
      </Suspense>
    </>
  );
}

export default App;
