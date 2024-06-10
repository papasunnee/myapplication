import React, { useEffect, useState } from "react";

const Hooks = () => {
  const [color, setColor] = useState("Red");
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1984",
    color: "red",
  });

  useEffect(() => {
    console.log("...rendering");
    setCalculation(() => count * 2);
    // setTimeout(() => {
    //   console.log("inside set timeout");
    //   setCount((c) => c + 1);
    // }, 1000);
  }, [count]);

  return (
    <div>
      {/* <h1>Hooks Section</h1>
      <h2>My Favourite Color is {color}</h2>
      <button
        style={{
          backgroundColor: "blue",
          color: "#fff",
          padding: "5px 10px",
          marginRight: "10px",
        }}
        onClick={() => setColor("Blue")}
      >
        Blue
      </button>
      <button
        style={{
          backgroundColor: "green",
          color: "#fff",
          padding: "5px 10px",
          marginRight: "10px",
        }}
        onClick={() => setColor("Green")}
      >
        Green
      </button>
      <button
        style={{
          backgroundColor: "yellow",
          color: "#000",
          padding: "5px 10px",
          marginRight: "10px",
        }}
        onClick={() => setColor("Yellow")}
      >
        Yellow
      </button>

      <div>
        <h1>My car brand is {car.brand}</h1>
        <h1>My car model is {car.model}</h1>
        <h1>My car color is {car.color}</h1>

        <button
          style={{
            backgroundColor: "blue",
            color: "#fff",
            padding: "5px 10px",
            marginRight: "10px",
          }}
          onClick={() => {
            setCar((prevValue) => {
              return { ...prevValue, color: "blue" };
            });
          }}
        >
          Update Car Color to blue
        </button>
      </div> */}

      <div>
        <h1>Use Effect Demo</h1>
        <button
          style={{
            backgroundColor: "blue",
            color: "#fff",
            padding: "5px 10px",
            marginRight: "10px",
          }}
          onClick={() => {
            setCount((c) => c + 1);
          }}
        >
          +
        </button>
        <p>Calculation {calculation} </p>
        <p>Count {count} </p>
      </div>
    </div>
  );
};

export default Hooks;
