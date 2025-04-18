import { createSlice } from "@reduxjs/toolkit";


export interface LayoutState {
  counter: number;
}

const initialState: LayoutState = {
  counter: 0
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter = state.counter + 1;
    },
    decrement: (state) => {
      state.counter = state.counter - 1;
    }
  },
});

export const { increment, decrement } = counterSlice.actions;

export { counterSlice };

export default counterSlice;
