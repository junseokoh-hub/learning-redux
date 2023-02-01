import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store/slices/carSlice";

const CarList = () => {
  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return {
      cars: filteredCars,
      name: form.name,
    };
  });
  const dispatch = useDispatch();

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
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
    <ul className="car-list">
      {renderedCars}
      <hr />
    </ul>
  );
};

export default CarList;
