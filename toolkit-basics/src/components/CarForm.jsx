import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addCar } from "../store/slices/carSlice";
import { changeCost, changeName } from "../store/slices/formSlice";

const CarForm = () => {
  const { name, cost } = useSelector((state) => state.form, shallowEqual);
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };

  const handleCostChange = (e) => {
    const carCost = parseInt(e.target.value);
    dispatch(changeCost(carCost));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
              type="text"
            />
          </div>

          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
              type="number"
            />
          </div>

          <div className="field">
            <button className="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
