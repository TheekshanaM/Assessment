import "./App.css";

import { RouterProvider } from "react-router-dom";
import router from "./router/route";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <>
      <SnackbarProvider
        autoHideDuration={5000}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <RouterProvider router={router} />
      </SnackbarProvider>
    </>
  );
}

export default App;
