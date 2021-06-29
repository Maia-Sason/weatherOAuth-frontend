import { Box, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      minHeight: theme.spacing(15),
      height: "auto",
    },
  },
}));

const MiniWeather = ({}) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Paper>hello</Paper>
    </Box>
  );
};

export default MiniWeather;
