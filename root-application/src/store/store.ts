import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterReducer";
import { useDispatch } from "react-redux";

const Store = configureStore({
  reducer: combineReducers({
    counter: counterSlice.reducer,
  }),
  devTools: true
});

export { Store };
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();