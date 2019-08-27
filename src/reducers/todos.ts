import { ITodo, FetchTodosAction } from "../actions";
import { ActionTypes } from "../actions/types";
export const todosReducer = (state: ITodo[] = [], action: FetchTodosAction) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};
