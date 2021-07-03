import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import StickyBG from "./StickyBG";

test("<StickyBG /> matches snapshot", () => {
  const component = render(<StickyBG icon={"10d"} load={true} />);
  expect(component.container).toMatchSnapshot();
});

it("renders StickyBG without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<StickyBG icon={"10d"} load={true} />, div);
});
