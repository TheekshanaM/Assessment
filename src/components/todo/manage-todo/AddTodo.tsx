import { Formik } from "formik";
import FormInput from "../../../components/ui/FormInput";
import { Box, Button, Grid2 } from "@mui/material";

function AddTodo() {
  const initialValues = { title: "", description: "" };

  return (
    <>
      <Box width={400} display={"flex"} p={2}>
        <Formik initialValues={initialValues} onSubmit={() => {}}>
          {({ isValid, isSubmitting, handleSubmit }) => (
            <>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid2 container spacing={2}>
                  <Grid2 size={{ xs: 12 }}>
                    <FormInput name="title" label="Title" />
                  </Grid2>

                  <Grid2 size={{ xs: 12 }}>
                    <FormInput name="description" label="Description" />
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
