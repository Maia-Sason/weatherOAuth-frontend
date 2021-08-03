import {
  makeStyles,
  Typography,
  Icon,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import { ReactComponent as LogoIcon } from "../icons/logo/Logo1.svg";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Baskerville", "serif"],
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    display: "flex",
  },
  text: {
    fontSize: "3em",
    fontWeight: 200,
  },
  logo: {
    height: "50px",
    width: "50px",
  },
}));

export default function Logo() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <LogoIcon className={classes.logo} />

        <ThemeProvider theme={theme}>
          <Typography className={classes.text}>WeatherLocation</Typography>
        </ThemeProvider>
      </div>
    </>
  );
}
