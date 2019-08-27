import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";
export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}
export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: ITodo[];
}
const url = "https://jsonplaceholder.typicode.com/todos";
export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<ITodo[]>(url);
    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data
    });
  };
};
