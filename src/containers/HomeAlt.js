import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { logout } from "../actions/user";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuIcon from "@material-ui/icons/Menu";
import AsideTemp from "../components/AsideTemp/AsideTemp";
import AsideWeather from "../components/AsideWeather/AsideWeather";
import SideGlass from "../components/SideGlass/SideGlass";
import Greeting from "../components/Greeting/Greeting";
import MainTemp from "../components/MainTemp/MainTemp";
import StickyBG from "../components/StickyBG/StickyBG";
import ErrorNotification from "../components/errorComp/ErrorNotification";
import Wave from "react-wavify";
import TextLoading from "../components/TextLoading";
import { getUserLocation } from "../actions/geo";

import {
  Typography,
  Grid,
  Box,
  makeStyles,
  Paper,
  Grow,
  Fade,
  Slide,
  CircularProgress,
  Button,
  IconButton,
} from "@material-ui/core";

const HomeAlt = ({
  logout,
  getUserLocation,
  isAuthenticated,
  user,
  weather,
  allWeather,
  error,
  errorButton,
}) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
      width: "100vw",
      overflowX: "hidden",
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "left",
    },
    paperLoad: {
      width: "100vw",
      height: "100vh",
      backgroundColor: "black",
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
    header: {
      display: "flex",
    },
    iconButton: {
      color: "white",
      border: "solid 2px white",
      backgroundColor: "black",
      height: "30px",
      width: "30px",
      padding: "2px",
    },
    tempLocation: {
      position: "absolute",
      bottom: 10,
      left: 10,
    },
    [theme.breakpoints.up("xs" | "sm")]: {
      tempLocation: {
        position: "relative",
      },
    },
    [theme.breakpoints.up("md")]: {
      tempLocation: {
        position: "absolute",
      },
    },
  }));

  const classes = useStyles();

  const [load, setLoad] = useState(false);
  const [temp, setTemp] = useState(false);
  const [anim, setAnim] = useState(false);
  const [menu, setMenu] = useState(false);
  const [loadUser, setLoadUser] = useState(false);
  const [errorState, setErrorState] = useState(false);

  useEffect(() => {
    if (error != "") {
      setErrorState(true);
    } else {
      setErrorState(false);
    }
  }, [error]);

  useEffect(() => {
    if (user) {
      setLoadUser(true);
    }
  }, [user]);

  useEffect(() => {
    if (weather.main.temp !== undefined && weather.allLocations !== undefined) {
      setLoad(true);
      setAnim(true);
      setTemp(true);
      setMenu(true);
    }
  }, [weather.main.temp]);

  if (!isAuthenticated) {
    return <Redirect push to="/login" />;
  }

  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <>
      {load ? (
        <div className={classes.root}>
          {errorState && (
            <ErrorNotification
              error={error}
              buttonShow={errorButton}
              button={getUserLocation}
            />
          )}
          <Grid container>
            <Grid item lg={7} md={5} sm={12}>
              <Grid container direction="row" justifyContent="space-around">
                <Grid item md={12} sm={12}>
                  <Box className={classes.paper}>
                    <Slide in={anim} {...(anim ? { timeout: 2000 } : {})}>
                      <Box className={classes.header}>
                        <Greeting name={user} />
                      </Box>
                    </Slide>
                    <Fade in={anim} {...(anim ? { timeout: 2000 } : {})}>
                      <IconButton onClick={logout}>
                        <ExitToAppIcon className={classes.iconButton} />
                      </IconButton>
                    </Fade>
                  </Box>
                </Grid>

                <Grid item md={12} sm={12} className={classes.tempLocation}>
                  <Grow
                    in={temp}
                    out={temp}
                    {...(temp ? { timeout: 3000 } : {})}
                  >
                    <MainTemp
                      temp={weather.main.temp}
                      city={weather.city}
                      icon={weather.weather.icon}
                    />
                  </Grow>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={5} md={7} sm={12}>
              <Grid container justify="flex-end">
                <Grid item xs={2}>
                  <IconButton onClick={handleClick} variant="contained">
                    <MenuIcon className={classes.iconButton}></MenuIcon>
                  </IconButton>
                </Grid>
              </Grid>
              <Slide
                direction={"left"}
                in={menu}
                out={menu}
                {...(anim ? { timeout: 5000 } : {})}
              >
                <Box>
                  <SideGlass
                    allWeather={allWeather}
                    days={weather.days}
                    load={menu}
                    rain={weather.precipitation}
                    wind={weather.wind.speed}
                    high={weather.main.temp_max}
                    low={weather.main.temp_min}
                    feels={weather.main.feels_like}
                  />
                </Box>
              </Slide>
            </Grid>
          </Grid>

          <Box>
            <Wave
              style={{
                position: "fixed",
                bottom: "-10px",
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
              style={{ position: "fixed", bottom: "-10px", zIndex: "-1" }}
              fill="rgba(100, 100, 100, 0.297)"
              paused={false}
              options={{
                height: 10,
                amplitude: 32,
                speed: 0.1,
                points: 2,
              }}
            />
          </Box>
          <StickyBG icon={weather.weather.icon} load={anim} />
        </div>
      ) : (
        <Paper className={classes.paperLoad} square>
          <CircularProgress color="secondary" />
          {loadUser && <TextLoading username={user} />}
          {errorState && (
            <Grid container justify="center">
              <Grid item xs={5}>
                <ErrorNotification
                  error={error}
                  buttonShow={errorButton}
                  button={getUserLocation}
                />
              </Grid>
            </Grid>
          )}
        </Paper>
      )}
    </>
  );
};

const mapStatetoProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
  allWeather: state.weather.allLocations,
  user: state.user.name,
  weather: state.weather,
  error: state.user.error,
  errorButton: state.user.buttonRefresh,
});

export default connect(mapStatetoProps, { logout, getUserLocation })(HomeAlt);
