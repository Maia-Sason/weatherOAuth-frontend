import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import AsideTemp from "./AsideTemp";
import { ExpansionPanelActions } from "@material-ui/core";

test("<AsideTemp /> matches snapshot", () => {
  const component = render(<AsideTemp text={"Some text"} temp={67} />);
  expect(component.container).toMatchSnapshot();
});

it("Renders AsideTemp without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AsideTemp />, div);
});
