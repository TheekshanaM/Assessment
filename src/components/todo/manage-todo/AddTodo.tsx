import { Formik, FormikHelpers } from "formik";
import FormInput from "../../../components/ui/FormInput";
import { Box, Button, Grid2 } from "@mui/material";
import { TTodoForm } from "../../../type/todo";
import { todoFormValidationSchema } from "./TodoFormValidation";
import { addTodo } from "../../../store/slices/todoSlice";
import { useAppDispatch } from "../../../hooks/reduxHooks";

function AddTodo() {
  const dispatch = useAppDispatch();

  const initialValues: TTodoForm = { title: "", description: "" };

  const handleFormSubmit = async (
    values: TTodoForm,
    { setSubmitting, resetForm }: FormikHelpers<TTodoForm>
  ) => {
    dispatch(addTodo(values));
    resetForm();
    setSubmitting(false);
  };

  return (
    <>
      <Box width={400} p={2}>
        <Formik
          initialValues={initialValues}
          validationSchema={todoFormValidationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ isValid, isSubmitting, handleSubmit }) => (
            <>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid2 container spacing={2}>
                  <Grid2 size={{ xs: 12 }}>
                    <FormInput name="title" label="Title" />
                  </Grid2>

                  <Grid2 size={{ xs: 12 }}>
                    <FormInput
                      name="description"
                      label="Description"
                      multiline
                      rows={5}
                    />
                  </Grid2>
                </Grid2>

                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={!isValid || isSubmitting}
                >
                  Add Todo
                </Button>
              </Box>
            </>
          )}
        </Formik>
      </Box>
    </>
  );
}

export default AddTodo;
