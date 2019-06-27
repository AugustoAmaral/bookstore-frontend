import React, { useState } from "react";
import TopBar from "./components/common/TopBar";
import LeftSideBar from "./components/common/LeftSideBar";
import { makeStyles } from "@material-ui/core/styles";
import { MENU } from "./control/Routes";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    ...theme.mixins.gutters(),
    marginTop: 56 + 25,
    "@media (min-width:0px) and (orientation: landscape)": {
      marginTop: 48 + 25
    },
    "@media (min-width:600px)": {
      marginTop: 64 + 25
    },
    "@media print": {
      marginTop: 16
    }
  }
}));

const Main = ({ component, ...props }) => {
  const Component = component;
  const [isMenuOpen, openMenu] = useState(false);
  const classes = useStyles();

  const handleMenu = () => {
    openMenu(!isMenuOpen);
  };

  return (
    <>
      <TopBar openMenu={() => handleMenu()} user={props.user} />
      <LeftSideBar
        menu={MENU}
        open={isMenuOpen}
        onClose={handleMenu}
        onOpen={handleMenu}
      />
      <div className={classes.root}>
        <Component {...props} />
      </div>
    </>
  );
};

export default Main;
