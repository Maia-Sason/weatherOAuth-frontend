import { Paper, Box, Typography, SvgIcon, makeStyles } from "@material-ui/core";
import WeatherIcon from "./WeatherIcon";

const useStyles = makeStyles((theme) => ({
  paper: {
    background: "none",
    height: "100px",
    margin: "5px",
    flexDirection: "row",
    alignItems: "center",
    color: "white",
  },
  box: {
    padding: "1em",
    display: "flex",
    justifyContent: "space-between",
  },
  icon: {
    height: "3em",
    width: "3em",
    fill: "white",
  },
  text: {
    fontWeight: 200,
    fontSize: "2em",
  },
  day: {
    fontWeight: 300,
    paddingTop: 5,
    paddingLeft: 3,
  },
}));

const DayWeatherCard = ({ icon, temp, day }) => {
  const classes = useStyles();
  const options = { weekday: "long" };

  const weekDay = new Intl.DateTimeFormat("en-US", options).format(day);
  return (
    <>
      <Paper className={classes.paper}>
        <Box className={classes.box}>
          <Typography className={classes.text}>{temp}&deg;</Typography>
          <Box className={classes.icon}>
            <WeatherIcon icon={icon}></WeatherIcon>
          </Box>
        </Box>
        <Typography className={classes.day}>{weekDay}</Typography>
      </Paper>
    </>
  );
};

export default DayWeatherCard;
