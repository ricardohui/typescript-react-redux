import React from "react";
import ReactDOM from "react-dom";

interface IProps {
  color?: string;
}

const App = (props: IProps): JSX.Element => {
  return <div>{props.color}</div>;
};
ReactDOM.render(<App color="red" />, document.getElementById("root"));
