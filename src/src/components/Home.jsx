import React from "react";
import Button from "@material-ui/core/Button";
import { cleanAndReload } from "../functions/navigatorFunctions";

const Home = () => {
  return (
    <>
      {" "}
      <div>Hello world!</div>{" "}
      <Button onClick={() => cleanAndReload()}>Logout</Button>{" "}
    </>
  );
};

export default Home;
