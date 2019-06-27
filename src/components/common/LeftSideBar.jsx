import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";

import {
  withStyles,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer
} from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  drawerdiv: {
    width: 250,
    height: "100%",
    padding: theme.spacing(2),
    display: "flex",
    "flex-direction": "column",
    justifyContent: "space-between"
  },
  listbuttom: {
    margin: theme.spacing(1),
    "margin-left": 0,
    height: theme.spacing(5),
    "border-radius": theme.spacing(1)
  }
});

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

class LeftSideBar extends Component {
  state = {
    activeRoute: null
  };

  handleRouteSelect = index => {
    this.setState({ activeRoute: index });
    this.props.onClose();
  };

  render() {
    const {
      classes,
      open,
      onOpen,
      onClose,
      location: { pathname },
      menu,
      t
    } = this.props;
    return (
      <SwipeableDrawer
        open={open}
        onOpen={onOpen}
        onClose={onClose}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        <div className={classes.drawerdiv}>
          <List>
            {menu.map((item, i) => (
              <Link key={i} to={item[1]} style={{ textDecoration: "none" }}>
                <ListItem
                  alignItems="center"
                  className={classes.listbuttom}
                  button
                  selected={pathname === item[1]}
                  onClick={e => this.handleRouteSelect(i)}
                  key={i}
                  id={"buttonLSB" + item[1].replace("/", "")}
                >
                  <ListItemText>{t(item[0])}</ListItemText>
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </SwipeableDrawer>
    );
  }
}

export default withTranslation()(withRouter(withStyles(styles)(LeftSideBar)));
