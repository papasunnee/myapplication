import { memo } from "react";

const Todos = ({ todos }) => {
  const headingStyle = {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
    margin: "10px auto",
  };
  console.log("child rendering");
  return (
    <>
      <h2 style={headingStyle}>My Todos</h2>
      {todos.map((todo, index) => (
        <p
          key={index}
          style={{
            backgroundColor: "red",
            marginBottom: "5px",
            padding: "5px",
          }}
        >
          {todo}
        </p>
      ))}
    </>
  );
};

export default memo(Todos);
