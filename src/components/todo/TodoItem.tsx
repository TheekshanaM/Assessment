import { Grid2, Paper, SelectChangeEvent, Typography } from "@mui/material";
import FormSelect from "../ui/FormSelect";
import { ITodo } from "../../type/todo";
import { Formik, FormikErrors } from "formik";

function TodoItem({ todo }: { todo: ITodo }) {
  const option = [
    {
      value: "incomplete",
      label: "Incomplete",
    },
    {
      value: "completed",
      label: "Completed",
    },
  ];

  const handleChange = (
    e: SelectChangeEvent<unknown>,
    setFieldValue: (
      field: string,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value: any,
      shouldValidate?: boolean
    ) => Promise<void | FormikErrors<{
      sort: string;
    }>>
  ) => {
    const value = e.target.value as string;
    setFieldValue(e.target.name, value);
  };
  return (
    <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
      <Grid2 container alignItems="center" justifyContent="space-between">
        {/* Title */}
        <Grid2>
          <Typography variant="h6">{todo.title}</Typography>
        </Grid2>

        {/* Status Select */}
        <Grid2>
          <Formik initialValues={{}} onSubmit={() => {}}>
            {({ setFieldValue }) => (
              <FormSelect
                name="status"
                label="Status"
                options={option}
                selectProps={{
                  value: todo.status,
                  onChange: (e) => {
                    handleChange(e, setFieldValue);
                  },
                }}
                formControlProps={{ variant: "outlined", size: "small" }}
              />
            )}
          </Formik>
        </Grid2>
      </Grid2>

      {/* Description below */}
      <Typography variant="body1" style={{ marginTop: "8px" }}>
        {todo.description}
      </Typography>
    </Paper>
  );
}

export default TodoItem;
