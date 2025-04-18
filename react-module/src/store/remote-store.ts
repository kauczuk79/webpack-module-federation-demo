import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const federatedSlices = {
  counter: import("RootApplication/CounterSlice").then((module) => {
    return module.default.reducer;
  }),
};

export const Store = configureStore({
  reducer: combineReducers({
    ...federatedSlices,
  }),
  devTools: true,
});