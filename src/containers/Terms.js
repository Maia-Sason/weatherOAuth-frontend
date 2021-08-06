import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";

function Privacy({ isAuthenticated, checkAuthenticated, loginFacebook }) {
  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        <Box paddingTop={15}>
          <Typography variant="h4">Deleting User Data</Typography>
        </Box>
        <Box padding={4}>
          <Typography variant="h6">
            Email us <a href="mailto:maia.sason1@gmail.com">here</a> to delete
            your user data from this website.
            <br /> Make sure your subject is "Delete my data" with a link to
            your facebook profile.
          </Typography>
        </Box>
      </Grid>
    </div>
  );
}

export default Privacy;
