import { Box, makeStyles, Fade, Grow } from "@material-ui/core";
import { PaperBG } from "../PaperBG";

const StickyBG = ({ icon, load }) => {
  const image = PaperBG(icon);
  const useStyles = makeStyles(() => ({
    background: {
      backgroundImage: `url(${image})`,
      height: "100vh",
      width: "100vw",
      backgroundSize: "cover",
      backgroundColor: "black",
      position: "fixed",
      top: 0,
    },
    container: {
      backgroundColor: "black",
      height: "100%",
      width: "100%",
      backgroundSize: "cover",
      position: "fixed",
      top: 0,
      zIndex: -2,
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Fade in={load} {...(load ? { settimeout: 10000 } : {})}>
          <Box className={classes.background}></Box>
        </Fade>
      </Box>
    </>
  );
};

export default StickyBG;
