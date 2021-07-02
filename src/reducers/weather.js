import {
  GET_GEO_WEATHER_SUCCESS,
  GET_GEO_WEATHER_FAIL,
} from "../actions/types.js";

const initState = {
  weather: {},
  main: {},
  visibility: "",
  wind: {},
  precipitation: "",
  city: "",
  country: "",
  sunrise: "",
  sunset: "",
  days: [
    {
      temp: "",
      precipitation: "",
      icon: "",
    },

    {
      temp: "",
      precipitation: "",
      icon: "",
    },

    {
      temp: "",
      precipitation: "",
      icon: "",
    },
  ],
};

export default function (state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_GEO_WEATHER_SUCCESS:
      return {
        weather: payload.list[0].weather[0],
        main: payload.list[0].main,
        visibility: payload.list[0].visibility,
        precipitation: payload.list[0].pop,
        wind: payload.list[0].wind,
        city: payload.city.name,
        country: payload.city.country,
        sunrise: payload.city.sunrise,
        sunset: payload.city.sunset,
        days: [
          {
            temp: payload.list[1].main.temp,
            precipitation: payload.list[1].pop,
            icon: payload.list[1].weather[0].icon,
            day: payload.list[1].dt,
          },
          {
            temp: payload.list[9].main.temp,
            precipitation: payload.list[9].pop,
            icon: payload.list[9].weather[0].icon,
            day: payload.list[9].dt,
          },
          {
            temp: payload.list[17].main.temp,
            precipitation: payload.list[17].pop,
            icon: payload.list[17].weather[0].icon,
            day: payload.list[17].dt,
          },
          {
            temp: payload.list[25].main.temp,
            precipitation: payload.list[25].pop,
            icon: payload.list[25].weather[0].icon,
            day: payload.list[25].dt,
          },
          {
            temp: payload.list[33].main.temp,
            precipitation: payload.list[33].pop,
            icon: payload.list[33].weather[0].icon,
            day: payload.list[33].dt,
          },
        ],
      };
    case GET_GEO_WEATHER_FAIL:
    default:
      return state;
  }
}
