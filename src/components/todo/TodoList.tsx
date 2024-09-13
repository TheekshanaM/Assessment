import { Grid2 } from "@mui/material";
import TodoItem from "./TodoItem";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { getTodo } from "../../store/slices/todoSlice";

function TodoList() {
  const todos = useAppSelector((state) => state.todo.todos.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid2 container direction="column">
      {todos.map((todo) => (
        <Grid2 key={todo.id}>
          <TodoItem
            todo={todo}
            // toggleStatus={toggleStatus}
          />
        </Grid2>
      ))}
    </Grid2>
  );
}

export default TodoList;
