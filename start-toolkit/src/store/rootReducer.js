import { combineReducers } from "@reduxjs/toolkit";
import movieSlice from "./slices/movieSlice";
import songSlice from "./slices/songSlice";

const rootReducer = combineReducers({
  songs: songSlice,
  movies: movieSlice,
});

export default rootReducer;
