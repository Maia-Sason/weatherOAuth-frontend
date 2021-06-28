import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import WeatherCard from "../components/WeatherCard";
import WeatherCardLoad from "../components/WeatherCardLoad";
import { Typography, Grid } from "@material-ui/core";

function Home({ isAuthenticated, user, weather }) {
  const [weatherLoad, setLoad] = useState(false);

  useEffect(() => {
    if (weather.main.temp != undefined) {
      setLoad(true);
    }
  }, [weather.main.temp]);

  if (!isAuthenticated) {
    return <Redirect push to="/login" />;
  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="flex-start"
    >
      <Typography>Welcome {user}</Typography>

      <div>
        {weatherLoad ? (
          <WeatherCard
            farenheight={weather.main.temp}
            feelsLike={weather.main.feels_like}
            description={weather.weather[0].description}
            city={weather.city}
            icon={weather.weather[0].icon}
          />
        ) : (
          <WeatherCardLoad />
        )}
      </div>
    </Grid>
  );
}

const mapStatetoProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
  user: state.user.name,
  weather: state.weather,
});

export default connect(mapStatetoProps)(Home);
