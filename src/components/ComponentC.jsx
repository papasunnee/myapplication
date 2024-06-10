import React, { useEffect, useRef, useState } from "react";
import ComponentD from "./ComponentD";

const ComponentC = () => {
  // const [name, setName] = useState("");
  const count = useRef(0);
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };
  useEffect(() => {
    console.log("...rendering");
    count.current = count.current + 1;
    inputRef.current.focus();
  });
  return (
    <div>
      ComponentC
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name=""
          id=""
          // value={name}
          ref={inputRef}
          // onChange={(e) => setName(e.target.value)}
          className="border border-red-500 p-2 ml-1"
        />
        <button className="border-1 bg-amber-600 text-white px-4 py-2">
          Submit
        </button>
      </form>
      <h1>Render Count : {count.current}</h1>
      <ComponentD />
    </div>
  );
};

export default ComponentC;
