import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Greeting from "./Greeting";

test("<Greeting /> matches snapshot", () => {
  const component = render(<Greeting name={"Billy"} />);
  expect(component.container).toMatchSnapshot();
});

it("renders Greeting without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Greeting name={"Billy"} />, div);
});
