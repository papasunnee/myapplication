import React, { useContext } from "react";
import { UserContext } from "../pages/UseEffect";

const ComponentD = () => {
  const user = useContext(UserContext);

  return (
    <div>
      ComponentD
      <p>User Name is {user.name}</p>
      <p>User Gender is {user.gender}</p>
      <p>User Gender is {user.complextion}</p>
    </div>
  );
};

export default ComponentD;
