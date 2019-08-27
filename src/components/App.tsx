import React from "react";
import { connect } from "react-redux";
import { ITodo, fetchTodos } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: ITodo[];
  fetchTodos(): any;
}
class _App extends React.Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };
  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: ITodo) => {
      return <div key={todo.id}>{todo.title}</div>;
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
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
  { fetchTodos }
)(_App);
