import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import WeatherCard from "../components/WeatherCard";
import MiniWeather from "../components/MiniWeather";
import WeatherIcon from "../components/WeatherIcon";
import DayWeatherCard from "../components/DayWeatherCard";
import SideInfo from "../components/SideInfo";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AsideTemp from "../components/AsideTemp";
import AsideWeather from "../components/AsideWeather";
import Wave from "react-wavify";

import {
  Typography,
  Grid,
  Box,
  makeStyles,
  Paper,
  Grow,
  Fade,
  Slide,
  Collapse,
  CircularProgress,
} from "@material-ui/core";
import WeatherBackground from "../components/WeatherBackground";

const HomeAlt = ({ isAuthenticated, user, weather }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
      flexGrow: 1,
      overFlow: "hidden",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "left",
      //height: "50vh",
    },
    sidePaper: {
      height: "100vh",
      backgroundColor: "rgba(100, 100, 100, .15)",
      backdropFilter: "blur(5px)",
      color: "white",
    },
    container: {
      height: "100%",
    },
    headerA: {
      fontSize: "2em",
      color: "white",
    },
    headerABG: {
      backgroundColor: "black",
      padding: "10px",
    },
    headerB: {
      position: "absolute",
      bottom: 10,
      left: 10,
      paddingLeft: "10px",
      fontSize: "7em",
      fontWeight: 100,
      color: "white",
      letterSpacing: "5px",
    },
    headerBox: {
      color: "white",
    },
    aside: {
      display: "inline",
      fontSize: "36px",
      color: "white",
      verticalAlign: "middle",
      letterSpacing: "2px",
    },
    headerC: {
      fontSize: "4em",
      textAlign: "center",
      letterSpacing: "3px",
    },
    smallGrid: {
      width: "100%",
      textAlign: "center",
    },
    paperLoad: {
      width: "100vw",
      height: "100vh",
      backgroundColor: "black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    asideA: {
      color: "white",

      backgroundColor: "black",
      padding: "2px",
      marginTop: "10px",
    },
    wave: {
      postion: "absolute",
      translate: "transform(50%, 50%)",
    },
  }));

  const classes = useStyles();

  const [load, setLoad] = useState(false);
  const [anim, setAnim] = useState(false);
  useEffect(() => {
    if (weather.main.temp != undefined) {
      setLoad(true);
      console.log(weather.main.temp);
      setAnim(true);
    }
  }, [weather.main.temp]);

  if (!isAuthenticated) {
    return <Redirect push to="/login" />;
  }

  return (
    <>
      {load ? (
        <WeatherBackground load={anim} icon={weather.weather.icon}>
          <div className={classes.root}>
            <Grid container spacing={0}>
              <Grid item md={7} xs={12}>
                <Grid container spacing={0} direction="column" justify="center">
                  <Box>
                    <Box className={classes.paper}>
                      <Slide in={anim} {...(anim ? { timeout: 2000 } : {})}>
                        <Typography className={classes.headerA}>
                          <span className={classes.headerABG}>
                            Hello {user}
                          </span>
                        </Typography>
                      </Slide>
                      <Fade in={anim} {...(anim ? { timeout: 2000 } : {})}>
                        <ExitToAppIcon className={classes.asideA} />
                      </Fade>
                    </Box>
                  </Box>
                  <Box className={classes.paper}>
                    <Grow in={anim} {...(anim ? { timeout: 3000 } : {})}>
                      <Typography className={classes.headerB}>
                        {weather.main.temp.toFixed(0)}&deg;
                        <Typography className={classes.aside}>
                          {weather.city}
                        </Typography>
                      </Typography>
                    </Grow>
                  </Box>
                </Grid>
              </Grid>
              <Grid item md={5} xs={12}>
                <Slide
                  direction={"left"}
                  in={anim}
                  {...(anim ? { timeout: 5000 } : {})}
                >
                  <Paper className={classes.sidePaper} square>
                    <Box>
                      <Typography className={classes.headerC}>
                        Today:
                      </Typography>
                      <AsideWeather></AsideWeather>
                      <AsideTemp></AsideTemp>
                      <AsideTemp></AsideTemp>
                      <Grid container spacing={0} justify="center"></Grid>
                    </Box>
                    <Box>
                      <Typography className={classes.headerC}>
                        This Week,
                      </Typography>
                      <Grid
                        container
                        style={{ padding: "20px" }}
                        justify="center"
                      >
                        {/* <Grid item xs={4}>
                          <DayWeatherCard
                            day={weather.days[1].day * 1000}
                            icon={weather.days[1].icon}
                            temp={weather.days[1].temp.toFixed(0)}
                          />
                        </Grid> */}
                        <Grid item xs={6}>
                          <DayWeatherCard
                            day={weather.days[2].day * 1000}
                            icon={weather.days[2].icon}
                            temp={weather.days[2].temp.toFixed(0)}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <DayWeatherCard
                            day={weather.days[3].day * 1000}
                            icon={weather.days[3].icon}
                            temp={weather.days[3].temp.toFixed(0)}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <DayWeatherCard
                            day={weather.days[4].day * 1000}
                            icon={weather.days[4].icon}
                            temp={weather.days[4].temp.toFixed(0)}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <DayWeatherCard
                            day={weather.days[5].day * 1000}
                            icon={weather.days[5].icon}
                            temp={weather.days[5].temp.toFixed(0)}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </Paper>
                </Slide>
              </Grid>
            </Grid>

            <Box className={classes.wave}>
              <Wave
                style={{
                  position: "absolute",
                  bottom: "10px",
                  zIndex: "-1",
                }}
                fill="rgba(200, 200, 200, 0.297)"
                paused={false}
                options={{
                  height: 10,
                  amplitude: 40,
                  speed: 0.13,
                  points: 2,
                }}
              />
              <Wave
                style={{ position: "absolute", bottom: "10px", zIndex: "-1" }}
                fill="rgba(100, 100, 100, 0.297)"
                paused={false}
                options={{
                  height: 10,
                  amplitude: 32,
                  speed: 0.1,
                  points: 2,
                }}
              />
              <Box
                style={{
                  backgroundColor: "rgba(100, 100, 100, 0.32)",
                  position: "absolute",
                  width: "100%",
                  bottom: 0,
                  height: "15px",
                }}
              ></Box>
            </Box>
          </div>
        </WeatherBackground>
      ) : (
        <Paper className={classes.paperLoad} square>
          <CircularProgress color="secondary" />
        </Paper>
      )}
    </>
  );
};

const mapStatetoProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
  user: state.user.name,
  weather: state.weather,
});

export default connect(mapStatetoProps)(HomeAlt);
