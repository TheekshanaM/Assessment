import { useParams } from "react-router-dom";

function EditTodo() {
  const { id } = useParams();
  console.log(id);

  return <>edit todo</>;
}

export default EditTodo;
