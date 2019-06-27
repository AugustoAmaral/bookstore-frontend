import React, { Fragment } from "react";
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
    console.log(this.state.signInInfo);
  };

  render() {
    const { t, classes } = this.props;
    return (
      <Fragment>
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
                {t("sign_in")}
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withTranslation()(withStyles(styles)(SignIn));
