import { Typography, makeStyles, Box } from "@material-ui/core";
import WeatherIcon from "../WeatherIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    direction: "column",
    contentAlign: "center",
  },
  headerB: {
    paddingLeft: "10px",
    fontSize: "7em",
    fontWeight: 100,
    color: "white",
    letterSpacing: "5px",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  aside: {
    display: "inline",
    color: "white",
    verticalAlign: "bottom",
    letterSpacing: "2px",
    fontWeight: 200,
    fontSize: "36px",
  },
  [theme.breakpoints.up("xs")]: {
    aside: {
      fontSize: "10vw",
    },
  },
  [theme.breakpoints.up("sm")]: {
    aside: {
      fontSize: "36px",
    },
  },
  icon: {
    fill: "white",
    height: "4em",
    width: "4em",
  },
}));

const MainTemp = ({ temp, city, icon }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Typography className={classes.headerB}>
          {temp.toFixed(0)}&deg;
        </Typography>
        <div className={classes.info}>
          <Box className={classes.icon}>
            <WeatherIcon icon={icon}></WeatherIcon>
          </Box>
          <Typography className={classes.aside}>{city}</Typography>
        </div>
      </div>
    </>
  );
};

export default MainTemp;
