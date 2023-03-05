import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";
function CarList() {
  const dispatch = useDispatch();
  const carList = useSelector(({ cars: { data, searchTerm } }) => {
    return data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = carList.map((car) => {
    return (
      <div className="panel" key={car.id}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });
  return (
    <div>
      <div>{renderedCars}</div>
      <hr />
    </div>
  );
}

export default CarList;
