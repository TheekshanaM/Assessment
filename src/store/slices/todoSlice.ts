import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITodo, TTodoForm } from "../../type/todo";
import useToast from "../../hooks/useToast";
import { createTodo, getTodoList } from "../../services/todo-service";

export interface IInitialTodoState {
  todos: {
    data: Array<ITodo>;
    isLoading: boolean;
    openAddTodo: boolean;
  };
}

const initialState: IInitialTodoState = {
  todos: { data: [], isLoading: false, openAddTodo: false },
};

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (todo: TTodoForm, { dispatch, rejectWithValue }) => {
    try {
      const toast = useToast();
      const { ok, error } = createTodo(todo);

      if (!ok && error) {
        toast.error(error);
        return rejectWithValue(error as string);
      }
      toast.success("Successfully added.");
      dispatch(openAddingDrawer(false));
      dispatch(getTodo());
    } catch (error) {
      return rejectWithValue(error as string);
    }
  }
);

export const getTodo = createAsyncThunk(
  "todos/getTodo",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const toast = useToast();
      const { ok, data, error } = getTodoList();

      if (!ok && error) {
        toast.error(error);
        return rejectWithValue(error as string);
      }

      if (data) {
        dispatch(setTodos(data));
      }
    } catch (error) {
      return rejectWithValue(error as string);
    }
  }
);

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    openAddingDrawer: (state, action: PayloadAction<boolean>) => {
      state.todos.openAddTodo = action.payload;
    },
    setTodos: (state, action: PayloadAction<Array<ITodo>>) => {
      state.todos.data = action.payload;
    },
  },
  extraReducers(builder) {
    // builder
    //   .addCase(addTodo.pending, (state) => {
    //     // state.chatbots.isLoading = true;
    //   })
    //   .addCase(addTodo.fulfilled, (state, action) => {
    //     // state.chatbots.isLoading = false;
    //   })
    //   .addCase(addTodo.rejected, (state, action) => {
    //     // state.chatbots.isLoading = false;
    //   })
    //   .addCase(getTodo.pending, (state) => {
    //     // state.chatbots.isLoading = true;
    //   })
    //   .addCase(getTodo.fulfilled, (state, action) => {
    //     // state.chatbots.isLoading = false;
    //   })
    //   .addCase(getTodo.rejected, (state, action) => {
    //     // state.chatbots.isLoading = false;
    //   });
  },
});

// Action creators are generated for each case reducer function
export const { openAddingDrawer, setTodos } = todoSlice.actions;

export default todoSlice.reducer;
