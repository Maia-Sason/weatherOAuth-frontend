import { Paper, Typography, Divider, makeStyles, Box } from "@material-ui/core";
import { ReactComponent as DropPercentage } from "../../icons/drop-percentage.svg";
import { ReactComponent as Wind } from "../../icons/wind-2.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "none",
    padding: "10px",
    //minHeight: "40vh",
    margin: "20px",
  },
  headerBox: {
    display: "flex",
    justifyContent: "space-between",
  },
  header: {
    fontWeight: 200,
    fontSize: "2em",
    color: "white",
  },
  headerB: {
    fontWeight: 200,
    fontSize: "3em",
    color: "white",
  },
  rainDrop: {
    height: "3em",
    width: "3em",
    fill: "white",
    margin: "10px",
  },
  precipitation: {
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    //height: "100%",
  },
  wind: {
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    //height: "100%",
  },
}));

const AsideWeather = ({ feels, rain, wind }) => {
  const classes = useStyles();

  return (
    <>
      <Paper elevation={10} className={classes.container}>
        <Box className={classes.headerBox}>
          <Typography className={classes.header}>Feels Like:</Typography>
          <Typography className={classes.header}>{feels}&deg;</Typography>
        </Box>
        <Divider />
        <Box className={classes.precipitation}>
          <DropPercentage className={classes.rainDrop} />
          <Typography className={classes.headerB}>{rain * 100}%</Typography>
        </Box>
        <Divider />
        <Box className={classes.wind}>
          <Wind className={classes.rainDrop} />
          <Typography className={classes.headerB}>{wind}mph</Typography>
        </Box>
      </Paper>
    </>
  );
};

export default AsideWeather;
