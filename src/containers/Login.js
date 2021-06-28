import React from "react";
import {
  Paper,
  Button,
  Grid,
  makeStyles,
  CircularProgress,
} from "@material-ui/core";

import { connect } from "react-redux";
import { login, checkAuthenticated, loginFacebook } from "../actions/user";
import { Redirect } from "react-router-dom";

function Login({ isAuthenticated, checkAuthenticated, loginFacebook }) {
  if (isAuthenticated) {
    return <Redirect push to="/" />;
  }

  return (
    <div>
      Here we will ask user to log into website with Facebook account. Maybe
      explain to user what this is all about!
      {/* <CircularProgress /> */}
      <Button variant="contained" onClick={loginFacebook}>
        Log in w Facebook
      </Button>
      <Button variant="contained" color="primary" onClick={checkAuthenticated}>
        Check auth
      </Button>
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
