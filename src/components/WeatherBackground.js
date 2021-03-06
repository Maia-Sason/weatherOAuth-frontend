import { Paper, Fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { PaperBG } from "./PaperBG";

const WeatherBackground = ({ icon, children, load }) => {
  const image = PaperBG(icon);

  const useStyles = makeStyles((theme) => ({
    bg: {
      backgroundImage: `url(${image})`,
      height: "100vh",
      width: "100vw",
      backgroundSize: "cover",
      backgroundColor: "black",
      backgroundAttachment: "scroll",
      borderRadius: 0,
      position: "fixed",
      zIndex: -1,
    },
    bgLoad: {
      backgroundColor: "black",
      position: "absolute",
      zIndex: -2,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.bgLoad}>
      <Fade in={load}>
        <Paper className={classes.bg}>{children}</Paper>
      </Fade>
    </div>
  );
};

export default WeatherBackground;
