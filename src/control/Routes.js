import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignIn from "../components/authentication/SignIn";
import Main from "../Main";
import Home from "../components/Home";

export const MENU = [
  ["mainPage", "/"],
  ["categories", "/categories"],
  ["authors", "/authors"]
];

const PrivateRoute = ({ component, user, ...props }) => (
  <Route
    {...props}
    render={props =>
      user.authenticated() ? (
        <Main component={component} {...props} user={user} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const Routes = ({ user }) => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/login"
        render={() =>
          user.authenticated() ? <Redirect to="/" /> : <SignIn user={user} />
        }
      />
      <PrivateRoute exact path="/" component={Home} user={user} />
      <Route render={() => <p>Not Found :(</p>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
