import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";

function Sources() {
  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        <Box paddingTop={15}>
          <Typography variant="h4">Sources</Typography>
        </Box>
        <Box padding={4}>
          <Typography variant="h6">
            Design inspired by
            <a href="https://dribbble.com/thearthurk"> Arthur K</a>
          </Typography>

          <Typography variant="h6">
            3D Models by{" "}
            <a href="https://free3d.com/user/nahomdaniel">
              Nahom Daniel Negash
            </a>
          </Typography>
        </Box>
      </Grid>
    </div>
  );
}

export default Sources;
