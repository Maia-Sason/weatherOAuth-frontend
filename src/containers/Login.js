import React, { useRef } from "react";
import { Grid, Typography, Box } from "@material-ui/core";

import { ReactComponent as FacebookIcon } from "../misc/facebook.svg";

// Router
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { connect } from "react-redux";
import { login, checkAuthenticated, loginFacebook } from "../actions/user";
import { makeStyles } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import Angled from "../components/Angled";
import DemoPic from "../components/DemoPic";
import Logo from "../components/Logo";
import AngleBR from "../components/AngleBR";
import CanvasDisplay from "../components/CanvasDisplay";
import Footer from "../components/Footer";

const accent = "#f1a42d";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#e4e32",
    overflowX: "hidden",
  },
  textOnDark: {
    color: "white",
    whiteSpace: "nowrap",
    fontWeight: 300,
  },

  facebookTop: {
    paddingTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textFacebook: {
    fontSize: "1.5rem",
    fontWeight: 200,
    color: "white",
    margin: "20px",
  },
  facebookIcon: {
    width: "70px",
    height: "70px",
    position: "relative",

    transition: ".3s ease",
    "&:hover": {
      padding: "5px",
    },
    "&:active": {
      filter: "blur(3px)",
    },
  },
  facebookIconBottom: {
    display: "flex",
    justifyContent: "center",
  },
  demoPic: {
    position: "relative",
    transform: "translateY(20%)",
    maxWidth: "70vw",
    paddingBottom: "20%",
  },
  logo: {
    display: "flex",
    justifyContent: "flex-start",
  },
  facebookIntroContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    transform: "translateY(-50%)",
  },
  textInfoWhite: {
    whiteSpace: "nowrap",
    fontSize: "4em",
    fontWeight: 200,
  },
  textOnWhite: {
    textAlign: "center",
    whiteSpace: "nowrap",
    fontSize: "4em",
    fontWeight: 200,
  },
  facebookIntroxs: {
    display: "none",
  },
  [theme.breakpoints.down("xs")]: {
    facebookIntroxs: {
      height: "50vh",
    },
  },
  [theme.breakpoints.down("sm")]: {
    facebookIntroContainer: {
      display: "none",
    },
    facebookIntroxs: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      // height: "20vh",
      textAlign: "center",
    },
  },
  [theme.breakpoints.up("xs")]: {
    // marginWrapper: {
    //   margin: 0,
    // },
    demoPic: {
      display: "none",
    },
    logo: {
      justifyContent: "center",
    },
    textInfoWhite: {
      textAlign: "center",
      fontSize: "3em",
      color: "white",
    },
  },
  [theme.breakpoints.up("sm")]: {
    gridTop: {
      height: "50vh",
    },
    demoPic: {
      display: "block",
    },
    textInfoWhite: {
      fontSize: "3.5em",
    },
    facebookIntroContainer: {
      height: "100%",
    },
  },
  [theme.breakpoints.up("md")]: {
    gridTop: {
      height: "100vh",
    },
    logo: {
      justifyContent: "flex-start",
    },
    marginWrapper: {
      margin: "0 5em 0",
    },
    textInfoWhite: {
      textAlign: "left",
      color: "black",
    },
  },
}));

function Login({ isAuthenticated, checkAuthenticated, loginFacebook }) {
  const classes = useStyles();
  if (isAuthenticated) {
    return <Redirect push to="/" />;
  }

  return (
    <div className={classes.root}>
      <Angled>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item xs={12}>
            <div className={classes.marginWrapper}>
              <Box className={classes.logo}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Logo />
                </Link>
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className={classes.facebookIntroContainer}>
              <Typography className={classes.textOnDark} variant="h4">
                Log in with Facebook
              </Typography>
              <Box className={classes.facebookTop}>
                <Box className={classes.facebookIcon}>
                  <FacebookIcon
                    onClick={loginFacebook}
                    fill="blue"
                    cursor="pointer"
                  ></FacebookIcon>
                </Box>
                <Typography className={classes.textFacebook} variant="h6">
                  Get beautiful weather
                  <br /> information at a glance
                </Typography>
              </Box>
            </Box>
            <Box className={classes.facebookIntroxs}>
              <Typography className={classes.textOnDark} variant="h4">
                Log in with <br /> Facebook
              </Typography>
              <Box className={classes.facebookTop}>
                <Box className={classes.facebookIcon}>
                  <FacebookIcon
                    onClick={loginFacebook}
                    fill="blue"
                    cursor="pointer"
                  ></FacebookIcon>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} className={classes.demoPic}>
            <Box>
              <DemoPic />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            container
            direction="row-reverse"
            justify="center"
            alignItems="center"
          >
            <Grid
              item
              container
              justify="center"
              md={4}
              style={{ position: "relative", height: "30vh" }}
            >
              <Grid item md={12}>
                <AngleBR>
                  <Typography className={classes.textInfoWhite}>
                    See real-time
                    <br />
                    Weather for all past
                    <br />
                    visited locations
                  </Typography>
                </AngleBR>
              </Grid>
            </Grid>
            <Grid item md={6}>
              <CanvasDisplay style={{ width: "100vw" }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          container
          justify="center"
          alignContent="center"
          spacing={1}
          style={{ height: "50vh" }}
        >
          <Grid item xs={12}>
            <Typography className={classes.textOnWhite}>Try it now</Typography>
          </Grid>
          <Grid item xs={12}>
            <Box className={classes.facebookIconBottom}>
              <Box className={classes.facebookIcon}>
                <FacebookIcon
                  onClick={loginFacebook}
                  fill="blue"
                  cursor="pointer"
                ></FacebookIcon>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Footer>
            <a
              href="https://www.iubenda.com/privacy-policy/75716397"
              class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe "
            >
              <Typography className={classes.textOnDark}>
                Privacy Policy
              </Typography>
            </a>
            <Link to={"/terms"}>
              <Typography className={classes.textOnDark}>
                Delete Data
              </Typography>
            </Link>
            <Typography className={classes.textOnDark}>Github</Typography>
            <Link to={"/sources"}>
              <Typography className={classes.textOnDark}>Sources</Typography>
            </Link>
            <Typography className={classes.textOnDark}>
              Made by Maia Sason ©
            </Typography>
          </Footer>
        </Grid>
      </Angled>

      {/* <Box paddingTop={15}>
        <Typography variant="h4">Log in with Facebook</Typography>
      </Box>
      <Box padding={4}>
        <FacebookIcon
          onClick={loginFacebook}
          fill="blue"
          height="100px"
          cursor="pointer"
        ></FacebookIcon>
      </Box>
      <Box>
        <Typography variant="h6">
          Join Weather and get weather information at a glance
        </Typography>
      </Box> */}
    </div>
  );
}

const mapStatetoProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStatetoProps, {
  login,
  checkAuthenticated,
  loginFacebook,
})(Login);
