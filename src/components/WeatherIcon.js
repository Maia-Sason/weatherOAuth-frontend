import { SvgIcon } from "@material-ui/core";
import { ReactComponent as ClearDay } from "../icons/sun-1.svg";
import { ReactComponent as ClearNight } from "../icons/moon-1.svg";
import { ReactComponent as FewCloudsDay } from "../icons/partly-cloudy-1.svg";
import { ReactComponent as FewCloudsNight } from "../icons/partly-cloudy-2.svg";
import { ReactComponent as ScatteredClouds } from "../icons/mostly-cloudy-1.svg";
import { ReactComponent as BrokenClouds } from "../icons/mostly-cloudy-2.svg";
import { ReactComponent as ShowerRain } from "../icons/rain-1.svg";
import { ReactComponent as RainDay } from "../icons/rain-day.svg";
import { ReactComponent as RainNight } from "../icons/rain-night.svg";
import { ReactComponent as ThunderStorm } from "../icons/thunderstorm.svg";
import { ReactComponent as SnowDay } from "../icons/snow-day-1.svg";
import { ReactComponent as SnowNight } from "../icons/snow-full-moon-1.svg";
import { ReactComponent as Mist } from "../icons/mist.svg";
import { useState, useEffect } from "react";

const WeatherIcon = ({ icon, classType }) => {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState();

  return (
    <>
      {icon === "01d" && <ClearDay />}
      {icon === "01n" && <ClearNight />}
      {icon === "02d" && <FewCloudsDay />}
      {icon === "02n" && <FewCloudsNight />}

      {(icon === "03d" || icon === "03n") && <ScatteredClouds />}
      {(icon === "04d" || icon === "04n") && <BrokenClouds />}
      {(icon === "09d" || icon === "09n") && <ShowerRain />}
      {icon === "10d" && <RainDay />}
      {icon === "10n" && <RainNight />}
      {(icon === "11d" || icon === "11n") && <ThunderStorm />}
      {icon === "13d" && <SnowDay />}
      {icon === "13n" && <SnowNight />}
      {(icon === "50d" || icon === "50n") && <Mist />}
    </>
  );
};

export default WeatherIcon;
