import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { deleteTodo, openDeleteModel } from "../../../store/slices/todoSlice";

function DeleteTodo() {
  const { openDeleteTodo } = useAppSelector((state) => state.todo.todos);
  const { selectedTodo } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(openDeleteModel(false));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };
  return (
    <>
      {selectedTodo && (
        <Dialog
          open={openDeleteTodo}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          aria-modal="true"
        >
          <DialogTitle id="alert-dialog-title">{"Warning !"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete this item?
            </DialogContentText>
            <DialogContentText>Title - {selectedTodo?.title}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={() => handleDelete(selectedTodo?.id)} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}

export default DeleteTodo;
