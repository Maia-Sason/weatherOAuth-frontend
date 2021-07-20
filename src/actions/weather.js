import axios from "axios";
import {
  GET_GEO_WEATHER_SUCCESS,
  GET_GEO_WEATHER_FAIL,
  GET_ALL_WEATHER_SUCCESS,
  GET_ALL_WEATHER_FAIL,
} from "./types";

const location = "https://weatherlocation.herokuapp.com";

export const getUserWeather = (longitude, latitude) => async (dispatch) => {
  const config = {
    credentials: "include",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
  };

  const body = JSON.stringify({
    lat: latitude,
    long: longitude,
  });

  try {
    const res = await axios.post(`${location}/api/weather`, body, config);
    if (res.data.error) {
      dispatch({
        type: GET_GEO_WEATHER_FAIL,
      });
    } else {
      dispatch({
        type: GET_GEO_WEATHER_SUCCESS,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_GEO_WEATHER_FAIL,
      payload: "error getting weather information",
    });
  }
};

export const getAllWeather = () => async (dispatch) => {
  const config = {
    credentials: "include",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
  };

  try {
    const res = await axios.get(`${location}/api/all`, config);
    if (res.data.error) {
      dispatch({
        type: GET_ALL_WEATHER_FAIL,
      });
    } else {
      dispatch({
        type: GET_ALL_WEATHER_SUCCESS,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ALL_WEATHER_FAIL,
    });
  }
};
