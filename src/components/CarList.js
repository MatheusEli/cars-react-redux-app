import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";
function CarList() {
  const dispatch = useDispatch();
  const {cars, name} = useSelector(({ form, cars: { data, searchTerm } }) => {
    const filteredCars =  data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {cars: filteredCars, name: form.name}
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    // DECIDE IF THIS CAR SHOULD BE BOLD
    // state.form.name
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div className={`panel ${bold && 'bold'}`} key={car.id}>
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
