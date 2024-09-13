export interface ITodo {
  id: string;
  title: string;
  description: string;
  status: "completed" | "incomplete";
}

export type TTodoForm = Pick<ITodo, "title" | "description">;

export type TTodoStatusUpdate = Pick<ITodo, "id" | "status">;

export type TTodoUpdate = Omit<ITodo, "status">;
