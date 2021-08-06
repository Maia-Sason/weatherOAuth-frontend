import { makeStyles } from "@material-ui/core";
const color = "#303030";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: color,
    color: "white",
    height: "100%",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function Footer({ children }) {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
}
