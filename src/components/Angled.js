import { Paper, makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const color = "#303030";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  container: {
    position: "relative",
    maxWidth: "100vw",
    height: "70vh",
  },
  angle: {
    paddingTop: "100px",
    position: "absolute",
    backgroundColor: color,
    clipPath: "polygon(0 0, 100% 0%, 100% 50%, 0% 80%)",
    height: "inherit",
    width: "100vw",
  },
  image: {
    marginTop: "30px",
    position: "absolute",
  },
}));

export default function Angled({ children }) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.root}>
          <Paper elevation={0} className={classes.angle} square></Paper>
          <div className={classes.image}>{children}</div>
        </div>
      </div>
    </>
  );
}
