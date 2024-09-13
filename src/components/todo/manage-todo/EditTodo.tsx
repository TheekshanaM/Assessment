import { useAppSelector } from "../../../hooks/reduxHooks";
import ManageTodo from "./ManageTodo";

function EditTodo() {
  const selectedTodo = useAppSelector((state) => state.todo.selectedTodo);

  return (
    <>
      <ManageTodo type="update" todo={selectedTodo} />
    </>
  );
}

export default EditTodo;
