import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  Grid2,
  IconButton,
  Paper,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import FormSelect from "../ui/FormSelect";
import { ITodo, TTodoStatusUpdate } from "../../type/todo";
import { useAppDispatch } from "../../hooks/reduxHooks";
import {
  openDeleteModel,
  openEditDrawer,
  selectTodo,
  updateTodoStatus,
} from "../../store/slices/todoSlice";

function TodoItem({ todo }: { todo: ITodo }) {
  const dispatch = useAppDispatch();
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

  const handleChange = (e: SelectChangeEvent<unknown>, id: string) => {
    const value = e.target.value as "completed" | "incomplete";
    const todo: TTodoStatusUpdate = {
      id: id,
      status: value,
    };
    dispatch(updateTodoStatus(todo));
  };

  const editTodo = (todo: ITodo) => {
    dispatch(selectTodo(todo));
    dispatch(openEditDrawer(true));
  };

  const deleteConfirmation = (todo: ITodo) => {
    dispatch(selectTodo(todo));
    dispatch(openDeleteModel(true));
  };

  return (
    <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
      <Grid2 container alignItems="center" justifyContent="space-between">
        {/* Title */}
        <Grid2>
          <Typography variant="h6">{todo.title}</Typography>
        </Grid2>

        <Grid2 container>
          {/* Status Select */}
          <Grid2>
            <FormSelect
              name="status"
              label="Status"
              options={option}
              selectProps={{
                value: todo.status,
                onChange: (e) => {
                  handleChange(e, todo.id);
                },
              }}
              formControlProps={{ variant: "outlined", size: "small" }}
            />
          </Grid2>

          <Grid2 sx={{ ml: 2 }}>
            <IconButton onClick={() => editTodo(todo)}>
              <BorderColorIcon fontSize="small" />
            </IconButton>
          </Grid2>

          <Grid2>
            <IconButton onClick={() => deleteConfirmation(todo)}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Grid2>
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
