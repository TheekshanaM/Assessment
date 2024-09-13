import { Box, Button, Container, Drawer, Grid2 } from "@mui/material";
import TodoList from "../../components/todo/TodoList";
import { Formik } from "formik";
import FormSelect from "../../components/ui/FormSelect";
import { useState } from "react";
import AddTodo from "../../components/todo/manage-todo/AddTodo";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { openAddingDrawer, openEditDrawer } from "../../store/slices/todoSlice";
import EditTodo from "../../components/todo/manage-todo/EditTodo";

function Todo() {
  const [filter, setFilter] = useState<string>("all");

  const { openAddTodo, openEditTodo } = useAppSelector(
    (state) => state.todo.todos
  );
  const dispatch = useAppDispatch();

  const option = [
    {
      value: "all",
      label: "All",
    },
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
    <>
      <Container maxWidth="md" style={{ marginTop: "24px" }}>
        <Formik initialValues={{}} onSubmit={() => {}}>
          <>
            <Grid2 container>
              <Grid2 flexGrow={1}>
                <Button
                  variant="outlined"
                  onClick={() => dispatch(openAddingDrawer(true))}
                >
                  Add Todo
                </Button>
              </Grid2>
              <Grid2 width={150}>
                <FormSelect
                  name="filter"
                  label="Filter"
                  options={option}
                  selectProps={{
                    value: filter,
                    onChange: (e) => setFilter(e.target.value as string),
                  }}
                  formControlProps={{ variant: "outlined", size: "small" }}
                />
              </Grid2>
            </Grid2>

            <Box sx={{ my: 2 }}>
              <TodoList />
            </Box>
          </>
        </Formik>

        <Drawer
          anchor={"right"}
          open={openAddTodo}
          onClose={() => dispatch(openAddingDrawer(false))}
        >
          <AddTodo />
        </Drawer>

        <Drawer
          anchor={"right"}
          open={openEditTodo}
          onClose={() => dispatch(openEditDrawer(false))}
        >
          <EditTodo />
        </Drawer>
      </Container>
    </>
  );
}

export default Todo;
