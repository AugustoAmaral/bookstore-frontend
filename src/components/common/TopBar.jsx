import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles, fade } from "@material-ui/core/styles";
import {
  Toolbar,
  IconButton,
  Typography,
  Button,
  Badge
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useTranslation } from "react-i18next";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  cartButton: {
    marginRight: 8
  },
  toolbar: {
    marginRight: -12,
    alignItems: "center",
    justifyContent: "space-between",
    "@media print": {
      display: "none"
    }
  },
  topdiv: {
    display: "flex",
    alignItems: "center"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  }
}));

const TopBar = ({ user, buttons, openMenu }) => {
  let Buttons = buttons;
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <div className={classes.topdiv}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={() => openMenu()}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.topdiv} variant="h6" color="inherit">
            {t("main")}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={t("search") + "..."}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": t("search") }}
            />
          </div>
        </div>
        <div>
          {Buttons && <Buttons />}
          <IconButton className={classes.cartButton} color="inherit">
            <Badge badgeContent={1} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => user.logout()}
          >
            {t("logoff")}
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
