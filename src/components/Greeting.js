import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  headerA: {
    fontSize: "2em",
    color: "white",
  },
  headerABG: {
    backgroundColor: "black",
    padding: "10px",
  },
}));

const Greeting = ({ name }) => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.headerA}>
        <span className={classes.headerABG}>Hello {name}</span>
      </Typography>
    </>
  );
};

export default Greeting;
