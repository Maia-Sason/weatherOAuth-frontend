import { Link } from "react-router-dom";
import { makeStyles, Typography } from "@material-ui/core";
const color = "#303030";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: color,
    color: "white",
    height: "100%",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      textDecoration: "none",
    },
  },
  textOnDark: {
    color: "white",
    whiteSpace: "nowrap",
    fontWeight: 300,
  },
}));

export default function Footer({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <a
        href="https://www.iubenda.com/privacy-policy/75716397"
        className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe "
      >
        <Typography className={classes.textOnDark}>Privacy Policy</Typography>
      </a>
      <Link to={"/terms"}>
        <Typography className={classes.textOnDark}>Delete Data</Typography>
      </Link>
      <Link
        to={{
          pathname: "https://github.com/Maia-Sason/WeatherOAuth",
        }}
        target="_blank"
      >
        <Typography className={classes.textOnDark}>Github</Typography>
      </Link>
      <Link to={"/sources"}>
        <Typography className={classes.textOnDark}>Sources</Typography>
      </Link>
      <Typography className={classes.textOnDark}>
        Made by Maia Sason ©
      </Typography>
    </div>
  );
}
