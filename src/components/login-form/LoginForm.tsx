import { Box, Button, Grid2 } from "@mui/material";
import { Formik, FormikHelpers } from "formik";
import FormInput from "../ui/FormInput";
import { TLoginForm } from "../../type/user";
import useToast from "../../hooks/useToast";
import { loginValidationSchema } from "./LoginValidation";
import { signIn } from "../../services/user-services";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const toast = useToast();
  const { login } = useAuth();
  const navigate = useNavigate();

  const initialValues: TLoginForm = {
    email: "",
    password: "",
  };

  //   submit Login form data
  const handleFormSubmit = async (
    values: TLoginForm,
    { setSubmitting, resetForm }: FormikHelpers<TLoginForm>
  ) => {
    const { ok, data, error } = signIn({
      email: values.email,
      password: values.password,
    });

    if (!ok && error) {
      toast.error(error);
    } else {
      // set user data and redirected to todo page
      if (data) login(data);
      toast.success("Successfully Login.");
      resetForm();
      navigate("/");
    }

    setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ isValid, isSubmitting, handleSubmit }) => (
          <>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 12 }}>
                  <FormInput
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid2>
                <Grid2 size={{ xs: 12 }}>
                  <FormInput
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="new-password"
                  />
                </Grid2>
              </Grid2>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={!isValid || isSubmitting}
              >
                Login
              </Button>
            </Box>
          </>
        )}
      </Formik>
    </>
  );
}

export default LoginForm;
