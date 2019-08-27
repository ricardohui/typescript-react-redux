import React from "react";
import { connect } from "react-redux";
import { ITodo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: ITodo[];
  fetchTodos: Function; // due to react-redux and redux thunk type definition
  deleteTodo: typeof deleteTodo;
}
interface AppState {
  isFetching: boolean;
}
class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { isFetching: false };
  }
  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ isFetching: false });
    }
  }
  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ isFetching: true });
  };
  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };
  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: ITodo) => {
      return (
        <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.state.isFetching ? "LOADING" : null}
        {this.renderList()}
      </div>
    );
  }
}
const mapStateToProps = (state: StoreState) => {
  return { todos: state.todos };
};
// can be further simplified to this
// const mapStateToProps = ({todos}: StoreState) => {
//   return { todos };
// };

export const App = connect(
  mapStateToProps,
  { fetchTodos, deleteTodo }
)(_App);
