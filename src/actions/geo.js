import axios from "axios";
import {
  GET_LOCATION_SUCCESS,
  GET_LOCATION_FAIL,
  GET_GEO_WEATHER_SUCCESS,
  GET_GEO_WEATHER_FAIL,
} from "./types";

export const getLocationFromMem = () => async (dispatch) => {
  const latitude = localStorage.getItem("latitude");
  const longitude = localStorage.getItem("longitude");

  if (latitude !== undefined && longitude !== undefined) {
    dispatch({
      type: GET_LOCATION_SUCCESS,
      payload: [latitude, longitude],
    });
  } else {
    dispatch({
      type: GET_LOCATION_FAIL,
      payload: "No location saved in memory.",
    });
  }
};

export const getUserLocation = () => async (dispatch) => {
  function success(position) {
    const latitude = position.coords.latitude.toFixed(2);
    const longitude = position.coords.longitude.toFixed(2);

    localStorage.setItem("latitude", latitude);
    localStorage.setItem("longitude", longitude);
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
    axios.post("/location", body, config);
    dispatch({
      type: GET_LOCATION_SUCCESS,
      payload: [latitude, longitude],
    });
  }
  function error() {
    dispatch({
      type: GET_LOCATION_FAIL,
      payload: "Issue retrieving geocoordinates.",
    });
  }
  if (!navigator.geolocation) {
    dispatch({
      type: GET_LOCATION_FAIL,
      payload: "Geolocation not supported by your browser",
    });
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
};
