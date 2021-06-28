import { useState } from "react";
import alt1 from "../images/alt1.jpg";
import alt2 from "../images/alt2.jpg";
import alt3 from "../images/alt3.jpg";
import alt4 from "../images/alt4.jpg";
import alt5 from "../images/alt5.jpg";
import alt6 from "../images/alt6.jpg";
import alt7 from "../images/alt7.jpg";
import alt12 from "../images/alt12.jpg";

export const PaperBG = (icon) => {
  const [background, setBackground] = useState("");

  if (
    "02d" === icon ||
    "03d" === icon ||
    "04d" === icon ||
    "02n" === icon ||
    "03n" === icon ||
    "04n" === icon
  ) {
    return alt1;
  }

  if ("01d" === icon) {
    return alt2;
  }

  if ("01n" === icon) {
    return alt12;
  }

  if ("09d" === icon || "10d" === icon || "09n" === icon || "10n" === icon) {
    return alt3;
  }

  if ("11d" === icon || "11n" === icon) {
    return alt4;
  }

  if ("13d" === icon || "13n" === icon) {
    return alt5;
  }

  if ("50d" === icon || "50n" === icon) {
    return alt6;
  }
};
