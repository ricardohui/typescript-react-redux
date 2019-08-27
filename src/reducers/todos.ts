import { ITodo, FetchTodosAction, ActionTypes } from "../actions";

export const todosReducer = (state: ITodo[] = [], action: FetchTodosAction) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};
