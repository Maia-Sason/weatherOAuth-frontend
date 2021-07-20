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

function Privacy({ isAuthenticated, checkAuthenticated, loginFacebook }) {
  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        <Box paddingTop={15}>
          <Typography variant="h4">Privacy Policy</Typography>
        </Box>
        <Box padding={4}>
          <Typography variant="h6">
            We only store your name, profile picture, and email in our
            databases. We do not sell your data.
          </Typography>
        </Box>
      </Grid>
    </div>
  );
}

export default Privacy;
