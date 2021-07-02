import { Typography, makeStyles, Box } from "@material-ui/core";
import WeatherIcon from "./WeatherIcon";

const useStyles = makeStyles((themes) => ({
  root: {
    display: "flex",
  },
  headerB: {
    paddingLeft: "10px",
    fontSize: "7em",
    fontWeight: 100,
    color: "white",
    letterSpacing: "5px",
  },
  aside: {
    display: "inline",
    fontSize: "36px",
    color: "white",
    verticalAlign: "middle",
    letterSpacing: "2px",
    fontWeight: 200,
  },
  icon: {
    fill: "white",
    height: "6em",
    width: "6em",
    verticalAlign: "middle",
  },
}));

const MainTemp = ({ temp, city, icon }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Typography className={classes.headerB}>
          {temp.toFixed(0)}&deg;
          <Typography className={classes.aside}>{city}</Typography>
        </Typography>
        <Box className={classes.icon}>
          <WeatherIcon icon={icon}></WeatherIcon>
        </Box>
      </div>
    </>
  );
};

export default MainTemp;
