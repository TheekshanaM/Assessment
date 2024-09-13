import { Grid2 } from "@mui/material";
import TodoItem from "./TodoItem";
import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
      description: "Go through React documentation",
      status: "incomplete",
    },
    {
      id: 2,
      title: "Learn Material UI",
      description: "Check Material UI components",
      status: "incomplete",
    },
    {
      id: 3,
      title: "Build ToDo App",
      description: "Use React and Material UI",
      status: "incomplete",
    },
  ]);

  const toggleStatus = (id, newStatus) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: newStatus } : todo
      )
    );
  };

  return (
    <Grid2 container direction="column">
      {todos.map((todo) => (
        <Grid2 key={todo.id}>
          <TodoItem todo={todo} toggleStatus={toggleStatus} />
        </Grid2>
      ))}
    </Grid2>
  );
}

export default TodoList;
