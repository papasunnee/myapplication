import React from "react";
import "./SayHello.css";

const names = ["Adams", "Jude", "Simon", "Sunday"];

function SayHello() {
  return names
    .filter((name) => name.includes("u"))
    .map((item, key) => <h1 key={key}>Hello {item}</h1>);
}

export const SayName = function () {
  return <h3>My name is Richard</h3>;
};
export const SayName2 = () => {
  return (
    <>
      <h3>My name is Diamond</h3>
      <p>lorem</p>
    </>
  );
};
function SayName3() {
  return <h3>My name is Olive</h3>;
}

class Car {
  constructor(name) {
    this.brand = name;
  }
  present() {
    return `I have a  ${this.brand}`;
  }
}
class Model extends React.Component {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }
  show() {
    return `I have a ${this.brand} `;
  }
  present() {
    return "this is from model class";
  }
  render() {
    return (
      <div>
        <h2>Lojik</h2>
        <p>lorem aklsdlsjkl asdklj skldj alsdjlas djklasj dlk</p>
      </div>
    );
  }
}

const myCar = new Model("Toyota");
console.log(myCar.present());
myCar.present();

function Car2(name) {}

export default SayHello;
export const SN3 = SayName3;
export const MyModel = Model;
