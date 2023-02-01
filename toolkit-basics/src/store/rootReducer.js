import { combineReducers } from "@reduxjs/toolkit";
import carSlice from "./slices/carSlice";
import formSlice from "./slices/formSlice";

const rootReducer = combineReducers({
  form: formSlice,
  cars: carSlice,
});

export default rootReducer;
