import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { logout } from "../actions/user";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AsideTemp from "../components/AsideTemp/AsideTemp";
import AsideWeather from "../components/AsideWeather/AsideWeather";
import SideGlass from "../components/SideGlass/SideGlass";
import Greeting from "../components/Greeting/Greeting";
import MainTemp from "../components/MainTemp/MainTemp";
import StickyBG from "../components/StickyBG/StickyBG";
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
  CircularProgress,
  Button,
  IconButton,
} from "@material-ui/core";

const HomeAlt = ({ logout, isAuthenticated, user, weather }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
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
      justifyContent: "center",
      alignItems: "center",
    },
    asideA: {
      color: "white",

      backgroundColor: "black",
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
  const [anim, setAnim] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    if (weather.main.temp != undefined) {
      setLoad(true);
      console.log(weather.main.temp);
      setAnim(true);
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
          <Grid container>
            <Grid item md={7} sm={12}>
              <Grid container direction="row" justifyContent="space-around">
                <Grid item md={12} sm={12}>
                  <Box className={classes.paper}>
                    <Slide in={anim} {...(anim ? { timeout: 2000 } : {})}>
                      <Box>
                        <Greeting name={user} />
                        <Button
                          onClick={handleClick}
                          variant="contained"
                        ></Button>
                      </Box>
                    </Slide>
                    <Fade in={anim} {...(anim ? { timeout: 2000 } : {})}>
                      <IconButton onClick={logout}>
                        <ExitToAppIcon className={classes.asideA} />
                      </IconButton>
                    </Fade>
                  </Box>
                </Grid>

                <Grid item md={12} sm={12} className={classes.tempLocation}>
                  <Grow in={anim} {...(anim ? { timeout: 3000 } : {})}>
                    <MainTemp
                      temp={weather.main.temp}
                      city={weather.city}
                      icon={weather.weather.icon}
                    />
                  </Grow>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={5} sm={12}>
              <Slide
                direction={"left"}
                in={menu}
                out={menu}
                {...(anim ? { timeout: 5000 } : {})}
              >
                <Box>
                  <SideGlass
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

export default connect(mapStatetoProps, { logout })(HomeAlt);
