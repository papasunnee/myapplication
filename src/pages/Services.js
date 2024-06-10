import React, { useState } from "react";
import Todos from "../components/Todos";
import ButtonComponent from "../components/ButtonComponent";

const Services = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2", "todo 3"]);
  const increment = () => {
    setCount((c) => c + 1);
  };
  return (
    <div>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <ButtonComponent increment={increment} />
      </div>
    </div>
  );
};

export default Services;
