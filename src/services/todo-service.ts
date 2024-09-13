import { ServiceResponse } from "../type/service";
import { ITodo, TTodoForm } from "../type/todo";
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

export function getTodoList(): ServiceResponse<ITodo> {
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
