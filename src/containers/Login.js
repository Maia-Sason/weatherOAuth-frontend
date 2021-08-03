import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";

import { ReactComponent as FacebookIcon } from "../misc/facebook.svg";

import { connect } from "react-redux";
import { login, checkAuthenticated, loginFacebook } from "../actions/user";
import { makeStyles } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import Angled from "../components/Angled";
import DemoPic from "../components/DemoPic";
import Logo from "../components/Logo";
import AngleBR from "../components/AngleBR";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#e4e32",
  },
  textOnDark: {
    color: "white",
    whiteSpace: "nowrap",
    fontWeight: 300,
  },
  marginWrapper: {
    margin: "0 5em 5em",
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
    whiteSpace: "nowrap",
  },
  facebookIcon: {
    minWidth: "70px",
  },
  demoPic: {
    position: "relative",
    transform: "translateY(20%)",
    maxWidth: "70vw",
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
  },
  textOnWhite: {
    fontSize: "4em",
    fontWeight: 200,
  },
  [theme.breakpoints.up("xs")]: {
    demoPic: {
      display: "none",
    },
    logo: {
      justifyContent: "center",
    },
    facebookIntroContainer: {
      height: "50vh",
    },
  },
  [theme.breakpoints.up("sm")]: {
    demoPic: {
      display: "block",
    },
    facebookIntroContainer: {
      height: "100%",
    },
  },
  [theme.breakpoints.up("md")]: {
    logo: {
      justifyContent: "flex-start",
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
        <div className={classes.marginWrapper}>
          <Box className={classes.logo}>
            <Logo />
          </Box>

          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Grid item sm={12} md={4}>
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
            </Grid>
            <Grid item md={6}>
              <Box className={classes.demoPic}>
                <DemoPic />
              </Box>
            </Grid>
          </Grid>
        </div>
      </Angled>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={6}>
          <AngleBR>
            <Typography className={classes.textOnWhite}>
              See real-time
              <br />
              Weather for all past
              <br />
              visited locations
            </Typography>
          </AngleBR>
        </Grid>
        <Grid item sx={12}></Grid>
        <Box paddingTop={15}>
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
        </Box>
      </Grid>
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
