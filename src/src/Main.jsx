import React from "react";

const Main = ({ component, ...props }) => {
  const Component = component;
  return (
    <div>
      <Component {...props} />
    </div>
  );
};

export default Main;
