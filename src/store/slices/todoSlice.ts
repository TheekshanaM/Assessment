import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  ITodo,
  TTodoForm,
  TTodoStatusUpdate,
  TTodoUpdate,
} from "../../type/todo";
import useToast from "../../hooks/useToast";
import {
  createTodo,
  getTodoList,
  updateStatus,
  updateTodoItem,
} from "../../services/todo-service";

export interface IInitialTodoState {
  todos: {
    data: Array<ITodo>;
    isLoading: boolean;
    openAddTodo: boolean;
    openEditTodo: boolean;
  };
  selectedTodo: ITodo | null;
}

const initialState: IInitialTodoState = {
  todos: {
    data: [],
    isLoading: false,
    openAddTodo: false,
    openEditTodo: false,
  },
  selectedTodo: null,
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

export const updateTodoStatus = createAsyncThunk(
  "todos/updateTodoStatus",
  async (todo: TTodoStatusUpdate, { dispatch, rejectWithValue }) => {
    try {
      const toast = useToast();
      const { ok, error } = updateStatus(todo);

      if (!ok && error) {
        toast.error(error);
        return rejectWithValue(error as string);
      }

      dispatch(getTodo());
    } catch (error) {
      return rejectWithValue(error as string);
    }
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (todo: TTodoUpdate, { dispatch, rejectWithValue }) => {
    try {
      const toast = useToast();
      const { ok, error } = updateTodoItem(todo);

      if (!ok && error) {
        toast.error(error);
        return rejectWithValue(error as string);
      }

      dispatch(openEditDrawer(false));
      dispatch(getTodo());
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
    openEditDrawer: (state, action: PayloadAction<boolean>) => {
      state.todos.openEditTodo = action.payload;
      if (!action.payload) {
        state.selectedTodo = null;
      }
    },
    selectTodo: (state, action: PayloadAction<ITodo>) => {
      state.selectedTodo = action.payload;
    },
  },
  // extraReducers(builder) {
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
  // },
});

// Action creators are generated for each case reducer function
export const { openAddingDrawer, setTodos, openEditDrawer, selectTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
