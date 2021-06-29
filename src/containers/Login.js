import React from "react";
import {
  Paper,
  Button,
  Grid,
  makeStyles,
  CircularProgress,
  Typography,
  Box,
} from "@material-ui/core";

import { ReactComponent as FacebookIcon } from "../misc/facebook.svg";

import { connect } from "react-redux";
import { login, checkAuthenticated, loginFacebook } from "../actions/user";
import { Redirect } from "react-router-dom";

function Login({ isAuthenticated, checkAuthenticated, loginFacebook }) {
  if (isAuthenticated) {
    return <Redirect push to="/" />;
  }

  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
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
            Join Weather and get weather information by a glance
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
