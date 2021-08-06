import { Fade, Typography, Button } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

export default function ErrorNotification({ error, button, buttonShow }) {
  return (
    <>
      <Fade in={true}>
        <Alert
          severity="error"
          style={{
            backgroundColor: "rgb(24, 6, 5)",
            color: "rgb(250, 179, 174)",
            width: "100%",
          }}
        >
          <AlertTitle>Error</AlertTitle>
          <Typography>{error}</Typography>
          {buttonShow && (
            <Button variant="outlined" color="secondary" onClick={button}>
              Retry
            </Button>
          )}
        </Alert>
      </Fade>
    </>
  );
}
