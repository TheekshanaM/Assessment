import { Grid2, Paper, Typography } from "@mui/material";
import FormSelect from "../ui/FormSelect";

function TodoItem({ todo, toggleStatus }) {
  const option = [
    {
      value: "incomplete",
      label: "Incomplete",
    },
    {
      value: "complete",
      label: "Complete",
    },
  ];
  return (
    <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
      <Grid2 container alignItems="center" justifyContent="space-between">
        {/* Title */}
        <Grid2>
          <Typography variant="h6">{todo.title}</Typography>
        </Grid2>

        {/* Status Select */}
        <Grid2>
          <FormSelect
            name="status"
            label="Status"
            options={option}
            selectProps={{
              value: todo.status,
              onChange: (e) => toggleStatus(todo.id, e.target.value),
            }}
            formControlProps={{ variant: "outlined", size: "small" }}
          />
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
