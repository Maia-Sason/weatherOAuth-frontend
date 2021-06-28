import { Paper, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { blue, green, orange, red, yellow } from "@material-ui/core/colors";
import { PaperBG } from "./PaperBG";

const WeatherCard = ({ city, icon, farenheight, feelsLike, description }) => {
  const image = PaperBG(icon);

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(50),
        height: theme.spacing(32),
      },
    },
    containerPaper: {
      position: "relative",
      overflow: "hidden",
      zIndex: 1,
      backgroundColor: "transparent",
      color: "white",
      textAlign: "right",

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
    textContainer: {
      margin: theme.spacing(0),
      position: "relative",
      left: 0,
      fontWeight: "100",
    },
    yellowPaper: {
      backgroundColor: yellow[300],
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.containerPaper}>
        <Box padding={1}>
          <Typography variant="h2" className={classes.textContainer}>
            {farenheight.toFixed(0)}&deg; F
          </Typography>
          <Typography>Feels Like: {feelsLike.toFixed(0)}&deg; F</Typography>
          <Typography>{description}</Typography>
          <Typography>{city}</Typography>
        </Box>
      </Paper>
    </div>
  );
};

export default WeatherCard;
