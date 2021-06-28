import { List, ListItem, Drawer, Paper } from "@material-ui/core";
import { useState, useEffect } from "react";

const DrawerNav = () => {
  const anchor = "top";
  const [state, setState] = useState({ top: false });
  const toggleDrawer = (anchor, toggle) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: true });
  };

  const list = (anchor) => {
    <div>
      <List>
        <ListItem primary={"Container"}>hello</ListItem>
        <ListItem>hello</ListItem>
      </List>
    </div>;
  };
  return (
    <div key="top">
      <Drawer variant="persistant" anchor="top" open={true}>
        <List>
          <ListItem primary={"Container"}>hello</ListItem>
          <ListItem>hello</ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default DrawerNav;
