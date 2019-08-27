import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";
interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}
interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: ITodo[];
}
const url = "https://jsonplaceholder.typicode/todos";
export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<ITodo[]>(url);
    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data
    });
  };
};
