import { useRef, useState } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { useInterval } from "../hooks/useInterval";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-block",
  },
  container: {
    paddingBottom: "3px",
    display: "inline-block",
    borderBottom: `3px solid ${theme.palette.secondary.main}`,
    width: "105%",
    maxWidth: "100vw",
    overflow: "hidden",
    textAlign: "center",
  },
  "@keyframes textDisappear": {
    "5%, 10%": {
      transform: "translateY(0em)",
    },
    "0%, 100%": {
      opacity: 0,
      transform: "translateY(1em) scale(1, 3)",
      filter: "blur(10px)",
    },
    "10%, 90%": {
      opacity: 1,
      filter: "blur(0px)",
      transform: "translateY(0em) scale(1, 1)",
    },
  },
  textOnDark: {
    color: "white",
    fontWeight: 300,
    wordBreak: "break-all",
    animation: `$textDisappear 5s infinite`,
  },
}));

export default function TextLoading({ username }) {
  const string = [
    `Welcome, ${username}`,
    "Wherever you go Weather Location will save it for next time",
    "Make sure your location services are enabled",
    "The main background will change to match the weather conditions",
  ];

  const [innerText, setInnerText] = useState(string[0]);
  const countRef = useRef(0);
  const textRef = useRef();
  const classes = useStyles();

  useInterval(() => {
    countRef.current = countRef.current + 1;
    console.log(countRef.current, string.length);
    if (countRef.current === string.length) {
      countRef.current = 0;
    }
    setInnerText(string[countRef.current]);
  }, 5000);

  // change();

  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.textOnDark}>
        <div className={classes.container}>{innerText}</div>
      </Typography>
    </div>
  );
}
