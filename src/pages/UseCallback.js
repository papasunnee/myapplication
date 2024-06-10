import React, { useCallback, useEffect, useState } from "react";
import Todos2 from "../components/Todos2";
import useFetch from "../hooks/useFetch";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>
      <h1 className="text-3xl font-semibold">UseCallback Section</h1>
      <Todos2 todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button
          onClick={increment}
          className="px-4 py-2  bg-teal-800 text-white ml-2 rounded-lg shadow-lg"
        >
          +
        </button>
      </div>

      <hr className="my-5" />
      <h1 className="text-4xl font-semibold">Custom Hook</h1>
      {data &&
        data.map((item) => {
          return (
            <p
              className="mb-2 capitalize font-semibold hover:underline cursor-pointer"
              key={item.id}
            >
              {item.title}
            </p>
          );
        })}
    </div>
  );
};

export default UseCallback;
