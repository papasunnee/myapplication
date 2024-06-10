import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Navbar";
import NavbarClassComponent from "./components/NavbarClassComponent";
import ListOfCars from "./components/ListOfCars";
import Forms from "./components/Forms";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Navbar bgColor="red" />
    <ListOfCars />
    <Forms />
    {/*    
    <NavbarClassComponent />
    <Navbar bgColor="green" animal="goat" /> */}
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
