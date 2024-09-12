import { enqueueSnackbar } from "notistack";

function useToast() {
  const toast = {
    success: (message: string) => {
      enqueueSnackbar(message, { variant: "success" });
    },

    error: (message: string) => {
      enqueueSnackbar(message, { variant: "error" });
    },
    warn: (message: string) => {
      enqueueSnackbar(message, { variant: "warning" });
    },

    info: (message: string) => {
      enqueueSnackbar(message, { variant: "info" });
    },
  };

  return toast;
}

export default useToast;
