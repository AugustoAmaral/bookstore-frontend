import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import SignInForm from "./SignInForm";

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
            <SignInForm
              id="signIn"
              formState={this.state.authInfo}
              onSubmit={this.handleSubmit}
              wrongPassword={this.state.wrong_pass}
            />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default SignIn;
