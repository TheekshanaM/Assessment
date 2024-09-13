import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import TodoList from "../../components/todo/TodoList";
import { Formik } from "formik";
import FormSelect from "../../components/ui/FormSelect";
import { useState } from "react";

function Todo() {
  const [filter, setFilter] = useState("all");
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
                <Button variant="outlined">Add Todo</Button>
              </Grid2>
              <Grid2 width={150}>
                <FormSelect
                  name="filter"
                  label="Filter"
                  options={option}
                  selectProps={{
                    value: filter,
                    onChange: (e) => setFilter(e.target.value),
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
      </Container>
    </>
  );
}

export default Todo;
