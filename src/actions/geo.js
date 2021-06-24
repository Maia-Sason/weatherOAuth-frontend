import axios from "axios";
import {
  GET_LOCATION_SUCCESS,
  GET_LOCATION_FAIL,
  GET_GEO_WEATHER_SUCCESS,
  GET_GEO_WEATHER_FAIL,
} from "./types";

const getUserLocation = () => {
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log(`Postion: ${latitude}, ${longitude}`);
  }

  function error() {
    console.error("Issue retrieving location!");
  }

  if (!navigator.geolocation) {
    console.log("Geolocation not supported by your browser");
  } else {
    console.log("Locating ...");
    navigator.geolocation.getCurrentPosition(success, error);
  }
};
