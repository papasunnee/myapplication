import React, { useReducer } from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const initialState = [
    {
      id: 1,
      title: "Todo 1",
      complete: false,
    },
    {
      id: 2,
      title: "Todo 2",
      complete: false,
    },
  ];

  const reducer = (state, action) => {
    switch (action.type) {
      case "COMPLETE":
        return state.map((todo) => {
          if (todo.id == action.id) {
            return { ...todo, complete: !todo.complete };
          }
          return todo;
        });
      default:
        return state;
    }
  };
  const [todos, dispatch] = useReducer(reducer, initialState);
  const handleChange = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };
  return (
    <div>
      ComponentA
      <p>Use Reducer Demo</p>
      {todos.map((todo, index) => {
        return (
          <div>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleChange(todo)}
              />
              {todo.title}
            </label>
          </div>
        );
      })}
      <ComponentB />
    </div>
  );
};

export default ComponentA;
