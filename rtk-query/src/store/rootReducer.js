import { combineReducers } from "@reduxjs/toolkit";
import { albumsApi } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApi";
import usersSlice from "./slices/usersSlice";

const rootReducer = combineReducers({
  users: usersSlice,
  [albumsApi.reducerPath]: albumsApi.reducer,
  [photosApi.reducerPath]: photosApi.reducer,
});

export default rootReducer;
