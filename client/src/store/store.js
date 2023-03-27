import { configureStore } from "@reduxjs/toolkit";
import { employeeReducer } from "../reducers/employeeReducer";
import { assetReducer } from "../reducers/assetReducer";
import { applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

export const store = configureStore(
  {
    reducers: {
      employeesSlice: employeeReducer,
      assetsSlice: assetReducer,
    },
  },
  applyMiddleware(thunk)
);
