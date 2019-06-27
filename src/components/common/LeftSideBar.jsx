import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Grid,
  SwipeableDrawer
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

const LeftSideBar = ({ open, onOpen, onClose }) => {
  const classes = useStyles();
  return (
    <SwipeableDrawer
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
    >
      <div className={classes.list}>blabla</div>
    </SwipeableDrawer>
  );
};

export default LeftSideBar;
