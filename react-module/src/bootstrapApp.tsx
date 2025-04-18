import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const root = ReactDom.createRoot(document.getElementById("root")!);
export const federatedSlices = {
  counter: import("RootApplication/CounterSlice").then((module) => {
    return module.default.reducer;
  }),
};

const Store = configureStore({
  reducer: combineReducers({
    ...federatedSlices,
  }),
  devTools: true,
});

root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
