import { Paper, Box, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(36),
      height: theme.spacing(36),
    },
  },
}));

const WeatherCard = ({ city, farenheight, feelsLike, description }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box margin={1}>
        <Skeleton variant="text" height={"20%"}></Skeleton>
        <Skeleton variant="rect" height={"80%"}></Skeleton>
      </Box>
    </Box>
  );
};

export default WeatherCard;
