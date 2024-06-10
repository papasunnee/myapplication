function DemoConfig() {
  let [, , , cow] = ["Mustang", "f-150", "expedition", "benz", "toyota"];
  //   let car = vehicles[0];
  //   let truck = vehicles[1];
  //   let suv = vehicles[2];
  let { divide } = calculate(10, 4);
  myVehicle(vehicleOne);
  return (
    <div>
      <h1>Destructuring Demo</h1>
      <hr />
      <ul>
        <li>{cow}</li>
        <li>{divide}</li>
        <li>{5 + 5}</li>
      </ul>
      <p>
        lorem lkd;al kd;lask das;lk das;ldk as;ldkas;l das;ldk as;lkd
        sldldskfkljgkjhdfksj fkjdh fjhfkjdsfh jdshf iru hisu sdfkjds fkjsdh
      </p>
    </div>
  );
}

function Login() {
  return (
    <>
      <button>Login</button>
      <p>loremknskl djsk fdskjfjs fdjk</p>
      <input type="text" />
    </>
  );
}

function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;
  return { add, subtract, multiply, divide };
}

const vehicleOne = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
  registration: {
    city: "Houston",
    state: "Texas",
    country: "USA",
  },
};
function myVehicle({ brand, type, color, registration: { city, state } }) {
  const message = `My ${type} is a ${color} ${brand} ${city} ${state}`;
  console.log(message);
}

const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;
console.log(rest);

const myVehicle2 = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updatemyVehicle = {
  ...myVehicle2,
  type: "car",
  year: 2021,
  color: "blue",
};
console.log(updatemyVehicle);

export default DemoConfig;
