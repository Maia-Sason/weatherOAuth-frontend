import { connect } from "react-redux";
import { checkAuthenticated, loadUser } from "../actions/user";
import { getUserLocation, getLocationFromMem } from "../actions/geo";
import { getUserWeather, getAllWeather } from "../actions/weather";
import { Redirect } from "react-router-dom";
import { LinearProgress } from "@material-ui/core";
import { useState, useEffect, useRef } from "react";
import { useInterval } from "../hooks/useInterval";

function Layout({
  children,
  isAuthenticated,
  loadUser,
  checkAuthenticated,
  getUserLocation,
  getLocationFromMem,
  getUserWeather,
  getAllWeather,
  longitude,
  latitude,
  allWeather,
}) {
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);

  useInterval(async () => {
    setCounter(counter + 1);
    if (isAuthenticated) {
      await loadUser();
      await getUserLocation();
      await getUserWeather();
    }
  }, 3600000);

  useEffect(async () => {
    // It worked it worked!
    await checkAuthenticated();
  }, []);

  useEffect(async () => {
    if (isAuthenticated) {
      await loadUser();
      await getAllWeather();
      await getLocationFromMem();
      await getUserLocation();
    }
  }, [isAuthenticated]);

  useEffect(async () => {
    if (isAuthenticated && longitude != undefined && latitude != undefined) {
      await getUserWeather(longitude, latitude);
    }
    setLoading(true);
  }, [longitude, latitude]);

  return <>{loading ? children : <LinearProgress color="primary" />}</>;
}

const mapStatetoProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
  longitude: state.user.currentLongitude,
  latitude: state.user.currentLatitude,
  allWeather: state.weather.allLocations,
});

export default connect(mapStatetoProps, {
  checkAuthenticated,
  getUserLocation,
  getUserWeather,
  getAllWeather,
  loadUser,
  getLocationFromMem,
})(Layout);
