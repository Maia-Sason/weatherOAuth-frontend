import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  SwipeableDrawer,
  Drawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import DrawerNav from "./Drawer";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    toolBar: {
      position: "relative",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {},
  })
);

const Navbar_old = ({}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" class={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Weather
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar_old;
