import React, { createContext, useEffect, useState } from "react";
import ComponentA from "../components/ComponentA";

export const UserContext = createContext();

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  const [user, setUser] = useState({
    name: "Sunday",
    gender: "Male",
    complextion: "dark",
  });
  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>UseEffect Section</h1>
        <h1>I have rendered {count} times</h1>
        <ComponentA />
      </div>
    </UserContext.Provider>
  );
};

export default UseEffect;
