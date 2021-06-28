import {
  GET_GEO_WEATHER_SUCCESS,
  GET_GEO_WEATHER_FAIL,
} from "../actions/types.js";

const initState = {
  weather: {},
  main: {},
  visibility: "",
  wind: {},
  city: "",
  sunrise: "",
  sunset: "",
};

export default function (state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_GEO_WEATHER_SUCCESS:
      return {
        weather: payload.weather,
        main: payload.main,
        visibility: payload.visibility,
        wind: payload.wind,
        city: payload.name,
        sunrise: payload.sunrise,
        sunset: payload.sunset,
      };
    case GET_GEO_WEATHER_FAIL:
    default:
      return state;
  }
}
