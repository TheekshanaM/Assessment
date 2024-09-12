import { Box, Button, Grid2 } from "@mui/material";
import { Formik, FormikHelpers } from "formik";
import FormInput from "../ui/FormInput";
import { validationSchema } from "../../pages/registration/Validation";
import { TRegistrationForm } from "../../type/user";
import { register } from "../../services/user-services";
import useToast from "../../hooks/useToast";

function RegistrationForm() {
  const toast = useToast();

  const initialValues: TRegistrationForm = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  //   submit registration form data
  const handleFormSubmit = async (
    values: TRegistrationForm,
    { setSubmitting, resetForm }: FormikHelpers<TRegistrationForm>
  ) => {
    const { ok, error } = register({
      name: values.name,
      email: values.email,
      password: values.password,
    });

    if (!ok && error) {
      toast.error(error);
    } else {
      toast.success("Successfully registered.");
      resetForm();
    }

    setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
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
                    autoComplete="given-name"
                    name="name"
                    label="Name"
                    autoFocus
                  />
                </Grid2>

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
                <Grid2 size={{ xs: 12 }}>
                  <FormInput
                    name="confirmPassword"
                    label="Confirm Password"
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
                Sign Up
              </Button>
            </Box>
          </>
        )}
      </Formik>
    </>
  );
}

export default RegistrationForm;
