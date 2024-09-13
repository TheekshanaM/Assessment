import { ServiceResponse } from "../type/service";
import { ITodo, TTodoForm, TTodoStatusUpdate, TTodoUpdate } from "../type/todo";
import { v4 as uuidv4 } from "uuid";

export function createTodo(todo: TTodoForm): ServiceResponse<ITodo> {
  try {
    const existingTodos = localStorage.getItem("todos");

    const newTodo: ITodo = { ...todo, status: "incomplete", id: uuidv4() };

    if (existingTodos) {
      const jsonObject = JSON.parse(existingTodos);
      jsonObject.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(jsonObject));
    } else {
      localStorage.setItem("todos", JSON.stringify([newTodo]));
    }

    return { ok: true, data: newTodo };
  } catch (error) {
    console.log(error);

    return { ok: false, error: "Unexpected Error." };
  }
}

export function getTodoList(): ServiceResponse<Array<ITodo>> {
  try {
    const existingTodos = localStorage.getItem("todos");

    let jsonObject = [];

    if (existingTodos) {
      jsonObject = JSON.parse(existingTodos);
    }

    return { ok: true, data: jsonObject };
  } catch (error) {
    console.log(error);

    return { ok: false, error: "Unexpected Error." };
  }
}

export function updateStatus(
  todo: TTodoStatusUpdate
): ServiceResponse<TTodoStatusUpdate> {
  try {
    const existingTodos = localStorage.getItem("todos");

    let jsonObject = [];
    // find todo item and update status
    if (existingTodos) {
      jsonObject = JSON.parse(existingTodos) as Array<ITodo>;

      jsonObject.map((item) => {
        if (item.id === todo.id) {
          item.status = todo.status;
        }
        return item;
      });
      localStorage.setItem("todos", JSON.stringify(jsonObject));
    } else {
      return { ok: false, error: "Invalid Item." };
    }

    return { ok: true, data: todo };
  } catch (error) {
    console.log(error);

    return { ok: false, error: "Unexpected Error." };
  }
}

// update todo title and description
export function updateTodoItem(
  todo: TTodoUpdate
): ServiceResponse<TTodoUpdate> {
  try {
    const existingTodos = localStorage.getItem("todos");

    let jsonObject = [];
    // find todo item and update todo
    if (existingTodos) {
      jsonObject = JSON.parse(existingTodos) as Array<ITodo>;

      const currentTodo = jsonObject.find((item) => item.id === todo.id);

      if (currentTodo?.status === "completed") {
        return { ok: false, error: "Completed todo can not change." };
      }
      jsonObject.map((item) => {
        if (item.id === todo.id) {
          item.title = todo.title;
          item.description = todo.description;
        }
        return item;
      });
      localStorage.setItem("todos", JSON.stringify(jsonObject));
    } else {
      return { ok: false, error: "Invalid Item." };
    }

    return { ok: true, data: todo };
  } catch (error) {
    console.log(error);

    return { ok: false, error: "Unexpected Error." };
  }
}

// delete todo
export function deleteTodoItem(id: string): ServiceResponse<string> {
  try {
    const existingTodos = localStorage.getItem("todos");

    let jsonObject = [];
    // find todo item and update todo
    if (existingTodos) {
      jsonObject = JSON.parse(existingTodos) as Array<ITodo>;

      const filetedData = jsonObject.filter((item) => {
        if (item.id !== id) {
          return item;
        }
      });
      localStorage.setItem("todos", JSON.stringify(filetedData));
    } else {
      return { ok: false, error: "Invalid Item." };
    }

    return { ok: true, data: id };
  } catch (error) {
    console.log(error);

    return { ok: false, error: "Unexpected Error." };
  }
}
