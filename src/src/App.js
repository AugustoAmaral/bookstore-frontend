import React from "react";
import Routes from "./control/Routes";
import User from "./control/user";

const App = () => {
  return (
    <>
      {" "}
      <Routes user={User} />
    </>
  );
};

export default App;
