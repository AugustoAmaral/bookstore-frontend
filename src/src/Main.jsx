import React from "react";
import TopBar from "./components/common/TopBar";
import { makeStyles } from "@material-ui/core/styles";

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
  const classes = useStyles();
  return (
    <>
      <TopBar user={props.user} />
      <div className={classes.root}>
        <Component {...props} />
      </div>
    </>
  );
};

export default Main;
