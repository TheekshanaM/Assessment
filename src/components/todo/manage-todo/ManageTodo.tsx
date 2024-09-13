import { Formik, FormikHelpers } from "formik";
import FormInput from "../../../components/ui/FormInput";
import { Box, Button, Grid2 } from "@mui/material";
import { ITodo, TTodoForm } from "../../../type/todo";
import { todoFormValidationSchema } from "./TodoFormValidation";
import { addTodo, updateTodo } from "../../../store/slices/todoSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";

interface ManageTodoProps {
  type: "add" | "update";
  todo: ITodo | null;
}
function ManageTodo({ type, todo }: ManageTodoProps) {
  const dispatch = useAppDispatch();
  const { selectedTodo } = useAppSelector((state) => state.todo);

  const initialValues: TTodoForm = { title: "", description: "" };
  if (selectedTodo !== null) {
    initialValues.title = selectedTodo.title;
    initialValues.description = selectedTodo.description;
  }

  const handleFormSubmit = async (
    values: TTodoForm,
    { setSubmitting, resetForm }: FormikHelpers<TTodoForm>
  ) => {
    if (type === "add") {
      dispatch(addTodo(values));
    }

    if (type === "update" && todo) {
      dispatch(updateTodo({ ...values, id: todo.id }));
    }
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
          enableReinitialize
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
                  {type === "update" && "Edit Todo"}
                  {type === "add" && "Add Todo"}
                </Button>
              </Box>
            </>
          )}
        </Formik>
      </Box>
    </>
  );
}

export default ManageTodo;
