import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  SwipeableDrawer,
  Drawer,
  List,
  ListItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const drawerWidth = "100vw";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    appBar: {
      zIndex: 1400,
    },
    title: {
      flexGrow: 1,
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: "auto",
    },
  })
);

const Navbar = ({}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  const DrawerNav2 = (
    <Drawer
      variant="persistent"
      className={classes.drawer}
      anchor="top"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          <ListItem primary={"text"}>hello</ListItem>
          <ListItem>hello</ListItem>
        </List>
      </div>
    </Drawer>
  );

  return (
    <div className={classes.root}>
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            onClick={handleToggleDrawer}
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
      {DrawerNav2}
    </div>
  );
};

export default Navbar;
