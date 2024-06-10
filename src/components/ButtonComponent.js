import React from "react";
import style from "./buttonComponent.module.css";

const ButtonComponent = ({ increment }) => {
  return (
    <button onClick={increment} type="button" className={style.button}>
      +
    </button>
  );
};
export default ButtonComponent;
