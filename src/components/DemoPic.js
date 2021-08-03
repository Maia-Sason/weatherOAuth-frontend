import { Paper, makeStyles, Grow } from "@material-ui/core";
import Desktop from "../images/promo/desktop.png";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 3,
    width: "100%",
    animation: "$upDown 5s infinite alternate ease-in-out",
    "&:before": {
      content: '""',
      position: "absolute",
      width: "inherit",
      height: "100%",
      backgroundColor: "#f1a42d",
      transform: "translate(3%, 3%)",
      boxShadow: "15px 15px 16px -10px rgba(0, 0, 0, .3)",
    },
  },
  "@keyframes upDown": {
    "0%": {
      transform: "translateY(1%)",
    },
    "100%": {
      transform: "translateY(-1%)",
    },
  },
  picWrapper: {
    position: "relative",
    animation: "$upDown 3s infinite alternate ease-in-out",
    height: "100%",
    width: "100%",
    "&:after": {
      content: '""',
      zIndex: 2,
      fontSize: "10em",
      position: "absolute",
      height: "100%",
      width: "100%",
      top: 0,
      left: 0,
      background:
        "linear-gradient(rgba(241,164,45, .1), transparent), linear-gradient(to top, rgba(241,164,45, .6), transparent)",
      backgroundBlendMode: "screen",
    },
  },
  pic: {
    display: "block",
    position: "relative",
    zIndex: 1,
    width: "100%",
    boxShadow: "15px 15px 16px -20px rgba(0, 0, 0, .2)",
  },
  background: {
    position: "absolute",
    zIndex: 0,
    width: "inherit",
    height: "inherit",
    top: 0,
    left: 0,
    backgroundColor: "#f1a42d",
    transform: "translate(2%, 2%)",
  },
}));

export default function DemoPic() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.picWrapper}>
        <img src={Desktop} className={classes.pic}></img>
      </div>
    </div>
  );
}
