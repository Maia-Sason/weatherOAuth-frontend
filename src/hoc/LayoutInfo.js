import Footer from "../components/Footer";
import { Typography, makeStyles, Grid, Box } from "@material-ui/core";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Logo from "../components/Logo";

const color = "#303030";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "absolute",
    width: "100vw",
    bottom: 0,
  },
  logoContainer: {
    backgroundColor: color,
    padding: "20px",
  },
  marginWrapper: {
    margin: "0 5em 0",
  },
  textOnDark: {
    color: "white",
    whiteSpace: "nowrap",
    fontWeight: 300,
  },
  logo: {
    display: "flex",
    justifyContent: "flex-start",
  },
  [theme.breakpoints.down("sm")]: {
    logo: {
      justifyContent: "center",
    },
  },
}));

export default function LayoutInfo({ children }) {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item xs={12}>
          <div className={classes.logoContainer}>
            <div className={classes.marginWrapper}>
              <Box className={classes.logo}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Logo />
                </Link>
              </Box>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className={classes.root}>
        <div className={classes.container}>{children}</div>
        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
}
