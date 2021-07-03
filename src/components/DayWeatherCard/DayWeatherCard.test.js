import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import DayWeatherCard from "./DayWeatherCard";

test("Matches snapshot", () => {
  const component = render(<DayWeatherCard />);
  expect(component.container).toMatchSnapshot();
});

it("Renders DayWeatherCard without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DayWeatherCard />, div);
});
