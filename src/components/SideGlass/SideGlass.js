import {
  makeStyles,
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
import { useState } from "react";
import AsideWeather from "../AsideWeather/AsideWeather";
import AsideTemp from "../AsideTemp/AsideTemp";
import DayWeatherCard from "../DayWeatherCard/DayWeatherCard";
import { TabPanel, TabContext } from "@material-ui/lab";

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
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useState(() => {
    setTimeout(function () {
      setLoad(true);
    }, 2000);
  }, [load]);

  // function a11yProps(index) {
  //   return {
  //     id: `simple-tab-${index}`,
  //     "aria-controls": `simple-tabpanel-${index}`,
  //   };
  // }

  console.log(days);
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
      <TabContext value={value}>
        <Paper className={classes.sidePaper} square>
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
          <TabPanel value={value} index={1}>
            <Typography className={classes.headerC}>Second Tab</Typography>
          </TabPanel>
          <Paper>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="Current" value={0}></Tab>
              <Tab label="All" value={1}></Tab>
            </Tabs>
          </Paper>
        </Paper>
      </TabContext>
    </>
  );
};

export default SideGlass;
