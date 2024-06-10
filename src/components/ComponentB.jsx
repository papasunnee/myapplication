import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import ComponentD from "./ComponentD";
import { UserContext } from "../pages/UseEffect";

const ComponentB = () => {
  const user = useContext(UserContext);

  return (
    <div>
      ComponentB
      <ComponentC />
    </div>
  );
};

export default ComponentB;
