import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Navbar from "./component/NavBar";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("render navbar without crashing", () => {
  const { getByText } = render(<Navbar />);

  getByText(/Womens's World Cup/);
  getByText(/Team/);
});
