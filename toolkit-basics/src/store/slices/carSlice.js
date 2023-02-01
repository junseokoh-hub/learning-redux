import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  data: [],
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      const updated = state.data.filter((car) => car.id !== action.payload);
      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carSlice.actions;

export default carSlice.reducer;
