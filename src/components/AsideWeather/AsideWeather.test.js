import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import AsideWeather from "./AsideWeather";

test("<AsideWeather/> matches snapshot", () => {
  const component = render(<AsideWeather />);
  expect(component.container).toMatchSnapshot();
});

it("Renders AsideWeather without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AsideWeather />, div);
});
