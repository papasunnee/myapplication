function ListOfCars() {
  const CarsArray = ["Toyota", "Benz", "BMW", "Bugatti", "Range Rover"];
  return (
    <ul>
      {CarsArray.map((item, index) => {
        console.log(`${item} has index ${index}`);
        return <Car key={index} name={item} />;
      })}
    </ul>
  );
}

function Car({ name }) {
  return <li>{name}</li>;
}

export default ListOfCars;
