import { Box, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      minHeight: theme.spacing(33),
      maxHeight: "100%",
      margin: theme.spacing(1),
    },
  },
}));

const SideInfo = ({}) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Paper>hello</Paper>
    </Box>
  );
};

export default SideInfo;
