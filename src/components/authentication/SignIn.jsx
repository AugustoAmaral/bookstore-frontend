import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
import SignInForm from "./SignInForm";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import { withTranslation } from "react-i18next";

const styles = theme => ({
  paper: {
    margin: theme.spacing(6) + "px " + theme.spacing(1) + "px ",
    padding: theme.spacing(2)
  },
  submit: {
    marginTop: theme.spacing(3)
  },
  lostPassword: {
    marginTop: theme.spacing(1)
  }
});

class SignIn extends React.Component {
  state = {
    signForm: new FormData(),
    signInInfo: { username: null, password: null }
  };

  handleSubmit = formData => {
    this.setState({
      signInInfo: {
        username: this.state.signForm.get("username"),
        password: this.state.signForm.get("password")
      }
    });
    this.props.user.authenticate({...this.state.signInInfo});
  };

  render() {
    const { t, classes, user } = this.props;
    return (
      <Fragment>
      {user.authenticated() && <Redirect to="/" />}
        <Grid container justify="center">
          <Grid item xs={12} sm={5} lg={3}>
            <Paper className={classes.paper}>
              <SignInForm
                id="signIn"
                signForm={this.state.signForm}
                onSubmit={formData => this.handleSubmit(formData)}
              />
              <Button
                className={classes.submit}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                form="signIn"
              >
                {t("signIn")}
              </Button>
              <Button
                size="small"
                className={classes.lostPassword}
                onClick={() => console.log("lostPassword")}
              >
                {t("lostPassword")}
              </Button>
              <br />
              <Button
                size="small"
                className={classes.lostPassword}
                onClick={() => console.log("signUp")}
              >
                {t("signUp")}
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withTranslation()(withStyles(styles)(SignIn));
