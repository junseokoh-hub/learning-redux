import { combineReducers } from "@reduxjs/toolkit";
import { albumsApi } from "./apis/albumsApi";
import usersSlice from "./slices/usersSlice";

const rootReducer = combineReducers({
  users: usersSlice,
  [albumsApi.reducerPath]: albumsApi.reducer,
});

export default rootReducer;
