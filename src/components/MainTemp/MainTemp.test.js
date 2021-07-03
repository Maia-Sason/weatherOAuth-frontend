import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import MainTemp from "./MainTemp";

test("<MainTemp /> matches snapshot", () => {
  const component = render(<MainTemp temp={12.12} />);
  expect(component.container).toMatchSnapshot();
});

it("renders MainTemp without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MainTemp temp={12.12} />, div);
});
