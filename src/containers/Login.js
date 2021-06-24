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

import { Skeleton } from "@material-ui/lab";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Login({ login, checkAuthenticated, loginFacebook }) {
  const classes = useStyles();
  const FormRow = () => {
    return (
      <>
        <Grid item xs={1} justify="space-around">
          <Skeleton variant="rect" width={40} height={35} />
        </Grid>
        <Grid item xs={7}>
          <Paper
            elevation={0}
            noWrap
            className={classes.button}
            variant="contained"
          >
            Hello
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper noWrap className={classes.button} variant="contained">
            Hello
          </Paper>
        </Grid>
      </>
    );
  };

  return (
    <div className={classes.root}>
      Here we will ask user to log into website with Facebook account. Maybe
      explain to user what this is all about!
      <CircularProgress />
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={1}>
          <FormRow />
        </Grid>
        <Grid container item xs={4} spacing={1}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <FormRow />
        </Grid>
      </Grid>
      <Button variant="contained" onClick={loginFacebook}>
        Log in w Facebook
      </Button>
      <Button variant="contained" color="primary" onClick={checkAuthenticated}>
        Check auth
      </Button>
    </div>
  );
}

export default connect(null, { login, checkAuthenticated, loginFacebook })(
  Login
);
