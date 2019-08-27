import { FetchTodosAction, DeleteTodoAction } from "./todos";
export enum ActionTypes {
  fetchTodos, // by default, typescript will assign the first item as 0.
  deleteTodo
}

export type Action = FetchTodosAction | DeleteTodoAction;
