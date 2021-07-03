import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import SideGlass from "./SideGlass";
import { ExpansionPanelActions } from "@material-ui/core";

test("<SideGlass /> matches snapshot", () => {
  const days = [
    {
      temp: 75.11,
      precipitation: 1,
      icon: "10d",
      day: 1625270400,
    },
    {
      temp: 59.34,
      precipitation: 0.92,
      icon: "10d",
      day: 1625356800,
    },
    {
      temp: 69.53,
      precipitation: 0.94,
      icon: "10d",
      day: 1625443200,
    },
    {
      temp: 77.14,
      precipitation: 0,
      icon: "04d",
      day: 1625529600,
    },
    {
      temp: 85.01,
      precipitation: 0,
      icon: "01d",
      day: 1625616000,
    },
  ];

  const component = render(
    <SideGlass
      days={days}
      feels={99.3}
      rain={0.3}
      wind={12.6}
      high={100.33}
      low={67.89}
    />
  );
  expect(component.container).toMatchSnapshot();
});

it("Renders SideGlass without crashing", () => {
  const div = document.createElement("div");

  const days = [
    {
      temp: 75.11,
      precipitation: 1,
      icon: "10d",
      day: 1625270400,
    },
    {
      temp: 59.34,
      precipitation: 0.92,
      icon: "10d",
      day: 1625356800,
    },
    {
      temp: 69.53,
      precipitation: 0.94,
      icon: "10d",
      day: 1625443200,
    },
    {
      temp: 77.14,
      precipitation: 0,
      icon: "04d",
      day: 1625529600,
    },
    {
      temp: 85.01,
      precipitation: 0,
      icon: "01d",
      day: 1625616000,
    },
  ];

  ReactDOM.render(
    <SideGlass
      days={days}
      feels={99.3}
      rain={0.3}
      wind={12.6}
      high={100.33}
      low={67.89}
    />,
    div
  );
});
