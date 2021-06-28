import { connect } from "react-redux";
import { checkAuthenticated, loadUser } from "../actions/user";
import { getUserLocation } from "../actions/geo";
import { getUserWeather } from "../actions/weather";
import { Redirect } from "react-router-dom";
import { LinearProgress } from "@material-ui/core";
import { useState, useEffect } from "react";

function Layout({
  children,
  isAuthenticated,
  loadUser,
  checkAuthenticated,
  getUserLocation,
  getUserWeather,
  longitude,
  latitude,
}) {
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    // It worked it worked!
    await checkAuthenticated();
  }, []);

  useEffect(async () => {
    if (isAuthenticated) {
      await loadUser();
      await getUserLocation();
    }
  }, [isAuthenticated]);

  useEffect(async () => {
    if (isAuthenticated && longitude != undefined && latitude != undefined) {
      console.log("location is...:" + longitude, latitude);
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
});

export default connect(mapStatetoProps, {
  checkAuthenticated,
  getUserLocation,
  getUserWeather,
  loadUser,
})(Layout);
