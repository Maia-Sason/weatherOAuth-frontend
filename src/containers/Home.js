import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import WeatherCard from "../components/WeatherCard";
import MiniWeather from "../components/Trash/MiniWeather";
import WeatherIcon from "../components/WeatherIcon";
import WeatherCardLoad from "../components/WeatherCardLoad";
import SideInfo from "../components/Trash/SideInfo";
import { Typography, Grid, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
  },
  container: {
    height: "100%",
  },
}));

function Home({ isAuthenticated, user, weather }) {
  const [weatherLoad, setLoad] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (weather.main.temp != undefined) {
      setLoad(true);
    }
  }, [weather.main.temp]);

  if (!isAuthenticated) {
    return <Redirect push to="/login" />;
  }

  return (
    <div className={classes.root}>
      <Box className={classes.paper}>
        <Typography variant="h5">Welcome {user}</Typography>
        <WeatherIcon icon={"10n"} fill="black" />
      </Box>
      <Grid container spacing={0}>
        {weatherLoad ? (
          <>
            <Grid item xs={8}>
              <Box className={classes.paper} position="relative">
                <WeatherCard
                  farenheight={weather.main.temp}
                  feelsLike={0.14}
                  description={weather.weather.description}
                  city={weather.city}
                  icon={weather.weather.icon}
                />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box height="100%" className={classes.paper} position="relative">
                <SideInfo className={classes.container} />
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box className={classes.paper}>
                <Typography variant="h5">Next 4 days:</Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <MiniWeather></MiniWeather>
            </Grid>
            <Grid item xs={3}>
              <MiniWeather></MiniWeather>
            </Grid>
            <Grid item xs={3}>
              <MiniWeather></MiniWeather>
            </Grid>
            <Grid item xs={3}>
              <MiniWeather></MiniWeather>
            </Grid>
          </>
        ) : (
          <>
            <WeatherCardLoad />
          </>
        )}
      </Grid>
    </div>
  );
}

const mapStatetoProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
  user: state.user.name,
  weather: state.weather,
});

export default connect(mapStatetoProps)(Home);
