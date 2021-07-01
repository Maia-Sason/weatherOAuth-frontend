import { Paper, Box, Typography, SvgIcon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { blue, green, orange, red, yellow } from "@material-ui/core/colors";
import { PaperBG } from "./PaperBG";
import WeatherIcon from "./WeatherIcon";

const WeatherCard = ({ city, icon, farenheight, feelsLike, description }) => {
  const image = PaperBG(icon);

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    containerPaper: {
      position: "relative",
      overflow: "hidden",
      zIndex: 1,
      backgroundColor: "transparent",
      color: "white",
      "&::before": {
        content: `""`,
        filter: "blur(3px) brightness(.95)",

        backgroundSize: "cover",
        backgroundImage: `url(${image})`,
        position: "absolute",
        zIndex: "-1",
        top: "0px",
        left: "0",
        height: "105%",
        width: "105%",
      },
    },
    contentContainer: {
      textAlign: "left",
      padding: "2em",
    },
    contentMain: {
      display: "flex",
      justifyContent: "space-between",
      paddingBottom: "2em",
    },
    textContainer: {
      margin: theme.spacing(0),
      position: "relative",
      left: 0,
      fontWeight: "100",
    },
    yellowPaper: {
      backgroundColor: yellow[300],
    },
    weatherIcon: {
      fill: "white",
      opacity: 1,
      height: "80px",
      width: "auto",
    },
    cityName: {
      position: "relative",
      bottom: 0,
      fontSize: "3em",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.containerPaper}>
        <Box padding={1} className={classes.contentContainer}>
          <Box className={classes.contentMain}>
            <Box>
              <Typography variant="h2" className={classes.textContainer}>
                {farenheight.toFixed(0)}&deg; F
              </Typography>
              <Typography>Feels Like: {feelsLike.toFixed(0)}&deg; F</Typography>
              <Typography>{description}</Typography>
            </Box>
            <SvgIcon className={classes.weatherIcon}>
              <WeatherIcon classType={classes.weatherIcon} icon={icon} />
            </SvgIcon>
          </Box>
          <Typography className={classes.cityName}>{city}</Typography>
        </Box>
      </Paper>
    </div>
  );
};

export default WeatherCard;
