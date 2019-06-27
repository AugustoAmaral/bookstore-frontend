import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import SignInForm from "./SignInForm";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  paper: {
    margin: theme.spacing(6) + "px " + theme.spacing(1) + "px ",
    padding: theme.spacing(2)
  }
});

class SignIn extends React.Component {
  state = {
    authInfo: new FormData(),
    error: false,
    message: null,
    loading: false
  };

  closeErrorMessage = () => {
    this.setState({ error: false });
  };

  render() {
    return (
      <Fragment>
        <Grid container justify="center">
          <Grid item xs={12} sm={5} lg={3}>
            <Paper className={this.props.classes.paper}>
              <SignInForm
                id="signIn"
                formState={this.state.authInfo}
                onSubmit={this.handleSubmit}
                wrongPassword={this.state.wrong_pass}
              />
            </Paper>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(SignIn);
