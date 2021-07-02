import { Typography, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  text: {
    width: "fit-content",
    fontSize: "2em",
    fontWeight: "100",
    margin: "5px",
  },
}));

const AsideTemp = ({ text, temp }) => {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Typography className={classes.text}>
          {text} {temp}&deg;
        </Typography>
      </Box>
    </>
  );
};

export default AsideTemp;
