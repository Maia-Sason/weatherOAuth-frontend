import {
  makeStyles,
  withStyles,
  useTheme,
  Paper,
  Box,
  Grid,
  Divider,
  Typography,
  Fade,
  Tabs,
  Tab,
  Grow,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import AsideWeather from "../AsideWeather/AsideWeather";
import AsideTemp from "../AsideTemp/AsideTemp";
import DayWeatherCard from "../DayWeatherCard/DayWeatherCard";
import { TabContext } from "@material-ui/lab";
import SwipeableViews from "react-swipeable-views";
import TabPanel from "../TabPanel.js";
import LocationWeather from "../LocationWeather";

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
    whiteSpace: "nowrap",
  },
  lowHigh: {
    display: "flex",
    justify: "space-between",
  },
  tabs: {
    position: "relative",
    bottom: 0,
  },
}));

const StyledTab = withStyles((theme) => ({
  root: {
    color: "white",
  },
}))((props) => <Tab {...props} />);

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SideGlass = ({ days, rain, wind, high, low, feels, allWeather }) => {
  const [anim, setAnim] = useState(false);
  const [load, setLoad] = useState(false);
  const [allWeatherList, setAllWeather] = useState([]);
  const [value, setValue] = useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  useEffect(async () => {
    console.log("ALL WEATHER");
    console.log(allWeather);

    console.log("ALL WEATHER");
    console.log(allWeather);
    await makeWeatherList();

    setAnim(true);
  }, [allWeather]);

  useEffect(() => {
    console.log(allWeatherList);
    if (allWeatherList !== []) {
      setLoad(true);
    }
  }, [allWeatherList]);

  const makeWeatherList = async () => {
    console.log("MAP WEATHER");
    console.log(allWeather);
    await setAllWeather(
      allWeather.map((item, k) => {
        const num = 1000 + 1000 * k;
        return (
          <Grow key={k} in={true} {...{ timeout: num }}>
            <Grid item xs={12} key={k}>
              <LocationWeather
                city={item.name}
                temp={item.main.temp.toFixed(0)}
                icon={item.weather[0].icon}
              />
            </Grid>
          </Grow>
        );
      })
    );
  };

  const weatherCardList = days.slice(1).map((item, k) => {
    const num = 1000 + 1000 * k;
    return (
      <Grow key={k} in={anim} {...(anim ? { timeout: num } : {})}>
        <Grid item xs={6} key={k}>
          <DayWeatherCard
            key={k}
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
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          className={classes.tabs}
        >
          <StyledTab label="Item One" {...a11yProps(0)} />
          <StyledTab label="Item Two" {...a11yProps(1)} />
        </Tabs>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0}>
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
          </TabPanel>
          <TabPanel value={value} index={1} dir={"left"}>
            <Grid
              container
              style={{ padding: "20px" }}
              justify="center"
              alignContent="stretch"
            >
              <Typography className={classes.headerC}>
                Location History,
              </Typography>

              {/* {weatherCardList} */}
              {load ? allWeatherList : <p>Loading</p>}
            </Grid>
          </TabPanel>
        </SwipeableViews>
      </Paper>
    </>
  );
};

export default SideGlass;
