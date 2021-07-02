import {
  makeStyles,
  Paper,
  Box,
  Grid,
  Divider,
  Typography,
  Fade,
  Grow,
} from "@material-ui/core";
import { useState } from "react";
import AsideWeather from "./AsideWeather";
import AsideTemp from "./AsideTemp";
import DayWeatherCard from "./DayWeatherCard";

const useStyles = makeStyles((theme) => ({
  sidePaper: {
    height: "100vh",
    backgroundColor: "rgba(100, 100, 100, .15)",
    overflowY: "scroll",
    backdropFilter: "blur(5px)",
    color: "white",
    padding: "20px",
  },
  headerC: {
    fontSize: "4em",
    textAlign: "center",
    letterSpacing: "3px",
    fontWeight: "100",
  },
  lowHigh: {
    display: "flex",
    justify: "space-between",
  },
}));

const SideGlass = ({ days, load, rain, wind, high, low, feels }) => {
  const [anim, setLoad] = useState(false);

  useState(() => {
    setTimeout(function () {
      setLoad(true);
    }, 2000);
  }, [load]);

  console.log(days);
  const weatherCardList = days.slice(1).map((item, k) => {
    const num = 1000 + 1000 * k;
    return (
      <Grow in={anim} {...(anim ? { timeout: num } : {})}>
        <Grid item xs={6} key={k}>
          <DayWeatherCard
            day={item.day * 1000}
            icon={item.icon}
            temp={item.temp.toFixed(0)}
          />
        </Grid>
      </Grow>
    );
  });

  const classes = useStyles();

  return (
    <>
      <Paper className={classes.sidePaper} square>
        <Box>
          <Typography className={classes.headerC}>Today,</Typography>
          <Grid container justify={"center"}>
            <Grid item xs={8}>
              <AsideWeather
                feels={feels.toFixed(0)}
                rain={rain}
                wind={wind.toFixed(0)}
              />
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item xs={4}>
              <AsideTemp temp={high.toFixed(0)} text={"High"}></AsideTemp>
            </Grid>
            <Grid item xs={4}>
              <AsideTemp temp={low.toFixed(0)} text={"Low"}></AsideTemp>
            </Grid>
          </Grid>
        </Box>
        <Divider></Divider>
        <Box>
          <Typography className={classes.headerC}>This Week,</Typography>
          <Grid container style={{ padding: "20px" }} justify="center">
            {weatherCardList}
          </Grid>
        </Box>
      </Paper>
    </>
  );
};

export default SideGlass;
