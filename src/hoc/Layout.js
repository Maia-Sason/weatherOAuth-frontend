import { connect } from "react-redux";
import { checkAuthenticated, loadUser } from "../actions/user";
import {
  getUserLocation,
  getLocationFromMem,
  setButtonRefresh,
} from "../actions/geo";
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
  setButtonRefresh,
  longitude,
  latitude,
  allWeather,
  error,
}) {
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);

  useInterval(async () => {
    if (isAuthenticated) {
      await loadUser();
      await getUserLocation();
      await getUserWeather();
    }
  }, 3600000);

  const LocationFailInterval = async () => {
    useInterval(async () => {
      if (counter < 10) {
        if (isAuthenticated && error) {
          await getUserLocation();
          setCounter(counter + 1);
        }
      }
    }, 5000);
  };

  LocationFailInterval();

  useEffect(async () => {
    if (isAuthenticated && error && counter >= 10) {
      setButtonRefresh(true);
    } else {
      setButtonRefresh(false);
    }
  }, [counter]);

  useEffect(async () => {
    // It worked it worked!
    await checkAuthenticated();
  }, []);

  useEffect(async () => {
    if (isAuthenticated) {
      await loadUser();
      await getLocationFromMem();
      await getUserLocation();
      await getAllWeather();
    }
  }, [isAuthenticated]);

  // useEffect(async () => {
  //   if (isAuthenticated && error) {
  //     await getUserLocation();
  //   }
  // }, [error]);

  useEffect(async () => {
    if (isAuthenticated && longitude != undefined && latitude != undefined) {
      await getUserWeather(longitude, latitude);
      setCounter(0);
    }
    setLoading(true);
  }, [longitude, latitude]);

  return (
    <>{loading ? <> {children} </> : <LinearProgress color="primary" />}</>
  );
}

const mapStatetoProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
  longitude: state.user.currentLongitude,
  latitude: state.user.currentLatitude,
  allWeather: state.weather.allLocations,
  error: state.user.locationError,
});

export default connect(mapStatetoProps, {
  checkAuthenticated,
  getUserLocation,
  getUserWeather,
  getAllWeather,
  loadUser,
  getLocationFromMem,
  setButtonRefresh,
})(Layout);
