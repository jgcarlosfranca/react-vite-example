import { combineReducers } from "@reduxjs/toolkit";
import sidebarBehaviorSlice from "../Slices/normalSlice";

import { apiSlice } from "../api";

const rootReducer = combineReducers({
  sidebarBehaviorSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;
