import { makeStyles } from "@material-ui/core";
const color = "#f1a42d";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: color,
    height: "10px",
    clipPath: "polygon(0 40%, 100% 0%, 95% 90%, 2% 70%)",
  },
}));

export default function AngleBR({ children }) {
  const classes = useStyles();
  return (
    <>
      <div>
        {children}
        <div className={classes.root}></div>
      </div>
    </>
  );
}
